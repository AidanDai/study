function BinarySearch(data, value) {
	let upperBound = data.length - 1,
		lowerBound = 0;
	while(lowerBound <= upperBound){
		let middle = Math.floor((upperBound + lowerBound) / 2);
		if(data[middle] < value){
			lowerBound = middle + 1;
		}else if(data[middle] > value){
			upperBound = middle - 1;
		}else{
			return middle;
		}
	}
	return -1;
}