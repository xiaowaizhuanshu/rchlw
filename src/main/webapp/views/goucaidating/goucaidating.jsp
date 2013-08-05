<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>购彩大厅</title>
<link href="/rchlw/recs/styles/goucaidating/buy_ball.css" rel="stylesheet" type="text/css" />
<script src="/rchlw/recs/scripts/jquery-1.7.2.min.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/goucaidating/buy_ball.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/function/js/util.js" type="text/javascript" language="javascript"></script>
</head>

<body>
<input type="hidden"   id="F47104" />
<input type="hidden"  id="F47103" />
<input  type="hidden"  id="F47102" />
<input type="hidden"   id="T01007" />

<input type="hidden"  id="T01001" />
<input type="hidden"   id="T01009" />
<input type="hidden"    id="T01002" />
<input type="hidden"   id="T01011" />

<input type="hidden"   id="T01010" />
<input type="hidden"   id="T01012" />
<input type="hidden"   id="T01004" />
<input type="hidden"   id="J00001" />
<script>$(function(){index_toplogo('header',"goucaidating");});</script>
	<!--头部 header-->
	<div id="header" class="header">
    
    </div>
	<!--头部 header end-->

	<!--购彩大厅 主体-->
	<div class="main">
    	<div class="center">
        	<div class="ball">
            	<div class="ball_top">
                	<span>热销彩种推荐</span>
                    <label>促销文字，天天博雅彩天天有惊喜</label>
                </div>
                <div class="ball_list on">
                	<!--砖块-->
                	<div class="ball_single on">
                    	<div class="today"></div>
                        <div class="ball_box">
                            <div class="box_top">
                                <img src="/rchlw/recs/images/buy_hall/duole.png" />
                                <b>11选5</b>
                                <label>每天78期，任猜1-8号都中奖</label>
                                <a href="javascript:void(0)"></a>
                            </div>
                        </div>
                    </div>
                    
                    <!--砖块-->
                	<div class="ball_single">
                    	<div class="today"></div>
                        <div class="ball_box">
                            <div class="box_top">
                                <img src="/rchlw/recs/images/buy_hall/shishi.png" />
                                <b>时时彩</b>
                                <label>10分钟一期，<font>最高奖11.6万</font></label>
                                <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssc.jsp"></a>
                            </div>
                        </div>
                    </div>
                    
                    <!--砖块-->
                	<div class="ball_single">
                    	<div class="today"></div>
                        <div class="ball_box">
                            <div class="box_top">
                                <img src="/rchlw/recs/images/buy_hall/J_football.png" />
                                <b>竞彩足球</b>
                                <label><font>高返奖率，</font>球迷首选</label>
                                <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_jingcai_football.jsp"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--福彩 体彩-->
            <div class="ball">
            	<div class="ball_top">
                	<span>福彩、体彩</span>
                    <label>促销文字，天天博雅彩天天有惊喜</label>
                </div>
                <div class="ball_list">
                	<!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="F47104">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/daletou.png" />
                                    <b>双色球</b>
                                    <label>彩民最爱，<font>2元赢取1000万</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/daletou.png" />
                                    <b>双色球</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="F47103">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/fucai3d.png" />
                                    <b>福彩3D</b>
                                    <label>简单3位数，<font>轻松赢千元</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/fucai3d.png" />
                                    <b>福彩3D</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden"  opt="F47102">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/7lecai.png" />
                                    <b>七乐彩</b>
                                    <label><font>2元赢取大奖500万</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/7lecai.png" />
                                    <b>七乐彩</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qlc.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01001">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/daletou.png" />
                                    <b>大乐透</b>
                                    <label>体彩销量最大，<font>3元赢取1600万</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/daletou.png" />
                                    <b>大乐透</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list on">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01009">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/duole.png" />
                                    <b>七星彩</b>
                                    <label><font>2元赢取大奖500万</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/duole.png" />
                                    <b>七星彩</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qxc.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list on">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01002">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/pailie3.png" />
                                    <b>排列三</b>
                                    <label><font>2元赢取1000元</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/pailie3.png" />
                                    <b>排列三</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_pls.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list on">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01011">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/pailie5.png" />
                                    <b>排列五</b>
                                    <label><font>2元赢取10000元</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/pailie5.png" />
                                    <b>排列五</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:80%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_plw.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <!--高频彩-->
            <div class="ball">
            	<div class="ball_top">
                	<span>高频彩</span>
                    <label>促销文字，天天博雅彩天天有惊喜</label>
                </div>
                <div class="ball_list">
                	<!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01007">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/shishi.png" />
                                    <b>时时彩</b>
                                    <label><font>2元赢取1000元</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/shishi.png" />
                                    <b>时时彩</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="hour"></font><font class="min"></font><font class="second"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssc.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01010">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/duole.png" />
                                    <b>江西11选5</b>
                                    <label>任选1-8号都中奖</label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/duole.png" />
                                    <b>江西11选5</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_11xuan5.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden" opt="T01012">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/jiangxi.png" />
                                    <b>11运夺金</b>
                                    <label>简单易中奖，<font>返奖率高</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/jiangxi.png" />
                                    <b>11运夺金</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_syydj.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!--竞技彩-->
            <div class="ball">
            	<div class="ball_top">
                	<span>竞技彩</span>
                    <label>促销文字，天天博雅彩天天有惊喜</label>
                </div>
                <div class="ball_list">
                	<!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/football.png" />
                                    <b>足彩</b>
                                    <label>足球精彩，大奖等你拿</label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/football.png" />
                                    <b>足彩</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/J_football.png" />
                                    <b>竞彩足球</b>
                                    <label>返奖率高，<font>球迷首选</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/J_football.png" />
                                    <b>竞彩足球</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_jingcai_football.jsp"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--砖块-->
                	<div class="box_list">
                    	<div class="today"></div>
                        <div class="box">
                        	<div class="box_hidden">
                            	<div class="box_write">
                                	<img src="/rchlw/recs/images/buy_hall/J_basketball.png" />
                                    <b>竞彩篮球</b>
                                    <label>覆盖NBA比赛<font>返奖率高</font></label>
                                    <span>每周二、四、日&nbsp;21:30开奖</span>
                                </div>
                            	<div class="box_bottom">
                                	<img src="/rchlw/recs/images/buy_hall/J_basketball.png" />
                                    <b>竞彩篮球</b>
                                    <label>本期投注剩余时间：</label>
                                    <div class="time_full"><strong style="width:50%;"></strong><span><font class="day"></font><font class="hour"></font><font class="min"></font></span></div>
                                    <a href="javascript:void(0)"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hall_foot">
    	<div class="h_f_center">
        	<div class="hall_foot_logo">
            	<a href="javascript:void(0)"><img src="/rchlw/recs/images/buy_hall/jingzhun.jpg" /></a>
                <div class="hall_foot_text">
                    <span>交易安全</span>
                    <span>购买便捷</span>
                    <span>领奖方便</span>
                </div>
            </div>
            <dl>
            	<dt>新手指南</dt>
                <dd><a href="javasccript:void(0)">购彩流程</a></dd>
                <dd><a href="javasccript:void(0)">领奖流程</a></dd>
                <dd><a href="javasccript:void(0)">如何充值</a></dd>
                <dd><a href="javasccript:void(0)">彩票玩法</a></dd>
            </dl>
            <dl>
            	<dt>帮助中心</dt>
                <dd><a href="javasccript:void(0)">在线购彩</a></dd>
                <dd><a href="javasccript:void(0)">手机购彩</a></dd>
                <dd><a href="javasccript:void(0)">常见问题</a></dd>
                <dd><a href="javasccript:void(0)">玩法介绍</a></dd>
            </dl>
            <dl>
            	<dt>充值中心</dt>
                <dd><a href="javasccript:void(0)">银联支付</a></dd>
                <dd><a href="javasccript:void(0)">支付宝支付</a></dd>
                <dd><a href="javasccript:void(0)">联动优势充值</a></dd>
                <dd><a href="javasccript:void(0)">银联语音充值</a></dd>
            </dl>
            <div class="hall_service">
            	<div class="ser_phone">
                	<span class="phone">客服电话</span>
                    <label>400-856-1000</label>
                </div>
            	<div class="ser_phone">
                	<span class="qq">彩民Q群</span>
                    <label><a href="javascript:void(0)">247533407</a></label>
                </div>
            </div>
        </div>
    </div>
	<!--购彩大厅 主体 end-->

<!--footer-->
    <jsp:include page="/views/footer.jsp"/>
<!--footer end-->
</body>
</html>
