<%@ page contentType="text/html; charset=utf-8"%>

<div id="shahaotishi" style="display: none;" class="WindowCenter">
<div class="AlertWindow KillNumberAlert">
	<div class="WindowTittle"><h3>温馨提示</h3><span class="Alertclose" onclick="closeAjaxLogin('openshahao');">&#160;</span></div>
	<div class="InsideBorder">
		<table class="KillNumberAlertTable">
				<tr>
					<th width="80"></th><td id="tishiyu"></td>
				</tr>
				<tr>
					<th></th><td><input type="checkbox" id="checkbox" style="width:auto; margin:5px 5px 0px 0px;" onclick="checkboxstate()"/><i>多余胆码自动做杀号处理</i></td>
				</tr>
				<tr>
					<td colspan="2">&#160;</td>
				</tr>
				<tr>
					<td colspan="2">&#160;</td>
				</tr>
				<tr>
					<th colspan="2"><input type="button" value="确　定" class="BaseBtn" onclick="addShahao()"/><a href="javascript:void();" onclick="closeAjaxLogin('openshahao');">取消&gt;&gt;</a></th>
				</tr>
		</table>
	</div>
</div>
<input type="hidden" id="checkState" value="0"/>
<input type="hidden" id="ballColor" />
<input type="hidden" id="ballNum"/>
</div>