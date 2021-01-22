var winston = require('winston')
module.exports = {
    // 主动的抛出的错误，initiative 是任何变量名
    initiative: {
        level: 'info',
        format: winston.format.json(),

        defaultMeta: {},
        transports: [
            //
            // - Write all logs with level `error` and below to `error.log`
            // - Write all logs with level `info` and below to `combined.log`
            //
            new winston.transports.File({ filename: './log/initiative/error.log', level: 'error' }),
            new winston.transports.File({ filename: './log/initiative/combined.log' })
        ],


    },
    // 被动的收到的错误，使用下面配置。passive是任何变量名
    passive: {
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { app_name: 'app' },
        transports: [
            new winston.transports.File({ filename: './log/passive/error.log', level: 'error' }),
            new winston.transports.File({ filename: './log/passive/combined.log' })
        ],


    }
}
