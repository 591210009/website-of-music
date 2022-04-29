import axios from "axios";
const service = axios.create({
    baseURL:"http://175.178.52.160:3000",
    timeout:1000000,//请求超时时间
    headers:{
        "Content-Type":"application/json;charset=UTF-8" //表单数据类型
    },
    withCredentials:true,//自动获取服务器的cookie
})

// request  拦截器 发送数据到后台服务器前拦截
service.interceptors.request.use(
    config=>{
        return config;
    },
    error=>{
        console.log("axios中request报错",error);
        Promise.reject(error);
    }
)

// response  拦截器 获取后台数据前拦截
service.interceptors.response.use(
    response=>{
        return response.data;
    },
    error=>{
        console.log("axios中response报错",error);
        Promise.reject(error);
    }
)

export default service;
