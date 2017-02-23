var https = require('https'),  
    fs = require('fs');  
  
var options = {
    // 带路径的文件名，注意两个文件不要写反了
    key:  fs.readFileSync('./privatekey.pem'),  
    cert: fs.readFileSync('./certificate.pem')  
};  
  
https.createServer(options, function(request, response) {  
    response.writeHead(200, {'Content-type': 'text/plain;'});  
    response.write('hello world\n');
    response.end();

    console.log('Server is running at https://localhost/');
}).listen(8080);  

