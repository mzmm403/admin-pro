import { post } from '@/http/request'
import { LoginRequest, LoginResponse, reLoginRequest } from '@/api/user/types'


// post 请求直接传入一个 data 即可 url 我们直接在此处封装好
// 需要更改时也只需在此处更改
export const userLogin = async (data?: LoginRequest) => {
    return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
    return post<LoginResponse>({}, '/getUserInfo', data);
};