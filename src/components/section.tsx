import type { ReactNode } from "react";

export function Section({ id, number, title, children, className = "" }: { id: string; number: string; title: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
    <div className="section-heading"><span className="section-number" aria-hidden="true">{number}</span><h2 id={`${id}-title`}>{title}</h2></div>
    <div className="section-content">{children}</div>
  </section>;
}
