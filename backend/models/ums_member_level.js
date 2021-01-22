/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_level', {
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
    growthPoint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defaultStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否为默认等级：0->不是；1->是"
    },
    freeFreightPoint: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "免运费标准"
    },
    commentGrowthPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "每次评价获取的成长值"
    },
    priviledgeFreeFreight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有免邮特权"
    },
    priviledgeSignIn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有签到特权"
    },
    priviledgeComment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有评论获奖励特权"
    },
    priviledgePromotion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有专享活动特权"
    },
    priviledgeMemberPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有会员价格特权"
    },
    priviledgeBirthday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否有生日特权"
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ums_member_level',
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
