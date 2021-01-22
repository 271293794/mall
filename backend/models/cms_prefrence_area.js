/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_prefrence_area', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subTitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pic: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "展示图片"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cms_prefrence_area',
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
