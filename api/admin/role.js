var router = require('express').Router()
    , { Op } = require('sequelize')
    , app = require('../../backend/app')
    ;

let { app_role
    , app_role_menu_relation
    , app_role_resource_relation
    , app_menu
    , app_resource } = app
router.get('/listAll', async (req, res) => {
    var list = await app_role().findList({ where: req.query })

    res.sucess(list)

})
router.get('/list', async (req, res) => {
    var { pageSize, pageNum, keyword } = req.query
    if (keyword) {
        let likeWord = { [Op.like]: `%${keyword.trim()}%` };
        var where = { [Op.or]: [{ name: likeWord }, { description: likeWord }] }
    }
    var pageData = await app_role().findPage({ where }, { pageSize, pageNum })
    res.sucess(pageData)
})
router.post('/updateStatus/:id', async (req, res) => {
    let { status } = req.query
    let result = await app_role().update({ status }, { where: req.params })
    res.sucess(result)



})
router.post('/update/:id', async (req, res) => {
    let result = await app_role().update(req.body, { where: req.params })

    res.sucess(result)



})
router.post('/delete', async (req, res) => {
    let result = await app_role().delRoleAndRelation(req.body.ids)
    res.sucess(result)


})
router.post('/create', async (req, res) => {
    req.body.name = req.body.name.trim()
    if (!req.body.name) return res.err('角色名为空')
    req.body.createTime = new Date()
    res.sucess(await app_role().insert(req.body))
})
router.post('/allocMenu', async (req, res) => {
    let result = await app_role_menu_relation().allocMenu(req.body)
    res.sucess(result)

})
router.get('/listMenu/:roleId', async (req, res) => {

    let relationLs = await app_role_menu_relation().findList({ where: req.params })
    let result = await app_menu().findList({ where: { id: { [Op.in]: relationLs.map(_ => _.menuId) } } })
    res.sucess(result)

})
router.get('/listResource/:roleId', async (req, res) => {
    res.sucess(await app_resource().resourceLsByRole(req.params))

})
router.post('/allocResource', async (req, res) => {
    res.sucess(await app_role_resource_relation().allocResource(req.body))
})

module.exports = router



