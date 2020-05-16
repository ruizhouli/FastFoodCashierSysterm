const path = require("path")
function resolve (dir) {
    return path.join(__dirname, dir)  //__dirname为项目根目录，node的express方法中也有使用，join为javascript连接符
}
module.exports = {
    chainWebpack:config=>{
        config.resolve.alias
        .set("@",resolve("/src"))
        .set("_c",resolve("/src/component"))
        .set("_v",resolve("/src/views"))
        .set("_A",resolve("/src/assets/imge"))
    },
    devServer:{
        proxy:"http://m.kugou.com"
    }
}