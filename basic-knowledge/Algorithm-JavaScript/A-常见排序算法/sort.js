class Sort {

	/**
	 * 冒泡排序
	 * @param  Array data 待排序数组
	 */
	bubbleSort(data){
		let len = data.length;

		for(let i=len; i>1; i-=1){
			for(let j=0; j<i; j+=1){
				if(data[j] > data[j+1]){
					this.swap(data, j, j+1);
				}
			}
		}

	}

	/**
	 * 选择排序
	 * @param  Array data 待排序数组
	 */
	selectSort(data){
		let min,
			len = data.length;
		for(let i=0; i<len-1; i+=1){
			min = i;
			for(let j=i+1; j<len; j+=1){
				if(data[j] < data[min]){
					min = j;
				}
			}
			this.swap(data, i, min);
		}
	}

	/**
	 * 插入排序
	 * @param  Array data 待排序数组
	 */
	insertSort(data){
		let len = data.length,
			j, 
			temp;
		for(let i=1; i<len; i+=1){
			temp = data[i];
			j = i;
			while(j>0 && data[j-1] >= temp){
				data[j] = data[j-1];
				j -= 1;
			}
			data[j] = temp;
		}
	}

	/**
	 * 希尔排序（改进的插入排序）
	 * @param  Array data 待排序数组
	 * @param  gaps  gaps 分组步长
	 */
	shellSort(data, gaps = [5, 2, 1]){
		let len1 = data.length,
			len2 = gaps.length,
			temp,
			j;

		for(let g=0; g<len2; g+=1){
			for(let i=0; i<len1; i+=1){
				temp = data[i],
				j = i;
				while(j>=gaps[g] && data[j-gaps[g]] > temp){
					data[j] = data[j-gaps[g]];
					j -= gaps[g];
				}
				data[j] = temp;
			}
		}
	}

	/**
	 * 归并排序
	 * @param  Array data 待排序数组
	 * @return Array      顺序数组
	 */
	mergeSort(data){
		let len = data.length,
			middle,
			left,
			right;

		if(len === 1){
			return data;
		}

		// 首先将无序数组划分为两个数组
	   	middle = Math.floor(len / 2);
	   	left = data.slice(0, middle);
	   	right = data.slice(middle);
	   	// 递归对左右两部分数组进行归并排序并合并
	   	return this.merge(this.mergeSort(left), this.mergeSort(right));
	}

	/**
	 * 归并排序辅助函数（和并数组）
	 * @param  Array left  带合并数组1
	 * @param  Array right 带合并数组2
	 */
	merge(left, right) {
	   var temp = [];
	   while(left.length > 0 && right.length > 0) {
	       if(left[0] < right[0]) {
	           temp.push(left.shift());
	       } else {
	           temp.push(right.shift());
	       }
	   }
	   // 当左右数组长度不等时将比较完后剩下的数组项连接起来即可
	   return temp.concat(left).concat(right);
	}
	
	/**
	 * 快速排序
	 * @param  Array data 待排序数组
	 * @return Array      顺序数组
	 */
	quickSort(data){
		let len = data.length,
			lesser = [],
			greater = [],
			middle = data[0];

		if(len === 0){
			return [];
		}
		for(let i=1; i<len; i+=1){
			if(data[i] < middle){
				lesser.push(data[i]);
			}else{
				greater.push(data[i]);
			}
		}

		return this.quickSort(lesser).concat(middle, this.quickSort(greater));
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