<?php 
	//Actor角色类：复杂产品，考虑到代码的可读性，只列出部分成员属性，且成员属性的类型均为String，真实情况下，有些成员属性的类型需自定义
	class Actor {

		private  $type; 		//角色类型
		private  $sex; 			//性别
		private  $face; 		//脸型
		private  $costume; 		//服装
		private  $hairstyle; 	//发型

		public function setType($type) {
		     $this->type  = $type;
		}

		public function setSex($sex) {
		     $this->sex  = $sex;
		}

		public function setFace($face) {
		     $this->face = $face;
		}

		public function setCostume($costume) {
		      $this->costume = $costume;
		}

		public function setHairstyle($hairstyle) {
		      $this->hairstyle  = $hairstyle;
		}

		public function getType() {
		    return $this->type;
		}

		public function getSex() {
		    return $this->sex;
		}

		public  function getFace() {
		    return $this->face;
		}

		public function getCostume() {
		    return $this->costume;
		}

		public function getHairstyle() {
		    return $this->hairstyle;
		}

	}
 
	// 角色建造器：抽象建造者
	abstract class ActorBuilder {

		protected $actor = null;

		public function __construct(){ // 抽象类子类方法的访问控制必须和父类中一样（或者更为宽松）
			$this->actor = new Actor();
		}

		public abstract function buildType();
		public abstract function buildSex();
		public abstract function buildFace();
		public abstract function buildCostume();
		public abstract function buildHairstyle();
	 
	    // 工厂方法，返回一个完整的游戏角色对象
	    public function createActor(){
	        return $this->actor;
	    }
	}
 
	//英雄角色建造器：具体建造者
	class HeroBuilder extends ActorBuilder {

        public  function buildType(){
            $this->actor->setType("英雄");
        }

        public  function buildSex(){
            $this->actor->setSex("男");
        }

        public  function buildFace(){
            $this->actor->setFace("英俊");
        }

        public  function buildCostume(){
            $this->actor->setCostume("盔甲");
        }

       	public function buildHairstyle(){
            $this->actor->setHairstyle("飘逸");
       	}    
	}
 
	// 天使角色建造器：具体建造者
	class AngelBuilder extends ActorBuilder {

        public function buildType(){
            $this->actor->setType("天使");
        }

        public function buildSex(){
            $this->actor->setSex("女");
        }

        public function buildFace(){
            $this->actor->setFace("漂亮");
        }

        public function buildCostume(){
            $this->actor->setCostume("白裙");
        }

        public function buildHairstyle(){
            $this->actor->setHairstyle("披肩长发");
        }

	}
 
	// 恶魔角色建造器：具体建造者
	class DevilBuilder extends ActorBuilder {

        public function buildType(){
            $this->actor->setType("恶魔");
        }

        public function buildSex(){
            $this->actor->setSex("妖");
        }

        public function buildFace(){
            $this->actor->setFace("丑陋");
        }

        public function buildCostume(){
            $this->actor->setCostume("黑衣");
        }

        public function buildHairstyle(){
            $this->actor->setHairstyle("光头");
        }  

	}

	class ActorController {

		private $actorBuilder = null;

    	// 逐步构建复杂产品对象
       	public function __construct(ActorBuilder $actorBuilder){

       		$this->actorBuilder = $actorBuilder;

            $this->actorBuilder->buildType();
            $this->actorBuilder->buildSex();
            $this->actorBuilder->buildFace();
            $this->actorBuilder->buildCostume();
            $this->actorBuilder->buildHairstyle();

        }

        public function getActor(){

        	$actor = $this->actorBuilder->createActor();
            return $actor;

        }

	}

	// function dump($vars, $label = '', $return = false) {
	//     if (ini_get('html_errors')) {
	//         $content = "<pre>\n";
	//         if ($label != '') {
	//             $content .= "<strong>{$label} :</strong>\n";
	//         }
	//         $content .= htmlspecialchars(print_r($vars, true));
	//         $content .= "\n</pre>\n";
	//     } else {
	//         $content = $label . " :\n" . print_r($vars, true);
	//     }
	//     if ($return) { return $content; }
	//     echo $content;
	//     return null;
	// }

	$heroBuilder = new HeroBuilder();
	$actorController = new ActorController($heroBuilder);
	$actor = $actorController->getActor();

	// $class = new ReflectionClass($actor);
	// $methods = $class->getMethods();
	// dump($methods);
	
	echo $actor->getType()."<br/>";
	echo $actor->getSex()."<br/>";
	echo $actor->getFace()."<br/>";
	echo $actor->getCostume()."<br/>";
	echo $actor->getHairstyle()."<hr/>";