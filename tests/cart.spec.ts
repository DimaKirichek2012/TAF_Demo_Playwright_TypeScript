import { test, expect } from '../core/fixtures';
import { addBackpackToCart } from '../steps/products.steps'

test('Add backpack to cart', async ({standardUserPage}) => {
    let productsInCart = await addBackpackToCart(standardUserPage)
    await expect(productsInCart).toHaveText('1')
})