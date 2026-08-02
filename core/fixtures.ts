import { test as base, Page, expect} from '@playwright/test';
import { loginAs } from '../steps/auth.steps';
import { UserFactory } from './user.factory';

export const test = base.extend<{ standardUserPage: Page ; authToken: string}>({
  standardUserPage: async ({ page }, use) => {
    await loginAs(page, UserFactory.standard());  
    await use(page);   
    await page.context().clearCookies()                            
  },

  authToken: async({request}, use) => {
    const res = await request.post('https://dummyjson.com/auth/login', {
      data: { username: 'emilys', password: 'emilyspass' }
    })
    expect(res.status()).toBe(200)
    const { accessToken } = await res.json()
    await use( accessToken )
  }
});

export { expect } from '@playwright/test';