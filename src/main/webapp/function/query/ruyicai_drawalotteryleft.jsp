<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!-- 博雅彩首页开奖公告 -->
<div class="PannelHead"><h3>开奖号码</h3></div>
	<div class="PannelBody NumberShowSlide">
		<ul >
			  <s:iterator value="#request.arrWininfo" id="arrWininfo">
			      <!-- 双色球 -->
			      <s:if test="id.lotno=='F47104'">
						<li>
							<table>
								<tr class="title"><th><font>双色球</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
								<b><s:property value="winbasecode.substring(0,2)"/></b>
								<b><s:property value="winbasecode.substring(2,4)"/></b>
								<b><s:property value="winbasecode.substring(4,6)"/></b>
								<b><s:property value="winbasecode.substring(6,8)"/></b>
								<b><s:property value="winbasecode.substring(8,10)"/></b>
								<b><s:property value="winbasecode.substring(10,12)"/></b>
								<strong><s:property value="winspecialcode"/></strong>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_ssq.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>
					</s:if>	
			<!-- 福彩3D -->
					<s:elseif test="id.lotno=='F47103'">
						<li>
							<table>
								<tr class="title"><th><font>福彩3D</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
								<b><s:property value="winbasecode.substring(1,2)"/></b>
								<b><s:property value="winbasecode.substring(3,4)"/></b>
								<b><s:property value="winbasecode.substring(5,6)"/></b>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_3D.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>
					</s:elseif>
			<!-- 七乐彩 -->				
					<s:elseif test="id.lotno=='F47102'">
						<li>
							<table>
								<tr class="title"><th><font>七乐彩</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
									<b><s:property value="winbasecode.substring(0,2)"/></b>
									<b><s:property value="winbasecode.substring(2,4)"/></b>
									<b><s:property value="winbasecode.substring(4,6)"/></b>
									<b><s:property value="winbasecode.substring(6,8)"/></b>
									<b><s:property value="winbasecode.substring(8,10)"/></b>
									<b><s:property value="winbasecode.substring(10,12)"/></b>
									<b><s:property value="winbasecode.substring(12,14)"/></b>
									<strong><s:property value="winspecialcode"/></strong>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47102" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_qlc.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>		
					</s:elseif>
			<!-- 大乐透 -->
					<s:elseif test="id.lotno=='T01001'">
						<li>
							<table>
								<tr class="title"><th><font>大乐透</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
									<b><s:property value="winbasecode.substring(0,2)"/></b>
									<b><s:property value="winbasecode.substring(2,4)"/></b>
									<b><s:property value="winbasecode.substring(4,6)"/></b>
									<b><s:property value="winbasecode.substring(6,8)"/></b>
									<b><s:property value="winbasecode.substring(8,10)"/></b>
									<strong><s:property value="winbasecode.substring(11,13)"/></strong>
									<strong><s:property value="winbasecode.substring(13,15)"/></strong>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01001" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_dlt.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>		
					</s:elseif>
			<!-- 排列三 -->
					<s:elseif test="id.lotno=='T01002'">
						<li>
							<table>
								<tr class="title"><th><font>排列三</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
									<b><s:property value="winbasecode.substring(0,1)"/></b>
									<b><s:property value="winbasecode.substring(1,2)"/></b>
									<b><s:property value="winbasecode.substring(2,3)"/></b>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01002" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_pls.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>
					</s:elseif>
			<!-- 排列五 -->
					<s:elseif test="id.lotno=='T01011'">
						<li>
							<table>
								<tr class="title"><th><font>排列五</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
									<b><s:property value="winbasecode.substring(0,1)"/></b>
									<b><s:property value="winbasecode.substring(1,2)"/></b>
									<b><s:property value="winbasecode.substring(2,3)"/></b>
									<b><s:property value="winbasecode.substring(3,4)"/></b>
									<b><s:property value="winbasecode.substring(4,5)"/></b>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01011" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_plw.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>			
					</s:elseif>
			<!-- 七星彩 -->	
					<s:elseif test="id.lotno=='T01009'">	
						<li>
							<table>
								<tr class="title"><th><font>七星彩</font><em>第<span><s:property value="id.batchcode"/></span>期</em>　开奖号码</th></tr>
								<tr class="Number"><th>
									<b><s:property value="winbasecode.substring(0,1)"/></b>
									<b><s:property value="winbasecode.substring(1,2)"/></b>
									<b><s:property value="winbasecode.substring(2,3)"/></b>
									<b><s:property value="winbasecode.substring(3,4)"/></b>
									<b><s:property value="winbasecode.substring(4,5)"/></b>
									<b><s:property value="winbasecode.substring(5,6)"/></b>
									<b><s:property value="winbasecode.substring(6,7)"/></b>
								</th></tr>
								<tr><td><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01009" title="详情">详情</a>
								<a href="/rchlw/lottery/ruyicai_channel_qxc.jsp" title="购买">购买</a></td></tr>
							</table>
						</li>			
			          </s:elseif>
			</s:iterator> 
		</ul>
	</div>
	<div class="PannelBody">
		<table class="TabM"><tr>
			<th class="NumberShowSlidePrev" ><img src="<%=request.getContextPath() %>/function/images/BtnUp.gif" /></th>
			<td class="NumberShowSlideNext" ><img src="<%=request.getContextPath() %>/function/images/BtnDown.gif"/></td></tr>
		</table>
	</div>
	<script type="text/javascript">
			//首页图片轮滑js:#NumberShow
			$(function() {
				$(".NumberShowSlide").jCarouselLite({
					vertical: true,
					hoverPause:true,
					btnPrev: ".NumberShowSlidePrev",
					btnNext: ".NumberShowSlideNext", 
					visible: 5,
					start: 0,
					scroll: 1,
					circular: true,
					speed:500
				});
			});
			</script>