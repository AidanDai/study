function recurFib(n){
	if(n<2){
		return n;
	}else{
		return recurFib(n-1) + recurFib(n-2);
	}
}

function dynFib(n){
	let array = new Array(n+1).fill(0);

	if(n<2){
		return n;
	}else{
		array[0] = 0;
		array[1] = 1;
		for(let i=2; i<=n; i+=1){
			array[i] = array[i-1] + array[i-2];
		}
	}
	return array[n];
}

function iterFib(n){
	let first = 0,
		lasted = 1,
		result = 0;

	for(let i=1; i<n; i+=1){// n-1 次循环得到 iterFib(n)
	console.log(result);
		result = first + lasted;
		first = lasted;
		lasted = result;
	}
	return result;
}
console.log(recurFib(5), dynFib(5), iterFib(5));