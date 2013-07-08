<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<title>方案认购详情</title>
<meta name="keywords" content="认购用户，认购金额，所占比例，保底金额">
<meta name="description" content="本方案参与认购用户，认购金额，所占比例，保底金额详情">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/tuserAll.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js" ></script>
</head>
<body>
   <div id="body">
   <div id="header">
<jsp:include page="/function/common/ruyicai_include_common_top_hemai.jsp"/>
	 </div>
	 <div id="main">
	 	<div class="offerbuy_top"><font class="red1"><s:property value="%{#parameters.caselotid[0]}" /></font>方案认购详情</div>
	 	<div class="offerbuy">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
			  <thead>
			  <tr>
				<td>认购用户名</td>
				<td>认购金额（元）</td>
				<td>所占比例</td>
				<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 || #request.canyuList.caseLot.displayState==4"> 
				<th>保底金额（元）</th>
				</s:if><s:else>
				<th>奖金（元）</th>
				</s:else>
			  </tr>

			  </thead>
			  <tbody>
			  <s:set name="allAmt" value="0"/>
			  <s:iterator id="list" value="#request.canyuList.caseLotBuyAndUser">
			  <tr>
				<td><font <s:if test="#list.caseLotBuy.buyType==1"> class="red_big"</s:if><s:elseif test="#request.userno==#list.userinfo.userno"> class="blue1_big"</s:elseif>>
				<s:if test='#list.userinfo.nickname==null||#list.userinfo.nickname.equals("null")||#list.userinfo.nickname.equals("")||#list.userinfo.nickname.equals(" ")' >***<s:property value="#list.userinfo.mobileid.substring(6)" /></s:if><s:else><s:property value="#list.userinfo.nickname" /></s:else>
				<s:if test="#list.caseLotBuy.buyType==1">（发起人）</s:if></font></td>
				<td>${list.caseLotBuy.num}</td>
				<td>
				<s:property value="#list.caseLotBuy.proportion"/>
				%</td>
				<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 || #request.canyuList.caseLot.displayState==4"> 
				<th>${list.caseLotBuy.freezeSafeAmt}</th>
				</s:if><s:else>
				<s:if test="#request.canyuList.caseLot.displayState==6"> 
				<th>${list.caseLotBuy.prizeAmt}</th>
				<s:set id="allAmt" value="#allAmt+#list.caseLotBuy.prizeAmt" />
				</s:if>
				<s:else>
				<th>0.00</th>
				</s:else>
				</s:else>

			  </tr>
			  </s:iterator>
			   </tbody>
			   <tfoot>

			  <tr>
				<td>总计</td>
				<td><s:property value="#request.canyuList.caseLot.buyAllMoeny" />
				</td>
				<td>
				<s:property value="#request.canyuList.caseLot.buyAllProportion"/>
				%</td>
				<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 || #request.canyuList.caseLot.displayState==4"> 
				<th>${canyuList.caseLot.safeAmt}</th>
				</s:if><s:else>
				<th>${canyuList.allamt}</th>
				</s:else>
			  </tr>
			 </tfoot>

			</table>

		</div>
	 </div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
</div>
<jsp:include page="/function/common/ruyicai_include_common_login_div.jsp"/>
<jsp:include page="/function/common/tishi.jsp"/>
<jsp:include page="/function/query/case/fanganList.jsp"/>
<jsp:include page="/function/query/case/yingliList.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>