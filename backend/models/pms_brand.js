/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_brand', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    firstLetter: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "首字母"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    factoryStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否为品牌制造商：0->不是；1->是"
    },
    showStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "产品数量"
    },
    productCommentCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "产品评论数量"
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "品牌logo"
    },
    bigPic: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "专区大图"
    },
    brandStory: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "品牌故事"
    }
  }, {
    sequelize,
    tableName: 'pms_brand',
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
