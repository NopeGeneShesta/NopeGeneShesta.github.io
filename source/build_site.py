"""Build the reading library website from the companion artifact sources.

Usage: python3 build_site.py <scratch_dir> <site_dir>
Source of truth: republic-companion.html (shell + CSS), engine.js, book.js in scratch_dir.
"""
import json, os, re, shutil, sys
from PIL import Image, ImageDraw

SRC, SITE = sys.argv[1], sys.argv[2]

BOOKS = [
    {"slug": "republic", "shell": "republic-companion.html", "data": "book.js",
     "title": "The Republic for Which It Stands", "author": "Richard White",
     "sub": "The United States during Reconstruction and the Gilded Age, 1865–1896",
     "status": "Reading"},
]
PLANNED = [
    {"title": "Stolen Focus", "author": "Johann Hari", "status": "Planned"},
]

shell = open(os.path.join(SRC, BOOKS[0]["shell"]), encoding="utf-8").read()
css = re.search(r"<style>(.*?)</style>", shell, re.S).group(1)
body = shell[shell.index("</style>") + len("</style>"):]
body = re.sub(r'(<script src="(us-states|book|engine)\.js"[^>]*></script>\s*)+', "", body, flags=re.S).strip()

EXTRA_CSS = """
/* Site-only additions */
.back { font-size: 11px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: var(--muted); text-decoration: none; }
.back:hover { color: var(--accent); }
.lib-head { padding-block: 22px 14px; display: grid; gap: 4px; border-bottom: 1px solid var(--rule); }
.lib-head h1 { font-size: 1.5rem; }
.lib-list { display: grid; gap: 10px; padding-block: 14px 48px; }
a.book { text-decoration: none; color: inherit; }
a.book:hover, a.book.cur { border-color: var(--fg); }
a.book.cur .stripe { background: var(--accent); color: var(--accent-ink); }
.book h2 { font: 600 17px/1.25 var(--f-read); margin: 0; }
.book .meta { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 12.5px; color: var(--muted); }
.lbl { display: inline-block; font: 600 10.5px/1.5 var(--f-ui); letter-spacing: .06em; text-transform: uppercase; border: 1px solid currentColor; border-radius: 3px; padding: 0 5px; }
.book.planned { color: var(--muted); }
.chlist { margin: 2px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: 13px; }
"""

def head(title, rel):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{title}</title>
<link rel="icon" type="image/svg+xml" href="{rel}assets/icon.svg">
<link rel="icon" type="image/png" sizes="192x192" href="{rel}assets/icon-192.png">
<link rel="apple-touch-icon" href="{rel}assets/icon-192.png">
<link rel="manifest" href="{rel}manifest.webmanifest">
<meta name="theme-color" content="#f4f1ea">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">
<link rel="stylesheet" href="{rel}assets/companion.css">
</head>
<body>
"""

os.makedirs(os.path.join(SITE, "assets"), exist_ok=True)
open(os.path.join(SITE, "assets", "companion.css"), "w", encoding="utf-8").write(css.strip() + "\n" + EXTRA_CSS)
shutil.copy(os.path.join(SRC, "engine.js"), os.path.join(SITE, "assets", "engine.js"))
if os.path.exists(os.path.join(SRC, "us-states.js")):
    shutil.copy(os.path.join(SRC, "us-states.js"), os.path.join(SITE, "assets", "us-states.js"))
open(os.path.join(SITE, ".nojekyll"), "w").write("")

# Book pages
library = []
for b in BOOKS:
    d = os.path.join(SITE, b["slug"]); os.makedirs(d, exist_ok=True)
    shutil.copy(os.path.join(SRC, b["data"]), os.path.join(d, "book.js"))
    page_body = body.replace('<div class="kicker" id="kicker"></div>',
                             '<a class="back" href="../">← Library</a>\n    <div class="kicker" id="kicker"></div>', 1)
    short = b["title"].replace("The ", "", 1)
    html = head(short + " Companion", "../") + page_body + '\n<script src="../assets/us-states.js"></script>\n<script src="book.js"></script>\n<script src="../assets/engine.js"></script>\n</body>\n</html>\n'
    open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(html)
    # chapter list from data
    js = open(os.path.join(SRC, b["data"]), encoding="utf-8").read()
    chs = re.findall(r'num:\s*(\d+),\s*title:\s*"([^"]+)"', js)
    library.append(dict(b, chapters=chs))

# Library page
cards = []
for i, b in enumerate(library):
    chs = "".join(f'<li>Ch. {n} · {t}</li>' for n, t in b["chapters"])
    cards.append(f'''<a class="card num book" href="{b['slug']}/" data-i="{i}"><span class="stripe">{i+1}</span>
  <div class="chead"><span class="role">{b['author']}</span><span class="lbl" style="margin-left:auto;color:var(--ok)">{b['status']}</span></div>
  <h2>{b['title']}</h2>
  <p class="muted read">{b['sub']}</p>
  <ul class="chlist">{chs}</ul>
</a>''')
for j, p in enumerate(PLANNED):
    cards.append(f'''<div class="card num book planned"><span class="stripe">{len(library)+j+1}</span>
  <div class="chead"><span class="role">{p['author']}</span><span class="lbl" style="margin-left:auto">{p['status']}</span></div>
  <h2>{p['title']}</h2>
</div>''')
lib_html = head("Reading Library", "") + f'''<header class="wrap lib-head">
  <div class="kicker">Eugene's reading companions</div>
  <h1>Reading Library</h1>
  <div class="hints"><span><kbd>↑</kbd> <kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>1</kbd>–<kbd>9</kbd> open by number</span></div>
</header>
<main class="wrap lib-list">
{chr(10).join(cards)}
</main>
<script>
(function () {{
  var books = Array.prototype.slice.call(document.querySelectorAll("a.book")), cur = 0;
  function set(i) {{ cur = Math.max(0, Math.min(books.length - 1, i)); books.forEach(function (b, j) {{ b.classList.toggle("cur", j === cur); }}); if (books[cur]) books[cur].focus({{ preventScroll: false }}); }}
  if (books.length) books[0].classList.add("cur");
  document.addEventListener("keydown", function (e) {{
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "ArrowDown" || e.key === "j") {{ e.preventDefault(); set(cur + 1); }}
    else if (e.key === "ArrowUp" || e.key === "k") {{ e.preventDefault(); set(cur - 1); }}
    else if (e.key === "Enter" && books[cur] && document.activeElement === document.body) {{ location.href = books[cur].href; }}
    else if (/^[1-9]$/.test(e.key) && books[+e.key - 1]) {{ location.href = books[+e.key - 1].href; }}
  }});
}})();
</script>
</body>
</html>
'''
open(os.path.join(SITE, "index.html"), "w", encoding="utf-8").write(lib_html)

# Manifest and icons
json.dump({"name": "Reading Library", "short_name": "Reading", "start_url": "./", "scope": "./", "display": "standalone",
           "background_color": "#f4f1ea", "theme_color": "#f4f1ea",
           "icons": [{"src": "assets/icon-192.png", "sizes": "192x192", "type": "image/png"},
                     {"src": "assets/icon-512.png", "sizes": "512x512", "type": "image/png"},
                     {"src": "assets/icon.svg", "sizes": "any", "type": "image/svg+xml"}]},
          open(os.path.join(SITE, "manifest.webmanifest"), "w"), indent=1)
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#f4f1ea"/><rect x="12" y="10" width="40" height="44" rx="3" fill="#fffdf8" stroke="#23201b" stroke-width="2.5"/><rect x="12" y="10" width="11" height="44" rx="3" fill="#dcc8a0" stroke="#23201b" stroke-width="2.5"/><line x1="29" y1="22" x2="45" y2="22" stroke="#23201b" stroke-width="2.5" stroke-linecap="round"/><line x1="29" y1="30" x2="45" y2="30" stroke="#6b655a" stroke-width="2.5" stroke-linecap="round"/><line x1="29" y1="38" x2="40" y2="38" stroke="#9b2f2a" stroke-width="3" stroke-linecap="round"/></svg>'''
open(os.path.join(SITE, "assets", "icon.svg"), "w").write(svg)
for size in (192, 512):
    s = size / 64
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    def R(x0, y0, x1, y1, **k): d.rounded_rectangle([x0 * s, y0 * s, x1 * s, y1 * s], **k)
    R(0, 0, 64, 64, radius=12 * s, fill="#f4f1ea")
    R(12, 10, 52, 54, radius=3 * s, fill="#fffdf8", outline="#23201b", width=int(2.5 * s))
    R(12, 10, 23, 54, radius=3 * s, fill="#dcc8a0", outline="#23201b", width=int(2.5 * s))
    for y, x1, col, w in ((22, 45, "#23201b", 2.5), (30, 45, "#6b655a", 2.5), (38, 40, "#9b2f2a", 3)):
        d.line([29 * s, y * s, x1 * s, y * s], fill=col, width=int(w * s))
    im.save(os.path.join(SITE, "assets", f"icon-{size}.png"))
open(os.path.join(SITE, "README.md"), "w").write("# Reading Library\n\nEugene's reading companions. Built from the companion sources by Claude; edit the sources, not these files.\n")
print("built", [b["slug"] for b in library])
