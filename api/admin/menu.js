var router = require('express').Router()
    , { Op } = require('sequelize')
    , { withChildren } = require('./__util')
    , app = require('../../backend/app')

    ;


let { ums_menu } = app

router.get('/treeList', async (req, res) => {
    var list = await ums_menu().findList({ where: req.query })
    let tree = withChildren(list, {})
    res.sucess(tree)

})
router.get('/list/:parentId', async (req, res) => {
    res.sucess(await ums_menu().findPage({ where: req.params }, req.query))

})
router.get('/:id', async (req, res) => {

    res.sucess(await ums_menu().findByPk(req.params.id))


})
router.post('/delete/:menuId', async (req, res) => {

    res.sucess(await ums_menu().delAndDelRelation(req.params))


})
router.post('/update/:id', async (req, res) => {
    req.body.sort = +req.body.sort || 0;
    req.body.title = (req.body.title || '').trim()
    res.sucess(await ums_menu().update(req.body, { where: req.params }))

})
module.exports = router


