const COUNT = 26;

var objAlphabet = JSON.parse( // 字母表对象
	`{"${"abcdefghijklmnopqrstuvwxyz".split("").join('":' + null + ',"')}": null}`
);
var clone = function(obj){ // 对象深克隆
	return JSON.parse(JSON.stringify(obj));
};
var objTrieNode = { 	// 字典（前缀）树节点
	prefix: "", 		// 前缀
	count: 0, 			// 单词数量
	end: 0, 			// 是否是单词节点
	next: clone(objAlphabet)
};

class Trie {
	constructor(){
		var root = clone(objTrieNode);
    
		this.root = root;
	}

	insert(word){
		var next = this.root["next"];

		for(let i=0,len=word.length-1; i<=len; i+=1){
			let key = word[i],
				prefix = word.substring(0, i+1);

			if(next[key] === null){
				let node = clone(objTrieNode);

				node["prefix"] = prefix;

				if(i === len){
					node["end"] = 1;
				}

				next[key] = node;
			}

			if(next[key]["prefix"] === prefix){
				next[key]["count"] += 1;
			}
			
			next = next[key]["next"];
		}

		return this;
	}

	print(root){ // 前序遍历打印
		var next = root["next"];
		
		for(let name in next){
			if(next[name] !== null && "prefix" in next[name] && "next" in next[name]){
				if(next[name]["end"]){
					console.log(next[name]["prefix"]);
				}
				this.print(next[name]);
			}
		}
	}

	printPrefix(prefix){ // 打印指定前缀单词
		var node = this.findPrefix(prefix);

		this.print(node);
	}

	findPrefix(prefix){ // 寻找指定节点
		var keys = prefix.split(""),
			node = this.root;

		for(let key of keys){
			node = node["next"][key];
		}

		return node;
	}
}

var trie = new Trie();
var str = `Deploys are hard and it can be frustrating to do them. Many bugs manifest themselves during deploys, especially when there are a large number of code changes. Now what if a deploy also goes out to millions of people at once? Here’s the story of how my team makes a deploy of that scale safely and with ease.

Publishers on the web use a single JavaScript file, widgets.js, to embed Twitter content on their website. Embedded Tweets, embedded timelines, and Tweet buttons are powered by the same JavaScript file, making it easy for web publishers to integrate widgets into their websites. We update widgets.js weekly, deploying bug fixes and adding features without requiring our publishers to do any work to receive the updates.

But to ensure things stay simple for our customers, we need to take on some of the complexity. Specifically, we need to deploy a single, unversioned, well-known, static asset which publishers trust to run within their page. This code is executed roughly 300,000 times a second by over a billion visitors every month. We know this is a big responsibility for us and that’s why we recently invested in upgrading the widgets.js deploy process to catch mistakes early, and avoid negative customer impact.`;

var arrWords = str.replace(/[\.\,\?\’\n\-0-9]/g, "").toLocaleLowerCase().split(" ");

for(let word of arrWords){
	trie.insert(word);
}

// console.log(trie);
trie.printPrefix("a");