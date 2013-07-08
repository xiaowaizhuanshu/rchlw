<%@ page contentType="text/html; charset=utf-8"%>		
<%@taglib prefix="s" uri="/struts-tags"%>
    <div class="FollowNub">
      <!-- 追号 start -->
      <dl class="ChannelBuyTab FollowNubTab">
        <dd>购买方式</dd>
        <dt class="light1 selected"  ControlTarget="FollowNubTab1" id="daiGou" onclick="setGoumaifangshi('代购');daiGou_heMai();setdaigouOrzhuihao('daigou');"><span>&nbsp;</span>代购</dt>
		<dt class="light1" ControlTarget="FollowNubTab3" id="zuiHao" onclick="setGoumaifangshi('追号');daiGou_heMai();setdaigouOrzhuihao('zhuihao');setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());" ><span>&nbsp;</span>追号</dt>
      	<dd class="TabEm" id="SASA"><a  target="_blank" href="/bangzhuzhongxin/goucaibangzhu/daigou/20110615131527_581.html?id=581&code1=153&code=126">由购买人自行全额购买彩票</a></dd>
		<dd class="TabEm" id="ZhuiHao" style="display: none"><a  target="_blank" href='/bangzhuzhongxin/goucaibangzhu/zhuihao/20110905105245_2700.html?id=2700&code1=202&code=126'>连续多期购买同一个（组）号码</a></dd>
      </dl>
      <div class="FollowNubTabContent">
        <div class="FollowNubTab1 none"></div>
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
                       <a href="#" class="light1" title="查看追号规则">查看追号规则</a>
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
            <dt id="fenqikoukuan" class="light1 selected" ControlTarget="FollowNubPayFashion1"><span>&nbsp;</span>分期扣款</dt>
			<dt id="tiqiankoukuan"  class="light1" ControlTarget="FollowNubPayFashion2"><span>&nbsp;</span>提前扣清</dt>
          </dl>
          <table class="FollowNubPayFashion1 FollowNubTable Setting none selected">
            <tr>
              <th>追号设置</th>
              <td><ul>
                <li>
                  <input name="checkboxJine" value="1" type="checkbox" checked id="zhuihaoDanqi1" onclick="setTextType('zhuihaoDanqi1','danqiJiangjinId1');"/>
                  单期奖金≥<input name="danqiJiangjin1" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId1',10000000);" value="1" class="chasenuminput1" type="text" id="danqiJiangjinId1"/>元终止追号</li>
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
                  单期奖金≥<input name="danqiJiangjin2" onkeyup="value=value.replace('０','0').replace('１','1').replace('２','2').replace('３', '3').replace('４','4').replace('５','5').replace('６','6').replace('７', '7').replace('８','8').replace('９','9');checkBeishu('danqiJiangjinId2',10000000);" value="1" class="chasenuminput1" type="text" id="danqiJiangjinId2"/>元终止追号</li>
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
							<li id="loginStaticInTouZhu">您尚未登录，请先 <a class="light1" onclick="loginRequrl();" target="_blank">登录</a> 。</li>
							<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
							<li><input type="checkbox" checked="checked" />我已阅读并同意<a class="light1" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>。</li>
						</ul>
					</td>
					<td style="padding-left:0px;"><a href="javascript:;" class="FollowNubSubmitBtn" onclick="openTouzhu_ssq();"></a></td>
				</tr>
			</table>
		</div>
      </div>
    </div>
    <!-- 追号 end -->
		
 <script type="text/javascript">
           var view = GetQueryString("views");
		   var listView = GetQueryString("listView");
			   var url = GetQueryString("url");
           	if(!view ==""&&!url==""){
                luckSumit(view,listView,url);

           }
</script>
