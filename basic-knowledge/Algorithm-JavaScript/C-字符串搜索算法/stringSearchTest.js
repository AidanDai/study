/**
 * 字符串搜索算法-朴素算法（Brute-Froce）测试
 * @param  {Number} n           测试次数
 * @param  {Array}  targetRange 目标串长度范围
 */
function stringSearchTest(func, n = 10, targetRange = [20, 40]){
	var stringFactory = function(range){
			var stringRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
				randomLength = function(range){
					return Math.floor(Math.random() * (range[1] + 1)) + range[0];
				};

			return Array.from({length: randomLength(range)}, v => stringRange[randomIndex(stringRange)]).join("");
		},
		randomIndex = function(string){
			var len = string.length;
			return Math.floor(Math.random() * len);
		};

	for(let i=0; i<n; i+=1){
		var target = stringFactory(targetRange),
			start = randomIndex(target),
			end = randomIndex(target),
			pattern = target.substring(start, end);

		var ans = func(target, pattern);
		if(Array.isArray(ans)){
			console.log(`${i}-----${target.substring(...ans) === pattern}: "${target.substring(...ans)}" === "${pattern}"`);
		}else{
			console.log(`${i}-----false: "${target}"(targte) "${pattern}"(pattern)`);
		}
	}
}

module.exports = stringSearchTest;