<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%> 
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request);
%>
<%if(user==null||user.getJSONObject("value").equals("null")||(user.getJSONObject("value").isEmpty())){ %>
	<div class="zuijingc_top">最近购彩</div>
	<div class="zuijingc_con"><font class="red2"><a href="javaScript:loginRequrl();" title="登录">登录</a></font>后显示最近购买的彩种</div>
<%}else{ %>
	<div class="zuijingc_top">最近购彩</div>
		<div class="zuijingc_con">
		<s:property value="#request.message"/>
			<ul>
			<s:property value="#request.jsonlotno"/>
				<s:iterator id="recentLottery" value="#request.recentLotteryList">
						<li><s:property value="#recentLottery" escape="false"/></li>
				</s:iterator>
			</ul>
		</div>
<%} %>
    