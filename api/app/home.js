var router = require('express').Router()
    , app = require('../../backend/app')
    , db = require('../../backend/models')
    ;

let appMap = new Map([
    ['newProduct', app.sms_home_new_product],
    ['recommendProduct', app.sms_home_recommend_product],
    ['recommendSubject', app.sms_home_recommend_subject],
])
// 新品推荐、人气推荐
router.get(/(newProduct|recommendProduct|recommendSubject)\/list/, async (req, res) => {
    let { pageNum, pageSize, sortField, sortType } = req.query;
    let key = req.path.split('/')[1];
    let include = [];
    if (key == 'newProduct' || key == 'recommendProduct') include.push({ model: db.pms_product, as: 'product' });
    if (key == 'recommendSubject') include.push({ model: db.cms_subject, as: 'subject' });
    res.sucess(await appMap.get(key)().findPage({
        raw: false,
        include,
    }, { pageNum, pageSize, sortField, sortType }));


})


module.exports = router



