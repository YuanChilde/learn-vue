const path = require('path');

module.exports = {
    publicPath:'/',    // 公共路径
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist',// 不同的环境打不同包名
    css:{
        loaderOptions:{
            less:{
                // 开启javascript功能
                javascriptEnabled: true
            }
        }
    },
    productionSourceMap:true,  // 生产环境下css 分离文件
    devServer:{   // 配置服务器
        port:8080,
        open:true,
        https:false,
        overlay: {
            warnings: false, // true：页面强制显示异常信息
            errors: true
        }
    },
    configureWebpack:{  // 覆盖webpack默认配置的都在这里
        resolve:{   // 配置解析别名
            alias:{
                '@':path.resolve(__dirname, './src'),
                '@h':path.resolve(__dirname, './src/assets/hotcss'),
                '@s':path.resolve(__dirname, './src/assets/style'),
                '@i':path.resolve(__dirname, './src/assets/images'),
            }
        }
    }

}
