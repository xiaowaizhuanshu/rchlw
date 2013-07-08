<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
		
		
		<div class="FollowNub"><!-- 追号 start -->

			<dl class="ChannelBuyTab FollowNubTab">
				<dd>购买方式</dd>
				<dt class="light selected" ControlTarget="FollowNubTab1" id="daiGou" onclick="setGoumaifangshi('代购');daiGou_heMai()"><span>&nbsp;</span>代购</dt>
				<dt class="light" ControlTarget="FollowNubTab2" style="display:none;"><span>&nbsp;</span>追号</dt>
				<dt class="light" ControlTarget="FollowNubTab3" id="zuiHao" onclick="setGoumaifangshi('追号');daiGou_heMai()" ><span>&nbsp;</span>收益率追号</dt>
			</dl>
			
			<div class="FollowNubTabContent">
				<div class="FollowNubTab1 none" style="display:none;">FollowNubTab1</div>
				<div class="FollowNubTab2 none">FollowNubTab2</div>
				<div class="FollowNubTab3 none">
					
					<table class="FollowNubTable IncomeSetting">
						<tr>
							<th>收益设置</th>
							<td>
								<!-- 收益计算条件 start -->
								<table class="ComputeFashion">
									<tr>
										<th>1.</th>
										<td>
											开始期号<script>get100QiHao(54,'lotno=T01010&num=10',false,'kaishiqihao');</script>
											<select id="kaishiqihao">
												
												
											</select>，
											投入期数：<input type="text"  class="text" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('jh_count',99);" value="10" id="jh_count"/> ，
											起始倍数：<input type="text" class="text" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('bs_count',9999);" value="10" id="bs_count"/>倍。
										</td>
									</tr>
									<tr>
										<th>2.</th><td><input type="radio" checked="checked" name="IncomeRadio" onclick="showQorB(1);"/>全程收益率<input type="text" class="text" value="10" id="quancheng_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('quancheng_percent',999);" />%；</td>
									</tr>
									<tr>
										<th>&#160;</th>
											<td>
												<input type="radio" name="IncomeRadio" onclick="showQorB(2);"/>
												前<input type="text" class="text" value="10" id="qianqi_count" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('qianqi_count',99);" disabled="disabled"/>
												期收益率<input type="text" class="text" value="10" id="qianqi_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('qianqi_percent',1000);" disabled="disabled"/>%，
												之后收益率<input type="text" class="text" value="5" id="houqi_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('houqi_percent',1000);" disabled="disabled"/>%。
											</td>
									</tr>
									<tr>
										<td colspan="2"><input type="button" class="ComputeBtn" onclick="calculate();"/></td>
									</tr>
								</table>
								<!-- 收益计算条件 end -->
								
								<div class="space10">&#160;</div>
								
								<!-- 收益计算结果 start -->
								<div class="ComputeResultBox">
									<table class="ComputeResult" id="zhuihaoDIV">
										<tr>
											<th>序号</th><th>期号</th><th>倍数</th><th>当期投入</th><th>当期收益</th><th>累计投入</th><th>累计收益</th><th>收益率</th>
										</tr>
										<!-- 计算结果循环 start -->
										
										<!-- 计算结果循环 end -->
									</table>
								</div>
								<!-- 收益计算结果 end -->
								
							</td>
						</tr>
					</table>
					
					<dl class="ChannelBuyTab FollowNubTab PayFashion">
						<dd>支付方式</dd>
						<dt id="fenqikoukuan" class="light selected" ControlTarget="FollowNubPayFashion1"><span>&nbsp;</span>分期扣款</dt>
						<dt id="tiqiankoukuan"  class="light" ControlTarget="FollowNubPayFashion2"><span>&nbsp;</span>提前扣清</dt>
					</dl>
					
					<table class="FollowNubPayFashion1 FollowNubTable Setting none selected">
						<tr>
							<th>追号设置</th>
							<td>
								<ul>
									<li><input type="checkbox" checked="checked" id="zhongType1"/>中奖后终止追号</li>
									<li><input type="checkbox"  onclick="checkPhone();" id="zhuihaoSms"/>追号余额不足手机短信提示</li>
								</ul>
							</td>
						</tr>
					</table>
					
					<table class="FollowNubPayFashion2 FollowNubTable Setting none">
						<tr>
							<th>追号设置</th>
							<td>
								<ul><li><input type="checkbox" checked="checked" id="zhongType2"/>中奖后终止追号</li></ul>
							</td>
						</tr>
					</table>

				</div>
				
				<div class="FollowNubSubmit">
				<table>
					<tr>
						<th>确认购买</th>
						<td style="padding-right:0px;">
							<ul>
								<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light"  onclick="loginRequrl();" target="_blank">登录</a> 。</li>
								<li id="loginStaticInMoney" style="display:none;"><script>touzhuInitStatic()</script></li>
								<li><input type="checkbox" checked="checked" id="xieyi"/>我已阅读并同意<a class="light" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。</li>
								<li><input type="checkbox" checked="checked"  id="fengxiang"/>我已阅读并同意<span class="buy_blue"><a href="/rchlw/function/rules/3DRisk.jsp" title="限号管理" target="_blank">限号管理</a></span>和<a class="light" href="#" >《时时彩投注风险须知》</a>。</li>
							</ul>
						</td>
						<td style="padding-left:0px;"><a href="javascript:;" class="FollowNubSubmitBtn" onclick="openTouzhu_zhuihao();"></a></td>
					</tr>
				</table>
				</div>
				
			</div>
	
		</div><!-- 追号 end -->
		
		
 <script type="text/javascript">
	 //幸运选号号码传递
         var view = GetQueryString("views");
   var listView = GetQueryString("listView");
	   var url = GetQueryString("url");

         	if(!view ==""&&!url==""){
              luckSumit(view,listView,url);

         }
</script>
