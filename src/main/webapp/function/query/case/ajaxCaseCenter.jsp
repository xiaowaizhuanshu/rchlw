<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<s:set name="lotno_cn" value="" />
<s:iterator id="list"  value="#request.hemaiList.list" status="i" >
			<tr 
				<s:if test='#i.index<10'> class="orange" onmouseout="$(this).attr('class','orange')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
				<s:elseif test='#i.odd'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:elseif>
					
				<s:else>class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
				>
				<th>${i.index+1+indexNum}</th>
				<th><a href="javascript:;" onclick="fanganListToUser('<s:property value="#list.starter.userno" />',$(this).text())" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >
				<s:if test='#list.starter.nickname==null||#list.starter.nickname.equals("null")||#list.starter.nickname.equals("")||#list.starter.nickname.equals(" ")' >***<s:property value="#list.starter.mobileid.substring(6)" /></s:if><s:else><s:property value="#list.starter.nickname" /></s:else>
				</a></th>
				<th>
					<s:set name="Nname" value="" />
					<s:if test='#list.starter.nickname==null||#list.starter.nickname.equals("null")||#list.starter.nickname.equals("")||#list.starter.nickname.equals(" ")' >
					<s:set id="Nname" value='"***"+#list.starter.mobileid.substring(6)' /></s:if>
					<s:else><s:set id="Nname" value='#list.starter.nickname' /></s:else>
					
				<s:if test="#list.torder.lotno=='F47104'"><s:set id="lotno_cn" value='"双色球"' /></s:if>
				<s:elseif test='#list.torder.lotno=="F47103"'><s:set id="lotno_cn" value='"福彩3D"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="F47102"'><s:set id="lotno_cn" value='"七乐彩"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="T01001"'><s:set id="lotno_cn" value='"大乐透"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="T01002"'><s:set id="lotno_cn" value='"排列三"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="T01011"'><s:set id="lotno_cn" value='"排列五"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="T01009"'><s:set id="lotno_cn" value='"七星彩"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="T01013"'><s:set id="lotno_cn" value='"22选5"' /></s:elseif>
				<s:elseif test='#list.torder.lotno=="J00013"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球胜平负"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00001"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球让球胜平负"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00002"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球比分"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00003"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球总进球"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00004"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球半场"' /></s:elseif>
						
						<s:elseif test='#list.torder.lotno=="J00005"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球胜负"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00006"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球让分胜负' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00007"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球胜分差"' /></s:elseif>
						<s:elseif test='#list.torder.lotno=="J00008"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球大小分"' /></s:elseif>	
						<s:elseif test='#list.torder.lotno=="J00011"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球混合"' /></s:elseif>	
						<s:elseif test='#list.torder.lotno=="J00012"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球混合"' /></s:elseif>	
					<div class="LevelBox"><a href="javascript:;" id="displayIcon_${i.index}" onclick="yingliListToUser('<s:property value="#list.starter.userno" />','<s:property value="#list.caseLot.lotno" />','<s:property value="#Nname" />','displayIcon_${i.index}','${lotno_cn}')" >
						<s:set name="achievement" value="#list.achievement.displayIcon" ></s:set>
						<s:if test="#achievement.crown!=null">
							<s:iterator begin="1" end="#achievement.crown">
								<span class="AllTogetherBuyBox LevelCrown"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graycrown!=null">
							<s:iterator begin="1" end="#achievement.graycrown">
							<span class="AllTogetherBuyBox LevelCrownGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.cup!=null">
							<s:iterator begin="1" end="#achievement.cup">
							<span class="AllTogetherBuyBox LevelCup"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graycup!=null">
							<s:iterator begin="1" end="#achievement.graycup">
							<span class="AllTogetherBuyBox LevelCupGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.diamond!=null">
							<s:iterator begin="1" end="#achievement.diamond">
							<span class="AllTogetherBuyBox LevelDiamond"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graydiamond!=null">
							<s:iterator begin="1" end="#achievement.graydiamond">
							<span class="AllTogetherBuyBox LevelDiamondGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.goldStar!=null">
							<s:iterator begin="1" end="#achievement.goldStar">
							<span class="AllTogetherBuyBox LevelStar"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graygoldStar!=null">
							<s:iterator begin="1" end="#achievement.graygoldStar">
							<span class="AllTogetherBuyBox LevelStarGray"></span>
							</s:iterator>
						</s:if></a>
					</div>
				</th>
				<s:if test="#list.caseLot.visibility!=0">	
				<th>
					<s:if test="#list.caseLot.visibility==1">对所有人保密</s:if>
					<s:elseif test="#list.caseLot.visibility==2">对所有人截止后公开</s:elseif>
					<s:elseif test="#list.caseLot.visibility==3">对跟单者公开</s:elseif>
					<s:elseif test="#list.caseLot.visibility==4">对跟单者截止后公开</s:elseif>
				</th>				
				</s:if>
				<s:else>
				<s:set name="zhuma_view" value="" />
				<s:set name="zhuma_open" value="" />
				<s:iterator id="this_lot" value="#list.torder.tlots" status="j">
					<s:if test="#j.index<1">
						<s:if test="zhuma.betcode.replace('<br/>','').length()>26">
							<s:set id="zhuma_view" value="zhuma.betcode.replace('<br/>','').substring(0,26)+'...'"/>
						</s:if>
						<s:else><s:set id="zhuma_view" value="zhuma.betcode.replace('<br/>','')"/></s:else>
						<s:set id="zhuma_open" value="zhuma.betcode" />
					</s:if>
					<s:else><s:set id="zhuma_open" value="#zhuma_open+zhuma.betcode" /></s:else>
				</s:iterator>
				<th class="WindowPopup" onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))" Content="${zhuma_open}">
				${zhuma_view}
				</th>
				</s:else>
				
				
				<td><s:i18n name="Format"><s:text name="FormatNumeral2" ><s:param value="#list.caseLot.totalAmt/100"/></s:text></s:i18n></td>
				
				<th><s:i18n name="Format"><s:text name="FormatNumeral2" ><s:param value="#list.caseLot.minAmt/100"/></s:text></s:i18n>元</th>
				
				<th><s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt"/>
				</s:text></s:i18n>%
<s:if test="#list.caseLot.safeAmt>0">+
				<s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="(#list.caseLot.safeAmt*100)/#list.caseLot.totalAmt"/>
				</s:text></s:i18n>%<i>保</i>
</s:if>			</th>
				
				<td><s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100"/>
				</s:text></s:i18n></td>
				<td><s:if test='#list.caseLot.participantCount==null||#list.caseLot.participantCount.equals("null")' >0</s:if><s:else>${list.caseLot.participantCount}</s:else></td>
				<s:set name="safeAmt_mr" value="#list.caseLot.minAmt/100"/>
				<th><input class="BuyText" type="text" id="canyu_amt_${list.caseLot.id}" value="${safeAmt_mr}" /> 元 <span class="CancelBtn">
				<input class="BaseBtn AllTogetherBuyBox" id="button_${list.caseLot.id}" type="button" onclick="canyuHemai('${list.caseLot.id}','${list.caseLot.lotno}')"  value="购买" />
				</span></th>
				<th><a href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >查看</a></th>
			</tr>
		</s:iterator>
		<s:set  name="pageCount"  value="%{#parameters.pageCount[0]}"/>
			<tr class="PageContent">
				<td colspan="11">每页显示
				<input type="radio" name="pageCount" <s:if test="#pageCount=='20'||(#pageCount!='30'&&#pageCount!='50')"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="20" />20条
				<input type="radio" name="pageCount" <s:if test="#pageCount=='30'"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="30" />30条
				<input type="radio" name="pageCount" <s:if test="#pageCount=='50'"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="50" />50条</td>
			</tr>
			<tr class="PageContent">
				<th colspan="11" >${pageHtml}</th>
			</tr>