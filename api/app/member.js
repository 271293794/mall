var router = require('express').Router()
    , app = require('../../backend/app')
    , axios = require('axios').default
    , { provider, operator } = require('../../backend/operatorUtils')
    , { weixin, userType } = require('../../backend/config')
    ;
let { ums_member, ums_member_login_log } = app



router.get('/login', async (req, res) => {
    let { avatarUrl, city, gender, nickName, province, js_code } = req.query;

    let wxRes = await axios({
        url: `https://api.weixin.qq.com/sns/jscode2session`,
        params: { js_code, grant_type: 'authorization_code', ...weixin }
    })
    if (wxRes.data.errcode) return res.err(wxRes.data);

    let member = await ums_member().checkInsert({ wxOpenid: wxRes.data.openid }, {
        wxOpenid: wxRes.data.openid,
        nickname: nickName,
        createTime: new Date,
        icon: avatarUrl,
        memberLevelId: 4, //普通会员
        status: 1, //启用
        gender,
        city
    });
    let memberOperator = operator(member, req, userType.member);
    var tokenStr = provider.getTokenStr(memberOperator);
    ums_member_login_log().insert({
        memberId: member.id,
        createTime: new Date,
        ip: req.ip,
        loginType: 3, // 小程序登录
    });


    res.sucess(tokenStr)


})


module.exports = router


