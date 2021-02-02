var { sequelize, Sequelize } = require('../models')
var CryptoJS = require('crypto-js')
var Option = require('./util/Option');

module.exports = class Base {
    constructor(name) {
        /** @type {typeof Sequelize.Model} */
        this.anyModel = sequelize.model(name)

    }

    /**
     * md5加密
     * @param str 待加密字符
     * @param key 用于加密运算的盐值
     * @returns {*|string}
     */
    encrypMD5(str, key) {
        return CryptoJS.MD5(str, key).toString();
    }



    /**
     * IP转换为INTEGER
     * @param ip
     * @returns {number}
     */
    ipToInt(ip) {
        let REG = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        let result = REG.exec(ip);
        if (!result) return 0;
        return (parseInt(result[1]) << 24
            | parseInt(result[2]) << 16
            | parseInt(result[3]) << 8
            | parseInt(result[4])) >>> 0;
    }

    /**
     * INTEGER转换为IP
     * @param INT
     * @returns {string}
     */
    intToIp(INT) {
        if (INT < 0 || INT > 0xFFFFFFFF) {
            throw ("The number is not normal!");
        }
        return (INT >>> 24) + "." + (INT >> 16 & 0xFF) + "." + (INT >> 8 & 0xFF) + "." + (INT & 0xFF);
    }

    /**
     * 格式化时间
     * @param date
     * @param fmt
     * @returns {*}
     */
    formatDate(date, fmt) {
        !(date instanceof Date) && (date = new Date(date));
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    /**
     * 执行原生sql
     * @param sql
     * @param {Option} option
     * @returns {Promise}
     */
    static query(sql, option) {
        return sequelize.query(sql, option);
    }


    /**
     * 数据库函数
     */
    fn = Sequelize.fn;


    /**
     * 拼接where逻辑
     * @param name
     * @param logic
     * @param value
     */
    where(name, logic, value) {
        return Sequelize.where(name, logic, value);
    }

    /**
     * 字符串转换为列表字段
     */
    col = Sequelize.col;


    /**
     * 插入一条数据
     * @param model
     * @returns {Promise<any>}
     */
    insert(model, option) {
        return this.anyModel.create(model, option).catch(e => {
            throw e;
        });
    }
    /**
     * 先检查是否存在，不存在则插入
     * @param {*} where 条件
     * @param {*} model 要插入的对象
     * @param {*} option 插入时选项
     */
    checkInsert(where, model, option) {
        return this.anyModel.findOne({ where }).then(data => {
            return data || this.anyModel.create(model, option)
        }).catch(e => { throw e })
    }
    /**
     * 查找与查询匹配的行，如果找不到，则构建并保存(自带，与自己实现的checkInsert方法相同)
     * defaults:创建新实例时要使用的默认值
     * @param {{where:{},defaults:{},transaction}} option 
     * @returns {Promise<T,Boolean>}
     */
    findOrCreate(option) {
        return this.anyModel.findOrCreate(option).catch(e => { throw e });

    }

    /**
     * 批量添加
     * @param insertList
     * @param {Option} option
     * @returns {Promise.<Array.<Instance>>}
     */
    bulkCreate(insertList, option) {
        return this.anyModel.bulkCreate(insertList, option).catch(e => {
            throw e;
        });
    }

    /**
     * 查询所有
     * @param {Option} option 查询条件
     * @returns {Promise<Array<any>>}
     */
    findList(option) {
        return this.anyModel.findAll(option).then(result => result
        ).catch(e => {
            throw e;
        });
    }

    /**
     * 根据条件查询一条数据
     * @param {Option} option
     * @returns {Promise<any>}
     */
    findOne(option) {
        return this.anyModel.findOne(option).then(result => {
            return result;
        });
    }
    /**
     * 统计条数
     * @param {Option} option
     * @returns {Promise<Number>}
     */
    count(option) {
        return this.anyModel.count(option).catch(e => {
            throw e;
        });
    }

    /**
     * 
     * @param {Option} option 条件
     * @returns {Promise<{list:[]}>}
     * 可使用原生方法 findAndCountAll
     */
    findPage(option, { pageNum = 1, pageSize = 20, sortType = 'ASC', sortField = '' }) {
        let totalPage, data;

        if (!['ASC', 'DESC', 'asc', 'desc'].includes(sortType)) throw Error('sortType参数非法');
        if (sortType.toUpperCase() != 'ASC') sortType = 'DESC';
        pageNum = parseInt(pageNum), pageSize = parseInt(pageSize);
        return this.count(option)
            .then(total => {
                totalPage = total % pageSize == 0 ? total / pageSize : parseInt(total / pageSize) + 1;
                if (pageNum > totalPage) pageNum = totalPage;
                if (pageNum <= 0) pageNum = 1
                data = {
                    totalPage,
                    total,
                    previousPage: pageNum - 1 > 0 ? pageNum - 1 : 1,
                    pageSize,
                    hasPrevious: pageNum - 1 >= 1 && pageNum - 1 <= totalPage,
                    hasNext: totalPage > pageNum,
                    sortType: sortType,
                    pageNum
                };
                return this.anyModel.findAll(Object.assign({
                    limit: pageSize,
                    offset: pageSize * (pageNum - 1),
                    order: [
                        [(sortField || this.anyModel.primaryKeyAttribute), sortType]
                    ]
                }, option))
            })
            .then(result => {
                return Object.assign(data, { list: result });
            })
            .catch(e => {
                throw e;
            });
    }

    /**
     * 通过主键查询
     * @param { Number | String} param 所需实例的主键的值
     * @param {Option} option
     * @returns {Promise<any>}
     */
    findByPk(param, option) {
        return this.anyModel.findByPk(param, option).catch(e => {
            throw e;
        });
    }

    /**
     * @param data 修改的字段
     * @param {Option} option 条件
     * @returns {Promise<[]>}
     */
    update(data, option) {
        return this.anyModel.update(data, option).catch(e => {
            throw e;
        });
    }
    /**
     * 更新一个对象
     * @param {*} data 
     * @param {*} uniqueKey 唯一值的字段名，默认为主键
     */
    updateByPk(data, uniqueKey) {
        uniqueKey = uniqueKey || this.anyModel.primaryKeyAttribute;
        return this.update(data, { where: { [uniqueKey]: data[uniqueKey] } })
    }

    /**
     * 批量更新(原生update更新的内容相同，本方法不同)
     * @param {[]} list 要更新的对象列表
     * @param {''} uniqueKey 唯一值的字段名，默认为主键
     */
    updateList(list, uniqueKey) {
        uniqueKey = uniqueKey || this.anyModel.primaryKeyAttribute;
        return Promise.all(list.map(_ => this.anyModel.update(_, { where: { [uniqueKey]: _[uniqueKey] } })));



    }
    /**
     * 创建或更新一个 model
     * @param {*} model 
     */
    createOrUpdate(model, option) {
        // 主键名称
        let pk = this.anyModel.primaryKeyAttribute;
        return model[pk] ? this.update(model, { where: { [pk]: model[pk] }, ...option }) : this.insert(model, option);

    }

    /**
     * 方法.build()创建一个非持久化实例,这意味着数据尚未保存在数据库中,但在执行期间仅存储在内存中.
     * 程序停止时(服务器崩溃,执行结束或类似的事情),使用.build()创建的实例将丢失.应再调用save().
     * 可过滤 model 中多余的参数
     * @param {*} model 对象 
     * @param {Option} option
     * 
     */
    build(model, option) {
        return this.anyModel.build(model, option).save().catch(e => { throw e })

    }

    /**
     * 删除数据
     * @param {Option} option
     * @returns {Promise<Number>}
     */
    destroy(option) {
        return this.anyModel.destroy(option).catch(e => {
            throw e;
        });
    }

    /**
     * 事务管理
     * @param fn
     * @returns {*}
     */
    transaction(fn) {
        return sequelize.transaction({ isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE }, fn).catch(e => {
            throw e;
        });
    }
    /** 
     * 返回此模型所有的字段
     * @returns {[]}
     */
    fields() {
        return Object.keys(this.anyModel.rawAttributes)
    }

}

