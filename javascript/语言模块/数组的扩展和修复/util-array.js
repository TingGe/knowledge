//数组功能扩展
if (typeof Array.isArray === "undefined") {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

Array.prototype.each = function(fn){
    fn = fn || Function.K;
     var a = [];
     var args = Array.prototype.slice.call(arguments, 1);
     for(var i = 0; i < this.length; i++){
         var res = fn.apply(this,[this[i],i].concat(args));
         if(res != null) a.push(res);
     }
     return a;
};
//数组是否包含指定元素
Array.prototype.contains = function(suArr){
    for(var i = 0; i < this.length; i ++){
        if(this[i] == suArr){
            return true;
        }
     }
     return false;
}
//不重复元素构成的数组
Array.prototype.uniquelize = function(){
     var ra = new Array();
     for(var i = 0; i < this.length; i ++){
        if(!ra.contains(this[i])){
            ra.push(this[i]);
        }
     }
     return ra;
};

//两个数组的补集
Array.complement = function(a, b){
     return Array.minus(Array.union(a, b),Array.intersect(a, b));
};
//两个数组的交集
Array.intersect = function(a, b){
     return a.uniquelize().each(function(o){return b.contains(o) ? o : null});
};
//两个数组的差集
Array.minus = function(a, b){
     return a.uniquelize().each(function(o){return b.contains(o) ? null : o});
};
//两个数组并集
Array.union = function(a, b){
     return a.concat(b).uniquelize();
};
