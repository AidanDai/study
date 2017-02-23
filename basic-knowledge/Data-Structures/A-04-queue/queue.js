class Queue{

	constructor(){
		this.dataStore = [];
	}

	inQueue(element){
		this.dataStore.push(element);

		return this.dataStore.length;
	}

	outQueue(){
		return this.dataStore.shift();
	}

	front(){
		return this.dataStore[0];
	}

	back(){
		let index = this.dataStore.length - 1;

		return this.dataStore[index];
	}

	clear(){
		this.dataStore = [];
	}

	length(){
		return this.dataStore.length;
	}

	toString(){
		return this.dataStore;
	}

}

let queue = new Queue();

for(let i=0; i<10; i+=1){
	queue.inQueue(i);
}

console.log(queue.toString(), queue.front(), queue.back(), queue.length());

queue.clear();

while(queue.length() > 0){
	console.log(queue.outQueue());
}

console.log(queue.toString());