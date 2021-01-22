var router = require('express').Router()
    , { Op } = require('../../backend/models')
    , app = require('../../backend/app')
    ;

let { app_flash_promotion_session, app_flash_promotion_product_relation } = app

router.get('/list', async (req, res) => {
    res.sucess(await app_flash_promotion_session().findList2())
})


router.post('/update/:id', async (req, res) => {
    req.body.name = (req.body.name || '').trim();
    if (!req.body.name) return res.err('name为空');
    res.sucess(await app_flash_promotion_session().update2(req.body, { where: req.params }))

})
router.post('/create', async (req, res) => {
    req.body.name = (req.body.name || '').trim();
    if (!req.body.name) return res.err('name为空');
    res.sucess(await app_flash_promotion_session().insert2(req.body))


})
router.get('/selectList', async (req, res) => {
    let list = await app_flash_promotion_session().findList2()
    let taskLs = [];
    list.forEach(_ => {
        let params = Object.assign({ session: _ }, req.query)
        taskLs.push(app_flash_promotion_product_relation().sessionWithCount(params))
    });
    res.sucess(await Promise.all(taskLs))

})
router.post('/delete/:id', async (req, res) => {
    // 删除一个秒杀时间段（场次），并删除引用
    res.sucess(await Promise.all([
        app_flash_promotion_product_relation().destroy({ where: { flashPromotionSessionId: req.params.id } }),
        app_flash_promotion_session().destroy({ where: req.params })
    ]));
})

module.exports = router





