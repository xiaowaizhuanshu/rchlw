<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
      <div class="ChannelBuyTip">玩法提示：从0~9任意选择2个或以上的号码，奖金50元。（开出对子不算中奖）</div>
       <div class="touzhuqi">
           <div class="redselect_left" style="padding-left:105px;"><span class="redselect_left_zi">选择号码</span></div>
            <div class="redselect_mid" style="width:340px;">
            <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>请至少选择2个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ball">
                <ul>
                  <li class="ball_num" id="tdrxzxf_2_0_0" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdrxzxf_2_0_1" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdrxzxf_2_0_2" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdrxzxf_2_0_3" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdrxzxf_2_0_4" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdrxzxf_2_0_5" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdrxzxf_2_0_6" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdrxzxf_2_0_7" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
				  <li class="ball_num" id="tdrxzxf_2_0_8" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdrxzxf_2_0_9" onclick="SelectBall_rxzxf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                </ul>
              </div>
            </div>
             <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_rxzuf_zhu">0</b> 注，共 <b id="ssc_rxzuf_yuan">0</b> 元。】 <a onclick="ClearAll('rxzxf',0);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_2_AddClick_rxzxf();jisuanZhuihao();" id="btn_2_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Randrxzxf" >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10">10</option>
							<option value="20">20</option>
						</select>
						<span class="light" onclick='btn_2_RandManyClick($("#jixuan_Randrxzxf").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>       