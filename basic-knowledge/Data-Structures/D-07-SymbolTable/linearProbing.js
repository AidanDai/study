class SymbolTable {

	constructor(){
		this.table = new Array(137);
		this.values = new Array(137);
	}

	hash(data){ // 霍纳算法
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
		let len = this.table.length;
		for(let i=0; i<len; i+=1){
			if(this.table[i] != undefined){
				console.log(i + ": " + this.table[i] + " " + this.values[i]);
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
		let pos = this.hash(key);
		if(this.table[pos] === undefined){
			this.table[pos] = key;
			this.values[pos] = data;
		}else{
			while(this.table[pos] != undefined){
				pos += 1;
			}
			this.table[pos] = key;
			this.values[pos] = data;
		}
	}

	get(key){
		let pos = this.hash(key);

		if(pos > -1){
			while(this.table[pos] != undefined){
				if(this.table[pos] === key){
					return this.values[pos];
				}
				pos += 1;
			}
		}
		return undefined;
	}

}

let callBook = [{
					name: "Aidan",
					phone: 13881135078
				},
				{
					name: "Aidan",
					phone: 15176369699
				},
				{
					name: "David",
					phone: 13832135078
				},  
				{
					name: "Jennifer",
					phone: 13881135898
				},
				{
					name: "Donnie",
					phone: 13856135078
				},
				{
					name: "Raymond",
					phone: 13883876078
				},
				{
					name: "Cynthia",
					phone: 13896183078
				},
				{
					name: "Mike",
					phone: 18781135078
				},
				{
					name: "Raymond", 
					phone: 13820135078
				},
				{
					name: "Clayton",
					phone: 13999135078
				},
				{
					name: "Danny",
					phone: 13445535078
				},
				{
					name: "Jonathan",
					phone: 13866995078
				}
			],
	symbolTable = new SymbolTable();


	for(let index in callBook){
		symbolTable.put(callBook[index]["name"], callBook[index]["phone"])
	}

	symbolTable.display();

	console.log(symbolTable.get("Jonathan"));
	console.log(symbolTable.count());