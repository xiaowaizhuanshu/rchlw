<%@ page contentType="text/html; charset=utf-8"%>
				<div class="space10">&#160;</div>
				<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByDipin" method="post">		
				<div class="ChannelBuyPannel ChannelBuyCheck">
					<div class="ChannelBuyPannelHead"><h3>1.确认投注信息</h3></div>
					<div class="ChannelBuyPannelBody CheckContent">
						<table id="choose_list">
							<tr><th>序号</th><th>主队</th><th>投注</th><th>胆</th></tr>
						</table>
					</div>			
					
					<div class="ChannelBuyPannelHead"><h3>2.选择过关方式</h3></div>
					<div class="danguanchoose" style="padding: 10px 0 10px 12px;display:none">
						<input type="checkbox" checked="checked" disabled="disabled" style="vertical-align: middle;"/>
								单关
					</div>
					<div class="ChannelBuyPannelBody CheckStyle guoguanchoose">
						<table class="TabM"><tr><th class="selected" onclick="BaseTab($(this));removeSelectWays('PassFreedom');" ControlTarget=".PassFreedom">自由过关</th><td onclick="BaseTab($(this));removeSelectWays('PassSeries');" ControlTarget=".PassSeries">多串过关</td></tr></table>
						<div id="tzTip" style="text-align: center;padding-top: 10px;color: red;" style="">请至少选择2场比赛进行投注。</div>
						<div id="PassFreedom" class="PassFreedom none selected">
							<dl id="r1c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('');" style="display:none;"><dt></dt><dd>单关</dd></dl>
							<dl id="r2c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|2串1',1);" style="display:none;"><dt></dt><dd>2串1</dd></dl>
							<dl id="r3c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|3串1',1);" style="display:none;"><dt></dt><dd>3串1</dd></dl>
							<dl id="r4c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|4串1',1);" style="display:none;"><dt></dt><dd>4串1</dd></dl>
							<dl id="r5c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|5串1',1);" style="display:none;"><dt></dt><dd>5串1</dd></dl>
							<dl id="r6c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|6串1',1);" style="display:none;"><dt></dt><dd>6串1</dd></dl>
							<dl id="r7c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|7串1',1);" style="display:none;"><dt></dt><dd>7串1</dd></dl>
							<dl id="r8c1" class="CheckBox light" onclick="CheckBox($(this));guoGuanWays('|8串1',1);" style="display:none;"><dt></dt><dd>8串1</dd></dl>
						</div>
						
						<div id="PassSeries" class="PassSeries none">
							<dl id="r3c3" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|3串3',1);" style="display:none;"><dt></dt><dd>3串3</dd></dl>
							<dl id="r3c4" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|3串4',1);" style="display:none;"><dt></dt><dd>3串4</dd></dl>
							<dl id="r4c4" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串4',1);" style="display:none;"><dt></dt><dd>4串4</dd></dl>
							<dl id="r4c5" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串5',1);" style="display:none;"><dt></dt><dd>4串5</dd></dl>
							<dl id="r4c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串6',1);" style="display:none;"><dt></dt><dd>4串6</dd></dl>
							<dl id="r4c11" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|4串11',1);" style="display:none;"><dt></dt><dd>4串11</dd></dl>
							<dl id="r5c5" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串5',1);" style="display:none;"><dt></dt><dd>5串5</dd></dl>
							<dl id="r5c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串6',1);" style="display:none;"><dt></dt><dd>5串6</dd></dl>
							<dl id="r5c10" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串10',1);" style="display:none;"><dt></dt><dd>5串10</dd></dl>
							<dl id="r5c16" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串16',1);" style="display:none;"><dt></dt><dd>5串16</dd></dl>
							<dl id="r5c20" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串20',1);" style="display:none;"><dt></dt><dd>5串20</dd></dl>
							<dl id="r5c26" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|5串26',1);" style="display:none;"><dt></dt><dd>5串26</dd></dl>
							<dl id="r6c6" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串6',1);" style="display:none;"><dt></dt><dd>6串6</dd></dl>
							<dl id="r6c7" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串7',1);" style="display:none;"><dt></dt><dd>6串7</dd></dl>
							<dl id="r6c15" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串15',1);" style="display:none;"><dt></dt><dd>6串15</dd></dl>
							<dl id="r6c20" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串20',1);" style="display:none;"><dt></dt><dd>6串20</dd></dl>
							<dl id="r6c22" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串22',1);" style="display:none;"><dt></dt><dd>6串22</dd></dl>
							<dl id="r6c35" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串35',1);" style="display:none;"><dt></dt><dd>6串35</dd></dl>
							<dl id="r6c42" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串42',1);" style="display:none;"><dt></dt><dd>6串42</dd></dl>
							<dl id="r6c50" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串50',1);" style="display:none;"><dt></dt><dd>6串50</dd></dl>
							<dl id="r6c57" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|6串57',1);" style="display:none;"><dt></dt><dd>6串57</dd></dl>
							<dl id="r7c7" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|7串7',1);" style="display:none;"><dt></dt><dd>7串7</dd></dl>
							<dl id="r7c8" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|7串8',1);" style="display:none;"><dt></dt><dd>7串8</dd></dl>
							<dl id="r7c21" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|7串21',1);" style="display:none;"><dt></dt><dd>7串21</dd></dl>
							<dl id="r7c35" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|7串35',1);" style="display:none;"><dt></dt><dd>7串35</dd></dl>
							<dl id="r7c120" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|7串120',1);" style="display:none;"><dt></dt><dd>7串120</dd></dl>
							<dl id="r8c8" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串8',1);" style="display:none;"><dt></dt><dd>8串8</dd></dl>
							<dl id="r8c9" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串9',1);" style="display:none;"><dt></dt><dd>8串9</dd></dl>
							<dl id="r8c28" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串28',1);" style="display:none;"><dt></dt><dd>8串28</dd></dl>
							<dl id="r8c56" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串56',1);" style="display:none;"><dt></dt><dd>8串56</dd></dl>
							<dl id="r8c70" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串70',1);" style="display:none;"><dt></dt><dd>8串70</dd></dl>
							<dl id="r8c247" class="RadioButton light" onclick="RadioButton($(this));guoGuanWays('|8串247',1);" style="display:none;"><dt></dt><dd>8串247</dd></dl>
						</div>
					</div>
					<div class="ChannelBuyPannelHead"><h3>3.确认投注金额</h3></div>
					<div class="ChannelBuyPannelBody CheckSum">
						投注<input id="tb_Multiple_standrad" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');multipleValidateJC();updateMultipleTotalMoney();" class="Narrow" type="text" value="1" />倍（<span style="color: red;">最高10万倍</span>）
						<br />您选择了<b id="matchNum">0</b>场比赛，共<em id="lab_Num_standrad">0</em>注，
						<br />总金额<b id="investField_standrad">0</b><span style="display:none;" id="current_money"></span>元，
						<br />
						<ul>
						<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light1"onclick="loginRequrl();" target="_blank">登录</a> 。
						</li>
						<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
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
                            	<p>我要认购：<input id="buyAmt" onkeyup="bili_jc('buyAmt')" value="0" name="buyAmt" type="text" class="Wenben" />元
                            	&nbsp;&nbsp;比例<span><em id="buyAmt_bili">0</em>%&#12288;</span></p>
 								<p>我要保底：<input onkeyup="bili_jc('safeAmt')" value="0" name="safeAmt" id="safeAmt"  type="text" 
 								 class="Wenben" />元&nbsp;&nbsp;比例<span><em id="safeAmt_bili">0</em>%&#12288;</span></p>
								<p>我要提成：
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
										</select> %
								</p>
                                <p><input id="isMinAmt" type="checkbox" class="fuxuan-h" />设置最低跟单金额
                                <input name="minAmt" id="minAmt" type="text" class="set-low" value="1" />元</p>
                                <p><input onclick="ifAllSafeAmt_jc('isAllSafeAmt','safeAmt')" id="isAllSafeAmt" 
                     			type="checkbox"  class="fuxuan-h" />全额保底</p>
                                <ul>
                                	<li class="">是否公开：</li>
                                    <li class="">
                                    	<dl>
                                        	<dt><input type="radio" name="visibility" value="1"  onclick="$('#v_1').attr('class','none');$('#v_2').attr('class','none');"/>保密</dt>
                                            <dt><input type="radio" id="visibility_openAll" name="visibility" checked="checked" onclick="$('#v_1').removeAttr('class');$('#v_2').attr('class','none');" value="0" />完全公开</dt>
                                            <dt>
                                           <i id="v_1">
											【<input type="radio" name="visibility_1" checked="checked" onclick="$('#visibility_openAll').val(0)" />立即公开
											<input type="radio" name="visibility_1" onclick="$('#visibility_openAll').val(2)"/>截止后公开】　
										</i>
                                            </dt>
                                            <dt style="width:95px"><input type="radio" id="visibility_openParticipate" name="visibility"   onclick="$('#v_2').removeAttr('class');$('#v_1').attr('class','none');" value="3"/>对跟单者公开</dt>
                                          <dt>
                                            <i id="v_2" class="none">
											【<input type="radio" name="visibility_2" checked="checked" onclick="$('#visibility_openParticipate').val(3)" />立即公开
											<input type="radio" name="visibility_2" onclick="$('#visibility_openParticipate').val(4)" />截止后公开】　
										</i>
                                         </dt>
                                        </dl>
                                    </li>
                                </ul>
                                <p class="fangan-xuanchuan">方案宣传：<br /><textarea id="description" onkeyup="checkDesc();"  cols="" rows="" class="xuanchuan"></textarea></p>
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
		
				<input type="hidden" id="lotNo" value="J00013" name="lotNo" />
				<input type="hidden" id="valueType" value="1" name="valueType" />
				<input type="hidden" id="jsonString" name="jsonString" value="" />  
				<input type="hidden" id="caiZhong" value="jingcaizuqiu" /> 
				<input type="hidden" id="path" name="path" value=""/> 
				<input type="hidden" id="errorCode" name="errorCode" value=""/>
				<input type="hidden" id="erjiwanfa" value="过关投注"  />
				<input type="hidden" id="goumaifangshi" value="代购"  />
				<input type="hidden" id="daiGouHemai" name="daiGou" value="daigou"  />
				<input type="hidden" id="jsonStringCLR" name="jsonStringCLR" value="" />
				<input type="hidden" id="ifchangci" value="nochangci" name="ifchangci"/>
				</form>
