/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product_attribute', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    productAttributeCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    selectType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "属性选择类型：0->唯一；1->单选；2->多选"
    },
    inputType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "属性录入方式：0->手工录入；1->从列表中选取"
    },
    inputList: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "可选值列表，以逗号隔开"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序字段：最高的可以单独上传图片"
    },
    filterType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "分类筛选样式：1->普通；1->颜色"
    },
    searchType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "检索类型；0->不需要进行检索；1->关键字检索；2->范围检索"
    },
    relatedStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "相同属性产品是否关联；0->不关联；1->关联"
    },
    handAddStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否支持手动新增；0->不支持；1->支持"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "属性的类型；0->规格；1->参数"
    }
  }, {
    sequelize,
    tableName: 'pms_product_attribute',
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
