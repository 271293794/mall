/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_cart_item', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productSkuId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "购买数量"
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "添加到购物车的价格"
    },
    productPic: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "商品主图"
    },
    productName: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品名称"
    },
    productSubTitle: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品副标题（卖点）"
    },
    productSkuCode: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "商品sku条码"
    },
    memberNickname: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "会员昵称"
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "修改时间"
    },
    deleteStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "是否删除"
    },
    productCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品分类"
    },
    productBrand: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    productSn: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    productAttr: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品销售属性:[{\"key\":\"颜色\",\"value\":\"颜色\"},{\"key\":\"容量\",\"value\":\"4G\"}]"
    }
  }, {
    sequelize,
    tableName: 'oms_cart_item',
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
