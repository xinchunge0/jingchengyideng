//实现index的数据模型
const SafaRequest = require("../utils/SafeRequest");

//获取图书相关的类
class Index{
    constructor(app){}
    //获取图书列表
    getData(options){
        const safaRequest = new SafaRequest("books/index");
        return safaRequest.fetch({})
    }
    //保存数据
    saveData(options){
        const safaRequest = new SafaRequest("books/create");
        return safaRequest.fetch({
            method:"POST",
            params:options.params
        })
    }
}
module.exports = Index;
