import {Page} from '@playwright/test'
import {BasePage} from '../basePage'
import {Assertion} from '../assertion'



const usernameInputField = '#user-name'
const passwordInputField = '#password'
const loginButton = '#login-button'


export class LoginPagePom extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    assert = new Assertion(this._page)

    async validateLoginPage(): Promise<void> {
        await this.assert.shouldBeVisible(usernameInputField)
        await this.assert.shouldBeVisible(passwordInputField)
        await this.assert.shouldBeVisible(loginButton)
    }

    async enterUsername(username: string): Promise<void> {
        await this.assert.shouldBeVisible(usernameInputField)
        await this._page.locator(usernameInputField).clear()
        await this._page.locator(usernameInputField).fill(username)
    }

    async enterPassword(password: string): Promise<void> {
        await this.assert.shouldBeVisible(passwordInputField)
        await this._page.locator(passwordInputField).clear()
        await this._page.locator(passwordInputField).fill(password)
    }

    async clickLoginButton(): Promise<void> {
        await this.assert.shouldBeVisible(loginButton)
        await this._page.click(loginButton)
    }

}