var provider = require('./provider')
    , operator = require('./operator')
module.exports = {
    install(Vue) {
        Vue.prototype.$provider = provider
    },
    provider,
    operator
}