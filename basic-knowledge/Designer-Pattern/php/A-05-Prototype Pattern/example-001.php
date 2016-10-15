<?php
    // 软件工程公司入职员工管理程序
    abstract class Employee {

        protected $id;
        protected $name;
        protected $department;
        protected $card;

        // 雇员部门
        abstract function setDepartment();
        public function getDepartment(){
            return $this->department;
        }

        // 雇员 ID
        public function setId($id){
            $this->id = $id;
        }

        public function getId(){
            return $this->id;
        }

        // 雇员名字
        public function setName($name){
            $this->name = $name;
        }
        public function getName(){
            return $this->name;
        }
        
        // 雇员工作证
        public function setCard($card){
            $this->card = $card;
        }
        public function getCard(){
            return $this->card;
        }

        abstract function __clone();

    }

    // 市场营销部员工
    class Marketer extends Employee {

        public function __construct(){
            $this->setDepartment();
        }

        public function setDepartment(){
            $this->department = "Marketing Department";
        }

        public function __clone() {}
    }

    // 软件开发部员工
    class SoftwareDeveloper extends Employee {

        public function __construct(){
            $this->setDepartment();
        }

        public function setDepartment(){
            $this->department = "Sofeware Develope Department";
        }

        public function __clone() {}
    }

    class Client {

        private $marketer;
        private $softwareDeveloper;

        public function __construct(){

            $this->createPrototype();

            // 市场部员工
            $TessSmith = clone $this->marketer;
            $this->setEmployee($TessSmith, 101, "Tess Smith", "Marketing Department Card 001");
          
            $JacobJones = clone $this->marketer;
            $this->setEmployee($JacobJones, 102, "Jacob Jones", "Marketing Department Card 002");

            // 软件开发部员工
            $RickyRodriguez = clone $this->softwareDeveloper;
            $this->setEmployee($RickyRodriguez, 201, "Ricky Rodriguez", "Sofeware Develope Department Card 001");
            
            $OlivaiaPerez = clone $this->softwareDeveloper;
            $this->setEmployee($OlivaiaPerez, 202, "Olivaia Perez", "Sofeware Develope Department Card 002");
            
            $JohnJacson = clone $this->softwareDeveloper;
            $this->setEmployee($JohnJacson, 203, "John Jacson", "Sofeware Develope Department Card 002");


            $this->showEmployee($TessSmith);
            $this->showEmployee($JacobJones);

            $this->showEmployee($RickyRodriguez);
            $this->showEmployee($OlivaiaPerez);
            $this->showEmployee($JohnJacson);

        }

        private function createPrototype(){
            $this->marketer = new Marketer();
            $this->softwareDeveloper = new SoftwareDeveloper();
        }

        private function showEmployee(Employee $employee){

            echo $employee->getId().'<br/>';
            echo $employee->getName().'<br/>';
            echo $employee->getDepartment().'<br/>';
            echo $employee->getCard().'<hr/>';

        }

        private function setEmployee(Employee $employee, $id, $name, $card){
            $employee->setId($id);
            $employee->setName($name);
            $employee->setCard($card);
        }

    }

    new Client();