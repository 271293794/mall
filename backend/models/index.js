'use strict';
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('vuefine-namespace');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
Sequelize.useCLS(namespace);
/** @type {typeof Sequelize} */
let sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功');
  })
  .catch(err => {
    console.error(`连接失败！\r\n地址：${config.host}\r\n数据库：${config.database}\r\n`, err);
  });


fs.readdirSync(__dirname)
  .filter(file => {
    // 排除以点、下划线、数字开头的文件
    return (/^[^_\.\d]\w*\.js$/.test(file)) && (file !== basename)
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
require('./__associate')(db)
require('./__hook')(db)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op
module.exports = db;
