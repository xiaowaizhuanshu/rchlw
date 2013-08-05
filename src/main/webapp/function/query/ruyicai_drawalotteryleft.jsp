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
		<div class="centent">
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
				</s:elseif>
				
				<!-- 大乐透  -->
				<s:elseif test="id.lotno=='T01001'">
					<div class="caip_concent">
             			<div class="cont_top">
             				<b>大乐透 </b>
                  			<label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                		</div>
                        <div class="cont_banner">
                     		<span><s:property value="winbasecode.substring(0,2)"/></span>
							<span><s:property value="winbasecode.substring(2,4)"/></span>
							<span><s:property value="winbasecode.substring(4,6)"/></span>
							<span><s:property value="winbasecode.substring(6,8)"/></span>
							<span><s:property value="winbasecode.substring(8,10)"/></span>
							<span class="on"><s:property value="winbasecode.substring(11,13)"/></span>
							<span class="on"><s:property value="winbasecode.substring(13,15)"/></span>
                    	</div>
                     	<div class="cont_info">
                       		<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01001" title="详情" >详情</a>|
                     		<a href="javascript:void(0)">走势</a>|
                         	<a href="/rchlw/lottery/ruyicai_channel_dlt.jsp" title="投注" >投注</a>
                      	</div>
               		</div>
				</s:elseif>
					
				<!-- 排列三 -->
				<s:elseif test="id.lotno=='T01002'">
					<div class="caip_concent">
             			<div class="cont_top">
             				<b>排列三 </b>
                  			<label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                		</div>
                        <div class="cont_banner">
                     		<span><s:property value="winbasecode.substring(0,1)"/></span>
							<span><s:property value="winbasecode.substring(1,2)"/></span>
							<span><s:property value="winbasecode.substring(2,3)"/></span>
                    	</div>
                     	<div class="cont_info">
                       		<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01002" title="详情" >详情</a>|
                     		<a href="javascript:void(0)">走势</a>|
                         	<a href="/rchlw/lottery/ruyicai_channel_pls.jsp" title="投注" >投注</a>
                      	</div>
               		</div>
				</s:elseif>
				
				<!-- 排列五 -->
				<s:elseif test="id.lotno=='T01011'">
					<div class="caip_concent">
             			<div class="cont_top">
             				<b>排列五 </b>
                  			<label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                		</div>
                        <div class="cont_banner">
                     		<span><s:property value="winbasecode.substring(0,1)"/></span>
							<span><s:property value="winbasecode.substring(1,2)"/></span>
							<span><s:property value="winbasecode.substring(2,3)"/></span>
							<span><s:property value="winbasecode.substring(3,4)"/></span>
							<span><s:property value="winbasecode.substring(4,5)"/></span>
                    	</div>
                     	<div class="cont_info">
                       		<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01011" title="详情" >详情</a>|
                     		<a href="javascript:void(0)">走势</a>|
                         	<a href="/rchlw/lottery/ruyicai_channel_plw.jsp" title="投注" >投注</a>
                      	</div>
               		</div>
				</s:elseif>
			
				<!-- 七星彩 -->
				<s:elseif test="id.lotno=='T01009'">	
					<div class="caip_concent">
             			<div class="cont_top">
             				<b>七星彩 </b>
                  			<label>第<s:property value="id.batchcode"/>期,开奖号码</label>
                		</div>
                        <div class="cont_banner">
                     		<span><s:property value="winbasecode.substring(0,1)"/></span>
							<span><s:property value="winbasecode.substring(1,2)"/></span>
							<span><s:property value="winbasecode.substring(2,3)"/></span>
							<span><s:property value="winbasecode.substring(3,4)"/></span>
							<span><s:property value="winbasecode.substring(4,5)"/></span>
							<span><s:property value="winbasecode.substring(5,6)"/></span>
							<span><s:property value="winbasecode.substring(6,7)"/></span>
                    	</div>
                     	<div class="cont_info">
                       		<a href="/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01009" title="详情" >详情</a>|
                     		<a href="javascript:void(0)">走势</a>|
                         	<a href=/rchlw/lottery/ruyicai_channel_qxc.jsp title="投注" >投注</a>
                      	</div>
               		</div>
	          	</s:elseif>	
			</s:iterator>
		</div>
		<div class="caip_bottom_fy">
                            	<div class="fy">
                                	<span class="prev"></span>
                                	<span class="next"></span>
                                </div>
                            </div>
                        </div>
                    	<div class="each_list" >
                        	<div class="each_list_img"><img src="/rchlw/recs/images/zoushitu.jpg" /></div>
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
