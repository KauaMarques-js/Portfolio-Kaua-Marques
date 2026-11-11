import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { Icon } from "./icon";

const introductions: Record<string, string> = {
  "flor-arabe": "Catálogo de perfumes com pedidos pelo WhatsApp.",
  airmetric: "Protótipo sobre qualidade do ar. 2º lugar no NASA Space Apps de Cuiabá, em 2025.",
  incluvia: "Auditorias de acessibilidade web e análise de vieses capacitistas em respostas de IA.",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const image = project.id === "airmetric" ? project.resultImage : project.image;
  return <article id={`projeto-${project.id}`} className={`project project-${project.id}`} aria-labelledby={`title-${project.id}`}>
    <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
    <div className="project-body">
      <h3 id={`title-${project.id}`}>{project.name}</h3>
      <p className="project-meta">{project.status}</p>
      <p className="project-description">{introductions[project.id] || project.description}</p>
      <p className="project-tech">{project.tech.slice(0, 3).join(" / ")}</p>
      <div className="project-links">
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site de ${project.name} (abre em nova aba)`}>Visitar site <Icon name="arrow" /></a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.name} no GitHub (abre em nova aba)`}>Ver código <Icon name="arrow" /></a>}
      </div>
      {(project.note || project.details || project.resultImage) && <details className="project-details"><summary>Sobre o projeto <Icon name="down" /></summary>
        {project.note && <p>{project.note}</p>}{project.details && <p>{project.details}</p>}
        {project.resultImage && <a href={project.resultImage} target="_blank" rel="noopener noreferrer">Ver resultado local <Icon name="arrow" /></a>}
      </details>}
    </div>
    <div className="project-visual">{image ? <Image src={image} alt={project.id === "airmetric" ? "Resultado do júri local do NASA Space Apps Cuiabá 2025, com AirMetrics em segundo lugar" : project.imageAlt || project.name} width={800} height={500} sizes="(max-width: 600px) calc(100vw - 78px), (max-width: 800px) 200px, 260px" /> : <div className="project-wordmark" aria-hidden="true"><strong>{project.name}</strong><span>ACESSIBILIDADE DIGITAL</span></div>}</div>
  </article>;
}
