var router = require('express').Router()
    , app = require('../../backend/app')
    ;
var { Op } = require('../../backend/models')
let { app_product_attribute_category,
    app_product_attribute } = app

router.get('/category/list', async (req, res) => {
    let { pageNum, pageSize, keyword } = req.query;
    let where = { name: { [Op.like]: `%${keyword || ''}%` } };

    var list = await app_product_attribute_category().findPage({ where }, { pageNum, pageSize })

    res.sucess(list)

})
router.get('/list/:productAttributeCategoryId', async (req, res) => {
    var { pageNum, pageSize, type } = req.query
    var { productAttributeCategoryId } = req.params
    var pageData = await app_product_attribute().findPage({ where: { productAttributeCategoryId, type } }, { pageNum, pageSize })
    res.sucess(pageData)


})
router.get('/:id', async (req, res) => {

    res.sucess(await app_product_attribute().findByPk(req.params.id))

})

router.post('/update/:id', async (req, res) => {

    res.sucess(await app_product_attribute().update(req.body, { where: req.params }))

})

router.post('/create', async (req, res) => {
    res.sucess(await app_product_attribute().createAndCount(req.body))
})

router.post('/delete', async (req, res) => {
    let taskLs = [], idArr = req.body.ids.split(',').filter(_ => _);
    idArr.forEach(id => taskLs.push(app_product_attribute().delAndDelRelationAndCount(id)))
    res.sucess(await Promise.all(taskLs))

})
router.post('/category/delete/:id', async (req, res) => {
    // 路由中的参数id 为类别的id，非属性id
    res.sucess(await app_product_attribute_category().delAndDelAttribute(req.params))


})

router.post('/category/create', async (req, res) => {
    res.sucess(await app_product_attribute_category().insert(req.body))


})

module.exports = router



