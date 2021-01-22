var router = require('express').Router()
    , app = require('../../backend/app')
    , Op = require('../../backend/models').Op
    ;


// category页面数据
router.get('/list', async (req, res) => {
    // 上线且在有效期的的APP广告
    let now = new Date();
    let where = { status: 1, type: 1, startTime: { [Op.lt]: now }, endTime: { [Op.gt]: now } };
    res.sucess(await app.app_home_advertise().findList({ where }))


})


module.exports = router



