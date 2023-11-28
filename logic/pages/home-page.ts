import { Page } from "playwright/test";
import { BasePage } from "./base-page";
const BASE_URL = 'https://www.terminalx.com/';


export class HomePage {

    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    goto = async (): Promise<void> => {
        await this.page.goto(BASE_URL)
    }
}