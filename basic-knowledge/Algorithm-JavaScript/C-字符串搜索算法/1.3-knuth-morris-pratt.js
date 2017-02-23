/**
 * 字符串搜索算法-knuth-morris-pratt 算法
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function KMP(target, pattern){
	var getPartialMatchTable = function(pattern){
	        var table = [0],
	        	k = 0;

	        for (let i=1, len=pattern.length; i<len; i+=1){
	            while (k > 0 && pattern[i] !== pattern[k]){
	                k = table[k - 1];
	            }
	            if (pattern[i] === pattern[k]){
	                k += 1;
	            }
	            table[i] = k;
	        }
	        return table;
		},
		table = getPartialMatchTable(pattern),
		len1 = target.length,
		len2 = pattern.length;

	for (let i=0, q=0; i<len1; i+=1){
        while(q > 0 && pattern[q] !== target[i]){
            q = table[q-1];
        }

        if(pattern[q] === target[i]){
            q++;
        }
        if(q === len2){
        	let end = i + 1;
            return [end-q, end];
        }
    } 

    return -1;  
}

var test = require("./stringSearchTest.js");

test(KMP, 100);