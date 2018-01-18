// JavaScript Document
function getlength(str){
		return str.replace(/[^\x00-xff]/g,'ss').length;
	}
function ifStr(str){
	var s=0;
	for(i=1;i<str.length;i++){
	if(str[0]==str[i])
	{s++;}
		}
	return s+1;
	}

window.onload = function(){
	var ainput = document.getElementsByTagName('input');
	var uName = ainput[0];
	var pName = ainput[1];
	var pName1 = ainput[2];
	var aP = document.getElementsByTagName('p');
	var uP = aP[0];
	var pP = aP[1];
	var P1 = aP[2];
	var aE = document.getElementsByTagName('em');
	var E1 = aE[0];
	var E2 = aE[1];
	var E3 = aE[2];
	var count = document.getElementById('count');
	var name_length = 0;
	
	//登录
	var re = /[^\w\u4e00-\u9fa5]/g;
	var rs = /[^\d]/g;
	var rz = /[^a-zA-Z]/g;
	
	uName.onfocus = function(){
		uP.style.display = 'block';
		uP.innerHTML = "5-25个字符，一个汉字为两个字符，推荐使用中文会员名";
		}
	uName.onkeyup = function(){
			count.style.visibility = 'visible';
			name_length = getlength(this.value);
			count.innerHTML = name_length+'个字符';
			if(name_length == 0){
				count.style.visibility = 'hidden';
			}
		}
	uName.onblur = function(){
		//含有非法字符
		var re = /[^\w\u4e00-\u9fa5]/g;
		//不能为空
		if(re.test(this.value)){
			uP.innerHTML = "<i class='err'></i>含有非法字符！";
			}
		//长度超过25个字符
		else if(this.value.length>25){
			uP.innerHTML = "<i class='err'></i>字符太长！";
			}
		
		//长度少于6个字符
		else if(this.value.length<6&&this.value.length>0){
			uP.innerHTML = "<i class='err'></i>字符太短！";
			}
		else if(this.value.length==0){
			uP.innerHTML = "<i class='err'></i>不能为空！";
			}
		else{
			uP.innerHTML = "<i class='ati'></i>验证通过";
			}		
		//OK
		}
		
	//密码
	pName.onfocus = function(){
		pP.style.display = 'block';
		pP.innerHTML = "6-16个字符，请使用字母加数字或符号的组合密码";
		for(i=0;i<aE.length;i++){
		aE[i].style.visibility = "visible";	
			}
		}
	pName.onkeyup = function(){
		if(this.value.length>5){
			E2.className = "active";
			pName1.removeAttribute("disabled");
			P1.style.display = "block";
		}
		else{
			E2.className ="";
			P1.style.display = "none";
			pName1.setAttribute("disabled","");
			pName1.value = ""; 
		}
		if(this.value.length>=16){
			E3.className = "active";
		}
		else{
			E3.className ="";
		}
		
	}
	
	pName.onblur = function(){
		//长度小于6
		if(this.value.length<6){
			pP.innerHTML = "<i class='err'></i>密码太短！";
			}
		//长度大于16
		else if(this.value.length>16){
			pP.innerHTML = "<i class='err'></i>密码太长！";
			}
		else if(this.value.length==0){
			pP.innerHTML = "<i class='err'></i>密码不能为空！";
			for(i=0;i<aE.length;i++){
		aE[i].style.visibility = "hidden";	
			}
			
			}
		//不能全为数字
		else if(!rs.test(this.value)){
			pP.innerHTML = "<i class='err'></i>不能全为数字！";
			}
		//不能全为字母
		else if(!rz.test(this.value)){
			pP.innerHTML = "<i class='err'></i>不能全为字母！";
			}
		//不能为重复字符
		else if(ifStr(this.value)==this.value.length){
			pP.innerHTML = "<i class='err'></i>密码不能为单一字符！";
			}
		else{
			pP.innerHTML = "<i class='ati'></i>OK！";
			}
		
	//确认密码
		}
	pName1.onfocus = function(){
		
		}
	pName1.onkeyup = function(){
		}
	pName1.onblur = function(){
		if(this.value==pName.value){
			P1.innerHTML="<i class='ati'></i>输入正确！";
			}
		else{
			P1.innerHTML="<i class='err'></i>两次密码输入的不一样！";
			}
		}
	}
