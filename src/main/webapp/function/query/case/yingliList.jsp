<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<!--盈利战绩查看-->
<div class="WindowCenter AlertWindow PlanBuyWindow none" id="yingliList_Alert" style="position:absolute; z-index:999999;">
<form action="#" method="post" id="CaseYingliSelectForm" onsubmit="return ajaxFromYingliListToUser('CaseYingliSelectForm','yingli_Html')" >
<input type="hidden" id="Yingli_userno" name="userno" value="" />
<input type="hidden" id="Yingli_lotno" name="lotno" value="" />
<input type="hidden" id="Yingli_state" name="Yl_state" value="-1" />
	<div class="WindowTittle">
	  <h3>盈利战绩查看</h3>
	  <span class="Alertclose" onclick="loginShow('yingliList_Alert',false);">&#160;</span></div>
		<div class="InsideBorder"><input type="hidden" id="Yingli_lotno_cn_df" value="" />
			<div class="gain" id="Yingli_nickname">狂热小猪</div>
			<div class="gainlottery" ><span id="Yingli_lotno_cn" ></span> <span id="Yingli_displayIcon"></span></div>
				<div class="ChangeTablecon" id="yingli_Html">
				</div>
		</div>
</form>
</div>	
