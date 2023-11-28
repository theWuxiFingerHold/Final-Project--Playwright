import { expect, test as setup, request } from '@playwright/test';
import { HttpHelper } from "../../logic/requests/http-helper"

import { existsSync } from 'fs';
import { Home } from '../../logic/pages/home-page';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    if (existsSync(authFile)) {
        return;
      }
    const home = new Home(page)
    await home.goto()
    const httphelper = new HttpHelper(page)
    await httphelper.login()
    await page.context().storageState({ path: authFile });
});