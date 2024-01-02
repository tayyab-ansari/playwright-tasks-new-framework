import {expect, Page} from '@playwright/test'


const usernameInputField = '#user-name'
const passwordInputField = '#password'
const loginButton = '#login-button'
const inventoryPageTitle = '//span[text()="Products"]'
const menuButton = '#react-burger-menu-btn'
const logoutButton = '#logout_sidebar_link'
/**
 * Library of functions that perform actions on common components.
 *
 * This class should be inherited by all page-object-models.
 *
 * Only functions dealing with common components should be placed here.
 */

export class BasePage {

    protected _page: Page

    constructor(page: Page) {
        this._page = page
    }

    async login(username: string, password: string): Promise<void> {
        await this._page.fill(usernameInputField, username)
        await this._page.fill(passwordInputField, password)
        await this._page.click(loginButton)
        await expect(this._page.locator(inventoryPageTitle)).toBeVisible()
    }

    async logout(): Promise<void> {
        await this._page.click(menuButton)
        await this._page.locator(logoutButton).click()
    }
}

export interface StoredData {
    number: string
}
