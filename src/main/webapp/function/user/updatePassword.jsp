<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%/*<script type="text/javascript">
//修改密码页面验证
$(function() {
	$.formValidator.initConfig( {
		formid : "form1",
		onError : function() {
			alert("校验没有通过，具体错误请看错误提示");
		}
	});

	$("#old_pass").formValidator( {
		onshow : "请输入密码",
		onfocus : "密码不能为空,密码长度6-15位",
		oncorrect : "密码合法"
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "密码两边不能有空符号"
		},
		onerror : "密码不合法,请确认"
	});

	$("#new_pass").formValidator( {
		onshow : "请输入密码",
		onfocus : "密码不能为空,密码长度6-15位",
		oncorrect : "密码合法"
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "密码两边不能有空符号"
		},
		onerror : "密码不合法,请确认"
	});
	$("#real_pass").formValidator( {
		min : 6,
		max : 15,
		onshow : "请输入重复密码",
		onfocus : "两次密码必须一致哦",
		oncorrect : "密码一致"
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "重复密码两边不能有空符号"
		},
		onerror : "重复密码不能为空,请确认"
	}).compareValidator( {
		desid : "new_pass",
		operateor : "=",
		onerror : "2次密码不一致,请确认"
	});
});
</script>

*/ %>

<div class="My_account_title">
	<strong>修改密码</strong>
	<i>此功能只对博雅彩注册用户有效，通过合作网站注册进入的用户尚不能使用。</i>
</div>
<div class="account_mailAddress" id="formId" <s:if test="#request.check ==1">style="display:none"</s:if>>
<form name="form2" id="form2" action="#" method="post" >
	<div class="space15">&#160;</div>
	<s:if test='#request.message!=null'>
		<div style="height:18px; line-height:18px; padding:0px 0px 5px 5px;">
				<img src="/rchlw/function/images/gantan.gif" style="float:left;" />
				<font style="color:#DE0201; display:inline-block; float:left; padding:0px 0px 0px 5px; height:18px; line-height:18px;"><s:property value="#request.message"/></font>
		</div>
	</s:if>
	<table border="1" cellspacing="0" cellpadding="0">
		<tr>
			<th width="118">当前密码</th>
			<td>
			<input  class="mailAddress" name="complementBan.old_pass" id="old_pass" type="password" maxlength="20" onblur="checkpass()"/>
			<span class="modifyPassword_img"  id="oldimages"></span>
			<span class="account_modifyPassword" id="oldpromt">6-16个字符，可由小写英文字母、阿拉伯数字、下划线混合。</span></td>
		</tr>
		<tr>
			<th width="118">新&#160;&#160;密&#160;&#160;码</th>
			<td>
			<input  class="mailAddress" name="complementBan.new_pass"  id="passLogin" type="password" maxlength="20" onkeyup="updatePasswordsStrong()" onblur="checknewpass()" />
			<span class="modifyPassword_img" id="newpassimage"></span>
			<span class="account_modifyPassword" id="newpromt">6-16个字符，建议使用字母、数字组合、混合大小写。</span>
			<dl id="registerPassStrong" style="display:none">
				<dt class="basicInfor_level" id="showStrong" >弱</dt>
					<dd class="basicInfor_bar">
						<ul id="tiao">
					</ul>
					</dd>
				</dl>
			</td>
		</tr>
		<tr>
			<th width="118">确认密码</th>
			<td>
			<input class="mailAddress" name="complementBan.real_pass"  id="real_pass" type="password" maxlength="20"  onblur="checkrealpass()"/>
			<span class="modifyPassword_img" id="realimages"></span>
			<span class="account_modifyPassword" id='realpromt'>确认密码必须和新密码一致。</span></td>
		</tr>
		<tr>
			<td colspan="2" class="mailAddress_submit"><input type="button" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" value="保存"  onclick='updataPassword()'></td>
		</tr>
	</table>
</form>
</div>
<script>
	$(function(){
		$(".a_modifyPassword").addClass("selected");
	});
</script>
