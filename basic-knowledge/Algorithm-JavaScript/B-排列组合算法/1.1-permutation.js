/**
 * 下一个排列数
 * @param  {Number} number 任意一个排列数
 * @return {Number}        大于当前排列数的最小排列数
 */
function nextPermutation(number = 123456){
	var array = String(number).split(""),
		len = array.length,
		i, iIndex,
		ii, iiIndex,
		j, jIndex;
	
	for(let m=len-1; m>=1; m-=1){
		if(array[m] > array[m-1]){			
			i = array[m-1];
			iIndex = m-1;
			ii = array[m];
			iiIndex = m;
			for(let n=len-1; n>=1; n-=1){
				if(array[n] > i){
					j = array[n];
					jIndex = n;
					break;
				}
			}
			break;
		}
	}

	const swap = (i, j, array) => {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};
	swap(iIndex, jIndex, array);

	var temp = array.splice(iiIndex, len - 1 - iiIndex);
	if(Array.isArray(temp)){
		temp.sort();
		array = array.concat(temp);
	}
	number = Number(array.join(""));
	return number;
}

// var number = nextPermutation(123456789);
// console.log(number);

/**
 * 一个最小排列数的所有排列数（递归实现）
 * @param  {Number} number 最小排列数
 * @param  {Array}  cases  所有排列数的容器数组
 * @param  {Number} output 最大排列数
 * @return {Array}         所有排列数
 */
function permutationByRecursion(number = 123456, cases = [], output = Number(String(number).split("").reverse().join(""))){
	cases.push(number);
	if(number === output){
		return cases;
	}

	var array = String(number).split(""),
		len = array.length,
		i, iIndex,
		ii, iiIndex,
		j, jIndex;
	
	for(let m=len-1; m>=1; m-=1){
		if(array[m] > array[m-1]){			
			i = array[m-1];
			iIndex = m-1;
			ii = array[m];
			iiIndex = m;
			for(let n=len-1; n>=1; n-=1){
				if(array[n] > i){
					j = array[n];
					jIndex = n;
					break;
				}
			}
			break;
		}
	}

	const swap = (i, j, array) => {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};
	swap(iIndex, jIndex, array);

	var temp = array.splice(iiIndex, len - 1 - iiIndex);
	if(Array.isArray(temp)){
		temp.sort();
		array = array.concat(temp);
	}
	number = Number(array.join(""));
	return permutationByRecursion(number, cases, output);
}

/**
 * 一个最小排列数的所有排列数（循环实现）
 * @param  {Number} number 最小排列数
 * @param  {Array}  cases  所有排列数的容器数组
 * @param  {Number} output 最大排列数
 * @return {Array}         所有排列数
 */
function permutation(number = 123456, cases = [], output = Number(String(number).split("").reverse().join(""))){
	while(number !== output){
		cases.push(number);
		number = nextPermutation(number);
	}
	cases.push(number);
	return cases;
}

// var cases = permutation(123456789);
// console.log(cases);
