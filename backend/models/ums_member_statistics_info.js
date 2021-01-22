/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_statistics_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    consumeAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "累计消费金额"
    },
    orderCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "订单数量"
    },
    couponCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "优惠券数量"
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "评价数"
    },
    returnOrderCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "退货数量"
    },
    loginCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "登录次数"
    },
    attendCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "关注数量"
    },
    fansCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "粉丝数量"
    },
    collectProductCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    collectSubjectCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    collectTopicCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    collectCommentCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inviteFriendCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recentOrderTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "最后一次下订单时间"
    }
  }, {
    sequelize,
    tableName: 'ums_member_statistics_info',
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
