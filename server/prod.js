const cluster = require('cluster')
    , numCPUs = require('os').cpus().length
    , { port } = require('../backend/config');

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++)  cluster.fork()

    cluster.on('exit', worker => console.log(`进程【${worker.process.pid}】退出`))

} else {
    process.env.NODE_ENV = 'production';
    var app = require('./base')


    app.listen(port, () => console.log(`> API文档 http://localhost:${port}/public/apidoc\n`, ''))



}

