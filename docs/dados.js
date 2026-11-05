/* =========================================================
   MINERVA AEROESPACIAL — DADOS DO SITE
   Este é o único arquivo que a equipe precisa editar para
   atualizar membros, projetos, parceiros e notícias.
   Depois de salvar, envie ao GitHub: o site atualiza sozinho.
   ========================================================= */

const SITE = {
  nome: "Minerva Aeroespacial",
  grupo: "Grupo de Pesquisas Aeroespaciais da UFRJ",
  fundacao: 2016,
  emailRockets: "minervarockets@poli.ufrj.br",
  emailSats: "minervasats@poli.ufrj.br",
  instagram: "https://www.instagram.com/minerva.aeroespacial/",
  instagramUser: "@minerva.aeroespacial",
  endereco: ["Av. Athos da Silveira Ramos, 149 — Centro de Tecnologia", "Cidade Universitária, Ilha do Fundão, Rio de Janeiro — RJ", "CEP 21941-598"],
  /* campanha de doação ativa — atualize os valores quando quiser (são fixos, não atualizam sozinhos) */
  doacao: {
    titulo: "Ajude a UFRJ a reconstruir o Hemera!",
    url: "https://www.vakinha.com.br/vaquinha/ajude-a-ufrj-a-participar-do-mundial-de-foguetes-grupo-de-pesquisas-aeroespaciais-da-ufrj",
    pix: "6076412@vakinha.com.br",
    arrecadado: 6775.31, meta: 20000, apoiadores: 79, atualizadoEm: "5 nov. 2026",
  },
  /* redes sociais — seguidores conferidos em 5 nov. 2026 */
  redes: [
    { rede: "Instagram", nome: "@minerva.aeroespacial", url: "https://www.instagram.com/minerva.aeroespacial/", seguidores: "4,7 mil seguidores", icone: "insta" },
    { rede: "YouTube", nome: "Minerva Rockets", url: "https://www.youtube.com/@MinervaRockets/featured", seguidores: "484 inscritos · 21 vídeos", icone: "yt" },
    { rede: "LinkedIn", nome: "Minerva Aeroespacial", url: "https://www.linkedin.com/company/minervaaeroespacial/posts/", seguidores: "Página do grupo", icone: "in" },
    { rede: "LinkedIn", nome: "Minerva Rockets", url: "https://www.linkedin.com/company/minerva-rockets/posts/", seguidores: "Página da equipe de foguetes", icone: "in" },
    { rede: "Facebook", nome: "Minerva Rockets UFRJ", url: "https://www.facebook.com/minervarockets", seguidores: "4,2 mil seguidores", icone: "fb" },
  ],
  orientadores: [
    { nome: "Prof. Fernando Augusto de Noronha Castro Pinto", depto: "Departamento de Engenharia Mecânica — POLI" },
    { nome: "Prof. Claudio Miceli de Farias", depto: "Departamento de Engenharia da Computação e Eletrônica — POLI" },
  ],
};

/* ---------- SUBEQUIPES ----------
   equipe: "rockets" | "sats" | "adm"
   arte: imagem blueprint em img/subteams/ (ou "svg:<nome>" para os desenhos do app.js) */
const SUBTEAMS = [
  { id: "aeroestruturas", equipe: "rockets", nome: "Aeroestruturas", arte: "img/subteams/aero.webp",
    desc: "Projeta e fabrica a fuselagem modular em compósito de fibra de vidro e epóxi, a coifa Von Kármán, as aletas enflechadas com revestimento de fibra de carbono e os acopladores usinados em alumínio 6101-T6. Também cuida da análise estrutural e do desempenho de voo." },
  { id: "propulsao", equipe: "rockets", nome: "Propulsão", arte: "img/subteams/prop.webp",
    desc: "Desenvolve os motores SRAD da equipe. O Notus v.1, que impulsiona o Hemera v.1, é um motor sólido classe N com 9,5 kg de propelente KNSB, impulso total de 10,8 kN·s e pressão de operação de 5,8 MPa." },
  { id: "eletronica-rockets", equipe: "rockets", nome: "Eletrônica", arte: "img/subteams/ele.webp",
    desc: "Responsável pela aviônica modular com sistemas de recuperação redundantes (RRC3 e Blue Raven), rastreamento por GPS Featherweight, aquisição de dados de voo e suporte de solo." },
  { id: "recuperacao", equipe: "rockets", nome: "Recuperação", arte: "img/subteams/rec.webp",
    desc: "Garante que o foguete volte inteiro: ejeção pneumática por CO₂ no apogeu, paraquedas principal com skirt reefing e line cutters que abrem o paraquedas por completo a 500 m, além da célula de carga que mede o choque de abertura." },
  { id: "eletronica-sats", equipe: "sats", nome: "Eletrônica", arte: "img/subteams/pcb.webp",
    desc: "Projeta as placas e o software embarcado dos satélites: computador de bordo e tratamento de dados (CDH), sistema de energia (EPS) e comunicação." },
  { id: "mecanica-sats", equipe: "sats", nome: "Mecânica", arte: "img/subteams/mec.webp",
    desc: "Cuida da estrutura dos CubeSats, da integração dos subsistemas e da qualificação frente a vibração, choque e ciclos térmicos." },
  { id: "payload-sats", equipe: "sats", nome: "Eletrônica de Payload", arte: "img/subteams/sensor.webp",
    desc: "Desenvolve a carga útil dos satélites: sensores e experimentos que dão a cada missão o seu objetivo científico." },
  { id: "operacoes", equipe: "adm", nome: "Operações e Logística", arte: "svg:logistica",
    desc: "Organiza viagens a competições e lançamentos, transporte do foguete, compras, estoque de materiais e o uso dos laboratórios." },
  { id: "marketing", equipe: "adm", nome: "Marketing", arte: "svg:marketing",
    desc: "Cuida da identidade visual, das redes sociais, do site e da divulgação científica das equipes." },
  { id: "gestao", equipe: "adm", nome: "Gestão", arte: "svg:gestao",
    desc: "Responsável por pessoas e processos: processo seletivo, acompanhamento dos membros e o controle semanal de atividades (UTW)." },
  { id: "financeiro", equipe: "adm", nome: "Financeiro", arte: "svg:financeiro",
    desc: "Planeja o orçamento, capta recursos com patrocínios e editais e presta contas. Toda movimentação passa pelas fundações de apoio credenciadas da UFRJ." },
];

/* ---------- CICLOS E MEMBROS ----------
   O primeiro ciclo da lista é o atual.
   area: id de uma subequipe acima, ou "diretoria-rockets", "diretoria-sats", "adm-geral", "hemera"
   lider: true destaca a pessoa no topo da área
   foto (opcional): "img/equipe/2026-2/nome-sobrenome.webp" — publique só com autorização (LGPD) */
const CICLOS = [
  { id: "2026-2", nome: "2026.2", desc: "Organograma geral do segundo semestre de 2026." },
  { id: "2026-1", nome: "2026.1", desc: "Equipe que desenvolveu e levou o Hemera v.1 à IREC 2026 e à LASC 2026." },
];

const AREAS = {
  "diretoria-rockets": { nome: "Diretoria — Minerva Rockets", cor: "r" },
  "diretoria-sats": { nome: "Diretoria — Minerva Sats", cor: "b" },
  "adm-geral": { nome: "Gerência Administrativa", cor: "g" },
  "hemera": { nome: "Equipe Hemera v.1", cor: "r" },
};

const M = (nome, area, cargo, lider = false) => ({ nome, area, cargo, lider });

const MEMBROS = {
  "2026-2": [
    // Minerva Rockets
    M("Pablo Moura", "diretoria-rockets", "Presidente Rockets", true),
    M("Laurent Janod", "diretoria-rockets", "Diretoria Rockets", true),
    M("João Victor Macena", "diretoria-rockets", "Gerente de Projetos", true),
    M("Beatriz Perecmanis", "aeroestruturas", "Gerente Técnica de Aeroestruturas", true),
    M("Albert Schild", "aeroestruturas", "Integrante"), M("Bernardo Cid", "aeroestruturas", "Integrante"),
    M("Núbia Teixeira", "aeroestruturas", "Integrante"), M("Ana Júlia", "aeroestruturas", "Integrante"),
    M("Lucas Augusto", "aeroestruturas", "Integrante"), M("Marcelo Lobo", "aeroestruturas", "Integrante"),
    M("Sofia Dias", "aeroestruturas", "Integrante"),
    M("Gabriela Aragão", "recuperacao", "Gerente Técnica de Recuperação", true),
    M("Gabrielle Correa", "recuperacao", "Vice-Gerente de Recuperação", true),
    M("João Pedro Martini", "recuperacao", "Integrante"), M("Luis Faustão", "recuperacao", "Integrante"),
    M("Denilson Souza", "eletronica-rockets", "Gerente Técnico de Eletrônica", true),
    M("Yasmin Araujo", "eletronica-rockets", "Vice-Gerente de Eletrônica", true),
    M("Ana Luisa", "eletronica-rockets", "Integrante"), M("Gabrielle Mendonça", "eletronica-rockets", "Integrante"),
    M("Fellipe Borges", "eletronica-rockets", "Integrante"), M("Mateus Lima", "eletronica-rockets", "Integrante"),
    M("Daniel Varejão", "eletronica-rockets", "Integrante"), M("Nathan Amaral", "eletronica-rockets", "Integrante"),
    M("Camila Soares", "eletronica-rockets", "Integrante"), M("Gustavo Cruz", "eletronica-rockets", "Integrante"),
    M("Luiz Arthur Prinz", "eletronica-rockets", "Integrante"),
    M("Daniel Gudin", "propulsao", "Gerente Técnico de Propulsão", true),
    M("Keven Domingos", "propulsao", "Integrante"), M("Igor Marinho", "propulsao", "Integrante"),
    M("Tiago Gomes", "propulsao", "Integrante"), M("João Khazrik", "propulsao", "Integrante"),
    M("Joyce Raíssa", "propulsao", "Integrante"), M("Ari Gabriel", "propulsao", "Integrante"),
    M("Inês Vilanova", "propulsao", "Integrante"),
    // Administrativo
    M("Rafael Silva", "adm-geral", "Gerente Administrativo", true),
    M("Júlia Zerbati", "operacoes", "Gerente de Operações e Logística", true),
    M("Marcelo Bastos", "operacoes", "Integrante"), M("João Rodrigues", "operacoes", "Integrante"),
    M("Juliana Souza", "operacoes", "Integrante"),
    M("Gabriela Cotrim", "marketing", "Gerente de Marketing", true),
    M("Clarice Santos", "marketing", "Integrante"), M("Ana Clara", "marketing", "Integrante"),
    M("Kauane Almeida", "gestao", "Gerente de Gestão", true),
    M("Dani Nobrega", "gestao", "Integrante"), M("João Duarte", "gestao", "Integrante"),
    M("Lívia Nascimento", "gestao", "Integrante"), M("Melissa Mayra", "gestao", "Integrante"),
    M("Willian Rocha", "financeiro", "Gerente do Financeiro", true),
    M("Laura Camargo", "financeiro", "Integrante"), M("Willian Santos", "financeiro", "Integrante"),
    // Minerva Sats
    M("Manuella Oliveira", "diretoria-sats", "Presidente e Gerente de Projetos Sats", true),
    M("Gabrielle Fernandes", "eletronica-sats", "Gerente Técnica de Eletrônica", true),
    M("Lucas Pacheco", "eletronica-sats", "Vice-Gerente de Eletrônica", true),
    M("Rafael Bernardino", "eletronica-sats", "Especialista em Eletrônica"),
    M("Eduarda Marques", "eletronica-sats", "Especialista em CDH"),
    M("Pedro Mattos", "eletronica-sats", "Especialista em EPS"),
    M("Fued Gabriel", "eletronica-sats", "Integrante"), M("Daniel da Silva", "eletronica-sats", "Integrante"),
    M("Inácio Ribeiro", "eletronica-sats", "Integrante"), M("Matheus Pestana", "eletronica-sats", "Integrante"),
    M("Victor Hugo Russo", "eletronica-sats", "Integrante"), M("Victor Franklyn", "eletronica-sats", "Integrante"),
    M("João Victor Ferreira", "eletronica-sats", "Integrante"),
    M("Giovanna Teixeira", "mecanica-sats", "Gerente Técnica de Mecânica", true),
    M("Larissa Sousa", "mecanica-sats", "Integrante"), M("Nicolle Martins", "mecanica-sats", "Integrante"),
    M("Raquel Castro", "mecanica-sats", "Integrante"),
    M("Sarah Julia", "payload-sats", "Integrante"), M("Beatriz Sperandio", "payload-sats", "Integrante"),
    M("Alex Sandro", "payload-sats", "Integrante"), M("Rodrigo Oliveira", "payload-sats", "Integrante"),
  ],
  // Autores do relatório técnico e do pôster do Hemera v.1 (IREC 2026 / LASC 2026)
  "2026-1": ["Laurent Janod", "Albert Schild", "Beatriz Perecmanis", "Bernardo Valério", "Brenda Belchior", "Camille Silos",
    "Clarice Êmille", "Daniel Gudin", "Daniel Varejão", "Daniele Maísa", "Denilson Junior", "Eduarda Marques", "Fellipe Borges",
    "Felipe Paladino", "Gabriela Aragão", "Gabrielle Corrêa", "Gabrielle Mendonça", "Igor Marinho", "Jean Dereck", "Jéssica Vitória",
    "João Cavalcante", "João Novaes", "João Vitor Macena", "Joyce Raíssa", "Júlia Zerbati", "Kauane Almeida", "Keven Domingos",
    "Lucas Bravo", "Lucas Vieira", "Luigi Bussadori", "Marcelo Bastos", "Marta Santos", "Mateus Lima", "Nathan Amaral",
    "Núbia Teixeira", "Pablo Moura", "Rafael Bernardino", "Rafael Ceppas", "Rafael Silva", "Tiago Sousa", "Willian Rocha", "Yasmin Pequeno"]
    .map(n => M(n, "hemera", "Equipe Hemera v.1")),
};

/* ---------- PROJETOS E MISSÕES ----------
   equipe: "rockets" | "sats"; ano: número (ou null quando não houver data)
   status: "Concluído" | "Em desenvolvimento" | "Futuro" */
const PROJETOS = [
  { id: "hemera-v1", nome: "Hemera v.1", equipe: "rockets", ano: 2026, periodo: "2026", status: "Em reconstrução", destaque: true,
    tipo: "Foguete de sondagem · SRAD sólido 3 km", imagem: "img/fotos/lancamento-lasc-2026.webp",
    resumo: "Foguete de sondagem com fuselagem modular de compósito de 174 mm, impulsionado pelo Notus v.1, um motor sólido SRAD classe N. Leva a bordo um CubeSat 2U que valida a eletrônica do Hemera v.2. Voou duas vezes em 2026. Na segunda, o paraquedas não abriu e o foguete se perdeu. A equipe recuperou o que restou e agora trabalha para reconstruí-lo.",
    marcos: ["20 jun. 2026 — IREC, Texas (EUA), Team 503: primeiro voo, com voo e recuperação nominais", "Set. 2026 — LASC, Iacanga (SP), Team 72: voo a 3.339 m. O paraquedas não abriu e o foguete caiu em trajetória balística", "Out.–nov. 2026 — campanha de reconstrução na Vakinha"] },
  { id: "cariocasat", nome: "CariocaSat", equipe: "sats", ano: 2026, periodo: "2025–2026", status: "Em desenvolvimento",
    tipo: "Satélite · missão orbital", imagem: "img/fotos/terra.webp",
    resumo: "Missão para levar ao espaço o primeiro satélite inteiramente carioca. A plataforma atingiu TRL 5 em 2025. A meta de 2026 é o TRL 6: qualificá-la em ambiente relevante, com mitigação de falhas por radiação ionizante, resistência a ciclos térmicos extremos e qualificação a vibração e choque de lançadores.",
    marcos: ["2025 — TRL 5 alcançado", "2026 — meta: TRL 6 e preparação para lançamento orbital"] },
  { id: "hemera-v2", nome: "Hemera v.2", equipe: "rockets", ano: null, periodo: "Próximos ciclos", status: "Futuro",
    tipo: "Foguete de dois estágios", imagem: "img/hemera/hemera-v1.webp", contain: true,
    resumo: "Veículo de dois estágios propulsionados em que o Hemera v.1 será o estágio superior (sustainer). A eletrônica do v.2 já voou no CubeSat 2U do Hemera v.1. O projeto está sendo desenvolvido para ser o primeiro foguete universitário de dois estágios propulsionados da América Latina, com meta de 10 km de altitude.",
    marcos: ["Eletrônica validada em voo a bordo do Hemera v.1"] },
  { id: "odinsat", nome: "OdinSat", equipe: "sats", ano: 2025, periodo: "2025", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/odinsat-2025.webp",
    resumo: "Satélite apresentado pela Minerva Sats na INPE CubeDesign 2025.", marcos: ["INPE CubeDesign 2025"] },
  { id: "raiosat", nome: "RaioSat", equipe: "sats", ano: 2024, periodo: "2024", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/raiosat-vibracao.webp",
    resumo: "Satélite levado à INPE CubeDesign 2024, onde passou por teste de vibração no Laboratório de Integração e Testes (LIT) do INPE.",
    marcos: ["INPE CubeDesign 2024 — teste de vibração no LIT/INPE"] },
  { id: "aurora", nome: "Aurora", equipe: "rockets", ano: 2023, periodo: "2023", status: "Concluído",
    tipo: "Foguete · 3 km", imagem: "img/fotos/aurora-sacup-2023.webp",
    resumo: "Foguete projetado para 3 km de altitude e lançado na Spaceport America Cup 2023, nos Estados Unidos.",
    marcos: ["Spaceport America Cup 2023"] },
  { id: "caronte", nome: "Caronte", equipe: "rockets", ano: 2023, periodo: "2023", status: "Concluído",
    tipo: "Foguete", imagem: "img/fotos/caronte-lasc-2023.webp",
    resumo: "Foguete lançado na Latin American Space Challenge 2023, edição em que a Minerva Rockets foi campeã geral.",
    marcos: ["LASC 2023"] },
  { id: "sensosat", nome: "SensoSat", equipe: "sats", ano: 2023, periodo: "2023", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/sensosat-lasc-2023.webp",
    resumo: "Satélite da Minerva Sats apresentado na Latin American Space Challenge 2023.", marcos: ["LASC 2023"] },
  { id: "microbiosat", nome: "MicroBioSat", equipe: "sats", ano: null, periodo: "—", status: "Concluído",
    tipo: "Satélite · voo estratosférico", imagem: "img/fotos/microbiosat.webp",
    resumo: "Satélite que realizou voo estratosférico.", marcos: ["Voo estratosférico"] },
  { id: "sidera", nome: "Sidera", equipe: "rockets", ano: 2018, periodo: "2018", status: "Concluído",
    tipo: "Foguete · 1.000 m", imagem: "https://i.ytimg.com/vi/btClK5i1VuY/hqdefault.jpg", video: "btClK5i1VuY",
    resumo: "Foguete para 1.000 m de apogeu, lançado em Curitiba em 2018.", marcos: ["Lançamento em Curitiba, 2018"] },
  { id: "imperius", nome: "Imperius", equipe: "rockets", ano: 2017, periodo: "2017", status: "Concluído",
    tipo: "Foguete · 3 km", imagem: "https://i.ytimg.com/vi/p1FgIzVb3EU/hqdefault.jpg", video: "p1FgIzVb3EU",
    resumo: "Foguete para 3 km de apogeu, lançado na COBRUF 2017.", marcos: ["COBRUF 2017"] },
  { id: "jararaca-insonia", nome: "Jararaca e Insônia", equipe: "rockets", ano: 2017, periodo: "2017", status: "Concluído",
    tipo: "Foguetes", imagem: "https://i.ytimg.com/vi/ilHTjYWYlgc/hqdefault.jpg", video: "ilHTjYWYlgc",
    resumo: "Dois foguetes lançados pela equipe em Curitiba em 2017.", marcos: ["Lançamento em Curitiba, 2017"] },
  { id: "leonidas", nome: "Leônidas", equipe: "rockets", ano: null, periodo: "Arquivo", status: "Concluído",
    tipo: "Foguete · 300 m", imagem: "https://i.ytimg.com/vi/AffDj3qNg3o/hqdefault.jpg", video: "AffDj3qNg3o",
    resumo: "Foguete para 300 m de apogeu, do projeto ao lançamento.", marcos: [] },
  { id: "mark-1", nome: "Mark-1", equipe: "rockets", ano: null, periodo: "Arquivo", status: "Concluído",
    tipo: "Foguete", imagem: "https://i.ytimg.com/vi/JlBW3o7RxoU/hqdefault.jpg", video: "JlBW3o7RxoU",
    resumo: "Um dos primeiros foguetes lançados pela Minerva Rockets.", marcos: [] },
  { id: "chimera", nome: "Chimera", equipe: "rockets", ano: null, periodo: "—", status: "Concluído",
    tipo: "Foguete · motor híbrido", imagem: "img/logos/minerva-rockets.webp", contain: true,
    resumo: "Projeto de foguete com motores híbridos e sistemas embarcados avançados.", marcos: [] },
];

/* ---------- CONQUISTAS ---------- equipe: "rockets" | "sats" | "geral" */
const CONQUISTAS = [
  { ano: 2026, equipe: "rockets", txt: "Hemera v.1: primeiro voo e recuperação nominais na IREC 2026, no Texas (EUA)" },
  { ano: 2026, equipe: "rockets", txt: "Hemera v.1 voa a 3.339 m na LASC 2026 (Team 72)" },
  { ano: 2025, equipe: "sats", txt: "Plataforma do CariocaSat validada em TRL 5" },
  { ano: 2024, equipe: "sats", txt: "3º lugar — INPE CubeDesign 2024" },
  { ano: 2024, equipe: "sats", txt: "18 trabalhos submetidos à SIAC 2024 e 10 apresentados na JICTAC 2024" },
  { ano: 2024, equipe: "sats", txt: "5 trabalhos apresentados no 4th BRICS Scitech Forum" },
  { ano: 2024, equipe: "geral", txt: "25 trabalhos na SIAC 2024, com 2 menções honrosas, e participação no CBA 2024" },
  { ano: 2023, equipe: "rockets", txt: "Campeã geral — Latin American Space Challenge 2023" },
  { ano: 2023, equipe: "rockets", txt: "1º lugar — 3 km Solid Rocket Motors, LASC 2023" },
  { ano: 2023, equipe: "rockets", txt: "3º lugar — 3 km Solid Rocket Motors, Spaceport America Cup 2023" },
  { ano: 2023, equipe: "geral", txt: "21 trabalhos na SIAC 2023, com 4 menções honrosas" },
  { ano: 2022, equipe: "sats", txt: "1º lugar — categoria CubeSat, LASC 2022" },
  { ano: 2022, equipe: "sats", txt: "1º lugar — Olimpíada Brasileira de Satélites, fase universitária" },
];

/* ---------- PARCEIROS ----------
   nivel: 0 Instituições · 1 Patrocinadores · 2 Laboratórios e parceiros técnicos · 3 Apoio
   url: site do parceiro (deixe "" se não tiver) */
const NIVEIS = [
  { nome: "Instituições", desc: "A universidade que abriga, orienta e dá estrutura às equipes." },
  { nome: "Patrocinadores", desc: "Financiam pesquisa, fabricação e testes." },
  { nome: "Laboratórios e parceiros técnicos", desc: "Abrem laboratórios, equipamentos e conhecimento técnico." },
  { nome: "Apoio", desc: "Empresas e organizações que apoiam os projetos." },
];
const PARCEIROS = [
  { nome: "Universidade Federal do Rio de Janeiro", nivel: 0, logo: "ufrj.webp", url: "https://ufrj.br" },
  { nome: "Escola Politécnica da UFRJ", nivel: 0, logo: "politecnica.webp", url: "https://www.poli.ufrj.br" },
  { nome: "Centro de Tecnologia da UFRJ", nivel: 0, logo: "ct-ufrj.webp", url: "" },
  { nome: "Instituto Reditus", nivel: 1, logo: "instituto-reditus.webp", url: "" },
  { nome: "Lab3D COPPE/UFRJ", nivel: 2, logo: "lab3d.webp", url: "" },
  { nome: "Labgn2 POLI-UFRJ", nivel: 2, logo: "labgn2.webp", url: "" },
  { nome: "LabEST", nivel: 2, logo: "labest.webp", url: "" },
  { nome: "Patola", nivel: 3, logo: "patola.webp", url: "" },
  { nome: "AXIA Energia", nivel: 3, logo: "axia.webp", url: "" },
];

/* ---------- VÍDEOS (YouTube @MinervaRockets) ----------
   id: o código depois de "watch?v=" no link do vídeo */
const VIDEOS = [
  { id: "tU9akViG-Ww", titulo: "LASC 2021 International Cooperation — 5 km — Propulsion Lead Proposal", dur: "4:03" },
  { id: "AffDj3qNg3o", titulo: "Projeto e lançamento do foguete Leônidas (300 m)", dur: "4:03" },
  { id: "G3ypHtlWjpI", titulo: "Como fazer um foguete de garrafa PET + lançamento", dur: "7:20" },
  { id: "p1FgIzVb3EU", titulo: "Lançamento do Imperius (3 km) — COBRUF 2017", dur: "0:36" },
  { id: "btClK5i1VuY", titulo: "Lançamento do Sidera (1.000 m) — Curitiba 2018", dur: "0:44" },
  { id: "bOp0i3BJhxw", titulo: "SolidWorks para foguetes: coifa", dur: "9:46" },
  { id: "ilHTjYWYlgc", titulo: "Lançamento dos foguetes Jararaca e Insônia — Curitiba 2017", dur: "0:32" },
  { id: "vaMpqDxEnsk", titulo: "Minerva Rockets Entrevista: Lucas (chefe da aviônica)", dur: "3:34" },
  { id: "ugEvRWaPqxs", titulo: "Minerva Rockets Entrevista: Arthur (diretor de operações)", dur: "5:02" },
  { id: "HmYizpg10bY", titulo: "SolidWorks para foguetes: nozzle", dur: "3:07" },
  { id: "TTl3X0rFA8k", titulo: "SolidWorks para foguetes: bulkhead", dur: "7:21" },
  { id: "suBhziPYnK0", titulo: "Teste estático — motor classe E", dur: "0:26" },
  { id: "YIzfnfzv3dU", titulo: "Lançamos uma sonda atmosférica", dur: "0:35" },
  { id: "JlBW3o7RxoU", titulo: "Lançamento do Mark-1", dur: "0:51" },
  { id: "VlG_uyEESMU", titulo: "Chamada do processo seletivo 2017 — Eng. Marcos Pontes", dur: "0:43" },
];

/* ---------- NOTÍCIAS ----------
   data: "AAAA-MM" ou "AAAA"; o texto aceita HTML simples (<p>, <h2>, <ul>) */
const POSTS = [
  { slug: "reconstrucao-hemera", titulo: "Ajude a reconstruir o Hemera", data: "2026-11", equipe: "rockets",
    imagem: "img/fotos/equipe-campo-2026.webp",
    resumo: "A perda do Hemera na LASC 2026 deixou um prejuízo de cerca de R$ 80 mil. A equipe abriu uma vaquinha para reconstruir o foguete.",
    links: [["Doar na Vakinha", "https://www.vakinha.com.br/vaquinha/ajude-a-ufrj-a-participar-do-mundial-de-foguetes-grupo-de-pesquisas-aeroespaciais-da-ufrj"], ["Post no Instagram", "https://www.instagram.com/minerva.aeroespacial/p/DfUu7EYEaoo/"]],
    conteudo: `<p>Com a perda do Hemera e um prejuízo de aproximadamente <strong>R$ 80 mil</strong>, a Minerva Rockets enfrenta incertezas que ameaçam a continuidade do trabalho da equipe.</p>
      <p>Para repor materiais, reconstruir componentes e retomar o desenvolvimento do projeto, a equipe abriu a campanha “Ajude a UFRJ a reconstruir o Hemera!” na Vakinha. Em 5 de novembro de 2026, a campanha somava R$ 6.775,31 de uma meta de R$ 20.000, com 79 apoiadores.</p>
      <h2>Como contribuir</h2>
      <ul><li>Pela página da campanha na Vakinha</li><li>Por Pix, com a chave <strong>6076412@vakinha.com.br</strong></li></ul>
      <p>“O Hemera caiu, mas o nosso propósito continua de pé.”</p>` },
  { slug: "recuperacao-hemera", titulo: "Três dias de buscas para recuperar o Hemera", data: "2026-10", equipe: "rockets",
    imagem: "img/hemera/hemera-cutaway.webp",
    resumo: "Depois da queda na LASC 2026, a equipe passou três dias buscando e escavando o canavial para retirar o que restava do foguete.",
    links: [["Vídeo da recuperação (Instagram)", "https://www.instagram.com/minerva.aeroespacial/reel/DeU_-yBMsJU/"], ["Parte 2 — Recuperação do Hemera", "https://www.instagram.com/minerva.aeroespacial/reel/DdkFrbCTIVZ/"]],
    conteudo: `<p>Na LASC 2026, o Hemera chegou a <strong>3.339 metros</strong> de altitude. Durante o voo, o mecanismo de acionamento do paraquedas não foi ativado. O foguete entrou em trajetória balística, chegou a cerca de 600 km/h e caiu num canavial, onde ficou enterrado a cerca de 3 metros de profundidade.</p>
      <p>Seguiram-se três dias de buscas, escavações e trabalho em equipe para localizar e retirar da terra o que restava do foguete. Foram dias de cansaço, frustração e incerteza, mas também dias que mostraram a força e a resiliência da equipe.</p>
      <p>Para muitos integrantes, o Hemera foi a primeira oportunidade de ver o voo de um foguete da própria equipe. Esse mesmo sonho é o que motiva a equipe a construir de novo.</p>` },
  { slug: "hemera-lasc-2026", titulo: "Hemera v.1 na LASC 2026", data: "2026-09", equipe: "rockets",
    imagem: "img/fotos/lancamento-lasc-2026.webp",
    resumo: "Como Team 72, a Minerva Rockets levou o Hemera v.1 à Latin American Space Challenge, em Iacanga (SP), de 2 a 5 de setembro.",
    links: [["Primeiro dia de LASC (Instagram)", "https://www.instagram.com/minerva.aeroespacial/p/Dcz0H4Hz8gL/"], ["Parte 1 — Nossa trajetória na LASC 2026", "https://www.instagram.com/minerva.aeroespacial/reel/DdhuGP2xtfS/"]],
    conteudo: `<p>De 2 a 5 de setembro de 2026, a Minerva Rockets participou da Latin American Space Challenge (LASC) em Iacanga, São Paulo, como <strong>Team 72</strong>, na categoria 3 km SRAD sólido. No dia 2, a equipe esteve no pavilhão da competição trocando experiências com outras equipes latino-americanas.</p>
      <p>O Hemera v.1 tem 2,78 m de comprimento, 174 mm de diâmetro e 40,4 kg. Ele é impulsionado pelo Notus v.1, motor SRAD classe N com propelente KNSB, e leva um CubeSat 2U que valida a eletrônica do Hemera v.2.</p>
      <h2>O voo</h2>
      <p>O Hemera voou e chegou a 3.339 m. O sistema de recuperação foi projetado em dois estágios: ejeção por CO₂ no apogeu e paraquedas principal rizado, que abriria por completo a 500 m. Nesse voo, porém, o acionamento do paraquedas não aconteceu e o foguete caiu em trajetória balística. <a href="post.html?p=recuperacao-hemera">Veja como foi a recuperação</a>.</p>` },
  { slug: "hemera-irec-2026", titulo: "Hemera v.1 voa na IREC 2026", data: "2026-06", equipe: "rockets",
    imagem: "img/fotos/equipe-2026.webp",
    resumo: "Em 20 de junho, no Texas (EUA), o Hemera fez seu primeiro voo, com voo e recuperação nominais.",
    links: [["Vídeo do voo (Instagram)", "https://www.instagram.com/minerva.aeroespacial/reel/DZ0b1Xpzcsa/"]],
    conteudo: `<p>Em <strong>20 de junho de 2026</strong>, na International Rocket Engineering Competition (IREC), no Texas, o Hemera v.1 finalmente voou. A equipe competiu como <strong>Team 503</strong>, na categoria de 10.000 ft de apogeu com motor sólido SRAD. O voo e a recuperação foram nominais.</p>
      <p>O relatório técnico do projeto, “Hemera v.1: Out of the Night, Stepping into the Daylight”, descreve um momento de retomada. Depois de um período de dificuldades, a equipe se reestruturou e consolidou a capacidade de projetar, fabricar e validar sistemas aeroespaciais complexos.</p>
      <h2>Como a equipe trabalha</h2>
      <p>O desenvolvimento segue o modelo em V e o ciclo de vida de projetos da NASA, com revisões formais de projeto (PDR e seguintes). Cada setor técnico tem um gerente e um vice. As atividades de todos ficam registradas numa planilha semanal unificada (UTW), e a equipe faz reuniões semanais de projeto e reuniões gerais mensais.</p>` },
  { slug: "cariocasat-trl5", titulo: "CariocaSat alcança TRL 5", data: "2025", equipe: "sats",
    imagem: "img/fotos/lit-inpe.webp",
    resumo: "A plataforma do primeiro satélite inteiramente carioca foi validada em laboratório. A próxima meta é o TRL 6.",
    conteudo: `<p>Em 2025, a Minerva Sats validou a plataforma do CariocaSat em <strong>TRL 5</strong>, com módulos testados em laboratório e em competições.</p>
      <p>Para 2026, o objetivo é chegar ao TRL 6 e qualificar a plataforma em ambiente relevante. Os subsistemas estão sendo adaptados aos requisitos de missão espacial: mitigação de falhas por radiação ionizante, resistência a ciclos térmicos extremos e qualificação frente aos perfis de vibração e choque dos lançadores.</p>` },
  { slug: "campea-lasc-2023", titulo: "Minerva Rockets é campeã geral da LASC 2023", data: "2023", equipe: "rockets",
    imagem: "img/fotos/campeoes-2023.webp",
    resumo: "A equipe venceu a Latin American Space Challenge e ficou em 1º lugar na categoria 3 km Solid Rocket Motors.",
    conteudo: `<p>Em 2023, a Minerva Rockets foi <strong>campeã geral da Latin American Space Challenge</strong> e conquistou o 1º lugar na categoria 3 km Solid Rocket Motors. O foguete Caronte foi lançado nessa edição.</p>
      <p>No mesmo ano, a equipe ficou em 3º lugar na categoria 3 km Solid Rocket Motors da Spaceport America Cup, nos Estados Unidos, onde lançou o foguete Aurora.</p>` },
];
