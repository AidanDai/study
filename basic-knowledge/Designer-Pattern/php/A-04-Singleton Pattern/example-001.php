<?php
    // 负载均衡器LoadBalancer：单例类，真实环境下该类将非常复杂，包括大量初始化的工作和业务方法，考虑到代码的可读性和易理解性，只列出部分与模式相关的核心代码  
    class LoadBalancer {  

        // 私有静态成员变量，存储唯一实例  
        private static $instance = null;  
        // 服务器集合  
        private $servers = null;  
          
        // 私有构造函数  
        private function LoadBalancer() {  
            $this->servers = array();  
        }  
          
        // 公有静态成员方法，返回唯一实例  
        public static function getLoadBalancer() {  
            if (self::$instance === null) {  
                self::$instance = new LoadBalancer();  
            }  
            return self::$instance;  
        }  
          
        // 增加服务器  
        public function addServer($server) {  
            array_push($this->servers, $server);

            return  count($this->servers);
        }  
          
        // 删除服务器  
        public function removeServer($server) {
            $key = array_search($server, $this->servers);
            
            if($key >= 0){
                return array_splice($this->servers, $key, 1);
            }
            
            return false;  
        } 

        // 展示所有服务器
        public function showServers(){
            return $this->servers;
        }

        // 随机获取服务器  
        public function getServer() {  
            $key = rand(0, count($this->servers) - 1);  

            return $this->servers[$key];  
        } 

    }  


    $loadBalancer = LoadBalancer::getLoadBalancer();

    for($i=0; $i<10; $i+=1){
        $loadBalancer->addServer("server".$i);
    }

    var_dump($loadBalancer->showServers());
    var_dump($loadBalancer->removeServer("server6"));
    var_dump($loadBalancer->showServers());

    echo("<br/>");
    echo("分发请求至服务器：".$loadBalancer->getServer());
    echo("<br/>");
