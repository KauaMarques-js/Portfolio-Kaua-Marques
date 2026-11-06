export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  resultImage?: string;
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
  role?: string;
  note?: string;
  recognition?: string;
  details?: string;
  featured: boolean;
};

// Conteúdo compartilhado entre o portfólio e o currículo.
export const profile = {
  name: "Kauã Marques Almeida",
  shortName: "Kauã Marques",
  title: "Desenvolvedor Full Stack",
  location: "Cuiabá, Mato Grosso, Brasil",
  locationShort: "Cuiabá, MT · Brasil",
  headline: "Aplicações web, do que se vê ao que faz funcionar.",
  intro: "Desenvolvo interfaces e APIs com atenção à usabilidade, à organização do código e aos problemas de quem usa.",
  summary: "Sou desenvolvedor Full Stack e estudante de Engenharia de Software, com formação técnica em Análise e Desenvolvimento de Sistemas. Crio aplicações web e APIs, conectando interfaces a soluções de backend. Minha experiência em suporte técnico também me aproxima de quem usa os sistemas: entender o problema faz parte do desenvolvimento.",
  githubUrl: "https://github.com/KauaMarques-js",
  githubHandle: "KauaMarques-js",
  email: undefined as string | undefined,
  phone: undefined as string | undefined,
  linkedinUrl: "https://www.linkedin.com/in/kauamqs",
};

export const navigation = [
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export const experiences = [
  {
    company: "Secretaria de Estado de Segurança Pública (SESP/MT)",
    context: "Radiocomunicação",
    title: "Estagiário de TI",
    period: "Agosto de 2026 — atual",
    responsibilities: [
      "Programação e configuração de rádios digitais e suporte a equipamentos de radiocomunicação.",
      "Registro e análise inicial de chamados e ocorrências técnicas.",
      "Elaboração de materiais de orientação para usuários e apoio em diagnóstico e encaminhamento para manutenção.",
    ],
  },
  {
    company: "Spedy",
    context: "Software fiscal · SaaS",
    title: "Estagiário em suporte técnico",
    period: "Abril de 2026 — julho de 2026",
    responsibilities: [
      "Atendimento por chat, e-mail e telefone, orientando clientes na utilização do software fiscal.",
      "Análise de erros de emissão, rejeições de documentos fiscais e arquivos XML.",
      "Onboarding de usuários e registro e encaminhamento de demandas às equipes responsáveis.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "airmetric",
    name: "AirMetrics",
    category: "NASA Space Apps · Cuiabá 2025",
    description: "Protótipo de aplicativo sobre qualidade do ar, com mapas, previsões e educação ambiental, desenvolvido para o NASA Space Apps Challenge.",
    tech: ["React Native", "Expo", "TypeScript"],
    image: "/projects/airmetric-square.png",
    imageAlt: "Composição quadrada do resultado do júri local do NASA Space Apps Cuiabá 2025, com AirMetrics na segunda posição",
    resultImage: "/projects/airmetric.jpg",
    status: "Protótipo de hackathon",
    recognition: "2º lugar · NASA Space Apps Challenge · etapa local de Cuiabá, 2025",
    githubUrl: "https://github.com/KauaMarques-js/AirMetrics",
    note: "Protótipo de equipe com dados simulados, sem aplicação publicada.",
    featured: true,
  },
  {
    id: "incluvia",
    name: "Incluvia",
    category: "Acessibilidade digital",
    description: "Aplicação para organizar auditorias de acessibilidade web e analisar possíveis vieses capacitistas em respostas de IA, com revisão humana dos achados.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Playwright", "axe-core"],
    image: "/projects/incluvia.png",
    imageAlt: "Incluvia: auditoria de acessibilidade e detecção de vieses algorítmicos, com uma pessoa em cadeira de rodas diante de painéis de análise",
    githubUrl: "https://github.com/KauaMarques-js/Incluvia",
    status: "Em desenvolvimento",
    details: "A aplicação inclui auditorias com Playwright e axe-core e uma base de demonstração identificada como tal. Os resultados automatizados apoiam a revisão humana.",
    featured: true,
  },
  {
    id: "flor-arabe",
    name: "Flor Árabe",
    category: "Catálogo de perfumaria",
    description: "Catálogo digital de perfumes com navegação por produtos e preparação do pedido para atendimento pelo WhatsApp.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/flor-arabe.webp",
    imageAlt: "Página inicial da Flor Árabe Perfumaria com chamada para a coleção e perfume Sabah Al Ward Valentine em destaque",
    demoUrl: "https://flor-arabe-perfumaria.vercel.app",
    status: "Publicado · catálogo digital",
    note: "Pedidos atuais pelo WhatsApp. Checkout próprio em desenvolvimento para uma próxima versão.",
    featured: true,
  },
  {
    id: "agropulse",
    name: "AgroPulse",
    category: "Inteligência agrícola",
    description: "Proposta de apoio à gestão de lavouras e riscos climáticos com dados de observação da Terra, desenvolvida em equipe para o CopernicusLAC Panama Hackathon 2026.",
    tech: ["Next.js", "TypeScript", "Mapbox"],
    image: "/projects/github-agro.svg",
    imageAlt: "Capa do AgroPulse com ilustração agrícola e satélite",
    githubUrl: "https://github.com/KauaMarques-js/AgroPulse",
    status: "Projeto de hackathon",
    note: "Proposta em desenvolvimento, com serviços de análise previstos para evolução futura.",
    featured: true,
  },
  {
    id: "vaultix",
    name: "Vaultix Security",
    category: "Educação e segurança digital",
    description: "MVP mobile de orientação e prevenção de riscos digitais para crianças, adolescentes e responsáveis, desenvolvido em equipe no Hacker Hero 2026.",
    tech: ["React Native", "Expo", "TypeScript"],
    image: "/projects/github-vaultix.svg",
    imageAlt: "Capa do Vaultix Security com escudo de proteção digital",
    githubUrl: "https://github.com/KauaMarques-js/Vaultix-Security",
    status: "MVP de hackathon",
    featured: true,
  },
  {
    id: "emissor-cuiabano",
    name: "Emissor Cuiabano",
    category: "Gestão fiscal",
    description: "Projeto de sistema para cadastro de empresas e serviços e emissão fiscal, em desenvolvimento.",
    tech: ["C#", ".NET 10", "ASP.NET Core MVC", "SQLite"],
    image: "/projects/github-emissor.svg",
    imageAlt: "Capa do Emissor Cuiabano sobre gestão fiscal",
    githubUrl: "https://github.com/KauaMarques-js/Emissor-Cuiabano",
    status: "Em desenvolvimento",
    note: "Projeto ainda não validado para uso; a emissão de NF-e é simulada.",
    featured: true,
  },
  {
    id: "aumigos",
    name: "Aumigos",
    category: "Sistema para pet shop · TCC 2024",
    description: "Protótipo de sistema para pet shop, proposto como trabalho de conclusão de curso em 2024, com agendamento de consultas veterinárias.",
    tech: ["Node.js", "Express", "SQLite", "JavaScript"],
    status: "Protótipo não publicado",
    featured: true,
  },
  {
    id: "adia",
    name: "ADIA / CognitiveLoop",
    category: "Educação e autonomia",
    description: "Proposta educacional sobre aprendizagem assistida e autonomia do estudante, apresentada em uma landing page.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/KauaMarques-js/landing-page-ADIA-FRAMEWORK",
    status: "Pesquisa / protótipo conceitual",
    details: "A landing page e um exemplo pedagógico interativo estão implementados. O mecanismo adaptativo permanece como proposta de pesquisa, sem validação com estudantes.",
    featured: true,
  },
];

export const technologies = [
  { category: "Interfaces", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  { category: "Backend e dados", items: ["Node.js", "Express", "C#", ".NET / ASP.NET Core", "APIs REST", "SQL", "SQLite", "Prisma"] },
  { category: "Ferramentas e processo", items: ["Git / GitHub", "Playwright", "axe-core", "Documentação técnica", "Análise de erros", "Comunicação com usuários"] },
];

export const education = [
  { title: "Engenharia de Software", institution: "UniSENAI", location: "Cuiabá, MT", status: "Cursando", period: undefined as string | undefined },
  { title: "Técnico em Análise e Desenvolvimento de Sistemas", institution: "SENAI", location: "Cuiabá, MT", status: "Ensino Médio Integrado", period: "2022 — 2024" },
];

export const activities = [
  { name: "NASA Space Apps Challenge 2025", description: "2º lugar na etapa local de Cuiabá com o protótipo AirMetrics." },
  { name: "Hacker Hero 2026", description: "Participação em maratona colaborativa de tecnologia." },
];
