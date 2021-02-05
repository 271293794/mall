var router = require('express').Router()
    , { Sequelize: { Op } } = require('../../backend/models')
    , app = require('../../backend/app')
    ;

let { pms_sku_stock } = app

router.get('/:productId(\\d+)', async (req, res) => {
    var { productId } = req.params
    var { keyword } = req.query
    let where = { productId }
    if (keyword) where.skuCode = { [Op.like]: `%${keyword.trim()}%` }
    var list = await pms_sku_stock().findList({ where })

    res.sucess(list)

})
router.post('/update/:productId(\\d+)', async (req, res) => {


    let affectedRows = await pms_sku_stock().updateList(req.body)
    res.sucess(affectedRows)


})

module.exports = router


