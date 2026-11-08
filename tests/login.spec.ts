import { test, expect } from '../core/fixtures';
import { loginAs } from '../steps/auth.steps';
import { UserFactory } from '../core/user.factory';

test.describe('Login', { tag: '@ui' }, () => {
  test('standard user can log in', async ({ standardUserPage }) => {
    await expect(standardUserPage).toHaveURL(/inventory/);
  });

  test('locked-out user sees an error and stays on the login page', async ({ page }) => {
    const loginPage = await loginAs(page, UserFactory.locked());
    await expect(loginPage.errorMessage).toContainText('locked out');
    await expect(page).not.toHaveURL(/inventory/);
  });
});
