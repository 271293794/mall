/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_coupon', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "优惠券类型；0->全场赠券；1->会员赠券；2->购物赠券；3->注册赠券"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "使用平台：0->全部；1->移动；2->PC"
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "数量"
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "金额"
    },
    perLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每人限领张数"
    },
    minPoint: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "使用门槛；0表示无门槛"
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    useType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "使用类型：0->全场通用；1->指定分类；2->指定商品"
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "备注"
    },
    publishCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "发行数量"
    },
    useCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "已使用数量"
    },
    receiveCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "领取数量"
    },
    enableTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "可以领取的日期"
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "优惠码"
    },
    memberLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "可领取的会员类型：0->无限时"
    }
  }, {
    sequelize,
    tableName: 'sms_coupon',
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
