/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_member_price', {
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
    memberLevelId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    memberPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "会员价格"
    },
    memberLevelName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pms_member_price',
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
