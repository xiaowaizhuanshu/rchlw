<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">cleanReadySPF();</script>
<div class="zucaitable" id="zucai_standrad">
<div class="zucaitable" id="zucai_standrad">      
	<s:if test="#request.duizhenInfos!=null">
	<s:set></s:set>
	<s:iterator value="#request.duizhenInfos" id="duizhen">
       	<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
			<s:if test="peilv.vs.v3!=''&&peilv.vs.v1!=''&&peilv.vs.v0!=''">
				<s:if test="#stat.count == 1">
				<table style="border-collapse: collapse;" cellpadding="0" cellspacing="0">
					<tr>
						<td class="curtimetz" colspan="8" style="padding:2px 0px; font-weight:bold;">
							<s:property value="newday"/>  <s:property value="newweek"/>(12:00--次日12:00) <a href="javascript:void(0)" class="hide_show">隐藏</a>
							<input type="hidden" name="day" value="<s:property value="day"/>" />
						</td>  
					</tr>
				</table>
			 	</s:if>
			</s:if>
		</s:iterator>	
	<s:if test="#duizhen.size()>0">
       	<table width="696" border="0" cellspacing="0" cellpadding="0" class="hide_show_content">
		<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
			<s:if test="peilv.vs.v3!=''&&peilv.vs.v1!=''&&peilv.vs.v0!=''">
				<s:if test="#stat.last"><input class="count" type="hidden" id="count" name="count" value="<s:property value="#stat.count"/>"/></s:if>
				<s:if test="#stat.last">
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" ControlTarget="bf_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if> zucaitable_borderBottom td" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:if>
				<s:else>
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" ControlTarget="bf_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if>" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:else>
					<input type="hidden" id="day_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="day"/>" />
					<input type="hidden" id="weekid_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="weekid"/>" />
	              <td width="20" class="quxiaoduizhen"><input type="checkbox" checked="checked"/></td>
	              <td class="tzcursx" width="35" id="no_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao5"><s:property value="teamid"/></td>              
	              <td class="zucai_biao9 league" width="80" style=""><s:property value="league"/></td>
	              <td class="zucai_biao9" width="72"><s:property value="starttime"/></td>
	              <td id="hteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao6" width="150">
					 	<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team1"/>"  offset="br,0,0" 
						onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="hteam"/></a> 
				  </td>
	              <td id="vteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao5" width="150">
	              	<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team2"/>"  offset="br,0,0" 
					onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="kteam"/></a> 
	              </td>
	              <td width="80">析 亚 欧</td>
				  <td  id="bf_<s:property value="day"/>_<s:property value="#stat.count"/>"> 
						<span class="hideselect hideselectOpen">展开选项</span>
				  </td>
				</tr>
				<tr class="bf-none" style="display:none;" ControlTarget="bf_<s:property value="day"/>_<s:property value="#stat.count"/>">
					<td colspan="8"> 
					<table width="100%"  height="164" border="0" cellspacing="0" cellpadding="0" class="hideselectContent">
						<tr>
							<td>胜
								<br/>
								<input id="checkbox3_<s:property value="day"/>_<s:property value="#stat.count"/>"  onclick="checkbox_all_bf($(this),<s:property value="day"/>,<s:property value="#stat.count"/>,'<s:property value="weekDay"/>','3');" name="" type="checkbox" value="" />
							</td>
							<td>1:0
								<br/>
								 <span id="ball10_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'10',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v10"/></span></td>
							<td>2:0
								<br />
								 <span id="ball20_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'20',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v20"/></span></td>
							<td>2:1
								<br/>
								 <span id="ball21_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'21',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v21"/></span></td>
							<td>3:0
								<br />
								 <span id="ball30_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'30',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v30"/></span></td>
							<td>3:1
								<br />
								 <span id="ball31_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'31',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v31"/></span></td>
							<td>3:2
								<br />
								 <span id="ball32_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'32',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v32"/></span></td>
							<td>4:0
								<br />
								 <span id="ball40_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'40',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v40"/></span></td>
							<td>4:1
								<br />
								 <span id="ball41_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'41',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v41"/></span></td>
							<td>4:2
								<br />
								 <span id="ball42_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'42',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v42"/></span></td>
							<td>5:0
								<br />
								 <span id="ball50_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'50',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v50"/></span></td>
							<td>5:1
								<br />
								 <span id="ball51_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'51',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v51"/></span></td>
							<td>5:2
								<br />
								 <span id="ball52_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'52',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v52"/></span></td>
							<td>其它
								<br />
								 <span id="ball90_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'90',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v90"/></span></td>
						</tr>
						<tr>
							<td>平
								<br />
								<input id="checkbox1_<s:property value="day"/>_<s:property value="#stat.count"/>"  onclick="checkbox_all_bf($(this),<s:property value="day"/>,<s:property value="#stat.count"/>,'<s:property value="weekDay"/>','1');" name="" type="checkbox" value="" />
							</td>
							<td>0:0
								<br />
								<span id="ball00_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'00',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v00"/></span></td>
							<td>1:1
								<br />
								<span id="ball11_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'11',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v11"/></span></td>
							<td>2:2
								<br />
								<span id="ball22_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'22',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v22"/></span></td>
							<td>3:3
								<br />
								<span id="ball33_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'33',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v33"/></span></td>
							<td>其它
								<br />
								<span id="ball99_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'99',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v99"/></span></td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
						    <td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>负
								<br />
								<input id="checkbox0_<s:property value="day"/>_<s:property value="#stat.count"/>"  onclick="checkbox_all_bf($(this),<s:property value="day"/>,<s:property value="#stat.count"/>,'<s:property value="weekDay"/>','0');" name="" type="checkbox" value="" />
							</td>
							<td>0:1
								<br />
								<span id="ball01_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'01',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v01"/></span></td>
							<td>0:2
								<br />
								<span id="ball02_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'02',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v02"/></span></td>
							<td>1:2
								<br />
								<span id="ball12_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'12',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v12"/></span></td>
							<td>0:3
								<br />
								<span id="ball03_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'03',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v03"/></span></td>
							<td>1:3
								<br />
								<span id="ball13_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'13',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v13"/></span></td>
							<td>2:3
								<br />
								<span id="ball23_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'23',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v23"/></span></td>
							<td>0:4
								<br />
								<span id="ball04_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'04',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v04"/></span></td>
							<td>1:4
								<br />
								<span id="ball14_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'14',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v14"/></span></td>
							<td>2:4
								<br />
								<span id="ball24_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'24',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v24"/></span></td>
							<td>0:5
								<br />
								<span id="ball05_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'05',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v05"/></span></td>
							<td>1:5
								<br />
								<span id="ball15_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'15',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								 <s:property value="peilv.score.v15"/></span></td>
							<td>2:5
								<br />
								<span id="ball25_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'25',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								<s:property value="peilv.score.v25"/></span></td>
							<td>其它
								<br />
								<span id="ball09_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_3" onclick="checkButton_touzhu_bf($(this),<s:property value="day"/>,'09',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');">
								<s:property value="peilv.score.v09"/></span></td>
						</tr>
					</table></td>
				</tr>
				
			</s:if>
		</s:iterator>
		</table>
	</s:if>
	</s:iterator>
</s:if>
</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	$(".hide_show").each(function(i) {
		$(this).click(function() {
			$(this).toggleClass("hide_show_hide");
			$(this).text($(this).text() == "隐藏" ? "显示" : "隐藏");
			$(".hide_show_content").eq(i).toggle(100);
		});
	});
	
	$(".hideselect").each(function(i) {
		$(this).click(function() {
			$(this).toggleClass("hideselectOpen");
			$(this).text($(this).text() == "展开选项" ? "隐藏选项" : "展开选项");
			$(".bf-none").eq(i).css("display",$(".bf-none").eq(i).css("display")=="none"?"":"none");
		});
	});
	
	//-------赛事类型背景色 start-----------------
	var colorArr= ["#DBEAF9", "#DAF6D2", "#DFDBFF","#FFDADA","#FEFABE","#D2F7F9","#FBD7FF","#E1FDD9","#00CCFF","#F75000","#AE4DEE","#DFD12F","#5A9AD5",
	               "#EE994A" ,"#35CE85","#40923D","#9CD8A3","#EC99C4","#E0DD80","#A893EB","#EAF30B","#FFA07A","#DB7093","#E416D3","#EE4233","#ACA96C","#00A78D"];   
	var leagueArr = [];;
	$(".league").each(function(j){
		var flag = true;
		var text = $(this).text(); 
		for(var k=0;k<leagueArr.length;k++){
			if(leagueArr[k]== text){
				flag = false;
			}
		}
		if(flag){
			leagueArr[j] = text;
		}
		var ind = 0;
		for(var k=0;k<leagueArr.length;k++){
			if(leagueArr[k]== text){
				$(this).attr("style","background:"+colorArr[k]);
			}else{
				ind++;
			}
		}
	});
	//-------赛事类型背景色 end-----------------
	//点击隐藏单场对阵
	$(".quxiaoduizhen").click(function(){
		$(this).parent().css("display","none");
		var hide=parseInt($("#hideNum").text());
		hide+=1;
		$("#hideNum").text(hide)
	});
});

</script>
