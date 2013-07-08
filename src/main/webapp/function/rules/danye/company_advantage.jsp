<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<meta name="keywords" content="如意彩，如意彩票，金软瑞彩" />
<meta name="description" content="金软瑞彩-您身边的购彩专家" />
<link rel="shortcut icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href='csslogo.png'>
<link rel="apple-touch-icon-precomposed" href='csslogo.png'>
<title>金软瑞彩科技有限公司-公司简介</title>
<link href="<%=request.getContextPath() %>/function/css/danyeNew.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
</head>
<body>
<div class="header_box">
	<div class="header_logo"><a href="/"><img src="<%=request.getContextPath() %>/function/images/danye/companylogo.gif" width="340" height="45" /></a></div>
	<div class="header_txt">客服电话：400-665-1000<a href="/" style="padding-left:20px">返回购彩首页&gt;&gt;</a></div>
</div>
<div class="menu_contain">
	<div class="menu">
		<ul class="menu_list">
			<li><a href="index.jsp">首 页</a></li>
			<li> <a href="company_aboutus.jsp" class="click">公司简介</a>
				<ul class="menu_listdown">
					<li><a href="company_aboutus.jsp">关于我们</a></li>
					<li><a href="company_idea.jsp">经营理念</a></li>
					<li><a href="company_president.jsp">总裁致辞</a></li>
					<li><a href="company_advantage.jsp">我们的优势</a></li>
					<li><a href="company_contactus.jsp">联系我们</a></li>
				</ul>
			</li>
			<li><a href="qualification.jsp">资质报告</a></li>
			<li><a href="authorized.jsp">彩票授权</a></li>
			<li><a href="partners.jsp">合作伙伴</a></li>
			<li><a href="legal.jsp">法律声明</a></li>
			<li><a href="job.jsp">人才招聘</a>
				<ul class="menu_listdown">
					<li><a href="job.jsp">技术研发类</a></li>
					<li><a href="job_cp.jsp">产品运营类</a></li>
					<li><a href="job_kf.jsp">客户服务类</a></li>
					<li><a href="job_zc.jsp">内容编辑类</a></li>
				</ul>
			</li>
		</ul>
		<div class="clear"></div>
	</div>
</div>
<div class="head_imgbg">
	<div class="head_imgbox"><img src="<%=request.getContextPath() %>/function/images/danye/header_gsjj.jpg" width="950" height="107" /></div>
</div>
<div class="main_contain">
	<div class="main_left">
		<h1>公司简介</h1>
		<ul id="left_menu">
			<li><a href="company_aboutus.jsp">关于我们</a></li>
			<li><a href="company_idea.jsp">经营理念</a></li>
			<li><a href="company_president.jsp">总裁致辞</a></li>
			<li><a href="#" class="click">我们的优势</a></li>
			<li><a href="company_contactus.jsp">联系我们</a></li>
		</ul>
		<div class="left_kefu">
			<h2><font>客服中心</font></h2>
			<p>+ 在线:<a href="http://wpa.qq.com/msgrd?v=3&uin=1427872305&site=qq&menu=yes">点击交流(在线客服)</a></p>
			<p>+ QQ:1427872305</p>
			<p>+ 公司总机:010-62655160</p>
			<p>+ 传真：010-62652810</p>
			<p>+ 客服电话:400-665-1000</p>
			<p>+ 邮政编码:100091</p>
			<p>+ 邮箱:<a href="mailto:service@ruyicai.com">service@ruyicai.com</a></p>
			<p>+ 地址:北京市海淀区颐和园路福缘门甲1号汇缘阁</p>
		</div>
	</div>
	<div class="main_right">
		<h1>政策优势 ： </h1>
		<div class="main_right_txt">
			<ul>
				<li>金软瑞彩拥有 全国十余家省级彩票中心的合法授权，无纸化彩票销售系统通过了国家有关监管部门检测   。 </li>
				<li>金软瑞彩深度整合彩票发行和销售机构资源，与中国移动和 中国银 联 建立 了战略合作伙伴关系。 </li>
				<li>金软瑞彩奉行合规经营的原则，获得彩票行业监管部门的认可及大力支持。 </li>
			</ul>
			<p>&nbsp;</p>
		</div>
		<h1>系统安全：</h1>
		<div class="main_right_txt">
			<ul>
				<li>销售系统及 终端软件 通过 国家级检测机构认证 ： </li>
				<li>防火墙、IPS、 多网段 隔离多重安全设备确保系统安全。 </li>
				<li>资金账户安全性按照银行标准设计实施。 </li>
				<li>服务器侧数据库内的资金信息，用户手机号码信息全局加密。 </li>
				<li>长度足够的密码设置，投注密码加密存放。 </li>
				<li>身份证号码与手机号码绑定。 </li>
				<li>通过HTTPS 访问个人资金帐户页面信息。 </li>
				<li>手机软件的发送消息报文通过BASE64实现全信息加密。 </li>
				<li>手机软件支持报文摘要鉴权模式和证书模式两种模式的安全认证。 </li>
				<li>系统服务器端接口不暴露在外，仅对限定IP 地址的银行、第三方支付开放。 </li>
				<li>安全的 彩票购买平台：基于银行卡充值和个人彩票账户系统的电子购买方式。 </li>
				<li>银行级 的 清算和结算 系统 ：提供彩民账务与结算，提供（福/体彩）业务方的结算和银行系统 银联系统交易   结算。 </li>
			</ul>
		</div>
		<h1>专注 运营：</h1>
		<div class="main_right_txt">
			<ul>
				<li>业务专注 ： 金软瑞彩 专注于做无纸化彩票运营，从未也从不涉足于其它领域 。 </li>
				<li>立志钻研 ： 立足于互联网和移动互联网的发展规律，金软瑞彩在产品研发、用户体验方面潜心钻研、不断进步 。 </li>
			</ul>
		</div>
	</div>
	<div class="main_line"></div>
</div>
<jsp:include page="/function/rules/danye/danyeFooter.jsp"></jsp:include>