<%@page import="net.sf.json.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <% 
    //JSONObject obj = (JSONObject)request.getAttribute("jsonRoot");
    //   JSONObject umpay = (JSONObject)obj.get("objUmpay");
     //  String resultUrl = umpay.getString("pay_url");
    %>
<form action="" method = "post" target="_blank" id="form_url" onSubmit="putBankUrl()">

	<input type="hidden" name="merId" id="merId" value="" >
	<input type="hidden" name="goodsId" id="goodsId" value=""> 
	<input type="hidden" name="goodsInf" id="goodsInf" value="" >
	<input type="hidden" name="mobileId" id="mobileId" value="" > 
	<input type="hidden" name="orderId" id="orderId" value=" "> 
	<input type="hidden" name="merDate" id="merDate" value="" > 
	<input type="hidden" name="amount" id="amount" value="" > 
	<input type="hidden" name="amtType" id="amtType" value="" >
	<input type="hidden" name="bankType" id="bankType" value="" >
	<input type="hidden" name="gateId" id="gateId" value="" >
	<input type="hidden" name="retUrl" id="retUrl" value="" >
	<input type="hidden" name="notifyUrl" id="notifyUrl" value="" > 
	<input type="hidden" name="merPriv" id="merPriv" value="" > 
	<input type="hidden" name="expand" id="expand" value="" > 
	<input type="hidden" name="version" id="version" value="" > 
	<input type="hidden" name="sign" id="sign" value="" >
	<table class="Recharging">
		<tr style="display:none;" id="macId"></tr>
		<tr>
			<th>您选择的话费支付为：</th>
			<td>
				<dl class="chargeType">
					<dd id="" class="money30" style=" display:none; height:30px; line-height:30px; width:160px; text-align:center; font-weight:bold;margin:5px 0 25px 0;text-decoration:none;background:url(/rchlw/function/images/sjhf-btn.png) no-repeat;">30元话费充值20元彩金</dd>
					<dd id="" class="money3" style="display:none; height:30px; line-height:30px; width:160px; text-align:center; font-weight:bold;margin:5px 0 25px 0;text-decoration:none;background:url(/rchlw/function/images/sjhf-btn.png) no-repeat;">3元话费充值2元彩金</dd>
				</dl>
			</td>
			<td><a href="<%=request.getContextPath() %>/function/rules/user.jsp?key=4">选择其他充值方式</a></td>
		</tr>
		<tr>
			<th>您的充值金额为：</th><td colspan="2"><i id="chargeMoney"></i> 元</td>
		</tr>
		<tr>
			<th>&#160;</th><td colspan="2"><div class="netCharge_nextbtn"><input type="submit" class="light mobile" id="minshSubmit" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" value="立即充值"/></div></td>
		</tr>
		<tr>
			<td colspan="3"><em>提示：充值将会在新窗口打开，充值成功后请勿立即关闭弹窗。</em></td>
		</tr>
	</table>
</form>	
<script>

$(function(){
	$(".netCharge").height("494px");
});
</script>
