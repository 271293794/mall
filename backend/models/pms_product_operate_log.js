/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product_operate_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    priceOld: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    priceNew: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    salePriceOld: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    salePriceNew: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    giftPointOld: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "赠送的积分"
    },
    giftPointNew: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usePointLimitOld: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usePointLimitNew: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operateMan: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "操作人"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pms_product_operate_log',
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
