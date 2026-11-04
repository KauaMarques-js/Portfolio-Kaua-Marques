"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    setReady(true);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Tema ainda funciona quando o armazenamento não está disponível. */ }
  }

  return <button className="theme-toggle" type="button" aria-label="Tema escuro" aria-pressed={dark} disabled={!ready} onClick={toggleTheme} title={dark ? "Usar tema claro" : "Usar tema escuro"}>
    <span className="theme-light-icon"><Icon name="moon" /></span>
    <span className="theme-dark-icon"><Icon name="sun" /></span>
  </button>;
}
