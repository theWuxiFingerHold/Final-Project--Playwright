import { request } from "@playwright/test"

export class ApiService {


    post = async <T extends object>(url: string, data: T): Promise<any> => {
        const context = await request.newContext();
        const response = await context.post(`${url}`, { data: data })
        console.log(await response.body())
        return await response.json()
    }

}