import request from "./http";

// 获取用戶名密碼验证
export function getLoginCellphone(params){
    return request({
        url:"/login/cellphone",
        method:"post",
        // 注意:post 使用data
        // 注意:get 使用params
        data:params
    })
}

// 获取验证码
export function getCaptchaSent(params){
    return request({
        url:"/captcha/sent",
        method:"get",
        params
    })
}
// 获取验证验证码
export function getCaptchaVerify(params){
    return request({
        url:"/captcha/verify",
        method:"get",
        params
    })
}
// 判断是否注册
export function getExistenceCheck(params){
    return request({
        url:"/cellphone/existence/check",
        method:"get",
        params
    })
}
// 注册(修改密码)
export function getRegisterCellphone(params){
    return request({
        url:"/register/cellphone",
        method:"get",
        params
    })
}

