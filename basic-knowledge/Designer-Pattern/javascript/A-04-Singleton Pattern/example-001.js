/*var mask = function(){
    var mask;
    return function(){
        // mask = (function(){ console.log(1); return "div"; })() 单例检验
        return mask || ( mask = "div" );
    }
}();*/

var singleton = function( fn ){
    var result;
    return function(){
        return result || ( result = fn .apply( this, arguments ) );
    }
}
 
var mask = singleton(function(){
    return "div";
});

console.log(mask());
console.log(mask);
console.log(mask);
console.log(mask);
console.log(mask);