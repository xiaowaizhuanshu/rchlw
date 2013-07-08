<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%> 
	
<div class="userright">
		<div class="zh_rightbg">
	    <div class="zh_rt">
	    <s:if test='#request.subscribeObj.lotno=="F47104"' >双色球</s:if>
		<s:elseif test='#request.subscribeObj.lotno=="F47103"'>福彩3D</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="F47102"' >七乐彩</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="F47107"' >快三</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01002"' >排列三</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01001"' >大乐透</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01011"'>排列五</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01009"'>七星彩</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01007"'>时时彩</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01010"'>江西11选5</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01012"'>十一运夺金</s:elseif>
		<s:elseif test='#request.subscribeObj.lotno=="T01012"'>22选5</s:elseif>追号详情</div>
        <div class="xiangqing">
            <ul>
               <li class="x_height">追号用户：${session.tuser_name}</li>
               <li class="x_height1">玩法：${subscribeObj.memo}</li>
               <li class="x_top" >投注内容：            
			  <div class="x_number">
			    <s:if test="#request.lotArray.size()>0">
			    <s:iterator  value="#request.lotArray" status ="stat" >
			    
				<%//-- 双色球注码解析显示 --%>
				<s:if test='lotno=="F47104"||lotno=="B001"'>
					    <s:if test="zhuma.wanfa=='00'">
						   <s:property value="zhuma.betcode" escape="false"/>
						</s:if>
						<s:if test="zhuma.wanfa=='10' || zhuma.wanfa=='20' || zhuma.wanfa=='30'">
							<s:property value="zhuma.betcode"/><br/> 
						</s:if>
						<s:if test="zhuma.wanfa=='40' || zhuma.wanfa=='50'">
							红球胆码：<s:property value="zhuma.redDanma"/><br/>
							红球拖码：<s:property value="zhuma.redTuoma"/><br/>
							蓝球：<s:property value="zhuma.blueBall"/><br/>  
						</s:if>
				</s:if>
				<%//-- 福彩3D注码解析显示 --%>
				<s:elseif test='lotno=="F47103"||lotno=="D3"'>
					<s:property value="zhuma.betcode"/><br/>
				</s:elseif>
				<%//-- 七乐彩注码解析显示 --%>
					<s:elseif test='lotno=="F47102"||lotno=="QL730"'>
						<s:if test="zhuma.wanfa=='00'">
						   <s:property value="zhuma.betcode" escape="false"/>
						</s:if>
						<s:elseif test="zhuma.wanfa=='10'"><s:property value="zhuma.betcode"/><br/></s:elseif>
						<s:elseif test="zhuma.wanfa=='20'">
						    胆码：<s:property value="zhuma.danma"/><br/>
						    拖码：<s:property value="zhuma.tuoma"/><br/>
						</s:elseif>
					</s:elseif>
				<%//-- 排列三注码解析显示 --%>
				<s:elseif test='lotno=="T01002"||lotno=="PL3_33"'>
					<s:property value="zhuma.betcode" escape="false"/><br/>
				</s:elseif>
				<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>
					<s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false"/>
				</s:elseif>
				<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>
					<s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false"/>
				</s:elseif>
				<%//-- 大乐透注码解析显示 --%>
				<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"'>
					<s:if test="zhuma.wanfa==0"><s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false" default="" /></s:if>
					<s:if test="zhuma.wanfa==1"><s:property value="zhuma.betcode"/><br/></s:if>
					<s:if test="zhuma.wanfa==2">
						前区胆码：<s:property value="zhuma.qianDanma"/><br/>
						前区拖码：<s:property value="zhuma.qianTuoma"/><br/>
						后区胆码：<s:property value="zhuma.houDanma"/><br/>
						后区拖码：<s:property value="zhuma.houTuoma"/><br/>
					</s:if>
					<s:if test="zhuma.wanfa==3"><s:property value="zhuma.betcode"/><br/></s:if>
				</s:elseif>
				<%//-- 时时彩 --%>
				<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>
					<s:if test="zhuma.wanfa=='DD'">
						<s:if test="betcode.split('|')[4]==1">小</s:if>
						<s:if test="betcode.split('|')[4]==2">大</s:if>
						<s:if test="betcode.split('|')[4]==4">双</s:if>
						<s:if test="betcode.split('|')[4]==5">单</s:if>
						<s:if test="betcode.split('|')[5]==1">小</s:if>
						<s:if test="betcode.split('|')[5]==2">大</s:if>
						<s:if test="betcode.split('|')[5]==4">双</s:if>
						<s:if test="betcode.split('|')[5]==5">单</s:if>
					</s:if><s:else>
						<s:property value="zhuma.betcode" escape="false" default=""/>
					</s:else><br/>
				</s:elseif>
				<s:elseif test='lotno=="T01014"||lotno=="T01010"||lotno=="XYXW_23009"'>
					<s:if test="zhuma.betcode.indexOf('$')>-1">
						胆码：<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf('$'))" escape="false"/><br/>
						拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/><br/>
					</s:if>
					<s:else>
						<s:property value="zhuma.betcode" escape="false"/><br/>
					</s:else>
				</s:elseif>
				<s:elseif test='lotno=="T01012"'>
				<s:if test="zhuma.betcode.indexOf('$')>-1">
					胆码：<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf('$'))" escape="false"/><br/>
					拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/><br/>
				</s:if>
				<s:else>
					<s:property value="zhuma.betcode" escape="false"/>
				</s:else>
			</s:elseif>
				<s:else><s:property value="zhuma.betcode" escape="false"/><br/></s:else>
				
				</s:iterator>
			    </s:if>
              <s:else>
              <tr><td colspan="9" align="center">"订单无追号记录"</td></tr>
          	</s:else>
				<div>${requestScope.moreMessage}</div>
				
			 </div>	
               </li>
               <li class="x_height1">金额：<s:property value="#request.subscribeObj.ttransaction.amt/100"/>元</li>
               <li class="x_height1">期数：<s:property value="#request.subscribeObj.batchnum"/></li> 
                <li class="x_height1">当前状态：<font class="red1">
                <s:if test="#request.subscribeObj.state==0">正常</s:if>
                <s:if test="#request.subscribeObj.state==1">暂停</s:if>
                <s:if test="#request.subscribeObj.state==2">注销</s:if>
                </font></li> 
                <li class="x_height1">发起时间：<s:property value="#request.subscribeObj.ordertime"/></li> 
                
             
            </ul>
      </div>
        
	<div class="user_content">
	  <div class="tzjl_tzr">追号过程：</div>
	    <div class="account_content2">
          <table width="718"  border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td width="85"class="record_biao1">期号</td>
                <td width="69" class="record_biao1">金额</td>
                <td width="157" class="record_biao1">开奖号码 </td>
                <td width="73" class="record_biao1">状态 </td>
                <td width="77" class="record_biao1">税前奖金</td>
                <td width="75" class="record_biao1">操作 </td>
                <td width="107" class="record_biao0"> 备注</td>
              </tr>
              <s:if test="#request.ordersArray.size()>0">
               	<s:iterator  value="#request.ordersArray" status ="stat" >			
				  <tr>
					<td class="record_biao2"><s:property value="batchcode"/>期 </td>
                	<td class="record_biao2"><s:property value="amt/100"/>元</td>
					<td class="record_biao2">
					
					<s:if test='winbasecode==null||winbasecode.equals("null")||winbasecode==" "'>-</s:if><s:else><s:property value="winbasecode"/></s:else>
					</td>
	                <td class="record_biao2"><s:if test='prizestate==1 || prizestate==0'>未开奖</s:if>
						<s:elseif test='prizestate==2'>已开奖</s:elseif>
						<s:elseif test='prizestate==4 || prizestate==3'>
							<s:if test="orderprizeamt>0"><font class="red">已派奖</font></s:if>
							<s:else>未中奖</s:else>
						</s:elseif>
						<s:else>&nbsp;</s:else></td>
	                <td class="record_biao2">¥<s:property value="orderprizeamt/100"/></td>
	                <td class="record_biao2"><font class="blue1"><a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=${id}&play_name=<s:property value="lotno"/>&batchcode=<s:property value="batchcode"/>' target="_blank" title="查看">查看</a></font></td>
	                <td class="record_biao3"><s:property value="memo"/></td>
					
               	</tr>
           	</s:iterator>
              </s:if>
              <s:else>
              <tr><td colspan="9" align="center" height="28">无查询记录</td></tr>
          	</s:else>
            </tbody>
          </table>
	      </div>
	    <div class="page1" style="float:left; width:100%;">
	      <p class="x_page"><font class="red3"><a href="/rchlw/function/rules/user.jsp?key=1" title="返回追号记录">返回追号记录</a></font> &nbsp;</p><div style="clear:both;"></div>
	    </div>
	    </div>
	</div>
</div>