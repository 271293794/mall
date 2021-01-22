/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    memberNickName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "评价星数：0->5"
    },
    memberIp: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "评价的ip"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    showStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productAttribute: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "购买时的商品属性"
    },
    collectCouont: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    readCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pics: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "上传图片地址，以逗号隔开"
    },
    memberIcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "评论用户头像"
    },
    replayCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pms_comment',
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
