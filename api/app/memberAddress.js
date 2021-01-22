var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { app_member_receive_address } = app

/**
 * 
 * @api {get} /app/memberAddress/list 会员收货地址
 * @apiGroup memberAddress
 * @apiParam {number} memberId 会员id
 * @apiUse baseMember
 */
router.get('/list', async (req, res) => {
    let memberId = req.query.memberId || req.operator.id;

    var list = await app_member_receive_address().findList({ where: { memberId } })

    res.sucess(list)

})
/**
 * @api {post} /app/memberAddress/createOrUpdate 创建或更新一个member地址
 * @apiGroup memberAddress
 * @apiUse baseMember
 * @apiParam {Number} memberId      会员id   
 * @apiParam {string} name  收货人名称
 * @apiParam {string} phoneNumber    联系方式
 * @apiParam {Number} defaultStatus     是否为默认
 * @apiParam {string} postCode  邮政编码
 * @apiParam {string} province  省份/直辖市
 * @apiParam {string} city      城市
 * @apiParam {string} region    区
 * @apiParam {string} detailAddress    详细地址(街道)
 */
router.post('/createOrUpdate', async (req, res) => {
    if (!req.body.memberId) req.body.memberId = req.operator.id;
    res.sucess(await app_member_receive_address().createOrUpdate(req.body));

})
/**
 * @api {post} /app/memberAddress/delete/:id 删除一个地址
 * @apiParam {number} id 地址id
 * @apiGroup memberAddress
 * @apiUse baseMember
 * 
 */
router.post('/delete/:id', async (req, res) => {
    let { id } = req.params;
    res.sucess(await app_member_receive_address().destroy({ where: { id } }));
})

/**
 * @api {get} /app/memberAddress/defaultAddress 默认地址
 * @apiGroup memberAddress
 * @apiUse baseMember
 * 
 */
router.get('/defaultAddress', async (req, res) => {
    let memberId = req.operator.id;
    res.sucess(await app_member_receive_address().findOne({ where: { memberId } }));


})
/**
 * @api {get} /app/memberAddress/setDefaultAddress/:id 设置默认收货地址
 * @apiParam {number} id 地址id
 * @apiGroup memberAddress
 * @apiUse baseMember
 * 
 */
router.post('/setDefaultAddress/:id(\\d+)', async (req, res) => {
    let memberId = req.operator.id, { id } = req.params;


    await app_member_receive_address().update({ defaultStatus: 0 }, { where: { memberId } });
    await app_member_receive_address().update({ defaultStatus: 1 }, { where: { id } });





})
module.exports = router


