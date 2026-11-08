import { test, expect } from '../core/fixtures';

test.describe('Smoke', { tag: ['@ui', '@smoke'] }, () => {
  test('site opens', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Swag Labs');
  });
});
