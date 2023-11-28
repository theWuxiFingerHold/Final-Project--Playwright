import { APIResponse, request } from "@playwright/test"

export class ApiService {


    post = async <T extends object>(url: string, data?: T): Promise<APIResponse> => {
        const context = await request.newContext();
        const response = await context.post(`${url}`, { data: data })
        console.log(await response.json())
        const state = await context.storageState();
        return await response
    }

}