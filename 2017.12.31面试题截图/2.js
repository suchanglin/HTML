var a={name:'A',
fn:function () {
  console.log(this.name)
}}
a.fn()

a.fn().call({name:'B'})
var fn1 = a.fn

fn1()


function Foo (name) {
  this.name = name
}

var f = new Foo('zhangsan');

//采用bind时，fn2必须是表达式，而不是声明式
var fn2 = function (name,age) {
  alert(name)
  console.log(this)
}.bind({y:200})

fn2('zhangsan',20)

this  //{y:200}


console.log(1)
setTimeout(function () {
  console.log(2)
}, 0)
console.log(3)
setTimeout(function () {
  console.log(4)
}, 1000)

console.log(5)

 Date.now()

 var dt = Date()

 dt.getTime()
 dt.getFullYear()
 dt.getMonth()
 dt.getDate()
 dt.getHours()
 dt.getMinutes()
 dt.getSeconds()


 Math.random()  //(0~1) 随时改变，清除缓存用

 //数组：
arr.forEach( function(element, index) {
  // statements
});


arr2.map(callbackfn: Function, thisArg?: any)

arr2.filter(function(item,index) {
  return something;
});


OBJ={x:100,y:20,z:300}
var key;
if (key in OBJ) {}

Date.now(  )


function forEach (obj,fn) {
  var key;
  if (obj instanceof Array) {
    obj.forEach( function(item, index) {
      fn(index,item)
    });
  }else {
    for(key in obj){
      fn(key,obj[key])
    }
  }
}

var arr = [1,2,3]
forEach( function(index, item) {
  console.log(index,item);
});


var obj = {x:100,y:200}
forEach( function(key, value) {
  console.log(key,value)
});
