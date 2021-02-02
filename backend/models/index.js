const Sequelize = require('sequelize');
const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('mall-admin-namespace');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];

Sequelize.useCLS(namespace);
/** @type {typeof Sequelize} */
let sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize.authenticate().then(_ => console.log('连接成功'))
  .catch(err => console.error(`地址：${config.host}\r\n数据库：${config.database}\r\n`, err));

var db = require('./init-models')(sequelize)

require('./_associate')(db)
require('./_hook')(db)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op
module.exports = db;
