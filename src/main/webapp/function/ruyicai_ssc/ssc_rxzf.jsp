<%@ page language="java" contentType="text/html; charset=utf-8"pageEncoding="utf-8"%>
<div class="ChannelBuyTip">玩法提示：所选十位、个位与开奖号码全部一致即中奖，奖金100元。</div>
<div class="touzhuqi">
            <div class="redselect_left_3dp" style="padding-left:25px;"><span class="redselect_left_zi">十　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span><span class="redselect_left_zi4">个　　位</span><span class="redselect_left_zi omitTitle">遗　　漏</span></div>
            <div class="redselect_mid" style="width:500px;">
            <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>每位至少选择1个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ballssc" style="height:51px;">
                <ul>
				  <li class="ball_num" id="tdrxzf_2_0_0" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdrxzf_2_0_1" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdrxzf_2_0_2" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdrxzf_2_0_3" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdrxzf_2_0_4" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdrxzf_2_0_5" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdrxzf_2_0_6" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdrxzf_2_0_7" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="tdrxzf_2_0_8" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
                  <li class="ball_num" id="tdrxzf_2_0_9" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                  <li class="ball_numb" id="tdrxzf_2_0_Q" onclick="QuickSelect_rxzf(this);">全</li>
                  <li class="ball_numb" id="tdrxzf_2_0_D" onclick="QuickSelect_rxzf(this);">大</li>
				  <li class="ball_numb" id="tdrxzf_2_0_X" onclick="QuickSelect_rxzf(this);">小</li>
                  <li class="ball_numb" id="tdrxzf_2_0_J" onclick="QuickSelect_rxzf(this);">奇</li>
				  <li class="ball_numb" id="tdrxzf_2_0_O" onclick="QuickSelect_rxzf(this);">偶</li>
                  <li class="ball_numb" id="tdrxzf_2_0_C" onclick="QuickSelect_rxzf(this);">清</li>
                </ul>
                <dl id="EXZX_shi" class="omit" style="margin:0px 0px 0px 7px;">
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
				</dl>
              </div>
              <div class="redselect_mid_ballssc" style="height:51px; margin-top:18px;">
                <ul>
                  <li class="ball_num" id="tdrxzf_2_1_0" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
                  <li class="ball_num" id="tdrxzf_2_1_1" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
                  <li class="ball_num" id="tdrxzf_2_1_2" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
                  <li class="ball_num" id="tdrxzf_2_1_3" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
                  <li class="ball_num" id="tdrxzf_2_1_4" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
                  <li class="ball_num" id="tdrxzf_2_1_5" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
                  <li class="ball_num" id="tdrxzf_2_1_6" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
                  <li class="ball_num" id="tdrxzf_2_1_7" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
                  <li class="ball_num" id="tdrxzf_2_1_8" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
				  <li class="ball_num" id="tdrxzf_2_1_9" onclick="SelectBall_rxzf(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
                  <li class="ball_numb" id="tdrxzf_2_1_Q" onclick="QuickSelect_rxzf(this);">全</li>
                  <li class="ball_numb" id="tdrxzf_2_1_D" onclick="QuickSelect_rxzf(this);">大</li>
				  <li class="ball_numb" id="tdrxzf_2_1_X" onclick="QuickSelect_rxzf(this);">小</li>
                  <li class="ball_numb" id="tdrxzf_2_1_J" onclick="QuickSelect_rxzf(this);">奇</li>
				  <li class="ball_numb" id="tdrxzf_2_1_O" onclick="QuickSelect_rxzf(this);">偶</li>
                  <li class="ball_numb" id="tdrxzf_2_1_C" onclick="QuickSelect_rxzf(this);">清</li>
                </ul>
                <dl id="EXZX_ge" class="omit" style="margin:0px 0px 0px 7px;">
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
					<dd>00</dd>
				</dl>
              </div>
              <div class="redselect_mid_ballp"></div>
            </div>
            <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_rxzf_zhu">0</b> 注，共 <b id="ssc_rxzf_yuan">0</b> 元。】 <a onclick="ClearAll('rxzf',0);ClearAll('rxzf',1);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_2_AddClick_rxzf();jisuanZhuihao();" id="btn_2_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Randrxzf">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
						</select>
						<span class="light" onclick='btn_2_RandManyClick($("#jixuan_Randrxzf").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
</div>		 