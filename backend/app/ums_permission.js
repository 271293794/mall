/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class ums_permission extends Base {
    constructor() {
        super('ums_permission')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
