<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="login_pop" class="WindowCenter" style="display:none;" >
<form method="post" id="userLoginForm">
<div class="AlertWindow BalanceWindow">
	<div class="WindowTittle"><h3>用户登录</h3><span class="Alertclose" onclick="loginShow();">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
				<thead>
					<tr><th width="100">&#160;</th><td>请您不要关闭此页，登录完成后根据情况选择。</td></tr>
				</thead>
				<tbody>
					<tr><th colspan="2">&#160;</th></tr>
				<tr>
					<th colspan="2">
						<input type="button" value="已登录" class="BaseBtn"  onmouseover="BtnOver($(this))" onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" onmouseup="BtnUp($(this))" id="login" />
						<input type="button" value="登录遇到问题" class="BaseBtn"  onmouseover="BtnOver($(this))" onmouseout="BtnOut($(this))" onmousedown="BtnDown($(this))" onmouseup="BtnUp($(this))" id="loginQu" />
					</th>
				</tr>
				<tr><th colspan="2">&#160;</th></tr>
				</tbody>
			</table>
	</div>
</div>
</form>
</div>
<jsp:include page="/function/rules/alertTiShi.jsp"></jsp:include>
<div class="AlertWindow SignInWindow  WindowCenter" id="unBundling_Alert" style="display:none">
	<div class="WindowTittle"><h3>手机绑定</h3><span class="Alertclose" onclick="loginShow('unBundling_Alert',false);location.reload();">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
					<tr>
						<th>&#160;</th>
					</tr>
					<tr>
						<th  id="unBundling_Msg"></th>
					</tr>
					<tr>
						<th>&#160;</th>
					</tr>
					<tr>
						<th><input type="button" value="关闭" class="BaseBtn" onclick="loginShow('unBundling_Alert',false);location.reload();"/>　　<input type="button" value="绑定其他" class="BaseBtn" onclick="javascript:reHtml(50,'',true,'',false);loginShow('unBundling_Alert',false);"/></th>
					</tr>
			</table>

		</div>
	</div>


<script>
$("#login").click(function(){
	if(isLogin()){
			totalLotteryInvest = parseInt($("#lab_Num").html());
			totalMoney = Number($("#current_money").html()); //记录当前选号后的投注所需金额
			if ($("#lotNo").length > 0) {
				touzhuInitStatic(); //对页面做用户登录状态初始化
			}
			//还原初始化之前用户的投注金额，并计算当前用户余额减去投注金额的剩余金额
			var a = parseFloat(touzhu_balance - totalMoney);
			$("#current_money").html(totalMoney.toFixed());
			if (a < 0) {
				$("#final_money").html("0");
			} else {
				$("#final_money").html(a.toFixed());
			}
			//初始化最新开奖页面
			if ($("#zuijingc").length > 0) {
				reHtml(46, '', 'false', 'zuijingc');
			}
			$("#userDivDis").css("diplay", "block");
			$("#userDivNone").css("diplay", "none");
			topLogin();
			indexRight();
			loginShow();
		}else{
			openAlert("您未登录，请先登录！");
			loginRequrl();
			}
});
$("#loginQu").click(function(){
	window.location.href="/rchlw/function/rules/customMessage.jsp";
});
</script>