import {Assertion} from './assertion'
import {BasePage} from './basePage'
import {Page} from '@playwright/test'





/**
 * Library of functions for the E-Commerece Applicaiton.
 *
 */

export class Utilities extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    assert = new Assertion(this._page)




}
