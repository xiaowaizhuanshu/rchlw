<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib prefix="s" uri="/struts-tags"%>
<div class="ChannelBuyPannelBody">
	<table width="100%">
		<thead>
			<tr>
				<th>时间</th>
				<th>期号</th>
				<th>开奖号码</th>
				<s:if test="#request.lotNo=='T01007'">
					<th>十位</th>
					<th>个位</th>
				</s:if>
			</tr>
		</thead>
		<tbody>
		<script>
			$(function(){
				if($("#drawaNo0").html()!=($("#qihao").text()-1)){
					$("#Special").css("display","");
					var n= new Date(Date.parse($("#endTime").text().replace(/-/g,  "/")));
					if($("#lotNo").val()=="T01007"){
						if(($("#endTime").text().substring(11)>"00:00:00" && $("#endTime").text().substring(11)<"01:55:00") ||( $("#endTime").text().substring(11) > "22:00:00" && $("#endTime").text().substring(11)<"23:59:00")){
							n.setMinutes(n.getMinutes()-5);
						}else{
							n.setMinutes(n.getMinutes()-10);
						}
					}else if($("#lotNo").val()=="T01010"){
						n.setMinutes(n.getMinutes()-10);
					}else if($("#lotNo").val()=="T01012"){
						n.setMinutes(n.getMinutes()-10);
					}
					
					var waitTime = n.getHours()+":"+n.getMinutes();
					
					$("#drawaTime").html(waitTime);
					$("#drawaBatch").html($("#qihao").text()-1);
				}
			});
		</script>
			<tr class="Special" id="Special" style="display: none;">
				<s:if test="#request.lotNo=='T01007'">
				<td id="drawaTime"></td>
				<td id="drawaBatch"></td>
				<td>等待开奖</td>
				<th>--</th>
				<th>--</th>
				<s:iterator value="#request.arrWininfo" id="arrWininfo" status="s1">
		          	<s:if test="(#s1.getIndex())%2==0">
			          <tr class="White">
			         </s:if>
			         <s:else>
			          <tr class="Gray">
			         </s:else>
			            <td><s:property value="opentime.substring(10,16)"/></td>
			            <td  id='drawaNo<s:property value="#s1.getIndex()"/>'><s:property value="id.batchcode"/></td>
			            <td><i><s:property value="winbasecode"/></i></td>
			            <th>
			            <s:if test="winbasecode.substring(3,4)>4">大<s:if test="winbasecode.substring(3,4)%2==0">双</s:if><s:else>单</s:else>
			            </s:if>
			            <s:else>小<s:if test="winbasecode.substring(3,4)%2==0">双</s:if><s:else>单</s:else>
			            </s:else>
			            
			            </th>
			            <th>
			            <s:if test="winbasecode.substring(4,5)>4">大<s:if test="winbasecode.substring(4,5)%2==0">双</s:if><s:else>单</s:else>
			            </s:if>
			            <s:else>小<s:if test="winbasecode.substring(4,5)%2==0">双</s:if><s:else>单</s:else>
			            </s:else>
			            </th>
		            </tr>
		         </s:iterator>
				</s:if>
				<s:else>
				<td id="drawaTime"></td>
				<td id="drawaBatch"></td>
				<td>等待开奖</td>
				<s:iterator value="#request.arrWininfo" id="arrWininfo" status="s1">
          	<s:if test="(#s1.getIndex())%2==0">
	          <tr class="White">
	         </s:if>
	         <s:else>
	          <tr class="Gray">
	         </s:else>
	            <td><s:property value="opentime.substring(10,16)"/></td>
	            <td  id='drawaNo<s:property value="#s1.getIndex()"/>'><s:property value="id.batchcode"/></td>
	            <td><i><s:property value="winbasecode"/></i></td>
            </tr>
         </s:iterator>
				</s:else>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="5">
				<div style="border-top:dashed 1px #DBDBDB; text-align:right;">
				<!-- 时时彩 -->
				<s:if test="#request.lotNo=='T01007'">
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01007&inssuenum=5',false,'Channel','false');newinissue(5);">最近5期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01007&inssuenum=10',false,'Channel','false');newinissue(10);">10期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="window.open('/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01007&issu=5');">更多</em>
				</s:if>
				<!-- 十一运夺金-->
				<s:elseif test="#request.lotNo=='T01012'">
				<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01012&inssuenum=5',false,'Channel','false');newinissue(5);">最近5期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01012&inssuenum=10',false,'Channel','false');newinissue(10);">10期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="window.open('/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01012&issu=5');">更多</em>
				</s:elseif>
				<!-- 江西11选5-->
				<s:elseif test="#request.lotNo=='T01010'">
				<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01010&inssuenum=5',false,'Channel','false');newinissue(5);">最近5期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="reHtml(60,'lotno=T01010&inssuenum=10',false,'Channel','false');newinissue(10);">10期</em>
					<em onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="window.open('/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=T01010&issu=5');">更多</em>
				</s:elseif>
				</div>
				</td>
			</tr>
		</tfoot>
	</table>
</div>