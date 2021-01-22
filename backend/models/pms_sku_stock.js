/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pms_sku_stock', {
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
    skuCode: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "sku编码"
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "库存"
    },
    lowStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "预警库存"
    },
    pic: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "展示图片"
    },
    sale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "销量"
    },
    promotionPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      comment: "单品促销价格"
    },
    lockStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "锁定库存"
    },
    spData: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "商品销售属性，json格式"
    }
  }, {
    sequelize,
    tableName: 'pms_sku_stock',
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
