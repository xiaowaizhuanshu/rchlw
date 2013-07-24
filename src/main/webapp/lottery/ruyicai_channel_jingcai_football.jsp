<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩竞彩足球投注</title>
<meta http-equiv="keywords" content="竞彩足球投注，过关方式"/>
<meta http-equiv="description" content="博雅彩竞彩足球投注返奖率高达69%是竞彩足球一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/jzggmb.css" rel="stylesheet" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jingcai/scores.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jingcai/jc_zuqiu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/upload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js"></script>
</head>
<body>
<div id="body">
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
	<div id="main">
		<!--  ChannelBuyBanner start  -->
		<div class="jzdqwz">
			<p>
				您所在的位置：<a href="<%=request.getContextPath() %>/index.jsp">博雅彩</a>&nbsp;&gt;&nbsp;<a href="<%=request.getContextPath() %>/function/goucaidating.jsp">购彩大厅</a>&nbsp;&gt;&nbsp;<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_jingcai_football.jsp">竞彩足球</a>
			</p>
		</div>
		<div class="ChannelBuyBanner">
			<ol style="background:url(/rchlw/function/images/logo_jczq_b.gif) no-repeat 15px 15px; height:54px;">
				<li>
					<!-- 期号 截至时间  倒计时    开始 -->
					<img src="/rchlw/function/images/word_jczq.gif" /><i>返奖率高达69%，过关固定奖金　　 销售时间：周一/二/五 09:00～23:54  周三/四 07:30～23:54  周六/日 09:00～00:54
					</i>
				</li>
			</ol>
			<div class="space10">&nbsp;</div>
			<!--  Tab start  -->
			<div class="ChannelBuyHandleMainTab">
				<dl class="ChannelBuyTab">
					<dt class="light selected rangqiu-shengpingfu" ControlTarget="BuyChoice">让球胜平负</dt>
					<dt class="light shengpingfu" ControlTarget="BuyChoice">胜平负</dt>
					<dt class="light zongjinqiu" ControlTarget="zjqChoice">总进球数</dt>
				    <dt class="light bifen" ControlTarget="bfChoice">比分</dt> 
				<!--  <dt class="light banquanchang" ControlTarget="bqcChoice">半全场</dt>	 -->
					<dt class="light" onclick="window.location.href='/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
					<dd>
						<a style="border:0px;" onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="竞彩足球胜平负" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"> <h3 style='line-height:26px;'>${title}</h3>${content}</tangs:ryc_newslist>" target="_blank" href='http://www.ruyicai.com/cms/a/bangzhuzhongxin/wanfajieshao/2012/0329/35.html?fid=36&id=35'>玩法介绍</a>
					</dd>
				</dl>
			</div>
			<!--  Tab end  -->
		</div>
		<!--  ChannelBuyBanner end  -->
		<div class="touzhu">
			<div class="ChannelBuyHandleZC">
			 	<div class="ChannelBuyHandleTabContent">
			 		<div class="ChannelBuyHandleSecondTab">
					 	<dl class="ChannelBuyTab BuyChoice none selected" ControlTarget="BuyNormal">
<!-- 							<dt class="BuyNormal light selected" ControlTarget="hemaiContent" onclick="setErjiwanfa('合买大厅');judgeCaizhong();hideRight();" id="ssq_pttz">合买大厅</dt> -->
							<dt class="BuyCourage light guoguantouzhu selected" ControlTarget="guoguanContent" onclick="setErjiwanfa('过关投注');judgeCaizhong();">过关投注</dt>
							<dt class="BuyUpload light danguantouzhu" ControlTarget="danguanContent" style="display;" onclick="setErjiwanfa('单关投注');judgeCaizhong();">单关投注</dt>
 							<dt class="BuyUpload light uploadFile" ControlTarget="uploadContent" onclick="setErjiwanfa('文件上传');judgeCaizhong();">文件上传</dt>
<!-- 							<a class="xsqhsca" href="#">先发起后上传</a> -->

						</dl>
					</div>
					<div class="BuyChoice none selected" id="jingcai_area">
							<div class="ChannelJCHandleTabContent">
									<jsp:include page="/function/ruyicai_jc/jc_rangqiu_guoguan_touzhu.jsp"/>
								<input type="hidden" id="caiZhong" value="jc" /> 
							</div>
					</div>
				</div>
			</div>
			<div class="BuyChoice JingCaiRight none selected" id="div_jcRight">
				    <jsp:include page="/function/ruyicai_jc/jc_queren_touzhu.jsp"></jsp:include>                                                                                           
			</div>
			<div class="zjqChoice JingCaiRight none" id="div_jcRight_zjq">
				<jsp:include page="/function/ruyicai_jc/jc_zjq_touzhu_right.jsp"></jsp:include>
			</div>
			<div class="bfChoice JingCaiRight none " id="div_jcRight_bf">
				<jsp:include page="/function/ruyicai_jc/jc_bf_touzhu_right.jsp"></jsp:include>
			</div>
			<div class="bqcChoice JingCaiRight none " id="div_jcRight_bf">
				<jsp:include page="/function/ruyicai_jc/jc_bqc_touzhu_right.jsp"></jsp:include>
			</div>
			
			<input type="hidden" id="allWanfa" value="" name="allWanfa" />
			<input type="hidden" id="jcType" value="spf"  />
			<input type="hidden" id="dangqianwanfa" value="胜平负"  />
				
		</div>
	</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
<!-- 弹出框 开始 -->
<jsp:include page="/function/public_touZhuAlert_jingcaizuqiu.jsp"></jsp:include>
<!-- 弹出框 结束 -->
</div>
<script>
		//动态改变遮罩层的高度
		var tempHeight = $("#zucai_area").height() + $(".zucai_money").height() + $(".FollowNubFootball").height();
		$(".zucaitableceng").css("height",tempHeight);
</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>
<script type="text/javascript">
									
	$(".ChannelBuyTab dt").click(function(){
		
		if($(this).attr("ControlTarget")=="uploadContent"){
			$("#div_jcRight").css("display","none");
			$("#div_jcRight_zjq").css("display","none");
			$("#div_jcRight_bf").css("display","none");
			$(".ChannelBuyHandleZC").css("width","948px");
			$(".ChannelBuyHandleTabContent").css("width","948px");
		}else{
			$("#div_jcRight").css("display","");
			$("#div_jcRight_zjq").css("display","");
			$("#div_jcRight_bf").css("display","");
			$(".ChannelBuyHandleZC").css("width","702px");
			$(".ChannelBuyHandleTabContent").css("width","698px");
		}
		
		//在转换投注方式之前，清空已经选择的比赛，将投注倍数重新设置为1
		$("#choose_list tr td .CheckBox").each(function(){
			$(this).click();
		});
		$("#zjq_choose_list tr td .CheckBox").each(function(){
			$(this).click();
		});
		$("#bf_choose_list tr td .CheckBox").each(function(){
			$(this).click();
		});
		$("#bqc_choose_list tr td .CheckBox").each(function(){
			$(this).click();
		});
		$('#tb_Multiple_standrad').val(1);
		
		$(".ChannelJCHandleTabContent").children().remove();
		var parameters="type=rangqiu-guoguan";
		var bloean=true;
		
		if($(this).hasClass("rangqiu-shengpingfu")){
			$("#lotNo").val("J00013");
			setErjiwanfa("过关投注");
			$("#allWanfa").val("");
			$("#jcType").val("spf");
			$("#dangqianwanfa").val("让球胜平负");
			parameters="type=rangqiu-guoguan";
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			$(".guoguantouzhu").parent().children().removeClass("selected");
			$(".guoguantouzhu").addClass("selected");
			$(".danguantouzhu").css("display","");
			$(".uploadFile").css("display","");
		}else if($(this).hasClass("shengpingfu")){
			$("#lotNo").val("J00001");		
			setErjiwanfa("过关投注");
			$("#allWanfa").val("");
			$("#jcType").val("spf");
			$("#dangqianwanfa").val("胜平负");
			parameters="type=spf-guoguan";
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			$(".guoguantouzhu").parent().children().removeClass("selected");
			$(".guoguantouzhu").addClass("selected");
			$(".danguantouzhu").css("display","");
			$(".uploadFile").css("display","");
		}else if($(this).hasClass("zongjinqiu")){
			$("#lotNo").val("J00003");		
			setErjiwanfa("过关投注");
			$("#allWanfa").val("");
			$("#jcType").val("zjq");
			$("#dangqianwanfa").val("总进球数");
			parameters="type=zjq-guoguan";
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			$(".guoguantouzhu").parent().children().removeClass("selected");
			$(".guoguantouzhu").addClass("selected");
			$(".danguantouzhu").css("display","");
			$(".uploadFile").css("display","");
			touzhuInitStatic();
		}else if($(this).hasClass("bifen")){
			$("#lotNo").val("J00002");		
			setErjiwanfa("过关投注");
			$("#allWanfa").val("");
			$("#jcType").val("bf");
			$("#dangqianwanfa").val("比分");
			parameters="type=bf-guoguan";
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			$(".guoguantouzhu").parent().children().removeClass("selected");
			$(".guoguantouzhu").addClass("selected");
			$(".danguantouzhu").css("display","none");
			$(".uploadFile").css("display","");
			touzhuInitStatic();
		}else if($(this).hasClass("banquanchang")){
			$("#lotNo").val("J00004");		
			setErjiwanfa("过关投注");
			$("#allWanfa").val("");
			$("#jcType").val("bqc");
			$("#dangqianwanfa").val("比分");
			parameters="type=bqc-guoguan";
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			$(".guoguantouzhu").parent().children().removeClass("selected");
			$(".guoguantouzhu").addClass("selected");
			$(".danguantouzhu").css("display","");
			$(".uploadFile").css("display","none");
			touzhuInitStatic();
		}else if($(this).attr("ControlTarget")=="guoguanContent"){			
			$("#allWanfa").val("");
			$(".danguanchoose").css("display","none");
			$(".guoguanchoose").css("display","");
			if($(".rangqiu-shengpingfu").hasClass("selected")){
				parameters="type=rangqiu-guoguan";
			}else if($(".shengpingfu").hasClass("selected")){
				parameters="type=spf-guoguan";
			}else if($(".zongjinqiu").hasClass("selected")){
				parameters="type=zjq-guoguan";
			}else if($(".bifen").hasClass("selected")){
				parameters="type=bf-guoguan";
			}else if($(".bifen").hasClass("selected")){
				parameters="type=bqc-guoguan";
			}
		}else if($(this).attr("ControlTarget")=="danguanContent"){			
			$("#allWanfa").val("500");
			$(".guoguanchoose").css("display","none");
			$(".danguanchoose").css("display","");
			if($(".rangqiu-shengpingfu").hasClass("selected")){
				parameters="type=rangqiu-danguan";
			}else if($(".shengpingfu").hasClass("selected")){
				parameters="type=spf-danguan";
			}else if($(".zongjinqiu").hasClass("selected")){
				parameters="type=zjq-danguan";
			}else if($(".banquanchang").hasClass("selected")){
				parameters="type=bqc-danguan";
			}
		}else if($(this).attr("ControlTarget")=="uploadContent"){
			if($(".rangqiu-shengpingfu").hasClass("selected")){
				parameters="type=rangqiu-upload";
			}else if($(".shengpingfu").hasClass("selected")){
				parameters="type=spf-upload";
			}else if($(".zongjinqiu").hasClass("selected")){
				parameters="type=zjq-upload";
			}else if($(".bifen").hasClass("selected")){
				parameters="type=bf-upload";
			}		
		}
		
		$.ajax({
			url:"/rchlw/function/jc!getChange",//后台处理程序
			type:"POST",//数据发送方式
			data:parameters,//参数
			dataType:'html',//接受数据格式
			async:bloean,//同步执行还是异步执行
			success:function(data){
						$(".ChannelJCHandleTabContent").html(data);
				}
		});
	});

</script>