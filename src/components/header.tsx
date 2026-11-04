"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/portfolio";
import { Icon } from "./icon";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    navigation.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    function updateProgress() {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0);
      if (window.scrollY < 100) setActive("");
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  function selectSection(id: string) {
    setActive(id);
    if (menu.current) menu.current.open = false;
  }

  return <header className="header-wrap" id="inicio">
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    <div className="site-header shell">
      <a className="brand" href="#inicio" aria-label="Kauã Marques, início"><span className="brand-bracket">&lt;</span>km<span className="brand-bracket"> /&gt;</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => selectSection(item.id)}>{item.label}</a>)}</nav>
      <div className="header-actions"><ThemeToggle /><a className="header-resume" href="/curriculo/">Currículo <Icon name="file" /></a></div>
      <details className="mobile-nav" ref={menu}>
        <summary>Menu <Icon name="menu" /></summary>
        <nav aria-label="Navegação no celular">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => selectSection(item.id)}>{item.label}</a>)}</nav>
      </details>
    </div>
  </header>;
}
