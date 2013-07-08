<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>  
<div id="main">
<div id="tzhxq">
<div class="tzhxq_head">
<font class="blue">
<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'>双色球</s:if>
<s:if test='#request.torder.lotno=="F47103"||#request.torder.lotno=="D3"'>福彩3D</s:if>
<s:if test='#request.torder.lotno=="F47102"||#request.torder.lotno=="QL730"'>七乐彩</s:if>
<s:if test='#request.torder.lotno=="T01002"||#request.torder.lotno=="PL3_33"'>排列三</s:if>
<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'>大乐透</s:if>
<s:if test='#request.torder.lotno=="T01011"||#request.torder.lotno=="PLW_35"'>排列五</s:if>
<s:if test='#request.torder.lotno=="T01009"||#request.torder.lotno=="QXC_10022"'>七星彩</s:if>
<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="SSC_10401"'>时时彩</s:if>
<s:if test='#request.torder.lotno=="T01010"||#request.torder.lotno=="XYXW_23009"'>江西11选5</s:if>
<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"'>胜负彩14场</s:if>
<s:if test='#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"'>胜负彩任9场</s:if>
<s:if test='#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>6场半全场</s:if>
<s:if test='#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"'>四场进球彩</s:if>
<s:if test='#request.torder.lotno=="T01012"'>十一运夺金</s:if>
第<s:property value="#request.torder.batchcode"/>期<s:property value="#request.torder.memo"/>方案
</font>
</div>
<div class="tzhhxq_content">
		<ul>
			<li class="tzhhxq_right">
			  <div class="tzhxq_danshi">
			  <div class="tzhhxq_dshc">
			  
			  <s:if test='#request.torder.memo=="单式上传"'>
						<div class="">
							<s:iterator value="#request.lot">
								<s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/><br/>
							</s:iterator>
						</div>
			 </s:if>
		  	 <s:else>
			    <s:iterator  value="#request.lot" status ="stat" >
			    
				<!-- 双色球注码解析显示 -->
				<s:if test='lotno=="F47104"||lotno=="B001"'>
					    <s:if test="zhuma.wanfa=='00'">
						   <s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/>
						</s:if>
						<s:if test="zhuma.wanfa=='10' || zhuma.wanfa=='20' || zhuma.wanfa=='30'">
							<s:property value="zhuma.betcode.replaceAll('<br/>','')"/>
						</s:if>
						<s:if test="zhuma.wanfa=='40' || zhuma.wanfa=='50'">
							红球胆码：<s:property value="zhuma.redDanma"/><br/>
							红球拖码：<s:property value="zhuma.redTuoma"/><br/>
							蓝球：<s:property value="zhuma.blueBall"/>
						</s:if>
				</s:if>
				<!-- 福彩3D注码解析显示 -->
				<s:elseif test='lotno=="F47103"||lotno=="D3"'>
					<s:property value="zhuma.betcode.replaceAll('<br/>','')"/>
				</s:elseif>
				<!-- 七乐彩注码解析显示 -->
					<s:elseif test='lotno=="F47102"||lotno=="QL730"'>
						<s:if test="zhuma.wanfa=='00'">
						   <s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/>
						</s:if>
						<s:elseif test="zhuma.wanfa=='10'"><s:property value="zhuma.betcode.replaceAll('<br/>','')"/></s:elseif>
						<s:elseif test="zhuma.wanfa=='20'">
						    胆码：<s:property value="zhuma.danma"/><br/>
						    拖码：<s:property value="zhuma.tuoma"/>
						</s:elseif>
					</s:elseif>
				<!-- 排列三注码解析显示 -->
				<s:elseif test='lotno=="T01002"||lotno=="PL3_33"'>
					<s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/>
				</s:elseif>
				<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>
					<s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false"/>
				</s:elseif>
				<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>
					<s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false"/>
				</s:elseif>
				<!-- 大乐透注码解析显示 -->
				<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"'>
					<s:if test="zhuma.wanfa==0"><s:property value="(zhuma.betcode).replaceAll(';','<br/>')" escape="false" /></s:if>
					<s:if test="zhuma.wanfa==1"><s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/></s:if>
					<s:if test="zhuma.wanfa==2">
						前区胆码：<s:property value="zhuma.qianDanma"/><br/>
						前区拖码：<s:property value="zhuma.qianTuoma"/><br/>
						后区胆码：<s:property value="zhuma.houDanma"/><br/>
						后区拖码：<s:property value="zhuma.houTuoma"/>
					</s:if>
					<s:if test="zhuma.wanfa==3"><s:property value="zhuma.betcode.replaceAll('<br/>','')"/></s:if>
				</s:elseif>
				<!-- 时时彩 -->
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
						<s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false" default=""/>
					</s:else>
				</s:elseif>
				<s:elseif test='lotno=="T01010"||lotno=="XYXW_23009"'>
					<s:if test="zhuma.betcode.indexOf('$')>-1">
						胆码：<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf('$'))" escape="false"/><br/>
						拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/>
					</s:if>
					<s:else>
						<s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/>
					</s:else>
				</s:elseif>
				<s:elseif test='lotno=="T01012"'>
				<s:if test="zhuma.betcode.indexOf('$')>-1">
				<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf(':'))" escape="false"/>
					胆码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf(':'),zhuma.betcode.indexOf('$'))" escape="false"/><br/>
					拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/>
				</s:if>
				<s:else>
					<s:property value="zhuma.betcode" escape="false"/>
				</s:else>
			</s:elseif>
				<s:elseif test='lotno=="T01003"||lotno=="ZC_11"||lotno=="T01004"||lotno=="ZC_19"||lotno=="T01006"||lotno=="ZC_16"||lotno=="T01005"||lotno=="ZC_18"'>
					<s:property value="betcode.replaceAll('<br/>','')" escape="false"/>
				</s:elseif>
				<s:else><s:property value="zhuma.betcode.replaceAll('<br/>','')" escape="false"/></s:else>
				<br/>
				</s:iterator>
				</s:else>
				</div>
			 </div>	
		  </li>
		</ul>
	</div>
</div>
</div>	