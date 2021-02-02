var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models')
    ;

let { app_coupon_history } = app

router.get('/lsByMember', async (req, res) => {
    let useStatusArr = req.params.useStatus.split(',').filter(_ => _);



    res.sucess(await app_coupon_history().findList({ where: { useStatus: { [Op.in]: useStatusArr } } }));

})
/**
 * @api {post} /app/couponHistory/obtain/:id 领取优惠券
 * @apiGroup couponHistory
 * @apiUse baseMember
 * @apiParam {Number} id 优惠券id
 */
router.post('/obtain/:id', async (req, res) => {

    res.sucess(await app_coupon_history().obtain(req.params.id, req.operator.id))



})
module.exports = router


