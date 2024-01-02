import {test as base} from '@playwright/test'
import {HomePage} from '../page-object-models/homePage'
import {Assertion} from '../page-object-models/assertion'
import {LoginPagePom} from '../page-object-models/login-page/login-page'
import {InventoryPagePom} from '../page-object-models/inventory-page/inventory-page'
import {CartPagePom} from '../page-object-models/cart-page/cart-page'
import {Utilities} from '../page-object-models/utilities'


type Fixtures = {
    homePage: HomePage
    assert: Assertion
    loginPom: LoginPagePom
    inventoryPom: InventoryPagePom
    cartPom: CartPagePom
    utilities:Utilities
}

export const test = base.extend<Fixtures>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page))
    },
    assert: async ({page}, use) => {
        await use(new Assertion(page))
    },
    loginPom: async ({page}, use) => {
        await use(new LoginPagePom(page))
    },
    inventoryPom: async ({page}, use) => {
        await use(new InventoryPagePom(page))
    },
    cartPom: async ({page}, use) => {
        await use(new CartPagePom(page))
    },
    utilities: async ({page}, use) => {
        await use(new  Utilities(page))
    },

})
