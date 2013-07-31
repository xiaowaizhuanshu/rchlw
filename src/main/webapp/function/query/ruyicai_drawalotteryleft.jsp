<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
                           
<!-- 博雅彩首页开奖公告 -->
                	<!--tab切换-->
                	<div class="an_left_tab">
                    	<span class="on">开奖公告</span>
                        <span>彩票走势图</span>
                    </div>
                    <!--box切换-->
                    <div class="an_left_each">
                    	<div class="each_list" style="display:block;">
                        	<div class="model_list">
                            	<span class="on">数字彩</span>
                                <span>高频彩</span>
                                <span>竞技彩</span>
                            </div>
                            
                            
			  <s:iterator value="#request.arrWininfo" id="arrWininfo">
			      <!-- 双色球 -->
			      <s:if test="id.lotno=='F47104'">
			     			 <div class="caip_concent">
                            	<div class="cont_top">
                                	<b>双色球</b>
                                    <label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                                </div>
                                <div class="cont_banner">
                                	<span><s:property value="winbasecode.substring(0,2)"/></span>
                                    <span><s:property value="winbasecode.substring(2,4)"/></span>
                                    <span><s:property value="winbasecode.substring(4,6)"/></span>
                                    <span><s:property value="winbasecode.substring(6,8)"/></span>
                                    <span><s:property value="winbasecode.substring(8,10)"/></span>
                                    <span><s:property value="winbasecode.substring(10,12)"/></span>
                                    <span class="on"><s:property value="winspecialcode"/></span>
                                </div>
                                <div class="cont_info">
                                	<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47104" title="详情" >详情</a>|
                                	<a href="javascript:void(0)">走势</a>|
                                	<a href="/rchlw/lottery/ruyicai_channel_ssq.jsp" title="投注" >投注</a>
                                </div>
                            </div>
                            <!--  
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
						</li> -->
					</s:if>	
			<!-- 福彩3D -->
					<s:elseif test="id.lotno=='F47103'">
						<div class="caip_concent">
                            	<div class="cont_top">
                                	<b>福彩3D</b>
                                    <label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                                </div>
                                <div class="cont_banner">
                                	<span><s:property value="winbasecode.substring(1,2)"/></span>
                                    <span><s:property value="winbasecode.substring(3,4)"/></span>
                                    <span><s:property value="winbasecode.substring(5,6)"/></span>
                                </div>
                                <div class="cont_info">
                                	<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47103" title="详情" >详情</a>|
                                	<a href="javascript:void(0)">走势</a>|
                                	<a href="/rchlw/lottery/ruyicai_channel_3D.jsp" title="投注" >投注</a>
                                </div>
                          </div>
                          <!-- 
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
						</li> -->
					</s:elseif>
			<!-- 七乐彩 -->				
					<s:elseif test="id.lotno=='F47102'">
						 <div class="caip_concent">
                            	<div class="cont_top">
                                	<b>七乐彩</b>
                                    <label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                                </div>
                                <div class="cont_banner">
                                	<span><s:property value="winbasecode.substring(0,2)"/></span>
                                    <span><s:property value="winbasecode.substring(2,4)"/></span>
                                    <span><s:property value="winbasecode.substring(4,6)"/></span>
                                    <span><s:property value="winbasecode.substring(6,8)"/></span>
                                    <span><s:property value="winbasecode.substring(8,10)"/></span>
                                    <span><s:property value="winbasecode.substring(10,12)"/></span>
                                     <span><s:property value="winbasecode.substring(12,14)"/></span>
                                    <span class="on"><s:property value="winspecialcode"/></span>
                                </div>
                                <div class="cont_info">
                                	<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=F47102" title="详情" >详情</a>|
                                	<a href="javascript:void(0)">走势</a>|
                                	<a href="/rchlw/lottery/ruyicai_channel_qlc.jsp" title="投注" >投注</a>
                                </div>
                            </div>
                            <!-- 
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
						</li>	 -->	
					</s:elseif>
			<!-- 大乐透 
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
					</s:elseif>-->
			<!-- 排列三 
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
					</s:elseif>-->
			<!-- 排列五 
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
					</s:elseif>-->
			<!-- 七星彩 
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
			          </s:elseif>-->	
			</s:iterator> 
		 <div class="caip_bottom_fy">
                            	<div class="fy">
                                	<span class="prev"></span>
                                    <ul>
                                    	<li class="on"></li>
                                    	<li></li>
                                    </ul>
                                	<span class="next"></span>
                                </div>
                            </div>
                        </div>
                    	<div class="each_list" >
                        	<div class="each_list_img"><img src="../static/images/zoushitu.jpg" /></div>
                            <div class="each_caip_list">
                            	<strong>数字彩</strong>
                                <div class="view_list">
                                	<span>双色球</span>
                                	<span>福彩3D</span>
                                	<span>七乐彩</span>
                                	<span>大乐透</span>
                                	<span>排列三</span>
                                	<span>排列五</span>
                                	<span>七星彩</span>
                                </div>
                            </div>
                            <div class="each_caip_list">
                            	<strong>高频彩</strong>
                                <div class="view_list">
                                	<span>重庆11选5</span>
                                	<span>江西11选5</span>
                                	<span>时时彩</span>
                                	<span>广东11选5</span>
                                	<span>江西时时彩</span>
                                	<span>快3</span>
                                	<span>山东11运夺金</span>
                                </div>
                            </div>
                        </div>
                    </div>
