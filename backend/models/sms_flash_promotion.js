/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_flash_promotion', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "开始日期"
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "结束日期"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "上下线状态"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "秒杀时间段名称"
    }
  }, {
    sequelize,
    tableName: 'sms_flash_promotion',
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
