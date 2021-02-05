

var router = require('express').Router()
  , db = require('../../backend/models')
  , { operator, provider } = require('../../backend/operatorUtils')
  , { userType } = require('../../backend/config')
  , app = require('../../backend/app')
  ;

var { ums_admin
  , ums_admin_login_log
  , ums_role
  , ums_menu
  , ums_admin_role_relation } = app;

var { Op } = db.Sequelize
router.post(`/login`, async (req, res) => {

  var { username, password } = req.body

  var user = await ums_admin().checkLogin(username, password)
  await ums_admin_login_log().insert({
    adminId: user.id,
    ip: req.ip
  })

  let adminOperator = operator(user, req, userType.admin);
  var tokenStr = provider.getTokenStr(adminOperator)



  res.sucess({ tokenStr })


})

router.get('/info', async (req, res) => {
  let operator = req.operator
  var menus = await ums_menu().getMenu(operator)
  var roleList = await ums_role().getRoles(operator)
  var user = await ums_admin().findByPk(operator.id, { attributes: ['icon'] })
  var roles = roleList.map(obj => obj.name)
  var username = operator.username

  res.sucess({ menus, roles, username, icon: user.icon })

})



router.get('/list', async (req, res) => {
  var where = {};
  var { pageSize, pageNum, keyword } = req.query
  if (keyword) {
    let likeWord = { [Op.like]: `%${keyword.trim()}%` };
    where = { [Op.or]: [{ username: likeWord }, { nickName: likeWord }] }
  }
  var pageData = await ums_admin().findPage({ where }, { pageSize, pageNum })
  res.sucess(pageData)
})
router.get('/role/:adminId', async (req, res) => {
  let relationLs = await ums_admin_role_relation().findList({ where: req.params })
  let list = await ums_role().findList({ where: { id: { [Op.in]: relationLs.map(_ => _.roleId) } } })
  res.sucess(list)



})
router.post('/update/:id', async (req, res) => {
  let result = await ums_admin().updateInfo(req.body)
  if (!result) return res.err('用户名不能修改')
  res.sucess(result)



})
router.post('/delete/:id', async (req, res) => {
  res.sucess(await ums_admin().delAndDelRelation(req.params))

})

router.post('/register', async (req, res) => {
  let result = await ums_admin().register(req.body)
  if (!result.ok) return res.err(result.message);
  res.sucess()



})
router.post('/updateStatus/:id', async (req, res) => {
  let { status } = req.query
  let result = await ums_admin().update({ status }, { where: req.params })
  res.sucess(result)



})
router.post('/role/update', async (req, res) => {
  let { adminId, roleIds } = req.body
  let relationLs = []
  roleIds.split(',').forEach(roleId => roleId && relationLs.push({ adminId, roleId }));
  await ums_admin_role_relation().destroy({ where: { adminId } })
  let result = relationLs.length && await ums_admin_role_relation().bulkCreate(relationLs)

  res.sucess(result)

})
router.post('/logout', (req, res) => {
  res.sucess()
})



module.exports = router



