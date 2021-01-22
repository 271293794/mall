/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_company_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addressName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "地址名称"
    },
    sendStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "默认发货地址：0->否；1->是"
    },
    receiveStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否默认收货地址：0->否；1->是"
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "收发货人姓名"
    },
    phone: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "收货人电话"
    },
    province: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "省\/直辖市"
    },
    city: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "市"
    },
    region: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "区"
    },
    detailAddress: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "详细地址"
    }
  }, {
    sequelize,
    tableName: 'oms_company_address',
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
