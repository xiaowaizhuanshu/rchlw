<%@ page contentType="text/html; charset=utf-8"%>
<div class="ChannelBuyTip">玩法提示：所选号码与开奖号码按位数全部相同即中1，000元。</div>
<div class="touzhuqi">
            <div class="redselect_left_3dp"><span class="redselect_left_zi">百　　位</span>
            <span class="redselect_left_zi1">遗　　漏</span>
            <span class="redselect_left_zi1">十　　位</span>
            <span class="redselect_left_zi1">遗　　漏</span>
            <span class="redselect_left_zi1">个　　位</span>
            <span class="redselect_left_zi1">遗　　漏</span></div>
            <div class="redselect_mid" style="width:540px;">
              <div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>每位至少选择1个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ball">
                <ul>
					<li class="ball_num" id="td1_2_0_0" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
					<li class="ball_num" id="td1_2_0_1" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
					<li class="ball_num" id="td1_2_0_2" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
					<li class="ball_num" id="td1_2_0_3" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
					<li class="ball_num" id="td1_2_0_4" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
					<li class="ball_num" id="td1_2_0_5" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
					<li class="ball_num" id="td1_2_0_6" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
					<li class="ball_num" id="td1_2_0_7" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
					<li class="ball_num" id="td1_2_0_8" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
					<li class="ball_num" id="td1_2_0_9" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
		            <li id="td1_2_0_Q" class="ball_numb1" onclick="QuickSelectZhiF(this);">全</li>
		            <li id="td1_2_0_D" class="ball_numb" onclick="QuickSelectZhiF(this);">大</li>
		            <li id="td1_2_0_X" class="ball_numb" onclick="QuickSelectZhiF(this);">小</li>
		            <li id="td1_2_0_J" class="ball_numb" onclick="QuickSelectZhiF(this);">奇</li>
		            <li id="td1_2_0_O" class="ball_numb" onclick="QuickSelectZhiF(this);">偶</li>
		            <li id="td1_2_0_C" class="ball_numb" onclick="QuickSelectZhiF(this);">清</li>
                </ul>
              </div>
              <div class="redselect_mid_yi3dp">
                <dl id="pls_bai">
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
			  <div class="redselect_mid_ball">
                <ul>
                    <li class="ball_num" id="td1_2_1_0" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
					<li class="ball_num" id="td1_2_1_1" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
					<li class="ball_num" id="td1_2_1_2" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
					<li class="ball_num" id="td1_2_1_3" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
					<li class="ball_num" id="td1_2_1_4" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
					<li class="ball_num" id="td1_2_1_5" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
					<li class="ball_num" id="td1_2_1_6" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
					<li class="ball_num" id="td1_2_1_7" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
					<li class="ball_num" id="td1_2_1_8" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
					<li class="ball_num" id="td1_2_1_9" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
		            <li id="td1_2_1_Q" class="ball_numb1" onclick="QuickSelectZhiF(this);">全</li>
		            <li id="td1_2_1_D" class="ball_numb" onclick="QuickSelectZhiF(this);">大</li>
		            <li id="td1_2_1_X" class="ball_numb" onclick="QuickSelectZhiF(this);">小</li>
		            <li id="td1_2_1_J" class="ball_numb" onclick="QuickSelectZhiF(this);">奇</li>
		            <li id="td1_2_1_O" class="ball_numb" onclick="QuickSelectZhiF(this);">偶</li>
		            <li id="td1_2_1_C" class="ball_numb" onclick="QuickSelectZhiF(this);">清</li>
                </ul>
              </div>
              <div class="redselect_mid_yi3dp">
                <dl id="pls_shi">
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
			  <div class="redselect_mid_ball">
                <ul>
                  
                    <li class="ball_num" id="td1_2_2_0" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">0</li>
					<li class="ball_num" id="td1_2_2_1" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">1</li>
					<li class="ball_num" id="td1_2_2_2" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">2</li>
					<li class="ball_num" id="td1_2_2_3" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">3</li>
					<li class="ball_num" id="td1_2_2_4" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">4</li>
					<li class="ball_num" id="td1_2_2_5" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">5</li>
					<li class="ball_num" id="td1_2_2_6" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">6</li>
					<li class="ball_num" id="td1_2_2_7" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">7</li>
					<li class="ball_num" id="td1_2_2_8" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">8</li>
					<li class="ball_num" id="td1_2_2_9" onclick="SelectBallZhiF(this);" onmouseover="getColor(this,'ball_num','ball_num_f')" onmouseout="getColor(this,'ball_num_f','ball_num')">9</li>
		            <li id="td1_2_2_Q" class="ball_numb1" onclick="QuickSelectZhiF(this);">全</li>
		            <li id="td1_2_2_D" class="ball_numb" onclick="QuickSelectZhiF(this);">大</li>
		            <li id="td1_2_2_X" class="ball_numb" onclick="QuickSelectZhiF(this);">小</li>
		            <li id="td1_2_2_J" class="ball_numb" onclick="QuickSelectZhiF(this);">奇</li>
		            <li id="td1_2_2_O" class="ball_numb" onclick="QuickSelectZhiF(this);">偶</li>
		            <li id="td1_2_2_C" class="ball_numb" onclick="QuickSelectZhiF(this);">清 </li>
                </ul>
              </div>
              <div class="redselect_mid_yi3dp">
                <dl id="pls_ge">
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
		    <div class="ChannelBuyAddInfo">【 您选择了 <b id="x_zhu">0</b> 注，共 <b id="x_yuan">0</b> 元。】 <a onclick="ClearAll(1,2);ClearAll(1,0);ClearAll(1,1);" class="light">清空选号区</a></div>
		 <table class="ChannelBuyAddTable">
				<tr>
					<th>
						
					</th>
					<th>
						<img onclick="btn_2_AddClickZhiF();jisuanZhuihao();" id="btn_2_Add" src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</th>
					<td>
						<table>
							<tr>
								<td>
									<select name="select" id="jixuan_Rand">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="5" selected="selected">5</option>
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
								</td>
								<td>注</td>
								<td><input type="button" class="jxbtn" onclick='btn_2_RandManyClick($("#jixuan_Rand").val());jisuanZhuihao();'/></td>
								<td><input type="button" class="ddjxbtn" onclick='btn_2_RandManyClick_dd($("#jixuan_Rand").val());jisuanZhuihao();'/></td>
							</tr>
						</table>
					</td>
				</tr>
		 </table>
</div>		 
		 