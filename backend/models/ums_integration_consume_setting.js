/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_integration_consume_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    deductionPerAmount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每一元需要抵扣的积分数量"
    },
    maxPercentPerOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每笔订单最高抵用百分比"
    },
    useUnit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每次使用积分最小单位100"
    },
    couponStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否可以和优惠券同用；0->不可以；1->可以"
    }
  }, {
    sequelize,
    tableName: 'ums_integration_consume_setting',
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
