/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_flash_promotion_product_relation', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    flashPromotionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    flashPromotionSessionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "编号"
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    flashPromotionPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "限时购价格"
    },
    flashPromotionCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "限时购数量"
    },
    flashPromotionLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每人限购数量"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'sms_flash_promotion_product_relation',
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
