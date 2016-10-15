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

// 0-99 基数排序算法

/*function radixSort(array){
	
	let queues = new Array(10), // fill() 用引用类型填充数组仍未引用
		len = array.length,
		temp = [],
		result = [];

	// queues.forEach(function(queue, index){// forEach 不能遍历 [ , , , , , , , , ,  ]
	// 	console.log(queue, index);
	// 	queues[index] = new Queue();
	// });

	// 初始基数排序空间
	for(let i=0; i<10; i+=1){
		queues[i] = new Queue();
	}

	// 按个位数字排序
	for(let i=0; i<len; i++){
		let index = array[i] % 10;
		queues[index].inQueue(array[i]);
	}
	
	// 整理排序结果
	queues.forEach(function(queue){
		while(queue.length() > 0){
			temp.push(queue.outQueue());
		}
	});

	// 按十位进行排位
	for(let i=0; i<len; i++){
		let index = Math.floor(temp[i] / 10);
		queues[index].inQueue(temp[i]);
	}
	
	// 整理排序结果
	queues.forEach(function(queue){
		while(queue.length() > 0){
			result.push(queue.outQueue());
		}
	});

	return result;
}*/

function radixSort(array){
	let queues = new Array(10),
		result = [];

	// 初始基数排序空间
	for(let i=0; i<10; i+=1){
		queues[i] = new Queue();
	}

	// 按位排序（0 代表个位，1 代表十位。。。）
	function sortByLocation(queues, array, location){
		let len = array.length;

		for(let i=0; i<len; i+=1){
			switch(location){
				case 0 :
					queues[array[i] % 10].inQueue(array[i]);
					break;
				case 1 :
					queues[Math.floor(array[i] / 10)].inQueue(array[i]);
					break;
				default :
					break;
			}
		}
		return queues;
	}

	for(let i=0; i<2; i+=1){
		queues = sortByLocation(queues, array, i);

		queues.forEach(function(queue){
			while(queue.length > 0){
				array.push(queue.outQueue());
			}
		});
	}

	return array;
}

console.log(radixSort([15, 22, 31, 35, 44, 85, 91, 92]));