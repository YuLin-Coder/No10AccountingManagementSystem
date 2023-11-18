<%@include file="common/sub_header.jsp"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>记账管理系统</title>

    <link rel="stylesheet" href="<%=path %>/css/login.css" />
</head>
<body>
	<div id="login_top">
		<div id="welcome">
			欢迎使用记账管理系统
		</div>
		<div id="back">
			<a href="#" onclick="regYH();">用户注册</a>&nbsp;&nbsp; | &nbsp;&nbsp;
			<a href="#" onclick="glyDL();">管理员登录</a>
		</div>
	</div>
	<div id="login_center">
		<div id="login_area">
			<div id="login_form">
				<form name="form1" action="loginuser!logon.action" method="post">
						<input type="hidden" id="messageInfo"
							value="${requestScope.messageInfo}" />
					<div id="login_tip">
						用户登录&nbsp;&nbsp;UserLogin
					</div>
					<div><input type="text" name="username" id="username" class="username"/></div>
					<div><input type="text" name="password" id="password" class="pwd"/></div>
					<div id="btn_area">
						<input onclick="login();" type="button" id="sub_btn" value="登&nbsp;&nbsp;录"/>&nbsp;&nbsp;
						<input type="text" class="verify"  name="randomCode" id="randomCode"/>
						<input type="hidden" name="type" value="用户"/>		
						<img onclick="javascript:refresh(this);" style="CURSOR: pointer" src="ImageServlet" alt="" width="80" height="40"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="login_bottom">
		版权所有
	</div>
</body>
</html>
<script>
  function refresh(obj) {
        obj.src = "ImageServlet?"+Math.random();
    }
function login(){

     if($("#username").val() == ""){
          $.messager.alert('警告','请输入用户名！','warning');
          return;
     }
      if( $("#password").val() == ""){
          $.messager.alert('警告','请输入密码！','warning');
          return;
     }  
     if( $("#randomCode").val() == ""){
          $.messager.alert('警告','请输入验证码！','warning');
          return;
     }  
 	 document.forms[0].action= "<%=path%>/loginuser!logon.action";
	 document.forms[0].submit();
	 
	 
}

function regYH(){
  	document.forms[0].action= "<%=path%>/user/user_reg.jsp";
	document.forms[0].submit();
}

function glyDL(){
  	document.forms[0].action= "<%=path%>/adminlogin.jsp";
	document.forms[0].submit();
}
 

$(document).ready(function(){
	 var $messageInfo = $("#messageInfo").val();
	 if($messageInfo != null && $messageInfo != ""){
		 $.messager.show({
			title:'提示',
			msg:$messageInfo,
			timeout:2000,
			showType:'slide'
		 });
		 $("#messageInfo").val("");
	 }
  });
  
  
</script>