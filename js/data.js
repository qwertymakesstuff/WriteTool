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

    // ----- Genres tied to specific media. `media` limits where a genre is
    // offered; genres without it are offered for every medium. Optional
    // protagonists/antagonists/inciting/twists lists flavor generation.

    psychhorror: {
      label: "Psychological Horror",
      media: ["game", "film", "tv"],
      settings: [
        "an apartment that gains a new room every time its tenant forgets something",
        "a psychiatric clinic with no record of its own patients",
        "a childhood home rebuilt from memory, slightly wrong in every room",
        "a small town where everyone is grieving someone who is still alive",
        "an office building on a night shift that never ends",
        "a ferry crossing that starts over each time someone aboard lies",
      ],
      tropes: [
        ["It was all in their head", "It was in their head and it was still real: the delusion is a message they keep refusing to read"],
        ["The protagonist is secretly the killer", "The protagonist is convinced they are the killer, and someone is letting them believe it"],
        ["Jump scares carry the fear", "Nothing jumps; the dread comes from small wrong details the audience spots on their own"],
        ["The asylum is the scary place", "The safe family home is where the real harm happens"],
        ["A trauma revealed in the last scene explains everything", "The trauma is known from the start; the mystery is what they did afterward"],
      ],
      protagonists: [
        "a grieving parent who keeps getting voicemails from their child",
        "a night-shift security guard with growing gaps in their memory",
        "a therapist whose patients all describe the same dream",
        "an insomniac who has started losing whole hours",
        "a sleep researcher who volunteered for their own trial",
      ],
      antagonists: [
        "the protagonist's own guilt, given a shape",
        "a doctor who believes the protagonist's suffering is the cure",
        "a presence that only appears in reflections",
        "a loving partner who is quietly rewriting the protagonist's memories",
      ],
      inciting: [
        "they find a photo of themselves in a place they have never been",
        "notes start appearing in their own handwriting that they don't remember writing",
        "their reflection stops copying them",
        "everyone around them insists a terrible event never happened",
      ],
      twists: [
        "the protagonist has been the patient, not the doctor, all along",
        "every monster is a memory of something the protagonist did",
        "the world resets each time the protagonist refuses to accept a loss",
        "the protagonist is a coping mechanism inside someone else's mind",
      ],
    },
    survivalhorror: {
      label: "Survival Horror",
      media: ["game", "film"],
      settings: [
        "a quarantined research ship adrift in the North Sea",
        "a flooded mansion whose owner never stopped expanding it",
        "a ski resort cut off by a whiteout",
        "a subway network after a containment breach",
        "a prison where the guards vanished overnight",
      ],
      tropes: [
        ["The military shows up to save the day", "The military arrives to erase the evidence, and the survivors are evidence"],
        ["The infected are mindless", "The infected are organized and want something specific"],
        ["The scientist caused the outbreak out of greed", "The outbreak was a cure that worked, for something nobody asked about"],
        ["Survival means escaping", "Survival means staying behind to hold the line"],
      ],
      antagonists: [
        "an unkillable stalker that hunts the protagonist room to room",
        "the company that will burn the site rather than admit what happened",
        "a survivor who decided everyone else is expendable",
      ],
      twists: [
        "the protagonist was the first person infected",
        "the rescue signal they followed is the lure",
        "the creature is protecting its young from the survivors",
      ],
    },
    cosmichorror: {
      label: "Cosmic Horror",
      settings: [
        "a fishing town where the tide has stopped going out",
        "an observatory pointed at a star that is getting closer",
        "a university library with a floor nobody can find twice",
        "a polar expedition camp above a buried geometric structure",
        "a desert highway motel where time runs slow",
      ],
      tropes: [
        ["Seeing the truth drives people mad", "Seeing the truth makes people calm, and that calm is the horror"],
        ["The cult wants to summon the god", "The cult is trying to keep the god asleep and failing"],
        ["The scholar narrator records their descent", "The narrator is perfectly sane; everyone reading the record is not"],
        ["Humanity is insignificant", "Something vast has noticed humanity, and it is fond of them"],
      ],
      twists: [
        "the entity is not invading; it has always been here and humanity is the intruder",
        "the protagonist's family made a bargain generations ago that comes due now",
        "the warnings everyone ignored were written by the protagonist",
      ],
    },
    darkfantasy: {
      label: "Dark Fantasy",
      media: ["game", "film", "tv"],
      settings: [
        "a kingdom where the sun stopped rising after the king's death",
        "a plague-ridden capital ruled by undying nobility",
        "a land where gods are hunted for their blood",
        "a crumbling cathedral city built over a sleeping beast",
        "a war-torn border where the fallen rise each dawn",
      ],
      tropes: [
        ["Good triumphs over evil", "There is no good side, only the side that keeps people fed"],
        ["The knight is noble", "The knight is the kingdom's executioner and knows it"],
        ["Restoring the old order saves the world", "The old order caused the curse, and the hero must let it die"],
        ["The curse can be lifted", "The curse is the only thing holding back something worse"],
      ],
      protagonists: [
        "an undead knight who cannot remember their oath",
        "a witch-hunter who is a witch",
        "a gravedigger in a land where the dead won't stay buried",
      ],
      twists: [
        "the hero's quest has been repeated a thousand times, and each hero becomes the next boss",
        "the dying god is the one keeping the world alive",
      ],
    },
    cyberpunk: {
      label: "Cyberpunk",
      settings: [
        "a vertical city where altitude is a credit score",
        "a free port run by an AI that pretends to be a human mayor",
        "a flooded megacity whose rich live on data havens offshore",
        "a neighborhood where every body part is on a subscription",
        "an underground net-market below a corporate arcology",
      ],
      tropes: [
        ["The hacker hero fights the megacorp", "The hacker works for the megacorp and has been defending it"],
        ["Cybernetics cost your humanity", "Cybernetics are how the hero holds onto their humanity"],
        ["A data heist on the corporate core", "The data is worthless; the heist is cover for a kidnapping"],
        ["Rain, neon, and despair", "A bright, cheerful dystopia that is just as cruel"],
      ],
      protagonists: [
        "a memory broker who sells other people's childhoods",
        "a repo agent for cybernetic implants",
        "a corporate security AI that has started to doubt",
      ],
    },
    spaceopera: {
      label: "Space Opera",
      settings: [
        "a galactic senate meeting on a ship that cannot stop moving",
        "a frontier system on the edge of a collapsing empire",
        "a pilgrim fleet searching for humanity's lost home world",
        "a smugglers' moon claimed by three empires",
        "a dead empire's capital, now a scavenger city",
      ],
      tropes: [
        ["The empire is evil and the rebels are good", "The rebels win and must decide whether to become the empire"],
        ["The hero is a gifted pilot", "The hero is the ship's cook, the last crew member alive"],
        ["Aliens are humans with forehead ridges", "The aliens think in ways that make the plot hinge on a misunderstanding"],
        ["The superweapon must be destroyed", "The superweapon is the only defense against a coming threat"],
      ],
    },
    timeloop: {
      label: "Time Loop",
      media: ["game", "film", "tv"],
      settings: [
        "a wedding day that keeps repeating",
        "a space station's last 22 minutes before impact",
        "a sleepy village during its annual festival",
        "a high school's final day before graduation",
        "a train journey that ends in a crash",
      ],
      tropes: [
        ["The hero must fix their personality to escape", "The hero is fine; they must fix someone who doesn't know about the loop"],
        ["The loop is a gift for self-improvement", "The loop is a prison that someone built for the hero"],
        ["Only the hero remembers", "Someone else remembers and has been looping much longer"],
        ["Breaking the loop is the goal", "Leaving the loop means losing someone who only exists inside it"],
      ],
      twists: [
        "the protagonist started the loop on purpose and erased the memory",
        "each loop is a different person living the same day",
      ],
    },
    cozy: {
      label: "Cozy",
      media: ["game", "tv"],
      settings: [
        "a seaside village that needs a new lighthouse keeper",
        "an inherited bookshop with a resident ghost",
        "a mountain tea farm after a hard winter",
        "a floating market town that drifts with the seasons",
        "a run-down community garden in a big city",
      ],
      tropes: [
        ["The city person moves to the country to find peace", "The country person moves to the city and makes a village of it"],
        ["Everyone is nice and nothing goes wrong", "Real conflict with gentle stakes: a closing shop, a fading tradition"],
        ["The greedy developer threatens the town", "The developer grew up here and wants to save it in the wrong way"],
        ["Restore everything to how it was", "Restore it into something new that fits the people who live there now"],
      ],
      antagonists: [
        "a well-meaning council member with a terrible plan",
        "a rival shopkeeper who is secretly lonely",
        "the slow, quiet pressure of a town emptying out",
      ],
      stakes: [
        "the town's last shop will close for good",
        "a beloved tradition will end this year",
      ],
    },
    noir: {
      label: "Noir",
      media: ["film", "tv"],
      settings: [
        "a coastal city during a heatwave and a mayoral race",
        "a jazz club that launders money for half the city",
        "a rain-soaked port city after the war",
        "a Hollywood studio lot in the 1940s",
        "a modern city of glass towers and empty parking lots",
      ],
      tropes: [
        ["The femme fatale betrays the detective", "The 'femme fatale' is the only honest person in the story"],
        ["The cynical detective narrates", "The narration is a confession given to the police"],
        ["The whole city is corrupt", "One honest institution exists and is about to be shut down"],
        ["The detective solves the case", "The detective solves it, and solving it changes nothing"],
      ],
      protagonists: [
        "a private investigator who used to be a cop",
        "an insurance claims adjuster",
        "a night-shift newspaper photographer",
      ],
    },
    psychthriller: {
      label: "Psychological Thriller",
      media: ["film", "tv"],
      settings: [
        "a remote lake house borrowed from a friend",
        "a perfect suburban marriage",
        "a prestigious ballet company",
        "a luxury wellness retreat",
        "a new job at a tech company that feels like a cult",
      ],
      tropes: [
        ["The husband did it", "The husband is being framed by someone who wants him free, not jailed"],
        ["The narrator is unreliable", "The narrator is reliable; everyone else is lying to them"],
        ["The stalker is a stranger", "The stalker is someone the protagonist wronged years ago and has forgotten"],
        ["Gaslighting is revealed at the end", "The protagonist knows they are being gaslit and plays along"],
      ],
    },
    comingofage: {
      label: "Coming-of-Age",
      media: ["film", "tv", "game"],
      settings: [
        "a small town the summer before college",
        "a boarding school for gifted misfits",
        "a family road trip across the country",
        "a skate park slated for demolition",
        "a refugee camp's makeshift school",
      ],
      tropes: [
        ["The loss of innocence", "The kid is already cynical, and the story gives them back some wonder"],
        ["The big dance or prom", "The big moment is a funeral, and the teens run it"],
        ["Leaving home is the happy ending", "Staying home is the brave choice"],
        ["The adults don't understand", "One adult understands too well, and that is the problem"],
      ],
    },
    war: {
      label: "War",
      media: ["film", "tv", "game"],
      settings: [
        "a trench line during a Christmas ceasefire",
        "an occupied city's resistance network",
        "a field hospital behind the front",
        "a bomber crew's final mission",
        "a codebreaking unit hidden in a country estate",
      ],
      tropes: [
        ["The heroic last stand", "The unit surrenders, and the story is about surviving that choice"],
        ["The enemy is faceless", "The protagonist spends the story with one enemy soldier"],
        ["War makes men of boys", "War makes the protagonist useless for peace, and peace comes anyway"],
        ["The mission must succeed", "The mission is pointless and everyone involved knows it"],
      ],
    },
    adventure: {
      label: "Adventure",
      media: ["film", "game"],
      settings: [
        "a jungle river expedition searching for a lost city",
        "a hot-air balloon race around the world",
        "a sunken pirate fleet off a forbidden coast",
        "a mountain pass guarded by a forgotten order",
        "a treasure hunt across a city's rooftops",
      ],
      tropes: [
        ["The treasure belongs in a museum", "The treasure belongs to the people who live there, and they want it left alone"],
        ["The rival is a ruthless mercenary", "The rival is the hero's estranged parent"],
        ["The map leads to the treasure", "The map leads to the previous treasure hunter's grave, with a better map"],
        ["The ancient temple collapses at the end", "The temple is still in use, and the heroes are trespassers"],
      ],
    },
    satire: {
      label: "Satire",
      media: ["film", "tv"],
      settings: [
        "a startup that sells water to people who already have water",
        "a reality show that elects the president",
        "a wellness influencer's compound",
        "a government agency that measures happiness",
        "a billionaire's private space colony",
      ],
      tropes: [
        ["The rich are cartoonishly evil", "The rich are pleasant and sincere, which is worse"],
        ["The everyman exposes the system", "The everyman becomes the system's most enthusiastic supporter"],
        ["The ending punishes the villains", "The villains are rewarded, and the audience is asked why that feels normal"],
      ],
    },
    procedural: {
      label: "Crime Procedural",
      media: ["tv"],
      settings: [
        "a cold-case unit in a basement nobody visits",
        "a forensics lab in a city with too many murders",
        "a rural sheriff's office covering a whole county",
        "a federal task force for crimes nobody believes in",
        "a public defender's office",
      ],
      tropes: [
        ["Case of the week, solved in 42 minutes", "Some cases stay unsolved and come back seasons later"],
        ["The genius consultant and the by-the-book cop", "The consultant is a fraud and the cop is covering for them"],
        ["The killer is the guest star", "The killer is a regular whose arc has been building for a season"],
        ["Enhance the image", "Forensics fail, and the case turns on someone's memory"],
      ],
    },
    workplace: {
      label: "Workplace Comedy",
      media: ["tv"],
      settings: [
        "a municipal parks department with no parks",
        "a failing local TV station",
        "an airport lost-and-found",
        "a call center for a doomsday insurance company",
        "the night shift at a 24-hour diner",
      ],
      tropes: [
        ["Will-they-won't-they coworkers", "They did, it went badly, and they still have to share a desk"],
        ["The clueless boss", "The boss is competent; the staff are sabotaging them out of habit"],
        ["The office must be saved from closure", "The office closes and they all keep showing up anyway"],
      ],
    },
    familysaga: {
      label: "Family Saga",
      media: ["tv", "film"],
      settings: [
        "a media dynasty choosing an heir",
        "a vineyard passed down for five generations",
        "a funeral home run by three estranged siblings",
        "a political family during a campaign year",
        "a crime family going legitimate",
      ],
      tropes: [
        ["The patriarch's will divides the family", "There is no will, and everyone forges one"],
        ["The black sheep returns", "The black sheep is the only one who stayed"],
        ["The family secret is an affair", "The family secret is that they were never rich, just borrowing"],
      ],
    },
    political: {
      label: "Political Drama",
      media: ["tv", "film"],
      settings: [
        "a president's first hundred days",
        "a city council in a town that is going bankrupt",
        "a disputed election in a small nation",
        "a UN negotiation over a dying river",
        "the staff of a senator who is secretly ill",
      ],
      tropes: [
        ["The idealist is corrupted by power", "The cynic is redeemed by power"],
        ["A scandal brings down the leader", "The scandal is true and voters don't care"],
        ["Backroom deals are evil", "The backroom deal is the only thing that saves lives"],
      ],
    },
    medical: {
      label: "Medical Drama",
      media: ["tv"],
      settings: [
        "an underfunded rural trauma center",
        "a hospital ship in a disaster zone",
        "a teaching hospital's first-year residents",
        "a night-shift emergency room in a city that never sleeps",
        "a hospice ward",
      ],
      tropes: [
        ["The brilliant, rude doctor", "The kind doctor is the dangerous one"],
        ["The miracle save in the last minute", "The patient dies, and the episode is about the family"],
        ["Doctors date each other", "The hospital's administrators are the real power couple"],
      ],
    },
    teen: {
      label: "Teen Drama",
      media: ["tv"],
      settings: [
        "an elite private school with a secret society",
        "a small-town high school after a classmate disappears",
        "a summer camp on an island",
        "a performing-arts academy",
        "a high school where every student is livestreamed",
      ],
      tropes: [
        ["The new kid shakes things up", "The new kid is an adult undercover, and the show is on the students' side"],
        ["The popular kids are shallow", "The popular kids are holding the whole school together"],
        ["Love triangle", "Love triangle where the two rivals end up together"],
      ],
    },
  };

  // Tones without `media` apply everywhere. Each has a short hint for writers.
  const TONES = [
    { name: "Grim", hint: "Hard choices, real losses, little relief." },
    { name: "Hopeful", hint: "Darkness exists, but people can change things." },
    { name: "Satirical", hint: "Exaggeration that exposes something true." },
    { name: "Whimsical", hint: "Playful, strange, and light on its feet." },
    { name: "Bittersweet", hint: "Victories that cost something." },
    { name: "Tense", hint: "Constant pressure; the audience never relaxes." },
    { name: "Absurd", hint: "Ridiculous situations played completely straight." },
    { name: "Melancholic", hint: "Quiet sadness and longing." },
    { name: "Pulpy", hint: "Big, fast, colorful, and fun." },
    { name: "Mythic", hint: "Larger than life, like a legend retold." },
    { name: "Oppressive", media: ["game"], hint: "The space itself weighs on the player; safety is rare and brief." },
    { name: "Dreamlike", media: ["game", "film"], hint: "Logic bends; places and people shift without explanation." },
    { name: "Paranoid", media: ["game", "film", "tv"], hint: "Nobody can be trusted, including the player's own senses." },
    { name: "Lonely", media: ["game"], hint: "Few voices, empty spaces, and the player's own thoughts." },
    { name: "Frantic", media: ["game"], hint: "Always moving, always short on time and resources." },
    { name: "Uncanny", media: ["game", "film"], hint: "Almost normal, which is exactly what is wrong." },
    { name: "Heroic", media: ["game", "film"], hint: "The player or hero rises to meet impossible odds." },
    { name: "Cozy", media: ["game", "tv"], hint: "Warm, low-stakes comfort with small, meaningful problems." },
    { name: "Epic", media: ["film"], hint: "Sweeping scale and landscapes, with history in the balance." },
    { name: "Intimate", media: ["film"], hint: "A few people in a small space, close to their feelings." },
    { name: "Elegiac", media: ["film"], hint: "A mournful look back at something already lost." },
    { name: "Slow-burn", media: ["tv"], hint: "Tension builds across the season and pays off late." },
    { name: "Soapy", media: ["tv"], hint: "Big emotions, secrets, affairs, and cliffhangers." },
    { name: "Brisk", media: ["tv"], hint: "Fast, witty, and episodic; easy to drop into any episode." },
    { name: "Darkly comic", media: ["tv", "film"], hint: "Laughing at things that shouldn't be funny." },
  ];

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
      psychhorror: "explore a space that shifts around you, piece together fragmented memories, decide what to believe",
      survivalhorror: "scavenge scarce supplies, manage a cramped inventory, avoid or fight threats, unlock shortcuts",
      cosmichorror: "investigate, decipher forbidden texts, trade sanity for knowledge, survive what you learn",
      darkfantasy: "explore, master punishing combat, die, learn, and push further",
      cyberpunk: "take contracts, hack or fight through, install implants, choose who to sell out",
      spaceopera: "travel between systems, recruit a crew, fight ship battles, broker alliances",
      timeloop: "explore the day, learn the schedule, use what you know in the next loop",
      cozy: "tend, craft, befriend neighbors, and restore a place season by season",
      comingofage: "explore the neighborhood, build friendships, make choices that shape who you become",
      war: "complete missions with a squad, manage morale and losses, hold or take ground",
      adventure: "explore, climb, solve puzzles, escape traps, and chase the next clue",
    },
    // Signature mechanics for specific genres, preferred over the generic hooks.
    genreMechanics: {
      psychhorror: [
        "a sanity meter that distorts the HUD, the map, and even the pause menu",
        "rooms that change whenever the player looks away",
        "subtitles and menus that start lying to the player",
        "dialogue options that disappear as the protagonist's denial grows",
      ],
      survivalhorror: [
        "saving costs a scarce item",
        "a stalker enemy that hunts the player across the whole map",
        "an inventory so small every pickup is a painful choice",
      ],
      cosmichorror: [
        "learning a clue permanently changes how the world is drawn",
        "the journal fills in on its own, sometimes with things that have not happened yet",
      ],
      darkfantasy: [
        "death returns the player to a checkpoint and makes the world slightly worse",
        "bosses are former heroes whose stories the player uncovers",
      ],
      timeloop: [
        "only knowledge carries between loops, tracked in a journal the player writes",
        "NPC schedules the player can learn, interrupt, and exploit",
      ],
      cozy: [
        "seasons that change which neighbors, tasks, and stories are available",
        "relationships that unlock new parts of the town's history",
      ],
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
