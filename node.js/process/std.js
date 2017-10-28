const p = require('process')

while(true) {
	p.stdout.write('\n your name: ');
	p.stdin.resume()
	p.stdin.on('data', function(name) {
		console.log(name.toString())
	})
}