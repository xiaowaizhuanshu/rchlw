<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%><%@page 
import="com.jrt.invokeLot.util.JSONReslutUtil,net.sf.json.JSONObject"%>
<% 
JSONObject isObj =  JSONReslutUtil.getUserInfo(request);
	JSONObject value=isObj.getJSONObject("value");
if(value.getString("email").equals(value.getString("userName"))
		&&("null".equals(value.getString("mobileid"))||value.getString("mobileid").length()<5)){
%>{false}<%}else{ 
%>{true}<%} %>