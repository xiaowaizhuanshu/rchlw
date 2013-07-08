<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<title>如意彩-投注结果</title>
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
</head>
<body>
<div id="body">
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
  <div class="chzhsuc_main">
   	  <div class="chzhsuc_top" style="margin:50px 0px 0px 230px;"><span class="chzhsuc_img"><img src="/rchlw/function/images/duigou.gif"  /></span><span class="chzhsuc_zi">恭喜<span id="nick_name"><script>check_nickName();</script></span>，您的投注方案已提交成功！</span></div>
   	  <style>
   	  .chzhsuc_other a{color:#0F3F94; text-decoration:underline;}
   	  </style>
   	  <div class="chzhsuc_other" style="margin-left:350px;">您还可以<span id="xiangqingDIV"><script>goXiangqing("xiangqingDIV");</script></span>，或者<span id="jxtz"><script>getCaiZhong("scai","jxtz")</script></span>。</div>　
	  <div class="space10">&nbsp;</div>
	  <div class="chzhsuc_con" style="margin-left:270px;">
			<div class="chzhsuc_list" style="position:relative;"><span style="position:absolute; left:110px; top:10px; display:none;" class="HomePageBGBox ListAddClass"></span><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/ssclogo41.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/ssc_zxwenzi.gif"/></span>
			<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssc.jsp" title="立即购买"><span class="caizh_gm">立即购买>></span></a></div>
			<div class="chzhsuc_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/11x5logo41.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/11x5_zxwenzi.gif"/></span><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_11xuan5.jsp" title="立即购买"><span class="caizh_gm">立即购买>></span></a></div>
			<div class="chzhsuc_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/ssqlogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_ssq.gif"/></span><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp" title="立即购买"><span class="caizh_gm">立即购买>></span></a></div>
			<div class="chzhsuc_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/dltlogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_dlt.gif"/></span><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp" title="立即购买"><span class="caizh_gm">立即购买>></span></a></div>
	 </div></div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>