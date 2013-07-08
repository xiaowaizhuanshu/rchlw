<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jcarousellite_1.0.1.js">
</script>
<!-- 购彩大厅 -->
	<div class="maintop_public">
		<div class="top_public">
			<a href="<%=request.getContextPath() %>/index.jsp" target="_blank">
	<s:if test="#session.CHANNEL=='750'">
		<img src="<%=request.getContextPath() %>/function/images/91activelogo.gif" />
		</s:if>
		<s:else>
		<img src="<%=request.getContextPath() %>/function/images/logo_zt.gif" />
		</s:else>
				
			</a>
		</div>
	
		<div class="top2_public2" style="margin-left:5px;">
			<span>
				<a href="http://www.ruyicai.com/cms/index.html" title="帮助中心" style="border:none;padding-right:0px;"
				target="_blank">
					帮助中心
				</a>
			</span>
			<b>|</b>
			<span>
				<a href="<%=request.getContextPath() %>/news/category_activityList.jsp?cpage=1&begin=0" title="活动专题" style="border:none;padding-right:0px;"
				target="_blank">
					活动专题
				</a>
			</span>
			<b>|</b>
			<span>
				<a href="<%=request.getContextPath() %>/function/rules/customMessage.jsp" title="留言反馈" style="border:none;padding-right:0px;"
				target="_blank">
					留言反馈
				</a>
			</span>
			<b>|</b>
			<span>
				<a href="<%=request.getContextPath() %>/index.jsp" title="返回首页" target="_blank">
					返回首页
				</a>
			</span>
		</div>
		<div id="top_activity" class="top2_public1" style="float:right;">
			<script>
				$(function() {
					topActivity();
				});
			</script>
		</div>
		<!-- 弹出框 开始 -->
	<jsp:include page="/function/public_touZhuAlert_dipin.jsp"></jsp:include>
	<!-- 弹出框 结束 -->
	</div>
