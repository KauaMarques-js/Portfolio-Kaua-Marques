import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { Icon } from "./icon";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasImage = project.image && existsSync(path.join(process.cwd(), "public", project.image));
  return <article className={`project project-${project.id}`}>
    <div className="project-visual">
      {hasImage && project.image ? <Image src={project.image} alt={project.imageAlt || `Interface de ${project.name}`} width={800} height={500} sizes="(max-width: 700px) 100vw, 50vw" /> : <div className="project-placeholder" aria-label={`${project.name}, captura de tela ainda não adicionada`}>
        <span className="visual-index" aria-hidden="true">PROJETO / {String(index + 1).padStart(2, "0")}</span>
        <span className="visual-wordmark" aria-hidden="true">{project.name}<span className="wordmark-dot">.</span></span>
        <span className="visual-caption">{project.category}<Icon name="arrow" /></span>
      </div>}
    </div>
    <div className="project-body">
      <div className="project-title"><h3>{project.name}</h3><span className="project-category">{project.category}</span></div>
      <p>{project.description}</p>
      <ul className="tags" aria-label={`Tecnologias de ${project.name}`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-meta">{project.status && <span>{project.status}</span>}{project.role && <span>Papel: {project.role}</span>}</div>
      {project.note && <p className="project-note">{project.note}</p>}
      <div className="project-links">
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site de ${project.name} (abre em nova aba)`}>Visitar site <Icon name="arrow" /></a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.name} no GitHub (abre em nova aba)`}>Ver código <Icon name="arrow" /></a>}
      </div>
    </div>
  </article>;
}
