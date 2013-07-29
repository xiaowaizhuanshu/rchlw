<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <style>div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}</style>

			<h2>账户提款</h2>
				<div class="account_recharge">
				<ul class="account_rechargeTab  BaseTab" >
					<li ControlTarget=".drawing_Wizard" onclick="return reHtml(18,'')" class="light selected">提款向导</li>
					<li ControlTarget=".user_Drawing" onclick="return reHtml(11,'')" class="light">用户提款</li>
					<li ControlTarget=".cash_Records" onclick="return reHtml(12,'')" class="light">提款记录</li>
				</ul>
				</div>

			<div class="account_rechargeContent">
			<%//--提款向导--%>
				<div class="drawing_Wizard selected none">
					<table cellspacing="0" cellpadding="0" class="drawingWizard_table">
						<tr>
							<th width="72">银行名称</th>
							<td>中国工商银行　中国建设银行　中国光大银行　招商银行　兴业银行　深圳发展银行　上海浦东发展银行<br />中国农业银行　中国民生银行　广东发展银行　交通银行　中信银行　杭州银行</td>
						</tr>
						<tr>
							<th width="72">提款手续费</th>
							<td class="red1">本网站支持的提现银行，提现时免手续费。</td>
						</tr>
						<tr>
							<th width="72">到账时间</th>
							<td>1-2个工作日</td>
						</tr>
					</table>
				<p class="recharge_title">提款须知：</p>
				<dl class="recharge_explain">
					<dt>1、银行卡姓名必须与用户的真实姓名相符，否则将提款不成功。</dt>
					<dt>2、如果账户资金低于10元，仍需提款，请一次性提清。</dt>
					<dt> 3、提现只能提到银行卡上，暂不支持信用卡提现。</dt>
					<dt>4、提款到账时间（周一至周五每日处理提款，法定假日除外）：</dt>
					<dd>使用中国工商银行、中国农业银行、中国建设银行、中国招商银行的银行卡进行提现，</dd>
					<dd>16:00前的提款申请：当天到账；16:00后的提款申请：第二天到账。</dd>
					<dd>使用其它银行卡进行提现，</dd>
					<dd>16:00前的提款申请：第二天到账；16:00后的提款申请，第三天到账。</dd>
					<dd>  如有疑问，请致电客服热线：400-856-1000。</dd>
					<dt>5、为了防止少数用户利用信用卡套现和洗钱行为，保证正常用户的资金安全，本站针对提款做出以下规定：</dt>
					<dd><b>  累计充值资金消费未满30%，可提现金额为累计充值资金的70%；累计充值资金消费达到30%，不受此限制。</b></dd>
					<dt>6、提款受理银行：</dt>
					<dd>中国工商银行　中国建设银行　中国光大银行　招商银行　兴业银行　深圳发展银行　上海浦东发展银行</dd>
					<dd> 中国农业银行　中国民生银行　广东发展银行　交通银行　中信银行　杭州银行</dd>
				</dl>
				<div class="space15">&#160;</div>
				</div>
			<%//--提款向导end--%>
			<script>
			$(function(){
				$(".a_ATM").addClass("selected");
			});
		</script>

		</div>
