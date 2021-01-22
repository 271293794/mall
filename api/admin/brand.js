var router = require('express').Router()
    , db = require('../../backend/models')
    , app = require('../../backend/app')
    ;


let { app_brand } = app

router.get('/list', async (req, res) => {
    var { pageNum, pageSize } = req.query
    var pageData = await app_brand().findPage({}, { pageNum, pageSize })
    res.sucess(pageData)

})
module.exports = router



