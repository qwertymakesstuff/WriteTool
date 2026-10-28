# WriteTool

A browser tool for coming up with original stories and storylines for **films**, **TV series**, and **video games**.

There is no build step, no install, and no server. Open `index.html` in a browser and start writing.

## What it does

- **Story generator.** Choose a medium, genre, optional blend genre, and tone. You get a full story bible: protagonist, want, need, flaw, antagonist, setting, inciting incident, conflict, stakes, twist, theme, and a "what if" constraint. The logline updates as you edit.
- **Lock and reroll.** Lock 🔒 the parts you like and regenerate the rest, or reroll ↻ one field at a time. Every field is editable.
- **Seeds.** The same seed and settings always give the same story, so you can share a concept by sharing its seed.
- **Outlines for each medium:**
  - *Film:* a three-act, beat-by-beat outline (catalyst, midpoint, all is lost, finale…).
  - *TV:* a series engine, a first season split into episodes (4–13) with B-plots, a midseason turn and a cliffhanger, plus hooks for later seasons.
  - *Game:* design pillars (core loop, signature mechanic, a hook that turns the protagonist's flaw into a mechanic), a campaign split into regions, branching endings, and side quests.
- **Originality tools:**
  - *Trope radar:* common clichés for your genres, each with a subversion.
  - *What-if mutators:* random structural constraints you can apply to your story.
- **Supporting cast.** Each character has a role, a job in the story, and a secret.
- **Projects.** Save projects in the browser, and export to Markdown or JSON. Re-import JSON to continue later or on another machine.

## Running

Open `index.html` directly, or serve the folder:

```bash
npm start
```

Then go to <http://localhost:8000>.

## Tests

```bash
npm test
```

## Adding your own material

All generator content is in [`js/data.js`](js/data.js): genres, settings, tropes, characters, twists, themes, and game/TV tables. Add entries to any list and they show up in generated stories. To add a genre, add a new key to `GENRES` with a `label`, `settings`, and `tropes`, and add a matching core loop under `GAME.loops`.

## Project layout

| File | Purpose |
| --- | --- |
| `index.html`, `styles.css` | The interface |
| `js/data.js` | Content tables |
| `js/generator.js` | Generation, outlines, and Markdown export (no DOM; also runs in Node) |
| `js/app.js` | UI state, rendering, and saving |
| `test/` | Node tests for the generator |
