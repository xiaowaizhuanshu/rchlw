<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
		
	<div class="FollowNubFootball" id="buyways"><!-- 追号 start -->
		<dl class="ChannelBuyTab FollowNubTab">
				<dd>购买方式</dd>
				<dt class="light selected"  ControlTarget="FollowNubTab1" id="daiGou" onclick="setGoumaifangshi('代购');tabHemaiAndDaigou('daigou');"><span>&nbsp;</span>代购</dt>
				<dt class="light"  id="controlHemai" ControlTarget="FollowNubTab2"  onclick="setGoumaifangshi('合买');tabHemaiAndDaigou('hemai');"><span>&nbsp;</span>合买</dt>
				<dd class="TabEm" id="SASA"><a  target="_blank" href="<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2013/0313/196.html">由购买人自行全额购买彩票</a></dd>
				<dd class="TabEm" id="HeMaiTiShi" style="display: none"><a  target="_blank" href='<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/goumaicaipiao/2013/0313/195.html'>由多人共同出资购买彩票</a></dd>
			</dl>
			<div class="FollowNubTabContent">
				<div class="FollowNubTab1"></div>
				<div class="FollowNubTab2 none" id="followHemai">
					<table class="ChannelBuyTable">
						<tr>
							<th>发起人认购</th>
							<td>								
								<ul>
									<li>我要认购 <input type="text" class="TextInputM" id="buyAmt" name="buyAmt" value="0" onkeyup="bili('buyAmt')" /> 元，比例<em id="buyAmt_bili">0</em>%　<input type="checkbox" id="isMinAmt"  onclick="" />设置最低跟单金额 <input type="text" class="TextInputM" id="minAmt" name="minAmt" value="1" /> 元</li>
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
										<input type="radio" name="visibility"  value="1"  onclick="$('#v_1').attr('class','none');$('#v_2').attr('class','none');"/>保密　
										<input type="radio" id="visibility_openAll" name="visibility"  checked="checked" onclick="$('#v_1').removeAttr('class');$('#v_2').attr('class','none');" value="0" />完全公开　
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
				<div class="FollowNubSubmit">
				<table>
					<tr>
						<th>确认购买</th>
						<td style="padding-right:0px;">
							<ul>
								<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light"  onclick="loginRequrl();" target="_blank">登录</a> 。</li>
								<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
								<li><input type="checkbox" checked="checked" id="xieyi"/>我已阅读并同意<a class="light" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。</li>
							</ul>
						</td>
					 <td id="sub" >
								<a href="javascript:;" class="FollowNubSubmitBtn" title="立即购买" onclick="openTouzhu()"></a>
						</td>
						<td id="sub1" class="none">
							<a href="javascript:;" class="FollowNubTogetherBtn" title="发起合买" onclick="faqiHemai()"></a>
						</td>
					</tr>
				</table>
				</div>

			</div>
	
		</div><!-- 追号 end -->
<script type="text/javascript">
		//点发起合买进入投注页面的初始化方法
		 hemaiInit();
</script>			
