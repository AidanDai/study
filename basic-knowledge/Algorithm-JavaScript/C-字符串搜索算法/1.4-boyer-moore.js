/**
 * 字符串搜索算法-boyer-moore 算法之构建《坏字符规则表》算法
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function preBC(pattern){
	var objBC = {},
		len = pattern.length;

	for(let i=0, n=len-1; i<n; i+=1){
       objBC[String(pattern.charCodeAt(i))] = len - 1 - i;
    }
	
	return objBC;
}

/**
 * 字符串搜索算法-boyer-moore 算法之构建《好后缀规则表》算法
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function preGS(pattern){
    var arrGS = [],
    	arrSuff = suffix(pattern), // 计算后缀数组 
    	len = pattern.length; 

    // 先全部赋值为 len，包含第三种情况
    for(let i=0; i<len; i+=1){
        arrGS[i] = len;
    }
 
    // 处理第二种情况
    for(let i=len-1; i>=0; i-=1){
        if(arrSuff[i] === i+1){
            for(let j=0; j<len-1-i; j+=1){
                if(arrGS[j] === len){
                    arrGS[j] = len - 1 - i;
                }
            }
        }
    }
 
    // 处理第三种情况
    for(let i=0; i<=len-2; i+=1){
        arrGS[len-1-arrSuff[i]] = len - 1 - i;
    }

    return arrGS;
}

/**
 * 字符串搜索算法-boyer-moore 算法之生成好后缀算法
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function suffix(pattern){
	var arrSuff = [],
		len = pattern.length;
   
    arrSuff[len-1] = len;
 
    for(let i=len-2; i>=0; i-=1){
        let j = i;
        while(j>=0 && pattern[j]===pattern[len-1-i+j]){ 
        	j -= 1;
        }
        arrSuff[i] = i - j;
    }

    return arrSuff;
}

/**
 * 字符串搜索算法-boyer-moore 算法之生成好后缀优化算法
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function suffix(pattern){
	var arrSuff = [],
		len = pattern.length,
		g = len - 1,
		f = len - 1;
   
    arrSuff[len-1] = len;
    for (let i=len-2; i>=0; i-=1) {
        if (i > g && arrSuff[len-1-f+i] < i-g){
      		arrSuff[i] = arrSuff[len-1-f+i];
        }else{
         	if (i < g){
         	    g = i;
         	}
         	f = i;
         	while (g>=0 && pattern[g]===pattern[len-1-f+g]){
            	g -= 1;
         	}

         	arrSuff[i] = f - g;
        }
    }

    return arrSuff;
}

/**
 * 字符串搜索算法-boyer-moore 算法
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function BM(target, pattern){
    var len1 = target.length,
    	len2 = pattern.length,
    	objBC = preBC(pattern),
		arrGS = preGS(pattern),
		j = 0,
		i,
		result = {
			count: 0,
			indexs: []
		};
	
    while(j <= len1-len2) {  
        for(i=len2-1; i>=0 && pattern[i] == target[i+j]; i-=1);

        if(i < 0){ 
        	// result.indexs.push([j, j+len2]);
            // result.count += 1; // 用于计数
            // j += arrGS[0];  
            return  [j, j+len2]; // 找到第一个匹配
        }else{
            j += Math.max(arrGS[i], (objBC[String(pattern.charCodeAt(i+j))] - len1 + 1 + i || 0));  
        }  
    }

    // return result.count ? result : -1; // 找到所有匹配  
}

var test = require("./stringSearchTest.js");

test(BM, 1000);