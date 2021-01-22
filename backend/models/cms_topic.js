/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_topic', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    attendCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "参与人数"
    },
    attentionCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "关注人数"
    },
    readCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    awardName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "奖品名称"
    },
    attendType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "参与方式"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "话题内容"
    }
  }, {
    sequelize,
    tableName: 'cms_topic',
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
