const http = require('http')

http.createServer((request, response) => {
    request.on('error', (error) => {
        console.error(error)
        response.statusCode = 400
        response.end()
    })
    response.on('error', (error) => {
        console.error(error)
    })
    if (request.method === 'GET' && request.url === '/') {
        response.end(`<h1>hello, this is server 3001</h1>`)
    } else {
        response.statusCode = 404
        response.end()
        process.exit(1)
    }
}).listen(3001)