<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>  
 <%@ taglib prefix="page" uri="/WEB-INF/pageTang.tld"%> 
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>专家短信-详细内容页面</title>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js" ></script>
</head>
<div id="body">
 <script>$(function(){toplogo('common',"Buttonmessage");});</script>
 <span id="common"></span>
    <div id="main">
    <div class="zixun_main">
   <jsp:include page="/news/zhuanjiaduanxin_left.jsp"></jsp:include>	
    <!--中间-->      
    <div class="messagescenter">
    <tangs:ryc_newslist value="1" web_id="%{#parameters.website_Properties_id[0]}" >
   <tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="专家短信" channelExpress="#attr['name_cn']">
		 <div class="m_yewu" id="zh_${id }" style="display:none">
                  <font>${title}</font>
                  ${content}
           </div>
		</tangs:ryc_newslist>
		</tangs:ryc_newslist>
		<tangs:ryc_newslist value="1" web_id="%{#parameters.website_Properties_id[0]}" >
		<tangs:ryc_newslist value="11" web_id="%{#parameters.website_Properties_id[0]}" categoryCn="开奖短信">
		 <div class="m_yewu" id="kj_${id }" style="display:none">
                  <font>${title}</font>
                  ${content}
           </div>
		</tangs:ryc_newslist>
		</tangs:ryc_newslist>
          <div class="yewu_new">
               <div class="yewu_title"> 业务最新中奖</div>
               <tangs:ryc_newslist categoryCn="业务最新中奖" value="3" web_id="%{#parameters.website_Properties_id[0]}" >
                ${content}
               </tangs:ryc_newslist>
          </div>    
         </div> 
          <!--右边-->
	  <div class="zixunright">
			<div class="jinri_kj">
				<div class="zjgrey"><span class="inhelp_zi">专家战绩</span><a href="<%=request.getContextPath() %>/news/newsInfoList!queryNewsInfoList?categoryCode=170&channel_name_cn=zjzj" title="更多"><span class="inhelp_more">更多>></span></a></div>
				<div class="zhjzx_con">
					<ul>
						<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="专家战绩"  web_id="%{#parameters.website_Properties_id[0]}" >
					    <li> <a href="${url}" title="${title}" target="_blank">${title}</a></li>
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