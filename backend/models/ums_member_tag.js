/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_tag', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    finishOrderCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "自动打标签完成订单数量"
    },
    finishOrderAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "自动打标签完成订单金额"
    }
  }, {
    sequelize,
    tableName: 'ums_member_tag',
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
