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

// 模拟递归

function factorail(n){
	if(n === 1){
		return 1; 
	}else{
		return n * factorail(n-1);
	}
}

function stackFactorail(n){
	let stack = new Stack(),
		mul = 1;

	while(n>1){
		stack.push(n);
		n -= 1;
	}

	while(stack.length() > 0){
		mul *= stack.pop();
	}

	return mul;
}

for(let i=2; i<100; i+=1){
	let num1 = factorail(i),
		num2 = stackFactorail(i);

	console.log(num1, num2, num1===num2);
}