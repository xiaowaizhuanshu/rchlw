<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!--#include virtual="/include/top_http.html"-->
<html>
<head>
    <title>手机客户端下载下载_博雅彩</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="博雅彩、手机彩票客户端下载，诺基亚彩票客户端，三星彩票客户端，摩托罗拉彩票客户端，索爱彩票客户端">
	<meta http-equiv="description" content="手机彩票客户端下载，诺基亚彩票客户端，三星彩票客户端，摩托罗拉彩票客户端，索爱彩票客户端">
	<link rel="shortcut icon" href="../img/biao-ico.ico"  type="image/x-icon" />
	<script type="text/javascript" src="../js/download/jquery.js"></script>
	<script type="text/javascript" src="../js/download/download.js"></script>
</head>
<body>
    <div id="downloadBody" align="center">
                <div id="maincontent" >
                    <div class="left text"  >
                          <ul><li>
                             <div style="background: ../img/right-beijingse.jpg" class="center" ></div>                               
                                <ul><li >                                     
                                     <div >请选择手机品牌：</div>
                                     <div><select name="brand" id="brand" >
		                                  <option value="">-请选择-</option> 
		                                  <option value="nokia">诺基亚</option>
		                                  <option value="moto">摩托罗拉</option>
		                                  <option value="sony">索爱</option>
		                                  <option value="samsung">三星</option>
										  <option value="android">android(安卓)</option>
										  </select></div></li>                                           
                                       <li >
                                         <div >请选择手机型号：</div>
                                         <div><select name="type" id="type" ><option value="">-请选择-</option></select></div>
                                    </li>
                                    <li >
                                        <div  >您选择的手机品牌：<span id="selectedBrand" ></span></div> 
                                        <div >您选择的手机型号：<span id="selectedType"></span></div>                                       
                                    </li>                                   
                                    </ul>                               
                                    <ul>
                                      <li><img src="../img/mobilephonebrand.gif" title="" id="imgBrand"></li>
                                      <li><img src="../img/mobilephonetype.gif" title="" id="imgType"></li>                                
                                      <li>
                                           <!-- <a href="" title="立即下载 " id="aDownload" name="aDownload" onclick="isValid();">立即下载</a> -->
                                           <div id="aDownload"></div>
										  
										  <div >
										  <ul><li ></li></ul>
										  <ul>
											<li><span >如下载下来的文件是<span>zip</span>格式,请将后缀名更改为<span>apk</span>格式后再安装</span></li>
										  </ul>
										</div>
 
                                        </li>
                                     </ul>                             
                             </li></ul></div>
                          <ul><li><div ></div></li></ul>
                           <ul><li>                     
                           <div id="wrap" style="display:none;">
                               <div class="MainCont">                           
	                               <div class="TopInfo">
									    <div class="Info" id="TopInfo">数据读取中...</div>
									    <div class="PageList" id="TopPageList">
									      &lt;&lt;首页上页&nbsp;&nbsp;&nbsp;<strong>1</strong>&nbsp;&nbsp;&nbsp;下页末页&gt;&gt;
									    </div>
								 </div>
									<div class="Content" id="Content">
									    <div>数据读取中...</div>
									</div>                                                  
                          </div> 
                       </div>            
             </li></ul>
           </div></div>                

</body>
</html>

