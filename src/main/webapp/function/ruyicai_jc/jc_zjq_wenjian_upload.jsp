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
								<li style="display:none">
									<input type="radio" class="guoguan5" name="wg" onclick="qingkong('|5串1',$(this))">
									<span>5串1</span>
								</li>
								<li style="display:none">
									<input type="radio" class="guoguan6" name="wg" onclick="qingkong('|6串1',$(this))">
									<span>6串1</span>
								</li>
								<li style="display:none">
									<input type="radio" class="guoguan7" name="wg" onclick="qingkong('|7串1',$(this))">
									<span>7串1</span>
								</li>
								<li style="display:none">
									<input type="radio" class="guoguan8" name="wg" onclick="qingkong('|8串1',$(this))">
									<span>8串1</span>
								</li>
								
							</ul>
						</ul>
						<ul class="wjsctopTwoR">
							<h3>第三步 上传方案并购买</h3>
							<p>
								格式转化符：0→0,1→1,2→2,3→3,4→4,5→5,6→6,7+→7
							</p>
							<p style="position:relative">
								<span class="showaddress" style=" position:absolute; left:1px; top:3px; border:1px solid #dbdbdb; display:inline-block; height:20px; width:112px;z-index:999"></span>
								<input id="type" type="hidden" value="jc">
								<span class="select-file"><input type="file" id="upload" name="upload" class="xzwj-btns" onchange="showaddr()"></span>
								
								<input type="button" value="上传" name="" class="shangchuan" onclick="return jc_ajaxFileUpload('upload',getType());"><a class="biaozhun" target="_blank" href="<%=request.getContextPath() %>/function/ruyicai_jc/jc_zjq_upload_geshi.html">查看标准格式样式</a>
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
						<li id="loginStaticInTouZhu_zjq">您尚未登录，请先 <a class="light1"onclick="loginRequrl();" target="_blank">登录</a> 。
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
<script>
	$(document).ready(function(){
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