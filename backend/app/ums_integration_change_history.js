/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class ums_integration_change_history extends Base {
    constructor() {
        super('ums_integration_change_history')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
