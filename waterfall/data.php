<?php
	
	header('content-type:text/html;charset="utf-8"');
	
	$arr = array(
		array( 'src'=>'images/1.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/2.jpg' , 'dec'=>'你们男神都爱的倪妮' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/3.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/4.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/5.jpg' , 'dec'=>'你们男神都爱的倪妮' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/6.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/7.jpg' , 'dec'=>'你们男神都爱的倪妮' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/8.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/9.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/10.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/11.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/12.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/13.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/14.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/15.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/16.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/17.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/18.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/19.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/20.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/21.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/22.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/23.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/24.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/25.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/26.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/27.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/28.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/29.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/30.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/8.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/9.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/10.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/11.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/12.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/11.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' ),
		array( 'src'=>'images/12.jpg' , 'dec'=>'你们男神都爱的倪妮 就是个大写哒美好' , 'time'=>'2016/03/18 20:08' )
	);
	/*$a = json_encode($arr);
	echo gettype($a);*/

	echo json_encode($arr);
?>