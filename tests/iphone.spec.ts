import { expect, test } from "@playwright/test";

test("WebKit mobile: fontes, SVGs, menu, tema e filtros", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.fonts.check('14px "Geist"'))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(await page.locator("body").innerText()).not.toMatch(/[↑↓←→↗↘↙↖]/u);
  await expect(page.locator(".visual-caption svg")).toBeVisible();
  await page.screenshot({ path: "artifacts/webkit-mobile-claro.png", fullPage: true });
  await page.getByRole("button", { name: "Tema escuro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByText("Menu", { exact: false }).click();
  const nav = page.getByRole("navigation", { name: "Navegação no celular" });
  await nav.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(nav).toBeHidden();
  await expect(page).toHaveURL(/#projetos$/);
  await page.getByRole("button", { name: "Backend e dados", exact: true }).click();
  await expect(page.locator("#tech-results")).toContainText("SQLite");
  await expect(page.locator("#tech-results")).not.toContainText("Next.js");
  await page.getByRole("button", { name: "Todas", exact: true }).click();
  await page.screenshot({ path: "artifacts/webkit-mobile-escuro.png", fullPage: true });
  expect(errors).toEqual([]);
});
