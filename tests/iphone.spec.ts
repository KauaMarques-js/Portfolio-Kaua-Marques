import { expect, test } from "@playwright/test";

test("WebKit mobile: fontes, imagens, menu, tema e detalhes", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.fonts.check('14px "Geist"'))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  for (const image of await page.locator(".project-visual img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  await page.getByRole("button", { name: "Tema escuro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator(".mobile-nav > summary").click();
  const nav = page.getByRole("navigation", { name: "Navegação no celular" });
  await nav.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(nav).toBeHidden();
  await expect(page).toHaveURL(/#projetos$/);
  await page.locator(".project-flor-arabe summary").click();
  await expect(page.locator(".project-flor-arabe details")).toContainText("Checkout próprio em desenvolvimento");
  await page.screenshot({ path: "artifacts/webkit-mobile.png", fullPage: true });
  expect(errors).toEqual([]);
});
