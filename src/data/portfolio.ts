export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
  role?: string;
  note?: string;
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
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export const experiences = [
  {
    company: "SESP/MT",
    context: "Radiocomunicação",
    title: "Estagiário de TI",
    // Datas não confirmadas não são exibidas.
    period: undefined as string | undefined,
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
    period: undefined as string | undefined,
    responsibilities: [
      "Atendimento por chat, e-mail e telefone, orientando clientes na utilização do software fiscal.",
      "Análise de erros de emissão, rejeições de documentos fiscais e arquivos XML.",
      "Onboarding de usuários e registro e encaminhamento de demandas às equipes responsáveis.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "flor-arabe",
    name: "Flor Árabe",
    category: "Catálogo de perfumaria",
    description: "Catálogo digital de perfumes com navegação por produtos e preparação do pedido para atendimento pelo WhatsApp.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/flor-arabe.webp",
    imageAlt: "Captura do catálogo Flor Árabe Perfumaria",
    demoUrl: "https://flor-arabe-perfumaria.vercel.app",
    note: "Compra concluída pelo WhatsApp; sem checkout próprio.",
    featured: true,
  },
];

export const technologies = [
  { category: "Interfaces", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend e dados", items: ["Node.js", "Express", "C#", ".NET / ASP.NET Core", "APIs REST", "SQL", "SQLite", "Prisma"] },
  { category: "Ferramentas e processo", items: ["Git / GitHub", "Playwright", "axe-core", "Documentação técnica", "Análise de erros", "Comunicação com usuários"] },
];

export const education = [
  { title: "Engenharia de Software", institution: "UniSENAI", location: "Cuiabá, MT", status: "Cursando", period: undefined as string | undefined },
  { title: "Técnico em Análise e Desenvolvimento de Sistemas", institution: "SENAI", location: "Cuiabá, MT", status: "Ensino Médio Integrado", period: "2022 — 2024" },
];

export const activities = [
  { name: "NASA Space Apps Challenge", description: "Participação em hackathon." },
  { name: "Hacker Hero 2026", description: "Participação em maratona colaborativa de tecnologia." },
];
