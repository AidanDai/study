let symTest = Symbol("test");

//console.log(typeof symTest, symTest);

Object.test = "test";
Object[Symbol("test")] = "test";

let keys1 = Object.keys(Object),
	keys2 = Object.getOwnPropertyNames(Object),
	keys3 = Object.getOwnPropertySymbols(Object),
	keys4 = Reflect.ownKeys(Object);
// console.log(keys1, keys2, keys3, keys4);

let name1 = Symbol.for("name"),
	name2 = Symbol.for("name");
// console.log(name1 === name2);
// console.log(Symbol.keyFor(name1));

class Even {
	static [Symbol.hasInstance](obj) {
		return Number(obj) % 2 === 0;
	}
}

// console.log(1 instanceof Even);

let arr = [1, 2];
arr[Symbol.isConcatSpreadable] = false;

// console.log([0].concat(arr, [3, 4]));