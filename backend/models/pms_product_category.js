/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product_category', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "上机分类的编号：0表示一级分类"
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "分类级别：0->1级；1->2级"
    },
    productCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productUnit: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    navStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否显示在导航栏：0->不显示；1->显示"
    },
    showStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "显示状态：0->不显示；1->显示"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "图标"
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "描述"
    }
  }, {
    sequelize,
    tableName: 'pms_product_category',
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
