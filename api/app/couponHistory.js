var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models')
    ;

let { app_coupon_history } = app

router.get('/lsByMember', async (req, res) => {
    let useStatusArr = req.params.useStatus.split(',').filter(_ => _);



    res.sucess(await app_coupon_history().findList({ where: { useStatus: { [Op.in]: useStatusArr } } }));

})

module.exports = router


