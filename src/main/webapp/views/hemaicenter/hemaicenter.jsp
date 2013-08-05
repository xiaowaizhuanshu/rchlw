<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>合买大厅</title>
<link href="/rchlw/recs/styles/hemaicenter/together.css" rel="stylesheet" type="text/css" />
<script src="/rchlw/recs/scripts/jquery-1.7.2.min.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/hemaicenter/together.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/function/js/util.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/function/js/hemai/hemaiutil.js" type="text/javascript" ></script>
</head>

<body>
<script>$(function(){index_toplogo('header',"hemaicenter");});</script>
	<!--头部 header-->
	<div id="header" class="header">
    
    </div>
	<!--头部 header end-->
    <!----合买大厅 主体-->
    <div class="main">
    <form action="#" method="post" id="CaseSelectForm" onsubmit="return ajaxFromToHemaiCenter('CaseSelectForm','CaseHtml')" >
		<input type="hidden" id="orderDir" name="orderDir" value="" />
		<input type="hidden" id="orderBy" name="orderBy" value="" />
		    
    	<div class="center">
        	<div class="left">
            	<div class="left_head">
                	<div class="tog_info">合买中心首页</div>
                    <div class="together_cheket">
                    	<div class="tog_list">
                        	<label>数字彩</label>
                            <div class="list">
                            	<span id="F47104" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47104'" ><a href="javascript:;">双色球</a></span>
                            	<span onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47103'" ><a href="javascript:;">福彩3D</a></span>
                            	<span id="F47102" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47102'"><a href="javascript:;">七乐彩</a></span>
                            	<span id="T01001" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01001'" ><a href="javascript:;">大乐透</a></span>
                            	<span id="T01009" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01009'"><a href="javascript:;">七星彩</a></span>
                            	<span onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01002'"><a href="javascript:;">排列三</a></span>
                            	<span onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01011'"><a href="javascript:;">排列五</a></span>
<%--                             	<span>时时彩</span> --%>
<%--                             	<span id="T01010">江西11选5</span> --%>
<%--                             	<span id="T01012">11运夺金</span> --%>
                            </div>
                        </div>
                        <div class="tog_list">
                        	<label>竞技彩</label>
                            <div class="list">
                            	<span onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01003&T01004&T01005&T01006'"><a href="javascript:;">足彩</a></span>
                            	<span onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=J00001&J00002&J00003&J00004&J000013&J00011'"><a href="javascript:;">竞彩足球</a></span>
                            </div>
                        </div>
<!--                         <div class="tog_list"> -->
<!--                         	<label>合买推荐</label> -->
<!--                             <div class="list"> -->
<!--                             </div> -->
<!--                         </div> -->
                    </div>
                </div>
            	<div class="together_top" style="display:none;">
                	<div class="top_text">发单红人榜</div>
                    <table class="tog_table">
                    	<tr>
                        	<th class="username">用户名</th>
                        	<th class="uservalue">中奖金额</th>
                        	<th class="usergendan">跟单</th>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                        <tr>
                        	<td class="username">战无敌</td>
                            <td class="uservalue">470万元</td>
                            <td class="usergendan">定制</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!--left end-->
            <div class="right">
            	<div class="tog_top">
            	<input class="SearchText" id="search" name="search" type="hidden" value="" /> 
				<input id="displayState" name="displayState" type="hidden" value="1" />
				<input type="hidden" id="starteUserno" name="starteUserno" value="" > 
                	<span>合买名人</span>
<!--                     <label>表示有方案可参与</label> -->
                </div>
                <div class="hottog_list">
                <s:iterator id="list" value="#request.celebrityList">
					<a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" 
					onclick='$("#cz > li").removeClass("selected");$("#lotno").val("");
					$("#search").val("<s:property value="#list.text" />");
					$("#displayState").val();
					$("#starteUserno").val("<s:property value="#list.userno" />");
					$("#CaseSelectForm").submit();'>
						<s:property	value="#list.text" />
					</a>
				</s:iterator>
                </div>
                <div class="search_condition">
                	<div class="search_left">
                        <select id="totalAmt_1" name="totalAmt_1" style="height:23px;">
							<option selected="selected" style="color:#999;" value="">全部金额</option>
							<option value="1000000">万元以上</option>
							<option value="100000">千元以上</option>
						    <option value="10000">百元以上</option>
						    <option value="1">百元以下</option>
						</select>
                        <input id="faqiren"  onfocus="onFaqiren();"type="text" value="发起人昵称" class="nikename" />
<!--                         <div class="record"> -->
<!--                         	<input id="checkbox" type="checkbox"  /> -->
<!--                             <label for="checkbox">战绩方案</label> -->
<!--                         </div> -->
                        <input type="button" onclick="seachhemai();" value="搜索" class="search_btn" />
                    </div>
                    <div class="search_right">
                    	<a target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/56.html?id=17">战绩规则</a>
                    	<a href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/60.html?fid=5&id=17" target="_blank">置顶规则</a>
                    </div>
                </div>
                <table class="together_table">
                	<tr id="title_hemai">
                    	<th class="tab_xuhao">序号</th>
                    	<th class="tab_caizhong">彩种</th>
                    	<th class="tab_faqiren">发起人</th>
                    	<th class="tab_zhanji" id="zhanji" onclick="orderByImg('zhanji')"><span class="up">战绩</span></th>
                    	<th class="tab_value"  id="fanganjine" onclick="orderByImg('fanganjine')"><span class="down">方案金额</span></th>
                    	<th class="tab_jindu"  id="jindu" onclick="orderByImg('jindu')"><span class="down">进度</span></th>
                    	<th class="tab_shengyu">剩余金额</th>
                    	<th class="tab_canyu">参与认购</th>
                    	<th class="tab_replay">操作</th>
                    </tr>
                    <tbody id="CaseHtml">
				                    <s:set name="lotno_cn" value="" />
						<s:iterator id="list" value="#request.hemaiList.list" status="i">
							<tr
								<s:if test='#i.index<10'> class="orange" onmouseout="$(this).attr('class','orange')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
								<s:elseif test='#i.odd'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:elseif>
								<s:else>class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
								>
								<td class="tab_xuhao <s:if test='#i.index<5'>on</s:if>" >${i.index+1}</td>
								<td class="tab_caizhong"><s:if test="#list.torder.lotno=='F47104'">双色球<s:set
										id="lotno_cn" value='"双色球"' />
								</s:if> <s:elseif test='#list.torder.lotno=="F47103"'>福彩3D<s:set
										id="lotno_cn" value='"福彩3D"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="F47102"'>七乐彩<s:set
										id="lotno_cn" value='"七乐彩"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01001"'>大乐透<s:set
										id="lotno_cn" value='"大乐透"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01002"'>排列三<s:set
										id="lotno_cn" value='"排列三"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01011"'>排列五<s:set
										id="lotno_cn" value='"排列五"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01009"'>七星彩<s:set
										id="lotno_cn" value='"七星彩"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01003"'>足彩胜负<s:set
										id="lotno_cn" value='"足彩胜负"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01005"'>4场进球<s:set
										id="lotno_cn" value='"4场进球"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01004"'>任选9场<s:set
										id="lotno_cn" value='"任选9场"' />
								</s:elseif> <s:elseif test='#list.torder.lotno=="T01006"'>6场半全<s:set
										id="lotno_cn" value='"6场半全"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="T01013"'>22选5<s:set
										id="lotno_cn" value='"22选5"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00013"'>竞足胜平负<s:set
										id="lotno_cn" value='"竞足胜平负"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00001"'>竞足让球胜平负<s:set
										id="lotno_cn" value='"竞足让球胜平负"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00002"'>竞足比分<s:set
										id="lotno_cn" value='"竞足比分"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00003"'>竞足总进球<s:set
										id="lotno_cn" value='"竞足总进球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00004"'>竞足半场<s:set
										id="lotno_cn" value='"竞彩足球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00005"'>竞彩篮球<s:set
										id="lotno_cn" value='"竞彩篮球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00006"'>竞彩篮球<s:set
										id="lotno_cn" value='"竞彩篮球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00007"'>竞彩篮球<s:set
										id="lotno_cn" value='"竞彩篮球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="J00008"'>竞彩篮球<s:set
										id="lotno_cn" value='"竞彩篮球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="B00001"'>北单胜平负<s:set
										id="lotno_cn" value='"北单胜平负"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="B00002"'>北单总进球<s:set
										id="lotno_cn" value='"北单总进球"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="B00003"'>北单半全场<s:set
										id="lotno_cn" value='"北单半全场"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="B00004"'>北单上下单双 <s:set
										id="lotno_cn" value='"北单上下单双"' />
								</s:elseif><s:elseif test='#list.torder.lotno=="B00005"'>北单单场比分 <s:set
										id="lotno_cn" value='"北单单场比分"' />
								</s:elseif>
								<s:elseif test='#list.torder.lotno=="J00011"'>竞彩足球<s:set
										id="lotno_cn" value='"竞彩足球混合"' />
								</s:elseif>
								<s:elseif test='#list.torder.lotno=="J00012"'>竞彩篮球<s:set
										id="lotno_cn" value='"竞彩篮球混合"' />
								</s:elseif>
								</td>
								<td class="tab_faqiren">
								<s:set name="Nname" value="#request.hemaiList.nickname_array[#i.index].new_nickname" />
								 <a href="javascript:;" onclick="fanganListToUser('${list.achievement.userno }','${Nname}')"
									onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">${Nname }</a></td>
								<td  class="tab_zhanji">
								<div class="LevelBox"><a href="javascript:;"
									id="displayIcon_${i.index}"
									onclick="yingliListToUser('<s:property value="#list.starter.userno" />','<s:property value="#list.caseLot.lotno" />','<s:property value="#Nname" />','displayIcon_${i.index}','${lotno_cn}')">
								<s:set name="achievement" value="#list.achievement.displayIcon"></s:set>
								<s:if test="#achievement.crown!=null">
									<s:iterator begin="1" end="#achievement.crown">
										<span class="AllTogetherBuyBox LevelCrown"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.graycrown!=null">
									<s:iterator begin="1" end="#achievement.graycrown">
										<span class="AllTogetherBuyBox LevelCrownGray"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.cup!=null">
									<s:iterator begin="1" end="#achievement.cup">
										<span class="AllTogetherBuyBox LevelCup"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.graycup!=null">
									<s:iterator begin="1" end="#achievement.graycup">
										<span class="AllTogetherBuyBox LevelCupGray"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.diamond!=null">
									<s:iterator begin="1" end="#achievement.diamond">
										<span class="AllTogetherBuyBox LevelDiamond"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.graydiamond!=null">
									<s:iterator begin="1" end="#achievement.graydiamond">
										<span class="AllTogetherBuyBox LevelDiamondGray"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.goldStar!=null">
									<s:iterator begin="1" end="#achievement.goldStar">
										<span class="AllTogetherBuyBox LevelStar"></span>
									</s:iterator>
								</s:if> <s:if test="#achievement.graygoldStar!=null">
									<s:iterator begin="1" end="#achievement.graygoldStar">
										<span class="AllTogetherBuyBox LevelStarGray"></span>
									</s:iterator>
								</s:if></a></div>
								</td>
								<td class="tab_value">
								<s:i18n name="Format">
									<s:text name="FormatNumeral2">
										<s:param value="(#list.caseLot.totalAmt)/100" />
									</s:text>
								</s:i18n>
								
								</td>
								
								<td class="tab_jindu">
								<s:i18n name="Format">
									<s:text name="FormatNumeral2">
										<s:param
											value="((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt" />
									</s:text>
								</s:i18n>% <s:if
									test="(((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt)!=100&&#list.caseLot.safeAmt>0">
									+
									<s:i18n name="Format">
											<s:text name="FormatNumeral2">
												<s:param
													value="(#list.caseLot.safeAmt*100)/#list.caseLot.totalAmt" />
											</s:text>
									</s:i18n>
							%<i>保</i>
								</s:if></td>
								<td class="tab_shengyu"><s:i18n name="Format">
									<s:text name="FormatNumeral2">
										<s:param
											value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100" />
									</s:text>
								</s:i18n></td>
								<s:set name="safeAmt_mr" value="#list.caseLot.minAmt/100" />
								<td  class="tab_canyu"><input class="BuyText" type="text"
									id="canyu_amt_${list.caseLot.id}" value="${safeAmt_mr}" /> 元 </td>
								<td class="tab_replay">
								<input type="submit" id="button_${list.caseLot.id}" type="button"
									onclick="canyuHemai('${list.caseLot.id}','${list.caseLot.lotno}')"  value="购买" />
								<a href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}"
									target="_blank" onmouseover="HoverOver($(this))"
									onmouseout="HoverOut($(this))">详情</a></td>
							</tr>
						</s:iterator>
						<s:set name="pageCount" value="%{#parameters.pageCount[0]}" />
						<tr style="display:none;">
							<td colspan="11">每页显示 <input type="radio" name="pageCount"  value="20" /></td>
						</tr>
						<tr class="tr_pagination">
							<td cospan="9" class="td_pagination">
								<div class="pagination">
				               		 ${pageHtml}
				                </div>
			                </td>
						</tr>
						</tbody>
                </table>
                
            </div>
            <!--right end-->
        </div>
        </form>
    </div>
    <!----合买大厅 主体 end-->
    <!--footer-->
    <jsp:include page="/views/footer.jsp"/>
<!--footer end-->

<!--正式使用时无视此段 start-->
<div class="space10">&nbsp;</div>
<div id="ajax_hemai_pop" class="WindowCenter" style="display:none; background-image:url(<%=request.getContextPath() %>/function/images/ThrobberBig.gif); background-position:-88px -144px; width:148px; height:27px;" ></div>

<script>
//切换排序
var lishiTH = "";
function orderByImg(th){
	$("#title_hemai >th >span").removeClass("down");
	$("#title_hemai >th >span").removeClass("up");
	$("#title_hemai >th >span").addClass("SortDisabled");
	$("#"+th+">span").removeClass("SortDisabled");
	if(lishiTH==th){//第二次点击
		$("#"+th+">span").addClass("up");
		lishiTH="";
		$("#orderDir").val("ASC");//向上正序
	}else{//第一次点击
		$("#"+th+">span").addClass("down");
		lishiTH=th;
		$("#orderDir").val("DESC");//向下倒序
	}
	
	//取得要排序的字段
	var orderBy = "";
	if(th=="fanganjine"){
		orderBy="totalAmt";
	}else if(th=="jindu"){
		orderBy="((buyAmtByStarterPUTINbuyAmtByFollower)*100/totalAmt)";
	}else if(th=="zhanji"){
		orderBy="a.effectiveAchievementPUTINa.ineffectiveAchievement";
	}else{
		$("#orderDir").val("");
		orderBy="";
	}
	$("#orderBy").val(orderBy);
	$('#CaseSelectForm').submit();
}
function seachhemai(){
	if("请输入方案发起人"==$("#faqiren").val()){
		$("#search").val("");
	}else{
		$("#search").val($("#faqiren").val());	
	}
	$("#starteUserno").val("");
	$("#lotno").val($("#getlonto").val());
	$("#totalAmt").val($("#totalAmt_1").val());
	$("#CaseSelectForm").submit();
	
}; 
function onFaqiren(){
	$("#faqiren").val("");
};
</script>
<input type="hidden" id="amt_caseId"  value="" />
<jsp:include page="/function/common/canyuHemai_div.jsp"/>
<jsp:include page="/function/common/tishi.jsp"/>
<jsp:include page="/function/query/case/fanganList.jsp"/>
<jsp:include page="/function/query/case/yingliList.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>
</body>
</html>
