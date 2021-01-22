/* jshint indent: 2 */

var db = require('../models'),
    Base = require('./Base')

module.exports = class sms_flash_promotion_session extends Base {
    constructor() {
        super('sms_flash_promotion_session')
        console.log(`==============实例化${this.constructor.name}==================`)
    }
    static getInstance() {
        if (!this.instance) this.instance = new this();
        return this.instance;
    }
    async update2(model, option) {
        this._toLocalTime(model)
        return this.update(model, option)

    }
    async insert2(model, option) {
        this._toLocalTime(model);
        return this.insert(model, option);

    }
    _toLocalTime(session) {
        session.startTime = new Date(session.startTime).toLocaleTimeString();
        session.endTime = new Date(session.endTime).toLocaleTimeString();

    }
    async findList2(option) {
        let list = await this.findList(option)
        list.forEach(_ => {
            _.startTime = `2020-01-01T${_.startTime}.000+08:00`;
            _.endTime = `2020-01-01T${_.endTime}.000+08:00`;

        });
        return list;

    }
}
