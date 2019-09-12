<?php
/**
 * @Description  网站登录/注册验证码生成类
 * @Author  赵一鸣
 * @OnlineDemo http://www.zymseo.com/demo/verificationcode/code.html
 * @Date  2016年10月6日
 */
    function __autoload($classname){
        include strtolower($classname).'.class.php';
    }
    //定义验证码的取值范围
    $str_content = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //验证码文字颜色
    $code_content_color = '#ffffff';
    //初始化对象
    $code = new Createcode(100,30,$str_content,$code_content_color);
    $code->get_img();