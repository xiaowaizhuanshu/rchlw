<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!--账户管理右边-->
<div class="My_account" id="right_text">
<style>
div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}
</style>
		<div class="My_account_title"> <strong>推广链接</strong> </div>
		<div class="account_recharge">
			<ul class="account_rechargeTab">
				<li id="li1" onclick="BaseTab($(this))" controltarget=".rechargeWizard" class="light">推广说明</li>
				<li id="li2" onclick="BaseTab($(this))" controltarget=".netCharge" class="light selected">推广链接</li>
			</ul>
			<form action="images/如意彩账户中心.htm" id="chargeForm" name="chargeForm" method="post" target="_blank">
				<input type="hidden" name="orderinfo" id="orderinfo" value="">
			</form>
		</div>
		<div class="account_rechargeContent">
			<div class="rechargeWizard none">
				<p class="recharge_title">推广说明</p>
				<dl class="recharge_explain">
				    <dt>一，推广员注意事项</dt>
					<dd>1、不能发展正在消费的如意彩老用户为自己下级会员；</dd>
					<dd>2、禁止代理间互拉用户（下级用户必须完成手机验证、完善身份证号码和真实姓名，
					没完善前为普通用户,</dd>
					<dd>一旦完善资料即可显示在下级列表里面，并正式计算业绩）；</dd>
					<dd>3、不能在方案宣传，论坛等网站任意页面留联系方式信息；</dd>
					<dd>4、不能公开透露自己的推广比例给别人；</dd>
					<dd>5、不能在QQ群里，论坛等地方公开如意彩的推广事项；</dd>
					<dt>二、推广的相关功能： </dt>
					<dd>1.点击进入"我的账户"，左边导航最下方 "推广链接"即可复制文字链接，
					    	在您的推广链接下注册，完善资料（身份证，真实姓名，手机验证），即可成为您的下级会员。</dd>
					<dd>2.设置推广比例步骤：我的账户---我的业绩---我推广的会员---输入用户名、选择日期（默认只显示前一个月推广的用户）</dd>
					<dd>查找下级----点击用户名后面的 佣金设置----输入推广比例数值（推广比例3%只需设定为0.03即可，但不能高于您自己的</dd>
					<dd>推广比例，设置后不可降低）--确定。</dd>
					<dd>3.佣金结算标准：您或者您会员的订单出票并进度达到100%后，系统会马上按发单金额（网站保底部分除外）进行佣金结算</dd>
					<dd>（自购订单按订单金额给予返点），并及时将佣金转入您的账户，您可通过佣金明细查看推广费是否到账；若您给自己的下级设</dd>
					<dd>置了返点，那您的佣金只可以得到差额部分。</dd>
                    <dd>例如：您发起合买单1000元，您的返点比例为0.03，该订单您自己认购500元，其余跟单用户一共认购400元，网站保底100元，</dd>
                    <dd>则您的佣金为（ 1000-100）×0.03=27元；如该订单网站未保底，则您的佣金为1000×0.03=30元。</dd>
					<dd>您的下级用户发起合买单1000元，您给他设置的返点比例为0.02，该订单他认购500元，您认购200元，</dd>
					<dd>其余跟单用户认购200元，网站保底100元，则他的佣金为（1000-100）×0.02=18元，</dd>
					<dd>您的佣金为（1000-100）×（0.03-0.02）=9元；如该订单网站未保底，则他的佣金为1000×0.02=20元，</dd>
					<dd>您的佣金为1000×（0.03-0.02）=10元。</dd>
					<dd>4.查看佣金明细步骤：我的账户—我的业绩—我的佣金（每个月的销量及佣金收入都会显示在此处---点击"查看明细"</dd>
					<dd>可查看当月具体彩种销量及佣金---点击"查看详情"可查看每笔订单详情【只能查看最近三个月内的详情，如有需要可联</dd>
					<dd>系客服查询三个月前的详情，且只可查询直接下级订单详情】）</dd>
					
					<dd>5.查看会员交易明细步骤：我的账户—我的业绩—会员交易明细—输入用户名—选好时间—查询</dd>
					<dd>（可查看各个会员的销量及您获得的佣金收入，点击"查看详情"可查看具体彩种销量）</dd>
					<dd>6.给下级充值步骤：我的账户-为下级充值，可查看为下级充值的明细-点击"为下级充值"--</dd>
					<dd>选择用户名—真实姓名—充值金额（需大于20元）—您的提款密码—确定</dd>
				</dl>
				<p class="recharge_title"> 推广流程图</p>
				<dl><dd>
				<img alt="推广流程图(1)" src="/rchlw/function/images/liucheng1.jpg"/> </dd>
				<dd><img alt="推广流程图(2)" src="/rchlw/function/images/liucheng2.jpg"></dd>
				</dl>
				<p class="space15">&nbsp;</p>
			</div>
			<div class="netCharge selected none">
				<div class="promotionLink" id="MyDivA" style="">
					<table cellpadding="0" cellspacing="20" style="border:1px solid #e1e1e1; background:#f9f9f9">
						<s:if test="#request.message==null">
						<tbody>
<!-- 							<tr> -->
<!-- 								<td width="105" class="t-r"> 链接到首页： </td> -->
<!-- 								<td> -->
<!-- 								    <ul class="fontLinkUl"> -->
<!-- 										<li> -->
<%-- 											<input name="Tb_textLink0" type="text" value='<s:property value="#request.shouyepath"/>'  --%>
<!-- 											readonly="readonly" id="Tb_textLink0" class="fontLinkUlW530 FL" style="width:400px;"> -->
<%-- 											<span class="FL">&nbsp;&nbsp;<a target="_blank" href='<s:property value="#request.shouyepath"/>'>查看页面</a>&nbsp;&nbsp; --%>
<!-- 											<input onclick="copy('0')" type="button" value="复制链接"> -->
<%-- 											</span>  --%>
<!-- 										</li> -->
<!-- 									</ul> -->
<!-- 									</td> -->
<!-- 							</tr> -->
<!-- 							<tr> -->
								<td class="t-r"> 链接到注册页面： </td>
								<td><ul class="fontLinkUl">
										<li>
											<input name="Tb_textLink" type="text" value='<s:property value="#request.registerpath"/>' 
											readonly="readonly" id="Tb_textLink" class="fontLinkUlW530 FL" style="width:400px;">
											<span class="FL">&nbsp;&nbsp;<a target="_blank" href='<s:property value="#request.registerpath"/>'>查看页面</a>&nbsp;&nbsp;
											<input onclick="copy('1')" type="button" value="复制链接">
											</span> </li>
									</ul></td>
							</tr>
						</tbody>
						</s:if><s:else>
						<tbody>
							<tr>
								<td width="105" class="t-r"> 链接到首页： </td>
								<td>
								    <ul class="fontLinkUl">
										<li>
											<input name="Tb_textLink0" type="text" value='<s:property value="#request.message"/>'
											 readonly="readonly" id="Tb_textLink0" class="fontLinkUlW530 FL" style="width:400px;">
											<span class="FL">&nbsp;&nbsp;<a target="_blank" href='#'>查看页面</a>&nbsp;&nbsp;
											<input onclick="copy('0')" type="button" value="复制链接">
											</span> 
										</li>
									</ul>
									</td>
							</tr>
							<tr>
								<td class="t-r"> 链接到注册页面： </td>
								<td><ul class="fontLinkUl">
										<li>
											<input name="Tb_textLink" type="text" value='<s:property value="#request.message"/>' 
											readonly="readonly" id="Tb_textLink" class="fontLinkUlW530 FL" style="width:400px;">
											<span class="FL">&nbsp;&nbsp;<a target="_blank" href=''>查看页面</a>&nbsp;&nbsp;
											<input onclick="copy('1')" type="button" value="复制链接">
											</span> </li>
									</ul></td>
							</tr>
						</tbody>
						
						</s:else>
						
					</table>
					<p class="space15">&nbsp;</p>
					<div >
						<dl class="fontLinkDL">
							<dt class="cBlue01">1、申请成为推广员需要什么资格？</dt>
							<dd style="padding-left: 20px;">有一定的彩民用户资源，每月有稳定的投注量；<br>
								有一定的网络推广资源，比如广告联盟、个人网站、博客和网吧等资源。</dd>
							<br>
						</dl>
						<dl class="fontLinkDL">
							<dt class="cBlue01">2、怎么样进行推广？</dt>
							<dd style="padding-left: 20px;">复制"会员推广链接"给好友，然后好友通过链接地址注册后，就成为了"我的推广会员"，<br>
								然后好友在如意彩彩票网的所有成功投注都可以算作"我的业绩"。</dd>
							<br>
						</dl>
						<dl class="fontLinkDL">
							<dt class="cBlue01">3、从2011年12月1日0时起，佣金按照发单金额计算。<br>
							</dt>
						</dl>
						<br>
					</div>
				</div>
			</div>
		</div>
		<span id="chongzhiyong" class="none"></span> </div>
	<!--账户管理右边--> 
<script>
$(function(){
	$(".agencyService").addClass("selected");
});
</script>