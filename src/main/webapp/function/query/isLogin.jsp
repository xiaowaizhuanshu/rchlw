<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@page import="com.jrt.invokeLot.util.JSONReslutUtil"%>
<%@page import="net.sf.json.JSONObject"%>
<% 
JSONObject isObj =  JSONReslutUtil.getUserNo(request);
if(isObj!=null&&isObj.getString("errorCode").equals("0")){%>{true}<%}else{ 
%>{false}<%} %>