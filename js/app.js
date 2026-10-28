// Browser UI. Holds the current project, renders it, and persists to localStorage.
(function () {
  "use strict";

  const W = window.WriteTool;
  const D = window.WriteToolData;
  const STORE_KEY = "writetool:projects";
  const CURRENT_KEY = "writetool:current";

  const $ = (id) => document.getElementById(id);
  const el = (tag, props, children) => {
    const node = document.createElement(tag);
    Object.assign(node, props || {});
    for (const c of children || []) node.append(c);
    return node;
  };

  // Grow textareas to fit their content. Hidden panels report no height, so
  // this also runs when a tab is shown.
  function fit(ta) {
    if (!ta.offsetParent) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + 2 + "px";
  }
  function fitAll(root) {
    (root || document).querySelectorAll("main textarea").forEach(fit);
  }

  // ---------- storage (wrapped: storage can be unavailable) ----------
  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  // ---------- state ----------
  let project = null;

  function settingsFromUI() {
    return {
      medium: document.querySelector("input[name=medium]:checked").value,
      genre: $("genre").value,
      blendGenre: $("blend").value,
      tone: $("tone").value,
      seed: $("seed").value.trim() || W.randomSeed(),
    };
  }

  function newProject() {
    $("seed").value = W.randomSeed();
    const concept = W.generateConcept(settingsFromUI());
    return { id: "p" + Date.now().toString(36), title: "", concept, outline: [], notes: "", locked: [], updatedAt: Date.now() };
  }

  function touch() {
    project.updatedAt = Date.now();
    saveJSON(CURRENT_KEY, project);
  }

  // ---------- rendering ----------
  function populateSelects() {
    const genres = Object.entries(D.GENRES);
    $("genre").replaceChildren(...genres.map(([k, g]) => el("option", { value: k, textContent: g.label })));
    $("blend").replaceChildren(el("option", { value: "", textContent: "(none)" }), ...genres.map(([k, g]) => el("option", { value: k, textContent: g.label })));
    $("tone").replaceChildren(...D.TONES.map((t) => el("option", { value: t, textContent: t })));
  }

  function syncSetupUI() {
    const c = project.concept;
    document.querySelector("input[name=medium][value=" + c.medium + "]").checked = true;
    $("genre").value = c.genre;
    $("blend").value = c.blendGenre || "";
    $("tone").value = c.tone;
    $("seed").value = c.seed || "";
    $("title").value = project.title || "";
    $("notes").value = project.notes || "";
    updateMediumUI();
  }

  function updateMediumUI() {
    const medium = document.querySelector("input[name=medium]:checked").value;
    $("episodes-field").hidden = medium !== "tv";
    const hints = {
      film: "A three-act, beat-by-beat feature outline.",
      tv: "A series engine, an episode-by-episode first season, and future-season hooks.",
      game: "Design pillars, a campaign split into regions, branching endings, and side quests.",
    };
    $("outline-hint").textContent = hints[medium];
  }

  function renderLogline() {
    $("logline").textContent = W.logline(project.concept);
  }

  function renderFields() {
    const container = $("fields");
    container.replaceChildren();
    for (const f of W.FIELDS) {
      const isLocked = project.locked.includes(f);
      const textarea = el("textarea", { value: project.concept.fields[f], rows: 2 });
      textarea.setAttribute("aria-label", W.FIELD_LABELS[f]);
      textarea.addEventListener("input", () => {
        project.concept.fields[f] = textarea.value;
        renderLogline();
        touch();
      });

      const lockBtn = el("button", { type: "button", className: "icon" + (isLocked ? " active" : ""), textContent: isLocked ? "🔒" : "🔓", title: isLocked ? "Unlock" : "Lock (keep when generating)" });
      lockBtn.setAttribute("aria-pressed", String(isLocked));
      lockBtn.addEventListener("click", () => {
        project.locked = isLocked ? project.locked.filter((x) => x !== f) : project.locked.concat(f);
        touch();
        renderFields();
      });

      const rerollBtn = el("button", { type: "button", className: "icon", textContent: "↻", title: "Reroll this field" });
      rerollBtn.addEventListener("click", () => {
        project.concept.fields[f] = W.generateField(f, project.concept);
        touch();
        renderFields();
        renderLogline();
      });

      const head = el("div", { className: "field-head" }, [el("span", { textContent: W.FIELD_LABELS[f] }), el("span", {}, [rerollBtn, lockBtn])]);
      container.append(el("div", { className: "card field-card" + (isLocked ? " locked" : "") }, [head, textarea]));
    }
  }

  function renderCast() {
    const container = $("cast");
    container.replaceChildren();
    project.concept.cast.forEach((m) => {
      const input = (key, label, multiline) => {
        const node = el(multiline ? "textarea" : "input", { value: m[key] });
        if (multiline) node.rows = 2;
        node.setAttribute("aria-label", label);
        node.addEventListener("input", () => {
          m[key] = node.value;
          touch();
        });
        return el("label", { className: "mini" }, [label, node]);
      };
      container.append(
        el("div", { className: "card cast-card" }, [
          input("name", "Name"),
          input("role", "Role"),
          input("detail", "Function in story", true),
          input("secret", "Secret", true),
        ])
      );
    });
  }

  function renderOutline() {
    const container = $("outline");
    container.replaceChildren();
    if (!project.outline.length) {
      container.append(el("p", { className: "empty", textContent: "No outline yet. Build one from your story bible." }));
      return;
    }
    for (const section of project.outline) {
      const beats = section.beats.map((b) => {
        const ta = el("textarea", { value: b.text, rows: 2 });
        ta.setAttribute("aria-label", b.name);
        ta.addEventListener("input", () => {
          b.text = ta.value;
          touch();
        });
        return el("div", { className: "beat" }, [el("div", { className: "beat-name", textContent: b.name }), ta]);
      });
      container.append(el("div", { className: "card outline-section" }, [el("h3", { textContent: section.title }), ...beats]));
    }
  }

  function renderTropes() {
    const list = W.tropeRadar(project.concept.genre, project.concept.blendGenre);
    $("tropes").replaceChildren(
      ...list.map((t) =>
        el("div", { className: "card trope" }, [
          el("div", { className: "trope-source", textContent: t.source }),
          el("div", { className: "cliche" }, [el("strong", { textContent: "Cliché: " }), t.cliche]),
          el("div", { className: "twist" }, [el("strong", { textContent: "Subvert: " }), t.twist]),
        ])
      )
    );
  }

  function drawMutators() {
    const shuffled = D.MUTATORS.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    $("mutators").replaceChildren(
      ...shuffled.map((m) => {
        const use = el("button", { type: "button", textContent: "Use as twist" });
        use.addEventListener("click", () => {
          project.concept.fields.mutator = m;
          touch();
          renderFields();
          toast("Saved as the story's originality twist.");
        });
        return el("li", { className: "card" }, [el("span", { textContent: m }), use]);
      })
    );
  }

  function renderAll() {
    syncSetupUI();
    renderLogline();
    renderFields();
    renderCast();
    renderOutline();
    renderTropes();
    renderProjectList();
    fitAll();
  }

  // ---------- projects ----------
  function savedProjects() {
    return loadJSON(STORE_KEY, {});
  }

  function renderProjectList() {
    const projects = Object.values(savedProjects()).sort((a, b) => b.updatedAt - a.updatedAt);
    const select = $("project-list");
    select.replaceChildren(el("option", { value: "", textContent: projects.length ? "Open saved project…" : "No saved projects" }));
    for (const p of projects) select.append(el("option", { value: p.id, textContent: p.title || "Untitled (" + W.MEDIUM_LABELS[p.concept.medium] + ")", selected: p.id === project.id }));
  }

  function saveProject() {
    const all = savedProjects();
    all[project.id] = project;
    touch();
    toast(saveJSON(STORE_KEY, all) ? "Project saved." : "Could not save: browser storage is unavailable.");
    renderProjectList();
  }

  function loadProject(p) {
    project = Object.assign({ outline: [], notes: "", locked: [], title: "" }, p);
    touch();
    renderAll();
  }

  function download(filename, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = el("a", { href: url, download: filename });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function slug() {
    return (project.title || "story").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "story";
  }

  let toastTimer;
  function toast(msg) {
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  // ---------- events ----------
  function generate() {
    const locked = {};
    for (const f of project.locked) locked[f] = project.concept.fields[f];
    const settings = settingsFromUI();
    $("seed").value = settings.seed;
    project.concept = W.generateConcept(Object.assign(settings, { locked, keepCast: project.concept.cast }));
    project.outline = [];
    touch();
    renderLogline();
    renderFields();
    renderCast();
    renderOutline();
    renderTropes();
    fitAll();
  }

  function wire() {
    document.addEventListener("input", (e) => {
      if (e.target.tagName === "TEXTAREA") fit(e.target);
    });
    window.addEventListener("resize", () => fitAll());
    new MutationObserver(() => fitAll()).observe(document.querySelector("main"), { childList: true, subtree: true });
    $("btn-generate").addEventListener("click", () => {
      generate();
      toast("New story generated.");
    });
    $("btn-dice").addEventListener("click", () => {
      $("seed").value = W.randomSeed();
      generate();
    });

    // Setup changes update the concept's metadata without rerolling everything.
    const onSetupChange = () => {
      const s = settingsFromUI();
      Object.assign(project.concept, { medium: s.medium, genre: s.genre, blendGenre: s.blendGenre, tone: s.tone });
      updateMediumUI();
      renderTropes();
      touch();
    };
    document.querySelectorAll("input[name=medium]").forEach((r) => r.addEventListener("change", onSetupChange));
    ["genre", "blend", "tone"].forEach((id) => $(id).addEventListener("change", onSetupChange));

    $("btn-cast").addEventListener("click", () => {
      project.concept.cast = W.generateCast(Math.random, 3);
      touch();
      renderCast();
    });

    $("btn-outline").addEventListener("click", () => {
      if (project.outline.length && !confirm("Replace the current outline? Your edits to it will be lost.")) return;
      const episodes = Math.min(13, Math.max(4, parseInt($("episodes").value, 10) || 8));
      project.outline = W.buildOutline(project.concept, { episodes });
      touch();
      renderOutline();
    });

    $("btn-mutators").addEventListener("click", drawMutators);

    $("title").addEventListener("input", (e) => {
      project.title = e.target.value;
      touch();
    });
    $("notes").addEventListener("input", (e) => {
      project.notes = e.target.value;
      touch();
    });

    document.querySelectorAll(".tabs [role=tab]").forEach((tab) =>
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tabs [role=tab]").forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
        document.querySelectorAll(".tab-panel").forEach((p) => (p.hidden = p.id !== "tab-" + tab.dataset.tab));
        fitAll();
      })
    );

    $("btn-new").addEventListener("click", () => {
      loadProject(newProject());
      toast("Started a new project.");
    });
    $("btn-save").addEventListener("click", saveProject);
    $("btn-delete").addEventListener("click", () => {
      const all = savedProjects();
      if (!all[project.id]) return toast("This project hasn't been saved.");
      if (!confirm("Delete \"" + (project.title || "Untitled") + "\" from saved projects?")) return;
      delete all[project.id];
      saveJSON(STORE_KEY, all);
      renderProjectList();
      toast("Project deleted.");
    });
    $("project-list").addEventListener("change", (e) => {
      const p = savedProjects()[e.target.value];
      if (p) loadProject(p);
    });

    $("btn-export-md").addEventListener("click", () => download(slug() + ".md", W.toMarkdown(project), "text/markdown"));
    $("btn-export-json").addEventListener("click", () => download(slug() + ".json", JSON.stringify(project, null, 2), "application/json"));
    $("import-file").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      e.target.value = "";
      if (!file) return;
      try {
        const p = JSON.parse(await file.text());
        if (!p.concept || !p.concept.fields) throw new Error("not a WriteTool project");
        p.id = "p" + Date.now().toString(36);
        loadProject(p);
        toast("Imported. Click Save to keep it.");
      } catch (err) {
        toast("Import failed: " + err.message);
      }
    });
  }

  // ---------- boot ----------
  populateSelects();
  wire();
  const current = loadJSON(CURRENT_KEY, null);
  if (current && current.concept && current.concept.fields) loadProject(current);
  else loadProject(newProject());
})();
