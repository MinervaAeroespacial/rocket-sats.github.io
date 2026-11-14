/* Ecossistema da Minerva em 3D (usado só em aeroespacial.html)
   Mesma rede de relações da versão 2D (js/aeroespacial-rede-dados.js), agora com profundidade:
   cada camada é um "andar" — por NÍVEL (Minerva → núcleos → orientação e diretoria → subequipes e projetos →
   gerência → vice-gerência → integrantes → conquistas) ou por ANO (do próximo projeto ao arquivo).
   O layout em cada andar vem de uma simulação de forças 2D (d3-force); a altura vem da camada.
   Sem WebGL, ou se o visitante escolher, carrega a versão 2D (window.Rede2D). */
import * as THREE from "three";
import { OrbitControls } from "./three/OrbitControls.js";

const raiz = document.getElementById("rede");
const temWebGL = (() => { try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch { return false; } })();
const pediu2D = new URLSearchParams(location.search).get("modo") === "2d";
if (raiz && window.d3 && typeof REDE !== "undefined") {
  if (!temWebGL || pediu2D) { window.Rede2D?.(raiz); trocaModo(raiz, "3d"); } else iniciar();
}
function trocaModo(el, para) {
  const b = document.createElement("button"); b.type = "button"; b.className = "rede-btn"; b.textContent = para === "3d" ? "Ver em 3D" : "Ver em 2D";
  if (para === "3d" && !temWebGL) return;
  b.onclick = () => { const u = new URL(location); para === "3d" ? u.searchParams.delete("modo") : u.searchParams.set("modo", "2d"); u.hash = "ecossistema"; location.href = u.toString(); };
  el.querySelector(".rede-tools")?.appendChild(b);
}

function iniciar() {
  /* ---------- tipos, cores e camadas ---------- */
  const HEX = { centro: "#f4f1ea", orient: "#b58cff", dir: "#f2c14e", adm: "#3ecf8e", r: "#e8312f", b: "#2b7be4", proj: "#ff8a3d", conq: "#ffd166", sub: "#33d1e0", pessoa: "#9d7bff", curso: "#5aa0ff" };
  const TIPOS = {
    centro: { nome: "Minerva", plural: "Minerva", r: 22 }, nucleo: { nome: "Núcleo do ecossistema", plural: "Núcleos", r: 15 }, hub: { nome: "Universo", plural: "Universos", r: 13 },
    subsistema: { nome: "Subsistema", plural: "Subsistemas", r: 10, k: HEX.sub }, setor: { nome: "Setor administrativo", plural: "Setores administrativos", r: 10, k: HEX.adm },
    projeto: { nome: "Projeto", plural: "Projetos", r: 9, k: HEX.proj }, pessoa: { nome: "Pessoa", plural: "Pessoas", r: 5, k: HEX.pessoa },
    conquista: { nome: "Conquista", plural: "Conquistas", r: 4.5, k: HEX.conq }, curso: { nome: "Curso", plural: "Cursos", r: 9, k: HEX.curso },
  };
  const cor = n => n.tipo === "centro" ? HEX.centro : n.tipo === "pessoa" ? (n.sub === "professor" ? HEX.orient : HEX.pessoa) : (n.tipo === "nucleo" || n.tipo === "hub") ? HEX[n.cor] : TIPOS[n.tipo].k;
  const raio = n => n.tipo === "pessoa" ? (n.sub === "professor" ? 8 : n.lider ? 6.5 : 5) : TIPOS[n.tipo].r;
  const tam = n => ["centro", "nucleo", "hub"].includes(n.tipo) ? "big" : ["subsistema", "setor", "projeto", "curso"].includes(n.tipo) || n.sub === "professor" ? "mid" : "small";
  const rotulo = n => n.tipo === "conquista" ? (n.label.length > 46 ? n.label.slice(0, 44) + "…" : n.label) : n.label;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const nomeTipo = n => n.tipo === "pessoa" && n.sub === "professor" ? "Professor orientador" : TIPOS[n.tipo].nome;

  // profundidade por nível: a posição de cada pessoa vem do cargo cadastrado
  const NIVEIS = ["Minerva", "Núcleos", "Orientação e diretoria", "Subequipes e projetos", "Gerência", "Vice-gerência", "Integrantes", "Conquistas"];
  const nivel = n => {
    if (n.tipo === "centro") return 0;
    if (n.tipo === "nucleo" || n.tipo === "hub") return 1;
    if (n.tipo === "pessoa") { if (n.sub === "professor" || n.area === "diretoria") return 2; if (/vice/i.test(n.cargo || "")) return 5; if (n.lider) return 4; return 6; }
    if (n.tipo === "conquista") return 7;
    return 3;
  };
  // profundidade por ano: projetos pelo primeiro ano do período, conquistas pelo ano, pessoas pelo ciclo mais recente
  const anoDe = n => {
    if (n.tipo === "conquista") return n.ano;
    if (n.tipo === "projeto") { if (/próximo|futuro/i.test((n.periodo || "") + (n.status || ""))) return 2027; const m = String(n.periodo || "").match(/\d{4}/); return m ? +m[0] : 0; }
    if (n.tipo === "pessoa" && n.ciclos?.length) return Math.max(...n.ciclos.map(c => parseInt(c)));
    return 2026;
  };
  const ANOS = [...new Set(REDE.nodes.map(anoDe))].sort((a, b) => b - a);
  const nomeAno = a => a === 2027 ? "Próximos ciclos" : a === 0 ? "Arquivo" : String(a);
  let modo = "nivel";
  const camada = n => modo === "nivel" ? nivel(n) : ANOS.indexOf(anoDe(n));
  const camadas = () => modo === "nivel" ? NIVEIS : ANOS.map(nomeAno);
  const ALT = () => modo === "nivel" ? 120 : 95;

  /* ---------- dados ---------- */
  const N = new Map(REDE.nodes.map(n => [n.id, n]));
  const LINKS = REDE.links.filter(l => N.has(l.source) && N.has(l.target)).map(l => ({ ...l }));
  const viz = new Map(REDE.nodes.map(n => [n.id, []]));
  LINKS.forEach(l => { viz.get(l.source).push({ id: l.target, rel: l.rel }); viz.get(l.target).push({ id: l.source, rel: l.rel }); });

  /* ---------- estado (igual à versão 2D) ---------- */
  const expandidos = new Set(["minerva"]); let cadeia = []; const MAX = 3;
  const sinc = () => { expandidos.clear(); expandidos.add("minerva"); cadeia.forEach(i => expandidos.add(i)); };
  const ocultos = new Set(); let sel = "minerva"; const trilha = ["minerva"]; let vis = new Set();
  function caminho(alvo) {
    const ant = new Map([["minerva", null]]), f = ["minerva"];
    while (f.length) { const a = f.shift(); if (a === alvo) break; viz.get(a).forEach(x => { if (!ant.has(x.id)) { ant.set(x.id, a); f.push(x.id); } }); }
    const c = []; let p = alvo; while (p) { c.unshift(p); p = ant.get(p); } return c;
  }
  const visiveis = () => { const v = new Set(["minerva", ...caminho(sel)]); expandidos.forEach(id => { v.add(id); viz.get(id).forEach(x => v.add(x.id)); });
    return [...v].filter(id => id === "minerva" || expandidos.has(id) || id === sel || !ocultos.has(N.get(id).tipo)); };

  /* ---------- HTML ---------- */
  const tiposF = [...new Set(REDE.nodes.map(n => n.tipo))].filter(t => !["centro", "nucleo", "hub"].includes(t));
  raiz.innerHTML = `
    <div class="rede-tools">
      <div class="rede-busca"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
        <input id="rd-q" type="search" placeholder="Buscar pessoa, projeto, subsistema…" autocomplete="off" aria-label="Buscar no ecossistema" role="combobox" aria-expanded="false" aria-controls="rd-sug">
        <div class="rede-sug" id="rd-sug" role="listbox"></div></div>
      <div class="rede-seg" role="group" aria-label="Profundidade"><span>Profundidade</span><button type="button" data-modo="nivel" aria-pressed="true">Nível</button><button type="button" data-modo="ano" aria-pressed="false">Ano</button></div>
      <button class="rede-btn" type="button" id="rd-geral">Visão geral</button>
      <button class="rede-btn" type="button" id="rd-recolher">Recolher tudo</button>
    </div>
    <div class="rede-filtros" role="group" aria-label="Mostrar ou ocultar tipos">
      ${tiposF.map(t => `<button class="rede-filtro" type="button" data-t="${t}" aria-pressed="true" style="--k:${TIPOS[t].k}"><i></i>${TIPOS[t].plural}</button>`).join("")}
      <span class="rede-filtro" style="--k:${HEX.r};cursor:default"><i></i>Rockets</span><span class="rede-filtro" style="--k:${HEX.b};cursor:default"><i></i>Sats</span>
      <span class="rede-filtro" style="--k:${HEX.orient};cursor:default"><i></i>Orientação</span><span class="rede-filtro" style="--k:${HEX.dir};cursor:default"><i></i>Diretoria</span>
    </div>
    <div class="rede-box">
      <div class="rede-stage rede-3d" id="rd-stage">
        <div class="rede-trilha" id="rd-trilha"></div>
        <div class="rede-dica">Clique para abrir as conexões · clique de novo para recolher · arraste para girar, role para aproximar, botão direito para mover</div>
        <div class="rede-zoom"><button type="button" id="rd-zin" aria-label="Aproximar">+</button><button type="button" id="rd-zout" aria-label="Afastar">−</button></div>
        <div class="rede-tip" id="rd-tip" hidden></div>
      </div>
      <aside class="rede-painel" id="rd-painel" aria-live="polite"></aside>
    </div>`;
  trocaModo(raiz, "2d");
  const stage = document.getElementById("rd-stage");

  /* ---------- cena ---------- */
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); stage.prepend(renderer.domElement);
  const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x07080c, 1100, 2600);
  const camera = new THREE.PerspectiveCamera(48, 1, 1, 6000);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.08; controls.minDistance = 120; controls.maxDistance = 2400; controls.maxPolarAngle = Math.PI * 0.92;
  scene.add(new THREE.AmbientLight(0xffffff, 1.1)); const luz = new THREE.DirectionalLight(0xffffff, 1.4); luz.position.set(300, 600, 400); scene.add(luz);
  const ajusta = () => { const w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  new ResizeObserver(ajusta).observe(stage); ajusta();

  // texturas: brilho radial e rótulos
  const brilho = (() => { const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d"); const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(.25, "rgba(255,255,255,.45)"); r.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  function textoSprite(txt, { size = 28, cor = "#e8ebf0", peso = 600, fonte = "Inter, sans-serif", maiusc = false, escala = 0.5 } = {}) {
    const t = maiusc ? txt.toUpperCase() : txt, c = document.createElement("canvas"), g = c.getContext("2d"), f = `${peso} ${size}px ${fonte}`;
    g.font = f; const w = Math.ceil(g.measureText(t).width) + 16; c.width = w; c.height = size + 16;
    g.font = f; g.textBaseline = "middle"; g.lineJoin = "round"; g.lineWidth = 6; g.strokeStyle = "rgba(7,8,12,.95)"; g.strokeText(t, 8, c.height / 2); g.fillStyle = cor; g.fillText(t, 8, c.height / 2);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.minFilter = THREE.LinearFilter;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })); s.scale.set(w * escala, c.height * escala, 1); s.renderOrder = 2; return s;
  }

  // camadas: anel e nome de cada andar
  const gCamadas = new THREE.Group(); scene.add(gCamadas);
  function desenharCamadas() {
    gCamadas.clear();
    camadas().forEach((nome, i) => {
      const y = -i * ALT(), pts = []; for (let k = 0; k <= 96; k++) { const a = k / 96 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * 420, y, Math.sin(a) * 420)); }
      const anel = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x8090b0, transparent: true, opacity: .14 }));
      const disco = new THREE.Mesh(new THREE.CircleGeometry(420, 64), new THREE.MeshBasicMaterial({ color: 0x1a2240, transparent: true, opacity: .07, side: THREE.DoubleSide, depthWrite: false }));
      disco.rotation.x = -Math.PI / 2; disco.position.y = y;
      const t = textoSprite(nome, { size: 30, cor: "#7c86a0", peso: 700, fonte: "Saira Condensed, Inter, sans-serif", maiusc: true, escala: .55 }); t.position.set(-430, y, 0); t.center.set(1, .5);
      gCamadas.add(anel, disco, t);
    });
  }

  /* ---------- nós ---------- */
  const esfera = new THREE.SphereGeometry(1, 24, 16);
  const objs = new Map();
  let logoTex = null; new THREE.TextureLoader().load("img/logos/minerva-aeroespacial.webp", t => { logoTex = t; t.colorSpace = THREE.SRGBColorSpace; const o = objs.get("minerva"); if (o) o.logo.material.map = t, o.logo.material.needsUpdate = true; });
  function criarObj(n) {
    const g = new THREE.Group(), c = new THREE.Color(cor(n)), r = raio(n);
    const mat = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .45, roughness: .35, metalness: .1, transparent: true });
    const m = new THREE.Mesh(esfera, mat); m.scale.setScalar(r); m.userData.id = n.id; g.add(m);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: brilho, color: c, transparent: true, opacity: .55, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.setScalar(r * 5); g.add(glow);
    const anel = new THREE.Mesh(new THREE.TorusGeometry(r + 4, .9, 8, 48), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })); g.add(anel);
    let logo = null;
    if (n.tipo === "centro") { mat.color.set("#f4f1ea"); mat.emissiveIntensity = .15;
      logo = new THREE.Sprite(new THREE.SpriteMaterial({ map: logoTex, transparent: true, depthTest: false })); logo.scale.set(40, 29, 1); logo.renderOrder = 3; g.add(logo); }
    const t = tam(n), lab = textoSprite(rotulo(n), t === "big" ? { size: 30, peso: 700, fonte: "Saira Condensed, Inter, sans-serif", maiusc: true, escala: .42 } : t === "mid" ? { size: 26, peso: 600, escala: .34 } : { size: 24, peso: 500, escala: .28 });
    lab.position.y = r + 10; lab.center.set(.5, 0); g.add(lab);
    scene.add(g); const o = { g, m, mat, glow, anel, lab, logo, n, y: null }; objs.set(n.id, o); return o;
  }

  /* ---------- ligações ---------- */
  const MAXL = LINKS.length;
  const lgeo = new THREE.BufferGeometry(); const lpos = new Float32Array(MAXL * 6), lcol = new Float32Array(MAXL * 6);
  lgeo.setAttribute("position", new THREE.BufferAttribute(lpos, 3)); lgeo.setAttribute("color", new THREE.BufferAttribute(lcol, 3));
  const linhas = new THREE.LineSegments(lgeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: .75, depthWrite: false })); scene.add(linhas);
  let linksVis = [];

  /* ---------- simulação de forças no plano de cada andar ---------- */
  const ANG = { orientacao: -90, diretoria: -25, rockets: 35, conquistas: 75, projetos: 110, sats: 150, administrativo: 205, cursos: -155 };
  const raioAnel = () => { const k = viz.get(sel).length; return Math.max(110, Math.min(230, k * (k > 18 ? 5 : 10))); };
  const sim = d3.forceSimulation()
    .force("link", d3.forceLink().id(d => d.id).distance(l => (l.source.id === sel || l.target.id === sel) && sel !== "minerva" ? raioAnel() : (l.source.tipo === "centro" || l.target.tipo === "centro") ? 170 : (l.source.tipo === "pessoa" || l.target.tipo === "pessoa") ? 50 : 90).strength(.35))
    .force("carga", d3.forceManyBody().strength(d => d.tipo === "pessoa" || d.tipo === "conquista" ? -55 : -320).distanceMax(500))
    .force("colisao", d3.forceCollide().radius(d => raio(d) + (tam(d) === "small" ? 6 : 18)))
    .force("x", d3.forceX(0).strength(.02)).force("y", d3.forceY(0).strength(.02))
    .force("ancora", a => Object.entries(ANG).forEach(([id, g]) => { const n = N.get(id); if (!n || n.x == null || !vis.has(id) || n.fx != null) return; const r = g * Math.PI / 180; n.vx += (190 * Math.cos(r) - n.x) * .3 * a; n.vy += (190 * Math.sin(r) - n.y) * .3 * a; }))
    .force("anel", a => { const s = N.get(sel); if (!s || s.x == null || sel === "minerva") return; const ids = viz.get(sel).map(x => x.id).filter(id => vis.has(id)); const R = raioAnel();
      ids.forEach((id, i) => { const n = N.get(id); if (id === "minerva" || n.fx != null) return; const g = i / ids.length * 2 * Math.PI, r = R + (ids.length > 18 && i % 2 ? 70 : 0); n.vx += (s.x + r * Math.cos(g) - n.x) * .14 * a; n.vy += (s.y + r * Math.sin(g) - n.y) * .14 * a; }); })
    .alphaDecay(.03).stop();
  const minerva = N.get("minerva"); minerva.fx = 0; minerva.fy = 0;

  function desenhar() {
    const ids = visiveis(); vis = new Set(ids);
    caminho(sel).concat(ids).forEach(id => { const n = N.get(id); if (!vis.has(id) || n.x != null) return;
      const pai = viz.get(id).map(x => N.get(x.id)).find(m => m.x != null && vis.has(m.id)) || minerva; const a = Math.random() * 6.283;
      n.x = (pai.x || 0) + Math.cos(a) * 60; n.y = (pai.y || 0) + Math.sin(a) * 60; });
    objs.forEach((o, id) => { if (!vis.has(id)) { o.g.visible = false; } });
    ids.forEach(id => { const o = objs.get(id) || criarObj(N.get(id)); o.g.visible = true; if (o.y == null) o.y = -camada(o.n) * ALT() + 40; });
    linksVis = LINKS.filter(l => vis.has(l.source.id || l.source) && vis.has(l.target.id || l.target));
    sim.nodes(ids.map(id => N.get(id))); sim.force("link").links(linksVis); sim.alpha(.9);
    destacar();
  }
  function destacar() {
    const vz = new Set(viz.get(sel).map(x => x.id)); vz.add(sel);
    objs.forEach((o, id) => { if (!o.g.visible) return;
      const perto = vz.has(id) || id === "minerva" || expandidos.has(id), t = tam(o.n);
      o.mat.opacity = perto ? 1 : .28; o.glow.material.opacity = perto ? .55 : .12;
      o.anel.material.opacity = id === sel ? .95 : expandidos.has(id) ? .3 : 0;
      o.lab.visible = t === "big" || (perto && (t === "mid" || vz.has(id))) || hover === id;
      o.lab.material.opacity = perto ? 1 : .35; });
  }

  /* ---------- interação: clique, toque e passar o mouse ---------- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(); let hover = null, down = null;
  const alvo = e => { const r = renderer.domElement.getBoundingClientRect(); ptr.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1); ray.setFromCamera(ptr, camera);
    const ms = [...objs.values()].filter(o => o.g.visible).map(o => o.m); const h = ray.intersectObjects(ms, false)[0]; return h ? h.object.userData.id : null; };
  renderer.domElement.addEventListener("pointerdown", e => down = { x: e.clientX, y: e.clientY });
  renderer.domElement.addEventListener("pointerup", e => { if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return; const id = alvo(e); if (id) clicar(id); down = null; });
  const tip = document.getElementById("rd-tip");
  renderer.domElement.addEventListener("pointermove", e => { if (e.buttons) return; const id = alvo(e); renderer.domElement.style.cursor = id ? "pointer" : "grab";
    if (id !== hover) { hover = id; destacar(); }
    if (id) { const n = N.get(id), r = stage.getBoundingClientRect(); tip.hidden = false; tip.textContent = `${n.label} · ${nomeTipo(n)}`; tip.style.left = e.clientX - r.left + 14 + "px"; tip.style.top = e.clientY - r.top + 14 + "px"; } else tip.hidden = true; });
  renderer.domElement.addEventListener("pointerleave", () => { tip.hidden = true; hover = null; destacar(); });

  /* ---------- câmera ---------- */
  let voo = null;
  function focar(id, dist) {
    const o = objs.get(id); if (!o) return; const p = new THREE.Vector3(N.get(id).x, o.y, N.get(id).y);
    const d = dist || (id === "minerva" ? 1250 : Math.max(700, raioAnel() * 3.6));
    const dir = camera.position.clone().sub(controls.target).normalize();
    if (dir.y < .5) { dir.y = .6; dir.normalize(); }
    voo = { t0: performance.now(), dur: 900, alvoDe: controls.target.clone(), alvoPara: p, camDe: camera.position.clone(), camPara: p.clone().add(dir.multiplyScalar(d)) };
  }
  function visaoGeral() {
    REDE.nodes.forEach(n => { if (n.id !== "minerva") { n.fx = null; n.fy = null; } });
    cadeia = []; sinc(); sel = "minerva"; trilha.length = 0; trilha.push("minerva"); desenhar(); painel("minerva"); desenharTrilha();
    voo = { t0: performance.now(), dur: 1100, alvoDe: controls.target.clone(), alvoPara: new THREE.Vector3(0, -250, 0), camDe: camera.position.clone(), camPara: new THREE.Vector3(0, 330, 1050) };
  }

  /* ---------- ações ---------- */
  function selecionar(id) {
    const ant = N.get(sel); if (ant && ant.id !== "minerva") { ant.fx = null; ant.fy = null; }
    const nv = N.get(id), novo = !vis.has(id); if (!novo && id !== "minerva") { nv.fx = nv.x; nv.fy = nv.y; }
    sel = id; if (id !== "minerva") { cadeia = cadeia.filter(x => x !== id); cadeia.push(id); if (cadeia.length > MAX) cadeia = cadeia.slice(-MAX); }
    sinc(); if (trilha[trilha.length - 1] !== id) { trilha.push(id); if (trilha.length > 7) trilha.shift(); }
    desenhar(); painel(id); desenharTrilha();
    if (novo && id !== "minerva") setTimeout(() => { if (sel === id) { nv.fx = nv.x; nv.fy = nv.y; } }, 900);
    setTimeout(() => focar(id), novo ? 700 : 150);
  }
  function clicar(id) {
    if (id === sel && expandidos.has(id) && id !== "minerva") { cadeia = cadeia.filter(x => x !== id); sinc(); desenhar(); painel(id); return; }
    selecionar(id);
  }

  /* ---------- painel ---------- */
  function painel(id) {
    const n = N.get(id), P = document.getElementById("rd-painel"), campos = [];
    if (n.tipo === "pessoa") { campos.push(["Função", n.cargo || "Integrante"]); if (n.depto) campos.push(["Departamento", n.depto]);
      if (n.sub !== "professor") campos.push(["Ciclos", (n.ciclos || []).join(", ")], ["Curso", n.curso], ["Período", n.periodo]); }
    if (n.tipo === "projeto") campos.push(["Período", n.periodo], ["Situação", n.status], ["Tipo", n.tipoProj], ...(n.specs || []).slice(0, 3));
    if (n.tipo === "conquista") campos.push(["Ano", n.ano]);
    campos.push([modo === "nivel" ? "Camada" : "Ano na rede", modo === "nivel" ? NIVEIS[nivel(n)] : nomeAno(anoDe(n))]);
    const grupos = {}; viz.get(id).forEach(x => { const m = N.get(x.id), g = m.tipo === "pessoa" && m.sub === "professor" ? "professor" : m.tipo; (grupos[g] ||= []).push({ m, rel: x.rel }); });
    const ordem = ["centro", "nucleo", "hub", "professor", "setor", "subsistema", "projeto", "curso", "pessoa", "conquista"];
    const nomesG = { centro: "Minerva", nucleo: "Núcleos", hub: "Universos", professor: "Orientadores", setor: "Setores administrativos", subsistema: "Subsistemas", projeto: "Projetos", curso: "Cursos", pessoa: "Pessoas", conquista: "Conquistas" };
    const relTxt = rel => rel && !["integrante", "integra", "portfólio", "citado", "projeto da equipe", "subequipe", "setor", "curso"].includes(rel) && !/^\d{4}$/.test(rel) ? `<em>· ${esc(rel)}</em>` : "";
    P.innerHTML = `<span class="rp-tipo" style="--k:${cor(n)}"><i></i>${esc(n.tipo === "centro" ? "Ecossistema" : nomeTipo(n))}</span>
      <h3>${esc(n.tipo === "conquista" ? `Conquista de ${n.ano}` : n.label)}</h3>
      ${n.tipo === "conquista" ? `<p class="rp-desc">${esc(n.label)}</p>` : ""}
      ${n.imagem ? `<img class="rp-img" src="${esc(n.imagem)}" alt="" loading="lazy">` : n.foto ? `<img class="rp-img" src="${esc(n.foto)}" alt="" loading="lazy" style="aspect-ratio:1/1;width:120px">` : ""}
      ${n.desc ? `<p class="rp-desc">${esc(n.desc)}</p>` : ""}${n.bio ? `<p class="rp-desc">${esc(n.bio)}</p>` : ""}
      <dl class="rp-campos">${campos.map(([a, b]) => `<dt>${esc(a)}</dt><dd class="${b ? "" : "na"}">${b ? esc(b) : "não cadastrado"}</dd>`).join("")}</dl>
      ${n.tipo === "pessoa" && n.sub !== "professor" ? `<p class="rede-nota">${n.lattes ? `<a href="${esc(n.lattes)}" target="_blank" rel="noopener">Currículo Lattes ↗</a>` : "Currículo Lattes: não cadastrado."}</p>` : ""}
      ${ordem.filter(g => grupos[g]).map(g => `<div class="rp-grupo"><h4>${nomesG[g]} <span>${grupos[g].length}</span></h4><div class="rp-chips">
        ${grupos[g].sort((a, b) => (b.m.lider ? 1 : 0) - (a.m.lider ? 1 : 0) || a.m.label.localeCompare(b.m.label, "pt")).map(({ m, rel }) => `<button type="button" data-id="${m.id}" style="--k:${cor(m)}" title="${esc(m.label)}"><i></i><span>${esc(rotulo(m))}</span>${relTxt(rel)}</button>`).join("")}</div></div>`).join("")}
      <div class="rp-acoes">${id !== "minerva" ? `<button class="rede-btn" type="button" data-acao="toggle">${expandidos.has(id) ? "Recolher conexões" : "Mostrar conexões"}</button>` : ""}<button class="rede-btn" type="button" data-acao="centro">Focar</button></div>`;
    P.scrollTop = 0;
  }
  document.getElementById("rd-painel").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.id) selecionar(b.dataset.id); else if (b.dataset.acao === "toggle") clicar(sel); else if (b.dataset.acao === "centro") focar(sel); });
  function desenharTrilha() { document.getElementById("rd-trilha").innerHTML = trilha.map(id => `<button type="button" data-id="${id}">${esc(rotulo(N.get(id)).slice(0, 34))}</button>`).join(""); }
  document.getElementById("rd-trilha").addEventListener("click", e => { const b = e.target.closest("button"); if (b) selecionar(b.dataset.id); });

  /* ---------- busca, filtros, modos ---------- */
  const q = document.getElementById("rd-q"), sug = document.getElementById("rd-sug"); let res = [], at = 0;
  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(), fechar = () => { sug.classList.remove("on"); q.setAttribute("aria-expanded", "false"); };
  q.addEventListener("input", () => { const t = norm(q.value.trim()); if (t.length < 2) return fechar();
    res = REDE.nodes.filter(n => norm(n.label).includes(t)).sort((a, b) => norm(a.label).indexOf(t) - norm(b.label).indexOf(t)).slice(0, 12); at = 0;
    sug.innerHTML = res.length ? res.map((n, i) => `<button type="button" role="option" data-id="${n.id}" class="${i ? "" : "sel"}"><span style="color:${cor(n)}">●</span>${esc(rotulo(n))}<small>${esc(nomeTipo(n))}</small></button>`).join("") : `<button type="button" disabled>Nada encontrado</button>`;
    sug.classList.add("on"); q.setAttribute("aria-expanded", "true"); });
  q.addEventListener("keydown", e => { if (!sug.classList.contains("on") || !res.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); at = (at + (e.key === "ArrowDown" ? 1 : -1) + res.length) % res.length; [...sug.children].forEach((b, i) => b.classList.toggle("sel", i === at)); }
    if (e.key === "Enter") { e.preventDefault(); escolher(res[at].id); } if (e.key === "Escape") fechar(); });
  sug.addEventListener("click", e => { const b = e.target.closest("button[data-id]"); if (b) escolher(b.dataset.id); });
  document.addEventListener("click", e => { if (!e.target.closest(".rede-busca")) fechar(); });
  function escolher(id) { fechar(); q.value = ""; selecionar(id); }
  raiz.querySelectorAll("button.rede-filtro").forEach(b => b.addEventListener("click", () => { const t = b.dataset.t, on = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!on)); on ? ocultos.add(t) : ocultos.delete(t); desenhar(); }));
  raiz.querySelectorAll("[data-modo]").forEach(b => b.addEventListener("click", () => { if (modo === b.dataset.modo) return; modo = b.dataset.modo;
    raiz.querySelectorAll("[data-modo]").forEach(x => x.setAttribute("aria-pressed", String(x === b))); desenharCamadas(); painel(sel); sel === "minerva" ? visaoGeral() : focar(sel); }));
  document.getElementById("rd-geral").onclick = visaoGeral;
  document.getElementById("rd-recolher").onclick = () => { cadeia = sel !== "minerva" ? [sel] : []; sinc(); desenhar(); painel(sel); };
  const zoomPor = f => { const d = camera.position.clone().sub(controls.target); camera.position.copy(controls.target).add(d.multiplyScalar(f)); };
  document.getElementById("rd-zin").onclick = () => zoomPor(.8); document.getElementById("rd-zout").onclick = () => zoomPor(1.25);

  /* ---------- laço de animação ---------- */
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function quadro(t) {
    if (sim.alpha() > sim.alphaMin()) sim.tick();
    objs.forEach(o => { if (!o.g.visible) return; const n = o.n, alvoY = -camada(n) * ALT(); o.y += (alvoY - o.y) * (reduz ? 1 : .12); o.g.position.set(n.x, o.y, n.y);
      if (o.anel.material.opacity) o.anel.quaternion.copy(camera.quaternion); });
    let k = 0; const ch = new THREE.Color(0xffffff), cn = new THREE.Color(0x56607a);
    linksVis.forEach(l => { const a = objs.get(l.source.id), b = objs.get(l.target.id); if (!a || !b) return; const hl = l.source.id === sel || l.target.id === sel, c = hl ? ch : cn;
      lpos.set([a.g.position.x, a.g.position.y, a.g.position.z, b.g.position.x, b.g.position.y, b.g.position.z], k * 6);
      const f = hl ? .85 : .45; lcol.set([c.r * f, c.g * f, c.b * f, c.r * f, c.g * f, c.b * f], k * 6); k++; });
    lgeo.setDrawRange(0, k * 2); lgeo.attributes.position.needsUpdate = true; lgeo.attributes.color.needsUpdate = true; lgeo.computeBoundingSphere();
    if (voo) { const p = Math.min(1, (t - voo.t0) / voo.dur), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      controls.target.lerpVectors(voo.alvoDe, voo.alvoPara, e); camera.position.lerpVectors(voo.camDe, voo.camPara, e); if (p >= 1) voo = null; }
    controls.update(); renderer.render(scene, camera); requestAnimationFrame(quadro);
  }

  /* ---------- início ---------- */
  desenharCamadas();
  controls.target.set(0, -250, 0); camera.position.set(0, 330, 1050);
  for (let i = 0; i < 120; i++) sim.tick();
  desenhar(); painel("minerva"); desenharTrilha(); requestAnimationFrame(quadro);
  window.REDE_API = { selecionar, visaoGeral, modo: m => raiz.querySelector(`[data-modo="${m}"]`)?.click(), estado: () => ({ sel, expandidos: [...expandidos], visiveis: [...vis] }) };
}
