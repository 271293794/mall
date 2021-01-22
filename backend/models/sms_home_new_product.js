/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_home_new_product', {
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
    productName: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    recommendStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sms_home_new_product',
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
