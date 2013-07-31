<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request);
%>
<%if(user!=null&&!user.getJSONObject("value").equals("null")&&!(user.getJSONObject("value").isEmpty())){ %>
<div class="AlreadyLogin" >
				<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" href="/rchlw/function/rules/user.jsp?key=0" title="我的投注记录" >我的投注记录<!--(<font class="red2">0</font>)--></a>
				<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" href="/rchlw/function/rules/user.jsp?key=6" title="我的账户明细" >我的账户明细 <!--(<font class="red2">0</font>)--></a>
				<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" href="/rchlw/function/rules/user.jsp?key=1" title="我的追号方案" >我的追号方案<!--(<font class="red2">0</font>)--></a>
				<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" class="account" href="/rchlw/function/rules/user.jsp?key=23" title="查看我的账户 " >查看我的账户&gt;&gt;</a>
</div>
<%}else{ %>

<div class="index_lore">
    <a href="javascript:void(0)" onclick="javascript:loginRequrl();" class="login_btn_phone">用户登录</a>
    <a href="javascript:void(0)" onclick="javaScript:window.location.href='http://users.ruyicai.com/register/register_new.jsp'" class="regist_btn_phone">用户注册</a>

</div>
<%}%>