/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_member_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reportType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "举报类型：0->商品评价；1->话题内容；2->用户评论"
    },
    reportMemberName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "举报人"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reportObject: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reportStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "举报状态：0->未处理；1->已处理"
    },
    handleStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "处理结果：0->无效；1->有效；2->恶意"
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cms_member_report',
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
