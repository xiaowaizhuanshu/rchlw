<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@taglib prefix="s" uri="/struts-tags"%>
<style>div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}</style>
   
   <input type="hidden" id="name1" value='<s:property value="#session.user.NAME"/>' />
    <input type="hidden" id="cardid1" value='<s:property value="#session.user.CERTID"/>'/>
    
 	<form action="" name="dnaForm" id="dnaForm" method="post" class="tzjl_form">
 			<div  id="div0" style="display: none"></div>
			<div  id="div1" style="display: block">
					<ul>
						<li>注意：首次使用该支付方式后，系统将默认绑定该银行卡作为您再次电话支付和申请提现的唯一专用卡，信用卡不能用于提现！</li>
      					<li>　　　使用银联电话支付每笔充值最低20元，免手续费。</li>	
					</ul>
					<table width="100%" border="1" cellspacing="0" cellpadding="0">
						<tr>
							<th width="90">真实姓名</th>
							<td style="width:680px;overflow: hidden;"><input name="chargeBean.userName" id="username1" onblur="testName()" type="text" class="bankCardPhone_input" value=""/>
							<span id="realnameImage"></span>
							<span id="realnamefont">请填写您注册时所填写的真实姓名。</span></td>
						</tr>
						<tr>
							<th>身份证号</th>
							<td ><input name="chargeBean.documentNumber" id="cardId" onblur="testcard()" type="text" class="bankCardPhone_input" value="" />
							<span id="cardIdImage"></span>
							<span id="cardIdfont">请填写正确的证件号码，如注册时填写了身份证，请与其一致。</span></td>
						</tr>
						<tr>
							<th>身份证所在地</th>
							<td><input name="chargeBean.addressCard" id="documentAddress" onblur="checkDocumentAddress()" type="text" class="bankCardPhone_input" />
							<span id="documentImage"></span>
							<span id="documentfont">如：山东省青岛市XX街XX路XX号</span></td>
						</tr>
						<tr>
							<th>银行名称</th>
							<td>
								<select tabindex="4" onchange="testbank()" id="bank_name" name="chargeBean.bankName" class="bankCardPhone_select">
									<option value="">请选择开卡银行</option>
									<option value="中国工商银行">中国工商银行</option>
									<option value="中国农业银行">中国农业银行</option>
									<option value="中国建设银行">中国建设银行</option>
									<option value="招商银行">招商银行</option>
									<option value="中国邮政储蓄银行">中国邮政储蓄银行</option>
									<option value="华夏银行">华夏银行</option>
									<option value="兴业银行">兴业银行</option>
									<option value="中信银行">中信银行</option>
									<!-- <option value="上海浦东发展银行">上海浦东发展银行</option> -->
									<option value="深圳发展银行">深圳发展银行</option>
									
									
								</select><span id="banknameImage"></span><span id="bankfont"></span>
							</td>
						</tr>
						<tr>
							<th>银行卡号</th>
							<td><input size="25" maxlength="25" tabindex="5" name="chargeBean.cardNumber" id="cardNumber" type="text" class="bankCardPhone_input" onblur="cardNumberCheck()"/>&nbsp;&nbsp;<span id="bankcardImage"></span><span id="bankcardfont">必须使用开户名与您注册时填写的真实姓名一致的银行卡。</span></td>
						</tr>
						<tr>
							<th>开户行所在地</th>
							<td>
								<select onchange="fun()" tabindex="6" id="shengFengBank" name="chargeBean.province" class="bankCardPhone_select">
									<option selected value="北京市">北京市</option>
									<option value="天津市">天津市</option>
									<option value="上海市">上海市</option>
									<option value="重庆市">重庆市</option>
									<option value="黑龙江省">黑龙江省</option>
									<option value="云南省">云南省</option>
									<option value="吉林省">吉林省</option>
									<option value="安徽省">安徽省</option>
									<option value="山东省">山东省</option>
									<option value="山西省">山西省</option>
									<option value="广东省">广东省</option>
									<option value="江苏省">江苏省</option>
									<option value="江西省">江西省</option>
									<option value="河北省">河北省</option>
									<option value="河南省">河南省</option>
									<option value="浙江省">浙江省</option>
									<option value="海南省">海南省</option>
									<option value="湖北省">湖北省</option>
									<option value="湖南省">湖南省</option>
									<option value="甘肃省">甘肃省</option>
									<option value="福建省">福建省</option>
									<option value="四川省">四川省</option>
									<option value="贵州省">贵州省</option>
									<option value="辽宁省">辽宁省</option>
									<option value="陕西省">陕西省</option>
									<option value="青海省">青海省</option>
									<option value="广西壮族自治区">广西壮族自治区</option>
									<option value="宁夏回族自治区">宁夏回族自治区</option>
									<option value="西藏自治区">西藏自治区</option>
									<option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
									<option value="内蒙古自治区">内蒙古自治区</option>
									<option value="香港特别行政区">香港特别行政区</option>
									<option value="澳门特别行政区">澳门特别行政区</option>
									<option value="台湾省">台湾省</option>
								</select>
								省
								<select tabindex="7" id="cityBank" name="chargeBean.city" class="bankCardPhone_smallSelect">
									<option selected value="东城区">东城区</option>
									<option value="丰台区">丰台区</option>
									<option value="大兴区">大兴区</option>
									<option value="宣武区">宣武区</option>
									<option value="崇文区">崇文区</option>
									<option value="平谷区">平谷区</option>
									<option value="怀柔区">怀柔区</option>
									<option value="房山区">房山区</option>
									<option value="昌平区">昌平区</option>
									<option value="朝阳区">朝阳区</option>
									<option value="海淀区">海淀区</option>
									<option value="石景山区">石景山区</option>
									<option value="西城区">西城区</option>
									<option value="通州区">通州区</option>
									<option value="门头沟区">门头沟区</option>
									<option value="顺义区">顺义区</option>
								</select>
								市
							</td>
						</tr>
						<%/* <tr>
							<td colspan="2"><p class="netCharge_bonus"><input id="ladderflag" name="ladderflag" type="checkbox" checked="checked"/>我要参加“<a style="color:#1F376D;"  href="/activity/activity20120214.html" target='_blank'>单笔充值满百元即返现5%</a>”的活动（<b>充值金额及赠送彩金只能用于购彩，不能提现，中奖奖金可以提现</b>）。</p></td>
						</tr>*/ %>
						<tr>
							<td colspan="2" class="bankCardPhone_next"><input type="button" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="jumpNextTest()" value="下一步" /></td>
						</tr>
					</table>
					<div class="space15">&#160;</div>

				</div>
		</form>	   