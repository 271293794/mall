/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_flash_promotion_session', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "场次名称"
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "每日开始时间"
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "每日结束时间"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "启用状态：0->不启用；1->启用"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    }
  }, {
    sequelize,
    tableName: 'sms_flash_promotion_session',
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
