<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@taglib prefix="s" uri="/struts-tags"%>
<!--头部橘黄色部分-->
	<div class="togetherPlan_topCenter">
		<div class="togetherPlan_topLeft"></div>
			<div class="zengCai_logo">
			<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'><img src="<%=request.getContextPath() %>/function/images/logo_ssq_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'><img src="<%=request.getContextPath() %>/function/images/logo_dlt_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="F47103"||#request.torder.lotno=="D3"'><img src="<%=request.getContextPath() %>/function/images/logo_fcsd_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="F47102"||#request.torder.lotno=="QL730"'><img src="<%=request.getContextPath() %>/function/images/logo_qlc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01002"||#request.torder.lotno=="PL3_33"'><img src="<%=request.getContextPath() %>/function/images/logo_pls_d.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01011"||#request.torder.lotno=="PLW_35"'><img src="<%=request.getContextPath() %>/function/images/logo_plw_d.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01009"||#request.torder.lotno=="QXC_10022"'><img src="<%=request.getContextPath() %>/function/images/logo_qxc_d.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="SSC_10401"'><img src="<%=request.getContextPath() %>/function/images/logo_ssc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01014"||#request.torder.lotno=="T01010"||#request.torder.lotno=="XYXW_23009"'><img src="<%=request.getContextPath() %>/function/images/logo_syxw_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01012"'><img src="<%=request.getContextPath() %>/function/images/logo_syydj_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01013"'> <img src="<%=request.getContextPath() %>/function/images/logo_eexw_b.gif" width="54" height="54"/>  </s:if>
			<s:if test='#request.torder.lotno=="J00013"'><img src="<%=request.getContextPath() %>/function/images/logo_jczq_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="J00001"'><img src="<%=request.getContextPath() %>/function/images/logo_jczq_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"'><img src="<%=request.getContextPath() %>/function/images/logo_zc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"'><img src="<%=request.getContextPath() %>/function/images/logo_zc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'><img src="<%=request.getContextPath() %>/function/images/logo_zc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"'><img src="<%=request.getContextPath() %>/function/images/logo_zc_b.gif" width="54" height="54" /></s:if>
			</div>
			<div class="togetherPlan_topText">
			<dl>
				<dt>第<s:property value="#request.torder.batchcode"/>期</dt>
				<dt><s:if test="!(#request.torder.memo.equals('null'))">
				<s:property value="#request.torder.memo"/>
				</s:if>方案</dt>
			</dl>
		</div>
		<div class="togetherPlan_topRight"></div>
	</div>
<!--头部橘黄色部分end-->
<!--详情内容部分-->
	<table class="xiangQing_BigTable">
	<tr>
		<s:if test='#request.type=="1"'><th>受赠人</th></s:if>
		<s:else><th>赠送人</th></s:else>
		<td class="xiangQing_name"><span><s:property value="#request.zengcaiName" /></span>
		<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'>
		<input name="" type="button" class="light huiZeng" value="<s:if test='#request.type=="1"'>再送一次</s:if><s:else>回赠好友</s:else>" onclick="javaScript:window.location.href='/rchlw/lottery/ruyicai_channel_ssq.jsp?canshu=zengsong#BettingForm'"/></s:if>
		<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'>
		<input name="" type="button" class="light huiZeng" value="<s:if test='#request.type=="1"'>再送一次</s:if><s:else>回赠好友</s:else>" onclick="javaScript:window.location.href='/rchlw/lottery/ruyicai_channel_dlt.jsp?canshu=zengsong#BettingForm'"/></s:if>
		</td>
	</tr>
	<tr>
		<th>方案详情</th>
		<td>
			<table class="xiangQing_smallTable">
				<thead>
					<tr>
						<th>方案注数</th>
						<th>倍　数</th>
						<th>总金额</th>
						<th>出票状态</th>
						<th>受赠状态</th>
						<th>赠送时间</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><s:property value="#request.torder.betnum" /></td>
						<td><s:property value="#request.torder.lotmulti" />倍</td>
						<td><font>¥<s:property value="#request.torder.amt/100" /></font></td>
						<td><s:property value="#request.torder.orderstate"/></td>
						<td><i>赠送成功</i></td>
						<td><s:property value="#request.torder.createtime"/></td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
		<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"||#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"||#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"||#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
		  <tr class="PlanContent_Football ZuCai_outsideSpace ">
			<th>方案内容</th>
			<td>
			
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"'>
				<s:if test='#request.torder.memo=="单式上传"'>
					<th>
					<s:iterator value="#request.lot">
						<s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:iterator>
					</th>
					<th><a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">显示全部内容</a></th>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<i><s:property value="#request.selectNum.radio"/></i>个单选、<i><s:property value="#request.selectNum.twoselect"/></i>个双选、<i><s:property value="#request.selectNum.threeselect"/></i>个三选</dt></dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
				  <tbody>
				  <tr>
					<td>场次</td>
					<s:if test='#request.againstValue==null'>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<td><s:property value="tempId"/></td>
				    </s:iterator>
				   </s:else>
					<td>倍数</td>
					<th>金额</th>
				  </tr>
				  <tr class="FootballShengFuTableSwitch">
					<td>对阵</td>
					<s:if test='#request.againstValue==null'>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    </s:if><s:else>
				    	<s:iterator value="#request.againstValue">
				    		<td><em><s:property value="HTeam"/>VS<s:property value="VTeam"/></em></td>
				    	</s:iterator>
				    </s:else>
					<td>&nbsp;</td>
					<th>单位（元）</th>
				  </tr>
				  <s:iterator id="lot_zc" value="#request.lot">
							<tr>
								<td>选号</td>
								<td><s:property value="#lot_zc.betcode.split(',')[0]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[1]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[2]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[3]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[4]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[5]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[6]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[7]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[8]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[9]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[10]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[11]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[12]"/></td>
							    <td><s:property value="#lot_zc.betcode.split(',')[13]"/></td>
							    <td class="noborder_top"><s:property value="#lot_zc.multiple" /></td>
								<td class="noborder_top"><i>¥<s:property value="#lot_zc.amt"/></i></td>
							</tr>
					</s:iterator>
					 </tbody>
				</table>
				</s:else>
			</s:if>	
			
			<s:elseif test='#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"'>
				<s:if test='#request.torder.memo=="单式上传"'>
					<th>
					<s:iterator value="#request.lot">
						<s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:iterator>
					</th>
					<th><a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">显示全部内容</a></th>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<i><s:property value="#request.selectNum.radio"/></i>个单选、<i><s:property value="#request.selectNum.twoselect"/></i>个双选、
				<i><s:property value="#request.selectNum.threeselect"/></i>个三选</dt></dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
				  <tbody>
				  <tr>
					<td >场次</td>
					
					<s:if test='#request.againstValue==null'>
				    	 <th>&nbsp;</th> <th>&nbsp;</th> <th>&nbsp;</th>
				    	 <th>&nbsp;</th> <th>&nbsp;</th> <th>&nbsp;</th>
				    	 <th>&nbsp;</th> <th>&nbsp;</th> <th>&nbsp;</th>
				    	 <th>&nbsp;</th> <th>&nbsp;</th> <th>&nbsp;</th>
				    	 <th>&nbsp;</th> <th>&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	 <th><s:property value="tempId"/></th>
				    </s:iterator>
				   </s:else>
					<th>倍数</th>
					<th>金额</th>
				  </tr>
				 
				  <tr class="FootballShengFuTableSwitch">
					<td >对阵</td>
					<s:if test='#request.againstValue==null'>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    </s:if><s:else>
				    	<s:iterator value="#request.againstValue">
				    		<td><em><s:property value="HTeam"/>VS<s:property value="VTeam"/></em></td>
				    	</s:iterator>
				    	</s:else>
					<td>&nbsp;</td>
					<th>单位（元）</th>
				  </tr>	
				  <s:if test='#request.lot[0].betcode.indexOf("$")>-1'>
				  <s:iterator id="lot_zc" value="#request.lot">
				  <tr>
				    <td>选号</td>
				    <td><s:property value="#request.betcodeCopy.split(',')[0]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[1]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[2]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[3]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[4]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[5]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[6]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[7]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[8]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[9]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[10]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[11]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[12]"/></td>
				    <td><s:property value="#request.betcodeCopy.split(',')[13]"/></td>
				    <td><s:property value="#lot_zc.multiple" /></td>
				    <th  class="red1">¥<s:property value="#lot_zc.amt"/></th>
				  </tr>
				   <tr>
				    <td>设胆</td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[0]!="#"||#request.betcodeCopy.split(",")[0].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[1]!="#"||#request.betcodeCopy.split(",")[1].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[2]!="#"||#request.betcodeCopy.split(",")[2].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[3]!="#"||#request.betcodeCopy.split(",")[3].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[4]!="#"||#request.betcodeCopy.split(",")[4].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[5]!="#"||#request.betcodeCopy.split(",")[5].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[6]!="#"||#request.betcodeCopy.split(",")[6].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[7]!="#"||#request.betcodeCopy.split(",")[7].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[8]!="#"||#request.betcodeCopy.split(",")[8].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[9]!="#"||#request.betcodeCopy.split(",")[9].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[10]!="#"||#request.betcodeCopy.split(",")[10].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[11]!="#"||#request.betcodeCopy.split(",")[11].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[12]!="#"||#request.betcodeCopy.split(",")[12].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
			    	<td class="red1">&#160;<s:if test='#lot_zc.betcode.replace("$",";").split(";")[1].split(",")[13]!="#"||#request.betcodeCopy.split(",")[13].equals("#")'><font class="red1">&#160;</font></s:if><s:else>&radic;</s:else></td>
				 	<td class="red1">&nbsp;</td>
				 	<td class="red1">&nbsp;</td>
				  </tr>
				  </s:iterator>
				  </s:if>
				  <s:else>
				  <s:iterator id="lot_zc" value="#request.lot">
				  	<tr>
				    <td>选号</td>
				    <td><s:property value="#lot_zc.betcode.split(',')[0]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[1]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[2]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[3]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[4]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[5]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[6]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[7]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[8]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[9]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[10]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[11]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[12]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[13]"/></td>
				    <td><s:property value="#lot_zc.multiple" /></td>
				    <th class="red1">¥<s:property value="#lot_zc.amt"/></th>
				  </tr>
				 </s:iterator>
				   <tr>
				    <td>设胆</td>
				    	<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
				    	<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
					    <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
					    <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
					</tr>
				  </s:else>
				  </tbody>
				</table>
				</s:else>
			</s:elseif>
			
			
			<s:elseif test='#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"'>
				<s:if test='#request.torder.memo=="单式上传"'>
					<th><s:iterator value="#request.lot">
							<s:property value="betcode.replaceAll('<br/>','')"/><br/>
						</s:iterator>
						<th><a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">显示全部内容</a></th>
					</th>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<i><s:property value="#request.selectNum.radio"/></i>个单选、<i><s:property value="#request.selectNum.twoselect"/></i>个双选、
				<i><s:property value="#request.selectNum.threeselect"/></i>个三选</dt></dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
				  <tbody>
				  <tr>
					<td>场次</td>
					<s:if test='#request.againstValue=="null"'>
				    	<th colspan="2">&nbsp;</th><th colspan="2">&nbsp;</th>
				    	<th colspan="2">&nbsp;</th><th colspan="2">&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<th colspan="2"><s:property value="tempId"/></th>
				    </s:iterator>
				    </s:else>
					<th>倍数</th>
					<th>金额</th>
				  </tr>
				 
				  <tr class="FootballShengFuTableSwitch">
					<td>对阵</td>
					<s:if test='#request.againstValue==null'>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<td><em><s:property value="HTeam"/></em></td>
				    	<td><em><s:property value="VTeam"/></em></td>
				    </s:iterator></s:else>
					<td>&nbsp;</td>
					<th>单位（元）</th>
				  </tr>
				  <s:iterator id="lot_zc" value="#request.lot">
				  <tr>
					<td>选号</td>
					<td><s:property value="#lot_zc.betcode.split(',')[0]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[1]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[2]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[3]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[4]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[5]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[6]"/></td>
				    <td><s:property value="#lot_zc.betcode.split(',')[7]"/></td>
				    <td><s:property value="#lot_zc.multiple" /></td>
				    <th class="red1">¥<s:property value="#lot_zc.amt"/></th>
				  </tr>
				  </s:iterator>
				  </tbody>
				</table>
				</s:else>
			</s:elseif>	
		
			<s:elseif test='#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
			<s:if test='#request.torder.memo=="单式上传"'>
					<th>
					<s:iterator value="#request.lot">
						<s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:iterator>
					</th>
					<th><a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">显示全部内容</a></th>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<i><s:property value="#request.selectNum.radio"/></i>个单选、<i><s:property value="#request.selectNum.twoselect"/></i>个双选、
				<i><s:property value="#request.selectNum.threeselect"/></i>个三选</dt></dl>
                  <div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
				  <tbody>
				  <tr>
                        <td>场次</td>
                        <s:if test='#request.againstValue==null'>
				    	<th colspan="2">&nbsp;</th><th colspan="2">&nbsp;</th>
				    	<th colspan="2">&nbsp;</th><th colspan="2">&nbsp;</th>
				    	<th colspan="2">&nbsp;</th><th colspan="2">&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<th colspan="2"><s:property value="tempId"/></th>
				    </s:iterator></s:else>
                        <th>倍数</th>
                        <th>金额</th>
                      </tr>
                      <tr class="FootballShengFuTableSwitch">
                        <td >对阵</td>
                        <s:if test='#request.againstValue==null'>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    	<td><em>&nbsp;</em></td><td><em>&nbsp;</em></td><td><em>&nbsp;</em></td>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<td><em><s:property value="HTeam"/>VS<s:property value="VTeam"/></em><span class="red1">半</span></td>
				    	<td><em><s:property value="HTeam"/>VS<s:property value="VTeam"/></em><span class="red1">全</span></td>
				    </s:iterator></s:else>
                        <td>&nbsp;</td>
                        <th>单位（元）</th>
                      </tr>
                     <s:iterator id="lot_zc" value="#request.lot">
                      <tr>
                        <td>选号</td>
                       <td><s:property value="#lot_zc.betcode.split(',')[0]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[1]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[2]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[3]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[4]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[5]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[6]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[7]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[8]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[9]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[10]"/></td>
					    <td><s:property value="#lot_zc.betcode.split(',')[11]"/></td>
					    <td><s:property value="#lot_zc.multiple" /></td>
					    <th class="red1">¥<s:property value="#lot_zc.amt"/></th>
                      </tr>
                     </s:iterator>
                   </tbody> 
                   </table> 
                <div class="blue">${requestScope.moreMessage}</div>
				</s:else>
			</s:elseif>	
			</td>
		</tr>
		</s:if>				
			<s:else>
			  <!-- 竞彩部分begin -->
			<s:if test='#request.torder.lotno=="J00013"||#request.torder.lotno=="J00013"'>
			 <tr class="PlanContent_Football ZuCai_outsideSpace ">
				<th>方案内容</th>
				<td>
				<input type="hidden" id="lotno" value="<s:property value='#request.torder.lotno'/>"/>
					<dl>
						<dt>过关方式：<em><s:property value="#request.pastMethod.pastMethod"/></em>
						</dt>
					</dl>
					
					<div class="space10"></div>
					
					<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
						<thead>
							<tr>
								<th>赛事编号</th><th>对阵</th><th>比分</th><th>复式选项</th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="#request.lastArray">
							<tr>
								<td>周<s:if test='matches.weekid=="1"'>一</s:if>
									<s:if test='matches.weekid=="2"'>二</s:if>
									<s:if test='matches.weekid=="3"'>三</s:if>
									<s:if test='matches.weekid=="4"'>四</s:if>
									<s:if test='matches.weekid=="5"'>五</s:if>
									<s:if test='matches.weekid=="6"'>六</s:if>
									<s:if test='matches.weekid=="7"'>日</s:if>
									<s:property value="matches.teamid"/></td>
								<td><em><s:property value="matches.team.split(':')[0]"/></em>　<em><s:if test='matches.letpoint!=null ||matches.letpoint==""'><s:property value="matches.letpoint"/></s:if><s:else>VS</s:else></em>　<em><s:property value="matches.team.split(':')[1]"/></em></td>
								<td><s:if test='result.result!=null && result.result!="null" && result.result!=""'><s:property value="result.result"/></s:if><s:else>-</s:else></td><td><s:property value="selectInfo"/></td>
							</tr>
							</s:iterator>
						</tbody>
					</table>
					
					<div class="space10"></div>
				
					<dl>
						<dt>总金额：¥<i><s:property value="#request.torder.amt/100"/></i></dt>
					</dl>
				</td>
			</tr>
			</s:if><!-- 竞彩部分end -->
			<s:else>
			 <tr>
			<th>方案内容</th>
			<td>
			<s:if test="#request.lot.size()>0">
			<table class="xiangQing_neiRong">
				 <tr>
			<s:iterator  value="#request.lot">
			<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="T01010"||#request.torder.lotno=="T01012"'>
			 		<s:property value="zhuma.betcode" escape="false"/>
			 	</s:if>
			 	<s:else>
					<s:property value="zhuma.value" escape="false"/> 
				</s:else>
			</s:iterator>
			</tr></table>
			<s:if test="#request.lot.size()>4">
			<a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">显示全部内容</a>
		    </s:if>
			</s:if>
			<s:else>没有查到赠送内容！</s:else>
			</td>
			</tr>
			</s:else>
			</s:else>
	
	<s:if test='#request.torder.settleflag!=2&&#request.winInfo!=null'>	
	<tr class="xiangQing_Noborder">
		<th>开奖号码</th>
		<td>
		<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(10,12)
					"/></span>|<span class="blue"><s:property value="#request.winInfo.winspecialcode"/></span>
			</s:if>
	
			<s:if test='#request.torder.lotno=="F47103"||#request.torder.lotno=="D3"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(1,2).trim()
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4).trim()
					"/>|<s:property value="#request.winInfo.winbasecode.substring(5,6).trim()"/>
				</span>
			</s:if>
	
			<s:if test='#request.torder.lotno=="F47102"||#request.torder.lotno=="QL730"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8),
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(10,12)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(12,14)
				 	"/></span>|<span class="blue">&nbsp;<s:property value="#request.winInfo.winspecialcode"/></span>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01002"||#request.torder.lotno=="PL3_33"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)"/>
				</span>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
				"/></span>|<span class="blue"><s:property value="#request.winInfo.winbasecode.substring(10,12)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(12,14)"/></span>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01011"||#request.torder.lotno=="PLW_35"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(4,5)"/>
				</span>
			</s:if>
			<s:if test='#request.torder.lotno=="T01009"||#request.torder.lotno=="QXC_10022"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(4,5)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(5,6)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(6,7)"/>
				</span>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="SSC_10401"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode"/>
				</span>
			</s:if>
			<s:if test='#request.torder.lotno=="T01010"||#request.torder.lotno=="XYXW_23009"||#request.torder.lotno=="T01012"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode"/>
				</span>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"||#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"||#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"||#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
				<span class="red">
					<s:property value="#request.winInfo.winbasecode"/>
				</span>
			</s:if>	
	</tr>
	</s:if>
</table>
<!--详情内容部分end-->
<script type="text/javascript">
	function fuzhi() {
		if (document.all) {
			window.clipboardData.setData('text', $("#dizhi").val());

		} else {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager
							.enablePrivilege("UniversalXPConnect");
					var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
							.createInstance(Components.interfaces.nsIClipboard);
					if (!clip) {
						return;
					}
					var trans = Components.classes["@mozilla.org/widget/transferable;1"]
							.createInstance(Components.interfaces.nsITransferable);
					if (!trans) {
						return;
					}
					trans.addDataFlavor("text/unicode");
					var str = new Object();
					var len = new Object();
					var str = Components.classes["@mozilla.org/supports-string;1"]
							.createInstance(Components.interfaces.nsISupportsString);
					var copytext =window.location.href;
					str.data = copytext;
					trans.setTransferData("text/unicode", str,
							copytext.length * 2);
					var clipid = Components.interfaces.nsIClipboard;
					if (!clip) {
						return false;
					}
					clip.setData(trans, null, clipid.kGlobalClipboard);
				} catch (e) {
					alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
					return false;
				}
			}
		}
		alert("已成功复制方案链接至剪贴板！");
		return true;
	}
</script>