function array2d(i, j){
	let array = [];
	for(let m=0; m<=i; m+=1){
		array[m] = [];
		for(let n=0; n<=j; n+=1){
			array[m][n] = 0;
		}
	}
	return array;
}

function findSubstring(word1, word2){
	let max = 0,
		index = 0,
		i = String(word1).length,
		j = String(word2).length,
		array = array2d(i + 1, j + 1),
		str = "";

	for(let m=1; m<=i; m+=1){
		for(let n=1; n<=j; n+=1){
			if(word1[m-1] === word2[n-1]){
				array[m][n] = array[m-1][n-1] + 1;
			}else{
				array[m][n] = 0;
			}
			if(max < array[m][n]){
				max = array[m][n];
				index = m;
			}
		}
	}
	if(max === 0){
		return str;
	}else{
		let i = index - max;
		for(j=i; j<index; j+=1){
			str += word1[j];
		}
		return str;
	}
}

console.log(findSubstring("abbreterertettreccc", "dertertbertetbertetccc"));