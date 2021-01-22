/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class pms_product_attribute_value extends Base {
    constructor() {
        super('pms_product_attribute_value')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
