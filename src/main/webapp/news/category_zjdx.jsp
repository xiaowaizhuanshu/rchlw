<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>  
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩专家短信套餐订阅</title>
<meta name="keywords" content="如意彩短信套餐，开奖短信，专家战绩，订阅排行">
<meta name="description" content="如意彩专家短信套餐订阅-为您提供掌上快捷的彩票短信平台">
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
</head>
<div id="body">
  <script>$(function(){toplogo('common',"Buttonmessage");});</script>
 <span id="common"></span>
    <div id="main">
    <div class="zixun_main">
   <jsp:include page="/news/zhuanjiaduanxin_left.jsp"></jsp:include>	
    <!--中间-->      
    <div class="messagescenter">
         <div class="zhuanjia_yewu">
                <div class="zhuanjia_zifei">
                <div class="zifei_left">
                         <div class=" zj_title">双色球非常6+1 </div>
                          <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2"> 696205</font> 至 <font class="red2">106695888</font><br />
                          说明：每期推荐6枚红球和1枚蓝球<br />
                          资费：1元/条，不含通信费</div>
                          <div class="zj_right"></div>
                          </div>
                         
                          <div class="zifei_right">
                               <div class=" zj_title1">双色球绝杀十红</div>
                               <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2"> 696207</font> 至 <font class="red2">106695888</font><br />
                          说明：每期推荐绝杀10枚红球<br />
                          资费：1元/条，不含通信费</div>
                          <div class="zj_right"></div>
                          </div>
                </div>
                
               <div class="zhuanjia_zifei">
                         <div class="zifei_left">
                         <div class=" zj_title">3D金银双胆 </div>
                          <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2"> 696203</font> 至 <font class="red2">106695888</font><br />
                          说明：推荐金银胆、六码、1注奖号
                          资费：1元/条，不含通信费</div>
                          <div class="zj_right"></div>
                 </div>
                         
                          <div class="zifei_right">
                               <div class=" zj_title1">3D爱心套餐</div>
                               <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2"> 696202</font> 至 <font class="red2">106695888</font><br />
                          说明：推荐七、六、五码复式和5注号
                          资费：1元/条，不含通信费</div>
                          <div class="zj_right"></div>
                          </div>
                </div>
                
                
                 <div class="zhuanjia_zifei">
                         <div class="zifei_left">
                         <div class=" zj_title">排列三王牌直选 </div>
                          <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2">696265</font> 至 <font class="red2">106695888</font><br />
                          说明：每期推荐直选定位号和5注奖号
                          资费：1元/条，不含通信费</div>
                          <div class="zj_right"></div>
                   </div>
                         
                          <div class="zifei_right">
                               <div class=" zj_title1">双色球·荐号王</div>
                               <div class="zj_left"></div>
                          <div class="zj_zcenter">
                          发送<font class="red2"> 108153</font> 至 <font class="red2">10669588</font><br />
                          说明：每期推荐“8+3”小复式<br />
                          资费是：5元/月，不含通信费</div>
                          <div class="zj_right"></div>
                          </div>
                </div>
                </div>
              
          <div class="yewu_read">
               <div class="zgrey"><font class="yewu_top">业务订阅指南</font><font class="yewu_zi"><a href="javaScript:toggle_nav('','sub_nav_',1,'','','',4)" title="福彩3D" onmousemove="toggle_nav('','sub_nav_',1,'','','',4)">福彩3D
               </a><a href="javaScript:toggle_nav('','sub_nav_',2,'','','',4)" title="双色球" onmousemove="toggle_nav('','sub_nav_',2,'','','',4)">双色球</a><a href="javaScript:toggle_nav('','sub_nav_',3,'','','',4)" title="排列三" onmousemove="toggle_nav('','sub_nav_',3,'','','',4)">
                                       排列三</a></font></div>
               <div class="yw_readlist">
                     <ul>
                        <li class="yw_readgrey">业务列表</li>
                        <li class="yw_readgrey1">发送指令</li>
                        <li class="yw_readgrey2">资费</li>
                     </ul>
                     <div id="sub_nav_1" style="display: block;">
                      <tangs:ryc_newslist value="3" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="业务订阅指南" channelCn="福彩3D">
                     ${content}
                     </tangs:ryc_newslist>
                     </div>
                     <div id="sub_nav_2" style="display: none;">
                      <tangs:ryc_newslist value="3" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="业务订阅指南" channelCn="双色球">
                     ${content}
                     </tangs:ryc_newslist>
                     </div>
                     <div id="sub_nav_3" style="display: none;">
                      <tangs:ryc_newslist value="3" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="业务订阅指南" channelCn="排列3">
                     ${content}
                     </tangs:ryc_newslist>
                     </div>
                     </div>
               </div>
         
         </div>
          <!--右边-->
		  <div class="zixunright">
		<div class="jinri_kj">
			<div class="zjgrey"><span class="inhelp_zi">专家战绩</span><span class="inhelp_more"><a class="light" 
			href="<%=request.getContextPath() %>/news/newsInfoList!queryNewsInfoList?categoryCode=170&channel_name_cn=zjzj" title="更多">更多>></a></span></div>
			<div class="zhjzx_con">
				<ul>
					<tangs:ryc_newslist value="3"  categoryCn="专家战绩"  web_id="%{#parameters.website_Properties_id[0]}" num="6">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}&categoryNameCn=${categoryNameCn}" title="${title}"  target="_blank"  style="color:${title_color}"> ${title}</a><span class="fczixun_time">${updatetimeFML}</span></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
		</div>
		<div class="zj_kaijiang"> <div class="zjgrey">订阅排行榜</div>
	        <tangs:ryc_newslist categoryCn="订阅排行榜" web_id="%{#parameters.website_Properties_id[0]}" num="5" value="3">
	                  ${content}
             </tangs:ryc_newslist>
       </div>
       <img src="<%=request.getContextPath() %>/function/images/dxkf.gif" />
	 </div>
     </div>
     </div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>