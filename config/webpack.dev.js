const merge = require('webpack-merge').merge;
const common = require('./webpack.common');
console.log(merge);
module.exports = merge(common,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
})