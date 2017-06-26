- `entry-option` 初始化option(这里主要是插件)

- `run` 开始编译

- `compile` 

- `make` 

- `resolve` 所有模块的位置进行解析

- `module` 将每一个模块注册成为webpack可管理的模块

- `build-module` 开始构建 (build) 这个module,这里将使用文件对应的loader加载

normal-module-loader 对用loader加载完成的module(是一段js代码)进行编译,用 acorn 编译,生成ast抽象语法树。

program 开始对ast进行遍历，当遇到require等一些调用表达式时，触发call require事件的handler执行，收集依赖，并。如：AMDRequireDependenciesBlockParserPlugin等

seal 所有依赖build完成，下面将开始对chunk进行优化，比如合并,抽取公共模块,加hash

bootstrap 生成启动代码

emit 把各个chunk输出到结果文件