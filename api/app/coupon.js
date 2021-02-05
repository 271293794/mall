var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { sms_coupon, sms_coupon_history } = app
// 某商品可使用的优惠券
router.get('/viable', async (req, res) => {
    let { productId, productCategoryId } = req.query;
    let viableCouponLs = (await sms_coupon().lsByProduct(productId, productCategoryId)).map(_ => _.dataValues);
    let historyCountLs = await Promise.all(viableCouponLs.map(_ => sms_coupon().historyCount(_, req.operator.id)));
    viableCouponLs.forEach((_, i) => _.historyCount = historyCountLs[i])
    res.sucess(viableCouponLs);



})

module.exports = router


