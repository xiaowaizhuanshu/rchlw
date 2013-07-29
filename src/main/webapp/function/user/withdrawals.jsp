<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib uri="/struts-tags" prefix="s" %>
<style>div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}</style>

	<h2>账户提款</h2>
	<div class="account_recharge">
		<ul class="account_rechargeTab  BaseTab" >
			<li ControlTarget=".drawing_Wizard" class="light " onclick="return reHtml(18,'')">提款向导</li>
			<li ControlTarget=".user_Drawing" class="light" onclick="return reHtml(11,'')">用户提款</li>
			<li ControlTarget=".cash_Records" class="light selected" onclick="return reHtml(12,'')">提款记录</li>
		</ul>
	</div>
	<div class="account_rechargeContent">
	<form action="#" method="POST" id="formcash" onsubmit="return reHtml(12,$('#formcash').serialize());">
	<div class="cash_Records none selected">
		<table class="cashRecords_time" cellspacing="0" cellpadding="0">
			<tr>
				<td>起始日期：</td>
				<td><input type="text" id="startDate" name="beginTime" value="${startDate }" onFocus="WdatePicker({alwaysUseStartDate:true})"type="text" class="account_time" /></td>
		<td>截止日期：</td>
		<td><input type="text" id="stopDate" name="endTime" value="${stopDate }" onFocus="WdatePicker({alwaysUseStartDate:true})"type="text" class="account_time" /></td>
		<td><input type="submit" id="button" class="account_checkBtn" value="查询"/></td>
		<td class="cashRecords_tiaoShu">
		<dl class="RadioButton"><dt class="light <s:if test='#request.lineNum=="30"'>selected</s:if>" onclick="addvalue('30');reHtml(12,$('#formcash').serialize());" ></dt><dd class="light" >30条</dd></dl>
		<dl class="RadioButton"><dt class="light <s:if test='#request.lineNum=="20"'>selected</s:if>" onclick="addvalue('20');reHtml(12,$('#formcash').serialize());"></dt><dd class="light">20条</dd></dl>
		<dl class="RadioButton"><dt class="light <s:if test='#request.lineNum=="10"'>selected</s:if>" onclick="addvalue('10');reHtml(12,$('#formcash').serialize());"></dt><dd class="light">10条</dd></dl>
			</td>
		</tr>
	</table>
	<script>
	function addvalue(num){
			$("#lineNum").val(num);
		}
	
	</script>
		<input type="hidden" id="lineNum" name="lineNum" value="20"/>
	<table class="account_day"  cellspacing="0" cellpadding="0">
		<tr>
			<th>交易时间</th>
			<th>支出</th>
			<th>交易类型</th>
			<th>订单号</th>
			<th>说明</th>
			<th>操作</th>
		</tr>
			<s:if test='#request.objValue.today.size()>0'>
				<tr class="account_bgYellow">
					<td colspan="10"><strong>今天</strong>（<s:property value="#request.objValue.today.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.objValue.today" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
				<%//-- 交易时间 --%>
					<td>
						<s:property value="cashtime"/>
					</td>
					<%//-- 支出 --%>
					<td>
						<s:property value="AMT"/>
					</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='state=="1"'>待处理</s:if>
				  		<s:elseif test='state=="102" || state=="103"'>已审核</s:elseif>
				  		<s:elseif test='state=="104"'>驳回</s:elseif>
				  		<s:elseif test='state=="106"'>取消</s:elseif>
				  		<s:elseif test='state=="105"'>已完成</s:elseif>
					</td>
					<%//-- 订单号 --%>
					<td>
						<s:property value="ttransactionid.substring(15)"/>
					</td>
					<%//-- 说明 --%>
					<td >
						 <s:if test='state=="104"'><dl onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))" Offset="br,0,0" BoxStyle=" width:144px; padding:0 10px; border:solid 1px #E3E3E3; background:#F8F8F8;" Content="<p style='line-height:20px; color:#666666;'><s:property value='new_rejectReason'/></p>">提款驳回</dl></s:if><s:else>用户提款</s:else>
					</td>
					<%//-- 操作 -- %>
					<td >
						<s:if test='state=="1"'>
						<input type="button" value="撤销" onclick="cancelCash('orderid<s:property value="#stat.count"/>');" > <b>|</b>
						<input type="hidden" value='<s:property value="id"/>'  id="orderid<s:property value="#stat.count"/>">
						</s:if>
						<input type="button" onclick="return reHtml(90,'id=<s:property value="id"/>')" value="查看">
					</td>
				</tr>
				</s:iterator>
			</s:if>
			<s:if test='#request.objValue.yestday.size()>0'>
				<tr class="account_bgYellow">
					<td colspan="10"><strong>昨天</strong>（<s:property value="#request.objValue.yestday.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.objValue.yestday" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else><!-- 交易时间 -->
					<td>
						<s:property value="cashtime"/>
					</td>
					<%//-- 支出 --%>
					<td>
						<s:property value="AMT"/>
					</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='state=="1"'>待处理</s:if>
				  		<s:elseif test='state=="102" || state=="103"'>已审核</s:elseif>
				  		<s:elseif test='state=="104"'>驳回</s:elseif>
				  		<s:elseif test='state=="106"'>取消</s:elseif>
				  		<s:elseif test='state=="105"'>已完成</s:elseif>
					</td>
					<%//-- 订单号 --%>
					<td>
						<s:property value="ttransactionid.substring(15)"/>
					</td>
					<%//-- 说明 --%>
					<td ><s:if test='state=="104"'><dl onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))" Offset="br,0,0" BoxStyle=" width:144px; padding:0 10px; border:solid 1px #E3E3E3; background:#F8F8F8;" Content="<p style='line-height:20px; color:#666666;'><s:property value='new_rejectReason'/></p>">提款驳回</dl></s:if><s:else>用户提款</s:else>
					</td>
					<%//-- 操作 --%>
					<td >
						<s:if test='state=="1"'>
						<input type="button" value="撤销" onclick="cancelCash('orderid<s:property value="#stat.count"/>');" ><b>|</b>
						<input type="hidden" value='<s:property value="id"/>'  id="orderid<s:property value="#stat.count"/>">
						</s:if>
						<input type="button" onclick="return reHtml(90,'id=<s:property value="id"/>')" value="查看">
					</td>
				</tr>
				</s:iterator>
			</s:if>
			<s:if test='#request.objValue.oldday.size()>0'>
				<tr class="account_bgYellow">
					<td colspan="10"><strong>更早</strong>（<s:property value="#request.objValue.oldday.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.objValue.oldday" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else><!-- 交易时间 -->
					<td>
						<s:property value="cashtime"/>
					</td>
					<%//-- 支出 --%>
					<td>
						<s:property value="AMT"/>
					</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='state=="1"'>待处理</s:if>
				  		<s:elseif test='state=="102" || state=="103"'>已审核</s:elseif>
				  		<s:elseif test='state=="104"'>驳回</s:elseif>
				  		<s:elseif test='state=="106"'>取消</s:elseif>
				  		<s:elseif test='state=="105"'>已完成</s:elseif>
					</td>
					<%//-- 订单号 --%>
					<td>
						<s:property value="ttransactionid.substring(15)"/>
					</td>
					<%//-- 说明 --%>
					<td ><s:if test='state=="104"'><dl onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))" Offset="br,0,0" BoxStyle=" width:144px; padding:0 10px; border:solid 1px #E3E3E3; background:#F8F8F8;" Content="<p style='line-height:20px; color:#666666;'><s:property value='new_rejectReason'/></p>">提款驳回</dl></s:if><s:else>用户提款</s:else>
					</td>
					<td >
						<s:if test='state=="1"'>
						<input type="button" value="撤销" onclick="cancelCash('orderid<s:property value="#stat.count"/>');" ><b>|</b>
						<input type="hidden" value='<s:property value="id"/>'  id="orderid<s:property value="#stat.count"/>">
						</s:if>
						<input type="button" onclick="return reHtml(90,'id=<s:property value="id"/>')" value="查看">
					</td>
				</tr>
				</s:iterator>
			</s:if>
			<s:else><tr ><td colspan="6" height="28" align="center"><s:property value="#request.message"/></td></tr></s:else>
		
	</table>
	<s:if test='#request.objValue!=null'>
		<p id="fenye" class="account_page">  
			${pageHtml}
		</p>
	</s:if>
	<div class="deal" style="display: none;">支出交易笔数：<s:if test='#request.totalnumber==null'>0</s:if><s:else><s:property value="#request.totalnumber"/></s:else>　　　　　支出金额合计：<font class="red1"><s:if test='#request.totalamt==null'>0</s:if><s:else><s:property value="#request.totalamt"/></s:else></font>元</div>
			<p class="recharge_title">提款须知：</p>
			<dl class="recharge_explain">
				<dt>1、银行卡姓名必须与用户的真实姓名相符，否则将提款不成功。</dt>
				<dt>2、如果账户资金低于10元，仍需提款，请一次性提清。</dt>
				<dt> 3、提现只能提到银行卡上，暂不支持信用卡提现。</dt>
				<dt>4、提款到账时间（周一至周五每日处理提款，法定假日除外）：</dt>
				<dd>使用中国工商银行、中国农业银行、中国建设银行、中国招商银行的银行卡进行提现，</dd>
				<dd>16:00前的提款申请：当天到账；16:00后的提款申请：第二天到账。</dd>
				<dd>使用其它银行卡进行提现，</dd>
				<dd>16:00前的提款申请：第二天到账；16:00后的提款申请，第三天到账。</dd>
				<dd>  如有疑问，请致电客服热线：400-856-1000。</dd>
				<dt>5、为了防止少数用户利用信用卡套现和洗钱行为，保证正常用户的资金安全，本站针对提款做出以下规定：</dt>
				<dd><b>  累计充值资金消费未满30%，可提现金额为累计充值资金的70%；累计充值资金消费达到30%，不受此限制。</b></dd>
				<dt>6、提款受理银行：</dt>
				<dd>中国工商银行　中国建设银行　中国光大银行　招商银行　兴业银行　深圳发展银行　上海浦东发展银行</dd>
				<dd> 中国农业银行　中国民生银行　广东发展银行　交通银行　中信银行　杭州银行</dd>
			</dl>
			<div class="space15">&#160;</div>
		
		</div>
		</form>
	</div>
	<script>
		$(function(){
			$(".a_ATM").addClass("selected");
		});
	</script>
