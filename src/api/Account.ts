import { HttpPost } from '../utils/http';

/**登录 */
export const login = (params)=> {return HttpPost({url:'/Login/GetToken',params})}