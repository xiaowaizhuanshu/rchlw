<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<meta name="keywords" content="博雅彩，博雅彩票，华夏百信" />
<meta name="description" content="华夏百信-您身边的购彩专家" />
<link rel="shortcut icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="icon" href="<%=request.getContextPath() %>/function/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href='csslogo.png'>
<link rel="apple-touch-icon-precomposed" href='csslogo.png'>
<title>华夏百信科技有限公司-公司简介</title>
<link href="<%=request.getContextPath() %>/function/css/danyeNew.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<style type="text/css">
    html,body{margin:0;padding:0;}
    .iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
    .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
</style>
<script type="text/javascript" src="http://api.map.baidu.com/api?key=&v=1.1&services=true"></script>

</head>

<body>
<div class="menu_contain">
	<div class="menu">
		<ul class="menu_list">
			<li><a href="index.jsp">首 页</a></li>
			<li> <a href="company_aboutus.jsp" class="click">公司简介</a>
				<ul class="menu_listdown">
					<li><a href="company_aboutus.jsp">关于我们</a></li>
					<li><a href="company_idea.jsp">经营理念</a></li>
					<li><a href="company_president.jsp">总裁致辞</a></li>
					<li><a href="company_advantage.jsp">我们的优势</a></li>
					<li><a href="company_contactus.jsp">联系我们</a></li>
				</ul>
			</li>
			<li><a href="qualification.jsp">资质报告</a></li>
			<li><a href="authorized.jsp">彩票授权</a></li>
			<li><a href="partners.jsp">合作伙伴</a></li>
			<li><a href="legal.jsp">法律声明</a></li>
			<li><a href="job.jsp">人才招聘</a>
				<ul class="menu_listdown">
					<li><a href="job.jsp">技术研发类</a></li>
					<li><a href="job_cp.jsp">产品运营类</a></li>
					<li><a href="job_kf.jsp">客户服务类</a></li>
					<li><a href="job_zc.jsp">内容编辑类</a></li>
				</ul>
			</li>
		</ul>
		<div class="clear"></div>
	</div>
</div>
<div class="head_imgbg">
	<div class="head_imgbox"><img src="<%=request.getContextPath() %>/function/images/danye/header_gsjj.jpg" width="950" height="107" /></div>
</div>
<div class="main_contain">
	<div class="main_left">
		<h1>公司简介</h1>
		<ul id="left_menu">
			<li><a href="company_aboutus.jsp">关于我们</a></li>
			<li><a href="company_idea.jsp">经营理念</a></li>
			<li><a href="company_president.jsp">总裁致辞</a></li>
			<li><a href="company_advantage.jsp">我们的优势</a></li>
			<li><a href="#" class="click">联系我们</a></li>
		</ul>
		<div class="left_kefu">
			<h2><font>客服中心</font></h2>
			<p>+ 在线:<a href="http://wpa.qq.com/msgrd?v=3&uin=1427872305&site=qq&menu=yes">点击交流(在线客服)</a></p>
			<p>+ QQ:1427872305</p>
			<p>+ 公司总机:010-65174061</p>
			<p>+ 传真：010-62652810</p>
			<p>+ 客服电话:400-856-1000</p>
			<p>+ 邮政编码:100005</p>
			<p>+ 邮箱:<a href="mailto:service@boyacai.com">service@boyacai.com</a></p>
			<p>+ 地址:北京市建国门内大街18号恒基中心</p>
		</div>
	</div>
	<div class="main_right">
		<h1>联系我们</h1>
		<div class="main_right_txt">
			<p> 公司名称：北京华夏百信科技有限公司</p>
			<p>+ 公司总机:010-65174061</p>
			<p>+ 客服电话:400-856-1000</p>
			<p>+ 邮政编码:100005</p>
			<p>+ 电子邮箱:<a href="mailto:service@boyacai.com">service@boyacai.com</a></p>
			<p>+ 公司地址:北京市建国门内大街18号恒基中心</p>
		</div>
		<h2>地图浏览：</h2>
		<div class="main_right_txt">
		 <div style="width:697px;height:550px;border:#ccc solid 1px; margin-left:20px" id="dituContent"></div>


			<script type="text/javascript">
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.307249,40.005935);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"北京华夏百信科技有限公司",content:"北京华夏百信科技有限公司",point:"116.307295|40.005641",isOpen:0,icon:{w:21,h:21,l:46,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://openapi.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    initMap();//创建和初始化地图
</script>
		</div>
	</div>
	<div class="main_line"></div>
</div>
<jsp:include page="/function/rules/danye/danyeFooter.jsp"></jsp:include>