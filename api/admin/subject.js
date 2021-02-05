var router = require('express').Router()
    , app = require('../../backend/app')
    , { Op } = require('../../backend/models')
    ;
let { cms_subject } = app

router.get('/listAll', async (req, res) => {
    var list = await cms_subject().findList()

    res.sucess(list)

})

router.get('/list', async (req, res) => {
    let { keyword = '', pageNum, pageSize } = req.query;
    let where = {};
    if (keyword) where.name = { [Op.like]: `%${keyword.trim()}%` };
    var list = await cms_subject().findPage({ where }, { pageNum, pageSize })

    res.sucess(list)

})


module.exports = router


