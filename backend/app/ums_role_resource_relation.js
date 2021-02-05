/* jshint indent: 2 */

var db = require('../models')
    , Base = require('./Base')
    // , ums_resource = require('./ums_resource').getInstance()
    , { Op } = db
    , { member } = require('../config').userType
    , memberApi = require('../config/memberApi')
    ;
var { ums_resource } = require('./index')

module.exports = class ums_role_resource_relation extends Base {

    constructor() {
        super('ums_role_resource_relation')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    /**
     * 检查某操作者是否对某api有访问权限
     * @param {*} operator 
     * @param {*} path 要访问的api路径
     */
    async resourceCheck(operator, path) {
        if (!operator || operator.userCode == `admin`) return true
        let antToRegex = (ant) => {
            var __multilevel = `[a-zA-Z0-9]+(/[a-zA-Z0-9]*)*`;
            var regexStr = ant.replace(/\*\*/g, `__multilevel`)
                .replace(/\*/g, `[a-zA-Z0-9]*/{0,1}`)
                .replace(/__multilevel/g, __multilevel)
                .replace(/\?/g, `[a-zA-Z0-9]`)
            return new RegExp(`^${regexStr}$`);


        }
        // 如果是member用户
        if (operator.userType == member) {
            for (let i = 0; i < memberApi.length; i++) {
                if (antToRegex(memberApi[i]).test(path)) return true;
            }


        } else {
            var relationList = await this.findList({ where: { roleId: { [Op.in]: operator.roles } } })
            // 有权的资源的id
            var resource_ids = relationList.map(obj => obj.resourceId)
            // 有权的资源，为ant路径风格
            var resourceList = await ums_resource().findList({ where: { id: { [Op.in]: resource_ids } } })

            for (let i = 0; i < resourceList.length; i++) {
                const item = resourceList[i];
                if (antToRegex(item.url).test(path)) return true

            }
        }


        return false
    }
    /**
     * 给某个角色分配资源（添加对资源的引用）
     * @param {{ roleId:5, resourceIds:'1,2,3' }} param0 
     */
    async allocResource({ roleId, resourceIds }) {
        let relationLs = [];
        // 先删除原有引用
        await this.destroy({ where: { roleId } })
        // 添加新的引用

        await resourceIds.split(',').forEach(resourceId => resourceId && relationLs.push({ roleId, resourceId }))
        return this.bulkCreate(relationLs)


    }


}
