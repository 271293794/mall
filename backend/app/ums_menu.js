/* jshint indent: 2 */

var db = require('../models')
    , Base = require('./Base')
// , app_role_menu_relation = require('./ums_role_menu_relation').getInstance()
var { Op } = db.Sequelize
var { app_role_menu_relation } = require('./index')
module.exports = class ums_menu extends Base {

    constructor() {
        super('ums_menu')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    async getMenu(operator) {
        var relationList = await app_role_menu_relation().findList({
            attributes: ['menuId'],
            where: { roleId: { [Op.in]: operator.roles } }
        })

        var menu_ids = relationList.map(obj => obj.menuId)
        return this.findList({ where: { id: { [Op.in]: menu_ids } } })


    }
    /**
     * 删除一个菜单并删除角色对此菜单的引用
     * @param {*} param0 菜单id
     */
    async delAndDelRelation({ menuId }) {

        return Promise.all([
            app_role_menu_relation().destroy({ where: { menuId } }),
            this.destroy({ where: { id: menuId } })

        ])


    }

}
