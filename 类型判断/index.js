var typeStr = typeof undefined;
console.log(typeStr);
typeStr1 = typeof true;
console.log(typeStr1);

function a(){
    this._value = a;
}
a.prototype = {
    _getValue:function(){
        return this._value;
    }
}
function b(){}


let newA = new a();
//支持验证祖先类型
console.log(newA instanceof a);
console.log(Object.getPrototypeOf(newA));
//getPrototypeOf返回指定对象的原型，propertype的属性值