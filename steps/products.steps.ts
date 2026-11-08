import { Page, Locator } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';

export async function addBackpackToCart(page: Page): Promise<Locator> {
  const productsPage = new ProductsPage(page);
  await productsPage.addBackpackToCart();
  return productsPage.getCartBadgeLocator();
}
