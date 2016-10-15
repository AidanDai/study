/**
 * 字符串搜索算法-boyer-moore-horspool 算法
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function BMH(target, pattern){
    var len1 = target.length,
        len2 = pattern.length,
        objBC = {},
        j = 0,
        result = {
            count: 0,
            indexs: []
        }; 

    for(let i=0, n=len2-1; i<n; i+=1){
        objBC[String(pattern.charCodeAt(i))] = len2;
    }

    for(let i=0, n=len2-1; i<n; i+=1){
        objBC[String(pattern.charCodeAt(i))] = len2 - i - 1;
    }

    while(j <= len1-len2){
        for(var i=len2-1; i>=0 && pattern[i] == target[i+j]; i-=1);
           
        if(i < 0){
            return [j, j+len2]; // 找到第一个匹配
            // result.indexs.push([j, j+len2]);
            // result.count += 1; // 用于计数
            // j += len2;  
        }else{ // not matched
            j += objBC[String(target.charCodeAt(i+j))] || len2;
        }
    }

    // return result.count ? result : -1; // 找到所有匹配  
    return -1;
}

var test = require("./stringSearchTest.js");

test(BMH, 1000);