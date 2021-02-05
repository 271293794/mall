var router = require('express').Router()
    , app = require('../../backend/app')
    , Op = require('../../backend/models').Op
    ;

let { pms_product } = app;
// 商品列表
router.get('/list', async (req, res) => {

    let { productCategoryId, keyword, pageNum, pageSize, sortType, sortField } = req.query;
    // deleteStatus：0-未删除；1-已删除;publishStatus：1-上架
    let where = { deleteStatus: 0, publishStatus: 1 };
    if (productCategoryId) where.productCategoryId = productCategoryId;
    if (keyword) where.name = { [Op.like]: `%${keyword.trim()}%` };




    res.sucess(await pms_product().findPage({ where }, { pageNum, pageSize, sortType, sortField }))


})
// 无满减等促销信息
router.get('/one/:id', async (req, res) => {
    res.sucess(await pms_product().findByPk(req.params.id));
})
// 返回附加了促销信息的一个产品
router.get('/oneAndsales/:id', async (req, res) => {
    var { id } = req.params;

    let [product, info] = await Promise.all([
        pms_product().findByPk(id),
        pms_product().additionalInfo(id)])



    res.sucess(Object.assign(product, info));
})

module.exports = router



