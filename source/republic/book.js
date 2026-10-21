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
      grid: [
        ["MO",1,0],["KY",2,0],["WV",3,0],["VA",4,0],["MD",5,0],
        ["AR",1,1],["TN",2,1],["NC",3,1],["SC",4,1],
        ["TX",0,2],["LA",1,2],["MS",2,2],["AL",3,2],["GA",4,2],
        ["FL",4,3]
      ],
      states: {
        MO: { name: "Missouri", border: true }, KY: { name: "Kentucky", border: true }, WV: { name: "West Virginia", border: true }, MD: { name: "Maryland", border: true },
        VA: { name: "Virginia", district: 1, readmit: "Jan 1870", period: 3 },
        NC: { name: "North Carolina", district: 2, readmit: "July 1868", period: 2 },
        SC: { name: "South Carolina", district: 2, readmit: "July 1868", period: 2 },
        GA: { name: "Georgia", district: 3, readmit: "1868, expelled 1869, back July 1870", period: 4, short: "1868/70" },
        AL: { name: "Alabama", district: 3, readmit: "July 1868", period: 2 },
        FL: { name: "Florida", district: 3, readmit: "June 1868", period: 2 },
        MS: { name: "Mississippi", district: 4, readmit: "Feb 1870", period: 3 },
        AR: { name: "Arkansas", district: 4, readmit: "June 1868", period: 2 },
        LA: { name: "Louisiana", district: 5, readmit: "July 1868", period: 2 },
        TX: { name: "Texas", district: 5, readmit: "Mar 1870", period: 3 },
        TN: { name: "Tennessee", district: 0, readmit: "July 1866", period: 1 }
      },
      districts: {
        1: "First District: Virginia. Commander John Schofield.",
        2: "Second District: the Carolinas. Commander Daniel Sickles.",
        3: "Third District: Georgia, Alabama, Florida. Commander John Pope.",
        4: "Fourth District: Mississippi, Arkansas. Commander Edward Ord.",
        5: "Fifth District: Louisiana, Texas. Commander Philip Sheridan, until Johnson removed him."
      },
      periods: { 1: "1866: ratified the 14th early", 2: "1868: under the Reconstruction Acts", 3: "1870: last to return", 4: "Georgia: readmitted, expelled, readmitted" },
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
  }
  ]
};
