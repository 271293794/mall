/* jshint indent: 2 */

var db = require('../models')
    , Base = require('./Base')
    , { userPwdEncrypt } = require('../config')
    , CryptoJS = require('crypto-js')
    , cryptoJS = require('crypto-js')
    , { ums_admin_role_relation } = require('./index')
    , { userPwdEncrypt: { salt, alg, usernameMinLength: uMinLen, passwordMinLength: pMinLen } } = require('../config')
    ;

module.exports = class ums_admin extends Base {
    constructor() {
        super('ums_admin')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    pwdEncode = CryptoJS[userPwdEncrypt.alg] || CryptoJS.MD5;
    async checkLogin(username, password = '') {

        password = password.trim()
        var user = await this.findOne({
            where: { username }, "raw": false,
            include: [{
                model: db.ums_admin_role_relation,
                as: 'ums_admin_role_relation',
                attributes: ['roleId']

            }]
        })
        var enPassword = this.pwdEncode(password, userPwdEncrypt.salt)

        if (!user) throw Error('账户不存在')
        if (!user.status) throw Error('账户已禁用')
        if (user.password != enPassword) throw Error('密码不正确')
        return user

    }

    async register(user) {
        let result = { ok: false, message: '' }
        if (!user.username || !user.password) {
            result.message = '用户名或密码不能为空'
            return result
        }
        user.username = user.username.trim();
        user.password = user.password.trim();

        if (user.username.length < uMinLen) {
            result.message = `username长度不能小于${uMinLen}`; return result;
        }
        if (user.password.length < pMinLen) {
            result.message = `password长度不能小于${pMinLen}`; return result;

        }
        user.password = (cryptoJS[alg] || cryptoJS.MD5)(user.password, salt).toString();

        // 检查是否存在
        let exist = await this.count({ where: { username: user.username } })
        if (exist) { result.message = '用户已存在'; return result; }
        user.createTime = new Date()
        await this.insert(user)
        result.ok = true; return result;


    }
    async updateInfo(user) {
        let username = (await this.findByPk(user.id, { attributes: ['username'] })).username
        return (username == user.username) && this.update(user, { where: { id: user.id } })

    }
    /**
     * 删除一个后台用户，并删除用户的角色引用
     * @param {*} param0 
     */
    async delAndDelRelation({ id }) {
        // 是否要删除登陆日志？
        return Promise.all([
            ums_admin_role_relation().destroy({ where: { roleId: id } }),
            this.destroy({ where: { id } })
        ])
    }

}
