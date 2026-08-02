import { test, expect } from '@playwright/test';

test('Site opens', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Swag Labs');
});

