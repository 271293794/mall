/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class ums_role_menu_relation extends Base {
    constructor() {
        super('ums_role_menu_relation')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 更新某个角色的允许的菜单
     * @param {{ roleId, menuIds }} params 
     */
    async allocMenu({ roleId, menuIds }) {
        let relationLs = []
        // 先删除
        await this.destroy({ where: { roleId } })
        menuIds.split(',').forEach(menuId => menuId && relationLs.push({ roleId, menuId }));
        return this.bulkCreate(relationLs)

    }
}
