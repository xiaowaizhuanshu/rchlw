<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
			<s:iterator id="list"  value="#request.hemaiList.list" status="i" >
                <tr <s:if test='#i.index%2==0' >class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')"</s:if>
				<s:elseif  test='#i.index%2==1'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')"</s:elseif> 
				  onmouseover="$(this).attr('class','TrbgBlue')" >
                  <td><s:if test="#list.caseLot.lotno=='F47104'">双色球</s:if>
                  <s:elseif  test='#list.caseLot.lotno=="F47107"' >快三</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="F47103"'>福彩3D</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="F47102"'>七乐彩</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="T01001"'>大乐透</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="T01002"'>排列三</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="T01011"'>排列五</s:elseif>
                  <s:elseif test='#list.caseLot.lotno=="T01009"'>七星彩</s:elseif>
                 <s:elseif test='#list.torder.lotno=="T01003"'>足彩胜负</s:elseif>
				 <s:elseif test='#list.torder.lotno=="T01005"'>4场进球</s:elseif>
				 <s:elseif test='#list.torder.lotno=="T01004"'>任选9场</s:elseif>
				 <s:elseif test='#list.torder.lotno=="T01006"'>6场半全</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00001"'>竞足胜平负</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00013"'>竞足让球胜平负</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00002"'>竞足比分</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00003"'>竞足总进球</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00004"'>竞足半场</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00005"'>竞篮胜负</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00006"'>竞篮让分胜负</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00007"'>竞篮胜分差</s:elseif>
				 <s:elseif test='#list.torder.lotno=="J00008"'>竞篮大小分</s:elseif>
			     <s:elseif test='#list.torder.lotno=="T01013"'>22选5</s:elseif>
			    <s:elseif test='#list.torder.lotno=="J00011"'>竞足混合</s:elseif>
			    <s:elseif test='#list.torder.lotno=="J00012"'>竞篮混合</s:elseif>
			    <s:elseif test='#list.torder.lotno=="B00001"'>北单胜平负</s:elseif>
			    <s:elseif test='#list.torder.lotno=="B00002"'>北单总进球</s:elseif>
			    <s:elseif test='#list.torder.lotno=="B00003"'>北单半全场</s:elseif>
			    <s:elseif test='#list.torder.lotno=="B00004"'>北单上下单双</s:elseif>
			    <s:elseif test='#list.torder.lotno=="B00005"'>北单单场比分</s:elseif>
                  </td>
                  <td>
                  <s:set name="Nname" value="" />
					<s:if test='#list.starter.nickname==null||#list.starter.nickname.equals("null")||
					#list.starter.nickname.equals("")||#list.starter.nickname.equals(" ")' >
					<s:set id="Nname" value='"***"+#list.starter.mobileid.substring(6)' /></s:if>
					<s:else><s:set id="Nname" value='#list.starter.nickname' />
					<a href="javascript:;" onclick="fanganListToUser('${list.achievement.userno }','${Nname }')" 
					onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >${list.starter.nickname}</a>
					</s:else>
                  </td>
                  <td><div class="levelsize">
                 	 <a href="javascript:;" id="displayIcon_${i.index}" onclick="yingliListToUser('<s:property value="#list.starter.userno" />','<s:property value="#list.caseLot.lotno" />','<s:property value="#Nname" />','displayIcon_${i.index}','${lotno_cn}')" >
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
						</s:if>
						</a>
						</div>						</td>
                  <td><s:i18n name="Format"><s:text name="FormatNumeral2" ><s:param value="#list.caseLot.totalAmt/100"/></s:text></s:i18n></td>
				  <td><s:i18n name="Format"><s:text name="FormatNumeral2" >
					<s:param value="(#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100/#list.caseLot.totalAmt"/>
					</s:text></s:i18n>% +
					<s:i18n name="Format"><s:text name="FormatNumeral2" >
					<s:param value="(#list.caseLot.safeAmt*100)/#list.caseLot.totalAmt"/>
					</s:text></s:i18n>%</td>
                  <td><s:i18n name="Format"><s:text name="FormatNumeral2" >
					<s:param value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100"/>
					</s:text></s:i18n></td>
                  <td class="red1"><a href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}" title="入股" target="_blank">入股</a></td>
                </tr>
             </s:iterator>