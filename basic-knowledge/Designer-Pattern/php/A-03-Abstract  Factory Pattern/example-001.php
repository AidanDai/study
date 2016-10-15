<?php
	/**
	 * Springfunction 和 Summerfunction 构成一个产品族
	 * function 和 SpringButton、function 和 SummerButton构成一个产品等级结构
	 * 
	 */
	// 按钮接口：抽象产品  
	interface Button {  
	    public function display();  
	}  
  
	// Spring 按钮类：具体产品  
	class SpringButton implements Button {  
	    public function display() {  
	        echo("SpringButton");  
	    }  
	}  
  
	// Summer 按钮类：具体产品  
	class SummerButton implements Button {  
	    public function display() {  
	        echo("SummerButton");  
	    }     
	}  
  
	// 文本框接口：抽象产品  
	interface TextField {  
	    public function display();  
	}  
  
	//Spring 文本框类：具体产品  
	class SpringTextField implements TextField {  
	    public function display() {  
	        echo("SpringTextField");  
	    }  
	}  
  
	// Summer 文本框类：具体产品  
	class SummerTextField implements TextField {  
	    public function display() {  
	        echo("SummerTextField");  
	    }     
	}  
  
	// 组合框接口：抽象产品  
	interface ComboBox {  
	    public function display();  
	}  
  
	// Spring 组合框类：具体产品  
	class SpringComboBox implements ComboBox {  
	    public function display() {  
	        echo("SpringComboBox");  
	    }  
	}  
  
	// Summer 组合框类：具体产品  
	class SummerComboBox implements ComboBox {  
	    public function display() {  
	        echo("SummerComboBox");  
	    }     
	}  
  	
  	/**
  	 * 产品族角度考虑抽象工厂类结构
  	 */
	// 界面组件工厂接口：抽象工厂  
	interface ComponentFactory {  
	    public function createButton();  
	    public function createTextField();  
	    public function createComboBox();  
	}  
  	
	// Spring 工厂：具体工厂  
	class SpringComponentFactory implements ComponentFactory {  
	    public function createButton() {  
	        return new SpringButton();  
	    }  
	  
	    public function createTextField() {  
	        return new SpringTextField();  
	    }  
	  
	    public function createComboBox() {  
	        return new SpringComboBox();  
	    }  
	}  
  
	// Summer 工厂：具体工厂  
	class SummerComponentFactory implements ComponentFactory {  
	    public function createButton() {  
	        return new SummerButton();  
	    }  
	  
	    public function createTextField() {  
	        return new SummerTextField();  
	    }  
	  
	    public function createComboBox() {  
	        return new SummerComboBox();  
	    }
	}

	// 创建 Sping 工厂
	$ComponentFactory = new SpringComponentFactory();

	// Sping 工厂生产界面组件
	$springButton = $ComponentFactory->createButton();
	$springTextField = $ComponentFactory->createTextField();
	$springComboBox = $ComponentFactory->createComboBox();

	$springButton->display();
	echo("<br/>");
	$springTextField->display();
	echo("<br/>");
	$springComboBox->display();