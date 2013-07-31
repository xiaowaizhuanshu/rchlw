<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>


<table class="battle_table">
  	<tr>
      	<th class="bat_saishi">赛事</th>
      	<th class="bat_bianhao">编号</th>
      	<th class="bat_time">开赛时间</th>
      	<th class="bat_zhudui">主队</th>
      	<th class="bat_kedui">客队</th>
      	<th class="bat_sheng">主队胜</th>
      	<th class="bat_ping">平局</th>
      	<th class="bat_fu">客队胜</th>
      	<th class="bat_dan"><span>胆<div class="wenhao_xuanfu">“-”负 号表示主队让客队；“+”正号表示客队让主队</div></span></th>
      </tr>
      <!-- 只取今天的数据 用l.index限制 -->
	<s:if test="#request.duizhenInfos!=null">
	<s:set></s:set>
	<s:iterator value="#request.duizhenInfos"  status="l" id="duizhen">
	<input type="hidden" id="day" name="day" value="<s:property value="day"/>" />
	<s:if test="#duizhen.size()>0 && #l.index <1">
		<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
			<s:if test="#stat.index <10 && peilv.letVs.letPoint!=''&&peilv.letVs.v3!=''&&peilv.letVs.v1!=''&&peilv.letVs.v0!=''">
				<s:if test="#stat.last"><input class="count" type="hidden" id="count" name="count" value="<s:property value="#stat.count"/>"/></s:if>
				
				<s:if test="#stat.last">
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if> zucaitable_borderBottom td" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:if>
				<s:else>
				<tr id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if>" style="background:${o1.odd?#FFFFFF:#F9F9F9 };">
				</s:else>
					<input type="hidden" id="day_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="day"/>" />
					<input type="hidden" id="weekid_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="weekid"/>" />
	              
	              <td class="bat_bianhao" width="35" id="no_<s:property value="day"/>_<s:property value="#stat.count"/>"  width="25"><s:property value="teamid"/></td>              
	              <td class="bat_saishi" width="100" style=""><s:property value="league"/></td>
	              <td class="bat_time" width="55"><s:property value="starttime"/></td>
	              <td id="hteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="bat_zhudui" width="100">
						<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team1"/>"  offset="br,0,0" 
						onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="hteam"/></a>
						
				  </td>
	              <td id="vteam_<s:property value="day"/>_<s:property value="#stat.count"/>" class="bat_kedui" width="100">
	             	<a href="http://info.sporttery.com/football/info/fb_match_info.php" target="_blank" content="<s:property value="team2"/>"  offset="br,0,0" 
						onmouseout="PopupOff($(this));" onmouseover="PopupOn($(this));"><s:property value="kteam"/></a>
	              </td>
                   	<td class="bat_sheng" onclick="checkColorButton($(this),<s:property value="day"/>,3,<s:property value="#stat.count"/>,'<s:property value="newweek"/>');">
                   		<span id="ball3_<s:property value="day"/>_<s:property value="#stat.count"/>"   >
							<s:property value="peilv.letVs.v3"/>                                                                                              
						</span>  
                   	</td>
			      	<td class="bat_ping"  onclick="checkColorButton($(this),<s:property value="day"/>,1,<s:property value="#stat.count"/>,'<s:property value="newweek"/>');">
			      		 <span id="ball1_<s:property value="day"/>_<s:property value="#stat.count"/>"  >
							<s:property value="peilv.letVs.v1"/>                                                                                       
						</span> 
			      	</td>
			      	<td class="bat_sheng"  onclick="checkColorButton($(this),<s:property value="day"/>,0,<s:property value="#stat.count"/>,'<s:property value="newweek"/>');">
						<span id="ball0_<s:property value="day"/>_<s:property value="#stat.count"/>" >
							<s:property value="peilv.letVs.v0"/> 
						</span>
					</td>
				   <td  class="bat_dan" width="25"  onclick="changeColorCheckbox(this,<s:property value="day"/>,<s:property value="#stat.count"/>,'<s:property value="newweek"/>');">
				  		<a href="javascript:void(0)" id="checkbox_<s:property value="day"/>_<s:property value="#stat.count"/>" >胆</a>
				   </td>
				</tr>
				
			</s:if>
		</s:iterator>
	</s:if>
	</s:iterator>
</s:if>
</table>
<div class="clearance">
 	<div class="cle_right">
     	<span>投注金额&nbsp;<strong>2</strong>&nbsp;元</span>
         <input type="button" />
     </div>
 	<div class="cle_mode">
     	<span>过关方式<div class="wenhao_xuanfu">“-”负 号表示主队让客队；“+”正号表示客队让主队</div></span>
         <div class="cle_select">
         	<input type="checkbox" />
             <label>2串1</label>
         </div>
         <div class="cle_select">
         	<input type="checkbox" />
             <label>3串1</label>
         </div>
         <div class="cle_select">
         	<input type="checkbox" />
             <label>4串1</label>
         </div>
         <div class="cle_select">
         	<input type="checkbox" />
             <label>5串1</label>
         </div>
     </div>
     <div class="cle_multiple">
     	<span>过关倍数<div class="wenhao_xuanfu">“-”负 号表示主队让客队；“+”正号表示客队让主队</div></span>
         <input type="text" name="" id="" />
         <label>倍&nbsp;&nbsp;&nbsp;理论最高奖金<strong>700.04</strong>元</label>
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
	//点击隐藏单场对阵
	$(".quxiaoduizhen").click(function(){
		$(this).parent().css("display","none");
		var hide=parseInt($("#hideNum").text());
		hide+=1;
		$("#hideNum").text(hide)
	});
});

</script>
