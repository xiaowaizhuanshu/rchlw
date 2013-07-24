<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩账户中心</title>
<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="cache-control" content="no-cache"/>
<meta http-equiv="expires" content="0"/>    
<meta http-equiv="keywords" content="账户明细，充值，提现，投注记录，追号记录的查询，基本资料，安全资料、修改密码，身份证绑定，手机服务，邮箱服务"/>
<meta http-equiv="description" content="博雅彩用户账户中心让您购彩更明白！"/>
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css"/>
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/new_formValidator.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.countdown.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jinrijiezhi_timeEnd.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/tuserAll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/ruserAll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
<script>init()</script>
<script>$(function(){toplogo('common',"");});</script>
 <span id="common"></span>
<div id="main">
	<!--账户管理左边-->
	<div class="account_left Account">
		<div class="account_title"><img src="<%=request.getContextPath() %>/function/images/myAccount.gif" width="96" height="22" /></div>
		<div class="Account">
			<dl class="Account">
				<dt class="account_secondTitle">账户管理</dt>
				<dd class="light a_javaEye" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=23'" ><font><span></span>账户全览</font></dd>
				<dd class="light a_detailed" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=6'"><font><span></span>账户明细</font></dd>
				<dd class="light a_recharge" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=4'"><font><span></span>充值</font></dd>
				<dd class="light a_ATM" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=11'"><font><span></span>提款</font></dd>
				<%-- <dd class="light a_integral" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=69'"><font><span></span>积分</font></dd> --%>
				
				<dt class="account_secondTitle">我的投注</dt>
				<dd class="light a_bettingRecords" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=0'"><font><span></span>投注记录</font></dd>
				<dd class="light a_afterRecord" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=1'"><font><span></span>追号记录</font></dd>
				<dd class="light a_give" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=2'"><font><span></span>赠送记录</font></dd>
				<dd class="light a_accept" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=3'"><font><span></span>受赠记录</font></dd>
		
				<dt class="account_secondTitle">我的资料</dt>
				<dd class="light a_uploadImg" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=70'"><font><span></span>上传头像</font></dd>
				<dd class="light a_safetyInformation" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=33'"><font><span></span>安全资料</font></dd>
				<dd class="light a_modifyPassword" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=8'"><font><span></span>修改密码</font></dd>

				<dt class="account_secondTitle">服务</dt>
				<dd class="light a_mobileService" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=10'"><font><span></span>手机服务</font></dd>
				<dd class="light a_mailboxService" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=36'"><font><span></span>邮箱服务</font></dd>
				<dt class="account_secondTitle">我的推广</dt>
				<dd class="light agencyService" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=71'"><font><span></span>推广链接</font></dd>
				<dd class="light agencyyejiService" onclick="window.location.href='<%=request.getContextPath() %>/function/rules/user.jsp?key=72';"><font><span></span>我的业绩</font></dd>
			</dl>
		</div>
		<div class="space10">&#160;</div>
		<div class="space10">&#160;</div>
	</div>
	<!--账户管理右边-->	
	<div class="My_account" id="right_text">
		<script>$(function(){isLoginReHtmlInParameters('','','');});</script>
	</div>
	<!--账户管理右边-->	
</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<jsp:include page="/function/common/ruyicai_include_common_login_div.jsp"></jsp:include>
<input type="hidden" value="" name="tishi" id="tishi"> 
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>
