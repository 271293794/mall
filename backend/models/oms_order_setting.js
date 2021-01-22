/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_order_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    flashOrderOvertime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "秒杀订单超时关闭时间(分)"
    },
    normalOrderOvertime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "正常订单超时时间(分)"
    },
    confirmOvertime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "发货后自动确认收货时间（天）"
    },
    finishOvertime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "自动完成交易时间，不能申请售后（天）"
    },
    commentOvertime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单完成后自动好评时间（天）"
    }
  }, {
    sequelize,
    tableName: 'oms_order_setting',
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
