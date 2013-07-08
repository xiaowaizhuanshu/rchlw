<%@ page contentType="text/html; charset=utf-8"%>
				<div class="space10">&#160;</div>
				<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByDipin" method="post">		
				<div class="ChannelBuyPannel ChannelBuyCheck">
					<div class="ChannelBuyPannelHead"><h3>1.确认投注信息</h3></div>
					<div class="ChannelBuyPannelBody CheckContent">
						<table id="zjq_choose_list">
							<tr><th width="30">序号</th><th width="60">比赛</th><th width="5">胆</th></tr>
						</table>
					</div>			
					
					<div class="ChannelBuyPannelHead"><h3>2.选择过关方式</h3></div>
					<div class="danguanchoose" style="padding: 10px 0 10px 12px;display:none">
						<input type="checkbox" checked="checked" disabled="disabled" style="vertical-align: middle;"/>
								单关
					</div>
					<div class="ChannelBuyPannelBody CheckStyle guoguanchoose">
						<table class="TabM"><tr><th class="selected" onclick="BaseTab($(this));removeSelectWays('PassFreedom');" ControlTarget=".PassFreedom">自由过关</th><td onclick="BaseTab($(this));removeSelectWays('PassSeries');" ControlTarget=".PassSeries">多串过关</td></tr></table>
						<div id="zjqTip" style="text-align: center;padding-top: 10px;color: red;" style="">请至少选择2场比赛进行投注。</div>
						<div id="PassFreedom" class="PassFreedom none selected">
							<dl id="zjq_r1c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|1串1',1);" style="display:none;"><dt></dt><dd>单关</dd></dl>
							<dl id="zjq_r2c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|2串1',1);" style="display:none;"><dt></dt><dd>2串1</dd></dl>
							<dl id="zjq_r3c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|3串1',1);" style="display:none;"><dt></dt><dd>3串1</dd></dl>
							<dl id="zjq_r4c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|4串1',1);" style="display:none;"><dt></dt><dd>4串1</dd></dl>
							<dl id="zjq_r5c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|5串1',1);" style="display:none;"><dt></dt><dd>5串1</dd></dl>
							<dl id="zjq_r6c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|6串1',1);" style="display:none;"><dt></dt><dd>6串1</dd></dl>
						</div>
						
						<div id="PassSeries" class="PassSeries none">
							<dl id="zjq_r3c3" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|3串3',1);" style="display:none;"><dt></dt><dd>3串3</dd></dl>
							<dl id="zjq_r3c4" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|3串4',1);" style="display:none;"><dt></dt><dd>3串4</dd></dl>
							<dl id="zjq_r4c4" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串4',1);" style="display:none;"><dt></dt><dd>4串4</dd></dl>
							<dl id="zjq_r4c5" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串5',1);" style="display:none;"><dt></dt><dd>4串5</dd></dl>
							<dl id="zjq_r4c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串6',1);" style="display:none;"><dt></dt><dd>4串6</dd></dl>
							<dl id="zjq_r4c11" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串11',1);" style="display:none;"><dt></dt><dd>4串11</dd></dl>
							<dl id="zjq_r5c5" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串5',1);" style="display:none;"><dt></dt><dd>5串5</dd></dl>
							<dl id="zjq_r5c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串6',1);" style="display:none;"><dt></dt><dd>5串6</dd></dl>
							<dl id="zjq_r5c10" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串10',1);" style="display:none;"><dt></dt><dd>5串10</dd></dl>
							<dl id="zjq_r5c16" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串16',1);" style="display:none;"><dt></dt><dd>5串16</dd></dl>
							<dl id="zjq_r5c20" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串20',1);" style="display:none;"><dt></dt><dd>5串20</dd></dl>
							<dl id="zjq_r5c26" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串26',1);" style="display:none;"><dt></dt><dd>5串26</dd></dl>
							<dl id="zjq_r6c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串6',1);" style="display:none;"><dt></dt><dd>6串6</dd></dl>
							<dl id="zjq_r6c7" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串7',1);" style="display:none;"><dt></dt><dd>6串7</dd></dl>
							<dl id="zjq_r6c15" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串15',1);" style="display:none;"><dt></dt><dd>6串15</dd></dl>
							<dl id="zjq_r6c20" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串20',1);" style="display:none;"><dt></dt><dd>6串20</dd></dl>
							<dl id="zjq_r6c22" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串22',1);" style="display:none;"><dt></dt><dd>6串22</dd></dl>
							<dl id="zjq_r6c35" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串35',1);" style="display:none;"><dt></dt><dd>6串35</dd></dl>
							<dl id="zjq_r6c42" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串42',1);" style="display:none;"><dt></dt><dd>6串42</dd></dl>
							<dl id="zjq_r6c50" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串50',1);" style="display:none;"><dt></dt><dd>6串50</dd></dl>
							<dl id="zjq_r6c57" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串57',1);" style="display:none;"><dt></dt><dd>6串57</dd></dl>
						</div>
					</div>
					<div class="ChannelBuyPannelHead"><h3>3.确认投注金额</h3></div>
					<div class="ChannelBuyPannelBody CheckSum">
						投注<input id="tb_Multiple_standrad_zjq" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');multipleValidateJC();updateMultipleTotalMoney();" class="Narrow" type="text" value="1" />倍（<span style="color: red;">最高10万倍</span>）
						<br />您选择了<b id="matchNum_zjq">0</b>场比赛，共<em id="lab_Num_standrad_zjq">0</em>注，
						<br />总金额<b id="investField_standrad_zjq">0</b><span style="display:none;" id="current_money_zjq"></span>元，
						<br />
						<ul>
						<li id="loginStaticInTouZhu_zjq">您尚未登录，请先 <a class="light1"onclick="loginRequrl();" target="_blank">登录</a> 。
						</li>
						<li id="loginStaticInMoney_zjq" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
						</ul>
						<input type="checkbox" checked="checked" id="xieyi"/>我已阅读并同意<a class="light" 
						href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。
						<div class="closebutton"><a href="javascript:;" class="SubmitBtn" onclick="openTouzhu();checkZhuma();"></a>
						<a href="javascript:;" class="OPenhemai" onclick="tabHemaiAndDaigou_jc('hemai');"></a></div>
					</div>
				<!--合买开始20121119-->                    
                    <div class="ChannelBuyPannelHead-wrap">
                    		<div class="ChannelBuyPannelHead"><h3>4.合买</h3></div>
                            <div class="ChannelBuyPannelBody Addhemai">
                            	<p>我要认购：<input id="buyAmt_zjq" onkeyup="bili_jc('buyAmt')" value="0" name="buyAmt" type="text" class="Wenben" />元
                            	&nbsp;&nbsp;比例<span><em id="buyAmt_bili_zjq">0</em>%&#12288;</span></p>
 								<p>我要保底：<input onkeyup="bili_jc('safeAmt')" value="0" name="safeAmt_zjq" id="safeAmt_zjq"  type="text" 
 								 class="Wenben" />元&nbsp;&nbsp;比例<span><em id="safeAmt_bili_zjq">0</em>%&#12288;</span></p>
								<p>我要提成：
								<select id="commisionRatio_zjq" name="commisionRatio_zjq">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option selected value="10">10</option>
										</select> %
								</p>
                                <p><input id="isMinAmt_zjq" type="checkbox" class="fuxuan-h" />设置最低跟单金额
                                <input name="minAmt_zjq" id="minAmt_zjq" type="text" class="set-low" value="1" />元</p>
                                <p><input onclick="ifAllSafeAmt_jc('isAllSafeAmt_zjq','safeAmt_zjq')" id="isAllSafeAmt_zjq" 
                     			type="checkbox"  class="fuxuan-h" />全额保底</p>
                                <ul>
                                	<li class="">是否公开：</li>
                                    <li class="">
                                    	<dl>
                                        	<dt><input type="radio" name="visibility_zjq" value="1"  onclick="$('#v_11').attr('class','none');$('#v_22').attr('class','none');"/>保密</dt>
                                            <dt><input type="radio" id="visibility_openAll_zjq" name="visibility_zjq" checked="checked" onclick="$('#v_11').removeAttr('class');$('#v_22').attr('class','none');" value="0" />完全公开</dt>
                                            <dt>
                                           <i id="v_11">
											【<input type="radio" name="visibility_1" checked="checked" onclick="$('#visibility_openAll_zjq').val(0)" />立即公开
											<input type="radio" name="visibility_1" onclick="$('#visibility_openAll_zjq').val(2)"/>截止后公开】　
										</i>
                                            </dt>
                                            <dt style="width:95px"><input type="radio" id="visibility_openParticipate_zjq" name="visibility_zjq"   onclick="$('#v_22').removeAttr('class');$('#v_11').attr('class','none');" value="3"/>对跟单者公开</dt>
                                          <dt>
                                            <i id="v_22" class="none">
											【<input type="radio" name="visibility_2" checked="checked" onclick="$('#visibility_openParticipate_zjq').val(3)" />立即公开
											<input type="radio" name="visibility_2" onclick="$('#visibility_openParticipate_zjq').val(4)" />截止后公开】　
										</i>
                                         </dt>
                                        </dl>
                                    </li>
                                </ul>
                                <p class="fangan-xuanchuan">方案宣传：<br /><textarea id="description_zjq" onkeyup="checkDesc();"  cols="" rows="" class="xuanchuan"></textarea></p>
                                <a class="SubmitBtn-he" href="javascript:;" onclick="faqiHemai_jc()"></a>
                                <a class="quxiao-hemai"></a>
                            </div>
                    </div>
<!--合买结束20121119-->                     
               
				</div>
				
				<!-- 选号框-->
				<div id="xuanhaokuang" style="display: none;">
					<jsp:include page="/function/public_rtz.jsp"/>
				</div>
				
				<input type="hidden" id="lotNo" value="J00003" name="lotNo" />
				<input type="hidden" id="valueType" value="1" name="valueType" />
		 		<input type="hidden" id="jsonString" name="jsonString" value="" /> 
				<input type="hidden" id="caiZhong" value="jingcaizuqiu" /> 
				<input type="hidden" id="path" name="path" value=""/> 
				<input type="hidden" id="errorCode" name="errorCode" value=""/>
				<input type="hidden" id="erjiwanfa" value="过关投注"  />
				<input type="hidden" id="goumaifangshi" value="代购"  />
				<input type="hidden" id="daiGouHemai" name="daiGou" value="daigou"  />
				<input type="hidden" id="jsonStringCLR" name="jsonStringCLR" value="" />
				</form>
