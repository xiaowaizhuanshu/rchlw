<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>内蒙快三web</title>
<link href="<%=request.getContextPath() %>/function/css/nmks.css" rel="stylesheet" type="text/css" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/filter.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd_nmks.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/nmks/nmks.js"></script>
<script type="text/javascript">
var i=1000*60*60*24; //总刷新的局限
var j=1000; //初始多少毫秒刷新
var k =1000*60; //间隔多少毫秒后刷新
function flashLottery(){
	 getBatchCode('F47107');
	 getBeforeBatchCode('F47107',3,80);
	 reHtml(60,'lotno=F47107&inssuenum=5',false,'Channel','true');
	 if($("#kaishiqihao option:eq(0)").val() != ($("#qihao").text()+"_0")){
		 get100QiHao(55,'lotno=F47107&num=100',false,'kaishiqihao');  
	 }
	//判断最新开奖是否需要等待开奖
	 if($("#drawaNo0").html()!=($("#qihao").text()-1)){
			$("#Special").css("display","");
			$("#drawaTime").html($("#endTime").text().substring(10,16));
			$("#drawaBatch").html($("#qihao").text()-1);
		}else{
			$("#Special").css("display","none");
		}
}
function checkMusic(){
    var issue = $("#inssuenums").val();
	 reHtml(60,'lotno=F47107&inssuenum='+issue,false,'Channel','true');
	//判断是否需要添加声音
	if($("#minute").text()=="7"&&$("#second").text()>"0"&&$("#second").text()<"59"){
	if($("#Special").css("display")=="none"&&($("#drawaNo0").html()==($("#qihao").text()-1))){
		 FlashMusicStart();
	 }
	}
}
 setInterval("flashLottery()", 10000); 
 setInterval("checkMusic()",5000);
 setInterval("FlashMusicStop()",1000*60*10);
</script>	
</head>
<body>
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
<span id="common"></span>
<div class="gd-Wrap">
  <div class="wrap-top">
    	<div class="top-left">
 			 <img src="/rchlw/function/images/nmks/kuaisan.png" width="54" height="54" alt="快三" />

             <img src="/rchlw/function/images/nmks/kuaisan-img.gif" style="padding-left:3px;" />
             <input type="hidden" id="sysTime" value="">
					<input type="hidden" id="sysTimenow" value="">
					<span id="endTime" style="display:none;"></span>
					<span id="kaijiangtime" style="display:none;"></span>
             <p>频率：10分钟</p>
             <p>全天：73期</p>
             <p>售：09:35-22:05</p>
             <p>返奖率高达59%</p>
  		</div>
        <div class="top-center">
        <script>$(function() {getBeforeBatchCode('F47107',3,80);});</script>
       	  <p class="top">第<strong id="kaijiangqihao"></strong>期  距离下期开奖还有<span id="kaijiangminute"></span>分<span id="kaijiangsecond"></span>秒</p>
            <div id="shaizi">
            
            </div>
            <p class="bot">开奖号码：<span id="code1"></span><span id="code2"></span><span id="code3"></span>&nbsp;&nbsp;&nbsp;和值：<span id="hezhi"></span>&nbsp;&nbsp;&nbsp;形态：<span id="xingtai"></span></p>
        
    </div>
        <div class="top-right">
        	<h3><span class="top-cur">我的投注</span><span>我的追号</span><em style="padding-left:125px;"><a href="#">刷新</a></em><em><a href="#">更多>></a></em></h3>
            <div class="ksan-box">
            	<table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr height="30">
                        <td width="75">期号</td>
                        <td width="70">玩法类型</td>
                        <td>投注号码</td>
                        <td>金额</td>
                        <td>状态</td>
                        <td>奖金</td>
                      </tr>
                      <tr bgcolor="#F5F5F5">
                        <td>156282919</td>
                        <td>二同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                       <tr>
                        <td>156282919</td>
                        <td>二同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                       <tr bgcolor="#F5F5F5">
                        <td>156282919</td>
                        <td>二同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                </table>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="display:none">
                      <tr height="30">
                        <td width="75">期号</td>
                        <td width="70">玩法类型</td>
                        <td>投注号码</td>
                        <td>金额</td>
                        <td>状态</td>
                        <td>奖金</td>
                      </tr>
                      <tr bgcolor="#F5F5F5">
                        <td>156282919</td>
                        <td>三同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                       <tr>
                        <td>156282919</td>
                        <td>二同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                       <tr bgcolor="#F5F5F5">
                        <td>156282919</td>
                        <td>二同号单选</td>
                        <td>1234</td>
                        <td>6元</td>
                        <td>已中奖</td>
                        <td>20</td>
                      </tr>
                </table>

            </div>
        
        </div>
        <div class="gd-clear"></div>
    </div>
	<div> 
    	<!--页面左边开始-->
		<div class="gd-WrapL">
    	<!--logo部分开始-->
    	<div class="gd-WrapL-banner" style="padding-top:10px;">
    		
            <div class="gd-WrapL-banner-bot">
            
            	<ul>
                    <li class="Light-select">选号投注</li>
                    <li class="Light"><a href="#">我的方案</a></li>
                    <li style="color:#de0201; padding:8px 0 0 30px; font-weight:bold;">第<strong id="qihao"></strong>期剩余投注时间：<i id="minute"></i>分<i id="second"></i>秒</li></li>
                    <li class="End"><span><a href="#" target="_blank">图标走势</a></span>|<span><a href="#" target="_blank">玩法介绍</a></span></li>
                </ul>
                <div class="gd-clear"></div>

            </div>
        	<div class="gd-channel">
            	<ul>
					  <li class="select"><a href="javascript:">和值</a></li>
                    <li><a href="javascript:">三同号通选</a></li>
                    <li><a href="javascript:">三同号单选</a></li>
                    <li><a href="javascript:">二同号复选</a></li>
                    <li><a href="javascript:">二同号单选</a></li>
                    <li><a href="javascript:">三不同号</a></li>
                    <li><a href="javascript:">二不同号</a></li>
                    <li><a href="javascript:">三连号通选</a></li>
                </ul>
                 <div class="gd-clear"></div>
            </div>
             <div class="gd-clear"></div>
 	 	</div>
        <!--logo部分结束-->
        <form>
        	 <!--投注器选号开始-->
            <div class="gd-touzhuqi" style="position:relative;">
            	  <!--和值--> 
            	<div class="gd-touzhuqi-top" style="display:block">
	 				<jsp:include page="/function/ruyicai_nmks/nmks_hz.jsp"></jsp:include>
               	</div>
                <!--三同号通选-->
                <div class="gd-touzhuqi-top" style=" display:none;">
                    <jsp:include page="/function/ruyicai_nmks/nmks_sthtx.jsp"></jsp:include>             
               	</div> 
                <!--三同号单选-->
                <div class="gd-touzhuqi-top" style="display:none">
                     <jsp:include page="/function/ruyicai_nmks/nmks_sthdx.jsp"></jsp:include>
           	    </div> 
                <!--二同号复选-->
                <div class="gd-touzhuqi-top" style="display:none">
					 <jsp:include page="/function/ruyicai_nmks/nmks_ethfx.jsp"></jsp:include>
             	</div>
                <!--二同号单选-->
                <div class="gd-touzhuqi-top" style=" display:none">
                     <jsp:include page="/function/ruyicai_nmks/nmks_ethdx.jsp"></jsp:include>
                </div>  
                <!--三不同号-->
                <div class="gd-touzhuqi-top" style="display:none">
                    <jsp:include page="/function/ruyicai_nmks/nmks_sbth.jsp"></jsp:include>                
               	</div> 
                <!--二不同号-->
                <div class="gd-touzhuqi-top" style="display:none">
                     <jsp:include page="/function/ruyicai_nmks/nmks_ebth.jsp"></jsp:include>                 
               	</div> 
                <!--三连号通选-->
                <div class="gd-touzhuqi-top" style=" display:none;">
                     <jsp:include page="/function/ruyicai_nmks/nmks_slhtx.jsp"></jsp:include>             
               	</div> 
                                                             
                <div class="touzhuqi-numberbox">
                	<ul></ul>               
                </div>
                <div class="number-check">
                	<span style="margin-right:70px">投注倍数：<a class="xuanze2" href="javascript:">-</a><input type="text" value="1" /><a class="xuanze2" href="javascript:">+</a></span>
                    <span style="margin-right:50px">投注金额:<i style="color:#FF0000; font-weight:normal; padding:0 2px;">0</i>元</span>
                    <span class="daoru"><a href="#">导入收藏</a></span>&nbsp;&nbsp;
                    <span class="daoru"><a href="#">导出收藏</a></span>
                    <span style="margin-left:28px;" onclick="clearCode()"><img src="/rchlw/function/images/nmks/haomalan-clear.gif" width="74" height="23"  /></span>
                </div>
           </div>
           <!--投注器选号结束-->
            <!--号码框开始-->
   		  <div class="gd-Fllownub">
   	 			 <div class="gd-Fllownub-one">
                	<a href="#" style="display:block">由购买人自行全额购买彩票</a>
                    <a href="#" style="display:none">什么叫收益率追号</a>
                    <a href="#" style="display:none">连续多期购买同一个（组）号码</a>
					<ul>
                    	<li class="Left">购买方式</li>
                        <li class="Right">
                        	<dl>
                            	<dd><span class="select"><a href="javascript:">&nbsp;</a></span>代购</dd>
                                <dd><span><a href="javascript:">&nbsp;</a></span>收益率追号</dd>
                                <dd><span><a href="javascript:">&nbsp;</a></span>自由追号</dd>
                            </dl>
                        </li>
                    </ul>
                    <div class="gd-clear"></div>
                </div>
                 <div class="gd-Fllownub-wrap">
                 	 <div class="gd-Fllownub-wrap-con" style="display:block; height:0; overflow:hidden"></div>
                     <div class="gd-Fllownub-wrap-con" style="display:none">
                     		<div>
                                    <div class="shouyilv-left">收益设置</div>
                                    <div class="shouyilv-right">
                                    		<div class="top">
                                            	<p>1.开始期号<select><option>2012102935[当前期]</option><option>2012102935</option>
                                            		</select>，投入期数：<input name="" type="text" value="10" class="one" />，起始倍数：<input name				 														="" type="text" value="1" class="one" />倍。
                                                </p>
                                                <p>2.<span><input name="syl" type="radio" value="" checked="checked" style=" vertical-align:middle" />全程收益率<input name=																					 													"" type="text" value="10" class="one" />%</span><br />
                                                	&nbsp;&nbsp;<span><input name="syl" type="radio" value="" style=" vertical-align:middle" />前<input name=																					 													"" type="text" value="5" class="one" />期收益率<input name="" type="text" value="10" class="one" />%，之后收益率<input name="" type="text" value="5" class="one" />%</span><br />
                                                
                                                </p>
                                                <p style=" text-align:center; padding-bottom:0"><a href="#"><img src="/rchlw/function/images/nmks/gm-jisuan.gif" width="46" height="22" alt="计算" /></a></p>
                                            </div>
                                            <div class="bot">
                                                    <table border="0" cellspacing="0" cellpadding="0" style=" width:578px;border-collapse:                                                         collapse;">
                                                                  <tr>
                                                                    <td style="width:36px; padding:4px 0; text-align:center">序号</td>
                                                                    <td style="width:100px;padding:4px 0; text-align:center">期号</td>
                                                                    <td style="width:72px;padding:4px 0; text-align:center">倍数</td>
                                                                    <td style="width:72px;padding:4px 0; text-align:center">当期投入</td>
                                                                    <td style="width:72px;padding:4px 0; text-align:center">当期收益</td>
                                                                    <td style="width:72px;padding:4px 0; text-align:center">累计投入</td>
                                                                    <td style="width:72px;padding:4px 0; text-align:center">累计收益</td>
                                                                    <td style="width:auto;padding:4px 0; text-align:center">收益率</td>
                                                                  </tr>
                                                    </table>
                                                    <div style=" overflow-y:scroll; height:295px; width:598px">
                                                    	<table border="0" cellspacing="0" cellpadding="0" style="width:578px; border-collapse:                                                         collapse;">  
                                                        </table>
                                                    </div>
                                                
                                            </div>
                                            
                                    </div>
                                    <div class="gd-clear"></div>
                        	</div>
                            <ul class="buy-method">
                            		<li style="width:76px; text-align:center; padding-right:21px">支付方式</li>
                                    <li class="buy-every1"><input name="abcd" type="radio" value="" checked="checked" />分期付款</li>	
                                    <li class="buy-every1"><input name="abcd" type="radio" value="" />提前扣清</li>	
                            </ul>
                            <div class="zhuihao-set zhuihao-set1" style="display:block">
                            		<div class="zhuihao-set-left">追号设置</div>
                                    <div class="zhuihao-set-right">
                                    	<p><input name="" type="checkbox" value="" checked="checked" />中奖后终止追号</p>
                                        <p><input name="" type="checkbox" value="" />追号余额不足手机短信提醒</p>
                                    </div>
                                    <div class="gd-clear"></div>
                            </div>
                            <div class="zhuihao-set zhuihao-set1" style="display:none">
                            		<div class="zhuihao-set-left" style=" height:45px; line-height:45px; padding:0;">追号设置</div>
                                    <div class="zhuihao-set-right">
                                    	<p><input name="" type="checkbox" value="" checked="checked" />中奖后终止追号</p>
                                    </div>
                                    <div class="gd-clear"></div>
                            </div>
                     </div>
                     <div class="gd-Fllownub-wrap-con" style="display:none">
                     		<div>
                                    <div class="shouyilv-left" style=" height:230px; line-height:230px;"> 期数选择</div>
                                    <div class="shouyilv-right">
                                    		<div class="zhui-number">
                                           			 <select name="">
                                                     	<option>追10期</option>
                                                     	<option>追20期</option>
                                                        <option>追30期</option>
                                                        <option>追50期</option>
                                                        <option>追100期</option>
                                                     	
                                                     </select>
                                            </div>
                                            <div class="qishu-select-num">
                                            		<ul>
                                                    	<li>1.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>2.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>3.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>4.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>5.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>6.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>7.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>8.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        <li>9.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                         <li>10.<input name="" type="checkbox" value="" checked="checked" class="fuxuan-box" />2012110212期<input name=""  value="1" type="text" class="two" />倍&nbsp;&nbsp;￥0元</li>
                                                        
                                                    </ul>
                                            </div>
                                            
                                            
                                    </div>
                                    <div class="gd-clear"></div>
                        	</div>
                            <ul class="buy-method">
                            		<li style=" width:76px; text-align:center; padding-right:21px">支付方式</li>
                                    <li  class="buy-every2"><input name="abc" type="radio" value="" checked="checked" />分期付款</li>	
                                    <li  class="buy-every2"><input name="abc" type="radio" value="" />提前扣清</li>	
                            </ul>
                            <div class="zhuihao-set zhuihao-set2" style="display:block">
                            		<div class="zhuihao-set-left">追号设置</div>
                                    <div class="zhuihao-set-right">
                                    	<p><input name="" type="checkbox" value="" checked="checked" style=" vertical-align:middle; margin-right:5px" />单期奖金≥<input name="" type="text" value="100" class="one" />元终止追号</p>
                                        <p><input name="" type="checkbox" value="" style=" vertical-align:middle; margin-right:5px" />追号余额不足手机短信提醒</p>
                                    </div>
                                    <div class="gd-clear"></div>
                            </div>
                            <div class="zhuihao-set zhuihao-set2" style="display:none">
                            		<div class="zhuihao-set-left" style="height:45px; padding:0; line-height:45px">追号设置</div>
                                    <div class="zhuihao-set-right">
                                    	<p><input name="" type="checkbox" value="" checked="checked" style=" vertical-align:middle; margin-right:5px" />单期奖金≥<input name="" type="text" value="100" class="one" />元终止追号</p>
                                       
                                    </div>
                                    <div class="gd-clear"></div>
                            </div>
                     </div>
                     <div class="gd-clear"></div>
               		 <div class="gd-Fllownub-two">
                        <ul>
                            <li class="xLeft">确认购买</li>
                            <li class="xRight">
                                <ul>
                                    <li class="buy-cont">
                                        <p>您尚未登录，请先<a href="#">登录</a></p>
                                        <p><input name="" type="checkbox" value="" checked="checked" />我已阅读并同意<a href="#">《用户代购协议》</a></p>
                                        <p><input name="" type="checkbox" value="" checked="checked" />我已阅读并同意<a href="#">限号管理</a>和<a href="#">《快三投注风险须知》</a></p>
                                    </li>
                                    <li class="buy-btn"><a href="#"><img src="/rchlw/function/images/nmks/gd-ljgcbtn.gif" width="116" height="33" alt="立即购买" /></a></li>
                                </ul>
                            </li>
                        </ul>
              		</div>
             
              	 </div>
          </div>
          <!--号码框结束-->
        </form>
    </div>
    	<!--页面左边结束-->
    	<!--页面右边开始--> 
    	<div class="gd-WrapR">
    	<div class="gd-WrapR-top">
        	<h2>最新开奖</h2>
        	<div class="gd-horn">
	         	<span title="点击该按钮可以关闭声音。" class="gd-horn-on"></span>
            	<span title="点击该按钮可以开启声音。" class="gd-horn-off"></span>
            </div>
           <table width="100%" cellspacing="0" cellpadding="0">
           	  <tr>
              	<td>时间</td>
                <td>期号</td>
                <td>开奖号码</td>
                <td>和值</td>
                <td>形态</td>
              </tr>
              <tr bgcolor="#f5f5f5">
              	<td>11:52</td>
                <td>052820</td>
                <td><i>销售中</i></td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
              	<td>11:42</td>
                <td>052820</td>
                <td><i>2,3,4</i></td>
                <td>9</td>
                <td>三连号</td>
              </tr>
              <tr bgcolor="#f5f5f5">
              	<td>11:42</td>
                <td>052819</td>
                <td><i>2,3,4</i></td>
                <td>9</td>
                <td>三连号</td>
              </tr>
              <tr>
              	<td>11:42</td>
                <td>052818</td>
                <td><i>2,3,4</i></td>
                <td>9</td>
                <td>三连号</td>
              </tr>
              <tr bgcolor="#f5f5f5">
              	<td>11:42</td>
                <td>052817</td>
                <td><i>2,3,4</i></td>
                <td>9</td>
                <td>三连号</td>
              </tr>
              <tr>
              	<td>11:42</td>
                <td>052816</td>
                <td><i>2,3,4</i></td>
                <td>9</td>
                <td>三连号</td>
              </tr>
              <tr>
                <td colspan="5" class="table-end"><div style=" text-align:right;"><em class="near-number"><a href="javascript:">最近5期</a></em><em class="near-number"><a href="javascript:">10期</a></em><em><a href="#" target="_blank">更多</a></em></div></td>
              </tr> 
		</table>

        </div>
    	
        <div class="gd-WrapR-mid">
        	<h2>中奖排行</h2>
            <ul>
            	<li class="cur-select">最新</li>
                <li>日榜</li>
                <li>周榜</li>
                <li style=" border-right:none; width:59px;">月榜</li>
               
            </ul>
        	<div class="zjbtnr">
                 <table cellspacing="0" cellpadding="0" width="100%">
                                          <tr>
                                            <td width="100">用户名</td>
                                             <td>玩法</td>
                                            <td width="70">奖金</td>
                                          </tr>
                                          <tr>
                                            <td>东方很红</td>
                                            <td>二不同号</td>
                                            <td class="money">20000000元</td>
                                          </tr>
                                          <tr>
                                            <td>加内特玩足彩</td>
                                            <td>二不同号</td>
                                            <td class="money">33330元</td>
                                          </tr>
                                          <tr>
                                            <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">2000元</td>
                                          </tr>
                                          <tr>
                                           
                                            <td>lin31898</td>
                                              <td>二不同号</td>
                                            <td class="money">600元</td>
                                          </tr>
                                          <tr>
                                             <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">500元</td>
                                          </tr>
                                          <tr>
                                             <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">300</td>
                                          </tr>
                                          <tr>
                                            <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">200元</td>
                                          </tr>
                                          <tr>
                                             <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">100元</td>
                                          </tr>
                                          <tr>
                                             <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">80元</td>
                                          </tr>
                                          <tr>
                                             <td>蛤蟆</td>
                                            <td>二同号复选</td>
                                            <td class="money">10元</td>
                                          </tr>
                                     </table>
                	 <table cellspacing="0" cellpadding="0" width="100%" style="display:none;">
                                          <tr>
                                            <td width="44">排名</td>
                                            <td width="120">用户名</td>
                                            <td width="90">奖金</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>1</strong></td>
                                            <td>东方非常红</td>
                                            <td class="money">20000000元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>2</strong></td>
                                            <td>加内特玩足彩</td>
                                            <td class="money">33330元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>3</strong></td>
                                            <td>蛤蟆</td>
                                            <td class="money">2000元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>4</strong></td>
                                            <td>lin31898</td>
                                            <td class="money">600元</td>
                                          </tr>
                                          <tr>
                                           <td><strong>5</strong></td>
                                            <td>lc#鸭老板</td>
                                            <td class="money">500元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>6</strong></td>
                                            <td>元月十九雨</td>
                                            <td class="money">300</td>
                                          </tr>
                                          <tr>
                                           <td><strong>7</strong></td>
                                            <td>xiahui</td>
                                            <td class="money">200元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>8</strong></td>
                                            <td>ok金手</td>
                                            <td class="money">100元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>9</strong></td>
                                            <td>单场之王</td>
                                            <td class="money">80元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>10</strong></td>
                                            <td>红蓝紫</td>
                                            <td class="money">10元</td>
                                          </tr>
                                     </table>
                     <table cellspacing="0" cellpadding="0" width="100%" style="display:none">
                                          <tr>
                                            <td width="44">排名</td>
                                            <td width="120">用户名</td>
                                            <td width="90">奖金</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>1</strong></td>
                                            <td>东方非常非常红</td>
                                            <td class="money">20000000元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>2</strong></td>
                                            <td>加内特玩足彩</td>
                                            <td class="money">33330元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>3</strong></td>
                                            <td>蛤蟆</td>
                                            <td class="money">2000元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>4</strong></td>
                                            <td>lin31898</td>
                                            <td class="money">600元</td>
                                          </tr>
                                          <tr>
                                           <td><strong>5</strong></td>
                                            <td>lc#鸭老板</td>
                                            <td class="money">500元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>6</strong></td>
                                            <td>元月十九雨</td>
                                            <td class="money">300</td>
                                          </tr>
                                          <tr>
                                           <td><strong>7</strong></td>
                                            <td>xiahui</td>
                                            <td class="money">200元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>8</strong></td>
                                            <td>ok金手</td>
                                            <td class="money">100元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>9</strong></td>
                                            <td>单场之王</td>
                                            <td class="money">80元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>10</strong></td>
                                            <td>红蓝紫</td>
                                            <td class="money">10元</td>
                                          </tr>
                                     </table>
                     <table cellspacing="0" cellpadding="0" width="100%" style="display:none">
                                          <tr>
                                            <td width="44">排名</td>
                                            <td width="120">用户名</td>
                                            <td width="90">奖金</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>1</strong></td>
                                            <td>东方真是非常红</td>
                                            <td class="money">20000000元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>2</strong></td>
                                            <td>加内特玩足彩</td>
                                            <td class="money">33330元</td>
                                          </tr>
                                          <tr>
                                            <td class="zjpmmct"><strong>3</strong></td>
                                            <td>蛤蟆</td>
                                            <td class="money">2000元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>4</strong></td>
                                            <td>lin31898</td>
                                            <td class="money">600元</td>
                                          </tr>
                                          <tr>
                                           <td><strong>5</strong></td>
                                            <td>lc#鸭老板</td>
                                            <td class="money">500元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>6</strong></td>
                                            <td>元月十九雨</td>
                                            <td class="money">300</td>
                                          </tr>
                                          <tr>
                                           <td><strong>7</strong></td>
                                            <td>xiahui</td>
                                            <td class="money">200元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>8</strong></td>
                                            <td>ok金手</td>
                                            <td class="money">100元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>9</strong></td>
                                            <td>单场之王</td>
                                            <td class="money">80元</td>
                                          </tr>
                                          <tr>
                                            <td><strong>10</strong></td>
                                            <td>红蓝紫</td>
                                            <td class="money">10元</td>
                                          </tr>
                                     </table>
                                     	
                
                </div>
            
            
        </div>
    
    </div> 
    	<!--页面右边结束--> 
    </div>
 	<div class="gd-clear"></div>
    
 </div>
 <script type="text/javascript">
 $(document).ready(function(){
 	
 	//页面上“遗漏”，“冷热”，“胆拖”和“拖码”名词的解释弹框
 	$(".yilou-img").hover(function(){
 		$(".yilou").removeClass("selected1");
 	},function(){
 		$(".yilou").addClass("selected1");
 	});
 	$(".lr-img").hover(function(){
 		$(".lengre").removeClass("selected2");
 	},function(){
 		$(".lengre").addClass("selected2");
 	});
 	$(".yilou-img1").hover(function(){
 		$(".yilou1").removeClass("selected1");
 	},function(){
 		$(".yilou1").addClass("selected1");
 	});
 	$(".lr-img1").hover(function(){
 		$(".lengre1").removeClass("selected2");
 	},function(){
 		$(".lengre1").addClass("selected2");
 	});
 	$(".dtm-img").hover(function(){
 		$(".dantuoma").removeClass("selected1");
 	},function(){
 		$(".dantuoma").addClass("selected1");
 	});
 	$(".dtm-img1").hover(function(){
 		$(".dantuoma1").removeClass("selected1");
 	},function(){
 		$(".dantuoma1").addClass("selected1");
 	});
 	
 	
 	
 	$(".kuaisan-hezhi li em").each(function(){
 		$(this).click(function(){
 			if($(this).hasClass("curbtn")){
 				$(this).removeClass("curbtn");
 				$(".zhushu").text(Number($(".zhushu").text())-1);
 				$(".onemoney").text(Number($(".onemoney").text())-2);
 			}else{
 				$(this).addClass("curbtn");
 				$(".zhushu").text(Number($(".zhushu").text())+1);
 				$(".onemoney").text(Number($(".onemoney").text())+2);
 			}
 		});
 	});
 	$(".choosenum option").each(function(){
 		$(this).click(function(){
 			$(".choosenum option").removeClass("select");
 			$(this).addClass("select");
 		});
 	});
 	
 	
 	
 	
 	
 	
 	
 	$(".gd-channel ul li").each(function(index,element){
 		$(this).click(function(){
 			$(this).addClass("select").siblings("li").removeClass("select");
 			$(".gd-touzhuqi-top").eq(index).css("display","block").siblings(".gd-touzhuqi-top").css("display","none");
 		});

 	})
 		
 		
 	$(".gd-touzhuqi-top").each(function(j){
 		$(this).find(".gd-touzhuqi-tit").find("dd").each(function(k){
 			$(".gd-touzhuqi-top").eq(j).find(".gd-touzhuqi-tit").find("dd").eq(k).click(function(){
 				$(".gd-touzhuqi-top").eq(j).find(".gd-touzhuqi-tit").find("dd").eq(k).addClass("select").siblings("dd").removeClass("select");
 				$(".gd-touzhuqi-top").eq(j).find(".everynumber").eq(k).css("display","block").siblings(".everynumber").css("display","none");
 			});
 		});
 	});
 	$(".gd-WrapR-mid").find("li").each(function(m){	
 		$(this).mouseover(function(){	
 			$(".gd-WrapR-mid").find("li").eq(m).addClass("cur-select").siblings("li").removeClass("cur-select");
 			$(".cur-yilou-select").eq(m).css("display","block").siblings(".cur-yilou-select").css("display","none");
 		});
 	});

 	$(".gd-Fllownub-one").find("dd").each(function(n){	
 		$(this).click(function(){	
 			$(this).find("span").addClass("select");
 			$(this).siblings("dd").find("span").removeClass("select");
 			$(".gd-Fllownub-one >a").eq(n).css("display","block").siblings("a").css("display","none");
 			$(".gd-Fllownub-wrap-con").eq(n).css("display","block").siblings(".gd-Fllownub-wrap-con").css("display","none");
 		});
 	});

 	$(".buy-every1").each(function(n){	
 		$(this).click(function(){	
 			$(this).find("input").attr("checked",true);
 			$(this).siblings("li").find("input").attr("checked",false);
 			
 			$(".zhuihao-set1").eq(n).css("display","block").siblings(".zhuihao-set1").css("display","none");
 		});
 	});

 	$(".buy-every2").each(function(n){	
 		$(this).click(function(){	
 			$(this).find("input").attr("checked",true);
 			$(this).siblings("li").find("input").attr("checked",false);
 			
 			$(".zhuihao-set2").eq(n).css("display","block").siblings(".zhuihao-set2").css("display","none");
 		});
 	});
 	
 	$(".near-number").eq(0).click(function(){	
 		$(".win-number").css("display","none");
 		$(".win-number:lt(5)").css("display","");
 		//$(this).css("color","#de0201").siblings(".near-number").css("color","#123456");
 	});
 	$(".near-number").eq(1).click(function(){	
 		$(".win-number").css("display","none");
 		$(".win-number:lt(10)").css("display","");
 		//$(this).css("color","#de0201").siblings(".near-number").css("color","#123456");
 	});

 	$(".win-number").css("display","none");
 	$(".win-number:lt(5)").css("display","");
 	/*快三我的投注和我的追号切换*/
 	
 	$(".top-right h3 span").each(function(index,element){
 		$(this).click(function(){
 			$(this).addClass("top-cur").siblings("span").removeClass("top-cur");
 			$(".ksan-box table").eq(index).css("display","").siblings(".ksan-box table").css("display","none");
 		});

 	})
 	
 		
 	/*排行榜*/
 	
 	$(".gd-WrapR-mid ul li").each(function(id){
 		$(this).mouseover(function(){
 			$(this).addClass("cur-select").siblings().removeClass("cur-select");
 			$(".zjbtnr table").eq(id).css("display","").siblings(".zjbtnr table").css("display","none");
 			
 		});
 	});
 	
 });

 function addCode(){

 	var num=0;
 	var zhuma="";
 	$(".kuaisan-hezhi li em").each(function(){
 		if($(this).hasClass("curbtn")){
 			num+=1;
 			zhuma+=$(this).text()+",";
 		}
 	});
 	zhuma=zhuma.substring(0,zhuma.length-1);
 	
 	if(num==0){
 		alert("请先选择和值数");
 	}else{
 		$(".touzhuqi-numberbox ul").append("<li><div class='touzhuqi-numberbox-num'><div class='touzhuqi-numberbox-num-l'>[和值]"+zhuma+"【"+num+"注,"+num*2+"元】</div></div><div class='gd-num-del'><a href='javascript:void(0)' onclick='deleteCode($(this))' title='删除'>删除</a></div></li>");
 	}
 	$(".kuaisan-hezhi li em").removeClass("curbtn");
 	$(".totalmoney").text(Number($(".totalmoney").text())+num*2);
 }

 function deleteCode(obj){
 	obj.parent().parent().remove();
 }

 function RandomBuilder(start,end, count) {
 	var original = new Array; //原始数组
 	//给原始数组original赋值
 	for (var i = start; i <= end; i++) {
 		original[i] = i;
 	}
 	original.sort(function() { return 0.5 - Math.random(); });
 	var arrayList = new Array();
 	for (var i = 0; i < count; i++) {
 		arrayList[i] = original[i];
 	}
 	return arrayList;
 }

 function jixuan(){
 	var num=Number($(".choosenum .select").text());
 	var array=RandomBuilder(4,17,num);
 	for(var i=0;i<array.length;i++){
 		$(".touzhuqi-numberbox ul").append("<li><div class='touzhuqi-numberbox-num'><div class='touzhuqi-numberbox-num-l'>[和值]"+array[i]+"【1注,2元】</div></div><div class='gd-num-del'><a href='javascript:void(0)' onclick='deleteCode($(this))' title='删除'>删除</a></div></li>");
 	}
 }

 function clearCode(){
 	$(".touzhuqi-numberbox ul li").remove();
 }
 </script>
</body>
</html>