<?php

/**
 * @Author: Administrator
 * @Date:   2017-11-06 16:06:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-11-06 17:34:45
 */
 function C($name,$method){
 	require_once('/libs/Controller/'.$name.'Controller.class.php');
 	eval('$obj = new'.$name.'Controller();$obj->'.$method.'();');
 }
 C('test','show');

 //eval()函数调用简单但是不安全。可用替代方案：
 //$controller = $name.'Controller';
 //$obj = new $controller();
 //$obj->method();
 
function M($name){
 	require_once('/libs/Model/'.$name.'Model.class.php');
 	eval('$obj = new'.$name.'Model();');
 	return $obj;
 } 


 function V($name){
 	require_once('/libs/View/'.$name.'View.class.php');
 	eval('$obj = new'.$name.'View();');
 	return $obj;
}
 	function daddslashes($str){   //为了安全，过滤字符串
 		return (!get_magic_quotes_gpc())?addslashes($str):$str;
 	}

?>