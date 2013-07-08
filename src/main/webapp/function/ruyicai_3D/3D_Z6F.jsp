<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div class="ChannelBuyTip">玩法提示：所选号码与开奖号码相同（顺序不限）即中160元。</div>
          <div class="touzhuqi">
             <div class="redselect_left" style="padding-left:110px;"><span class="redselect_left_zi">选择号码</span><span class="redselect_left_zi1">遗　　漏</span></div>
             <div class="redselect_mid" style="width:335px;">
             <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>请至少选择3个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ball">
                <ul>
                  <li class="ball_num" id="td3_2_0_0" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="td3_2_0_1" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="td3_2_0_2" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="td3_2_0_3" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="td3_2_0_4" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="td3_2_0_5" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="td3_2_0_6" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="td3_2_0_7" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="td3_2_0_8" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="td3_2_0_9" onclick="SelectBallZu6F(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                </ul>
              </div>
              <div class="redselect_mid_yi3dp">
                <ul id="3d_z6">
                  	<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
                </ul>
              </div>
            </div>
            <div class="ChannelBuyAddInfo">【 您选择了 <b id="z6z_zhu">0</b> 注，共 <b id="z6z_yuan">0</b> 元。】 <a onclick="ClearAll(3,0);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_2_AddClickZu6F();jisuanZhuihao();" id="btn_Zu6F_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Rand6" >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
						</select>
						<span class="light" onclick='btn_2_RandManyClick($("#jixuan_Rand6").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>       