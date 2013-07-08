<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp" />
<title>方案详情${title }</title>
<meta name="keywords" content="合买基本信息，发起人信息，方案内容，认购方案，认购详情，我要认购">
<meta name="description" content="本方案合买基本信息，发起人信息，方案内容，认购方案，认购详情，我要认购">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/function/css/util.css" />
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/function/css/newsAll.css" />
<script type="text/javascript"
	src="<%=request.getContextPath()%>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript">
	var xy=0;
</script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/function/js/util.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/function/js/hemai/hemaiutil.js"></script>
</head>
<jsp:include
	page="/function/common/ruyicai_include_common_top_hemai.jsp" />
<div class="space10">&#160;</div>
<s:set name="caseLot" value="#request.CaseDetail.caseLot"></s:set>
<s:set name="lotList" value="#request.CaseDetail.torder.tlots"></s:set>
<s:set name="torder" value="#request.CaseDetail.torder"></s:set>
<s:set name="starter" value="#request.CaseDetail.starter"></s:set>
<s:set name="achievement" value="#request.achievement"></s:set>
<div class="TogetherPlanContentBody">
	<div class="ChannelBuyBanner">
		<input name="lotno" value="F47104" type="hidden"> <input
			id="orderDir" name="orderDir" value="" type="hidden"> <input
			id="orderBy" name="orderBy" value="" type="hidden">
		<!--  SSQ  -->
		<!--  Banner start  -->
		<s:if test='#caseLot.lotno=="F47104"||#caseLot.lotno=="B001"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_ssq_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_ssq.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01001"||#caseLot.lotno=="DLT_23529"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_dlt_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_dlt.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_fcsd_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_fcsd.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="F47102"||#caseLot.lotno=="QL730"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_qlc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_qlc.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_pls_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_pls.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_plw_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_plw.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01009"||#caseLot.lotno=="QXC_10022"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_qxc_d.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_qxc.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01007"||#caseLot.lotno=="SSC_10401"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_ssc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_ssc.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01010"||#caseLot.lotno=="XYXW_23009"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_syxw_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_syxw.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01012"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_syydj_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_syydj.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01003"||#caseLot.lotno=="ZC_11"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_zcsf.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01004"||#caseLot.lotno=="ZC_19"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_rxjc.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01006"||#caseLot.lotno=="ZC_16"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_lcbq.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01005"||#caseLot.lotno=="ZC_18"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_scjq.gif" />
		</s:if>
		<s:if test='#caseLot.lotno=="T01013"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_eexw_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_eexw.gif" />
		</s:if>
		<s:if
			test='#caseLot.lotno=="J00001"||#caseLot.lotno=="J00013"||#caseLot.lotno=="J00002"||#caseLot.lotno=="J00003"||#caseLot.lotno=="J00004"||#caseLot.lotno=="J00011"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/logo_jczq_b.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/word_jczq.gif" />
		</s:if>
		<s:if
			test='#caseLot.lotno=="B00001"||#caseLot.lotno=="B00002"||#caseLot.lotno=="B00003"||#caseLot.lotno=="B00004"||#caseLot.lotno=="B00005"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/bd_logo_b.png) no-repeat 15px 8px;">
				<li>
		</s:if>
		<s:if
			test='#caseLot.lotno=="J00005"||#caseLot.lotno=="J00006"||
	#caseLot.lotno=="J00007"||#caseLot.lotno=="J00008"||#caseLot.lotno=="J00012"'>
			<ol
				style="background:url(<%=request.getContextPath()%>/function/images/JclqLogo.gif) no-repeat 15px 15px;">
				<li><img
					src="<%=request.getContextPath()%>/function/images/JclqZi.gif" />
		</s:if>
		<s:if
			test='#caseLot.lotno!="J00001"&&#caseLot.lotno!="J00013"&&#caseLot.lotno!="J00002"&&#caseLot.lotno!="J00003"&& #caseLot.lotno!="J00004"&&#caseLot.lotno!="J00005"&&#caseLot.lotno!="J00006"&&#caseLot.lotno!="J00007"&&#caseLot.lotno!="J00008"&&#caseLot.lotno=="J00011"&&#caseLot.lotno=="J00012'>
			<b>第${caseLot.batchcode }期 
		</s:if>
		<s:if test='#caseLot.lotno=="T01003"||#caseLot.lotno=="ZC_11"'>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				胜负彩14场<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:if>
		<s:elseif test='#caseLot.lotno=="T01005"||#caseLot.lotno=="ZC_18"'>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				四场进球彩<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:elseif>
		<s:elseif test='#caseLot.lotno=="T01006"||#caseLot.lotno=="ZC_16"'>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				6场半全场<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:elseif>
		<s:elseif test='#caseLot.lotno=="T01004"||#caseLot.lotno=="ZC_19"'>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				胜负彩任9场<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:elseif>
		<s:elseif test='#caseLot.lotno=="J00013"'>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				让球胜平负<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00001"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
			           胜平负<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00002"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				  比分<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00003"'>
	   	 	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				 <s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00004"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				  半场<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00005"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				  胜负<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00008"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				大小分<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00007"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				  胜分差<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
	    <s:elseif test='#caseLot.lotno=="J00006"'>
	    	<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				  让分胜负<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
	    </s:elseif>
		<s:else>
			<s:if test='!(#request.CaseDetail.torder.memo.equals("null"))'>
				<s:property value="#request.CaseDetail.torder.memo" />方案</s:if>
		</s:else>
		</b>
		</li>
		<li>此方案发起时间：<font id="endTime">${caseLot.startTime_format}</font>
		<s:if
				test='#caseLot.lotno!="J00001"&&#caseLot.lotno!="J00013"&&#caseLot.lotno!="J00002"&&#caseLot.lotno!="J00003"&&#caseLot.lotno!="J00004"&&#caseLot.lotno!="J00011"'> 认购截止时间：<font
					id="endTime">${caseLot.endTime_format}</font>
			</s:if> 方案编号：<font id="endTime">${caseLot.id }</font> <a
			href="javaScript:fuzhi()">点击复制本方案链接</a> <s:if
				test='#caseLot.lotno=="F47104"||#caseLot.lotno=="B001"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=F47104">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01001"||#caseLot.lotno=="DLT_23529"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01001">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=F47103">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="F47102"||#caseLot.lotno=="QL730"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=F47102">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01002">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01011">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01009"||#caseLot.lotno=="QXC_10022"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01009">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01003"||#caseLot.lotno=="ZC_11"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01003">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01004"||#caseLot.lotno=="ZC_19"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01004">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01006"||#caseLot.lotno=="ZC_16"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01006">返回合买列表</a>
			</s:if> <s:if test='#caseLot.lotno=="T01005"||#caseLot.lotno=="ZC_18"'>
				<a
					href="<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01005">返回合买列表</a>
			</s:if> <input type="hidden" id="dizhi"
			value="http://<%=request.getServerName() + ":" + request.getServerPort()%>/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="%{#parameters.caselotId[0]}"/>" />
		</li>
		</ol>
		<!--  Banner end  -->

		<!--  SSQ END -->
	</div>
	<table class="TogetherPlanTable2">
		<thead>
			<tr class="CreatorInfo">
				<th width="120">发起人信息</th>
				<td>
					<!--发起人信息内容 start-->
					<dl>
						<s:set name="Nname" value="#request.CaseDetail.nickname_array" />
						<s:set name="userno" value="#starter.userno" />
						<input type="hidden" id="winBigAmt" value="" />
						<dt>
							<a href="javascript:;"
								onclick="fanganListToUser('${userno }','${Nname }','${caseLot.lotno}');"
								onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">${Nname}</a>
						</dt>
						<dt class="LevelBoxLine1">
							<a href="javascript:;" id="displayIcon"
								onclick="yingliListToUser('${userno }','${caseLot.lotno }','${Nname }','displayIcon','${caseLot.lotno}')">
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
								</s:if>
							</a>
						</dt>
						<dt>
							(<a href="javascript:;"
								onclick='hemaiWinBigAmt("${userno }","${Nname }","0","${caseLot.lotno}");'
								onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">查看中奖记录</a>)
						</dt>
					</dl> <s:if
						test="#caseLot.displayState!=1&&#caseLot.displayState!=2&&#caseLot.displayState!=3">
						<p>中奖总金额：${caseLot.winBigAmt_format}元（税前）</p>
					</s:if> <!--发起人信息内容 end-->
				</td>
			</tr>
		</thead>
		<tbody>
			<tr class="PlanInfo">
				<th>方案详情</th>
				<td>
					<!--方案详情内容 start-->
					<table cellspacing="0" cellpadding="0" border="0" width="600">
						<thead>
							<tr>
								<th>方案金额</th>
								<th>最低认购</th>
								<th>进度+保底</th>
								<th>保底金额</th>
								<th>发起人认购</th>
								<th>发起人提成</th>
								<th>方案状态</th>
								<s:if
									test="#starter.userno==#request.tuserInfo.userno&&(#caseLot.totalAmt/2)>(#caseLot.safeAmt+#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)&&#caseLot.displayState==1">
									<th id="cd_t">操作</th>
								</s:if>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><i id="investField"><s:i18n name="Format">
											<s:text name="FormatNumeral2">
												<s:param value="(#caseLot.totalAmt/100)" />
											</s:text>
										</s:i18n></i>元</td>
								<td><i><s:i18n name="Format">
											<s:text name="FormatNumeral2">
												<s:param value="(#caseLot.minAmt/100)" />
											</s:text>
										</s:i18n></i>元</td>
								<td><s:i18n name="Format">
										<s:text name="FormatNumeral2">
											<s:param
												value="((#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)*100+99)/#caseLot.totalAmt" />
										</s:text>
									</s:i18n>% <s:if
										test="(((#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)*100+99)/#caseLot.totalAmt)!=100&&#caseLot.safeAmt>0">+
							<s:i18n name="Format">
											<s:text name="FormatNumeral2">
												<s:param value="(#caseLot.safeAmt*100)/#caseLot.totalAmt" />
											</s:text>
										</s:i18n>%
				</s:if></td>
								<td><s:i18n name="Format">
										<s:text name="FormatNumeral2">
											<s:param value="(#caseLot.safeAmt/100)" />
										</s:text>
									</s:i18n>元</td>
								<td><s:i18n name="Format">
										<s:text name="FormatNumeral2">
											<s:param value="(#caseLot.buyAmtByStarter/100)" />
										</s:text>
									</s:i18n>元</td>
								<td>${caseLot.commisionRatio}%</td>
								<td><i id="chedanstate">${caseLot.displayStateMemo}</i></td>
								<s:if
									test="#starter.userno==#request.tuserInfo.userno&&(#caseLot.totalAmt/2)>(#caseLot.safeAmt+#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)&&#caseLot.displayState==1">
									<td id="cd_b"><span class="CancelBtn"><input
											class="BaseBtn AllTogetherBuyBox" id="button_chedan"
											type="button" onclick="chedan('${caseLot.id }')" value="撤单" /></span></td>
								</s:if>
							</tr>
						</tbody>
					</table> <!--方案详情内容 end-->
				</td>
			</tr>
			<s:if
				test='(#request.CaseDetail.displayTlots==false||#lotList.equals("null"))&&#caseLot.visibility!=0 && #caseLot.visibility!=2'>
				<tr class="PlanContent_Number">
					<th>方案内容</th>
					<td><s:if test="#caseLot.visibility==1">对所有人保密</s:if> <s:elseif
							test="#caseLot.visibility==3">对跟单者公开</s:elseif> <s:elseif
							test="#caseLot.visibility==4">对跟单者截止后公开</s:elseif></td>
				</tr>
			</s:if>
			<s:elseif
				test='(#request.CaseDetail.displayTlots==false||#lotList.equals("null"))&&#caseLot.visibility==2&&#caseLot.state!=4&&#caseLot.state!=5'>
				<tr class="PlanContent_Number">
					<th>方案内容</th>
					<td><s:if test="#caseLot.visibility==2">对所有人截止后公开</s:if></td>
				</tr>
			</s:elseif>
			<s:else>
				<s:if
					test='#caseLot.lotno=="F47104"||#caseLot.lotno=="B001"
				    ||#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"
				    ||#caseLot.lotno=="F47102"||#caseLot.lotno=="QL730"
				    ||#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"
				    ||#caseLot.lotno=="T01001"||#caseLot.lotno=="DLT_23529"
				    ||#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"
				    ||#caseLot.lotno=="T01009"||#caseLot.lotno=="QXC_10022"||#caseLot.lotno=="T01013"'>
					<s:if test="#request.info!=null">
						<tr class="PlanContent_Number">
							<th>方案内容</th>
							<td>
								<table>
									<!--对于多余五条的记录做隐藏显示的处理-->
									<thead id="zhuma">
										<s:iterator id="lot1" value="lotList" status="sta">
											<s:if test="#sta.index<5">
												<s:property value="zhuma.value" escape="false" />
											</s:if>
										</s:iterator>
									</thead>
									<s:if test="#request.betcode_num>5">
										<tbody style="display: none" id="moreValue">
											<s:iterator id="lot1" value="lotList" begin="5">
												<s:property value="zhuma.value" escape="false" />
											</s:iterator>
										</tbody>
										<tfoot>
											<tr id="allIterm">
												<th colspan="4"><span
													onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle();'
													target="_blank" onmouseover="HoverOver($(this))"
													onmouseout="HoverOut($(this))">显示全部内容</span></th>
											</tr>
											<tr id="partiterm" style="display: none">
												<th colspan="4"><span
													onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle();'
													target="_blank" onmouseover="HoverOver($(this))"
													onmouseout="HoverOut($(this))">隐藏部分</span></th>
											</tr>
										</tfoot>
									</s:if>
								</table>
							</td>
						</tr>
					</s:if>

					<s:else>
						<tr class="PlanContent_Number">
							<th>方案内容</th>
							<td>
								<table>
									<thead>
										<!--对于多余五条的记录做隐藏显示的处理-->
										<s:iterator id="lot" value="lotList" status="id">
											<s:if test="#id.index<5">
												<tr>
													<s:property value="#lot.zhuma.value" escape="false" />
												</tr>
											</s:if>
										</s:iterator>
									</thead>
									<s:if test="#request.betcode_num>5">
										<tbody id="moreValue" style="display: none">
											<s:iterator id="lot" value="lotList" begin="5">
												<tr>
													<s:property value="#lot.zhuma.value" escape="false" />
												</tr>
											</s:iterator>
										</tbody>
										<tfoot>
											<tr id="allIterm">
												<th colspan="4"><span
													onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle();'
													target="_blank" onmouseover="HoverOver($(this))"
													onmouseout="HoverOut($(this))">显示全部内容</span></th>
											</tr>
											<tr id="partiterm" style="display: none">
												<th colspan="4"><span
													onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
													target="_blank" onmouseover="HoverOver($(this))"
													onmouseout="HoverOut($(this))">隐藏部分</span></th>
											</tr>
										</tfoot>
									</s:if>
								</table>

							</td>
						</tr>
					</s:else>
				</s:if>
				<s:else>
					<s:if test='#caseLot.lotno=="T01003"||#caseLot.lotno=="ZC_11"'>
						<!--足彩胜负彩 start-->
						<s:if test='#request.CaseDetail.torder.memo=="单式上传"'>
							<tr class="PlanContent_Number">
								<th>方案内容</th>
								<td><table>
										<thead>
											<!--对于多余五条的记录做隐藏显示的处理-->
											<s:iterator id="lot" value="lotList" status="id">
												<s:if test="#id.index<5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:if>
											</s:iterator>
										</thead>
										<s:if test="#request.betcode_num>5">
											<tbody id="moreValue" style="display: none">
												<s:iterator id="lot" value="lotList" begin="5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:iterator>
											</tbody>
											<tfoot>
												<tr id="allIterm">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">显示全部内容</span></th>
												</tr>
												<tr id="partiterm" style="display: none">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">隐藏部分</span></th>
												</tr>
											</tfoot>
										</s:if>
									</table></td>
							</tr>
						</s:if>
						<s:else>
							<tr class="PlanContent_Football">
								<th>方案内容</th>
								<td>
									<dl>
										<dt>
											投注选号：<i><s:property value="#request.selectNum.radio" /></i>个单选、<i><s:property
													value="#request.selectNum.twoselect" /></i>个双选、<i><s:property
													value="#request.selectNum.threeselect" /></i>个三选
										</dt>
										<dd>查看详细对阵页面</dd>
										<dd class="CheckBox">
											<span class="FootballShengFuTableSwitch AllTogetherBuyBox"
												onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))" onclick="Switch($(this))"
												ControlTarget=".FootballShengFuTableSwitch"></span>
										</dd>
									</dl>

									<div class="space10"></div>

									<table class="PlanContent_FootballShengFu">
										<tr>
											<th>场次</th>
											<th>1</th>
											<th>2</th>
											<th>3</th>
											<th>4</th>
											<th>5</th>
											<th>6</th>
											<th>7</th>
											<th>8</th>
											<th>9</th>
											<th>10</th>
											<th>11</th>
											<th>12</th>
											<th>13</th>
											<th>14</th>
											<th>倍数</th>
											<th>金额（元）</th>
										</tr>
										<tr class="FootballShengFuTableSwitch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>

											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" /></em></td>
												</s:iterator>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:else>
										</tr>
										<tr class="FootballShengFuTableSwitch Switch">
											<td>对阵</td>
											<s:iterator value="#request.againstValue">
												<td><em><s:property value="HTeam" />vs<s:property
															value="VTeam" /></em></td>
											</s:iterator>
											<td class="noborder_bottom">&nbsp;</td>
											<td class="noborder_bottom">&nbsp;</td>
										</tr>
										<s:iterator id="lot_zc" value="lotList">
											<tr>
												<td>选号</td>
												<td><s:property value="#lot_zc.betcode.split(',')[0]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[1]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[2]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[3]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[4]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[5]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[6]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[7]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[8]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[9]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[10]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[11]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[12]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[13]" /></td>
												<td class="noborder_top"><s:property
														value="#lot_zc.multiple" /></td>
												<td class="noborder_top"><i>¥<s:property
															value="#lot_zc.amt" /></i></td>
											</tr>
										</s:iterator>
									</table>

								</td>
							</tr>
						</s:else>
						<!--足彩胜负彩 end-->
					</s:if>
					<s:elseif test='#caseLot.lotno=="T01005"||#caseLot.lotno=="ZC_18"'>
						<!--足彩四场进球 start-->
						<s:if test='#request.CaseDetail.torder.memo=="单式上传"'>
							<tr class="PlanContent_Number">
								<th>方案内容</th>
								<td><table>
										<!--对于多余五条的记录做隐藏显示的处理-->
										<thead>
											<s:iterator id="lot" value="lotList" status="id">
												<s:if test="#id.index<5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:if>
											</s:iterator>
										</thead>
										<s:if test="#request.betcode_num>5">
											<tbody id="moreValue" style="display: none">
												<s:iterator id="lot" value="lotList" begin="5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:iterator>
											</tbody>
											<tfoot>
												<tr id="allIterm">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">显示全部内容</span></th>
												</tr>
												<tr id="partiterm" style="display: none">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">隐藏部分</span></th>
												</tr>
											</tfoot>
										</s:if>
									</table></td>
							</tr>
						</s:if>
						<s:else>
							<tr class="PlanContent_Football">
								<th>方案内容</th>
								<td>
									<dl>
										<dt>
											投注选号：<i><s:property value="#request.selectNum.radio" /></i>个单选、<i><s:property
													value="#request.selectNum.twoselect" /></i>个双选、<i><s:property
													value="#request.selectNum.threeselect" /></i>个三选
										</dt>
									</dl>

									<div class="space10"></div>

									<table class="PlanContent_FootballSiChang">
										<tr>
											<th>场次</th>
											<th>1</th>
											<th>2</th>
											<th>3</th>
											<th>4</th>
											<th>5</th>
											<th>6</th>
											<th>7</th>
											<th>8</th>
											<th>倍数</th>
											<th>金额（元）</th>
										</tr>
										<tr class="FootballSiChangTableSwitch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" /></em></td>
													<td><em><s:property value="VTeam" /></em></td>
												</s:iterator>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:else>
										</tr>
										<tr class="FootballSiChangTableSwitch Switch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" />vs<s:property
																value="VTeam" /></em></td>
													<td><em><s:property value="HTeam" />vs<s:property
																value="VTeam" /></em></td>
												</s:iterator>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:else>
										</tr>

										<s:iterator id="lot_zc" value="lotList">
											<tr>
												<td>选号</td>
												<td><s:property value="#lot_zc.betcode.split(',')[0]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[1]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[2]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[3]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[4]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[5]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[6]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[7]" /></td>
												<td class="noborder_top"><s:property
														value="#lot_zc.multiple" /></td>
												<td class="noborder_top"><i>¥<s:property
															value="#lot_zc.amt" /></i></td>
											</tr>
										</s:iterator>
									</table>
								</td>
							</tr>
						</s:else>
						<!--足彩四场进球 end-->
					</s:elseif>
					<s:elseif test='#caseLot.lotno=="T01006"||#caseLot.lotno=="ZC_16"'>
						<!--足彩六场进球 start-->
						<s:if test='#request.CaseDetail.torder.memo=="单式上传"'>
							<tr class="PlanContent_Number">
								<th>方案内容</th>
								<td><table>
										<!--对于多余五条的记录做隐藏显示的处理-->
										<thead>
											<s:iterator id="lot" value="lotList" status="id">
												<s:if test="#id.index<5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:if>
											</s:iterator>
										</thead>
										<s:if test="#request.betcode_num>5">
											<tbody id="moreValue" style="display: none">
												<s:iterator id="lot" value="lotList" begin="5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:iterator>
											</tbody>
											<tfoot>
												<tr id="allIterm">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">显示全部内容</span></th>
												</tr>
												<tr id="partiterm" style="display: none">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">隐藏部分</span></th>
												</tr>
											</tfoot>
										</s:if>
									</table></td>
							</tr>
						</s:if>
						<s:else>
							<tr class="PlanContent_Football">
								<th>方案内容</th>
								<td>
									<dl>
										<dt>
											投注选号：<i><s:property value="#request.selectNum.radio" /></i>个单选、<i><s:property
													value="#request.selectNum.twoselect" /></i>个双选、<i><s:property
													value="#request.selectNum.threeselect" /></i>个三选
										</dt>
										<dd>查看详细对阵页面</dd>
										<dd class="CheckBox">
											<span class="FootballLiuChangTableSwitch AllTogetherBuyBox"
												onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))" onclick="Switch($(this))"
												ControlTarget=".FootballLiuChangTableSwitch"></span>
										</dd>
									</dl>

									<div class="space10"></div>

									<table class="PlanContent_FootballLiuChang">
										<tr>
											<th>场次</th>
											<th colspan="2">1</th>
											<th colspan="2">2</th>
											<th colspan="2">3</th>
											<th colspan="2">4</th>
											<th colspan="2">5</th>
											<th colspan="2">6</th>
											<th>倍数</th>
											<th>金额（元）</th>
										</tr>
										<tr class="FootballLiuChangTableSwitch">

											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" /></em></td>
													<td><em><s:property value="HTeam" /></em></td>
												</s:iterator>
												<td class="noborder_bottom">&nbsp;</td>
												<td class="noborder_bottom">&nbsp;</td>
											</s:else>
										</tr>
										<tr class="FootballLiuChangTableSwitch Switch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" />vs<s:property
																value="VTeam" /></em><i>半</i></td>
													<td><em><s:property value="HTeam" />vs<s:property
																value="VTeam" /></em><i>全</i></td>
												</s:iterator>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:else>
										</tr>
										<s:iterator id="lot_zc" value="lotList">
											<tr>
												<td>选号</td>
												<td><s:property value="#lot_zc.betcode.split(',')[0]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[1]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[2]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[3]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[4]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[5]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[6]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[7]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[8]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[9]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[10]" /></td>
												<td><s:property value="#lot_zc.betcode.split(',')[11]" /></td>
												<td class="noborder_top"><s:property
														value="#lot_zc.multiple" /></td>
												<td class="noborder_top"><i>¥<s:property
															value="#lot_zc.amt" /></i></td>
											</tr>
										</s:iterator>
									</table>

								</td>
							</tr>
						</s:else>
						<!--足彩六场进球 end-->
					</s:elseif>
					<s:elseif test='#caseLot.lotno=="T01004"||#caseLot.lotno=="ZC_19"'>
						<!--足彩九场进球 start-->
						<s:if test='#request.CaseDetail.torder.memo=="单式上传"'>
							<tr class="PlanContent_Number">
								<th>方案内容</th>
								<td><table>
										<!--对于多余五条的记录做隐藏显示的处理-->
										<thead>
											<s:iterator id="lot" value="lotList" status="id">
												<s:if test="#id.index<5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:if>
											</s:iterator>
										</thead>
										<s:if test="#request.betcode_num>5">
											<tbody id="moreValue" style="display: none">
												<s:iterator id="lot" value="lotList" begin="5">
													<tr>
														<td><s:property value="betcode" escape="false" /></td>
													</tr>
												</s:iterator>
											</tbody>
											<tfoot>
												<tr id="allIterm">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">显示全部内容</span></th>
												</tr>
												<tr id="partiterm" style="display: none">
													<th colspan="4"><span
														onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
														target="_blank" onmouseover="HoverOver($(this))"
														onmouseout="HoverOut($(this))">隐藏部分</span></th>
												</tr>
											</tfoot>
										</s:if>
									</table></td>
							</tr>
						</s:if>
						<s:else>
							<tr class="PlanContent_Football">
								<th>方案内容</th>
								<td>
									<dl>
										<dt>
											投注选号：<i><s:property value="#request.selectNum.radio" /></i>个单选、<i><s:property
													value="#request.selectNum.twoselect" /></i>个双选、<i><s:property
													value="#request.selectNum.threeselect" /></i>个三选
										</dt>
										<dd>查看详细对阵页面</dd>
										<dd class="CheckBox">
											<span class="FootballJiuChangTableSwitch AllTogetherBuyBox"
												onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))" onclick="Switch($(this))"
												ControlTarget=".FootballJiuChangTableSwitch"></span>
										</dd>
									</dl>

									<div class="space10"></div>

									<table class="PlanContent_FootballJiuChang">
										<tr>
											<th>场次</th>
											<th>1</th>
											<th>2</th>
											<th>3</th>
											<th>4</th>
											<th>5</th>
											<th>6</th>
											<th>7</th>
											<th>8</th>
											<th>9</th>
											<th>10</th>
											<th>11</th>
											<th>12</th>
											<th>13</th>
											<th>14</th>
											<th>倍数</th>
											<th>金额（元）</th>
										</tr>
										<tr class="FootballJiuChangTableSwitch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" /></em></td>
												</s:iterator>
												<td>&#160;</td>
												<td>&#160;</td>
											</s:else>
										</tr>
										<tr class="FootballJiuChangTableSwitch Switch">
											<s:if test='#request.againstValue==null'>
												<td>对阵</td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td><em>&nbsp;</em></td>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:if>
											<s:else>
												<td>对阵</td>
												<s:iterator value="#request.againstValue">
													<td><em><s:property value="HTeam" />vs<s:property
																value="VTeam" /></em></td>
												</s:iterator>
												<td class="noborder_bottom">&#160;</td>
												<td class="noborder_bottom">&#160;</td>
											</s:else>
										</tr>
										<s:if test='#lotList[0].betcode.indexOf("$")>-1'>
											<s:iterator id="lot_zc" value="lotList">
												<tr>
													<td>选号</td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[0]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[1]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[2]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[3]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[4]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[5]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[6]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[7]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[8]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[9]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[10]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[11]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[12]" /></td>
													<td><s:property
															value="#request.betcodeCopy.split(',')[13]" /></td>
													<td rowspan="2"><s:property value="#lot_zc.multiple" /></td>
													<td rowspan="2" class="red1">¥<s:property
															value="#lot_zc.amt" /></td>
												</tr>
												<tr>
													<td>设胆</td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[0]!="#"||#request.betcodeCopy.split(",")[0].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[1]!="#"||#request.betcodeCopy.split(",")[1].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[2]!="#"||#request.betcodeCopy.split(",")[2].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[3]!="#"||#request.betcodeCopy.split(",")[3].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[4]!="#"||#request.betcodeCopy.split(",")[4].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[5]!="#"||#request.betcodeCopy.split(",")[5].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[6]!="#"||#request.betcodeCopy.split(",")[6].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[7]!="#"||#request.betcodeCopy.split(",")[7].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[8]!="#"||#request.betcodeCopy.split(",")[8].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[9]!="#"||#request.betcodeCopy.split(",")[9].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[10]!="#"||#request.betcodeCopy.split(",")[10].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[11]!="#"||#request.betcodeCopy.split(",")[11].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[12]!="#"||#request.betcodeCopy.split(",")[12].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
													<td class="red1">&#160;<s:if
															test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[13]!="#"||#request.betcodeCopy.split(",")[13].equals("#")'>
															<font class="red1">&#160;</font>
														</s:if>
														<s:else>&radic;</s:else></td>
												</tr>
											</s:iterator>
										</s:if>
										<s:else>
											<s:iterator id="lot_zc" value="lotList">
												<tr>
													<td>选号</td>
													<td><s:property value="#lot_zc.betcode.split(',')[0]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[1]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[2]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[3]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[4]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[5]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[6]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[7]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[8]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[9]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[10]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[11]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[12]" /></td>
													<td><s:property value="#lot_zc.betcode.split(',')[13]" /></td>
													<td rowspan="2" class="noborder_top"><s:property
															value="#lot_zc.multiple" /></td>
													<td rowspan="2" class="noborder_top"><i>¥</i>
													<s:property value="#lot_zc.amt" />
													</th>
												</tr>
												<tr>
													<td>设胆</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
													<td>&nbsp;</td>
												</tr>
											</s:iterator>
										</s:else>
									</table>
								</td>
							</tr>
						</s:else>
						<!--足彩九场进球 end-->
					</s:elseif>
					<s:elseif
						test='#caseLot.lotno=="J00001"||#caseLot.lotno=="J00013"||#caseLot.lotno=="J00002"||#caseLot.lotno=="J00003"||#caseLot.lotno=="J00004"||#caseLot.lotno=="J00011"'>
						<!-- 竞彩部分begin -->
						<tr class="PlanContent_Football ZuCai_outsideSpace ">
							<th>方案内容</th>
							<td class="tableytRdg-fa"><input type="hidden" id="lotno"
								value="<s:property value='#caseLot.lotno'/>" />
								<p>
									过关方式：<em><s:property
											value="#request.pastMethod.pastMethod" /></em> <span> <a
										href="javascript:void(0)" class="dz_hide_show">隐藏对阵列表</a>
									</span>
								</p>
								<div class="space10"></div>

								<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
									<thead>
										<tr>
											<th>赛事编号</th>
											<th>对阵</th>
											<th>比分</th>
											<th>彩果</th>
											<th>复式选项(参考赔率值)</th>
										</tr>
									</thead>
									<tbody>
										<s:iterator value="#request.lastArray">
											<tr>
												<td>周<s:if test='matches.weekid=="1"'>一</s:if> <s:if
														test='matches.weekid=="2"'>二</s:if> <s:if
														test='matches.weekid=="3"'>三</s:if> <s:if
														test='matches.weekid=="4"'>四</s:if> <s:if
														test='matches.weekid=="5"'>五</s:if> <s:if
														test='matches.weekid=="6"'>六</s:if> <s:if
														test='matches.weekid=="7"'>日</s:if> <s:property
														value="matches.teamid" /></td>
												<td><em><s:property
															value="matches.team.split(':')[0]" /></em> <em> <s:if
															test='!matches.letpoint.equals("null")&& #caseLot.lotno!="J00001" && #caseLot.lotno!="J00003" && #caseLot.lotno!="J00002" && #caseLot.lotno!="J00004"'>
															<s:property value="matches.letpoint" />
														</s:if>
														<s:else>VS</s:else></em> <em><s:property
															value="matches.team.split(':')[1]" /></em></td>
												<td><s:if
														test='result.result!=null && result.result!="null" && result.result!=""'>
														<s:property value="result.result" />
													</s:if>
													<s:else>-</s:else> <s:if
														test='#caseLot.lotno=="J00002&&result.result!=null && result.result!="null" && result.result!=""'>(<s:property
															value="result.firsthalfresult" />)</s:if></td>
												<td><s:if
														test='caiguo!=null && caiguo !="" && caiguo !="null"'>
														<i><s:property value="caiguo" /></i>
													</s:if>
													<s:else>-</s:else></td>
												<!-- <td><s:property value="selectInfo"/><s:if test='pv!=null&&pv!="null"'>(sp<s:property value="pv"/>)</s:if></td>  -->
												<s:set name="selinfo" value="selectInfo.split(',')" />
												<s:set name="guo" value="caiguo"></s:set>
												<td><s:iterator value="#selinfo" status="se" var="info">
														<s:if test="#guo.trim() == #info.trim()">
															<i><s:property value="info" /></i>
															<s:if test='pv!=null&&pv!="null"&&pv!=""'>
																<i>(<s:property value="pv.split(',')[#se.index]" />)
																</i>
															</s:if>
														</s:if>
														<s:else>
															<s:property value="info" />
															<s:if test='pv!=null&&pv!="null"&&pv!=""'>(<s:property
																	value="pv.split(',')[#se.index]" />)</s:if>
														</s:else>
													</s:iterator></td>
											</tr>
										</s:iterator>
									</tbody>
								</table>

								<div class="space10"></div>

								<dl>
									<dt>
										总金额：¥<i><s:property value="#caseLot.totalAmt/100" /></i>元
									</dt>
								</dl>
					</s:elseif>
					<!-- 竞彩部分end -->
					<!-- 竞彩部分begin -->
					<s:elseif
						test='#caseLot.lotno=="J00005"||#caseLot.lotno=="J00006"||#caseLot.lotno=="J00007"||#caseLot.lotno=="J00008"||#caseLot.lotno=="J00012"'>
						<tr class="PlanContent_Football ZuCai_outsideSpace ">
							<th>方案内容</th>
							<td><input type="hidden" id="lotno"
								value="<s:property value='#caseLot.lotno'/>" />
								<dl>
									<dt>
										过关方式：<em><s:property
												value="#request.pastMethod.pastMethod" /></em>
									</dt>
								</dl>

								<div class="space10"></div>

								<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
									<thead>
										<tr>
											<th>赛事编号</th>
											<th>客队 VS 主队</th>
											<th>全场比分</th>
											<th>彩果</th>
											<th>复式选项</th>
										</tr>
									</thead>
									<tbody>
										<s:iterator value="#request.lastArray">
											<tr>
												<td>周<s:if test='matches.weekid=="1"'>一</s:if> <s:if
														test='matches.weekid=="2"'>二</s:if> <s:if
														test='matches.weekid=="3"'>三</s:if> <s:if
														test='matches.weekid=="4"'>四</s:if> <s:if
														test='matches.weekid=="5"'>五</s:if> <s:if
														test='matches.weekid=="6"'>六</s:if> <s:if
														test='matches.weekid=="7"'>日</s:if> <s:property
														value="matches.teamid" /></td>
												<td><em> <s:property
															value="matches.team.split(':')[1]" /></em> <em> <s:if
															test='matches.letpoint!=null && matches.letpoint!="" && matches.letpoint!="null" '>
															<s:property value="matches.letpoint" />
														</s:if> <s:else>VS</s:else></em> <em><s:property
															value="matches.team.split(':')[0]" /></em></td>
												<td><s:if
														test='result.basepoint!=null && result.basepoint!="null" && result.basepoint!=""'>
														<s:property value="result.basepoint" />
													</s:if>
													<s:else>-</s:else></td>
												<td><s:if
														test='result.newResult!=null && result.newResult!="null" && result.newResult!=""'>
														<s:property value="result.newResult" />
													</s:if>
													<s:else>-</s:else></td>
												<!-- <td><s:property value="selectInfo"/><s:if test='pv!=null&&pv!="null"'>(sp<s:property value="pv"/>)</s:if></td>  -->
												<s:set name="selinfo" value="selectInfo.split(',')" />
												<s:set name="guo" value="result.newResult"></s:set>
												<td><s:iterator value="#selinfo" status="se" var="info">
														<s:if test="#guo == #info">
															<i><s:property value="info" /></i>
															<s:if test='pv!=null&&pv!="null"&&pv!=""'>
																<i>(<s:property value="pv.split(',')[#se.index]" />)
																</i>
															</s:if>
														</s:if>
														<s:else> <s:property value="info" /> <s:if
															test='pv!=null&&pv!="null"&&pv!=""'>(<s:property
																value="pv.split(',')[#se.index]" />)</s:if> </s:else>
													</s:iterator></td>
											</tr>
										</s:iterator>
									</tbody>
								</table>

								<div class="space10"></div>

								<dl>
									<dt>
										总金额：¥<i><s:property value="#caseLot.totalAmt/100" /></i>
									</dt>
								</dl>
					</s:elseif>
					<!-- 竞彩部分end -->


					<!-- 北单部分begin -->
					<s:elseif
						test='#caseLot.lotno=="B00001"||#caseLot.lotno=="B00002"||#caseLot.lotno=="B00003"||#caseLot.lotno=="B00004"||
			#caseLot.lotno=="B00005"'>
						<tr class="PlanContent_Football ZuCai_outsideSpace ">
							<th>方案内容</th>
							<td><input type="hidden" id="lotno"
								value="<s:property value='#caseLot.lotno'/>" />
								<dl>
									<dt>
										过关方式：<em><s:property
												value="#request.pastMethod.pastMethod" /></em>
									</dt>
								</dl>
								<div class="space10"></div>

								<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
									<thead>
										<tr>
											<th>场次</th>
											<th>比赛</th>
											<th>让球数</th>
											<th>半场比分</th>
											<th>全场比分</th>
											<th>彩果</th>
											<th>开奖sp值</th>
											<th>您的选择</th>
										</tr>
									</thead>
									<tbody>
										<s:iterator value="#request.lastArray">
											<tr>
												<td><s:property value="match.no" /></td>
												<td><em> <s:property value="match.guest" /></em> <em>VS</em>
													<em><s:property value="match.host" /></em></td>
												<td><s:property value="result.handicap" /></td>
												<td><s:property value="result.scorehalf" /></td>
												<td><s:property value="result.scoreall" /></td>
												<td><s:property value="result.newResult" /></td>
												<td>(sp<s:property value="result.peilu" />)
												</td>
												<td><s:if
														test='selectInfo!=null && selectInfo!="null" && selectInfo!=""'>
														<s:property value="selectInfo" />
													</s:if>
													<s:else>-</s:else></td>
											</tr>
										</s:iterator>
									</tbody>
								</table>

								<div class="space10"></div>

								<dl>
									<dt>
										总金额：¥<i><s:property value="#caseLot.totalAmt/100" /></i>
									</dt>
								</dl>
					</s:elseif>
					<!-- 北单部分end -->
				</s:else>
			</s:else>
			<s:if test="#request.info!=null">
				<tr class="PlanWinInfo">
					<th>中奖详情</th>
					<td>
						<!--中奖详情 start--> <s:if
							test='#caseLot.lotno!="J00001"&&#caseLot.lotno!="J00013"&&#caseLot.lotno!="J00002"&&#caseLot.lotno!="J00003"&&#caseLot.lotno!="J00004"&&#caseLot.lotno!="J00011"&&#caseLot.lotno!="J00005"&&#caseLot.lotno!="J00006"&&#caseLot.lotno!="J00007"&&#caseLot.lotno!="J00008"&&#caseLot.lotno!="J00012"'>
							<dl>
								<dt>开奖号码：</dt>
								<dt>
									<s:if test='#caseLot.lotno=="F47104"||#caseLot.lotno=="B001"'>
										<input type="hidden" id="ssqwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,2)"/>" />
										<input type="hidden" id="ssqwin2"
											value="<s:property value="#request.info.winbasecode.substring(2,4)"/>" />
										<input type="hidden" id="ssqwin3"
											value="<s:property value="#request.info.winbasecode.substring(4,6)"/>" />
										<input type="hidden" id="ssqwin4"
											value="<s:property value="#request.info.winbasecode.substring(6,8)"/>" />
										<input type="hidden" id="ssqwin5"
											value="<s:property value="#request.info.winbasecode.substring(8,10)"/>" />
										<input type="hidden" id="ssqwin6"
											value="<s:property value="#request.info.winbasecode.substring(10,12)"/>" />
										<input type="hidden" id="ssqwin7"
											value="<s:property value="#request.info.winspecialcode"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(4,6)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(6,8)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(8,10)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(10,12)" /></span>
										<span class="SmallBlueBall"><s:property
												value="#request.info.winspecialcode" /></span>

									</s:if>
									<s:elseif test='#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"'>
										<input type="hidden" id="3Dwin1"
											value="<s:property value="#request.info.winbasecode.substring(1,2)"/>" />
										<input type="hidden" id="3Dwin2"
											value="<s:property value="#request.info.winbasecode.substring(3,4)"/>" />
										<input type="hidden" id="3Dwin3"
											value="<s:property value="#request.info.winbasecode.substring(5,6)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(1,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(3,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(5,6)" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="F47102"||#caseLot.lotno=="QL730"'>
										<input type="hidden" id="qlcwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,2)"/>" />
										<input type="hidden" id="qlcwin2"
											value="<s:property value="#request.info.winbasecode.substring(2,4)"/>" />
										<input type="hidden" id="qlcwin3"
											value="<s:property value="#request.info.winbasecode.substring(4,6)"/>" />
										<input type="hidden" id="qlcwin4"
											value="<s:property value="#request.info.winbasecode.substring(6,8)"/>" />
										<input type="hidden" id="qlcwin5"
											value="<s:property value="#request.info.winbasecode.substring(8,10)"/>" />
										<input type="hidden" id="qlcwin6"
											value="<s:property value="#request.info.winbasecode.substring(10,12)"/>" />
										<input type="hidden" id="qlcwin7"
											value="<s:property value="#request.info.winbasecode.substring(12,14)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(4,6)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(6,8)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(8,10)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(10,12)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(12,14)" /></span>
										<span class="SmallBlueBall"><s:property
												value="#request.info.winspecialcode" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"'>
										<input type="hidden" id="plswin1"
											value="<s:property value="#request.info.winbasecode.substring(0,1)"/>" />
										<input type="hidden" id="plswin2"
											value="<s:property value="#request.info.winbasecode.substring(1,2)"/>" />
										<input type="hidden" id="plswin3"
											value="<s:property value="#request.info.winbasecode.substring(2,3)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,1)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(1,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,3)" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="T01001"||#caseLot.lotno=="DLT_23529"'>
										<input type="hidden" id="dltwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,2)"/>" />
										<input type="hidden" id="dltwin2"
											value="<s:property value="#request.info.winbasecode.substring(2,4)"/>" />
										<input type="hidden" id="dltwin3"
											value="<s:property value="#request.info.winbasecode.substring(4,6)"/>" />
										<input type="hidden" id="dltwin4"
											value="<s:property value="#request.info.winbasecode.substring(6,8)"/>" />
										<input type="hidden" id="dltwin5"
											value="<s:property value="#request.info.winbasecode.substring(8,10)"/>" />
										<input type="hidden" id="dltwin6"
											value="<s:property value="#request.info.winbasecode.substring(11,13)"/>" />
										<input type="hidden" id="dltwin7"
											value="<s:property value="#request.info.winbasecode.substring(13,15)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(4,6)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(6,8)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(8,10)" /></span>
										<span class="SmallBlueBall"><s:property
												value="#request.info.winbasecode.substring(11,13)" /></span>
										<span class="SmallBlueBall"><s:property
												value="#request.info.winbasecode.substring(13,15)" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"'>
										<input type="hidden" id="plwwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,1)"/>" />
										<input type="hidden" id="plwwin2"
											value="<s:property value="#request.info.winbasecode.substring(1,2)"/>" />
										<input type="hidden" id="plwwin3"
											value="<s:property value="#request.info.winbasecode.substring(2,3)"/>" />
										<input type="hidden" id="plwwin4"
											value="<s:property value="#request.info.winbasecode.substring(3,4)"/>" />
										<input type="hidden" id="plwwin5"
											value="<s:property value="#request.info.winbasecode.substring(4,5)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,1)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(1,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,3)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(3,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(4,5)" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"'>
										<input type="hidden" id="plwwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,2)"/>" />
										<input type="hidden" id="plwwin2"
											value="<s:property value="#request.info.winbasecode.substring(3,5)"/>" />
										<input type="hidden" id="plwwin3"
											value="<s:property value="#request.info.winbasecode.substring(6,8)"/>" />
										<input type="hidden" id="plwwin4"
											value="<s:property value="#request.info.winbasecode.substring(9,11)"/>" />
										<input type="hidden" id="plwwin5"
											value="<s:property value="#request.info.winbasecode.substring(12,14)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(3,5)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(6,8)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(9,11)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(12,14)" /></span>
									</s:elseif>
									<s:elseif
										test='#caseLot.lotno=="T01009"||#caseLot.lotno=="QXC_10022"'>
										<input type="hidden" id="qxcwin1"
											value="<s:property value="#request.info.winbasecode.substring(0,1)"/>" />
										<input type="hidden" id="qxcwin2"
											value="<s:property value="#request.info.winbasecode.substring(1,2)"/>" />
										<input type="hidden" id="qxcwin3"
											value="<s:property value="#request.info.winbasecode.substring(2,3)"/>" />
										<input type="hidden" id="qxcwin4"
											value="<s:property value="#request.info.winbasecode.substring(3,4)"/>" />
										<input type="hidden" id="qxcwin5"
											value="<s:property value="#request.info.winbasecode.substring(4,5)"/>" />
										<input type="hidden" id="qxcwin6"
											value="<s:property value="#request.info.winbasecode.substring(5,6)"/>" />
										<input type="hidden" id="qxcwin7"
											value="<s:property value="#request.info.winbasecode.substring(6,7)"/>" />
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(0,1)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(1,2)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(2,3)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(3,4)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(4,5)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(5,6)" /></span>
										<span class="SmallRedBall"><s:property
												value="#request.info.winbasecode.substring(6,7)" /></span>
									</s:elseif>
									<s:else>
										<b><s:property
												value="#request.info.winbasecode.replaceAll('',' ')" /></b>
									</s:else>
								</dt>
								<%
									//如果是足彩则不显示详情的链接
								%>
								<s:if
									test='#caseLot.lotno=="T01005"||#caseLot.lotno=="T01003"||#caseLot.lotno=="T01004"||#caseLot.lotno=="T01006"'></s:if>
								<s:else>
									<dt>
										<s:if test='#caseLot.lotno=="F47104"||#caseLot.lotno=="B001"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:if>
										<s:elseif
											test='#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif
											test='#caseLot.lotno=="F47102"||#caseLot.lotno=="QL730"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47102"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif
											test='#caseLot.lotno=="T01009"||#caseLot.lotno=="QXC_10022"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01009"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif
											test='#caseLot.lotno=="T01011"||#caseLot.lotno=="PLW_35"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01011"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif
											test='#caseLot.lotno=="T01001"||#caseLot.lotno=="DLT_23529"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01001"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif
											test='#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01002"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
										<s:elseif test='#caseLot.lotno=="T01013"'>
											<a
												href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01013"
												target="_blank" onmouseover="HoverOver($(this))"
												onmouseout="HoverOut($(this))">详情</a>
										</s:elseif>
									</dt>
								</s:else>
							</dl>
						</s:if>
						<table>
							<thead>
								<tr>
									<th rowspan="1">方案注数</th>
									<th rowspan="1">倍数</th>
									<th rowspan="1">税后奖金（元）</th>
									<th rowspan="1">发起人佣金（元）</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>${CaseDetail.torder.betnum}</td>
									<td>${CaseDetail.torder.lotmulti}</td>

									<td><s:if
											test='#torder.prizestate!= null && (#torder.prizestate ==0 || #torder.prizestate ==1)'>
											<i>等待开奖</i>
										</s:if>
										<s:elseif test='#torder.prizestate!= null && #torder.prizestate ==2'>
											<i>派奖处理</i>
										</s:elseif>
										<s:else>
											<i>${caseLot.winBigAmt_format}</i>
										</s:else>
										</td>
									<td>
									 <s:if test='#caseLot.lotno=="J00001"||#caseLot.lotno=="J00013"||#caseLot.lotno=="J00002"||#caseLot.lotno=="J00003"||#caseLot.lotno=="J00004"||#caseLot.lotno=="J00011"||#caseLot.lotno=="J00005"||#caseLot.lotno=="J00006"||#caseLot.lotno=="J00007"||#caseLot.lotno=="J00008"||#caseLot.lotno=="J00011"'>
										<s:if test='#request.commisionPrizeAmt != null && #request.commisionPrizeAmt != ""'>
										<s:property value="#request.commisionPrizeAmt" />
										</s:if>
										<s:else>0</s:else>
									 </s:if>
									<s:elseif test='#request.buyUser!=null && !#request.buyUser.equals("") && #request.buyUser.commisionPrizeAmt!=null && !#request.buyUser.commisionPrizeAmt.equals("") '>
											<s:property value="#request.buyUser.commisionPrizeAmt" />
										</s:elseif> <s:else>--</s:else></td>
								</tr>
							</tbody>
						</table> <s:if
							test="#starter.userno!=#request.tuserInfo.userno&&#request.iUser!=null">
							<ol>
								<li>您的奖金：<i>
								 <s:if test='#caseLot.lotno=="J00001"||#caseLot.lotno=="J00013"||#caseLot.lotno=="J00002"||#caseLot.lotno=="J00003"||#caseLot.lotno=="J00004"||#caseLot.lotno=="J00011"||#caseLot.lotno=="J00005"||#caseLot.lotno=="J00006"||#caseLot.lotno=="J00007"||#caseLot.lotno=="J00008"||#caseLot.lotno=="J00011"'>
								 	<s:property value="#request.prizeAmt" />
								 </s:if>
								 <s:else><s:property value="#request.iUser.prizeAmt" /></s:else>
								</i>元
								</li>
							</ol>
						</s:if> <!--中奖详情 end-->
					</td>
				</tr>
			</s:if>
			<s:if test="#caseLot.displayState==1">
				<tr class="PlanBuyInfo">
					<th>认购方案</th>
					<input id="lotno" type="hidden" value="${caseLot.lotno}" />
					<td>
						<form action="#" method="post" id="CaseForm"
							onsubmit="return infoCanyuHemai('${caseLot.lotno}','${caseLot.id}')">
							<table>
								<tr>
									<td>
										<ul>
											<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light"
												href="javascript:loginRequrl();">登录</a> 。
											</li>
											<li id="loginStaticInMoney" style="display: none;"><script>$(function(){touzhuInitStatic();});</script>
									</li></ul>
									</td>
									<th rowspan="4"><span class="BuyNowButton"><input
											class="BaseBtn AllTogetherBuyBox" id="button_${caseLot.id }"
											type="button" onclick='$("#CaseForm").submit()' /></span></th>
								</tr>
								<tr>
									<td>我要认购<input class="MoneyInput" id="amt" name="amt"
										type="text" onkeyup="bili('amt')" />元，占<em id="amt_bili">0</em>%
										,（剩余<i><s:property
												value='(#caseLot.totalAmt-#caseLot.buyAmtByStarter-#caseLot.buyAmtByFollower)/100' /></i>元可认购）
									</td>
								</tr>
								<s:if
									test="(#caseLot.totalAmt-#caseLot.buyAmtByStarter-#caseLot.buyAmtByFollower-#caseLot.safeAmt)>0">
									<tr>
										<td>可保底<i><s:property
													value='(#caseLot.totalAmt-#caseLot.buyAmtByStarter-#caseLot.buyAmtByFollower-#caseLot.safeAmt)/100' /></i>元，
											我要保底<input id="safeAmt" name="safeAmt" class="MoneyInput"
											type="text" onkeyup="bili('safeAmt');" />元，占 <em
											id="safeAmt_bili">0</em>%
										</td>
									</tr>
								</s:if>
								<tr>
									<td>
										<ul>
											<li><input type="checkbox" checked="checked" id="xieyi" />我已阅读并同意<a
												class="light"
												href="<%=request.getContextPath()%>/function/rules/betProtocol.jsp"
												target="_blank">《用户代购协议》</a>。</li>

											<s:if test='#caseLot.lotno=="F47103"||#caseLot.lotno=="D3"'>
												<li><input type="checkbox" checked="checked"
													id="fengxiang" />我已阅读并同意<span class="buy_blue"> <a
														href="/rules/3DRisk.jsp" title="限号管理" target="_blank">限号管理</a></span>和<a
													href="<%=request.getContextPath()%>/function/rules/3DRisk.jsp"
													title="投注风险须知议" target="_blank">《福彩3D投注风险须知》</a>。</li>
											</s:if>
											<s:elseif
												test='#caseLot.lotno=="T01002"||#caseLot.lotno=="PL3_33"'>
												<li><input type="checkbox" checked="checked"
													id="fengxiang" />我已阅读并同意<span class="buy_blue"> <a
														href="<%=request.getContextPath()%>/function/rules/pls_RiskFile.jsp"
														title="限号管理" target="_blank">限号管理</a></span>和<a
													href="<%=request.getContextPath()%>/function/rules/pls_RiskFile.jsp"
													title="投注风险须知议" target="_blank">《排列三投注风险须知》</a>。</li>
											</s:elseif>
										</ul>
									</td>
								</tr>
							</table>
						</form>
					</td>
				</tr>
			</s:if>
			<tr class="PlanBuyContent">
				<th>认购详情</th>
				<td>
					<!--认购详情内容 start-->
					<ol>
						<li>当前认购<i><s:i18n name="Format">
									<s:text name="FormatNumeral2">
										<s:param
											value="(#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)/100" />
									</s:text>
								</s:i18n></i>元，参与人员： <i><s:if
									test='#caseLot.participantCount==null||#caseLot.participantCount.equals("null")'>0</s:if>
								<s:else>${caseLot.participantCount}</s:else></i>人 <s:if
								test="#starter.userno!=#request.tuserInfo.userno&&#request.iUser!=null">
					您已认购：<i id="canyuAmt"><s:i18n name="Format">
										<s:text name="FormatNumeral2">
											<s:param value="#request.iUser.num/100" />
										</s:text>
									</s:i18n></i>元 <s:if
									test="(#caseLot.totalAmt/5)>(#caseLot.safeAmt+#caseLot.buyAmtByStarter+#caseLot.buyAmtByFollower)&&#caseLot.displayState==1&&#request.iUser.num>0">
									<span class="CancelBtn"><input
										class="BaseBtn AllTogetherBuyBox"
										onclick="chezi('${caseLot.id }')" id="button_chezi"
										type="button" value="撤资" /></span>
								</s:if>
							</s:if> <span
							onclick='$("#canyulist").toggle();$("#hiddenUser").toggle();$("#showUser").toggle()'
							onmouseover=HoverOver($(this));onmouseout=HoverOut($(this));
							id="hiddenUser" style="display: none">隐藏参与用户</span> <span
							onclick='$("#canyulist").toggle();$("#showUser").toggle();$("#hiddenUser").toggle()'
							onmouseover=HoverOver($(this));onmouseout=HoverOut($(this));
							id="showUser">显示参与用户</span>
						</li>
						<form id="userListPage"
							onsubmit='getCanyuList("userListPage","canyulist");'>
							<input type="hidden"
								value="<s:property value="%{#parameters.caselotId[0]}"/>"
								name="caselotid"> <input type="hidden" name="userno"
								value='${userno }' />
							<script>
								$(function() {
									getCanyuList("userListPage", "canyulist");
								});
							</script>
							<li class="PlanBuyCon" id="canyulist" style="display: none">
							</li>
						</form>
					</ol> <!--认购详情内容 end-->
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr class="PlanDrumbeating">
				<th>方案宣传</th>
				<td><s:if
						test='#caseLot.description!=null&&!#caseLot.description.equals("null")'>
						<s:property value="#caseLot.description" />
					</s:if></td>
			</tr>
		</tfoot>

	</table>

</div>
<input id="iswin" type="hidden"
	value='<s:property value="#request.winInfo"/>' />
<input id="minamt" type="hidden"
	value='<s:property value="#caseLot.minAmt/100"/>' />
<div class="space10">&#160;</div>
<script type="text/javascript">
	function fuzhi() {
		if (document.all) {
			window.clipboardData.setData('text', $("#dizhi").val());

		} else {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager
							.enablePrivilege("UniversalXPConnect");
					var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
							.createInstance(Components.interfaces.nsIClipboard);
					if (!clip) {
						return;
					}
					var trans = Components.classes["@mozilla.org/widget/transferable;1"]
							.createInstance(Components.interfaces.nsITransferable);
					if (!trans) {
						return;
					}
					trans.addDataFlavor("text/unicode");
					var str = new Object();
					var len = new Object();
					var str = Components.classes["@mozilla.org/supports-string;1"]
							.createInstance(Components.interfaces.nsISupportsString);
					var copytext = $("#dizhi").val();
					str.data = copytext;
					trans.setTransferData("text/unicode", str,
							copytext.length * 2);
					var clipid = Components.interfaces.nsIClipboard;
					if (!clip) {
						return false;
					}
					clip.setData(trans, null, clipid.kGlobalClipboard);
				} catch (e) {
					openAlert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
					return;
				}
			}
		}
		openAlert("已成功复制方案链接至剪贴板！");
		return;
	}

	$(document).ready(function() {
		$(".dz_hide_show").each(function(i) {
			$(this).click(function() {
				$(this).text($(this).text() == "隐藏对阵列表" ? "显示对阵列表" : "隐藏对阵列表");
				$(".ZuCaiShengFu").toggle();
			});
		});
	});
</script>
<jsp:include
	page="/function/common/ruyicai_include_common_footer_noindex.jsp" />
<jsp:include page="/function/common/tishi.jsp" />
<jsp:include page="/function/common/rengou_tishi.jsp" />
<jsp:include page="/function/query/case/fanganList.jsp" />
<jsp:include page="/function/query/case/yingliList.jsp" />
<jsp:include page="/function/common/setBody.jsp" />