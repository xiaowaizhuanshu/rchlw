<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<s:if test="#request.checkNo=='1'||#request.checkNo==1">
<div id="main">
<s:set name="torder" value="#request.torder"></s:set>
<!--头部橘黄色部分-->
	<div class="togetherPlan_topCenter">
		<div class="togetherPlan_topLeft"></div>
		<div class="touzhuXQ_logo new-touzhuxo-onebetinfo">
			<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'>
			<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_ssq_b.gif) no-repeat 15px top; height:70px; width:600px; ">
			<li><img src="<%=request.getContextPath() %>/function/images/word_ssq.gif"/>
			</s:if>
			<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_dlt_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_dlt.gif"/></s:if>
			<s:if test='#request.torder.lotno=="F47103"||#request.torder.lotno=="D3"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_fcsd_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_fcsd.gif"/></s:if>
			<s:if test='#request.torder.lotno=="F47102"||#request.torder.lotno=="QL730"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_qlc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_qlc.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01002"||#request.torder.lotno=="PL3_33"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_pls_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_pls.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01011"||#request.torder.lotno=="PLW_35"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_plw_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_plw.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01009"||#request.torder.lotno=="QXC_10022"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_qxc_d.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_qxc.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="SSC_10401"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_ssc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_ssc.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01010"||#request.torder.lotno=="XYXW_23009"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_syxw_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_syxw.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01012"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_syydj_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_syydj.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_zcsf.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_rxjc.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_lcbq.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_scjq.gif"/></s:if>
			<s:if test='#request.torder.lotno=="T01013"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_eexw_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_eexw.gif"/>  </s:if>
			<s:if test='#request.torder.lotno=="J00001"||#request.torder.lotno=="J00013"||#request.torder.lotno=="J00002"||#request.torder.lotno=="J00003"||#request.torder.lotno=="J00004"||#request.torder.lotno=="J00011"'><ol style="background:url(<%=request.getContextPath() %>/function/images/logo_jczq_b.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/word_jczq.gif"/></s:if>
			<s:if test='#request.torder.lotno=="B00001"||#request.torder.lotno=="B00002"||#request.torder.lotno=="B00003"||#request.torder.lotno=="B00004"||#request.torder.lotno=="B00005"'><ol style="background:url(<%=request.getContextPath() %>/function/images/bd_logo_b.png) no-repeat 15px top; height:70px; width:600px; "><li></s:if>
			<s:if test='#request.torder.lotno=="J00005"||#request.torder.lotno=="J00006"||#request.torder.lotno=="J00007"||#request.torder.lotno=="J00008"||#request.torder.lotno=="J00012"'><ol style="background:url(<%=request.getContextPath() %>/function/images/JclqLogo.gif) no-repeat 15px top; height:70px; width:600px; "><li><img src="<%=request.getContextPath() %>/function/images/JclqZi.gif"/></s:if>
			<div class="togetherPlan_topText">
			
			<s:if test='#request.torder.lotno=="J00013||#request.torder.lotno=="J00011"||#request.torder.lotno=="J00012"||#request.torder.lotno=="J00001"||#request.torder.lotno=="J00002"||#request.torder.lotno=="J00003"||#request.torder.lotno=="J00004"||#request.torder.lotno=="J00005"||#request.torder.lotno=="J00006"||#request.torder.lotno=="J00007"||#request.torder.lotno=="J00008")'>
				<b>第
				<s:if test="!(#request.torder.batchcode.equals('null'))">
					<s:property value="#request.torder.batchcode"/>
				</s:if>期</s:if>
			 	<s:if test='#torder.lotno.equals("F47104")||#torder.lotno.equals("B001")' >双色球</s:if>
				<s:elseif  test='#torder.lotno.equals("F47107")' >快三</s:elseif>
				<s:elseif test='#torder.lotno.equals("F47103")||#torder.lotno.equals("D3")'>福彩3D</s:elseif>
				<s:elseif test='#torder.lotno.equals("F47102")||#torder.lotno.equals("QL730")' >七乐彩</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01002")||#torder.lotno.equals("PL3_33")' >排列三</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01001")||#torder.lotno.equals("DLT_23529")' >大乐透</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01011")||#torder.lotno.equals("PLW_35")'>排列五</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01009")||#torder.lotno.equals("QXC_10022")'>七星彩</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01007")||#torder.lotno.equals("SSC_10401")'>时时彩</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01010")||#torder.lotno.equals("XYXW_23009")'>江西11选5</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01014")'>广东11选5</s:elseif>
				<s:elseif test='#torder.lotno.equals("T01003")||#torder.lotno.equals("ZC_11")'>胜负彩14场</s:elseif>
			    <s:elseif test='#torder.lotno.equals("T01004")||#torder.lotno.equals("ZC_19")'>胜负彩任9场</s:elseif>
			    <s:elseif test='#torder.lotno.equals("T01006")||#torder.lotno.equals("ZC_16")'>6场半全场</s:elseif>
			    <s:elseif test='#torder.lotno.equals("T01005")||#torder.lotno.equals("ZC_18")'>四场进球彩</s:elseif>
			    <s:elseif test='#torder.lotno.equals("T01012")'>十一运夺金</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00013")'>让球胜平负</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00001")'>胜平负</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00002")'>比分</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00003")'>总进球</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00004")'>半场</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00005")'>竞篮胜负</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00008")'>竞篮大小分</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00007")'>竞篮胜分差</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00006")'>竞篮让分胜负</s:elseif>
			     <s:elseif test='#torder.lotno.equals("T01013")'>22选5</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00011")'>竞足混合</s:elseif>
			    <s:elseif test='#torder.lotno.equals("J00012")'>竞篮混合</s:elseif>
			    <s:elseif test='#torder.lotno.equals("B00001")'>北单胜平负</s:elseif>
			    <s:elseif test='#torder.lotno.equals("B00002")'>北单总进球</s:elseif>
			    <s:elseif test='#torder.lotno.equals("B00003")'>北单半全场</s:elseif>
			    <s:elseif test='#torder.lotno.equals("B00004")'>北单上下单双</s:elseif>
			    <s:elseif test='#torder.lotno.equals("B00005")'>北单单场比分</s:elseif>
			    
			   </b>
				
			</div>
			</ol>
			<div style="left:77px; position: absolute; top: 50px;">此方案发起时间：<font id="endTime"><s:property value="#request.torder.createtime" /></font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方案编号：<font id="endTime"><s:property value="#request.torder.id" /></font>
				<s:if test='#request.torder.lotno=="F47104"' ><a href="/rchlw/lottery/ruyicai_channel_ssq.jsp" title="返回购买双色球">返回购买双色球</a></s:if>
				<s:elseif test='#request.torder.lotno=="F47103"'><a href="/rchlw/lottery/ruyicai_channel_3D.jsp" title="返回购买福彩3D">返回购买福彩3D</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="F47102"' ><a href="/rchlw/lottery/ruyicai_channel_qlc.jsp" title="返回购买七乐彩">返回购买七乐彩</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01002"' ><a href="/rchlw/lottery/ruyicai_channel_pls.jsp" title="返回购买排列三">返回购买排列三</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01001"' ><a href="/rchlw/lottery/ruyicai_channel_dlt.jsp" title="返回购买大乐透">返回购买大乐透</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01011"'><a href="/rchlw/lottery/ruyicai_channel_plw.jsp" title="返回购买排列五">返回购买排列五</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01009"'><a href="/rchlw/lottery/ruyicai_channel_qxc.jsp" title="返回购买七星彩">返回购买七星彩</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01010"'><a href="/rchlw/lottery/ruyicai_channel_11xuan5.jsp" title="返回购买江西11选5">返回购买江西11选5</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01007"'><a href="/rchlw/lottery/ruyicai_channel_ssc.jsp" title="返回购买时时彩">返回购买时时彩</a></s:elseif>
				<s:elseif test='#request.torder.lotno=="T01012"'><a href="/rchlw/lottery/ruyicai_channel_syydj.jsp" title="返回购买十一运夺金">返回购买十一运夺金</a></s:elseif>
				<s:if test='#request.torder.lotno=="J00013"||#request.torder.lotno=="J00002"||#request.torder.lotno=="J00003"||#request.torder.lotno=="J00004"||#request.torder.lotno=="J00011""'>
				<a href="/rchlw/lottery/ruyicai_channel_jingcai_football.jsp" title="竞彩足球胜平负">返回购买竞彩足球</a></s:if>
				<s:if test='#request.torder.lotno=="T01003"'><a href="/rchlw/lottery/ruyicai_channel_shengfucai.jsp" title="返回购买胜负彩14场">返回购买胜负彩14场</a></s:if>
				<s:if test='#request.torder.lotno=="T01004"'><a href="/rchlw/lottery/ruyicai_channel_renjiuchang.jsp" title="返回购买胜负彩任9场">返回购买胜负彩任9场</a></s:if>
				<s:if test='#request.torder.lotno=="T01006"'><a href="/rchlw/lottery/ruyicai_channel_liuchangban.jsp" title="返回购买6场半全场">返回购买6场半全场</a></s:if>
				<s:if test='#request.torder.lotno=="T01005"'><a href="/rchlw/lottery/ruyicai_channel_sichang.jsp" title="返回购买四场进球彩">返回购买四场进球彩</a></s:if>
			</div>
			</li>
		</div>
		<div class="togetherPlan_topRight"></div>
	</div>
<!--头部橘黄色部分end-->

<!--详情内容部分-->
<div class="jzdqcurmid">
<div class="jzdqcurmidbot-c">
	<table class="xiangQing_BigTable">
	<tr>
		<th>发起人信息</th>
		<td class="xiangQing_name">
			
					<dl>	<s:set name="Nname" value="#request.username" />
					<dt>${Nname}</dt>
			</dl>
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
						<th>购买时间</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><s:property value="#request.torder.betnum" /></td>
						<td><font><s:property value="#request.torder.lotmulti" /></font>倍</td>
						<td><font>¥<s:property value="#request.torder.amt/100" /></font></td>
						<td><font><s:property value="#request.torder.orderstate"/></font></td>
						<td><s:property value="#request.torder.createtime"/></td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
		<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"||#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"||#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"||#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
		  <tr class="PlanContent_Football ZuCai_outsideSpace">
			<th>方案内容</th>
			<td>
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"'>
				<s:if test='#request.torder.memo=="单式上传"'>
					<s:iterator value="#request.lot" status="sta">
					<s:if test="#sta.index<5">
					    <s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:if>
					</s:iterator><br/>
					<a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))"
							onmouseout="HoverOut($(this))">显示全部内容</a>
				</s:if>
				<s:else>
				<dl>
					<dt>
						投注选号：<font class="red"><s:property value="#request.selectNum.radio"/></font>个单选、<font class="red"><s:property value="#request.selectNum.twoselect"/></font>个双选、<font class="red"><s:property value="#request.selectNum.threeselect"/></font>个三选
					</dt>
				</dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
				  <tbody>
				  <tr>
					<th>场次</th>
					<s:if test='#request.againstValue==null'>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<th><s:property value="tempId"/></th>
				    </s:iterator>
				   </s:else>
					<th>倍数</th>
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
				    		<td width="12"><em><s:property value="HTeam"/>VS<s:property value="VTeam"/></em></td>
				    	</s:iterator>
				    </s:else>
					<td class="noborder_bottom">&nbsp;</td>
					<td class="noborder_bottom">单位（元）</td>
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
								<td class="noborder_top"><font>¥<s:property value="#lot_zc.amt"/></font></td>
							</tr>
					</s:iterator>
				  </tbody>
				</table>
				</s:else>
				</s:if>
			<s:elseif test='#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"'>
				<s:if test='#request.torder.memo=="单式上传"'>
					<s:iterator value="#request.lot" status="sta">
					<s:if test="#sta.index<5">
					    <s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:if>
					</s:iterator><br/>
					<a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))"
							onmouseout="HoverOut($(this))">显示全部内容</a>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<font class="red"><s:property value="#request.selectNum.radio"/></font>个单选、<font class="red"><s:property value="#request.selectNum.twoselect"/></font>个双选、<font class="red"><s:property value="#request.selectNum.threeselect"/></font>个三选</dt></dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
			    <tbody>
				  <tr>
					<th>场次</th>
					<s:if test='#request.againstValue==null'>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<th><s:property value="tempId"/></th>
				    </s:iterator>
				   </s:else>
					<th>倍数</th>
					<th>金额</th>
				  </tr>
				  <tr class="FootballShengFuTableSwitch">
					<td height="121">对阵</td>
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
					<td class="noborder_bottom">&nbsp;</td>
					<td class="noborder_bottom">单位（元）</td>
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
				    <td class="noborder_top"><s:property value="#lot_zc.multiple" /></td>
					<td class="noborder_top"><font>¥<s:property value="#lot_zc.amt"/></font></td>
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
			     	<td class="noborder_top"><s:property value="#lot_zc.multiple" /></td>
					<td class="noborder_top"><font>¥<s:property value="#lot_zc.amt"/></font></td>
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
					<s:iterator value="#request.lot" status="sta">
					<s:if test="#sta.index<5">
					    <s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:if>
					</s:iterator><br/>
					<a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))"
							onmouseout="HoverOut($(this))">显示全部内容</a>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<font class="red"><s:property value="#request.selectNum.radio"/></font>个单选、<font class="red"><s:property value="#request.selectNum.twoselect"/></font>个双选、<font class="red"><s:property value="#request.selectNum.threeselect"/></font>个三选、<font class="red"><s:property value="#request.selectNum.allselect" /></font>个全包</dt></dl>
				<div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
			    <tbody>
				  <tr>
					<th>场次</th>
					<s:if test='#request.againstValue==null'>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th>
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
					<td class="noborder_bottom">&nbsp;</td>
					<td class="noborder_bottom">单位（元）</td>
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
				    <td class="noborder_top"><s:property value="#lot_zc.multiple" /></td>
				    <td class="noborder_top"><font>¥<s:property value="#lot_zc.amt"/></font></td>
				  </tr>
				  </s:iterator>
				  </tbody>
				</table>
				</s:else>
			</s:elseif>	
			<s:elseif test='#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
				<s:if test='#request.torder.memo=="单式上传"'>
				<s:iterator value="#request.lot" status="sta">
					<s:if test="#sta.index<5">
					    <s:property value="betcode.replaceAll('<br/>','')"/><br/>
					</s:if>
					</s:iterator><br/>
					<a href="/rchlw/function/rules/moreBetInfo.jsp?orderid=${torder.id}&a=1" target="_blank" onmouseover="HoverOver($(this))"
							onmouseout="HoverOut($(this))">显示全部内容</a>
				</s:if>
				<s:else>
				<dl><dt>投注选号：<font class="red"><s:property value="#request.selectNum.radio"/></font>个单选、<font class="red"><s:property value="#request.selectNum.twoselect"/></font>个双选、<font class="red"><s:property value="#request.selectNum.threeselect"/></font>个三选</dt></dl>
                  <div class="space10">&#160;</div>
				<table class="PlanContent_FootballShengFu ZuCaiShengFu ">
                    <tbody>
                      <tr>
					<th>场次</th>
					<s:if test='#request.againstValue==null'>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    	<th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th>
				    </s:if><s:else>
				    <s:iterator value="#request.againstValue">
				    	<th colspan="2"><s:property value="tempId"/></th>
				    </s:iterator>
				   </s:else>
					<th>倍数</th>
					<th>金额</th>
				  </tr>
                   <tr>
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
                    <td class="noborder_bottom">&nbsp;</td>
					<td class="noborder_bottom">单位（元）</td>
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
					    <td class="noborder_top"><s:property value="#lot_zc.multiple" /></td>
					    <td class="noborder_top"><font>¥<s:property value="#lot_zc.amt"/></font></td>
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
			<s:elseif  test='#request.torder.lotno=="J00011"||#request.torder.lotno=="J00013"||#request.torder.lotno=="J00001"||#request.torder.lotno=="J00002"||#request.torder.lotno=="J00003"||#request.torder.lotno=="J00004"'>
			  <!-- 竞彩部分begin -->
			<tr class="PlanContent_Football ZuCai_outsideSpace ">
			<th>方案内容</th>
				<td class="tableytRdg-fa">
				<input type="hidden" id="lotno" value="<s:property value='#request.torder.lotno'/>"/>
					<p>
						过关方式：<em><s:property value="#request.pastMethod.pastMethod"/></em>
						<span><a href="javascript:void(0)" class="dz_hide_show" >隐藏对阵列表</a></span>
					</p>
					<s:if test=''></s:if>
					<div class="space10"></div>
					<table class="PlanContent_FootballShengFu ZuCaiShengFu">
						<thead>
							<tr>
								<th>赛事编号</th><th>对阵</th><th>比分</th><th>彩果</th><th>投注选项（参考赔率值）</th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="#request.lastArray" id="array">
							<tr>
								<td>周<s:if test='matches.weekid=="1"'>一</s:if>
									<s:if test='matches.weekid=="2"'>二</s:if>
									<s:if test='matches.weekid=="3"'>三</s:if>
									<s:if test='matches.weekid=="4"'>四</s:if>
									<s:if test='matches.weekid=="5"'>五</s:if>
									<s:if test='matches.weekid=="6"'>六</s:if>
									<s:if test='matches.weekid=="7"'>日</s:if>
									<s:property value="matches.teamid"/></td>
								<td><em><s:property value="matches.team.split(':')[0]"/></em>　<em>
								<s:if test='#request.torder.lotno=="J00013"&&matches.letpoint!=null && matches.letpoint!="" && matches.letpoint!="null"'>
									<s:property value="matches.letpoint"/>
								</s:if><s:else>VS</s:else></em>
								　<em><s:property value="matches.team.split(':')[1]"/></em></td>
								<td><s:if test='result.result!=null && result.result!="null" && result.result!=""'><s:property value="result.result"/></s:if><s:else>-</s:else>
								<s:if test='#request.torder.lotno=="J00002&&result.result!=null && result.result!="null" && result.result!=""'>(<s:property value="result.firsthalfresult"/>)</s:if>
								</td>
								<td><s:if test='caiguo!=null && caiguo !=""'><font><s:property value="caiguo"/></font></s:if><s:else>-</s:else></td>
								<s:set name="selinfo" value="selectInfo.split(',')" />
								<s:set name="guo" value="caiguo"></s:set>
								<td>
								    <s:iterator value="#selinfo" status="se" var="info">
								    	<s:if test="#guo == #info">
								    		<font><s:property value="info"/></font>
								    		<s:if test='pv!=null&&pv!="null"&&pv!=""'><font>(<s:property value="pv.split(',')[#se.index]"/>)</font></s:if>
								    	</s:if>
								    	<s:else>
								    		<s:property value="info"/>
								    		<s:if test='pv!=null&&pv!="null"&&pv!=""'>(<s:property value="pv.split(',')[#se.index]"/>)</s:if>
								    	</s:else>
								    </s:iterator>
								</td>
							</tr>
							</s:iterator>
						</tbody>
					</table>
					
					<div class="space10"></div>
				
					<dl>
						<dt>总金额：¥<i><s:property value="#request.torder.amt/100"/></i>元</dt>
					</dl>
					
			</s:elseif><!-- 竞彩部分end -->
			 <!-- 竞彩部分begin -->
			<s:elseif test='#request.torder.lotno=="J00012"||#request.torder.lotno=="J00005"||#request.torder.lotno=="J00006"||#request.torder.lotno=="J00007"||#request.torder.lotno=="J00008"'>
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
								<th>赛事编号</th><th>客队 VS 主队</th><th>全场比分</th><th>彩果</th><th>投注选项（参考赔率值）</th>
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
								<td><em><s:property value="matches.team.split(':')[1]"/></em>
								　<em><s:if test='matches.letpoint!=null && matches.letpoint!="" && matches.letpoint!="null"'>
								<s:property value="matches.letpoint"/></s:if>
								<s:else>VS</s:else></em>
								<em><s:property value="matches.team.split(':')[0]"/></em></td>
								<td><s:if test='result.basepoint!=null && result.basepoint!="null" && result.basepoint!=""'><s:property value="result.basepoint"/></s:if><s:else>-</s:else></td>
								<td><s:if test='result.newResult!=null && result.newResult!="null" && result.newResult!=""'><font><s:property value="result.newResult"/></font></s:if><s:else>-</s:else></td>
								<s:set name="selinfo" value="selectInfo.split(',')" />
								<s:set name="guo" value="result.newResult"></s:set>
								<td>
								    <s:iterator value="#selinfo" status="se" var="info">
								    	<s:if test="#guo.trim() == #info.trim()">
								    		<font><s:property value="info"/></font>
								    		<s:if test='pv!=null&&pv!="null"&&pv!=""'><font>(<s:property value="pv.split(',')[#se.index]"/>)</font></s:if>
								    	</s:if>
								    	<s:else>
								    		<s:property value="info"/>
								    		<s:if test='pv!=null&&pv!="null"&&pv!=""'>(<s:property value="pv.split(',')[#se.index]"/>)</s:if>
								    	</s:else>
								    </s:iterator>
								</td>
							</tr>
							</s:iterator>
						</tbody>
					</table>
					<div class="space10"></div>
					<dl>
						<dt>总金额：¥<i><s:property value="#request.torder.amt/100"/></i></dt>
					</dl>
			</s:elseif><!-- 竞彩部分end -->
			<s:else>
			<tr>
			<th>方案内容</th>
				<td>
			<s:if test="#request.lotSize>0">
				 <table class="xiangQing_neiRong">
			 	<thead>
			 	<s:iterator  value="#request.lot" status="sta">
			 	<s:if test="#sta.index<5">
			 	<tr>
					<s:property value="zhuma.value" escape="false"/> 
				</tr>
				</s:if>
				</s:iterator>
				</thead>
				<s:if test="#request.lotSize>5">
					<tbody id="moreValue" style="display:none"> 
						<s:iterator id="lot" value="#request.lot" begin="5" >
							<tr>
								<s:property value="zhuma.value" escape="false" />
							</tr>
						</s:iterator>
					</tbody>
					<tfoot>
						<tr id="allIterm">
							<th colspan="4"><a
								href='javaScript:;' onclick='$("#moreValue").toggle();$("#partiterm").toggle();$("#allIterm").toggle()'
								onmouseover="HoverOver($(this))"
								onmouseout="HoverOut($(this))">显示全部内容</a></th>
						</tr>
						<tr id="partiterm" style="display:none">
							<th colspan="4"><a
								href='javaScript:;' onclick='$("#moreValue").toggle();$("#allIterm").toggle();$("#partiterm").toggle()'
							    onmouseover="HoverOver($(this))"
								onmouseout="HoverOut($(this))">隐藏部分</a></th>
						</tr>
					</tfoot>
	   			 </s:if>
				</table>
		    </s:if>
             <s:else>
             "订单无投注记录"
         	</s:else>
			<span class="blue1">${requestScope.moreMessage}</span>
		</s:else>
		</td>
	</tr>
	 <s:if test='#request.torder.settleflag!=2&&#request.winInfo!=null'>	
	<tr class="xiangQing_Noborder">
		<th>开奖号码</th>
		<s:if test="#request.winInfo.winbasecode.length()>0">
		<td>
			<s:if test='#request.torder.lotno=="F47104"||#request.torder.lotno=="B001"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(10,12)
					"/>|<b><s:property value="#request.winInfo.winspecialcode"/></b>
			</s:if>
	
			<s:if test='#request.torder.lotno=="F47103"||#request.torder.lotno=="D3"'>
					<s:property value="#request.winInfo.winbasecode.substring(1,2).trim()
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4).trim()
					"/>|<s:property value="#request.winInfo.winbasecode.substring(5,6).trim()"/>
			</s:if>
			<s:if test='#request.torder.lotno=="F47107"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,2).trim()
					"/>，<s:property value="#request.winInfo.winbasecode.substring(2,4).trim()
					"/>，<s:property value="#request.winInfo.winbasecode.substring(4,6).trim()"/>
			</s:if>
			<s:if test='#request.torder.lotno=="F47102"||#request.torder.lotno=="QL730"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8),
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(10,12)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(12,14)
				 	"/>|<b>&nbsp;<s:property value="#request.winInfo.winspecialcode"/></b>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01002"||#request.torder.lotno=="PL3_33"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)"/>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01001"||#request.torder.lotno=="DLT_23529"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(2,4)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(4,6)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(6,8)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(8,10)
				"/>|<b><s:property value="#request.winInfo.winbasecode.substring(11,13)
					"/>,<s:property value="#request.winInfo.winbasecode.substring(13,15)"/></b>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01011"||#request.torder.lotno=="PLW_35"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(4,5)"/>
			</s:if>
			<s:if test='#request.torder.lotno=="T01009"||#request.torder.lotno=="QXC_10022"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,1)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(1,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(2,3)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,4)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(4,5)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(5,6)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(6,7)"/>
			</s:if>
			<s:if test='#request.torder.lotno=="T01013"'>
					<s:property value="#request.winInfo.winbasecode.substring(0,2)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(3,5)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(6,8)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(9,11)
					"/>|<s:property value="#request.winInfo.winbasecode.substring(12,14)
					"/>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01007"||#request.torder.lotno=="SSC_10401"'>
					<s:property value="#request.winInfo.winbasecode"/>
			</s:if>
			<s:if test='#request.torder.lotno=="T01014"||#request.torder.lotno=="T01010"||#request.torder.lotno=="XYXW_23009"||#request.torder.lotno=="T01012"'>
					<s:property value="#request.winInfo.winbasecode"/>
			</s:if>
			
			<s:if test='#request.torder.lotno=="T01003"||#request.torder.lotno=="ZC_11"||#request.torder.lotno=="T01004"||#request.torder.lotno=="ZC_19"||#request.torder.lotno=="T01005"||#request.torder.lotno=="ZC_18"||#request.torder.lotno=="T01006"||#request.torder.lotno=="ZC_16"'>
					<s:property value="#request.winInfo.winbasecode"/>
			</s:if>	
			</td>
			</s:if>
		
	</tr>
	</s:if>
</table>
</div>
</div>
<!--详情内容部分end-->
</div>
</s:if>
<s:if test="#request.checkNo=='0'||#request.checkNo==0">
<script>
$(function(){
	orderAlert(decodeURI(EncodeUtf8("为保证订单安全、保密，该订单为代购方案，仅发起人可查看！")));
});	
</script>
</s:if>
<jsp:include page="/function/common/oderalertTiShi.jsp"></jsp:include>
<script type="text/javascript">

$(document).ready(function(){
	$(".dz_hide_show").each(function(i) {
		$(this).click(function() {
			$(this).text($(this).text() == "隐藏对阵列表" ? "显示对阵列表" : "隐藏对阵列表");
			$(".ZuCaiShengFu").toggle();
		});
	});
});

</script>