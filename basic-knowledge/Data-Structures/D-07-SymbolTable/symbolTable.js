class SymbolTable {

	constructor(){
		this.table = new Array(137);
		this.buildChains();
	}

	/*hash(data){ // 除留余数法
		return this.table.length % data;
	}*/

	hash(data){ // ASCII 码值相加法
		let total = 0,
			len = data.length;

		for(let i=0; i<len; i+=1){
			total += data.charCodeAt(i);
		}
	
		return total % this.table.length;
	}

	betterHash(data){ // 霍纳算法
		const H = 37;
		let total = 0,
			len = data.length;

		for(let i=0; i<len; i+=1){
			total += H * total + data.charCodeAt(i);
		}
	
		total = total % this.table.length;
		if(total < 0){
			total += this.table.length - 1;
		}

		return parseInt(total);
	}

	display(){
		// for (let index in this.table){
		// 	console.log(index, ": ", this.table[index]);
		// }
		let len = this.table.length;
		for(let i=0; i<len; i+=1){
			if(this.table[i] != undefined){
				console.log(i + ": " + this.table[i]);
			}
		}
	}

	count(){
		let len = this.table.length,
			count = 0;

		for(let i=0; i<len; i+=1){
			if(this.table[i] != undefined){
				count += 1;
			}
		}

		return count;
	}

	put(key, data){
		// let pos = this.hash(key);
		let pos = this.betterHash(key);
		this.table[pos] = data;
	}

	get(key){
		// return this.table[this.hash(key)];
		return this.table[this.betterHash(key)];
	}

}

/*let names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", 
			"Mike", "Clayton", "Danny", "Jonathan"],
	symbolTable = new SymbolTable();

for(let index in names){
	symbolTable.put(index, names[index]);
}

symbolTable.display();*/

/*function randomInt(max, min){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function studentData(data){
	let len = data.length;
	for(let i=0; i<len; i+=1){
		let num = "";
		for(let i=1; i<=9; i+=1){
			num += Math.floor(Math.random() * 10);
		}

		num += randomInt(100, 0);
		data[i] = num;
	}
}

let data = new Array(50),
	symbolTable = new SymbolTable();

studentData(data);

data.forEach(function(value){
	console.log(value.substring(0, 8) + ": " + value.substring(9));
	symbolTable.put(value);
});

console.log(
	  "****************************************\n"
	+ "* 									   *\n"
	+ "****************************************"
);

symbolTable.display();
console.log(symbolTable.count());*/