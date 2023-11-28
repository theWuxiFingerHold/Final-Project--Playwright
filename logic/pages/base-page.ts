import { Page } from "playwright";

const BASE_URL = 'https://www.terminalx.com/';

export class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    goto = async (): Promise<void> => {
        await this.page.goto(BASE_URL)
    }
    reload = async (): Promise<void> => {
        await this.page.reload()
    }
    wait = async (time: number): Promise<void> => {
        await this.page.waitForTimeout(time)
    }

}