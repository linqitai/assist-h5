module.exports = {
    // baseUrl: './',
	publicPath: './',
    productionSourceMap: false,
    devServer: {
		port: 8086,
        proxy: {
            '/bflApp':{
                target:'http://localhost:8002/',
                changeOrigin:true,
                pathRewrite:{
                    '/bflApp':''
                }
            },
            /* '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            } */
        }
    }
}