<?php 
include("../dump.php");

// 注：本实例对机器人控制指令的输出结果进行模拟，将英文指令翻译为中文指令
// 实际情况是调用不同的控制程序进行机器人的控制，包括对移动方向、方式和距离的控制等  
  
// 抽象表达式  
abstract class AbstractNode {  
    public abstract function interpret();  
}  
  
// And解释：非终结符表达式  
class AndNode extends AbstractNode {  
    private $leftAbstractNode = null; // And的左表达式  
    private $rightAbstractNode = null; // And的右表达式  
  
    public function __construct($leftAbstractNode, $rightAbstractNode) {  
        $this->leftAbstractNode = $leftAbstractNode;  
        $this->rightAbstractNode = $rightAbstractNode;  
    }  
      
    // And表达式解释操作  
    public function interpret() {  
        return $this->leftAbstractNode->interpret() . "再" . $this->rightAbstractNode->interpret();  
    }  
}  
  
// 简单句子解释：非终结符表达式  
class SentenceNode extends AbstractNode {  
    private $direction = null;  
    private $action = null;  
    private $distance = null;  
  
    public function __construct($direction, $action, $distance) {  
        $this->direction = $direction;  
        $this->action = $action;  
        $this->distance = $distance;  
    }  
      
    // 简单句子的解释操作  
    public function interpret() {  
        return $this->direction->interpret() . $this->action->interpret() . $this->distance->interpret();  
    }     
}  
  
// 方向解释：终结符表达式  
class DirectionNode extends AbstractNode {  
    private $direction;  
      
    public function __construct($direction) {  
        $this->direction = $direction;  
    }  
      
    // 方向表达式的解释操作  
    public function interpret() {
    	$type = strtolower($this->direction);
    	switch($type){
    		case "up" : return "向上"; 
    		case "down" : return "向下";
    		case "left" : return "向左";
    		case "right" : return "向右"; 
    		default : return "无效指令"; 
    	}
    }  
}  
  
// 动作解释：终结符表达式  
class ActionNode extends AbstractNode {  
    private $action;  
      
    public function __construct($action) {  
        $this->action = $action;  
    }  
      
    //动作（移动方式）表达式的解释操作  
    public function interpret() {  
    	$type = strtolower($this->action);
    	switch($type){
    		case "move" : return "移动";   
    		case "run" : return "快速移动";
    		default : return "无效指令"; 
    	}
    }  
}  
  
// 距离解释：终结符表达式  
class DistanceNode extends AbstractNode {  
    private $distance;  
      
    public function __construct($distance) {  
        $this->distance = $distance;  
    }  
      
 	// 距离表达式的解释操作  
    public function interpret() {  
        return $this->distance;  
    }     
}  
  
// 指令处理类：工具类  
class InstructionHandler {    
    private $abstractNode = null;  
      
    public function handle($instruction) {  
        $leftAbstractNode = null;
        $rightAbstractNode = null; 

        $direction = null; 
        $action = null; 
        $distance = null;  

        $stack = array(); // 模拟一个栈对象用于存储抽象语法树  
        $wordsArray = split(" ", $instruction); // 以空格分隔指令字符串 
        dump($wordsArray);

        for ($i=0, $len=count($wordsArray)-2; $i<$len; $i+=1) {  
			// 本实例采用栈的方式来处理指令，如果遇到“and”，
			// 则将其后的三个单词作为三个终结符表达式连成一个简单句子SentenceNode作为“and”的右表达式，
			// 而将从栈顶弹出的表达式作为“and”的左表达式，
			// 最后将新的“and”表达式压入栈中。
			$temp = strtolower($wordsArray[$i]);                 
			if ($temp === "and") {  
                $leftAbstractNode = Array_pop($stack); // 弹出栈顶表达式作为左表达式  
                
                $word1 = $wordsArray[++$i];  
                $direction = new DirectionNode($word1); 

                $word2 = $wordsArray[++$i];  
                $action = new ActionNode($word2);  

                $word3 = $wordsArray[++$i]; 
                $distance = new DistanceNode($word3); 

                $rightAbstractNode = new SentenceNode($direction, $action, $distance); // 右表达式  
                Array_push($stack, New AndNode($leftAbstractNode, $rightAbstractNode)); // 将新表达式压入栈中   
            } else { // 如果是从头开始进行解释，则将前三个单词组成一个简单句子SentenceNode并将该句子压入栈中   
                $word1 = $wordsArray[$i];  
                $direction = new DirectionNode($word1); 

                $word2 = $wordsArray[++$i];  
                $action = new ActionNode($word2);  

                $word3 = $wordsArray[++$i];
                $distance = new DistanceNode($word3); 

                $leftAbstractNode = new SentenceNode($direction, $action, $distance);  
                Array_push($stack, $leftAbstractNode); // 将新表达式压入栈中  
            }  
        }  
        $this->abstractNode = array_pop($stack); // 将全部表达式从栈中弹出  
    }  
      
    public function output() {  
        $result = $this->abstractNode->interpret(); // 解释表达式  
        return $result;  
    }  
} 

$instructionHandel = new InstructionHandler();
$instructionHandel->handle("up move 5 and down run 10 and left move 5");

$result = $instructionHandel->output();
echo($result);