<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib uri="/WEB-INF/tangs.tld" prefix="tangs" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩手机客户端下载</title>
<meta name="keywords" content="手机客户端下载，手机彩票客户端下载，如意彩手机客户端下载">
<meta name="description" content="如意彩手机客户端下载-为购彩用户提供掌上快捷的购彩平台！">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/clientAll.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css"  />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js" ></script>
</head>
<body>
<script>$(function(){toplogo('common',"Buttongoucai");});</script>
 <span id="common"></span>
<div class="download_repeat_bg">
	<div class="download_contant">
		<div class="download_menu">
			<ul>
				<li><a href="javaScript:;"><img src="<%=request.getContextPath() %>/function/images/btn_android_click.png"  id="menubtn1" /></a></li>
				<li><a href="javaScript:;"><img src="<%=request.getContextPath() %>/function/images/btn_iphone_normal.png" id="menubtn2" /></a></li>
				<li><a href="javaScript:;"><img src="<%=request.getContextPath() %>/function/images/btn_symbian_normal.png" id="menubtn3" /></a></li>
				<li><a href="javaScript:;"><img src="<%=request.getContextPath() %>/function/images/btn_kjava_normal.png" id="menubtn4" /></a></li>
				<li><a href="javaScript:;"><img src="<%=request.getContextPath() %>/function/images/btn_wp8_normal.png" id="menubtn5" /></a></li>
			</ul>
		</div>
		<div class="dl_android" id="shouji_box1">
			<div class="dl_android_flash">
				<div id="oTransContainer" style="FILTER: progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=0, motion='forward'); WIDTH: 166px; HEIGHT: 300px">
					<img src="<%=request.getContextPath() %>/function/images/android_01.jpg" width="166" height="300" class=pic id=oDIV1>
					<img src="<%=request.getContextPath() %>/function/images/android_02.jpg" width="166" height="300" class=pic id=oDIV2 style="DISPLAY: none;">
					<img src="<%=request.getContextPath() %>/function/images/android_03.jpg" width="166" height="300" class=pic id=oDIV3 style="DISPLAY: none;">
					<img src="<%=request.getContextPath() %>/function/images/android_04.jpg" width="166" height="300" class=pic id=oDIV4 style="DISPLAY: none;">
					<img src="<%=request.getContextPath() %>/function/images/android_05.jpg" width="166" height="300" class=pic id=oDIV5 style="DISPLAY: none;">
				</div>
			</div>
		<div class="dl_downbtn1"><a href="/downLoad//downLoad/ruyicai_android_3.8.3_899_webguanwang.apk"><img src="<%=request.getContextPath() %>/function/images/android_download.png" width="261" height="75" onmouseover="this.src='<%=request.getContextPath() %>/function/images/android_download2.png'" onmouseout="this.src='<%=request.getContextPath() %>/function/images/android_download.png'" /></a></div>
			<div class="dl_versiontxt">
				<p>最新版本：Android v3.8.3<br/>
					更新时间：2013-06-26</p>
				<p>适用于Android 1.6-4.3 ROM系统的机型，<br />
				包括Nexus one、HTC、Hero、MOTOMilestone等。</p>
			</div>
		</div>
		<div class="dl_apple" id="shouji_box2" style="display:none">
			<div class="dl_downbtn1"><a href="/downLoad/ruyicai_iPhone_3.8.1_793_web_ruyicai.ipa"><img src="<%=request.getContextPath() %>/function/images/apple_download.png" width="209" height="55" onmouseover="this.src='<%=request.getContextPath() %>/function/images/apple_download2.png'" onmouseout="this.src='<%=request.getContextPath() %>/function/images/apple_download.png'" /></a></div>
			<div class="dl_versiontxt">
				<p>版本：3.8.1<br />
				更新日期：2013-06-26</p>
				<p>iphone,iphone 3G、
					iphone 3GS、iphone 4、iphone 5,ipod touch 3系统以上。</p>
			</div>
		</div>
		<div class="dl_symbian" id="shouji_box3" style="display:none">
			<div class="dl_downbtn1"><a href="/downLoad/ruyicai_S60_V5_1_2_web715.sisx"><img src="<%=request.getContextPath() %>/function/images/symbian_download.png" width="209" height="55" onmouseover="this.src='<%=request.getContextPath() %>/function/images/symbian_download2.png'" onmouseout="this.src='<%=request.getContextPath() %>/function/images/symbian_download.png'" /></a></div>
			<div class="dl_versiontxt">
				<p>版本：1.2<br />
					更新日期：2012-08-02<br />
				</p>
				<p>s60v5版的手机，如诺基亚5230/5233/5250等机型</p>
			</div>
		</div>
		<div class="dl_kjava" id="shouji_box4" style="display:none">
			<div class="dl_downbtn1"><a href="/downLoad/ruyicai_N73.jar"><img src="<%=request.getContextPath() %>/function/images/kjava_download.png" width="209" height="55" onmouseover="this.src='<%=request.getContextPath() %>/function/images/kjava_download2.png'" onmouseout="this.src='<%=request.getContextPath() %>/function/images/kjava_download.png'" /></a></div>
			<div class="dl_versiontxt">
				<p>版本：1.0<br />
				更新日期：2011-7-15</p>
				<p>诺基亚手机，如N73、E63等；
					其他品牌手机，如摩托E63，
				三星D508等；大部分国产手机。</p>
			</div>
		</div>
		<div class="dl_wp8" id="shouji_box5" style="display:none">
			<div class="dl_downbtn1"><a href="/downLoad/ruyicai_wp8_1.0_969.xap"><img src="<%=request.getContextPath() %>/function/images/kjava_download.png" width="209" height="55" onmouseover="this.src='<%=request.getContextPath() %>/function/images/wp8_download2.png'" onmouseout="this.src='<%=request.getContextPath() %>/function/images/wp8_download.png'" /></a></div>
			<div class="dl_versiontxt">
				<p>版本：1.0<br />
				更新日期：2013-5-23</p>
				<p>适用于winphone8系统的手机</p>
			<a href="http://www.windowsphone.com/zh-cn/store/app/%E5%A6%82%E6%84%8F%E5%BD%A9/b0bda9c5-2887-47e2-a487-ac9f481e8632" target="_blank" style="color: red;">【微软商店快速安装入口】</a>
			</div>
			<p style="position:absolute; top:420px; left:0">
			网页下载：通过微软应用商店下载安装登陆微软应用商店，搜索“如意彩”，
			点击应用图标，进入下载页面，点击“安装”下载到您的winphone手机中，安装后即可马上投注购彩。</p>
		</div>
	</div>
</div>
<div class="download_ff2">
	<h1>方法2：通过手机上网下载安装</h1>
	<p> <strong>用手机登陆 wap.ruyicai.com 直接下载安装。</strong></p>
	<p> 打开您的手机浏览器，输入wap.ruyicai.com进入如意彩WAP网站页面，点击&ldquo;手机客户端下载&rdquo;。进入下载页面，选择与您的手机对应的手机品牌和型号，点击&ldquo;立即下载&rdquo;下载到您的手机中，安装后即可马上投注购彩。&nbsp; </p>
</div>
<script>
	var NowFrame = 1;
	var MaxFrame = 5;
	var bStart = 0;
	function fnToggle(){
		var next = NowFrame + 1;
		if(next == MaxFrame+1){NowFrame = MaxFrame;next = 1;}
		if(bStart == 0){
			bStart = 1;
			setTimeout('fnToggle()', 2000);
			return;
		}else{
			oTransContainer.filters[0].Apply();
			document.images['oDIV'+next].style.display = "";
			document.images['oDIV'+NowFrame].style.display = "none";
			oTransContainer.filters[0].Play(duration=2);
			if(NowFrame == MaxFrame){NowFrame = 1;}else{NowFrame++;}
		}
		setTimeout('fnToggle()', 3000);
		
	}
	$(function(){
			fnToggle();
			$("#menubtn1").click(function(){
				$("#shouji_box1").show();
				$("#shouji_box2").hide();
				$("#shouji_box3").hide();
				$("#shouji_box4").hide();
				$("#shouji_box5").hide();
				$("#menubtn1").attr("src","/rchlw/function/images/btn_android_click.png");
				$("#menubtn2").attr("src","/rchlw/function/images/btn_iphone_normal.png");
				$("#menubtn3").attr("src","/rchlw/function/images/btn_symbian_normal.png");
				$("#menubtn4").attr("src","/rchlw/function/images/btn_kjava_normal.png");
				$("#menubtn5").attr("src","/rchlw/function/images/btn_wp8_normal.png");
			});
			$("#menubtn2").click(function(){
				$("#shouji_box1").hide();
				$("#shouji_box2").show();
				$("#shouji_box3").hide();
				$("#shouji_box4").hide();
				$("#shouji_box5").hide();
				$("#menubtn1").attr("src","/rchlw/function/images/btn_android_normal.png");
				$("#menubtn2").attr("src","/rchlw/function/images/btn_apple_click.png");
				$("#menubtn3").attr("src","/rchlw/function/images/btn_symbian_normal.png");
				$("#menubtn4").attr("src","/rchlw/function/images/btn_kjava_normal.png");
				$("#menubtn5").attr("src","/rchlw/function/images/btn_wp8_normal.png");
			});
			$("#menubtn3").click(function(){
				$("#shouji_box1").hide();
				$("#shouji_box2").hide();
				$("#shouji_box3").show();
				$("#shouji_box4").hide();
				$("#shouji_box5").hide();
				$("#menubtn1").attr("src","/rchlw/function/images/btn_android_normal.png");
				$("#menubtn2").attr("src","/rchlw/function/images/btn_iphone_normal.png");
				$("#menubtn3").attr("src","/rchlw/function/images/btn_symbian_click.png");
				$("#menubtn4").attr("src","/rchlw/function/images/btn_kjava_normal.png");
				$("#menubtn5").attr("src","/rchlw/function/images/btn_wp8_normal.png");
			});
			$("#menubtn4").click(function(){
				$("#shouji_box1").hide();
				$("#shouji_box2").hide();
				$("#shouji_box3").hide();
				$("#shouji_box4").show();
				$("#shouji_box5").hide();
				$("#menubtn1").attr("src","/rchlw/function/images/btn_android_normal.png");
				$("#menubtn2").attr("src","/rchlw/function/images/btn_iphone_normal.png");
				$("#menubtn3").attr("src","/rchlw/function/images/btn_symbian_normal.png");
				$("#menubtn4").attr("src","/rchlw/function/images/btn_kjava_click.png");
				$("#menubtn5").attr("src","/rchlw/function/images/btn_wp8_normal.png");
			});
			$("#menubtn5").click(function(){
				$("#shouji_box1").hide();
				$("#shouji_box2").hide();
				$("#shouji_box3").hide();
				$("#shouji_box4").hide();
				$("#shouji_box5").show();
				$("#menubtn1").attr("src","/rchlw/function/images/btn_android_normal.png");
				$("#menubtn2").attr("src","/rchlw/function/images/btn_iphone_normal.png");
				$("#menubtn3").attr("src","/rchlw/function/images/btn_symbian_normal.png");
				$("#menubtn4").attr("src","/rchlw/function/images/btn_kjava_normal.png");
				$("#menubtn5").attr("src","/rchlw/function/images/btn_wp8_click.png");
			});
		});
</script>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>
