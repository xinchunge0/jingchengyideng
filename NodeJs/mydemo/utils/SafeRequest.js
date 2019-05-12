//为了将来把浏览器代码跟后端代码合并
const fetch = require("node-fetch");
const config = require("../config");
class SafaRequest{
    constructor(url){
        this.url = url
        this.baseUrl = config.baseUrl
    }
    fetch(options){
        let ydfetch = fetch(this.baseUrl + this.url)
        if(options){
            console.log(options)
            ydfetch = fetch(this.baseUrl + this.url ,{
                method:options.method,
                body:options.params
            })
        }
        return new Promise((resolve,reject)=>{
            let result = {
                code:0,
                message:"",
                data:[]
            }
            ydfetch.then((res)=>{
                let _json = {}
                try{
                    _json = res.json();
                }catch(error){}
                return _json;
            }).then((json)=>{
                result.data = json;
                resolve(result);
            }).catch((error)=>{
                result.code = 1;
                result.message = "node-fetch通讯异常"
                reject(result)
            })

        })
    }
}
module.exports = SafaRequest;