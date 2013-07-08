<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="gcend_top">今日截止</div>
<div class="gcend_con" <s:if test="#request.endTime1ck==0">style="display:none"</s:if>>
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/ssqlogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_ssq.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue0.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc">
	<s:if test='#request.progressive0.equals("0")||#request.progressive0.equals("-")'></s:if>
	<s:else>
	奖池:<s:property value="#request.progressive0"/>元
	</s:else></span>
		<span class="gcend_jc" id="ssq_time" style="display:none;"><s:property value="#request.retValue0.end_time"/></span>
		<span id="ssq_current_time"></span>
		<span class="gcend_time" id="ssq_endtime">
			<font id="ssq_hour"></font>:<font id="ssq_minute"></font>:<font id="ssq_second"></font>
		</span>
		<script type="text/javascript">setTimeout("ssq_takeCount()",1000);</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
<div class="gcend_con" >
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/3Dlogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_3D.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue1.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc"></span>
		<span class="gcend_jc" id="sd_time" style="display:none;"><s:property value="#request.retValue1.end_time"/></span>
		<span id="sd_current_time"></span>
		<span class="gcend_time" id="sd_endtime">
			<font id="sd_hour"></font>:<font id="sd_minute"></font>:<font id="sd_second"></font>
		</span>
		<script type="text/javascript">setTimeout("sd_takeCount()",1000);</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
<div class="gcend_con" <s:if test="#request.endTime4ck==0">style="display:none"</s:if>>
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/dltlogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_dlt.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue3.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc"><s:if test='#request.progressive3.equals("0")||#request.progressive3.equals("-")'></s:if><s:else>奖池¥<s:property value="#request.progressive3"/>元</s:else></span>
		<span class="gcend_jc" id="dlt_time" style="display:none;"><s:property value="#request.retValue3.end_time"/></span>
		<span id="dlt_current_time"></span>
		
		<span class="gcend_time" id="dlt_endtime">
			<font id="dlt_hour"></font>:<font id="dlt_minute"></font>:<font id="dlt_second"></font>
		</span>
		<script type="text/javascript">setTimeout("dlt_takeCount()",1000);</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
<div class="gcend_con" >
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/plslogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_pls.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue5.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span>
</div>
<div class="gcend_xinxi1">

		<span class="gcend_jc" id="pls_time" style="display:none;"><s:property value="#request.retValue5.end_time"/></span>
		<span id="pls_current_time" ></span>
		<span class="gcend_time" id="pls_endtime">
			<font id="pls_hour" ></font>:<font id="pls_minute" ></font>:<font id="pls_second" ></font>
		</span>
			
			<script type="text/javascript">
			setTimeout("pls_takeCount()", 1000);
			</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_pls.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
<div class="gcend_con" >
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/plwlogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_plw.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue6.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc"></span>
		<span class="gcend_jc" id="plw_time" style="display:none;"><s:property value="#request.retValue6.end_time"/></span>
		<span id="plw_current_time"></span>
		<span class="gcend_time" id="plw_endtime">
			<font id="plw_hour" ></font>:<font id="plw_minute" ></font>:<font id="plw_second" ></font>
		</span>
		<script type="text/javascript">setTimeout("plw_takeCount()",1000);</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_plw.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
<div class="gcend_con" <s:if test="#request.endTime3ck==0">style="display:none"</s:if>>
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/qlclogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_qlc.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue2.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc"><s:if test='#request.progressive2.equals("0")||#request.progressive2.equals("-")'></s:if><s:else>奖池¥<s:property value="#request.progressive2"/>元</s:else></span>
		<span class="gcend_jc" id="qlc_time" style="display:none;"><s:property value="#request.retValue2.end_time"/></span>
		<span id="qlc_current_time" ></span>
		<span class="gcend_time" id="qlc_endtime">
			<font id="qlc_hour" ></font>:<font id="qlc_minute" ></font>:<font id="qlc_second" ></font>
		</span>
		<script type="text/javascript">setTimeout("qlc_takeCount()", 1000);</script>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qlc.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>	
<div class="gcend_con" <s:if test="#request.endTime5ck==0">style="display:none"</s:if>>
	<div class="gcend_logo"><img src="<%=request.getContextPath() %>/function/images/qxclogo23.gif" /></div>
	<div class="gcend_xinxi">
	<div class="gcend_xinxi1"><span class="gcend_zi"><img src="<%=request.getContextPath() %>/function/images/cgzi_qxc.gif"/></span><span class="gcend_qihao">第<s:property value="#request.retValue4.batchCode"/>期</span><span class="gcend_shy">离截止还剩</span></div>
	<div class="gcend_xinxi1"><span class="gcend_jc"><s:if test='#request.progressive4.equals("0")||#request.progressive4.equals("-")'></s:if><s:else>奖池¥<s:property value="#request.progressive4"/>元</s:else></span>
		<span class="gcend_time">
			<span class="gcend_jc" id="qxc_time" style="display:none"><s:property value="#request.retValue4.end_time"/></span>
			<span class="gcend_time" id="qxc_endtime">
				<font id="qxc_hour" ></font>:<font id="qxc_minute" ></font>:<font id="qxc_second" ></font>
			</span>
			<script type="text/javascript">setTimeout("qxc_takeCount()", 1000);</script>
		</span>
	</div>
	</div>
	<div class="gcend_goumai"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qxc.jsp" title="购买"><img src="<%=request.getContextPath() %>/function/images/goucaibtn.gif" /></a></div>
</div>
