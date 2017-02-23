# 装饰模式(Decorator Pattern)

# 1 定义

装饰模式(Decorator Pattern)：动态地给一个对象增加一些额外的职责，就增加对象功能来说，装饰模式比生成子类实现更为灵活。装饰模式是一种对象结构型模式。

# 2 UML类图

![装饰模式 UML 类图](./images/001.jpg)

# 3 各类职责

- `Component（抽象构件）`：它是具体构件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法，它的引入可以使客户端以一致的方式处理未被装饰的对象以及装饰之后的对象，实现客户端的透明操作。

- `ConcreteComponent（具体构件）`：它是抽象构件类的子类，用于定义具体的构件对象，实现了在抽象构件中声明的方法，装饰器可以给它增加额外的职责（方法）。

- `Decorator（抽象装饰类）`：它也是抽象构件类的子类，用于给具体构件增加职责，但是具体职责在其子类中实现。它维护一个指向抽象构件对象的引用，通过该引用可以调用装饰之前构件对象的方法，并通过其子类扩展该方法，以达到装饰的目的。

- `ConcreteDecorator（具体装饰类）`：它是抽象装饰类的子类，负责向构件添加新的职责。每一个具体装饰类都定义了一些新的行为，它可以调用在抽象装饰类中定义的方法，并可以增加新的方法用以扩充对象的行为。

# 4 实例

## 4.1 图形界面构件库的设计

相关类结构图：![图形界面构件库结构图](./images/002.jpg)

```php
// 抽象界面构件类：抽象构件类，为了突出与模式相关的核心代码，对原有控件代码进行了大量的简化
abstract class Component {
    public  abstract function display();
}

// 窗体类：具体构件类
class Window extends Component {
	public  function display(){
		echo("显示窗体！"."<br/>");
	}
}

// 文本框类：具体构件类
class TextBox extends Component {
	public  function display(){
		echo("显示文本框！"."<br/>");
	}
}

// 列表框类：具体构件类
class ListBox extends Component{
	public  function display(){
		echo("显示列表框！"."<br/>");
	}
}

// 构件装饰类：抽象装饰类
class ComponentDecorator extends Component {
	private $component;  //维持对抽象构件类型对象的引用

	public function __construct($component){  // 注入抽象构件类型的对象
		$this->component = $component;
	}

	public function display(){
		$this->component->display();
	}
}

// 滚动条装饰类：具体装饰类
class ScrollBarDecorator extends  ComponentDecorator {
	public function __construct($component){
		parent::__construct($component);
	}

	public function display(){
		$this->setScrollBar();
		parent::display();
	}

	public function setScrollBar(){
		echo("为构件增加滚动条！");
	}
}

// 黑色边框装饰类：具体装饰类
class BlackBorderDecorator extends  ComponentDecorator {
	public function BlackBorderDecorator($component){
		parent::__construct($component);
	}

	public function display(){
		$this->setBlackBorder();
		parent::display();
	}

	public function setBlackBorder(){
		echo("为构件增加黑色边框！");
	}
}
```

源码：[图形界面构件库的设计源码](./example-001.php)
