import {expect, Page} from '@playwright/test'
import {BasePage} from '../basePage'
import {Assertion} from '../assertion'


const inventoryList = '#inventory_container:nth-child(1)'
const appLogo = '//div[text()="Swag Labs"]'
const inventoryPageTitle = '//span[text()="Products"]'
const cartIcon = '#shopping_cart_container'
const filterDropdown= 'select[data-test="product_sort_container"]'
const productPrices = '//button[text()="Add to cart"]/../div'
const firstProductAddToCartBtn = 'button[name="add-to-cart-sauce-labs-onesie"]'
const secProductAddToCartBtn = 'button[name="add-to-cart-sauce-labs-bike-light"]'


export class InventoryPagePom extends BasePage {

    constructor(page: Page) {
        super(page)
    }

  assert = new Assertion(this._page)

  async validateInventoryPage(): Promise<void> {
      await this.assert.shouldBeVisible(appLogo)
      await this.assert.shouldBeVisible(inventoryList)
      await this.assert.shouldBeVisible(inventoryPageTitle)
      await this.assert.shouldBeVisible(cartIcon)
      await this.assert.shouldBeVisible(filterDropdown)
  }

  // expected Values ['az', 'za', 'lohi', 'hilo']
  async applyFilter(filterOption: string): Promise<void> {
      await this.assert.shouldBeVisible(filterDropdown)
      await this._page.click(filterDropdown)
      await this._page.locator(filterDropdown).selectOption(filterOption)
  }

  async validateAppliedFilter(): Promise<void> {
      let previousPrice: number | null = null
      let currentPrice: number
      const elements = await this._page.$$(productPrices)
      for (const element of elements) {
          const priceText = await element.textContent()
          if (priceText) {
              currentPrice = parseFloat(priceText.replace('$', ''))
              if (previousPrice !== null) {
                  expect(currentPrice).toBeGreaterThanOrEqual(previousPrice)
              }
              previousPrice = currentPrice
          }
      }
  }

  async addToCartTwoLowestPriceItems(): Promise<void> {
      await this._page.click(firstProductAddToCartBtn)
      await this._page.click(secProductAddToCartBtn)
  }
  
  async goToCart(): Promise<void> {
      await this._page.locator(cartIcon).click()
  }

}