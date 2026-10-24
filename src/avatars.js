"use strict";
// ============================================================ 20 playable avatars (cosmetic; identical stats)
// unlock: 0 = starter, otherwise "clear campaign level N"
const AVATARS = [
  { id: "lumi", name: "Lumi", title: "Starlight Gunner", unlock: 0, hair: "sidetail", bangs: "swept", hc: ["#c9bde8", "#ece6fa", "#9a8cc8"], skin: "#f6dcc8", eye: "#1fb5b8",
    out: ["#1f2a5c", "#eef1fb", "#8b5cf6", "#4a3b6b"], wpn: "cannon", wc: ["#eef1fb", "#1f2a5c", "#8b5cf6"], acc: "clip", shot: ["#5ef2f2", "#ffffff", "capsule"], weaponName: "Prism cannon" },
  { id: "nova", name: "Nova", title: "Comet Courier", unlock: 0, hair: "bob", bangs: "straight", hc: ["#2d3a6b", "#5a6fb0", "#1a2244"], skin: "#c68a5e", eye: "#7de0ff",
    out: ["#e8eef8", "#2f6fbf", "#ffd34f", "#9aa8c4"], wpn: "rifle", wc: ["#2f6fbf", "#e8eef8", "#ffd34f"], acc: "goggles", shot: ["#6fc8ff", "#ffffff", "needle"], weaponName: "Longshot rail" },
  { id: "riko", name: "Riko", title: "Spark Brawler", unlock: 0, hair: "spiky", bangs: "spiky", hc: ["#ff9a52", "#ffd0a0", "#c4602a"], skin: "#f3d2b8", eye: "#3fd47a",
    out: ["#2b3a2f", "#d8e8d0", "#3fd47a", "#1a241c"], wpn: "gauntlet", wc: ["#3a4a40", "#c9d6c8", "#3fd47a"], acc: "earpiece", shot: ["#7dffb0", "#ffffff", "orb"], weaponName: "Pulse gauntlet" },
  { id: "pip", name: "Pip", title: "Pocket Engineer", unlock: 0, hair: "cap", bangs: "straight", hc: ["#6b4a2e", "#9a7050", "#3e2a1a"], skin: "#e8b896", eye: "#5aa0ff",
    out: ["#f2b33a", "#fff4d8", "#2f6fbf", "#a8761a"], wpn: "launcher", wc: ["#5e6b80", "#c9ccd6", "#f2b33a"], acc: "none", shot: ["#4fe0ff", "#ffffff", "diamond"], weaponName: "Gadget launcher" },
  { id: "aria", name: "Aria", title: "Crystal Songstress", unlock: 5, hair: "long", bangs: "parted", hc: ["#9fe6e0", "#e0fffb", "#5fb4ae"], skin: "#f6dcc8", eye: "#a074ff",
    out: ["#5a3ea8", "#f0eaff", "#9fe6e0", "#3a2870"], wpn: "staff", wc: ["#e0d4ff", "#5a3ea8", "#9fe6e0"], acc: "flower", shot: ["#9effe0", "#ffffff", "star"], weaponName: "Resonance staff" },
  { id: "kestrel", name: "Kestrel", title: "Sky Ranger", unlock: 10, hair: "wolf", bangs: "swept", hc: ["#3a2a22", "#6a5040", "#1e1410"], skin: "#8d5a3b", eye: "#ffd34f",
    out: ["#3e5a3a", "#e8e2c8", "#c9a24a", "#26381f"], wpn: "crossbow", wc: ["#6a4a2e", "#c9a24a", "#3e5a3a"], acc: "scarf", shot: ["#c8f4ff", "#ffffff", "arrow"], weaponName: "Arc bolt" },
  { id: "mochi", name: "Mochi", title: "Bunny Pilot", unlock: 15, hair: "twintail", bangs: "straight", hc: ["#f4f0ff", "#ffffff", "#c4bce0"], skin: "#f6dcc8", eye: "#4fb4ff",
    out: ["#7fb8e8", "#ffffff", "#2f6fbf", "#4f86b8"], wpn: "orb", wc: ["#c8f4ff", "#2f6fbf", "#ffffff"], acc: "bunny", shot: ["#aee8ff", "#ffffff", "ring"], weaponName: "Drift orb" },
  { id: "sable", name: "Sable", title: "Night Duelist", unlock: 20, hair: "long", bangs: "swept", hc: ["#24203a", "#4a4470", "#120f20"], skin: "#f3d2b8", eye: "#5ef2c0",
    out: ["#1a1830", "#c8c4e0", "#5ef2c0", "#0e0c1c"], wpn: "blade", wc: ["#2a2840", "#c8f4ff", "#5ef2c0"], acc: "visor", shot: ["#5ef2c0", "#ffffff", "wave"], weaponName: "Moonedge gunblade" },
  { id: "juno", name: "Juno", title: "Tidal Warden", unlock: 25, hair: "braid", bangs: "parted", hc: ["#2f8f9a", "#7fd6de", "#1a5a62"], skin: "#c68a5e", eye: "#ffe08a",
    out: ["#e8f4f4", "#2f8f9a", "#ffd34f", "#9ac4c8"], wpn: "shieldgun", wc: ["#2f8f9a", "#e8f4f4", "#ffd34f"], acc: "star", shot: ["#3ee8c8", "#ffffff", "orb"], weaponName: "Tide bulwark" },
  { id: "vega", name: "Vega", title: "Astral Sniper", unlock: 30, hair: "bun", bangs: "straight", hc: ["#e0b84a", "#fff0b0", "#a07a20"], skin: "#f6dcc8", eye: "#6fc8ff",
    out: ["#2a2050", "#f0e8ff", "#e0b84a", "#18123a"], wpn: "rifle", wc: ["#f0e8ff", "#2a2050", "#e0b84a"], acc: "halo", shot: ["#c8f4ff", "#ffffff", "needle"], weaponName: "Zenith rail" },
  { id: "haru", name: "Haru", title: "Bloom Knight", unlock: 35, hair: "spiky", bangs: "swept", hc: ["#5aa83c", "#a8e080", "#2f6a1e"], skin: "#e8b896", eye: "#ff9ad5",
    out: ["#f2f0e0", "#5aa83c", "#ffd34f", "#b8b6a0"], wpn: "blade", wc: ["#5aa83c", "#f2f0e0", "#ffd34f"], acc: "flower", shot: ["#7dffb0", "#ffffff", "wave"], weaponName: "Verdant gunblade" },
  { id: "ines", name: "Ines", title: "Frost Alchemist", unlock: 40, hair: "hood", bangs: "parted", hc: ["#e8f4ff", "#ffffff", "#a8c4dc"], skin: "#f3d2b8", eye: "#4fb4ff",
    out: ["#bfe4ff", "#ffffff", "#2f6fbf", "#86b4d8"], wpn: "orb", wc: ["#e6ffff", "#2f6fbf", "#bfe4ff"], acc: "none", shot: ["#c8f4ff", "#ffffff", "star"], weaponName: "Rime flask orb" },
  { id: "dax", name: "Dax", title: "Foundry Bruiser", unlock: 45, hair: "cap", bangs: "spiky", hc: ["#1e1410", "#4a3428", "#0e0a08"], skin: "#8d5a3b", eye: "#ffb347",
    out: ["#5a4234", "#e8d8c0", "#4fe0ff", "#3a2a20"], wpn: "gauntlet", wc: ["#7a5a44", "#c9ccd6", "#4fe0ff"], acc: "goggles", shot: ["#4fe0ff", "#ffffff", "orb"], weaponName: "Forge knuckle" },
  { id: "orla", name: "Orla", title: "Coral Diver", unlock: 50, hair: "wolf", bangs: "parted", hc: ["#3a5aa8", "#7a9ae8", "#1e3270"], skin: "#f6dcc8", eye: "#3ee8c8",
    out: ["#1e4a5a", "#d8f4f0", "#3ee8c8", "#103038"], wpn: "launcher", wc: ["#1e4a5a", "#d8f4f0", "#3ee8c8"], acc: "goggles", shot: ["#3ee8c8", "#ffffff", "diamond"], weaponName: "Bubble burst" },
  { id: "zephyr", name: "Zephyr", title: "Storm Rider", unlock: 55, hair: "spiky", bangs: "spiky", hc: ["#e8ecf7", "#ffffff", "#9aa4c0"], skin: "#c68a5e", eye: "#6fc8ff",
    out: ["#3d4a7a", "#e8ecf7", "#6fc8ff", "#262f52"], wpn: "twin", wc: ["#3d4a7a", "#e8ecf7", "#6fc8ff"], acc: "antenna", shot: ["#6fc8ff", "#ffffff", "needle"], weaponName: "Gale twins" },
  { id: "tamsin", name: "Tamsin", title: "Rune Scholar", unlock: 60, hair: "braid", bangs: "straight", hc: ["#8a4a2e", "#c4805a", "#5a2a16"], skin: "#f3d2b8", eye: "#9effe0",
    out: ["#4a3a6a", "#f0e8d8", "#9effe0", "#2e2244"], wpn: "staff", wc: ["#c4a46a", "#4a3a6a", "#9effe0"], acc: "glasses", shot: ["#9effe0", "#ffffff", "ring"], weaponName: "Glyph staff" },
  { id: "wren", name: "Wren", title: "Feather Scout", unlock: 65, hair: "bob", bangs: "swept", hc: ["#b0603a", "#e09a70", "#7a3a1e"], skin: "#e8b896", eye: "#3fd47a",
    out: ["#e8e0c8", "#4a6a3a", "#3fd47a", "#b0a888"], wpn: "crossbow", wc: ["#4a6a3a", "#e8e0c8", "#3fd47a"], acc: "feather", shot: ["#7dffb0", "#ffffff", "arrow"], weaponName: "Wind lance" },
  { id: "cass", name: "Cass", title: "Neon Hacker", unlock: 70, hair: "twintail", bangs: "parted", hc: ["#3a3a4a", "#6a6a80", "#1e1e2a"], skin: "#f6dcc8", eye: "#5ef2f2",
    out: ["#1a1a2a", "#e0e0ff", "#5ef2f2", "#0e0e18"], wpn: "twin", wc: ["#2a2a40", "#e0e0ff", "#5ef2f2"], acc: "catears", shot: ["#5ef2f2", "#ffffff", "diamond"], weaponName: "Glitch pair" },
  { id: "elio", name: "Elio", title: "Sunforge Paladin", unlock: 75, hair: "wolf", bangs: "swept", hc: ["#f2d65a", "#fff3b0", "#b8962a"], skin: "#c68a5e", eye: "#4fb4ff",
    out: ["#f0ecf8", "#3a5aa8", "#e0b84a", "#b8b4c8"], wpn: "shieldgun", wc: ["#e0b84a", "#f0ecf8", "#3a5aa8"], acc: "halo", shot: ["#f0ffff", "#ffffff", "star"], weaponName: "Aegis lance" },
  { id: "luma", name: "Luma", title: "Eclipse Lumi", unlock: 80, hair: "sidetail", bangs: "swept", hc: ["#3a2a5c", "#7a62b0", "#1e1436"], skin: "#f6dcc8", eye: "#5ef2f2",
    out: ["#0e0a1c", "#c8b8f0", "#5ef2f2", "#06040e"], wpn: "cannon", wc: ["#2a2048", "#c8b8f0", "#5ef2f2"], acc: "horns", shot: ["#a8fbff", "#ffffff", "capsule"], weaponName: "Umbra cannon" },
];
const AVATAR_BY_ID = Object.fromEntries(AVATARS.map((a) => [a.id, a]));
function avatarUnlocked(av, completedCount) { return av.unlock === 0 || completedCount >= av.unlock; }

// ------------------------------------------------------------ SVG generator
const OL = "#1a1030";
const st = (w = 1.5) => `stroke="${OL}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

function hairBack(a) {
  const [b, l, d] = a.hc;
  switch (a.hair) {
    case "sidetail": return `<path d="M22 10 Q8 8 5 20 Q3 30 8 37 Q10 29 14 25 Q19 18 26 15 Z" fill="${b}" ${st()}/><path d="M18 13 Q10 17 8 27" fill="none" stroke="${l}" stroke-width="1.6" stroke-linecap="round"/><path d="M21 16 Q14 22 12 31" fill="none" stroke="${d}" stroke-width="1.2" stroke-linecap="round"/>`;
    case "twintail": return `<path d="M20 13 Q7 16 6 30 Q7 39 11 44 Q11 32 17 24 Z" fill="${b}" ${st()}/><path d="M42 12 Q53 16 52 30 Q51 37 48 41 Q48 30 42 23 Z" fill="${d}" ${st()}/><path d="M15 17 Q9 24 9 34" fill="none" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>`;
    case "bob": return `<path d="M17 22 Q15 6 31 5 Q47 6 46 22 L46 33 Q41 31 39 28 L24 28 Q21 32 16 33 Z" fill="${b}" ${st()}/><path d="M19 26 L19 31" stroke="${d}" stroke-width="1.4"/>`;
    case "long": return `<path d="M18 20 Q16 6 31 6 Q46 7 45 22 Q46 36 40 46 Q31 43 22 48 Q13 40 16 30 Z" fill="${b}" ${st()}/><path d="M19 30 Q17 38 21 45 M41 30 Q42 38 39 44" fill="none" stroke="${d}" stroke-width="1.3" stroke-linecap="round"/><path d="M22 34 Q21 40 24 44" fill="none" stroke="${l}" stroke-width="1.2" stroke-linecap="round"/>`;
    case "spiky": return `<path d="M17 21 L11 12 L19 13 L17 4 L26 10 L31 2 L35 10 L44 5 L42 14 L50 13 L45 22 Z" fill="${b}" ${st()}/>`;
    case "bun": return `<circle cx="22" cy="7" r="6.5" fill="${b}" ${st()}/><path d="M18 5 Q21 2 25 4" fill="none" stroke="${l}" stroke-width="1.3"/><circle cx="31" cy="21" r="14" fill="${b}" ${st()}/>`;
    case "braid": { let s = ""; for (let i = 0; i < 5; i++) s += `<ellipse cx="${19 - i * 2.4}" cy="${26 + i * 4.4}" rx="3.6" ry="3" fill="${i % 2 ? d : b}" ${st(1.2)}/>`; return s + `<path d="M8 47 L6 51 L11 50 Z" fill="${a.out[2]}" ${st(1)}/>`; }
    case "wolf": return `<path d="M17 20 Q15 6 31 5 Q47 6 46 21 L48 30 L43 27 L44 34 L38 29 L24 29 L19 34 L19 28 L14 30 Z" fill="${b}" ${st()}/>`;
    case "hood": return `<path d="M15 24 Q13 4 31 3 Q49 4 47 24 L47 34 Q31 38 15 34 Z" fill="${a.out[0]}" ${st()}/><path d="M18 8 Q31 2 44 8" fill="none" stroke="${a.out[3]}" stroke-width="1.6"/>`;
    case "cap": return `<path d="M18 22 Q16 8 31 7 Q46 8 45 22 L45 29 L18 29 Z" fill="${b}" ${st()}/>`;
  }
  return "";
}
function bangs(a) {
  const [b, l] = a.hc;
  if (a.hair === "cap") return `<path d="M17 17 Q17 5 31 4 Q44 5 45 15 Z" fill="${a.out[2]}" ${st(1.3)}/><path d="M38 14 Q50 13 55 17 Q47 19 38 18 Z" fill="${a.out[3]}" ${st(1.2)}/><path d="M19 17 L22 23 L26 18 L30 23 L33 17 Z" fill="${b}" ${st(1.1)}/><circle cx="30" cy="9" r="2.2" fill="${a.out[1]}"/>`;
  if (a.hair === "hood") return `<path d="M20 22 Q21 11 31 10 Q41 11 43 20 L39 16 L36 21 L33 14 L29 20 L26 15 Z" fill="${b}" ${st(1.2)}/>`;
  switch (a.bangs) {
    case "straight": return `<path d="M18 22 Q17 7 32 6 Q45 7 45 20 L45 22 L41 20 L38 23 L35 20 L31 23 L28 20 L24 23 L21 20 Z" fill="${b}" ${st(1.3)}/><path d="M26 9 Q35 7 41 11" fill="none" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>`;
    case "spiky": return `<path d="M18 22 Q17 8 32 6 Q45 7 46 20 L42 17 L41 23 L37 16 L35 22 L31 15 L28 21 L25 15 L23 22 Z" fill="${b}" ${st(1.3)}/><path d="M27 9 Q35 7 40 11" fill="none" stroke="${l}" stroke-width="1.3" stroke-linecap="round"/>`;
    case "parted": return `<path d="M18 23 Q17 7 32 6 Q45 7 45 21 Q41 14 34 12 Q37 18 36 22 Q31 15 27 13 Q22 16 20 25 Z" fill="${b}" ${st(1.3)}/><path d="M29 9 Q36 8 41 12" fill="none" stroke="${l}" stroke-width="1.3" stroke-linecap="round"/>`;
    default: return `<path d="M18 22 Q17 7 32 6 Q45 7 45 20 Q42 14 38 13 L37 19 L33 12 Q29 18 24 18 L25 14 Q20 18 20 25 Z" fill="${b}" ${st(1.3)}/><path d="M27 9 Q35 7 40 11" fill="none" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>`;
  }
}
function sideLocks(a) {
  const [b] = a.hc;
  if (a.hair === "spiky" || a.hair === "cap" || a.hair === "bun") return "";
  return `<path d="M20 20 Q17 28 20 34 Q23 28 23 22 Z" fill="${b}" ${st(1.1)}/>`;
}
function accessory(a) {
  const [ , , acc] = a.out;
  switch (a.acc) {
    case "clip": return `<circle cx="21" cy="10" r="2.6" fill="#5ef2f2" ${st(1.1)}/><circle cx="20.3" cy="9.3" r=".8" fill="#fff"/>`;
    case "goggles": return `<rect x="22" y="9" width="22" height="5" rx="2.5" fill="${OL}"/><circle cx="29" cy="11.5" r="3.4" fill="#7de0ff" ${st(1.1)}/><circle cx="38" cy="11.5" r="3.4" fill="#7de0ff" ${st(1.1)}/><circle cx="28" cy="10.5" r="1" fill="#fff"/>`;
    case "earpiece": return `<path d="M43 18 L49 15 L50 23 L44 25 Z" fill="${a.out[0]}" ${st(1.1)}/><line x1="45" y1="19" x2="48" y2="18" stroke="${acc}" stroke-width="1.6" stroke-linecap="round"/>`;
    case "flower": return `<g transform="translate(20 10)">${[0, 72, 144, 216, 288].map((r) => `<ellipse cx="0" cy="-2.6" rx="1.7" ry="2.6" fill="#ffb3d9" transform="rotate(${r})" ${st(.8)}/>`).join("")}<circle r="1.5" fill="#ffd34f"/></g>`;
    case "scarf": return `<path d="M25 34 Q31 37 38 34 L38 38 Q31 40 25 38 Z" fill="${acc}" ${st(1.1)}/><path d="M26 37 Q16 38 8 34 Q14 41 25 40 Z" fill="${acc}" ${st(1.1)}/>`;
    case "bunny": return `<path d="M26 8 Q20 -6 24 -8 Q30 -6 30 7 Z" fill="${a.hc[0]}" ${st(1.2)}/><path d="M34 7 Q36 -7 40 -6 Q44 -2 38 9 Z" fill="${a.hc[0]}" ${st(1.2)}/><path d="M26 4 Q24 -3 25 -5 M37 4 Q39 -3 40 -3" stroke="#ffb3d9" stroke-width="1.6" fill="none"/>`;
    case "visor": return `<path d="M30 21 L46 21 L45 27 L31 27 Z" fill="#5ef2c0" fill-opacity=".55" ${st(1.1)}/>`;
    case "star": return `<path d="M21 6 L22.5 9.5 L26 10 L23.3 12.3 L24 16 L21 14 L18 16 L18.7 12.3 L16 10 L19.5 9.5 Z" fill="#ffd34f" ${st(.9)}/>`;
    case "halo": return `<ellipse cx="32" cy="2" rx="9" ry="2.5" fill="none" stroke="#ffe08a" stroke-width="2"/>`;
    case "antenna": return `<path d="M36 6 L40 -2" ${st(1.4)} fill="none"/><circle cx="40" cy="-2" r="2.2" fill="${acc}" ${st(1)}/>`;
    case "glasses": return `<circle cx="34" cy="25" r="4" fill="none" stroke="${OL}" stroke-width="1.3"/><circle cx="41.5" cy="25" r="3.6" fill="none" stroke="${OL}" stroke-width="1.3"/><line x1="38" y1="25" x2="38" y2="25" stroke="${OL}"/>`;
    case "feather": return `<path d="M20 12 Q12 4 10 -2 Q18 2 22 10 Z" fill="#3fd47a" ${st(1)}/><path d="M20 11 L12 1" stroke="#1e6a3a" stroke-width=".8"/>`;
    case "catears": return `<path d="M22 9 L21 -1 L29 5 Z M37 5 L44 -1 L43 9 Z" fill="${a.hc[0]}" ${st(1.2)}/><path d="M23 6 L22.5 2 L26 4.5 Z M40 4.5 L42.5 2 L42 6 Z" fill="#ff9ad5"/>`;
    case "horns": return `<path d="M24 8 Q20 0 24 -3 Q25 3 28 6 Z M38 6 Q42 0 40 -4 Q44 2 42 8 Z" fill="#c8b8f0" ${st(1.1)}/>`;
  }
  return "";
}
function weapon(a, frame) {
  const [b, d, acc] = a.wc;
  let w = "";
  switch (a.wpn) {
    case "rifle": w = `<rect x="27" y="38" width="7" height="5" rx="2" fill="${d}" ${st(1.1)}/><rect x="32" y="37" width="16" height="7" rx="2" fill="${b}" ${st()}/><rect x="47" y="39" width="11" height="3" rx="1" fill="${d}" ${st(1.1)}/><rect x="36" y="33.5" width="9" height="3.5" rx="1.5" fill="${d}" ${st(1)}/><circle cx="44" cy="35.2" r="1.2" fill="${acc}"/><rect x="38" y="39.5" width="8" height="2" fill="${acc}"/>`; break;
    case "gauntlet": w = `<rect x="32" y="34" width="18" height="14" rx="5" fill="${b}" ${st()}/><path d="M34 38 L48 38 M34 44 L48 44" stroke="${d}" stroke-width="1.4"/><circle cx="52" cy="41" r="4.2" fill="${d}" ${st(1.2)}/><circle cx="52" cy="41" r="2.4" fill="${acc}"/><rect x="31" y="36" width="4" height="10" rx="1.5" fill="${acc}" ${st(1)}/>`; break;
    case "staff": w = `<rect x="26" y="40" width="28" height="2.6" rx="1.3" fill="${b}" ${st(1)}/><path d="M53 41 L57 35 L61 41 L57 47 Z" fill="${acc}" ${st(1.2)}/><path d="M55.5 38 L57 36" stroke="#fff" stroke-width="1"/><circle cx="50" cy="41.3" r="2.6" fill="${d}" ${st(1)}/>`; break;
    case "launcher": w = `<rect x="31" y="35" width="20" height="12" rx="3" fill="${b}" ${st()}/><circle cx="51" cy="38" r="2.4" fill="${OL}"/><circle cx="51" cy="44" r="2.4" fill="${OL}"/><rect x="51" y="35" width="5" height="12" rx="2" fill="${acc}" ${st(1.1)}/><rect x="34" y="37" width="12" height="3" rx="1" fill="${d}"/>`; break;
    case "crossbow": w = `<rect x="30" y="39" width="22" height="4" rx="2" fill="${b}" ${st(1.1)}/><path d="M50 31 Q55 41 50 51" fill="none" stroke="${d}" stroke-width="3" stroke-linecap="round"/><path d="M50 31 Q55 41 50 51" fill="none" stroke="${OL}" stroke-width="1" stroke-dasharray="0" opacity=".0"/><path d="M50 32 L42 41 L50 50" fill="none" stroke="${acc}" stroke-width="1"/><path d="M42 41 L58 41" stroke="${acc}" stroke-width="1.6"/><path d="M58 41 L55 39 L55 43 Z" fill="${acc}"/>`; break;
    case "orb": w = `<circle cx="50" cy="40" r="6" fill="${b}" ${st()}/><circle cx="48" cy="38" r="2" fill="#fff"/><ellipse cx="50" cy="40" rx="9.5" ry="3" fill="none" stroke="${acc}" stroke-width="1.4" transform="rotate(-20 50 40)"/><circle cx="50" cy="40" r="2.6" fill="${d}" opacity=".5"/>`; break;
    case "twin": w = `<rect x="34" y="34" width="14" height="5.5" rx="2" fill="${b}" ${st(1.1)}/><rect x="47" y="35.3" width="7" height="3" fill="${d}" ${st(.9)}/><rect x="34" y="42" width="14" height="5.5" rx="2" fill="${b}" ${st(1.1)}/><rect x="47" y="43.3" width="7" height="3" fill="${d}" ${st(.9)}/><rect x="37" y="35.5" width="6" height="1.6" fill="${acc}"/><rect x="37" y="43.5" width="6" height="1.6" fill="${acc}"/>`; break;
    case "blade": w = `<rect x="31" y="38" width="12" height="7" rx="2" fill="${b}" ${st()}/><path d="M42 36 L60 38.5 L42 41 Z" fill="${d}" ${st(1.1)}/><path d="M43 38.5 L58 38.6" stroke="#fff" stroke-width=".8"/><rect x="42" y="41" width="12" height="3" rx="1" fill="${b}" ${st(1)}/><circle cx="36" cy="41.5" r="1.8" fill="${acc}"/>`; break;
    case "shieldgun": w = `<ellipse cx="46" cy="41" rx="6" ry="9" fill="${b}" ${st()}/><path d="M46 33 L46 49" stroke="${d}" stroke-width="1.5"/><rect x="48" y="39" width="10" height="4" rx="1.5" fill="${d}" ${st(1.1)}/><circle cx="46" cy="41" r="2.2" fill="${acc}" ${st(.9)}/>`; break;
    default: w = `<rect x="32" y="37" width="20" height="8" rx="3" fill="${b}" ${st()}/><rect x="32" y="37" width="6" height="8" rx="2.5" fill="${d}" ${st(1.2)}/><circle cx="43" cy="41" r="2.4" fill="${acc === "#8b5cf6" ? "#5ef2f2" : acc}" ${st(1)}/><rect x="51" y="36" width="3" height="10" rx="1" fill="${acc}" ${st(1.2)}/><ellipse cx="57.5" cy="41" rx="1.4" ry="5.5" fill="none" stroke="${a.shot[0]}" stroke-width="1.6"/><rect x="44" y="38.4" width="6" height="1.5" rx=".7" fill="#ffffff" opacity=".7"/>`;
  }
  if (frame === "fire") w += `<path d="M58 41 L66 37 L63.5 41 L66 45 Z" fill="${a.shot[0]}"/><circle cx="59" cy="41" r="2.4" fill="#ffffff"/>`;
  return w;
}
function eyes(a, frame) {
  if (frame === "hurt") return `<path d="M31 23 L35 25.5 L31 28 M43 23 L39 25.5 L43 28" fill="none" stroke="${OL}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 31 Q38.5 29.5 41 31" fill="none" stroke="#c4485e" stroke-width="1.3" stroke-linecap="round"/>`;
  const e = a.eye;
  return `<ellipse cx="33.5" cy="25" rx="2.4" ry="3.2" fill="${e}"/><ellipse cx="40.5" cy="25" rx="2.2" ry="3.2" fill="${e}"/>
<ellipse cx="33.8" cy="26" rx="1.1" ry="1.6" fill="${OL}" opacity=".55"/><ellipse cx="40.8" cy="26" rx="1" ry="1.6" fill="${OL}" opacity=".55"/>
<circle cx="32.8" cy="23.7" r="1" fill="#fff"/><circle cx="39.8" cy="23.7" r="1" fill="#fff"/><circle cx="34.3" cy="27" r=".5" fill="#fff"/>
<path d="M31 21.6 Q33.5 20.4 36 21.4 M38.4 21.4 Q40.8 20.4 43 21.8" fill="none" stroke="${OL}" stroke-width="1.15" stroke-linecap="round"/>
<path d="M36.5 30 Q38.5 31.8 41 29.6" fill="none" stroke="#c4485e" stroke-width="1.2" stroke-linecap="round"/>`;
}

function avatarSVG(a, frame = "idle", view = "full") {
  const [m, inner, acc, trim] = a.out;
  const thr = frame === "fire" ? 5 : 4;
  const boot = a.out[3];
  const body = `
${hairBack(a)}
<ellipse cx="28" cy="${60 + thr / 4}" rx="2.4" ry="${thr / 2 + 1}" fill="${a.shot[0]}"/><ellipse cx="35" cy="${60 + thr / 4}" rx="2.4" ry="${thr / 2 + 1}" fill="${a.shot[0]}"/>
<ellipse cx="28" cy="${60 + thr / 4}" rx="1.1" ry="${thr / 4 + .6}" fill="#ffffff"/><ellipse cx="35" cy="${60 + thr / 4}" rx="1.1" ry="${thr / 4 + .6}" fill="#ffffff"/>
<rect x="25.5" y="50" width="5" height="9" rx="1.5" fill="${boot}" ${st()}/><rect x="32.5" y="50" width="5" height="9" rx="1.5" fill="${boot}" ${st()}/>
<rect x="25.5" y="55.5" width="5" height="2" fill="${acc}"/><rect x="32.5" y="55.5" width="5" height="2" fill="${acc}"/>
<rect x="24" y="45" width="15" height="6" rx="2" fill="${m}" ${st()}/>
<path d="M24 35 L39 35 L39 46 Q31.5 48 24 46 Z" fill="${m}" ${st()}/>
<path d="M24.8 36 L27 36 L27 45.5 L24.8 45 Z" fill="${OL}" opacity=".18"/>
<rect x="28.5" y="36" width="6" height="9" rx="1" fill="${inner}"/>
<path d="M28.5 36 L31.5 39 L34.5 36" fill="none" stroke="${acc}" stroke-width="1.3"/>
<rect x="24" y="45" width="15" height="2.4" fill="${trim}"/><rect x="30.4" y="44.6" width="2.6" height="3" fill="${acc}"/>
<circle cx="31" cy="21" r="14" fill="${a.hair === "hood" ? m : a.hc[0]}" ${st()}/>
<path d="M21 23 Q21 34 31 35 Q42 34 43 23 Q43 15 33 14 Q22 15 21 23 Z" fill="${a.skin}" ${st(1.3)}/>
<path d="M22 27 Q24 33 30 34.5" fill="none" stroke="${OL}" stroke-width=".9" opacity=".18"/>
${sideLocks(a)}
${bangs(a)}
${eyes(a, frame)}
<ellipse cx="31" cy="29" rx="1.8" ry="1" fill="#f4a7b4" opacity=".7"/><ellipse cx="42.5" cy="29.2" rx="1.2" ry=".8" fill="#f4a7b4" opacity=".6"/>
${accessory(a)}
${weapon(a, frame)}
<circle cx="38" cy="45" r="2.4" fill="#1a1a2e" ${st(1)}/><rect x="35.8" y="43.6" width="2" height="2.6" fill="${acc}"/>`;
  if (view === "game") return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 104 70" width="104" height="70">${gameExtras(a, frame, body)}</svg>`;
  const vb = view === "portrait" ? "13 -6 40 40" : "-2 -2 68 68";
  const size = view === "portrait" ? 40 : 68;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${size}" height="${size}">${body}</svg>`;
}

// In-game pose (reference scale): the hero rides an ornamental hover-glider, hair streaming behind,
// weapon extended into a long barrel whose muzzle sits at (94, 41) for every avatar.
function gameExtras(a, frame, body) {
  const [b, l, d] = a.hc, [m, inner, acc, trim] = a.out, [wb, wd, wa] = a.wc, shot = a.shot[0];
  const flow = `<path d="M18 14 Q2 12 -1 22 Q4 20 8 24 Q0 28 -2 36 Q6 31 12 32 Q8 38 9 44 Q14 34 20 26 Z" fill="${b}" ${st(1.4)}/>
<path d="M14 16 Q4 18 2 24 M12 26 Q5 30 3 34" fill="none" stroke="${l}" stroke-width="1.4" stroke-linecap="round"/>
<path d="M16 22 Q10 30 10 38" fill="none" stroke="${d}" stroke-width="1.1" stroke-linecap="round"/>`;
  const board = `<path d="M2 57 Q6 52 16 52 L84 51 Q94 51 98 55 Q92 59 84 59 L14 60 Q5 60 2 57 Z" fill="${trim}" ${st(1.6)}/>
<path d="M14 53.5 L84 52.8" stroke="${acc}" stroke-width="1.4"/><path d="M20 57.5 L80 57" stroke="#ffffff" stroke-width=".8" opacity=".5"/>
<path d="M40 52 L46 47 L52 52 Z M62 51.6 L66 48 L70 51.4 Z" fill="${wa}" ${st(1)}/>
<ellipse cx="3" cy="56" rx="${frame === "fire" ? 5 : 4}" ry="2.6" fill="${shot}"/><ellipse cx="2.5" cy="56" rx="2" ry="1.2" fill="#ffffff"/>`;
  const barrel = `<path d="M54 38.4 L88 39.4 L94 41 L88 42.6 L54 43.6 Z" fill="${wb}" ${st(1.4)}/>
<path d="M58 41 L90 41" stroke="${wa}" stroke-width="1.2"/><rect x="66" y="37.4" width="4" height="7.2" rx="1.2" fill="${wa}" ${st(.9)}/>
<rect x="78" y="38" width="3" height="6" rx="1" fill="${wd}" ${st(.8)}/><circle cx="92" cy="41" r="1.4" fill="${shot}"/>`;
  const flash = frame === "fire" ? `<path d="M94 41 L103 37.5 L100 41 L103 44.5 Z" fill="${shot}"/><circle cx="95" cy="41" r="2.6" fill="#ffffff"/>` : "";
  return flow + board + body.replace(/<path d="M58 41 L66 37[^>]*\/><circle cx="59" cy="41" r="2.4" fill="#ffffff"\/>/, "") + barrel + flash;
}
function registerAvatarSprites() {
  for (const a of AVATARS) for (const f of ["idle", "fire", "hurt"]) { SPRITE_SVG[`av_${a.id}_${f}`] = avatarSVG(a, f, "game"); SPRITE_SVG[`avs_${a.id}_${f}`] = avatarSVG(a, f); }
}
const PORTRAIT_CACHE = {};
function avatarPortrait(id) {
  if (!PORTRAIT_CACHE[id]) { const a = AVATAR_BY_ID[id] || AVATARS[0]; PORTRAIT_CACHE[id] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(avatarSVG(a, "idle", "portrait")); }
  return PORTRAIT_CACHE[id];
}
function avatarFull(id, frame = "idle", view = "game") { const a = AVATAR_BY_ID[id] || AVATARS[0]; return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(avatarSVG(a, frame, view)); }
if (typeof module === "object" && module.exports) module.exports = { AVATARS, avatarSVG, AVATAR_BY_ID, avatarUnlocked };
