(function animation(window, undefined){

	const firstLetterToUpperCase = (words, bool) => {
		return words.replace(/^(\w{1})/i, (match) => bool ? match.toLocaleUpperCase() : match)
	};
	var vendors = ["webkit", "moz", "o", "ms", ""];
	vendors.forEach((v) => {
		window.cancelAnimationFrame = window[v + firstLetterToUpperCase("requestAnimationFrame", v)];
		window.cancelAnimationFrame = window[v + firstLetterToUpperCase("cancelAnimationFrame", v)]
			|| window[v + firstLetterToUpperCase("cancelRequestAnimationFrame", v)];
	});

	if(typeof window.requestAnimationFrame !== "function"
		|| typeof window.cancelAnimationFrame !== "function"){
		/**
		 * 用 setTimeout 模拟 requestAnimationFrame
		 * （简单防止 setTimeout 掉帧，无法避免异步任务的优先级低于同步任务）
		 * @param  {Function} callback 动画函数
		 * @return {Number}            异步任务 id
		 */
		window.requestAnimationFrame = function(callback){
			var curTime = new Date().getTime(),
				timmer = 1000/60,
				// 动态获取 setTimeout 调用时间间隔
				timeToCall = Math.max(0, timmer - (curTime - lastTime)),
				nextTime = curTime + timeToCall;
				id = window.setTimeout(() => {
					callback(nextTime)
				}, timeToCall);

				return id;
		};
		window.cancelAnimationFrame = function(id){
			window.clearTimeout(id);
		};
	}
})(window, undefined);