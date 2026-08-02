import { Page } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { User } from '../core/user.factory'

export async function loginAs(page: Page, user: User){
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(user.username, user.password)
}