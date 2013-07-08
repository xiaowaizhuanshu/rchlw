<%@ page contentType="text/html; charset=utf-8"%>

	<div class="add_cont" style="display: none;">
	<select name="list_LotteryNumber" id="list_LotteryNumber" size="10" ></select>
	</div> 
	<div class="numberbox" >
		<ul id="codes">
			<%/* <li class="numberlan"><span class="numberhao">ewwrewrwe</span><a href="return btn_ClearSelectClick()" id="btn_ClearSelect"  title="删除"><span class="numberdel">删除</span></a></li>*/ %>
		</ul>
	</div>
	<%/* <div class="add_btn">
		<ul>
			<li><a href="javascript:btn_2_RandManyClick(1)" id="btn_2_Rand" name="btn_2_Rand" title="机选1注">机选1注</a></li>
			<li><a href="javascript:btn_2_RandManyClick(5)" id="btn_2_Rand5" name="btn_2_Rand5" title="机选5注">机选5注</a></li>
			<li><a href="javascript:btn_2_RandManyClick(10)"  id="btn_2_Rand10" name="btn_2_Rand10" title="机选10注">机选10注</a></li>
		</ul>
	</div> */%>	
	<div class="add_money">
	  <div class="tzh_zhuijia" id="zhuijia" style="display: none;">
	  	<input name="oneMoney" id="oneMoney" type="checkbox" value="3" onclick="updateMultipleTotalMoney();"><span>追加投注</span>
	  </div>

		<div class="tzje">您选择了<span class="red_text" id="lab_Num">0</span>注，<input type="text" id="tb_Multiple" name="tb_Multiple"  value="1" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');multipleValidate();updateMultipleTotalMoney();">
		<div style="display:none;"><input type= "text"  name="test"></div>&nbsp;倍，共
		<span class="red_text" >0</span>元	</div>
		<div class="zhixuan_del"><img onClick="return btn_ClearClick()" src="<%=request.getContextPath() %>/function/images/qkhml.gif" width="78" height="24"></div>
	</div>
<input type="hidden" id="submitBet" value="betValue" name="submitBet">
<input type= "hidden"  name="test" > 