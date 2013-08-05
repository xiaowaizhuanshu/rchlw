<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>

<!-- 引用原来的css -->
<link type="text/css" href="/rchlw/function/css/Css_HomeOnly.css" rel="stylesheet"/>

<link href="/rchlw/recs/styles/reset.css" rel="stylesheet" type="text/css" />
<link href="/rchlw/recs/styles/pageHead.css" rel="stylesheet" type="text/css" />
<script src="/rchlw/recs/scripts/head.js" type="text/javascript" ></script>
        <jsp:include page="/function/user/user_top.jsp"/>
        <!--顶部 end-->
        <!--LOGO and HotLine-->
        <div class="logo_hotline">
        	<div class="logo_center">
            	<a href="/rchlw/views/index.jsp" class="logo_icon"></a>
            	<a href="javascript:void(0)" class="new_centent"></a>
            	<a href="http://wpa.qq.com/msgrd?v=3&uin=2522309140&site=qq&menu=yes" target="_blank" class="online"></a>
            	<a href="javascript:void(0)" class="hotline"></a>
            </div>
        </div>
        <!--LOGO and HotLine end-->
        <!--导航 Nav-->
        <div class="nav">
        	<div class="nav_center">
            <!--滑块-->
            	<div class="nav_slider">
                	<div class="slider_select"><span>彩种选择</span></div>
                    <!--slider_down-->
                    <div class="slider_down">
                    	<!--滑块-砖块-->
                    	<div class="fucai">
                        	<div class="select_top">
                            	<span>福彩</span>
                                <label>买彩票中大奖天天有惊喜</label>
                            </div>
                            <div class="select_list">
                            	<b class="on"><a href="/rchlw/lottery/ruyicai_channel_ssq.jsp" title="双色球">双色球</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_3D.jsp" title="福彩3D">福彩3D</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_qlc.jsp" title="七乐彩">七乐彩</a><span></span></b>
                            </div>
                        </div>
                        <!--滑块-砖块-->
                    	<div class="ticai">
                        	<div class="select_top">
                            	<span>体彩</span>
                                <label>买彩票中大奖天天有惊喜</label>
                            </div>
                            <div class="select_list">
                            	<b class="on"><a href="/rchlw/lottery/ruyicai_channel_dlt.jsp" title="大乐透">大乐透</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_qxc.jsp" title="七星彩">七星彩</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_pls.jsp" title="排列三">排列三</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_plw.jsp" title="排列五">排列五</a><span></span></b>
                            </div>
                        </div>
                        <!--滑块-砖块-->
                    	<div class="gaopin">
                        	<div class="select_top">
                            	<span>高频</span>
                                <label>买彩票中大奖天天有惊喜</label>
                            </div>
                            <div class="select_list">
                            	<b><a href="/rchlw/lottery/ruyicai_channel_ssc.jsp" title="时时彩">时时彩</a><span></span></b>
                                <b><a href="/rchlw/lottery/ruyicai_channel_11xuan5.jsp" title="江西11选5">江西11选5</a><span></span></b>
                                <b class="on"><a href="/rchlw/lottery/ruyicai_channel_syydj.jsp" title="十一运夺金">11运夺金</a><span></span></b>
                            </div>
                        </div>
                        <!--滑块-砖块-->
                    	<div class="jingji">
                        	<div class="select_top">
                            	<span>竞技</span>
                                <label>买彩票中大奖天天有惊喜</label>
                            </div>
                            <div class="select_list">
                            	<b class="on"><a href="/rchlw/lottery/ruyicai_channel_shengfucai.jsp" title="足彩胜负">足彩</a><span></span></b>
                                <b class="on"><a href="/rchlw/lottery/ruyicai_channel_jingcai_football.jsp" title="竞彩足球">竞彩足球</a><span></span></b>
                                <b>竞彩篮球<span></span></b>
                            </div>
                        </div>
                    </div>
                    <!--slider_down end-->
                </div>
                <!--滑块 end-->
                <ul class="nav_list">
                	<li class="indexHome"><a href="/rchlw/views/index.jsp">首页</a></li>
                	<li class="goucaidating"><a href="/rchlw/views/goucaidating/goucaidating.jsp">购彩大厅</a></li>
                	<li class="hemaicenter"><a href="/rchlw/function/hemaiCenter!getCaseHemaiCenter">合买中心</a></li>
                	<li class="cpkj"><a href="/rchlw/function/ryc_select_newkj!drawalottery">彩票开奖</a></li>
                	<li class="cpzst"><a href="http://tbzs.ruyicai.com">彩票走势图</a></li>
                	<li class="cpzx"><a href="/rchlw/news/category_xinwenzixun.jsp">彩票资讯</a></li>
                	<li class="sjgc"><a href="/rchlw/function/include/downLoadClient.jsp">手机购彩</a></li>
                </ul>
            </div>
        </div>
        <!--d导航 Nav end-->