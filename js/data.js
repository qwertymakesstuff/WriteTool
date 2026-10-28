// Content tables used by the generator. Everything here is plain data so it is
// easy to extend: add entries to any list and the generator picks them up.
(function (root) {
  "use strict";

  const GENRES = {
    fantasy: {
      label: "Fantasy",
      settings: [
        "a kingdom where the dead are taxed as citizens",
        "a floating archipelago chained to a dying god",
        "a city built inside the ribcage of a fallen titan",
        "a forest that rearranges itself every new moon",
        "a mountain monastery that guards the last dragon egg",
        "a desert empire where water is the only currency",
      ],
      tropes: [
        ["The Chosen One is destined to save the world", "The prophecy was forged by the villain to control who would rise"],
        ["The Dark Lord is evil for evil's sake", "The 'Dark Lord' is a failed hero still fighting the last war"],
        ["The wise old mentor dies at the end of act one", "The mentor survives and becomes the obstacle by refusing to let go"],
        ["Magic solves the climax", "Magic has a cost the hero cannot pay, so the climax is won without it"],
        ["Farm boy discovers he is secret royalty", "The royal heir discovers they were swapped and the farm is their true inheritance"],
      ],
    },
    scifi: {
      label: "Science Fiction",
      settings: [
        "a generation ship whose passengers have forgotten it is moving",
        "a Dyson swarm mining colony on strike",
        "an Earth where every memory is cloud-backed and editable",
        "a frontier moon terraformed by a corporation that went bankrupt",
        "a research station orbiting a signal that predates the universe",
        "a megacity where sleep is outsourced to rented bodies",
      ],
      tropes: [
        ["The AI turns against humanity", "The AI is loyal; the humans are the ones who rewrote its goals"],
        ["First contact is an invasion", "First contact is a lawsuit"],
        ["The corporation is a faceless evil", "The corporation is run by the hero's idealistic younger self via time dilation"],
        ["Faster-than-light travel is a given", "Every jump costs decades at home, and the crew must decide who to leave behind"],
        ["The clone is a soulless copy", "The original is the one who lost themselves; the clone remembers who they were"],
      ],
    },
    horror: {
      label: "Horror",
      settings: [
        "a care home where residents keep getting younger",
        "a suburb where every house is identical, including the families",
        "an arctic radio station that hears tomorrow's broadcasts",
        "a cruise ship that never reaches port",
        "a village that celebrates a holiday nobody can remember starting",
        "a hospital wing that only appears on the night shift",
      ],
      tropes: [
        ["The group splits up", "The group stays together, and the threat is that one of them is wrong about who they are"],
        ["The monster is revealed in the final act", "The monster is shown in the first scene; the horror is learning why it is needed"],
        ["The skeptic dies first", "The skeptic is right, and the believers cause the deaths"],
        ["The final girl survives alone", "Surviving means taking the monster's place"],
        ["The haunted house must be escaped", "The house is trying to protect them from what is outside"],
      ],
    },
    mystery: {
      label: "Mystery",
      settings: [
        "a snowed-in train carrying a jury to a verdict",
        "a vineyard estate during the harvest festival",
        "a small island where everyone shares one surname",
        "a theater during the final week of a doomed production",
        "a deep-sea habitat on the eve of decommissioning",
        "a 1920s radio studio broadcasting live",
      ],
      tropes: [
        ["The butler did it", "Everyone did it, and the detective must decide whom to name"],
        ["The detective is a lone genius", "The detective is mediocre but the only person who listens"],
        ["The victim was innocent", "The victim staged their own murder and it went wrong"],
        ["The killer confesses when cornered", "The killer is never caught; the story is about living with the truth"],
        ["Clues point to the obvious suspect as a red herring", "The obvious suspect really did it, and the twist is why"],
      ],
    },
    thriller: {
      label: "Thriller",
      settings: [
        "a border town during an election blackout",
        "a stock exchange during a 48-hour cyberattack",
        "a mountain pass during an evacuation",
        "an embassy under siege during a royal wedding",
        "a container port where one container is not on any manifest",
        "a city where every camera feed has been sold to the highest bidder",
      ],
      tropes: [
        ["The rogue agent is framed by their own agency", "The agent really did it and was right to"],
        ["A ticking bomb provides the deadline", "The deadline is social: a secret goes public at midnight"],
        ["The mole is the trusted partner", "There is no mole; the leak is the hero's own habits"],
        ["The hero is an unstoppable fighter", "The hero is an accountant who wins by reading the paperwork"],
        ["The villain monologues the plan", "The villain explains a fake plan, and the real one already happened"],
      ],
    },
    romance: {
      label: "Romance",
      settings: [
        "a rival bakery war on the same street",
        "a lighthouse keeper exchange program",
        "a wedding where both leads are the other's ex's date",
        "a space station with a single greenhouse",
        "a translation booth at a tense peace summit",
        "a summer camp reunion twenty years later",
      ],
      tropes: [
        ["Enemies to lovers", "Lovers to enemies to something new, told in reverse order"],
        ["The grand gesture at the airport", "The grand gesture is staying put and doing the boring work"],
        ["A misunderstanding keeps them apart", "They understand each other perfectly; their goals are incompatible"],
        ["One love interest is clearly 'right'", "Both options are good, and the choice is about who the lead wants to become"],
        ["Love fixes the broken one", "Both are whole people who choose each other anyway"],
      ],
    },
    comedy: {
      label: "Comedy",
      settings: [
        "a failing theme park on its last weekend",
        "an office that accidentally became a cult",
        "a royal family forced to work retail",
        "a time-travel agency with terrible customer service",
        "a retirement home's competitive heist club",
        "a ghost tour company that is genuinely haunted",
      ],
      tropes: [
        ["The slob and the neat freak forced to cohabit", "Both claim to be the neat one and are both wrong"],
        ["The wacky plan almost works", "The plan works perfectly and that is the catastrophe"],
        ["The straight man reacts to the chaos", "The straight man is secretly the source of all the chaos"],
        ["A lie snowballs out of control", "The truth snowballs out of control because nobody believes it"],
        ["The jerk learns a lesson", "Everyone else learns the jerk was right about one thing"],
      ],
    },
    drama: {
      label: "Drama",
      settings: [
        "a family restaurant the week the founder dies",
        "a mining town the year the mine closes",
        "a public school's final year before demolition",
        "a hospice where a famous musician is the newest patient",
        "an immigrant neighborhood facing redevelopment",
        "a championship team in the season after a scandal",
      ],
      tropes: [
        ["The prodigal child returns home", "The parent is the one who ran away and comes back"],
        ["A terminal diagnosis forces reconciliation", "Reconciliation fails and the story is about letting that be enough"],
        ["The underdog wins the big game", "The underdog loses and the town changes anyway"],
        ["The secret affair is revealed", "The 'affair' was something stranger and more sympathetic"],
        ["Tragedy brings the family together", "The family was together; tragedy shows them how they'd drifted"],
      ],
    },
    western: {
      label: "Western",
      settings: [
        "a railroad town where the tracks stopped halfway",
        "a cattle drive across a cursed salt flat",
        "a frontier courthouse with the only judge for 400 miles",
        "a mining camp run entirely by widows",
        "a stagecoach line through contested tribal land",
        "a ghost town that is filling up again",
      ],
      tropes: [
        ["The lone gunslinger rides into town", "The gunslinger is retired, and the town keeps hiring them anyway"],
        ["The final duel at high noon", "The duel is settled by a vote"],
        ["The sheriff is corrupt", "The sheriff is honest and the law itself is the problem"],
        ["Civilization tames the frontier", "The frontier was already civilized; the newcomers are the wild ones"],
        ["The outlaw has a heart of gold", "The outlaw is exactly as bad as their reputation and still the best option"],
      ],
    },
    postapoc: {
      label: "Post-Apocalyptic",
      settings: [
        "a shopping mall turned city-state",
        "a flooded coastline navigated by houseboat clans",
        "a seed vault besieged by every faction",
        "a nuclear submarine that surfaced after 30 years",
        "a highway caravan that cannot stop moving",
        "the last working library, run by children",
      ],
      tropes: [
        ["Humanity is reduced to savagery", "Survivors built something kinder than the old world, and it is under threat"],
        ["The safe haven is a lie", "The safe haven is real, but getting in means abandoning someone"],
        ["The cure must be found", "The 'apocalypse' was an adaptation, and the cure would undo it"],
        ["Raiders are the enemy", "The raiders are a former community the hero's group destroyed"],
        ["The world ended in fire", "The world ended quietly and most people barely noticed"],
      ],
    },
    heist: {
      label: "Heist",
      settings: [
        "a casino on a moving cruise liner",
        "a museum moving its collection overnight",
        "the world's most secure seed bank",
        "a royal coronation broadcast live",
        "a crypto vault inside a decommissioned bunker",
        "a fashion week finale",
      ],
      tropes: [
        ["Assemble the crew montage", "The crew already disbanded; the job is convincing them they owe each other"],
        ["One last job before retirement", "The first job, done by people who have no idea what they're doing"],
        ["The plan is shown, then goes wrong", "The plan is never shown; the audience reconstructs it from the wreckage"],
        ["The mark is a greedy villain", "The mark is a decent person, and the crew must live with that"],
        ["The double-cross is revealed", "Everyone plans a double-cross and they cancel each other out"],
      ],
    },
    superhero: {
      label: "Superhero",
      settings: [
        "a city where powers are licensed like firearms",
        "the decade after all heroes were banned",
        "a public school for kids with useless powers",
        "a world where every power has a corporate sponsor",
        "a small town that has never had a villain",
        "the support staff of the world's greatest hero team",
      ],
      tropes: [
        ["Origin story with dead parents", "The parents are alive and very disappointed"],
        ["The villain wants world domination", "The villain wants to retire and the hero won't let them"],
        ["With great power comes great responsibility", "Great power comes with great paperwork, and the hero is drowning in it"],
        ["The secret identity must be protected", "Everyone knows, and the hero is the last to realize it"],
        ["The final battle destroys the city", "The final battle is won by preventing any battle at all"],
      ],
    },
  };

  const TONES = ["Grim", "Hopeful", "Satirical", "Whimsical", "Bittersweet", "Tense", "Absurd", "Melancholic", "Pulpy", "Mythic"];

  const PROTAGONISTS = [
    "a disgraced cartographer",
    "a reluctant heir to a criminal empire",
    "a nurse who can hear lies",
    "an aging stunt performer",
    "a teenage repo agent",
    "a priest who has lost their faith",
    "a celebrated forger trying to go straight",
    "a debt collector with a conscience",
    "a soldier who deserted the winning side",
    "a translator who knows a dead language",
    "a scientist whose experiment worked too well",
    "a chef who cannot taste",
    "a bodyguard to a child monarch",
    "an archivist with a photographic memory",
    "a retired detective pulled back for one case",
    "a getaway driver who has never been caught",
    "a court jester who knows state secrets",
    "a beekeeper with a violent past",
    "a ghostwriter for a dictator",
    "an influencer who faked their own death",
  ];

  const WANTS = [
    "to clear their name",
    "to win back a lost inheritance",
    "to find a missing sibling",
    "to escape a contract they signed long ago",
    "to finish what their mentor started",
    "to be left alone",
    "to win one last competition",
    "to destroy the thing they created",
    "to get home before it is too late",
    "to prove a forbidden theory",
    "to pay off an impossible debt",
    "to protect a secret at any cost",
  ];

  const NEEDS = [
    "to forgive themselves",
    "to accept help from others",
    "to stop running from their past",
    "to let someone else lead",
    "to tell the truth even when it costs them",
    "to grieve properly",
    "to believe they deserve good things",
    "to understand that winning is not the same as being right",
    "to break the cycle they inherited",
    "to choose a place to belong",
  ];

  const FLAWS = [
    "pathological pride",
    "a compulsion to control everything",
    "crippling self-doubt",
    "a habit of lying to avoid conflict",
    "reckless impulsiveness",
    "deep distrust of authority",
    "loyalty to the wrong people",
    "a refusal to ask for help",
    "cynicism that masks hope",
    "an addiction they hide well",
    "a need to be liked",
    "vengefulness",
  ];

  const ANTAGONISTS = [
    "a beloved public figure with a hidden ledger",
    "the protagonist's former best friend",
    "an institution that believes it is saving people",
    "a rival who wants the same thing for better reasons",
    "a charismatic reformer whose methods are monstrous",
    "a parent who will do anything for their child",
    "a version of the protagonist from a worse future",
    "an ancient intelligence that sees humans as weather",
    "a bureaucrat enforcing rules exactly as written",
    "a cult leader who is sincere",
    "a mercenary who respects the protagonist",
    "the community the protagonist is trying to save",
  ];

  const INCITING = [
    "a stranger dies in their arms whispering their real name",
    "they inherit a key with no lock",
    "a message arrives that they sent to themselves",
    "the thing they buried years ago is found",
    "their face appears on a wanted poster for a crime that hasn't happened yet",
    "the only person who knows their secret goes missing",
    "a contract is delivered with their signature on it",
    "they witness something they were never meant to see",
    "the one rule of their world is broken in public",
    "a child arrives claiming to be their own",
    "a celebration turns into a massacre",
    "they win a lottery they never entered",
  ];

  const CONFLICTS = [
    "loyalty to family versus loyalty to the truth",
    "personal freedom versus the safety of many",
    "tradition versus survival",
    "ambition versus love",
    "justice versus mercy",
    "the past versus the future",
    "the individual versus the system",
    "faith versus evidence",
    "revenge versus redemption",
    "belonging versus identity",
  ];

  const STAKES = [
    "the only home they have ever known will be erased",
    "an innocent person will take the fall",
    "a war will restart",
    "they will become the very thing they hate",
    "a truth will be buried forever",
    "someone they love will never forgive them",
    "a whole generation will lose its future",
    "the last of something irreplaceable will be destroyed",
    "they will lose their memories of the people they love",
    "the balance of power will shift to someone far worse",
  ];

  const TWISTS = [
    "the ally has been working for the antagonist all along, to protect the protagonist",
    "the protagonist caused the inciting incident and doesn't remember",
    "the antagonist is trying to prevent a far worse catastrophe",
    "the mentor figure is the original villain, reformed and hiding",
    "the quest object is a decoy; the real prize is the journey's map",
    "two characters thought dead are the same person",
    "the setting is not what it seems: it is a test, a simulation, or an afterlife",
    "the narrator is unreliable and has been editing the story",
    "the victory in act two made everything worse",
    "the protagonist and antagonist want the exact same outcome",
    "the 'monster' is the last of a species the protagonists wiped out",
    "the prophecy, rumor, or legend was written by a minor character",
  ];

  const THEMES = [
    "the cost of certainty",
    "what we owe the dead",
    "power corrupts the comfortable, not just the powerful",
    "identity is chosen, not inherited",
    "every utopia has a basement",
    "grief as a form of love",
    "the stories we tell to survive",
    "you cannot save people who don't want saving",
    "complicity is a choice made daily",
    "home is a verb",
    "truth without kindness is cruelty",
    "the line between protecting and controlling",
  ];

  const ROLES = [
    { role: "Ally", detail: "helps the protagonist but has a competing loyalty" },
    { role: "Wildcard", detail: "sides with whoever offers the most interesting chaos" },
    { role: "Mirror", detail: "faced the same choice as the protagonist and chose differently" },
    { role: "Love interest", detail: "challenges the protagonist's flaw directly" },
    { role: "Comic relief", detail: "is funny because they see the truth no one else will say" },
    { role: "Lieutenant", detail: "serves the antagonist and is starting to doubt them" },
  ];

  const SECRETS = [
    "is secretly in debt to the antagonist",
    "has already betrayed the protagonist once",
    "knows how the story ends",
    "is not who their papers say",
    "caused the event that scarred the protagonist",
    "has a child nobody knows about",
    "is dying and hiding it",
    "was paid to be here",
    "once loved the antagonist",
    "has a power, skill, or fortune they refuse to use",
  ];

  const NAME_PARTS = {
    start: ["Ka", "Mor", "El", "Ver", "Tam", "Is", "Do", "Ry", "Sa", "Bel", "Cor", "Ny", "Ash", "Ju", "Fen", "Lo", "Ze", "Ori", "Har", "Vi"],
    end: ["ra", "wen", "lix", "dan", "sa", "rik", "na", "mir", "ett", "o", "ia", "on", "eth", "ka", "lyn", "us", "ard", "ine", "ez", "is"],
  };

  // "What if" mutators push a premise away from the expected shape.
  const MUTATORS = [
    "Tell the story from the antagonist's point of view.",
    "Start at the ending and work backward.",
    "The protagonist gets what they want at the midpoint, and it ruins them.",
    "Remove the protagonist's most useful skill in the first act.",
    "Make the setting a character with its own goal.",
    "Swap the ages of the protagonist and the mentor.",
    "Set the whole story within 24 hours.",
    "The antagonist wins, and the story is about what comes next.",
    "Every major scene must take place somewhere mundane.",
    "Two protagonists who never meet until the last scene.",
    "The genre changes halfway through, and that change is the twist.",
    "The comic relief character is the only one who survives.",
    "Replace the central fight with a negotiation.",
    "The audience knows the secret from scene one; the tension is who finds out.",
    "Cut the cast in half. Merge characters until each one has two jobs.",
  ];

  // Generic clichés that show up across genres.
  const UNIVERSAL_CLICHES = [
    ["The hero wakes up at the start of the story", "Open in the middle of an action that reveals character"],
    ["A dead spouse or child motivates the hero", "Give the hero a living relationship that is under strain"],
    ["The villain explains their plan", "Reveal the plan through its consequences"],
    ["It was all a dream", "Make the dream logic leak into reality instead"],
    ["Amnesia hides the backstory", "The hero remembers everything; others have forgotten"],
  ];

  // Game-specific tables.
  const GAME = {
    loops: {
      fantasy: "explore, fight, loot, upgrade gear and spells",
      scifi: "scan, salvage, craft upgrades, push deeper into hostile space",
      horror: "hide, scavenge scarce resources, solve environmental puzzles, survive",
      mystery: "investigate scenes, interrogate suspects, connect clues on a board",
      thriller: "infiltrate, gather intel, choose stealth or force, escape",
      romance: "talk, choose, build affinity, unlock personal story arcs",
      comedy: "improvise with absurd tools, chain silly interactions, unlock gags",
      drama: "make choices under pressure, manage relationships, live with consequences",
      western: "ride, track, duel, build a reputation",
      postapoc: "scavenge, fortify, recruit survivors, expand safe territory",
      heist: "case the target, recruit specialists, plan, execute, adapt",
      superhero: "patrol, respond to crises, upgrade powers, balance two lives",
    },
    mechanicsHooks: [
      "a reputation system that changes how every faction speaks to the player",
      "permanent death for companions",
      "a time loop where knowledge carries over but items do not",
      "a moral ledger hidden from the player until the final act",
      "the map is drawn by the player and can be wrong",
      "dialogue choices are timed and silence is an option",
      "the protagonist's flaw is a mechanic the player must work around",
      "resources double as narrative choices: spend them or save someone",
    ],
    endings: [
      "Sacrifice: the protagonist gives up what they wanted to secure what they need",
      "Corruption: the protagonist wins by becoming the antagonist",
      "Escape: the protagonist walks away and the world is left to decide",
      "Union: the protagonist and antagonist reconcile, at a cost to both",
      "Pyrrhic: everything is saved except the one thing that mattered",
      "Secret: only reachable if the player discovers the twist early",
    ],
    sideQuests: [
      "help a stranger recover a memory that turns out to involve the protagonist",
      "settle a dispute between two factions where both are partly right",
      "escort someone who doesn't want to be saved",
      "find out what happened to the previous hero",
      "repair something the antagonist broke, revealing their motive",
      "collect stories from survivors that change how the ending plays",
    ],
  };

  // TV-specific tables.
  const TV = {
    engines: [
      "a case of the week that always connects to the season mystery",
      "a new location each episode on a journey toward a goal",
      "a workplace where every customer brings a new problem",
      "a family that must survive one crisis per episode",
      "a rotating point-of-view character each episode",
      "a countdown: each episode is one day, week, or hour closer to the deadline",
    ],
    bPlots: [
      "a rivalry inside the protagonist's own team",
      "a romance that complicates the main mission",
      "a family member who disapproves",
      "a side business that keeps the lights on",
      "a minor character with a secret agenda",
      "a moral debt the protagonist keeps putting off",
      "an investigation into the protagonist by an outsider",
      "a mentor's declining health",
    ],
    episodeFocus: [
      "a bottle episode trapped in one location",
      "a flashback that recontextualizes the antagonist",
      "a heist or infiltration",
      "a trial, hearing, or public reckoning",
      "a celebration that goes wrong",
      "an episode told from a supporting character's view",
      "a mission that succeeds but costs an ally",
      "a forced team-up with the antagonist's side",
      "a quiet character episode after a big loss",
      "a race against the clock",
    ],
    cliffhangers: [
      "a character everyone trusted is revealed as the leak",
      "the antagonist turns themselves in, on their terms",
      "the protagonist gets exactly what they wanted and it is a trap",
      "a body is found that changes the whole case",
      "the season's victory is undone in the final minute",
      "a new, bigger threat appears that makes enemies into allies",
    ],
  };

  const DATA = {
    GENRES, TONES, PROTAGONISTS, WANTS, NEEDS, FLAWS, ANTAGONISTS, INCITING,
    CONFLICTS, STAKES, TWISTS, THEMES, ROLES, SECRETS, NAME_PARTS, MUTATORS,
    UNIVERSAL_CLICHES, GAME, TV,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = DATA;
  else root.WriteToolData = DATA;
})(typeof self !== "undefined" ? self : this);
