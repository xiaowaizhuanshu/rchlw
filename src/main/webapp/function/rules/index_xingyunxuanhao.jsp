<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="luck">
<div class="xuanHaoTop"><span class="clumn3G">幸运选号</span></div>
<div class="box3G2">
<div class="xuanHaoTab">
<ul>
<li id="ssqLi" onclick="selectType('ssq')" style="cursor:pointer" class="mouseOver">双色球</li>
<li id="3DLi" onclick="selectType('3D')" style="cursor:pointer">3D</li>
<li id="qlcLi" onclick="selectType('qlc')" style="cursor:pointer">七乐彩</li>
<li id="pl3Li" onclick="selectType('pl3')" style="cursor:pointer">排列三</li>
<li id="dltLi" onclick="selectType('dlt')" style="cursor:pointer">大乐透</li>
</ul>
</div>
<div class="xuanHaoContent">
<div class="xuanHaocon">
<div class="xuanHaoTabSub">
<ul>
<li class="mouseOver1" onclick="produceNumMethod('xingZuo01');"  style="cursor:pointer" id="xingZuo01">星座</li>
<li onclick="produceNumMethod('shengXiao01');"  style="cursor:pointer" id="shengXiao01">生肖</li>
<li onclick="produceNumMethod('xingMing01');"  style="cursor:pointer" id="xingMing01">姓名</li>
<li onclick="produceNumMethod('shengRi01');"  style="cursor:pointer" id="shengRi01">生日</li>
<li onclick="produceNumMethod('shouJiHao01');"  style="cursor:pointer" id="shouJiHao01">手机号</li>
</ul>
</div>
<!--星座开始-->
<div class="xuanHaoContentSub" id="xingZuo02" style="display:inline-block;">
<span>星座： <select id="xingZuo" name="xingZuo">
                      <option value="0" selected="selected">白羊座</option>
                      <option value="1">金牛座</option>
                      <option value="2">双子座</option>
                      <option value="3">巨蟹座</option>
                      <option value="4">狮子座</option>
                      <option value="5">处女座</option>
                      <option value="6">天秤座</option>
                      <option value="7">天蝎座</option>
                      <option value="8">射手座</option>
                      <option value="9">摩羯座</option>
                      <option value="10">水瓶座</option>
                      <option value="11">双鱼座</option>
                    </select></span>
<span><input type="button" class="xuanHaoBtn" onclick="xingZuoSubmit()" style="cursor:pointer" /></span>
</div>
<!--星座结束-->
<!--生肖开始-->
<div class="xuanHaoContentSub" id="shengXiao02"  style="display:none">
<span>生肖：<select name="shengXiao" id="shengXiao">
  <option selected value="0">鼠</option>
  <option value="1">牛</option>
  <option value="2">虎</option>
  <option value="3">兔</option>
  <option value="4">龙</option>
  <option value="5">蛇</option>
  <option value="6">马</option>
  <option value="7">羊</option>
  <option value="8">猴</option>
  <option value="9">鸡</option>
  <option value="10">狗</option>
  <option value="11">猪</option>
</select>
</span>
<span>
<input type="button" class="xuanHaoBtn" onclick="shenXiaoSubmit()" style="cursor:pointer"/></span>
</div>
<div class="HaceBox"></div>
<!--生肖结束-->
<!--姓名开始-->
<div class="xuanHaoContentSub" id="xingMing02" style="display: none;">
<span>姓名：<input name="xingMing" id="xingMing" type="text" class="width70px"/></span>
<span><input type="button" class="xuanHaoBtn" onclick="xingMingSubmit()" style="cursor:pointer"/></span>
</div>
<!--姓名结束-->
<!--生日开始-->
<div class="xuanHaoContentSub" id="shengRi02" style="display: none;">
<span><input name="shengRi" type="text"  id="shengRi"  class="Wdate"  readonly="readonly"   onclick="WdatePicker()" /></span>
<span><input type="button" class="xuanHaoBtn" onclick="shengRiSubmit()" style="cursor:pointer"/></span>
</div>
<!--生日结束-->
<!--手机号开始-->
<div class="xuanHaoContentSub" id="shouJiHao02" style="display: none" >
	<span>手机号：<input name="shouJi" type="text" class="width70px"  maxlength="11" id="shouJi" onKeyUp="this.value=this.value.replace(/\D/g,'')"
				onafterpaste="this.value=this.value.replace(/\D/g,'')"/></span>
	<span><input type="button" class="xuanHaoBtn" onclick="shouJiSubmit()" style="cursor:pointer"/></span>
</div></div>
<!--手机号结束-->
<div class="xuanHaoBottom">
<!-- 3D号码 -->
<div style="display: none" id="d3Table">
<div class="luckynum">
<span class="red3G" id="code90"></span><span class="red3G" id="code91"></span><span class="red3G" id="code92"></span>
</div>
</div>
<!-- 七乐彩号码 -->
<div style="display: none" id="qlcTable">
<div class="luckynum">
<span class="red3G" id="code300"></span><span class="red3G" id="code301"></span><span class="red3G" id="code302"></span><span class="red3G" id="code303"></span><span class="red3G" id="code304"></span><span class="red3G" id="code305"></span><span class="red3G" id="code306"></span>
</div>
</div>
<!-- 排列3 -->
<div style="display: none" id="pailie3Table">
<div class="luckynum">
<span class="red3G" id="code990"></span><span class="red3G" id="code991"></span><span class="red3G" id="code992"></span>
</div>
</div>
<!-- 双色球号码 -->
<div style="display: block;" id="ssqTable">
<div class="luckynum">
<span class="red3G" id="code330"></span><span class="red3G" id="code331"></span>
<span class="red3G" id="code332"></span><span class="red3G" id="code333"></span>
<span class="red3G" id="code334"></span><span class="red3G" id="code335">
</span><span class="blue3G" id="code336"></span>
</div>
</div>
<!-- 大乐透号码 -->
<div style="display: none;" id="dltTable">
<div class="luckynum">
<span class="red3G" id="code3330"></span><span class="red3G" id="code3331"></span><span class="red3G" id="code3332"></span><span class="red3G" id="code3333"></span><span class="red3G" id="code3334"></span><span class="blue3G" id="code3335"></span><span class="blue3G" id="code3336"></span>
</div>
</div>
<p class="paddingTop2px">
<input type="button" class="xuanHaoBtn1" value="" style="cursor:pointer" onclick="luck_stake(&#39;mobilePurse&#39;)">
</p>
</div>
</div>
</div>
</div>
<input type="hidden" name="lotteryId" value=""/>
<input type="hidden" name="stakesBalls" value=""/>
<input type="hidden" name="toatalMoney" value="2"/>
<input type="hidden" name="multiple" value="1"/>
<input type="hidden" name="stakesNum" value="1"/>
<input type="hidden" name="tradeArea" value="tj"/>
<input type="hidden" name="playType" value=""/>
<input type="hidden" name="stakeType" value="1"/>
<input type="hidden" id="jsonString" name="jsonString"  value=""/>
<input type="hidden" id="root" value=""/>

