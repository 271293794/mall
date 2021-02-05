var router = require('express').Router()
    , app = require('../../backend/app')
    ;
let { cms_prefrence_area } = app




/**
 * 获取优选列表
 * @api {get} /admin/prefrenceArea/listAll 获取优选列表
 * @apiDescription 根据ID获得某个用户
 * @apiGroup prefrenceArea
 * @apiVersion 1.0.0
 * @apiUse baseAdmin
 */
router.get('/listAll', async (req, res) => {
    var list = await cms_prefrence_area().findList()

    res.sucess(list)

})


module.exports = router



