/* jshint indent: 2 */
var db = require('../models')
    , Base = require('./Base')
    ;

var { pms_member_price
    , pms_product_attribute_value
    , pms_product_full_reduction
    , pms_product_ladder
    , cms_subject_product_relation
    , pms_sku_stock
    , cms_prefrence_area_product_relation } = require('./index');

module.exports = class pms_product extends Base {


    constructor() {
        super('pms_product')
        this.app = require('./index')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();

        return this.instance;
    }
    /**
     * 添加或获取商品的附加信息，如会员价、商品属性值、sku列表
     * @param {*} productId 
     * @param {*} info 
     */
    async additionalInfo(productId, info) {
        let method = 'destroy'; if (!info) method = 'findList'


        let result = await Promise.all([
            pms_member_price()[method]({ where: { productId } }),
            pms_product_attribute_value()[method]({ where: { productId } }),
            pms_product_full_reduction()[method]({ where: { productId } }),
            pms_product_ladder()[method]({ where: { productId } }),
            cms_subject_product_relation()[method]({ where: { productId } }),
            // 只是sku不能直接删除，要看有没有id，有id就更新，不用判断其它
            pms_sku_stock()[method]({ where: { productId } }),
            cms_prefrence_area_product_relation()[method]({ where: { productId } })])


        let [memberPriceList,
            productAttributeValueList,
            productFullReductionList,
            productLadderList,
            subjectProductRelationList,
            skuStockList,
            prefrenceAreaProductRelationList] = result


        if (info) {
            for (let key in info) {
                let item = info[key]
                if (!Array.isArray(item)) continue
                item.forEach((value, i) => {
                    item[i].productId = productId
                })

            }


            return Promise.all([
                pms_member_price().bulkCreate(info.memberPriceList),
                pms_product_attribute_value().bulkCreate(info.productAttributeValueList),
                pms_product_full_reduction().bulkCreate(info.productFullReductionList),
                pms_product_ladder().bulkCreate(info.productLadderList),
                cms_subject_product_relation().bulkCreate(info.subjectProductRelationList),
                pms_sku_stock().bulkCreate(info.skuStockList),
                cms_prefrence_area_product_relation().bulkCreate(info.prefrenceAreaProductRelationList)


            ])




        } else {

            return {
                memberPriceList,
                productAttributeValueList,
                productFullReductionList,
                productLadderList,
                subjectProductRelationList,
                skuStockList,
                prefrenceAreaProductRelationList
            }
        }






    }
    /**
     * 获取商品的sku和促销信息，用于app
     * @param {*} product 
     */
    async sku_sales_info(product) {
        // 促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购
        let resultLs = await Promise.all([
            product.promotionType == 2 ? pms_member_price().findList({ where: { productId: product.id } }) : [],
            product.promotionType == 3 ? pms_product_ladder().findList({ where: { productId: product.id } }) : [],
            product.promotionType == 4 ? pms_product_full_reduction().findList({ where: { productId: product.id } }) : [],
            pms_product_attribute_value().findList({ where: { productId: product.id } }),
            cms_subject_product_relation().findList({ where: { productId: product.id } }),
            pms_sku_stock().findList({ where: { productId: product.id } }),
            cms_prefrence_area_product_relation().findList({ where: { productId: product.id } })]);

        let [memberPriceList,
            productLadderList,
            productFullReductionList,
            productAttributeValueList,
            subjectProductRelationList,
            skuStockList,
            prefrenceAreaProductRelationList] = resultLs

        return {
            memberPriceList,
            productLadderList,
            productFullReductionList,
            productAttributeValueList,
            subjectProductRelationList,
            skuStockList,
            prefrenceAreaProductRelationList

        }




    }
    /**
     * 更新商品附加信息
     * @param {*} productId 
     * @param {*} info 附加信息
     */
    async updateAdditional(productId, info) {
        let hasId;
        info.skuStockList.forEach((_, index) => {
            switch (index) {
                case 0: hasId = _.id ? true : false; break;
                default: if (hasId != _.id ? true : false) throw Error('skuStockList参数不正确'); break;
            }

        })


        let result = await Promise.all([
            pms_member_price().destroy({ where: { productId } }),
            pms_product_attribute_value().destroy({ where: { productId } }),
            pms_product_full_reduction().destroy({ where: { productId } }),
            pms_product_ladder().destroy({ where: { productId } }),
            cms_subject_product_relation().destroy({ where: { productId } }),
            // 只是sku不能直接删除，要看有没有id，有id就更新，不用判断其它
            hasId || pms_sku_stock().destroy({ where: { productId } }),
            cms_prefrence_area_product_relation().destroy({ where: { productId } })]);

        return Promise.all([
            pms_member_price().bulkCreate(info.memberPriceList),
            pms_product_attribute_value().bulkCreate(info.productAttributeValueList),
            pms_product_full_reduction().bulkCreate(info.productFullReductionList),
            pms_product_ladder().bulkCreate(info.productLadderList),
            cms_subject_product_relation().bulkCreate(info.subjectProductRelationList),
            pms_sku_stock()[hasId ? 'updateList' : 'bulkCreate'](info.skuStockList),
            cms_prefrence_area_product_relation().bulkCreate(info.prefrenceAreaProductRelationList)])

    }


}






