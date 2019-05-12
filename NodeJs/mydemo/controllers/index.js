const router = require('koa-simple-router')
const IndexController = require("./indexController.js")
const indexController = new IndexController()
module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.mend())
        _.get('/add', indexController.add())
    }))
}
