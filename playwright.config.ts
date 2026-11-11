import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3100",
    headless: true,
  },
  projects: [
    { name: "chrome", use: { browserName: "chromium", ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } } : {}) }, testIgnore: "**/iphone.spec.ts" },
    { name: "webkit-mobile", use: { browserName: "webkit", viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }, testMatch: "**/iphone.spec.ts" },
  ],
  webServer: {
    command: "node scripts/serve.mjs 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: !process.env.CI,
  },
});
