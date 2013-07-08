<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!--开奖中心右边-->	
	<div class="lotteryAnnouncement">
	<input type="hidden" id="lotno" value="<s:property value="#request.lotno"/>"/>
		<s:if test='#request.lotno=="T01007"'>
		<div class="announcement_border">
			<h2>时时彩开奖信息</h2>
			<div class="announcement_time">
				<span>选择时间：
					<input class="announcement_input"  type="text" id="ssctDate" name="startDate" value="${startDate}" onFocus="WdatePicker({alwaysUseStartDate:true})" onchange="getdrawalotteryGPInfo('ssctDate')"/>                                                                               
				</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('20','ssctDate')" <s:if test='#request.issu=="20"'>checked="checked"</s:if>/>最新20期</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('50','ssctDate')" <s:if test='#request.issu=="50"'>checked="checked"</s:if>/>最新50期</span>
				<span class="none"><input name="" type="radio" value="" />显示全部</span>
			</div>
			
			<div class="shiShi_table">
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_leftTable">
					<tr>
						<th>期号</th>
						<th>开奖时间</th>
						<th>开奖号码</th>
					</tr>
					<s:if test="#request.arrWin.size()>0">
					<s:iterator value="#request.arrWin" id="arrWininfo" status="s">
					
					<tr>
						<td><s:property value="id.batchcode"/></td>
						<td><s:property value="opentime"/></td>
						<td><i><s:property value="winbasecode"/></i></td>
					</tr>
					</s:iterator>
					</s:if>
					<s:else>
					<tr>
						<td colspan="3">没有查询到相应的记录！</td>
					</tr>
					</s:else>
				</table>
			
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_rightTable">
					<thead>
						<tr>
							<th width="50%">奖项</th>
							<th width="50%">单注奖金</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>五星直选</th>
							<td><i>100000</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>五星通选一等奖</th>
							<td><i>20000</i>元</td>
						</tr>
						<tr>
							<th>五星通选二等奖</th>
							<td><i>200</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>五星通选三等奖</th>
							<td><i>20</i>元</td>
						</tr>
						<tr>
							<th>三星直选</th>
							<td><i>1000</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>三星组选三</th>
							<td><i>320</i>元</td>
						</tr>
						<tr>
							<th>三星组选六</th>
							<td><i>160</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>二星</th>
							<td><i>100</i>元</td>
						</tr>
						<tr>
							<th>二星直选复式</th>
							<td><i>100</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>二星组选复式</th>
							<td><i>50</i>元</td>
						</tr>
						<tr>
							<th>一星</th>
							<td><i>10</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>大小单双</th>
							<td><i>4</i>元</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<script>
			$(function(){
				$(".a_shishicai").addClass("selected");
			});
		</script>
		</s:if>
		<%//江西11选5 %>
		<s:if test='#request.lotno=="T01010"'>
		<div class="announcement_border">
			<h2>江西11选5开奖信息</h2>
			<div class="announcement_time">
				<span >选择时间：
				<input  type="text" class="announcement_input" id="11xtDate" name="startDate" value="${startDate}" onFocus="WdatePicker({alwaysUseStartDate:true})" onchange="getdrawalotteryGPInfo('11xtDate')"/> 
				</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('20','11xtDate')" <s:if test='#request.issu=="20"'>checked="checked"</s:if>/>最新20期</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('50','11xtDate')" <s:if test='#request.issu=="50"'>checked="checked"</s:if>/>最新50期</span>
				<span class="none"><input name="" type="radio" value="" />显示全部</span>
			</div>
			
			<div class="shiShi_table">
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_leftTable">
					<tr>
						<th>期号</th>
						<th>开奖时间</th>
						<th>开奖号码</th>
					</tr>
					<s:if test="#request.arrWin.size()>0">
					<s:iterator value="#request.arrWin" id="arrWininfo" status="s">
					
					<tr>
						<td><s:property value="id.batchcode"/></td>
						<td><s:property value="opentime"/></td>
						<td><i><s:property value="winbasecode"/></i></td>
					</tr>
					</s:iterator>
					</s:if>
					<s:else>
					<tr>
						<td colspan="3">没有查询到相应的记录！</td>
					</tr>
					</s:else>
				</table>
			
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_rightTable">
					<thead>
						<tr>
							<th width="50%">奖项</th>
							<th width="50%">单注奖金</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>前一直选</th>
							<td><i>13</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>前二直选</th>
							<td><i>130</i>元</td>
						</tr>
						<tr>
							<th>前二组选</th>
							<td><i>65</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选二 </th>
							<td><i>6</i>元</td>
						</tr>
						<tr>
							<th>前三直选 </th>
							<td><i>1170</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>前三组选 </th>
							<td><i>195</i>元</td>
						</tr>
						<tr>
							<th>任选三 </th>
							<td><i>19</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选四 </th>
							<td><i>78</i>元</td>
						</tr>
						<tr>
							<th>任选五</th>
							<td><i>540</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选六</th>
							<td><i>90</i>元</td>
						</tr>
						<tr>
							<th>任选七</th>
							<td><i>26</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选八 </th>
							<td><i>9</i>元</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<script>
			$(function(){
				$(".a_11xuan5").addClass("selected");
			});
		</script>
		</s:if>
		<!-- 快三 -->
		<s:if test='#request.lotno=="F47107"'>
		<div class="announcement_border">
			<h2>快三开奖信息</h2>
			<div class="announcement_time">
				<span >选择时间：
				<input  type="text" class="announcement_input" id="11xtDate" name="startDate" value="${startDate}" onFocus="WdatePicker({alwaysUseStartDate:true})" onchange="getdrawalotteryGPInfo('11xtDate')"/> 
				</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('20','11xtDate')" <s:if test='#request.issu=="20"'>checked="checked"</s:if>/>最新20期</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('50','11xtDate')" <s:if test='#request.issu=="50"'>checked="checked"</s:if>/>最新50期</span>
				<span class="none"><input name="" type="radio" value="" />显示全部</span>
			</div>
			
			<div class="shiShi_table">
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_leftTable">
					<tr>
						<th>期号</th>
						<th>开奖时间</th>
						<th>开奖号码</th>
					</tr>
					<s:if test="#request.arrWin.size()>0">
					<s:iterator value="#request.arrWin" id="arrWininfo" status="s">
					
					<tr>
						<td><s:property value="id.batchcode"/></td>
						<td><s:property value="opentime"/></td>
						<td><i><s:property value="winbasecode"/></i></td>
					</tr>
					</s:iterator>
					</s:if>
					<s:else>
					<tr>
						<td colspan="3">没有查询到相应的记录！</td>
					</tr>
					</s:else>
				</table>
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_rightTable">
					<thead>
						<tr>
							<th width="50%">奖项</th>
							<th width="50%">单注奖金</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>和值 </th>
							<td><i>9-240</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>三同号通选</th>
							<td><i>40</i>元</td>
						</tr>
						<tr>
							<th>三同号单选</th>
							<td><i>240</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>三不同号</th>
							<td><i>40</i>元</td>
						</tr>
						<tr>
							<th>三连号通选 </th>
							<td><i>10</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>二同号复选 </th>
							<td><i>15</i>元</td>
						</tr>
						<tr>
							<th>二同号单选  </th>
							<td><i>80</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>二不同号 </th>
							<td><i>8</i>元</td>
						</tr>
		                <i>注 ：*和值3、18投注将视同三同号单选投注，奖金240元</i>
					</tbody>
				</table>
			</div>
		</div>
		<script>
			$(function(){
				$(".a_kuaisan").addClass("selected");
			});
		</script>
		</s:if>
		
		<%//十一运夺金开奖 %>
		<s:if test='#request.lotno=="T01012"'>
		<div class="announcement_border">
			<h2>十一运夺金开奖信息</h2>
			<div class="announcement_time">
				<span >选择时间：
				<input  type="text" class="announcement_input" id="11djtDate" name="startDate" value="${startDate}" onFocus="WdatePicker({alwaysUseStartDate:true})" onchange="getdrawalotteryGPInfo('11djtDate')"/> 
				</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('20','11djtDate')" <s:if test='#request.issu=="20"'>checked="checked"</s:if>/>最新20期</span>
				<span><input name="radio" type="radio" value="" onclick="getdrawalotteryGPInfoM('50','11djtDate')" <s:if test='#request.issu=="50"'>checked="checked"</s:if>/>最新50期</span>
				<span class="none"><input name="" type="radio" value="" />显示全部</span>
			</div>
			<div class="shiShi_table">
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_leftTable">
					<tr>
						<th>期号</th>
						<th>开奖时间</th>
						<th>开奖号码</th>
					</tr>
					<s:if test="#request.arrWin.size()>0">
					<s:iterator value="#request.arrWin" id="arrWininfo" status="s">
					
					<tr>
						<td><s:property value="id.batchcode"/></td>
						<td><s:property value="opentime"/></td>
						<td><i><s:property value="winbasecode"/></i></td>
					</tr>
					</s:iterator>
					</s:if>
					<s:else>
					<tr>
						<td colspan="3">没有查询到相应的记录！</td>
					</tr>
					</s:else>
				</table>
			
				<table width="100%"  cellspacing="0" cellpadding="0" class="shiShi_rightTable">
					<thead>
						<tr>
							<th width="50%">奖项</th>
							<th width="50%">单注奖金</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>前一直选</th>
							<td><i>13</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>前二直选</th>
							<td><i>130</i>元</td>
						</tr>
						<tr>
							<th>前二组选</th>
							<td><i>65</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选二 </th>
							<td><i>6</i>元</td>
						</tr>
						<tr>
							<th>前三直选 </th>
							<td><i>1170</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>前三组选 </th>
							<td><i>195</i>元</td>
						</tr>
						<tr>
							<th>任选三 </th>
							<td><i>19</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选四 </th>
							<td><i>78</i>元</td>
						</tr>
						<tr>
							<th>任选五</th>
							<td><i>540</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选六</th>
							<td><i>90</i>元</td>
						</tr>
						<tr>
							<th>任选七</th>
							<td><i>26</i>元</td>
						</tr>
						<tr class="shiShi_bgGrey">
							<th>任选八 </th>
							<td><i>9</i>元</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<script>
			$(function(){
				$(".a_shiyiyunduojin").addClass("selected");
			});
		</script>
		</s:if>
	</div>