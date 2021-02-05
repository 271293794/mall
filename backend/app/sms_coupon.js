/* jshint indent: 2 */

var Base = require('./Base')
    , db = require('../models');
var { sms_coupon_product_category_relation
    , sms_coupon_product_relation
    , pms_product
    , sms_coupon_history } = require('./');


module.exports = class sms_coupon extends Base {
    constructor() {
        super('sms_coupon')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }

    /**
     * 添加或更新一个优惠券，并添加适用商品类型或商品的引用
     * @param {*} param0 
     */
    async createUpdateAndRelation({ productCategoryRelationList, productRelationList, ...coupon }) {
        // 存在id，说明是更新
        if (coupon.id) {
            await Promise.all([
                this.update(coupon, { where: { id: coupon.id } }),
                // 删除引用
                sms_coupon_product_category_relation().destroy({ where: { couponId: coupon.id } }),
                sms_coupon_product_relation().destroy({ where: { couponId: coupon.id } })
            ])

        } else {
            coupon.id = (await this.insert(coupon)).id
        }


        // 全场通用
        if (coupon.useType == 0) return 1;
        // 指定商品分类适用
        if (coupon.useType == 1) {
            productCategoryRelationList.forEach(_ => _.couponId = coupon.id);
            return sms_coupon_product_category_relation().bulkCreate(productCategoryRelationList)

        }
        // 指定商品适用
        if (coupon.useType == 2) {
            productRelationList.forEach(_ => _.couponId = coupon.id);
            return sms_coupon_product_relation().bulkCreate(productRelationList)


        }

    }
    /**
     * 查找一个优惠券，如果是指定商品或分类适用，则找到商品或分类。
     * @param {*} param0 
     */
    async findAndRelation({ id }) {
        let coupon = await this.findByPk(id);
        if (coupon.useType == 1) {
            let relationLs = await sms_coupon_product_category_relation().findList({ where: { couponId: coupon.id } });
            coupon.productCategoryRelationList = relationLs

        }
        if (coupon.useType == 2) {
            let relationLs = await sms_coupon_product_relation().findList({ where: { couponId: coupon.id } });
            coupon.productRelationList = relationLs

        }
        return coupon;

    }
    /**
     * 删除一个优惠券，并删除引用
     * @param {*} param0 
     */
    async delAndDelRelation({ id }) {


        return Promise.all([
            // 删除引用
            sms_coupon_product_category_relation().destroy({ where: { couponId: id } }),
            sms_coupon_product_relation().destroy({ where: { couponId: id } }),
            // 删除领取记录
            sms_coupon_history().destroy({ where: { couponId: id } }),
            // 删除本身
            this.destroy({ where: { id } })])

    }
    /**
     * 查找某个商品可使用的所有优惠券
     * @param {Number} productId 商品id
     */
    async listByProduct(productId) {
        let product = await pms_product().findByPk(productId), now = new Date();
        // 现在还有效的券，基本条件
        let basicWhere = {
            // 已领取数量
            receiveCount: { [db.Op.lt]: this.col('publishCount') },
            startTime: { [db.Op.lt]: now },
            endTime: { [db.Op.gt]: now },
            // 使用平台：0->全部；1->移动；2->PC
            platform: { [db.Op.in]: [0, 1] }
        };
        let include = [{
            model: db.sms_coupon,
            as: 'coupon',
            where: basicWhere
        }];
        let [productRelationLs, categoryRelationLs, couponLs] = await Promise.all([
            // 指定商品
            sms_coupon_product_relation().findList({
                raw: false,
                where: { productId },
                include
            }),
            // 指定分类；
            sms_coupon_product_category_relation().findList({
                raw: false,
                where: { productCategoryId: product.productCategoryId },
                include
            }),
            // 使用类型：全场通用；
            this.findList({ where: { useType: 0, } })]
        );
        let productCoupon = productRelationLs.filter(_ => _.coupon).map(_ => _.coupon);
        let categoryCoupon = categoryRelationLs.filter(_ => _.coupon).map(_ => _.coupon);
        return couponLs.concat(productCoupon).concat(categoryCoupon);

    }
    /**
     * 查找某个商品可使用的所有优惠券
     * 使用类型：0->全场通用；1->指定分类；2->指定商品
     * @param {Number} productId 商品id
     */
    async lsByProduct(productId, productCategoryId) {
        let now = new Date();
        // 现在还有效的券，基础条件
        let basicWhere = {
            // 已领取数量
            publishCount: { [db.Op.gt]: this.fn('IFNULL', this.col('receiveCount'), 0) },
            startTime: { [db.Op.lt]: now },
            endTime: { [db.Op.gt]: now },
            // 使用平台：0->全部；1->移动；2->PC
            platform: { [db.Op.in]: [0, 1] },


        };
        let [productRelationLs, categoryRelationLs] = await Promise.all([
            // 指定商品
            sms_coupon_product_relation().findList({ where: { productId }, attributes: ['couponId'] }),
            // 指定分类
            sms_coupon_product_category_relation().findList({ where: { productCategoryId }, attributes: ['couponId'] }),
        ]);

        let couponIdLs = [...productRelationLs.map(_ => _.couponId), ...categoryRelationLs.map(_ => _.couponId)];

        let list = await this.findList({
            raw: false,
            where: {
                [db.Op.or]: [{ id: { [db.Op.in]: couponIdLs } }, { useType: 0 }],
                ...basicWhere
            },
            include: [{
                model: db.sms_coupon_product_relation,
                as: 'productRelation'

            }, {
                model: db.sms_coupon_product_category_relation,
                as: 'categoryRelation'

            }]
        });

        return list







    }
    /**
     * 查找某用户已领取某个优惠券的数量
     * @param {*} coupon 优惠券
     * @param {*} memberId 用户id
     */
    async historyCount(coupon, memberId) {
        return sms_coupon_history().count({ where: { memberId, couponId: coupon.id } })
    }
}
