<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>彩票开奖公告</title>
 <style>
body {font-family:"宋体",Arial, Helvetica, sans-serif; font-size: 12px;line-height: 14px; background:#FFF; color: #333;}
body,div,ul,ol,li,dl,dt,dd,table,th,td{ margin:0; padding:0;}
form,ol,ul,li,i,dl,dt,dd,table,tr,td,th,h1,h2,h3,h4,h5,p,b,i,font,em,strong{ margin:0px; padding:0px; font-size:12px; line-height:14px; list-style:none; color:#333; font-weight:normal; font-style:normal;}
img {border:none;} 
a img {border:none;}
a:hover img {border:none}
.blue{ color:#01529D;} 
a{color:#333333; text-decoration:none;}
a.over{color:#DE0201; text-decoration:underline;}

/*奖球*/
span.SmallRedBall,span.SmallBlueBall{ display:block; float:left; width:23px; height:23px; line-height:23px; font-size:12px; color:#FFF; font-weight:bold; text-align:center;}
span.SmallRedBall{background:url(<%=request.getContextPath() %>/function/images/AllBalls.gif) no-repeat -50px -50px;}
span.SmallBlueBall{ background:url(<%=request.getContextPath() %>/function/images/AllBalls.gif) no-repeat -100px -50px;; }


/*开奖公告标题*/
.LotteryAnnouncement{ width:328px; height:auto; border:1px solid #CCCCCC;}
.LotteryAnnouncement_title{ height:27px; background:url(<%=request.getContextPath() %>/function/images/LotteryAnnouncement_titleBg.gif) repeat-x; overflow:hidden;}
.LotteryAnnouncement_title h3{ color:#1F376D; font-weight:bold; font-size:14px; float:left; background:url(<%=request.getContextPath() %>/function/images/LotteryAnnouncement_titleCon.gif) 6px 9px no-repeat; line-height:27px; padding-left:28px;}
.LotteryAnnouncement_title a{ color:#1F376D; font-size:12px; float:right; line-height:27px; padding-right:10px;}
.LotteryAnnouncement_title a:hover{ color:#DE0201; text-decoration:underline;}
/*开奖公告内容*/
.LotteryAnnouncement_content{ border-collapse:collapse; border:none; overflow:hidden; margin:10px 18px;}
.LotteryAnnouncement_content i{ color:#DE0201; font-weight:bold; font-style:normal;}
.LotteryAnnouncement_content a{ padding:3px; color:#1F376D; text-decoration:none;}
.LotteryAnnouncement_content a:hover{ padding:3px; color:#DE0201; text-decoration:underline;}
.LotteryAnnouncement_content td{ line-height:30px; padding-left:10px;  }

</style>
 </head>
 <body>
<div class="LotteryAnnouncement">
	<div class="LotteryAnnouncement_title">
		<h3>彩票开奖公告</h3>
		<a href="/rchlw/function/ryc_select_newkj!drawalottery"  target="_blank" title="查看更多">查看更多>></a>
	</div>
			<table class="LotteryAnnouncement_content">
			<s:iterator value="#request.arrWininfo" id="arrWininfo">
			      <s:if test="id.lotno=='F47104'">
				<tr>
					<th rowspan="3"><img src="<%=request.getContextPath() %>/function/images/logo_ssq_b.gif" width="54" height="54" /></th>
					<td>第<i><s:property value="id.batchcode"/></i>期</td>
					<td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104" target="_blank" title="查询往期">查询往期</a></td>
				</tr>
				<tr>
					<td colspan="2">
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(10,12)"/></span>
						<span class="SmallBlueBall"><s:property value="winspecialcode"/></span>
						</td>
				</tr>
				<tr>
					<td colspan="2">
					<a href="/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110614180531_518.html?id=518&code1=135&code="   target="_blank" title="玩法">玩法>></a><a href="http://tbzs.ruyicai.com/cjwssq/index.php"  target="_blank" title="图表">图表>></a>
					<a href="/fucaituijian/fucaituijian_shuangseqiu_1.html"  target="_blank" title="推荐">推荐>></a><a href="/<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp"  target="_blank" title="立即投注">立即投注>></a>
					</td>
				</tr>
				</s:if>
					<s:elseif test="id.lotno=='F47103'">
				<tr>
					<th rowspan="3"><img src="<%=request.getContextPath() %>/function/images/logo_fcsd_b.gif" width="54" height="54" /></th>
					<td>第<i><s:property value="id.batchcode"/></i>期</td>
					<td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103" target="_blank" title="查询往期">查询往期</a></td>
				</tr>
				<tr>
					<td colspan="2">
						<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(5,6)"/></span>
						</td>
				</tr>
				<tr>
					<td colspan="2">
					<a href="/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133107_597.html?id=597&code1=135&code=" target="_blank" title="玩法">玩法>></a><a href="http://tbzs.ruyicai.com/cjw3d/index.php" target="_blank" title="图表">图表>></a>
					<a href="/fucaituijian/fucaituijian_fucai3D_1.html" target="_blank" title="推荐">推荐>></a><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp" target="_blank" title="立即投注">立即投注>></a>
					</td>
				</tr>
				</s:elseif>
					<s:elseif test="id.lotno=='T01001'">
				<tr>
					<th rowspan="3"><img src="<%=request.getContextPath() %>/function/images/logo_dlt_b.gif" width="54" height="54" /></th>
					<td>第<i><s:property value="id.batchcode"/></i>期</td>
					<td><a href="rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103"  target="_blank" title="查询往期">查询往期</a></td>
				</tr>
				<tr>
					<td colspan="2">
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
						<span class="SmallBlueBall"><s:property value="winbasecode.substring(11,13)"/></span>
						<span class="SmallBlueBall"><s:property value="winbasecode.substring(13,15)"/></span></td>
				</tr>
				<tr>
					<td colspan="2">
					<a href="/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133010_596.html?id=596&code1=135&code=" target="_blank" title="玩法">玩法>></a><a href="http://tbzs.ruyicai.com/cjwdlt/index.php" target="_blank" title="图表">图表>></a>
					<a href="/ticaituijian/ticaituijian_daletou_1.html" target="_blank" title="推荐">推荐>></a><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp" target="_blank" title="立即投注">立即投注>></a>
					</td>
				</tr>
				</s:elseif>
				</s:iterator>
			</table>

</div>	
</body>
</html>