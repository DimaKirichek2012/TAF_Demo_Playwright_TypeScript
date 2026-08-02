import { test, expect } from '../core/fixtures'

test('Standard user can log in',async ({standardUserPage}) =>{
    await expect(standardUserPage).toHaveURL(/inventory/)
})