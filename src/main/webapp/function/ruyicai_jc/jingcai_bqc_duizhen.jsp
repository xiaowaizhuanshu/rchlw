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
						<td class="curtimetz" colspan="16" style="padding:2px 0px; font-weight:bold;">
							<s:property value="newday"/>  <s:property value="newweek"/>(12:00--次日12:00) <a href="javascript:void(0)" class="hide_show">隐藏</a>
							<input type="hidden" name="day" value="<s:property value="day"/>" />
						</td>
					</tr>
				</table>
				</s:if>
			</s:if>
		</s:iterator>	
	<s:if test="#duizhen.size()>0">
       	<table class="hide_show_content" style="border-collapse: collapse;" cellpadding="0" cellspacing="0">
		<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
			<s:if test="peilv.vs.v3!=''&&peilv.vs.v1!=''&&peilv.vs.v0!=''">
				<s:if test="#stat.last"><input class="count" type="hidden" id="count" name="count" value="<s:property value="#stat.count"/>"/></s:if>
				<s:if test="#stat.last">
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if> zucaitable_borderBottom td" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:if>
				<s:else>
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if>" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:else>
					<input type="hidden" id="day_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="day"/>" />
					<input type="hidden" id="weekid_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="weekid"/>" />
	              <td width="10"  class="quxiaoduizhen"><input type="checkbox" checked="checked"/></td>
	              <td class="zjqNo" width="28" id="no_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao5" width="25"><s:property value="teamid"/></td>              
	              <td class="zucai_biao9 league" width="80" style=""><s:property value="league"/></td>
	              <td class="zucai_biao9" width="40"><s:property value="starttime"/></td>
	              <td id="hteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao6" width="66">
				  	<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team1"/>"  offset="br,0,0" 
onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="hteam"/></a> 
				  </td>
	              <td id="vteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="zucai_biao5" width="66">
	               	<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team2"/>"  offset="br,0,0" 
onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="kteam"/></a>
	              </td>
					<td > 
					<div style="word-wrap:break-word; word-break:break-all; width:396px;">
					<span id="ball33_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'33',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v33"/></span><span id="ball31_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'31',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v31"/></span><span id="ball30_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'30',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v30"/> </span><span id="ball13_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'13',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v13"/> </span><span id="ball11_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'11',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v11"/> </span><span id="ball10_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'10',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v10"/> </span><span id="ball03_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'03',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v03"/> </span><span id="ball01_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'01',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v01"/> </span><span id="ball00_<s:property value="day"/>_<s:property value="#stat.count"/>" class="result_2" onclick="checkButton_touzhu_bqc($(this),<s:property value="day"/>,'00',<s:property value="#stat.count"/>,'<s:property value="weekDay"/>');"><s:property value="peilv.half.v00"/> </span>
					</div>
				   </td>
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
