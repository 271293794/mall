/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_flash_promotion_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    memberPhone: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    subscribeTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "会员订阅时间"
    },
    sendTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sms_flash_promotion_log',
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
