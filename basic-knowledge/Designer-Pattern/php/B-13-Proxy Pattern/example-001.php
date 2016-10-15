<?php

// AccessValidator：身份验证类，业务类，它提供方法Validate()来实现身份验证。
class AccessValidator {  
    // 模拟实现登录验证  
    public function Validate($id) {  
        if ($id) {  
            echo("登录成功！");  
            return true;  
        }else {  
            echo("登录失败！");  
            return false;  
        }  
    }  
}  

// Logger：日志记录类，业务类，它提供方法Log()来保存日志。
class Logger {  
    // 模拟实现日志记录  
    public function Log($id) {  
        echo("更新数据库，".$id."查询次数加1！");  
    }  
}  

// Searcher：抽象查询类，充当抽象主题角色，它声明了DoSearch()方法。
interface Searcher  {  
    public function DoSearch($id, $key);  
}  

// RealSearcher：具体查询类，充当真实主题角色，它实现查询功能，提供方法DoSearch()来查询信息。
class RealSearcher implements Searcher  {  
    // 模拟查询商务信息  
    public function DoSearch($id, $key) {  
       echo($id."查询".$key."有关的商务信息！");  
        return "返回具体内容";  
    }  
}  

// ProxySearcher：代理查询类，充当代理主题角色，它是查询代理，维持了对RealSearcher对象、AccessValidator对象和Logger对象的引用。
class ProxySearcher implements Searcher {  
    private $searcher = null; // 维持一个对真实主题的引用  
    private $validator = null;  
    private $logger = null;  
    
    public function __construct(){
        $this->searcher = new RealSearcher();
    }
    public function DoSearch($id, $key)  {  
        // 如果身份验证成功，则执行查询  
        if ($this->Validate($id)){  
            $result = $this->searcher->DoSearch($id, $key); // 调用真实主题对象的查询方法  
            $this->Log($id); // 记录查询日志  
            return $result; // 返回查询结果  
        }else{  
            return null;  
        }  
    }  

    // 创建访问验证对象并调用其Validate()方法实现身份验证  
    public function Validate($id){  
        $this->validator = new AccessValidator();  
        return $this->validator->Validate($id);  
    }  

    // 创建日志记录对象并调用其Log()方法实现日志记录  
    public function Log($id){  
        $this->logger = new Logger();  
        $this->logger->Log($id);  
    }  
}  


$proxySearcher = new ProxySearcher();
$proxySearcher->DoSearch(1, "hotel");