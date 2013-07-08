<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));
%>
<script type="text/javascript">balanceAdtil("deposit_amount_user","freeze_amout_user","username");</script>
<div class="txsqdd">
      <div class="zhzxtitle">头像上传</div>
      <div class="zhqlrbox2">
        <div class="zhqlsctx">
          <div class="zhqltxbg"><a href="/rchlw/function/rules/user.jsp?key=70">
          <%if(!"".equals(tuser.getHEADPATH())) {%>
	      <img src="<%=tuser.getHEADPATH() %>" width="100" height="100" id="headpath"/>
	      <%}else{ %>
	      <img src="/rchlw/function/images/defaulttx.gif" width="100" height="100"  id="headpath"/>
	      <%} %>
          </a></div>
          <div class="zhqltxsm">100x100像素大小</div>
        </div>
        <div class="zhqltxscan">
          <div class="hyuser">欢迎，<span id="username"></span></div>
          <div class="zhqlsqtxbtn"><a href="javaScript:;" onclick='loginShow("UploadImgAlert",true)'>
          <img src="/rchlw/function/images/zhqlsqtxbtn.gif" width="90" height="32" border="0" /></a></div>
        </div>
      </div>
      <div class="space10">&nbsp;</div>
      <p>&nbsp;&nbsp;提示：上传头像成功后若头像没有变化请手动刷新页面或清除浏览器缓存!</p>
  </div>
<script>
	$(function(){
		$(".a_uploadImg").addClass("selected");
	});
</script>
<jsp:include page="/function/user/uploadImgAlert.jsp"></jsp:include>