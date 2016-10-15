<?php 
	include_once("../dump.php");

	/**
	 * 没有源码的算法库的适配器模式解决方案
	 */
	// 抽象成绩操作类：目标接口  
	interface ScoreOperation {  
	    public function sort($array); 			//成绩排序  
	    public function search($array, $key); 	//成绩查找  
	}  
  
	//快速排序类：适配者  
	class QuickSort {  

	    public function sort($array) {  
	        // 判断数组是否需要继续进行排序
		    $length = count($array);
		    if($length <= 1) {
		        return $array;
		    }
		
		    // 选择第一个元素为标尺
		    $base_num = $array[0];
		    // 初始化两个数组；遍历除了标尺外的所有元素，按照大小关系放入两个数组内
		    $left_array = array();	// 小于标尺的
		    $right_array = array();	// 大于标尺的

		    for($i=1; $i<$length; $i+=1) {
		        if($array[$i] < $base_num){
		            $left_array[] = $array[$i]; // 放入左边数组
		        }else{
		            $right_array[] = $array[$i]; // 放入右边数组
		        }
		    }
		    
		    // 再分别对左边、右边的数组进行相同的排序处理方式；递归调用这个函数,并记录结果
		    $left_array = $this->sort($left_array);
		    $right_array = $this->sort($right_array);
		    
		    //合并左边、标尺、右边
		    return array_merge($left_array, array($base_num), $right_array);
	    }  
	 
	}  
  
	// 二分查找类：适配者  
	class BinarySearch { // 有序数据查找目标值
	    public function search($array, $target){
            $min = 0;
            $max = count($array) - 1;
            
            while($min<=$max){
                $middle = floor( ($min + $max) / 2);
                // 找到元素
                if($array[$middle] == $target){
                	return $middle;
                } 
                // 元素比目标大,查找左部
                if($array[$middle] > $target) {
                	$max = $middle - 1;
                }
                // 元素比目标小,查找右部
                if($array[$middle] < $target) {
                	$min = $middle + 1;
                }
            }
            
            // 查找失败
            return false;
	    }
	}  
  
	//	操作适配器：适配器  
	class OperationAdapter implements ScoreOperation {  

	    private $quickSort; 		// 定义适配者QuickSort对象  
	    private $binarySearch; 	// 定义适配者BinarySearch对象  
	  
	    public function __construct() {  
	        $this->quickSort = new QuickSort();  
	        $this->binarySearch = new BinarySearch();  
	    }  
	  
	    public function sort($array) {    
			return $this->quickSort->sort($array); // 调用适配者类 sort 的排序方法  
		}  
	  
	    public function search($array, $target) {    
			return $this->binarySearch->search($array, $target); // 调用适配者类 search 的查找方法  
		}  

	}  

	$array = [20, 50, 10, 40, 70, 30, 90, 100, 80, 60];
	$operationAdapter = new OperationAdapter();

	$sort = $operationAdapter->sort($array);
	dump($sort);
	dump($operationAdapter->search($sort, 40));
