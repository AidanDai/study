module.exports = class Data {

	constructor(len = 1, max = 100){
		this.dataStore = new Array(len);

		for(let i=0; i<len; i+=1){
			let num = Math.floor(Math.random() * (max + 1));
			this.dataStore[i] = num;
		}
	}

	toString(){
		return this.dataStore.join(" ");
	}

}