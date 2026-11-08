import { test as base, Page, expect } from '@playwright/test';
import { loginAs } from '../steps/auth.steps';
import { UserFactory } from './user.factory';
import { config } from './config';

type Fixtures = {
  /** Page already logged in as the standard user (login is the precondition). */
  standardUserPage: Page;
  /** Access token from the auth API, for Bearer-protected endpoints. */
  authToken: string;
};

export const test = base.extend<Fixtures>({
  standardUserPage: async ({ page }, use) => {
    await loginAs(page, UserFactory.standard());
    await use(page);
    await page.context().clearCookies();
  },

  authToken: async ({ request }, use) => {
    const res = await request.post(`${config.authApiUrl}/auth/login`, {
      data: { username: config.api.username, password: config.api.password },
    });
    expect(res.status()).toBe(200);
    const { accessToken } = await res.json();
    await use(accessToken);
  },
});

export { expect } from '@playwright/test';
