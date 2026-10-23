window.BOOK = {
  id: "republic",
  title: "The Republic for Which It Stands",
  author: "Richard White",
  type: "history",
  chapters: [
  {
    id: "ch2",
    num: 2,
    title: "Radical Reconstruction",
    part: "Part I",
    pages: "pp. 64–102",

    previously: {
      label: "Chapter 1 · In the Wake of War",
      bullets: [
        "Lincoln is dead. Andrew Johnson, a Tennessee Unionist and Democrat, is president.",
        "The South is wrecked: burned cities, worthless money, and a labor system that no longer exists.",
        "Four million freedpeople test what freedom means in practice: moving, reuniting families, refusing gang labor.",
        "Northern Republicans want to remake the South, and the country, around free labor and a single, equal citizenry. This is White's frame for the whole book.",
        "Through 1865 Johnson runs Reconstruction alone. He hands out pardons, readmits states quickly, and watches them pass Black Codes and elect Confederates."
      ]
    },

    question: "Who decides what the defeated South becomes, the President or Congress? And what does it now mean to be an American citizen?",

    before: {
      label: "Before: Presidential Reconstruction",
      paras: [
        "Andrew Johnson ran the South alone while Congress was out, from spring to December 1865. He pardoned most ex-Confederates and readmitted states once they abolished slavery and renounced secession.",
        "Southern states then elected Confederate leaders to Congress, including the Confederacy's vice president, Alexander Stephens. They passed Black Codes that rebuilt slavery under a new name."
      ]
    },
    opens: {
      label: "Where chapter 2 opens",
      paras: [
        "December 1865. Radical Republicans are planning how to kill Presidential Reconstruction.",
        "Congress returns on December 4 and refuses to seat the Southern members. The fight starts there."
      ]
    },

    watch: [
      ["The moderates are the swing vote, not the Radicals.", "Radicals never had a majority. Watch what pushes cautious Republicans like Lyman Trumbull from \"work with Johnson\" to \"override Johnson.\""],
      ["Johnson is his own worst enemy.", "Vetoes, public tirades, a disastrous speaking tour. Count how many of his losses he caused himself."],
      ["Citizenship goes national.", "The 14th Amendment makes the federal government the guarantor of individual rights against the states. Watch how White ties it to his \"free labor\" vision of a single, uniform citizenry."],
      ["Who gets left out.", "Actual Reconstruction scaled back the Radicals' ambitions and denied rights to all women and to some men. Watch where those lines get drawn, and how they split old allies."],
      ["Violence as politics.", "Memphis, New Orleans, and then the Klan. Each massacre changes votes in the North."],
      ["Votes, but no land.", "Freedpeople get citizenship and, eventually, the vote. They mostly do not get land. Watch whether White treats that as the decisive failure."]
    ],

    next: [
      ["Reconstruction ends.", "By 1877 white Democrats, calling themselves Redeemers, have retaken every Southern state, and the last federal troops stop protecting Republican governments. White covers this in later chapters."],
      ["The 14th Amendment, narrowed then revived.", "The Supreme Court shrank it almost at once, in the Slaughterhouse Cases (1873), and used it to uphold segregation in Plessy v. Ferguson (1896). In the 20th century it became the basis of Brown v. Board of Education (1954) and much of modern civil rights law. Section 2's penalty for denying votes was never enforced. In 2024 the Court ruled that states cannot use Section 3 to keep federal candidates off the ballot."],
      ["The 15th Amendment, evaded.", "Poll taxes, literacy tests, and white primaries shut most Black Southerners out of voting by 1900. It took the Voting Rights Act of 1965 to enforce the amendment."],
      ["Sharecropping lasts.", "Sharecropping and the crop lien held the rural South for about 70 years, until farm machinery and the Great Migration north broke them up."],
      ["The Freedmen's Bureau closes.", "Congress shut it down in 1872."]
    ],

    termGroups: [
      { id: "who", name: "Who's who", terms: [
        { id: "radicals", name: "Radical Republicans", aliases: ["Radical Republicans", "Radicals"], def: "The wing of the party that wanted to remake the South: equal rights for freedpeople, punishment for Confederate leaders, and for some, land redistribution." },
        { id: "moderates", name: "Moderate Republicans", aliases: ["Moderate Republicans", "moderate Republicans", "moderates", "Moderates"], def: "The party's majority. Wanted slavery's results undone and the Union secure, but were wary of big federal power and of Black suffrage." },
        { id: "copperheads", name: "Copperheads", aliases: ["Copperheads"], def: "Northern Democrats who opposed the war. Republicans used the name to paint all Democrats as disloyal." },
        { id: "carpet", name: "\"Carpetbagger,\" \"scalawag\"", aliases: ["carpetbaggers", "carpetbagger", "scalawags", "scalawag"], def: "Opponents' insults for Northerners who moved South and for white Southerners who joined the Republicans. Historians use them with care." }
      ]},
      { id: "south", name: "The South after the war", terms: [
        { id: "presrecon", name: "Presidential Reconstruction", aliases: ["Presidential Reconstruction"], def: "Johnson's 1865 plan, run without Congress. Ex-Confederates got pardons by swearing loyalty. States got back in by abolishing slavery, renouncing secession, and refusing to pay their Confederate debts. Nothing required rights for freedpeople." },
        { id: "pardon", name: "Pardon and amnesty", aliases: ["pardons", "pardoned", "amnesty"], def: "A pardon forgives one person. Amnesty forgives a whole class of people. Pardoned Confederates got their property back, including land the army had given to freedpeople. Johnson handed out pardons by the thousands." },
        { id: "blackcodes", name: "Black Codes", aliases: ["Black Codes"], def: "Southern state laws from 1865–66 that limited where freedpeople could work, live, and travel, and punished \"vagrancy\" with forced labor." },
        { id: "bureau", name: "Freedmen's Bureau", aliases: ["Freedmen's Bureau"], def: "A federal agency created in March 1865 to help freedpeople with food, schools, labor contracts, and courts. Small, underfunded, and constantly under attack." }
      ]},
      { id: "land", name: "Land and labor: how sharecropping happened",
        intro: [
          "White's line: \"Planters had been labor lords defined by their slave holdings; after the war they had become landlords defined by their land holdings.\" Before the war, most of a planter's wealth was the people he enslaved. Emancipation wiped that out overnight. What he still had was land. Freedpeople had the reverse: their own labor, and almost nothing else. The question after 1865 was how those two would strike a deal, and who would have the upper hand.",
          "It took about three years to settle. Freedpeople wanted land of their own, and the government briefly gave some to them. Johnson took it back. Planters tried to run their plantations as before, with gangs working for wages. Freedpeople refused work that looked like slavery, and planters had little cash to pay wages anyway. Sharecropping was the compromise both sides accepted and neither liked."
        ],
        terms: [
        { id: "forty", name: "\"Forty acres and a mule\"", aliases: ["forty acres", "Field Order No. 15"], def: "The freedpeople's hope of owning land. It came from General Sherman's Field Order No. 15 (January 1865), which set aside coastal land in South Carolina, Georgia, and Florida for freed families, about 40 acres each. Some 40,000 people settled there." },
        { id: "restoration", name: "Land restoration", aliases: ["land restoration"], def: "From late 1865, Johnson's pardons gave ex-Confederates their land back, including Sherman's land. The Freedmen's Bureau had to evict the families farming it. This ended the best chance freedpeople had at owning land." },
        { id: "gang", name: "Gang labor", aliases: ["gang labor"], def: "Large groups working the fields together under an overseer, the way plantations ran under slavery. Freedpeople resisted it hard." },
        { id: "contracts", name: "Labor contracts", aliases: ["labor contracts", "wage contracts"], def: "Year-long work agreements, usually supervised by the Freedmen's Bureau. Wages were often paid only after harvest, if at all, and workers who left early could lose everything. The Black Codes made breaking a contract a crime." },
        { id: "homestead", name: "Southern Homestead Act", aliases: ["Southern Homestead Act"], def: "An 1866 law opening federal land in five Southern states to settlers, with freedpeople and white Unionists first in line. Most of the land was poor, and freedpeople had no money for tools, seed, or food until harvest. Few succeeded. It was repealed in 1876." },
        { id: "sharecropping", name: "Sharecropping", aliases: ["sharecropping", "Sharecropping", "sharecroppers"], def: "A family farms its own plot of a planter's land. The planter supplies the land, a cabin, and often tools, a mule, and seed. At harvest the crop is split, often half and half. Freedpeople got family work with no overseer. Planters got labor without paying cash. Both bet on the next crop." },
        { id: "tenant", name: "Tenant farming", aliases: ["tenant farming"], def: "Renting land for a fixed amount of cash or crop. More independent than sharecropping, but you needed your own tools and animals. A step up that many never reached." },
        { id: "lien", name: "Crop lien and the furnishing merchant", aliases: ["crop lien", "furnishing merchant"], def: "Sharecroppers needed food and supplies before harvest. A local merchant (often the landlord himself) sold them on credit, at high prices and interest, with a legal claim on the coming crop. A bad year left a family in debt, and the debt rolled into the next year. That trapped families on the land and kept the South locked into cotton." }
      ]},
      { id: "congress", name: "How Congress fought back", terms: [
        { id: "joint", name: "Joint Committee of Fifteen", aliases: ["Joint Committee of Fifteen", "Joint Committee on Reconstruction"], def: "The House and Senate committee set up in December 1865 to decide the terms for letting Southern states back into Congress. It drafted the 14th Amendment." },
        { id: "veto", name: "Veto override", aliases: ["overrides", "override"], def: "Congress can pass a bill over the President's veto with a two-thirds vote in both houses. In 1866 this becomes the main weapon." },
        { id: "readmission", name: "Readmission", aliases: ["readmission", "readmitted", "Readmission"], def: "A Southern state getting its seats in Congress back. After 1867, it required a new constitution, Black male voting, and ratifying the 14th Amendment." },
        { id: "impeachment", name: "Impeachment", aliases: ["impeachment", "impeached", "Impeachment"], def: "The House charges an official. The Senate holds a trial and needs two-thirds to remove. Johnson was impeached but not removed." }
      ]},
      { id: "laws", name: "Laws and amendments, in order", terms: [
        { id: "a13", name: "13th Amendment", aliases: ["13th Amendment"], def: "Abolished slavery everywhere in the U.S., in effect December 1865. It has one loophole: slavery is allowed \"as a punishment for crime.\" The Black Codes used that loophole." },
        { id: "cra", name: "Civil Rights Act of 1866", aliases: ["Civil Rights Act of 1866", "Civil Rights Act", "Civil Rights bill"], def: "The first federal law to define citizenship. Everyone born in the U.S. (except tribal Native Americans) is a citizen, with equal rights to make contracts, sue, testify, and own property. It was aimed squarely at the Black Codes. Passed over Johnson's veto." },
        { id: "a14", name: "14th Amendment", aliases: ["14th Amendment", "14th"], def: "Passed by Congress in 1866 and ratified in 1868. It locks the Civil Rights Act into the Constitution, so a later Congress can't repeal it, and sets the price of readmission. Five sections:",
          bullets: [
            ["1. Citizenship.", "Anyone born here is a citizen. No state may take away citizens' rights, deny due process, or deny equal protection of the laws."],
            ["2. Representation.", "If a state denies the vote to adult male citizens, its House seats shrink to match. It pressures the South to let Black men vote without requiring it. It is also the first time \"male\" appears in the Constitution."],
            ["3. Officeholding.", "Anyone who swore to support the Constitution and then joined the rebellion is barred from office. Only a two-thirds vote of Congress can lift the ban."],
            ["4. Debts.", "Union war debt must be paid. Confederate war debt is void, and no one gets paid for freed slaves. Whoever lent money to the Confederacy loses it."],
            ["5. Enforcement.", "Congress can pass laws to enforce all of the above."]
          ] },
        { id: "racts", name: "Reconstruction Acts", aliases: ["Reconstruction Acts", "Military Reconstruction", "military rule"], def: "The 1867 laws that created Military Reconstruction. Ten Southern states put under army oversight in five military districts and required to write new constitutions with Black male voting before readmission. See the Map tab." },
        { id: "tenure", name: "Tenure of Office Act", aliases: ["Tenure of Office Act"], def: "1867 law saying the President can't fire certain officials without the Senate's approval. It was written to protect War Secretary Stanton. Johnson fired him anyway, and that was the main impeachment charge." },
        { id: "a15", name: "15th Amendment", aliases: ["15th Amendment", "15th"], def: "Ratified in 1870. States can't deny the vote because of race or former slavery. It says nothing about sex, poll taxes, or literacy tests, which later became the ways around it." },
        { id: "enforce", name: "Enforcement Acts", aliases: ["Enforcement Acts", "Enforcement Act"], def: "Laws from 1870 and 1871 that made interfering with voting a federal crime and let the President use the army against the Klan." }
      ]},
      { id: "money", name: "Money", terms: [
        { id: "debt", name: "Confederate war debt", aliases: ["Confederate war debt", "Confederate debts", "Confederate debt"], def: "The money Southern states and the Confederacy borrowed to fight the war, much of it from wealthy Southerners and some foreign investors. Wiping it out ruined many lenders. Johnson required it first; the 14th Amendment made it permanent." },
        { id: "greenbacks", name: "Greenbacks", aliases: ["greenbacks", "Greenbacks"], def: "Paper money the Union printed during the war, not backed by gold. Whether to keep it or shrink it was a fight between debtors and creditors for decades." }
      ]},
      { id: "numbers", name: "By the numbers", terms: [
        { id: "n-freed", name: "4 million freedpeople", aliases: [], def: "About 1 in 8 Americans in 1860. The same share of today's population would be about 40 million people, more than everyone in California, all needing work, homes, and legal standing at once." },
        { id: "n-value", name: "About $3.5 billion", aliases: [], def: "The market value of enslaved people in 1860. That was more than all the railroads and factories in the country combined. Emancipation erased it without payment, which is why planters came out of the war land-rich and cash-poor." },
        { id: "n-bureau", name: "About 900 Bureau agents", aliases: [], def: "The Freedmen's Bureau's peak staff for the whole South. That is roughly one agent for every 4,500 freedpeople." },
        { id: "n-troops", name: "About 1 million to about 20,000", aliases: [], def: "The Union army had about a million soldiers in spring 1865. By 1867 only about 20,000 federal troops were left to police the entire South." },
        { id: "n-pardons", name: "More than 13,000 pardons", aliases: [], def: "Individual pardons Johnson granted by 1866 to wealthy and high-ranking ex-Confederates, the people his general amnesty left out. They were the old planter elite, back in charge." },
        { id: "n-voters", name: "About 700,000 Black voters", aliases: [], def: "Black men registered under military supervision in 1867. They were a majority of registered voters in five states: South Carolina, Mississippi, Louisiana, Alabama, and Florida." },
        { id: "n-vote", name: "35 to 19", aliases: [], def: "The Senate vote to convict Johnson in May 1868. Conviction needed 36. One more vote would have removed him." }
      ]}
    ],

    lanes: [
      { id: "dc", name: "Washington", sub: "Congress vs. the President" },
      { id: "south", name: "The South", sub: "on the ground" },
      { id: "west", name: "The West", sub: "treaties, wars, railroads", ctx: true },
      { id: "north", name: "The North", sub: "money, labor, reform", ctx: true }
    ],
    years: {
      1865: "Congress returns and refuses Johnson's terms.",
      1866: "The break between Congress and the President.",
      1867: "Congress takes over the South.",
      1868: "Impeachment, readmission, and Grant.",
      1869: "Grant in office; the 15th Amendment goes out.",
      1870: "The 15th is ratified and enforcement begins."
    },
    events: [
      ["dc","1865-12-04","Congress shuts the door","The 39th Congress opens and refuses to seat members from Johnson's reconstructed states. It sets up a Joint Committee of Fifteen to decide the terms of readmission."],
      ["dc","1865-12-18","13th Amendment in force","Slavery is formally abolished nationwide. It is the one thing Johnson and Congress agree on."],
      ["dc","1866-02-19","Bureau bill vetoed","Johnson vetoes an extension of the Freedmen's Bureau. Days later he attacks Radical leaders by name in a public speech."],
      ["dc","1866-03-27","Civil Rights bill vetoed","Johnson vetoes Trumbull's Civil Rights bill. This is the veto that loses him the moderates."],
      ["dc","1866-04-09","First big override","The Civil Rights Act of 1866 becomes law over his veto. It defines citizenship and protects the right to make contracts, sue, and own property."],
      ["dc","1866-06-13","14th Amendment passes Congress","Birthright citizenship, due process, and equal protection, written into the Constitution and sent to the states."],
      ["dc","1866-08-28","Swing Around the Circle","Johnson's speaking tour of the North. He trades insults with hecklers. It backfires badly."],
      ["dc","1866-11-06","Republican landslide","The fall midterm elections give Republicans veto-proof majorities in both houses.", true],
      ["dc","1867-03-02","Reconstruction Acts","Ten Southern states put under five military districts. They must write new constitutions with Black male voting and ratify the 14th Amendment. Same day: the Tenure of Office Act limits Johnson's power to fire officials."],
      ["dc","1868-02-24","Johnson impeached","Three days after Johnson fires War Secretary Edwin Stanton, the House impeaches him."],
      ["dc","1868-05-16","Acquitted by one vote","The Senate falls one vote short of the two-thirds needed to remove him. Seven Republicans vote to acquit."],
      ["dc","1868-07-28","14th Amendment ratified","Ratification certified, after Southern states were required to approve it as a condition of readmission."],
      ["dc","1868-11-03","Grant elected","Ulysses S. Grant defeats Democrat Horatio Seymour."],
      ["dc","1869-02-26","15th Amendment passes Congress","Bars denying the vote by race. It says nothing about sex, and nothing about poll taxes or literacy tests."],
      ["dc","1869-03-04","Grant inaugurated","Johnson leaves office. Grant takes over with Republican majorities in both houses."],
      ["dc","1870-02-03","15th Amendment ratified","The race bar on voting is now in the Constitution."],
      ["dc","1870-05-31","First Enforcement Act","Federal penalties for interfering with voting. The first of several laws aimed at the Klan."],
      ["south","1865-11-24","Black Codes begin","Mississippi passes the first, and South Carolina follows. Laws restricting freedpeople's movement, work, and property."],
      ["south","1866-01-01","Klan founded","Ku Klux Klan founded in Pulaski, Tennessee, around the winter of 1865–66. It starts as a social club and turns into a terror organization.", true],
      ["south","1866-05-01","Memphis massacre","Over three days, white mobs, police among them, kill dozens of Black residents and burn homes, churches, and schools."],
      ["south","1866-06-21","Southern Homestead Act","Opens federal land in five Southern states, with freedpeople and white Unionists first in line. The land is mostly poor and freedpeople lack money for tools and seed, so few succeed."],
      ["south","1866-07-24","Tennessee readmitted","The only ex-Confederate state to ratify the 14th Amendment quickly, and the first back in."],
      ["south","1866-07-30","New Orleans massacre","A convention meeting on Black suffrage is attacked by police and a white mob. Dozens killed. Northern opinion hardens."],
      ["south","1866-11-01","South rejects 14th","Over the following months, every other ex-Confederate state votes it down. Congress concludes it must impose terms.", true],
      ["south","1867-05-01","Black men register","Under army supervision, Black men register to vote across the South, in large numbers.", true],
      ["south","1867-11-05","New state conventions","Late 1867 into 1868: conventions with Black delegates write new state constitutions.", true],
      ["south","1868-01-01","Sharecropping spreads","After two years of failed wage contracts, planters and freedpeople across the cotton South settle on sharecropping.", true],
      ["south","1868-06-25","Most states readmitted","Six states readmitted together; Arkansas went days earlier."],
      ["south","1868-09-03","Georgia expels Black legislators","White legislators vote to expel elected Black members."],
      ["south","1868-10-15","Klan election terror","Around the 1868 election, hundreds are killed, especially in Louisiana and Georgia.", true],
      ["south","1870-02-25","Revels takes Senate seat","Hiram Revels of Mississippi becomes the first Black U.S. senator."],
      ["west","1866-12-21","Fetterman fight","Lakota and allied warriors wipe out an army detachment during Red Cloud's War."],
      ["west","1867-03-30","Alaska purchase","Seward's treaty with Russia."],
      ["west","1867-10-21","Medicine Lodge treaties","Southern Plains nations agree to reservations in Indian Territory."],
      ["west","1868-04-29","Fort Laramie Treaty","Ends Red Cloud's War and creates the Great Sioux Reservation."],
      ["west","1868-11-27","Washita","Custer's troops attack Black Kettle's Cheyenne camp."],
      ["west","1869-05-10","Golden spike","The first transcontinental railroad is completed in Utah."],
      ["north","1866-04-12","Contraction Act","The Treasury starts pulling greenbacks out of circulation. The money fight begins."],
      ["north","1866-05-10","Equal Rights Association","Women's rights activists and abolitionists form a joint group for universal suffrage."],
      ["north","1866-08-20","National Labor Union","The first national labor federation forms, pushing for an eight-hour day."],
      ["north","1868-06-25","Federal 8-hour law","An eight-hour day for federal laborers. Weakly enforced."],
      ["north","1869-05-15","Women's movement splits","Elizabeth Cady Stanton and Susan B. Anthony found a new group after breaking with allies over the 15th Amendment. Lucy Stone's rival group follows in November."],
      ["north","1869-09-24","Black Friday","A scheme to corner the gold market collapses and drags in Grant's circle."]
    ],

    factions: {
      nodes: {
        johnson:   { name: "Johnson & allies", who: "President Andrew Johnson, Secretary of State William Seward, Navy Secretary Gideon Welles, and a few conservative Republicans." },
        radicals:  { name: "Radical Republicans", who: "Thaddeus Stevens, Charles Sumner, Benjamin Wade, and abolitionist allies outside Congress." },
        moderates: { name: "Moderate Republicans", who: "Lyman Trumbull, William Pitt Fessenden, John Bingham, John Sherman. The party's majority." },
        democrats: { name: "Northern Democrats", who: "The wartime opposition, including antiwar Copperheads. Their 1868 nominee: Horatio Seymour." },
        southgov:  { name: "Ex-Confederate South", who: "Planters and former Confederate officials who ran Johnson's state governments, and later the Klan and its allies." },
        freed:     { name: "Freedpeople", who: "Four million formerly enslaved people, plus Black leaders such as Frederick Douglass and, later, Black officeholders." },
        army:      { name: "Army & the Bureau", who: "General Grant, War Secretary Stanton, district commanders like Philip Sheridan, and the Freedmen's Bureau under O. O. Howard." },
        southrep:  { name: "Southern Republicans", who: "Freedpeople's white allies in the South: Unionist Southerners and Northern newcomers." },
        women:     { name: "Women's rights", who: "Elizabeth Cady Stanton, Susan B. Anthony, Lucy Stone. Longtime abolitionist allies." }
      },
      order: ["moderates","radicals","johnson","democrats","southgov","freed","army","southrep","women"],
      phases: [
        { label: "Dec 1865", sub: "Johnson's plan stands",
          note: "Johnson's governments are in place. Moderates still hope to work with him. Only the Radicals are openly at war with the President.",
          pos: { johnson:[500,70], democrats:[670,190], radicals:[130,90], moderates:[380,190], women:[86,250], army:[400,330], southgov:[640,370], freed:[230,410], southrep:[160,490] },
          ghost: ["southrep"],
          edges: [
            ["johnson","southgov","ally","Pardons and quick readmission"],
            ["johnson","democrats","ally","Shared opposition to federal power over the South"],
            ["johnson","moderates","uneasy","Moderates still hope for a deal"],
            ["radicals","johnson","opposed","Radicals want his plan dead"],
            ["radicals","moderates","uneasy","Same party, different goals"],
            ["radicals","freed","ally","Radicals push for equal rights"],
            ["southgov","freed","opposed","Black Codes"],
            ["army","freed","uneasy","The Bureau protects freedpeople but also pushes them into labor contracts"],
            ["army","southgov","uneasy","Occupation, with Johnson undercutting the army"],
            ["women","radicals","ally","Old abolitionist alliance"]
          ] },
        { label: "1866", sub: "The break",
          note: "Johnson's vetoes push the moderates into the Radicals' camp. The South rejects the 14th Amendment, and the massacres in Memphis and New Orleans harden Northern opinion.",
          pos: { johnson:[500,70], democrats:[670,190], radicals:[130,90], moderates:[230,190], women:[86,250], army:[420,320], southgov:[640,370], freed:[230,410], southrep:[160,490] },
          ghost: ["southrep"],
          edges: [
            ["johnson","moderates","opposed","Vetoes of the Bureau and Civil Rights bills"],
            ["radicals","moderates","ally","Overrides and the 14th Amendment"],
            ["johnson","democrats","ally","A joint \"National Union\" campaign for the midterms"],
            ["johnson","southgov","ally","He urges them to reject the 14th"],
            ["southgov","moderates","opposed","The South rejects the 14th Amendment"],
            ["southgov","freed","opposed","Memphis and New Orleans massacres"],
            ["radicals","freed","ally","Civil Rights Act"],
            ["army","freed","uneasy","Bureau renewed over Johnson's veto"],
            ["army","johnson","uneasy","Grant and Stanton start to drift toward Congress"],
            ["women","radicals","uneasy","The 14th writes \"male\" into the Constitution"]
          ] },
        { label: "1867–68", sub: "Congress takes over",
          note: "Congress puts the South under military rule and enfranchises Black men. Johnson is impeached and survives by one vote. In the South, a new Republican coalition meets organized terror.",
          pos: { johnson:[590,70], democrats:[670,200], radicals:[120,90], moderates:[260,180], women:[86,250], army:[300,300], southgov:[640,390], freed:[230,420], southrep:[420,470] },
          ghost: [],
          edges: [
            ["radicals","moderates","ally","Reconstruction Acts and impeachment, though seven Republicans vote to acquit"],
            ["radicals","johnson","opposed","Impeachment"],
            ["army","moderates","ally","The army enforces Congress's plan"],
            ["army","johnson","opposed","Stanton refuses to leave; Grant breaks with Johnson"],
            ["freed","radicals","ally","Black men vote Republican"],
            ["freed","southrep","ally","A new Southern Republican coalition"],
            ["army","southrep","ally","New state governments lean on federal troops"],
            ["southgov","freed","opposed","Klan terror"],
            ["southgov","southrep","opposed","Klan targets white Republicans too"],
            ["democrats","southgov","ally","The 1868 Democratic campaign"],
            ["johnson","democrats","uneasy","Democrats pass him over for Seymour"],
            ["women","radicals","opposed","The 15th Amendment leaves women out; the movement splits"]
          ] }
      ]
    },

    map: {
      title: "The South under Reconstruction",
      view: "556 226 584 376",
      hint: "See its district, commander, and readmission date.",
      views: [
        { label: "Military districts, 1867", legend: [
          ["d1", "First District: Virginia. Commander John Schofield."],
          ["d2", "Second District: the Carolinas. Commander Daniel Sickles."],
          ["d3", "Third District: Georgia, Alabama, Florida. Commander John Pope."],
          ["d4", "Fourth District: Mississippi, Arkansas. Commander Edward Ord."],
          ["d5", "Fifth District: Louisiana, Texas. Commander Philip Sheridan, until Johnson removed him."],
          ["d0", "Tennessee: readmitted in 1866, no district."]
        ]},
        { label: "Readmission to Congress", legend: [
          ["p1", "1866: ratified the 14th early"],
          ["p2", "1868: under the Reconstruction Acts"],
          ["p3", "1870: last to return"],
          ["p4", "Georgia: readmitted, expelled, readmitted"]
        ]}
      ],
      borderLegend: "Union slave states, not reconstructed",
      grid: [
        ["MO",1,0],["KY",2,0],["WV",3,0],["VA",4,0],["MD",5,0],
        ["AR",1,1],["TN",2,1],["NC",3,1],["SC",4,1],
        ["TX",0,2],["LA",1,2],["MS",2,2],["AL",3,2],["GA",4,2],
        ["FL",4,3]
      ],
      states: {
        MO: { name: "Missouri", border: true, borderLabel: "Union" }, KY: { name: "Kentucky", border: true, borderLabel: "Union" },
        WV: { name: "West Virginia", border: true, borderLabel: "Union" }, MD: { name: "Maryland", border: true, borderLabel: "Union" },
        VA: { name: "Virginia", v: [["d1", "District 1"], ["p3", "1870"]], info: ["First District. Commander John Schofield.", "Readmitted: Jan 1870."] },
        NC: { name: "North Carolina", v: [["d2", "District 2"], ["p2", "1868"]], info: ["Second District. Commander Daniel Sickles.", "Readmitted: July 1868."] },
        SC: { name: "South Carolina", v: [["d2", "District 2"], ["p2", "1868"]], info: ["Second District. Commander Daniel Sickles.", "Readmitted: July 1868."] },
        GA: { name: "Georgia", v: [["d3", "District 3"], ["p4", "1868/70"]], info: ["Third District. Commander John Pope.", "Readmitted 1868, expelled 1869, back July 1870."] },
        AL: { name: "Alabama", v: [["d3", "District 3"], ["p2", "1868"]], info: ["Third District. Commander John Pope.", "Readmitted: July 1868."] },
        FL: { name: "Florida", v: [["d3", "District 3"], ["p2", "1868"]], info: ["Third District. Commander John Pope.", "Readmitted: June 1868."] },
        MS: { name: "Mississippi", v: [["d4", "District 4"], ["p3", "1870"]], info: ["Fourth District. Commander Edward Ord.", "Readmitted: Feb 1870."] },
        AR: { name: "Arkansas", v: [["d4", "District 4"], ["p2", "1868"]], info: ["Fourth District. Commander Edward Ord.", "Readmitted: June 1868."] },
        LA: { name: "Louisiana", v: [["d5", "District 5"], ["p2", "1868"]], info: ["Fifth District. Commander Philip Sheridan, until Johnson removed him.", "Readmitted: July 1868."] },
        TX: { name: "Texas", v: [["d5", "District 5"], ["p3", "1870"]], info: ["Fifth District. Commander Philip Sheridan, until Johnson removed him.", "Readmitted: Mar 1870."] },
        TN: { name: "Tennessee", v: [["d0", "No district"], ["p1", "1866"]], info: ["Not in a military district.", "Readmitted: July 1866."] }
      },
      notes: [
        "Tennessee ratified the 14th Amendment in July 1866 and was readmitted at once, so it was never placed in a military district.",
        "The gray states were slave states that stayed in the Union. Reconstruction did not cover them.",
        "Georgia was readmitted in 1868, then sent back under military rule in 1869 after expelling its Black legislators. It returned for good in July 1870."
      ]
    },

    cast: [
      ["The White House", [
        { id: "johnson", name: "Andrew Johnson", aliases: ["Andrew Johnson"], role: "17th president. Tennessee Unionist and Democrat, put on Lincoln's 1864 ticket for balance.", watch: "How his vetoes and temper drive moderates into the Radicals' arms." },
        { id: "estanton", name: "Edwin Stanton", aliases: ["Edwin Stanton", "Stanton"], role: "Secretary of War, held over from Lincoln. Quietly sided with Congress.", watch: "His firing in February 1868 is the trigger for impeachment." }
      ]],
      ["Congress", [
        { id: "stevens", name: "Thaddeus Stevens", aliases: ["Thaddeus Stevens", "Stevens"], role: "Pennsylvania congressman and the leading House Radical. Dies in August 1868.", watch: "He wanted land taken from planters and given to freedpeople. Measure what Congress does against what he wanted." },
        { id: "sumner", name: "Charles Sumner", aliases: ["Charles Sumner", "Sumner"], role: "Massachusetts senator. Radical, and an absolutist on equal rights.", watch: "Principle versus coalition-building. He sometimes opposed compromises his own side needed." },
        { id: "wade", name: "Benjamin Wade", aliases: ["Benjamin Wade", "Wade"], role: "Ohio senator, Radical, president pro tempore of the Senate.", watch: "Next in line if Johnson were removed. That made some senators nervous about convicting." },
        { id: "trumbull", name: "Lyman Trumbull", aliases: ["Lyman Trumbull", "Trumbull"], role: "Illinois senator, moderate. Wrote the Freedmen's Bureau and Civil Rights bills.", watch: "His break with Johnson is the hinge of 1866. He later votes to acquit." },
        { id: "fessenden", name: "William Pitt Fessenden", aliases: ["William Pitt Fessenden", "Fessenden"], role: "Maine senator, moderate. Chaired the Joint Committee on Reconstruction.", watch: "The cautious center. Also votes to acquit." },
        { id: "bingham", name: "John Bingham", aliases: ["John Bingham", "Bingham"], role: "Ohio congressman, moderate. Main author of the 14th Amendment's first section.", watch: "Citizenship and \"equal protection\" in his words. Later an impeachment prosecutor." }
      ]],
      ["The army and the Bureau", [
        { id: "grant", name: "Ulysses S. Grant", aliases: ["Ulysses S. Grant", "Grant"], role: "Commanding general of the army. Elected president in 1868.", watch: "His slow drift from Johnson's side to Congress's." },
        { id: "howard", name: "Oliver Otis Howard", aliases: ["Oliver Otis Howard", "O. O. Howard", "Howard"], role: "Union general who ran the Freedmen's Bureau.", watch: "Ordered to return confiscated land to its former owners. Watch how the land question dies." },
        { id: "sheridan", name: "Philip Sheridan", aliases: ["Philip Sheridan", "Sheridan"], role: "General commanding Louisiana and Texas.", watch: "Called New Orleans a massacre and removed obstructive officials. Johnson removed him in 1867." }
      ]],
      ["Freedpeople and their allies", [
        { id: "douglass", name: "Frederick Douglass", aliases: ["Frederick Douglass", "Douglass"], role: "The most prominent Black leader in the country.", watch: "Pressed Johnson to his face on Black voting in early 1866. Later the 15th Amendment fight." },
        { id: "ecstanton", name: "Elizabeth Cady Stanton & Susan B. Anthony", aliases: ["Elizabeth Cady Stanton", "Susan B. Anthony", "Stanton and Anthony"], role: "Women's rights leaders and longtime abolitionists.", watch: "Their break with old allies over the 14th and 15th Amendments, and the ugly arguments that came with it." }
      ]],
      ["The opposition", [
        { id: "stephens", name: "Alexander Stephens", aliases: ["Alexander Stephens", "Stephens"], role: "Former vice president of the Confederacy. Elected to the Senate by Georgia in 1866.", watch: "A symbol of why Congress refused to seat the South." },
        { id: "forrest", name: "Nathan Bedford Forrest", aliases: ["Nathan Bedford Forrest", "Forrest"], role: "Former Confederate general.", watch: "Widely identified as an early leader of the Klan." },
        { id: "seymour", name: "Horatio Seymour", aliases: ["Horatio Seymour", "Seymour"], role: "Former New York governor. Democratic nominee in 1868.", watch: "The 1868 election as a referendum on Reconstruction." }
      ]]
    ],

    recall: [
      ["What did Johnson do in early 1866 that turned the moderate Republicans against him?", "He vetoed the Freedmen's Bureau extension and then the Civil Rights bill, both written by the moderate Lyman Trumbull. He also attacked Congress's leaders by name in public. Moderates concluded there was no deal to be had."],
      ["In plain words, what does the 14th Amendment do? Name as many of its five sections as you can.", "Section 1: birthright citizenship, due process, and equal protection. Section 2: states that deny adult men the vote lose House seats. Section 3: ex-Confederates who had sworn an oath to the Constitution are barred from office. Section 4: Union debt is paid, Confederate debt is void, and no one is paid for freed slaves. Section 5: Congress can enforce it."],
      ["Why did Congress put the South under military rule in 1867?", "The Southern states (except Tennessee) rejected the 14th Amendment, and violence like Memphis and New Orleans showed Johnson's governments would not protect freedpeople. The 1866 elections gave Congress the votes to impose its own terms."],
      ["Why did impeachment fail?", "The Senate voted 35 to 19, one vote short of two-thirds. Seven Republicans voted to acquit, for a mix of reasons: doubts about the legal charges, worry about weakening the presidency, distaste for Benjamin Wade as successor, and the fact that Johnson had less than a year left."],
      ["Why did sharecropping win out over wage labor and land ownership?", "Freedpeople lost their shot at owning land when Johnson returned it to pardoned planters. Wage labor in gangs looked too much like slavery, and planters had little cash. Sharecropping gave families their own plot with no overseer and let planters pay with a share of the crop instead of money."],
      ["Who was left out of the new citizenship, and what did that do to old alliances?", "Women most visibly. The 14th Amendment introduced the word \"male,\" and the 15th banned racial barriers to voting but not sex. Many women's rights leaders broke with their abolitionist allies, and the movement split in 1869."]
    ]
  },
  {
    id: "ch3",
    num: 3,
    title: "The Greater Reconstruction",
    part: "Part I",
    pages: "pp. 103–135",

    previously: {
      label: "Chapter 2 · Radical Reconstruction",
      bullets: [
        "In December 1865 Congress refused to seat the South and began taking Reconstruction away from Johnson.",
        "Johnson's vetoes pushed the moderates to the Radicals. The Civil Rights Act and the 14th Amendment passed over his opposition.",
        "After the South rejected the 14th and white mobs killed Black residents in Memphis and New Orleans, the 1867 Reconstruction Acts put the South under military rule and gave Black men the vote.",
        "Johnson was impeached in 1868 and survived by one vote. Grant won the presidency that fall.",
        "The 15th Amendment banned racial bars to voting but left women out. Freedpeople got votes but not land, and sharecropping took hold."
      ]
    },

    question: "Could the Republicans' plan for a nation of free, equal, home-owning citizens be carried across the West? And who would it leave out?",

    before: {
      label: "Before: Reconstruction in the South",
      paras: [
        "Chapter 2 followed the fight over the South: Congress against Johnson, the 14th Amendment, and military rule. The goal was a South rebuilt on the Northern model, with free labor, contracts, and one equal citizenship.",
        "Meanwhile most of the land between the Missouri River and California was territories, not states, and much of it was still Indian country."
      ]
    },
    opens: {
      label: "Where chapter 3 goes",
      paras: [
        "The same years, roughly 1865 to 1871, seen from the West. White's argument is that Reconstruction was a national project, and the West was part of it.",
        "The cast changes: Plains nations, the army, railroad builders, Chinese workers, Mormons, and reformers who wanted to remake Indians into farmers."
      ]
    },

    watch: [
      ["The West was Reconstruction too.", "White's \"Greater Reconstruction\" means the same Republican plan aimed at the South (free labor, homes, contracts, one citizenship) was also aimed at the West. Watch how he sets the two regions side by side, and where the plan worked better in one than the other."],
      ["Conquest and \"uplift\" were one policy.", "Reformers wanted Indians remade as Christian farmers on reservations. The army was there for those who refused. Watch how White treats Grant's Peace Policy and the army as two halves of the same plan, not opposites."],
      ["Uniform citizenship had edges.", "The 14th Amendment left out \"Indians not taxed.\" The Burlingame Treaty and the Naturalization Act of 1870 kept Chinese immigrants from becoming citizens. Watch who gets drawn outside the line, and why."],
      ["Washington was strongest in the West.", "Land grants, railroad loans, the army, territorial governments: the federal government built the West directly. Watch the contrast with the South, where Washington's will to act faded."],
      ["Railroads as the engine.", "White wrote a whole book, Railroaded, arguing the transcontinentals were built ahead of need, badly run, and propped up by government. Watch for that skepticism here."],
      ["The home as the test.", "Indians, Chinese, and Mormons were each judged by whether they made a \"proper\" home: one husband, one wife, children, a farm or a wage. Watch this idea. The next chapter is called \"Home.\""]
    ],

    next: [
      ["Fort Laramie is broken.", "Custer's 1874 expedition found gold in the Black Hills. The Lakota and Cheyenne destroyed Custer's command at the Little Bighorn in 1876, and Congress seized the Black Hills in 1877. In 1980 the Supreme Court ruled the taking illegal and awarded compensation. The Lakota have refused the money, which now tops a billion dollars."],
      ["Reservations are broken up.", "The Dawes Act of 1887 split reservations into family farms and sold off the \"surplus.\" Native-held land fell from about 138 million acres in 1887 to about 48 million by 1934. Congress made all Native Americans born in the U.S. citizens in 1924."],
      ["Chinese exclusion.", "The Chinese Exclusion Act of 1882 was the first federal law to bar immigrants by nationality. It lasted until 1943. In 1898 the Supreme Court ruled (Wong Kim Ark) that children born here to Chinese parents are citizens under the 14th Amendment."],
      ["Polygamy ends.", "Federal laws in 1882 and 1887 jailed polygamists and seized church property. The church renounced plural marriage in 1890, and Utah became a state in 1896."],
      ["The bison collapse.", "Commercial hunters killed the great herds in the 1870s and 1880s. By the late 1880s fewer than a thousand bison were left, and the Plains nations lost the base of their way of life."],
      ["The railroad scandal.", "In 1872 newspapers exposed Crédit Mobilier, the construction company Union Pacific insiders used to pay themselves, with shares handed to congressmen. White takes it up in later chapters."]
    ],

    termGroups: [
      { id: "ideas", name: "Big ideas", terms: [
        { id: "greater", name: "Greater Reconstruction", aliases: ["Greater Reconstruction"], def: "White's name for Reconstruction as a national project, not just a Southern one: the effort to remake both the South and the West in the image of the free-labor North. He borrows the term from the historian Elliott West." },
        { id: "freelabor", name: "Free labor", aliases: ["free labor", "Free labor"], def: "The Republican ideal: men work for themselves or for wages by their own choice, under contracts they freely sign. Wage work is a stage on the way to owning a farm or shop. Slavery, peonage, and \"coolie\" labor were its opposites." },
        { id: "home", name: "The home", aliases: ["the home"], def: "White's central symbol for the era. A proper home meant a husband who earned, a wife who kept house, and children, on a farm or supported by a wage. Republicans treated it as the foundation of citizenship, and judged other peoples by it." },
        { id: "assimilation", name: "Assimilation", aliases: ["assimilation", "assimilate"], def: "Making a people give up their own ways and adopt the majority's. For Indians that meant farming instead of hunting, private property instead of shared land, Christianity, English, and Anglo-American family life." },
        { id: "territory", name: "Territory", aliases: ["territories", "territorial"], def: "Land governed directly by the federal government until it became a state. Congress set its laws, the President appointed its governor and judges, and it had only a non-voting delegate in Congress. That is why Congress could impose rules there that it couldn't impose on states." }
      ]},
      { id: "indianpolicy", name: "Indian policy", terms: [
        { id: "reservation", name: "Reservation", aliases: ["reservations", "reservation"], def: "Land set aside by treaty or order for a tribe, with the rest of its homeland given up. Reformers saw reservations as schools for farming and Christianity. For the nations, they meant confinement, dependence on promised rations, and agents who controlled daily life." },
        { id: "treaties", name: "Indian treaties", aliases: ["Indian treaties"], def: "Formal agreements between the U.S. and tribes, treated like agreements with foreign nations and ratified only by the Senate. In them tribes gave up land in exchange for reservations, annuities, and promises of protection. Congress often failed to deliver what was promised." },
        { id: "annuities", name: "Annuities", aliases: ["annuities", "rations"], def: "Yearly payments of money, food, cloth, tools, and guns that treaties promised in exchange for land. Late or stolen annuities were a constant cause of hunger and war." },
        { id: "bia", name: "Indian Office", aliases: ["Indian Office", "Indian Bureau", "Bureau of Indian Affairs"], def: "The federal agency that ran Indian affairs, part of the Interior Department since 1849. Agents on each reservation handed out annuities. It was notorious for corruption, and the army wanted control of it moved to the War Department." },
        { id: "peacepolicy", name: "Peace Policy", aliases: ["Peace Policy"], def: "Grant's Indian policy from 1869. Churches nominated reservation agents, an unpaid Board of Indian Commissioners watched the money, and Indians on reservations were to be fed, taught, and converted. Those who stayed off reservations were treated as hostile and left to the army." },
        { id: "nottaxed", name: "\"Indians not taxed\"", aliases: ["Indians not taxed"], def: "The phrase that kept tribal Indians out. In the Civil Rights Act of 1866 it left them out of citizenship. In the 14th Amendment it left them out of the population count for House seats, and the citizenship clause's words \"subject to the jurisdiction thereof\" were read to leave them out of citizenship too. Indians living in tribes were treated as members of their own nations." }
      ]},
      { id: "plains", name: "War on the Plains", terms: [
        { id: "plainsnations", name: "Plains nations", aliases: ["Plains nations"], def: "The peoples of the Great Plains, most of whom lived by hunting bison on horseback: the Lakota, Cheyenne, Arapaho, Kiowa, Comanche, and others. Railroads, settlers, and hunters cut straight through their lands after 1865." },
        { id: "lakota", name: "Lakota (Sioux)", aliases: ["Lakota", "Sioux"], def: "The western branch of the Sioux nations, made up of several bands including the Oglala and Brulé. They were the strongest military power on the northern Plains. Red Cloud was Oglala." },
        { id: "bozeman", name: "Bozeman Trail", aliases: ["Bozeman Trail"], def: "A shortcut from the Oregon Trail to the Montana gold fields, cut through Lakota hunting grounds in the 1860s. The army built forts to protect it. Red Cloud's War (1866–68) forced the army to abandon them." },
        { id: "winterwar", name: "Winter campaigns", aliases: ["winter campaign", "winter campaigns"], def: "Sherman and Sheridan's method: strike Indian camps in winter, when ponies were weak and families couldn't flee, and destroy lodges, food, and horses. It brought the Civil War's \"hard war\" against civilian resources onto the Plains. Washita (1868) was the model." },
        { id: "bison", name: "Bison", aliases: ["bison", "buffalo"], def: "The animal at the center of Plains life: food, shelter, clothing, tools, and trade. Railroads made commercial slaughter possible, and many officers welcomed it as a way to force the nations onto reservations." },
        { id: "navajo", name: "Navajo and the Long Walk", aliases: ["Navajo", "Long Walk", "Bosque Redondo"], def: "In 1864 the army forced about 8,000 Navajo to walk some 300 miles to Bosque Redondo, a barren reservation in eastern New Mexico. Hundreds died on the way and many more there. The 1868 treaty let them return to a reservation on part of their homeland." }
      ]},
      { id: "laws", name: "Laws and treaties, in order", terms: [
        { id: "homesteadact", name: "Homestead Act (1862)", aliases: ["Homestead Act"], def: "Gave 160 acres of public land free to anyone who lived on it and farmed it for five years, paying only small fees. It was open to citizens and immigrants who meant to become citizens, women heads of household included, but not to anyone who had fought against the U.S. It was free labor's dream in law: a nation of small farm owners." },
        { id: "pacificrr", name: "Pacific Railway Acts (1862, 1864)", aliases: ["Pacific Railway Acts", "Pacific Railway Act"], def: "The laws that paid for the first transcontinental railroad. Two companies were chartered.",
          bullets: [
            ["Land.", "For every mile of track, alternate square-mile sections of public land on both sides. The 1864 act doubled this to 20 square miles per mile of track."],
            ["Loans.", "The government lent its bonds: $16,000 a mile on flat land, $32,000 on the high desert between the mountain ranges, and $48,000 in the mountains."],
            ["The 1864 sweetener.", "The government's loan became a second mortgage, so the companies could raise money from private investors first."]
          ] },
        { id: "terrsuffrage", name: "Territorial Suffrage Act (1867)", aliases: ["Territorial Suffrage Act"], def: "January 1867. It barred denying the vote in any federal territory because of race, color, or former slavery. Congress could do this before the Reconstruction Acts, and before the 15th Amendment, because it governed territories directly." },
        { id: "peonage", name: "Peonage Act (1867)", aliases: ["Peonage Act", "peonage"], def: "March 1867. Peonage is forced labor to work off a debt, common in New Mexico, where Native captives were also held as servants. The act banned peonage in New Mexico and everywhere else, carrying the 13th Amendment into the Southwest." },
        { id: "medicinelodge", name: "Medicine Lodge Treaty (1867)", aliases: ["Medicine Lodge"], def: "October 1867, in Kansas. The Kiowa, Comanche, Plains Apache, Southern Cheyenne, and Arapaho agreed to reservations in Indian Territory in return for annuities and the right to hunt south of the Arkansas River. Congress was slow to pay, and the southern Plains were at war again within a year." },
        { id: "fortlaramie", name: "Fort Laramie Treaty (1868)", aliases: ["Fort Laramie Treaty", "Fort Laramie"], def: "The treaty that ended Red Cloud's War, a rare outright win for a Plains nation over the army.",
          bullets: [
            ["Forts closed.", "The army abandoned its Bozeman Trail forts."],
            ["Great Sioux Reservation.", "All of present-day South Dakota west of the Missouri River, including the Black Hills, for the Lakota's \"absolute and undisturbed use.\""],
            ["Hunting lands.", "Land farther west, in Wyoming and Montana, stayed \"unceded Indian territory\" for hunting."],
            ["Future cessions.", "Any further sale of reservation land required three-quarters of the adult men to sign."]
          ] },
        { id: "navajotreaty", name: "Navajo Treaty (1868)", aliases: ["Navajo Treaty"], def: "June 1868. It ended the Bosque Redondo confinement and created a Navajo reservation on part of their homeland in New Mexico and Arizona. It is one of the very few times a nation removed from its homeland was allowed to go back." },
        { id: "burlingame", name: "Burlingame Treaty (1868)", aliases: ["Burlingame Treaty"], def: "July 1868, between the U.S. and China. It guaranteed Chinese the right to move to and live in the U.S. on the same terms as people from the most favored nations, mainly to secure cheap labor and trade. It expressly did not give either country's people the right to become citizens of the other." },
        { id: "nat1870", name: "Naturalization Act of 1870", aliases: ["Naturalization Act of 1870", "Naturalization Act"], def: "July 1870. Before it, only \"free white persons\" could become naturalized citizens. The act added people \"of African nativity\" and \"African descent.\" Senator Charles Sumner tried to drop the racial test entirely and lost. Chinese immigrants stayed barred." },
        { id: "endtreaties", name: "End of treaty-making (1871)", aliases: ["Indian Appropriations Act", "treaty-making"], def: "A clause slipped into the March 1871 Indian Appropriations Act: no tribe would again be recognized as a nation the U.S. could make treaties with. Old treaties stayed in force. The House, which had to pay for treaties it had no say in, pushed it through. From then on Congress simply passed laws about Indians." }
      ]},
      { id: "rail", name: "Railroads and land", terms: [
        { id: "transcon", name: "Transcontinental railroad", aliases: ["transcontinental railroad", "transcontinental", "transcontinentals"], def: "The first line across the continent. The Central Pacific built east from Sacramento over the Sierra Nevada, and the Union Pacific built west from Omaha across the Plains. They met at Promontory Summit, Utah, on May 10, 1869." },
        { id: "cp", name: "Central Pacific", aliases: ["Central Pacific"], def: "The western company, run by four Sacramento merchants known as the Big Four: Leland Stanford, Collis Huntington, Mark Hopkins, and Charles Crocker. Chinese workers built most of its line." },
        { id: "up", name: "Union Pacific", aliases: ["Union Pacific"], def: "The eastern company. Its insiders built the line through their own construction company, Crédit Mobilier, and paid themselves out of the government's money. Irish immigrants and Civil War veterans made up much of its workforce." },
        { id: "checker", name: "Land grants and the checkerboard", aliases: ["land grants", "land grant", "checkerboard"], def: "Railroad grants came as alternate square-mile sections along the route, so a map looked like a checkerboard. The government kept the other squares, figuring the railroad would raise their value. Railroads sold their land to settlers to raise money, and often held it off the market for years." },
        { id: "publicdomain", name: "Public domain", aliases: ["public domain", "public land"], def: "Land owned by the federal government and not yet sold or granted. Most of the West was public domain once Indian title was taken away. It was what the government gave out to homesteaders, railroads, states, and colleges." },
        { id: "alaska", name: "Alaska purchase", aliases: ["Alaska"], def: "Bought from Russia in 1867 for $7.2 million, pushed through by Secretary of State Seward. Russia wanted to sell a colony it couldn't defend. It was run by the army and then the Treasury, with almost no civil government, for years." }
      ]},
      { id: "others", name: "Other Westerners", terms: [
        { id: "chinese", name: "Chinese immigrants", aliases: ["Chinese immigrants", "Chinese workers"], def: "Mostly young men from Guangdong province in southern China, drawn by the Gold Rush and then railroad jobs. Most meant to earn money and go home. They faced special taxes, exclusion from courts, and mob violence, especially in California." },
        { id: "coolie", name: "\"Coolie\" labor", aliases: ["coolie", "coolies"], def: "A slur for bound Asian laborers, like those shipped to Cuba and Peru under contracts that were close to slavery. Americans used it to paint all Chinese workers as unfree, and so as a threat to free labor. Most Chinese in the U.S. had in fact borrowed their passage money and paid it back out of wages." },
        { id: "mormons", name: "Mormons and polygamy", aliases: ["Mormons", "Mormon", "polygamy", "plural marriage"], def: "Members of the Church of Jesus Christ of Latter-day Saints, who settled Utah from 1847 under Brigham Young. The church openly taught plural marriage, one man with several wives, from 1852. The Republicans' first platform, in 1856, called polygamy and slavery the \"twin relics of barbarism.\"" },
        { id: "antibigamy", name: "Morrill Anti-Bigamy Act (1862)", aliases: ["Anti-Bigamy Act"], def: "Made bigamy in the territories a federal crime and limited how much property a church could own. It was barely enforced at first, because Utah juries would not convict." },
        { id: "hispanos", name: "Hispanos and Mexican Americans", aliases: ["Hispanos", "Mexican Americans"], def: "Spanish-speaking people of the Southwest who became U.S. residents when the Treaty of Guadalupe Hidalgo ended the Mexican War in 1848. The treaty promised them citizenship and protection of their property. In practice they lost much of their land in long fights over old Spanish and Mexican land grants." }
      ]},
      { id: "numbers", name: "By the numbers", terms: [
        { id: "n-rrland", name: "About 129 million acres", aliases: [], def: "Federal land granted to railroads before the program ended in 1871. That is about a quarter more than the whole state of California. States gave tens of millions of acres more." },
        { id: "n-permile", name: "12,800 acres per mile", aliases: [], def: "The Union Pacific's grant for each mile of track after 1864. That is 20 square miles of land for every mile of railroad." },
        { id: "n-homestead", name: "160 acres", aliases: [], def: "A homestead: a square half a mile on each side, the size Republicans thought a family could farm. In much of the dry West, it was far too little to make a living." },
        { id: "n-cpchinese", name: "About 90 percent", aliases: [], def: "The Chinese share of the Central Pacific's workforce by early 1867, more than 11,000 men. In June 1867 about 3,000 of them struck for equal pay and shorter hours." },
        { id: "n-chinesepop", name: "About 63,000", aliases: [], def: "Chinese people counted in the U.S. in the 1870 census. Nearly four in five lived in California. Nationally they were about 1 in 600 Americans, but they were a much larger share of California's workers." },
        { id: "n-alaska", name: "About 2 cents an acre", aliases: [], def: "What the U.S. paid for Alaska: $7.2 million for roughly 375 million acres." },
        { id: "n-marias", name: "At least 173", aliases: [], def: "Piegan Blackfeet killed at the Marias River in January 1870, by the army's own count. Most were women, children, and old men, in a camp sick with smallpox. It was the wrong band." }
      ]}
    ],

    lanes: [
      { id: "dc", name: "Washington", sub: "policy for the West" },
      { id: "plains", name: "Indian country", sub: "Plains and Southwest" },
      { id: "far", name: "The Far West", sub: "railroads, Chinese, Mormons" },
      { id: "south", name: "The South", sub: "context from ch. 2", ctx: true }
    ],
    years: {
      1864: "Sand Creek sets the terms of the argument.",
      1865: "War ends in the East and spreads on the Plains.",
      1866: "Red Cloud's War closes the Bozeman Trail.",
      1867: "Reconstruction law reaches the West; the Peace Commission rides out.",
      1868: "Treaties in spring, war in winter.",
      1869: "The golden spike and the Peace Policy.",
      1870: "Marias, and the limits of citizenship.",
      1871: "Treaty-making ends; massacres at Camp Grant and Los Angeles."
    },
    events: [
      ["plains","1864-03-01","Navajo Long Walk","After a scorched-earth campaign, the army marches about 8,000 Navajo some 300 miles to Bosque Redondo in eastern New Mexico. Hundreds die.", true],
      ["plains","1864-11-29","Sand Creek massacre","Colorado volunteers under John Chivington attack Black Kettle's peaceful Cheyenne and Arapaho camp, killing more than 150 people, most of them women, children, and the elderly. Congress investigates, and the outrage shapes policy for years."],
      ["dc","1865-03-01","Doolittle inquiry","Congress creates a joint committee, led by Senator James Doolittle, to investigate the condition of the Indian tribes and the causes of war.", true],
      ["plains","1866-06-01","Red Cloud's War begins","Red Cloud walks out of talks at Fort Laramie as the army moves to fortify the Bozeman Trail through Lakota hunting grounds.", true],
      ["plains","1866-12-21","Fetterman fight","Lakota and allied warriors wipe out Captain William Fetterman's detachment of 81 men near Fort Phil Kearny. It is the army's worst loss on the Plains until the Little Bighorn."],
      ["dc","1867-01-01","Doolittle report","The committee blames frontier whites and broken promises for most Indian wars, and recommends peace commissions and reservations.", true],
      ["dc","1867-01-10","Territorial Suffrage Act","Black men can vote in all federal territories, two months before the Reconstruction Acts give them the vote in the South."],
      ["dc","1867-03-01","Nebraska becomes a state","Congress had overridden Johnson's veto in February, on the condition that Nebraska never deny the vote because of race."],
      ["dc","1867-03-02","Peonage Act","Bans debt servitude in New Mexico and everywhere else. The same day, Congress passes the first Reconstruction Act."],
      ["far","1867-03-30","Alaska purchase","Secretary of State Seward signs a treaty to buy Alaska from Russia for $7.2 million."],
      ["plains","1867-04-19","Hancock burns a village","General Winfield Scott Hancock's troops burn an abandoned Cheyenne and Lakota village on Pawnee Fork in Kansas. The southern Plains erupt in raids all summer."],
      ["far","1867-06-24","Chinese railroad strike","About 3,000 Chinese workers on the Central Pacific stop work for equal pay and shorter hours. The company cuts off their food and breaks the strike in about a week."],
      ["dc","1867-07-20","Peace Commission created","Congress creates a commission of generals and civilians, including Sherman and Commissioner Nathaniel Taylor, to make peace and move the nations onto reservations."],
      ["plains","1867-10-21","Medicine Lodge treaties","Southern Plains nations agree to reservations in Indian Territory."],
      ["plains","1868-04-29","Fort Laramie Treaty","Ends Red Cloud's War. The army abandons the Bozeman forts, and the Great Sioux Reservation is created. Red Cloud signs in November, after the forts burn."],
      ["plains","1868-06-01","Navajo Treaty","The Navajo are allowed to go home to a reservation on part of their homeland."],
      ["far","1868-07-25","Wyoming Territory","Congress organizes Wyoming Territory along the Union Pacific's route."],
      ["dc","1868-07-28","Burlingame Treaty","The U.S. and China guarantee free migration between the two countries, but no right to naturalize."],
      ["dc","1868-10-09","Peace Commission turns hawkish","Its final report urges an end to treaty-making and moving the Indian Office to the War Department."],
      ["plains","1868-11-27","Washita","Custer's 7th Cavalry attacks Black Kettle's Cheyenne camp at dawn in a winter campaign. Black Kettle and his wife are among the dead."],
      ["dc","1869-04-10","Board of Indian Commissioners","Grant signs the law creating an unpaid board of reformers to watch over Indian spending. The Peace Policy begins."],
      ["dc","1869-04-13","Ely Parker named commissioner","Grant's former aide, a Seneca, becomes the first Native American to head the Indian Office."],
      ["far","1869-05-10","Golden spike","The Central Pacific and Union Pacific meet at Promontory Summit, Utah."],
      ["far","1869-12-10","Wyoming women vote","Wyoming Territory gives women the vote, the first U.S. territory to do so."],
      ["plains","1870-01-23","Marias Massacre","Major Eugene Baker's troops attack a Piegan Blackfeet camp in Montana, the wrong band, killing at least 173, mostly women, children, and old men."],
      ["far","1870-02-12","Utah women vote","Utah's territorial legislature gives women the vote. Anti-polygamy reformers had hoped Mormon women would vote polygamy out. They didn't."],
      ["dc","1870-07-14","Naturalization Act of 1870","Opens naturalization to people of African descent, but not to Chinese immigrants."],
      ["dc","1870-07-15","Officers barred from civil posts","An army law bars officers from civil jobs, ending their service as Indian agents. Grant hands more agencies to the churches."],
      ["dc","1871-03-03","End of treaty-making","The Indian Appropriations Act declares that no tribe will again be treated as a nation for treaty purposes."],
      ["plains","1871-04-30","Camp Grant massacre","A party of Tucson Anglos, Mexican Americans, and Tohono O'odham kills about 144 Aravaipa and Pinal Apache, mostly women and children, at a camp under army protection. A jury acquits everyone."],
      ["far","1871-10-24","Los Angeles Chinese massacre","A mob of hundreds kills about 18 Chinese residents of Los Angeles, most of them by hanging."],
      ["south","1866-05-01","Memphis massacre","White mobs kill dozens of Black residents."],
      ["south","1867-03-02","Reconstruction Acts","The South is put under military rule."],
      ["south","1868-05-16","Johnson acquitted","He survives removal by one vote."],
      ["south","1868-11-03","Grant elected","He takes office in March 1869."],
      ["south","1870-02-03","15th Amendment ratified","No denying the vote because of race."]
    ],

    factions: {
      nodes: {
        congress:  { name: "Republican Congress", who: "The party that ran Washington: Radicals and moderates who wanted a West of small farms, railroads, and one citizenship, paid for with public land." },
        army:      { name: "The army", who: "Sherman and Sheridan's Military Division of the Missouri, plus officers like Custer. They wanted control of Indian policy and believed force decided things." },
        reformers: { name: "Reformers & churches", who: "Humanitarian reformers, Quakers and other churches, the Board of Indian Commissioners, and Ely Parker's Indian Office. They wanted Indians on reservations, farming, and converted." },
        plains:    { name: "Plains nations", who: "The Lakota, Cheyenne, Arapaho, Kiowa, Comanche, and their neighbors, with leaders such as Red Cloud and Black Kettle." },
        southwest: { name: "Southwest nations", who: "The Navajo and the Apache bands of Arizona and New Mexico." },
        railroads: { name: "Railroad companies", who: "The Central Pacific and Union Pacific and their financiers, among them Leland Stanford and the Big Four." },
        settlers:  { name: "Settlers & territorial whites", who: "Miners, ranchers, homesteaders, and local officials and militias, from Colorado to Arizona, who wanted Indian land opened and Indians gone." },
        chinese:   { name: "Chinese workers", who: "Immigrant laborers in California's mines and towns and on the Central Pacific." },
        mormons:   { name: "Mormons", who: "The Latter-day Saints of Utah Territory, led by Brigham Young." }
      },
      order: ["congress","army","reformers","plains","southwest","railroads","settlers","chinese","mormons"],
      phases: [
        { label: "1864–66", sub: "War after Sand Creek",
          note: "Sand Creek shocks the East, and Congress investigates. On the Plains, war spreads, and Red Cloud fights the army to a standstill on the Bozeman Trail. Congress has already backed the railroads with land and loans.",
          pos: { congress:[380,70], railroads:[640,80], reformers:[140,150], army:[580,230], plains:[330,300], southwest:[130,390], settlers:[590,390], chinese:[470,480], mormons:[150,270] },
          ghost: [],
          edges: [
            ["settlers","plains","opposed","Sand Creek, and miners and travelers on Indian land"],
            ["army","plains","opposed","Red Cloud's War and the Fetterman fight"],
            ["army","southwest","opposed","The Navajo held at Bosque Redondo"],
            ["reformers","settlers","opposed","Reformers blame frontier whites for Sand Creek"],
            ["congress","reformers","ally","The Doolittle inquiry"],
            ["congress","railroads","ally","The Pacific Railway Acts' land and loans"],
            ["railroads","chinese","uneasy","The Central Pacific hires thousands, at lower pay than whites"],
            ["settlers","chinese","opposed","Special taxes and mob violence in California"],
            ["congress","mormons","opposed","The 1862 anti-bigamy law"]
          ] },
        { label: "1867–68", sub: "The Peace Commission",
          note: "Congress sends generals and civilians to make treaties: Medicine Lodge, Fort Laramie, the Navajo treaty. Then, as promises go unkept, Sherman and Sheridan launch winter war, and Custer strikes the Washita.",
          pos: { congress:[380,70], railroads:[640,80], reformers:[170,150], army:[560,240], plains:[330,320], southwest:[140,400], settlers:[590,400], chinese:[470,480], mormons:[150,270] },
          ghost: [],
          edges: [
            ["congress","reformers","ally","The Peace Commission"],
            ["army","reformers","uneasy","Sherman sits on the commission but expects force to settle things"],
            ["congress","plains","uneasy","Medicine Lodge and Fort Laramie, with promised goods slow to come"],
            ["army","plains","opposed","Hancock's campaign, then the Washita"],
            ["congress","southwest","uneasy","The Navajo Treaty sends them home"],
            ["railroads","plains","opposed","The Union Pacific cuts through hunting grounds; raids on crews"],
            ["railroads","chinese","uneasy","The 1867 strike"],
            ["congress","chinese","uneasy","The Burlingame Treaty: free migration, no citizenship"],
            ["settlers","army","ally","Settlers demand protection and a harder line"],
            ["congress","mormons","opposed","Anti-polygamy bills"]
          ] },
        { label: "1869–71", sub: "Peace Policy and golden spike",
          note: "Grant hands reservations to churches and reformers, and the transcontinental is finished. The army keeps fighting those off the reservations, and Marias shows what that means. Congress ends treaty-making, and citizenship stays closed to Chinese.",
          pos: { congress:[380,70], railroads:[600,90], reformers:[230,120], army:[620,250], plains:[330,320], southwest:[140,400], settlers:[590,400], chinese:[470,480], mormons:[140,250] },
          ghost: [],
          edges: [
            ["congress","reformers","ally","The Board of Indian Commissioners and church-run agencies"],
            ["army","reformers","opposed","Fights over control of Indian policy; Marias turns opinion against the army"],
            ["army","plains","opposed","The Marias Massacre and campaigns against those off reservations"],
            ["reformers","plains","uneasy","Reservations, farming, and missionaries"],
            ["settlers","southwest","opposed","The Camp Grant massacre"],
            ["congress","railroads","ally","The golden spike, and more land grants"],
            ["settlers","chinese","opposed","The Los Angeles massacre"],
            ["congress","chinese","opposed","The 1870 Naturalization Act leaves them out"],
            ["congress","plains","opposed","Congress ends treaty-making"],
            ["congress","mormons","opposed","New anti-polygamy bills; Utah women get the vote"]
          ] }
      ]
    },

    map: {
      title: "The West, 1864–1871",
      view: "120 4 702 756",
      unit: "state or territory",
      hint: "See its status, its place on the railroad, and its wars and treaties.",
      views: [
        { label: "States and territories", legend: [
          ["d1", "State, with the year it was admitted"],
          ["d3", "Territory, with the year it was organized"],
          ["d0", "Indian Territory: unorganized land set aside for removed nations"],
          ["d2", "Alaska: bought from Russia, 1867"]
        ]},
        { label: "The first transcontinental", legend: [
          ["d4", "Central Pacific, built east from Sacramento"],
          ["d1", "Union Pacific, built west from Omaha"],
          ["d3", "Where they met: Promontory Summit, May 1869"]
        ]},
        { label: "Wars and treaties", legend: [
          ["p3", "Massacre or battle"],
          ["p1", "Treaty or reservation"],
          ["p4", "Both"]
        ]}
      ],
      grid: [
        ["WA",0,0],["ID",1,0],["MT",2,0],["DK",3,0],
        ["OR",0,1],["NV",1,1],["WY",2,1],["NE",3,1],
        ["CA",0,2],["UT",1,2],["CO",2,2],["KS",3,2],
        ["AK",0,3],["AZ",1,3],["NM",2,3],["IT",3,3],
        ["TX",3,4]
      ],
      states: {
        WA: { name: "Washington Territory", v: [["d3","Terr. 1853"], ["",""], ["",""]], info: ["Territory since 1853. State in 1889."] },
        ID: { name: "Idaho Territory", v: [["d3","Terr. 1863"], ["",""], ["",""]], info: ["Territory since 1863, after a gold rush. State in 1890."] },
        MT: { name: "Montana Territory", v: [["d3","Terr. 1864"], ["",""], ["p3","Marias 1870"]], info: ["Territory since 1864. The Bozeman Trail ran to its gold fields.", "Marias Massacre, January 1870: at least 173 Piegan Blackfeet killed."] },
        DK: { name: "Dakota Territory", ids: ["nd", "sd"], v: [["d3","Terr. 1861"], ["",""], ["p1","Sioux res. 1868"]], info: ["Territory since 1861, covering today's North and South Dakota.", "The Fort Laramie Treaty made everything west of the Missouri River, Black Hills included, the Great Sioux Reservation."] },
        OR: { name: "Oregon", v: [["d1","State 1859"], ["",""], ["",""]], info: ["State since 1859."] },
        NV: { name: "Nevada", v: [["d1","State 1864"], ["d4","Central Pac."], ["",""]], info: ["State since 1864, rushed in during the war for its silver and its Republican votes.", "The Central Pacific crossed it in 1868."] },
        WY: { name: "Wyoming Territory", v: [["d3","Terr. 1868"], ["d1","Union Pac."], ["p4","Red Cloud's War"]], info: ["Organized in 1868 along the Union Pacific line. First to give women the vote, in 1869.", "Red Cloud's War was fought over the Bozeman Trail forts here, 1866–68, and the Fort Laramie Treaty was signed here."] },
        NE: { name: "Nebraska", v: [["d1","State 1867"], ["d1","Union Pac."], ["",""]], info: ["Admitted in 1867 on the condition that it never deny the vote because of race.", "The Union Pacific started at Omaha, just across the river from Iowa."] },
        CA: { name: "California", labelAt: [374, 352], v: [["d1","State 1850"], ["d4","Central Pac."], ["p3","L.A. 1871"]], info: ["State since 1850. Home to most of the country's Chinese immigrants.", "The Central Pacific started at Sacramento.", "Los Angeles Chinese massacre, October 1871."] },
        UT: { name: "Utah Territory", v: [["d3","Terr. 1850"], ["d3","Promontory"], ["",""]], info: ["Territory since 1850, settled by Mormons. Women got the vote in 1870. Statehood waited until 1896, after the church gave up polygamy.", "The two railroads met at Promontory Summit, May 10, 1869."] },
        CO: { name: "Colorado Territory", v: [["d3","Terr. 1861"], ["",""], ["p3","Sand Creek 1864"]], info: ["Territory since 1861, after the Pikes Peak gold rush. Johnson vetoed statehood in 1866. State in 1876.", "Sand Creek massacre, November 1864."] },
        KS: { name: "Kansas", v: [["d1","State 1861"], ["",""], ["p4","Medicine Lodge"]], info: ["State since 1861.", "Hancock's campaign, 1867. The Medicine Lodge treaties were signed here in October 1867."] },
        AK: { name: "Alaska", v: [["d2","Bought 1867"], ["",""], ["",""]], info: ["Bought from Russia in 1867 for $7.2 million, about 2 cents an acre. Run by the army at first. State in 1959."] },
        AZ: { name: "Arizona Territory", v: [["d3","Terr. 1863"], ["",""], ["p3","Camp Grant 1871"]], info: ["Territory since 1863.", "Camp Grant massacre, April 1871: about 144 Apache killed."] },
        NM: { name: "New Mexico Territory", v: [["d3","Terr. 1850"], ["",""], ["p4","Navajo 1864–68"]], info: ["Territory since 1850. Peonage and captive-taking were common here until the 1867 Peonage Act.", "The Navajo were held at Bosque Redondo from 1864 until the 1868 treaty let them go home."] },
        IT: { name: "Indian Territory", ids: ["ok"], v: [["d0","Indian Terr."], ["",""], ["p4","Washita 1868"]], info: ["Unorganized land, today's Oklahoma, set aside for nations removed from the East. The Medicine Lodge treaties put southern Plains nations here.", "Custer attacked Black Kettle's camp on the Washita River, November 1868."] },
        TX: { name: "Texas", v: [["d1","State 1845"], ["",""], ["",""]], info: ["State since 1845. Readmitted to Congress in 1870. Comanche and Kiowa raids along its frontier were a cause of the Medicine Lodge talks."] }
      },
      notes: [
        "Most of the West was territories, governed directly from Washington. That is why Congress could require Black male voting there first, in January 1867.",
        "Borders are drawn as they are today. Dakota Territory is shown as the two Dakotas, and Indian Territory as Oklahoma, whose panhandle was then unorganized land outside it.",
        "Nebraska and Colorado both sought statehood in 1866. Johnson vetoed both. Congress overrode him for Nebraska only, after adding a ban on racial voting rules."
      ]
    },

    cast: [
      ["Washington", [
        { id: "grant", name: "Ulysses S. Grant", aliases: ["Ulysses S. Grant", "Grant"], role: "Commanding general until 1869, then president. Launched the Peace Policy.", watch: "He wanted peace on the reservations and gave the army a free hand off them. White judges whether those two fit together." },
        { id: "parker", name: "Ely S. Parker", aliases: ["Ely S. Parker", "Ely Parker", "Parker"], role: "Seneca civil engineer and Grant's wartime aide. He wrote out the final copy of Lee's surrender terms at Appomattox. Commissioner of Indian Affairs, 1869–71.", watch: "The first Native American to run the Indian Office. Enemies accused him of fraud, and though Congress cleared him, he resigned in 1871." },
        { id: "taylor", name: "Nathaniel G. Taylor", aliases: ["Nathaniel G. Taylor", "Nathaniel Taylor"], role: "Former Tennessee congressman and Methodist preacher. Commissioner of Indian Affairs, 1867–69, and head of the Peace Commission.", watch: "The voice of the civilizing mission: reservations, farms, schools, Christianity." },
        { id: "doolittle", name: "James R. Doolittle", aliases: ["James R. Doolittle", "James Doolittle", "Doolittle"], role: "Wisconsin senator who led Congress's inquiry into the Indian wars after Sand Creek.", watch: "His 1867 report blamed white aggression for most of the fighting and set the stage for the Peace Commission." },
        { id: "seward", name: "William H. Seward", aliases: ["William H. Seward", "Seward"], role: "Secretary of State under Lincoln and Johnson. Bought Alaska.", watch: "An expansionist who pictured an American empire of trade reaching across the Pacific." },
        { id: "burlingame", name: "Anson Burlingame", aliases: ["Anson Burlingame"], role: "Former Massachusetts congressman and U.S. minister to China. Then he switched sides to lead China's own diplomatic mission to the West.", watch: "His 1868 treaty opened the door to Chinese immigration while keeping citizenship closed." }
      ]],
      ["The army", [
        { id: "sherman", name: "William T. Sherman", aliases: ["William T. Sherman", "Sherman"], role: "Commanded the army's Military Division of the Missouri, which covered the Plains, then the whole army from 1869. Sat on the Peace Commission.", watch: "He negotiated treaties and planned war at the same time, and saw no contradiction." },
        { id: "sheridan", name: "Philip Sheridan", aliases: ["Philip Sheridan", "Sheridan"], role: "After Johnson removed him from Louisiana in 1867, he took over the Plains command. Ran the 1868–69 winter campaign.", watch: "He brought the Civil War's war on civilian resources to the Plains." },
        { id: "custer", name: "George Armstrong Custer", aliases: ["George Armstrong Custer", "Custer"], role: "Lieutenant colonel of the 7th Cavalry. He had been a Union general at 23.", watch: "Washita (1868) made his name on the Plains. Eight years later, the Little Bighorn ended it." }
      ]],
      ["Native leaders", [
        { id: "redcloud", name: "Red Cloud", aliases: ["Red Cloud"], role: "Oglala Lakota leader who led the war that closed the Bozeman Trail, 1866–68.", watch: "He won his war, signed Fort Laramie, and then spent decades fighting the government through diplomacy instead." },
        { id: "blackkettle", name: "Black Kettle", aliases: ["Black Kettle"], role: "Southern Cheyenne peace chief. He survived Sand Creek in 1864 and signed Medicine Lodge in 1867.", watch: "Killed at the Washita in 1868. His life sums up what the policy offered those who sought peace." },
        { id: "manuelito", name: "Manuelito", aliases: ["Manuelito"], role: "Navajo war leader, one of the last to surrender in 1866 and a signer of the 1868 treaty.", watch: "The Navajo were one of the very few removed nations allowed to go home." }
      ]],
      ["Settlers, railroads, and others", [
        { id: "chivington", name: "John Chivington", aliases: ["John Chivington", "Chivington"], role: "Methodist minister turned colonel of Colorado volunteers. Led the Sand Creek massacre.", watch: "He was never punished. Sand Creek became the reformers' proof that frontier whites, not Indians, caused the wars." },
        { id: "stanford", name: "Leland Stanford", aliases: ["Leland Stanford", "Stanford"], role: "Central Pacific president, one of its Big Four owners, and governor of California in 1862–63.", watch: "A face of the railroad men White distrusts: rich on government land and loans." },
        { id: "brighamyoung", name: "Brigham Young", aliases: ["Brigham Young"], role: "President of the Latter-day Saints church. Led the Mormons to Utah in 1847 and ruled it in practice for decades.", watch: "His Utah was a test of whether the government could make a whole territory accept its idea of the home." }
      ]]
    ],

    recall: [
      ["What did the Fort Laramie Treaty of 1868 give the Lakota, and why did the government agree to it?", "Red Cloud's War had made the Bozeman Trail forts impossible to hold. So the army abandoned them, and the treaty created the Great Sioux Reservation, all of today's South Dakota west of the Missouri River, Black Hills included, plus unceded hunting lands to the west."],
      ["How did the Pacific Railway Acts pay for the transcontinental railroad?", "With land and loans. The companies got alternate square-mile sections along the route, doubled to 20 square miles per mile of track in 1864, plus government bonds of $16,000 to $48,000 a mile depending on the terrain. The Central Pacific built east with mostly Chinese labor, and the Union Pacific built west, until they met at Promontory in May 1869."],
      ["What was Grant's Peace Policy, and how peaceful was it?", "Churches nominated reservation agents, and a Board of Indian Commissioners oversaw the money, with Ely Parker at the Indian Office. Indians on reservations were to be fed, taught to farm, and converted. Those off reservations were left to the army. The Marias Massacre in 1870 happened under it."],
      ["How was the West a testing ground for Reconstruction law?", "Congress governed territories directly. So it gave Black men the vote in the territories in January 1867, before the Reconstruction Acts. It made racial voting bars a condition of Nebraska's statehood. And it carried the 13th Amendment into New Mexico with the Peonage Act."],
      ["Why were Chinese immigrants kept outside the new uniform citizenship?", "Americans painted them as unfree \"coolie\" labor and as a threat to white homes and wages. The Burlingame Treaty allowed migration but not naturalization. The Naturalization Act of 1870 opened citizenship to people of African descent and still left the Chinese out."],
      ["What does White mean by the \"Greater Reconstruction\"?", "The Republican project to remake both the South and the West in the image of the free-labor North: small farms, homes, contracts, and one citizenship, backed by a stronger federal government. In the West it partly succeeded, at the expense of Native peoples, Mexican Americans, and the Chinese."]
    ]
  }
  ]
};
