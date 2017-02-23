/**
 * 字符串搜索算法-朴素算法（Brute-Froce）
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function BF(target, pattern){
	var len1 = target.length,
		len2 = pattern.length,
		start = 0,
		end = 0;

	for(let i=0; i<len1; i+=1){
		start = i;
		end = i;
		for(let j=0; j<len2; j+=1){
			if(target[end] === pattern[j]){
				end += 1;
				if(end - start === len2){
					return [start, end];
				}
			}else{
				break;
			}
		}
	}

	return -1;
}

var test = require("./stringSearchTest");

test(BF, 1000);