/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_menu', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "父级ID"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "菜单名称"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "菜单级数"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "菜单排序"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "前端名称"
    },
    icon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "前端图标"
    },
    hidden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "前端隐藏"
    }
  }, {
    sequelize,
    tableName: 'ums_menu',
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
