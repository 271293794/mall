var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models');

let { app_coupon_history } = app

router.get('/list', async (req, res) => {
    let { orderSn, couponId, useStatus, pageNum, pageSize } = req.query;
    let where = { couponId };
    if (orderSn) where.orderSn = { [Op.like]: `%${orderSn.trim()}%` };
    if (useStatus) where.useStatus = useStatus;

    res.sucess(await app_coupon_history().findPage({ where }, { pageNum, pageSize }));



})

module.exports = router



