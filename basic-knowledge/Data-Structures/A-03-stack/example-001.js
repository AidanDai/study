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

// 2-9 进制转换算法

function numBase(num, base){
	let stack = new Stack();

	do{// 辗转相除法
		stack.push(num % base);
		num = Math.floor(num / base);
	}while(num>0);

	let str = "";
	while(stack.length()>0){
		str += stack.pop();
	}

	return str;
}

for(let i=0; i<100; i+=1){
	let num1 = numBase(i, 2),
		num2 = i.toString(2);
	console.log(num1, num2, num1===num2);
}