<?php
    /**
     * @Description  网站登录/注册验证码生成类
     * @Author  赵一鸣
     * @OnlineDemo http://www.zymseo.com/demo/verificationcode/code.html
     * @Date  2016年10月6日 
     */
    class Createcode{
        //画布资源
        public $img;
        //画布宽度
        private $img_width;
        //画布高度
        private $img_height;
        //画布颜色
        private $img_bgcolor;
        //验证码文字内容
        private $str_content;
        //生成的验证码内容
        private $code_content;
        //验证码颜色
        private $code_content_color;
        //构造函数
        public function __construct($img_width,$img_height,$str_content,$code_content_color){
            if($this->gdcheck()){
                $this->img_width = $img_width;
                $this->img_height = $img_height;
                $this->str_content = $str_content;
                $this->code_content_color = $code_content_color;
                $this->get_code();
                $this->session_code();
            }
        }
        //生成画布
        public function get_img(){
            //定义画布
            $this->img = imagecreatetruecolor($this->img_width, $this->img_height);
            //画布背景色
            $this->img_bgcolor = imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255));
            //给画图填充背景色
            imagefill($this->img, 0, 0, $this->img_bgcolor);
            //取得画布的宽高
            $img_width = imagesx($this->img);
            $img_height = imagesy($this->img);
            //画布中插入验证码
            imagestring($this->img, 5, ($this->img_width/3), ($this->img_height/2.5), $this->code_content, imagecolorallocate($this->img, hexdec(substr($this->code_content_color, 1,2)), hexdec(substr($this->code_content_color, 3,2)), hexdec(substr($this->code_content_color, 5,2))));
            //画布中插入像素点
            $this->get_pix();
            //画布中插入直线
            $this->get_line();
            //画布显示
            header('Content-type:image/png');
            imagepng($this->img);
        }
        //生成验证码
        private function get_code(){
            $str_content_len = strlen($this->str_content);
            for($i=0;$i<4;$i++){
                $this->code_content .= substr($this->str_content, mt_rand(0,$str_content_len-1),1);
            }
        }
        //生成像素点
        private function get_pix(){
            for($j=0;$j<300;$j++){
                $image_pix .= imagesetpixel($this->img, mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255)));
            }
            return $image_pix;
        }
        //生成直线
        private function get_line(){
            for($l=0;$l<2;$l++){
                $img_line .= imageline($this->img, mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255)));
            }
            return $img_line;
        }
        //session存储验证码
        private function session_code(){
            session_start();
            $_SESSION['code'] = $this->code_content;
        }
        //判断程序是否支持GD库
        private function gdcheck(){
            if(extension_loaded('gd')){
                return true;
            }else{
                return false;
                exit();
            }
        }
    }