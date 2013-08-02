<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<link href="/rchlw/recs/styles/pageHead.css" rel="stylesheet" type="text/css" />
<!-- 引用原来的css -->
<link type="text/css" href="/rchlw/function/css/Css_HomeOnly.css" rel="stylesheet"/>
<script src="/rchlw/recs/scripts/head.js" type="text/javascript" ></script>
	<!--顶部-
    	<div class="top_welcome">
        	<div class="wel_center">
                <div class="top_wel_left">
                欢迎来到博雅彩!<a href="javascript:void(0)" class="top_loginBtn">登录</a>|<a href="javascript:void(0)" class="top_registBtn">免费注册</a></div>
                <div class="top_wel_right">
                    <a href="javascript:void(0)">首页</a>|
                    <a href="javascript:void(0)">手机购彩</a>|
                    <a href="javascript:void(0)">帮助中心</a>|
                    <a href="javascript:void(0)">活动专题</a>|
                    <a href="javascript:void(0)">留言反馈</a>
                </div>
            </div>
        </div>-->
        <jsp:include page="/function/user/user_top.jsp"/>
        <!--顶部 end-->
        <!--LOGO and HotLine-->
        <div class="logo_hotline">
        	<div class="logo_center">
            	<a href="/rchlw/views/index.jsp" class="logo_icon"></a>
            	<a href="javascript:void(0)" class="new_centent"></a>
            	<a href="http://wpa.qq.com/msgrd?v=3&uin=1427872305&site=qq&menu=yes" target="_blank" class="online"></a>
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
                	<li><a href="/rchlw/function/hemaiCenter!getCaseHemaiCenter">合买中心</a></li>
                	<li><a href="/rchlw/function/ryc_select_newkj!drawalottery">彩票开奖</a></li>
                	<li><a href="http://tbzs.ruyicai.com">彩票走势图</a></li>
                	<li><a href="/rchlw/news/category_xinwenzixun.jsp">彩票资讯</a></li>
                	<li><a href="/rchlw/function/include/downLoadClient.jsp">手机购彩</a></li>
                </ul>
            </div>
        </div>
        <!--d导航 Nav end-->