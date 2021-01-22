var router = require('express').Router()
    , { Op } = require('sequelize')
    , { withChildren } = require('./__util')
    , app = require('../../backend/app')

    ;


let { app_menu } = app

router.get('/treeList', async (req, res) => {
    var list = await app_menu().findList({ where: req.query })
    let tree = withChildren(list, {})
    res.sucess(tree)

})
router.get('/list/:parentId', async (req, res) => {
    res.sucess(await app_menu().findPage({ where: req.params }, req.query))

})
router.get('/:id', async (req, res) => {

    res.sucess(await app_menu().findByPk(req.params.id))


})
router.post('/delete/:menuId', async (req, res) => {

    res.sucess(await app_menu().delAndDelRelation(req.params))


})
router.post('/update/:id', async (req, res) => {
    req.body.sort = +req.body.sort || 0;
    req.body.title = (req.body.title || '').trim()
    res.sucess(await app_menu().update(req.body, { where: req.params }))

})
module.exports = router


