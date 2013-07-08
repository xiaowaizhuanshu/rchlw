<%@ page contentType="text/html; charset=utf-8"%>
            <div class="add_cont" style="display:none;"> 
				<select name="list_LotteryNumber" id="list_LotteryNumber" size="10" ></select> 
			</div> 
			<div class="numberbox">
              <ul id="codes"></ul>
            </div>
<dl class="ChannelBuyRedouble">
	<dt style="width:170px;" id="hiddenBeishu">
		<i>投注倍数：</i>
		<span class="light" id="lessonMultiple">-</span>
		<input type="text"   id="tb_Multiple" name="tb_Multiple" value="1" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');multipleValidate();updateMultipleTotalMoney();"/> 
		<span class="light" id="add_Multiple">+</span>
	</dt>
	<dd style="width:90px;">
		<div id="zhuijia" style="display:none">
			<input name="oneMoney" id="oneMoney" type="checkbox" value="3" onclick="updateMultipleTotalMoney();jisuanZhuihao();"><span>追加投注</span>
		</div>
	</dd>
	<dd style="width:250px;">
	<i>投注金额：<b id="investField">0</b>元</i>
	</dd>
	<dd style="width:75px; float:right;">
		<span id="lab_Num" style="display:none">0</span>
		<img onclick="btn_ClearClick()" src="<%=request.getContextPath() %>/function/images/qkhml.gif" />
	</dd>
</dl>
  <script>
  $("#lessonMultiple").click(function(){
	  if ($("#codes li").length ==0 ) {
			 openAlert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
			 $("#tb_Multiple").val("1");
			 $("#investField").val("0");
			return false;
		}
   var  multiple=Number($("#tb_Multiple").val());
  if(multiple==1){
	  openAlert(decodeURI(EncodeUtf8("最少为一倍！")));
  }else{
	  multiple-=1;
	   $("#tb_Multiple").val(multiple);
	   multipleValidate();updateMultipleTotalMoney();
	  }
  if($("#daiGouHemai") != null && $("#qishuList") != null  && ($("#daiGouHemai").val()=="zhuihao" || $("#daiGouHemai").val()=="ziyouZhuihao")){
		setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());
	}
	  });
	  $("#add_Multiple").click(function(){
		  if ($("#codes li").length ==0 ) {
			      $("#tb_Multiple").val("1");
			      $("#investField").val("0");
				 openAlert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
				return false;
			}
   var  multiple= Number( $("#tb_Multiple").val());
	  multiple+=1;
	   $("#tb_Multiple").val(multiple);
	   multipleValidate();updateMultipleTotalMoney();
	  
	   if($("#daiGouHemai") != null && $("#qishuList") != null  && ($("#daiGouHemai").val()=="zhuihao" || $("#daiGouHemai").val()=="ziyouZhuihao")){
			setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());
		}
	  });
  
  
  </script>    
          