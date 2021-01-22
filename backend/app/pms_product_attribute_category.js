/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base');

var { app_product_attribute } = require('./')

module.exports = class pms_product_attribute_category extends Base {
    constructor() {
        super('pms_product_attribute_category')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 在删除一个属性或参数时，更新对应类别的计数
     * @param {{field:'attributeCount'|'paramCount',symbol:'+'|'-' }} param0 
     */
    async plus_minus({ id, field = 'attributeCount', symbol = '+', count = 1 }) {
        if (!['attributeCount', 'paramCount'].includes(field)) throw Error('非法字段')
        let category = await this.findByPk(id);
        if (!category) throw Error('类别不存在');

        return this.update({ [field]: eval(category[field] + symbol + count) }, { where: { id } })

    }

    /**
     * 删除一个属性类别，并删除此类别下的所有属性
     * @param {*} param0 
     */
    async delAndDelAttribute({ id }) {
        // 找到此类别下的所有属性
        let attributeLs = await app_product_attribute().findList({ where: { productAttributeCategoryId: id }, attributes: ['id'] })
        let taskLs = [];
        attributeLs.forEach(_ => taskLs.push(app_product_attribute().delAndDelRelationAndCount(_.id)))
        await Promise.all(taskLs)
        return this.destroy({ where: { id } })




    }
}
