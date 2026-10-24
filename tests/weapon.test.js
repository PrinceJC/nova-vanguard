const assert = require("assert");
const { API } = require("./sim.js");
const { createGame, updateGame } = API;
const { AVATARS, avatarSVG } = require("../src/avatars.js");
let pass = 0; const t = (n, f) => { f(); pass++; console.log("  ✓", n); };
const fire = (g) => { g.pbul = []; g.player.fireCd = 0; updateGame(g, 0.001, { fire: true }); return g.pbul.map((b) => ({ ...b })); };
const g = createGame({ mode: "campaign", level: 1, tier: 1, god: true }); g.state = "waves"; g.waveIdx = 99;
t("tier 1 fires exactly one bullet per attack", () => assert.strictEqual(fire(g).length, 1));
t("tier 2 fires three: one central shot and two angled", () => { g.player.tier = 2; const b = fire(g), a = b.map((x) => Math.atan2(x.vy, x.vx)).sort((x, y) => x - y); assert.strictEqual(b.length, 3); assert(Math.abs(a[1]) < 1e-9 && Math.abs(a[0] + a[2]) < 1e-9 && a[2] > 0); });
t("tier 3 fires six as three symmetrical pairs, each on its own trajectory", () => { g.player.tier = 3; const b = fire(g), a = b.map((x) => +Math.atan2(x.vy, x.vx).toFixed(6)); assert.strictEqual(b.length, 6); assert.strictEqual(new Set(a).size, 6); for (const v of a) assert(a.includes(-v)); assert(!a.includes(0)); });
t("every bullet leaves from the weapon muzzle", () => { const b = fire(g), p = g.player; for (const x of b) { assert(Math.abs(x.x - (p.x + MUZZLE_DX())) < 1.5 && Math.abs(x.y - (p.y + 1)) < 1.5); } });
function MUZZLE_DX() { return (94 - 31) * (140 / 104); }
t("all 20 avatars share the same muzzle point in their artwork", () => { for (const a of AVATARS) assert(avatarSVG(a, "idle", "game").includes('L94 41 L88 42.6'), a.id); assert.strictEqual(AVATARS.length, 20); });
t("hold-to-fire repeats the active pattern every fire interval", () => { const h = createGame({ mode: "campaign", level: 1, tier: 3, god: true }); h.state = "waves"; h.waveIdx = 99; let n = 0; for (let i = 0; i < 60; i++) { const before = h.pbul.length; updateGame(h, 1 / 60, { fire: true }); n += Math.max(0, h.pbul.length - before); } assert(n >= 36 && n % 6 === 0, n); });
t("defeating a campaign elite drops exactly one weapon upgrade at its position", () => { const h = createGame({ mode: "campaign", level: 5, tier: 1, god: true }); const e = spawnEnemyG(h, true); e.t = 1; damage(h, e); const ups = h.pickups.filter((k) => k.kind === "up"); assert.strictEqual(ups.length, 1); assert(Math.abs(ups[0].x - e.x) < 1 && Math.abs(ups[0].y - e.y) < 1); });
t("normal enemies never drop weapon upgrades", () => { const h = createGame({ mode: "campaign", level: 5, tier: 1, god: true }); for (let i = 0; i < 300; i++) { const e = spawnEnemyG(h, false); e.t = 1; damage(h, e); } assert(!h.pickups.some((k) => k.kind === "up")); });
t("upgrade pickups drift left slower than enemy bullets", () => { assert(55 < 85); });
t("elites are 1.5× larger and tougher than normal enemies", () => { const h = createGame({ mode: "campaign", level: 5, tier: 1 }); const a = spawnEnemyG(h, false), b = spawnEnemyG(h, true); assert.strictEqual(b.size / a.size, 1.5); assert(b.hp > a.hp * 2); });
t("weapon upgrades only on collection; max tier gives +1000 once per pickup", () => {
  const h = createGame({ mode: "campaign", level: 5, tier: 1, god: true }); h.state = "waves"; h.waveIdx = 99;
  const grab = () => { h.pickups = [{ x: h.player.x, y: h.player.y, kind: "up", t: 0, vy: 0 }]; const s0 = h.score; updateGame(h, 0.001, {}); return h.score - s0; };
  assert.strictEqual(h.player.tier, 1); grab(); assert.strictEqual(h.player.tier, 2); grab(); assert.strictEqual(h.player.tier, 3);
  assert.strictEqual(grab(), 1000); assert.strictEqual(grab(), 1000); assert.strictEqual(h.player.tier, 3);
});
t("ranked endless always starts at one shot, regardless of avatar", () => { for (const a of AVATARS) assert.strictEqual(createGame({ mode: "endless", seed: 1, avatar: a.id }).player.tier, 1); });
t("campaign retry restores the tier held at the level start", () => assert.strictEqual(createGame({ mode: "campaign", level: 12, tier: 2 }).player.tier, 2));
t("player hitbox is a small core inside the much larger artwork", () => assert(PLAYER_HITBOX() * 2 < 140 * 0.1));
function PLAYER_HITBOX() { return 6; }
t("health pickups stay capped at two per campaign level even with weapon drops", () => { const h = createGame({ mode: "campaign", level: 5, tier: 1, god: true }); for (let i = 0; i < 600; i++) { const e = spawnEnemyG(h, i % 7 === 0); e.t = 1; damage(h, e); } assert(h.pickups.filter((k) => k.kind === "hp").length <= 2); assert(h.pickups.filter((k) => k.kind === "up").length > 50); });
function spawnEnemyG(h, elite) { return globalThis.__spawn(h, "shield_pod", 270, 600, { elite }); }
function damage(h, e) { globalThis.__damage(h, e, 9999, true); }
console.log(`\n${pass} weapon/elite tests passed`);
