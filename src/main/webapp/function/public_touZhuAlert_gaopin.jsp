<%@ page contentType="text/html; charset=utf-8"%>
	<!-- 弹出框 开始 -->
  <div id="touzhuOpen1" style="display: none;" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow"  >
		<div class="WindowTittle"><h3 id="qihaofanan1"></h3><span class="Alertclose" onclick="loginShow('touzhuOpen1', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span></div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th rowspan="2" style="background:#fafafa;">方案信息</th><th>玩法</th><th>注数</th><th>倍数</th><th>总金额</th>
						</tr>
						<tr>
							<th id="touzhufangshi1"></th><th id="zhushu1"></th><th id="beishu1"></th><th id="zongJine1"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>投注内容</th><td colspan="4" id="zhumachuan1"></td>
						</tr>
						<tr>
							<th>认购信息</th><td colspan="4"> 您本次购买需要消费<b><span id="xiaofei1"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine1"></span></b>元。 </td>
						</tr>
						<tr>
							<th colspan="5" class="AscertainBuy">
							<input class="BtnDisable" type="button" id="norepeat" onclick="norepeat(this);touzhu();" 
							onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));"
							onmouseup="BtnUp($(this));">
							<span class="light" onclick="clearForm();loginShow('touzhuOpen1', false);">返回修改</span></th>
						</tr>
					</tbody>
				</table>
			</div>
	</div>
</div>
<div style="display: none;" id="touzhuOpen2" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow" >
		<div class="WindowTittle"><h3 id="qihaofanan2"></h3><span class="Alertclose" onclick="loginShow('touzhuOpen2', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span></div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th rowspan="2" style="background:#fafafa;">方案信息</th><th>玩法</th><th>追号期数</th><th>开始期号</th><th>单期注数</th><th>追号总金额</th><th>中奖后自动停止</th>
						</tr>
						<tr>
							<th id="touzhufangshi2">复式追号</th>
							<th >共<span id="zongqishu"></span>期</th>
							<th id="beginqihao"></th>
							<th>每期<span id="zhushu2"></span>注</th>
							<th id="zongJine2"></th>
							<th id="stopType">否</th>
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
							<th colspan="7" class="AscertainBuy"><input class="BtnDisable" type="button" onclick="norepeat(this);touzhu();" ><span><a href="javaScript:clearForm();loginShow('touzhuOpen2', false);" title="返回修改">返回修改</a></span></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

<div style="display: none;" id="touzhuOpen3" class="WindowCenter">
	<div class="AlertWindow PlanBuyWindow" >
		<div class="WindowTittle"><h3 id="qihaofanan3"></h3><span class="Alertclose" onclick="loginShow('touzhuOpen3', false);" onmouseover="BtnOver($(this));" onmouseout="BtnOut($(this));" onmousedown="BtnDown($(this));" onmouseup="BtnUp($(this));">&#160;</span></div>
			<div class="InsideBorder">
				<table class="PlanContent" cellpadding="0" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th rowspan="2" style="background:#fafafa;">方案信息</th><th>玩法</th><th>追号期数</th><th>开始期号</th><th>单期注数</th><th>追号总金额</th><th>中奖后自动停止</th>
						</tr>
						<tr>
							<th id="touzhufangshi3">自由追号</th>
							<th >共<span id="zongqishu3"></span>期</th>
							<th id="beginqihao3"></th>
							<th>每期<span id="zhushu3"></span>注</th>
							<th id="zongJine3"></th>
							<th id="stopType3">否</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>投注内容</th><td colspan="6" id="zhumachuan3"> </td>
						</tr>
						<tr>
							<th>认购信息</th><td colspan="6"> 您本次购买需要消费<b><span  id="xiaofei3"></span></b>元，购买后您的账户余额为<b><span id="zhanghujine3"></span></b>元。 </td>
						</tr>
						<tr>
							<th colspan="7" class="AscertainBuy">
							<input class="BtnDisable" type="button" onclick="norepeat(this);touzhu();" ><span><a href="javaScript:clearForm();loginShow('touzhuOpen3', false);" title="返回修改"><span class="light">返回修改</span></a></span></th>
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
				   $("#ZYZH").css("display","none");
				   $("#ZhuiHao").css("display","block");
				   }
			   else if(name=='代购'){
				   $("#isZhuihao").val(0);
				   $("#ZhuiHao").css("display","none");
				   $("#ZYZH").css("display","none");
				   $("#SASA").css("display","block");
			   }else if(name=='自由追号'){
				   $("#isZhuihao").val(2);
				   $("#SASA").css("display","none");
				   $("#ZhuiHao").css("display","none");
				   $("#ZYZH").css("display","block");
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
		}		var qihao=$("#qihao").text();//获取期号
		var beishu =$("#tb_Multiple").val();//获取倍数
		var zhushu =$("#lab_Num").text();//获取注数
		var current_money = $("#investField").text();//获取投注金额
        var zhumachuan = $("#codes li").text();//获取投注框里的注码
		var zhumachuanStr="";
		var zhumachuanHtml = "";
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
		if(goumaifangshi == '代购' || isZhuihao == 0){//不是追号
				$("#qihaofanan1").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				$("#touzhufangshi1").html(dangqianwanfa+erjiwanfa); //投注方式
				$("#zongJine1").html("¥"+parseFloat(current_money).toFixed(2)+"元"); // 投注金额
				$("#beishu1").html(beishu); //倍数
				$("#zhushu1").html(zhushu); //注数
		        $("#zhumachuan1").html(zhumachuanHtml); //注码串
		    	var zhuanghuyue = 0;
		    	$("#xiaofei1").html("¥"+parseFloat(current_money).toFixed(2)); // 本次消费
            	zhuanghuyue = Number(zhuanghujine)-Number(current_money);
				if(zhuanghuyue < 0){
					zhuanghuyue = 0;
					}
				$("#zhanghujine1").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
		//if  结束
		 }else if(goumaifangshi == '追号' || isZhuihao == 1){
			   
	    	   $("#qihaofanan2").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				$("#touzhufangshi2").html(dangqianwanfa+erjiwanfa); //投注方式
				$("#beginqihao").html($("#diyiqiQihao").val()); //开始期号
				$("#beishu2").html(beishu); //倍数
				$("#zhushu2").html(zhushu); //注数
				$("#zongqishu").html($("#jh_count").val()); //期数
				
		        $("#zhumachuan2").html(zhumachuanHtml); //注码串
				
		        if($("#payStop").val()=="1"){
					$("#stopType").html("是");
			        }else{
			        	$("#stopType").html("否");
				        }
		        //var koukuan = $("#fenqikoukuan").attr("className");
		        if($("#fenqikoukuan").hasClass("selected")){
		    		$("#payType").val("0");
		    		if($("#zhongType1")!=null||$("#zhongType1")!=undefined){
		    			if($("#zhongType1").attr('checked')=='checked'){
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
		    	}else{
		    		$("#payType").val("1");
		    		if($("#zhongType2")!=null||$("#zhongType2")!=undefined){
		    			if($("#zhongType2").attr('checked')=='checked'){
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
		    		    current_money = Number($("#diyiqiMoney").val());
		    		    $("#xiaofei2").html("¥"+current_money);
		    		    $("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		    		    zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		        	}else if(payType == "1"){
		        		current_money = Number($("#allqiMoney").val());
		        		$("#xiaofei2").html("¥"+current_money);
		        		$("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		        		zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		            }else{
		            	$("#xiaofei2").html("¥"+Number(current_money)*Number(zhuihaoqishu)); // 本次消费
		            	$("#zongJine2").html("¥"+current_money+"元"); // 投注金额
		            	zhuanghuyue = Number(zhuanghujine)-Number(current_money)*Number(zhuihaoqishu);
		                }
		
				if(zhuanghuyue < 0){
					zhuanghuyue = 0;
					}
				$("#zhanghujine2").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额
      		}else{//自由追号

      			$("#qihaofanan3").html(lotno+" 第"+qihao+"期 "+dangqianwanfa+erjiwanfa+" "+goumaifangshi+"方案"); //彩种 期号 投注方式 方案 
				$("#touzhufangshi3").html(dangqianwanfa+erjiwanfa); //投注方式
				
				$("#beginqihao3").html($("#diyiqiQihao").val()); //开始期号
				$("#beishu3").html(beishu); //倍数
				$("#zhushu3").html(zhushu); //注数
				$("#zongqishu3").html($("#zongQishu").val()); //期数
				
		        $("#zhumachuan3").html(zhumachuanHtml); //注码串
		        //var koukuan = $("#fenqikoukuan").attr("className");
		        if($("#fenqikoukuan1").hasClass("selected")){
		        	if($("#payStop").val()=="1"){
						$("#stopType3").html("单期奖金≥"+$("#danqiJiangjinId1").val()+"元终止追号");
				        }else{
				        	$("#stopType3").html("否");
					  }
		    		$("#payType").val("0");
		    		if($("#zhuihaoDanqi1")!=null||$("#zhuihaoDanqi1")!=undefined){
		    			if($("#zhuihaoDanqi1").attr('checked')=='checked'){
		    				$("#payStop").val("1");
		    			}else{
		    				$("#payStop").val("0");
		    			}
		    		}
		    		if($("#zhuihaoSms1")!=null||$("#zhuihaoSms1")!=undefined){
		    			if($("#zhuihaoSms1").attr('checked')=='checked'){
		    				$("#smsType").val("1");
		    			}else{
		    				$("#smsType").val("0");
		    			}
		    		}
		    	}else{
		    		if($("#payStop").val()=="1"){
						$("#stopType3").html("单期奖金≥"+$("#danqiJiangjinId2").val()+"元终止追号");
				        }else{
				        	$("#stopType3").html("否");
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
		    	var payType = $("#payType").val();
		    	var zhuanghuyue = 0;
		    	if(payType == "0"){
		    		    current_money = $("#allqiMoney").val();
		    		    var bencixiaofei = $("#diyiqiMoney").val();
		    		    if(qihao != $("#diyiqiQihao").val()){
		    		    	bencixiaofei = 0;
			    		    }
		    		    $("#xiaofei3").html("¥"+bencixiaofei);
		    		    $("#zongJine3").html("¥"+current_money+"元"); // 投注金额
		    		    zhuanghuyue = Number(zhuanghujine)-Number(bencixiaofei);
		        	}else if(payType == "1"){
		        		current_money = $("#allqiMoney").val();
		        		$("#xiaofei3").html("¥"+current_money);
		        		$("#zongJine3").html("¥"+current_money+"元"); // 投注金额
		        		zhuanghuyue = Number(zhuanghujine)-Number(current_money);
		            }else{
		            	$("#xiaofei3").html("¥"+current_money*zhuihaoqishu); // 本次消费
		            	$("#zongJine3").html("¥"+current_money+"元"); // 投注金额
		            	zhuanghuyue = Number(zhuanghujine)-Number(current_money)*Number(zhuihaoqishu);
		                }
		
				if(zhuanghuyue < 0){
					zhuanghuyue = 0;
					}
				$("#zhanghujine3").html("¥"+parseFloat(zhuanghuyue).toFixed(2));//账户余额

          		}
    }
	   
 </script>
 <!-- 弹出框 结束 -->