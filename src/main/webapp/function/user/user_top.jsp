<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request);
%>
<script type="text/javascript" src="/rchlw/function/js/byc.properties.js"></script>
<script type="text/javascript">
	//增加获取当前地址并登录成功后跳转到这个地址
	$(function() {
		var reqUrl = window.location.href;
		$("#reqUrl").val(encodeURIComponent(reqUrl));
		$("#reqUrlLog").val(encodeURIComponent(reqUrl));
	});

	function loginRequrl() {
		if ($(".ButtonChannelBuy").hasClass("selected")) {
			loginShow();
			var str = "<form action='"+byc.address.users+"/login.jsp?reqUrl=/login.jsp' id='topjump' method='post' target='_blank'></form>";
			$("body").append(str);
			$("#topjump").submit();
			$("body").remove(str);
		} else {
			window.location.href = byc.address.users+"/login.jsp?reqUrl=" + $("#reqUrl").val();
		}
	}
</script>

<div class="HeadTopLogin">
<div class="box">
<dl class="LoginAgo" id="top_user">
<input id="reqUrl" type="hidden" value="" name="reqUrl" class="SelectedAddressInput">
<%if(user!=null&&!user.getJSONObject("value").equals("null")&&!(user.getJSONObject("value").isEmpty())){ %>
<% user.put("t_name",NameUtil.getNameUtilJson(user.getJSONObject("value"))) ;%>
	<%//1.判断用户是登陆？已登录，则获取用户信息 %>
		<input type="hidden" value="<%=user.get("t_name") %>" id="nick">
			<%//1.2有昵称则正常跳转回首页 %>
				<!-- 登陆后 账户信息及账户操作 start -->
				<script type="text/javascript">
					balanceDivDis("topLogin_money", "", "freeze_money");
				</script>
				<dl class="LoginLater">
					<dt>
						<font>
							欢迎您，
						</font>
						<a href="/rchlw/function/rules/user.jsp?key=33" target="_blank">
							<%=user.get("t_name") %>
						</a>
					</dt>
					<dd>
						<div class="SelectAccount" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))"
						onclick="javaScript:window.location.href='/rchlw/function/rules/user.jsp?key=23'">
							我的账户
							<span class="SelectTriangle">
							</span>
							<span class="line">
							</span>
							<dl>
								<dt><em>可用余额：<i>¥</i><i id="topLogin_money"></i>元</em></dt>
								<dd><em>冻结资金：<i>¥</i><i id="freeze_money"></i>元</em></dd>
							</dl>
						</div>
					</dd>
					<dt>
						|<a href="/rchlw/function/rules/user.jsp?key=4" target="_blank">充值</a>
						|<a href="/rchlw/function/rules/user.jsp?key=11" target="_blank">提款</a>
						|<a href="javascript:ajaxLoginOut();">退出</a>
					</dt>
				</dl>
				<!-- 登陆后 账户信息及账户操作end -->
<%}else{%>
			<dt><em>您好，欢迎来到如意彩！</em></dt>
			<dt><a href="javaScript:loginRequrl();">请登录</a><a href="http://users.ruyicai.com/register/register_new.jsp">免费注册</a></dt>
			<dd>
				<div class="SelectLogin" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">
					免注册登录
					<span class="line">
					</span>
					<dl>
						<dt>
							<a href="http://users.ruyicai.com/function/unitedLogin!qqUnitedHandlyLogin"><img src="<%=request.getContextPath() %>/function/images/login_QQ.gif" />QQ</a>
						</dt>
						<dd><a href="http://users.ruyicai.com/function/unitedLogin!alipayHandyLogin"><img src="<%=request.getContextPath() %>/function/images/login_zhiFuBao.gif" />支付宝</a>
						</dd>
					</dl>
				</div>
			</dd>
			<input id="reqUrlLog" type="hidden" value="" name="reqUrl" class="SelectedAddressInput">
			<input type="hidden" value="0"  name="rank_value" />
<%} %>
		<div class="QuickLink">
			<a href="/rchlw/index.jsp">首页</a>|<a href="/rchlw/function/include/downLoadClient.jsp">手机购彩
			</a>|<a href="http://www.ruyicai.com/cms/index.html" target="_blank">帮助中心</a>|
			<a href="/rchlw/news/category_activityList.jsp?cpage=1&begin=0">活动专题</a>|
			<a href="/rchlw/function/rules/customMessage.jsp" style="padding-right:0px;">留言反馈</a>|<a href="http://bbs.ruyicai.com" >论坛</a>
		</div>
		<!-- 右侧快速链接 end -->
		</dl>
	</div>
</div>
