import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.userNameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto(url: string = '/') {
    await this.page.goto(url);
  }

  async login(user: string, password: string) {
    await this.userNameField.fill(user);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
