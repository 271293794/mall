/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_receive_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "收货人名称"
    },
    phoneNumber: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    defaultStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否为默认"
    },
    postCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "邮政编码"
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "省份\/直辖市"
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "城市"
    },
    region: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "区"
    },
    detailAddress: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "详细地址(街道)"
    }
  }, {
    sequelize,
    tableName: 'ums_member_receive_address',
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
