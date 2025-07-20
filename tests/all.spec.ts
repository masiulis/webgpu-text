import { test, expect } from "@playwright/test";
import { pages } from "@webgpu-text/react-native-skia/lib/pages";

const SNAPSHOT = "all.png";

test("all text variants", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveScreenshot(SNAPSHOT);
});

test("all text variants in webgpu", async ({ page }) => {
  await page.goto("http://localhost:3000" + pages.allWebGPU);
  await expect(page).toHaveScreenshot(SNAPSHOT);
});
