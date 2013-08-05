<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<s:set name="lotno_cn" value="" />
<s:iterator id="list"  value="#request.hemaiList.list" status="i"  >
	<tr
			<s:if test='#i.index<10'> class="orange" onmouseout="$(this).attr('class','orange')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
			<s:elseif test='#i.odd'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:elseif>
			<s:else>class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
			>
			<td class="tab_xuhao <s:if test='#i.index+1+indexNum <5'>on</s:if>" >${i.index+1+indexNum}</td>
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
	<s:set  name="pageCount"  value="%{#parameters.pageCount[0]}"/>
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