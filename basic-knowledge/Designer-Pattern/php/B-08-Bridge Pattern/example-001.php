<?php
	// 像素矩阵类：辅助类，各种格式的文件最终都被转化为像素矩阵，不同的操作系统提供不同的方式显示像素矩阵  
	class Matrix {  
	    // 此处代码省略  
	}  
   
	// 抽象操作系统实现类：实现类接口  
	interface ImageImp {  
	    public function doPaint($matrix);  //显示像素矩阵m  
	}   
  
	// Windows操作系统实现类：具体实现类  
	class WindowsImp implements ImageImp {  
	    public function doPaint($matrix) {  
	        // 调用Windows系统的绘制函数绘制像素矩阵  
	        echo("在Windows操作系统中显示图像：");  
	    }  
	}  
  
	// Linux操作系统实现类：具体实现类  
	class LinuxImp implements ImageImp {  
	    public function doPaint($matrix) {  
	        // 调用Linux系统的绘制函数绘制像素矩阵  
	        echo("在Linux操作系统中显示图像：");  
	    }  
	}  
  
	// Unix操作系统实现类：具体实现类  
	class UnixImp implements ImageImp {  
	    public function doPaint($matrix) {  
	        // 调用Unix系统的绘制函数绘制像素矩阵  
	        echo("在Unix操作系统中显示图像：");  
	    }  
	}  
  
  	//抽象图像类：抽象类  
	abstract class Image {  
	    protected $imageImp = null;  
	  
	    public function __construct($mageImp) {  
	        $this->imageImp = $mageImp;  
	    }   
	  
	    public abstract function parseFile($fileName);  
	} 

	// JPG格式图像：扩充抽象类  
	class JPGImage extends Image {  
	    public function parseFile($fileName) {  
	        // 模拟解析JPG文件并获得一个像素矩阵对象m;  
	        $matrix = new Matrix();   
	        $this->imageImp->doPaint($matrix);  
	        echo($fileName."，格式为JPG。");  
	    }  
	}  
	  
	// PNG格式图像：扩充抽象类  
	class PNGImage extends Image {  
	    public function parseFile($fileName) {  
	        // 模拟解析PNG文件并获得一个像素矩阵对象m;  
	        $matrix = new Matrix();   
	        $this->imageImp->doPaint($matrix);  
	        echo($fileName."，格式为PNG。");  
	    }  
	}  
	  
	// BMP格式图像：扩充抽象类  
	class BMPImage extends Image {  
	    public function parseFile($fileName) {  
	        // 模拟解析BMP文件并获得一个像素矩阵对象m;  
	        $matrix = new Matrix();   
	        $this->imageImp->doPaint($matrix);  
	        echo($fileName."，格式为BMP。");  
	    }  
	}  
	  
	// GIF格式图像：扩充抽象类  
	class GIFImage extends Image {  
	    public function parseFile($fileName) {  
	        // 模拟解析GIF文件并获得一个像素矩阵对象m;  
	        $matrix = new Matrix();   
	        $this->imageImp->doPaint($matrix);
	        echo($fileName."，格式为GIF。");  
	    }  
	} 

	$imageImp = new WindowsImp();
	$image = new GIFImage($imageImp);
	$image->parseFile("001.gif");