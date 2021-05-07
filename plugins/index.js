// webpack构建结束后做些事情
class EndWebpackPlugin{
    // 获取用户传入配置
    constructor(doneCallBack,failCallBack) {
        
        this.doneCallBack = doneCallBack; // 成功回掉
        
        this.failCallBack = failCallBack; // 失败回掉
        
        

    }
    /**
     * compiler：编译器 和 compilation:编译
     * compiler包含了webpack环境所有的配置信息，在启动时被实例化 全局唯一，webpack实例对象:代表整个生命周期
     * compilation包含了当前模块的资源、编译生产资源、变化.当以开发模式时,每当检测一个文件变化，一个新的compilation被创建：代表一次新的编译
     *  */ 

    apply(complier){
        complier.plugin('done',(stats)=>{
            this.doneCallBack(stats);
        });
        complier.plugin('failed',(err)=>{
            this.failCallBack(err);
        });
    }
}

module.exports = EndWebpackPlugin;