function LazyMan(name){
  if(!(this instanceof LazyMan)){
    return new LazyMan(name)
  }else{
    this.tasks = [() => {
      console.log(`${new Date()}: Hi this is ${name}...`)
      this.next()
    }]
    // var that = this
    // var fn = (function(name){
    //   return function(){
    //     console.log(`${new Date()}: Hi this is ${name}...`);
    //     that.next()
    //   }
    // })(name)
    // this.tasks.push(fn)
    setTimeout(() => {
      this.next()
    }, 0)
  }
}

LazyMan.prototype.next = function(){
  // var fn = this.tasks.shift()
  // fn && fn()
  if(this.tasks.length){
    this.tasks.shift()()
  }
}
LazyMan.prototype.eat = function(name){
  // var that = this
  // var fn = (function(name){
  //   return function(){
  //     console.log(`${new Date()}: Eating ${name}`)
  //     that.next()
  //   }
  // })(name)
  this.tasks.push(() => {
    console.log(`${new Date()}: Eating ${name}`)
    this.next()
  })
  return this
}
LazyMan.prototype.sleep = function(s){
  // var that = this
  // var fn = (function(delay){
  //   return function(){
  //     setTimeout(function(){
  //       console.log(`Wake up after ${delay}`)
  //       that.next()
  //     }, delay)
  //   }
  // })(s * 1000)
  this.tasks.push(() => {
    setTimeout(() => {
      console.log(`${new Date()}: Wake up after ${s * 1000}`)
      this.next()
    }, s * 1000)
  })
  return this
}
LazyMan.prototype.sleepFirst = function(s){
  // var that = this
  // var fn = (function(delay){
  //   return function(){
  //     setTimeout(function(){
  //       console.log(`Wake up after ${delay}`)
  //       that.next()
  //     }, delay)
  //   }
  // })(s * 1000)
  this.tasks.unshift(() => {
    setTimeout(() => {
      console.log(`${new Date()}: Wake up after ${s * 1000}`)
      this.next()
    }, s * 1000)
  })
  return this
}

console.log(`${new Date()}`)
LazyMan('Aidan').sleep(5).eat('supper').sleepFirst(2)
