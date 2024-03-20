import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { getCookie,removeCookie } from './cookie';

interface requestType {
  url: string
  params?: any
}
// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: `${config.VITE_API}api`, // 设置基础 URL，可根据需要修改
  timeout: 10000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
});
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    config.headers = {
      Authorization: `Bearer ${getCookie('token')}`|| '',
      'Content-Type': 'application/json' 
    }
    
    return config;
  },
  (error) => {
    
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
const redirect = window.location.pathname
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.Code !== 200) {
      return Promise.reject(new Error(response.data.message))
    }
    return response.data.Data;
  },
  (error) => {    
    // 对响应错误做些什么
    switch (error.response.status) {
      case 400:
        removeCookie('token') // 清除缓存       
        window.location.href =  `/login?=${redirect}`
        break;
      default:
        throw(error)
        break;
    }
  }
);
/**
 * 
 * GET请求
 */
export function HttpGet({url,params}: requestType){
  return instance({ url, method:"GET", params } as AxiosRequestConfig)
}
/**
 * 
 * POST请求
 */
export function HttpPost({url,params}: requestType){
  return instance({ url, method:"POST", data:params } as AxiosRequestConfig)
}