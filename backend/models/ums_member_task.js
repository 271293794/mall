/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ums_member_task', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    growth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "赠送成长值"
    },
    intergration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "赠送积分"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "任务类型：0->新手任务；1->日常任务"
    }
  }, {
    sequelize,
    tableName: 'ums_member_task',
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
