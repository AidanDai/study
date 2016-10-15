class Stack {

	constructor(){
		this.dataStore = [];	
		this.top = 0;
	}

	push(element){
		this.dataStore[this.top] = element;
		this.top += 1;

		return this.top;
	}

	pop(){
		this.top = this.top > 0 ? this.top - 1 : 0;

		// let result = this.dataStore[this.top];
		// delete this.dataStore[this.top]; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8,  ]

		return this.dataStore.splice(this.top, 1)[0];
	}

	peek(){
		return this.dataStore[this.top - 1];
	}

	clear(){
		this.top = 0;
		this.dataStore = [];
	}

	length(){
		return this.top;
	}

	toString(){
		return this.dataStore;
	}

}

let stack = new Stack();

for(let i=0; i<10; i+=1){
	stack.push(i);
}

// 测试代码

console.log(stack.length(), stack.peek(), stack.length());
console.log(stack.toString());

console.log(stack.length(), stack.pop(), stack.length());
console.log(stack.toString());

stack.clear();
console.log(stack.toString());

console.log(stack.length(), stack.peek(), stack.length());
console.log(stack.length(), stack.pop(), stack.length());
