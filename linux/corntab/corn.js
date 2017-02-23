var schedule = require('node-schedule')
var fs = require('fs')
var path = require('path')

var j = schedule.scheduleJob('0 24 * * * *', function(){
  fs.appendFile(path.resolve(__dirname, './corn.log'), `${new Date()}\n`, (err) => {
    if(err) {
      throw err
      j.cancel()    
    }
  })
})