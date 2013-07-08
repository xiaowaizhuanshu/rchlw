<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<%@taglib prefix="s" uri="/struts-tags"%>

<script type="text/javascript">
	$(function() {
		$(".new-pro-tit a").each(
				function(index, element) {
					$(this).click(	function() {
										$(this).addClass("new-selected").siblings("a").removeClass("new-selected");
										$(".new-pro-table table").eq(index).css("display", "").siblings("table").css("display","none");
									});
				})

	})
</script>
<!--开奖中心右边-->
<div class="lotteryAnnouncement">
	<input type="hidden" id="lotno" value="${lotno}" />
	<div class="announcement_border">
		<h2>
			足彩开奖详情 
			<span class="ZX-KJxq">选择期号：
				<select name=""id="zcselect" onchange="getdrawalotteryZCInfo('zcselect')">
					<s:iterator value="#request.batchcodeArray" var="o">
						<option value="<s:property value="#o.onebet"/>"
							<s:if test='#request.batchcode==#o.onebet'>selected="selected"</s:if>>
							<s:property value="#o.onebet" />
						</option>
					</s:iterator>
				</select>
			</span>
		</h2>


		<div class="space15">&#160;</div>
		<div class="shiShi_table">
			<p class="new-pro-tit">
				<a href="/rchlw/function/ryc_select_newkj!drawalotteryZc?lotno=T01003" class="shengfu">胜负彩</a>
				<a href="/rchlw/function/ryc_select_newkj!drawalotteryZc?lotno=T01004" class="9chang">任选9场</a> 
				<a href="/rchlw/function/ryc_select_newkj!drawalotteryZc?lotno=T01006" class="6chang">6场半全</a>
				<a href="/rchlw/function/ryc_select_newkj!drawalotteryZc?lotno=T01005" class="4chang">四场进球</a>
			</p>
		</div>
		<div class="new-pro-table">
			<table width="100%" cellspacing="0" cellpadding="0" style="display: none" class="zc-one">
				<tr height="24" bgcolor="#EBF3FE"
					style="line-height: 24px; height: 24px">
					<td rowspan="2">场次</td>
					<td rowspan="2" width="120">时间</td>
					<td rowspan="2">联赛</td>
					<td rowspan="2" class="bas-pep bas-pep-one">主队</td>
					<td rowspan="2" class="bas-pep bas-pep-one">客队</td>
					<td colspan="3">赔率</td>
					<td rowspan="2" style="border-right: none">彩果</td>
				</tr>
				<tr bgcolor="#EBF3FE">
					<td>主胜</td>
					<td>平</td>
					<td>客胜</td>
				</tr>

				<s:iterator value="#request.zcdrawlist" var="zclist" status="s">
					<s:if test="#s.Even">
						<tr class="pro-gray-tr">
					</s:if>
					<s:else>
						<tr class="pro-white-tr">
					</s:else>
					<td><s:property value="#zclist.teamId" /></td>
					<td><s:property value="#zclist.matchTime" /></td>
					<td><s:property value="#zclist.leagueName" /></td>
					<td><s:property value="#zclist.homeTeam" /></td>
					<td><s:property value="#zclist.guestTeam" /></td>
					<td class="NONEbg"><s:property value="#zclist.homewin" /></td>
					<td class="NONEbg"><s:property value="#zclist.standoff" /></td>
					<td ><s:property value="#zclist.guestwin" /></td>
					<td class="NONEbg"><s:property value="#zclist.caiguo" /></td>
					</tr>
				</s:iterator>

			</table>

			<table width="100%" cellspacing="0" cellpadding="0"
				style="display: none" class="zc-two">
				<tr height="24" bgcolor="#EBF3FE"
					style="line-height: 24px; height: 24px">

					<td rowspan="2">场次</td>
					<td rowspan="2" width="120">时间</td>
					<td rowspan="2">联赛</td>
					<td rowspan="2" class="bas-pep bas-pep-one">主队</td>
					<td rowspan="2" class="bas-pep bas-pep-one">客队</td>
					<td colspan="3">赔率</td>
					<td rowspan="2" style="border-right: none">彩果</td>
				</tr>
				<tr bgcolor="#EBF3FE">
					<td>主胜</td>
					<td>平</td>
					<td>客胜</td>
				</tr>

				<s:iterator value="#request.zcdrawlist" var="zclist" status="s">
					<s:if test="#s.Even">
						<tr class="pro-gray-tr">
					</s:if>
					<s:else>
						<tr class="pro-white-tr">
					</s:else>
						<td><s:property value="#zclist.teamId" /></td>
						<td><s:property value="#zclist.matchTime" /></td>
						<td><s:property value="#zclist.leagueName" /></td>
						<td><s:property value="#zclist.homeTeam" /></td>
						<td><s:property value="#zclist.guestTeam" /></td>
						<td class="NONEbg"><s:property value="#zclist.homewin" /></td>
						<td class="NONEbg"><s:property value="#zclist.standoff" /></td>
						<td><s:property value="#zclist.guestwin" /></td>
						<td class="NONEbg"><s:property value="#zclist.caiguo" /></td>
					</tr>
				</s:iterator>
			</table>

			<table width="100%" cellspacing="0" cellpadding="0"
				style="display: none" class="zc-three">
				<tr height="24" bgcolor="#EBF3FE"
					style="line-height: 24px; height: 24px">
					<td rowspan="2">场次</td>
					<td rowspan="2" width="120">时间</td>
					<td rowspan="2">联赛</td>
					<td rowspan="2" class="bas-pep bas-pep-one">主队</td>
					<td rowspan="2" class="bas-pep bas-pep-one">客队</td>
					<td colspan="3">赔率</td>
					<td colspan="2">彩果</td>
				</tr>
				<tr bgcolor="#EBF3FE">
					<td>主胜</td>
					<td>平</td>
					<td>客胜</td>
					<td>半场</td>
					<td>全场</td>
				</tr>
				<s:iterator value="#request.zcdrawlist" var="zclist" status="s">
					<s:if test="#s.Even">
						<tr class="pro-gray-tr">
					</s:if>
					<s:else>
						<tr class="pro-white-tr">
					</s:else>
						<td ><s:property value="#zclist.teamId" /></td>
						<td ><s:property value="#zclist.matchTime" /></td>
						<td ><s:property value="#zclist.leagueName" /></td>
						<td ><s:property value="#zclist.homeTeam" /></td>
						<td ><s:property value="#zclist.guestTeam" /></td>
						<td class="NONEbg"><s:property value="#zclist.homewin" /></td>
						<td class="NONEbg"><s:property value="#zclist.standoff" /></td>
						<td ><s:property value="#zclist.guestwin" /></td>
						<td class="NONEbg"><s:property value="#zclist.bancaiguo" /></td>
						<td class="NONEbg"><s:property value="#zclist.quancaiguo" /></td>
					</tr>
				</s:iterator>
			</table>
			<table width="100%" cellspacing="0" cellpadding="0"
				style="display: none" class="zc-four">
				<tr height="24" bgcolor="#EBF3FE"
					style="line-height: 24px; height: 24px">
					<td rowspan="2">场次</td>
					<td rowspan="2" width="120">时间</td>
					<td rowspan="2">联赛</td>
					<td rowspan="2" class="bas-pep bas-pep-one">主队</td>
					<td rowspan="2" class="bas-pep bas-pep-one">客队</td>
					<td colspan="3">赔率</td>
					<td colspan="2">彩果</td>
				</tr>
				<tr bgcolor="#EBF3FE">
					<td>主胜</td>
					<td>平</td>
					<td>客胜</td>
					<td>半场</td>
					<td>全场</td>
				</tr>
				<s:iterator value="#request.zcdrawlist" var="zclist" status="s">
					<s:if test="#s.Even">
						<tr class="pro-gray-tr">
					</s:if>
					<s:else>
						<tr class="pro-white-tr">
					</s:else>
						<td><s:property value="#zclist.teamId" /></td>
						<td><s:property value="#zclist.matchTime" /></td>
						<td><s:property value="#zclist.leagueName" /></td>
						<td ><s:property value="#zclist.homeTeam" /></td>
						<td><s:property value="#zclist.guestTeam" /></td>
						<td class="NONEbg"><s:property value="#zclist.homewin" /></td>
						<td class="NONEbg"><s:property value="#zclist.standoff" /></td>
						<td><s:property value="#zclist.guestwin" /></td>
						<td class="NONEbg"><s:property value="#zclist.bancaiguo" /></td>
						<td class="NONEbg"><s:property value="#zclist.quancaiguo" /></td>
					</tr>
				</s:iterator>
			</table>
		</div>

	</div>
	<s:if test='#request.lotno=="T01003"'>
		<script>
			$(function() {
				$(".a_zucaishengfu").addClass("selected");
				$(".shengfu").addClass("new-selected");
				$(".zc-one").css("display", "");
			});
		</script>
	</s:if>
	<s:if test='#request.lotno=="T01004"'>
		<script>
			$(function() {
				$(".a_renxuan9chang").addClass("selected");
				$(".9chang").addClass("new-selected");
				$(".zc-two").css("display", "");
			});
		</script>
	</s:if>
	<s:if test='#request.lotno=="T01005"'>
		<script>
			$(function() {
				$(".a_4changjinqiu").addClass("selected");
				$(".4chang").addClass("new-selected");
				$(".zc-four").css("display", "");
			});
		</script>
	</s:if>
	<s:if test='#request.lotno=="T01006"'>
		<script>
			$(function() {
				$(".a_6changbanquan").addClass("selected");
				$(".6chang").addClass("new-selected");
				$(".zc-three").css("display", "");
			});
		</script>
	</s:if>
</div>
</div>










