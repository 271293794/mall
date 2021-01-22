/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product_attribute_value', {
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
    productAttributeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "手动添加规格或参数的值，参数单值，规格有多个时以逗号隔开"
    }
  }, {
    sequelize,
    tableName: 'pms_product_attribute_value',
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
