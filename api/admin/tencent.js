var router = require('express').Router();
var COS = require('cos-nodejs-sdk-v5')
var upload = require('multer')()
var config = require('../../backend/config/cos');
var cos = new COS(config);

router.post('/putObject', upload.single('file'), async (req, res) => {

    let file = req.file;
    // 调用方法
    cos.putObject({
        Bucket: config.Bucket, /* 必须 */ // Bucket 格式：test-1250000000
        Region: config.Region,
        Key: config.PathPrefix + file.originalname, /* 必须 */
        Body: file.buffer,
        // ContentLength: file.size
    }, function (err, data) {
        if (err) return res.err(err)
        res.sucess(config.Protocol + '//' + data.Location)

    });

})
router.post('/deleteObject', async (req, res) => {
    let fileUrl = decodeURI(req.body.fileUrl);

    cos.deleteObject({
        Bucket: config.Bucket,
        Region: config.Region,
        Key: config.PathPrefix + fileUrl,
    }, function (err, data) {
        if (err) return res.err(err)
        res.sucess(data)
    });

})


module.exports = router;
