/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_rule_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    continueSignDay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "连续签到天数"
    },
    continueSignPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "连续签到赠送数量"
    },
    consumePerPoint: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "每消费多少元获取1个点"
    },
    lowOrderAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "最低获取点数的订单金额"
    },
    maxPointPerOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每笔订单最高获取点数"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "类型：0->积分规则；1->成长值规则"
    }
  }, {
    sequelize,
    tableName: 'ums_member_rule_setting',
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
