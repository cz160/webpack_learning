const merge = require('webpack-merge').merge;
const EndWebpackPlugin = require('../plugins/index');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode:'development',
    plugins:[
        new EndWebpackPlugin(()=>{
            console.log('成功')
        },()=>{
            console.log('失败')
        })
    ],
})