<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/ruserAll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<title>如意彩彩票网——邮箱绑定点击邮箱链接成功页面</title>
</head>
<body>
<div id="body">
	<div id="header">
		<script type="text/javascript">
         $.ajax({
      		'type': 'POST',
      		'url': '/rchlw/function/common/ruyicai_include_common_top_nav.jsp?r='+ Math.round(Math.random()*10000),
      		beforeSend:function(XMLHttpRequest){
     	    },
      		'dataType': 'html',
      		'success': function(data){
      			$("#header").html($.trim(data));
      		}
      	});
       	
         </script>
	</div>
	<div id="main">
	   	<div id="zhanghu">
			<div class="mail_suc"><img class="duigou" src="<%=request.getContextPath() %>/function/images/duigou.gif"  /><img class="chgimg" src="<%=request.getContextPath() %>/function/images/bd_suc.gif" /></div>
			<div class="bound_shj">已绑定邮箱：<font class="blue"><s:property value="#request.email"/></font></div>
			<div class="bound_nr4"><b>密码找回</b>　当您忘记密码时，可通过邮箱找回您的密码。<img src="<%=request.getContextPath() %>/function/images/lvgou.gif" class="lvgou" /><font class="huizi">已定制　系统默认</font></div>		
		</div>
	 </div>
	<div id="footer">
	      <script type="text/javascript">
         $.ajax({
      		'type': 'POST',
      		'url': '/rchlw/function/ruyicai_include_common_footer_noindex.jsp?r='+ Math.round(Math.random()*10000),
      		beforeSend:function(XMLHttpRequest){
     	    },
      		'dataType': 'html',
      		'success': function(data){
      			$("#footer").html($.trim(data));
      		}
      	});
         </script>
	</div>
	  
</div>
</body>
</html>