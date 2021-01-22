var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { app_coupon, app_coupon_history } = app
// 某商品可使用的优惠券
router.get('/viable', async (req, res) => {
    let { productId, productCategoryId } = req.query;
    let viableCouponLs = (await app_coupon().lsByProduct(productId, productCategoryId)).map(_ => _.dataValues);
    let historyCountLs = await Promise.all(viableCouponLs.map(_ => app_coupon().historyCount(_, req.operator.id)));
    viableCouponLs.forEach((_, i) => _.historyCount = historyCountLs[i])
    res.sucess(viableCouponLs);



})

module.exports = router


