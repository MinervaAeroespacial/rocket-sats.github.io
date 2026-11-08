/* =========================================================
   MINERVA AEROESPACIAL — layout e montagem das páginas
   Os textos e listas ficam em dados.js. Este arquivo só
   desenha o que está lá.
   ========================================================= */

/* ---------- ícones (traço, estilo Lucide) ---------- */
const P = {
  arrow: '<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>',
  back: '<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>',
  down: '<path d="M6 9l6 6 6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  insta: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  sat: '<path d="M13 7L9 3 5 7l4 4"/><path d="M17 11l4 4-4 4-4-4"/><path d="M8 12l4 4"/><path d="M16 8l-4 4"/><path d="M15 3a6 6 0 0 1 6 6"/><path d="M15 6a3 3 0 0 1 3 3"/><path d="M4 21l4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  chute: '<path d="M3 11a9 9 0 0 1 18 0"/><path d="M3 11l9 9 9-9"/><path d="M9 11l3 9 3-9"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89L17 22l-5-3-5 3 1.52-9.11"/>',
  flask: '<path d="M9 3h6M10 9V3h4v6l5 9a2 2 0 0 1-1.8 3H6.8A2 2 0 0 1 5 18z"/><path d="M7 15h10"/>',
  handshake: '<path d="M11 17l2 2a1 1 0 1 0 3-3"/><path d="M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="M21 3l1 11h-2"/><path d="M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  yt: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="M10 15l5-3-5-3z"/>',
  in: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  fb: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  play: '<path d="M6 4l14 8-14 8z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
  ext: '<path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
};
const ic = (n, cls = "") => `<svg class="svg ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;

/* desenhos blueprint das subequipes administrativas */
const BP = {
  diretoria: `<svg viewBox="0 0 220 160" fill="none" stroke="#e6f0ff" stroke-width="2" stroke-linejoin="round"><circle cx="110" cy="80" r="56"/><circle cx="110" cy="80" r="42" stroke-dasharray="3 5"/><path d="M110 30l9 36 37 14-37 14-9 36-9-36-37-14 37-14z"/><circle cx="110" cy="80" r="5"/><path d="M110 14v10M110 136v10M44 80h10M166 80h10"/></svg>`,
  logistica: `<svg viewBox="0 0 220 160" fill="none" stroke="#e6f0ff" stroke-width="2" stroke-linejoin="round"><rect x="20" y="50" width="110" height="70" rx="4"/><path d="M130 72h38l26 26v22h-64z"/><path d="M140 80h24l16 16h-40z"/><circle cx="55" cy="126" r="13"/><circle cx="165" cy="126" r="13"/><circle cx="55" cy="126" r="4"/><circle cx="165" cy="126" r="4"/><path d="M35 70h30v30H35zM75 70h30v30H75z" stroke-dasharray="4 3"/><path d="M10 140h200" stroke-dasharray="2 6"/></svg>`,
  marketing: `<svg viewBox="0 0 220 160" fill="none" stroke="#e6f0ff" stroke-width="2" stroke-linejoin="round"><path d="M40 65h30l70-35v100L70 95H40z"/><path d="M50 95l12 40h18l-10-40"/><path d="M160 55c12 8 12 42 0 50"/><path d="M175 42c22 16 22 60 0 76"/><path d="M40 65v30" stroke-dasharray="3 3"/><circle cx="140" cy="80" r="4"/></svg>`,
  gestao: `<svg viewBox="0 0 220 160" fill="none" stroke="#e6f0ff" stroke-width="2" stroke-linejoin="round"><rect x="85" y="14" width="50" height="30" rx="4"/><rect x="20" y="104" width="50" height="30" rx="4"/><rect x="85" y="104" width="50" height="30" rx="4"/><rect x="150" y="104" width="50" height="30" rx="4"/><path d="M110 44v30M45 74h130M45 74v30M110 74v30M175 74v30"/><circle cx="110" cy="29" r="6"/><circle cx="45" cy="119" r="6"/><circle cx="110" cy="119" r="6"/><circle cx="175" cy="119" r="6"/></svg>`,
  financeiro: `<svg viewBox="0 0 220 160" fill="none" stroke="#e6f0ff" stroke-width="2" stroke-linejoin="round"><path d="M20 140h180M20 140V20"/><path d="M40 140v-30h22v30M80 140V85h22v55M120 140V60h22v80M160 140V35h22v105" /><path d="M30 105l40-25 40 10 40-35 40-25" stroke-dasharray="5 4"/><path d="M178 30l12-10 2 15"/></svg>`,
};

/* ---------- utilitários ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const MESES = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
const quando = d => { const [a, m] = String(d).split("-"); return m ? `${MESES[+m - 1]} ${a}` : a; };
const iniciais = n => { const w = n.split(" ").filter(Boolean); return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase(); };
const corEquipe = e => ({ rockets: "r", sats: "b", adm: "g", geral: "g" }[e] || "n");
const nomeEquipe = e => ({ rockets: "Minerva Rockets", sats: "Minerva Sats", adm: "Administrativo", geral: "Rockets e Sats" }[e] || "");
const param = k => new URLSearchParams(location.search).get(k);
const setParam = (k, v) => { const u = new URL(location); v ? u.searchParams.set(k, v) : u.searchParams.delete(k); history.replaceState(null, "", u); };

/* ---------- menu, cabeçalho e rodapé ---------- */
const NAV = [
  ["index.html", "Início", ""],
  ["rockets.html", "Rockets", "r"],
  ["sats.html", "Sats", "b"],
  ["subteams.html", "Subteams", ""],
  ["equipe.html", "Equipe", ""],
  ["projetos.html", "Projetos", ""],
  ["parceiros.html", "Parceiros", ""],
  ["noticias.html", "Notícias", ""],
  ["contato.html", "Contato", ""],
];

function layout() {
  const atual = location.pathname.split("/").pop() || "index.html";
  const pag = atual === "post.html" ? "noticias.html" : atual;
  $("header").innerHTML = `<div class="container nav">
    <a class="brand" href="index.html"><img src="img/logos/minerva-aeroespacial.webp" alt="" width="56" height="40"><span>Minerva</span></a>
    <button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false">${ic("menu")}</button>
    <nav class="menu" id="menu">${NAV.map(([h, t, c]) => `<a class="${c} ${h === pag ? "on" : ""}" href="${h}">${t}</a>`).join("")}
      <a class="btn btn-red" href="parceiros.html#doe">${ic("heart")} Apoie</a></nav></div>`;
  $("burger").onclick = () => { const o = $("menu").classList.toggle("open"); $("burger").setAttribute("aria-expanded", o); $("burger").innerHTML = ic(o ? "x" : "menu"); };

  $("footer").innerHTML = `<div class="container"><div class="foot">
    <div><a class="brand" href="index.html"><img src="img/logos/minerva-aeroespacial.webp" alt="" width="56" height="40"><span>Minerva Aeroespacial</span></a>
      <p class="mut" style="margin-top:14px;font-size:.92rem">${esc(SITE.grupo)}. Iniciativa estudantil da Escola Politécnica, fundada em ${SITE.fundacao}.</p>
      <div class="inst"><img src="img/logos/ufrj-branco.webp" alt="UFRJ"><img src="img/logos/politecnica-branco.webp" alt="Escola Politécnica"></div></div>
    <div><h4>Equipes</h4><a href="rockets.html">Minerva Rockets</a><a href="sats.html">Minerva Sats</a><a href="subteams.html">Subteams</a><a href="equipe.html">Equipe por ciclo</a></div>
    <div><h4>Site</h4><a href="projetos.html">Projetos</a><a href="parceiros.html">Parceiros</a><a href="noticias.html">Notícias</a><a href="contato.html">Contato</a></div>
    <div><h4>Contato</h4><a href="mailto:${SITE.emailRockets}">${SITE.emailRockets}</a><a href="mailto:${SITE.emailSats}">${SITE.emailSats}</a>
      <div class="social">${SITE.redes.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.rede)} ${esc(r.nome)}" title="${esc(r.rede)} — ${esc(r.nome)}">${ic(r.icone)}</a>`).join("")}</div></div>
    </div><div class="copy"><span>© ${new Date().getFullYear()} Minerva Rockets & Minerva Sats — UFRJ</span><span>${esc(SITE.endereco[1])}</span></div></div>`;
}

/* animação ao rolar */
function revelar() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => io.observe(e));
}

/* ---------- peças reutilizáveis ---------- */
const membrosAtuais = () => MEMBROS[CICLOS[0].id];
const equipeDaArea = a => (SUBTEAMS.find(s => s.id === a) || {}).equipe || AREAS[a]?.equipe || ({ diretoria: "geral", "diretoria-rockets": "rockets", "diretoria-sats": "sats", "adm-geral": "adm", hemera: "rockets" }[a]);

function cardPessoa(m) {
  const c = corEquipe(equipeDaArea(m.area));
  const av = m.foto ? `<img class="av" src="${esc(m.foto)}" alt="" loading="lazy">` : `<div class="av ${c}">${iniciais(m.nome)}</div>`;
  return `<div class="person ${m.lider ? "lead" : ""}">${av}<div><b>${esc(m.nome)}</b><small>${esc(m.cargo)}</small></div></div>`;
}

function cardProjeto(p, extra = "") {
  const st = { "Concluído": "ok", "Em desenvolvimento": "dev", "Em reconstrução": "warn", "Futuro": "" }[p.status] ?? "";
  return `<article class="proj ${extra}" id="${p.id}">
    <div class="im ${p.contain ? "contain" : ""}"><img src="${esc(p.imagem)}" alt="${esc(p.nome)}" loading="lazy"></div>
    <div class="tx"><div class="row"><span class="badge ${corEquipe(p.equipe)}">${nomeEquipe(p.equipe)}</span><span class="badge">${esc(p.periodo)}</span><span class="badge ${st}">${esc(p.status)}</span></div>
      <h3>${esc(p.nome)}</h3><p class="mut" style="margin-top:-4px">${esc(p.tipo)}</p><p>${esc(p.resumo)}</p>
      ${p.marcos.length ? `<ul>${p.marcos.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      ${p.video ? `<button class="btn btn-ghost" style="margin-top:16px" data-video="${esc(p.video)}" data-titulo="${esc(p.nome)}">${ic("play")} Assistir ao lançamento</button>` : ""}
      ${p.id === "hemera-v1" ? `<a class="btn btn-red" style="margin-top:16px" href="${esc(SITE.doacao.url)}" target="_blank" rel="noopener">${ic("heart")} Ajude a reconstruir</a>` : ""}</div></article>`;
}

function cardNoticia(p) {
  return `<a class="news reveal" href="post.html?p=${p.slug}"><div class="im"><img src="${esc(p.imagem)}" alt="" loading="lazy"></div>
    <div class="tx"><span class="when">${quando(p.data)} · ${nomeEquipe(p.equipe)}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.resumo)}</p></div></a>`;
}

function linhaDoTempo(lista) {
  const anos = [...new Set(lista.map(c => c.ano))].sort((a, b) => b - a);
  return `<div class="timeline">${anos.map(a => `<div class="tl-year reveal"><h3>${a}</h3>${lista.filter(c => c.ano === a)
    .map(c => `<div class="tl-item"><span class="dot ${corEquipe(c.equipe)}"></span><span>${esc(c.txt)}</span></div>`).join("")}</div>`).join("")}</div>`;
}

function faixaLogos() {
  return PARCEIROS.map(p => { const img = `<img src="img/parceiros/${esc(p.logo)}" alt="${esc(p.nome)}" loading="lazy">`;
    return p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener" title="${esc(p.nome)}">${img}</a>` : `<div title="${esc(p.nome)}">${img}</div>`; }).join("");
}

const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function doacaoHTML() {
  const d = SITE.doacao, pct = Math.min(100, Math.round(d.arrecadado / d.meta * 100));
  return `<div class="donate reveal"><div class="donate-tx"><span class="eyebrow red">Campanha ativa</span><h2>${esc(d.titulo)}</h2>
    <p class="mut">O Hemera voou com sucesso na IREC 2026. Na LASC 2026, o paraquedas não abriu e o foguete se perdeu, num prejuízo de cerca de R$ 80 mil. Sua doação ajuda a repor materiais e reconstruir o foguete.</p>
    <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>
    <div class="prog-nums"><b>${brl(d.arrecadado)}</b><span>de ${brl(d.meta)} · ${d.apoiadores} apoiadores · ${pct}%</span></div>
    <small class="mut2">Valores de ${esc(d.atualizadoEm)}. Veja o valor atual na Vakinha.</small></div>
    <div class="donate-cta"><a class="btn btn-red" href="${esc(d.url)}" target="_blank" rel="noopener">${ic("heart")} Doar na Vakinha</a>
      <div class="pix"><span>Pix</span><code id="pix">${esc(d.pix)}</code><button class="chip" type="button" data-copy="${esc(d.pix)}">Copiar</button></div></div></div>`;
}
function redesHTML() {
  return `<div class="redes">${SITE.redes.map(r => `<a class="rede reveal" href="${esc(r.url)}" target="_blank" rel="noopener"><span class="ico">${ic(r.icone)}</span>
    <span><b>${esc(r.rede)}</b><small>${esc(r.nome)}</small><small class="mut2">${esc(r.seguidores)}</small></span>${ic("ext", "ext")}</a>`).join("")}</div>`;
}
const thumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
function videosHTML(lista) {
  return lista.map(v => `<button class="video reveal" type="button" data-video="${esc(v.id)}" data-titulo="${esc(v.titulo)}">
    <span class="vthumb"><img src="${thumb(v.id)}" alt="" loading="lazy" onerror="this.style.opacity=0"><span class="vplay">${ic("play")}</span><span class="vdur">${esc(v.dur)}</span></span>
    <span class="vtit">${esc(v.titulo)}</span></button>`).join("");
}
/* janela do vídeo (YouTube sem cookies) e botão de copiar Pix — funcionam em qualquer página */
function interacoes() {
  const dlg = document.createElement("dialog"); dlg.className = "lightbox";
  dlg.innerHTML = `<div class="lb-top"><b id="lb-t"></b><button type="button" class="lb-x" aria-label="Fechar">${ic("x")}</button></div><div class="lb-frame" id="lb-f"></div>`;
  document.body.appendChild(dlg);
  const fechar = () => { $("lb-f").innerHTML = ""; dlg.close(); };
  dlg.querySelector(".lb-x").onclick = fechar;
  dlg.addEventListener("click", e => { if (e.target === dlg) fechar(); });
  dlg.addEventListener("close", () => { $("lb-f").innerHTML = ""; });
  document.addEventListener("click", e => {
    const v = e.target.closest("[data-video]");
    if (v) { $("lb-t").textContent = v.dataset.titulo || "";
      $("lb-f").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.dataset.video)}?autoplay=1&rel=0" title="${esc(v.dataset.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      if (dlg.showModal) dlg.showModal(); else window.open("https://www.youtube.com/watch?v=" + v.dataset.video, "_blank"); return; }
    const c = e.target.closest("[data-copy]");
    if (c) { navigator.clipboard?.writeText(c.dataset.copy).then(() => { c.textContent = "Copiado!"; setTimeout(() => c.textContent = "Copiar", 1800); }); }
  });
}

/* ---------- páginas ---------- */
function home() {
  const n = membrosAtuais().length;
  $("stats").innerHTML = [[SITE.fundacao, "Ano de fundação"], [n, `Membros no ciclo ${CICLOS[0].nome}`], ["40+", "Cursos representados"], [PROJETOS.length, "Projetos no portfólio"]]
    .map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("");
  $("conquistas").innerHTML = linhaDoTempo(CONQUISTAS);
  $("ultimas").innerHTML = POSTS.slice(0, 3).map(cardNoticia).join("");
  $("logos").innerHTML = faixaLogos();
  $("doe").innerHTML = doacaoHTML();
  $("videos").innerHTML = videosHTML(VIDEOS.slice(0, 4));
  $("redes").innerHTML = redesHTML();
}

function rockets() {
  const n = membrosAtuais().filter(m => equipeDaArea(m.area) === "rockets" || (m.area === "diretoria" && /Rockets/.test(m.cargo))).length;
  $("stats").innerHTML = [[n, "Membros técnicos e de diretoria"], ["4", "Subequipes técnicas"], ["13+", "Cursos na equipe"], ["2", "Competições em 2026"]]
    .map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("");
  $("conquistas").innerHTML = linhaDoTempo(CONQUISTAS.filter(c => c.equipe === "rockets"));
  $("doe").innerHTML = doacaoHTML();
  $("videos").innerHTML = videosHTML(VIDEOS.filter(v => /^(Lançamento|Teste|Lançamos)/.test(v.titulo)));
}

function sats() {
  const n = membrosAtuais().filter(m => equipeDaArea(m.area) === "sats" || (m.area === "diretoria" && /Sats/.test(m.cargo))).length;
  $("stats").innerHTML = [[n, "Membros"], ["TRL 5", "CariocaSat em 2025"], ["3º", "INPE CubeDesign 2024"], ["1º", "CubeSat — LASC 2022"]]
    .map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("");
  $("missoes").innerHTML = PROJETOS.filter(p => p.equipe === "sats" && p.id !== "cariocasat").map(p => `
    <a class="sub-card b reveal" href="projetos.html#${p.id}"><div class="im" style="padding:0"><img src="${esc(p.imagem)}" alt="${esc(p.nome)}" style="width:100%;height:100%;object-fit:cover" loading="lazy"></div>
    <div class="tx"><span class="tag">${esc(p.periodo)}</span><h3>${esc(p.nome)}</h3><p>${esc(p.resumo)}</p></div></a>`).join("");
  $("conquistas").innerHTML = linhaDoTempo(CONQUISTAS.filter(c => c.equipe === "sats"));
}

function subteams() {
  const pessoas = membrosAtuais();
  const filtro = param("equipe") || "todas";
  $("filtros").innerHTML = [["todas", "Todas", ""], ["rockets", "Rockets", "r"], ["sats", "Sats", "b"], ["adm", "Administrativo", "g"]]
    .map(([v, t, c]) => `<button class="chip ${c} ${v === filtro ? "on" : ""}" data-v="${v}">${t}</button>`).join("");
  const desenha = f => {
    $("subteams").innerHTML = SUBTEAMS.filter(s => f === "todas" || s.equipe === f || s.equipe === "geral").map(s => {
      const gente = pessoas.filter(m => m.area === s.id);
      const profs = s.id === "diretoria" ? SITE.orientadores : [];
      const lideres = gente.filter(m => m.lider), demais = gente.filter(m => !m.lider);
      const arte = s.arte.startsWith("svg:") ? BP[s.arte.slice(4)] : `<img src="${s.arte}" alt="" loading="lazy">`;
      return `<details class="blueprint ${corEquipe(s.equipe) === "b" ? "" : corEquipe(s.equipe)}" id="${s.id}">
        <summary><div class="art">${arte}</div><h3>${esc(s.nome)}</h3><div class="team-lbl">${nomeEquipe(s.equipe)} · ${gente.length} membros${profs.length ? ` + ${profs.length} orientadores` : ""}</div>
        <span class="more">Ver detalhes ${ic("down")}</span></summary>
        <div class="body"><p>${esc(s.desc)}</p>
          ${lideres.length ? `<p style="margin:14px 0 4px"><b>Liderança</b></p><div class="people">${lideres.map(m => `<span class="pill lead">${esc(m.nome)} — ${esc(m.cargo)}</span>`).join("")}</div>` : ""}
          ${profs.length ? `<p style="margin:14px 0 4px"><b>Professores orientadores</b></p><div class="people">${profs.map(o => `<span class="pill lead">${esc(o.nome)} — ${esc(o.depto)}</span>`).join("")}</div>` : ""}
          ${demais.length ? `<p style="margin:14px 0 4px"><b>Membros</b></p><div class="people">${demais.map(m => `<span class="pill">${esc(m.nome)}${m.cargo !== "Integrante" ? " — " + esc(m.cargo) : ""}</span>`).join("")}</div>` : ""}
        </div></details>`;
    }).join("");
    if (location.hash) { const el = document.querySelector(location.hash); if (el && el.tagName === "DETAILS") { el.open = true; el.scrollIntoView(); } }
  };
  $("filtros").onclick = e => { const b = e.target.closest(".chip"); if (!b) return;
    $("filtros").querySelectorAll(".chip").forEach(x => x.classList.toggle("on", x === b)); setParam("equipe", b.dataset.v === "todas" ? "" : b.dataset.v); desenha(b.dataset.v); };
  desenha(filtro);
}

function equipe() {
  let ciclo = CICLOS.some(c => c.id === param("ciclo")) ? param("ciclo") : CICLOS[0].id;
  let time = param("equipe") || "todas";
  const ordem = ["diretoria", "diretoria-rockets", "aerodinamica", "aeroestruturas", "propulsao", "eletronica-rockets", "avionica", "instrumentacao", "recuperacao", "adm-geral", "operacoes", "marketing", "gestao", "financeiro", "diretoria-sats", "eletronica-sats", "mecanica-sats", "payload-sats", "experimentos", "hemera"];
  const nomeArea = a => AREAS[a]?.nome || (s => `${s.nome} — ${nomeEquipe(s.equipe)}`)(SUBTEAMS.find(s => s.id === a));
  const desenha = () => {
    $("ciclos").innerHTML = CICLOS.map(c => `<button class="chip ${c.id === ciclo ? "on" : ""}" data-c="${c.id}">${c.nome}${c.id === CICLOS[0].id ? " (atual)" : ""}</button>`).join("");
    $("times").innerHTML = [["todas", "Todas", ""], ["rockets", "Rockets", "r"], ["sats", "Sats", "b"], ["adm", "Administrativo", "g"]]
      .map(([v, t, c]) => `<button class="chip ${c} ${v === time ? "on" : ""}" data-t="${v}">${t}</button>`).join("");
    const cic = CICLOS.find(c => c.id === ciclo);
    const lista = MEMBROS[ciclo].filter(m => time === "todas" || equipeDaArea(m.area) === time || m.area === "hemera" || m.area === "diretoria");
    $("ciclo-desc").textContent = `${cic.desc} ${lista.length} pessoas.`;
    $("team").innerHTML = ordem.map(a => {
      const gente = lista.filter(m => m.area === a).sort((x, y) => y.lider - x.lider);
      if (!gente.length) return "";
      const cor = AREAS[a]?.cor || corEquipe(equipeDaArea(a));
      return `<section class="dept"><div class="dept-h"><span class="bar ${cor}"></span><h3>${esc(nomeArea(a))}</h3><span class="n">${gente.length}</span></div>
        <div class="people-grid">${gente.map(cardPessoa).join("")}</div></section>`;
    }).join("");
    $("times").style.display = ciclo === CICLOS[0].id ? "" : "none";
  };
  $("ciclos").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; ciclo = b.dataset.c; setParam("ciclo", ciclo === CICLOS[0].id ? "" : ciclo); desenha(); };
  $("times").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; time = b.dataset.t; setParam("equipe", time === "todas" ? "" : time); desenha(); };
  $("orientadores").innerHTML = SITE.orientadores.map(o => `<div class="person lead"><div class="av n">${iniciais(o.nome.replace("Prof. ", ""))}</div><div><b>${esc(o.nome)}</b><small>${esc(o.depto)}</small></div></div>`).join("");
  desenha();
}

/* carrega o visualizador 3D (model-viewer) só quando algum projeto tiver modelo */
let mvPronto = null;
const carregarModelViewer = () => mvPronto ||= new Promise(res => {
  const s = document.createElement("script"); s.type = "module";
  s.src = "js/model-viewer.min.js"; /* @google/model-viewer 3.5.0, licença Apache-2.0 */
  s.onload = res; s.onerror = res; document.head.appendChild(s);
});

function projetos() {
  let ano = param("ano") || "todos", time = param("equipe") || "todas";
  let atual = (location.hash || "").slice(1);
  const anos = [...new Set(PROJETOS.map(p => p.ano).filter(Boolean))].sort((a, b) => b - a);
  const filtrados = () => PROJETOS.filter(p => (ano === "todos" || String(p.ano) === ano) && (time === "todas" || p.equipe === time));
  const stCls = s => ({ "Concluído": "ok", "Em desenvolvimento": "dev", "Em reconstrução": "warn", "Futuro": "" }[s] ?? "");

  const palco = p => {
    if (p.modelo) { carregarModelViewer();
      return `<model-viewer src="${esc(p.modelo)}" poster="${esc(p.imagem)}" alt="Modelo 3D do ${esc(p.nome)}" camera-controls auto-rotate auto-rotate-delay="0" rotation-per-second="18deg" interaction-prompt="none" shadow-intensity="1" exposure="1.1" ${p.orbita ? `camera-orbit="${esc(p.orbita)}"` : ""}></model-viewer>
        <span class="sel-hint">${ic("arrow")} Arraste para girar · role para aproximar</span>`; }
    return `<img class="${p.contain ? "contain" : ""}" src="${esc(p.imagem)}" alt="${esc(p.nome)}">`;
  };

  const mostra = (lista, id) => {
    const i = Math.max(0, lista.findIndex(p => p.id === id));
    const p = lista[i]; atual = p.id;
    history.replaceState(null, "", location.pathname + location.search + "#" + p.id);
    const c = corEquipe(p.equipe);
    $("sel-stage").className = `sel-stage ${c}`;
    $("sel-stage").innerHTML = `
      <div class="sel-info">
        <div class="row"><span class="badge ${c}">${nomeEquipe(p.equipe)}</span><span class="badge">${esc(p.periodo)}</span><span class="badge ${stCls(p.status)}">${esc(p.status)}</span></div>
        <h2 class="sel-nome">${esc(p.nome)}</h2>
        <p class="sel-tipo">${esc(p.tipo)}</p>
        ${p.specs ? `<dl class="sel-specs">${p.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
        <p>${esc(p.resumo)}</p>
        ${p.marcos.length ? `<ul class="sel-marcos">${p.marcos.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <div class="sel-acoes">
          ${p.video ? `<button class="btn btn-ghost" data-video="${esc(p.video)}" data-titulo="${esc(p.nome)}">${ic("play")} Assistir ao lançamento</button>` : ""}
          ${p.id === "hemera-v1" ? `<a class="btn btn-red" href="${esc(SITE.doacao.url)}" target="_blank" rel="noopener">${ic("heart")} Ajude a reconstruir</a>` : ""}
        </div>
      </div>
      <div class="sel-view">
        <div class="sel-plat"></div>
        ${palco(p)}
        <button class="sel-nav prev" aria-label="Projeto anterior">${ic("arrow")}</button>
        <button class="sel-nav next" aria-label="Próximo projeto">${ic("arrow")}</button>
        <span class="sel-count">${String(i + 1).padStart(2, "0")} / ${String(lista.length).padStart(2, "0")}</span>
      </div>`;
    $("sel-stage").querySelector(".prev").onclick = () => mostra(lista, lista[(i - 1 + lista.length) % lista.length].id);
    $("sel-stage").querySelector(".next").onclick = () => mostra(lista, lista[(i + 1) % lista.length].id);
    $("roster").querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.id === p.id));
    $("roster").querySelector(".on")?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const desenha = () => {
    $("anos").innerHTML = [["todos", "Todos"], ...anos.map(a => [String(a), String(a)])].map(([v, t]) => `<button class="chip ${v === ano ? "on" : ""}" data-a="${v}">${t}</button>`).join("");
    $("times").innerHTML = [["todas", "Todas", ""], ["rockets", "Rockets", "r"], ["sats", "Sats", "b"]].map(([v, t, c]) => `<button class="chip ${c} ${v === time ? "on" : ""}" data-t="${v}">${t}</button>`).join("");
    const lista = filtrados();
    $("conquistas").innerHTML = linhaDoTempo(CONQUISTAS.filter(c => (ano === "todos" || String(c.ano) === ano) && (time === "todas" || c.equipe === time || c.equipe === "geral")));
    if (!lista.length) { $("roster").innerHTML = ""; $("sel-stage").className = "sel-stage"; $("sel-stage").innerHTML = `<div class="notice">Nenhum projeto com esse filtro.</div>`; revelar(); return; }
    $("roster").innerHTML = lista.map(p => `<button class="${corEquipe(p.equipe)}" data-id="${p.id}" title="${esc(p.nome)}">
      <span class="ri"><img src="${esc(p.imagem)}" alt="" loading="lazy" style="${p.contain ? "object-fit:contain" : ""}">${p.modelo ? `<i class="r3d">3D</i>` : ""}</span>
      <b>${esc(p.nome)}</b><small>${esc(p.periodo)}</small></button>`).join("");
    mostra(lista, lista.some(p => p.id === atual) ? atual : lista[0].id);
    revelar();
  };

  $("roster").onclick = e => { const b = e.target.closest("button"); if (b) mostra(filtrados(), b.dataset.id); };
  document.addEventListener("keydown", e => {
    if (e.target.closest("input, textarea, model-viewer") || !["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const l = filtrados(); if (!l.length) return;
    const i = l.findIndex(p => p.id === atual);
    mostra(l, l[(i + (e.key === "ArrowRight" ? 1 : -1) + l.length) % l.length].id);
  });
  $("anos").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; ano = b.dataset.a; setParam("ano", ano === "todos" ? "" : ano); desenha(); };
  $("times").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; time = b.dataset.t; setParam("equipe", time === "todas" ? "" : time); desenha(); };
  desenha();
}

function parceiros() {
  $("doe").innerHTML = `<div class="container">${doacaoHTML()}</div>`;
  $("parceiros").innerHTML = NIVEIS.map((nv, i) => {
    const lista = PARCEIROS.filter(p => p.nivel === i);
    if (!lista.length) return "";
    return `<section class="tier tier-${i} reveal"><h2>${esc(nv.nome)}</h2><p class="desc">${esc(nv.desc)}</p><div class="logos">${lista.map(p => {
      const img = `<img src="img/parceiros/${esc(p.logo)}" alt="${esc(p.nome)}" loading="lazy">`;
      return p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener" title="${esc(p.nome)}">${img}</a>` : `<div title="${esc(p.nome)}">${img}</div>`; }).join("")}</div></section>`;
  }).join("");
}

function noticias() {
  $("lista").innerHTML = POSTS.map(cardNoticia).join("");
  $("videos").innerHTML = videosHTML(VIDEOS);
  $("redes").innerHTML = redesHTML();
}

function post() {
  const p = POSTS.find(x => x.slug === param("p"));
  if (!p) { $("artigo").innerHTML = `<a class="back" href="noticias.html">${ic("back")} Voltar para notícias</a><h1>Notícia não encontrada</h1>`; return; }
  document.title = `${p.titulo} — Minerva Aeroespacial`;
  $("artigo").innerHTML = `<a class="back" href="noticias.html">${ic("back")} Voltar para notícias</a>
    <span class="eyebrow ${corEquipe(p.equipe) === "b" ? "blue" : "red"}">${quando(p.data)} · ${nomeEquipe(p.equipe)}</span>
    <h1 style="font-size:clamp(2rem,4.5vw,3.2rem)">${esc(p.titulo)}</h1><p class="lead">${esc(p.resumo)}</p>
    <div class="cover"><img src="${esc(p.imagem)}" alt=""></div>${p.conteudo}
    ${p.links?.length ? `<div class="btns">${p.links.map(([t, u], i) => `<a class="btn ${i === 0 ? "btn-red" : "btn-ghost"}" href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ${ic("ext")}</a>`).join("")}</div>` : ""}`;
  const outras = POSTS.filter(x => x !== p).slice(0, 3);
  $("outras").innerHTML = outras.map(cardNoticia).join("");
}

function contato() {
  $("infos").innerHTML = [
    ["mail", "Minerva Rockets", `<a href="mailto:${SITE.emailRockets}">${SITE.emailRockets}</a>`],
    ["mail", "Minerva Sats", `<a href="mailto:${SITE.emailSats}">${SITE.emailSats}</a>`],
    ...SITE.redes.map(r => [r.icone, `${r.rede} — ${r.nome}`, `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.seguidores)}</a>`]),
    ["pin", "Endereço", SITE.endereco.map(esc).join("<br>")],
  ].map(([i, t, v]) => `<div class="info"><div class="ico">${ic(i)}</div><div><h4>${t}</h4><p>${v}</p></div></div>`).join("");
  const assunto = param("assunto");
  if (assunto && $("form").assunto.querySelector(`option[value="${assunto}"]`)) $("form").assunto.value = assunto;
  $("form").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    const para = f.equipe.value === "sats" ? SITE.emailSats : SITE.emailRockets;
    const titulo = `[${f.assunto.options[f.assunto.selectedIndex].text}] ${f.nome.value}`;
    const corpo = `${f.msg.value}\n\n— ${f.nome.value}${f.org.value ? " (" + f.org.value + ")" : ""}\n${f.email.value}`;
    location.href = `mailto:${para}?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(corpo)}`;
    $("notice").style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  layout();
  interacoes();
  ({ home, rockets, sats, subteams, equipe, projetos, parceiros, noticias, post, contato })[document.body.dataset.page]?.();
  revelar();
});
