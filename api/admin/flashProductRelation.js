var router = require('express').Router()
    , app = require('../../backend/app')
    , db = require('../../backend/models')
    ;

let { app_flash_promotion_product_relation } = app

router.get('/list', async (req, res) => {
    let { pageNum, pageSize, flashPromotionId, flashPromotionSessionId } = req.query;
    let pageData = await app_flash_promotion_product_relation().findPage({
        "raw": false,
        include: [{
            model: db.pms_product,
            as: 'product'

        }],
        where: { flashPromotionId, flashPromotionSessionId }
    }, { pageNum, pageSize });
    res.sucess(pageData)



})

router.post('/create', async (req, res) => {
    let taskLs = [];
    req.body.forEach(_ => taskLs.push(app_flash_promotion_product_relation().checkInsert(_, _)));
    res.sucess(await Promise.all(taskLs))


})
router.post('/update/:id', async (req, res) => {
    res.sucess(await app_flash_promotion_product_relation().update(req.body, { where: req.params }))


})
router.post('/delete/:id', async (req, res) => {
    res.sucess(await app_flash_promotion_product_relation().destroy({ where: req.params }))
})

module.exports = router


