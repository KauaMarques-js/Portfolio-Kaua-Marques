import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 768, 1440]) {
  test(`página utilizável e sem overflow em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    const failedResponses: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("response", response => { if (response.status() >= 400) failedResponses.push(response.url()); });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Kauã MarquesAlmeida.");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole("link", { name: "Conheça meus projetos" }).click();
    await expect(page).toHaveURL(/#projetos$/);
    await expect(page.getByRole("heading", { name: "Projetos selecionados" })).toBeInViewport();
    // Sem capturas fornecidas, a página deve renderizar a alternativa textual, sem 404.
    await expect(page.locator(".project-placeholder")).toHaveCount(1);
    await expect(page.locator("#projetos .project-title h3")).toHaveText(["Flor Árabe"]);
    await expect(page.getByRole("link", { name: "Visitar site de Flor Árabe (abre em nova aba)" })).toHaveAttribute("href", "https://flor-arabe-perfumaria.vercel.app");
    await expect(page.locator('#projetos a[href*="github.com"]')).toHaveCount(0);
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
    await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
    expect(await page.locator('a[target="_blank"]:not([rel*="noopener"])').count()).toBe(0);
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(accessibility.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) }))).toEqual([]);
    await page.goto("/");
    await page.screenshot({ path: `artifacts/portfolio-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
    expect(failedResponses).toEqual([]);
  });
}

test("menu no celular e acesso por teclado", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#conteudo$/);
  await page.getByText("Menu", { exact: false }).click();
  const mobileNav = page.getByRole("navigation", { name: "Navegação no celular" });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: "Formação" }).click();
  await expect(page).toHaveURL(/#formacao$/);
  await expect(page.getByRole("heading", { name: "Formação e atividades" })).toBeInViewport();
});

test("currículo textual acessível, responsivo e com impressão funcional", async ({ page }) => {
  await page.addInitScript(() => {
    window.print = () => { document.documentElement.dataset.printRequested = "true"; };
  });
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("link", { name: "Currículo", exact: true }).click();
  await expect(page).toHaveURL(/\/curriculo\/$/);
  await expect(page.locator(".resume-project")).toHaveCount(1);
  await expect(page.locator(".resume-project-url")).toHaveAttribute("href", "https://flor-arabe-perfumaria.vercel.app");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole("button", { name: "Imprimir / Salvar em PDF" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-print-requested", "true");
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(accessibility.violations.map(item => item.id)).toEqual([]);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".resume-toolbar")).toBeHidden();
  await expect(page.getByRole("heading", { name: "Kauã Marques Almeida", exact: true })).toBeVisible();
  await expect(page.locator(".resume-sheet img")).toHaveCount(0);
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.screenshot({ path: "artifacts/curriculo-impressao.png", fullPage: true });
  await page.pdf({ path: "artifacts/curriculo-qa.pdf", format: "A4", preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false, tagged: true });
});

test("movimento reduzido respeita a preferência do navegador", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});
