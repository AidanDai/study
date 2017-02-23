#! /usr/bin/env node

process.nextTick(function(){
    console.log(1)
})

setImmediate(function(){
    console.log(2)
})

setTimeout(function(){
    console.log(3)
}, 0)

console.log(0)