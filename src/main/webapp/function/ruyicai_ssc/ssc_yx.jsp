<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <div class="ChannelBuyTip">玩法提示：从0~9任意选择1个号码为一个投注号码，奖金10元。</div>
   <div class="touzhuqi">
           <div class="redselect_left_3dz6"><span class="redselect_left_zi">个　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span></div>
            <div class="redselect_mid" style="width:335px;">
       <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>每位至少选择1个号码</i><span>&nbsp;</span></div>
         <div class="redselect_mid_ball" style="height:51px;">
                <ul>
                  <li class="ball_num" id="tdyx_2_0_0" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdyx_2_0_1" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdyx_2_0_2" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdyx_2_0_3" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdyx_2_0_4" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdyx_2_0_5" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdyx_2_0_6" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdyx_2_0_7" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
				  <li class="ball_num" id="tdyx_2_0_8" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdyx_2_0_9" onclick="SelectBallZhiFYX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                </ul>
                <dl id="YX_ge" class="omit">
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
					<dd>0</dd>
				</dl>
              </div>
		    </div>
		    <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_yx_zhu">0</b> 注，共 <b id="ssc_yx_yuan">0</b> 元。】 <a onclick="ClearAllYX(0);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_yx_AddClickZhiFYX();jisuanZhuihao();" id="btnyx_2_AddYX"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Randyx" >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							
						</select>
						<span class="light" onclick="btn_2_RandManyClick($('#jixuan_Randyx').val());jisuanZhuihao();">&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>       