import { test, expect } from '@playwright/test';

test('homepage should load correctly', async ({ page }) => {
  await page.goto('https://example.com');

  // Check title
  await expect(page).toHaveTitle(/Example/);
});

test('should navigate to more information page', async ({ page }) => {
  await page.goto('https://example.com');

  // Click link
  await page.click('text=More information');

  // Verify URL changed
  await expect(page).to.HaveURL(/iana.org/);
});

test('invalid login shows error', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#submit');

  await expect(page.locator('#error')).toBeVisible();
});

test('simple check', async ({ page }) => {
  await page.goto('https://example.com');
});