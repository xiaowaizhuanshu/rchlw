<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
		<div class="FollowNub"><!-- 追号 start -->
			<dl class="ChannelBuyTab FollowNubTab">
				<dd>购买方式</dd>
				<dt class="light selected"  ControlTarget="FollowNubTab1" id="daiGou" onclick="setGoumaifangshi('代购');tabHemaiAndDaigou('daigou');"><span>&nbsp;</span>代购</dt>
				<dt class="light"  id="controlHemai" ControlTarget="FollowNubTab2"  onclick="setGoumaifangshi('合买');tabHemaiAndDaigou('hemai');"><span>&nbsp;</span>合买</dt>
				<dt class="light" ControlTarget="FollowNubTab3" id="zuiHao" onclick="setGoumaifangshi('追号');tabHemaiAndDaigou('zhuihao');" ><span>&nbsp;</span>追号</dt>
				<dd class="TabEm" id="SASA"><a  target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2013/0313/196.html">由购买人自行全额购买彩票</a></dd>
				<dd class="TabEm" id="HeMaiTiShi" style="display: none"><a  target="_blank" href='<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2013/0313/195.html'>由多人共同出资购买彩票</a></dd>
				<dd class="TabEm" id="ZhuiHao" style="display: none"><a  target="_blank" href='<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/61.html?id=17'>连续多期购买同一个（组）号码</a></dd>
			</dl>
			<div class="FollowNubTabContent">
				<div class="FollowNubTab1 none"></div>
				<div class="FollowNubTab2 none" id="followHemai">
					
					<table class="ChannelBuyTable">
						<tr>
							<th>发起人认购</th>
							<td>								
								<ul>
									<li>我要认购 <input type="text" class="TextInputM" id="buyAmt" name="buyAmt" value="0" onkeyup="bili('buyAmt')" /> 元，比例<em id="buyAmt_bili">0</em>%　<input type="checkbox" id="isMinAmt" onclick="" />设置最低跟单金额 <input type="text" class="TextInputM" id="minAmt" name="minAmt" value="1" /> 元</li>
									<li>我要保底 <input type="text" class="TextInputM"  id="safeAmt" name="safeAmt" value="0" onkeyup="bili('safeAmt')"/> 元，比例<em id="safeAmt_bili">0</em>%　<input type="checkbox"  id="isAllSafeAmt" onclick="ifAllSafeAmt('isAllSafeAmt','safeAmt')" />全额保底</li>
								</ul>
							</td>
						</tr>
					</table>
					<table class="ChannelBuyTable">
						<tr>
							<th>方案设置</th>
							<td>								
								<ul>
									<li>我要提成 
										<select id="commisionRatio" name="commisionRatio">
										<option value="1" >1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option selected value="10">10</option>
										</select> %</li>
									<li>
										是否公开：
										<input type="radio" name="visibility"  value="1" onclick="$('#v_1').attr('class','none');$('#v_2').attr('class','none');"/>保密　
										<input type="radio" id="visibility_openAll" name="visibility" checked="checked" onclick="$('#v_1').removeAttr('class');$('#v_2').attr('class','none');" value="0" />完全公开　
										<i id="v_1">
											【
											<input type="radio" name="visibility_1" checked="checked" onclick="$('#visibility_openAll').val(0)" />立即公开
											<input type="radio" name="visibility_1" onclick="$('#visibility_openAll').val(2)"/>截止后公开
											】　
										</i>
										<input type="radio" id="visibility_openParticipate" name="visibility"   onclick="$('#v_2').removeAttr('class');$('#v_1').attr('class','none');" value="3"/>对跟单者公开
										<i id="v_2" class="none">
											【
											<input type="radio" name="visibility_2" checked="checked" onclick="$('#visibility_openParticipate').val(3)" />立即公开
											<input type="radio" name="visibility_2" onclick="$('#visibility_openParticipate').val(4)" />截止后公开
											】　
										</i>
									</li>
								</ul>
							</td>
						</tr>
					</table>
					<table class="ChannelBuyTable">
						<tr>
							<th>方案宣传</th>
							<td>								
								<textarea cols="68" rows="3" id="description"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="FollowNubTab3 none">
					
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
			            <dt id="fenqikoukuan" class="light selected" ControlTarget="FollowNubPayFashion1"><span>&nbsp;</span>分期扣款</dt>
						<dt id="tiqiankoukuan"  class="light" ControlTarget="FollowNubPayFashion2"><span>&nbsp;</span>提前扣清</dt>
			          </dl>
			          <table class="FollowNubPayFashion1 FollowNubTable Setting none selected">
			            <tr>
			              <th>追号设置</th>
			              <td><ul>
			                <li>
			                  <input name="checkboxJine" value="1" type="checkbox" checked id="zhuihaoDanqi1" onclick="setTextType('zhuihaoDanqi1','danqiJiangjinId1');"/>
			                  单期奖金≥<input name="danqiJiangjin1" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId1',10000000);" value="1000" class="chasenuminput1" type="text" id="danqiJiangjinId1"/>元终止追号</li>
			                   <li>
			                  <input name="checkbox" type="checkbox"  id="zhuihaoSms" onclick="checkPhone();"/>
			                  追号余额不足手机短信提示</li>
			              </ul></td>
			            </tr>
			          </table>
			          <table class="FollowNubPayFashion2 FollowNubTable Setting none">
			            <tr>
			              <th>追号设置</th>
			              <td><ul>
						  <li>
			                  <input name="checkboxJine" value="1" type="checkbox" checked id="zhuihaoDanqi2" onclick="setTextType('zhuihaoDanqi2','danqiJiangjinId2');"/>
			                  单期奖金≥<input name="danqiJiangjin2" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId2',10000000);" value="1000" class="chasenuminput1" type="text" id="danqiJiangjinId2"/>元终止追号</li>
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
								<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light"  onclick="loginRequrl()" target="_blank">登录</a> 。</li>
								<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
								<li><input type="checkbox" checked="checked" id="xieyi"/>我已阅读并同意<a class="light" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。</li>
								<li><input type="checkbox" checked="checked" id="fengxiang" /> 
								我已阅读并同意<span class="buy_blue"><a href="/rchlw/function/rules/3DRisk.jsp" title="限号管理" target="_blank">限号管理</a></span>和<a href="/rchlw/function/rules/3DRisk.jsp" title="投注风险须知议" target="_blank">《福彩3D投注风险须知》</a>。</li>
							</ul>
						</td>
						<td id="sub" style="padding-left:0px;">
							<a href="javascript:;" class="FollowNubSubmitBtn" title="立即购买" onclick="openTouzhu_dipin()"></a>
						</td>
						<td id="sub1" style="padding-left:0px;" class="none">
							<a href="javascript:;" class="FollowNubTogetherBtn" title="发起合买" onclick="faqiHemai()"></a>
						</td>
					</tr>
				</table>
				</div>
				
			</div>
	
		</div><!-- 追号 end -->
		
<script type="text/javascript">
			//点击发起合买进入投注页面的初始化方法
			hemaiInit();
			//幸运选号号码传递
           var view = GetQueryString("views");
		   var listView = GetQueryString("listView");
			   var url = GetQueryString("url");

           	if(!view ==""&&!url==""){
                luckSumit(view,listView,url);

           }
</script>	
 
