<?php 
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

    $component = new Window(); // 定义具体构件
    $componentSB = new  ScrollBarDecorator($component); // 定义装饰后的构件
    $componentSB->display();