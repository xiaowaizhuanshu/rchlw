<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<s:iterator id="list"  value="#request.celebrityList" >
<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))"  onclick='$("#cz > li").removeClass("selected");$("#lotno").val("");$("#search").val("<s:property value="#list.text" />");$("#displayState").val();$("#CaseSelectForm").submit();'><s:property value="#list.text" /></a>
</s:iterator>
