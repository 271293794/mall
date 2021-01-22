/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pms_product', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    feightTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    productAttributeCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    productSn: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "货号"
    },
    deleteStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "删除状态：0->未删除；1->已删除"
    },
    publishStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "上架状态：0->下架；1->上架"
    },
    newStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "新品状态:0->不是新品；1->新品"
    },
    recommendStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "推荐状态；0->不推荐；1->推荐"
    },
    verifyStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "审核状态：0->未审核；1->审核通过"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "排序"
    },
    sale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "销量"
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    promotionPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "促销价格"
    },
    giftGrowth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "赠送的成长值"
    },
    giftPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "赠送的积分"
    },
    usePointLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "限制使用的积分数"
    },
    subTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "副标题"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "商品描述"
    },
    originalPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "市场价"
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "库存"
    },
    lowStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "库存预警值"
    },
    unit: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "单位"
    },
    weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      comment: "商品重量，默认为克"
    },
    previewStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "是否为预告商品：0->不是；1->是"
    },
    serviceIds: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮"
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    albumPics: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "画册图片，连产品图片限制为5张，以逗号分割"
    },
    detailTitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detailDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    detailHtml: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "产品详情网页内容"
    },
    detailMobileHtml: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "移动端网页详情"
    },
    promotionStartTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "促销开始时间"
    },
    promotionEndTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "促销结束时间"
    },
    promotionPerLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "活动限购数量"
    },
    promotionType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购"
    },
    brandName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "品牌名称"
    },
    productCategoryName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "商品分类名称"
    }
  }, {
    sequelize,
    tableName: 'pms_product',
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
