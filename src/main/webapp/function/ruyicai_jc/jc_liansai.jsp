<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<s:if test="#request.leagueList.size()==0">
<li>无赛事</li>
</s:if>
<s:else>
	<s:iterator value="#request.leagueList" id="stat">
				<li><input name="" type="checkbox" checked="checked" value="" onclick="liansaiOne($(this))"/>
<s:property value="#stat"/></li>
</s:iterator>
</s:else>
