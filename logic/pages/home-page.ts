import { Page } from "playwright/test";
import { BasePage } from "./base-page";
const BASE_URL = 'https://www.terminalx.com/';


import { Locator, Page } from "@playwright/test";

export class Home {
    private categorySelectionFromNav: Locator;
    readonly page: Page


    constructor(page: Page) {
        this.page = page
    }

    clickOnCategoryFromNav =async (category:string) => {
        this.categorySelectionFromNav = this.page.locator(`//nav/ul/li/a[text() = '${category}']`)
        await this.categorySelectionFromNav.click()
    }

    hoverOverCategory =async (category: string) => {
        this.categorySelectionFromNav = this.page.locator(`//nav/ul/li/a[text() = '${category}']`)
        await this.categorySelectionFromNav.hover()


    }



    selectFromSubCategory =async (KidGender:string, clothingOption: string) => {
        await this.page.locator(`//ul/li/a[text() = '${KidGender}']/parent::li/ul/li/a[text() ='${clothingOption}']`).click()
    }

    subCategorySelector = async (SubCategory: string ,item:string) => {
        await this.page.locator(`//a[@href="${SubCategory}"]/parent::li/ul/li/a[text() = "${item}"]`).click()
    }


}





    // //nav/ul/li/a[text() = 'ילדים']/parent::li/parent::ul/parent::nav/following::div/div/div/ul/li/a[text() = 'TEEN']
    // //ul/li/a[text() = 'בנים']/parent::li/ul/li/a[text() ='חולצות']
    // const selectFromSubCategory = this.page.locator(`//a[text() = "TEEN"]/parent::li/ul/li/a[text() = 'מכנסיים']`)
    // `//a[text() = "TEEN"]/parent::li/ul/li/a[text() = 'מכנסיים']