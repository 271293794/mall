var router = require('express').Router()
    , { Op } = require('../../backend/models')
    , app = require('../../backend/app')
    ;

let { app_flash_promotion, app_flash_promotion_product_relation } = app

router.get('/list', async (req, res) => {

    let { keyword = '', pageNum, pageSize } = req.query;

    res.sucess(await app_flash_promotion().findPage({ where: { title: { [Op.like]: `%${keyword}%` } } }, { pageNum, pageSize }))

})
router.post('/update/:id', async (req, res) => {

    req.body.title = (req.body.title || '').trim();
    if (!req.body.title) return res.err('title为空');
    res.sucess(await app_flash_promotion().update(req.body, { where: req.params }));

})

router.post('/update/status/:id', async (req, res) => {
    let key = 'status';
    res.sucess(await app_flash_promotion().update({ [key]: req.query[key] }, { where: req.params }));

})

router.post('/create', async (req, res) => {
    req.body.title = (req.body.title || '').trim();
    if (!req.body.title) return res.err('title为空');
    res.sucess(await app_flash_promotion().insert(req.body))

})

router.post('/delete/:id', async (req, res) => {

    // 删除一个秒杀活动，并删除引用
    res.sucess(await Promise.all([
        app_flash_promotion_product_relation().destroy({ where: { flashPromotionId: req.params.id } }),
        app_flash_promotion().destroy({ where: req.params })
    ]))

})

module.exports = router



