<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/byc.tld" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<meta name="keywords" content="彩票预测,中国足彩网,中国竞彩网,中国竞猜网,彩民新闻" />
<title>彩票资讯 – 博雅彩 – 彩票资讯|购彩资讯|彩民新闻|专家推荐|媒体预测</title>
<meta name="description" content="彩票资讯是博雅彩彩票资讯频道为您提供福彩、体彩、足彩、竞彩和高频彩等彩票的信息、推荐、分析、点评等免费彩票预测服务" />
<link href="${ctx}/function/css/helper.css" rel="stylesheet" type="text/css">
<link href="${ctx}/function/css/util.css" rel="stylesheet" type="text/css">
<link href="${ctx}/function/css/newsAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${ctx}/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="${ctx}/function/js/jqueryJS/My97DatePicker/WdatePicker.js"></script> 
<script type="text/javascript" src="${ctx}/function/js/jqueryJS/jquery.d.imagechange.min.js"></script>
<script type="text/javascript" src="${ctx}/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="${ctx}/function/js/util.js"></script>
<script type="text/javascript" src="${ctx}/function/js/luck/main_luck.js"></script>
<script type="text/javascript" src="${ctx}/function/js/luck/luck_stake_main.js"></script>
</head>
<body>
<div id="body">
	<script>$(function(){toplogo('common',"");});</script>
 	<span id="common"></span>
 	<div id="main">
 	
	<div class="bzzx_wrap">
    <!--中间部分开始-->
    <div class="bzzx_content">
     	<!--左侧开始-->
      	<div class="bzzx_left">
        	<div class="bzzx_leftmenu">
	        	<div class="bzzxltitle">
	          		<a href="/cms/index.html"><img src="${ctx}/function/images/helper/bzzxtitlepic.gif" width="96" height="24" /></a>
	        	</div>
        		<div class="bzzxlnav" id="bazz">
          			<dl class='cattree'>
						<dt class='cattree1'><a href='${ctx}/help/helper!list.action?cc=1&cp=1'>功能指引</a></dt>
					</dl>
					<dl class='cattree'>
						<dt class='cattree1'><a href='${ctx}/help/helper!list.action?cc=2&cp=2'>特色功能</a></dt>
					</dl>
          			<dl class='cattree'>
						<dt class='cattree1'><a href='${ctx}/help/helper!list.action?cc=3&cp=3'>彩票玩法</a></dt>
					</dl>
					<dl class='cattree'>
						<dt class='cattree1'><a href='${ctx}/help/helper!list.action?cc=4&cp=4'>常见问题</a></dt>
					</dl>
					<dl class='cattree'>
						<dt class='cattree1'><a href='${ctx}/help/helper!list.action?cc=5&cp=5'>彩票术语</a></dt>
					</dl>
        		</div>
      		</div>
    		<div class="bzzxlyfkpic" style="margin-top:10px; margin-bottom:10px;">
        		<a href="/rchlw/function/rules/customMessage.jsp"><img src="${ctx}/function/images/helper/bzzxlyfk.gif" width="160" height="60" border="0" /></a>
      		</div>
     	</div>
      	<!--左侧结束-->
      	
      	<!--右侧开始-->
      	<div class="bzzxright">
        	<div class="bzzxrbox">
          		<div class="bzzxrtitle">${currentPosition}</div>
          		<s:iterator value="page.result" status="stu">
          		<div class="bzzxrnr">
           			<ul class="bzzixunlist3">
  						<li><a href="${ctx}/help/helper!view.action?id=${id}&cp=${cp}" title="${title}" ><b>${title}</b></a></li>
           			</ul>
       			</div>
          		</s:iterator>
				<div class="dede_pages">
					<script>
						function jumpPage(pageNo) {
							$("#pageNo").val(pageNo);
							$("#pageForm").submit();
						}
					</script>
			   		<form id="pageForm" action="${ctx}/help/helper!list.action?cc=${cc}&cp=${cp}" method="post">
		      			<input type="hidden" id="pageNo" name="pageNo" value="${pageNo}" />
		      			<input type="hidden" id="pageNo" name="pageSize" value="${pageSize}" />
		      			<input type="hidden" id="pageNo" name="page.pageNo" value="3" />
						<a href="javascript:jumpPage(1)">首页</a>
						<s:if test="page.hasPre"><a href="javascript:jumpPage(${page.prePage})">上一页</a></s:if>
						<s:if test="page.hasNext"><a href="javascript:jumpPage(${page.nextPage})">下一页</a></s:if>
						<a href="javascript:jumpPage(${page.totalPage})">末页</a>
						 第${page.pageNo}页,共${page.totalPage}页
					</form>
				</div>
        	</div>
      </div>
      <!--右侧结束-->
    </div>
    <!--中间部分结束-->
  </div>
  
  </div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>