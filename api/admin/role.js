var router = require('express').Router()
    , { Op } = require('sequelize')
    , app = require('../../backend/app')
    ;

let { ums_role
    , ums_role_menu_relation
    , ums_role_resource_relation
    , ums_menu
    , ums_resource } = app
router.get('/listAll', async (req, res) => {
    var list = await ums_role().findList({ where: req.query })

    res.sucess(list)

})
router.get('/list', async (req, res) => {
    var { pageSize, pageNum, keyword } = req.query
    if (keyword) {
        let likeWord = { [Op.like]: `%${keyword.trim()}%` };
        var where = { [Op.or]: [{ name: likeWord }, { description: likeWord }] }
    }
    var pageData = await ums_role().findPage({ where }, { pageSize, pageNum })
    res.sucess(pageData)
})
router.post('/updateStatus/:id', async (req, res) => {
    let { status } = req.query
    let result = await ums_role().update({ status }, { where: req.params })
    res.sucess(result)



})
router.post('/update/:id', async (req, res) => {
    let result = await ums_role().update(req.body, { where: req.params })

    res.sucess(result)



})
router.post('/delete', async (req, res) => {
    let result = await ums_role().delRoleAndRelation(req.body.ids)
    res.sucess(result)


})
router.post('/create', async (req, res) => {
    req.body.name = req.body.name.trim()
    if (!req.body.name) return res.err('角色名为空')
    req.body.createTime = new Date()
    res.sucess(await ums_role().insert(req.body))
})
router.post('/allocMenu', async (req, res) => {
    let result = await ums_role_menu_relation().allocMenu(req.body)
    res.sucess(result)

})
router.get('/listMenu/:roleId', async (req, res) => {

    let relationLs = await ums_role_menu_relation().findList({ where: req.params })
    let result = await ums_menu().findList({ where: { id: { [Op.in]: relationLs.map(_ => _.menuId) } } })
    res.sucess(result)

})
router.get('/listResource/:roleId', async (req, res) => {
    res.sucess(await ums_resource().resourceLsByRole(req.params))

})
router.post('/allocResource', async (req, res) => {
    res.sucess(await ums_role_resource_relation().allocResource(req.body))
})

module.exports = router



