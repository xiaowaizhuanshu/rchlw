<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@taglib prefix="s" uri="/struts-tags"%>
<style>div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}</style>	

<h2>账户提款</h2>
<div class="account_recharge">
	<ul class="account_rechargeTab  BaseTab" >
		<li ControlTarget=".drawing_Wizard" onclick="return reHtml(18,'')"  class="light ">提款向导</li>
		<li ControlTarget=".user_Drawing"  onclick="return reHtml(11,'')" class="light selected" >用户提款</li>
		<li ControlTarget=".cash_Records"  onclick="return reHtml(12,'')"  class="light">提款记录</li>
	</ul>
</div>
<div class="account_rechargeContent">
	<div class="user_Drawing none selected" id="account_content1">
		<p class='chaxun'><span id="tname"><s:property value="#session.cash_username"/></span>，您本次提款业务明细如下：</p>
		<p class='tikuan_putong'>您此次订单共计
		<font class="red2"><span id="withdrawel_money"><s:property value="#session.cash_withdrawel_money"/></span>元</font>，到账金额为
		<font class="red2"><s:property value="#session.cash_withdrawel_money"/>元</font>。<br />您原有可提现金额
		<font class="red2"><s:property value="#session.cash_valid_amount"/>元</font>，本次提款
		<font class="red2"><s:property value="#session.cash_withdrawel_money"/>元</font>，您还有
		<font class="red2"><s:property value="#session.retbalance"/>元</font>可提现。</p>
		<p><input name="" id="tikuan_botton" class="tikuan_botton" type="button" value="" onclick="checkAll()" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))"/></p>
	</div>
</div>