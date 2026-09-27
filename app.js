// app.js
let IMAGE_CATALOG = {};
const STORAGE_KEY = "characterChoiceV35";
const BEST_KEY = "characterChoiceV35Best";
const BEST_HOLDER_KEY = "characterChoiceV35BestHolder";
const CHARACTER_STATS_KEY = "characterChoiceV35CharacterStats";

const $ = (id) => document.getElementById(id);

let state = null;
let characterStats = loadCharacterStats();

function getImageCandidates(character) {
  const rawName = String(character?.name || "").trim();
  const id = String(character?.id ?? "").trim();

  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/['']/g, "")
      .replace(/&/g, "and")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toLowerCase();

  const variants = [
    rawName,
    rawName.replace(/[-–—]/g, " "),
    rawName.replace(/\([^)]*\)/g, "").trim(),
  ];

  const slugs = [...new Set(variants.map(normalize).filter(Boolean))];
  const candidates = [];

  const rawVariants = [...new Set(variants.map((v) => v.trim()).filter(Boolean))];
  for (const name of rawVariants) {
    candidates.push(`images/${id}_${name}.jpg`);
    candidates.push(`images/${id}_${name}.jpeg`);
    candidates.push(`images/${id}_${name}.png`);
  }

  for (const slug of slugs) {
    candidates.push(`images/${id}_${slug}.jpg`);
    candidates.push(`images/${id}_${slug}.jpeg`);
    candidates.push(`images/${id}_${slug}.png`);
    candidates.push(`images/${slug}.jpg`);
    candidates.push(`images/${slug}.jpeg`);
    candidates.push(`images/${slug}.png`);
  }

  return [...new Set(candidates)];
}

function getImagePath(character) {
  return getImageCandidates(character)[0] || "";
}

function slug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();
}

function loadCharacterStats() {
  try {
    const raw = JSON.parse(localStorage.getItem(CHARACTER_STATS_KEY) || "{}");
    return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
  } catch {
    return {};
  }
}

function saveCharacterStats() {
  localStorage.setItem(CHARACTER_STATS_KEY, JSON.stringify(characterStats));
}

function save() {
  if (!state) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(BEST_KEY, String(state.bestRecord || 0));
  localStorage.setItem(BEST_HOLDER_KEY, state.bestRecordHolder || "");
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

    if (raw && typeof raw === "object") {
      if (!Array.isArray(raw.usedIds)) raw.usedIds = [];
      if (!Array.isArray(raw.history)) raw.history = [];
      if (!Number.isFinite(Number(raw.bestRecord))) raw.bestRecord = 0;
      if (typeof raw.bestRecordHolder !== "string") raw.bestRecordHolder = "";
      if (!Object.prototype.hasOwnProperty.call(raw, "lastSnapshot")) raw.lastSnapshot = null;

      if (raw.championId && raw.challengerId && Array.isArray(raw.usedIds)) {
        if (!raw.usedIds.includes(raw.championId)) raw.usedIds.unshift(raw.championId);
        if (!raw.usedIds.includes(raw.challengerId)) raw.usedIds.push(raw.challengerId);
        return raw;
      }
    }
  } catch {}

  return null;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickUnused(usedIds, poolIds = null) {
  const pool = poolIds || CHARACTERS.map((c) => c.id);
  const available = pool.filter((id) => !usedIds.includes(id));
  if (!available.length) return null;
  return available[Math.floor(Math.random() * available.length)];
}

function createNewState(poolSize = null) {
  const ids = Array.isArray(CHARACTERS) ? CHARACTERS.map((c) => c.id) : [];

  let selectedIds = [...ids];

  if (poolSize && poolSize > 0 && poolSize < selectedIds.length) {
    selectedIds = shuffle(selectedIds).slice(0, poolSize);
  }

  const championId = selectedIds.length ? selectedIds[Math.floor(Math.random() * selectedIds.length)] : null;
  const usedIds = championId ? [championId] : [];
  const challengerId = championId ? pickUnused(usedIds, selectedIds) : null;

  if (challengerId) usedIds.push(challengerId);

  return {
    combat: 1,
    streak: 0,
    bestRecord: Number(localStorage.getItem(BEST_KEY) || 0),
    bestRecordHolder: localStorage.getItem(BEST_HOLDER_KEY) || "",
    championId,
    challengerId,
    usedIds,
    poolIds: selectedIds,
    history: [],
    lastSnapshot: null,
  };
}

function getChar(id) {
  return Array.isArray(CHARACTERS) ? CHARACTERS.find((c) => c.id === id) : null;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

function renderCard(prefix, character) {
  const nameEl = $(prefix + "Name");
  const universeEl = $(prefix + "Universe");
  const mediaEl = $(prefix + "Media");
  const portraitEl = $(prefix + "Portrait");

  if (!character || !nameEl || !universeEl || !mediaEl || !portraitEl) return;

  nameEl.textContent = character.name || "—";
  universeEl.textContent = character.universe || "—";
  mediaEl.textContent = character.media || "—";

  portraitEl.dataset.characterId = String(character.id || "");
  loadPortrait(character, portraitEl);
}

function getBestRecordFromHistory() {
  let best = 0;
  let holder = "";
  let current = 0;
  let previousWinner = null;

  for (const h of Array.isArray(state.history) ? state.history : []) {
    const winner = h && h.winner ? String(h.winner) : "";
    if (winner && winner === previousWinner) current += 1;
    else current = winner ? 1 : 0;

    if (current > best) {
      best = current;
      holder = winner;
    }

    previousWinner = winner || null;
  }

  return { best, holder };
}

function syncBestRecord() {
  if (!state) return;
  const derived = getBestRecordFromHistory();
  const storedBest = Number(state.bestRecord || 0);

  if (derived.best > storedBest) {
    state.bestRecord = derived.best;
    state.bestRecordHolder = derived.holder;
  } else if (!state.bestRecordHolder && storedBest > 0) {
    state.bestRecordHolder = derived.holder || "";
  }
}

function updateStats() {
  if (!state) return;

  syncBestRecord();

  const setText = (id, value) => {
    const el = $(id);
    if (el) el.textContent = String(value);
  };

  const poolSize = state.poolIds && state.poolIds.length ? state.poolIds.length : CHARACTERS.length;
  const progress = poolSize ? Math.min(100, Math.round((state.usedIds.length / poolSize) * 100)) : 0;

  setText("combatNumber", state.combat);
  setText("streak", state.streak);
  setText("bestRecord", `${state.bestRecord} ${state.bestRecord === 1 ? "VICTOIRE" : "VICTOIRES"}`);
  setText("bestRecordHolderInline", state.bestRecordHolder || "—");

  setText("used", state.usedIds.length);
  setText("played", state.history.length);
  setText("pool", poolSize);
  setText("remaining", Math.max(0, poolSize - state.usedIds.length));
  setText("progressPercent", `${progress}%`);

  const bar = $("progressBar");
  if (bar) bar.style.width = `${progress}%`;

  const undo = $("undoBtn");
  if (undo) undo.disabled = !state.lastSnapshot;
}

async function loadPortrait(character, el) {
  if (!character || !el) return;

  const characterId = String(character.id || "");
  const cacheKey = `ccimg-src-v36:${characterId}`;

  const existingImg = el.querySelector("img");
  if (existingImg && existingImg.dataset.characterId === characterId) return;

  el.className = "portrait loading";
  el.innerHTML = "";
  el.dataset.characterId = characterId;

  const raw = String(character.name || "").trim();
  const id = characterId;

  const stripAccents = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const noApostrophe = (s) => s.replace(/[\'']/g, "");
  const clean = (s) => noApostrophe(stripAccents(s));

  const variants = [
    raw,
    clean(raw),
    raw.replace(/[-–—]/g, "_"),
    clean(raw).replace(/[-–—]/g, "_"),
    raw.replace(/\s+/g, "_"),
    clean(raw).replace(/\s+/g, "_"),
    raw.replace(/[^A-Za-zÀ-ÿ0-9_-]+/g, "_"),
    clean(raw).replace(/[^A-Za-z0-9_-]+/g, "_"),
  ];

  const names = [...new Set(variants.map((v) => v.replace(/^_+|_+$/g, "")).filter(Boolean))];
  const candidates = [];

  if (id) {
    for (const ext of [".jpg", ".jpeg", ".png"]) {
      candidates.push(`images/${id}${ext}`);
    }
  }

  for (const name of names) {
    for (const ext of [".jpg", ".jpeg", ".png"]) {
      candidates.push(`images/${id}_${name}${ext}`);
      candidates.push(`images/${name}${ext}`);
    }
  }

  const cached = localStorage.getItem(cacheKey);
  const uniqueCandidates = [...new Set([...(cached ? [cached] : []), ...candidates])];

  const tryCandidate = (index) => {
    if (index >= uniqueCandidates.length) {
      el.className = "portrait unavailable";
      el.innerHTML = `<span>Visuel introuvable pour ${character.name}</span>`;
      return;
    }

    const src = uniqueCandidates[index];
    const img = new Image();
    img.alt = character.name;
    img.decoding = "async";
    img.fetchPriority = "high";
    img.referrerPolicy = "no-referrer";

    img.onload = async () => {
      try {
        if (img.decode) await img.decode();
      } catch {}

      if (el.dataset.characterId !== characterId) return;

      localStorage.setItem(cacheKey, src);
      el.className = "portrait";
      el.innerHTML = "";
      img.title = `${character.name} — visuel externe. Droits © à leurs créateurs / ayants droit. Source : catalogue local /images`;
      img.dataset.characterId = characterId;
      el.appendChild(img);
    };

    img.onerror = () => {
      if (cached && index === 0) localStorage.removeItem(cacheKey);
      tryCandidate(index + 1);
    };

    img.src = src;
  };

  tryCandidate(0);
}

function flashWinner(cardId) {
  const el = $(cardId);
  if (!el) return;
  el.classList.remove("winner-flash");
  void el.offsetWidth;
  el.classList.add("winner-flash");
  setTimeout(() => el.classList.remove("winner-flash"), 500);
}

function toast(message) {
  const el = $("toast");
  if (!el) return;

  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

function render() {
  if (!state) return;

  const champ = getChar(state.championId);
  const challenger = state.challengerId ? getChar(state.challengerId) : null;

  if (!champ) return;

  renderCard("champion", champ);

  if (challenger) {
    renderCard("challenger", challenger);
    const card = $("challengerCard");
    if (card) card.style.display = "block";
  } else {
    const card = $("challengerCard");
    if (card) card.style.display = "none";
  }

  const championStreak = $("championStreak");
  if (championStreak) championStreak.textContent = state.streak;

  updateStats();
}

function choose(winnerId) {
  if (!state) return;

  const champ = getChar(state.championId);
  const challenger = state.challengerId ? getChar(state.challengerId) : null;
  const winner = getChar(winnerId);

  if (!champ || !challenger || !winner) return;

  state.lastSnapshot = JSON.parse(
    JSON.stringify({
      combat: state.combat,
      streak: state.streak,
      championId: state.championId,
      challengerId: state.challengerId,
      usedIds: state.usedIds,
      poolIds: state.poolIds,
      history: state.history,
      bestRecord: state.bestRecord,
      bestRecordHolder: state.bestRecordHolder,
      characterStats: JSON.parse(JSON.stringify(characterStats)),
    })
  );

  state.history.push({
    combat: state.combat,
    championBefore: champ.name,
    challenger: challenger.name,
    universe: winner.universe,
    media: winner.media,
    winner: winner.name,
  });

  const loser = winnerId === state.championId ? challenger : champ;
  updateCharacterStats(winner, loser);

  if (winnerId === state.championId) {
    state.streak += 1;
  } else {
    state.championId = winnerId;
    state.streak = 1;
  }

  if (state.streak > state.bestRecord) {
    state.bestRecord = state.streak;
    state.bestRecordHolder = winner.name;
  }

  const pool = state.poolIds && state.poolIds.length ? state.poolIds : CHARACTERS.map((c) => c.id);

  if (state.usedIds.length >= pool.length) {
    state.challengerId = null;
    save();
    render();
    toast("🎉 Le pool entier a été parcouru !");
    return;
  }

  state.combat += 1;
  state.challengerId = pickUnused(state.usedIds, pool);

  if (state.challengerId) {
    state.usedIds.push(state.challengerId);
  }

  syncBestRecord();
  save();
  render();
  flashWinner(winnerId === champ.id ? "championCard" : "challengerCard");
}

function renderHistory() {
  const box = $("historyList");
  if (!box) return;

  const query = ($("historySearch")?.value || "").trim().toLowerCase();

  if (!state || !state.history.length) {
    box.innerHTML = '<div class="history-row"><span>—</span><span>Aucun combat enregistré.</span></div>';
    return;
  }

  const filtered = [...state.history]
    .reverse()
    .filter((h) => {
      if (!query) return true;
      return [h.championBefore, h.challenger, h.winner, h.universe, h.media].some((v) =>
        String(v).toLowerCase().includes(query)
      );
    });

  if (!filtered.length) {
    box.innerHTML = '<div class="history-row"><span>—</span><span>Aucun résultat.</span></div>';
    return;
  }

  box.innerHTML = filtered
    .map(
      (h) => `
      <div class="history-row">
        <div>#${h.combat}</div>
        <div><span>Champion :</span> ${escapeHtml(h.championBefore)}</div>
        <div><span>Challenger :</span> ${escapeHtml(h.challenger)}</div>
        <div class="winner">🏆 ${escapeHtml(h.winner)}</div>
      </div>
    `
    )
    .join("");
}

function exportCSV() {
  if (!state) return;

  const rows = [
    ["Combat", "Champion avant", "Adversaire", "Univers", "Média", "Gagnant"],
    ...state.history.map((h) => [h.combat, h.championBefore, h.challenger, h.universe, h.media, h.winner]),
  ];

  const csv = rows
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";"))
    .join("\n");

  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `character-choice-historique-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function showHome() {
  const arena = $("arena");
  const dashboard = document.querySelector(".dashboard");
  const arenaHead = document.querySelector(".arena-head");
  const footerGrid = document.querySelector(".footer-grid");
  const rightsPanel = document.querySelector(".rights-panel");

  if (arena) arena.style.display = "none";
  if (dashboard) dashboard.style.display = "none";
  if (arenaHead) arenaHead.style.display = "none";
  if (footerGrid) footerGrid.style.display = "none";
  if (rightsPanel) rightsPanel.style.display = "none";

  let homeContainer = $("homeContainer");
  if (!homeContainer) {
    homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    homeContainer.className = "home-container";
    const main = document.querySelector("main");
    if (main) main.insertBefore(homeContainer, main.firstChild || null);
  }

  homeContainer.style.display = "flex";

  const maxPoolCount = Array.isArray(CHARACTERS) ? CHARACTERS.length : 0;

  homeContainer.innerHTML = `
    <div class="home-content">
      <div class="home-header">
        <h1 class="home-title">Ultimate Multiverse Battle</h1>
        <p class="home-subtitle">Choisissez votre légendaire.</p>
      </div>

      <div class="home-options">
        <div class="option-card full-pool">
          <div class="option-icon">🌌</div>
          <h2>Catalogue Complet</h2>
          <p><strong id="fullPoolCount">${maxPoolCount}</strong> personnages</p>
          <button class="option-btn full-pool-btn" type="button">Commencer</button>
        </div>

        <div class="option-card custom-pool">
          <div class="option-icon">⚙️</div>
          <h2>Sélection Personnalisée</h2>
          <p>Choisissez entre 10 et <strong id="maxPoolCount">${maxPoolCount}</strong></p>
          <div class="custom-input-group">
            <label for="poolSizeInput">Nombre de personnages :</label>
            <input
              type="number"
              id="poolSizeInput"
              min="10"
              max="${maxPoolCount}"
              value="${Math.min(100, maxPoolCount)}"
              placeholder="Entre 10 et ${maxPoolCount}"
            >
            <button class="option-btn custom-pool-btn" type="button">Commencer</button>
          </div>
        </div>
      </div>

      <div class="home-footer">
        <p class="home-info">⚔️ Affrontez des centaines de personnages issus des films, séries, jeux et mangas.</p>
      </div>
    </div>
  `;

  attachHomeListeners();
}

function hideHome() {
  const homeContainer = $("homeContainer");
  if (homeContainer) homeContainer.style.display = "none";

  const arena = $("arena");
  const dashboard = document.querySelector(".dashboard");
  const arenaHead = document.querySelector(".arena-head");
  const footerGrid = document.querySelector(".footer-grid");
  const rightsPanel = document.querySelector(".rights-panel");

  if (arena) arena.style.display = "grid";
  if (dashboard) dashboard.style.display = "flex";
  if (arenaHead) arenaHead.style.display = "flex";
  if (footerGrid) footerGrid.style.display = "grid";
  if (rightsPanel) rightsPanel.style.display = "block";
}

function attachHomeListeners() {
  const fullPoolBtn = document.querySelector(".full-pool-btn");
  const customPoolBtn = document.querySelector(".custom-pool-btn");
  const poolSizeInput = $("poolSizeInput");

  if (fullPoolBtn) {
    fullPoolBtn.style.pointerEvents = "auto";
    fullPoolBtn.disabled = false;
    fullPoolBtn.onclick = null;
    fullPoolBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      startGame(null);
    });
  }

  if (customPoolBtn) {
    customPoolBtn.style.pointerEvents = "auto";
    customPoolBtn.disabled = false;
    customPoolBtn.onclick = null;
    customPoolBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      startGameCustom();
    });
  }

  if (poolSizeInput) {
    poolSizeInput.style.pointerEvents = "auto";
    poolSizeInput.onkeypress = null;
    poolSizeInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        startGameCustom();
      }
    });
  }
}

function startGame(poolSize) {
  state = createNewState(poolSize);
  save();
  render();
  hideHome();
}

function startGameCustom() {
  const input = $("poolSizeInput");
  const maxSize = Array.isArray(CHARACTERS) ? CHARACTERS.length : 0;

  if (!input) return;

  const size = Math.floor(Number(input.value) || 0);

  if (size < 10 || size > maxSize || !Number.isInteger(size)) {
    alert(`⚠️ Veuillez entrer un nombre entre 10 et ${maxSize}.`);
    input.focus();
    return;
  }

  startGame(size);
}

// ==== Elo / stats sociales ====

const K = 32;

function calculateEloChange(winnerElo, loserElo) {
  const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));

  const winnerChange = Math.round(K * (1 - expectedWinner));
  const loserChange = Math.round(K * (0 - expectedLoser));

  return { winnerChange, loserChange };
}

async function revertCommunityStats(winnerId, loserId) {
  if (!window.db || !window.firebase || !window.firebase.firestore) return Promise.resolve();

  const db = window.db;
  const winnerRef = db.collection("communityCharacterStats").doc(String(winnerId));
  const loserRef = db.collection("communityCharacterStats").doc(String(loserId));

  try {
    await db.runTransaction(async (tx) => {
      const [wSnap, lSnap] = await Promise.all([tx.get(winnerRef), tx.get(loserRef)]);
      const wData = wSnap.exists ? wSnap.data() : {};
      const lData = lSnap.exists ? lSnap.data() : {};

      const wWins = Math.max(0, Number(wData.wins || 0));
      const wFights = Math.max(0, Number(wData.fights || (wData.wins || 0) + (wData.losses || 0) || 0));
      const wElo = Number(wData.elo || 1600);

      const lLosses = Math.max(0, Number(lData.losses || 0));
      const lFights = Math.max(0, Number(lData.fights || (lData.wins || 0) + (lData.losses || 0) || 0));
      const lElo = Number(lData.elo || 1600);

      const newWWins = Math.max(0, wWins - 1);
      const newWFights = Math.max(0, wFights - 1);
      const newLLosses = Math.max(0, lLosses - 1);
      const newLFights = Math.max(0, lFights - 1);

      const { winnerChange, loserChange } = calculateEloChange(wElo, lElo);
      const newWElo = Math.max(400, Math.min(3200, wElo - winnerChange));
      const newLElo = Math.max(400, Math.min(3200, lElo - loserChange));

      tx.set(
        winnerRef,
        { wins: newWWins, fights: newWFights, elo: newWElo, name: wData.name || undefined },
        { merge: true }
      );
      tx.set(
        loserRef,
        { losses: newLLosses, fights: newLFights, elo: newLElo, name: lData.name || undefined },
        { merge: true }
      );
    });
  } catch (err) {
    console.error("revertCommunityStats transaction failed:", err);
  }
}

async function syncCommunityStats(winner, loser) {
  if (!window.db || !window.firestoreReady) return Promise.resolve();

  const db = window.db;

  try {
    const winnerDoc = await db.collection("communityCharacterStats").doc(String(winner.id)).get();
    const loserDoc = await db.collection("communityCharacterStats").doc(String(loser.id)).get();

    const winnerElo = (winnerDoc.exists ? winnerDoc.data().elo : 1600) || 1600;
    const loserElo = (loserDoc.exists ? loserDoc.data().elo : 1600) || 1600;

    const { winnerChange, loserChange } = calculateEloChange(winnerElo, loserElo);
    const newWinnerElo = Math.max(400, Math.min(3200, winnerElo + winnerChange));
    const newLoserElo = Math.max(400, Math.min(3200, loserElo + loserChange));

    const batch = db.batch();

    const winnerRef = db.collection("communityCharacterStats").doc(String(winner.id));
    const loserRef = db.collection("communityCharacterStats").doc(String(loser.id));

    batch.set(
      winnerRef,
      {
        id: String(winner.id),
        name: winner.name,
        wins: firebase.firestore.FieldValue.increment(1),
        losses: firebase.firestore.FieldValue.increment(0),
        fights: firebase.firestore.FieldValue.increment(1),
        elo: newWinnerElo,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    batch.set(
      loserRef,
      {
        id: String(loser.id),
        name: loser.name,
        wins: firebase.firestore.FieldValue.increment(0),
        losses: firebase.firestore.FieldValue.increment(1),
        fights: firebase.firestore.FieldValue.increment(1),
        elo: newLoserElo,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return batch.commit().catch(() => {});
  } catch (err) {
    console.error("Erreur syncCommunityStats :", err);
  }
}

function updateCharacterStats(winner, loser) {
  if (!winner || !loser) return;

  const ensure = (character) => {
    const id = String(character.id);
    if (!characterStats[id] || typeof characterStats[id] !== "object") {
      characterStats[id] = { name: character.name, wins: 0, losses: 0 };
    }

    characterStats[id].name = character.name;
    characterStats[id].wins = Math.max(0, Number(characterStats[id].wins) || 0);
    characterStats[id].losses = Math.max(0, Number(characterStats[id].losses) || 0);
    return characterStats[id];
  };

  ensure(winner).wins += 1;
  ensure(loser).losses += 1;
  saveCharacterStats();

  syncCommunityStats(winner, loser);
}

function initializeArenaEvents() {
  const chooseChampion = $("chooseChampion");
  const chooseChallenger = $("chooseChallenger");
  const championCard = $("championCard");
  const challengerCard = $("challengerCard");
  const undoBtn = $("undoBtn");
  const resetBtn = $("resetBtn");

  if (chooseChampion) {
    chooseChampion.onclick = null;
    chooseChampion.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (state && state.championId) choose(state.championId);
    });
  }

  if (chooseChallenger) {
    chooseChallenger.onclick = null;
    chooseChallenger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (state && state.challengerId) choose(state.challengerId);
    });
  }

  if (championCard) {
    championCard.onclick = null;
    championCard.addEventListener("click", () => {
      if (state && state.championId) choose(state.championId);
    });
  }

  if (challengerCard) {
    challengerCard.onclick = null;
    challengerCard.addEventListener("click", () => {
      if (state && state.challengerId) choose(state.challengerId);
    });
  }

  if (undoBtn) {
    undoBtn.onclick = null;
    undoBtn.addEventListener("click", async () => {
      if (!state || !state.lastSnapshot) return;

      const lastFight = Array.isArray(state.history) && state.history.length ? state.history[state.history.length - 1] : null;

      let winnerIdToRevert = null;
      let loserIdToRevert = null;

      if (lastFight && lastFight.winner) {
        const winnerName = String(lastFight.winner);
        const championBeforeName = String(lastFight.championBefore || "");
        const challengerName = String(lastFight.challenger || "");
        const loserName = winnerName === championBeforeName ? challengerName : championBeforeName;

        const chars = Array.isArray(CHARACTERS) ? CHARACTERS : [];
        const winnerChar = chars.find((c) => String(c.name) === winnerName);
        const loserChar = chars.find((c) => String(c.name) === loserName);

        if (winnerChar) winnerIdToRevert = String(winnerChar.id);
        if (loserChar) loserIdToRevert = String(loserChar.id);
      }

      if (winnerIdToRevert && loserIdToRevert) {
        try {
          await revertCommunityStats(winnerIdToRevert, loserIdToRevert);
        } catch (e) {
          console.error("Erreur lors de la réversion des stats communautaires :", e);
        }
      }

      const snap = state.lastSnapshot;
      state.combat = snap.combat;
      state.streak = snap.streak;
      state.championId = snap.championId;
      state.challengerId = snap.challengerId;
      state.usedIds = snap.usedIds;
      state.poolIds = snap.poolIds;
      state.history = snap.history;
      state.bestRecord = snap.bestRecord;
      state.bestRecordHolder = snap.bestRecordHolder;

      if (snap.characterStats && typeof snap.characterStats === "object") {
        characterStats = snap.characterStats;
        saveCharacterStats();
      }

      state.lastSnapshot = null;
      save();
      render();
      toast("↩️ Dernier combat annulé");
    });
  }

  if (resetBtn) {
    resetBtn.onclick = null;
    resetBtn.addEventListener("click", () => {
      if (confirm("Commencer un nouveau tournoi ? Le record absolu du joueur sera conservé.")) {
        const best = Number(localStorage.getItem(BEST_KEY) || state?.bestRecord || 0);
        const holder = localStorage.getItem(BEST_HOLDER_KEY) || state?.bestRecordHolder || "";

        state = {
          combat: 1,
          streak: 0,
          bestRecord: best,
          bestRecordHolder: holder,
          championId: null,
          challengerId: null,
          usedIds: [],
          poolIds: Array.isArray(CHARACTERS) ? CHARACTERS.map((c) => c.id) : [],
          history: [],
          lastSnapshot: null,
        };

        save();
        showHome();
        toast("🔄 Retour à la sélection du mode !");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeArenaEvents();

  state = loadState();

  if (state && state.championId && state.challengerId && Array.isArray(state.usedIds) && state.usedIds.length > 0) {
    hideHome();
    render();
  } else {
    showHome();
  }

  save();
});

window.addEventListener("pagehide", () => {
  if (state) save();
});
window.addEventListener("beforeunload", () => {
  if (state) save();
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && state) save();
});
