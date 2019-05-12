const Koa = require('koa');
const app = new Koa();

//配置文件
const config = require('./config')

//日志
const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/cc.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

//错误处理
const errorHandler = require("./middleWare/errorHandler.js");
errorHandler.error(app,logger);

//路由
require("./controllers")(app);

//swig
const render = require('koa-swig');
const co = require('co');
const path = require('path');
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    varControls:["[[","]]"],
    writeBody: false
}));

//静态资源
const serve = require('koa-static');
app.use(serve(config.staticDir));




app.listen(config.port, () => {
    console.log("服务器启动了")
});