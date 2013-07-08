<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
	<div class="AlertWindow BalanceWindow WindowCenter" style="display: none;" id="yueTiShi">
		<div class="WindowTittle"><h3>温馨提示</h3><span class="Alertclose" onclick="loginShow('yueTiShi',false);">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
				<thead>
					<tr>
						<th width="250">您本次购买需支付：</th><td><b>¥<span id="buymoney_touzhu"></span></b>元</td>
					</tr>
					<tr>
						<th>您当前可投注余额：</th><td><b>¥<span id="blancemoney_touzhu"></span></b>元</td>
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
						<th colspan="2"><input type="button" value="取　消" class="BaseBtn" onclick="loginShow('yueTiShi',false);"/>
						<a href="/rchlw/function/rules/user.jsp?key=4" title="立即充值" target="_blank">立即充值</a>　
						<a href="javascript:;" onclick="balanceCompare_shouye();" title="我已充值" >我已充值</a>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
<script>
</script>