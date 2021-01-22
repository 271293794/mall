/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product_ladder', {
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
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "满足的商品数量"
    },
    discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "折扣"
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "折后价格"
    }
  }, {
    sequelize,
    tableName: 'pms_product_ladder',
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
