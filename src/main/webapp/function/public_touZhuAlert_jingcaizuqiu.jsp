<%@ page contentType="text/html; charset=utf-8"%>

<!-- 弹出框 开始 -->

<div style="display: none;" id="touzhuOpen1" class="WindowCenter">
<div class="AlertWindow PlanBuyWindow " id="standrad_alert">
	<div class="WindowTittle">
		<h3 id="qihaofanan"></h3>
		<span class="Alertclose" onclick="loginShow('touzhuOpen1', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span>
	</div>
	<div class="InsideBorder">
		<table class="PlanCon" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
			<tr id="hemai_details" class="none">
					<th style="background:#fafafa;">方案详情</th>
							<td colspan="4">
								<table class="PlanContentTable"  width="100%" cellspacing="0" cellpadding="0">
									<tbody>
										<tr>
											<th>方案金额</th><th>最低认购</th><th>保底金额</th><th>发起人认购</th><th>发起人提成</th><td>方案保密</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td><i id="xiaofei_hemai">-</i>元</td>
											<td><i id="minAmt_alert">-</i>元</td>
											<td><i id="safeAmt_alert">-</i>元</td>
											<td><i id="buyAmt_alert">-</i>元</td>
											<td><i id="commisionRatio_alert">-</i>%</td>
											<th><i id="visibility_alert">完全保密</i></th>
										</tr>
									</tfoot>
								</table>
							</td>
						</tr>
			<tr>
				<th>认购信息</th><td>您本次购买需消费<b><span id="xiaofei"></span></b>元，
				购买后您的账户余额为<b><span id="zhanghujine"></span></b>元</td>
			</tr>
			<tr>
				<th>购彩提示:</th><td style="color: red;">竞彩足球单关投注奖金以投注时官方即时赔率有关,请以官方SP值为准.</td>
			</tr>
			</tbody>
			<tfoot>
			<tr>
				<td colspan="7" class="AscertainBuy"><input class="BtnDisable" id="norepeat" type="button" onclick="norepeat(this);touzhu();" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));" /><span><a onclick="loginShow('touzhuOpen1', false);" title="返回修改">返回修改</a></span></td>
			</tr>
			</tfoot>
		</table>
	</div>
</div>
<div class="AlertWindow PlanBuyWindow"  id="danshi_alert" style="display: none;">
		<div class="WindowTittle">
		<h3 id="qihaofanan_danshi"></h3>
		<span class="Alertclose" onclick="loginShow('touzhuOpen1', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span>
	</div>
			<div class="InsideBorder">
				<table class="PlanCon" cellpadding="0" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th rowspan="2">方案信息</th><th>玩法</th><th>注数</th><th>倍数</th><th>总金额</th>
						</tr>
						<tr>
							<th id="touzhufangshi_danshi"></th><th id="zhushu_danshi"></th><th id="beishu_danshi"></th><th id="zongJine_danshi"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>认购信息</th><td colspan="4"> 您本次购买需要消费<b><span id="xiaofei_danshi"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine_danshi"></span></b>元。 </td>
						</tr>
						<tr>
							<th colspan="5" class="AscertainBuy"><input class="BaseBtn" type="button" id="norepeat" onclick="norepeat(this);touzhu();" value="确认购买" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));"><span class="light" onclick="loginShow('touzhuOpen1', false);">返回修改</span></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>


<script>
	//设置 弹出框的显示内容
	function htmlMsg() {
		var lotno = "竞彩足球";//彩种
		var beishu = $("#tb_Multiple").val();//获取倍数
		var jcType = $("#jcType").val();//当前玩法
		var zhushu = 0;//获取注数
		var current_money = 0;//获取投注金额
		var current_money1 = 0;//获取投注金额
		var buyAmt = 0;//认购金额
		var safeAmt = 0;//保底金额
		var visibility = 0;// 保密类型
		var minAmt = 0;//最底跟单金额
		var isMinAmt_zjq = "";//是否设置最底跟单
		var commisionRadio = 0;//发起人提成
		if(jcType != null && jcType == "zjq"){
			zhushu = $("#lab_Num_standrad_zjq").text();
			current_money = $("#investField_standrad_zjq").text();
			current_money1 = $("#investField_standrad_zjq").text();
			buyAmt = $("#buyAmt_zjq").val();
			safeAmt = $("#safeAmt_zjq").val();
			visibility = $("input[name='visibility_zjq']:checked").val();// 保密类型
			minAmt = $("#minAmt_zjq").val();
			isMinAmt_zjq = $("#isMinAmt_zjq").is(':checked');
			commisionRadio = $("#commisionRatio_zjq").val();
		}else if(jcType == "bf"){
			zhushu = $("#lab_Num_standrad_bf").text();
			current_money = $("#investField_standrad_bf").text();
			current_money1 = $("#investField_standrad_bf").text();
			buyAmt = $("#buyAmt_bf").val();
			safeAmt = $("#safeAmt_bf").val();
			visibility = $("input[name='visibility_bf']:checked").val();// 保密类型
			minAmt = $("#minAmt_bf").val();
			isMinAmt_zjq = $("#isMinAmt_bf").is(':checked');
			commisionRadio = $("#commisionRatio_bf").val();
		}else if(jcType == "bqc"){
			zhushu = $("#lab_Num_standrad_bqc").text();
			current_money = $("#investField_standrad_bqc").text();
			current_money1 = $("#investField_standrad_bqc").text();
			buyAmt = $("#buyAmt_bqc").val();
			safeAmt = $("#safeAmt_bqc").val();
			visibility = $("input[name='visibility_bqc']:checked").val();// 保密类型
			minAmt = $("#minAmt_bqc").val();
			isMinAmt_zjq = $("#isMinAmt_bqc").is(':checked');
			commisionRadio = $("#commisionRatio_bqc").val();
		}else{
			zhushu = $("#lab_Num_standrad").text();
			current_money = $("#investField_standrad").text();
			current_money1 = $("#investField_standrad").text();
			buyAmt = $("#buyAmt").val();
			safeAmt = $("#safeAmt").val();
			visibility = $("input[name='visibility']:checked").val();// 保密类型
			minAmt = $("#minAmt").val();
			isMinAmt_zjq = $("#isMinAmt").is(':checked');
			commisionRadio = $("#commisionRatio").val();
		}
		
		var goumaifangshi = $("#goumaifangshi").val();//获取购买方式，如：代购  追号
		var zhuanghujine = $("#topLogin_money").text();//获取账户余额
		var dangqianwanfa = $("#dangqianwanfa").val();//获取一级玩法，如3D的直选  组六 组三
		var erjiwanfa = $("#erjiwanfa").val();//获取二级玩法，如3D的直选中的 普通投注、和值
		
		var zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		if(zhuanghuyue<=0) {
			zhuanghuyue = 0;
		}
		//合买部分内容
		if($("#daiGouHemai").val()=="hemai"){
			$("#xiaofei_hemai").text(current_money);
			if (!isMinAmt_zjq) {
				$("#minAmt_alert").text(1);
			}else{
				$("#minAmt_alert").text(minAmt);
			}
			$("#safeAmt_alert").text(safeAmt);
			$("#buyAmt_alert").text(buyAmt);
			$("#commisionRatio_alert").text(commisionRadio);
			if(visibility==0){
				$("#visibility_alert").text("立即完全公开");
			}else if(visibility==1){
				$("#visibility_alert").text("完全保密");
			}else if(visibility==2){
				$("#visibility_alert").text("截止后完全公开");
			}else if(visibility==3){
				$("#visibility_alert").text("立即对跟单者公开");
			}else if(visibility==4){
				$("#visibility_alert").text("截止后对跟单者公开");
			}
			$("#hemai_details").removeAttr("class");
			$("#xiaofei").html("¥"+(Number(buyAmt)+Number(safeAmt))); // 本次消费
			var zhuanghuyue = Number(zhuanghujine)-Number(buyAmt)-Number(safeAmt);
			if(zhuanghuyue < 0){zhuanghuyue = 0;}
			$("#zhanghujine").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
		}
		if(erjiwanfa==decodeURI(EncodeUtf8("单关投注"))) {
			//合买部分内容隐藏
			if($("#daiGouHemai").val()=="daigou"){
				$("#hemai_details").attr("class","none");
				$("#xiaofei").html("¥" + parseFloat(current_money1).toFixed(2)); // 本次消费
				$("#zhanghujine").html("¥" + parseFloat(zhuanghuyue).toFixed(2));//账户余额
			}
			$("#standrad_alert").show();
			$("#danshi_alert").hide();
			$("#qihaofanan").html(lotno + dangqianwanfa + " "+ goumaifangshi + "方案"); //彩种 期号 投注方式 方案 
			var zhumaArray = new Array();
			var alert_zhuma = $("#alert_zhuma").text();
			zhumaArray = alert_zhuma.split("^");
			for(var i = 0;i < zhumaArray.length;i++) {
				$("#alert_z"+(i+1)).text(zhumaArray[i]);
			}
		}else if(erjiwanfa==decodeURI(EncodeUtf8("过关投注"))){
			//合买部分内容隐藏
			if($("#daiGouHemai").val()=="daigou"){
				$("#hemai_details").attr("class","none");
				$("#xiaofei").html("¥" + parseFloat(current_money1).toFixed(2)); // 本次消费
				$("#zhanghujine").html("¥" + parseFloat(zhuanghuyue).toFixed(2));//账户余额
			}
			$("#standrad_alert").show();
			$("#danshi_alert").hide();
			$("#qihaofanan").html(lotno + dangqianwanfa + " "+ goumaifangshi + "方案"); //彩种 期号 投注方式 方案 
			var zhumaArray = new Array();
			var alert_zhuma = $("#alert_zhuma").text();
			zhumaArray = alert_zhuma.split("^");
			for(var i = 0;i < zhumaArray.length;i++) {
				$("#alert_z"+(i+1)).text(zhumaArray[i]);
			}
		}else if(erjiwanfa==decodeURI(EncodeUtf8("文件上传"))){
			current_money=$("#investField").text();
			zhuanghuyue = Number(zhuanghujine)-Number(current_money);
			$("#xiaofei").html("¥" + parseFloat(current_money).toFixed(2)); // 本次消费
			$("#zhanghujine").html("¥" + parseFloat(zhuanghuyue).toFixed(2));//账户余额
		}
	}
	//当前玩法 如：直选、组选六、组选三
	function setDangqianwanfa(name) {
		$("#dangqianwanfa").val(name);
	}
	//当前二级玩法 如：普通投注、和值
	function setErjiwanfa(name) {
		$("#erjiwanfa").val(name);
		if(name=="过关投注"){
			$("#valueType").val("1");
		}
		if(name=="单关投注"){
			$("#valueType").val("0");
		}
		if(name=="文件上传"){
			$("#valueType").val("1");
		}
	}
	//购买方式 如：代购，追号
	function setGoumaifangshi(name) {
		$("#goumaifangshi").val(name);
	}
</script>
<div style="display: none;">
	<span id="alert_zhuma"></span>
</div>
<!-- 弹出框 结束 -->