function v_check(){
	var t_url = window.location.href;		     //获取提交地址请勿修改
	var user_name = $("#user_name").val();       //您的姓名
	var user_phone = $("#user_phone").val();     //您的电话
	var user_time = $("#user_time").val();       //预约时间
	var user_content = $("#user_content").val(); //咨询内容
	var user_age = $("#user_age").val(); //您的年龄
	var user_class = $("#user_class").val(); //病种
	var user_sex = $("#user_sex").val(); //性别
	//判断患者姓名
	if(user_name=='请输入您的姓名' || user_name==''){
		alert('请输入您的姓名!方便您预约登记！');
		 $("#user_name").val('');
		 $("#user_name").focus();
		 return false;
	}
	//判断预约时间
	if(user_time=='请输入您的预约时间' || user_time==''){
		alert('请输入您的预约时间!方便您预约登记！！');
		 $("#user_time").val('');
		 $("#user_time").focus();
		 return false;
	}
	if(user_time=='请输入您的预约病种' || user_time==''){
		alert('请输入您的预约病种!方便您预约登记！！');
		 $("#user_class").val('');
		 $("#user_class").focus();
		 return false;
	}
	//判断咨询内容
	if(user_content=='您想要咨询的问题' || user_content==''){
		alert('请输入您想要咨询的问题!方便您预约专家为你会诊');
		 $("#user_content").val('');
		 $("#user_content").focus();
		 return false;
	}
	//此处除了电话号码未合并，其它类型都可以合并！
	var vincent_val = "[患者姓名]:"+user_name+"[预约时间]:"+user_time+"[患者年龄]:"+user_age+"[病种]:"+user_class+"[性别]:"+user_sex+"[咨询内容]:"+user_content+"[提交页面]:"+t_url;
	//处理提交的手机号码
	var is_phone = IsTelephone(user_phone);
	//判断手机号码是否正确，正确就提交到预约系统后台
	if(user_phone == '请输入您的电话号码！' || is_phone==false || user_phone==''){
	   alert('请输入有效的电话号码，格式为：021-88888888、15888888888！');
	   $("#user_phone").val('');
	   $("#user_phone").focus();
	   return false;
	}else{
		$.post("/yy/api.php", {
		  phone:user_phone,msg:vincent_val
		}, function (data){
			if(data==1){
			alert('★友情提示★\r\n您的提交请求已进入系统，等候片刻，我院在线医生将会给您致电解答！）');
				//清除表单内容，防止恶意提交!
				$("#user_name").val('');
				$("#user_time").val('');
				$("#user_phone").val('');
			    $("#user_content").val('');
			}else{
				alert('提交失败！联系系统管理处理!');
				//清除表单内容，防止恶意提交!
				$("#user_name").val('');
				$("#user_time").val('');
				$("#user_phone").val('');
			    $("#user_content").val('');
				return false;
			}
		});
		return false;
	}
}

function v_lxb(){
var user_namea = $("#user_namea").val();       //离线宝姓名
var user_phonea = $("#user_phonea").val();     //离线宝电话

	var t_url = window.location.href;		     //获取提交地址请勿修改
	
//此处除了电话号码未合并，其它类型都可以合并！

	var vincent_vals = "[患者姓名]:"+user_namea+"[提交页面]:"+"新年抽奖";
	
	
	var is_phonea = IsTelephone(user_phonea);
	
	//判断手机号码是否正确，正确就提交到预约系统后台

	if(user_phonea == '请输入您的电话号码！' || is_phonea==false || user_phonea==''){
	   alert('请输入有效的电话号码，格式为：021-88888888、15888888888！');
	   $("#user_phonea").val('');
	   $("#user_phonea").focus();
	   return false;
	}else{
		$.post("/yy/api.php", {
		  phone:user_phonea,msg:vincent_vals
		}, function (data){
			if(data==1){
			alert('★友情提示★\r\n您的提交请求已进入系统，等候片刻，我院在线医生将会给您致电解答！）');
				//清除表单内容，防止恶意提交!
				$("#user_phonea").val('');

			}else{
				alert('提交失败！联系系统管理处理!');
				//清除表单内容，防止恶意提交!
				$("#user_phonea").val('');
				return false;
			}
		});
		return false;
	}
}
function v_tel(){
var user_names = $("#user_names").val();       //夜间电话姓名
var user_phones = $("#user_phones").val();     //夜间电话

	var t_url = window.location.href;		     //获取提交地址请勿修改
	
//此处除了电话号码未合并，其它类型都可以合并！

	var vincent_vals = "[患者姓名]:"+user_names+"[提交页面]:"+t_url;;
	
	
	var is_phones = IsTelephone(user_phones);
	
	//判断手机号码是否正确，正确就提交到预约系统后台

	if(user_phones == '请输入您的电话号码！' || is_phones==false || user_phones==''){
	   alert('请输入有效的电话号码，格式为：021-88888888、15888888888！');
	   $("#user_phones").val('');
	   $("#user_phones").focus();
	   return false;
	}else{
		$.post("/yy/api.php", {
		  phone:user_phones,msg:vincent_vals
		}, function (data){
			if(data==1){
			alert('★友情提示★\r\n您的提交请求已进入系统，等候片刻，我院在线医生将会给您致电解答！）');
				//清除表单内容，防止恶意提交!
				$("#user_phones").val('');

			}else{
				alert('提交失败！联系系统管理处理!');
				//清除表单内容，防止恶意提交!
				$("#user_phones").val('');
				return false;
			}
		});
		return false;
	}
}

//验证手机号码正则
function IsTelephone(obj){ 
	var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/; 
	if(pattern.test(obj)) {
		return true;
	}else{
		return false;
	}
}