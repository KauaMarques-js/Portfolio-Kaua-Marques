type IconName = "arrow" | "down" | "up" | "left" | "github" | "file" | "pin" | "sun" | "moon" | "menu" | "code" | "server" | "database";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    down: <><path d="M12 4v16m-6-6 6 6 6-6" /></>,
    up: <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
    left: <><path d="M20 12H4m6-6-6 6 6 6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5m-5 11h5" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
    file: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" /><path d="M14 3v5h5M8 13h8M8 17h5" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.1 1.5a14 14 0 0 0-7.4 0C4.8-.4 3.6 0 3.6 0a5.3 5.3 0 0 0-.1 4A5.7 5.7 0 0 0 2 8c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 8 18v4" transform="translate(1 2) scale(.9)" /></>,
  };
  return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
