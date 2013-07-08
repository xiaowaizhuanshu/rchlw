<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js" ></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<title>投注返回</title>
</head>
<body>
<s:if test="#request.jsonObject.errorCode==0">
	<s:if test="#request.allYears==1">
	<script type="text/javascript">
	  	if(self!=top){
			window.parent.document.location.href = '/rchlw/function/rules/allYearsbetSuccess.html?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}';
		}else{
			location.href = '/rchlw/function/rules/allYearsbetSuccess.html?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}&goUrl=${requestScope.gourl}';
		}
	</script>
	</s:if>
	<s:elseif test="#request.isZengCai==1">
	<script type="text/javascript">
		if(self!=top){
			window.parent.document.location.href = '/rchlw/function/rules/giftSuccess.jsp?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}';
		}else{
			location.href = '/rchlw/function/rules/giftSuccess.jsp?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}&goUrl=${requestScope.gourl}';
		}
	</script>
	</s:elseif>
	<s:else>
	<script type="text/javascript">
	  	if(self!=top){
			window.parent.document.location.href = '/rchlw/function/rules/betSuccess.jsp?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}';
		}else{
			location.href = '/rchlw/function/rules/betSuccess.jsp?cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}&goUrl=${requestScope.gourl}';
		}
	</script>
	</s:else>
</s:if>
<s:else>
<script type="text/javascript">
	if(self!=top){
			window.parent.document.location.href = '/rchlw/function/rules/betFail.jsp?msg=${requestScope.jsonObject.message}&cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}';
		}else{
			location.href = '/rchlw/function/rules/betFail.jsp?msg=${requestScope.jsonObject.message}&cai=${requestScope.cai}&urlAdd=${requestScope.urlAdd}&goUrl=${requestScope.gourl}';
		}
	</script>
</s:else>
<jsp:include page="/function/common/setBody.jsp"/>