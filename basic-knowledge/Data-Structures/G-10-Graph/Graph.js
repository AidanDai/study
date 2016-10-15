/**
 * 无向图的邻接表实现
 */

class Graph {

	constructor(v){
		this.vertices = v;
		this.edges = 0;
		this.adj = [];
		this.marked = [];
		this.paths = [];

		for(let i=0; i<v; i+=1){
			this.adj[i] = [];
			this.marked[i] = false;
		}
	}

	addEdge(v, w){
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges += 1;
	}

	showGraph(){
		let str = "";
		for(let i=0; i<this.vertices; i+=1){
			str += i + "----->";
			for(let j=0; j<this.vertices; j+=1){
				if(this.adj[i][j] != undefined){
					j < this.vertices
						? str += this.adj[i][j] + " " 
						: str += this.adj[i][j];
				}
			}
			str += "\n";
		}
		console.log(str);
	}

	deepthFirstSearch(v){
		this.marked[v] = true;
		if(this.adj[v] != undefined){
			console.log("Visited vertex: " + v);
		}
		for(let w of this.adj[v]){
			if(!this.marked[w]){
				this.deepthFirstSearch(w);
			}
		}
	}

	breadthFirstSearch(s){
		let queue = [];
		this.marked[s] = true;
		queue.push(s);
		while(queue.length > 0){
			let v = queue.shift();
			if(this.adj[v] != undefined){
				console.log("Visited vertex: " + v);
			}

			for(let w of this.adj[v]){
				if(!this.marked[w]){
					this.marked[w] = true;
					queue.push(w);
				}
			}
		}
	}

	BFSMinPath(v){
		let source = 0,
			path = [];

		this.createPaths(0);
		if(!this.marked[v]){
			return undefined;
		}
		for(let i=v; i != source; i=this.paths[i]){
			path.push(i);
		}
		path.push(source);
		return path.reverse();
	}

	createPaths(s){
		let queue = [];
		this.marked[s] = true;
		queue.push(s);
		while(queue.length > 0){
			let v = queue.shift();
			for(let w of this.adj[v]){
				if(!this.marked[w]){
					this.marked[w] = true;
					this.paths[w] = v;
					queue.push(w);
				}
			}
		}
	}

}

let graph = new Graph(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 4);
graph.addEdge(0, 5);

graph.addEdge(1, 3);

graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.addEdge(5, 4);
graph.showGraph();

// graph.deepthFirstSearch(0);
// graph.breadthFirstSearch(0);
console.log(graph.BFSMinPath(4));