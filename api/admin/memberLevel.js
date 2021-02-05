var router = require('express').Router()
    , app = require('../../backend/app')
    ;

let { ums_member_level } = app

router.get('/list', async (req, res) => {

    var list = await ums_member_level().findList({ where: req.query })

    res.sucess(list)

})

module.exports = router


