/**
 * Node 节点
 */
class Node {

	constructor(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}

}

/**
 * doublyLinkedList 链表
 */
class DoublyLinkedList{

	constructor(){
		this.head = new Node("head");
	}

	find(value){
		let head = this.head;
		do{
			if(head.element === value){
				return head;
			}else{
				head = head.next;	
			}
		}while(head.next);

		return head;
	}

	findLast(){
		let head = this.head;

		while(head.next != null){
			head = head.next;
		}

		return head;
	}

	insert(value, element){// 指定节点后插入新节点（静态头结点）
		let before = this.find(value),
			lasted = this.findLast(),
			iNode = new Node(element),
			temp;

		if(before){
			if(before.element === lasted.element){// push 节点
				before.next = iNode;
				iNode.prev = before;
			}else{ // 中间插入节点
				temp = before.next;

				iNode.next = temp;
				before.next = iNode;

				temp.prev = iNode;
				iNode.prev = before;
			}

			return true;
		}

		return false;
	}

	remove(element){
		let rNode = this.find(element);

		if(rNode){
			rNode.prev.next = rNode.next;
			rNode.next.prev = rNode.prev;
			return rNode;
		}

		return false;
	}

	display(){
		let head = this.head;

		do{// 输出节点超前 head
			console.log(head.next.element);
			head = head.next;
		}while(head.next);
	}

	displayReverse(){
		let lasted = this.findLast();

		do{
			console.log(lasted.element);
			lasted = lasted.prev;
		}while(lasted.prev);
	}
}

let doublyLinkedList = new DoublyLinkedList();

for(let i=0; i<10; i+=1){
	if(i===0){
		doublyLinkedList.insert("head", i);
	}else{
		let value = i - 1;
		doublyLinkedList.insert(value, i);
	}
}

doublyLinkedList.display();

console.log(doublyLinkedList.remove(3));

doublyLinkedList.displayReverse();

doublyLinkedList.insert(5, 10);

doublyLinkedList.displayReverse();
