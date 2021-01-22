var router = require('express').Router()
    , Op = require('../../backend/models').Op
    , app = require('../../backend/app')
    ;

/**
 * 某产品sku列表
 * @api {get} /app/sku/list/:productId 某产品sku列表
 * @apiGroup sku
 * @apiParam {number} productId 产品id
 * @apiUse baseMember
 */
router.get('/list/:productId', async (req, res) => {
    let where = { productId: req.params.productId };
    var { keyword } = req.query;
    if (keyword) where.skuCode = { [Op.like]: `%${keyword.trim()}%` }
    var list = await app.app_sku_stock().findList({ where })

    res.sucess(list)

})


module.exports = router


