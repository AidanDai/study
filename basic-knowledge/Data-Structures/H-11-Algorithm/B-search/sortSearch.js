let Data = require('../data.js');

class SortSearch {

	/**
	 * 查找数组中某元素第一次出现的位置
	 * @param  Array data  数组
	 * @param  {[type]} value 元素
	 * @return Number      位置索引
	 */
	find(data, value){
		let len = data.length;
		for(let i=0; i<len; i+=1){
			if(data[i] === value){
				return i;
			}
		}
		return -1;
	}

	/**
	 * 查找数组中最小值
	 * @return {[type]} 最小值
	 */
	finMin(data){
		let len = data.length,
			min = data[0];
		for(let i=1; i<len; i+=1){
			if(data[i] < min){
				min = data[i];
			}
		}
		return min;
	}

	/**
	 * 查找数组中最大值
	 * @return {[type]} 最大值
	 */
	findMax(){
		let len = data.length,
			max = data[0];
		for(let i=1; i<len; i+=1){
			if(data[i] > max){
				max = data[i];
			}
		}
		return max;
	}

	/**
	 * 自组织数据查找
	 * @param  Array data  数组
	 * @param  {[type]} value 元素
	 * @return boolean      是否存在
	 */
	/*seqSearch(data, num){
		let len = data.length;
		for(let i=0; i<len; i+=1){
			if(data[i] === value){
				if(i>0){
					this.swap(data, i, i-1);
				}
				return true;
			}
		}
		return false;
	}*/
	seqSearch(data, num){
		let len = data.length,
			range = len * 0.2;
		for(let i=0; i<len; i+=1){
			if(data[i] === value && i > len * range){
				this.swap(data, i, 0);
				return true;
			}else if(data[i] === value){
				return true;
			}
		}
		return false;
	}

	/**
	 * 交换数组元素
	 * @param  Array data   原始数组
	 * @param  Number index1 索引1
	 * @param  Number index2 索引2
	 */
	swap(data, index1, index2){
		let temp = data[index1];
		data[index1] = data[index2];
		data[index2] = temp;
	}
}

