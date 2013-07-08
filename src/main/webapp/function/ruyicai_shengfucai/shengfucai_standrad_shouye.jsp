<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script>$(function(){getZCBatchCode('T01003');});</script>
<div class="Pannel FootballFight">
	<div class="PannelHead">
		<h3>足彩对阵</h3>
		<dl class="TabN">
			<!-- <dt  ControlTarget=".TheSecondAdvance">预售期<i>22213</i>期</dt>  -->
			<!-- <dt  ControlTarget=".TheFirstAdvance">预售期<i>88879</i>期</dt>  -->
			<dt class="selected" onmouseover="BaseTab($(this))" ControlTarget=".TheOnLineMatch">当前期<i id="qihao3"></i>期</dt>
		</dl>
	</div>
	<div class="PannelBody">
		<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByDipin" method="post">
		<table class="FootballFightTable TheOnLineMatch selected">
				<!--#include virtual="/rchlw/function/zucai!getFlData?lotno=T01003&shouye=1"-->
		</table>
		<table class="FootballFightTable TheFirstAdvance none"><tr><td>预售期1的表格 这个和上一个一样</td></tr></table>
		<table class="FootballFightTable TheSecondAdvance none"><tr><td>预售期2的表格 这个和上一个也一样</td></tr></table>
		
		<span id="qihao" class="none"></span>
		<span id="investField" class="none"></span>
		<span id="two" class="none"></span>
		<span id="all" class="none"></span>
		<input type="hidden" id="lotNo" value="T01003" name="lotNo" />
		<input type="hidden" id="tb_Multiple" value="1"  />
		<input type="hidden" id="jsonString" name="jsonString" value="" /> 
		<input type="hidden" id="caiZhong" value="shengfucai" /> 
		<input type="hidden" id="path" name="path" value=""/> 
	   	<input type="hidden" id="errorCode" name="errorCode" value=""/>
		<input type="hidden" id="dangqianwanfa" value="胜负彩"  />
		<input type="hidden" id="erjiwanfa" value="普通投注"  />
		<input type="hidden" id="goumaifangshi" value="代购"  />
		<input type="hidden" id="daiGouHemai" name="daiGou" value="daigou"  />
		<input type="hidden" id="jsonStringCLR" name="jsonStringCLR" value="" />
		<div class="add_cont" style="display: none;"> 
			<select name="list_LotteryNumber" id="list_LotteryNumber" size="10" ></select> 
		</div> 
		<div class="numberbox" style="display: none;">
		           <ul id="codes"></ul>
		</div>
		
		</form>
	</div>
</div>