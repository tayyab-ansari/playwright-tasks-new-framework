
import {test} from '../fixtures/fixture'
import {credentials} from '../data/credentials/credentials'


test.describe('Scenario 1 @scenario1 @all', () => {

    const envCredentials = credentials

    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Login with valid credentials', async ({loginPom, inventoryPom}) => {
        await loginPom.validateLoginPage()
        await loginPom.enterUsername(envCredentials.standardUser)
        await loginPom.enterPassword(envCredentials.password)
        await loginPom.clickLoginButton()
        await inventoryPom.validateInventoryPage()
    })

 
})
