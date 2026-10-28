// Run with: node --test
const test = require("node:test");
const assert = require("node:assert");
const W = require("../js/generator.js");
const D = require("../js/data.js");

test("same seed produces the same concept", () => {
  const a = W.generateConcept({ medium: "film", genre: "horror", tone: "Grim", seed: "abc" });
  const b = W.generateConcept({ medium: "film", genre: "horror", tone: "Grim", seed: "abc" });
  assert.deepStrictEqual(a, b);
});

test("different seeds produce different concepts", () => {
  const a = W.generateConcept({ genre: "scifi", seed: "one" });
  const b = W.generateConcept({ genre: "scifi", seed: "two" });
  assert.notDeepStrictEqual(a.fields, b.fields);
});

test("every field is filled", () => {
  const c = W.generateConcept({ genre: "western", seed: "x" });
  for (const f of W.FIELDS) assert.ok(c.fields[f], "missing " + f);
  assert.strictEqual(c.cast.length, 3);
});

test("locked fields are kept and do not shift other fields", () => {
  const base = W.generateConcept({ genre: "mystery", seed: "lock" });
  const locked = W.generateConcept({ genre: "mystery", seed: "lock", locked: { twist: "my own twist" } });
  assert.strictEqual(locked.fields.twist, "my own twist");
  for (const f of W.FIELDS) if (f !== "twist") assert.strictEqual(locked.fields[f], base.fields[f]);
});

test("setting comes from the chosen genre or its blend", () => {
  for (let i = 0; i < 50; i++) {
    const c = W.generateConcept({ genre: "heist", blendGenre: "horror", seed: "s" + i });
    const allowed = D.GENRES.heist.settings.concat(D.GENRES.horror.settings);
    assert.ok(allowed.includes(c.fields.setting));
  }
});

test("outlines are built for every medium", () => {
  for (const medium of ["film", "tv", "game"]) {
    for (const genre of Object.keys(D.GENRES)) {
      const c = W.generateConcept({ medium, genre, seed: medium + genre });
      const outline = W.buildOutline(c, { episodes: 10 });
      assert.ok(outline.length > 0);
      for (const s of outline) {
        assert.ok(s.title);
        for (const b of s.beats) {
          assert.ok(b.name && b.text);
          assert.ok(!/undefined/.test(b.text), medium + "/" + genre + ": " + b.text);
        }
      }
    }
  }
});

test("tv outline respects episode count", () => {
  const c = W.generateConcept({ medium: "tv", genre: "drama", seed: "ep" });
  const season = W.buildOutline(c, { episodes: 6 })[1];
  assert.strictEqual(season.beats.length, 6);
});

test("trope radar includes genre and universal clichés", () => {
  const list = W.tropeRadar("fantasy", "comedy");
  assert.ok(list.some((t) => t.source === "Fantasy"));
  assert.ok(list.some((t) => t.source === "Comedy"));
  assert.ok(list.some((t) => t.source === "Any genre"));
});

test("markdown export includes the key sections", () => {
  const c = W.generateConcept({ medium: "game", genre: "postapoc", seed: "md" });
  const md = W.toMarkdown({ title: "Last Light", concept: c, outline: W.buildOutline(c), notes: "hello" });
  for (const s of ["# Last Light", "## Logline", "## Story bible", "## Supporting cast", "## Outline", "## Notes"]) assert.ok(md.includes(s), s);
  assert.ok(!md.includes("undefined"));
});

test("genres and tones are filtered by medium", () => {
  const keys = (medium) => W.genresFor(medium).map(([k]) => k);
  assert.ok(keys("game").includes("psychhorror"));
  assert.ok(keys("game").includes("fantasy"), "shared genres are offered everywhere");
  assert.ok(!keys("game").includes("procedural"));
  assert.ok(keys("tv").includes("procedural"));
  assert.ok(!keys("tv").includes("adventure"));
  const tones = (medium) => W.tonesFor(medium).map((t) => t.name);
  assert.ok(tones("game").includes("Oppressive"));
  assert.ok(!tones("game").includes("Soapy"));
  assert.ok(tones("tv").includes("Soapy"));
  assert.ok(tones("film").includes("Grim"));
});

test("every genre and tone is complete", () => {
  for (const [k, g] of Object.entries(D.GENRES)) {
    assert.ok(g.label && g.settings.length >= 4 && g.tropes.length >= 3, k);
    for (const m of g.media || []) assert.ok(["film", "tv", "game"].includes(m), k + " has unknown medium " + m);
  }
  for (const t of D.TONES) assert.ok(t.name && t.hint, JSON.stringify(t));
});

test("every genre offered for games has a core loop", () => {
  for (const [k] of W.genresFor("game")) assert.ok(D.GAME.loops[k], "missing loop for " + k);
});

test("psychological horror games use genre-specific material", () => {
  const protagonists = new Set();
  const mechanics = new Set();
  for (let i = 0; i < 40; i++) {
    const c = W.generateConcept({ medium: "game", genre: "psychhorror", tone: "Paranoid", seed: "ph" + i });
    protagonists.add(c.fields.protagonist);
    mechanics.add(W.buildOutline(c)[0].beats[1].text);
  }
  assert.ok(D.GENRES.psychhorror.protagonists.some((p) => protagonists.has(p)));
  const genreHooks = D.GAME.genreMechanics.psychhorror.map((h) => h.charAt(0).toUpperCase() + h.slice(1) + ".");
  assert.ok([...mechanics].every((m) => genreHooks.includes(m)), "signature mechanic should come from the genre");
});
