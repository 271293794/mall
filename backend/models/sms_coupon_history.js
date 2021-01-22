/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_coupon_history', {
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
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    couponCode: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    memberNickname: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "领取人昵称"
    },
    getType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "获取类型：0->后台赠送；1->主动获取"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    useStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "使用状态：0->未使用；1->已使用；2->已过期"
    },
    useTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "使用时间"
    },
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单编号"
    },
    orderSn: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单号码"
    }
  }, {
    sequelize,
    tableName: 'sms_coupon_history',
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
      {
        name: "idxMemberId",
        using: "BTREE",
        fields: [
          { name: "memberId" },
        ]
      },
      {
        name: "idxCouponId",
        using: "BTREE",
        fields: [
          { name: "couponId" },
        ]
      },
    ]
  });
};
