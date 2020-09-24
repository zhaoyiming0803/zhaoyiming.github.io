<?php
    /**
     * @Description  ��վ��¼/ע����֤��������
     * @Author  ��һ��
     * @OnlineDemo http://www.zhaoyiming.com/demo/verificationcode/code.html
     * @Date  2016��10��6�� 
     */
    class Createcode{
        //������Դ
        public $img;
        //��������
        private $img_width;
        //�����߶�
        private $img_height;
        //������ɫ
        private $img_bgcolor;
        //��֤����������
        private $str_content;
        //���ɵ���֤������
        private $code_content;
        //��֤����ɫ
        private $code_content_color;
        //���캯��
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
        //���ɻ���
        public function get_img(){
            //���廭��
            $this->img = imagecreatetruecolor($this->img_width, $this->img_height);
            //��������ɫ
            $this->img_bgcolor = imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255));
            //����ͼ��䱳��ɫ
            imagefill($this->img, 0, 0, $this->img_bgcolor);
            //ȡ�û����Ŀ���
            $img_width = imagesx($this->img);
            $img_height = imagesy($this->img);
            //�����в�����֤��
            imagestring($this->img, 5, ($this->img_width/3), ($this->img_height/2.5), $this->code_content, imagecolorallocate($this->img, hexdec(substr($this->code_content_color, 1,2)), hexdec(substr($this->code_content_color, 3,2)), hexdec(substr($this->code_content_color, 5,2))));
            //�����в������ص�
            $this->get_pix();
            //�����в���ֱ��
            $this->get_line();
            //������ʾ
            header('Content-type:image/png');
            imagepng($this->img);
        }
        //������֤��
        private function get_code(){
            $str_content_len = strlen($this->str_content);
            for($i=0;$i<4;$i++){
                $this->code_content .= substr($this->str_content, mt_rand(0,$str_content_len-1),1);
            }
        }
        //�������ص�
        private function get_pix(){
            for($j=0;$j<300;$j++){
                $image_pix .= imagesetpixel($this->img, mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255)));
            }
            return $image_pix;
        }
        //����ֱ��
        private function get_line(){
            for($l=0;$l<2;$l++){
                $img_line .= imageline($this->img, mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), mt_rand(0,$this->img_width), mt_rand(0,$this->img_height), imagecolorallocate($this->img, mt_rand(0,255), mt_rand(0,255), mt_rand(0,255)));
            }
            return $img_line;
        }
        //session�洢��֤��
        private function session_code(){
            session_start();
            $_SESSION['code'] = $this->code_content;
        }
        //�жϳ����Ƿ�֧��GD��
        private function gdcheck(){
            if(extension_loaded('gd')){
                return true;
            }else{
                return false;
                exit();
            }
        }
    }