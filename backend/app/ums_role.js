/* jshint indent: 2 */

var db = require('../models')
    , Base = require('./Base')
    // , ums_admin_role_relation = require('./ums_admin_role_relation').getInstance()
    // , ums_role_menu_relation = require('./ums_role_menu_relation').getInstance()
    // , ums_role_permission_relation = require('./ums_role_permission_relation').getInstance()
    // , ums_role_resource_relation = require('./ums_role_resource_relation').getInstance()
    ;
var { ums_admin_role_relation
    , ums_role_menu_relation
    , ums_role_permission_relation
    , ums_role_resource_relation } = require('./index')





var { Op } = db.Sequelize
module.exports = class ums_role extends Base {

    constructor() {
        super('ums_role')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    async getRoles(operator) {

        return this.findList({ attributes: ['name'], where: { id: { [Op.in]: operator.roles } } })


    }
    /**
     * 删除一个角色，并删除引用关系，如分配给此角色的菜单
     * @param {*} id 角色id
     */
    async delRoleAndRelation(id) {
        let taskLs = [];

        [
            ums_admin_role_relation(),
            ums_role_menu_relation(),
            ums_role_permission_relation(),
            ums_role_resource_relation()
        ].forEach(_ => {
            taskLs.push(_.destroy({ where: { roleId: id } }))
        })
        taskLs.push(this.destroy({ where: { id } }))
        return Promise.all(taskLs)


    }


}
