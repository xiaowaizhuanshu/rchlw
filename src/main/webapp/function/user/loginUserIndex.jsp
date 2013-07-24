<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%response.setHeader("Pragma","No-cache");
response.setHeader("Cache-Control","no-cache");
response.setDateHeader("Expires", 0);
response.flushBuffer();%> 
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));
%>
<script type="text/javascript">$(function(){balanceAdtil('deposit_amount_user','freeze_amout_user','username');/*getUserScore("scores");*/});  </script>
<h1>账户全览</h1>
<div class="zhqlrbox">
    <div class="zhqlsctx">
      <div class="zhqltxbg">
      <%if(!"".equals(tuser.getHEADPATH())) {%>
        <img src="<%=tuser.getHEADPATH() %>" width="100" height="100"  id="headpath"/>
      <%}else{ %>
      	<img src="<%=request.getContextPath() %>/function/images/defaulttx.gif" width="100" height="100" id="headpath" />
      <%} %>
      </div>
      <div class="zhqltxsm">100x100像素大小</div>
    </div>
    <div class="zhqltxscan">
      <div class="hyuser">欢迎，<span id=""><%=tuser.getNICKNAME() %>  </span></div>
    </div>
    <div class="zhqlzhxx">
      <!-- 当前积分：<a href="/rchlw/function/rules/user.jsp?key=69" title="查看积分详情"><font class="redword" id="scores"></font></a>分 --> 
      <%-- <span class="blueword"><a href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/wodezhanghu/2012/0330/41.html?fid=5&id=12" title="积分规则">积分规则>></a></span> --%>
      <span class="zhqlcz"><a href="/rchlw/function/rules/user.jsp?key=4"><img src="<%=request.getContextPath() %>/function/images/zhqlczbtn.gif" width="42" height="22" border="0"/></a></span>
      <span class="zhqltk"><a href="/rchlw/function/rules/user.jsp?key=11"><img src="<%=request.getContextPath() %>/function/images/zhqltkbtn.gif" width="42" height="22" border="0"/></a></span>
      <br/>
      可用余额：<font class="bigword redword" id="deposit_amount_user"></font>元 
      <span class="zjdj">冻结资金：<font class="bigword" id="freeze_amout_user">0.00</font>元</span></br>
      账户安全：<%if (tuser.getNAME()!=null && !"".equals(tuser.getNAME().trim()) && !"null".equals(tuser.getNAME())) {%><font class="userid_right">已实名认证</font><%}else{ %><font class="userid_error"><a href="/rchlw/function/rules/user.jsp?key=33" title="立即绑定" >立即绑定&gt;&gt;</a></font><%} %>
	<%if (tuser.getEMAIL()!=null && !"".equals(tuser.getEMAIL().trim()) && tuser.getEMAIL().indexOf("@")>-1) {%><font class="email_right">邮箱已绑定</font><%}else{ %><font class="email_error"><a href="/rchlw/function/rules/user.jsp?key=36" title="立即绑定" >立即绑定&gt;&gt;</a></font><%} %>
	<%if (tuser.getMOBILEID()!=null && !"".equals(tuser.getMOBILEID().trim()) ){ %><font class="phone_right">电话已绑定</font> <%}else{ %><font class="phone_error"><a href="/rchlw/function/rules/user.jsp?key=10" title="立即绑定" >立即绑定&gt;&gt;</a></font><%} %>
    </div>
  </div>
<h1>热销彩种</h1>
<div class="myAccount_main" id="hotlotno">
<script>$(function(){reHtmljsp(67,'lotNo=F47104-F47103-T01002&type=loginuser',false,"hotlotno",false);});</script>
</div>
<div class="myAccount_record"><h1>最近投注记录</h1><span class="myAccount_show"><a href="/rchlw/function/rules/user.jsp?key=0" title="查看详细投注记录">查看详细投注记录 &gt;&gt;</a></span></div>
<div class="myAccount_recent" id="newBetSelect">
</div>
<script>$(function(){reHtmljsp(29,'',true,"newBetSelect",false);});</script>
<script>
	$(function(){
		$(".a_javaEye").addClass("selected");
		$(".wenti").hover(function(){
			$(".account_help_txt").toggle("fast");
		});
	});
</script>
<jsp:include page="/function/user/uploadImgAlert.jsp"></jsp:include>
