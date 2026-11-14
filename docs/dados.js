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
    { nome: "Prof. Fabio Krykhtine", depto: "Escola Politécnica — UFRJ" },
  ],
};

/* ---------- SUBEQUIPES ----------
   equipe: "rockets" | "sats" | "adm"
   arte: imagem blueprint em img/subteams/ (ou "svg:<nome>" para os desenhos do app.js) */
const SUBTEAMS = [
  { id: "diretoria", equipe: "geral", nome: "Diretoria e Orientadores", arte: "svg:diretoria",
    desc: "Conduz as duas equipes: presidência, direção e gerência de projetos da Minerva Rockets e da Minerva Sats, gerência administrativa e os professores orientadores que respondem academicamente pelo grupo." },
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
   area: id de uma subequipe acima (a diretoria geral é "diretoria"), ou "diretoria-rockets", "diretoria-sats", "adm-geral", "hemera"
   lider: true destaca a pessoa no topo da área
   foto (opcional): "img/equipe/2026-2/nome-sobrenome.webp" — publique só com autorização (LGPD) */
const CICLOS = [
  { id: "2026-2", nome: "2026.2", desc: "Organograma geral do segundo semestre de 2026." },
  { id: "2026-1", nome: "2026.1", desc: "Equipe que desenvolveu e levou o Hemera v.1 à IREC 2026 e à LASC 2026." },
  { id: "2022-1", nome: "2022.1", desc: "Organograma de julho de 2022, ciclo da LASC 2022, em que a Minerva Sats foi campeã na categoria CubeSat." },
  { id: "2019-2", nome: "2019.2", desc: "Lista de membros do segundo semestre de 2019, ano em que o Aurora ganhou o Prêmio Rick Maschek de Excelência Técnica na LASC." },
];

const AREAS = {
  "diretoria": { nome: "Diretoria", cor: "g" },
  "diretoria-rockets": { nome: "Diretoria — Minerva Rockets", cor: "r" },
  "diretoria-sats": { nome: "Diretoria — Minerva Sats", cor: "b" },
  "adm-geral": { nome: "Gerência Administrativa", cor: "g" },
  "hemera": { nome: "Equipe Hemera v.1", cor: "r" },
  /* subsistemas de ciclos anteriores */
  "aerodinamica": { nome: "Aerodinâmica — Minerva Rockets", cor: "r", equipe: "rockets" },
  "avionica": { nome: "Aviônica — Minerva Rockets", cor: "r", equipe: "rockets" },
  "instrumentacao": { nome: "Instrumentação — Minerva Rockets", cor: "r", equipe: "rockets" },
  "experimentos": { nome: "Experimentos (astrobiologia e sensoriamento remoto) — Minerva Sats", cor: "b", equipe: "sats" },
};

const M = (nome, area, cargo, lider = false) => ({ nome, area, cargo, lider });

const MEMBROS = {
  "2026-2": [
    // Minerva Rockets
    M("Pablo Moura", "diretoria", "Presidente Rockets", true),
    M("Laurent Janod", "diretoria", "Diretoria Rockets", true),
    M("João Victor Macena", "diretoria", "Gerente de Projetos Rockets", true),
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
    M("Rafael Silva", "diretoria", "Gerente Administrativo", true),
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
    M("Manuella Oliveira", "diretoria", "Presidente e Gerente de Projetos Sats", true),
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
  "2022-1": [
    M("Renan Fernandes", "diretoria", "Assessor da Gerência de Projetos Rockets"),
    M("Alícia Lopes", "aerodinamica", "Gerente de Aerodinâmica", true),
    M("Daniel Relva", "avionica", "Gerente de Aviônica", true),
    M("Hannah Navarro", "marketing", "Diretora de Comunicação", true),
    M("Carolina Niklaus", "eletronica-sats", "Gerente de Eletrônica Sats", true),
    M("Luísa Canelas", "aeroestruturas", "Gerente de Estruturas e Recuperação", true),
    M("Marianna Alves", "experimentos", "Gerente de Experimentos", true),
    M("Victor Guedes", "financeiro", "Diretor de Finanças", true),
    M("Júlia Siqueira", "gestao", "Diretora de Gestão", true),
    M("Beatriz Ziglio", "instrumentacao", "Gerente de Instrumentação", true),
    M("Fernando Bezerra", "mecanica-sats", "Gerente de Mecânica Sats", true),
    M("Mariana Aguiar", "propulsao", "Gerente de Propulsão e Diretora de Operações", true),
    M("Mirlene Oliveira", "diretoria", "Gerente de Projetos Rockets", true),
    M("Ícaro Sol", "diretoria", "Gerente de Projetos Sats", true),
    M("Kaio Siqueira", "diretoria", "Presidente", true),
    M("Ananda Silva", "diretoria", "Vice-Presidente", true),
    M("Adonis de Sousa", "experimentos", "Pesquisador(a) em astrobiologia"),
    M("Bárbara Pereira", "experimentos", "Pesquisador(a) em astrobiologia"),
    M("Ivana Ventura", "experimentos", "Pesquisador(a) em astrobiologia"),
    M("Samuel Ferreira", "experimentos", "Pesquisador(a) em astrobiologia"),
    M("Ana Beatriz Diniz", "marketing", "Integrante"),
    M("Giovanna Valentini", "marketing", "Integrante"),
    M("Luiz Vasques", "marketing", "Integrante"),
    M("Lydia Thayline Gomes", "marketing", "Integrante"),
    M("André Rodrigues", "aerodinamica", "Integrante"),
    M("Eduardo Gualberto", "aerodinamica", "Integrante"),
    M("Filipi Melo", "aerodinamica", "Integrante"),
    M("Gabriel Garden", "aerodinamica", "Integrante"),
    M("Matheus Moerbeck", "aerodinamica", "Integrante"),
    M("Matheus Moraes", "aerodinamica", "Integrante"),
    M("Arthur Amorim", "eletronica-sats", "Integrante"),
    M("Gabriel Farias", "eletronica-sats", "Integrante"),
    M("Manuella de Oliveira", "eletronica-sats", "Integrante"),
    M("Rafael Bernardino", "eletronica-sats", "Integrante"),
    M("Raisa Alves", "eletronica-sats", "Integrante"),
    M("Caio Werneck", "aeroestruturas", "Integrante"),
    M("Felippe Salaroli", "aeroestruturas", "Integrante"),
    M("Gianluca Mazzillo", "aeroestruturas", "Integrante"),
    M("Giselle Martins", "aeroestruturas", "Integrante"),
    M("Heloísa Vilar", "aeroestruturas", "Integrante"),
    M("João Augusto Sarno", "aeroestruturas", "Integrante"),
    M("Larissa Muche", "aeroestruturas", "Integrante"),
    M("Matthews dos Santos", "aeroestruturas", "Integrante"),
    M("Rafaela Ferrario", "aeroestruturas", "Integrante"),
    M("Yasmim de Oliveira", "aeroestruturas", "Integrante"),
    M("Ellizeu Sena", "instrumentacao", "Integrante"),
    M("Leonardo Henrique", "instrumentacao", "Integrante"),
    M("Rafael Melo", "instrumentacao", "Integrante"),
    M("Victor De Luca", "instrumentacao", "Integrante"),
    M("Gabriel Carvalho", "mecanica-sats", "Integrante"),
    M("Jessica de Melo", "mecanica-sats", "Integrante"),
    M("Pedro Pimentel", "mecanica-sats", "Integrante"),
    M("Vinícius Cruz", "mecanica-sats", "Integrante"),
    M("Marcelo Boscato", "gestao", "Assessor jurídico"),
    M("Samir Doory", "gestao", "Assessor de gestão"),
    M("João Guilherme Marinho", "propulsao", "Integrante"),
    M("Keven Domingos", "propulsao", "Integrante"),
    M("Lucas Oliveira", "propulsao", "Integrante"),
    M("Lucas Motta", "propulsao", "Integrante"),
    M("Marcelo Moura", "propulsao", "Integrante"),
    M("Matheus Gaspar", "propulsao", "Integrante"),
    M("Theo Avidos", "propulsao", "Integrante"),
    M("Matheus Parracho", "avionica", "Integrante")
  ],
  "2019-2": [
    M("Agélio Ribeiro", "financeiro", "Integrante"),
    M("Alexandre Machado", "aeroestruturas", "Integrante"),
    M("Ana Luiza Leal", "propulsao", "também em Financeiro"),
    M("Ananda Knoedt", "gestao", "Integrante"),
    M("Arthur Ramos", "gestao", "Integrante"),
    M("Arthur Tavares", "instrumentacao", "Integrante"),
    M("Brenda Ferrari", "experimentos", "também em Recuperação"),
    M("Bryan Porphirio", "experimentos", "Integrante"),
    M("Caio Uchoa", "avionica", "Integrante"),
    M("Cyro Renato", "aerodinamica", "Integrante"),
    M("Daniel Graciliano", "propulsao", "também em Gestão"),
    M("Dayana Moura", "recuperacao", "também em Aerodinâmica"),
    M("Denis Farias", "financeiro", "Integrante"),
    M("Diego Rodrigues", "avionica", "Integrante"),
    M("Ellen Mucci", "marketing", "Integrante"),
    M("Ellizeu Sena", "instrumentacao", "Integrante"),
    M("Fabrícia Feijó", "marketing", "Integrante"),
    M("Felipe Gangana", "aeroestruturas", "Integrante"),
    M("Felipe Pratti", "eletronica-sats", "Integrante"),
    M("Flávia Soares", "diretoria", "Presidência (também em Propulsão)", true),
    M("Gabriel Aleksandravicius", "avionica", "Integrante"),
    M("Gabriel Fonseca", "marketing", "Divulgação Sats"),
    M("Gabrielle Correr", "aerodinamica", "Integrante"),
    M("Giselle Martins", "marketing", "Integrante"),
    M("Giulia de Jesus", "instrumentacao", "Integrante"),
    M("Helena Brener", "eletronica-sats", "Integrante"),
    M("Henrique Albagli", "experimentos", "também em Divulgação Sats"),
    M("Hugo Daniel", "aeroestruturas", "Integrante"),
    M("Iagor Libianno", "avionica", "Integrante"),
    M("Ícaro Sol", "eletronica-sats", "Integrante"),
    M("Igor Monsueto", "mecanica-sats", "Integrante"),
    M("Igor Novis", "gestao", "Integrante"),
    M("João Duarte", "experimentos", "também em Eletrônica Sats"),
    M("João Guilherme Marinho", "propulsao", "também em Marketing"),
    M("Jonas Degrave", "gestao", "Integrante"),
    M("Julia Pitanga", "mecanica-sats", "Integrante"),
    M("Kaio Siqueira", "gestao", "Integrante"),
    M("Kamylla Oliveira", "avionica", "Integrante"),
    M("Keith Fabre", "eletronica-sats", "Integrante"),
    M("Larissa Muche", "aeroestruturas", "Integrante"),
    M("Lorraine Nascimento", "operacoes", "Logística"),
    M("Lucas Mesquita", "aerodinamica", "Integrante"),
    M("Marcelle Guarisco", "recuperacao", "também em Aviônica"),
    M("Marcelo Moura", "mecanica-sats", "Integrante"),
    M("Maria Lenina", "aerodinamica", "Integrante"),
    M("Mariana Aguiar", "operacoes", "Logística"),
    M("Mariana Assunção", "recuperacao", "também em Estruturas"),
    M("Mauro Sérgio", "propulsao", "também em Logística"),
    M("Melissa Pereira", "instrumentacao", "Integrante"),
    M("Mirlene Oliveira", "recuperacao", "também em Instrumentação"),
    M("Naiane Negri", "experimentos", "também em Propulsão"),
    M("Odilon Lopes", "propulsao", "também em Recursos Humanos"),
    M("Paula Albuquerque", "eletronica-sats", "Integrante"),
    M("Paulo Chagas", "experimentos", "também em Mecânica Sats"),
    M("Pedro Rodrigues", "eletronica-sats", "Integrante"),
    M("Robert Fernandes", "aeroestruturas", "Integrante"),
    M("Stéphanie Barrouin", "aerodinamica", "Integrante"),
    M("Stephanie Miranda", "gestao", "Recursos Humanos"),
    M("Talita Alonso", "marketing", "Integrante"),
    M("Thamires Bustillos", "aeroestruturas", "Integrante"),
    M("Thiago Martins", "financeiro", "Integrante"),
    M("Victor De Luca", "instrumentacao", "Integrante"),
    M("Vinícius Monteiro", "aeroestruturas", "Integrante")
  ],
};

/* ---------- PROJETOS E MISSÕES ----------
   equipe: "rockets" | "sats"; ano: número (ou null quando não houver data)
   status: "Concluído" | "Em desenvolvimento" | "Futuro"
   modelo (opcional): arquivo 3D .glb em img/3d/ — quando existe, o projeto gira em 3D na página Projetos
   orbita (opcional): ângulo inicial da câmera do 3D, ex.: "45deg 75deg 105%"
   specs (opcional): ficha técnica, lista de ["Rótulo", "Valor"]
   perfil (opcional): desenho na fila de seleção — { alt: altura relativa, larg: largura, estagios: 2 } para foguetes,
                      { tipo: "cubesat", u: 1|2|3, alt } para satélites
   recorte (opcional): imagem PNG com fundo transparente do veículo em pé, substitui o desenho */
const PROJETOS = [
  { id: "hemera-v1", perfil: { alt: 1, larg: 1.15 }, modelo: "img/3d/hemera-v1.glb", nome: "Hemera v.1", equipe: "rockets", ano: 2026, periodo: "2026", status: "Em reconstrução", destaque: true,
    tipo: "Foguete de sondagem · SRAD sólido 3 km", imagem: "img/fotos/lancamento-lasc-2026.webp",
    specs: [["Diâmetro", "174 mm"], ["Motor", "Notus v.1 (classe N)"], ["Impulso total", "10,8 kN·s"], ["Apogeu (LASC 2026)", "3.339 m"]],
    resumo: "Foguete de sondagem com fuselagem modular de compósito de 174 mm, impulsionado pelo Notus v.1, um motor sólido SRAD classe N. Leva a bordo um CubeSat 2U que valida a eletrônica do Hemera v.2. Voou duas vezes em 2026. Na segunda, o paraquedas não abriu e o foguete se perdeu. A equipe recuperou o que restou e agora trabalha para reconstruí-lo.",
    marcos: ["20 jun. 2026 — IREC, Texas (EUA), Team 503: primeiro voo, com voo e recuperação nominais", "Set. 2026 — LASC, Iacanga (SP), Team 72: voo a 3.339 m. O paraquedas não abriu e o foguete caiu em trajetória balística", "Out.–nov. 2026 — campanha de reconstrução na Vakinha"] },
  { id: "cariocasat", perfil: { tipo: "cubesat", u: 2, alt: .5 }, nome: "CariocaSat", equipe: "sats", ano: 2026, periodo: "2025–2026", status: "Em desenvolvimento",
    tipo: "Satélite · missão orbital", imagem: "img/fotos/terra.webp",
    resumo: "Missão para levar ao espaço o primeiro satélite inteiramente carioca. A plataforma atingiu TRL 5 em 2025. A meta de 2026 é o TRL 6: qualificá-la em ambiente relevante, com mitigação de falhas por radiação ionizante, resistência a ciclos térmicos extremos e qualificação a vibração e choque de lançadores.",
    marcos: ["2025 — TRL 5 alcançado", "2026 — meta: TRL 6 e preparação para lançamento orbital"] },
  { id: "hemera-v2", perfil: { alt: 1.3, larg: 1.15, estagios: 2 }, modelo: "img/3d/hemera-v2.glb", nome: "Hemera v.2", equipe: "rockets", ano: null, periodo: "Próximos ciclos", status: "Futuro",
    tipo: "Foguete de dois estágios", imagem: "img/hemera/hemera-v1.webp", contain: true,
    resumo: "Veículo de dois estágios propulsionados em que o Hemera v.1 será o estágio superior (sustainer). A eletrônica do v.2 já voou no CubeSat 2U do Hemera v.1. O projeto está sendo desenvolvido para ser o primeiro foguete universitário de dois estágios propulsionados da América Latina, com meta de 10 km de altitude.",
    marcos: ["Eletrônica validada em voo a bordo do Hemera v.1"] },
  { id: "odinsat", perfil: { tipo: "cubesat", u: 1, alt: .35 }, nome: "OdinSat", equipe: "sats", ano: 2025, periodo: "2025", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/odinsat-2025.webp",
    resumo: "Satélite apresentado pela Minerva Sats na INPE CubeDesign 2025.", marcos: ["INPE CubeDesign 2025"] },
  { id: "raiosat", perfil: { tipo: "cubesat", u: 2, alt: .45 }, nome: "RaioSat", equipe: "sats", ano: 2024, periodo: "2024", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/raiosat-vibracao.webp",
    resumo: "Satélite levado à INPE CubeDesign 2024, onde passou por teste de vibração no Laboratório de Integração e Testes (LIT) do INPE.",
    marcos: ["INPE CubeDesign 2024 — teste de vibração no LIT/INPE"] },
  { id: "aurora", perfil: { alt: .95, larg: 1 }, nome: "Aurora", equipe: "rockets", ano: 2023, periodo: "2019–2023", status: "Concluído",
    tipo: "Plataforma de foguetes de sondagem · 3 km", imagem: "img/fotos/aurora-sacup-2023.webp",
    specs: [["Apogeu", "3.000 m"], ["Motor", "Hélios (sólido)"], ["Motor carregado", "17 kg"], ["Carga útil", "CubeSats 2U e 3U"]],
    resumo: "Linha de foguetes de sondagem cujo nome faz alusão ao amanhecer de um programa espacial na UFRJ. Modular, cada subsistema funciona e se encaixa de forma independente; a primeira versão usava acopladores rosqueados, sem parafusos aparentes na fuselagem, para manter a superfície lisa. O motor sólido Hélios tem mais de um metro de comprimento e 10 kg de propelente. O Aurora v.2 foi pensado para ejetar CubeSats com experimentos de sensoriamento remoto e de biotecnologia.",
    marcos: ["2019 — Aurora v.1 voa na LASC e conquista o Prêmio Rick Maschek de Excelência Técnica em Engenharia", "2020 — 2º lugar em 3 km Solid Rocket Motors na LASC (edição online)", "2021 — Spaceport America Cup, categoria 10k ft SRAD: 45º lugar geral", "2023 — Spaceport America Cup, 3º lugar em 3 km Solid Rocket Motors"] },
  { id: "caronte", perfil: { alt: .9, larg: .95 }, nome: "Caronte", equipe: "rockets", ano: 2023, periodo: "2023", status: "Concluído",
    tipo: "Foguete", imagem: "img/fotos/caronte-lasc-2023.webp",
    resumo: "Foguete lançado na Latin American Space Challenge 2023, edição em que a Minerva Rockets foi campeã geral.",
    marcos: ["LASC 2023"] },
  { id: "sensosat", perfil: { tipo: "cubesat", u: 2, alt: .45 }, nome: "SensoSat", equipe: "sats", ano: 2023, periodo: "2023", status: "Concluído",
    tipo: "CubeSat", imagem: "img/fotos/sensosat-lasc-2023.webp",
    resumo: "Satélite da Minerva Sats apresentado na Latin American Space Challenge 2023.", marcos: ["LASC 2023"] },
  { id: "microbiosat", perfil: { tipo: "cubesat", u: 2, alt: .45 }, nome: "MicroBioSat", equipe: "sats", ano: 2021, periodo: "2020–2021", status: "Concluído",
    tipo: "Satélite · voo estratosférico", imagem: "img/fotos/microbiosat.webp",
    resumo: "CubeSat com experimento de astrobiologia: uma plataforma de microfluídica para estudar o crescimento de cianobactérias em condições extremas, pensando em suporte à vida fora da Terra. Na Olimpíada Brasileira de Satélites (OBSAT) de 2021, o projeto passou da fase de proposta e seguiu para o voo em balão estratosférico.",
    marcos: ["2020 — µBiosat apresentado na LASC, que deu à Minerva Sats o 1º lugar em CubeSat 2U/3U", "2021 — OBSAT: projeto aprovado na 1ª fase e premiado com um CubeSat da PION Labs", "Voo estratosférico"] },
  { id: "pmm", perfil: { tipo: "cubesat", u: 3, alt: .6 }, nome: "Plataforma Multi-Missão", equipe: "sats", ano: 2020, periodo: "2020–2021", status: "Concluído",
    tipo: "Plataforma CubeSat 1U, 2U e 3U", imagem: "img/logos/minerva-sats.webp", contain: true,
    resumo: "Base comum dos CubeSats da Minerva Sats: hardware de aquisição de dados, processamento e comunicação mais a estrutura no padrão CubeSat, nas versões 1U, 2U e 3U. Qualquer experimento que respeite suas especificações pode ser integrado. Inclui comando e tratamento de dados, controle de atitude, energia, controle térmico e comunicação.",
    marcos: ["2020 — INPE CubeDesign: reconhecimento de Excelência Técnica na modelagem dos sistemas de controle de atitude, energia e computador de bordo"] },
  { id: "sidera", perfil: { alt: .6, larg: .8 }, nome: "Sidera", equipe: "rockets", ano: 2018, periodo: "2018", status: "Concluído",
    tipo: "Foguete · 1.000 m", imagem: "https://i.ytimg.com/vi/btClK5i1VuY/hqdefault.jpg", video: "btClK5i1VuY",
    resumo: "Foguete para 1.000 m de apogeu, lançado em Curitiba em 2018.", marcos: ["Lançamento em Curitiba, 2018"] },
  { id: "imperius", perfil: { alt: .8, larg: .9 }, nome: "Imperius", equipe: "rockets", ano: 2017, periodo: "2017", status: "Concluído",
    tipo: "Foguete · 3 km", imagem: "https://i.ytimg.com/vi/p1FgIzVb3EU/hqdefault.jpg", video: "p1FgIzVb3EU",
    resumo: "Foguete para 3 km de apogeu, lançado na COBRUF 2017.", marcos: ["COBRUF 2017"] },
  { id: "jararaca-insonia", perfil: { alt: .45, larg: .6 }, nome: "Jararaca e Insônia", equipe: "rockets", ano: 2017, periodo: "2017", status: "Concluído",
    tipo: "Foguetes", imagem: "https://i.ytimg.com/vi/ilHTjYWYlgc/hqdefault.jpg", video: "ilHTjYWYlgc",
    resumo: "Dois foguetes lançados pela equipe em Curitiba em 2017.", marcos: ["Lançamento em Curitiba, 2017"] },
  { id: "leonidas", perfil: { alt: .5, larg: .7 }, nome: "Leônidas", equipe: "rockets", ano: null, periodo: "Arquivo", status: "Concluído",
    tipo: "Foguete · 300 m", imagem: "https://i.ytimg.com/vi/AffDj3qNg3o/hqdefault.jpg", video: "AffDj3qNg3o",
    resumo: "Foguete para 300 m de apogeu, do projeto ao lançamento.", marcos: [] },
  { id: "mark-1", perfil: { alt: .4, larg: .6 }, nome: "Mark-1", equipe: "rockets", ano: null, periodo: "Arquivo", status: "Concluído",
    tipo: "Foguete", imagem: "https://i.ytimg.com/vi/JlBW3o7RxoU/hqdefault.jpg", video: "JlBW3o7RxoU",
    resumo: "Um dos primeiros foguetes lançados pela Minerva Rockets.", marcos: [] },
  { id: "chimera", perfil: { alt: .95, larg: 1.05 }, nome: "Chimera (Quimera)", equipe: "rockets", ano: 2020, periodo: "2020–2025", status: "Concluído",
    tipo: "Foguete · propulsão híbrida · 3 km", imagem: "img/logos/minerva-rockets.webp", contain: true,
    resumo: "Primeiro foguete de propulsão híbrida da Minerva Rockets, com 3.000 m de apogeu e freios aerodinâmicos, herdando o legado de voo do Aurora. Foi selecionado pela FUNCATE e pela Agência Espacial Brasileira entre 30 propostas, com apoio também do Instituto Reditus.",
    marcos: ["2020 — 2º lugar em 3 km Hybrid Rocket Motors na LASC", "Dez. 2020 — aprovado no edital de apoio a grupos de foguetes acadêmicos da FUNCATE/AEB (programa E2T), com R$ 20 mil", "2021 — apresentado na LASC 2021"] },
];

/* ---------- ANATOMIA DOS PROJETOS (página Projetos) ----------
   Cada projeto pode ser dividido em seções, de cima para baixo.
   secao: nome da parte · subsistema: quem cuida dela · tarefas: o que foi desenvolvido
   forma (desenho): foguete → "coifa" | "modulo" | "interestagio" | "aletas" | "boattail"
                    satélite → "antena" | "placa" | "estrutura" | "carga" | "painel"
   tam: altura relativa do desenho (1 = padrão)
   modelo (opcional): arquivo 3D .glb da seção — substitui o desenho e pode ser girado em 360° */
const SECOES = {
  "hemera-v1": [
    { secao: "Coifa", modelo: "img/3d/hemera-v1/coifa.glb", subsistema: "Aeroestruturas · Eletrônica", forma: "coifa", tam: 1.6, tarefas: [
      "Coifa Von Kármán em compósito, com placa fixa de fechamento",
      "Ponta com insertos macho e fêmea usinados",
      "Placas de lastro retangular e redonda para ajuste do centro de massa",
      "Tubo de Pitot com tubos estático e dinâmico e transdutor de pressão" ] },
    { secao: "Módulo de Recuperação", modelo: "img/3d/hemera-v1/recuperacao.glb", subsistema: "Recuperação", forma: "modulo", tam: 1.2, tarefas: [
      "Ejeção pneumática por CO₂ no apogeu",
      "Paraquedas principal com skirt reefing",
      "Line cutters que abrem o paraquedas por completo a 500 m",
      "Célula de carga que mede o choque de abertura" ] },
    { secao: "Módulo de Carga Útil", modelo: "img/3d/hemera-v1/carga-util.glb", subsistema: "Minerva Sats · Aeroestruturas", forma: "modulo", tam: .9, tarefas: [
      "CubeSat 2U que valida em voo a eletrônica do Hemera v.2",
      "Nova fuselagem do módulo de carga útil e placa fixa de montagem" ] },
    { secao: "Módulo de Aviônica", modelo: "img/3d/hemera-v1/avionica.glb", subsistema: "Eletrônica", forma: "modulo", tam: 1, tarefas: [
      "Aviônica modular com computadores de recuperação redundantes (RRC3 e Blue Raven)",
      "Rastreamento por GPS Featherweight e antena integrada à aleta (fintenna)",
      "Suportes para câmeras frontal e lateral",
      "Aquisição de dados de voo e suporte de solo" ] },
    { secao: "Módulo de Propulsão", modelo: "img/3d/hemera-v1/propulsao.glb", subsistema: "Propulsão", forma: "modulo", tam: 1.5, tarefas: [
      "Motor sólido SRAD Notus v.1, classe N, com 9,5 kg de propelente KNSB",
      "Grãos de 45 e 50 mm com inibidor, anel retentor e anéis de vedação",
      "Impulso total de 10,8 kN·s a 5,8 MPa de pressão de operação",
      "Anel centralizador e placa de propulsão" ] },
    { secao: "Aletas e Boat Tail", modelo: "img/3d/hemera-v1/aletas.glb", subsistema: "Aeroestruturas", forma: "aletas", tam: 1, tarefas: [
      "Aletas enflechadas com revestimento de fibra de carbono",
      "Fuselagem inferior de propulsão e boat tail para reduzir o arrasto",
      "Análise estrutural e de desempenho de voo" ] },
  ],
  "hemera-v2": [
    { secao: "Estágio superior (sustainer)", subsistema: "Todas as subequipes", forma: "coifa", tam: 1.4, tarefas: [
      "O Hemera v.1 completo passa a ser o estágio superior",
      "Coifa, recuperação, carga útil e aviônica herdadas do v.1" ] },
    { secao: "Propulsão do sustainer", subsistema: "Propulsão", forma: "aletas", tam: 1.2, tarefas: [
      "Módulo de propulsão superior com motor próprio",
      "Aletas do estágio superior" ] },
    { secao: "Interestágio", subsistema: "Aeroestruturas · Recuperação", forma: "interestagio", tam: .45, tarefas: [
      "União e separação entre os dois estágios" ] },
    { secao: "Booster", subsistema: "Propulsão · Aeroestruturas", forma: "modulo", tam: 1.6, tarefas: [
      "Módulo de propulsão do booster e fuselagem própria",
      "Meta: primeiro foguete universitário de dois estágios propulsionados da América Latina, a 10 km" ] },
    { secao: "Aletas do booster", subsistema: "Aeroestruturas", forma: "aletas", tam: .9, tarefas: [
      "Conjunto de aletas do primeiro estágio" ] },
  ],
  "aurora": [
    { secao: "Coifa e carga útil", subsistema: "Aeroestruturas · Minerva Sats", forma: "coifa", tam: 1.5, tarefas: [
      "Compartimento para CubeSats 2U e 3U",
      "Experimentos de sensoriamento remoto e de biotecnologia com cianobactérias" ] },
    { secao: "Estrutura modular", subsistema: "Aeroestruturas", forma: "modulo", tam: 1.4, tarefas: [
      "Subsistemas independentes, que funcionam e se encaixam separadamente",
      "Acopladores rosqueados, sem parafusos aparentes, para manter a fuselagem lisa" ] },
    { secao: "Motor Hélios", subsistema: "Propulsão", forma: "aletas", tam: 1.6, tarefas: [
      "Motor sólido com mais de um metro de comprimento",
      "10 kg de propelente e 17 kg carregado",
      "Apogeu projetado de 3.000 m" ] },
  ],
  "chimera": [
    { secao: "Coifa", subsistema: "Aeroestruturas", forma: "coifa", tam: 1.4, tarefas: [ "Herda o legado de voo da plataforma Aurora" ] },
    { secao: "Freios aerodinâmicos", subsistema: "Eletrônica · Aeroestruturas", forma: "modulo", tam: 1, tarefas: [ "Freios aerodinâmicos para controlar o apogeu de 3.000 m" ] },
    { secao: "Motor híbrido", subsistema: "Propulsão", forma: "aletas", tam: 1.6, tarefas: [
      "Primeiro motor de propulsão híbrida da equipe",
      "Análise Monte-Carlo da balística interna de motores híbridos" ] },
  ],
  "cariocasat": [
    { secao: "Comunicação", subsistema: "Eletrônica Sats", forma: "antena", tam: .6, tarefas: [ "Enlace de comunicação com a estação de solo" ] },
    { secao: "Computador de bordo (CDH)", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [
      "Comando e tratamento de dados",
      "Mitigação de falhas causadas por radiação ionizante" ] },
    { secao: "Sistema de energia (EPS)", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [ "Geração, armazenamento e distribuição de energia" ] },
    { secao: "Carga útil", subsistema: "Eletrônica de Payload", forma: "carga", tam: .8, tarefas: [ "Sensores e experimentos que dão objetivo à missão" ] },
    { secao: "Estrutura", subsistema: "Mecânica Sats", forma: "estrutura", tam: 1.2, tarefas: [
      "Estrutura CubeSat e integração dos subsistemas",
      "Qualificação a vibração e choque de lançadores e a ciclos térmicos extremos",
      "Plataforma em TRL 5 (2025), com meta de TRL 6" ] },
  ],
  "pmm": [
    { secao: "Comunicação", subsistema: "Eletrônica Sats", forma: "antena", tam: .6, tarefas: [ "Comunicação com o solo" ] },
    { secao: "Comando e tratamento de dados", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [ "Aquisição de dados e processamento" ] },
    { secao: "Controle de atitude", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [ "Modelagem do controle de atitude no Simulink e no Matlab" ] },
    { secao: "Energia e controle térmico", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [ "Alimentação elétrica e controle térmico" ] },
    { secao: "Slots de carga útil", subsistema: "Experimentos", forma: "carga", tam: .8, tarefas: [ "Qualquer experimento dentro das especificações pode ser integrado" ] },
    { secao: "Estrutura 1U, 2U e 3U", subsistema: "Mecânica Sats", forma: "estrutura", tam: 1.1, tarefas: [ "Estrutura no padrão CubeSat, em três tamanhos" ] },
  ],
  "microbiosat": [
    { secao: "Plataforma", subsistema: "Eletrônica Sats", forma: "placa", tam: .5, tarefas: [ "Computador de bordo e energia da plataforma multi-missão" ] },
    { secao: "Experimento de microfluídica", subsistema: "Experimentos", forma: "carga", tam: 1, tarefas: [
      "Plataforma de microfluídica para cultivo de cianobactérias",
      "Estudo do crescimento celular sob condições extremas" ] },
    { secao: "Estrutura", subsistema: "Mecânica Sats", forma: "estrutura", tam: 1.1, tarefas: [ "Estrutura CubeSat 2U para o voo em balão estratosférico" ] },
  ],
};

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
  { ano: 2021, equipe: "rockets", txt: "Spaceport America Cup 2021, categoria 10k ft SRAD: 45º lugar geral, entre três equipes brasileiras" },
  { ano: 2021, equipe: "sats", txt: "OBSAT 2021: projeto de microfluídica aprovado na 1ª fase e premiado com um CubeSat da PION Labs" },
  { ano: 2021, equipe: "geral", txt: "16 trabalhos na JICTAC 2020 (edição especial), com 3 melhores trabalhos de sessão e 2 menções honrosas" },
  { ano: 2020, equipe: "sats", txt: "1º lugar — 2U/3U CubeSat, LASC 2020" },
  { ano: 2020, equipe: "rockets", txt: "2º lugar — 3 km Solid Rocket Motors e 2º lugar — 3 km Hybrid Rocket Motors, LASC 2020" },
  { ano: 2020, equipe: "sats", txt: "INPE CubeDesign 2020: reconhecimento de Excelência Técnica" },
  { ano: 2020, equipe: "rockets", txt: "Projeto de foguete híbrido selecionado pela FUNCATE e pela AEB entre 30 propostas" },
  { ano: 2019, equipe: "rockets", txt: "Prêmio Rick Maschek de Excelência Técnica em Engenharia — LASC 2019, com o Aurora" },
  { ano: 2019, equipe: "geral", txt: "13 trabalhos apresentados na SIAC 2019" },
  { ano: 2018, equipe: "geral", txt: "Campeã de EVA (traje espacial) — COBRUF 2018" },
  { ano: 2018, equipe: "sats", txt: "Campeã de CubeSats, com projeto de nanossatélite para Marte — COBRUF 2018" },
  { ano: 2018, equipe: "geral", txt: "32 menções honrosas na COBRUF 2018 e menção honrosa na SIAC 2018" },
  { ano: 2017, equipe: "rockets", txt: "Campeã geral de Foguetes Avançados, de Foguetes Educacionais, de Pesquisas Aeroespaciais e de Operação Aeroespacial — COBRUF 2017, em união com o Projeto Júpiter (USP)" },
  { ano: 2017, equipe: "geral", txt: "Organização da Semana Aeroespacial, a primeira semana acadêmica da UFRJ com temática aeroespacial" },
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

/* ---------- NA IMPRENSA ----------
   Reportagens e entrevistas. Para acrescentar, copie um bloco e troque os dados. */
const IMPRENSA = [
  { veiculo: "GloboNews", data: "18 ago. 2021", tipo: "Vídeo · Jornal das Dez",
    titulo: "Ex-alunos da UFRJ arrecadam R$ 7 milhões para investir em pesquisas na instituição",
    resumo: "Matéria sobre o Instituto Reditus e os projetos de alunos que ele apoia. A Minerva Rockets mostrou o foguete Aurora, de 3 km de apogeu, que levaria dois CubeSats da Minerva Sats.",
    url: "https://g1.globo.com/globonews/jornal-das-dez/video/ex-alunos-da-ufrj-arrecadam-r-7-milhoes-para-investir-em-pesquisas-na-instituicao-9781605.ghtml" },
  { veiculo: "BandNews FM", data: "19 ago. 2021", tipo: "Entrevista · rádio",
    titulo: "Instituto Reditus e os projetos de alunos da UFRJ",
    resumo: "Entrevista sobre o investimento do Instituto Reditus em pesquisa na UFRJ, com destaque para o CubeSat de sensoriamento remoto da Minerva Sats.",
    url: "http://bandnewsfmrio.com.br/editorias-detalhes/prazo-para-inscricao-no-instituto-reditus-vai" },
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
