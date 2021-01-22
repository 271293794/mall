var redis = require('redis')
var prefix = 'mall:'

var bluebird = require('bluebird');
var client = redis.createClient({ prefix })

bluebird.promisifyAll(redis)
module.exports = {

    async initSession(operator) {

        let exists = await client.existsAsync(operator.id)
        if (exists) return true
        let value = { operator }
        let ok = await this._set(operator, value)



    },
    async add(operator, name, content) {
        let exists = await client.existsAsync(operator.id)
        let value;
        if (exists) {
            value = JSON.parse(await client.getAsync(operator.id))
            value.name = content

        }
        else { value = { operator, [name]: content } }
        return await this._set(operator, value)


    },
    async remove(operator, name) {
        let value = JSON.parse(await client.getAsync(operator.id))

        delete value[name]
        return await this._set(operator, value)


    },
    async _set(op, value) {
        // -2:不存在，-1:永久
        var ttl = await client.ttlAsync(op.id)

        return await client.setAsync(op.id, JSON.stringify(value))
    },
    async get(operator) {
        let value = JSON.parse(await client.getAsync(operator.id))
        return value

    },
    destroy(operator) {
        client.del(operator.id)


    }


}