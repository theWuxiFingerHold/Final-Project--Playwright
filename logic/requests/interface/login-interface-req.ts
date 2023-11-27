interface Login {
    username: string,
    password: string

}
const createLogin = (username: string, password: string): Login => {
    return {
        username: username,
        password: password
    }
}
export { Login, createLogin }