// 导入axios
import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
// 导入elements-plus的message组件
import { ElMessage } from 'element-plus';
// 导入自定义封装的状态码信息
import { getMessageInfo } from './status';

// 创建一个基础的响应信息接口
interface BaseResponse<T = any> {
	code: number | string;
	message: string;
	data: T;
	status?: number | string;
}

// 创建axios服务实例
const service = axios.create({
	// 请求的基础地址
	baseURL: import.meta.env.VITE_APP_USE_MOCK
		? import.meta.env.VITE_APP_MOCK_BASEURL
		: import.meta.env.VITE_APP_API_BASEURL,
	// 请求超时时间一般在10s
	timeout: 15000
});

// 请求拦截器
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// 在发送请求之前做些什么
		return config;
	},
	(error: AxiosError) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		// 判断请求的状态是不是200
		if (response.status === 200) {
			return response.data;
		}
		ElMessage({
			message: getMessageInfo(response.status),
			type: 'error'
		});
	},
	(error: any) => {
		const { response } = error;
		if (response) {
			ElMessage({
				message: getMessageInfo(response.status),
				type: 'error'
			});
			return Promise.reject(response.data);
		}
		ElMessage({
			message: '网络错误，请检查网络',
			type: 'error'
		});
	}
);

// 二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
	const conf = config;
	return new Promise((resolve, reject) => {
		service.request<any, AxiosResponse<BaseResponse>>(conf).then((res: AxiosResponse<BaseResponse>) => {
			const data = res.data;
			if (data.code != 0) {
				ElMessage({
					message: data.message,
					type: 'error'
				});
				reject(data.message);
			} else {
				ElMessage({
					message: data.message,
					type: 'success'
				});
				resolve(data.data as T);
			}
		});
	});
};

// 在最后使用封装过的axios导出不同的请求方式
export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'GET', params: parms });
}

export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'POST', data: data });
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'PUT', data: parms });
}

export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'DELETE', data: data });
}
