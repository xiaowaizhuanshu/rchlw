<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<div class="AlertWindow BalanceWindow WindowCenter"  id="chargeTishi" style="display:none">
	<div class="WindowTittle"><h3>温馨提示</h3><span class="Alertclose" onclick='loginShow("chargeTishi",false)'>&#160;</span></div>
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
					<th colspan="2"><input type="button" value="取　消" class="BaseBtn" onclick='loginShow("chargeTishi",false)' />
					<a  href="/rules/user.html?key=4" title="立即充值" target="_blank" id="chongzhi">立即充值&gt;&gt;</a>　　
						<a href="javascript:;" onclick="balanceCompare();" title="我已充值" >我已充值</a>
					</th>
				</tr>
			</tbody>
		</table>

	</div>
</div>


 <script>
 function chargerTishi(){
 var current_money = $("#investField").text();
 var goumaifangshi=$("#goumaifangshi").val();//获取购买方式，如：代购  追号
	var isZhuihao=0;//获取购买方式，如：代购  追号
	if($("#isZhuihao") != null){
		isZhuihao = $("#isZhuihao").val();
		}
    if(goumaifangshi=='追号' || Number(isZhuihao) == 1){
       
    	var payType = $("#payType").val();
    	if(payType == "0"){
    		    current_money = $("#diyiqiMoney").val();
        	}else if(payType == "1"){
        		current_money = $("#allqiMoney").val();
            }
    }
    if($("#daiGouHemai").val()=="zengcai"){
    	current_money = $("#lastMoney").html();
    }
	$("#buymoney").text(current_money);
	$("#blancemoney").text($("#touzhu_money").html());
	var s = (parseInt(current_money)-5)*13;
	$("#chongzhi").attr("href","/rules/user.html?key=4&al="+s);
 }
 </script>           