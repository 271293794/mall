/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_permission', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "父级权限id"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "名称"
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "权限值"
    },
    icon: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "图标"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "权限类型：0->目录；1->菜单；2->按钮（接口绑定权限）"
    },
    uri: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "前端资源路径"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "启用状态；0->禁用；1->启用"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'ums_permission',
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
