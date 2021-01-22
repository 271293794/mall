/* jshint indent: 2 */

var { Op } = require('../models')
    , Base = require('./Base')
    , { app_role_resource_relation } = require('./index')
    ;

module.exports = class ums_resource extends Base {
    constructor() {
        super('ums_resource')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 删除一个资源并删除角色对此资源的引用
     * @param {*} param0 资源id
     */
    async delAndDelRelation({ id }) {
        return Promise.all([
            app_role_resource_relation().destroy({ where: { resourceId: id } }),
            this.destroy({ where: { id } })])
    }

    /**
     * 返回某个角色所拥有的资源列表
     * @param {*} param0 
     */
    async resourceLsByRole({ roleId }) {
        let relationLs = await app_role_resource_relation().findList({ where: { roleId } })
        return this.findList({ where: { id: { [Op.in]: relationLs.map(_ => _.resourceId) } } })
    }
}
