/* Rede da Minerva Aeroespacial — visualização (usado só em aeroespacial.html)
   Grafo de relações, não organograma: cada nó é único e ligações cruzadas aparecem
   sozinhas quando dois nós visíveis estão conectados.
   Regra de visibilidade: aparece o centro, todo nó "expandido" e os vizinhos de cada nó expandido.
   Clicar num nó o seleciona e o expande; clicar de novo no nó selecionado o recolhe. */
/* versão 2D: usada quando o navegador não tem WebGL ou quando o visitante escolhe "Ver em 2D" */
window.Rede2D = function (raiz) {
  if (!raiz || !window.d3 || typeof REDE === "undefined") return;

  /* ---------- tipos, cores e tamanhos ---------- */
  const TIPOS = {
    centro: { nome: "Minerva", plural: "Minerva", r: 34, k: "var(--c-centro)" },
    nucleo: { nome: "Núcleo", plural: "Núcleos", r: 24 },
    hub: { nome: "Universo", plural: "Universos", r: 21 },
    subsistema: { nome: "Subsistema", plural: "Subsistemas", r: 15, k: "var(--c-sub)" },
    setor: { nome: "Setor administrativo", plural: "Setores administrativos", r: 15, k: "var(--c-adm)" },
    projeto: { nome: "Projeto", plural: "Projetos", r: 13, k: "var(--c-proj)" },
    pessoa: { nome: "Pessoa", plural: "Pessoas", r: 7, k: "var(--c-pessoa)" },
    conquista: { nome: "Conquista", plural: "Conquistas", r: 6, k: "var(--c-conq)" },
    curso: { nome: "Curso", plural: "Cursos", r: 13, k: "var(--c-curso)" },
  };
  const COR = { orient: "var(--c-orient)", dir: "var(--c-dir)", adm: "var(--c-adm)", r: "var(--c-r)", b: "var(--c-b)", proj: "var(--c-proj)", conq: "var(--c-conq)", curso: "var(--c-curso)" };
  const cor = n => n.tipo === "pessoa" ? (n.sub === "professor" ? COR.orient : TIPOS.pessoa.k) : (n.tipo === "nucleo" || n.tipo === "hub") ? COR[n.cor] : TIPOS[n.tipo].k;
  const raio = n => n.tipo === "pessoa" ? (n.sub === "professor" ? 11 : n.lider ? 9.5 : 7) : TIPOS[n.tipo].r;
  const classeTam = n => ["centro", "nucleo", "hub"].includes(n.tipo) ? "big" : ["subsistema", "setor", "projeto", "curso"].includes(n.tipo) || n.sub === "professor" ? "mid" : "small";
  const rotulo = n => n.tipo === "conquista" ? (n.label.length > 46 ? n.label.slice(0, 44) + "…" : n.label) : n.label;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- dados ---------- */
  const N = new Map(REDE.nodes.map(n => [n.id, n]));
  const LINKS = REDE.links.filter(l => N.has(l.source) && N.has(l.target));
  const viz = new Map(REDE.nodes.map(n => [n.id, []]));
  LINKS.forEach(l => { viz.get(l.source).push({ id: l.target, rel: l.rel }); viz.get(l.target).push({ id: l.source, rel: l.rel }); });

  /* ---------- estado ---------- */
  const expandidos = new Set(["minerva"]);   // sempre: centro + as últimas seleções (cadeia)
  const MAX_CADEIA = 3; let cadeia = [];
  const sincronizar = () => { expandidos.clear(); expandidos.add("minerva"); cadeia.forEach(id => expandidos.add(id)); };
  const tiposOcultos = new Set();
  let selecionado = "minerva";
  const trilha = ["minerva"];

  const visiveis = () => {
    const v = new Set(["minerva"]);
    if (selecionado) caminho(selecionado).forEach(id => v.add(id));   // mantém o nó ligado ao centro
    expandidos.forEach(id => { v.add(id); viz.get(id).forEach(x => v.add(x.id)); });
    if (selecionado) v.add(selecionado);
    return [...v].filter(id => id === "minerva" || expandidos.has(id) || id === selecionado || !tiposOcultos.has(N.get(id).tipo));
  };

  /* ---------- montagem do HTML ---------- */
  const tiposPresentes = [...new Set(REDE.nodes.map(n => n.tipo))].filter(t => t !== "centro" && t !== "nucleo" && t !== "hub");
  raiz.innerHTML = `
    <div class="rede-tools">
      <div class="rede-busca"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
        <input id="rd-q" type="search" placeholder="Buscar pessoa, projeto, subsistema…" autocomplete="off" aria-label="Buscar na rede" role="combobox" aria-expanded="false" aria-controls="rd-sug">
        <div class="rede-sug" id="rd-sug" role="listbox"></div></div>
      <button class="rede-btn" type="button" id="rd-geral">Visão geral</button>
      <button class="rede-btn" type="button" id="rd-centro">Centralizar</button>
      <button class="rede-btn" type="button" id="rd-recolher">Recolher tudo</button>
    </div>
    <div class="rede-filtros" role="group" aria-label="Mostrar ou ocultar tipos de nó">
      ${tiposPresentes.map(t => `<button class="rede-filtro" type="button" data-t="${t}" aria-pressed="true" style="--k:${TIPOS[t].k}"><i></i>${TIPOS[t].plural}</button>`).join("")}
      <span class="rede-filtro" style="--k:var(--c-r);cursor:default"><i></i>Rockets</span>
      <span class="rede-filtro" style="--k:var(--c-b);cursor:default"><i></i>Sats</span>
      <span class="rede-filtro" style="--k:var(--c-orient);cursor:default"><i></i>Orientação</span>
      <span class="rede-filtro" style="--k:var(--c-dir);cursor:default"><i></i>Diretoria</span>
    </div>
    <div class="rede-box">
      <div class="rede-stage" id="rd-stage"><svg id="rd-svg" role="img" aria-label="Rede interativa da Minerva Aeroespacial"></svg>
        <div class="rede-trilha" id="rd-trilha"></div>
        <div class="rede-dica">Clique para abrir as conexões · clique de novo para recolher · arraste e use o zoom</div>
        <div class="rede-zoom"><button type="button" id="rd-zin" aria-label="Aproximar">+</button><button type="button" id="rd-zout" aria-label="Afastar">−</button></div>
      </div>
      <aside class="rede-painel" id="rd-painel" aria-live="polite"></aside>
    </div>`;

  const svg = d3.select("#rd-svg"), stage = document.getElementById("rd-stage");
  const camada = svg.append("g"), gLinks = camada.append("g"), gNodes = camada.append("g");
  const zoom = d3.zoom().scaleExtent([0.25, 3]).on("zoom", e => camada.attr("transform", e.transform));
  svg.call(zoom).on("dblclick.zoom", null);
  const tam = () => ({ w: stage.clientWidth, h: stage.clientHeight });

  /* ---------- simulação ---------- */
  const raioAnel = () => { const k = viz.get(selecionado).length; return Math.max(150, Math.min(260, k * (k > 18 ? 5.5 : 11))); };
  const dist = l => {
    const a = l.source.tipo, b = l.target.tipo;
    if ((l.source.id === selecionado || l.target.id === selecionado) && selecionado !== "minerva") return raioAnel();
    if (a === "centro" || b === "centro") return 210;
    if (a === "pessoa" || b === "pessoa") return 58;
    if (a === "conquista" || b === "conquista") return 52;
    return 105;
  };
  /* força que espalha os vizinhos do nó selecionado num anel ao redor dele */
  function forcaAnel(alpha) {
    const s = N.get(selecionado); if (!s || s.x == null) return;
    const ids = viz.get(selecionado).map(x => x.id).filter(id => N.get(id).x != null && vis.has(id));
    const duplo = ids.length > 18;
    const R = raioAnel();
    ids.forEach((id, i) => {
      const n = N.get(id); if (n === s || id === "minerva") return;
      const ang = (i / ids.length) * 2 * Math.PI - Math.PI / 2, r = R + (duplo && i % 2 ? 85 : 0);
      n.vx += (s.x + r * Math.cos(ang) - n.x) * 0.16 * alpha;
      n.vy += (s.y + r * Math.sin(ang) - n.y) * 0.16 * alpha;
    });
  }
  /* posição fixa dos núcleos ao redor do centro: orientação no alto, equipes técnicas embaixo,
     diretoria e setor administrativo dos lados — o ecossistema se lê de cima para baixo */
  const ANG = { orientacao: -90, diretoria: -25, rockets: 35, conquistas: 75, projetos: 110, sats: 150, administrativo: 205, cursos: -155 };
  const ancorado = n => false;
  function ancoras(alpha) {
    Object.entries(ANG).forEach(([id, g]) => { const n = N.get(id); if (!n || n.x == null || !vis.has(id) || n.fx != null) return;
      const a = g * Math.PI / 180, r = 235; n.vx += (r * Math.cos(a) - n.x) * 0.3 * alpha; n.vy += (r * Math.sin(a) - n.y) * 0.3 * alpha; });
  }
  const sim = d3.forceSimulation()
    .force("link", d3.forceLink().id(d => d.id).distance(dist).strength(0.5))
    .force("carga", d3.forceManyBody().strength(d => d.tipo === "pessoa" || d.tipo === "conquista" ? -70 : -420).distanceMax(600))
    .force("colisao", d3.forceCollide().radius(d => raio(d) + (classeTam(d) === "small" ? 4 : 14)))
    .force("x", d3.forceX(0).strength(0.015)).force("y", d3.forceY(0).strength(0.015))
    .force("anel", forcaAnel)
    .force("ancora", ancoras)
    .alphaDecay(0.03);
  const minerva = N.get("minerva"); minerva.fx = 0; minerva.fy = 0;

  let vis = new Set(), selLink, selNode;
  function desenhar() {
    const ids = visiveis(); vis = new Set(ids);
    // novos nós nascem perto do nó que os revelou
    const s = N.get(selecionado) || minerva;
    // novos nós nascem perto de um vizinho que já tem posição (em ordem de caminho, para a busca)
    const ordem = [...caminho(selecionado), ...ids];
    ordem.forEach(id => { const n = N.get(id); if (!vis.has(id) || n.x != null) return;
      const pai = viz.get(id).map(x => N.get(x.id)).find(m => m.x != null && vis.has(m.id)) || s;
      const a = Math.random() * 2 * Math.PI, d = pai.id === "minerva" ? 120 : 70;
      n.x = (pai.x || 0) + Math.cos(a) * d; n.y = (pai.y || 0) + Math.sin(a) * d; });
    const nodes = ids.map(id => N.get(id));
    const links = LINKS.filter(l => vis.has(l.source.id || l.source) && vis.has(l.target.id || l.target)).map(l => l);

    selLink = gLinks.selectAll("line").data(links, l => (l.source.id || l.source) + "|" + (l.target.id || l.target));
    selLink.exit().remove();
    selLink = selLink.enter().append("line").attr("class", "rd-link").merge(selLink);

    selNode = gNodes.selectAll("g.rd-node").data(nodes, d => d.id);
    selNode.exit().transition().duration(250).style("opacity", 0).remove();
    const ent = selNode.enter().append("g").attr("class", d => `rd-node ${classeTam(d)}`).attr("tabindex", 0).attr("role", "button")
      .attr("aria-label", d => `${d.label} (${TIPOS[d.tipo].nome})`).style("--k", cor).style("opacity", 0);
    ent.append("circle").attr("class", "ring").attr("r", d => raio(d) + 5);
    ent.append("circle").attr("class", "core").attr("r", raio).attr("fill", cor);
    ent.filter(d => d.tipo === "centro").append("image").attr("href", "img/logos/minerva-aeroespacial.webp").attr("x", -26).attr("y", -19).attr("width", 52).attr("height", 38);
    ent.append("text").attr("text-anchor", "middle").attr("dy", d => raio(d) + (classeTam(d) === "big" ? 20 : 15)).text(rotulo);
    ent.append("title").text(d => d.label);
    ent.on("click", (e, d) => { e.stopPropagation(); clicar(d.id); })
      .on("keydown", (e, d) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); clicar(d.id); } })
      .call(d3.drag().on("start", (e, d) => { if (!e.active) sim.alphaTarget(0.2).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => { if (!e.active) sim.alphaTarget(0); if (d.id !== "minerva" && d.id !== selecionado) { d.fx = null; d.fy = null; } }));
    ent.transition().duration(350).style("opacity", 1);
    selNode = ent.merge(selNode);

    sim.nodes(nodes); sim.force("link").links(links); sim.force("link").distance(dist); sim.alpha(0.9).restart();
    destacar();
  }
  sim.on("tick", () => {
    selLink?.attr("x1", l => l.source.x).attr("y1", l => l.source.y).attr("x2", l => l.target.x).attr("y2", l => l.target.y);
    selNode?.attr("transform", d => `translate(${d.x},${d.y})`);
    const s = N.get(selecionado);
    selNode?.filter(".small.show").select("text:not(.plus)").each(function (d) {
      if (d.id === selecionado || !s) return;
      const dx = d.x - s.x, dy = d.y - s.y, dd = Math.hypot(dx, dy) || 1, r = raio(d) + 5;
      d3.select(this).attr("text-anchor", dx >= 0 ? "start" : "end").attr("x", dx / dd * r).attr("dy", dy / dd * r + 4);
    });
  });

  function destacar() {
    const vizSel = new Set(viz.get(selecionado).map(x => x.id)); vizSel.add(selecionado);
    selNode.classed("sel", d => d.id === selecionado).classed("exp", d => expandidos.has(d.id) && d.id !== selecionado)
      .classed("show", d => vizSel.has(d.id)).classed("dim", d => !vizSel.has(d.id) && !expandidos.has(d.id) && d.id !== "minerva");
    selLink.classed("hl", l => l.source.id === selecionado || l.target.id === selecionado)
      .classed("dim", l => !(l.source.id === selecionado || l.target.id === selecionado));
    selNode.select(".plus").remove();
    // indica quantas conexões ainda estão escondidas
    selNode.filter(d => !expandidos.has(d.id) && viz.get(d.id).some(x => !vis.has(x.id)) && classeTam(d) !== "small")
      .append("text").attr("class", "plus").attr("text-anchor", "middle").attr("dy", 4).text("+");
  }

  /* ---------- ações ---------- */
  function caminho(alvo) { // menor caminho a partir do centro (BFS), para a busca ficar conectada
    const ant = new Map([["minerva", null]]), fila = ["minerva"];
    while (fila.length) { const a = fila.shift(); if (a === alvo) break; viz.get(a).forEach(x => { if (!ant.has(x.id)) { ant.set(x.id, a); fila.push(x.id); } }); }
    const c = []; let p = alvo; while (p) { c.unshift(p); p = ant.get(p); } return c;
  }
  function selecionar(id, { expandir = true, centrar = true } = {}) {
    // o nó selecionado fica parado para servir de eixo do anel; o anterior volta a se mover
    const ant = N.get(selecionado); if (ant && ant.id !== "minerva" && !ancorado(ant)) { ant.fx = null; ant.fy = null; }
    const nv = N.get(id), novo = !vis.has(id); if (nv && !novo && nv.x != null && id !== "minerva") { nv.fx = nv.x; nv.fy = nv.y; }
    selecionado = id;
    if (expandir && id !== "minerva") { cadeia = cadeia.filter(x => x !== id); cadeia.push(id); if (cadeia.length > MAX_CADEIA) cadeia = cadeia.slice(-MAX_CADEIA); }
    sincronizar();
    if (trilha[trilha.length - 1] !== id) { trilha.push(id); if (trilha.length > 7) trilha.shift(); }
    desenhar(); painel(id); desenharTrilha();
    if (novo && id !== "minerva") setTimeout(() => { if (selecionado === id) { nv.fx = nv.x; nv.fy = nv.y; } }, 900);
    if (centrar) { setTimeout(() => centrar_(id), 350); setTimeout(() => centrar_(id), 1300); }
  }
  function clicar(id) {
    if (id === selecionado && expandidos.has(id) && id !== "minerva") { cadeia = cadeia.filter(x => x !== id); sincronizar(); desenhar(); painel(id); return; }
    selecionar(id);
  }
  function centrar_(id, k) {
    const n = N.get(id); if (!n || n.x == null) return; const { w, h } = tam();
    const viz_ = viz.get(id).length, alcance = id === "minerva" ? 300 : raioAnel() + (viz_ > 18 ? 130 : 70);
    const s = k || Math.max(0.45, Math.min(1.1, (Math.min(w, h) / 2 - 20) / alcance));
    svg.transition().duration(650).call(zoom.transform, d3.zoomIdentity.translate(w / 2 - n.x * s, h / 2 - n.y * s).scale(s));
  }
  function visaoGeral() {
    REDE.nodes.forEach(n => { if (n.id !== "minerva") { n.fx = null; n.fy = null; } });
    cadeia = []; sincronizar(); selecionado = "minerva"; trilha.length = 0; trilha.push("minerva");
    desenhar(); painel("minerva"); desenharTrilha();
    const { w, h } = tam(); svg.transition().duration(650).call(zoom.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(w < 600 ? 0.7 : 1));
  }

  /* ---------- painel ---------- */
  const nomeTipo = n => n.tipo === "pessoa" && n.sub === "professor" ? "Professor orientador" : n.tipo === "nucleo" ? "Núcleo do ecossistema" : TIPOS[n.tipo].nome;
  function painel(id) {
    const n = N.get(id), P = document.getElementById("rd-painel");
    const campos = [];
    if (n.tipo === "pessoa") {
      campos.push(["Função", n.cargo || (n.ciclos ? "Integrante" : "")]);
      if (n.depto) campos.push(["Departamento", n.depto]);
      if (n.sub !== "professor") {
        campos.push(["Ciclos", (n.ciclos || []).join(", ")]);
        campos.push(["Curso", n.curso], ["Período", n.periodo]);
      }
    }
    if (n.tipo === "projeto") campos.push(["Período", n.periodo], ["Situação", n.status], ["Tipo", n.tipoProj], ...(n.specs || []).slice(0, 3));
    if (n.tipo === "conquista") campos.push(["Ano", n.ano]);
    const grupos = {};
    viz.get(id).forEach(x => { const m = N.get(x.id); const g = m.tipo === "pessoa" && m.sub === "professor" ? "professor" : m.tipo; (grupos[g] ||= []).push({ m, rel: x.rel }); });
    const ordem = ["centro", "nucleo", "hub", "professor", "setor", "subsistema", "projeto", "curso", "pessoa", "conquista"];
    const nomesG = { centro: "Minerva", nucleo: "Núcleos", hub: "Universos", professor: "Orientadores", setor: "Setores administrativos", subsistema: "Subsistemas", projeto: "Projetos", curso: "Cursos", pessoa: "Pessoas", conquista: "Conquistas" };
    const relTxt = (m, rel) => rel && !["integrante", "integra", "portfólio", "citado", "projeto da equipe", "subequipe", "setor", "curso"].includes(rel) && !/^\d{4}$/.test(rel) ? `<em>· ${esc(rel)}</em>` : "";
    P.innerHTML = `
      <span class="rp-tipo" style="--k:${cor(n)}"><i></i>${esc(nomeTipo(n))}</span>
      <h3>${esc(n.tipo === "conquista" ? `Conquista de ${n.ano}` : n.label)}</h3>
      ${n.tipo === "conquista" ? `<p class="rp-desc">${esc(n.label)}</p>` : ""}
      ${n.imagem ? `<img class="rp-img" src="${esc(n.imagem)}" alt="" loading="lazy">` : n.foto ? `<img class="rp-img" src="${esc(n.foto)}" alt="" loading="lazy" style="aspect-ratio:1/1;width:120px">` : ""}
      ${n.desc ? `<p class="rp-desc">${esc(n.desc)}</p>` : ""}${n.bio ? `<p class="rp-desc">${esc(n.bio)}</p>` : ""}
      ${campos.length ? `<dl class="rp-campos">${campos.map(([a, b]) => `<dt>${esc(a)}</dt><dd class="${b ? "" : "na"}">${b ? esc(b) : "não cadastrado"}</dd>`).join("")}</dl>` : ""}
      ${n.tipo === "pessoa" && n.sub !== "professor" ? `<p class="rede-nota">${n.lattes ? `<a href="${esc(n.lattes)}" target="_blank" rel="noopener">Currículo Lattes ↗</a>` : "Currículo Lattes: não cadastrado."}</p>` : ""}
      ${ordem.filter(g => grupos[g]).map(g => `<div class="rp-grupo"><h4>${nomesG[g]} <span>${grupos[g].length}</span></h4><div class="rp-chips">
        ${grupos[g].sort((a, b) => (b.m.lider ? 1 : 0) - (a.m.lider ? 1 : 0) || a.m.label.localeCompare(b.m.label, "pt")).map(({ m, rel }) => `<button type="button" data-id="${m.id}" style="--k:${cor(m)}" title="${esc(m.label)}"><i></i><span>${esc(rotulo(m))}</span>${relTxt(m, rel)}</button>`).join("")}
      </div></div>`).join("")}
      <div class="rp-acoes">${id !== "minerva" ? `<button class="rede-btn" type="button" data-acao="toggle">${expandidos.has(id) ? "Recolher conexões" : "Mostrar conexões"}</button>` : ""}<button class="rede-btn" type="button" data-acao="centro">Centralizar</button></div>`;
    P.scrollTop = 0;
  }
  document.getElementById("rd-painel").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.id) selecionar(b.dataset.id);
    else if (b.dataset.acao === "toggle") clicar(selecionado === b.dataset.id ? selecionado : selecionado);
    else if (b.dataset.acao === "centro") centrar_(selecionado);
  });

  function desenharTrilha() {
    document.getElementById("rd-trilha").innerHTML = trilha.map(id => `<button type="button" data-id="${id}">${esc(rotulo(N.get(id)).slice(0, 34))}</button>`).join("");
  }
  document.getElementById("rd-trilha").addEventListener("click", e => { const b = e.target.closest("button"); if (b) selecionar(b.dataset.id); });

  /* ---------- busca ---------- */
  const q = document.getElementById("rd-q"), sug = document.getElementById("rd-sug");
  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  let resultados = [], ativo = 0;
  const fecharSug = () => { sug.classList.remove("on"); q.setAttribute("aria-expanded", "false"); };
  q.addEventListener("input", () => {
    const t = norm(q.value.trim()); if (t.length < 2) { fecharSug(); return; }
    resultados = REDE.nodes.filter(n => norm(n.label).includes(t)).sort((a, b) => norm(a.label).indexOf(t) - norm(b.label).indexOf(t)).slice(0, 12); ativo = 0;
    sug.innerHTML = resultados.length ? resultados.map((n, i) => `<button type="button" role="option" data-id="${n.id}" class="${i === 0 ? "sel" : ""}"><span style="color:${cor(n)}">●</span>${esc(rotulo(n))}<small>${esc(nomeTipo(n))}</small></button>`).join("")
      : `<button type="button" disabled>Nada encontrado</button>`;
    sug.classList.add("on"); q.setAttribute("aria-expanded", "true");
  });
  q.addEventListener("keydown", e => {
    if (!sug.classList.contains("on") || !resultados.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); ativo = (ativo + (e.key === "ArrowDown" ? 1 : -1) + resultados.length) % resultados.length;
      [...sug.children].forEach((b, i) => b.classList.toggle("sel", i === ativo)); }
    if (e.key === "Enter") { e.preventDefault(); escolher(resultados[ativo].id); }
    if (e.key === "Escape") fecharSug();
  });
  sug.addEventListener("click", e => { const b = e.target.closest("button[data-id]"); if (b) escolher(b.dataset.id); });
  document.addEventListener("click", e => { if (!e.target.closest(".rede-busca")) fecharSug(); });
  function escolher(id) { fecharSug(); q.value = ""; selecionar(id); }

  /* ---------- filtros e botões ---------- */
  raiz.querySelectorAll("button.rede-filtro").forEach(b => b.addEventListener("click", () => {
    const t = b.dataset.t, on = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!on)); on ? tiposOcultos.add(t) : tiposOcultos.delete(t); desenhar();
  }));
  document.getElementById("rd-geral").onclick = visaoGeral;
  document.getElementById("rd-centro").onclick = () => centrar_(selecionado);
  document.getElementById("rd-recolher").onclick = () => { cadeia = selecionado !== "minerva" ? [selecionado] : []; sincronizar(); desenhar(); painel(selecionado); };
  document.getElementById("rd-zin").onclick = () => svg.transition().duration(300).call(zoom.scaleBy, 1.3);
  document.getElementById("rd-zout").onclick = () => svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.3);
  svg.on("click", () => fecharSug());

  /* ---------- início ---------- */
  const { w, h } = tam();
  svg.call(zoom.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(w < 600 ? 0.7 : 1));
  desenhar(); painel("minerva"); desenharTrilha();
  if (location.hash.startsWith("#rede-")) { const id = decodeURIComponent(location.hash.slice(6)); if (N.has(id)) setTimeout(() => selecionar(id), 300); }
  window.REDE_API = { selecionar, visaoGeral, estado: () => ({ selecionado, expandidos: [...expandidos], visiveis: [...vis] }) };
};
