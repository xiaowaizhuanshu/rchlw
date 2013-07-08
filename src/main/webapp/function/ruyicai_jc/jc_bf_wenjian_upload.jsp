<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<style>
	
	#codes li{
		width:300px;
	}
	
</style>
   <div>
<div class="jzdqcurmidbot-c">
					<div class="wjsctop">
                    	 <div class="wj-race-conl">
                    	 	
                    	 	<input type="radio" checked="checked" class="head-input-l" name="xzcc" onclick="clickl();">选择场次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    	 	<input type="radio" class="head-input-r" name="xzcc" onclick="clickr();">上传已包含场次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    	 </div>
						
                        <div class="clear"></div>
					</div>
					<div class="wjsctopOne">
						<h3><span>（最多可选15场，下面所示的时间为开赛时间）</span>第一步 选择场次</h3>
                        <div class="saishi-wrap" id="wenjianduizhen">
                                 <script>
									$(document).ready(function(){
										var valueType=$("#valueType").val();
										reHtml(79, 'type=1&valueType='+valueType+'&lotNo='+$("#lotNo").val()+'&wenjian=1', false, 'wenjianduizhen','true');
									});
								 </script>                   
                        	</div>
                
                        	</div>
</div>
<div class="wjsctopTwo">
						<ul class="wjsctopTwoL">
							<h3>第二步 选择过关方式</h3>
							<ul>
								<li style="display:none">
									<input type="radio" class="guoguan2" name="wg" onclick="qingkong('|2串1',$(this))">
									<span>2串1</span>
								</li>
								<li style="display:none">
									<input type="radio" class="guoguan3" name="wg" onclick="qingkong('|3串1',$(this))">
									<span>3串1</span>
								</li>
								<li style="display:none">
									<input type="radio" class="guoguan4" name="wg" onclick="qingkong('|4串1',$(this))">
									<span>4串1</span>
								</li>
								
							</ul>
						</ul>
						<ul class="wjsctopTwoR">
							<h3>第三步 上传方案并购买</h3>
							<p>
								格式转化符：1:0→10 2:0→20 2:1→21 3:0→30 ... <a style="cursor:pointer" class="showDetail" href="javascript:void(0)">查看全部</a>
							</p>
							<p style="position:relative">
								<span class="showaddress" style=" position:absolute; left:1px; top:3px; border:1px solid #dbdbdb; display:inline-block; height:20px; width:112px;z-index:3"></span>
								<input id="type" type="hidden" value="jc_bf">
								<span class="select-file"><input type="file" id="upload" name="upload" class="xzwj-btns" onchange="showaddr()"></span>
								
								<input type="button" value="上传" name="" class="shangchuan" onclick="return jc_ajaxFileUpload('upload',getType());"><a class="biaozhun" target="_blank" href="<%=request.getContextPath() %>/function/ruyicai_jc/jc_bf_upload_geshi.html">查看标准格式样式</a>
							</p>
                          
                            <div>
                                <div class="numberbox" style="width:350px;margin-left:10px;float:left">
					              <ul id="codes"></ul>
					            </div>
                                <div class="clear-btns"><input type="button" value="清空列表" name="" onclick="btn_Clear()"></div>
                                <div class="clear"></div>
                            </div>
							<p style="margin-top:10px">
								<span id="lab_Num" style="display:none"></span>
								投注倍数：<span class="addOrReduce reduce" onclick="addOrReduce();" alt="减一">-</span>
								<input type="text" id="tb_Multiple2" class="bssrk" name="" value="1" onkeyup="multipleValidate2();"/>
								<span class="addOrReduce add" onclick="addOrReduce();" alt="加一">+</span>（最高10万倍）
							</p>
							<p>
								投注金额：<span id="investField">0</span>元
								<ul>
						<li id="loginStaticInTouZhu_bf">您尚未登录，请先 <a class="light1"onclick="loginRequrl();" target="_blank">登录</a> 。
						</li>
						<li id="loginStaticInMoney" style="display:none;"><script>$(function(){touzhuInitStatic();});</script></li>
						</ul>
							</p>
							<p class="ljgm">
								<a class="FollowNubSubmitBtn" onclick="openTouzhu()" title="立即购买" href="javascript:;"><img width="116" height="33" alt="立即购买" src="/rchlw/function/images/ljgmgbt.jpg"></a>
							</p>
						</ul>
						<div class="clear"></div>
					</div>
				</div>
				<div class="jzfacf">
					<h2><a class="close" href="javascript:void(0)"></a>比分文件上传格式</h2>
					<table width="646" border="1" cellspacing="0" cellpadding="0">
						<tr bgcolor="#F9F9F9">
							<td width="80">胜选项</td>
							<td width="52">1:0</td>
							<td width="52">2:0</td>
							<td width="52">2:1</td>
							<td width="52">3:0</td>
							<td width="52">3:1</td>
							<td width="52">3:2</td>
							<td width="52">4:0</td>
							<td width="52">4:1</td>
							<td width="52">4:2</td>
							<td width="52">4:3</td>
							<td width="52">5:0</td>
							<td width="52">5:1</td>
							<td width="52">5:2</td>
							<td width="52">胜其他</td>
						</tr>
						<tr>
							<td width="80">上传格式</td>
							<td width="52">10</td>
							<td width="52">20</td>
							<td width="52">21</td>
							<td width="52">30</td>
							<td width="52">31</td>
							<td width="52">32</td>
							<td width="52">40</td>
							<td width="52">41</td>
							<td width="52">42</td>
							<td width="52">43</td>
							<td width="52">50</td>
							<td width="52">51</td>
							<td width="52">52</td>
							<td width="52">3A</td>
						</tr>						
					</table>
					<table width="340" border="1" cellspacing="0" cellpadding="0">
						<tr bgcolor="#F9F9F9">
							<td width="80">平选项</td>
							<td width="52">0:0</td>
							<td width="52">1:1</td>
							<td width="52">2:2</td>
							<td width="52">3:3</td>
							<td width="52">平其他</td>
						</tr>
						<tr>
							<td width="80">上传格式</td>
							<td width="52">00</td>
							<td width="52">11</td>
							<td width="52">22</td>
							<td width="52">33</td>
							<td width="52">1A</td>
						</tr>						
					</table>
					<table width="646" border="1" cellspacing="0" cellpadding="0">
						<tr bgcolor="#F9F9F9">
							<td width="80">负选项</td>
							<td width="52">0:1</td>
							<td width="52">0:2</td>
							<td width="52">1:2</td>
							<td width="52">0:3</td>
							<td width="52">1:3</td>
							<td width="52">2:3</td>
							<td width="52">0:4</td>
							<td width="52">1:4</td>
							<td width="52">2:4</td>
							<td width="52">0:5</td>
							<td width="52">1:5</td>
							<td width="52">2:5</td>
							<td width="52">负其他</td>
						</tr>
						<tr>
							<td width="52">上传格式</td>
							<td width="52">01</td>
							<td width="52">02</td>
							<td width="52">12</td>
							<td width="52">03</td>
							<td width="52">13</td>
							<td width="52">23</td>
							<td width="52">04</td>
							<td width="52">14</td>
							<td width="52">24</td>
							<td width="52">05</td>
							<td width="52">15</td>
							<td width="52">25</td>
							<td width="52">0A</td>
						</tr>						
					</table>			
				</div>
<script>
	$(document).ready(function(){
		
		var windowW = $(window).width();
		var windowH = $(window).height();
		var contentW = $(".jzfacf").width();
		var contentH = $(".jzfacf").height();
		var documentH = $(document).height();
		var contents;
		contents = "<div class=masker style=width:100%;height:100%;background-color:#b5b5b5;opacity:0.4;filter:alpha(opacity=40);position:fixed;left:0;top:0;z-index:99></div>";
		if(!-[1,]&&!window.XMLHttpRequest){
			contents = "<div class=masker style=width:100%;height:"+(windowH>documentH?windowH:documentH)+";background-color:#b5b5b5;opacity:0.4;filter:alpha(opacity=40);position:absolute;left:0;top:0;z-index:99></div>";
		}

		$(".showDetail").click(function(){
			if($(".masker").length!=1){
				$("body").append(contents);
			}
			$(".masker").css("display","block");
			$(".jzfacf").css({"position":"fixed","z-index":"100","background-color":"#ffffff","left":(windowW > contentW?(windowW-contentW)/2:0)+"px","top":(windowH > contentH?(windowH-contentH)/2:0)+"px"}).fadeIn(100);
			if(!-[1,]&&!window.XMLHttpRequest){
				$(".jzfacf").css("position","absolute");
			}
		});
		$(".close").click(function(){
			$(".masker").css("display","none");
			$(".jzfacf").fadeOut(100);
		});
		
		
		$(".addOrReduce").click(function(){
			var num=Number($(".bssrk").val());
			var oneMoney=Number($("#investField").text())/num;
			if($(this).attr("alt")=="加一"){
				num+=1;
			}else{
				num-=1;
			}		
			if(num<=0){
				num=1;
			}
			if(num>100000){
				num=100000;
			}
			$("#investField").text(oneMoney*num);
			$(".bssrk").val(num);
			$("#tb_Multiple").val($("#tb_Multiple2").val());
		});
		$(".shangchuan").hover(function(){
			$(".shangchuan").attr("style","background-color:#d0d0d0;");
		},function(){
			$(".shangchuan").removeAttr("style");
		});
		$(".add").hover(function(){
			$(".add").attr("style","background-color:#d0d0d0;");
		},function(){
			$(".add").removeAttr("style");
		});
		$(".reduce").hover(function(){
			$(".reduce").attr("style","background-color:#d0d0d0;");
		},function(){
			$(".reduce").removeAttr("style");
		});
	});
</script>