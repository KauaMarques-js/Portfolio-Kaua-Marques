import { education, experiences, profile, projects } from "@/data/portfolio";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export default function Home() {
  const selectedIds = ["flor-arabe", "airmetric", "incluvia"];
  const selected = selectedIds.flatMap(id => projects.filter(project => project.id === id));
  const others = projects.filter(project => !selectedIds.includes(project.id));
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <RevealOnScroll />
    <main id="conteudo" className="shell">
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-context">
          <p className="intro-role">Desenvolvedor Full Stack</p>
          <p className="intro-location">Cuiabá, MT · Brasil</p>
        </div>
        <h1 id="intro-title">Desenvolvo aplicações{' '}<br />web e APIs<span aria-hidden="true">.</span></h1>
        <p className="intro-copy">Trabalho com React, Node.js e C# e já atendi clientes de software. Hoje, estudo Engenharia de Software e atuo com TI na SESP/MT.</p>
        <div className="intro-links">
          <a className="intro-cta" href="#projetos">Ver projetos <Icon name="arrow" /></a>
          <a className="inline-link" href="/curriculo/">Currículo completo <Icon name="arrow" /></a>
        </div>
        <div className="intro-highlights" aria-label="Experiência, formação e reconhecimento">
          <div>
            <p>Experiência</p>
            <strong>SESP/MT · Spedy</strong>
          </div>
          <div>
            <p>Formação</p>
            <strong>Engenharia de Software</strong>
            <span>UniSENAI</span>
          </div>
          <div>
            <p>Reconhecimento</p>
            <strong>2º lugar · NASA Space Apps</strong>
            <span>Cuiabá, 2025</span>
          </div>
        </div>
      </section>

      <section id="projetos" className="section" aria-labelledby="projetos-title">
        <div className="section-heading"><h2 id="projetos-title">Projetos selecionados</h2><span className="section-label">2024 — 2026</span></div>
        <div className="project-list">{selected.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
        <details className="more-projects">
          <summary>Outros projetos ({others.length}) <Icon name="down" /></summary>
          <ul>{others.map(project => <li key={project.id}><article className="other-project" aria-labelledby={`other-${project.id}`}>
            <h3 id={`other-${project.id}`}>{project.name}</h3><p className="project-meta">{project.category} · {project.status}</p>
            <p>{project.description}</p>
            {project.note && <p>{project.note}</p>}{project.details && <p>{project.details}</p>}
            <p className="project-tech">{project.tech.join(" / ")}</p>
            {project.githubUrl && <div className="project-links"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.name} no GitHub (abre em nova aba)`}>Ver código <Icon name="arrow" /></a></div>}
          </article></li>)}</ul>
        </details>
      </section>

      <section id="sobre" className="section" aria-labelledby="sobre-title">
        <div className="section-heading"><h2 id="sobre-title">Sobre</h2><a className="inline-link section-label" href="/curriculo/">Currículo completo <Icon name="arrow" /></a></div>
        <div className="about-layout"><span className="section-label">DESENVOLVIMENTO & TI</span><div>
          <p className="about-copy">Sou técnico em Análise e Desenvolvimento de Sistemas e graduando em Engenharia de Software. Trabalho com aplicações web, backend e suporte técnico.</p>
          <p className="about-stack">React / Next.js / Node.js / C# / SQL</p>
          <div className="about-records">
            {experiences.map(experience => <article className="record" key={experience.company}><h3>{experience.company.includes("SESP") ? "SESP/MT" : experience.company}</h3><span className="section-label">{experience.period}</span><p>{experience.title} · {experience.context}</p></article>)}
            {education.map(item => <article className="record" key={item.title}><h3>{item.title}</h3><span className="section-label">{item.institution}</span><p>{item.period || item.status}</p></article>)}
          </div>
        </div></div>
      </section>

      <section id="contato" className="contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Entre em contato.</h2><p>Cuiabá, Mato Grosso · Brasil</p></div><div className="contact-links">
        {profile.email && <a className="inline-link" href={`mailto:${profile.email}`}>{profile.email} <Icon name="arrow" /></a>}
        {profile.phone && <a className="inline-link" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone} <Icon name="arrow" /></a>}
        {profile.linkedinUrl && <a className="inline-link" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrow" /></a>}
        <a className="inline-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Icon name="arrow" /></a>
      </div></section>
    </main>
    <footer className="site-footer shell"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#inicio">Voltar ao topo <Icon name="up" /></a></footer>
  </>;
}
