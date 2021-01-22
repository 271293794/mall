/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_resource', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "资源名称"
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "资源URL"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "描述"
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "资源分类ID"
    }
  }, {
    sequelize,
    tableName: 'ums_resource',
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
