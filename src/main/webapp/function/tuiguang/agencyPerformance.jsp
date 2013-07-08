<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!--账户管理右边-->
<div class="My_account" id="right_text">
<style>
div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}
</style>
		<div class="My_account_title"> <strong>我的业绩</strong> </div>
		<div class="account_recharge">
			<ul class="account_rechargeTab">
				<li id="li1" onclick="return reHtml(72,'')" controltarget=".wtgdhy" class="light selected">我推广的会员</li>
				<li id="li3" onclick="return reHtml(76,'')" controltarget=".hyjymx" class="light">会员交易明细</li>
				<li id="li4" onclick="return reHtml(75,'')" controltarget=".yjbl" class="light">佣金比例</li>
				<li id="li5" onclick="return reHtml(76,'flag=yj')" controltarget=".yjmx" class="light">佣金明细</li>
			</ul>
		</div>
		<div class="account_rechargeContent">
		<form action="#" id="queryagency"  method="post" onsubmit='return TZSelectreHtmlInParameters("", this.beginTime.value , this.endTime.value , "username="+this.username.value);' class="tzjl_form">
			<div class="wtgdhy selected none">
				<ul class="mSeachUl">
					<li>请输入用户名：
						<input name="username" type="text" id="username" class="username" style="width:100px;">
					</li>
					<li>日期：
						<input class="beginTime" type="text" id="beginTime" size="10" name="beginTime" onfocus="WdatePicker({alwaysUseStartDate:true})" value='<s:property value="#beginTime"/>'/>
						至
						<input class="endTime" id="endTime" size="10" name="endTime"  type="text"  onfocus="WdatePicker({alwaysUseStartDate:true})" value='<s:property value="#endTime"/>'/>					
					</li>
					<li>
						<input type="submit" name="btnSearch" value="查询" id="btnSearch" class="mSeachUlBtn">
					</li>
				</ul>
				<div class="trade">
					<table cellpadding="0" cellspacing="0" class="tradeTab">
						<tbody>
							<tr class="cBlue01">
								<th width="55">序号 </th>
								<th width="100">用户名 </th>
								<th width="130">注册时间 </th>
								<th width="130">直接下级会员数 </th>
								<th width="90"> 查看 </th>
								<th width="90"> 设置 </th>
							</tr>
							<s:if test="#request.agencyalluserslist.size()>0">
							<s:iterator value="#request.agencyalluserslist" status="agencyList">
							<tr>
								<td width="55" class="t-<s:property value="#agencyList.count"/>"><s:property value="#agencyList.count"/> </td>
								<td width="100"><s:property value="nickname"/> </td>
								<td width="130"><s:property value="regtime"/> </td>
								<td width="130"><s:property value="nextUsersCounts"/></td>
								<td width="90"><span onclick="return reHtml(76,'userno=<s:property value="agencyUserno"/>')" style="cursor: pointer"> [交易明细]</span></td>
								<td width="90"><span onclick="return reHtml(74,'userno=<s:property value="agencyUserno"/>')" style="cursor: pointer">[佣金设置]</span></td>
							</tr>
							</s:iterator>
							</s:if>
						</tbody>
					</table>
				</div>
				<div class="mTurnPage">
					<ul class="mTurnPageUl cblack" id="PagerItemList">
						<div class="DivH10"></div>
							<p class="account_page"> 	
								${pageHtml}
							</p>
	                <div class="space10">&#160;</div>
					</ul>
				</div>
			</div>
			</form>
		</div>
		<div >
			<dl class="fontLinkDL">
				<dt class="cBlue01">1、申请成为推广员需要什么资格？</dt>
				<dd style="padding-left: 20px;">有一定的彩民用户资源，每月有稳定的投注量；<br>
					有一定的网络推广资源，比如广告联盟、个人网站、博客和网吧等资源。</dd>
				<br>
			</dl>
			<dl class="fontLinkDL">
				<dt class="cBlue01">2、怎么样进行推广？</dt>
				<dd style="padding-left: 20px;">复制"会员推广链接"给好友，然后好友通过链接地址注册后，就成为了"我的推广会员"，<br>
					然后好友在如意彩彩票网的所有成功投注都可以算作"我的业绩"。</dd>
				<br>
			</dl>
			<dl class="fontLinkDL">
				<dt class="cBlue01">3、从2011年12月1日0时起，佣金按照发单金额计算。<br>
				</dt>
			</dl>
			<br>
		</div>
		<span id="chongzhiyong" class="none"></span> </div>
	<!--账户管理右边--> 
<jsp:include page="/function/tuiguang/setagencybili_div.jsp"/>

<script>
$(function(){
	$(".agencyyejiService").addClass("selected");
});
</script>