<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <div class="ChannelBuyTip">玩法提示：竞猜开奖号码后面两位的数字相加之和，开奖号码为对子奖金100元；非对子奖金50元。</div>
          <div class="touzhuqi">
           <div class="redselect_left" style="padding-left:105px;"><span class="redselect_left_zi">选择和值</span></div>
            <div class="redselect_mid" style="width:340px;">
            <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>请至少选择1个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ball" style="clear:right;">
                <ul style="width:330px">
                  <li class="ball_num" id="tdrxzxh_2_00" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdrxzxh_2_01" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdrxzxh_2_02" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdrxzxh_2_03" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdrxzxh_2_04" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdrxzxh_2_05" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdrxzxh_2_06" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdrxzxh_2_07" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
				  <li class="ball_num" id="tdrxzxh_2_08" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdrxzxh_2_09" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                </ul>
              </div>
			  <div class="redselect_mid_ball" style="clear:left;">
                <ul style="width:330px"> 
                  <li class="ball_num" id="tdrxzxh_2_10" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">10</li>
                  <li class="ball_num" id="tdrxzxh_2_11" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">11</li>
                  <li class="ball_num" id="tdrxzxh_2_12" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">12</li>
                  <li class="ball_num" id="tdrxzxh_2_13" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">13</li>
                  <li class="ball_num" id="tdrxzxh_2_14" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">14</li>
                  <li class="ball_num" id="tdrxzxh_2_15" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">15</li>
                  <li class="ball_num" id="tdrxzxh_2_16" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">16</li>
                  <li class="ball_num" id="tdrxzxh_2_17" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">17</li>
				  <li class="ball_num" id="tdrxzxh_2_18" onclick="SelectBall_rxzxh(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">18</li>
                </ul>
              </div>
            </div>
            <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_rxzuh_zhu">0</b> 注，共 <b id="ssc_rxzuh_yuan">0</b> 元。】 <a onclick="ClearSelect_rxzxh();" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_2_AddClick_rxzxh();jisuanZhuihao();" id="btn_2_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Rand" >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10">10</option>
						</select>
						<span class="light" onclick='btn_2_RandManyClick_rxzxh($("#jixuan_Rand").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>       