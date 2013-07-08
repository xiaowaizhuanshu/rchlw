	<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
    String mobile = null;
    String userName = "";
	if(tuserinfo != null && tuserinfo.getJSONObject("value") != null){
	 	mobile = tuserinfo.getJSONObject("value").getString("mobileid");
	 	userName = tuserinfo.getJSONObject("value").getString("userName");
	}
%>
<script type="text/javascript">
	//同时查询开奖短信设置\中奖短信设置\追号剩余3期提醒
	$(function(){
		$(".a_mobileService").addClass("selected");
		selectSMS("qxkj","1");
		selectSMS("qxzj","2");
		selectSMS("qxzh","4");
		}
	)
</script>
<h2>手机服务</h2>
<%if (mobile==null || mobile.length()<5){ %>
	<div class="accountService_prompt">温馨提示：您尚未绑定手机！现在就绑定手机，之后即可<b>免费定制</b>以下短信服务，绑定手机无需任何费用。<a href="/rchlw/function/rules/user.jsp?key=50" title="立即绑定">立即绑定>></a></div>
	<div class="accountService_binding">
		<dl class="CheckBox" >
			<dd class="accountService_bindingWords">密码找回</dd>
			<dd class="accountService_bindingText">当您忘记密码时，可通过短信找回您的密码。</dd>
		</dl>
		<dl class="CheckBox" >
			<dd class="accountService_bindingWords">开奖通知</dd>
			<dd class="accountService_bindingText">当您购买的彩种开奖后，将开奖结果用短信息通知您。</dd>
		</dl>
		<dl class="CheckBox" >
			<dd class="accountService_bindingWords">中奖通知</dd>
			<dd class="accountService_bindingText">当您购买的彩票中奖后，将中奖详情用短信息通知您。</dd>
		</dl>
		<dl class="CheckBox" >
			<dd class="accountService_bindingWords">追号提醒</dd>
			<dd class="accountService_bindingText">当你定制的追号（期数≥10）还剩三期时，短信提醒您。</dd>
		</dl>
	</div>
<%}else{ %>
	<div class="accountService_phone">已绑定手机：
	<%if (mobile==userName){ %><%= mobile.substring(0,7)+"****" %><%}else{ %><%= mobile.substring(0,7)+"****" %>
	<a href="javascript:phoneUnBundling();" title="我要解绑"><img src="/rchlw/function/images/Solution.gif" /></a><%} %></div>
	<div class="accountService_binding">
		<div class="accountService_checkbox">
			<font><img src="/rchlw/function/images/myAccount_checkBox.gif" width="13" height="13" /></font>
			<span class="accountService_bindingWords">密码找回</span>
			<span class="accountService_bindingText">当您忘记密码时，可通过短信找回您的密码。</span>
			<span class="accountService_checkboxImg"></span><span class="huizi">已定制系统默认</span>
		</div>
		<dl class="CheckBox" value="1" >
			<dt class="light" id="qxkj" onclick="CheckBox($(this));channelKJ('qxkj','1');"></dt>
			<dd class="accountService_bindingWords">开奖通知</dd>
			<dd class="accountService_bindingText">当您购买的彩种开奖后，将开奖结果用短信息通知您。</dd>
			<dd class="accountService_bindingImg"></dd>
			<dd class="huizi" ><span  id="info_qxkj">已定制</span>   <span> 此服务完全<b>免费</b></span></dd>
		</dl>
		<dl class="CheckBox" value="2" >
			<dt class="light" id="qxzj" onclick="CheckBox($(this));channelKJ('qxzj','2');"></dt>
			<dd class="accountService_bindingWords">中奖通知</dd>
			<dd class="accountService_bindingText">当您购买的彩票中奖后，将中奖详情用短信息通知您。</dd>
			<dd class="accountService_bindingImg"></dd>
			<dd class="huizi">
				<span  id="info_qxzj">已定制</span>
				<span> 此服务完全<b>免费</b></span>
			</dd>
		</dl>
		<dl class="CheckBox" value="4" >
			<dt class="light" id="qxzh" onclick="CheckBox($(this));channelKJ('qxzh','4');"></dt>
			<dd class="accountService_bindingWords">追号提醒</dd>
			<dd class="accountService_bindingText">当你定制的追号（期数≥10）还剩三期时，短信提醒您。</dd>
			<dd class="accountService_bindingImg"></dd>
			<dd class="huizi" ><span  id="info_qxzh">已定制</span>   
			<span> 此服务完全<b>免费</b></span></dd>
		</dl>
	</div>
<%} %>


