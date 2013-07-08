<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div class="AlertWindow BalanceWindow WindowCenter" id="rengouTiShishow" style="display:none;"  >
	<div class="WindowTittle"><h3>合买认购</h3><span class="Alertclose" onclick="javaScript:$('#rengouTiShishow').hide(),$('.BodyBG').hide();">&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
				<tbody>
					<tr>
						<th>您本次的认购金额为：¥<b id="rengou_buymoney">&#160;</b>元，</th>
					</tr>
					<tr>
						<th>您本次的保底金额为：¥<b id="rengou_safeAmt">0</b>元，</th>
					</tr>
					<tr>
						<th>请确认！</th>
					</tr>
					</tr>
					<tr  id="rengouzhong" style="display: none;" >
						<th colspan="2">认购中，请稍候</th>
					</tr>
					<tr>
					<th id="message" colspan="2"></th>
					</tr>
					<tr>
						<th>&#160;</th>
					<tr id="tijiao">
						<th><input type="button" value="确定" class="BaseBtn" onclick="rengouhemai();"/><a href="javaScript:;" onclick="javaScript:$('#rengouTiShishow').hide(),$('.BodyBG').hide();" title="取消"  id="chongzhi">取消&gt;&gt;</a></th>
					</tr>
							<!-- 关闭提示框并刷新页面 -->
					<tr id="closequeding" style="display: none;" >
						<th colspan="2"><input type="button" value="确定" class="BaseBtn" onclick="javaScript:$('#rengouTiShishow').hide(),$('.BodyBG').hide();window.location.reload();"/></th>
					</tr>
				</tbody>
			</table>

		</div>
</div>

 <script>
 function rengouhemai(){
	 var amt = $("#amt").val();
	 $("#rengou_buymoney").val(amt);
	 var safeAmt = $("#safeAmt").val();
	 var caseId=GetQueryString("caselotId");
	 $('#tijiao').hide();
	 $('#rengouzhong').show();
	 toHemai(amt,caseId,safeAmt);
 }
 </script>   
