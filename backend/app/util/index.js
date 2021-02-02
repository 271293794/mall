var amqp = require('amqplib');
var { app_coupon_history } = require('../index');
var { coupon: { dieQ, ttlQ, ttl, ex, key } } = require('../../config/rabbit')
module.exports = {
    // 如果有一条数据的父节点是死数据呢？
    withChildren(list = [], { rootId = 0, id = 'id', pId = 'parentId', child = 'children' }) {
        for (let isAlllayer1 = false; !isAlllayer1; isAlllayer1 = !isAlllayer1) {
            list = list.filter(tempNode => {
                let isLast = true;
                // 非1级节点的叶节点（没爸爸）
                if (tempNode[pId] === rootId) return true
                // 找儿子节点
                for (let i = 0; i < list.length; i++) {
                    if (list[i][pId] == tempNode[id]) {
                        isLast = false
                        break
                    }
                }
                // 如果没有儿子而且是有爸爸的，就给他找爸爸
                if (isLast) {
                    list.forEach(item => {
                        if (tempNode[pId] === item[id]) {
                            if (!item[child]) item[child] = []
                            item[child].push(tempNode)
                        }
                    });
                }
                return !isLast;
            });
            // 如果还存在非1级的节点，则再次循环
            for (let j = 0; j < list.length; j++) {
                if (list[j][pId] !== rootId) {
                    isAlllayer1 = false;
                    break;
                }
            }
        }
        return list
    },

    // 优惠券延时队列的生产者
    couponTtlProducer(id) {
        /** @type {amqp.Channel } */
        let ch = global.mqChannel;

        // deliveryMode不设置时，重启电脑，消息会丢失。
        ch.sendToQueue(ttlQ, Buffer.from(id.toString()), { deliveryMode: 2 });





    },
    async initRabbit() {
        let conn = await amqp.connect('amqp://localhost:5672');
        let ch = await conn.createChannel();
        // [dieQ, ttlQ].forEach(_ => ch.deleteQueue(_)), ch.deleteExchange(ex);
        await Promise.all([
            ch.assertQueue(dieQ),
            ch.assertExchange(ex, 'direct'),
            ch.assertQueue(ttlQ, { messageTtl: ttl, deadLetterExchange: ex, deadLetterRoutingKey: key })
        ]);
        ch.bindQueue(dieQ, ex, key);
        global.mqChannel = ch;
        // 优惠券过期队列的消费者
        ch.consume(dieQ, msg => {
            let couponId = + msg.content.toString();
            app_coupon_history().setExpired(couponId)


        }, { noAck: true });



    },





}

