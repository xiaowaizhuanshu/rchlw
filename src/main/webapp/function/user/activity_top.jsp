<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<script type="text/javascript">
   //增加获取当前地址并登录成功后跳转到这个地址
   $(function(){
		var reqUrl = window.location.href;   		
		$("#reqUrl").val(encodeURIComponent(reqUrl));
   });
</script>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request);
%>
<input id="reqUrl" type="hidden" value="" name="reqUrl" class="SelectedAddressInput">
<%if(user!=null&&!user.getJSONObject("value").equals("null")&&!(user.getJSONObject("value").isEmpty())){ %>
<% user.put("t_name",NameUtil.getNameUtilJson(user.getJSONObject("value"))) ;%>
	<input type="hidden" value="<%=NameUtil.getNameUtilJson(user.getJSONObject("value")) %>"    id="nick">
	<%//1.2有昵称则正常跳转回首页 %>
	<div  id="userDivDis">欢迎您，<font class="blue" ><%=user.get("t_name") %></font>&nbsp;</div>
	
<%}else{%>
<s:if test="#session.CHANNEL=='636'"><%//2.用户没有登陆， 判断是否是彩多多用户，如果是则跳转到彩多多用户注册页面，进行用户注册  %>
<script>
window.location.href="/rchlw/function/cooperation/coop_inputUserInfo.jsp "; 
</script>
</s:if>
<s:else> <%//3.用户没有登陆  也不是彩多多的用户则 跳回首页  %>
<span>您好，欢迎来到博雅彩！</span>
<span><a href="javaScript:loginRequrl();" title="请登录">请登录</a></span>
<span><a href="http://testuser.boyacai.com/register/register_new.jsp" title="免费注册">免费注册</a></span>

</s:else>
<%} %>
<script type="text/javascript">
  function loginRequrl(){
    window.location.href = "http://test.boyacai.com/login.jsp?reqUrl="+$("#reqUrl").val();
  }
         function chanage(id1,id2,id3,id4,divType){
      		 $("#"+id1).toggle();
      		 $("#"+id2).toggle();
      		 $("#"+id3).toggle();
      		 $("#"+id4).toggle();
      		 $.ajax({
      			url	: '/rchlw/function/tuserinfoAction!setMoneryDivShowType?divShowType='+divType,
      			type:"POST",//数据发送方式
      			dataType:'html',//接受数据格式
      			success:function(data){
      				
      			}		
      		});
          }
       </script>