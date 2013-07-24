<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>合买成功</title>
<meta http-equiv="keywords" content="博雅彩、彩票投注管理、账户管理、彩票赠送管理">
<meta http-equiv="description" content="彩票投注管理、账户管理、彩票赠送管理">
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/userleft.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
</head>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	tuserinfo.put("t_name",NameUtil.getNameUtilJson(tuserinfo.getJSONObject("value")));
%>
<body>
   <div id="body">
   <div id="header">
   	<jsp:include page="/function/common/ruyicai_include_common_top_nav.jsp"/>
	 </div>
	 <div id="main">
	 	<div class="betwin">
			<div class="betwin_left">
				<div class="betwin_suc"><span class="chzhsuc_img"><img src="<%=request.getContextPath() %>/function/images/duigou.gif"  /></span><span class="chzhsuc_zi">恭喜 <%=tuserinfo.get("t_name") %> ，您的方案已提交成功！</span></div>
				<div class="betwin_num"><font style="font-size:14px">您的方案编号是：</font><font class="red1"><s:property value="%{#parameters.caseId[0]}"/></font>
				<font onclick="fuzhi()" class="copysite">复制方案地址</font><input type="hidden" id="dizhi" value="http://<%=request.getServerName()+":"+request.getServerPort() %>/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="%{#parameters.caseId[0]}"/>" /></div>
				<div class="betwin_can"><span>您还可以：</span>
					<font class="blue">
					<a href="/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="%{#parameters.caseId[0]}"/>" title="查看方案详情">查看方案详情</a>　
					<a href="<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2" title="查看投注记录">查看投注记录</a></font>　
					<span class="blue"><a href="javascript:history.go(-1);" title="返回继续购买">返回继续购买&gt;&gt;</a></span>
				</div>
			</div>
			<div class="betwin_right">
				<div class="betwin_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/ssqlogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_ssq.gif"/></span><span class="caizh_gm"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp" title="立即购买">立即购买&gt;&gt;</a></span></div>
				<div class="betwin_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/3Dlogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_3D.gif"/></span><span class="caizh_gm"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp" title="立即购买">立即购买&gt;&gt;</a></span></div>
				<div class="betwin_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/plslogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_pls.gif"/></span><span class="caizh_gm"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_pls.jsp" title="立即购买">立即购买&gt;&gt;</a></span></div>
				<div class="betwin_list"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/dltlogo23.gif"/></span><span class="caizh_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_dlt.gif"/></span><span class="caizh_gm"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp" title="立即购买">立即购买&gt;&gt;</a></span></div>
			</div>
		  <div class="betwin_bottom">
		    <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <td colspan="7"><font class="benwin_recom">合买推荐</font><font class="benwin_look"><a href="/rchlw/function/hemaiCenter!getCaseHemaiCenter" title="查看更多合买方案">查看更多合买方案&gt;&gt;</a></font></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>彩种</td>
                  <td>发起人</td>
                  <td>战绩</td>
                  <td>方案金额</td>
                  <td>进度</td>
                  <td>可购买金额</td>
                  <td>操作</td>
                </tr>
              </tbody>
              <tfoot id="right_text">
              <script>$(function(){reHtml(58,"pageCount=8",false);});</script>
              
              </tfoot>
              
            </table>
		  </div>
		</div>
	 </div>
<div class="space10">&nbsp;</div>
<script type="text/javascript">
function fuzhi(){
	if (document.all){
		window.clipboardData.setData('text', $("#dizhi").val());
	}else{
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
				if (!clip) {return;}
				var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
				if (!trans) {return;}
				trans.addDataFlavor("text/unicode");
				var str = new Object();
				var len = new Object();
				var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				var copytext = $("#dizhi").val();
				str.data = copytext;
				trans.setTransferData("text/unicode", str,copytext.length * 2);
				var clipid = Components.interfaces.nsIClipboard;
				if (!clip) {return false;}
				clip.setData(trans, null, clipid.kGlobalClipboard);
			} catch (e) {
				alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
				return false;
			}
		}
	}
	alert("已成功复制方案链接至剪贴板！");
	return true;
}
</script>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
<jsp:include page="/function/query/case/yingliList.jsp"/>
<jsp:include page="/function/query/case/fanganList.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>