/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class sms_flash_promotion_product_relation extends Base {
    constructor() {
        super('sms_flash_promotion_product_relation')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }

    /**
     * @example sessionWithCount({活动id,场次对象})
     * 返回带商品数量（在某活动下）的场次对象
     * @param {{ flashPromotionId:, session }} param0 
     */
    async sessionWithCount({ flashPromotionId, session }) {

        let productCount = await this.count({ where: { flashPromotionId, flashPromotionSessionId: session.id } })
        return Object.assign(session, { productCount })


    }


}
