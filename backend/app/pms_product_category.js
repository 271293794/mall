/* jshint indent: 2 */

var { Op } = require('../models')
    , Base = require('./Base')
    ;
let { app_member_product_category_relation, app_coupon_product_category_relation } = require('./')

module.exports = class pms_product_category extends Base {
    constructor() {
        super('pms_product_category')
        console.log(`==============实例化${this.constructor.name}==================`)
    }

    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    withChildren(list = [], { rootId = 0, id = 'id', pId = 'parentId', child = 'children' }) {
        for (let isAlllayer1 = false; !isAlllayer1; isAlllayer1 = !isAlllayer1) {
            list = list.filter(tempNode => {
                let isLast = true;
                // 非1级节点的叶节点（没爸爸）
                if (tempNode[pId] === rootId) return true
                // 找儿子节点
                for (let i = 0; i < list.length; i++) {
                    if (list[i][pId] == tempNode[id]) {
                        isLast = false
                        break
                    }
                }
                // 如果没有儿子而且是有爸爸的，就给他找爸爸
                if (isLast) {
                    list.forEach(item => {
                        if (tempNode[pId] === item[id]) {
                            if (!item[child]) item[child] = []
                            item[child].push(tempNode)
                        }
                    });
                }
                return !isLast;
            });
            // 如果还存在非1级的节点，则再次循环
            for (let j = 0; j < list.length; j++) {
                if (list[j][pId] !== rootId) {
                    isAlllayer1 = false;
                    break;
                }
            }
        }
        return list
    }

    /**
     * 批量部分更新或单个全部更新
     * @param {{key:'showStatus'}} param0 
     * @param {{id:'1',ids:'1,2'}} param1 
     */
    async updatePartOrAll({ key }, { id, ids, ...param }) {


        if (Number.isNaN(+key)) {
            let idArr = ids.split(',').filter(_ => _)
            return this.update({ [key]: param[key] }, { where: { id: { [Op.in]: idArr } } })
        }
        return this.update(param, { where: { id } })

    }
    /**
     * 删除一个商品分类，并删除分类的各种引用
     * @param {*} param0 
     */
    async delAndDelRelation({ id }) {
        // 删除用户喜欢的商品类别引用
        // 删除优惠券对此类别的引用
        // 删除
        return Promise.all([
            app_member_product_category_relation().destroy({ where: { productCategoryId: id } }),
            app_coupon_product_category_relation().destroy({ where: { productCategoryId: id } }),
            this.destroy({ where: { id } })

        ])



    }


}
