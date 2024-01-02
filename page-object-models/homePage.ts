import {Assertion} from './assertion'
import {BasePage} from './basePage'
import {expect, Page} from '@playwright/test'

const productTitles = 'div.card-body'
const itemsInCart = 'button[routerlink="/dashboard/cart"] label'
const minPriceTxt = 'input[name="minPrice"]'
const maxPriceTxt = 'input[name="maxPrice"]'
const addToCartBtn = '.fa.fa-shopping-cart'
const homePageBtn = 'button[routerlink="/dashboard/"]'
//const fashionCheckbox = 'div:nth-child(3) > input[type=checkbox]'


/**
 * Library of functions for the E-Commerece Applicaiton.
 *
 */

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    assert = new Assertion(this._page)


    async selectProductDynamically(productName: string): Promise<void> {
        await this._page.locator(homePageBtn).click()
        const count = await this._page.locator(productTitles).count()

        for (let i = 0; i < count; i++) {
            if( await this._page.locator(productTitles).nth(i).locator('b').textContent() === productName) {
                await this._page.locator(productTitles).nth(i).locator('text = Add to Cart').click() 
                break    
            }
            const numberOfItemsInCart=await this._page.locator(itemsInCart).textContent()
            await expect(numberOfItemsInCart).toBe('1')
        }
    }

    async searchProductByPriceRange(minPrice: string, maxPrice:string): Promise<void> {

        await this._page.locator(minPriceTxt).nth(1).fill(minPrice)
        await this._page.locator(maxPriceTxt).nth(1).fill(maxPrice)
        await this._page.keyboard.press('Enter')
        await this._page.locator(addToCartBtn).nth(1).click()

    }



}
