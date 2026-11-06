import { activities, education, experiences, profile, projects, technologies } from "@/data/portfolio";
import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { TechExplorer } from "@/components/tech-explorer";

export default function Home() {
  const highlightedProject = projects[0];
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo" className="shell">
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-topline"><span className="eyebrow"><span className="green-dot" aria-hidden="true" /> DESENVOLVEDOR FULL STACK</span><span className="intro-location"><Icon name="pin" /> Cuiabá, MT · Brasil</span></div>
        <div className="intro-grid">
          <div className="intro-main">
            <h1 id="intro-title">Kauã Marques<span className="name-last">Almeida<span className="name-dot">.</span></span></h1>
            <p className="intro-headline">{profile.headline}</p>
            <p className="intro-description">{profile.intro}</p>
            {highlightedProject?.recognition && <a className="intro-recognition" href={`#projeto-${highlightedProject.id}`}><Icon name="award" /><span><strong>{highlightedProject.name} · protótipo premiado</strong><small>{highlightedProject.recognition}</small></span></a>}
            <div className="intro-actions"><a className="button primary" href="#projetos">Conheça meus projetos <Icon name="down" /></a><a className="text-link" href="/curriculo/"><Icon name="file" /> Ver/Imprimir currículo</a></div>
          </div>
          <aside className="intro-aside" aria-label="Foco profissional">
            <div className="aside-topline"><span className="aside-dots" aria-hidden="true"><i /><i /><i /></span><span>stack / overview</span><Icon name="code" /></div>
            <div className="aside-content"><span className="eyebrow">DA INTERFACE AO BACKEND</span><p>As partes se conectam.<br /><span>O resultado faz sentido.</span></p>
              <div className="stack-path"><div><Icon name="code" /><span><strong>Interface</strong><small>React · Next.js</small></span><span className="stack-file">.tsx</span></div><div><Icon name="server" /><span><strong>APIs</strong><small>Node.js · .NET</small></span><span className="stack-file">/api</span></div><div><Icon name="database" /><span><strong>Dados</strong><small>SQL · SQLite</small></span><span className="stack-file">.sql</span></div></div>
            </div><a className="aside-bottom" href="#tecnologias">Explorar tecnologias <Icon name="down" /></a>
          </aside>
        </div>
        <div className="intro-foot"><span>PORTFÓLIO & CURRÍCULO</span><a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub <Icon name="arrow" /></a></div>
      </section>

      <Section id="projetos" number="01" title="Projetos selecionados" className="projects-section">
        <div className="project-section-intro"><p>Do protótipo à aplicação publicada.<br />Projetos em diferentes estágios, com o escopo de cada um à vista.</p></div>
        <div className="project-grid">{projects.filter(project => project.featured).map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
      </Section>

      <Section id="sobre" number="02" title="Um pouco sobre mim">
        <p className="about-lead">Gosto de entender o problema.<br /><span>E construir o que faz sentido.</span></p>
        <p className="about-copy">{profile.summary}</p>
        <div className="about-foot"><span><Icon name="pin" /> {profile.locationShort}</span><span>Engenharia de Software · UniSENAI</span></div>
      </Section>

      <Section id="experiencia" number="03" title="Experiência profissional">
        <p className="section-intro">Experiência com tecnologia e com as pessoas que dependem dela no dia a dia.</p>
        <div className="experience-list">{experiences.map((experience, index) => <article className="experience" key={experience.company}>
          <div className="experience-company"><span className="company-symbol" aria-hidden="true">{index === 0 ? "S/" : "sp."}</span><div><h3>{experience.company}</h3><span>{experience.context}</span></div></div>
          <div className="experience-details"><div className="experience-role"><h4>{experience.title}</h4>{experience.period && <span>{experience.period}</span>}</div><ul>{experience.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div>
        </article>)}</div>
      </Section>

      <Section id="tecnologias" number="04" title="Ferramentas de trabalho">
        <p className="section-intro">Tecnologias presentes nos meus projetos e práticas que acompanham o desenvolvimento.</p>
        <TechExplorer groups={technologies} />
      </Section>

      <Section id="formacao" number="05" title="Formação e atividades">
        <div className="education-list">{education.map(item => <article className="education" key={item.title}><div><p className="education-institution">{item.institution} <span>· {item.location}</span></p><h3>{item.title}</h3></div><div className="education-status"><span>{item.status}</span>{item.period && <span>{item.period}</span>}</div></article>)}</div>
        <div className="activities"><h3>Aprendizado em colaboração</h3><div>{activities.map(activity => <p key={activity.name}><strong>{activity.name}</strong><span>{activity.description}</span></p>)}</div></div>
      </Section>

      <section id="contato" className="contact" aria-labelledby="contact-title"><div><span className="eyebrow">06 / CONTATO</span><h2 id="contact-title">Vamos construir<br />uma boa conversa<span>.</span></h2><p>Conheça meu trabalho, explore os repositórios<br className="desktop-break" /> ou entre em contato pelos canais disponíveis.</p></div><div className="contact-links">
        {profile.email && <a href={`mailto:${profile.email}`}>E-mail <Icon name="arrow" /></a>}
        {profile.phone && <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>Telefone <Icon name="arrow" /></a>}
        {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrow" /></a>}
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"><span><Icon name="github" /> GitHub</span><Icon name="arrow" /></a><a href="/curriculo/"><span><Icon name="file" /> Ver/Imprimir currículo</span><Icon name="arrow" /></a>
      </div></section>
    </main>
    <footer className="site-footer shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>Feito com atenção aos detalhes.</span><a href="#inicio">Voltar ao topo <Icon name="up" /></a></footer>
  </>;
}
