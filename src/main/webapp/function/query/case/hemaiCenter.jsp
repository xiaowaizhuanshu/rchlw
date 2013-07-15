<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<meta name="keywords" content="合买中心,合买,跟单,博雅彩,彩票网,购彩网,福彩,体彩,足彩,竞彩,高频彩,购彩,投注,在线购彩,在线投注 " />
<title>合买中心 - 合买 – 彩票在线购买|福彩|体彩|足彩|竞彩|高频彩|博雅彩</title>
<meta name="description" content="合买中心是彩民进行福彩,体彩,竞彩足球等彩票合买跟单的频道,提供双色球,大乐透,时时彩,足球单场,胜负彩等热门彩种在博雅彩网站上进行，一起跟单买彩票的服务" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/newsAll.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/ymPrompt.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/hemai/hemaiutil.js"></script>
</head>
<body>
<jsp:include page="/function/common/ruyicai_include_common_top_hemai.jsp"/>
<div class="space10">&#160;</div>
<form action="#" method="post" id="CaseSelectForm" onsubmit="return ajaxFromToHemaiCenter('CaseSelectForm','CaseHtml')" >
<input type="hidden" id="orderDir" name="orderDir" value="" />
<input type="hidden" id="orderBy" name="orderBy" value="" />

<div class="TogetherListBody">
	<div class="TogetherCenterLeft_left Account">
		<div class="TogetherCenterLeft_title"><a href="<%=request.getContextPath() %>/function/hemaiCenter!getCaseHemaiCenter"><img src="<%=request.getContextPath() %>/function/images/hemaicenter.gif" width="118" height="22" /></a></div>
		
				<div class="Account">
					<dl class="Account">
						<dt class="TogetherCenterLeft_secondTitle">推荐方案</dt>
						<dd class="light a_javaEye  selected" onclick="BaseTab($(this));orderByImg('jindu');" ><font><span></span>人气方案</font></dd>
						<dd class="light a_detailed" onclick="BaseTab($(this));orderByImg('zhanji');"><font><span></span>战绩方案</font></dd>
						<dt class="TogetherCenterLeft_secondTitle">彩种列表</dt>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47104'"><font><span></span>双色球</font></dd>
						<dd class="light a_afterRecord" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47103'"><font><span></span>福彩3D</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=F47102'"><font><span></span>七乐彩</font></dd>
						<dd class="light a_afterRecord" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01001'"><font><span></span>大乐透</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01002'"><font><span></span>排列三</font></dd>
						<dd class="light a_afterRecord" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01011'"><font><span></span>排列五</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01009'"><font><span></span>七星彩</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01013'"><font><span></span>22选5</font></dd>
						<dd class="light a_afterRecord" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01003'"><font><span></span>足彩胜负</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01004'"><font><span></span>任选九场</font></dd>
						<dd class="light a_afterRecord" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01006'"><font><span></span>六场半全</font></dd>
						<dd class="light a_bettingRecords" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01005'"><font><span></span>四场进球</font></dd>
					</dl>
				</div>
				<div class="space10">&#160;</div>
				<div class="space10">&#160;</div>
	</div>
<div class="TogetherCenterRight">
<div class="TogetherCenterRight-down" style="width:778px; height:90px; margin-bottom:10px;">
<a>
<img src="<%=request.getContextPath() %>/function/images/fadan-fanjiang-bg.gif" width="778" height="90" style=" border:0" /></a>
</div>
<div class="TogetherBuyPannel TogetherCeleb">
	<div class="TogetherBuyPannelHead"><h3>合买推荐</h3><font>
	<a target="_blank" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/56.html?id=17">战绩规则</a>
	<a href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/59.html?id=17" target="_blank">
	合买方案进度满90%以上网站保底</a><a href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/60.html?fid=5&id=17" target="_blank">置顶规则</a></font></div>
	<div class="TogetherBuyPannelBody">
	<input class="SearchText" id="search" name="search" type="hidden" value="" /> 
	<input id="displayState" name="displayState" type="hidden" value="1" />
	<input type="hidden" id="starteUserno" name="starteUserno" value="" > 
	<dl>
	<dt>合买名人：</dt>
		<s:iterator id="list" value="#request.celebrityList">
		<dd><a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))"
		onclick='$("#cz > li").removeClass("selected");$("#lotno").val("");
		$("#search").val("<s:property value="#list.text" />");$("#displayState").val();$("#starteUserno").val("<s:property value="#list.userno" />");$("#CaseSelectForm").submit();'>
		<s:property	value="#list.text" /></a></dd>
		</s:iterator>
		</dl>
	</div>
	<div class="TogetherBuyPannelInput">
		<dl><s:set  name="lotno_page"  value="%{#parameters.lotno[0]}"/>
			<input type="hidden" id="lotno" name="lotno" value="${lotno_page}" />
			<input type="hidden" id="totalAmt" name="totalAmt" value="${totalAmt}" />
			<dd class="select_txt_content">
				<!--彩种位置-->
				<select id="getlonto" name="getlonto" style="height:23px;">
					<option selected="selected" style="color:#999;" value="">请选择彩种</option>
					<option value="F47104">双色球</option>
				    <option value="F47103">福彩3D</option>
				    <option value="F47102">七乐彩</option>
				    <option value="T01001">大乐透</option>
				    <option value="T01002">排列三</option>
				    <option value="T01013">22选5</option>
				    <option value="T01011">排列五</option>
				    <option value="T01009">七星彩</option>
				    <option value="T01003">足彩胜负</option>
				    <option value="T01004">任选九场</option>
				    <option value="T01006">六场半全</option>
				    <option value="T01005">四场进球</option>
				    <option value="J00013">竞足胜平负</option>
				    <option value="J00001">竞足让球胜平负</option>
				    <option value="J00003">竞足总进球</option>
				    <option value="J00002">竞足比分</option>
				    <option value="J00004">竞足半场</option>
				</select>
		</dd>
		<dd class="select_txt_content1">
			<select id="totalAmt_1" name="totalAmt_1" style="height:23px;">
				<option selected="selected" style="color:#999;" value="">全部金额</option>
				<option value="1000000">万元以上</option>
				<option value="100000">千元以上</option>
			    <option value="10000">百元以上</option>
			    <option value="1">百元以下</option>
			</select>
			</dd>
			<dd><input id="faqiren" type="text" class="Initiator" value="请输入方案发起人" onfocus="onFaqiren();"/></dd>
			<dd><input name="" class="InitiatorBtn"type="button"  value=""  onclick="seachhemai();"/></dd>
			<dt class="InitiatorBtn2 light"><a href="#"><img src="<%=request.getContextPath() %>/function/images/InitiatorBtn2.jpg" /></a>
			<div class="InitiatorHM" >
					<ul>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp?canshu=hemai#BettingForm" title="双色球" target="_blank">双色球</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp?canshu=hemai#BettingForm" title="福彩3D" target="_blank">福彩3D</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qlc.jsp?canshu=hemai#BettingForm" title="七乐彩" target="_blank">七乐彩</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp?canshu=hemai#BettingForm" title="大乐透" target="_blank">大乐透</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_pls.jsp?canshu=hemai#BettingForm" title="排列三" target="_blank">排列三</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_plw.jsp?canshu=hemai#BettingForm" title="排列五" target="_blank">排列五</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qxc.jsp?canshu=hemai#BettingForm" title="七星彩" target="_blank">七星彩</a></li></ul><ul>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp?canshu=hemai#BettingForm" title="足彩胜负" target="_blank">足彩胜负</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_renjiuchang.jsp?canshu=hemai#BettingForm" title="任选九场" target="_blank">任选九场</a></li></ul><ul>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_liuchangban.jsp?canshu=hemai#BettingForm" title="六场半全" target="_blank">六场半全</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_sichang.jsp?canshu=hemai#BettingForm" title="四场进球" target="_blank">四场进球</a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_jingcai_football.jsp?canshu=hemai#BettingForm" title="竞彩足球" target="_blank">竞彩足球</a></li>
					</ul>
				</div>
			</dt>
		</dl>
	</div>
</div>

<div class="TogetherListTable">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<thead>
		<tr id="title_hemai">
			<th width="48">序号</th>
			<th>彩种</th>
			<th width="108">发起人</th>
			<th id="zhanji" class="hand color_blue" width="76"
				onclick="orderByImg('zhanji')">战绩<span
				class="AllTogetherBuyBox SortDisabled"></span></th>
			<th id="fanganjine" class="hand color_blue" width="60"
				onclick="orderByImg('fanganjine')">方案金额<span
				class="AllTogetherBuyBox SortDisabled"></span></th>
			<th id="jindu" class="hand color_blue" onclick="orderByImg('jindu')">进度<span
				class="AllTogetherBuyBox SortDown"></span></th>
			<th width="60">剩余金额</th>
			<th>参与认购</th>
			<th width="48">详情</th>
		</tr>
	</thead>
	<tbody id="CaseHtml">
		<s:set name="lotno_cn" value="" />
		<s:iterator id="list" value="#request.hemaiList.list" status="i">
			<tr
				<s:if test='#i.index<10'> class="orange" onmouseout="$(this).attr('class','orange')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
				<s:elseif test='#i.odd'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:elseif>
				<s:else>class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
				>
				<th>${i.index+1}</th>
				<th><s:if test="#list.torder.lotno=='F47104'">双色球<s:set
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
				</th>
				<th>
				<s:set name="Nname" value="#request.hemaiList.nickname_array[#i.index].new_nickname" />
				 <a href="javascript:;"
					onclick="fanganListToUser('${list.achievement.userno }','${Nname}')"
					onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">${Nname
				}</a></th>
				<th>
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
				</th>
				<td>
				
				<s:i18n name="Format">
					<s:text name="FormatNumeral2">
						<s:param value="(#list.caseLot.totalAmt)/100" />
					</s:text>
				</s:i18n>
				
				</td>
				<th>
				
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
				</s:if></th>
				<td><s:i18n name="Format">
					<s:text name="FormatNumeral2">
						<s:param
							value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100" />
					</s:text>
				</s:i18n></td>
				<s:set name="safeAmt_mr" value="#list.caseLot.minAmt/100" />
				<th><input class="BuyText" type="text"
					id="canyu_amt_${list.caseLot.id}" value="${safeAmt_mr}" /> 元 <span
					class="CancelBtn"><input class="BaseBtn AllTogetherBuyBox"
					id="button_${list.caseLot.id}" type="button"
					onclick="canyuHemai('${list.caseLot.id}','${list.caseLot.lotno}')"  value="购买" /></span></th>
				<th><a
					href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}"
					target="_blank" onmouseover="HoverOver($(this))"
					onmouseout="HoverOut($(this))">查看</a></th>
			</tr>
		</s:iterator>
		<s:set name="pageCount" value="%{#parameters.pageCount[0]}" />
		<tr class="PageContent">
			<td colspan="11">每页显示 <input type="radio" name="pageCount"
				<s:if test="#pageCount=='20'||(#pageCount!='30'&&#pageCount!='50')"> checked="checked" </s:if>
				onclick="$('#CaseSelectForm').submit()" value="20" />20条 <input
				type="radio" name="pageCount"
				<s:if test="#pageCount=='30'"> checked="checked" </s:if>
				onclick="$('#CaseSelectForm').submit()" value="30" />30条 <input
				type="radio" name="pageCount"
				<s:if test="#pageCount=='50'"> checked="checked" </s:if>
				onclick="$('#CaseSelectForm').submit()" value="50" />50条</td>
		</tr>
		<tr class="PageContent">
			<th colspan="11">${pageHtml}</th>
		</tr>
	</tbody>
</table>
</div>
</div>
</div>

</div>
</form>
<!--正式使用时无视此段 start-->
<div class="space10">&nbsp;</div>
<div id="ajax_hemai_pop" class="WindowCenter" style="display:none; background-image:url(<%=request.getContextPath() %>/function/images/ThrobberBig.gif); background-position:-88px -144px; width:148px; height:27px;" ></div>

<script>
//切换排序
var lishiTH = "";
function orderByImg(th){
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").removeClass("SortDown");
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").removeClass("SortUp");
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").addClass("SortDisabled");
	$("#"+th+">span").removeClass("SortDisabled");
	if(lishiTH==th){//第二次点击
		$("#"+th+">span").addClass("SortUp");
		lishiTH="";
		$("#orderDir").val("ASC");//向上正序
	}else{//第一次点击
		$("#"+th+">span").addClass("SortDown");
		lishiTH=th;
		$("#orderDir").val("DESC");//向下倒序
	}
	
	//取得要排序的字段
	var orderBy = "";
	if(th=="fanganjine"){
		orderBy="totalAmt";
	}else if(th=="jindu"){
		orderBy="((buyAmtByStarterPUTINbuyAmtByFollower)*100/totalAmt)";
	}else if(th=="renshu"){
		orderBy="participantCount";
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
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
<input type="hidden" id="amt_caseId"  value="" />
<jsp:include page="/function/common/canyuHemai_div.jsp"/>
<jsp:include page="/function/common/tishi.jsp"/>
<jsp:include page="/function/query/case/fanganList.jsp"/>
<jsp:include page="/function/query/case/yingliList.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>
