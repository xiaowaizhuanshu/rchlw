<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 
 <div class="AlertWindow BalanceWindow WindowCenter" id="canyuHemaiDiv" style="display:none;">
	<div class="WindowTittle"><h3>参与合买提示</h3><span class="Alertclose" onclick="canyuHemaiShow();">&#160;</span></div>
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
					<tr  id="yueBuzu" style="display: none;" >
						<th colspan="2">余额不足，请先充值</th>
					</tr>
					<tr  id="rengouzhong" style="display: none;" >
						<th colspan="2">认购中，请稍候</th>
					</tr>
					
					<tr>
					<th id="message" colspan="2"></th>
					</tr>
					<tr>
						<th colspan="2">&#160;</th>
					</tr>
					<input  type="hidden" id="lotno" value="">
							<!-- 余额不足时提示 -->
					<tr  id="quxiao" style="display: none;" >
						<th colspan="2"><input type="button" value="取　消" class="BaseBtn" onmouseover="BtnOver($(this))" onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" onmouseup="BtnUp($(this))" onclick="canyuHemaiShow();" /><a target="_blank" href="<%=request.getContextPath()%>/function/rules/user.jsp?key=4">立即充值&gt;&gt;</a></th>
					</tr>
							<!-- 确认购买时提示 -->
					<tr id="queding" style="display: none;" >
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn" onclick="tohemairengou();" /><input type="button" value="取　消" class="BaseBtn" onmouseover="BtnOver($(this))" onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" onmouseup="BtnUp($(this))" onclick="canyuHemaiShow();" /></th>
					</tr>
							<!-- 关闭提示框并刷新页面 -->
					<tr id="closequeding" style="display: none;" >
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn" onmouseover="BtnOver($(this))" onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" onmouseup="BtnUp($(this))" onclick="window.location.reload();canyuHemaiShow();" /></th>
					</tr>
				</tbody>
			</table>
		</div>
</div>
