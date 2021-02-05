/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base'),
    { sms_coupon } = require('../app'),
    util = require('./util');

module.exports = class sms_coupon_history extends Base {
    constructor() {
        super('sms_coupon_history')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 设置优惠券的过期，供消费者调用
     * @param {*} id sms_coupon_history 的 id
     */
    async setExpired(id) {
        return this.update({ useStatus: 2 }, { where: { id, useStatus: 0 } });
    }
    /**
     * 用户领取优惠券
     * @param {*} couponId 优惠券id
     * @param {*} memberId 用户id
     */
    async obtain(couponId, memberId) {

        let coupon = await sms_coupon().findByPk(couponId);
        let now = new Date(); if (!coupon) return false;
        if (coupon.receiveCount > coupon.publishCount || now < coupon.startTime || now > coupon.endTime) return false;
        // 已拥有的数量
        let obtainedCount = await this.count({ where: { couponId, memberId } })
        if (obtainedCount >= coupon.perLimit) return false;


        let result = await Promise.all([
            this.insert({
                couponId,
                memberId,
                couponCode: coupon.code,
                memberNickname: '',
                getType: 1,
                createTime: now,
                useStatus: 0

            }),
            sms_coupon().updateByPk({
                id: couponId,
                receiveCount: ++coupon.receiveCount
            })]);
        util.couponTtlProducer(result[0].id)
        return true;


    }
    /**
     * 查找某用户所有可用的(未使用的)优惠券
     * @param {*} memberId 
     */
    async usable(memberId) {

        return this.findList({
            raw: false,
            where: { memberId, useStatus: 0 },
            include: [{ model: db.sms_coupon, as: 'coupon' }]

        })


    }
}