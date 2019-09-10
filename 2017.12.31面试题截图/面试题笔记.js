//继承
//借助构造函数实现继承。

fucntion Parent(){

this.name = 'parent1';}

function Child(){
Parent.call(this);   //apply
this.type = 'child1';
}
//缺点：不能继承原型对象的方法，如添加
Parent.prototype.say = function(){};  ///在Child中无法继承。



//借助原型链继承
function Parent2(){ this.name = 'parent2';}
function Child2(){ this.type = 'child2';}

Child2.prototype = new Parent();

//缺点：假如在Parent2中再添加this.play = [1,2,3]

s1 = new Child2();s1.play = [1,2,3];   //一切没问题
s2 = new Child2();s2.play = [1,2,3];

//但是 s1.play.push(4) 后，

s1.play = [1,2,3,4];   //s1和s2都一样，修改谁另一个都发生变化，显然是不能接受的
s2.play = [1,2,3,4];

//组合方式继承3

function Parent3(){this.name = 'parent3';this.play = [1,2,3];}

function Child3(){ Parent3.call(this);this.type = 'child3';}

Child.prototype = Parent3.prototype;

var s3 = new Child3();
var s4 = new Child3();
s3.push(5);

s3.play //[1,2,3,5]
s4.play  //[1,2,3]


//缺点：s3.constructor = Parent3,而不是期望的Child3

//解决方案：
Child3.prototype =Object.create( Parent3.prototype);  //中间桥梁
Child3.prototype.constructor = Child3;




🙃🙃🙃🙃
