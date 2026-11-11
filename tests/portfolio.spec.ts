import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`portfólio responsivo e acessível em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    const failed: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("response", response => { if (response.status() >= 400) failed.push(response.url()); });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Desenvolvo aplicações web e APIs.");
    await expect(page.getByRole("link", { name: "Kauã Marques, início" })).toBeVisible();
    await expect(page.getByText("SESP/MT · Spedy")).toBeVisible();
    await expect(page.getByRole("link", { name: /kaua\.marquesal@gmail\.com/ })).toHaveAttribute("href", "mailto:kaua.marquesal@gmail.com");
    await expect(page.getByRole("link", { name: /\+55 \(65\) 99915-7088/ })).toHaveAttribute("href", "tel:+5565999157088");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("link", { name: "Ver projetos", exact: true }).click();
    await expect(page).toHaveURL(/#projetos$/);
    await expect(page.getByRole("heading", { name: "Projetos selecionados" })).toBeInViewport();
    await expect(page.locator(".project h3")).toHaveText(["Flor Árabe", "AirMetrics", "Incluvia"]);
    await expect(page.locator(".more-projects")).not.toHaveAttribute("open", "");
    for (const image of await page.locator(".project-visual img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    }
    await expect(page.getByRole("link", { name: "Visitar site de Flor Árabe (abre em nova aba)" })).toHaveAttribute("href", "https://flor-arabe-perfumaria.vercel.app");
    await expect(page.locator(".project-airmetric")).toContainText("NASA Space Apps de Cuiabá, em 2025");
    await expect(page.locator(".project-incluvia img")).toHaveAttribute("src", "/projects/incluvia.png");
    expect(await page.locator('a[target="_blank"]:not([rel*="noopener"])').count()).toBe(0);
    await page.locator(".more-projects > summary").click();
    await expect(page.getByRole("article", { name: "AgroPulse", exact: true })).toBeVisible();
    await expect(page.getByRole("article", { name: "Emissor Cuiabano", exact: true })).toContainText("NF-e é simulada");
    await expect(page.getByRole("article", { name: "ADIA / CognitiveLoop", exact: true })).toContainText("sem validação com estudantes");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
    await page.locator(".more-projects > summary").click();
    await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: `artifacts/hero-${width}.png` });
    }
    await page.screenshot({ path: `artifacts/portfolio-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
    expect(failed).toEqual([]);
  });
}

test("menu mobile, escape e navegação por teclado", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#conteudo$/);
  const menu = page.locator(".mobile-nav > summary");
  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(page.locator(".mobile-nav")).not.toHaveAttribute("open", "");
  await menu.click();
  const nav = page.getByRole("navigation", { name: "Navegação no celular" });
  await nav.getByRole("link", { name: "Sobre", exact: true }).click();
  await expect(page).toHaveURL(/#sobre$/);
  await expect(nav).toBeHidden();
  await expect(page.getByRole("heading", { name: "Sobre", exact: true })).toBeInViewport();
});

test("detalhes dos projetos preservam escopo e resultado local", async ({ page }) => {
  await page.goto("/");
  for (const id of ["flor-arabe", "airmetric", "incluvia"]) {
    const summary = page.locator(`.project-${id} summary`);
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(`.project-${id} details`)).toHaveAttribute("open", "");
  }
  await expect(page.locator(".project-flor-arabe details")).toContainText("Checkout próprio em desenvolvimento");
  await expect(page.locator(".project-airmetric details")).toContainText("dados simulados");
  await expect(page.getByRole("link", { name: "Ver resultado local", exact: true })).toHaveAttribute("href", "/projects/airmetric.jpg");
  await expect(page.locator(".project-incluvia details")).toContainText("revisão humana");
  await page.locator(".more-projects > summary").click();
  await expect(page.locator(".more-projects h3")).toHaveText(["AgroPulse", "Vaultix Security", "Emissor Cuiabano", "Aumigos", "ADIA / CognitiveLoop"]);
  await expect(page.getByRole("article", { name: "Aumigos", exact: true }).getByRole("link")).toHaveCount(0);
});

test("tema persiste e mantém contraste nas duas opções", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Tema escuro" });
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await toggle.click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await page.screenshot({ path: "artifacts/portfolio-light.png", fullPage: true });
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  await toggle.click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("currículo completo acessível, responsivo e imprimível", async ({ page }) => {
  await page.addInitScript(() => { window.print = () => { document.documentElement.dataset.printRequested = "true"; }; });
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("link", { name: "Currículo", exact: true }).click();
  await expect(page).toHaveURL(/\/curriculo\/$/);
  await expect(page.locator(".resume-project")).toHaveCount(8);
  await expect(page.getByRole("link", { name: "kaua.marquesal@gmail.com" })).toHaveAttribute("href", "mailto:kaua.marquesal@gmail.com");
  await expect(page.getByRole("link", { name: "+55 (65) 99915-7088" })).toHaveAttribute("href", "tel:+5565999157088");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole("button", { name: "Imprimir / Salvar em PDF" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-print-requested", "true");
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(result.violations.map(v => v.id)).toEqual([]);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".resume-toolbar")).toBeHidden();
  await page.pdf({ path: "artifacts/curriculo-qa.pdf", format: "A4", preferCSSPageSize: true, printBackground: true });
});

test("movimento reduzido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
  await expect(page.locator(".project-incluvia")).not.toHaveClass(/reveal-pending/);
});

test("projetos entram com movimento discreto ao rolar a página", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 700 });
  await page.goto("/");
  const lastProject = page.locator(".project-incluvia");
  await expect(lastProject).toHaveClass(/reveal-pending/);
  await lastProject.scrollIntoViewIfNeeded();
  await expect(lastProject).toHaveClass(/reveal-entered/);
});
