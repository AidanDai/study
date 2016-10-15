class Dictionary {

	constructor(){
		this.dataStore = new Array();
	}

	add(key, value){
		this.dataStore[key] = value;
	}

	find(key){
		return this.dataStore[key];
	}

	remove(key){
		let bool = delete this.dataStore[key];
		
		return bool ? true : false;
	}

	showAll(){
		let keys = Object.keys(this.dataStore).sort();

		for (let index in keys){
			console.log(keys[index], " -> ", this.dataStore[keys[index]]);
		}
		/*this.dataStore.forEach(function(value, key){ // forEach 不能遍历键值数组
			console.log(key, " -> ", value);
		});*/
	}

	count(){
		let keys = Object.keys(this.dataStore),
			count = 0;

		for (let index in keys){
			count += 1;
		}

		return count;
	}

	clear(){
		let keys = Object.keys(this.dataStore);

		for (let index in keys){
			delete this.dataStore[keys[index]];
		}
	}

}

let dictionary = new Dictionary();

dictionary.add("zp", "华北电力大学 计算机与科学专业");
dictionary.add("LzY", "渭南师范大学 金融专业");
dictionary.add("Lynn", "西安建筑科技大学华清学院 电子专业");
dictionary.add("Aidan", "华北电力大学 机械电子工程专业");

dictionary.showAll();
console.log(dictionary.dataStore);
// dictionary.remove("zp");
// dictionary.remove("Lynn");

// let LzY = dictionary.find("LzY");
// console.log(LzY);

// dictionary.showAll();
// console.log(dictionary.count());

// dictionary.clear();
// dictionary.showAll();
// console.log(dictionary.count());