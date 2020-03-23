<?php
header('Content-Type: text/html; charset=gb2312');
error_reporting(0);
$api='http://gh.61yl.cn/m/guahao/Ly_api.php?Key=f2f5f4790bd7a8310bd2938cf172930b&Webid=39';//ԤԼ��̨��ӻ�ȡ
$phone=trim(strip_tags($_POST['phone'])); 
$text=trim(strip_tags($_POST['msg']));
$vincent=curl_post($api,$phone,$text);
echo $vincent;

/*********************�����������������޸ġ�***************************/

//��ȡIP
function get_client_ip() {
	if (getenv ( "HTTP_CLIENT_IP" ) && strcasecmp ( getenv ( "HTTP_CLIENT_IP" ), "unknown" ))
		$ip = getenv ( "HTTP_CLIENT_IP" );
	else if (getenv ( "HTTP_X_FORWARDED_FOR" ) && strcasecmp ( getenv ( "HTTP_X_FORWARDED_FOR" ), "unknown" ))
		$ip = getenv ( "HTTP_X_FORWARDED_FOR" );
	else if (getenv ( "REMOTE_ADDR" ) && strcasecmp ( getenv ( "REMOTE_ADDR" ), "unknown" ))
		$ip = getenv ( "REMOTE_ADDR" );
	else if (isset ( $_SERVER ['REMOTE_ADDR'] ) && $_SERVER ['REMOTE_ADDR'] && strcasecmp ( $_SERVER ['REMOTE_ADDR'], "unknown" ))
		$ip = $_SERVER ['REMOTE_ADDR'];
	else
		$ip = "unknown";
	return ($ip);
}
//�����ύ��Ϣ
function curl_post($api,$phone,$msg){
	if($phone&&$api){
		if(function_exists('curl_init')){
			$ip=get_client_ip();
			$curlPost = 'vincent_phone='.$phone.'&vincent_text='.urlencode($msg).'&vincent_ip='.$ip;
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $api);
			//curl_setopt($ch, CURLOPT_HEADER, 1);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
			$data = curl_exec($ch);
			curl_close($ch);
			return $data;
		}else{
			exit('curl��չδ����!');	
		}
			
	}
}
/*********************�����������������޸ġ�***************************/
?>