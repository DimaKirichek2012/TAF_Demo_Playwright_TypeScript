
import { Page } from '@playwright/test'
import { ProductsPage } from '../pages/products.page'

export async function addBackpackToCart(page: Page){
    const productPage = new ProductsPage(page)
    await productPage.addBackpackToCart()
    return productPage.getCartBadgeLocator()
}