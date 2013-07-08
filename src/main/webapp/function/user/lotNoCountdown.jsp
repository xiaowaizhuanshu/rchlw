<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="myAccount_bg">
	<span class="myAccount_ssq"></span>
	<span class="myAccount_ssqzi">第<s:property value="#request.retValue0.batchCode"/>期</span>
	<span class="myAccount_bet"><a title="投注" href="/rchlw/lottery/ruyicai_channel_ssq.jsp"><img src="/rchlw/function/images/myAccount_bet.gif" alt="投注" /></a></span><br />
	<span id="ssq_time" style="display:none;"><s:property value="#request.retValue0.end_time"/></span>
	<span class="myAccount_end">离截止还剩：<font id="ssq_hour"></font>:<font id="ssq_minute"></font>:<font id="ssq_second"></font></span>
</div>
<div class="myAccount_bg">
	<span class="myAccount_3D"></span>
	<span class="myAccount_3Dzi">第<s:property value="#request.retValue1.batchCode"/>期</span>
	<span class="myAccount_bet"><a title="投注" href="/rchlw/lottery/ruyicai_channel_3D.jsp"><img src="/rchlw/function/images/myAccount_bet.gif" alt="投注" /></a></span><br />
	<span id="sd_time" style="display:none;"><s:property value="#request.retValue1.end_time"/></span>
	<span class="myAccount_end">离截止还剩：<font id="sd_hour"></font>:<font id="sd_minute"></font>:<font id="sd_second"></font></span>
</div>
<div class="myAccount_bg1">
	<span class="myAccount_pls"></span>
	<span class="myAccount_plszi">第<s:property value="#request.retValue2.batchCode"/>期</span>
	<span class="myAccount_bet"><a title="投注" href="/rchlw/lottery/ruyicai_channel_pls.jsp"><img src="/rchlw/function/images/myAccount_bet.gif" alt="投注" /></a></span><br />
	<span id="pls_time" style="display:none;"><s:property value="#request.retValue2.end_time"/></span>
	<span class="myAccount_end">离截止还剩：<font id="pls_hour" ></font>:<font id="pls_minute" ></font>:<font id="pls_second" ></font></span>
</div>

<script type="text/javascript">
setTimeout("ssq_takeCountAccount()",1000);
setTimeout("sd_takeCount()",1000);
setTimeout("pls_takeCount()", 1000);
</script>