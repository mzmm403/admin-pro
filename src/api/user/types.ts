// 登录所需要的参数
export type LoginRequest = {
    username: string
    password: string
}

// 登录返回的响应信息
export type LoginResponse = {
    accessToken: string
    username: string
    roles: string[]
    token: string
}

// 刷新登录信息需要的参数
export type reLoginRequest = {
    accessToken: string
}