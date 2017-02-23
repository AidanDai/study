<?php
  class FileReader {  
    public function read(){
      echo("读取文件，获取明文："."<br>");
    }
  }

  class CipherMachine {
    public function encrypt(){
      echo("数据加密，将明文转换为密文："."<br>");
    }
  }

  class FileWriter {
    public function write(){
      echo("保存密文，写入文件。"."<br>");
    }
  }

  class EncryptFacade {  
    // 维持对其他对象的引用  
    private $reader = null;  
    private $cipher = null;  
    private $writer = null;  

    public function __construct() {  
      $this->reader = new FileReader();  
      $this->cipher = new CipherMachine();  
      $this->writer = new FileWriter();  
    }  

    // 调用其他对象的业务方法  
    public function FileEncrypt() {  
      $this->reader->read();  
      $this->cipher->encrypt();  
      $this->writer->Write();  
    }  
  } 

  $facde = new EncryptFacade();
  $facde->FileEncrypt(); 