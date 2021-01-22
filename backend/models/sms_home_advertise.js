/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_home_advertise', {
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "轮播位置：0->PC首页轮播；1->app首页轮播"
    },
    pic: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "上下线状态：0->下线；1->上线"
    },
    clickCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "点击数"
    },
    orderCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "下单数"
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "链接地址"
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "备注"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'sms_home_advertise',
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
