/**
 * BKDR 哈希算法
 * @param {string} string 待处理字符串
 * @author  Aidan aidandai@126.com
 */
function BKDRHash(string){  
    const SEED = 31; // 31 131 1313 13131 131313 etc...
    var hash = 0,
    	len = string.length;

    for(let i=0; i<len; i+=1){
        hash = hash * SEED + string.charCodeAt(i);  
    } 

    return hash;  
}  

/**
 * 字符串搜索算法-Rabin–Karp 算法
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function RK(target, pattern){
	var len1 = target.length,
		len2 = pattern.length;

	for(let i=0, n=len1-len2; i<=n; i+=1){
		let sub = target.substr(i, len2),
			subHash = BKDRHash(sub),
			patternHash = BKDRHash(pattern);
		
		if(subHash === patternHash){
			if(sub === pattern){
				return [i, i+len2];
			}else{
				return -1;
			}
		}
	}

	return -1;
}

var test = require("./stringSearchTest");

test(RK, 1000);