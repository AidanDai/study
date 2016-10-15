<?php
// 采购单：请求类  
class PurchaseRequest {  
    private $amount;  // 采购金额  
    private $number;  // 采购单编号  
    private $purpose;  // 采购目的  
      
    public function __construct($amount, $number, $purpose) {  
       $this->amount = $amount;  
       $this->number = $number;  
       $this->purpose = $purpose;  
    }  
      
    public function setAmount($amount) {  
       $this->amount = $amount;  
    }  
      
    public function getAmount() {  
        return $this->amount;  
    }  
      
    public function setNumber($number) {  
       $this->number = $number;  
    }  
      
    public function getNumber() {  
        return $this->number;  
    }  
      
    public function setPurpose($purpose) {  
       $this->purpose = $purpose;  
    }  
      
    public function getPurpose() {  
        return $this->purpose;  
    }  
}  

// 审批者类：抽象处理者  
abstract class Approver {  
    protected $successor = null; // 定义后继对象  
    protected $name; // 审批者姓名  
      
    public function __construct($name) {  
        $this->name = $name;  
    }  
  
    // 设置后继者  
    public function setSuccessor($successor) {   
        $this->successor = $successor;  
    }  
  
    // 抽象请求处理方法  
    public abstract function processRequest($purchaseRequest);  
}  

// 主任类：具体处理者  
class Director extends Approver {  
    public function __construct($name) {  
        parent::__construct($name);  
    }  
      
    // 具体请求处理方法  
    public function  processRequest($purchaseRequest) {  
        if ($purchaseRequest->getAmount() < 50000) {  
            echo("主任" . $this->name . "审批采购单：" . $purchaseRequest->getNumber() . "，金额：" . $purchaseRequest->getAmount() . "元，采购目的：" . $purchaseRequest->getPurpose() . "<br/>");  // 处理请求  
        } else {  
            $this->successor->processRequest($purchaseRequest);  // 转发请求  
        }     
    }  
}  

// 副董事长类：具体处理者  
class VicePresident extends Approver {  
    public function __construct($name) {  
        parent::__construct($name);  
    }  
      
    // 具体请求处理方法  
    public function  processRequest($purchaseRequest) {  
        if ($purchaseRequest->getAmount() < 100000) {  
            echo("副董事长" . $this->name . "审批采购单：" . $purchaseRequest->getNumber() . "，金额：" . $purchaseRequest->getAmount() . "元，采购目的：" . $purchaseRequest->getPurpose() . "<br/>");  // 处理请求  
        } else {  
            $this->successor->processRequest($purchaseRequest);  // 转发请求  
        }     
    }  
}  
  
// 董事长类：具体处理者  
class President extends Approver {  
    public function __construct($name) {  
        parent::__construct($name);  
    }  
      
    // 具体请求处理方法  
    public function  processRequest($purchaseRequest) {  
        if ($purchaseRequest->getAmount() < 500000) {  
            echo("董事长" . $this->name . "审批采购单：" . $purchaseRequest->getNumber() . "，金额：" . $purchaseRequest->getAmount() . "元，采购目的：" . $purchaseRequest->getPurpose() . "<br/>");  // 处理请求  
        } else {  
            $this->successor->processRequest($purchaseRequest);  // 转发请求  
        }     
    }  
}  
  
// 董事会类：具体处理者  
class Congress extends Approver {  
    public function __construct($name) {  
        parent::__construct($name);  
    }  
      
    // 具体请求处理方法  
    public function  processRequest($purchaseRequest) {  echo("召开董事会审批采购单：" . $purchaseRequest->getNumber() . "，金额：" . $purchaseRequest->getAmount() . "元，采购目的：" . $purchaseRequest->getPurpose() .  "<br/>");  // 处理请求  
    }  
}  

function client() {  
    $wjzhang = new Director("张无忌");  
    $gyang = new VicePresident("杨过");  
    $jguo = new President("郭靖");  
    $meeting = new Congress("董事会");  
  
    // 创建职责链  
    $wjzhang->setSuccessor($gyang);  
    $gyang->setSuccessor($jguo);  
    $jguo->setSuccessor($meeting);  
    
    // 创建采购单  
    $pr1 = new PurchaseRequest(45000, 10001, "购买倚天剑");  
    $pr2 = new PurchaseRequest(60000, 10002, "购买《葵花宝典》");  
    $pr3 = new PurchaseRequest(160000, 10003, "购买《金刚经》");  
    $pr4 = new PurchaseRequest(800000, 10004, "购买桃花岛");  

    $wjzhang->processRequest($pr1); 
    $wjzhang->processRequest($pr2);  
    $wjzhang->processRequest($pr3);  
    $wjzhang->processRequest($pr4);  
}  

client();