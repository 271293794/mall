var router = require('express').Router()
    , { Sequelize: { Op } } = require('../../backend/models')
    , app = require('../../backend/app')
    ;

let { ums_resource } = app

router.get('/list', async (req, res) => {
    var where = {};
    var { pageSize, pageNum, categoryId, urlKeyword, nameKeyword } = req.query
    if (nameKeyword) where.name = { [Op.like]: `%${nameKeyword.trim()}%` }
    if (urlKeyword) where.url = { [Op.like]: `%${urlKeyword.trim()}%` }
    if (categoryId) where.categoryId = categoryId

    var pageData = await ums_resource().findPage({ where }, { pageSize, pageNum })
    res.sucess(pageData)


})
router.post('/update/:id', async (req, res) => {


    let affectedRows = await ums_resource().update(req.body, { where: { id: req.body.id } })
    res.sucess(affectedRows)


})
router.get('/listAll', async (req, res) => {
    res.sucess(await ums_resource().findList())


})
router.post('/create', async (req, res) => {
    req.body.name = (req.body.name || '').trim(); req.body.url = (req.body.url || '').trim();
    if (!req.body.name || !req.body.url) return res.err('name和url不能为空')
    req.body.createTime = new Date();
    res.sucess(await ums_resource().insert(req.body))


})

router.post('/delete/:id', async (req, res) => {
    res.sucess(await ums_resource().delAndDelRelation(req.params))

})

module.exports = router


