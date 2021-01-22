/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_order', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "订单id"
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    couponId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    orderSn: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "订单编号"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "提交时间"
    },
    memberUsername: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "用户帐号"
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "订单总金额"
    },
    payAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "应付金额（实际支付金额）"
    },
    freightAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "运费金额"
    },
    promotionAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "促销优化金额（促销价、满减、阶梯价）"
    },
    integrationAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "积分抵扣金额"
    },
    couponAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "优惠券抵扣金额"
    },
    discountAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "管理员后台调整订单使用的折扣金额"
    },
    payType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "支付方式：0->未支付；1->支付宝；2->微信"
    },
    sourceType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单来源：0->PC订单；1->app订单"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单"
    },
    orderType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单类型：0->正常订单；1->秒杀订单"
    },
    deliveryCompany: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "物流公司(配送方式)"
    },
    deliverySn: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "物流单号"
    },
    autoConfirmDay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "自动确认时间（天）"
    },
    integration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "可以获得的积分"
    },
    growth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "可以活动的成长值"
    },
    promotionInfo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动信息"
    },
    billType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "发票类型：0->不开发票；1->电子发票；2->纸质发票"
    },
    billHeader: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "发票抬头"
    },
    billContent: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "发票内容"
    },
    billReceiverPhone: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "收票人电话"
    },
    billReceiverEmail: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "收票人邮箱"
    },
    receiverName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "收货人姓名"
    },
    receiverPhone: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "收货人电话"
    },
    receiverPostCode: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "收货人邮编"
    },
    receiverProvince: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "省份\/直辖市"
    },
    receiverCity: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "城市"
    },
    receiverRegion: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "区"
    },
    receiverDetailAddress: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "详细地址"
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "订单备注"
    },
    confirmStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "确认收货状态：0->未确认；1->已确认"
    },
    deleteStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "删除状态：0->未删除；1->已删除"
    },
    useIntegration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "下单时使用的积分"
    },
    paymentTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "支付时间"
    },
    deliveryTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "发货时间"
    },
    receiveTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "确认收货时间"
    },
    commentTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "评价时间"
    },
    modifyTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "修改时间"
    }
  }, {
    sequelize,
    tableName: 'oms_order',
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
