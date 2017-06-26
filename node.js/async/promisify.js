const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)
const stat = util.promisify(fs.stat)

async function test() {
	try {
		await writeFile('./hello.txt', 'hello world', {encoding: 'utf8', mode: 0o777, flag: 'w'})
		const stats = await stat('./hello.txt')

		console.log(stats)
	} catch(e) {
		console.log('I am error!')
		console.log(e)
	}
}

function IWantFullCallbacks() {
  setTimeout(function() {
    const localStack = new Error();
    console.log(localStack.stack);
  }, 1000);
}

IWantFullCallbacks();