<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
	
<!-- 合买推荐-->
<div class="recomened_tab">
                	<div id="shouyehemai_tab" class="rec_tab">
                    	<a href="javascript:void(0)">更多>></a>
                    	<span id="hm" opt="">合买推荐</span>
                    	<span id="F47104" opt="F47104">双色球</span>
                    	<span id="T01001" opt="T01001">大乐透</span>
                    	<span id="B00001" opt="B00001">足球单场</span>
                    	<span id="J00001"opt="J00001">竞彩足球</span>
                    	<span id="J00005" opt="J00005">竞彩篮球</span>
                    </div>
                    <div class="rec_table_list">
                        <div id="reco_epople" class="reco_epople">
                            <span>合买红人：</span>
                            <label>小歪专属</label>
                            <label>天际翱翔</label>
                            <label>川西平原</label>
                            <label>我和你工作室</label>
                            <label>小白老总</label>
                             <label>大奖来我家</label>
                            <label>森林轻骑兵</label>
                        </div>
                        <table class="tab_list">
                        	<tr>
                            	<th width="79">彩种</th>
                            	<th width="83">发起人</th>
                            	<th width="88">战绩</th>
                            	<th width="73">方案金额</th>
                            	<th width="98">进度</th>
                            	<th width="70">剩余金额</th>
                            	<th width="160">参与认购</th>
                            	<th width="64">详情</th>
                            </tr>
                            <s:set name="lotno_cn" value="" />
                            <s:iterator id="list"  value="#request.hemaiList.list" status="i" >
	                            <tr <s:if test='#i.odd'>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
									<s:else>class="TrbgGrey" onmouseout="$(this).attr('class','TrbgGrey')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
									>
	                            	<td class="species">
	                            			<s:if test="#list.torder.lotno=='F47104'">双色球<s:set id="lotno_cn" value='"双色球"' /></s:if>
											<s:elseif test='#list.torder.lotno=="F47103"'>福彩3D<s:set id="lotno_cn" value='"福彩3D"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="F47102"'>七乐彩<s:set id="lotno_cn" value='"七乐彩"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01001"'>大乐透<s:set id="lotno_cn" value='"大乐透"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01002"'>排列三<s:set id="lotno_cn" value='"排列三"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01011"'>排列五<s:set id="lotno_cn" value='"排列五"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01009"'>七星彩<s:set id="lotno_cn" value='"七星彩"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01003"'>足彩胜负<s:set id="lotno_cn" value='"足彩胜负"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01005"'>4场进球<s:set id="lotno_cn" value='"4场进球"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01004"'>任选9场<s:set id="lotno_cn" value='"任选9场"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01006"'>6场半全<s:set id="lotno_cn" value='"6场半全"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="T01013"'>22选5<s:set id="lotno_cn" value='"22选5"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00013"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球胜平负"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00001"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球让球胜平负"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00002"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球比分"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00003"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球总进球"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00004"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球半场"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="B00001"'>北单胜平负<s:set id="lotno_cn" value='"北单胜平负"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="B00002"'>北单总进球<s:set id="lotno_cn" value='"北单总进球"' /></s:elseif>
									        <s:elseif test='#list.torder.lotno=="B00003"'>北单半全场<s:set id="lotno_cn" value='"北单半全场"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="B00004"'>北单上下盘单双 <s:set id="lotno_cn" value='"北单上下盘单双"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="B00005"'>北单单场比分 <s:set id="lotno_cn" value='"北单单场比分"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00005"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球胜负"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00006"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球让分胜负' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00007"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球胜分差"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00008"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球大小分"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00011"'>竞彩足球<s:set id="lotno_cn" value='"竞彩足球混合投注"' /></s:elseif>
											<s:elseif test='#list.torder.lotno=="J00012"'>竞彩篮球<s:set id="lotno_cn" value='"竞彩篮球混合投注"' /></s:elseif>
	                            	</td>
	                            	<td class="user_name">
												<s:set name="Nname" value="#request.hemaiList.nickname_array[#i.index].new_nickname" />
												<a href="javascript:;" onclick="fanganListToUser('${list.achievement.userno }','${Nname }','<s:property value="#list.caseLot.lotno" />')" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >${Nname }</a>
									</td>
	                            	<td class="user_grade">
	                            			<div class="LevelBox">
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
												</s:if></a>
										</div>
	                            	
	                            	</td>
	                            	<td class="fangan_value">
	                            			<s:i18n name="Format"><s:text name="FormatNumeral2" >
											<s:param value="(#list.caseLot.totalAmt)/100"/>
											</s:text></s:i18n>
	                            	</td>
	                            	<td class="schedule">
	                            			<s:i18n name="Format"><s:text name="FormatNumeral2" >
											<s:param value="((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt"/>
											</s:text></s:i18n>%
											<s:if test="(((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt)!=100&&#list.caseLot.safeAmt>0">+
													<s:i18n name="Format"><s:text name="FormatNumeral2" >
													<s:param value="(#list.caseLot.safeAmt*100)/#list.caseLot.totalAmt"/>
													</s:text></s:i18n>
												%<i>保</i>
											</s:if>	
	                            	</td>
	                            	<td class="surplus">
			                            	<s:i18n name="Format"><s:text name="FormatNumeral2" >
											<s:param value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100"/>
											</s:text></s:i18n>
									</td>
									<s:set name="safeAmt_mr" value="#list.caseLot.minAmt/100"/>
	                            	<td class="participate">
	                            		<input class="keyword_value" type="text"  id="canyu_amt_${list.caseLot.id}" value="${safeAmt_mr}"/> 元 
										<input class="keyword_btn" id="button_${list.caseLot.id}" type="button" 
										onclick="canyuHemai('${list.caseLot.id}','${list.caseLot.lotno}')"  value="购买" />
	                            	</td>
	                            	<td class="user_view">
	                            		<a href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}" target="_blank"  onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >查看</a>
	                            	</td>
	                            </tr>
                           </s:iterator>
                        </table>
                    </div>
                </div>

	<script type="text/javascript">
				$(function(){
					var tag = $("#shouyehemai").data("hmtag");
					var uname = $("#shouyehemai").data("uname");
					var starteUserno = "00000002";
					//设置合买红人标签状态
					if(!uname){
						uname="";
						starteUserno = "";
					}else{
						var u = decodeURI(uname);
						$("#reco_epople > label").each(function(){
							if($(this).html()==u){
								$(this).addClass("on");
								return false;
							}
							
						});
					}
					//设置彩种标签选中状态
					if(!tag){
						tag="";
						$("#hm").addClass("on");
					}else{
						$("#"+tag).addClass("on");
					}
					
					//点击彩种触发事件
					$("#shouyehemai_tab > span").click(function(){
						//获取到选中的标签
			 			var lotno = $(this).siblings("span").removeClass("on").end().addClass("on").attr("opt");
			 			$("#shouyehemai").data("hmtag",lotno);
			 			//清空原有数据
			 			$(".tab_list tr").eq(0).nextAll().remove();
			 			reHtml(82,'isAjax=shouye&pageCount=10&lotno='+lotno+'&search='+uname+'&starteUserno='+starteUserno,'','shouyehemai',false);
			 			
			 		});
					//点击合买红人触发事件
					$("#reco_epople > label").click(function(){
						if($(this).attr("class")){//如果有class，则说明去掉此人，补选中
							uname = "";
							starteUserno = "";
						}else{//没有class说明刚选中
							$(this).siblings("label").removeClass("on").end().addClass("on");
							uname = $(this).html();
							uname = encodeURI(uname);
							starteUserno = "00000002";
						}
						$(".tab_list tr").eq(0).nextAll().remove();
						$("#shouyehemai").data("uname",uname);
						reHtml(82,'isAjax=shouye&pageCount=10&lotno='+tag+'&search='+uname+'&starteUserno='+starteUserno,'','shouyehemai',false);
					});
				});
			</script>
			
	<div id="ajax_hemai_pop" class="WindowCenter" style="display:none; background-image:url(<%=request.getContextPath() %>/function/images/ThrobberBig.gif); background-position:-88px -144px; width:148px; height:27px;" ></div>
	<input type="hidden" id="amt_caseId"  value="" />
	<jsp:include page="/function/common/canyuHemai_div.jsp"/>
	<jsp:include page="/function/query/case/fanganList.jsp"/>
	<jsp:include page="/function/query/case/yingliList.jsp"/>
<!-- 合买推荐end-->