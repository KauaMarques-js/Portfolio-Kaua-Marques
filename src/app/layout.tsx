import type { Metadata } from "next";
import "./globals.css";

const deploymentDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (deploymentDomain ? `https://${deploymentDomain}` : "http://localhost:3000");
const isProductionDeployment = process.env.VERCEL_ENV === "production";
const themeScript = '(function(){try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="dark"?"dark":"light"}catch(e){}})()';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kauã Marques Almeida — Desenvolvedor Full Stack",
  description: "Portfólio de Kauã Marques Almeida, desenvolvedor Full Stack em Cuiabá. Aplicações web, APIs, experiência profissional e formação.",
  openGraph: {
    title: "Kauã Marques Almeida — Desenvolvedor Full Stack",
    description: "Aplicações web, do que se vê ao que faz funcionar. Conheça meus projetos e minha trajetória.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kauã Marques Almeida, Desenvolvedor Full Stack em Cuiabá" }],
  },
  robots: { index: isProductionDeployment, follow: isProductionDeployment },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
