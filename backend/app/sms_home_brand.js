/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class sms_home_brand extends Base {
    constructor() {
        super('sms_home_brand')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}