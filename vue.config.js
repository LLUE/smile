module.exports = {
    css: {
        requireModuleExtension: false,  //css去掉文件名中的 .module
        loaderOptions: {  //自定义生成的 CSS Modules 模块的类名
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            less:{
                globalVars: {
                    prependData: `@import "~@/theme-color.less";`,
                    wColor: '#fff'
                }
            }
        }
    }
}