<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>客户留言</title>
<meta http-equiv="keywords" content="博雅彩，客户留言"/>
<meta http-equiv="description" content="博雅彩为了更好的为您服务，提供客户留言，我们将为您及时解答。"/>
<link rel="stylesheet" type="text/css" href="/rchlw/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="/rchlw/function/css/tuserAll.css" />
<script type="text/javascript" src="/rchlw/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="/rchlw/function/js/jcarousellite_1.0.1c5.js"></script>
<script type="text/javascript" src="/rchlw/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="/rchlw/function/js/tuserAll.js"></script>
<script type="text/javascript" src="/rchlw/function/js/util.js"></script>
</head>
<body>
<div class="body" >
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
<div id="main">
<span class="space10">&nbsp;</span>
<div class="FeedbackNote">
	<h1>留言反馈</h1>
	<div class="FeedbackContent">
		<span>如果您对我们网站有什么意见或者建议，可以通过留言对我们提出，我们会在第一时间处理您的信息。<br />
		建议您填写手机号和QQ号等联系方式信息，将有助于我们尽快解决您提出的问题，并及时与您沟通处理结果。</span>
	<form action="" method="post" name="customMessage" id="customMessage">	
		<div class="FeedbackTable">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
			  <tr id="showOrHiden">
				<th>用户名：</th>
				<td><input type="text" name="nick_name" class="text" id="nick_name" disabled="disabled" /></td>
			  </tr>
			  <tr>
				<th>手机号码：</th>
				<td><input type="text" name="userphone"class="text"  id="userphone"/></td>
			  </tr>
			  <tr>
				<th>QQ号：</th>
				<td><input type="text" name="qq"class="text" id="qq"/></td>
			  </tr>
			  <tr style="display:none">
				<th>留言主题：</th>
				<td><input type="text" name=""class="text" /></td>
			  </tr>
			  <tr>
				<td height="30">留言内容：</td>
				<td rowspan="3"><textarea name="content" cols="" rows="" class="textfield" id="contents"></textarea></td>
			  </tr>
			  <tr>
			    <th>&nbsp;</th>
		      </tr>
			  <tr>
			    <th>&nbsp;</th>
		      </tr>
			  <tr>
				<th>&nbsp;</th>
				<td>
					<input name="" class="FeedbackBtn" type="button" value="提交" onclick="CustomMessage();"/>     	
					<input name="" class="FeedbackBtn1" type="reset" value="重填" />
				</td>
			  </tr>
			</table>
		</div>
		</form>
		<script>getList("list","listCont");</script>
		<form name="list" id="list"  method="post" >
		<div id="listCont" >
		</div>
		</form>
	</div>
</div>
</div>
<input type="hidden" value="" name="tishi" id="tishi"> 
<input value="custom" id="lotNo" type="hidden">
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<script>
$(function(){
	if(!isLogin()){
		$("#showOrHiden").toggle();
	}else{
		$.ajax({
			   type: "POST",
			   url: "/rchlw/function/user/userIndex.jsp",
			   async: false, 
			   dataType:'html',//接受数据格式
			   success: function(msg){
			    $("#nick_name").val(msg);
			   }
			});
	}
});
</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>