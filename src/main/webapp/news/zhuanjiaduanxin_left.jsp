<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib uri="/WEB-INF/tangs.tld"  prefix="tangs"%>
<!--左边-->
        <div class="main_left">
  	     <div class="bt"><img src="<%=request.getContextPath() %>/function/images/zhuanjia_message.gif" width="190" height="29"></div>
		<div id="PARENT">
		<tangs:ryc_newslist value="10" web_id="%{#parameters.website_Properties_id[0]}"  channelCn="双色球">
		<ul id="nav">
		<li><a href="javaScript:zhuanjiaTree(${id})" >
		<span class="nochoose" id="choose_${id }">${name_cn}专区</span></a>
		 <ul id="ul_${id}" style="display:none" class="expanded">
		 <tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="专家短信" channelExpress="#attr['name_cn']">
		  <li><a href="<%=request.getContextPath() %>/news/news_zhuajiaduanxin.jsp?code1=${id }&code=${channelId}" >${title}</a></li>
		</tangs:ryc_newslist>
		 </ul>
		</ul>
		</tangs:ryc_newslist>
		<tangs:ryc_newslist value="10" web_id="%{#parameters.website_Properties_id[0]}"  channelCn="福彩3D">
		<ul id="nav">
		<li><a href="javaScript:zhuanjiaTree(${id})" ><span class="nochoose" id="choose_${id }">${name_cn}专区</span></a>
		 <ul id="ul_${id}" style="display:none" class="expanded">
		 <tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="专家短信" channelExpress="#attr['name_cn']">
		  <li><a href="<%=request.getContextPath() %>/news/news_zhuajiaduanxin.jsp?code1=${id }&code=${channelId}" title="${title}" id="title_${id }" >${title}</a></li>
		</tangs:ryc_newslist>
		 </ul>
		</ul>
		</tangs:ryc_newslist>
		<tangs:ryc_newslist value="10" web_id="%{#parameters.website_Properties_id[0]}"  channelCn="排列3">
		
		<ul id="nav">
		<li><a href="javaScript:zhuanjiaTree(${id})" ><span class="nochoose" id="choose_${id }">${name_cn}专区</span></a>
		
		
		 <ul id="ul_${id}" style="display:none" class="expanded">
		 <tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="专家短信" channelExpress="#attr['name_cn']">
		  <li><a href="<%=request.getContextPath() %>/news/news_zhuajiaduanxin.jsp?code1=${id }&code=${channelId}" title="${titl}" id="title_${id }" >${title}</a></li>
		</tangs:ryc_newslist>
		 </ul>
		
		</ul>
		</tangs:ryc_newslist>
		
	  </div>
  	<div class="zhj_bt"><img src="<%=request.getContextPath() %>/function/images/kaijiang_message.gif" width="190" height="29"></div>
		<div id="PARENT">
		<ul style="overflow:hidden;">
		 <tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="开奖短信" >
		 	<li style="background:#FFF; text-align:center; line-height:24px; border-bottom:1px dotted #DBDBDB; margin:0px 10px;">
		 	<a class="light" style="text-align:center;" href="<%=request.getContextPath() %>/news/news_zhuajiaduanxin.jsp?code1=${id }&code=${channelId}" title="${titl}" >${title}</a></li>
		 </tangs:ryc_newslist>
		 
		
		</ul>
		
		
	  </div>
	  
	</div>
	<script type="text/javascript">
var flg="1";
function zhuanjiaTree(treeId){
$("#ul_"+treeId).toggle();
if($("#choose_"+treeId).attr("class")=="choose"){
		$("#choose_"+treeId).attr("class","nochoose");
		
	}else{
		$("#choose_"+treeId).attr("class","choose");
	}};
	
$(function(){
		$("#ul_"+GetQueryString("code")).css("display","block");
		$("#kj_"+GetQueryString("code")).css("display","block");
		$("#choose_"+GetQueryString("code")).attr("class","choose");
		$("#zh_"+GetQueryString("code1")).css("display","block");
		$("#kj_"+GetQueryString("code1")).css("display","block");
		$("#title_"+GetQueryString("code1")).attr("class","zhj_hover");
		flg="0";
	 });
  
	  
	  
</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>