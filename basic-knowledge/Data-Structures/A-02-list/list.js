// 1 创建列表

class List {

	constructor(){
		this.listSize = 0;
		this.pos = 0;

		this.dataStore = []; // 初始化一个空数组来保存列表元素
	}
	

	length(){
		return this.listSize;
	}

	clear(){
		delete this.dataStore;

		this.dataStore = [];

		this.listSize = 0;
		this.pos = 0;
	}

	toString(){
		return this.dataStore;
	}

	getElement(){
		return this.dataStore[this.pos];
	}

	find(element){
		for(let i=0; i<this.listSize; i+=1){
			if(this.dataStore[i] === element){
				return i;
			}
		}

		return -1;
	}

	contains(element){
		for(let i=0; i<this.listSize; i+=1){
			if(this.dataStore[i] === element){
				return true;
			}
		}

		return false;
	}

	insert(element, after){
		let insertPos = this.find(after);
		if(insertPos > -1){
			this.dataStore.splice(insertPos + 1, 0, element);

			this.listSize += 1;

			return true;
		}

		return false;
	}

	append(element){
		this.listSize += 1;

		return this.dataStore.push(element);
	}

	remove(element){
		let removeAt = this.find(element);
		if(removeAt > -1){
			this.listSize -= 1;

			return this.dataStore.splice(removeAt, 1);
		}

		return -1;
	}


	front(){
		this.pos = 0;
	}

	end(){
		this.pos = this.listSize - 1;
	}

	prev(){
		if(this.pos >= 0){
			this.pos -= 1;
		}
	}

	next(){
		if(this.pos < this.listSize){
			this.pos += 1;
		}
	}

	hasPrev(){
		return this.pos >= 0;
	}

	hasNext(){
		return this.pos < this.listSize;
	}

	currPos(){
		return this.pos;
	}

	moveTo(position){
		if(position < this.listSize){
			this.pos = position;
		}
	}
}


let names = new List();

names.append("Aidan"); 
names.append("zp"); 
names.append("zj"); 
names.append("zjy"); 
names.append("ll"); 
names.append("zj"); 
names.append("zsp"); 
names.append("jhy"); 


console.log(names.toString());

console.log(names.length());
console.log(names.getElement());
console.log(names.find("zp"));
console.log(names.contains("zj"));

console.log(names.toString());

console.log(names.insert(21, "zp"));

console.log(names.length());

console.log(names.toString());

console.log(names.remove("zp"));

console.log(names.length());

console.log(names.toString());


console.log(names.currPos());
names.moveTo(7);
console.log(names.currPos());

// 2 使用迭代器访问列表
console.log(names.toString());
for(names.front(); names.hasNext(); names.next()){
	console.log(names.currPos(), names.getElement())
}
console.log("---------");
for(names.end(); names.hasPrev(); names.prev()){
	console.log(names.currPos(), names.getElement())
}





