<?php 

// 围棋棋子类：抽象享元类  
abstract class IgoChessman {  
    public abstract function getColor();  
  
    public function display($coordinates) {  
        echo("棋子颜色：".$this->getColor()."棋子位置：(".$coordinates->getX().",".$coordinates->getY().")");    
    }  
}  
  
// 黑色棋子类：具体享元类  
class BlackIgoChessman extends IgoChessman {  
    public function getColor() {  
        return "黑色";  
    }     
}  
  
// 白色棋子类：具体享元类  
class WhiteIgoChessman extends IgoChessman {  
    public function getColor() {  
        return "白色";  
    }  
}  

// 坐标类：外部状态类  
class Coordinates {  
    private $x;  
    private $y;  
      
    public function __construct($x, $y) {  
        $this->x = $x;  
        $this->y = $y;  
    }  
      
    public function getX() {  
        return $this->x;  
    }  
      
    public function setX($x) {  
        $this->x = $x;  
    }  
    
    public function getY() {  
        return $this->y;  
    }  
      
    public function setY($y) {  
        $this->y = $y;  
    }  
}
  
// 围棋棋子工厂类：享元工厂类，使用单例模式进行设计  
class IgoChessmanFactory {  
    private static $instance = null;  
    private static $array = array(); // 使用数组来存储享元对象，充当享元池  
      
    private function __construct() {  
        $black = new BlackIgoChessman();  
        self::$array["black"] = $black;  
        $white = new WhiteIgoChessman();  
        self::$array["white"] = $white;
    }  
      
    // 返回享元工厂类的唯一实例  
    public static function getInstance() { 
    	self::$instance = new IgoChessmanFactory();
        return self::$instance;  
    }  
      
    // 通过key来获取存储在Hashtable中的享元对象  
    public static function getIgoChessman($color) { 
        return self::$array[$color];    
    }  
}  

$factory = IgoChessmanFactory::getInstance();

$black1 = $factory->getIgoChessman("black");
$black2 = $factory->getIgoChessman("black");
$black3 = $factory->getIgoChessman("black");

$white1 = $factory->getIgoChessman("white");
$white2 = $factory->getIgoChessman("white");

echo($black1 === $black2);
echo("<br/>");
echo($black2 === $black3);
echo("<br/>");

$black1->display(new Coordinates(1,2));  
echo("<br/>");
$black2->display(new Coordinates(3,4));  
echo("<br/>");
$black3->display(new Coordinates(1,3));  
echo("<br/>");
$white1->display(new Coordinates(2,5));  
echo("<br/>");
$white2->display(new Coordinates(2,4)); 