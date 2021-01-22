/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_admin', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "头像"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "邮箱"
    },
    nickName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "昵称"
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "备注信息"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    loginTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后登录时间"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "帐号启用状态：0->禁用；1->启用"
    }
  }, {
    sequelize,
    tableName: 'ums_admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
