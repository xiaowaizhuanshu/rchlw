<%@ page contentType="text/html; charset=utf-8"%>
	<!-- 弹出框 开始 -->
  <div id="touzhuOpen1" style="display: none;" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow "  >
		<div class="WindowTittle"><h3 id="qihaofanan1"></h3><span class="Alertclose" onclick="loginShow('touzhuOpen1', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span></div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<thead>
						<tr id="hemai_details" class="none">
							<th style="background:#fafafa;">方案详情</th>
							<td colspan="4">
								<table class="PlanContentTable"  width="100%"cellspacing="0" cellpadding="0">
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
							<th rowspan="2" style="background:#fafafa;">方案信息</th><th>玩法</th><th>注数</th><th>倍数</th><td>总金额</td>
						</tr>
						<tr>
							<th id="touzhufangshi1"></th><th id="zhushu1"></th><th id="beishu1"></th><td id="zongJine1"></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>投注内容</th><td colspan="4" id="zhumachuan1"></td>
						</tr>
						<tr>
							<th>认购信息</th><td colspan="4"> 您本次购买需要消费<b><span id="xiaofei1"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine1"></span></b>元。 </td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5" class="AscertainBuy"><input class="BtnDisable" type="button" id="norepeat" onclick="norepeat(this);touzhu();" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));"><span><a onclick="clearForm();loginShow('touzhuOpen1', false);" title="返回修改">返回修改</a></span></td>
						</tr>
					</tfoot>
				</table>
			</div>
	</div>
</div>



<div style="display: none;" id="touzhuOpen2" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow " >
		<div class="WindowTittle">
			<h3 id="qihaofanan2"></h3>
			<span class="Alertclose" onclick="loginShow('touzhuOpen2', false);">&#160;</span>
		</div>
		<div class="InsideBorder">
			<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th rowspan="2" style="background:#fafafa;">方案信息</th><th>玩法</th><th>追号期数</th><th>开始期号</th><th>单期注数</th><th>追号总金额</th><td>中奖后自动停止</td>
					</tr>
					<tr>
						<th id="touzhufangshi2">复式追号</th>
						<th>共<span id="zongqishu"></span>期</th>
						<th id="beginqihao"></th>
						<th>每期<span id="zhushu2"></span>注</th>
						<th id="zongJine2"></th>
						<td id="stopType">否</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>投注内容</th><td colspan="6" id="zhumachuan2"> </td>
					</tr>
					<tr>
						<th>认购信息</th><td colspan="6"> 您本次购买需要消费<b><span  id="xiaofei2"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine2"></span></b>元。 </td>
					</tr>
					<tr>
						<td colspan="7" class="AscertainBuy"><input class="BtnDisable" type="button" onclick="norepeat(this);touzhu();"><span><a href="javaScript:clearForm();loginShow('touzhuOpen2', false);" title="返回修改">返回修改</a></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
<div style="display: none;" id="touzhuOpen3" class="WindowCenter">
<div class="AlertWindow PlanBuyWindow" >
		<div class="WindowTittle">
			<h3 id="qihaofanan2"></h3>
			<span class="Alertclose" onclick="loginShow('touzhuOpen3', false);">&#160;</span>
		</div>
			<div class="InsideBorder">
				<table class="PlanCon" cellpadding="0" cellspacing="0" width="100%">
					<tbody>
						<tr>
							<td colspan="6"> 您购买的此套餐期数153期，金额为306元，请确认！ </td>
						</tr>
						<tr>
							<th colspan="7" class="AscertainBuy"><input class="BaseBtn" type="button" onclick="norepeat(this);touzhu();" value="确认购买"></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
</div>
<div style="display: none;" class="WindowCenter" id="touzhuOpen4">
	<div class="AlertWindow PlanBuyWindow" >
		<div class="WindowTittle">
			<span class="Alertclose" onclick="loginShow('touzhuOpen3', false);">&#160;</span>
		</div>
			<div class="InsideBorder">
				<table class="PlanContent " cellpadding="0" cellspacing="0" width="100%">
					<tbody>
						<tr>
							<td colspan="6"> 您的身份信息尚未完善，请先完善身份信息后再购买此套餐。 </td>
						</tr>
						<tr>
							<th colspan="7" class="AscertainBuy"><a href="/rchlw/function/rules/user.jsp?key=34" target="_blank">完善信息</a></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
<div style="display: none;" id="touzhuOpen5" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow" >
		<div class="WindowTittle">
			<span class="Alertclose" onclick="loginShow('touzhuOpen5', false);">&#160;</span>
		</div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<tbody>
						<tr>
							<td colspan="6"> 您已参加过此活动！ </td>
						</tr>
						<tr>
							<th colspan="7" class="AscertainBuy"><a href="/rchlw/function/rules/ssq_allyears.html">进入活动专区</a></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
<div style="display: none;" id="touzhuOpen6" class="WindowCenter">
<div class="AlertWindow PlanBuyWindow ">
	<div class="WindowTittle"><h3 id="qihaofanan3">双色球 第2011208期 普通投注 赠送方案</h3><span class="Alertclose" onclick="clearData();loginShow('touzhuOpen6', false);;" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span></div>
	<div class="InsideBorder">
		<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
			<thead id="fangAn">
				<tr>
					<th rowspan="1" style="background:#fafafa;" id="fangAnTitle">方案信息</th><th>玩法</th><th>注数</th><th>倍数</th><td>总金额</td>
				</tr>
				
			</thead>
			<tbody>
				<tr>
					<th>投注内容</th><td colspan="4" id="zhumachuan3"></td>
				</tr>
				<tr>
					<th>认购信息</th><td colspan="4"> 您本次购买需要消费<b><span id="xiaofei3"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine3"></span></b>元。 </td>
				</tr>
				<tr>
					<th colspan="5" class="AscertainBuy"><input class="BtnDisable" type="button" id="norepeat" onclick="norepeat(this);touzhu();" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));"><span><a  onclick="clearData();clearForm();loginShow('touzhuOpen6', false);" title="返回修改">返回修改</a></span></th>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</div>
<form name="BettingAllForm" id="BettingAllForm" action="/rchlw/user/bet!bettingAll" method="post" target="_blank">
	     <input type="hidden" id="codeAll" name="codeAll" value="" />
	
	</form>
<script>
	//当前玩法 如：直选、组选六、组选三
	function setDangqianwanfa(name)
	{
		 $("#dangqianwanfa").val(name);
	}
	//当前二级玩法 如：普通投注、和值
	function setErjiwanfa(name)
	{
		 $("#erjiwanfa").val(name);
	}
	//购买方式 如：代购，追号
		function setGoumaifangshi(name)
	{
		 $("#goumaifangshi").val(name);
		 if($("#isZhuihao") != null && $("#isZhuihao") !='undefinde'){
			   if(name=='追号'){
				   $("#isZhuihao").val(1);
				   $("#SASA").css("display","none");
				   $("#ZhuiHao").css("display","block");
				   $("#HeMaiTiShi").css("display","none");
				   $("#ZengSong").css("display","none");
				}
			   else if(name=='合买'){
				   $("#isZhuihao").val(0);
				   $("#HeMaiTiShi").css("display","block");
				   $("#ZhuiHao").css("display","none");
				   $("#SASA").css("display","none");
				   $("#ZengSong").css("display","none");
				}
			   else if(name=='代购'){
				   $("#isZhuihao").val(0);
				   $("#HeMaiTiShi").css("display","none");
				   $("#ZhuiHao").css("display","none");
				   $("#SASA").css("display","block");
				   $("#ZengSong").css("display","none");
				}
			   else if(name=='赠送'){
				   $("#isZhuihao").val(0);
				   $("#HeMaiTiShi").css("display","none");
				   $("#ZhuiHao").css("display","none");
				   $("#SASA").css("display","none");
				   $("#ZengSong").css("display","block");
				   $("#tb_Multiple").val(1);
				   updateMultipleTotalMoney();
				}
			   else if(name=='追加'){
				   $("#isZhuihao").val(0);
				   $("#HeMaiTiShi").css("display","none");
				   $("#ZhuiHao").css("display","none");
				   $("#SASA").css("display","none");
				   $("#ZengSong").css("display","block");
				}
			   else{
					$("#isZhuihao").val(0);
				}
		 }
	}

	//from 提交	
	function submitCode()
		{
			 $("#BettingAllForm").submit();
		}
	//清空form
	function clearForm(){
		$("#codeAll").val('');
		}
    //设置 弹出框的显示内容
	function htmlMsg(isZhuihao){
		var lotno=$("#lotNo").val();//彩种
		if(lotno=='F47103'){
			lotno='福彩3D';
		}if(lotno=='F47104'){
			lotno='双色球';
		}if(lotno=='F47102'){
			lotno='七乐彩';
		}if(lotno=='T01001'){
			lotno='大乐透';
		}if(lotno=='T01002'){
			lotno='排列三';
		}if(lotno=='T01011'){
			lotno='排列五';
		}if(lotno=='T01013'){
			lotno='22选5';
		}if(lotno=='T01009'){
			lotno='七星彩';
		}if(lotno=='T01007'){
			lotno='时时彩';
			if($("#dangqianwanfa").val()=='一星' || $("#dangqianwanfa").val()=='大小单双'){
				$("#erjiwanfa").val('');
				}
			if($("#dangqianwanfa").val()=='三星'){
				$("#erjiwanfa").val('直选');
				}
		}if(lotno=='T01010'){
			lotno='江西11选5';
		}if(lotno=='T01012'){
			lotno='十一运夺金';
		}
		var qihao=$("#qihao").text();//获取期号
		var beishu = 0,current_money = 0,zengMultiple = 0;
		var zhushu =$("#lab_Num").text();//获取注数
		beishu =$("#tb_Multiple").val();//获取倍数
		current_money = $("#investField").text();//获取投注金额
        var zhumachuan = $("#codes li").text();//获取投注框里的注码
		var zhumachuanStr="";
		var zhumachuanHtml = "<ul>";
		if(zhumachuan.indexOf("删除")>-1){
		     zhumachuanStr = zhumachuan.split("删除"); 
		}

		var zhumachuanHtmlAll="";
		for(var i=0 ; i< zhumachuanStr.length;i++){
			if(zhumachuanStr[i].indexOf("查看详情")==-1){
				zhumachuanHtmlAll += "<p>"+zhumachuanStr[i]+"</p>"; //拼接注码到注码框中
			}else{
				zhumachuanStr[i]=zhumachuanStr[i].replace("查看详情"," ");
				zhumachuanHtmlAll += "<p>"+zhumachuanStr[i]+"</p>";
			}
		}
        clearForm();
		$("#codeAll").val(zhumachuanHtmlAll);
		
		for(var i=0 ; i< zhumachuanStr.length;i++){
			if(i==3){//如果大于3
			     zhumachuanHtml +="<li id='gengduo'><a style='color:#0F3F94; text-decoration:underline;' title='查看更多注码'  onclick='submitCode();' href='javaScript:;'>查看全部</a></li>"; //拼接注码到注码框中
			     break;
				}
				zhumachuanHtml +="<li>"+zhumachuanStr[i]+"</li>"; //拼接注码到注码框中
		}
		var goumaifangshi=$("#goumaifangshi").val();//获取购买方式，如：代购  追号
		var isZhuihao=0;//获取购买方式，如：代购  追号
		if($("#isZhuihao") != null){
			isZhuihao = $("#isZhuihao").val();
		}
        var zhuihaoqishu=1;
		if(goumaifangshi=='追号' || isZhuihao == 1){
			zhuihaoqishu = $("#betchNum").val();
		}
		var zhuanghujine = $("#topLogin_money").text();//获取账户余额
		var dangqianwanfa = $("#dangqianwanfa").val();//获取一级玩法，如3D的直选  组六 组三
		var erjiwanfa = $("#erjiwanfa").val();//获取二级玩法，如3D的直选中的 普通投注、和值
		if(goumaifangshi != '追号' && isZhuihao != 1){//不是追号
			if($("#daiGouHemai").val()=="zengcai"){
				$("#qihaofanan3").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				var touzhufangshi = dangqianwanfa+erjiwanfa; //投注方式
		        $("#zhumachuan3").html(zhumachuanHtml); //注码串
				var ownMultiple = $("#ownMultiple").val();
				var ownMoney = Number($("#ownMoney1").html());
				var zengMoney = Number($("#zengMoney").html());
				zhushu = Number($("#investField").text())/2;
				if(ownMoney>0){
					$("#fangAn").append("<tr><th>"+touzhufangshi+"(自购)</th><th>"+zhushu+"</th><th>"+ownMultiple+"</th><td>"+ownMoney+"</td></tr>");
				}
				if(zengMoney>0){
					var count = 1;
					for(var a=1;a<21;a++){
						
						//判断是不是数字的正则表达式
						var reg = /^[\d]+$/;
						if(reg.test(Number($("#multiple"+a).val()))){
							var friendMultiple = $("#multiple"+a).val();
							var friendMoney = $("#money"+a).html();
							$("#fangAn").append("<tr><th>"+touzhufangshi+"(赠送"+count+")</th><th>"+zhushu+"</th><th>"+friendMultiple+"</th><td>"+friendMoney+"</td></tr>");
							count += 1;
						}
					}
				}

				var rowspan = Number($("#fangAnTitle").attr("rowspan")) + Number($("#friendNum").html());
				

				if(ownMoney>0){
					rowspan += 1;
				}
				$("#fangAnTitle").attr("rowspan",rowspan);                         
		        $("#zhumachuan3").html(zhumachuanHtml+"</ul>"); //注码串                              
		        
			}else{
				$("#qihaofanan1").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				$("#touzhufangshi1").html(dangqianwanfa+erjiwanfa); //投注方式
				$("#zongJine1").html("¥"+current_money+"元"); // 投注金额
				$("#beishu1").html(beishu); //倍数
				$("#zhushu1").html(zhushu); //注数
		        $("#zhumachuan1").html(zhumachuanHtml); //注码串
			}


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
					$("#xiaofei1").html("¥"+(Number($("#buyAmt").val())+Number($("#safeAmt").val()))); // 本次消费
					var zhuanghuyue = Number(zhuanghujine)-Number($("#buyAmt").val())-Number($("#safeAmt").val());
					if(zhuanghuyue < 0){zhuanghuyue = 0;}
					$("#zhanghujine1").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
				}else if($("#daiGouHemai").val()=="zengcai"){
					$("#xiaofei3").html("¥"+Number($("#lastMoney").html())); // 本次消费
					var zhuanghuyue = Number(zhuanghujine)-Number($("#lastMoney").html());
					if(zhuanghuyue < 0){zhuanghuyue = 0;}
					$("#zhanghujine3").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
				}else{
					$("#hemai_details").attr("class","none");
					$("#xiaofei1").html("¥"+current_money*zhuihaoqishu); // 本次消费
					var zhuanghuyue = Number(zhuanghujine)-Number(current_money)*Number(zhuihaoqishu);
					if(zhuanghuyue < 0){zhuanghuyue = 0;}
					$("#zhanghujine1").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
				}
		  		
		//if  结束
		 }else{
				$("#qihaofanan2").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				$("#touzhufangshi2").html(dangqianwanfa+erjiwanfa); //投注方式
				
				$("#beginqihao").html($("#diyiqiQihao").val()); //开始期号
				$("#beishu2").html(beishu); //倍数
				$("#zhushu2").html(zhushu); //注数
				$("#zongqishu").html($("#zongQishu").val()); //期数
				
		        $("#zhumachuan2").html(zhumachuanHtml); //注码串
				
		        
		        //var koukuan = $("#fenqikoukuan").attr("className");
		        if($("#fenqikoukuan").hasClass("selected")){
		        	if($("#payStop").val()=="1"){
						$("#stopType").html("单期奖金≥"+$("#danqiJiangjinId1").val()+"元终止追号");
				        }else{
				        	$("#stopType").html("否");
					  }
		    		$("#payType").val("0");
		    		if($("#zhuihaoDanqi1")!=null||$("#zhuihaoDanqi1")!=undefined){
		    			if($("#zhuihaoDanqi1").attr('checked')=='checked'){
		    				$("#payStop").val("1");
		    			}else{
		    				$("#payStop").val("0");
		    			}
		    		}
		    		if($("#zhuihaoSms")!=null||$("#zhuihaoSms")!=undefined){
		    			if($("#zhuihaoSms").attr('checked')=='checked'){
		    				$("#smsType").val("1");
		    			}else{
		    				$("#smsType").val("0");
		    			}
		    		}
		    	}else if($("#tiqiankoukuan").hasClass("selected")){
		    		if($("#payStop").val()=="1"){
						$("#stopType").html("单期奖金≥"+$("#danqiJiangjinId2").val()+"元终止追号");
				        }else{
				        	$("#stopType").html("否");
					  }
		    		$("#payType").val("1");
		    		if($("#zhuihaoDanqi2")!=null||$("#zhuihaoDanqi2")!=undefined){
		    			if($("#zhuihaoDanqi2").attr('checked')=='checked'){
		    				$("#payStop").val("1");
		    			}else{
		    				$("#payStop").val("0");
		    			}
		    		}
		    		
		    	}
		    	var zhuihaoStr = $("#zhuihaoJson").val();
		    	var payType = $("#payType").val();
		    	var zhuanghuyue = 0;
		    	if(payType == "0"){
		    		    current_money = $("#allqiMoney").val();
		    		    var bencixiaofei = $("#diyiqiMoney").val();
		    		    if(qihao != $("#diyiqiQihao").val()){
		    		    	bencixiaofei = 0;
			    		    }
		    		    $("#xiaofei2").html("¥"+bencixiaofei);
		    		    $("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		    		    zhuanghuyue = Number(zhuanghujine)-Number(bencixiaofei);
		        	}else if(payType == "1"){
		        		current_money = $("#allqiMoney").val();
		        		$("#xiaofei2").html("¥"+current_money);
		        		$("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		        		zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		            }else{
		            	$("#xiaofei2").html("¥"+current_money*zhuihaoqishu); // 本次消费
		            	$("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		            	zhuanghuyue = Number(zhuanghujine)-Number(current_money)*Number(zhuihaoqishu);
		                }
		
				if(zhuanghuyue < 0){
					zhuanghuyue = 0;
					}
				$("#zhanghujine2").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
      		}//else 结束

    }
	   
 </script>
 <!-- 弹出框 结束 -->