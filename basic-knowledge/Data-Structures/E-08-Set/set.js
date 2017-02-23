class Set {

	/**
	 * new Set([0, 1, 2, ...])
	 * new Set(0, 1, 2, ...)
	 */
	constructor(){
		this.dataStore = new Array();

		if(arguments.length){
			if(Array.isArray(arguments[0])){
				arguments[0].forEach(function(value){
					this.add(value);
				}, this);
			}else{
				Array.prototype.slice.call(arguments).forEach(function(value){
					this.add(value);
				}, this);
			}
		}
	}

	add(data){
		if(this.dataStore.indexOf(data) < 0){
			this.dataStore.push(data);
			return true;
		}

		return false;
	}

	remove(data){
		let pos = this.dataStore.indexOf(data);
		if(pos > -1){
			return this.dataStore.splice(pos, 1)[0];
		}
		return false;
	}

	find(data){
		return this.dataStore.indexOf(data);
	}

	size(){
		return this.dataStore.length;
	}

	show(){
		console.log("{ " + this.dataStore + " }");
	}

	subset(set){
		if(set.size() > this.size()){
			return false;
		}
		for(let index in set.dataStore){
			if(!this.dataStore.includes(set.dataStore[index])){
				return false;
			}
		}
		return true;
	}

	intersect(set){
		let intersectSet = new Set();

		this.dataStore.forEach(function(value){
			if(set.dataStore.includes(value)){
				intersectSet.add(value);
			}
		});
		return intersectSet;	
	}

	union(set){
		let unionSet = new Set(this.dataStore);

		set.dataStore.forEach(function(value){
			if(!unionSet.dataStore.includes(value)){
				unionSet.add(value);
			}
		});
		return unionSet;
	}

	difference(set){
		let differenceSet = new Set(this.dataStore);

		set.dataStore.forEach(function(value){
			if(differenceSet.dataStore.includes(value)){
				differenceSet.remove(value);
			}
		});
		return differenceSet;
	}

}

let set1 = new Set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 3, 5, 7, 4, 8, 9),
	set2 = new Set(0, 1, 2, 3, 4, 5, 6, 2, 5, 4, 3, 2, 1, 2, 4, 5, 5, 4, 2, 10);

set1.show();
set2.show();
// console.log(set1.size());

// console.log(set1.subset(set2));

// console.log(set1.remove(0));

// console.log(set1.subset(set2));
// set1.intersect(set2).show();

set1.union(set2).show();
set1.difference(set2).show();