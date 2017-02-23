#! /usr/bin/bash node 

var pkg = require('./package.json')

var argv = require('yargs')
    .version(pkg.version)
    .usage('usage: $0 path [mode]')
    .options('p', {
        alias : 'path',
        demand: true,
        describe: '想要创建的文件目录',
        type: 'string'
    })
    .options('m', {
        alias : 'mode',
        demand: false,
        describe: 'all dir mode',
        type: 'number'
    })
    .demand(1, '文件目录参数必须传入')
    .example('$0 ../test/test 0777')
    .argv