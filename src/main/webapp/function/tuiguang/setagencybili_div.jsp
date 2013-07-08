<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 
 <div class="AlertWindow BalanceWindow WindowCenter" id="setagencybiliDiv" style="display:none;">
	<div class="WindowTittle"><h3>佣金比例设置提示</h3>
	<span class="Alertclose" onclick="setagencybiliShow();">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
				<tbody>
					<tr  id="setchenggong" style="display: none;" >
						<th colspan="2">佣金设置成功，祝您购彩愉快！</th>
					</tr>
					<tr  id="setshibai" style="display: none;" >
						<th colspan="2">佣金设置失败，请重试！</th>
					</tr>
					<tr>
						<th colspan="2">&#160;</th>
					</tr>
					<input  type="hidden" id="userno" value="">
					<input  type="hidden" id="lotno" value="">
					<tr id="closethisdiv" style="display: none;" >
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn" onmouseover="BtnOver($(this))"
						onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" 
						onmouseup="BtnUp($(this))" onclick="setagencybiliShow();" /></th>
					</tr>
					<!-- 关闭提示框并刷新页面 -->
					<tr id="closequeding" style="display: none;" >
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn" onmouseover="BtnOver($(this))"
						onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" 
						onmouseup="BtnUp($(this))" onclick="closeAgency();" /></th>
					</tr>
				</tbody>
			</table>
		</div>
</div>
