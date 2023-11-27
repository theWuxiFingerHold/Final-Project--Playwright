import { test } from "@playwright/test"
import { ApiService } from "../infra/requests/api-service"
import { createLogin } from "../logic/requests/interface/login-interface-req"
import { HomePage } from "../logic/pages/home-page"
import { HttpHelper } from "../logic/requests/interface/http-helper"

test.describe('Testing Terminal-X', async () => {
    test('dummy', async ({ page }) => {
        const home = new HomePage(page)
        await home.goto()
        const api = new ApiService()
        const hp = new HttpHelper()
        await hp.login()
        await page.reload()
        await page.waitForTimeout(5000)
    })

})