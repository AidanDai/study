<?php
    // 抽象文件类：抽象构件  
    abstract class AbstractFile {  
        public abstract function add($file);  
        public abstract function remove($file);  
        public abstract function getChild($i);  
        public abstract function killVirus();  
    }  
      
    // 图像文件类：叶子构件  
    class ImageFile extends AbstractFile {  
        private $name;  
          
        public function __construct($name) {  
            $this->name = $name;  
        }  
          
        public function add($file) {  
           echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function remove($file) {  
            echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function getChild($i) {  
            echo("对不起，不支持该方法！"."<br/>");  
            return null;  
        }  
          
        public function killVirus() {  
            // 模拟杀毒  
            echo("--------对图像文件'".$this->name."'进行杀毒"."<br/>");  
        }  
    }  
      
    // 文本文件类：叶子构件  
    class TextFile extends AbstractFile {  
        private $name;  
          
        public function __construct($name) {  
            $this->name = $name;  
        }  
          
        public function add($file) {  
           echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function remove($file) {  
            echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function getChild($i) {  
            echo("对不起，不支持该方法！"."<br/>");  
            return null;  
        }  
          
        public function killVirus() {  
            // 模拟杀毒  
            echo("--------对文本文件'".$this->name."'进行杀毒"."<br/>");  
        }  
    }  
      
    // 视频文件类：叶子构件  
    class VideoFile extends AbstractFile {  
        private $name;  
          
        public function __construct($name) {  
            $this->name = $name;  
        }  
          
        public function add($file) {  
           echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function remove($file) {  
            echo("对不起，不支持该方法！"."<br/>");  
        }  
          
        public function getChild($i) {  
            echo("对不起，不支持该方法！"."<br/>");  
            return null;  
        }  
          
        public function killVirus() {  
            // 模拟杀毒  
            echo("--------对视频文件'".$this->name."'进行杀毒"."<br/>");  
        }  
    }  
      
    // 文件夹类：容器构件  
    class Folder extends AbstractFile {  
        // 定义集合fileList，用于存储AbstractFile类型的成员  
        private $files = null;  
        private $name;  
              
        public function __construct($name) {  
            $this->name = $name;
            $this->files = array();
        }  
          
        public function add($file) {  
           array_push($this->files, $file);    
        }  
          
        public function remove($file) { 
            $index = array_search($file, $this->files);
            if($index > -1){
                return array_splice($this->files, $index, 1);  
            }
            return false;
        }  
          
        public function getChild($i) {  
            return $this->files[$i];  
        }  
          
        public function killVirus() {  
            echo("****对文件夹'".$this->name."'进行杀毒"."<br/>");  // 模拟杀毒  
            // 递归调用成员构件的killVirus()方法 
            $len = count($this->files); 
            for($i=0; $i<$len; $i++) {  
                $this->files[$i]->killVirus();  
            }  
        }  
    }  


    $folder1 = new Folder("Sunny的资料"); 

    $folder2 = new Folder("图像文件");  
    $folder3 = new Folder("文本文件");  
    $folder4 = new Folder("视频文件");  
 
    $file1 = new ImageFile("小龙女.jpg");  
    $file2 = new ImageFile("张无忌.gif"); 

    $file3 = new TextFile("九阴真经.txt");  
    $file4 = new TextFile("葵花宝典.doc"); 

    $file5 = new VideoFile("笑傲江湖.rmvb");  

    $folder2->add($file1);  
    $folder2->add($file2);

    $folder3->add($file3);  
    $folder3->add($file4);

    $folder4->add($file5);

    $folder1->add($folder2);  
    $folder1->add($folder3);  
    $folder1->add($folder4);  

    // 从“Sunny的资料”节点开始进行杀毒操作  
    $folder1->killVirus();  