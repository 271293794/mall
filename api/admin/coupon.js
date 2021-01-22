var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models')
    ;



let { app_coupon } = app

router.get('/list', async (req, res) => {
    let { name = '', type, pageNum, pageSize } = req.query;
    let where = { name: { [Op.like]: `%${name.trim()}%` } };
    if (type) where.type = type;

    res.sucess(await app_coupon().findPage({ where }, { pageNum, pageSize }));



})
router.get('/:id', async (req, res) => {
    res.sucess(await app_coupon().findAndRelation(req.params))
})
router.post('/create', async (req, res) => {

    await app_coupon().createUpdateAndRelation(req.body)
    res.sucess()


})
router.post('/update/:id', async (req, res) => {
    await app_coupon().createUpdateAndRelation(req.body)
    res.sucess()

})
router.post('/delete/:id', async (req, res) => {
    await app_coupon().delAndDelRelation(req.params)
    res.sucess()
})
module.exports = router



