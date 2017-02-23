/**
 * 字符串搜索算法-Sunday 算法
 * 区分大小写
 * @param {string} target  目标串
 * @param {string} pattern 模式串
 * @author  Aidan aidandai@126.com
 */
function Sunday(target, pattern){
    var len1 = target.length,
        len2 = pattern.length,
        objBC = {},
        i = 0,
        j,
        result = {
            count: 0,
            indexs: []
        }; 

    for(let i=0; i<len2; i+=1){
        objBC[String(pattern.charCodeAt(i))] = len2 - i - 1;
    }

    while(i <= len1-len2){  
        let index = i; 

        j = 0;
        for( ; j<len2 && index<len1 && target[index]===pattern[j]; index+=1, j+=1);  
        
        if(j === len2){  
            return [i, i+len2];  
        }else{
            if(i+len2 > len1){  
                return -1;  
            }else{  
                i += objBC[String(target.charCodeAt(i+len2))] + 1 || len2;
            }   
        }
    }

    return -1; 
}

var test = require("./stringSearchTest.js");

test(Sunday, 1000);