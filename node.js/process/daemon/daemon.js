const fs = require('fs')

fs.open('./log.txt', 'w', function(error, fd){
    if (error) {
        throw new Error(error)
    }
    for (let i=0; i<=100000; i+=1) {
        fs.write(fd, i + ': ' + process.pid + '\n', () => {})
    }
})