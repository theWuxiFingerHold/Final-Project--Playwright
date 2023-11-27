import { test } from "@playwright/test"
import { ApiService } from "../infra/requests/api-service"
import { createLogin } from "../logic/requests/interface/login-interface-req"

test.describe('Testing Terminal-X', async () => {
    test('dummy', async ({ page }) => {
        await page.goto('https://www.terminalx.com/')
        const api = new ApiService()
        const cred = createLogin('josaca4731@dpsols.com', '123456$Test')
        const res = await api.post('https://www.terminalx.com/pg/MutationUserLogin?v=I9dIkXxqUgEmvaClIy6g3%2FMlpMA%3D', cred)
        await page.reload()
        await page.waitForTimeout(5000)
        console.log(res)
    })

})