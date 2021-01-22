var router = require('express').Router()
    , app = require('../../backend/app')
    ;
let { app_resource_category } = app


router.get('/listAll', async (req, res) => {
    res.sucess(await app_resource_category().findList())


})
router.post('/create', async (req, res) => {
    let { name, sort, createTime = new Date() } = req.body
    name = name.trim(), sort = +sort;
    if (!name) return res.err('name不能为空')
    res.sucess(await app_resource_category().insert({ name, sort, createTime }))
})
router.post('/delete/:id', async (req, res) => {
    res.sucess(await app_resource_category().destroy({ where: req.params }))


})
router.post('/update/:id', async (req, res) => {

    req.body.name = req.body.name.trim(), req.body.sort = +req.body.sort;
    if (!req.body.name) return res.err('name不能为空')
    let affectedRows = await app_resource_category().update(req.body, { where: { id: req.body.id } })
    res.sucess(affectedRows)


})


module.exports = router


