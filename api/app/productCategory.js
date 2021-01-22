var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { app_product_category } = app
// category页面数据
router.get('/list', async (req, res) => {
    let { parentId } = req.query;
    res.sucess(await app_product_category().findList({ where: { parentId, showStatus: 1 } }))


})


module.exports = router



