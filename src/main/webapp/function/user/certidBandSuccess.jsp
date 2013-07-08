<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));
	String email = tuser.getEMAIL();
%>
<% if (email==null || email.length()==0){ %>
<s:include value="/function/user/certidBand.jsp"></s:include>  <%};if("111111111111111111".equals(tuser.getCERTID()) || tuser.getCERTID()==null || tuser.getCERTID().length()==0){%>
<s:include value="/function/user/certidBand.jsp"></s:include> <%} %>
 <s:else>
<!--身份证绑定-->	

<h2>身份证绑定</h2>
<div class="account_mailAddress">
	<div class="account_idBinding">您已绑定身份证！</div>
	<font color="red"><s:property value="#request.message"/></font>
	<table border="1" cellspacing="0" cellpadding="0">
		<tr>
			<th width="118">真实姓名</th>
			<td><span class="idBinding_text">
				<%if ("".equals(tuser.getNAME().trim())){%><s:property value=" "/><% }else{ %>
				<%=tuser.getNAME().substring(0,1)+"***" %><% } %>
			</span></td>
		</tr>
		<tr>
			<th width="118">身份证号</th>
			<td><span class="idBinding_text">
				<%if("".equals(tuser.getCERTID().trim())){ %><s:property value=" "/><%} else if (tuser.getCERTID().trim().equals("111111111111111111")){%>
				<s:property value=" "/> <%}else{ %>
				<%=tuser.getCERTID().substring(0,14)+"****" %><%} %>
			</span></td>
		</tr>
	</table>
</div>

<script>
	$(function(){
		$(".a_idBinding").addClass("selected");
	});
</script>
</s:else>