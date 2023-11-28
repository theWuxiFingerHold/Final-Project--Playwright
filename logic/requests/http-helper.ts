import { ApiService } from "../../infra/requests/api-service"
import { createLogin, createUserInfo, createUserInfoWithCart } from "./interface/login-interface-req"
import * as uc from "../../infra/res/user-cred.json"
import { LoginRes } from "../response/interface/login-interface-res"
import { APIResponse, Page } from "playwright/test"
import { BasePage } from "../pages/base-page"

const api = new ApiService()

export class HttpHelper extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    login = async () => {
        // await api.post('https://www.terminalx.com/pg/QueryGlobalUserInfo')
        const cred = createLogin(uc.email, uc.password)
        const res: APIResponse = await api.post('https://www.terminalx.com/pg/MutationUserLogin', cred)

        // const responseHeaders = await res.headers()
        // const setCookieHeader: string = responseHeaders['set-cookie'];
        // const matches: RegExpMatchArray | null = setCookieHeader.match(/private_content_version=([^;]*)/);
        // const privateContentVersion: string | null = matches && matches[1];

        // // console.log('private_content_version:', privateContentVersion);
        // await this.setCoockie(privateContentVersion)
        // console.log(await this.getCoockie())

        //const userinfo = createUserInfo()
        //const res1: APIResponse = await api.post('https://www.terminalx.com/pg/QueryCurrentUserInfo?v=Vy487KOB%2FsDB%2F0cFkmdYWkLOsB8%3D', userinfo)
        //console.log(await res1.headers())
        //console.log(await res1.json())
        // const UserInfoWithCart = createUserInfoWithCart()
        // const res2 = await api.post('https://www.terminalx.com/pg/QueryCurrentUserInfo?v=Vy487KOB%2FsDB%2F0cFkmdYWkLOsB8%3D', UserInfoWithCart)
        // console.log(res2)
        // const res3 = await api.post('https://www.terminalx.com/pg/QueryCustomerProfileInfo?v=iSq3Kg1yB0hbFZqnlJaWhv8HFzM%3D')
        // console.log(res3)
        // const userInfoWithAll = createUserInfoWithCart()
        // const res4 = await api.post('https://www.terminalx.com/pg/QueryCurrentUserInfo?v=Vy487KOB%2FsDB%2F0cFkmdYWkLOsB8%3D', userInfoWithAll)
        // console.log(res4)
    }
    setCoockie = async (value: string | null) => {
        await this.page.evaluate((newValue) => {
            localStorage.setItem('private_content_version', newValue || '');
        }, value);
    }
    getCoockie = async () => {
        await this.page.evaluate(() => {
            localStorage.getItemItem('private_content_version');
        });
    }

}
