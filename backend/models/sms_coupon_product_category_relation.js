/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_coupon_product_category_relation', {
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
    productCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productCategoryName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "产品分类名称"
    },
    parentCategoryName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "父分类名称"
    }
  }, {
    sequelize,
    tableName: 'sms_coupon_product_category_relation',
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
