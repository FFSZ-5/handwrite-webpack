//webpack主文件
const { SyncHook } = require("tapable"); //这是一个同步钩子
//pulugin插件
class WebpackRunPlugin {
  apply(compiler) {
    compiler.hooks.run.tap("WebpackRunPlugin", () => {
      console.log("开始编译");
    });
  }
}
class WebpackDonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap("WebpackDonePlugin", () => {
      console.log("编译结束");
    });
  }
}
//管家
class Compiler {
  constructor(webpackOptions) {
    this.options = webpackOptions; //存储配置信息
    //内部的钩子
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
    };
  }
	compile(callback){
		const compilation=new Compilation(this.options)
		compilation.build(callback)
	}

	run(callback) {}
}
//编译马仔
class Compilation{
	constructor(webpackOptions){

	}
	build(callback){

	}
}
function webpack(webpackOptions) {
  const compiler = new Compiler();
  const { plugins } = webpackOptions;
  for (let plugin of plugins) {
    plugin.apply(compiler);
  }
  return compiler;
}
module.exports = {
  webpack,
  WebpackRunPlugin,
  WebpackDonePlugin,
};
