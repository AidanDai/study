// 1 创建数组（数组元素不必是同一种数据类型）
let array1 = [];

let array2 = [1, 2, 3, 4, 5];

let array3 = new Array();

let array4 = new Array(1, 2, 3, 4, 5);

let array5 = new Array(10);

// 判断是否为数组
Array.isArray();

// console.log(array1, array2, array3, array4, array5);

// 2 读写数组
for(let i=0; i<array4.length; i+=1){
	// console.log(array4[i]);
}

// 3 有字符串生成数组

let str1 = "Aidan";
let words1 = str1.split("");

// console.log(words1);

// 4 对数组的整体性操作

// 4.1 浅复制
let words2 = words1;

/*console.log(words2);
words1[1] = 'A';
console.log(words1);
console.log(words2);*/

// 4.2 深复制

let words3 = [];
for(let i=0; i<words1.length; i+=1){
	words3[i] = words1[i];
}

/*console.log(words3);
words1[1] = 'A';
console.log(words1);
console.log(words3);*/

// 5 存取函数

let names = ["Aidan", "zhongjin", "zp", "zhujiayi", "zp"];

// 5.1 查找元素

/*// 可指定起始查找位置
console.log(names.indexOf("zp")); // 默认起始查找位置 0 
console.log(names.lastIndexOf("zp")); // 默认起始查找位置 length - 1*/

// 5.2 数组的字符串表示 

/*console.log(names.toString());
console.log( names.join());
console.log( names.join('-'));*/

// 由已有数组创建新数组

let age = [23, 22, 21, 21];
let together = names.concat(age);

/*console.log(together);
console.log(names);
console.log(age);*/

let subArray = names.splice(2, 1);// 删除（多个元素同理）
/*console.log(names)
console.log(subArray);*/

let replaceArray = names.splice(2, 1, 23);// 替换（多个元素同理）
/*console.log(names);
console.log(replaceArray);*/

let addArray = names.splice(2, 0, 23);// 添加（多个元素同理）
/*console.log(names);
console.log(addArray);*/

// 6 可变函数 

let nums = [1, 2, 3, 4, 5];

// 6.1 为数组添加元素

let length1 = nums.push(7, 8, 9);
/*console.log(nums);
console.log(length1);*/

let length2 = nums.unshift(-1, -2, -3);
/*console.log(nums);
console.log(length2);*/

// 6.2 从数组中删除元素

// console.log(nums);
let last = nums.pop();
// console.log(last);

// console.log(nums);
let first = nums.shift();
// console.log(first);

// 6.3 从数组中间位置添加和删除元素

// console.log(nums);
let delArray = nums.splice(2, 3);
/*console.log(nums);
console.log(delArray);*/

// console.log(nums);
let add1Array = nums.splice(2, 0, 11, 12, 13);
/*console.log(nums);
console.log(add1Array);*/

// 7 为数组排序

var sort = [1, 2, 3, 4, 5];
sort.reverse();
sort.sort(); // 字典顺序排序
// console.log(sort);

// 8 迭代器方法

// 8.1 不生成新数组的迭代器方法

let nums1 = [1, 2, 3, 4, 5];

function square(num){
	console.log(num * num);
}
// nums1.forEach(square);

function isEven(num){
	return num % 2 === 0;
}

let even = nums1.every(isEven);
let someEven = nums1.some(isEven);
// console.log(even);
// console.log(someEven);

function concating(pre, cur){
	return pre.concat(cur);
}

let arr2d = [[1, 2],[3, 4], [5, 6]];
let arrConcat = arr2d.reduce(concating, [-1, 0]);
// console.log(arrConcat);

// reduceRight() 翻转数组

// 8.2 生成新数组的迭代器方法

function add5(num){
	return num + 5;
}

// console.log(nums1);
let add5Arr = nums1.map(add5);
/*console.log(nums1);
console.log(add5Arr);*/

let evenNum = nums1.filter(isEven);
// console.log(evenNum);

// 9 二维数组和多维数组

// 9.1 创建二维数组

Array.matrix = function(numrows, numcols, initial){
	let arr = [];
	for(let i=0; i<numrows; i+=1){
		let colarr = [];
		for(let j=0; j<numcols; j+=1){
			colarr[j] = initial;
		}
		arr[i] = colarr;
	}
	return arr;
}

// console.log(Array.matrix(4, 5, 1));

// 9.2 处理二维数组元素

let grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]],
	studentTotal = 0,
	studentAverage = 0.0;

for(let i=0; i<grades.length; i+=1){
	for(let j=0; j<grades[i].length; j+=1){
		studentTotal += grades[i][j];
	}

	studentAverage = studentTotal / grades[i].length;
	console.log("student " + i + " average grades: " + studentAverage.toFixed(2));

	studentTotal = 0;
	studentAverage = 0.0;
}

let courseTotal = 0,
	courseAverage = 0.0;

/*for(let j=0; j<grades.length; j+=1){
	for(let i=0; i<grades[j].length; i+=1){
		courseTotal += grades[i][j];
	}

	courseAverage = courseTotal / grades[j].length;
	console.log("course " + j + " average grades: " + courseAverage.toFixed(2));

	courseTotal = 0;
	courseAverage = 0.0;
}*/

/*for(let i=0; i<grades.length; i+=1){
	for(let j=0; j<grades[i].length; j+=1){
		courseTotal += grades[j][i];
	}

	courseAverage = courseTotal / grades[i].length;
	console.log("course " + i + " average grades: " + courseAverage.toFixed(2));

	courseTotal = 0;
	courseAverage = 0.0;
}*/

// 9.3 参差不齐的数组

// 只能按行访问

// 10 对象数组

// 和普通数组一样