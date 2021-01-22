/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_role_resource_relation', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "角色ID"
    },
    resourceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "资源ID"
    }
  }, {
    sequelize,
    tableName: 'ums_role_resource_relation',
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
