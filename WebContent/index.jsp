<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/common/sub_header.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="css/common.css" />
  <link rel="stylesheet" href="css/style.css" />
    <script type="text/javascript" src="js/jquery/jquery.SuperSlide.js"></script>
  <script type="text/javascript">
  $(function(){
      $(".sideMenu").slide({
         titCell:"h3", 
         targetCell:"ul",
         defaultIndex:0, 
         effect:'slideDown', 
         delayTime:'500' , 
         trigger:'click', 
         triggerTime:'150', 
         defaultPlay:true, 
         returnDefault:false,
         easing:'easeInQuint',
         endFun:function(){
              scrollWW();
         }
       });
      $(window).resize(function() {
          scrollWW();
      });
      $(".menuson li").click(function() {
		$(".menuson li.on").removeClass("on");
		$(".menuson li").children().css('color', 'black');
		$(this).addClass("on");
		$(this).children().css('color', 'white');
		$("#here_area").html("当前位置："+$(this).children().html());
	});
  });
  function scrollWW(){
    if($(".side").height()<$(".sideMenu").height()){
       $(".scroll").show();
       var pos = $(".sideMenu ul:visible").position().top-38;
       $('.sideMenu').animate({top:-pos});
    }else{
       $(".scroll").hide();
       $('.sideMenu').animate({top:0});
       n=1;
    }
  } 

	

  </script>
  <script language=JavaScript>
function logout(){
	if (confirm("您确定要退出记账管理系统吗？"))
	window.location.href = "login.jsp";
	return false;
}
</script>
  <title>后台首页</title>
</head>
<body>
    <div class="top">
      <div id="top_t">
        <div id="logo" class="fl"></div>
        <div id="photo_info" class="fr">
         
          <div id="base_info" class="fr">
            <div class="help_info">
              <a href="1" id="hp">&nbsp;</a>
              <a href="2" id="gy">&nbsp;</a>
              <a href="#" onClick="logout();" id="out">&nbsp;</a>
            </div>
            <div class="info_center">
          		    欢迎您：${currentUser.rname}(${currentType})
            </div>
          </div>
        </div>
      </div>
      <div id="side_here">
        <div id="side_here_l" class="fl"></div>
        <div id="here_area" class="fl"></div>
      </div>
    </div>
    <div class="side">
        <div class="sideMenu" style="margin:0 auto">
        <c:if test="${currentType=='用户'}">
          <h3>信息管理</h3>
          <ul class="menuson">
            <li class="on"><a  href="<%=path%>/user/user_edit.jsp" target="right">个人信息修改</a></li>
          </ul>
          
          <h3>财务管理</h3>
          <ul class="menuson">
            <li><a  href="<%=path%>/zhang!queryZhang.action" target="right">财务信息</a></li>
            <li><a  href="<%=path%>/zhang!toAddZhang.action" target="right">财务记录</a></li>
          </ul>
          
          <h3>财务统计</h3>
          <ul class="menuson">
            <li><a  href="<%=path%>/zhang/zhang_ylist.jsp" target="right">月收支查询</a></li>
            <li><a  href="<%=path%>/zhang/zhang_nlist.jsp" target="right">年收支查询</a></li>
          </ul>
          </c:if>
          
          <c:if test="${currentType=='管理员'}">
          <h3>系统管理</h3>
          <ul class="menuson">
            <li><a  href="<%=path%>/admin!queryAdmin.action" target="right">管理员信息管理</a></li>
            <li><a  href="<%=path%>/user!queryUser.action" target="right">用户信息管理</a></li>
          </ul>
          </c:if>
          
 
 
 

       </div>
    </div>
    <div class="main">
       <iframe name="right" id="rightMain" src="<%=path %>/version.jsp" frameborder="no" scrolling="auto" width="100%" height="auto" allowtransparency="true"></iframe>
    </div>
    <div class="bottom">
      <div id="bottom_bg"><a href="https://armycodes.com/" target="_blank">毕业就找从戎源码网(https://armycodes.com/)</a></div>
    </div>
  
</body>

</html>
   
 