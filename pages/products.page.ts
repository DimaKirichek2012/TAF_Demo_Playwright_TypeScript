import { Page, Locator } from '@playwright/test'

export class ProductsPage{
    readonly cart: Locator
    readonly cartBadge: Locator
    readonly addBackpackToCartButton: Locator

    constructor(private page: Page){
        this.cart = page.locator('.shopping_cart_link')
        this.cartBadge = page.locator('.shopping_cart_badge')
        this.addBackpackToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
    }

    async addBackpackToCart(){
        await this.addBackpackToCartButton.click()
    }

    async getCartBadgeLocator(){
        return this.cartBadge
    }
}