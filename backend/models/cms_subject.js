/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_subject', {
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
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "专题主图"
    },
    productCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "关联产品数量"
    },
    recommendStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    collectCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    readCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    albumPics: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "画册图片用逗号分割"
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    showStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "显示状态：0->不显示；1->显示"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forwardCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "转发数"
    },
    categoryName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "专题分类名称"
    }
  }, {
    sequelize,
    tableName: 'cms_subject',
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
