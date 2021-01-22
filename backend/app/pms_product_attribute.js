/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base');
var { app_product_attribute_category, app_product_attribute_value } = require('./')

module.exports = class pms_product_attribute extends Base {
    constructor() {
        super('pms_product_attribute')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 增加一个属性或参数，并计数
     * @param {*} attribute 
     */
    async createAndCount(attribute) {
        attribute.name = (attribute.name || '').trim();
        if (!attribute.name) return;
        return Promise.all([
            this.insert(attribute),
            app_product_attribute_category().plus_minus({
                id: attribute.productAttributeCategoryId,
                field: +attribute.type ? 'paramCount' : 'attributeCount'
            })
        ])

    }

    /**
     * 删除一个属性或参数，并删除引用，并更新对应类型的计数
     * @param {*} param0 
     */
    async delAndDelRelationAndCount(id) {
        let attribute = await this.findByPk(id);
        return Promise.all([
            app_product_attribute_value().destroy({ where: { productAttributeId: id } }),
            app_product_attribute_category().plus_minus({
                id: attribute.productAttributeCategoryId,
                field: +attribute.type ? 'paramCount' : 'attributeCount',
                symbol: '-'
            }),
            this.destroy({ where: { id } })
        ]);

    }


}
