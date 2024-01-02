
import {test} from '../fixtures/fixture'
import {credentials} from '../data/credentials/credentials'

test.describe('Scenario 2 @scenario2 @all', () => {

    const envCredentials = credentials

    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Sort the item from low to high', async ({inventoryPom, cartPom, homePage}) => {
        await homePage.login(envCredentials.standardUser, envCredentials.password)
        await inventoryPom.applyFilter('lohi')
        await inventoryPom.validateAppliedFilter()
        await inventoryPom.addToCartTwoLowestPriceItems()
        await inventoryPom.goToCart()
        await cartPom.validateCartPage()
        await cartPom.validateProductsInCart()
        await cartPom.removeAllProductsFromCart()
        await homePage.logout()
    })

 
})
