import { ApiService } from "../../../infra/requests/api-service"
import { createLogin } from "./login-interface-req"
import * as uc from "../../../infra/res/user-cred.json"
import { LoginRes } from "../../response/interface/login-interface-res"

const api = new ApiService()

export class HttpHelper {

    login = async () => {
        const cred = createLogin(uc.email, uc.password)
        const res: LoginRes = await api.post('https://www.terminalx.com/pg/MutationUserLogin?v=I9dIkXxqUgEmvaClIy6g3%2FMlpMA%3D', cred)
        console.log(res)
    }
}