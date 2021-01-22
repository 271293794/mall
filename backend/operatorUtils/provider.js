
var CryptoJS = require('crypto-js'),
    base64 = require('base64-url'),
    { token } = require('../config');





module.exports = {

    /**改成生成Token就行了 */
    getTokenStr(operator) {
        let header = base64.encode(JSON.stringify(token.tokenHeader));
        let playload = base64.encode(JSON.stringify(operator));
        let method = CryptoJS[token.tokenHeader.alg] || CryptoJS.MD5;
        let signature = method(`${header}.${playload}`, token.tokenSalt).toString();
        return `${header}.${playload}.${signature}`


    },
    /**从给定的token中获取操作者 */
    getOperator(tokenStr = '') {
        if (!tokenStr) throw Error('tokenStr为空');
        let [header, playload, signature] = tokenStr.match(/(\w|-)+/g);
        let alg = JSON.parse(base64.decode(header)).alg;
        let method = CryptoJS[alg] || CryptoJS.MD5;
        let signature0 = method(`${header}.${playload}`, token.tokenSalt);
        if (signature != signature0) throw Error('token被篡改');
        return JSON.parse(base64.decode(playload))
    }

}

