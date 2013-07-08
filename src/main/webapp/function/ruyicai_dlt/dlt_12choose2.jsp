<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div class="ChannelBuyTip">玩法提示：选择两个以上生肖，中奖可获得60元。</div>
          <div class="touzhuqi">
            <div class="redselect_left"><span class="redselect_left_zi3">选择号码</span> 
            <span class="redselect_left_zi4">遗　　漏</span> </div>
            <div class="redselect_mid" style="width:620px;">
              <div class="ChannelBuyBox ChannelBuyBoxTopRed" style="width:600px; text-align:center;"><i><b>选号区</b>至少选择2个号码</i><span>&nbsp;</span></div>
              <div class="redselect_mid_ballsxl" style="height:50px;">
                <ul  style="height:50px; overflow:hidden;">
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_01" onclick="Animal_SelectBall('r','01');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">01</span><br /><span class="sxlshx">鼠</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_02" onclick="Animal_SelectBall('r','02');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">02</span><br /><span class="sxlshx">牛</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_03" onclick="Animal_SelectBall('r','03');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">03</span><br /><span class="sxlshx">虎</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_04" onclick="Animal_SelectBall('r','04');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">04</span><br /><span class="sxlshx">兔</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_05" onclick="Animal_SelectBall('r','05');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">05</span><br /><span class="sxlshx">龙</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_06" onclick="Animal_SelectBall('r','06');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">06</span><br /><span class="sxlshx">蛇</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_07" onclick="Animal_SelectBall('r','07');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">07</span><br /><span class="sxlshx">马</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_08" onclick="Animal_SelectBall('r','08');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">08</span><br /><span class="sxlshx">羊</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_09" onclick="Animal_SelectBall('r','09');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">09</span><br /><span class="sxlshx">猴</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_10" onclick="Animal_SelectBall('r','10');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">10</span><br /><span class="sxlshx">鸡</span></li>
                  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_11" onclick="Animal_SelectBall('r','11');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">11</span><br /><span class="sxlshx">狗</span></li>
				  <li style="width:50px; height:50px;" class="ball_numsxl" id="shxl_r_12" onclick="Animal_SelectBall('r','12');" onmouseover="getColor(this,'ball_numsxl','ball_num_fsxl')" onmouseout="getColor(this,'ball_num_fsxl','ball_numsxl')"><span class="sxlshz">12</span><br /><span class="sxlshx">猪</span></li>
                </ul>
              </div>
              <div class="redselect_mid_yisxl">
                <ul id="dlt_sxl1">
                  <li>0</li>
                  <li>0</li>
                  <li>0</li>
                  <li>0</li>
                </ul> 
                 <ul id="dlt_sxl2">
                  <li>0</li>
                  <li>0</li>
                  <li>0</li>
                  <li>0</li>
                 </ul>
                 <ul id="dlt_sxl3">
                  <li>0</li>
                  <li>0</li>
                  <li>0</li>
				  <li>0</li>
                </ul>
              </div>
		    </div>
            <div class="ChannelBuyAddInfo">【 您选择了 <b id="sxl_zhushu">0</b> 注，共 <b id="sxl_money">0</b> 元。】 <a onclick="Animal_ClearSelect()" class="light">清空选号区</a></div>
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="return Animal_btn_2_AddClick();jisuanZhuihao();" id="animal_btn_2_Add" src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="sxl_redBallCount">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="5" selected="selected">5</option>
							<option value="10" >10</option>
						</select>
						<span class="light" onclick='animalRand($("#sxl_redBallCount").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
			</div>
            <span style="display:none;">
                  <input name="Input"  class="ddjixuan" value="" type="button" onclick='ddjx_animal_Rand($("#sxl_redBallCount").val())' />
           </span>
    </div>