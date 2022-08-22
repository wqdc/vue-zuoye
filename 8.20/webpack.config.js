const path = require('path')

//引入html自动生成插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    //模式
    mode:'development',
    //入口
    entry:'./src/main.js',
    //出口
    output :{
        path:path.join(__dirname,'lib'),
        filename:'lib.js'
    },
    //配置html自动生成的插件   插件全是实例对象
    plugins:[
        new HtmlWebpackPlugin({
            //引入模板
            template:'./public/index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer:{
        //默认打开
        open:true,
        //修改端口 [0,65530]
        port: 3000,
    },
   module:{
    rules:[
        {
            test:/\.css$/i,
            use:['style-loader','css-loader']
        },
        {
            test:/\.less$/i,
            use:['style-loader','css-loader','less-loader']
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
    ]
   }
    
}