/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oms_order_return_apply', {
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
    companyAddressId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "收货地址表id"
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "退货商品id"
    },
    orderSn: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "订单编号"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "申请时间"
    },
    memberUsername: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "会员用户名"
    },
    returnAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "退款金额"
    },
    returnName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "退货人姓名"
    },
    returnPhone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "退货人电话"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "申请状态：0->待处理；1->退货中；2->已完成；3->已拒绝"
    },
    handleTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "处理时间"
    },
    productPic: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品图片"
    },
    productName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "商品名称"
    },
    productBrand: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "商品品牌"
    },
    productAttr: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "商品销售属性：颜色：红色；尺码：xl;"
    },
    productCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "退货数量"
    },
    productPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "商品单价"
    },
    productRealPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "商品实际支付单价"
    },
    reason: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "原因"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "描述"
    },
    proofPics: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "凭证图片，以逗号隔开"
    },
    handleNote: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "处理备注"
    },
    handleMan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "处理人员"
    },
    receiveMan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "收货人"
    },
    receiveTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "收货时间"
    },
    receiveNote: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "收货备注"
    }
  }, {
    sequelize,
    tableName: 'oms_order_return_apply',
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
