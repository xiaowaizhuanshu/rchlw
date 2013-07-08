<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
	<s:if test="#request.jaToPage.size()>0">
	<s:iterator	value="#request.jaToPage">
		<div class="Feedbackmessage">
			<h2><font class="red">${username }</font>于${createtime } 留言：${content }</h2>
			<s:if test='!(reply=="null")'>
			<p><font class="blue">管理员</font>回复：${reply }</p>
			</s:if>
		</div>
	</s:iterator>
		<div class="Feedbackpage">${pageHtml }</div>
	</s:if>