/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_feight_template', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    chargeType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "计费类型:0->按重量；1->按件数"
    },
    firstWeight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "首重kg"
    },
    firstFee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "首费（元）"
    },
    continueWeight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    continmeFee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dest: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "目的地（省、市）"
    }
  }, {
    sequelize,
    tableName: 'pms_feight_template',
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
