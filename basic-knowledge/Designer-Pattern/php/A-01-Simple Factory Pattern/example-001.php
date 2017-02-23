<?php
	abstract class Operation {
		public $num1 = 0;
		public $num2 = 0;

		public function init($num1, $num2){
			$this->num1 = $num1;
			$this->num2 = $num2;
		}

		abstract public function getResult();
	}

	class OperationAdd extends Operation {
		public function getResult(){
			return $this->num1 + $this->num2;
		}
	}

	class OperationSub extends Operation {
		public function getResult(){
			return $this->num1 - $this->num2;
		}
	}

	class OperationMul extends Operation {
		public function getResult(){
			return $this->num1 * $this->num2;
		}
	}

	class OperationDiv extends Operation {
		public function getResult(){
			if($this->num2 === 0){
				return "除数不能为零";
			}

			return $this->num1 / $this->num2;
		}
	}

	class OperationFactory {
		public static $oper = null; // Operation 类型

		// 静态方法直接调用，不用实例化简单工厂类
		public static function createOperation($operate){
			switch ($operate) {
				case '+':
					self::$oper = new OperationAdd();
					break;
				case '-':
					self::$oper = new OperationSub();
					break;
				case '*':
					self::$oper = new OperationMul();
					break;
				case '/':
					self::$oper = new OperationDIv();
					break;
				
				default:
					# code...
					break;
			}

			return self::$oper;
		}
	}


	$oper = OperationFactory::createOperation('/');
	$oper->init(2, 1);

	var_dump($oper->getResult());