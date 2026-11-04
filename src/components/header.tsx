import { navigation } from "@/data/portfolio";
import { Icon } from "./icon";

export function Header() {
  return (
    <header className="site-header shell">
      <a className="brand" href="#inicio" aria-label="Kauã Marques, início">km<span aria-hidden="true">.</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
      </nav>
      <a className="header-resume" href="/curriculo/">Currículo <Icon name="arrow" /></a>
      <details className="mobile-nav">
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Navegação no celular">{navigation.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
      </details>
    </header>
  );
}
