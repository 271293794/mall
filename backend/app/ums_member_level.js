/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class ums_member_level extends Base {
    constructor() {
        super('ums_member_level')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}