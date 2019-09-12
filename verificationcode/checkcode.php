<?php
/**
 * @Description  网站登录/注册验证码生成类
 * @Author  赵一鸣
 * @OnlineDemo http://www.zymseo.com/demo/verificationcode/code.html
 * @Date  2016年10月6日
 */
    header('Content-type:text/html;charset="utf-8"');
    session_start();
    if($_POST['code']!=''){
        if($_SESSION['code']==$_POST['code']){
            echo '<script type="text/javascript">
                    alert("验证码填写成功");
                    history.go(-1);
                </script>';
        }else{
            echo '<script type="text/javascript">
                    alert("验证码填写失败");
                    history.go(-1);
                </script>';
        }
    }