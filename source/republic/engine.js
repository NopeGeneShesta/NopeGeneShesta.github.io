(function () {
  "use strict";
  var B = window.BOOK;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  var TABS = [
    { id: "primer", label: "Primer", key: "p", has: function () { return true; } },
    { id: "terms", label: "Terms", key: "t", has: function (c) { return c.termGroups && c.termGroups.length; } },
    { id: "timeline", label: "Timeline", key: "l", has: function (c) { return c.events && c.events.length; } },
    { id: "factions", label: "Factions", key: "f", has: function (c) { return !!c.factions; } },
    { id: "map", label: "Map", key: "m", has: function (c) { return !!c.map; } },
    { id: "cast", label: "Cast", key: "c", has: function (c) { return c.cast && c.cast.length; } },
    { id: "recall", label: "Recall", key: "r", has: function (c) { return c.recall && c.recall.length; } }
  ];
  var HINTS = {
    primer: [["/", "search"], ["P T L F M C R", "tabs"]],
    terms: [["/", "search"], ["P T L F M C R", "tabs"]],
    timeline: [["E", "open or close all events"], ["/", "search"]],
    factions: [["1 2 3", "phase"], ["↑ ↓", "next group"], ["/", "search"]],
    map: [["1 2 3", "view"], ["/", "search"]],
    cast: [["/", "search"], ["P T L F M C R", "tabs"]],
    recall: [["Space", "show answer"], ["↑ ↓", "move"], ["/", "search"]]
  };

  var chIdx = Math.max(0, Math.min(B.chapters.length - 1, +(store("rc-ch") || (B.chapters.length - 1))));
  var C, tabsOn = [], current = "primer";
  var registry = {}, linkRx = null, linkMap = {};
  var searchIdx = [];

  /* ---------- Shell ---------- */
  var topbar = document.querySelector(".topbar");
  function syncBar() { document.documentElement.style.setProperty("--tbh", topbar.offsetHeight + "px"); }
  window.addEventListener("resize", syncBar);

  function renderHints() {
    var keys = tabsOn.map(function (t) { return t.key.toUpperCase(); }).join(" ");
    $("hints").innerHTML = (HINTS[current] || []).map(function (h) {
      var k = h[0] === "P T L F M C R" ? keys : h[0];
      if (h[0] === "1 2 3" && current === "map" && C.map) k = C.map.views.map(function (v, i) { return String(i + 1); }).join(" ");
      return "<span>" + k.split(" ").map(function (x) { return "<kbd>" + esc(x) + "</kbd>"; }).join(" ") + " " + esc(h[1]) + "</span>";
    }).join("") + (askReady ? "<span><kbd>A</kbd> ask Claude</span>" : "");
  }

  function showTab(id, focus) {
    if (!tabsOn.some(function (t) { return t.id === id; })) id = "primer";
    current = id;
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      var on = t.dataset.tab === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    tabsOn.forEach(function (t) { var s = $("sec-" + t.id); if (s) s.hidden = t.id !== id; });
    document.body.classList.toggle("wide", id === "factions" || (id === "map" && !!(C.map && C.map.view && window.US_STATES)));
    store("rc-tab", id);
    renderHints(); syncBar(); hidePop();
    if (id === "timeline") buildTimeline();
    if (id === "map") layoutMap();
    window.scrollTo(0, 0);
  }

  /* ---------- Chapter render ---------- */
  function renderChapter() {
    C = B.chapters[chIdx];
    store("rc-ch", String(chIdx));
    $("kicker").textContent = [B.author, B.title, C.part, "Ch. " + C.num, C.pages].filter(Boolean).join(" · ");
    $("chTitle").textContent = C.title;
    document.title = B.title.replace(/^The /, "") + " Companion";
    var sel = $("chSel");
    if (B.chapters.length > 1) {
      sel.hidden = false;
      sel.innerHTML = B.chapters.map(function (c, i) { return '<option value="' + i + '"' + (i === chIdx ? " selected" : "") + ">Ch. " + c.num + " · " + esc(c.title) + "</option>"; }).join("");
    }
    tabsOn = TABS.filter(function (t) { return t.has(C); });
    $("tabs").innerHTML = tabsOn.map(function (t) {
      return '<button class="tab" role="tab" data-tab="' + t.id + '" aria-controls="sec-' + t.id + '">' + t.label + ' <span class="k">' + t.key.toUpperCase() + "</span></button>";
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t, i, all) {
      t.addEventListener("click", function () { showTab(t.dataset.tab); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault(); e.stopPropagation();
          var n = (i + (e.key === "ArrowRight" ? 1 : -1) + all.length) % all.length;
          showTab(all[n].dataset.tab, true);
        }
      });
    });

    var main = $("main");
    main.innerHTML = tabsOn.map(function (t) { return '<section class="panel" id="sec-' + t.id + '" role="tabpanel" hidden></section>'; }).join("");
    timelineBuilt = false;
    buildRegistry();
    renderPrimer(); renderTerms(); renderTimelineShell(); renderFactions(); renderMap(); renderCast(); renderRecall();
    linkAll(main);
    buildSearch();
    var start = store("rc-tab") || "primer";
    var h = (location.hash || "").replace("#", "");
    if (TABS.some(function (t) { return t.id === h; })) start = h;
    showTab(start);
  }
  $("chSel").addEventListener("change", function (e) { chIdx = +e.target.value; renderChapter(); });

  /* ---------- Registry of terms and people (cumulative up to this chapter) ---------- */
  function buildRegistry() {
    registry = {}; linkMap = {};
    var aliases = [];
    for (var i = 0; i <= chIdx; i++) {
      var c = B.chapters[i];
      (c.termGroups || []).forEach(function (g) {
        g.terms.forEach(function (t) {
          registry["t:" + t.id] = { kind: "term", id: t.id, name: t.name, def: t.def, bullets: t.bullets, ch: i };
          (t.aliases || []).forEach(function (a) { linkMap[a] = "t:" + t.id; aliases.push(a); });
        });
      });
      (c.cast || []).forEach(function (g) {
        g[1].forEach(function (p) {
          registry["p:" + p.id] = { kind: "person", id: p.id, name: p.name, role: p.role, watch: p.watch, ch: i };
          (p.aliases || []).forEach(function (a) { linkMap[a] = "p:" + p.id; aliases.push(a); });
        });
      });
    }
    aliases.sort(function (a, b) { return b.length - a.length; });
    linkRx = aliases.length ? new RegExp("(?<![\\w])(" + aliases.map(function (a) { return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(?![\\w])", "g") : null;
  }

  function linkAll(root) {
    if (!linkRx) return;
    Array.prototype.forEach.call(root.querySelectorAll(".lk"), function (box) {
      var self = box.dataset.self || "", scope = box.closest(".card, .pnl, .year, .pop") || box;
      var used = scope.__used || (scope.__used = {});
      var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) { return n.parentNode.closest(".lt, button, summary, dt, h4") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
      });
      var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        var text = node.nodeValue, last = 0, m, frag = null;
        linkRx.lastIndex = 0;
        while ((m = linkRx.exec(text))) {
          var key = linkMap[m[1]];
          if (!key || key === self || used[key]) continue;
          used[key] = true;
          frag = frag || document.createDocumentFragment();
          frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          var b = document.createElement("button");
          b.className = "lt"; b.type = "button"; b.dataset.ref = key; b.textContent = m[1];
          frag.appendChild(b);
          last = m.index + m[1].length;
        }
        if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
      });
    });
  }

  /* ---------- Popover ---------- */
  var pop = $("pop"), popFor = null;
  function hidePop() { pop.hidden = true; popFor = null; }
  function showPop(btn) {
    var r = registry[btn.dataset.ref]; if (!r) return;
    if (popFor === btn) { hidePop(); return; }
    popFor = btn;
    var html = "<h4>" + esc(r.name) + "</h4>";
    if (r.kind === "term") {
      html += '<p class="read">' + esc(r.def) + "</p>";
      if (r.bullets) html += '<ul class="plain read">' + r.bullets.map(function (b) { return "<li><strong>" + esc(b[0]) + "</strong> " + esc(b[1]) + "</li>"; }).join("") + "</ul>";
      html += '<button class="go" data-go="' + esc(btn.dataset.ref) + '">Open in Terms</button>';
    } else {
      html += '<p class="muted">' + esc(r.role) + '</p><p class="read"><span class="role">Watch</span> ' + esc(r.watch) + "</p>";
      html += '<button class="go" data-go="' + esc(btn.dataset.ref) + '">Open in Cast</button>';
    }
    pop.innerHTML = html; pop.hidden = false;
    var rc = btn.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    var left = Math.min(Math.max(16, rc.left + window.scrollX), window.scrollX + document.documentElement.clientWidth - pw - 16);
    var top = rc.bottom + window.scrollY + 6;
    if (rc.bottom + ph + 12 > window.innerHeight && rc.top - ph - 6 > 0) top = rc.top + window.scrollY - ph - 6;
    pop.style.left = left + "px"; pop.style.top = top + "px";
  }
  document.addEventListener("click", function (e) {
    var lt = e.target.closest(".lt");
    if (lt) { e.preventDefault(); e.stopPropagation(); showPop(lt); return; }
    var go = e.target.closest(".go");
    if (go) { var ref = go.dataset.go; hidePop(); goTo(ref.charAt(0) === "t" ? "terms" : "cast", (ref.charAt(0) === "t" ? "term-" : "person-") + ref.slice(2)); return; }
    if (!e.target.closest("#pop")) hidePop();
    if (!e.target.closest("#results, .search")) $("results").hidden = true;
    if (!e.target.closest("#askPanel, #askBtn")) closeAsk();
  });

  function goTo(tab, elId, after) {
    var r = registry[(tab === "terms" ? "t:" : "p:") + elId.replace(/^(term|person)-/, "")];
    if (r && r.ch !== chIdx && (tab === "terms" || tab === "cast")) { chIdx = r.ch; renderChapter(); }
    showTab(tab);
    if (after) after();
    var el = $(elId); if (!el) return;
    el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }

  /* ---------- Primer ---------- */
  function renderPrimer() {
    var s = $("sec-primer"), h = "";
    if (C.previously) {
      h += '<div class="card"><div class="chead"><span class="role">Previously · ' + esc(C.previously.label) + '</span></div><ul class="plain read lk">' +
        C.previously.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
    }
    h += '<div class="card"><div class="chead"><span class="role">The chapter\'s question</span></div><h3>' + esc(C.question) + "</h3></div>";
    if (C.before || C.opens) {
      h += '<div class="card"><div class="chead"><span class="role">Where we pick up</span></div><div class="panels">' +
        (C.before ? '<div class="pnl orig"><div class="plabel">' + esc(C.before.label) + "</div>" + C.before.paras.map(function (p) { return '<p class="read lk">' + esc(p) + "</p>"; }).join("") + "</div>" : "") +
        (C.opens ? '<div class="pnl prop"><div class="plabel">' + esc(C.opens.label) + "</div>" + C.opens.paras.map(function (p) { return '<p class="read lk">' + esc(p) + "</p>"; }).join("") + "</div>" : "") +
        "</div></div>";
    }
    if (C.watch) {
      h += '<h2 class="sec">' + (C.watch.length === 6 ? "Six" : C.watch.length) + " things to watch for</h2>";
      h += C.watch.map(function (w, i) { return '<div class="card num" id="watch-' + i + '"><span class="stripe">' + (i + 1) + '</span><p class="read lk"><strong>' + esc(w[0]) + "</strong> " + esc(w[1]) + "</p></div>"; }).join("");
    }
    h += '<p class="muted small">Keep the Terms tab open while you read. Dotted words anywhere on the page show their definition when tapped.</p>';
    if (C.next) {
      h += '<details class="card more"><summary><span class="role">What came next · for after the chapter</span><span class="tog"><span class="o">Show</span><span class="c">Hide</span></span></summary><div class="body">' +
        C.next.map(function (n) { return '<p class="read lk"><strong>' + esc(n[0]) + "</strong> " + esc(n[1]) + "</p>"; }).join("") + "</div></details>";
    }
    s.innerHTML = h;
  }

  /* ---------- Terms ---------- */
  function renderTerms() {
    var s = $("sec-terms"); if (!s) return;
    s.innerHTML = C.termGroups.map(function (g) {
      return '<div class="card" id="group-' + g.id + '"><div class="chead"><span class="role">' + esc(g.name) + "</span></div>" +
        (g.intro || []).map(function (p) { return '<p class="read lk">' + esc(p) + "</p>"; }).join("") +
        '<dl class="terms' + (g.id === "numbers" ? " nums" : "") + '">' + g.terms.map(function (t) {
          return '<div id="term-' + t.id + '"><dt>' + esc(t.name) + '</dt><dd class="read lk" data-self="t:' + t.id + '">' + esc(t.def) +
            (t.bullets ? "<ul>" + t.bullets.map(function (b) { return "<li><strong>" + esc(b[0]) + "</strong> " + esc(b[1]) + "</li>"; }).join("") + "</ul>" : "") + "</dd></div>";
        }).join("") + "</dl></div>";
    }).join("");
  }

  /* ---------- Timeline ---------- */
  var timelineBuilt = false;
  function renderTimelineShell() {
    var s = $("sec-timeline"); if (!s) return;
    s.innerHTML = '<p class="muted">Columns are places. Boxes are years, sub-boxes are months, so everything in one row happened in the same month. Shaded columns show what was happening elsewhere in the country. Tap an event for details.</p>' +
      '<div class="scroller"><div class="inner"><div class="colhead"><div class="grid">' + "<div></div>" +
      C.lanes.map(function (l) { return '<div class="ch' + (l.ctx ? " ctx" : "") + '"><b>' + esc(l.name) + "</b><span>" + esc(l.sub) + "</span></div>"; }).join("") +
      '</div></div><div class="years" id="years"></div></div></div>';
  }
  function buildTimeline() {
    if (timelineBuilt || !C.events) return;
    timelineBuilt = true;
    var byYear = {};
    C.events.map(function (e, i) { return [e, i]; }).sort(function (a, b) { return a[0][1] < b[0][1] ? -1 : a[0][1] > b[0][1] ? 1 : 0; }).forEach(function (p) {
      var e = p[0], y = e[1].slice(0, 4), m = +e[1].slice(5, 7) - 1;
      byYear[y] = byYear[y] || {};
      if (!byYear[y][m]) { byYear[y][m] = {}; C.lanes.forEach(function (l) { byYear[y][m][l.id] = []; }); }
      byYear[y][m][e[0]].push(p);
    });
    var root = $("years"), html = "";
    Object.keys(byYear).sort().forEach(function (y) {
      html += '<section class="year"><div class="yhead"><h2>' + y + "</h2><p>" + esc((C.years || {})[y] || "") + "</p></div>";
      Object.keys(byYear[y]).map(Number).sort(function (a, b) { return a - b; }).forEach(function (m) {
        html += '<div class="month grid"><div class="mlabel">' + MONTHS[m] + "</div>";
        C.lanes.forEach(function (l) {
          html += '<div class="cell' + (l.ctx ? " ctx" : "") + '">' + byYear[y][m][l.id].map(function (p) {
            var e = p[0], day = e[4] ? "" : String(+e[1].slice(8, 10));
            return '<details class="ev" id="ev-' + p[1] + '"><summary><span class="day">' + day + '</span><span class="t">' + esc(e[2]) + '</span></summary><p class="lk">' + esc(e[3]) + "</p></details>";
          }).join("") + "</div>";
        });
        html += "</div>";
      });
      html += "</section>";
    });
    root.innerHTML = html;
    linkAll(root);
  }
  function toggleAllEvents() {
    var all = document.querySelectorAll("details.ev"), anyClosed = Array.prototype.some.call(all, function (d) { return !d.open; });
    Array.prototype.forEach.call(all, function (d) { d.open = anyClosed; });
  }

  /* ---------- Factions ---------- */
  var FX = null;
  function renderFactions() {
    var s = $("sec-factions"); if (!s) { FX = null; return; }
    var F = C.factions;
    s.innerHTML = '<div class="fx-grid"><div class="card flush"><div class="map-scroll"><svg id="fxmap" viewBox="0 0 760 530" role="img" aria-label="Faction relationship map"></svg></div>' +
      '<div class="keyline"><span>' + sw("ally") + "Allied</span><span>" + sw("uneasy") + "Uneasy or shifting</span><span>" + sw("opposed") + "Opposed</span><span>Tap a group to see its ties</span></div></div>" +
      '<div class="fx-side"><div class="card"><div class="chead"><span class="role" id="phaseRole"></span></div><div class="btns" id="phases"></div><p class="read lk" id="phaseNote"></p></div><div class="card" id="nodeCard"></div></div></div>';
    var svg = $("fxmap"), edgeLayer = document.createElementNS(NS, "g"), nodeLayer = document.createElementNS(NS, "g");
    svg.appendChild(edgeLayer); svg.appendChild(nodeLayer);
    FX = { F: F, svg: svg, edgeLayer: edgeLayer, nodeEls: {}, cur: {}, phase: 0, sel: F.order[0], anim: null, btns: [] };
    Object.keys(F.nodes).forEach(function (k) {
      var g = document.createElementNS(NS, "g"); g.setAttribute("class", "node"); g.setAttribute("tabindex", "0"); g.setAttribute("role", "button"); g.setAttribute("aria-label", F.nodes[k].name); g.id = "node-" + k;
      var w = F.nodes[k].name.length * 7.3 + 26, hgt = 36;
      var r = document.createElementNS(NS, "rect"); r.setAttribute("x", -w / 2); r.setAttribute("y", -hgt / 2); r.setAttribute("width", w); r.setAttribute("height", hgt); r.setAttribute("rx", 3);
      var t = document.createElementNS(NS, "text"); t.setAttribute("text-anchor", "middle"); t.setAttribute("dy", "4.5"); t.textContent = F.nodes[k].name;
      g.appendChild(r); g.appendChild(t); nodeLayer.appendChild(g);
      g.addEventListener("click", function () { pickNode(k); });
      g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickNode(k); } });
      FX.nodeEls[k] = g;
    });
    Object.keys(F.phases[0].pos).forEach(function (k) { FX.cur[k] = F.phases[0].pos[k].slice(); });
    F.phases.forEach(function (p, i) {
      var b = document.createElement("button"); b.className = "btn";
      b.innerHTML = esc(p.label) + ": " + esc(p.sub) + ' <span class="k">' + (i + 1) + "</span>";
      b.addEventListener("click", function () { setPhase(i); });
      $("phases").appendChild(b); FX.btns.push(b);
    });
    setPhase(0);
  }
  function sw(type) {
    return '<svg class="sw" viewBox="0 0 28 10"><line x1="1" y1="5" x2="28" y2="5" class="edge e-' + type + '"/>' +
      (type === "opposed" ? '<g class="xmark" transform="translate(14.5,5)"><line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5"/><line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5"/></g>' : "") + "</svg>";
  }
  function fxPlace() {
    Object.keys(FX.nodeEls).forEach(function (k) { FX.nodeEls[k].setAttribute("transform", "translate(" + FX.cur[k][0] + "," + FX.cur[k][1] + ")"); });
    Array.prototype.forEach.call(FX.edgeLayer.childNodes, function (l) {
      var a = FX.cur[l.dataset.a], b = FX.cur[l.dataset.b];
      if (l.tagName.toLowerCase() === "g") { l.setAttribute("transform", "translate(" + (a[0] + b[0]) / 2 + "," + (a[1] + b[1]) / 2 + ")"); return; }
      l.setAttribute("x1", a[0]); l.setAttribute("y1", a[1]); l.setAttribute("x2", b[0]); l.setAttribute("y2", b[1]);
    });
  }
  function fxEdges() {
    var ph = FX.F.phases[FX.phase];
    FX.edgeLayer.innerHTML = "";
    ph.edges.forEach(function (e) {
      var touches = e[0] === FX.sel || e[1] === FX.sel;
      var l = document.createElementNS(NS, "line");
      l.setAttribute("class", "edge e-" + e[2] + (touches ? "" : " dim"));
      l.dataset.a = e[0]; l.dataset.b = e[1];
      FX.edgeLayer.appendChild(l);
      if (e[2] === "opposed") {
        var g = document.createElementNS(NS, "g");
        g.setAttribute("class", "xmark" + (touches ? "" : " dim"));
        g.dataset.a = e[0]; g.dataset.b = e[1];
        g.innerHTML = '<line x1="-6" y1="-6" x2="6" y2="6"/><line x1="-6" y1="6" x2="6" y2="-6"/>';
        FX.edgeLayer.appendChild(g);
      }
    });
    Object.keys(FX.nodeEls).forEach(function (k) {
      FX.nodeEls[k].setAttribute("class", "node" + (k === FX.sel ? " sel" : "") + (ph.ghost.indexOf(k) > -1 ? " ghost" : ""));
    });
    fxPlace();
  }
  function fxCard() {
    var ph = FX.F.phases[FX.phase], n = FX.F.nodes[FX.sel];
    var rels = ph.edges.filter(function (e) { return e[0] === FX.sel || e[1] === FX.sel; });
    var html = '<div class="chead"><span class="role">' + esc(ph.label) + "</span></div><h3>" + esc(n.name) + '</h3><p class="read muted lk">' + esc(n.who) + "</p>";
    if (ph.ghost.indexOf(FX.sel) > -1) html += '<p class="read">Not yet a real force in this phase.</p>';
    else if (!rels.length) html += '<p class="read">No major ties in this phase.</p>';
    else html += '<ul class="rels">' + rels.map(function (e) {
      return "<li>" + sw(e[2]) + "<span><b>" + esc(FX.F.nodes[e[0] === FX.sel ? e[1] : e[0]].name) + '</b> <span class="read lk">' + esc(e[3]) + "</span></span></li>";
    }).join("") + "</ul>";
    var card = $("nodeCard"); card.innerHTML = html; linkAll(card);
  }
  function pickNode(k) { FX.sel = k; fxEdges(); fxCard(); }
  function setPhase(i) {
    var F = FX.F;
    FX.phase = (i + F.phases.length) % F.phases.length;
    FX.btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === FX.phase ? "true" : "false"); });
    $("phaseRole").textContent = "Phase " + (FX.phase + 1) + " of " + F.phases.length;
    var note = $("phaseNote"); note.textContent = F.phases[FX.phase].note; linkAll(note.parentNode);
    fxEdges(); fxCard();
    var from = {}, to = F.phases[FX.phase].pos;
    Object.keys(FX.cur).forEach(function (k) { from[k] = FX.cur[k].slice(); });
    if (FX.anim) cancelAnimationFrame(FX.anim);
    if (reduce) { Object.keys(to).forEach(function (k) { FX.cur[k] = to[k].slice(); }); fxPlace(); return; }
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / 500), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      Object.keys(to).forEach(function (k) { FX.cur[k] = [from[k][0] + (to[k][0] - from[k][0]) * e, from[k][1] + (to[k][1] - from[k][1]) * e]; });
      fxPlace();
      if (p < 1) FX.anim = requestAnimationFrame(step);
    }
    FX.anim = requestAnimationFrame(step);
  }

  /* ---------- Map ---------- */
  // Data: map = { title, unit?, hint?, view?: "x y w h" (draws real state shapes from window.US_STATES),
  //   views: [{label, legend: [[cls, text]]}], grid: [[abbr, col, row]] (tile fallback),
  //   states: { abbr: { name, ids?: [shape ids], labelAt?: [x, y], border?, borderLabel?, v: [[cls, short], ...], info: [lines] } },
  //   borderLegend?, notes[] }
  var MAPV = { view: 0, sel: null, svg: false, laid: false };
  function stateIds(abbr, st) { return st.ids || [abbr.toLowerCase()]; }
  function renderMap() {
    var s = $("sec-map"); if (!s) return;
    var M = C.map; MAPV = { view: 0, sel: null, svg: !!(M.view && window.US_STATES), laid: false };
    var head = '<div class="card"><div class="chead"><span class="role">' + esc(M.title) + '</span></div><div class="btns" id="mapViews">' +
      M.views.map(function (v, i) { return '<button class="btn" data-v="' + i + '">' + esc(v.label) + ' <span class="k">' + (i + 1) + "</span></button>"; }).join("") + "</div>";
    var side = '<div class="legend" id="mapLegend"></div><div class="pnl prop" id="mapInfo"></div>';
    var notes = '<ul class="plain read lk muted">' + (M.notes || []).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>";
    if (MAPV.svg) {
      s.innerHTML = '<div class="fx-grid">' + head + '<div class="mapsvg-wrap"><svg id="mapsvg" viewBox="' + esc(M.view) + '" role="img" aria-label="' + esc(M.title) + '"></svg></div>' +
        notes + '<p class="muted small">State outlines: ' + esc(window.US_STATES.source) + ".</p></div>" +
        '<div class="fx-side"><div class="card"><div class="pnl prop" id="mapInfo"></div></div><div class="card"><div class="legend" id="mapLegend"></div></div></div></div>';
      buildMapSvg();
    } else {
      var cols = 1 + Math.max.apply(null, M.grid.map(function (g) { return g[1]; }));
      s.innerHTML = head + '<div class="panels mapgrid"><div class="tilemap" id="tiles" style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr));max-width:' + Math.min(620, cols * 104) + 'px"></div><div style="display:grid;gap:10px;align-content:start">' + side + "</div></div>" + notes + "</div>";
    }
    Array.prototype.forEach.call(s.querySelectorAll("#mapViews .btn"), function (b) { b.addEventListener("click", function () { setMapView(+b.dataset.v); }); });
    setMapView(0);
  }
  function svgEl(tag, attrs) { var el = document.createElementNS(NS, tag); for (var k in attrs) el.setAttribute(k, attrs[k]); return el; }
  function buildMapSvg() {
    var M = C.map, U = window.US_STATES, svg = $("mapsvg"), owner = {};
    Object.keys(M.states).forEach(function (a) { stateIds(a, M.states[a]).forEach(function (id) { owner[id] = a; }); });
    var defs = svgEl("defs", {});
    defs.innerHTML =
      '<pattern id="ph-d0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" style="fill:var(--surface)"/><rect width="4" height="8" style="fill:var(--orig-bg)"/></pattern>' +
      '<pattern id="ph-p4" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" style="fill:var(--p2)"/><rect width="4" height="8" style="fill:var(--p3)"/></pattern>';
    svg.appendChild(defs);
    var ctx = svgEl("g", { "class": "ctx" }), rgs = svgEl("g", {}), lbl = svgEl("g", { "class": "lbls" });
    svg.appendChild(ctx); svg.appendChild(rgs); svg.appendChild(lbl);
    var groups = {};
    Object.keys(U.paths).forEach(function (id) {
      var a = owner[id];
      if (!a) { if (id !== "ak") ctx.appendChild(svgEl("path", { d: U.paths[id], "class": "ctxp" })); return; }
      if (!groups[a]) {
        var st = M.states[a];
        var g = svgEl("g", { "class": "rg" + (st.border ? " bd" : ""), "data-st": a, "aria-label": st.name });
        if (!st.border) { g.setAttribute("tabindex", "0"); g.setAttribute("role", "button"); }
        groups[a] = g; rgs.appendChild(g);
        g.addEventListener("click", function () { if (!st.border) { MAPV.sel = a; setMapView(MAPV.view); } });
        g.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && !st.border) { e.preventDefault(); MAPV.sel = a; setMapView(MAPV.view); } });
      }
      groups[a].appendChild(svgEl("path", { d: U.paths[id] }));
    });
    Object.keys(groups).forEach(function (a) {
      var t = svgEl("text", { "class": "mlab", "data-st": a, "text-anchor": "middle" });
      t.appendChild(svgEl("tspan", { "class": "ab", x: 0, dy: 0 })); t.lastChild.textContent = a;
      t.appendChild(svgEl("tspan", { "class": "tv", x: 0 }));
      lbl.appendChild(t);
    });
    MAPV.groups = groups;
  }
  function layoutMap() {
    if (!MAPV.svg || current !== "map") return;
    var svg = $("mapsvg"); if (!svg || !svg.clientWidth) return;
    var vb = C.map.view.split(/\s+/).map(Number), r = svg.getBoundingClientRect();
    var k = 1 / Math.min(r.width / vb[2], r.height / vb[3]);
    svg.style.setProperty("--k", k);
    Array.prototype.forEach.call(svg.querySelectorAll(".mlab"), function (t) {
      var a = t.dataset.st, st = C.map.states[a], x, y;
      if (st.labelAt) { x = st.labelAt[0]; y = st.labelAt[1]; }
      else { var b = MAPV.groups[a].getBBox(); x = b.x + b.width / 2; y = b.y + b.height / 2; }
      t.setAttribute("transform", "translate(" + x + "," + y + ")");
      t.firstChild.setAttribute("font-size", 13.5 * k); t.firstChild.setAttribute("dy", 0);
      t.lastChild.setAttribute("font-size", 11 * k); t.lastChild.setAttribute("dy", 13 * k);
      t.style.strokeWidth = 3 * k;
    });
    MAPV.laid = true;
  }
  window.addEventListener("resize", function () { if (current === "map") layoutMap(); });
  function setMapView(v) {
    var M = C.map; if (!M || v < 0 || v >= M.views.length) return;
    MAPV.view = v;
    Array.prototype.forEach.call(document.querySelectorAll("#mapViews .btn"), function (b) { b.setAttribute("aria-pressed", +b.dataset.v === v ? "true" : "false"); });
    function val(a) { var st = M.states[a]; if (st.border) return ["", st.borderLabel || ""]; return (st.v || [])[v] || ["", ""]; }
    if (MAPV.svg) {
      Object.keys(MAPV.groups).forEach(function (a) {
        var g = MAPV.groups[a], st = M.states[a], p = val(a);
        g.setAttribute("class", "rg" + (st.border ? " bd" : "") + (p[0] ? " " + p[0] : "") + (MAPV.sel === a ? " sel" : ""));
        if (MAPV.sel === a) g.parentNode.appendChild(g);
        var t = $("mapsvg").querySelector('.mlab[data-st="' + a + '"]');
        if (t) { t.lastChild.textContent = p[1]; t.setAttribute("class", "mlab" + (st.border ? " bd" : "")); }
      });
      layoutMap();
    } else {
      $("tiles").innerHTML = M.grid.map(function (g) {
        var st = M.states[g[0]], cls = "tile", p = val(g[0]);
        if (st.border) cls += " border"; else if (p[0]) cls += " " + p[0];
        if (MAPV.sel === g[0]) cls += " sel";
        return '<button class="' + cls + '" data-st="' + g[0] + '" style="grid-column:' + (g[1] + 1) + ";grid-row:" + (g[2] + 1) + '" aria-label="' + esc(st.name) + '"' + (st.border ? " disabled" : "") + '><span class="ab">' + g[0] + '</span><span class="tv">' + esc(p[1]) + "</span></button>";
      }).join("");
      Array.prototype.forEach.call(document.querySelectorAll("#tiles .tile"), function (t) { t.addEventListener("click", function () { MAPV.sel = t.dataset.st; setMapView(MAPV.view); }); });
    }
    var leg = M.views[v].legend.map(function (l) { return '<div><i class="tile ' + l[0] + '" style="aspect-ratio:auto;padding:0"></i><span>' + esc(l[1]) + "</span></div>"; }).join("");
    if (M.borderLegend) leg += '<div><i class="tile border" style="aspect-ratio:auto;padding:0"></i><span>' + esc(M.borderLegend) + "</span></div>";
    $("mapLegend").innerHTML = leg;
    var info = $("mapInfo");
    if (MAPV.sel && M.states[MAPV.sel]) {
      var st = M.states[MAPV.sel];
      info.innerHTML = '<div class="plabel">' + esc(st.name) + "</div>" + (st.info || []).map(function (l) { return '<p class="read">' + esc(l) + "</p>"; }).join("");
    } else info.innerHTML = '<div class="plabel">Tap a ' + esc(M.unit || "state") + '</div><p class="read">' + esc(M.hint || "See the details for each one.") + "</p>";
  }

  /* ---------- Cast ---------- */
  function renderCast() {
    var s = $("sec-cast"); if (!s) return;
    var n = 0;
    s.innerHTML = C.cast.map(function (g, gi) {
      return '<h2 class="sec">' + esc(g[0]) + "</h2>" + g[1].map(function (p) {
        n++;
        return '<div class="card num" id="person-' + p.id + '"><span class="stripe">' + n + "</span><h3>" + esc(p.name) + '</h3><p class="muted lk" data-self="p:' + p.id + '">' + esc(p.role) + '</p><p class="read lk" data-self="p:' + p.id + '"><span class="role">Watch</span> ' + esc(p.watch) + "</p></div>";
      }).join("");
    }).join("");
  }

  /* ---------- Recall ---------- */
  var recs = [], curQ = 0;
  function renderRecall() {
    var s = $("sec-recall"); recs = []; curQ = 0; if (!s) return;
    var qs = C.recall.map(function (q) { return { q: q, label: null }; });
    if (chIdx > 0) {
      var prev = B.chapters[chIdx - 1];
      (prev.recall || []).slice(-2).forEach(function (q) { qs.push({ q: q, label: "Review · Ch. " + prev.num }); });
    }
    s.innerHTML = '<p class="muted">For after the chapter. Answer each one in your head before you show the answer.</p><div class="panel" id="recallList"></div>';
    var list = $("recallList");
    qs.forEach(function (o, i) {
      var c = document.createElement("div"); c.className = "card num rec";
      c.innerHTML = '<span class="stripe">' + (i + 1) + "</span>" + (o.label ? '<div class="chead"><span class="role">' + esc(o.label) + "</span></div>" : "") + "<h3>" + esc(o.q[0]) + "</h3>" +
        '<div class="pnl prop" hidden><div class="plabel">Answer</div><p class="read lk">' + esc(o.q[1]) + "</p></div>" +
        '<div class="btns"><button class="btn reveal">Show answer <span class="k">Space</span></button></div>';
      var ans = c.querySelector(".pnl"), btn = c.querySelector(".reveal");
      function toggle() { ans.hidden = !ans.hidden; btn.firstChild.textContent = ans.hidden ? "Show answer " : "Hide answer "; }
      btn.addEventListener("click", function (e) { e.stopPropagation(); setQ(i, false); toggle(); });
      c.addEventListener("click", function (e) { if (!e.target.closest(".lt")) setQ(i, false); });
      recs.push({ el: c, toggle: toggle });
      list.appendChild(c);
    });
    setQ(0, false);
  }
  function setQ(i, scroll) {
    if (!recs.length) return;
    curQ = Math.max(0, Math.min(recs.length - 1, i));
    recs.forEach(function (r, j) { r.el.classList.toggle("cur", j === curQ); });
    if (scroll) recs[curQ].el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  }

  /* ---------- Search ---------- */
  function buildSearch() {
    searchIdx = [];
    Object.keys(registry).forEach(function (k) {
      var r = registry[k];
      if (r.kind === "term") searchIdx.push({ type: "Term", title: r.name, text: r.def + " " + (r.bullets || []).map(function (b) { return b.join(" "); }).join(" "), go: function () { goTo("terms", "term-" + r.id); } });
      else searchIdx.push({ type: "Person", title: r.name, text: r.role + " " + r.watch, go: function () { goTo("cast", "person-" + r.id); } });
    });
    (C.events || []).forEach(function (e, i) {
      var d = e[1].split("-");
      searchIdx.push({ type: "Event", title: e[2], text: MONTHS[+d[1] - 1] + " " + d[0] + ". " + e[3], go: function () { goTo("timeline", "ev-" + i, function () { var el = $("ev-" + i); if (el) el.open = true; }); } });
    });
    if (C.factions) Object.keys(C.factions.nodes).forEach(function (k) {
      var n = C.factions.nodes[k];
      searchIdx.push({ type: "Group", title: n.name, text: n.who, go: function () { showTab("factions"); pickNode(k); } });
    });
    (C.watch || []).forEach(function (w, i) { searchIdx.push({ type: "Watch", title: w[0], text: w[1], go: function () { goTo("primer", "watch-" + i); } }); });
  }
  var results = [], rIdx = 0, q = $("q"), resBox = $("results");
  function hl(s, words) {
    var out = esc(s);
    words.forEach(function (w) { if (w.length > 1) out = out.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
    return out;
  }
  function runSearch() {
    var v = q.value.trim().toLowerCase();
    if (!v) { resBox.hidden = true; return; }
    closeAsk();
    var words = v.split(/\s+/);
    results = searchIdx.map(function (it) {
      var t = it.title.toLowerCase(), all = t + " " + it.text.toLowerCase();
      if (!words.every(function (w) { return all.indexOf(w) > -1; })) return null;
      var sc = t.indexOf(v) === 0 ? 4 : t.indexOf(v) > -1 ? 3 : words.every(function (w) { return t.indexOf(w) > -1; }) ? 2 : 1;
      if (it.type === "Term" || it.type === "Person") sc += .5;
      return { it: it, sc: sc };
    }).filter(Boolean).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 14);
    rIdx = 0;
    resBox.hidden = false;
    if (!results.length) { resBox.innerHTML = '<div class="noresult">Nothing matches "' + esc(q.value) + '".</div>'; return; }
    resBox.innerHTML = results.map(function (r, i) {
      var snip = r.it.text.length > 160 ? r.it.text.slice(0, 160) + "…" : r.it.text;
      return '<button class="res' + (i === 0 ? " cur" : "") + '" data-i="' + i + '"><span class="rt">' + r.it.type + "</span><b>" + hl(r.it.title, words) + '</b><span class="rs">' + hl(snip, words) + "</span></button>";
    }).join("");
    Array.prototype.forEach.call(resBox.querySelectorAll(".res"), function (b) { b.addEventListener("click", function () { pick(+b.dataset.i); }); });
  }
  function pick(i) { var r = results[i]; if (!r) return; resBox.hidden = true; q.blur(); r.it.go(); }
  q.addEventListener("input", runSearch);
  q.addEventListener("focus", function () { if (q.value.trim()) runSearch(); });
  q.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { q.value = ""; resBox.hidden = true; q.blur(); return; }
    if (resBox.hidden) return;
    var bs = resBox.querySelectorAll(".res");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault(); if (!bs.length) return;
      rIdx = (rIdx + (e.key === "ArrowDown" ? 1 : -1) + bs.length) % bs.length;
      Array.prototype.forEach.call(bs, function (b, j) { b.classList.toggle("cur", j === rIdx); });
      bs[rIdx].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") { e.preventDefault(); pick(rIdx); }
  });

  /* ---------- Ask Claude ---------- */
  var sample = null, askReady = false, turns = [], askCtl = null;
  var askPanel = $("askPanel"), askQ = $("askQ"), askLog = $("askLog"), askErr = $("askErr");
  function openAsk() { if (!askReady) return; resBox.hidden = true; hidePop(); askPanel.hidden = false; askQ.focus(); }
  function closeAsk() { askPanel.hidden = true; }
  $("askBtn").addEventListener("click", function (e) { e.stopPropagation(); askPanel.hidden ? openAsk() : closeAsk(); });
  function contextText() {
    var parts = ["Book: " + B.title + " by " + B.author + ". Chapter " + C.num + ": " + C.title + " (" + C.pages + ")."];
    if (C.previously) parts.push("Previous chapter: " + C.previously.bullets.join(" "));
    parts.push("Chapter question: " + C.question);
    if (C.watch) parts.push("Things to watch: " + C.watch.map(function (w) { return w[0] + " " + w[1]; }).join(" | "));
    (C.termGroups || []).forEach(function (g) { parts.push(g.name + ": " + g.terms.map(function (t) { return t.name + " = " + t.def + (t.bullets ? " " + t.bullets.map(function (b) { return b.join(" "); }).join(" ") : ""); }).join(" | ")); });
    if (C.events) parts.push("Timeline: " + C.events.map(function (e) { return e[1] + " " + e[2]; }).join("; "));
    if (C.cast) parts.push("People: " + C.cast.map(function (g) { return g[1].map(function (p) { return p.name + " (" + p.role + ")"; }).join("; "); }).join("; "));
    return parts.join("\n").slice(0, 60000);
  }
  function rules() {
    return "You are a reading companion for Eugene, who is reading this chapter right now and has a question mid-read. " +
      "Answer in plain English: short, direct sentences, two or three short paragraphs at most, no headers. Explain any term of art the first time you use it. " +
      "Be accurate about dates, names, and outcomes; if you are unsure of a specific, leave it out rather than guess. " +
      "Use general historical knowledge freely; the notes below are the companion's reference material for this chapter, not the book's text.\n\nReference notes:\n" + contextText();
  }
  function renderLog() {
    askLog.innerHTML = turns.map(function (t) {
      return '<div class="turn ' + (t.role === "user" ? "q" : "a") + '">' + (t.role === "user" ? '<p class="read">' + esc(t.content) + "</p>" : '<p class="read a">' + esc(t.content) + "</p>") + "</div>";
    }).join("");
  }
  var ERR = { rate_limited: "Too many questions too fast, or you've hit a usage limit. Try again in a bit.", session_expired: "Sign in to Claude again, then retry.", refused: "Claude declined that question. Try rewording it.", empty_completion: "No answer came back. Try asking more simply.", upstream_error: "The connection dropped. Ask again." };
  function ask() {
    var text = askQ.value.trim(); if (!text || askCtl) return;
    askErr.textContent = "";
    turns.push({ role: "user", content: text });
    turns.push({ role: "assistant", content: "Thinking..." });
    askQ.value = ""; renderLog();
    var aEl = askLog.lastChild.querySelector(".a");
    askCtl = new AbortController();
    $("askGo").disabled = true; $("askStop").hidden = false;
    var msgs = [{ role: "user", content: rules() }].concat(turns.slice(0, -1).slice(-12));
    sample(msgs, { cache: false, signal: askCtl.signal, onText: function (u) { aEl.textContent = u.text; askPanel.scrollTop = askPanel.scrollHeight; } })
      .then(function (r) { turns[turns.length - 1].content = r.text; })
      .catch(function (e) {
        var keep = e && e.text ? e.text : "";
        if (e && (e.code === "not_granted" || e.code === "sampling_disabled" || e.code === "not_declared" || e.code === "capability_disabled" || e.code === "capability_removed")) {
          askReady = false; $("askBtn").hidden = true; closeAsk(); renderHints(); turns = []; return;
        }
        if (keep) turns[turns.length - 1].content = keep; else turns.splice(-2, 2);
        if (!e || e.code !== "cancelled") askErr.textContent = ERR[e && e.code] || ERR.upstream_error;
      })
      .then(function () { askCtl = null; $("askGo").disabled = false; $("askStop").hidden = true; renderLog(); });
  }
  $("askGo").addEventListener("click", ask);
  $("askStop").addEventListener("click", function () { if (askCtl) askCtl.abort(); });
  $("askClear").addEventListener("click", function () { if (askCtl) askCtl.abort(); turns = []; renderLog(); askErr.textContent = ""; askQ.focus(); });
  askQ.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
    else if (e.key === "Escape") { e.preventDefault(); closeAsk(); askQ.blur(); }
  });
  if (window.claude && window.claude.use) {
    window.claude.use("sample").then(function (s) {
      if (!s) return;
      sample = s; askReady = true; $("askBtn").hidden = false; renderHints(); syncBar();
    }).catch(function () {});
  }

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tg = e.target;
    if (tg && (tg.tagName === "TEXTAREA" || tg.tagName === "INPUT" || tg.tagName === "SELECT")) return;
    if (e.key === "Escape") { hidePop(); resBox.hidden = true; closeAsk(); return; }
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === "/") { e.preventDefault(); q.focus(); q.select(); return; }
    if (key === "a" && askReady) { e.preventDefault(); openAsk(); return; }
    var tab = tabsOn.filter(function (t) { return t.key === key; })[0];
    if (tab) { e.preventDefault(); showTab(tab.id); return; }
    var down = key === "ArrowDown" || key === "j", up = key === "ArrowUp" || key === "k";
    if (current === "timeline") {
      if (key === "e") { e.preventDefault(); toggleAllEvents(); }
    } else if (current === "factions" && FX) {
      if (/^[1-9]$/.test(key) && +key <= FX.F.phases.length) { e.preventDefault(); setPhase(+key - 1); }
      else if (key === "ArrowRight") { e.preventDefault(); setPhase(FX.phase + 1); }
      else if (key === "ArrowLeft") { e.preventDefault(); setPhase(FX.phase - 1); }
      else if (down || up) { e.preventDefault(); var o = FX.F.order; pickNode(o[(o.indexOf(FX.sel) + (down ? 1 : -1) + o.length) % o.length]); }
    } else if (current === "map") {
      if (/^[1-9]$/.test(key) && C.map && +key <= C.map.views.length) { e.preventDefault(); setMapView(+key - 1); }
    } else if (current === "recall") {
      if (down) { e.preventDefault(); setQ(curQ + 1, true); }
      else if (up) { e.preventDefault(); setQ(curQ - 1, true); }
      else if (key === " ") { e.preventDefault(); if (recs[curQ]) recs[curQ].toggle(); }
    }
  });

  try { localStorage.removeItem("rc2-state"); } catch (e) {}
  renderChapter();
})();
