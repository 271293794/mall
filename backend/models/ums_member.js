/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    wxOpenid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "微信openid"
    },
    memberLevelId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "用户名",
      unique: "idxUsername"
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "密码"
    },
    nickname: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "昵称"
    },
    phone: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "手机号码",
      unique: "idxPhone"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "帐号启用状态:0->禁用；1->启用"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "注册时间"
    },
    icon: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "头像"
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "性别：0->未知；1->男；2->女"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "生日"
    },
    city: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "所做城市"
    },
    job: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "职业"
    },
    personalizedSignature: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "个性签名"
    },
    sourceType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "用户来源"
    },
    integration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "积分"
    },
    growth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "成长值"
    },
    luckeyCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "剩余抽奖次数"
    },
    historyIntegration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "历史积分数量"
    }
  }, {
    sequelize,
    tableName: 'ums_member',
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
      {
        name: "idxUsername",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "idxPhone",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
    ]
  });
};
