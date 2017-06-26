var _onlyConstructor = true
function LazyMan(name){
  if(!(this instanceof LazyMan)){
    return new LazyMan(name)
  }else{
    this._name = name
    this._alreadyConstructor = false
    // this._hasSleepFirst = false
    setTimeout(() => {
      if(_onlyConstructor){
        console.log(`${new Date()}: Hi this is ${this._name}...`)
        this._alreadyConstructor = true
      }
    }, 0)
    this.promise = new Promise(function(resolve, reject){
      resolve()
    })
  }
}

LazyMan.prototype.eat = function(name){
  _onlyConstructor = false  
  this.promise = this.promise.then(() => {
    if(!this._alreadyConstructor){
      console.log(`${new Date()}: Hi this is ${this._name}...`)  
      this._alreadyConstructor = true        
    }
    return Promise.resolve()
  }).then(() => {
    console.log(`${new Date()}: Eating ${name}`)
    return Promise.resolve()
  })
  return this
}

LazyMan.prototype.sleep = function(s){  
  _onlyConstructor = false    
  this.promise = this.promise.then(() => {
    if(!this._alreadyConstructor){
      console.log(`${new Date()}: Hi this is ${this._name}...`)  
      this._alreadyConstructor = true        
    }    
    return Promise.resolve()
  }).then(() => {
    var p = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${new Date()}: Wake up after ${s * 1000}`)
        resolve()
      }, s * 1000)
    })
    return Promise.resolve(p)
  })
  return this
}

LazyMan.prototype.sleepFirst = function(s){// 假睡
  _onlyConstructor = false    
  // setTimeout(() => {
    process.nextTick(() => {
      console.log(`${new Date()}: Wake up after ${s * 1000}`)
    })
  // }, s * 1000)
  return this
}

console.log(`${new Date()}`)
LazyMan('Aidan').sleep(5).eat('supper').sleepFirst(2)
// LazyMan('Hank').sleepFirst(5).eat('supper')
// LazyMan('Hank').eat('dinner').eat('supper')
// LazyMan('Hank').sleep(10).eat('dinner')
// LazyMan('Hank')