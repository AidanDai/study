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

// 回文（palindrome）

function isPalindrome(word){
	let stack = new Stack(),
		len = word.length,
		rword = "";

	for(let i=0; i<len; i+=1){
		stack.push(word[i]);
	}

	while(stack.length() > 0){
		rword += stack.pop();
	}

	return word === rword ? true : false;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("racecar"));