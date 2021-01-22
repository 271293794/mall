/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_integration_change_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changeType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "改变类型：0->增加；1->减少"
    },
    changeCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "积分改变数量"
    },
    operateMan: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作人员"
    },
    operateNote: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "操作备注"
    },
    sourceType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "积分来源：0->购物；1->管理员修改"
    }
  }, {
    sequelize,
    tableName: 'ums_integration_change_history',
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
