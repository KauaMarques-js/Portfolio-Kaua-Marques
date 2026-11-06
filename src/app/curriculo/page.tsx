import type { Metadata } from "next";
import { activities, education, experiences, profile, projects, technologies } from "@/data/portfolio";
import { PrintButton } from "@/components/print-button";
import { Icon } from "@/components/icon";

export const metadata: Metadata = { title: "Currículo — Kauã Marques Almeida" };

export default function Resume() {
  return <main className="resume-page">
    <div className="resume-toolbar"><a href="/"><Icon name="left" /> Voltar ao portfólio</a><PrintButton /><p>Na janela de impressão, selecione A4 e “Salvar como PDF”.</p></div>
    <article className="resume-sheet" aria-label="Currículo de Kauã Marques Almeida">
      <header className="resume-header"><h1>{profile.name}</h1><p className="resume-title">{profile.title} · Aplicações web e backend</p><p>{profile.location}</p><p className="resume-contacts"><a href={profile.githubUrl}>github.com/{profile.githubHandle}</a>{profile.email && <> · <a href={`mailto:${profile.email}`}>{profile.email}</a></>}{profile.phone && <> · {profile.phone}</>}{profile.linkedinUrl && <> · <a href={profile.linkedinUrl}>LinkedIn</a></>}</p></header>
      <section className="resume-section"><h2>Resumo profissional</h2><p>{profile.summary}</p></section>
      <section className="resume-section"><h2>Experiência profissional</h2>{experiences.map(experience => <div className="resume-entry" key={experience.company}><h3>{experience.company} — {experience.title}</h3><p className="resume-context">{experience.context}{experience.period && ` · ${experience.period}`}</p><ul>{experience.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></div>)}</section>
      <section className="resume-section"><h2>Projetos selecionados</h2>{projects.filter(project => project.featured).map(project => <div className="resume-entry resume-project" key={project.id}><h3>{project.name}{project.status && <span> · {project.status}</span>}</h3>{project.recognition && <p><strong>{project.recognition}</strong></p>}<p>{project.description} {project.note}</p>{project.tech.length > 0 && <p className="resume-tech">{project.tech.join(" · ")}</p>}{project.demoUrl && <a className="resume-project-url" href={project.demoUrl}>{project.demoUrl.replace("https://", "")}</a>}{!project.demoUrl && project.githubUrl && <a className="resume-project-url" href={project.githubUrl}>{project.githubUrl.replace("https://", "")}</a>}</div>)}</section>
      <section className="resume-section"><h2>Competências técnicas</h2>{technologies.map(group => <p key={group.category}><strong>{group.category}:</strong> {group.items.join(", ")}.</p>)}</section>
      <section className="resume-section"><h2>Formação</h2>{education.map(item => <div className="resume-entry" key={item.title}><h3>{item.title}</h3><p>{item.institution} · {item.location} · {item.status}{item.period && ` · ${item.period}`}</p></div>)}</section>
      <section className="resume-section"><h2>Atividades</h2>{activities.map(item => <p key={item.name}><strong>{item.name}</strong> — {item.description}</p>)}</section>
    </article>
  </main>;
}
