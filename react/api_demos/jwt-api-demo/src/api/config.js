// 标准的http请求库，vur/react 都用它
import axios from 'axios'
// mock 地址
// axios.defaults.baseURL = 'http://localhost:5173';
// url + json
// 线上地址有了
axios.defaults.baseURL = 'http://api.giyhub.com/user/shunwuyu';
export default axios;