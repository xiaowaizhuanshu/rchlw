<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div class="ChannelBuyTip">玩法提示：分别从个、十位中任选一种性质组成一注投注号码，与开奖号码的个位、十位一致即中奖、奖金4元。</div>
 <div class="touzhuqi">
 
		<div class="redselect_left_3dp"><span class="redselect_left_zi">十　　位</span><span class="redselect_left_zi omitTitleBig">遗　　漏</span></div>
		<div class="redselect_mid" style="width:560px;">
		<div class="ChannelBuyBox ChannelBuyBoxTopRed"><i>每位至少选择1个号码</i><span>&nbsp;</span></div>
		<div class="redselect_mid_ball" style="height:70px; float:left; width:200px; overflow:hidden;">
			<ul style="height:50px; overflow:hidden;">
				<li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_0_0" onclick="BallZhiFDXDS(this,0);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">大</li>
				<li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_0_1" onclick="BallZhiFDXDS(this,0);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">小</li>
				<li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_0_2" onclick="BallZhiFDXDS(this,0);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">单</li>
				<li style="width:43px; margin:0px 0px 0px 0px;" class="ball_numssc2" id="tddxds_2_0_3" onclick="BallZhiFDXDS(this,0);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">双</li>
			</ul>
			<dl id="DXDS_shiDX" class="omitBig">
				<dd>0</dd>
				<dd>0</dd>
				<dd>0</dd>
				<dd>0</dd>
			</dl>
		</div>
		
		<div class="redselect_left_ssc" style="padding:0px 0px 0px 50px; margin:0px;"><span class="redselect_left_zi">个　　位</span><span class="redselect_left_zi omitTitleBig">遗　　漏</span></div>
		<div class="redselect_mid_ball" style="height:70px; float:left; width:200px; overflow:hidden;">
           <ul style="height:50px; overflow:hidden;">
			 <li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_1_0" onclick="BallZhiFDXDS(this,1);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">大</li>
             <li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_1_1" onclick="BallZhiFDXDS(this,1);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">小</li>
             <li style="width:43px; margin:0px 7px 0px 0px;" class="ball_numssc2" id="tddxds_2_1_2" onclick="BallZhiFDXDS(this,1);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">单</li>
             <li style="width:43px; margin:0px 0px 0px 0px;" class="ball_numssc2" id="tddxds_2_1_3" onclick="BallZhiFDXDS(this,1);" onmouseover="getColor(this,'ball_numssc2','ball_num_fbig')" onmouseout="getColor(this,'ball_num_fbig','ball_numssc2')">双</li>
           </ul>
			<dl id="DXDS_geDX"class="omitBig">
				<dd>0</dd>
				<dd>0</dd>
				<dd>0</dd>
				<dd>0</dd>
			</dl>
         </div>
       </div>
		
       <div class="ChannelBuyAddInfo">【 您选择了 <b id="ssc_dxds_zhu">0</b> 注，共 <b id="ssc_dxds_yuan">0</b> 元。】 <a onclick="ClearAllDXDS(0);ClearAllDXDS(1);" class="light">清空选号区</a></div>
            
            <div class="ChannelBuyAddBasket">
				<div class="AddBasketCenter">
					<div class="ChannelBuyAddButton">
						<img onclick="btn_dxds_AddClickZhiF();jisuanZhuihao();" id="btn_2_Add"  src="<%=request.getContextPath() %>/function/images/addbtn.gif" />
					</div>
					<div class="space20l">&nbsp;</div>
					<div class="ChannelBuySelectButton">
						<select name="select" id="jixuan_Randdxds" >
							<option value="1" selected="selected">1</option>
							<option value="2" >2</option>
							
						</select>
						<span class="light" onclick='btn_2_RandManyClick($("#jixuan_Randdxds").val());jisuanZhuihao();'>&nbsp;</span>
					</div>
				</div>
		 </div>
 </div>       