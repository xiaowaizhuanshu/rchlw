<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div class="ChannelBuyTip">玩法提示：每行至少选1个号码，奖金1,000元。</div>
     <div class="touzhuqi">
            <div class="redselect_left_3dp"><span class="redselect_left_zi">百　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span><span class="redselect_left_zi4">十　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span><span class="redselect_left_zi4">个　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span></div>
           <div class="redselect_mid" style="width:525px;">
            <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>请至少选择1个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ball" style="height:58px;">
                <ul>
				  <li class="ball_num" id="tdsx_2_0_0" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdsx_2_0_1" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdsx_2_0_2" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdsx_2_0_3" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdsx_2_0_4" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdsx_2_0_5" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdsx_2_0_6" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdsx_2_0_7" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="tdsx_2_0_8" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdsx_2_0_9" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                  <li class="ball_numb" id="tdsx_2_0_Q" onclick="QuickSelectZhiFSX(this);">全</li>
                  <li class="ball_numb" id="tdsx_2_0_D" onclick="QuickSelectZhiFSX(this);">大</li>
				  <li class="ball_numb" id="tdsx_2_0_X" onclick="QuickSelectZhiFSX(this);">小</li>
                  <li class="ball_numb" id="tdsx_2_0_J" onclick="QuickSelectZhiFSX(this);">奇</li>
				  <li class="ball_numb" id="tdsx_2_0_O" onclick="QuickSelectZhiFSX(this);">偶</li>
                  <li class="ball_numb" id="tdsx_2_0_C" onclick="QuickSelectZhiFSX(this);">清</li>
                </ul>
                <dl id="SX_bai" class="omit">
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
              <div class="redselect_mid_ball" style="height:58px;">
                <ul>
                  <li class="ball_num" id="tdsx_2_1_0" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdsx_2_1_1" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdsx_2_1_2" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdsx_2_1_3" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdsx_2_1_4" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdsx_2_1_5" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdsx_2_1_6" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdsx_2_1_7" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="tdsx_2_1_8" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdsx_2_1_9" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                  <li class="ball_numb" id="tdsx_2_1_Q" onclick="QuickSelectZhiFSX(this);">全</li>
                  <li class="ball_numb" id="tdsx_2_1_D" onclick="QuickSelectZhiFSX(this);">大</li>
				  <li class="ball_numb" id="tdsx_2_1_X" onclick="QuickSelectZhiFSX(this);">小</li>
                  <li class="ball_numb" id="tdsx_2_1_J" onclick="QuickSelectZhiFSX(this);">奇</li>
				  <li class="ball_numb" id="tdsx_2_1_O" onclick="QuickSelectZhiFSX(this);">偶</li>
                  <li class="ball_numb" id="tdsx_2_1_C" onclick="QuickSelectZhiFSX(this);">清</li>
                </ul>
                <dl id="SX_shi" class="omit">
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
              <div class="redselect_mid_ball" style="height:58px;">
                <ul>
                  <li class="ball_num" id="tdsx_2_2_0" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdsx_2_2_1" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdsx_2_2_2" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdsx_2_2_3" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdsx_2_2_4" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdsx_2_2_5" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdsx_2_2_6" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdsx_2_2_7" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="tdsx_2_2_8" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdsx_2_2_9" onclick="SelectBallZhiFSX(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                  <li class="ball_numb" id="tdsx_2_2_Q" onclick="QuickSelectZhiFSX(this);">全</li>
                  <li class="ball_numb" id="tdsx_2_2_D" onclick="QuickSelectZhiFSX(this);">大</li>
				  <li class="ball_numb" id="tdsx_2_2_X" onclick="QuickSelectZhiFSX(this);">小</li>
                  <li class="ball_numb" id="tdsx_2_2_J" onclick="QuickSelectZhiFSX(this);">奇</li>
				  <li class="ball_numb" id="tdsx_2_2_O" onclick="QuickSelectZhiFSX(this);">偶</li>
                  <li class="ball_numb" id="tdsx_2_2_C" onclick="QuickSelectZhiFSX(this);">清</li>
                </ul>
                <dl id="SX_ge" class="omit">
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
            <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_sx_zhu">0</b> 注，共 <b id="ssc_sx_yuan">0</b> 元。】 <a onclick="ClearAllSX(2);ClearAllSX(0);ClearAllSX(1);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_sx_AddClickZhiF();jisuanZhuihao();" id="btn_2_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Randsx" >
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
							<option value="100">100</option>
						</select>
						<span class="light" onclick='btn_2_RandManyClick($("#jixuan_Randsx").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>    