<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<meta name="keywords" content="博雅彩，博雅彩票，华夏百信" />
<meta name="description" content="华夏百信-您身边的购彩专家" />
<link rel="shortcut icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href='csslogo.png'>
<link rel="apple-touch-icon-precomposed" href='csslogo.png'>
<title>华夏百信科技有限公司-首页</title>
<link href="<%=request.getContextPath() %>/function/css/danyeNew.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript">
function setTab(/*string*/name,/*int*/ itemCnt,/*int*/ curItem, /**/classHide, /**/classShow)
{
	 for(i=1;i<=itemCnt;i++)
	{
		eval("document.getElementById('tab_" + name + "_" + i + "').className='" + classHide + "'");
	} 
	eval("document.getElementById('tab_" + name + "_" + curItem + "').className='" + classShow + "'");
 
 for(i=1;i<=itemCnt;i++)
 {
  eval("ele_hide = document.getElementById('con_" + name + "_" + i +"')");
  if(ele_hide) ele_hide.style.display = "none";
 }
 eval("ele_play = document.getElementById('con_" + name + "_" + curItem + "')");
 if(ele_play) ele_play.style.display = "block";
}
</script>
</head>

<body>
<div class="header_box">
	<div class="header_logo"><a href="/rchlw/index.jsp"><img src="<%=request.getContextPath() %>/function/images/danye/companylogo.gif" width="340" height="45" /></a></div>
	<div class="header_txt">客服电话：400-665-1000<a href="/rchlw/index.jsp" style="padding-left:20px">返回购彩首页&gt;&gt;</a></div>
</div>
<div class="menu_contain">
	<div class="menu">
		<ul class="menu_list">
			<li><a href="index.jsp" class="click">首 页</a></li>
			<li> <a href="company_aboutus.jsp">公司简介</a>
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
<div class="index_flash_bg">
	<div class="index_flash">
		<div class="banner" id="banner">
			<div class="banner_tab clearfix">
				<ul>
					<li id="tab_tophome_1" class="on"><a href="#" target="_blank"  onmousemove="startIndex=1;setTab('tophome',4,1,'out','on');"><img src="<%=request.getContextPath() %>/function/images/danye/ad_1.jpg"  class="tab_img"/></a></li>
					<li id="tab_tophome_2" class="out"><a href="#" target="_blank" onmousemove="startIndex=2;setTab('tophome',4,2,'out','on');"><img src="<%=request.getContextPath() %>/function/images/danye/ad_3.jpg"  class="tab_img" /></a></li>
					<li id="tab_tophome_3" class="out"><a href="#" target="_blank" onmousemove="startIndex=3;setTab('tophome',4,3,'out','on');"><img src="<%=request.getContextPath() %>/function/images/danye/ad_2.jpg"  class="tab_img" /></a></li>
					<li id="tab_tophome_4" class="out"><a href="#" target="_blank" onmousemove="startIndex=4;setTab('tophome',4,4,'out','on');" ><img src="<%=request.getContextPath() %>/function/images/danye/ad_4.jpg"  class="tab_img" /></a></li>
				</ul>
			</div>
			<div>
				<div id="con_tophome_1"><a href="/downLoad/ruyicai_android_3.8.3_899_webguanwang.apk"><img src="<%=request.getContextPath() %>/function/images/danye/ad_1.jpg"/></a></div>
				<div id="con_tophome_2"  class="hidecontent">
				<a href="/downLoad/ruyicai_iPhone_3.8.1_793_web_ruyicai.ipa"><img src="<%=request.getContextPath() %>/function/images/danye/ad_3.jpg"/></a></div>
				<div id="con_tophome_3"  class="hidecontent"><img src="<%=request.getContextPath() %>/function/images/danye/ad_2.jpg"/></div>
				<div id="con_tophome_4"  class="hidecontent"><img src="<%=request.getContextPath() %>/function/images/danye/ad_4.jpg" /></div>
				<div class="clear"></div>
			</div>
		</div>
		<script type="text/javascript">
		 var pause = false;
		 var con_num = 4;
		 var startIndex = 1;
		 function setLoop(){
		  try{
		   var oScroll = document.getElementById('banner');
		   oScroll.noWrap = true;
		   oScroll.onmouseover = function(e){pause = true;};
		   oScroll.onmouseout = function(e){pause = false;};
		   setInterval('scrollTopHome()', 3000);
		   }catch(e){alert(e.toString());}
		 }
		 function scrollTopHome(){
		  if(pause) return;
		  startIndex += 1;
		  if(startIndex > con_num){startIndex = 1;}
		  setTab('tophome',4,startIndex,'out','on');
		 } 
		 setLoop();
		</script> 
	</div>
</div>
<div class="index_news_title">
	<div class="index_news_title_contain">
		<div class="index_gsjj_title"style="width:718px;">
			<h1 class="index_h1_title">公司简介 <font>About us</font></h1>
		</div>
		<!-- <div class="index_center_title">
			<h1 class="index_h1_title">新闻动态 <font>News</font></h1>
		</div> -->
		<div class="index_right_title">
			<h1 class="index_h1_title">招聘信息 <font>Jobs</font></h1>
		</div>
	</div>
</div>
<div class="clear"></div>
<div class="main_contain">
	<div class="gsjj_contain" style="font-size: 14px;width:698px;">
		<p><font color="#cc3300">&nbsp;&nbsp;北京华夏百信科技有限公司</font>是整合了深厚的彩票行业运营资源、无线增值行业资源、银行和电子支付领域资源的 国家级高新技术企业 。公司成立于2009年，注册资本金5000万元人民币，拥有工信部颁发的 全网电信增值业务许可证。 公司研发的无纸化彩票投注系统通过了中国信息安全认证中心的检测，并拥有多项软件著作权证书。 </p>
		<p>公司秉承&quot;客户为先、能力为本、技术领先、 合法经营 &quot;的理念， 为广大彩民提供 全面的 无纸化 彩票 服务。 </p>
		<p>公司目前已经与全国十多个省市福利、体育彩票中心签署了电话投注合作协议，通过短信、语音（IVR）等方式为签约省份的彩票中心进行无纸化彩票代销。我们将严格按照彩票监管部门的要求，依法合规经营，确保广大彩民的利益。</p>
	</div>
	
	<div class="right_contain">
		<ul>
			<li><a href="job.jsp">系统测试工程经理（1名）</a><span><a href="job.jsp">技术研发类</a></span></li>
			<li><a href="job.jsp">申请高级JAVA工程师（2名）</a><span><a href="job.jsp">技术研发类</a></span></li>
			<li><a href="job.jsp">客服（2名）</a><span><a href="job_kf.jsp">技术研发类</a></span></li>
			<li><a href="job_cp.jsp">无线产品-运营经理（2名）</a><span><a href="job_cp.jsp">产品运营类</a></span></li>
			<li><a href="job.jsp">更多招聘职位..</a></li>
		</ul>
	</div>
</div>
<div class="jg_30"></div>
<div class="main_contain">
	<div class="hz_title">合作伙伴</div>
	<div class="hz_list"> <a href="<%=request.getContextPath() %>/function/rules/jumpHtml.html?id=1" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_1.png" width="132" height="42" /></a> <a href="/rules/jumpHtml.jsp?id=2" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_2.png" width="132" height="42" /></a> <a href="/rules/jumpHtml.jsp?id=3" target="_blank"><img src="/images/danye/hz_3.png" width="132" height="42" /></a> <a href="/rules/jumpHtml.jsp?id=4" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_4.png" width="132" height="42" /></a> <a href="/rules/jumpHtml.jsp?id=5" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_6.png" width="132" height="42" /></a>
	<a href="http://www.10086.cn/index.htm" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_7.png" width="132" height="42" /></a>
	<a href="http://zs.91.com/" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_8.png" width="132" height="42" /></a>
	<a href="http://www.hiapk.com/" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_9.png" width="132" height="42" /></a>
	<a href="http://www.anzhi.com/" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_10.png" width="132" height="42" /></a>
	<a href="<%=request.getContextPath() %>/function/rules/jumpHtml.html?id=5" target="_blank"><img src="<%=request.getContextPath() %>/function/images/danye/hz_5.png" width="131" height="42" /></a> </div>
</div>
<jsp:include page="/function/rules/danye/danyeFooter.jsp"></jsp:include>