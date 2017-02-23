/**
 * 01 转换法求组合数
 * @param  {string} str    第一个组合数字符串，取前 n 个元素（五选三：11100）
 * @param  {Array}  cases  组合情况的容器
 * @param  {string} output 最后一个组合数，取后 n 个元素（五选三：00111）；递归出口
 * @return {array}  cases  所有组合情况的字符串表示
 */
function combination(str = 11100, cases = [], output = str.split("").reverse().join("")){
	cases.push(str);
	if(str === output){
		return cases;
	}
	var i = str.indexOf("10");
	condition = str.replace(/10/, "01");

	var condition, 
		pre = condition.substring(0, i),
		las = condition.substring(i);

	if(pre.indexOf("01") > -1){
		let one = pre.split("").filter((v) => Number(v)),
			len = pre.length - one.length;
		while(len){
			one.push(0);
			len -= 1;
		}
		condition = one.join("") + las;
	}
	return combination(condition, cases, output);
}