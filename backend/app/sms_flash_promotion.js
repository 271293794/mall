/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class sms_flash_promotion extends Base {
    constructor() {
        super('sms_flash_promotion')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}