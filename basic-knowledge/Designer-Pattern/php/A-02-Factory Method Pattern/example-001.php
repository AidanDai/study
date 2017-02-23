<?php
	// 日志记录器接口：抽象产品 
	interface Logger {
		public function writeLog();
	}

	// 数据库日志记录器：具体产品  
	class DatabaseLogger implements Logger {
		public function writelog(){
			echo("数据库日志记录");
		}
	}

	// 文件日志记录器：具体产品 
	class FileLogger implements Logger {
		public function writeLog(){
			echo("文件日志记录器");
		}
	}

	// 日志记录器工厂接口：抽象工厂  
	interface LoggerFactory {  
	    public function createLogger();  
	} 

	//	数据库日志记录器工厂类：具体工厂  
	class DatabaseLoggerFactory implements LoggerFactory {  
	    public function createLogger() {   
	        $logger = new DatabaseLogger();   
	        return $logger;  
	    }     
	}  
	  
	//	文件日志记录器工厂类：具体工厂  
	class FileLoggerFactory implements LoggerFactory {  
	    public function createLogger() { 
	        $logger = new FileLogger(); 
	        return $logger;  
	    }     
	}

	$factory = new FileLoggerFactory(); // 可引入配置文件实现
	$logger = $factory->createLogger();
	$logger->writeLog();
