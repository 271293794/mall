var pms_brand = require('../../backend/app/pms_brand')
    , router = require('express').Router()
    , db = require('../../backend/models')
    , app = require('../../backend/app')
    ;
var { Op } = db.Sequelize
let appMap = new Map([
    ['brand', app.app_home_brand],
    ['newProduct', app.app_home_new_product],
    ['recommendProduct', app.app_home_recommend_product],
    ['recommendSubject', app.app_home_recommend_subject],
    ['advertise', app.app_home_advertise],
])
router.get(/(brand|newProduct|recommendProduct|recommendSubject|advertise)\/list/, async (req, res) => {
    var { pageNum, pageSize, brandName, productName, subjectName, recommendStatus, name, type, endTime } = req.query;

    let where = {};
    if (brandName) where.brandName = { [Op.like]: `%${brandName.trim()}%` }; // 品牌名称
    if (productName) where.productName = { [Op.like]: `%${productName.trim()}%` }; // 产品名称
    if (subjectName) where.subjectName = { [Op.like]: `%${subjectName.trim()}%` }; //专题名称
    if (name) where.name = { [Op.like]: `%${name.trim()}%` }; // 广告名称
    if (type) where.type = type; // 轮播位置：0->PC首页轮播；1->app首页轮播        
    if (endTime) where.endTime = { [Op.lt]: new Date(endTime) };  // 轮播到期时间   
    if (recommendStatus) where.recommendStatus = recommendStatus; // 品牌、人气、新品、专题的推荐状态

    let key = req.path.split('/')[1];
    var pageData = await appMap.get(key)().findPage({ where }, { pageNum, pageSize })
    res.sucess(pageData)




})


// 更新品牌、人气、新品、专题的推荐状态
router.post(/(brand|newProduct|recommendProduct|recommendSubject)\/update\/recommendStatus/, async (req, res) => {
    let taskLs = [];
    let { ids, recommendStatus } = req.body;
    let key = req.path.split('/')[1];

    ids.split(',').forEach(id => id && taskLs.push(appMap.get(key)().update({ recommendStatus }, { where: { id } })))
    res.sucess(await Promise.all(taskLs))

})
// 设置品牌、人气、新品、专题的排序
router.post(/(brand|newProduct|recommendProduct|recommendSubject)\/update\/sort\/\d+/, async (req, res) => {
    let { sort, id } = req.query;
    let key = req.path.split('/')[1];

    res.sucess(await appMap.get(key)().update({ sort }, { where: { id } }))



})
router.post(/(brand|newProduct|recommendProduct|recommendSubject|advertise)\/delete/, async (req, res) => {
    let idArr = req.body.ids.split(',').filter(_ => _);
    let key = req.path.split('/')[1];
    // 如果是广告，是否要删除cos上的图片？
    res.sucess(await appMap.get(key)().destroy({ where: { id: { [Op.in]: idArr } } }))
})
// 品牌推荐、人气推荐、新品推荐、专题推荐
router.post(/(brand|newProduct|recommendProduct|recommendSubject)\/create/, async (req, res) => {
    let taskLs = [];
    let key = req.path.split('/')[1];

    req.body.forEach(_ => taskLs.push(appMap.get(key)().checkInsert(_, _)));
    res.sucess(await Promise.all(taskLs))
})
// 添加轮播广告
router.post('/advertise/create', async (req, res) => {

    res.sucess(await app.app_home_advertise().insert(req.body))

})

router.get('/advertise/:id', async (req, res) => {
    let { id } = req.params;
    res.sucess(await app.app_home_advertise().findByPk(id))

})
// 更新某个轮播广告
router.post('/advertise/update/:id', async (req, res) => {
    let { id } = req.params;
    res.sucess(await app.app_home_advertise().update(req.body, { where: { id } }));

})
// 广告轮播上线或下线
router.post('/advertise/update/status/:id', async (req, res) => {
    let { id } = req.params;
    let { status } = req.query;
    res.sucess(await app.app_home_advertise().update({ status }, { where: { id } }));

})

module.exports = router



