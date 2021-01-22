var fs = require('fs'),
    path = require('path'),
    basename = path.basename(__filename);





module.exports = function (app) {

    fs.readdirSync(__dirname)
        .filter(file => {
            // 排除以点、下划线、数字开头的文件
            return (/^[^_\.\d]\w*\.js$/.test(file)) && (file !== basename)
        })
        .forEach(file => {

            app.use(`/admin/${file.slice(0, -3)}`, require(path.join(__dirname, file)))


        });

}