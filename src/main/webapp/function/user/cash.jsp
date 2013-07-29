<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<style>div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}</style>	
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));
	String username = NameUtil.getNameUtilJson(tuserinfo.getJSONObject("value"));
	String name = tuser.getUSERNAME();
	
%>
<h2>账户提款</h2>
<div class="account_recharge">
	<ul class="account_rechargeTab  BaseTab" >
		<li ControlTarget=".drawing_Wizard" onclick="return reHtml(18,'')"  class="light ">提款向导</li>
		<li ControlTarget=".user_Drawing"  onclick="return reHtml(11,'')" class="light selected" >用户提款</li>
		<li ControlTarget=".cash_Records"  onclick="return reHtml(12,'')"  class="light">提款记录</li>
	</ul>
</div>

<div class="account_rechargeContent">
<!--用户提款-->
	<div class="user_Drawing none selected" id="account_content1">
	<p class="userDrawing_p">温馨提示：<input type="text" id="tsname" style="display: none;" value="<%=username %>"/><%=username %>
	，为确保您的提款能及时安全到账，请如实填写以下信息！</p><p><b>填写提现信息之前请详细阅读下面的提款须知!</b></p>
	<input type="hidden" value='<%=tuser.getMOBILEID() %>' id="hiddenmobile"/>
	<table width="100%" class="userDrawing_table" cellspacing="0" cellpadding="0">
		<tr>
			<th width="117">用 户 名</th>
			<td id="usertd">
              			<%=name %>
			</td>
		</tr>
		<tr>
			<th>可提现金</th>
			<td><span class="red1" id="Valid_amount">
        	<s:i18n name="Format">
				<s:text name="FormatNumeral" >
				<s:param value="#request.objBalance.cash_amount/100" />
				</s:text>
			</s:i18n>
			</span>元</td>
		</tr>
		<tr>
			<th>提现金额</th>
			<td>
			<input class="userDrawing_input" type="text" name="cashBean.withdrawel_money" id="withdrawel_money" 
			value="<s:property value="#request.cashBean.withdrawel_money"/>" onblur="checkMoney()">
			元
			<font id="mnoImage"></font>
			<font id="mno"></font>
			</td>
		</tr>
		<tr>
			<th>登陆密码</th>
			<td>
            	<input type="password" class="userDrawing_input" name =""  id="password" size="25" value="" onblur="testpassword();">
            	<font id="passwordImage"></font>
            	<font id="passwordfont" style="color: rgb(255, 0, 0); ">&nbsp;</font>
			</td>
		</tr>
		<input type="hidden" id="DNA" value ='<s:property value="#request.jsonValue_DNA.state"/>'>
		<s:if test="#request.jsonValue_DNA.isEmpty() || #request.jsonValue_DNA.state==0">
		<tr>
			<th>开卡银行</th>
			<td>
				<select onchange="checkBankName()" id="bank_name" name="cashBean.bank_name">
					<option value="">请选择开卡银行</option>
					<option value="中国工商银行">中国工商银行</option>
					<option value="中国农业银行">中国农业银行</option>
					<option value="中国建设银行">中国建设银行</option>
					<option value="中国民生银行">中国民生银行</option>
					<option value="招商银行">招商银行</option>
					 <option value="中国邮政储蓄银行">中国邮政储蓄银行</option>
					<!--<option value="华夏银行">华夏银行</option> -->
					<option value="交通银行">交通银行</option>
					<option value="兴业银行">兴业银行</option>
					<option value="中信银行">中信银行</option>
					<option value="中国光大银行">中国光大银行</option>
					<option value="广东发展银行">广东发展银行</option>
					<option value="上海浦东发展银行">上海浦东发展银行</option>
					<option value="深圳发展银行">深圳发展银行</option>	   
					<option value="杭州银行">杭州银行</option>
				</select>
				<font id="banknoImage">&nbsp;</font>
				<font id="bankNo">&nbsp;</font>
			</td>
		</tr>
		</s:if>
		<s:else>
		     <input type="hidden" class="tikuaninput" name="cashBean.bank_name" id="bank_name" size="25" value="<s:property value="#request.jsonValue_DNA.bankname"/>">
		</s:else>
		<tr>
			<th>开卡人姓名</th>
			<td >
			<s:if test="#request.jsonValue_DNA.isEmpty() || #request.jsonValue_DNA.name==null || #request.jsonValue_DNA.name.isEmpty()|| #request.jsonValue_DNA.state==0">
                <s:if test="#request.realName==''||#request.realName==null">
	              	  <input type="text" class="tikuaninput" name="cashBean.real_name"  id="real_name" size="25"
	                 	value="" onblur="testRealName();"/>
	                 	<span id="realnameImage"></span>
						<span id="realnamefont"></span>
				 </s:if><s:else>
				   <input type="text" class="tikuaninput" name="cashBean.real_name"  id="real_name" size="25" disabled="disabled"
	                 value="<s:property value='#request.realName'/>"/>
	                 	<span id="realnameImage"></span>
						<span id="realnamefont">开卡人姓名与用户信息中真实姓名一致，如有疑问致电客服！</span>
				 </s:else>
            	</s:if><s:else>
                 <s:property value="#request.jsonValue_DNA.name"/>
                 <input type="hidden" class="tikuaninput" name="cashBean.real_name" id="real_name" size="25" value="<s:property value="#request.jsonValue_DNA.name"/>">
           		  	<span id="realnameImage"></span>
					<span id="realnamefont"></span>
           		</s:else>
			</td>
		</tr>
		<tr>
			<th>银行卡号</th>
			<td >
		    	<s:if test="#request.jsonValue_DNA.isEmpty() || #request.jsonValue_DNA.state==0">
			     	<s:if test="#request.objValue[0].bankaccount==null || #request.objValue[0].bankaccount.isEmpty()">	
				    	<input class="userDrawing_input" type="text" name="cashBean.ID_number" id="bank_number"
				    	 value="<s:property value="#request.cashBean.ID_number"/>" maxlength="21" style="width:150px;" 
				    	 onblur="checkBankNO();">
				    	<font id="bnoImage"></font>
			    		<font id="bno">银行账号格式必须是16-21位的数字字符串</font>
			    	</s:if><s:else>
			    		<input class="userDrawing_input" type="text" name="cashBean.ID_number" 
			    		id="bank_number"  value="<s:property value="#request.objValue[0].bankaccount"/>" maxlength=21 style= "width:150px;"
			    		 onblur="checkBankNO();"/>
			    		<font id="bnoImage"></font>
			    		<font id="bno"></font>
			    	</s:else>
            		</s:if><s:else>
            			<input class="userDrawing_input" type="hidden" name="cashBean.ID_number" id="bank_number"  
            			value="<s:property value="#request.jsonValue_DNA.bankcardno"/>"/>
                	<s:property value="#request.jsonValue_DNA.bankcardno"/>
                	<font id="bnoImage"></font>
			    	<font id="bno"></font>
           	 	</s:else>
			</td>
		</tr>
		<tr>
			<td colspan="2" class="userDrawing_btn"><input onclick="jumpurl()" type="button" value="确定" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))"/></td>
		</tr>
	</table>

	<p class="recharge_title">提款须知：</p>
	<dl class="recharge_explain">
		<dt>1、用户申请提现时，提现银行卡姓名必须与注册时填写的真实姓名完全一致（避免账户被盗后账户的钱被提走）。</dt>
		<dd><b>注：“银联语音支付”用户除外。</b></dd>
	　	<dt>2、没有填写真实姓名的博雅彩账户，请先去安全资料中完善账户信息。</dt>
	　　<dt>3、绑定后的博雅彩账户真实姓名无法修改，如姓名有错字进行修改，需要提供身份证复印件给客服才能进行修改。</dt>
		<dd><b>（注：提供的身份证与注册时填写的身份证信息不符则无法修改。）</b></dd>
		<dt>4、银行卡姓名必须与用户的真实姓名相符，否则将提款不成功。</dt>
		<dt>5、如果账户资金低于10元，仍需提款，请一次性提清。</dt>
		<dt>6、提现只能提到银行卡上，暂不支持信用卡提现。</dt>
		<dt>7、提款到账时间（周一至周五每日处理提款，法定假日除外）：</dt>
		<dd>使用中国工商银行、中国农业银行、中国建设银行、中国招商银行的银行卡进行提现，</dd>
		<dd>16:00前的提款申请：当天到账；16:00后的提款申请：第二天到账。</dd>
		<dd>使用其它银行卡进行提现，</dd>
		<dd>16:00前的提款申请：第二天到账；16:00后的提款申请，第三天到账。</dd>
		<dd>  如有疑问，请致电客服热线：400-856-1000。</dd>
		<dt>8、为了防止少数用户利用信用卡套现和洗钱行为，保证正常用户的资金安全，本站针对提款做出以下规定：</dt>
		<dd><b> 累计充值资金消费未满30%，可提现金额为累计充值资金的70%；累计充值资金消费达到30%，不受此限制。</b></dd>
		<dt>9、提款受理银行：</dt>
		<dd>中国工商银行　中国建设银行　中国光大银行　招商银行　兴业银行　深圳发展银行　上海浦东发展银行</dd>
		<dd> 中国农业银行　中国民生银行　广东发展银行　交通银行　中信银行　杭州银行      中国邮政储蓄银行  </dd>
	</dl>
	<div class="space15">&#160;</div>
	 
	</div>
<script>
$(function(){
	$(".a_ATM").addClass("selected");
});
</script>

</div>

