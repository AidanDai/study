const fs = require('fs')
const path = require('path')
const out = process.stdout

try{
  var fPath = '/home/aidan/视频/learn/How browsers work internally - Tali Garsiel - Front-Trends 2012-HD.mp4'
  var Opath = '/home/aidan/coding/How browsers work internally - Tali Garsiel - Front-Trends 2012-HD.mp4'
  var rStream = fs.createReadStream(fPath)
  var wStream = fs.createWriteStream(Opath)

  var stat = fs.statSync(fPath)    
  var tSize = stat.size
  var pLength = 0
  var beforeCopySize = 0
  var start = new Date()

  rStream.on('data', (chunk) => {
    var status = wStream.write(chunk)
    pLength += chunk.length
    
    if(status = false){
      wStream.pause()
    }
  })
  rStream.on('error', (e) => {
    throw e
  })
  wStream.on('error', (e) => {
    throw e
  })
  rStream.on('end', () => {
    wStream.end()
  })

  wStream.on('drain', () => {
    rStream.resume()
  })

  function tip(message){
    var main = `#           ${message}           #`
    var head = '#'.repeat(main.length)
    console.log(head)
    console.log(main)
    console.log(head)
  }

  setTimeout(function show(){
    var toCeilFixed = function(num, len = 2){
      return Math.ceil(num).toFixed(len)
    }
    var percent = `${toCeilFixed(pLength / tSize)}%`
    var cSize = toCeilFixed(pLength / 1000000)
    var diff = cSize - beforeCopySize

    beforeCopySize = cSize
    out.clearLine()
    out.cursorTo(0)
    out.write(`Has copy: ${cSize}M, ${percent}; speed: ${diff * 2}M/s\n`)
    if(pLength < tSize){
      setTimeout(show, 500)
    }else{
      let stop = new Date()
      tip(`Copy finished! total custom time: ${(stop - start)}s`)
      process.exit()
    }
  })
}catch(e){
  console.log(e)
  process.exit()
}