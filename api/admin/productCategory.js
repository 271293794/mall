var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { app_product_category } = app

router.get('/list/withChildren', async (req, res) => {
    var list = await app_product_category().findList()
    var withChildList = app_product_category().withChildren(list, {})
    res.sucess(withChildList)

})
router.get('/list/:parentId', async (req, res) => {
    var where = req.params;
    var { pageSize, pageNum, keyword } = req.query
    if (keyword) where.name = { [Op.like]: `%${keyword.trim()}%` }

    var pageData = await app_product_category().findPage({ where }, { pageSize, pageNum })
    res.sucess(pageData)
})
router.post('/update/:key', async (req, res) => {

    res.sucess(await app_product_category().updatePartOrAll(req.params, req.body))
})
router.get('/:id', async (req, res) => {

    res.sucess(await app_product_category().findByPk(req.params.id))

})
router.post('/create', async (req, res) => {
    req.body.name = (req.body.name || '').trim();
    if (!req.body.name) return res.err('name为空');
    res.sucess(await app_product_category().insert(req.body))

})
router.post('/delete/:id', async (req, res) => {
    res.sucess(await app_product_category().delAndDelRelation(req.params))

})


module.exports = router



