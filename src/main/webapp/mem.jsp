<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8"  pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
 <%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <meta name="keywords" content="如意彩,彩票购买,彩票投注,福彩投注,体彩购买,竞彩足球,高频彩,购买大厅,开奖公告,彩票走势图,彩票资讯" />
<title>如意彩手动缓存</title>
<meta name="description" content="如意彩为彩民提供, 彩票投注,彩票购买, 福彩投注, 福彩投注,将互联网电子彩票进行投注购买,走势分析,专家预测,兑奖等一体化服务相结合的【彩民推荐的购买投注网站】！" />
</head>
<body>
<a href="<%=request.getContextPath()%>/index.jsp">返回首页</a>
	<div>
	<a href="<%=request.getContextPath() %>/function/memcache!QuartzStart?p=lottery" title="每天的下午20点至20：55和21点至21点55分两个时间段内每5分钟一次触发">首页开奖公告</a><br/>
	<a href="<%=request.getContextPath() %>/function/memcache!QuartzStart?p=rank" title="每天的凌晨23点执行">首页开奖排行</a><br/>
	<a href="<%=request.getContextPath() %>/function/memcache!QuartzStart?p=jiangchi" title="每天的下午20点21点每5分钟一次触发" >首页奖池</a><br/>
	<a href="<%=request.getContextPath() %>/function/memcache!QuartzStart?p=hemai" title="购彩成功后触发" >合买推荐</a><br/>
    </div>
    <div>
	<s:property value="#request.message"/>
	</div>
    <div>
	   缓存的KEY:rankallList ,rankmonthList , rankyearList  <br/>
	   arrWininfoindex,lotteryProgressiveF47104,lotteryProgressiveT01001
	</div>
</body>
</html>
