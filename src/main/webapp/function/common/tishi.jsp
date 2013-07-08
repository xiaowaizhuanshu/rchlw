<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div style="display: none;" id="rengouTiShi" >
	<div class="AlertWindow BalanceWindow WindowCenter">
		<div class="WindowTittle"><h3>温馨提示</h3><span class="Alertclose" onclick="closeAjaxLogin('openRenGou');">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
				<thead>
					<tr>
						<th width="250">您本次购买需支付：</th><td><b>¥<span id="buymoney"></span></b>元</td>
					</tr>
					<tr>
						<th>您当前可投注余额：</th><td><b>¥<span id="blancemoney"></span></b>元</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th colspan="2">余额不足，请先充值</th>
					</tr>
					<tr>
						<th colspan="2">&#160;</th>
					</tr>
					<tr>
						<th colspan="2"><input type="button" value="取　消" class="BaseBtn" onclick="closeAjaxLogin('openRenGou');"/><a href="<%=request.getContextPath()%>/function/rules/user.jsp?key=4" title="立即充值" target="_blank">立即充值&gt;&gt;</a></th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>