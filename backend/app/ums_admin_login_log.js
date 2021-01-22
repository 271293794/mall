/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class ums_admin_login_log extends Base {
    constructor() {
        super('ums_admin_login_log')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
