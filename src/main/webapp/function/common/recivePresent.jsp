<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><div class="AlertWindow BalanceWindow WindowCenter" id="Recvice_Alert" style="display:none">
	<div class="WindowTittle"><h3>领取彩票</h3><span class="Alertclose" onclick='loginShow("Recvice_Alert",false);'>&#160;</span></div>
	<div class="InsideBorder"style=" padding-top:20px;">
		<table class="BalanceTable">
			<tbody id="bodys" ><input type="hidden" id="PresentId" value="${id }">
				<tr>
					<td width="220" height="40"style=" padding-left:15px;">验证码:　<input name="phoneRand" type="text"  id="inputyzm"/></td>
					<td><span id="inputyzmTip" class="blue">请填写您收到的验证码(区分大小写)</span></td>
				</tr>
				<tr style=" display:none;">
					<td  colspan="2" height="40"style=" padding-left:15px;"><b>如果1分钟内没有收到验证短信，您可以再次获取验证码此服务免费。</b></td>
					</tr>
				<tr>
					<td align="center"><input type="button" class="BaseBtn" value="确定" onclick="recivePresent();"/></td>
				<td><a href="javaScript:;" onclick='send();' id="a1" title="点击重发"><span class="find_PasswordMailBtn"><span id="count">60</span>秒后点击重发</span></a></td>
				</tr>
			</tbody>
			<tfoot id="showmsg" style=" display:none;">
				<tr>
					<td width="220" height="40" id="msg" align="center">领取成功！</td>
				</tr>
				<tr>
					<td align="center"><input type="button" class="BaseBtn" value="确定" onclick='loginShow("Recvice_Alert",false);window.location.href="<%=request.getContextPath()%>/function/rules/user.jsp?key=3";'/></td>
				</tr>
			</tfoot>
		</table>

	</div>
</div>
<SCRIPT LANGUAGE="JavaScript"> 

var a = 0;
/*$(function(){
	$('#count').countdown({seconds: 60,callback: 'countadd()'});

});*/
function oncl(){      
	$('#count').countdown({seconds: 60,callback: 'countadd()'}); 
	}
function send(){ 
    if(a==1){
		$("#a1").attr('onclick',oncl);//添加事件
		SengMsgForPresent($("#PresentId").val());
		a=0;
	}
}
function countadd()
{ 
    a=1;
}

</SCRIPT>