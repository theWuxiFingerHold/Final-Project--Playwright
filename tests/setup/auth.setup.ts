import { expect, test as setup } from '@playwright/test';
import { HttpHelper } from "../../logic/requests/http-helper"
import { HomePage } from '../../logic/pages/home-page';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    const httphelper = new HttpHelper(page)
    await httphelper.login()
    await page.context().storageState({ path: authFile });
});