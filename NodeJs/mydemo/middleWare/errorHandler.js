const errorHandler = {
    error(app,logger){
        app.use(async (ctx, next)=>{
            try {
                await next();
            } catch (error) {
                ctx.status = 500
                logger.error(error);
                ctx.body = "500了"
            }
        })
        app.use(async (ctx, next)=>{
            await next();
            // console.log(ctx)
            if(ctx.status == 404){
                logger.error('404报错');
                ctx.body = await ctx.render('404',{
                    data:"404页面啊",
                    sss:ctx.status
                })
            }
        })
    }
}
module.exports = errorHandler