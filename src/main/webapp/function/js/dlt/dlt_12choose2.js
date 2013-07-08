
//得到球的状态
function Animal_GetBallState(BallColor, BallNum) {
      var isSelectedAttr = $("#shxl_" + BallColor + "_" + BallNum).attr('isselected');
      var isSelected = isSelectedAttr == 'true' ? true : false;
      return isSelected;
    }

var animal=0;
//设置球的显示
function Animal_SelectBall(BallColor,BallNum){
	var Selected = Animal_GetBallState(BallColor, BallNum);
    if (Selected) {
    	Animal_SetBallState(BallColor, BallNum, false);
    	Animal_CheckFull();
        return;
    }
    Animal_SetBallState(BallColor, BallNum, true);
    Animal_CheckFull();
    return;
}
//设置球的状态
function  Animal_SetBallState(BallColor, BallNum, SelectState) {
	var ball = $("#shxl_" + BallColor + "_" + BallNum);//shx_r_01
    if (SelectState) {
    	ball.addClass('ball_numsxl_r');
        ball.attr('isselected','true');
    	 
    } else {
		ball.removeClass('ball_numsxl_r');
    	ball.addClass('ball_numsxl');
        ball.attr('isselected','false');
    } 	
}

//给注码补“0”
function Animal_GetBallNum(i) {
    var BallNum = "" + i;
    if (BallNum.length == 1)
        BallNum = "0" + BallNum;
    return BallNum;
}

//得到十二选二的注数
function Animal_GetLotteryInvestNum(){	
    var RedCount = 0;
    for (var i = 1; i <= 12; i++) {
        if (Animal_GetBallState("r", Animal_GetBallNum(i)))
            RedCount++;
    }
    
    //如果球个数小于2返回
    if (RedCount < 2)return 0;
    //算得注数
	var InvestNum = zuhe(2,RedCount);       
    return InvestNum;  
}
var animal = 0;
//添加注数和金额到显示页面
function Animal_CheckFull() {
	var invest = Animal_GetLotteryInvestNum();
	if(invest < 1) $("#animal_btn_2_Add").attr('isdisabled','true');
	else $("#animal_btn_2_Add").attr('isdisabled','false');
	 animal= invest * 2;
	 $("#sxl_zhushu").html(invest);
	 $("#sxl_money").html(animal+"");
}

//拼接注码
function GetAnimal_FrontLot(){
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 12; i++) {
		BallNum = Animal_GetBallNum(i);
		if (Animal_GetBallState("r", BallNum)){
			LotteryNumber += (BallNum + " ");
		}
	}
	return LotteryNumber; 
}
//清空注码
 function Animal_ClearSelect() {
   for (var i = 1; i <= 12; i++){
	   Animal_SetBallState("r", Animal_GetBallNum(i), false);
   }
   $("#sxl_zhushu").html("0");
	 $("#sxl_money").html("0");
}
//拼接注码
 function Animal_GetLotteryNumber(){
    	var dlt_commonCode="";
        var LotteryNumber = "";
        var BallNum;
        var red;
        for (var i = 1; i <= 12; i++) {
            BallNum = Animal_GetBallNum(i);
            if (Animal_GetBallState("r", BallNum)){
            	LotteryNumber += (BallNum + " ");
            	if(BallNum.substring(0,1)=="0"){
            		dlt_commonCode += BallNum.substring(1,2)+",";
                 }else{
                	dlt_commonCode += BallNum+",";
                 }
            }
        }
        dlt_commonCode = dlt_commonCode.substring(0, dlt_commonCode.lastIndexOf(","));
        return dlt_commonCode; 
    }

//点击添加到号码栏按钮增加注码
function Animal_btn_2_AddClick() {
		var RedCount = 0;
        for (var i = 1; i <= 12; i++) {
            if (Animal_GetBallState("r", Animal_GetBallNum(i)))
                RedCount++;
        }

        if(RedCount<2){
        	alert(decodeURI(EncodeUtf8("生肖乐至少选择2个号码")));
        	return false;
        }
       
        if (Animal_GetLotteryInvestNum() < 1) {
            alert(decodeURI(EncodeUtf8("请正确选择号码进行投注")));
            return false;
        }
        if(animal>20000){
        	alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
        	return false;
        }
        var lotteryListSelect = $("#list_LotteryNumber");
		
        var lotteryInvest = Animal_GetLotteryInvestNum();//注数
        var lotteryNumber = Animal_GetLotteryNumber();//传给action中的注码
        var lotteryView = GetAnimal_FrontLot();

        if(lotteryInvest == 1){
        	lotteryView = decodeURI(EncodeUtf8('[生肖乐] ')) + lotteryView + decodeURI(EncodeUtf8(' [1注，共2元]'));
        }else if(lotteryInvest > 1){
        	lotteryView = decodeURI(EncodeUtf8('[生肖乐] ')) + lotteryView + ' [' + lotteryInvest + decodeURI(EncodeUtf8('注，共')) + 2 * lotteryInvest + decodeURI(EncodeUtf8('元]'));
        }
		var opt = new Option(lotteryView,lotteryNumber);
		 	opt.setAttribute('allLot',lotteryView);
	    	opt.setAttribute('backLot',lotteryNumber);
	    	opt.setAttribute('wangFang',"3");
	    	opt.setAttribute('zhushu',lotteryInvest);
	    	opt.setAttribute('money',1*2);
			opt.setAttribute('delMoney', 2 * lotteryInvest);
			lotteryListSelect[0].options.add(opt);
			add_codes(lotteryView);
			
        totalMoney+=2 * lotteryInvest;//算总金额
        Animal_ClearSelect();
        
        $("#Animal_btn_2_Add").attr('isdisabled', 'true');
        var multiple=(Number($("#tb_Multiple").val()));
        var check_money=parseInt(2 * lotteryInvest);
        var partial_money=$("#investField").html();
        totalMoney=parseInt((check_money*multiple)+partial_money*1);
		$("#investField").html(totalMoney.toFixed());
		$("#current_money").html(totalMoney.toFixed());
	    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
		getFinalMoney();
		totalLotteryInvest+=lotteryInvest;
		$("#lab_Num").html(totalLotteryInvest);		
	    $("#sxl_zhushu").html("0");
		 $("#sxl_money").html("0");
        return true;
    }   
