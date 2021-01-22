/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class cms_topic extends Base {
    constructor() {
        super('cms_topic')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
}
