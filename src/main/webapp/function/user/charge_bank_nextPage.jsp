<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<form action="" method = "post" target="colors123" id="formurl" onSubmit="putBankUrl()">
	<table class="Recharging">
		<tr style="display:none;" id="macId"></tr>
		<tr>
			<th>您选择的网上银行：</th>
			<td>
				<dl class="RadioButton">
					<dd id="ddclass" class="" style="width:126px; height:31px; border:solid 1px #DBDBDB;"></dd>
				</dl>
			</td>
			<td><a href="<%=request.getContextPath() %>/function/rules/user.jsp?key=4">选择其他银行</a></td>
		</tr>
		<tr>
			<th>您的充值余额：</th><td colspan="2"><i id="chargeMoney"></i> 元</td>
		</tr>
		<tr>
			<th>&#160;</th><td colspan="2"><div class="netCharge_nextbtn"><input type="submit" class="light" id="minshSubmit" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" value="立即充值"/></div></td>
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
