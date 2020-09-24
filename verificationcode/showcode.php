<?php
/**
 * @Description  ��վ��¼/ע����֤��������
 * @Author  ��һ��
 * @OnlineDemo http://www.zhaoyiming.com/demo/verificationcode/code.html
 * @Date  2016��10��6��
 */
    function __autoload($classname){
        include strtolower($classname).'.class.php';
    }
    //������֤���ȡֵ��Χ
    $str_content = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //��֤��������ɫ
    $code_content_color = '#ffffff';
    //��ʼ������
    $code = new Createcode(100,30,$str_content,$code_content_color);
    $code->get_img();