/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_coupon_product_relation', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    couponId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品名称"
    },
    productSn: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "商品编码"
    }
  }, {
    sequelize,
    tableName: 'sms_coupon_product_relation',
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
