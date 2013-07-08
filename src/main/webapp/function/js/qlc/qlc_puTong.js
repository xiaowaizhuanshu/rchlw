function SelectBall(BallColor, BallNum) {
    var Selected = GetBallState(BallColor, BallNum);
    if (Selected) {
        SetBallState(BallColor, BallNum, false);
        CheckFull();
        return;
    }
	SetBallState(BallColor, BallNum, true);
    if(GetLotteryInvestNum() > 10000){
		alert(decodeURI(EncodeUtf8('您好，单个方案金额不能超过 2万元！')));
		SetBallState(BallColor, BallNum, false);
	}
    CheckFull();
    return;
}

function GetRedBallSelectedNum() {
    var Count = 0;
    for (var i = 1; i <= 30; i++) {
        if (GetBallState("r", GetBallNum(i)))
            Count++;
    }
    return Count;
}

function GetBallNum(i) {
    var BallNum = "" + i;
    if (BallNum.length == 1)
        BallNum = "0" + BallNum;

    return BallNum;
}
function GetBallState(BallColor, BallNum) {
	var isSelectedAttr = $("#td_" + BallColor + "_" + BallNum).attr('isselected');
	var isSelected = isSelectedAttr == 'true' ? true : false;
	return isSelected;
}

function SetBallState(BallColor, BallNum, SelectState) {
	var ball = $("#td_" + BallColor + "_" + BallNum);
    if (SelectState) {
    	if(BallColor=='r'){
    		ball[0].className='ball_num_r';
    	}
        ball.attr('isselected','true');
    } else {
    	ball[0].className = 'ball_num';
        ball.attr('isselected','false');
    }
}
function CheckFull() {
	var invest = GetLotteryInvestNum();
	if(invest < 1) $("#btn_2_Add").attr('isdisabled','true');
	else $("#btn_2_Add").attr('isdisabled','false');
	var p = invest * 2;
	$('#qlc_lot').html(invest + decodeURI(EncodeUtf8('注，')) + p.toFixed() + decodeURI(EncodeUtf8('元。')));
}
function GetLotteryNumber(){
	var qlc_code="";
    var LotteryNumber = "";
    var BallNum;
    for (var i = 1; i <= 30; i++) {
        BallNum = GetBallNum(i);
        if (GetBallState("r", BallNum)){
        	LotteryNumber += (BallNum + " ");
    	if(BallNum.substring(0,1)=="0"){
    		qlc_code += BallNum.substring(1,2)+",";
           }else{
        	qlc_code += BallNum+",";
           }
        }
        var controlRed=qlc_code.lastIndexOf(",");
        var red=qlc_code.substring(0,controlRed);
    }
    qlc_code=red+"^";
    return qlc_code; 
}
function getCommonFrontLot(){
	var LotteryNumber = "";
    var BallNum;
    for (var i = 1; i <= 30; i++) {
        BallNum = GetBallNum(i);
        if (GetBallState("r", BallNum))
            LotteryNumber += (BallNum + " ");
    }
    return LotteryNumber; 
}
function jiec(a){
	var b=1;
	for (var i = 1; i <= a; i++) {
		b = b*i;
	}
	return b;
}
function zuhe(m,n){
	var a = 0;
	a = jiec(n)/((jiec(n-m)*(jiec(m))));
	return a;
}
function GetLotteryInvestNum()	
{
    var RedCount = 0;

    for (var i = 1; i <= 30; i++) {
        if (GetBallState("r", GetBallNum(i)))
            RedCount++;
    }

    if ((RedCount < 7))
        return 0;

    var InvestNum = 1;
    
    for (var i = 7; i <= RedCount; i++) 
    	InvestNum=zuhe(7,RedCount);

    return InvestNum;  
}
function contain(array,o){
	if(array!=null){
		for(var i=0;i<array.length;i+=1){
			if(array[i]==o){
				return true;
			}
		}
	}
	return false;
}
var qlc_redBallCount=0;
function qlc_controllRedBallCount(){
	qlc_redBallCount=$("#qlc_redBallCount").val();
}
function qlc_redRand(){
	for (var i = 1; i <= 30; i+=1)
        SetBallState("r", GetBallNum(i), false);
	var redBallArray=new Array();
	qlc_controllRedBallCount();
	for(var i=1;i<=qlc_redBallCount;i+=1){
		var redRandNum=parseInt(Math.random()*30)+1;
		
		if(contain(redBallArray,redRandNum)){
			i-=1;
			continue;
		}else{
			redBallArray[i-1]=redRandNum;	
		}
		if(redRandNum<10){
			$("#td_r_0"+redRandNum).click();
		}else{
			$("#td_r_"+redRandNum).click();
		}
	}
}
function qlc_clearRedSelect(){
	for (var i = 1; i <= 30; i++){
		SetBallState("r", GetBallNum(i), false);
	}
	$("#qlc_lot").html(decodeURI(EncodeUtf8("0注， 0元。")));
}    
function btn_2_AddClick() {
	if($('#btn_2_Add').attr('isdisabled') == 'true') {
		alert(decodeURI(EncodeUtf8("投注提示：\n请你至少选择 7个号码")));
		return;
	} 
    if (GetLotteryInvestNum() < 1) {
        alert(decodeURI(EncodeUtf8("您选择的不是一注复式或单式票！")));
        return false;
    }
    if(GetLotteryInvestNum()>10000){
        alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
        return;
    }
    var lotteryListSelect = $("#list_LotteryNumber");
    var lotteryInvest = GetLotteryInvestNum();
    var lotteryNumber = GetLotteryNumber();
    var lotteryView = getCommonFrontLot();
    var frontLot=lotteryView;
    if(lotteryInvest == 1){
    	lotteryView = decodeURI(EncodeUtf8('[普通]')) + lotteryView +decodeURI(EncodeUtf8('[1注，共 2元]'));
    	click++;
    }else{
    	lotteryView=decodeURI(EncodeUtf8('[普通]'))+lotteryView+'['+lotteryInvest+decodeURI(EncodeUtf8('注，'+'共'))+2 * lotteryInvest+decodeURI(EncodeUtf8('元]'));
    }
    var opt = new Option(lotteryView, lotteryNumber);
    opt.setAttribute('allLot',frontLot);
	opt.setAttribute('backLot',lotteryNumber);
	opt.setAttribute('wangFang',"00");
	opt.setAttribute('zhushu',"1");
	opt.setAttribute('money',1*2);
	opt.setAttribute('delMoney', 2 * lotteryInvest);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView);
	
	totalMoney+=2 * lotteryInvest;
    ClearSelect();
    $("#btn_2_Add").attr('isdisabled', 'true');
    var multiple=(Number($("#tb_Multiple").val()));
    var check_money=parseInt(2 * lotteryInvest);
    var partial_money=$("#investField").html();
    totalMoney=parseInt((check_money*multiple)+partial_money*1);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	  $("#final_money").html(a);
	}
	totalLotteryInvest+=lotteryInvest;
	$("#lab_Num").html(totalLotteryInvest);	
	$("#qlc_lot").html(decodeURI(EncodeUtf8("0注，  0元。")));
}    
