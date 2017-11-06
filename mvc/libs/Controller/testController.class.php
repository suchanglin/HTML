<?php

/**
 * @Author: Administrator
 * @Date:   2017-11-06 14:48:25
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-11-06 17:28:02
 */
/**
* 
*/
class testController{
	function show() {  //控制器的作用是调用模型，并调用视图，将模型产生的数据传递给视图，并让相关视图去显示
       // $testModel = new testModel();
        $testModel = M('test');
        $data = $testModel->get();
        //$testView = new testView();
        $testView = V('test');
        $testView->display($data);
	}
}
?>