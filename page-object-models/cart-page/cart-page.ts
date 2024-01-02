import {Page} from '@playwright/test'
import {BasePage} from '../basePage'
import {Assertion} from '../assertion'
import {Product1, Product2} from '../../data/ecommerce/ecommerce-data'

const cartPageTitle = '//span[text()="Your Cart"]'
const checkoutButton= '#checkout'
const removeButton = '//button[text()="Remove"]'


export class CartPagePom extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    assert = new Assertion(this._page)

    async validateCartPage(): Promise<void> {
        await this.assert.shouldBeVisible(cartPageTitle)
        await this.assert.shouldBeVisible(checkoutButton)
    }

    async validateProductsInCart(): Promise<void> {
        await this.assert.shouldBeVisible(`//div[text()="${Product1.productName}"]`)
        await this.assert.shouldBeVisible(`//div[text()="${Product1.productPrice}"]`)
        await this.assert.shouldBeVisible(`//div[text()="${Product2.productName}"]`)
        await this.assert.shouldBeVisible(`//div[text()="${Product2.productPrice}"]`)
    }


    async removeAllProductsFromCart(): Promise<void> {
        const elements = await this._page.$$(removeButton)
        for (const element of elements) {
            await element.click()
        }
    }

    
}