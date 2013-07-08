<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>

<s:iterator value="#request.arrWininfo" id="arrWininfo">
<!--  双色球开奖公告 start  -->
<s:if test='id.lotno=="F47104"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>双色球开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>双色球第 <s:property value="id.batchcode"/> 期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(10,12)"/></span>
					<span class="SmallBlueBall"><s:property value="winspecialcode"/></span>
				</li>
				<li>
					<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
					<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104">详情&gt;&gt;</a></dt>
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									<s:if test="(#status.index+1)<7">
									<tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
						             </tr>
						             </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                    </dl>
					<!-- 开奖公告展开 end  -->
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!--  双色球开奖公告 end  -->
<!-- 福彩3D开奖公告 start  -->
<s:if test='id.lotno=="F47103"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>福彩3D开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>福彩3D第 <s:property value="id.batchcode"/> 期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(5,6)"/></span>
					</li>
					<li>
				<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
				<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103">详情&gt;&gt;</a></dt>
                       <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									
									<s:if test="(#status.index+1)<4"><tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								   </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!--  福彩3D开奖公告 end  -->
<!--七乐彩开奖公告 start  -->
<s:if test='id.lotno=="F47102"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>七乐彩开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47102">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>七乐彩第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(10,12)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(12,14)"/></span>
					<span class="SmallBlueBall"><s:property value="winspecialcode"/></span>
				</li>
				<li>
					<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
					<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47102">详细&gt;&gt;</a></dt>
                          <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
									
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									<s:if test="(#status.index+1)<8"><tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								    </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!--  七乐彩开奖公告 end  -->
<!--22选5开奖公告 start  -->
<s:if test='id.lotno=="T01013"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>22选5开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01013">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>22选5第<s:property value="id.batchcode"/>期</li>
				<li>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,5)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(9,11)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(12,14)"/></span>
				</li>
				<li>
					<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
					<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01013">详细&gt;&gt;</a></dt>
                          <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
								    <s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									<s:if test="(#status.index+1)<4"><tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								    </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!--  22选5开奖公告 end  -->
<!--排列三开奖公告 start  -->
<s:if test='id.lotno=="T01002"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>排列三开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01002">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>排列三第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
				</li>
						<li>
				<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
				<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01002">详情&gt;&gt;</a></dt>
                         <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
										<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									<s:if test="(#status.index+1)<4"><tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								   </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
			</li>
			</ol>
		</div>
	</div>
</s:if>
<!--  排列三开奖公告 end  -->
<!--大乐透开奖公告 start  -->
<s:if test='id.lotno=="T01001"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>大乐透开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01001">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>大乐透第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
					<span class="SmallBlueBall"><s:property value="winbasecode.substring(11,13)"/></span>
					<span class="SmallBlueBall"><s:property value="winbasecode.substring(13,15)"/></span>
				</li>
					<li>
					<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
					<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01001">详情&gt;&gt;</a></dt>
                         <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th colspan="2">奖等</th><th>注数</th><th>单注奖金</th></tr>
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" begin="0" end="5"> 
									<s:if test="#status.odd">
									<tr><td rowspan="2"><s:property value="wingrade"/></td><td><s:property value="zhuijia"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
									</s:if><s:else>
									<tr><td><s:property value="zhuijia"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
									</s:else>
									</s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				</li>

			</ol>
		</div>
	</div>
</s:if>
<!-- 大乐透开奖公告 end  -->
<!--排列五开奖公告 start  -->
<s:if test='id.lotno=="T01011"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>排列五开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01011">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>排列五第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,5)"/></span>
				</li><li>
				<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
				<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01011">详情&gt;&gt;</a></dt>
                        <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" > 
									<s:if test="(#status.index+1)<2">
									<tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								   </s:if>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!-- 排列五开奖公告 end  -->
<!--七星彩 开奖公告 start  -->
<s:if test='id.lotno=="T01009"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>七星彩 开奖公告</h3><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01009">更多&gt;&gt;</a></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>七星彩 第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,5)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(5,6)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,7)"/></span>
				</li>
				<li>
					<i>奖池滚存：<s:property value="infos.progressive"/>元</i>
					<!-- 开奖公告展开 start  -->
					<dl class="DlList WinIntroMore" onmouseover="HoverOver($(this));" onmouseout="HoverOut($(this));">
                        <dt><a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01009">详情&gt;&gt;</a></dt>
                          <s:if test="infos.prizeInfos.size()>0">
                        <dd>
                            <div class="triangle">&nbsp;</div>
                            <div class="DlLsitContent">
								<table>
									<tr><th>奖等</th><th>中奖注数</th><th>单注奖金</th></tr>
									<s:iterator value="infos.prizeInfos" id="prizeInfo" status="status" begin="0" end="5"> 
								<tr><td><s:property value="wingrade"/></td><td><s:property value="winnumber"/></td><td><s:property value="winmoney"/></td></tr>
								    </s:iterator>
								</table>
                            </div>
                        </dd>
                        </s:if>
                    </dl>
					<!-- 开奖公告展开 end  -->
				
				</li>
			</ol>
		</div>
	</div>
</s:if>
<!--七星彩 开奖公告 end  -->
<!--时时彩开奖公告 start  -->
<s:if test='id.lotno=="T01007"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>时时彩 开奖公告</h3></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>时时彩 第<s:property value="id.batchcode"/>期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(4,5)"/></span>
					
				</li>
				
			</ol>
		</div>
	</div>
</s:if>
<!--时时彩 开奖公告 end  -->

<!--江西11选5 开奖公告 start  -->
<s:if test='id.lotno=="T01010"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>江西11选5开奖公告</h3></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>江西11选5第 <s:property value="id.batchcode"/> 期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,5)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(9,11)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(12,14)"/></span>
				</li>
				
			</ol>
		</div>
	</div>
</s:if>
<!--江西11选5 开奖公告 end  -->

<!--十一运夺金 开奖公告 start  -->
<s:if test='id.lotno=="T01012"'>
	<div class="ChannelBuyPannel ChannelBuyBulletin">
		<div class="ChannelBuyPannelHead"><h3>十一运夺金开奖公告</h3></div>
		<div class="ChannelBuyPannelBody">
			<ol>
				<li>十一运夺金第 <s:property value="id.batchcode"/> 期</li>
				<li>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(3,5)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(9,11)"/></span>
					<span class="SmallRedBall"><s:property value="winbasecode.substring(12,14)"/></span>
				</li>
				
			</ol>
		</div>
	</div>
</s:if>
<!--十一运夺金 开奖公告 end  -->

<!-- 足彩左侧开奖公告 -->
<s:if test='id.lotno=="T01005"'>
	<div class="inhelp_top"><span class="inhelp_zi">
	4场进球开奖公告</span></div>
       		<div class="footballtext">
            4场进球第<span class="red"><strong><s:property value="id.batchcode"/></strong></span>期<br />
              <span class="red"><strong><s:property value="winbasecode.replaceAll('',' ')"/></strong></span>   
              <div class="footballtexttable">
              <table width="100%"   cellspacing="0" cellpadding="0" >
                       <tr>
                         <td class="footballtd1">奖项</td>
                         <td class="footballtd1">中奖注数</td>
                         <td class="footballtd1" style="border:0">每注奖金</td>
                       </tr>
                       <s:if test='info=="wkj"'>
                       	<tr>
                       		<td class="footballtd2">一等奖</td>
                       		<td class="footballtd3" colspan="2" rowspan="2">未开奖</td>
                       	</tr>
                       </s:if>
                       <s:else>
                         <s:iterator value="#arrWininfo.info.prizeInfos" status="s">
	                         <s:if test="#s.index<1">
	                           <tr>
			                      <td class="footballtd2"><s:property value="wingrade"/></td>
			                      <td class="footballtd2"><s:property value="winnumber"/></td>
			                      <td class="footballtd2"><s:property value="winmoney"/></td>
		                       </tr>
	                         </s:if>
                   		  </s:iterator>
                       </s:else>
               		   <tr>
                       <td class="footballtd2">销量</td>
                         <s:if test='info=="wkj"'><td class="footballtd3" colspan="2">未开奖</td></s:if>
                         <s:else>
                         <td class="footballtd3" colspan="2" ><s:property value="info.betTotalMoney"/>元</td>
                         </s:else>
               		   </tr>
               </table></div>
                     奖池滚存：<span class="red"><s:if test='info=="wkj"'>未开奖</s:if><s:else><s:property value="info.progressive"/></s:else></span>元

             </div>		
</s:if>
<!-- 六场半全场开奖公告 -->                
<s:if test='id.lotno=="T01006"'>
	<div class="inhelp_top"><span class="inhelp_zi">
	六场半全场开奖公告</span></div>
       		<div class="footballtext">
            六场半全场第<span class="red"><strong><s:property value="id.batchcode"/></strong></span>期<br />
              <span class="red"><strong><s:property value="winbasecode.replaceAll('',' ')"/></strong></span>  
              <div class="footballtexttable"> 
              <table  width="100%"   cellspacing="0" cellpadding="0" >
                       <tr>
                         <td class="footballtd1">奖项</td>
                         <td class="footballtd1">中奖注数</td>
                         <td class="footballtd1" style="border:0">每注奖金</td>
                       </tr>
                       <s:if test='info=="wkj"'>
                       	<tr>
                       		<td class="footballtd2">一等奖</td>
                       		<td class="footballtd3" colspan="2" rowspan="2">未开奖</td>
                       	</tr>
                       </s:if>
                       <s:else>
                   		  <s:iterator value="#arrWininfo.info.prizeInfos"  status="s">
                       		<s:if test="#s.index<1">
		                       <tr>
		                       	<td class="footballtd2"><s:property value="wingrade"/></td>
		                       	<td class="footballtd2"><s:property value="winnumber"/></td>
		                       	<td class="footballtd2"><s:property value="winmoney"/></td>
		                       </tr>
                        	</s:if>
                   	  	</s:iterator>
                       </s:else>
               		   <tr>
                       <td class="footballtd2">销量</td>
                         <s:if test='info=="wkj"'><td class="footballtd3" colspan="2">未开奖</td></s:if>
                         <s:else>
                         <td class="footballtd3" colspan="2"><s:property value="info.betTotalMoney"/>元</td>
                         </s:else>
               		   </tr>
               </table>
               </div>
                     奖池滚存：<span class="red"><s:if test='info=="wkj"'>未开奖</s:if><s:else><s:property value="info.progressive"/></s:else></span>元
         </div>		
</s:if>  

<!-- 任九场开奖公告 -->                
<s:if test='id.lotno=="T01004"'>
	<div class="inhelp_top"><span class="inhelp_zi">
	任九场开奖公告</span></div>
       		<div class="footballtext">
            任九场第<span class="red"><strong><s:property value="id.batchcode"/></strong></span>期<br />
              <span class="red"><strong><s:property value="winbasecode.replaceAll('',' ')"/></strong></span>  
              <div class="footballtexttable">  
              <table width="100%"   cellspacing="0" cellpadding="0" >
                       <tr>
                         <td class="footballtd1">奖项</td>
                         <td class="footballtd1">中奖注数</td>
                         <td class="footballtd1" style="border:0">每注奖金</td>
                       </tr>
                       <s:if test='info=="wkj"'>
                       	<tr>
                       		<td class="footballtd2">一等奖</td>
                       		<td class="footballtd3" colspan="2" rowspan="2">未开奖</td>
                       	</tr>
                       </s:if>
                       <s:else>
                       	  <s:iterator value="#arrWininfo.info.prizeInfos" status="s">
                       	  	<s:if test="#s.index<1">
                       	  		<tr>
		                       	<td class="footballtd2"><s:property value="wingrade"/></td>
		                       	<td class="footballtd2"><s:property value="winnumber"/></td>
		                       	<td class="footballtd2"><s:property value="winmoney"/></td>
		                       </tr>
                       	  	</s:if>
                   		  </s:iterator>
                       </s:else>
               		   <tr>
                       <td class="footballtd2">任九销量</td>
                         <s:if test='info=="wkj"'><td class="footballtd3" colspan="2" rowspan="2">未开奖</td></s:if>
                         <s:else>
                         <td class="footballtd3" colspan="2" rowspan="2"><s:property value="info.betTotalMoney"/>元</td>
                         </s:else>
               		   </tr>
               </table>
               </div>
                     奖池滚存：<span class="red"><s:if test='info=="wkj"'>未开奖</s:if><s:else><s:property value="info.progressive"/></s:else></span>元
         </div>		
</s:if>  

<!-- 足彩胜负彩14场 -->                
<s:if test='id.lotno=="T01003"'>
	<div class="inhelp_top"><span class="inhelp_zi">
	胜负彩开奖公告</span></div>
       		<div class="footballtext">
            胜负彩第<span class="red"><strong><s:property value="id.batchcode"/></strong></span>期<br />
              <span class="red"><strong><s:property value="winbasecode.replaceAll('',' ')"/></strong></span>   
              <div class="footballtexttable"> 
              <table width="100%"   cellspacing="0" cellpadding="0" >
                       <tr>
                          <td class="footballtd1">奖项</td>
                         <td class="footballtd1">中奖注数</td>
                         <td class="footballtd1" style="border:0">每注奖金</td>
                       </tr>
                       <s:if test='info=="wkj"'>
	                       	<tr><td class="footballtd2">一等奖</td>
	                            <td class="footballtd3" colspan="2" rowspan="2">未开奖</td>
	                   		</tr>
	                        <tr><td class="footballtd2">二等奖</td>
	                        <td class="footballtd3" colspan="2" rowspan="2">未开奖</td>
	                        </tr>
	                        <tr><td class="footballtd2">胜负销量</td><td class="footballtd3" colspan="2">未开奖</td></tr>
                       </s:if><s:else>
                       <s:iterator value="#arrWininfo.info.prizeInfos"  status="s">
                       	<s:if test="#s.index<2">
	                       <tr>
	                       	<td class="footballtd2"><s:property value="wingrade"/></td>
	                       	<td class="footballtd2"><s:property value="winnumber"/></td>
	                       	<td class="footballtd2"><s:property value="winmoney"/></td>
	                       </tr>
                        </s:if>
                   	  </s:iterator>
                         	 <tr><td class="footballtd2" >胜负销量</td>
                         	 	<td class="footballtd3" colspan="2"><s:property value="info.betTotalMoney"/>元</td>
                         	 </tr>
                         </s:else>
               </table>
               </div>
                     奖池滚存：<span class="red"><s:if test='info=="wkj"'>未开奖</s:if><s:else><s:property value="info.progressive"/></s:else></span>元
         </div>		
</s:if>
</s:iterator>
