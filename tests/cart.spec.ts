import { test, expect } from '../core/fixtures';
import { addBackpackToCart } from '../steps/products.steps';

test.describe('Cart', { tag: '@ui' }, () => {
  test('adding the backpack shows 1 item in the cart badge', async ({ standardUserPage }) => {
    const cartBadge = await addBackpackToCart(standardUserPage);
    await expect(cartBadge).toHaveText('1');
  });
});
