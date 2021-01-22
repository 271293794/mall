/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_order_item', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单id"
    },
    orderSn: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "订单编号"
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productPic: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    productBrand: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    productSn: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    productPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "销售价格"
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "购买数量"
    },
    productSkuId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品sku编号"
    },
    productSkuCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "商品sku条码"
    },
    productCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品分类id"
    },
    promotionName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "商品促销名称"
    },
    promotionAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "商品促销分解金额"
    },
    couponAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "优惠券优惠分解金额"
    },
    integrationAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "积分优惠分解金额"
    },
    realAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "该商品经过优惠后的分解金额"
    },
    giftIntegration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    giftGrowth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    productAttr: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品销售属性:[{\"key\":\"颜色\",\"value\":\"颜色\"},{\"key\":\"容量\",\"value\":\"4G\"}]"
    }
  }, {
    sequelize,
    tableName: 'oms_order_item',
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
