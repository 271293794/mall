const { apiStatus: { API_ACCESS_DENIED, NOT_LOGIN, ERR, OK }
    , log, checkApi } = require('../backend/config')
const { getOperator } = require('../backend/operatorUtils/provider')
const { ums_role_resource_relation } = require('../backend/app')



module.exports = {
    /**登陆检查 */
    loginCheck: () => (req, res, next) => {
        if (!inWhiteLs(req)) {
            try {
                var operator = getOperator(req.headers.auth)
            }
            catch (error) { return res.err(NOT_LOGIN) }

            req.operator = operator

        }

        next()

    },
    apiResourceCheck: (enable = true) => async (req, res, next) => {

        if (!enable) return next();
        let accept = await ums_role_resource_relation().resourceCheck(req.operator, req.path)
        if (!accept) return res.err(API_ACCESS_DENIED)

        next()



    },

    /**高阶函数，一个函数的执行结果返回另一个函数 */
    extendAPIOutput: () => (req, res, next) => {
        res.sucess = (data) => {
            res.json({ errno: OK.no, data, message: OK.message })
        };
        res.err = (err) => {
            if (typeof err !== 'object') err = { message: err }
            res.json({
                errno: err.no || ERR.no,
                message: err.message || ERR.message
            })
        };
        next()
    },
    /**开启跨域的中间件 */
    cors: () => (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Auth");
        res.header('Access-Control-Max-Age', '7200');
        if (req.method == 'OPTIONS') return res.sendStatus(200);
        next();
    },
    errHandler: () => (err, req, res, next) => {
        var winston = require('winston')
        var msg = err.message;
        var options = { url: req.url };
        var setting = 'passive';
        if (err.app_name) {
            setting = 'initiative'
            options.app_name = err.app_name
        }
        options.method = req.method
        options.stack = err.stack
        options.time = new Date().toLocaleString()
        var logger = winston.createLogger(log[setting])

        logger.error(msg, options)

        return res.err(err)


    }



}

function inWhiteLs(req) {
    if (req.path.startsWith('/public')) return true;
    // string 或 array 或 undefined
    var methods = checkApi.notLoginCheck[req.path]
    if (!methods) return false;
    if (typeof methods == 'string') methods = methods.split();
    return methods.map(_ => _.toUpperCase()).includes(req.method);


}



// 更新权限后，存储在浏览器端的权限不能及时更新
