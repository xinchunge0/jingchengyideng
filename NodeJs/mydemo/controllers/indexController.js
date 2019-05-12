const Index = require("../models/Index")
const FormData = require('form-data');
const {
    URLSearchParams
} = require("url")
class IndexController {
    constructor(){}
    mend(){
        return async (ctx, next) => {
            const index = new Index();
            const result = await index.getData();
            const data = result.data;
            ctx.body = await ctx.render('index',{
                data
            })
        }
    }
    add(){
        return async (ctx, next) => {
            // const params = new FormData();
            const params = new URLSearchParams();
            params.append("Books[name]","测试")
            params.append("Books[author]","数据")
            const index = new Index();
            const result = await index.saveData({
                params
            });
            ctx.body = result
            // ctx.body = await ctx.render('add',{
            //     data:"图书添加"
            // })
        }
    }
}

module.exports = IndexController