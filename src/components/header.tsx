"use client";

import { useRef } from "react";
import { navigation } from "@/data/portfolio";
import { Icon } from "./icon";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  return <header className="header-wrap">
    <div className="site-header shell">
      <a className="brand" href="#inicio" aria-label="Kauã Marques, início">km.</a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
      <div className="header-actions"><a className="header-resume" href="/curriculo/">Currículo</a><ThemeToggle /></div>
      <details className="mobile-nav" ref={menu} onKeyDown={event => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
        <summary>Menu <Icon name="menu" /></summary>
        <nav aria-label="Navegação no celular">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => { if (menu.current) menu.current.open = false; }}>{item.label}</a>)}</nav>
      </details>
    </div>
  </header>;
}
