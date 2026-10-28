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
