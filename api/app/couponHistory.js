var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models')
    ;

let { sms_coupon_history } = app

router.get('/lsByMember', async (req, res) => {
    let useStatusArr = req.params.useStatus.split(',').filter(_ => _);



    res.sucess(await sms_coupon_history().findList({ where: { useStatus: { [Op.in]: useStatusArr } } }));

})
/**
 * @api {post} /app/couponHistory/obtain/:id 领取优惠券
 * @apiGroup couponHistory
 * @apiUse baseMember
 * @apiParam {Number} id 优惠券id
 */
router.post('/obtain/:id', async (req, res) => {

    res.sucess(await sms_coupon_history().obtain(req.params.id, req.operator.id))



})
/**
 * @api {get} /app/couponHistory/usable 获取某用户拥有的(未使用的)优惠券
 * @apiGroup couponHistory
 * @apiUse baseMember
 * 
 */
router.get('/usable', async (req, res) => {

    let memberId = req.operator.id;
    res.sucess(await app.sms_coupon_history().usable(memberId))



})
module.exports = router


