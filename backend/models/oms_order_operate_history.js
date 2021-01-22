/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_order_operate_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单id"
    },
    operateMan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作人：用户；系统；后台管理员"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "操作时间"
    },
    orderStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单"
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "备注"
    }
  }, {
    sequelize,
    tableName: 'oms_order_operate_history',
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
