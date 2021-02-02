//是否可以像cookie|操作一样，挂载到vue的原型上
let userType = require('../config').userType;
module.exports = function (user, req, type) {
    // 操作者生成器
    let operatorGenerator = {
        [userType.admin]: _ => ({
            // 能不能把session的id放里面？
            id: user.id,
            username: user.username,
            nickName: user.nickName,
            email: user.email,
            ip: req.ip,
            hostname: req.hostname,
            loginTime: Date.now(),
            userType: userType.admin,
            roles: user.ums_admin_role_relation.map(obj => obj.roleId),

            // signature: user.F_Signature
        }),
        [userType.member]: _ => ({
            id: user.id,
            userType: userType.member,
            memberLevelId: user.memberLevelId,
            username: user.username,
            nickName: user.nickname,
        })


    };


    return operatorGenerator[type]();



}



