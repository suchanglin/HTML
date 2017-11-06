<?php

/**
 * @Author: Administrator
 * @Date:   2017-11-06 14:58:24
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-11-06 17:28:52
 * 第一步 浏览者   调用控制器，对他发出指令
 * 第二步 控制器   按指令选取一个合适的模型
 * 第三步 模型     按控制器指令取相应数据
 * 第四步 控制器   按指令选取相应的视图
 * 第五步 视图     把第三步取到的数据按用户想要的样子显示出来
 */
	// require_once('testController.class.php');
	// require_once('testModel.class.php');
	// require_once('testView.class.php');
	// $testController = new testController();
	// $testController->show();
	
	//url形式  index.php?controller=控制名&method=方法名
	require_once('function.php');

	$controllerAllow = array('test','index');

	$methodAllow = array('test','index','show');

	$controller = in_array($_GET['controller'],$controllerAllow)?daddslashes($_GET['controller']):'index';

	$method = in_array($_GET['method'],$methodAllow)?daddslashes($_GET['method']):'index';

	C($controller,$method);

	//in_array()内置函数，判断字符串是否存在数组中，即$_GET['method']是否在$methodAllow中，存在就是用之，不存在就用默认的方法名index。daddslashes()对非法字符转义,addslashes()为PHP内置函数，对单引号等特殊符号的转义
 ?>
