<?php
include("../dump.php");

// 抽象聚合类  
abstract class AbstractObjectList {  
    protected $objects = null;  
  
    public function __construct($products) {  
        $this->objects = $products;  
    }  
      
    public function addObject($obj) {  
        array_push($this->objects, $obj);  
    }  
      
    public function removeObject($obj) {  
        $index = array_search($obj);
        array_splice($this->objects, $index, 1);
    }  
      
    public function getObjects() {  
        return $this->objects;  
    }  
      
    // 声明创建迭代器对象的抽象工厂方法  
    public abstract function createIterator();  
}  
  
// 商品数据类：具体聚合类  
class ProductList extends AbstractObjectList {  

    public function __construct($products) {  
        parent::__construct($products);
    }  
      
    // 实现创建迭代器对象的具体工厂方法  
    public function createIterator() {  
        return new ProductIterator($this);  
    }  
}   
  
//抽象迭代器  
interface AbstractIterator {  

    public function next(); //移至下一个元素  
    public function isLast(); //判断是否为最后一个元素  
    public function previous(); //移至上一个元素  
    public function isFirst(); //判断是否为第一个元素  
    public function getNextItem(); //获取下一个元素  
    public function getPreviousItem(); //获取上一个元素  
}  
  
//商品迭代器：具体迭代器  
class ProductIterator implements AbstractIterator {  
    private $productList = null;  
    private $products = null;  
    private $cursor1; //定义一个游标，用于记录正向遍历的位置  
    private $cursor2; //定义一个游标，用于记录逆向遍历的位置  
      
    public function __construct($list) {  
        $this->productList = $list;  
        $this->products = $list->getObjects(); //获取集合对象  
        $this->cursor1 = 0; //设置正向遍历游标的初始值  
        $this->cursor2 = count($this->products) - 1; //设置逆向遍历游标的初始值  
    }  
      
    public function next() {  
        if($this->cursor1 < count($this->products)) {  
            $this->cursor1++;  
        }  
    }  
      
    public function isLast() {  
        return $this->cursor1 === count($this->products);  
    }  
      
    public function previous() {  
        if ($this->cursor2 > -1) {  
            $this->cursor2--;  
        }  
    }  
      
    public function isFirst() {  
        return ($this->cursor2 === -1);  
    }  
      
    public function getNextItem() {  
        return $this->products[$this->cursor1];  
    }   
          
    public function getPreviousItem() {  
        return $this->products[$this->cursor2];   
    }     
} 

function client(){  
    $products = array();  
    array_push($products, "倚天剑");  
    array_push($products, "屠龙刀");  
    array_push($products, "断肠草");  
    array_push($products, "葵花宝典");  
    array_push($products, "四十二章经");  
  
    $list = new ProductList($products); //创建聚合对象  
    $iterator = $list->createIterator();   //创建迭代器对象  

    dump("正向遍历：");      
    while(!$iterator->isLast()) {  
        dump($iterator->getNextItem());  
        $iterator->next();  
    }  

    dump("-----------------------------");

    dump("逆向遍历：");  
    while(!$iterator->isFirst()) {  
        dump($iterator->getPreviousItem());  
        $iterator->previous();  
    }  
}  

client(); 