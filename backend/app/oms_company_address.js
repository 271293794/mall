/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class oms_company_address extends Base {
    constructor() {
        super('oms_company_address')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
