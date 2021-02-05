var router = require('express').Router()
    , db = require('../../backend/models')
    , app = require('../../backend/app')
    ;


var { Op } = db.Sequelize

let { pms_product, pms_product_category, sms_home_recommend_product } = app

router.get('/list', async (req, res) => {
    // 删除状态：0->未删除；1->已删除
    var where = { deleteStatus: 0 }, pageSetting = {};
    for (let key in req.query) {
        let value = req.query[key]; if (!value) continue;

        if (['pageNum', 'pageSize'].includes(key)) {
            pageSetting[key] = value
        } else if (key == 'keyword') {
            where.name = { [Op.like]: `%${value}%` }
        } else {
            where[key] = value
        }





    }
    var pageData = await pms_product().findPage({ where }, pageSetting)
    res.sucess(pageData)

})

router.post('/update/deleteStatus', async (req, res) => {
    var { ids, deleteStatus } = req.query
    ids = ids.split(',').filter(_ => _);

    res.sucess(await pms_product().update({ deleteStatus }, { where: { id: { [Op.in]: ids } } }))


})
router.get('/updateInfo/:id', async (req, res) => {

    var { id } = req.params
    var product = await pms_product().findByPk(id)
    let info = await pms_product().additionalInfo(id)
    Object.assign(product, info)
    product.cateParentId = (await pms_product_category().findByPk(product.productCategoryId, { attributes: ['parentId'] })).parentId
    res.sucess(product)
})
// 限制id为一个数字
router.post('/update/:id(\\d+)', async (req, res) => {

    let { id } = req.params
    let affectedRowsTotal = await pms_product().additionalInfo(id, req.body)

    let affectedRows = await pms_product().update(req.body, { where: { id } })

    affectedRowsTotal.push(affectedRows)

    res.sucess(affectedRowsTotal)

})

router.post(/update\/(newStatus|publishStatus|recommendStatus)/, async (req, res) => {
    let { ids, newStatus, publishStatus, recommendStatus } = req.query;
    let idArr = ids.split(',').filter(_ => _);
    // 更新的字段
    let updateField = {};
    if (newStatus) updateField.newStatus = newStatus;
    if (publishStatus) updateField.publishStatus = publishStatus;
    if (recommendStatus) updateField.recommendStatus = recommendStatus;
    res.sucess(await Promise.all(idArr.map(id => pms_product().update(updateField, { where: { id } }))));


})


router.get('/simpleList', async (req, res) => {
    let { keyword = '' } = req.query;
    let like = { [Op.like]: `%${keyword.trim()}%` }
    res.sucess(await pms_product().findList({ where: { [Op.or]: [{ name: like }, { productSn: like }] } }))
})
// 添加商品
router.post('/create', async (req, res) => {


    let product = await pms_product().build(req.body);

    await pms_product().additionalInfo(product.id, req.body);

    res.sucess()


})

module.exports = router



