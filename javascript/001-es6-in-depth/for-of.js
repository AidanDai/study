function makeIterator(array){
	var nextIndex = 0;
	return {
		next: function(){
			return nextIndex < array.length
				? {value: array[nextIndex++], done: false}
				: {value: undefined, done: true};
		}
	}
}

var it = makeIterator([0, 1, 2, 3, 4]);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

var objPerson = {
	name: "Aidan",
	age: 23 
};

// objPerson[Symbol.iterator] = function(){
// 	var keys = Object.keys(this).sort(),
// 		index = 0,
// 		that = this;

// 	return {
// 		next: function() {
// 			return index < keys.length 
// 				? {value: that[keys[index++]], done: false}
// 				: {value: undefined, done: true};
// 		}
// 	}
// }

// TypeError: Cannot set property 'Symbol(Symbol.iterator)' of undefined
// objPerson.prototype[Symbol.iterator] = Set.prototype[Symbol.iterator];

// for(let value of objPerson){
// 	console.log(value);
// }

// let arrNum = [0, 1, 2, 3, 4];
// for(let value of arrNum){
// 	console.log(value);
// }

// console.log(Reflect.ownKeys(Array));

let arr = [1,2],
	ite = arr[Symbol.iterator]();

// console.log(Reflect.ownKeys(ite));
// console.log(ite.prototype);
// console.log(Reflect.ownKeys(ite.__proto__));
// console.log(ite.__proto__.toString());

// let set = new Set([0,1,2,3,4,5]),
	// ite = set[Symbol.iterator]();

console.log(Reflect.ownKeys(Array));
// console.log(ite.prototype);
// console.log(Reflect.ownKeys(ite.__proto__));
// console.log(ite.__proto__.toString());

for(let val of ite){
	console.log(val);
}