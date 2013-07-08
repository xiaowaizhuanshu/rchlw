var shengXiaoList = new Array(12);//生肖list
var xingZuoList = new Array(12);//星座list
var xingMingList = new Array(10);//姓名list
var shengRiList = new Array(100);//生日list
var shouJiList = new Array(100);//手机list
function xingZuoSubmit(count,codeTempNum,redSum,blueSum)
{//星座选号

		
	for(var j=0;j<count;j++){
			$("#code"+codeTempNum+j).text("");
		}
		$("#xingZuo option").each(function(){  
			if($(this).attr("selected")==true){
				var codesList = new Array();
				if(xingZuoList[$(this).val()] == null || xingZuoList[$(this).val()] == ""||xingZuoList[$(this).val()] == undefined){//星座list中没有此星座的号码
					xingZuoList[$(this).val()] = "";
					codesList = selectByMachineOne(count,redSum,blueSum);
					showSelectCodes(codeTempNum,codesList);
					xingZuoList[$(this).val()] = codesList.toString();					
				}else{//星座list中有此星座的号码
					codesList = xingZuoList[$(this).val()].split(";");
					showSelectCodes(codeTempNum,codesList[0].split(","),lotteryType);
					}
			} 
		});
}
function shenXiaoSubmit(count,codeTempNum,redSum,blueSum)
{//生肖选号
	for(var j=0;j<count;j++){
			$("#code"+codeTempNum+j).text("");
	}
		
		$("#shengXiao option").each(function(){  
			if($(this).attr("selected")==true){
				var codesList = new Array();
				if(shengXiaoList[$(this).val()] == null || shengXiaoList[$(this).val()] == ""||shengXiaoList[$(this).val()] == undefined){//星座list中没有此星座的号码
					shengXiaoList[$(this).val()] = "";
					codesList = selectByMachineOne(count,redSum,blueSum);
					showSelectCodes(codeTempNum,codesList);
					shengXiaoList[$(this).val()] = codesList.toString();					
				}else{//星座list中有此星座的号码
					codesList = shengXiaoList[$(this).val()].split(";");
					showSelectCodes(codeTempNum,codesList[0].split(","),lotteryType);
					}
			} 
		});

}
function showSelectCodes(codeTempNum,codeList){
	//显示号码
		for(var i=0;i<codeList.length;i++){
		
			if(codeList[i] != undefined){
				 $("#code"+codeTempNum+i).text(codeList[i]);
			}
		}
	}
function getRandomNum(max)
{//产生一个0到max之间的随机整数
	var i=Math.round(Math.random()*max);
	if(i>max)
		i=max;
	return i;
}

function matchMun(a,b)
{//判断数组中有无重复的数
	for(var i=0;i<a.length;i++){
		if(a[i] == b){
			return false;
		}
	}
	return true;
}
function paixv(shuzu)
{//冒泡排序法 
	var temp;
	for(var i=0;i<shuzu.length;i++){
		for(var j=0;j<shuzu.length-1;j++){
			if(shuzu[j+1] < shuzu[j]){
				temp = shuzu[j+1];
				shuzu[j+1] = shuzu[j];
				shuzu[j] = temp;
			}
		}
	}
}
//验证输入的字符是否是汉字、英文（a－z）
function validateCharEare(charName) {
	var regu = "^[A-za-z\u4e00-\u9fa5]+$";
	var re = new RegExp(regu);
	if (!re.test(charName)) {
		return false;
	}
	return true;
}


//  验证输入的字符长度
function validateCharLength(charName, start, end) {
	if (charName.length < start || charName.length > end) {
		return false;
	}
	return true;
}

function checkRegisterName(name) {
	userLoginName = name.replace(/[^\x00-\xff]/g, "11");
	if (!validateCharLength(userLoginName, 1, 10)){
		return false;
	}
	return true;
}

function xingMingSubmit(count,codeTempNum,redSum,blueSum){
//姓名选号
	var codesList = "";
	var xingMing =$("#xingMing").val();
	
	if(!validateCharEare(xingMing)){
		alert(decodeURI(EncodeUtf8("姓名必须是英文或中文")));
		return;
	}
	if(!checkRegisterName(xingMing)){
		alert(decodeURI(EncodeUtf8("姓名长度必须小于 10个字符!")));
		return;
	}
	for(var j=0;j<count;j++){
			$("#code"+codeTempNum+j).text("");
	}
	for(var i=0;i<xingMingList.length;i++){
		if(xingMingList[i] != null){
			if(xingMingList[i].containsKey(xingMing)){//有这个姓名
				codesList = xingMingList[i].get(xingMing).value;
				codesList = codesList.split(";");
				showSelectCodes(codeTempNum,codesList[0].split(","));
			}	
		}					
	}
	//没有这个姓名			
	
		var code = selectByMachineOne(count,redSum,blueSum);
		codesList += code.toString()+";";
	
		
	
	var testmap = new Map();
	 testmap.put(xingMing,codesList);
		for(var j=0;j<xingMingList.length;j++){
			if(xingMingList[j] == undefined){		
				xingMingList[j] = testmap;
				break;
			}
		}
		//显示号码
		codesList = codesList.split(";");
		showSelectCodes(codeTempNum,codesList[0].split(","));
	}
	//自定义Map
	function Map(){
	this.elements=new Array();
	this.size=function(){
			return this.elements.length;
	}

	this.put=function(_key,_value){
			this.elements.push({key:_key,value:_value});
	}
	
	this.remove=function(_key){
			var bln=false;
			try{
				for(i=0;i<this.elements.length;i++){
					if (this.elements[i].key==_key){
						this.elements.splice(i,1);
						return true;
					}
				}
			}catch(e){
				bln=false;
			}
			return bln;
	}
	
	this.containsKey=function(_key){
			var bln=false;
			try{
				for (i=0;i<this.elements.length;i++){
					if (this.elements[i].key==_key){
						bln=true;
					}
				}
			}catch(e){
				bln=false;
			}
			return bln;
	}
	
	this.get=function(_key){
			try{
				for (i=0;i<this.elements.length;i++){
					if (this.elements[i].key==_key){
						return this.elements[i];
					}
				}
			}catch(e){
				return null;
			}
	}
	}

function shengRiSubmit(count,codeTempNum,redSum,blueSum){	
//生日选号
	var codesList = "";
	var shengRi =$("#shengRi").val();
	if(shengRi == null || shengRi == ""){
		alert(decodeURI(EncodeUtf8( "请输入生日!")));
		return;
	}
	for(var j=0;j<count;j++){
			$("#code"+codeTempNum+j).text("");
	}
	for(var i=0;i<shengRiList.length;i++){
		if(shengRiList[i] != null){
			if(shengRiList[i].containsKey(shengRi)){//有这个生日
				codesList = shengRiList[i].get(shengRi).value;
				codesList = codesList.split(";");
				showSelectCodes(codeTempNum,codesList[0].split(","));
				return ;
			}	
		}					
	}
	//没有这个生日		
	for(var j=0;j<count;j++){
		var code = selectByMachineOne(count,redSum,blueSum);
		codesList += code.toString()+";";
	}
	var testmap = new Map();
 testmap.put(shengRi,codesList);
	for(var j=0;j<shengRiList.length;j++){
		if(shengRiList[j] == undefined){		
			shengRiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(codeTempNum,codesList[0].split(","));
}
function shouJiSubmit(count,codeTempNum,redSum,blueSum){
//手机选号
	var reg =/^1[3,5,8]\d{9}$/;
	var codesList = "";
	var shouJi = $("#shouJi").val();
	if(shouJi == null || shouJi == ""){
		alert(decodeURI(EncodeUtf8("请输入手机号!")));
		$("#shouJi").attr("value","");
		return;
	}else if(reg.test(shouJi)==false){
		alert(decodeURI(EncodeUtf8("请输入正确的手机号！")));
		$("#shouJi").attr("value","");
		return;
	}else  if(shouJi.length > 11||shouJi.length<11){
		alert(decodeURI(EncodeUtf8("您输入的手机号位数不正确!")));
		$("#shouJi").attr("value","");
		return;
	}
	for(var j=0;j<count;j++){
			$("#code"+codeTempNum+j).text("");
	}
	for(var i=0;i<shouJiList.length;i++){
		if(shouJiList[i] != null){
			if(shouJiList[i].containsKey(shouJi)){//有这个手机
				codesList = shouJiList[i].get(shouJi).value;
				codesList = codesList.split(";");
				showSelectCodes(codeTempNum,codesList[0].split(","));
				return ;
			}	
		}					
	}
	//没有这个手机		
	for(var j=0;j<count;j++){
		var code = selectByMachineOne(count,redSum,blueSum);
		codesList += code.toString()+";";
	}
	var testmap = new Map();
 testmap.put(shouJi,codesList);
	for(var j=0;j<shouJiList.length;j++){
		if(shouJiList[j] == undefined){		
			shouJiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(codeTempNum,codesList[0].split(","));
}

//选择不同的方式去产生幸运号码
function produceNumMethod(method){
  if(method=="xingZuo01"){//选择星座方式
    $("#xingZuo01").attr("class","luckmenu1");
  	$("#shengXiao01").attr("class","luckmenu2");
    $("#xingMing01").attr("class","luckmenu2");
  	$("#shengRi01").attr("class","luckmenu2");
    $("#shouJiHao01").attr("class","luckmenu2");
  	
	$("#shengXiao02").css("display","none");
  	$("#xingZuo02").css("display","block");
	$("#xingMing02").css("display","none");
  	$("#shengRi02").css("display","none");
    $("#shouJiHao02").css("display","none");	
  	cleanCodeShow	();
  }else if(method=="shengXiao01"){//选择生肖方式
    $("#shengXiao01").attr("class","luckmenu1");
  	$("#xingZuo01").attr("class","luckmenu2");
    $("#xingMing01").attr("class","luckmenu2");
  	$("#shengRi01").attr("class","luckmenu2");
    $("#shouJiHao01").attr("class","luckmenu2");
  	
	$("#xingZuo02").css("display","none");
  	$("#shengXiao02").css("display","block");
	$("#xingMing02").css("display","none");
  	$("#shengRi02").css("display","none");
    $("#shouJiHao02").css("display","none");
  	cleanCodeShow	();

  }else if(method=="xingMing01"){////选择姓名方式

   $("#xingMing01").attr("class","luckmenu1");
  	$("#xingZuo01").attr("class","luckmenu2");
    $("#shengXiao01").attr("class","luckmenu2");
  	$("#shengRi01").attr("class","luckmenu2");
    $("#shouJiHao01").attr("class","luckmenu2");
  	
	$("#xingZuo02").css("display","none");
  	$("#xingMing02").css("display","block");
	$("#shengXiao02").css("display","none");
  	$("#shengRi02").css("display","none");
    $("#shouJiHao02").css("display","none");
  	cleanCodeShow	();
  }else if(method=="shengRi01"){//选择生日方式
    $("#shengRi01").attr("class","luckmenu1");
  	$("#xingZuo01").attr("class","luckmenu2");
    $("#shengXiao01").attr("class","luckmenu2");
  	$("#xingMing01").attr("class","luckmenu2");
    $("#shouJiHao01").attr("class","luckmenu2");
  	
	$("#xingZuo02").css("display","none");
  	$("#shengRi02").css("display","block");
	$("#shengXiao02").css("display","none");
  	$("#xingMing02").css("display","none");
    $("#shouJiHao02").css("display","none");
  	cleanCodeShow	();
 
  }else if(method=="shouJiHao01"){//选择手机方式
    $("#shouJiHao01").attr("class","luckmenu1");
  	$("#xingZuo01").attr("class","luckmenu2");
    $("#shengXiao01").attr("class","luckmenu2");
  	$("#xingMing01").attr("class","luckmenu2");
    $("#shengRi01").attr("class","luckmenu2");
  	
	$("#xingZuo02").css("display","none");
  	$("#shengRi02").css("display","none");
	$("#shengXiao02").css("display","none");
  	$("#xingMing02").css("display","none");
    $("#shouJiHao02").css("display","block");
  	cleanCodeShow	();
  }
}

function cleanCodeShow(){
	var lotteryType  = $("#lotteryType").val();
	 if(lotteryType=='SSQ'){
	 		for(var j=0;j<7;j++){
				$("#code33"+j).text("");
			}
	 	
	 	}else if(lotteryType=='QLC'){
	 			for(var j=0;j<7;j++){
					$("#code30"+j).text("");
				}
	 		
	 		}else if(lotteryType=='D3'){
	 				for(var j=0;j<3;j++){
						$("#code9"+j).text("");
						
					}
	 		}else if(lotteryType=='pl3'){
	 				for(var j=0;j<3;j++){
						$("#code9"+j).text("");
						
					}
	 		}
			else if(lotteryType=='dlt'){
	 				for(var j=0;j<7;j++){
						$("#code33"+j).text("");
					}
	 		}else if(lotteryType=='QXC'){
	 			for(var j=0;j<7;j++){
					$("#code30"+j).text("");
				}
	 		
	 		}else if(lotteryType=='pl5'){
			for(var j=0;j<5;j++){
					$("#code9"+j).text("");
				}
			}
	
	}

function selectByMachineOne(num,redSum,blueSum)
{/*机选一注钮调用的方法*/	
	var list = new Array();
	var listFlag = new Array();
	var index = 0;
	while(list.length<num){//产生7个不重复随机号
		var rednum = getRandomNum(redSum);
		if(rednum == 0){//如果随机数为0的话忽略
			continue;
		}
		if(matchMun(list,rednum)){		
			if((rednum.toString()).length<2) rednum = "0"+rednum;
			list[index] = rednum;
			index++;
		}else{
			continue;
		}			
	}
	//排序
	if(lotteryType=='SSQ'|| lotteryType=='QLC' || lotteryType=='dlt'){
		for(var i=0;i<list.length;i++){
			listFlag[i] = parseInt(list[i],10);
		}
		paixv(listFlag);//排序
	}
	
	for(var i=0;i<listFlag.length;i++){//将个位数前面补零
		if(listFlag[i].toString().length == 1){
			list[i] = "0"+ listFlag[i];
		}else{
			list[i] = listFlag[i];
		}		
	}
	lotteryType=$("#lotteryType").val(); 
    if(lotteryType=='SSQ'){
    	var blue = getRandomNum(blueSum);
    	if(blue == 0) blue = 1;
    	if(blue.toString().length == 1){
    		list[6] = "0"+ blue;
    	}else{
    		list[6] = blue;
    	}
    }if(lotteryType=='dlt'){
    	var blue1 =parseInt(Math.random()*11+1);
		
		var blue2 = parseInt(Math.random()*(12-(blue1+1)+1)+(blue1+1));
		
    	if(blue1 == 0) blue1 = 1;
		
    	if(blue2 == 0) blue2 = 1;
		
    	if(blue1.toString().length == 1){
    		list[5] = "0"+ blue1;
    	}else{
    		list[5] = blue1;
    	}
		
    	if(blue2.toString().length == 1){
    		list[6] = "0"+ blue2;
    	}else{
    		list[6] = blue2;
    	}
    }
	
	return list;
}