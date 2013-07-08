<%@ page contentType="text/html; charset=utf-8"%>

<!-- 弹出框 开始 -->

<div style="display: none;" id="touzhuOpen1" class="WindowCenter">
<div class="AlertWindow FootblaaPlanWindow" id="standrad_alert">
	<div class="WindowTittle">
	  <h3 id="qihaofanan"></h3>
	  <span class="Alertclose"  onclick="loginShow('touzhuOpenShouye',false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span>
	</div>
		<div class="InsideBorder">
			<table class="PlanCon" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
			<tr id="hemai_details" class="none" >
					<td>方案详情</td>
					<th>
					
						<table class="PlanContentTable" cellpadding="0" cellspacing="0" width="100%">
							<thead>
								<tr>
									<th>方案金额</th><th>最低认购</th><th>保底金额</th><th>发起人认购</th><th>发起人提成</th><th>方案保密</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td><i id="xiaofei_hemai">-</i>元</td>
									<td><i id="minAmt_alert">-</i>元</td>
									<td><i id="safeAmt_alert">-</i>元</td>
									<td><i id="buyAmt_alert">-</i>元</td>
									<td><i id="commisionRatio_alert">-</i>%</td>
									<td><i id="visibility_alert">完全保密</i></td>
								</tr>
							</tbody>
						</table>
						
					</th>
				</tr>
				<tr>
					<td width="70">方案内容</td>
					<th>
						
						<table class="PlanContentTable" cellpadding="0" cellspacing="0" width="100%">
							<thead>
								<tr>
									<td colspan="17">
										投注选号：<b><span id="alert_one"></span></b>个单选、<b><span id="alert_two"></span></b>个双选、<b><span id="alert_all"></span></b>个三选
									</td>
								</tr>		
							</thead>
							<tbody>
								<tr>
									<th width="50">场次</th>
									<th width="44" colspan="2">1</th>
									<th width="44" colspan="2">2</th>
									<th width="44" colspan="2">3</th>
									<th width="44" colspan="2">4</th>
									<th width="50">倍数</th>
									<th>金额(元)</th>
								</tr>
								</tbody>
								<tfoot>
								<tr>
									<td>对阵</td>
									<td ><span id="alert_hteam_1"></span></td>
									<td ><span id="alert_vteam_1"></span></td>
									<td ><span id="alert_hteam_2"></span></td>
									<td ><span id="alert_vteam_2"></span></td>
									<td ><span id="alert_hteam_3"></span></td>
									<td ><span id="alert_vteam_3"></span></td>
									<td ><span id="alert_hteam_4"></span></td>
									<td ><span id="alert_vteam_4"></span></td>
									<td>&#160;</td>
									<td>&#160;</td>
								</tr>
								<tr>
									<td>选号</td>
									<td id="alert_z1"></td>
									<td id="alert_z2"></td>
									<td id="alert_z3"></td>
									<td id="alert_z4"></td>
									<td id="alert_z5"></td>
									<td id="alert_z6"></td>
									<td id="alert_z7"></td>
									<td id="alert_z8"></td>
									<td id="beishu"></td>
									<td><b id="zongJine"></b></td>
								</tr>
							</tfoot>
						</table>
						
					</th>
				</tr>
				<tr>
					<th>认购信息</th><td>您本次购买需消费<b><span id="xiaofei"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine"></span></b>元</td>
				</tr>
				</tbody>
				<tfoot>
				<tr>
					<th colspan="2" class="AscertainBuy"><input class="BaseBtn" id="norepeat" type="button" value="确认购买" onclick="norepeat(this);touzhu();" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));"><span class="light" onclick="loginShow('touzhuOpen1', false);">返回修改&gt;&gt;</span></th>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>

<div class="AlertWindow PlanBuyWindow"  id="danshi_alert" style="display: none;">
		<div class="WindowTittle">
		  <h3 id="qihaofanan_danshi"></h3>
		  <span class="Alertclose"  onclick="loginShow('touzhuOpen1',false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span>
		</div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<thead>
					<tr id="hemai_details1" class="none" >
						<th style="background:#fafafa;">方案详情</th>
						<td colspan="4">
							<table class="PlanContentTable" cellpadding="0" cellspacing="0" width="100%">
								<tbody>
									<tr>
										<th>方案金额</th><th>最低认购</th><th>保底金额</th><th>发起人认购</th><th>发起人提成</th><th>方案保密</th>
									</tr>
									<tr>
										<td><i id="xiaofei_hemai1">-</i>元</td>
										<td><i id="minAmt_alert1">-</i>元</td>
										<td><i id="safeAmt_alert1">-</i>元</td>
										<td><i id="buyAmt_alert1">-</i>元</td>
										<td><i id="commisionRatio_alert1">-</i>%</td>
										<td><i id="visibility_alert1">完全保密</i></td>
									</tr>
								</tbody>
							</table>
							
						</td>
					</tr>
						<tr>
							<th rowspan="2">方案信息</th><th>玩法</th><th>注数</th><th>倍数</th><th>总金额</th>
						</tr>
						<tr>
							<th id="touzhufangshi_danshi"></th><th id="zhushu_danshi"></th><th id="beishu_danshi"></th><th id="zongJine_danshi"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>投注内容</th><td colspan="4" id="zhumachuan"></td>
						</tr>
						<tr>
							<th>认购信息</th><td colspan="4"> 您本次购买需要消费<b><span id="xiaofei_danshi"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine_danshi"></span></b>元。 </td>
						</tr>
						</tbody>
						<tfoot>
						<tr>
							<th colspan="5" class="AscertainBuy"><input class="BaseBtn" type="button" id="norepeat" onclick="norepeat(this);touzhu();" value="确认购买" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));"><span class="light" onclick="loginShow('touzhuOpen1', false);">返回修改</span></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		</div>
<script>
	//设置 弹出框的显示内容
	function htmlMsg() {
		var lotno = "四场进球";//彩种
		
		var qihao = $("#qihao").text();//获取期号
		var beishu = $("#tb_Multiple").val();//获取倍数
		var zhushu = $("#lab_Num").text();//获取注数
		var current_money = $("#investField").text();//获取投注金额
		var current_money1 = $("#investField").text();//获取投注金额
		var goumaifangshi = $("#goumaifangshi").val();//获取购买方式，如：代购  追号
		var zhuanghujine = $("#topLogin_money").text();//获取账户余额
		var dangqianwanfa = $("#dangqianwanfa").val();//获取一级玩法，如3D的直选  组六 组三
		var erjiwanfa = $("#erjiwanfa").val();//获取二级玩法，如3D的直选中的 普通投注、和值
		
		var zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		if(zhuanghuyue<=0) {
			zhuanghuyue = 0;
		}
		
		
		
		if(erjiwanfa==decodeURI(EncodeUtf8("普通投注"))) {

			//合买部分内容
			if($("#daiGouHemai").val()=="hemai"){
				$("#xiaofei_hemai").text(current_money);
				if (!$("#isMinAmt").is(':checked')) {
					$("#minAmt_alert").text(1);
				}else{
					$("#minAmt_alert").text($("#minAmt").val());
				}
				$("#safeAmt_alert").text($("#safeAmt").val());
				$("#buyAmt_alert").text($("#buyAmt").val());
				$("#commisionRatio_alert").text($("#commisionRatio").val());
				var visibility = $("input[name='visibility']:checked").val();// 保密类型
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
				current_money1 = (Number($("#buyAmt").val())+Number($("#safeAmt").val())); // 本次消费
				zhuanghuyue = Number(zhuanghujine)-Number($("#buyAmt").val())-Number($("#safeAmt").val());
			}else{
				$("#hemai_details").attr("class","none");
			}
			
			$("#standrad_alert").show();
			$("#danshi_alert").hide();
			$("#qihaofanan").html(lotno + " 第" + qihao + "期 " + dangqianwanfa + erjiwanfa + " "+ goumaifangshi + "方案"); //彩种 期号 投注方式 方案 
			$("#touzhufangshi").html(dangqianwanfa + erjiwanfa); //投注方式
			$("#zongJine").html("¥" + parseFloat(current_money).toFixed(2) + "元"); // 投注金额
			$("#beishu").html(beishu); //倍数
			$("#zhushu").html(zhushu); //注数
			$("#xiaofei").html("¥" + parseFloat(current_money1).toFixed(2)); // 本次消费
			$("#zhanghujine").html("¥" + parseFloat(zhuanghuyue).toFixed(2));//账户余额
			for(var i = 1;i<=4;i++) {
				$("#alert_hteam_"+i).text($("#hteam_"+i).text());
				$("#alert_vteam_"+i).text($("#vteam_"+i).text());
			}
			
			var two = Number($("#two").text());
			var all = Number($("#all").text());
			var one = 8 - two - all;
			$("#alert_one").text(one);
			$("#alert_two").text(two);
			$("#alert_all").text(all);
			
			var zhumaArray = new Array();
			var alert_zhuma = $("#alert_zhuma").text();
			zhumaArray = alert_zhuma.split(",");
			for(var i = 0;i < zhumaArray.length;i++) {
				$("#alert_z"+(i+1)).text(zhumaArray[i]);
			}
		}else if(erjiwanfa==decodeURI(EncodeUtf8("单式上传"))) {
			//合买部分内容
			if($("#daiGouHemai").val()=="hemai"){
				$("#xiaofei_hemai1").text(current_money);
				if (!$("#isMinAmt").is(':checked')) {
					$("#minAmt_alert1").text(1);
				}else{
					$("#minAmt_alert1").text($("#minAmt").val());
				}
				$("#safeAmt_alert1").text($("#safeAmt").val());
				$("#buyAmt_alert1").text($("#buyAmt").val());
				$("#commisionRatio_alert1").text($("#commisionRatio").val());
				var visibility = $("input[name='visibility']:checked").val();// 保密类型
				if(visibility==0){
					$("#visibility_alert1").text("立即完全公开");
				}else if(visibility==1){
					$("#visibility_alert1").text("完全保密");
				}else if(visibility==2){
					$("#visibility_alert1").text("截止后完全公开");
				}else if(visibility==3){
					$("#visibility_alert1").text("立即对跟单者公开");
				}else if(visibility==4){
					$("#visibility_alert1").text("截止后对跟单者公开");
				}
				$("#hemai_details1").removeAttr("class");
				current_money1 = (Number($("#buyAmt").val())+Number($("#safeAmt").val())); // 本次消费
				zhuanghuyue = Number(zhuanghujine)-Number($("#buyAmt").val())-Number($("#safeAmt").val());
			}else{
				$("#hemai_details").attr("class","none");
			}
			
			$("#standrad_alert").hide();
			$("#danshi_alert").show();
			$("#qihaofanan_danshi").html(lotno + " 第" + qihao + "期 " + dangqianwanfa + erjiwanfa + " "+ goumaifangshi + "方案"); //彩种 期号 投注方式 方案 
			$("#touzhufangshi_danshi").html(dangqianwanfa + erjiwanfa); //投注方式
			$("#zongJine_danshi").html("¥" + parseFloat(current_money).toFixed(2) + "元"); // 投注金额
			$("#beishu_danshi").html(beishu); //倍数
			$("#zhushu_danshi").html(zhushu); //注数
			$("#xiaofei_danshi").html("¥" + parseFloat(current_money1).toFixed(2)); // 本次消费
			$("#zhanghujine_danshi").html("¥" + parseFloat(zhuanghuyue).toFixed(2));//账户余额
			
			var zhumachuan = $("#codes li").text();//获取投注框里的注码
			var zhumachuanStr="";
			var zhumachuanHtml = "";
			if(zhumachuan.indexOf("删除")>-1){
			     zhumachuanStr = zhumachuan.split("删除"); 
			}
			var zhumachuanHtmlAll="";
	        for(var i=0 ; i< zhumachuanStr.length;i++){
	        	if(zhumachuanStr[i].indexOf("查看详情")==-1) {
	        		zhumachuanHtmlAll += "<p>"+zhumachuanStr[i]+"</p>"; //拼接注码到注码框中
	        	}else {
	        		zhumachuanStr[i] = zhumachuanStr[i].replace("查看详情","");
	        		zhumachuanHtmlAll += "<p>"+zhumachuanStr[i]+"</p>";
	        	}
				
			}
			$("#codeAll").val(zhumachuanHtmlAll);
			for(var i=0 ; i< zhumachuanStr.length-1;i++){
				
				if(i==3){//如果大于3
			     zhumachuanHtml +="<li id='gengduo'><a title='查看更多注码'  onclick='submitCode();' href='javaScript:;'>查看全部</a></li>"; //拼接注码到注码框中
			     break;
				}
				zhumachuanHtml +="<li>"+zhumachuanStr[i]+"</li>"; //拼接注码到注码框中
			}
			$("#zhumachuan").html(zhumachuanHtml); //注码串
		}
		
	}
	//当前玩法 如：直选、组选六、组选三
	function setDangqianwanfa(name) {
		$("#dangqianwanfa").val(name);
	}
	//当前二级玩法 如：普通投注、和值
	function setErjiwanfa(name) {
		$("#erjiwanfa").val(name);
	}
	//购买方式 如：代购，追号
	function setGoumaifangshi(name) {
		$("#goumaifangshi").val(name);
		 if(name=='合买'){
			   $("#HeMaiTiShi").css("display","block");
			   $("#SASA").css("display","none");
			}
		   else if(name=='代购'){
			   $("#HeMaiTiShi").css("display","none");
			   $("#SASA").css("display","block");
			}
	}
</script>
<div style="display: none;">
	<span id="alert_zhuma"></span>
</div>
<!-- 弹出框 结束 -->