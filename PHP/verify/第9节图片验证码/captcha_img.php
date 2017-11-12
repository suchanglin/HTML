<?php 
      session_start();

      $table=array(
	   'pic0'=>'虎',
	   'pic1'=>'鼠',
	   'pic2'=>'牛',
	   'pic3'=>'兔',
	   'pic4'=>'龙',
	   'pic5'=>'蛇',
	   'pic6'=>'马',
	   'pic7'=>'羊',
	   'pic8'=>'猴',
	   'pic9'=>'鸡',
	   'pic10'=>'狗',
	   'pic11'=>'猪'
	  );
      $index=rand(0,11);
	  $value=$table['pic'.$index];
	  $_SESSION['authcode']=$value;
	  
	  $filename=dirname('_FILE_').'\\images\\pic'.$index.'.jpg';//注意这里和视频里不一样，_FILE_要加单引号，否则可能会报错
	  $contents=file_get_contents( $filename);
	  
	  header('content-type:image/jpg');
	  echo  $contents;

	  
?>