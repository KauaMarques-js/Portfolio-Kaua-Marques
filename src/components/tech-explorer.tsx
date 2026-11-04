"use client";

import { useState } from "react";
import { Icon } from "./icon";

type TechnologyGroup = { category: string; items: string[] };

export function TechExplorer({ groups }: { groups: TechnologyGroup[] }) {
  const [selected, setSelected] = useState("Todas");
  const visible = selected === "Todas" ? groups : groups.filter(group => group.category === selected);

  return <div className="tech-explorer">
    <div className="tech-filters" role="group" aria-label="Filtrar tecnologias">
      {["Todas", ...groups.map(group => group.category)].map(category => <button type="button" key={category} aria-pressed={selected === category} aria-controls="tech-results" onClick={() => setSelected(category)}>{category}</button>)}
    </div>
    <p className="sr-only" role="status">{selected === "Todas" ? "Todas as categorias de tecnologias" : `Tecnologias de ${selected}`}</p>
    <div className="tech-grid" id="tech-results">
      {visible.map(group => <div className="tech-group" key={group.category}>
        <div className="tech-group-heading"><Icon name={group.category === "Interfaces" ? "code" : group.category === "Backend e dados" ? "database" : "server"} /><h3>{group.category}</h3></div>
        <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
      </div>)}
    </div>
  </div>;
}
