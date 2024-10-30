import { MockMethod } from 'vite-plugin-mock';

export default [
	{
		url: '/mock/api/user/login',
		method: 'post',
		response: ({ body }) => {
			if (body.username != 'admin' || body.password != 'admin') {
				return {
					code: 500,
					message: '用户名密码错误',
					data: {
						username: '',
						roles: [],
						accessToken: ''
					}
				};
			} else if (body.username == 'admin' && body.password == 'admin') {
				return {
					code: 200,
					message: '登录成功',
					data: {
						username: 'admin',
						roles: ['admin'],
						accessToken: 'admin-token'
					}
				};
			} else {
				return {
					code: 500,
					message: '登录失败',
					data: {
						username: '',
						roles: [],
						accessToken: ''
					}
				};
			}
		}
	}
] as MockMethod[];
