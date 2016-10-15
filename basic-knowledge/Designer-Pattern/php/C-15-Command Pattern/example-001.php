<?php
// 功能键设置窗口类  
class FBSettingWindow {  
    private $title; // 窗口标题  
    // 定义一个 Array 来存储所有功能键  
    private $functionButtons = null;  
      
    public function __construct($title) {  
        $this->title = $title;  
        $this->functionButtons = array();
    }  
      
    public function setTitle($title) {  
        $this->title = $title;  
    }  
      
    public function getTitle() {  
        return $this->title;  
    }  
      
    public function addFunctionButton($fb) {  
        array_push($this->functionButtons, $fb);
    }  
      
    public function removeFunctionButton($fb) {  
       $index = array_search($fb);  
       array_splice($this->functionButtons, $index, 1);
    }  
      
    //显示窗口及功能键  
    public function display() {  
        echo("显示窗口：" . $this->title . "<br/>");  
        echo("显示功能键：" . "<br/>");  
        foreach($this->functionButtons as $value){
        	echo($value->getName() . "<br/>");
        }
        echo("------------------------------" . "<br/>");  
    }     
}  
  
// 功能键类：请求发送者  
class FunctionButton {  
    private $name; // 功能键名称  
    private $command; // 维持一个抽象命令对象的引用  
      
    public function __construct($name) {  
        $this->name = $name;  
    }  
      
    public function getName() {  
        return $this->name;  
    }  
      
    // 为功能键注入命令  
    public function setCommand($command) {  
        $this->command = $command;  
    }  
      
    // 发送请求的方法  
    public function onClick() {  
        echo("点击功能键：");  
        $this->command->execute();  
    }  
}  
  
// 抽象命令类  
abstract class Command {  
    public abstract function execute();  
}  
  
// 帮助命令类：具体命令类  
class HelpCommand extends Command {  
    private $helpHandler = null; // 维持对请求接收者的引用  
      
    public function __construct() {  
        $this->helpHandler = new HelpHandler();  
    }  
      
    // 命令执行方法，将调用请求接收者的业务方法  
    public function execute() {  
        $this->helpHandler->display();  
    }  
}  
  
// 最小化命令类：具体命令类  
class MinimizeCommand extends Command {  
    private $windowHanlder = null; // 维持对请求接收者的引用  
      
    public function __construct() {  
        $this->windowHanlder = new WindowHanlder();  
    }  
      
	// 命令执行方法，将调用请求接收者的业务方法  
    public function execute() {  
        $this->windowHanlder->minimize();  
    }  
}  
  
// 窗口处理类：请求接收者  
class WindowHanlder {  
    public function minimize() {  
        echo("将窗口最小化至托盘！" . "<br/>");  
    }  
}  
  
// 帮助文档处理类：请求接收者  
class HelpHandler {  
    public function display() {  
        echo("显示帮助文档！" . "<br/>");  
    }  
}  

function client(){  
              
    $fb1 = new FunctionButton("功能键1");  
    $fb2 = new FunctionButton("功能键2");

    $fBSettingWindow = new FBSettingWindow("功能键设置");  

    $fBSettingWindow->addFunctionButton($fb1);  
    $fBSettingWindow->addFunctionButton($fb2);  
    $fBSettingWindow->display();   
      
    // 生成具体命令对象  
    $command1 = new HelpCommand();  
    $command2 = new MinimizeCommand();  
      
    // 将命令对象注入功能键  
    $fb1->setCommand($command1);  
    $fb2->setCommand($command2);  
      
    // 调用功能键的业务方法  
    $fb1->onClick();  
    $fb2->onClick();  
}

client();