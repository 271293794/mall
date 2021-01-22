var config = {
    // 必选参数
    SecretId: 'AKIDwtnQZiVGchhU0F8JwwhjY5Omvqb6J4oI',
    SecretKey: 'dmgMnyqRl11lJejY6MWQ4LL5ZmicKtBB',
    // 
    Bucket: 'dyh-1254206153',
    Region: 'ap-chengdu',
    Uin: process.env.Uin,
    // 可选参数
    FileParallelLimit: 3,    // 控制文件上传并发数
    ChunkParallelLimit: 8,   // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
    ChunkSize: 1024 * 1024 * 8,  // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
    Proxy: '',
    Protocol: 'https:',
    // 自定义

    PathPrefix: '/mall-admin/',   // 上传的路径前缀


};

module.exports = config;