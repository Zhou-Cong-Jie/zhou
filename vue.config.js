const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports={
    //关闭代码校验
    lintOnSave : true,
    //配置本地服务器
    devServer:{
        before(app){
            //设置接口
            app.get('/api/seller',(req,res)=>{
                res.json({
                    errno:0,
                    data:seller
                })
            }),
            app.get('/api/goods',(req,res)=>{
                res.json({
                    errno:0,
                    data:goods
                })
            }),
            app.get('/api/ratings',(req,res)=>{
                res.json({
                    errno:0,
                    data:ratings
                })
            })
        }
    }
}