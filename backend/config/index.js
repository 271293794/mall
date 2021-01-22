var log = require('./log')
// var redis = require('redis')

module.exports = {
    port: 8080,
    apiStatus: {
        NOT_LOGIN: { no: 9, message: '未登录' },
        API_ACCESS_DENIED: { no: 8, message: '未授权的API' },
        OK: { no: 0, message: '操作成功' },
        ERR: { no: 2, message: '未知错误' }

    },
    log: log,
    token: {
        /**Token的盐值 */
        tokenSalt: "tokenSalt",
        tokenName: 'loginToken',
        expMilliSecond: 60 * 60 * 1000,
        updateTime: 10 * 60 * 1000,
        tokenHeader: {
            typ: "JWT",
            alg: "HS256"
        },

    }, checkApi: {
        // 白名单
        notLoginCheck: {
            '/': 'get',
            
            // 应该可以不写OPTIONS，因为cors中间件在登陆检查之前返回了。
            '/admin/admin/login': ["post", 'OPTIONS'],
            // '/admin/admin/info': 'GET',
            '/admin/utils/backendCfg': 'get',
            '/admin/admin/logout': `POST`,
            '/app/member/login': ['GET', 'POST'],

        },

        // 开启api签名检查
        authorizedApi: true

    }, userPwdEncrypt: {
        // 盐
        salt: 'salt',
        alg: 'MD5',
        defaultPassword: '0000',
        // 用户名最小长度
        usernameMinLength: 3,
        passwordMinLength: 4


    }, weixin: {//微信小程序配置
        appid: 'wxa9753842d423abbb',
        secret: 'c6382d81fdef6d1fad8dc3ddc7885fed'
    },
    // 用户类型
    userType: {
        /** 后台用户 */
        admin: 'admin',
        /** 会员用户 */
        member: 'member'
    }
}