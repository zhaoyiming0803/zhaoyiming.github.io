<?php
	header('content-type:text/html;charset="utf-8"');
	
	$arr = array(
		array('name'=>'科比','belong'=>'洛杉矶湖人'),
		array('name'=>'韦德','belong'=>'迈阿密热火'),
		array('name'=>'罗斯','belong'=>'芝加哥公牛'),
		array('name'=>'库里','belong'=>'金州勇士'),
		array('name'=>'波什','belong'=>'迈阿密热火'),
	);

	echo json_encode($arr);
	
?>