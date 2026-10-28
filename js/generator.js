// Story generation logic. Pure functions with no DOM access, so the same code
// runs in the browser and under Node for tests.
(function (root) {
  "use strict";

  const DATA = typeof module !== "undefined" && module.exports ? require("./data.js") : root.WriteToolData;

  // Fields that make up a concept, in generation order. Order matters: it
  // keeps a given seed producing the same story.
  const FIELDS = [
    "protagonistName", "protagonist", "want", "need", "flaw",
    "antagonistName", "antagonist", "setting", "inciting", "conflict",
    "stakes", "twist", "theme", "mutator",
  ];

  const FIELD_LABELS = {
    protagonistName: "Protagonist name",
    protagonist: "Protagonist",
    want: "Want (external goal)",
    need: "Need (internal growth)",
    flaw: "Flaw",
    antagonistName: "Antagonist name",
    antagonist: "Antagonist",
    setting: "Setting",
    inciting: "Inciting incident",
    conflict: "Central conflict",
    stakes: "Stakes",
    twist: "Twist",
    theme: "Theme",
    mutator: "Originality twist (what if…)",
  };

  // Hash a string into a 32-bit seed (FNV-1a), then drive mulberry32.
  function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function createRng(seed) {
    let a = hashSeed(String(seed));
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function randomSeed() {
    const words = ["ember", "harbor", "quill", "vesper", "cinder", "atlas", "moth", "saga", "rook", "lumen", "tide", "fable"];
    const w = words[Math.floor(Math.random() * words.length)];
    return w + "-" + Math.floor(Math.random() * 100000);
  }

  function pick(rng, list) {
    return list[Math.floor(rng() * list.length)];
  }

  // Pick n distinct items.
  function sample(rng, list, n) {
    const copy = list.slice();
    const out = [];
    while (out.length < n && copy.length) out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
    return out;
  }

  function makeName(rng) {
    const p = DATA.NAME_PARTS;
    const first = pick(rng, p.start) + pick(rng, p.end);
    const last = pick(rng, p.start) + pick(rng, p.end) + (rng() < 0.4 ? pick(rng, p.end) : "");
    return first + " " + last;
  }

  function genreKeys(options) {
    const keys = [options.genre];
    if (options.blendGenre && options.blendGenre !== options.genre) keys.push(options.blendGenre);
    return keys.filter((k) => DATA.GENRES[k]);
  }

  const FIELD_GENERATORS = {
    protagonistName: (rng) => makeName(rng),
    protagonist: (rng) => pick(rng, DATA.PROTAGONISTS),
    want: (rng) => pick(rng, DATA.WANTS),
    need: (rng) => pick(rng, DATA.NEEDS),
    flaw: (rng) => pick(rng, DATA.FLAWS),
    antagonistName: (rng) => makeName(rng),
    antagonist: (rng) => pick(rng, DATA.ANTAGONISTS),
    setting: (rng, options) => {
      const keys = genreKeys(options);
      const settings = keys.flatMap((k) => DATA.GENRES[k].settings);
      return pick(rng, settings);
    },
    inciting: (rng) => pick(rng, DATA.INCITING),
    conflict: (rng) => pick(rng, DATA.CONFLICTS),
    stakes: (rng) => pick(rng, DATA.STAKES),
    twist: (rng) => pick(rng, DATA.TWISTS),
    theme: (rng) => pick(rng, DATA.THEMES),
    mutator: (rng) => pick(rng, DATA.MUTATORS),
  };

  function generateField(field, options, rng) {
    return FIELD_GENERATORS[field](rng || Math.random, options);
  }

  function generateCast(rng, size) {
    const secrets = sample(rng, DATA.SECRETS, size || 3);
    return sample(rng, DATA.ROLES, size || 3).map((r, i) => ({
      name: makeName(rng),
      role: r.role,
      detail: r.detail,
      secret: secrets[i],
    }));
  }

  // options: { medium, genre, blendGenre, tone, seed, locked: {field: value}, keepCast }
  function generateConcept(options) {
    const opts = Object.assign({ medium: "film", genre: "fantasy", tone: "Bittersweet" }, options);
    const rng = createRng(opts.seed || randomSeed());
    const locked = opts.locked || {};
    const fields = {};
    for (const f of FIELDS) {
      // Always draw, even for locked fields, so unlocking one field doesn't
      // shift every other result for the same seed.
      const value = FIELD_GENERATORS[f](rng, opts);
      fields[f] = Object.prototype.hasOwnProperty.call(locked, f) ? locked[f] : value;
    }
    const cast = generateCast(rng, 3);
    return {
      medium: opts.medium,
      genre: opts.genre,
      blendGenre: opts.blendGenre || "",
      tone: opts.tone,
      seed: opts.seed,
      fields,
      cast: opts.keepCast || cast,
    };
  }

  function genreLabel(concept) {
    const g = DATA.GENRES[concept.genre];
    const b = DATA.GENRES[concept.blendGenre];
    return g ? g.label + (b && concept.blendGenre !== concept.genre ? " / " + b.label : "") : "";
  }

  function logline(concept) {
    const f = concept.fields;
    return (
      "In " + f.setting + ", " + f.protagonistName + ", " + f.protagonist +
      ", is pulled in when " + f.inciting + ". Driven " + f.want +
      " but held back by " + f.flaw + ", they must outwit " + f.antagonistName +
      ", " + f.antagonist + ", or else " + f.stakes + "."
    );
  }

  // Clichés for the chosen genre(s) plus universal ones, each with a subversion.
  function tropeRadar(genre, blendGenre) {
    const keys = genreKeys({ genre, blendGenre });
    const list = [];
    for (const k of keys) {
      for (const [cliche, twist] of DATA.GENRES[k].tropes) list.push({ source: DATA.GENRES[k].label, cliche, twist });
    }
    for (const [cliche, twist] of DATA.UNIVERSAL_CLICHES) list.push({ source: "Any genre", cliche, twist });
    return list;
  }

  function cap(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }

  function filmOutline(c) {
    const f = c.fields;
    const ally = c.cast[0] || { name: "an ally", role: "Ally" };
    return [
      {
        title: "Act I: Setup",
        beats: [
          { name: "Opening image", text: "Show " + f.protagonistName + " in " + f.setting + ", already living with " + f.flaw + ". Establish a " + c.tone.toLowerCase() + " tone." },
          { name: "Theme stated", text: "Someone hints at the theme: \"" + f.theme + "\". " + f.protagonistName + " dismisses it." },
          { name: "Setup", text: "Show what " + f.protagonistName + " has to lose and why they set out " + f.want + "." },
          { name: "Catalyst", text: cap(f.inciting) + "." },
          { name: "Debate", text: f.protagonistName + " resists. Their flaw (" + f.flaw + ") argues for staying put." },
          { name: "Break into Act II", text: "They commit, choosing " + f.want + " over safety." },
        ],
      },
      {
        title: "Act II: Confrontation",
        beats: [
          { name: "B story", text: ally.name + " (" + ally.role.toLowerCase() + ") enters and carries the theme. This character " + (ally.detail || "plays against the protagonist") + "." },
          { name: "Fun and games", text: "The premise in action: the core conflict of " + f.conflict + " plays out across " + f.setting + "." },
          { name: "Midpoint", text: "A false victory or false defeat. " + f.antagonistName + " shows their real power." },
          { name: "Bad guys close in", text: "Pressure from outside (" + f.antagonist + ") and inside (" + f.flaw + ")." },
          { name: "All is lost", text: "The twist lands: " + f.twist + "." },
          { name: "Dark night of the soul", text: f.protagonistName + " confronts the need: " + f.need + "." },
        ],
      },
      {
        title: "Act III: Resolution",
        beats: [
          { name: "Break into Act III", text: "A new plan that only works if " + f.protagonistName + " has changed." },
          { name: "Finale", text: "Final confrontation with " + f.antagonistName + ". If they fail, " + f.stakes + "." },
          { name: "Final image", text: "A mirror of the opening image showing how the theme (" + f.theme + ") changed them." },
        ],
      },
    ];
  }

  function tvOutline(c, rng, episodes) {
    const f = c.fields;
    const n = episodes || 8;
    const engine = pick(rng, DATA.TV.engines);
    const focuses = sample(rng, DATA.TV.episodeFocus, Math.min(n - 2, DATA.TV.episodeFocus.length));
    const bPlots = sample(rng, DATA.TV.bPlots, 3);
    const cliff = pick(rng, DATA.TV.cliffhangers);
    const mid = Math.floor(n / 2);

    const eps = [];
    eps.push({ name: "Episode 1 (pilot)", text: "Establish " + f.setting + " and " + f.protagonistName + ". End on the inciting incident: " + f.inciting + "." });
    for (let i = 2; i < n; i++) {
      const focus = focuses[(i - 2) % focuses.length];
      const b = bPlots[(i - 2) % bPlots.length];
      let text = cap(focus) + ". B-plot: " + b + ".";
      if (i === mid) text += " MIDSEASON TURN: the twist surfaces in part: " + f.twist + ".";
      if (i === n - 1) text += " " + f.protagonistName + " hits bottom and confronts the need: " + f.need + ".";
      eps.push({ name: "Episode " + i, text });
    }
    eps.push({ name: "Episode " + n + " (finale)", text: "Showdown with " + f.antagonistName + " over " + f.conflict + ". Cliffhanger: " + cliff + "." });

    return [
      {
        title: "Series engine",
        beats: [
          { name: "Format", text: "Each episode is driven by " + engine + "." },
          { name: "Season question", text: "Will " + f.protagonistName + " manage " + f.want + "? If not, " + f.stakes + "." },
          { name: "Series theme", text: cap(f.theme) + "." },
          { name: "Recurring B-plots", text: bPlots.map(cap).join("; ") + "." },
        ],
      },
      { title: "Season 1 (" + n + " episodes)", beats: eps },
      {
        title: "Future seasons",
        beats: [
          { name: "Season 2 hook", text: "Pick up from the cliffhanger. The antagonist role shifts to someone in the cast." },
          { name: "Endgame", text: "The series ends when " + f.protagonistName + " fully embraces the need: " + f.need + "." },
        ],
      },
    ];
  }

  function gameOutline(c, rng) {
    const f = c.fields;
    const loop = DATA.GAME.loops[c.genre] || DATA.GAME.loops.fantasy;
    const hooks = sample(rng, DATA.GAME.mechanicsHooks, 2);
    const endings = sample(rng, DATA.GAME.endings, 3);
    const sides = sample(rng, DATA.GAME.sideQuests, 3);
    const lieutenant = c.cast.find((m) => m.role === "Lieutenant");
    return [
      {
        title: "Design pillars",
        beats: [
          { name: "Core loop", text: cap(loop) + "." },
          { name: "Signature mechanic", text: cap(hooks[0]) + "." },
          { name: "Ludonarrative hook", text: "Make the flaw playable: " + f.flaw + " should be a mechanic the player struggles with until they grow. Supporting system: " + hooks[1] + "." },
          { name: "Player fantasy", text: "Be " + f.protagonist + " in " + f.setting + "." },
        ],
      },
      {
        title: "Campaign",
        beats: [
          { name: "Prologue / tutorial", text: "Teach the core loop while showing life before the incident. Ends when " + f.inciting + "." },
          { name: "Act 1 region", text: "An open hub where the player works " + f.want + ". First boss: " + (lieutenant ? lieutenant.name + ", the antagonist's lieutenant" : "an agent of " + f.antagonistName) + "." },
          { name: "Act 2 region", text: "The world reacts to the player's choices. Conflict: " + f.conflict + ". Mid-game reveal: " + f.twist + "." },
          { name: "Act 3 region", text: "The world changes in response to the reveal. The player confronts " + f.antagonistName + ", " + f.antagonist + "." },
          { name: "Final choice", text: "Gate the endings on how far the player has worked through the need: " + f.need + "." },
        ],
      },
      { title: "Endings", beats: endings.map((e, i) => ({ name: "Ending " + (i + 1), text: e + "." })) },
      { title: "Side quests", beats: sides.map((s, i) => ({ name: "Side quest " + (i + 1), text: cap(s) + "." })) },
    ];
  }

  // Outlines draw extra randomness from a seed derived from the concept seed,
  // so the same concept always gets the same outline.
  function buildOutline(concept, opts) {
    const rng = createRng((concept.seed || "outline") + ":outline");
    if (concept.medium === "tv") return tvOutline(concept, rng, opts && opts.episodes);
    if (concept.medium === "game") return gameOutline(concept, rng);
    return filmOutline(concept);
  }

  const MEDIUM_LABELS = { film: "Film", tv: "TV series", game: "Video game" };

  function toMarkdown(project) {
    const c = project.concept;
    const lines = [];
    lines.push("# " + (project.title || "Untitled story"));
    lines.push("");
    lines.push("**Medium:** " + MEDIUM_LABELS[c.medium] + "  ");
    lines.push("**Genre:** " + genreLabel(c) + "  ");
    lines.push("**Tone:** " + c.tone + "  ");
    if (c.seed) lines.push("**Seed:** `" + c.seed + "`");
    lines.push("");
    lines.push("## Logline");
    lines.push("");
    lines.push(logline(c));
    lines.push("");
    lines.push("## Story bible");
    lines.push("");
    for (const f of FIELDS) lines.push("- **" + FIELD_LABELS[f] + ":** " + c.fields[f]);
    lines.push("");
    lines.push("## Supporting cast");
    lines.push("");
    for (const m of c.cast) lines.push("- **" + m.name + "** (" + m.role + "): " + m.detail + ". Secret: " + m.secret + ".");
    if (project.outline && project.outline.length) {
      lines.push("");
      lines.push("## Outline");
      for (const section of project.outline) {
        lines.push("");
        lines.push("### " + section.title);
        lines.push("");
        for (const b of section.beats) lines.push("- **" + b.name + ":** " + b.text);
      }
    }
    if (project.notes) {
      lines.push("");
      lines.push("## Notes");
      lines.push("");
      lines.push(project.notes);
    }
    lines.push("");
    return lines.join("\n");
  }

  const API = {
    FIELDS, FIELD_LABELS, MEDIUM_LABELS, createRng, randomSeed, generateConcept,
    generateField, generateCast, logline, tropeRadar, buildOutline, toMarkdown, genreLabel,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = API;
  else root.WriteTool = API;
})(typeof self !== "undefined" ? self : this);
