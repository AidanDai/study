/**
 * Node 节点
 */
class Node {

	constructor(element){
		this.element = element;
		this.next = null;
	}

}

/**
 * LinkedList 链表
 */
class LinkedList{

	constructor(){
		this.head = new Node("head");
		this.head.next = this.head;
	}

	find(value){
		let head = this.head;
		while(head.next && head.next.element != "head"){
			if(head.element === value){
				return head;
			}else{
				head = head.next;	
			}
		}

		return head;
	}

	findPrevious(element){
		let head = this.head;

		while(head.next && head.next.element != "head" && head.next.element != element){
			head = head.next;
		}

		return head;
	}

	insert(value, element){// 指定节点后插入新节点
		let before = this.find(value),
			iNode = new Node(element);

		if(before){
			iNode.next = before.next;
			before.next = iNode;

			return true;
		}

		return false;
	}

	remove(element){
		let before = this.findPrevious(element),
			rNode;

		if(before){
			rNode = before.next;
			before.next = before.next.next;
			return rNode;
		}

		return false;
	}

	display(){
		let head = this.head;

		while(head.next && head.next.element != "head"){
			console.log(head.next.element);
			head = head.next;
		};
	}
}

let linkedList = new LinkedList();

for(let i=0; i<10; i+=1){
	if(i===0){
		linkedList.insert("head", i);
	}else{
		let value = i - 1;
		linkedList.insert(value, i);
	}
}

linkedList.display();

console.log(linkedList.remove(3));

linkedList.display();