/* Rede da Minerva Aeroespacial — montagem dos dados (usado só em aeroespacial.html)
   Tudo vem de dados.js (MEMBROS, SUBTEAMS, AREAS, PROJETOS, SECOES, CONQUISTAS, SITE).
   Nenhum vínculo é inventado: cada ligação abaixo cita de onde vem.

   Para completar a rede com cursos, períodos, Lattes, fotos e apresentações,
   preencha REDE_EXTRA com o nome exatamente como está em dados.js, por exemplo:
     "Willian Rocha": { curso: "Engenharia de Produção", periodo: "6º", lattes: "http://lattes.cnpq.br/...", foto: "img/equipe/willian.webp", bio: "..." }
   Se houver curso, o nó do curso é criado automaticamente e ligado à pessoa. */
const REDE_EXTRA = {};

const REDE = (() => {
  const nodes = new Map(), links = [], chave = new Set();
  const slug = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const no = (id, o) => { if (!nodes.has(id)) nodes.set(id, { id, ...o }); else Object.assign(nodes.get(id), Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined))); return id; };
  const liga = (a, b, rel) => { const k = a < b ? a + "|" + b : b + "|" + a; if (a === b || chave.has(k)) return; chave.add(k); links.push({ source: a, target: b, rel }); };

  const ATUAL = CICLOS[0];
  const pessoasAtuais = MEMBROS[ATUAL.id];

  /* ---------- núcleo do ecossistema ---------- */
  no("minerva", { tipo: "centro", label: "Minerva Aeroespacial", desc: `${SITE.grupo}. Iniciativa estudantil da Escola Politécnica da UFRJ, fundada em ${SITE.fundacao}. Reúne a Minerva Rockets e a Minerva Sats, com orientação de professores, uma diretoria comum e um setor administrativo que atende as duas equipes.` });
  no("orientacao", { tipo: "nucleo", cor: "orient", label: "Orientação", desc: "Professores da UFRJ que orientam academicamente a Minerva Aeroespacial e acompanham as duas equipes." });
  no("diretoria", { tipo: "nucleo", cor: "dir", label: "Diretoria", desc: (SUBTEAMS.find(s => s.id === "diretoria") || {}).desc || "Presidência, direção e gerência de projetos." });
  no("administrativo", { tipo: "nucleo", cor: "adm", label: "Setor Administrativo", desc: "Operações e Logística, Marketing, Gestão e Financeiro: as áreas que mantêm a Minerva Rockets e a Minerva Sats funcionando." });
  no("rockets", { tipo: "nucleo", cor: "r", label: "Minerva Rockets", desc: "Equipe que projeta, fabrica e lança foguetes de sondagem." });
  no("sats", { tipo: "nucleo", cor: "b", label: "Minerva Sats", desc: "Equipe que desenvolve nanossatélites do padrão CubeSat." });
  no("projetos", { tipo: "hub", cor: "proj", label: "Projetos", desc: `Os ${PROJETOS.length} projetos do portfólio da Minerva, das duas equipes, atuais e históricos.` });
  no("conquistas", { tipo: "hub", cor: "conq", label: "Conquistas", desc: "Resultados em competições e marcos da equipe, ligados aos projetos citados em cada um." });
  ["orientacao", "diretoria", "administrativo", "rockets", "sats", "projetos", "conquistas"].forEach(n => liga("minerva", n, "integra"));
  liga("orientacao", "rockets", "orienta"); liga("orientacao", "sats", "orienta");          // orientadores da equipe (site.orientadores)
  liga("diretoria", "rockets", "conduz"); liga("diretoria", "sats", "conduz");               // descrição da subequipe "diretoria" em dados.js
  liga("administrativo", "rockets", "atende"); liga("administrativo", "sats", "atende");     // setor administrativo comum às duas equipes

  /* ---------- orientadores ---------- */
  SITE.orientadores.forEach(o => { const id = "p-" + slug(o.nome);
    no(id, { tipo: "pessoa", sub: "professor", label: o.nome, cargo: "Professor orientador", equipe: "Orientação", depto: o.depto });
    liga("orientacao", id, "orienta"); });

  /* ---------- subequipes: técnicas (subsistemas) e administrativas (setores) ---------- */
  const equipeNo = { rockets: "rockets", sats: "sats", adm: "administrativo" };
  SUBTEAMS.filter(s => s.id !== "diretoria").forEach(s => {
    no("s-" + s.id, { tipo: s.equipe === "adm" ? "setor" : "subsistema", cor: s.equipe === "adm" ? "adm" : s.equipe === "rockets" ? "r" : "b",
      label: s.equipe === "adm" ? s.nome : `${s.nome} · ${s.equipe === "rockets" ? "Rockets" : "Sats"}`, desc: s.desc, equipe: s.equipe });
    liga(equipeNo[s.equipe], "s-" + s.id, s.equipe === "adm" ? "setor" : "subequipe");
  });

  /* ---------- pessoas do ciclo atual ---------- */
  const pessoa = (m, ciclo) => { const id = "p-" + slug(m.nome);
    no(id, { tipo: "pessoa", label: m.nome, ciclos: [...new Set([...(nodes.get(id)?.ciclos || []), ciclo])] }); return id; };
  pessoasAtuais.forEach(m => {
    const id = pessoa(m, ATUAL.nome);
    no(id, { cargo: m.cargo, lider: m.lider, area: m.area });
    if (m.area === "diretoria") {
      liga("diretoria", id, m.cargo);
      if (/Rockets/.test(m.cargo)) liga(id, "rockets", m.cargo);
      if (/Sats/.test(m.cargo)) liga(id, "sats", m.cargo);
      if (/Administrativ/.test(m.cargo)) liga(id, "administrativo", m.cargo);
    } else if (nodes.has("s-" + m.area)) {
      liga("s-" + m.area, id, m.lider ? m.cargo : "integrante");
    }
  });

  /* ---------- equipe do Hemera v.1 (ciclo 2026.1, área "hemera" em dados.js) ---------- */
  const cicloHemera = CICLOS.find(c => (MEMBROS[c.id] || []).some(m => m.area === "hemera"));
  if (cicloHemera) MEMBROS[cicloHemera.id].filter(m => m.area === "hemera").forEach(m => {
    const id = pessoa(m, cicloHemera.nome); liga(id, "pj-hemera-v1", `Equipe Hemera v.1 (${cicloHemera.nome})`);
  });

  /* ---------- projetos e seus subsistemas (SECOES) ---------- */
  const SUB_POR_NOME = { rockets: { "Aeroestruturas": ["s-aeroestruturas"], "Eletrônica": ["s-eletronica-rockets"], "Recuperação": ["s-recuperacao"], "Propulsão": ["s-propulsao"],
      "Minerva Sats": ["sats"], "Todas as subequipes": ["s-aeroestruturas", "s-propulsao", "s-eletronica-rockets", "s-recuperacao"] },
    sats: { "Eletrônica Sats": ["s-eletronica-sats"], "Eletrônica de Payload": ["s-payload-sats"], "Mecânica Sats": ["s-mecanica-sats"], "Experimentos": ["s-experimentos"] } };
  PROJETOS.forEach(p => {
    const id = no("pj-" + p.id, { tipo: "projeto", cor: p.equipe === "rockets" ? "r" : "b", label: p.nome, desc: p.resumo, periodo: p.periodo, status: p.status, tipoProj: p.tipo, imagem: p.imagem, specs: p.specs, equipe: p.equipe });
    liga("projetos", id, "portfólio"); liga(p.equipe, id, "projeto da equipe");
    (SECOES[p.id] || []).forEach(sec => sec.subsistema.split(" · ").forEach(nome => {
      (SUB_POR_NOME[p.equipe][nome] || []).forEach(sid => {
        if (sid === "s-experimentos" && !nodes.has(sid)) { no(sid, { tipo: "subsistema", cor: "b", label: "Experimentos · Sats", desc: "Subequipe de ciclos anteriores da Minerva Sats, responsável pelos experimentos científicos embarcados (astrobiologia e sensoriamento).", equipe: "sats", historica: true }); liga("sats", sid, "subequipe (ciclos anteriores)"); }
        const l = links.find(x => (x.source === id && x.target === sid) || (x.source === sid && x.target === id));
        if (l) l.rel += ", " + sec.secao; else liga(id, sid, sec.secao);
      });
    }));
  });

  /* ---------- conquistas, ligadas aos projetos citados no texto ---------- */
  const nomesProj = PROJETOS.map(p => [p.id, p.nome.split(" (")[0].split(" e ")[0]]).concat([["jararaca-insonia", "Insônia"], ["chimera", "Quimera"]]);
  CONQUISTAS.forEach((c, i) => {
    const id = no("c-" + i, { tipo: "conquista", cor: "conq", label: c.txt, ano: c.ano, equipe: c.equipe });
    liga("conquistas", id, String(c.ano));
    let achou = false;
    nomesProj.forEach(([pid, nome]) => { if (new RegExp("\\b" + nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(c.txt)) { liga(id, "pj-" + pid, "citado"); achou = true; } });
    if (!achou && equipeNo[c.equipe]) liga(id, equipeNo[c.equipe], String(c.ano));
  });

  /* ---------- complementos (cursos, períodos, Lattes, fotos) ---------- */
  Object.entries(REDE_EXTRA).forEach(([nome, x]) => {
    const id = "p-" + slug(nome); if (!nodes.has(id)) return;
    no(id, { periodo: x.periodo, lattes: x.lattes, foto: x.foto, bio: x.bio, curso: x.curso });
    if (x.curso) { const cid = "cu-" + slug(x.curso); no(cid, { tipo: "curso", cor: "curso", label: x.curso, desc: "Curso de graduação de integrantes da Minerva." }); liga(cid, id, "cursa"); }
  });
  if ([...nodes.values()].some(n => n.tipo === "curso")) { no("cursos", { tipo: "hub", cor: "curso", label: "Cursos", desc: "Cursos de graduação dos integrantes." }); liga("minerva", "cursos", "integra");
    [...nodes.values()].filter(n => n.tipo === "curso").forEach(n => liga("cursos", n.id, "curso")); }

  return { nodes: [...nodes.values()], links, ciclo: ATUAL.nome };
})();
