<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
		<div class="FollowNub"><!-- 追号 start -->

			<dl class="ChannelBuyTab FollowNubTab">
				<dd>购买方式</dd>
				<dt class="light selected"  ControlTarget="FollowNubTab1" id="daiGou" onclick="setGoumaifangshi('代购');daiGou_heMai();setdaigouOrzhuihao('daigou');"><span>&nbsp;</span>代购</dt>
				<dt class="light" ControlTarget="FollowNubTab3" id="zuiHao" onclick="setGoumaifangshi('追号');daiGou_heMai();setdaigouOrzhuihaoByGaopin('zhuihao');" ><span>&nbsp;</span>收益率追号</dt>
				<dt class="light" ControlTarget="FollowNubTab4" id="ziyouZhuihao" onclick="setGoumaifangshi('自由追号');setdaigouOrzhuihao('ziyouZhuihao');" ><span>&nbsp;</span>自由追号</dt>
				<dd class="TabEm" id="SASA"><a  target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2013/0313/196.html">由购买人自行全额购买彩票</a></dd>
				<dd class="TabEm" id="ZhuiHao" style="display: none"> <a  target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/63.html?id=17">什么叫收益率追号？</a></dd>
				<dd class="TabEm" id="ZYZH" style="display: none"><a  target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/61.html?id=17">连续多期购买同一个（组）号码</a></dd>
			</dl>
			<div class="FollowNubTabContent">
				<div class="FollowNubTab1 none"></div>
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
											开始期号
											<select id="kaishiqihao">
												
												
											</select>，
											投入期数：<input type="text"  class="text" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('jh_count',99);calculate();" value="10" id="jh_count"/> ，
											起始倍数：<input type="text" class="text" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('bs_count',9999);calculate();" value="1" id="bs_count"/>倍。
										</td>
									</tr>
									<tr>
										<th>2.</th><td><input type="radio" checked="checked" name="IncomeRadio" onclick="showQorB(1);"/>全程收益率<input type="text" class="text" value="10" id="quancheng_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('quancheng_percent',999);calculate();" />%；</td>
									</tr>
									<tr>
										<th>&#160;</th>
											<td>
												<input type="radio" name="IncomeRadio" onclick="showQorB(2);"/>
												前<input type="text" class="text" value="5" id="qianqi_count" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('qianqi_count',99);" disabled="disabled"/>
												期收益率<input type="text" class="text" value="10" id="qianqi_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('qianqi_percent',1000);calculate();" disabled="disabled"/>%，
												之后收益率<input type="text" class="text" value="5" id="houqi_percent" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('houqi_percent',1000);calculate();" disabled="disabled"/>%。
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
									<table class="ComputeResult" style="width:578px;">
										<tr>
											<th style="width:36px;">序号</th>
											<th style="width:100px;">期号</th>
											<th style="width:72px;">倍数</th>
											<th style="width:72px;">当期投入</th>
											<th style="width:72px;">当期收益</th>
											<th style="width:72px;">累计投入</th>
											<th style="width:72px;">累计收益</th>
											<th style="width:auto;">收益率</th>
										</tr>
									</table>
									<div style="overflow-y:scroll; height:295px; width:598px;" >
										<table class="ComputeResult" style="width:578px;" id="zhuihaoDIV">
											<!-- 计算结果循环 start -->
											<!-- 计算结果循环 end -->
										</table>
									</div>
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
				<div class="FollowNubTab4 none">
					<table class="FollowNubTable IncomeSetting">
			            <tr>
			              <th>期数选择</th>
			              <td>
			                 <select name="select2" id="betchZhuihaoNum" onchange="setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());">
			                            <option value="9">追10期</option>
			                            <option value="19">追20期</option>
			                            <option value="29">追30期</option>
			                            <option value="49">追50期</option>
			                            <option value="99">追100期</option>
			                       </select>　
			                     <div class="space10">&#160;</div>
			                  <div class="ComputeResultBox_zhuihao">
			                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="chasenumtable" id="qishuList">
								  
								</table>
							</div>
			              </td>
			            </tr>
			          </table>
			          <dl class="ChannelBuyTab FollowNubTab PayFashion">
			            <dd>支付方式</dd>
			            <dt id="fenqikoukuan1" class="light selected" ControlTarget="FollowNubPayFashionpt1"><span>&nbsp;</span>分期扣款</dt>
						<dt id="tiqiankoukuan1"  class="light" ControlTarget="FollowNubPayFashionpt2"><span>&nbsp;</span>提前扣清</dt>
			          </dl>
			          <table class="FollowNubPayFashionpt1 FollowNubTable Setting none selected">
			            <tr>
			              <th>追号设置</th>
			              <td><ul>
			                <li>
			                  <input name="checkboxJine" value="1" type="checkbox" checked id="zhuihaoDanqi1" onclick="setTextType('zhuihaoDanqi1','danqiJiangjinId1');"/>
			                  单期奖金≥<input name="danqiJiangjin1" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId1',10000000);" value="100" class="chasenuminput1" type="text" id="danqiJiangjinId1"/>元终止追号</li>
			                   <li>
			                  <input name="checkbox" type="checkbox"  id="zhuihaoSms" onclick="checkPhone();"/>
			                  追号余额不足手机短信提示</li>
			              </ul></td>
			            </tr>
			          </table>
			          <table class="FollowNubPayFashionpt2 FollowNubTable Setting none">
			            <tr>
			              <th>追号设置</th>
			              <td><ul>
						  <li>
			                  <input name="checkboxJine" value="1" type="checkbox" checked id="zhuihaoDanqi2" onclick="setTextType('zhuihaoDanqi2','danqiJiangjinId2');"/>
			                  单期奖金≥<input name="danqiJiangjin2" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId2',10000000);" value="100" class="chasenuminput1" type="text" id="danqiJiangjinId2"/>元终止追号</li>
			              </ul></td>
			            </tr>
			          </table>
				</div>
				<div class="FollowNubSubmit">
				<table>
					<tr>
						<th>确认购买</th>
						<td style="padding-right:0px;">
							<ul>
								<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light"onclick="loginRequrl();" target="_blank">登录</a> 。</li>
								<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
								<li><input type="checkbox" checked="checked" id="xieyi"/>我已阅读并同意<a class="light" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。</li>
								<li><input type="checkbox" checked="checked" id="fengxiang" />我已阅读并同意<span class="buy_blue"><a href="/rchlw/function/rules/sscRisk.jsp" title="限号管理" target="_blank">限号管理</a></span>和<a class="light" href="/rchlw/function/rules/sscRisk.jsp" target="_blank" >《时时彩投注风险须知》</a>。</li>
							</ul>
						</td>
						<td style="padding-left:0px;"><a href="javascript:;" class="FollowNubSubmitBtn" onclick="openTouzhu_zhuihao();"></a></td>
					</tr>
				</table>
				</div>
				
			</div>
	
		</div><!-- 追号 end -->
		
<script>$(function() {get100QiHao(55,'lotno=T01007&num=100',false,'kaishiqihao');});</script>		
 
