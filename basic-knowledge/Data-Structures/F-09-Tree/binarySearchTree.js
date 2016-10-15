class Node {

	constructor(left, data, right) {
		this.left = left;
		this.data = data;
		this.right = right;
	}

	show(){
		return this.data;
	}

}

class BST {

	constructor() {
		this.root = null,
		this.showDataStore = [];
	}

	/**
	 * 死循环实现二叉查找树插入
	 * @param  {[type]} data    待插入数据
	 * @return {[type]}         [description]
	 */
	insert(data){
		let node = new Node(null, data, null);
		if(this.root === null){
			this.root = node;
		}else{
			let current = this.root,
				parent;

			while(1){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current === null){
						parent.left = node;
						break;
					}
				}else{
					current = current.right;
					if(current === null){
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	/**
	 * 递归实现二叉查找树插入
	 * @param  {[type]} data    待插入数据
	 * @param  {[type]} current 二叉查找树根节点
	 * @return {[type]}         [description]
	 */
	/*insert(data, current){
		let node = new Node(null, data, null);
		if(this.root === null){
			this.root = node;
		}else{
			let parent = current;
			if(data < current.data){
				current = current.left;
				if(current === null){
					parent.left = node;
					return;
				}
				this.insert(data, current);
			}else{
				current = current.right;
				if(current === null){
					parent.right = node;
					return;
				}
				this.insert(data, current);
			}
		}
	}*/

	inOrder(node){
		if(node != null){
			this.inOrder(node.left);
			this.showDataStore.push(node.show());
			this.inOrder(node.right);
		}
	}

	inOrderShow(node){
		this.inOrder(node);
		console.log(this.showDataStore);
		this.showDataStore = [];
	}

	preOrder(node){
		if(node != null){
			this.showDataStore.push(node.show());
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}

	preOrderShow(node){
		this.preOrder(node);
		console.log(this.showDataStore.join(" "));
		this.showDataStore = [];
	}

	postOrder(node){
		if(node != null){
			this.preOrder(node.left);
			this.preOrder(node.right);
			this.showDataStore.push(node.show());
		}
	}

	postOrderShow(node){
		this.postOrder(node);
		console.log(this.showDataStore.join(" "));
		this.showDataStore = [];
	}

	getBSTMin(){
		let current = this.root;
		while(current.left != null){
			current = current.left;
		}
		return current.data;
	}

	getBSTMax(){
		let current = this.root;
		while(current.right != null){
			current = current.right;
		}
		return current.data;
	}

	getNodeMin(node){
		while(node.left != null){
			node = node.left;
		}
		return node;
	}

	find(data){
		let current = this.root;
		while(current != null){
			if(current.data === data){
				return current;
			}else if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		return null;
	}

	remove(data){
		return this.removeNode(this.root, data);
	}

	removeNode(node, data){
		if(node === null){
			return false;
		}

		if(!this.find(data)){
			return false;
		}

		if(node.data === data){// 找到要删除的节点
			if(node.left && node.right){// 被删除节点有左右两个子节点
				// 在右子树中找到最小元素并删除节点
				let tempNode = this.getNodeMin(node.right);
				this.removeNode(node.right, tempNode.data);

				// 最小元素填充删除节点
				node.data = tempNode.data;
				return true;
			}else if(node.left === null && node.right === null){// 被删除节点无子节点
				let parent = this.getParent(data);
				if(data < parent.data){// 左子树
					parent.left = null;
				}else{// 右子树
					parent.right = null;
				}
				return true;
			}else{// 被删除节点有一个子节点
				if(node.left === null){
					let parent = this.getParent(data);
					parent.right = node.right;
					return true;
				}else {
					let parent = this.getParent(data);
					parent.left = node.left;
					return true;
				}
			}
		}else if(data < node.data){// 左子树递归删除
			this.removeNode(node.left, data);
		}else{// 右子树递归删除
			this.removeNode(node.right, data);
		}
	}

	getParent(data){
		let current = this.root;
		while(current.left != null || current.right != null){
			let condation1 = current.left ? (current.left.data === data) : false,
			    condation2 = current.right ? (current.right.data === data) : false;

			if(condation1 || condation2){
				return current;
			}else if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		return null;
	}

}

let bst = new BST()

/*for(let i=0; i<10; i+=1){
	let num = Math.floor(Math.random() * (100 + 1));
	bst.insert(num);
}*/

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(21);
bst.insert(1);
bst.insert(18);
bst.insert(22);
bst.insert(100);
let bstRoot = bst.root;

/*for(let i=0; i<10; i+=1){
	let num = Math.floor(Math.random() * (100 + 1)),
	bst.insert(num, bstRoot);
}*/

bst.inOrderShow(bstRoot);
console.log("-----------------------------------------------------------");
/*bst.preOrder(bstRoot);
console.log("---------------------");
bst.postOrder(bstRoot);
console.log("---------------------");
console.log(bst.getMin(), bst.getMax());*/
bst.remove(23);
bst.inOrderShow(bst.root);