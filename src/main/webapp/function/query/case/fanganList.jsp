<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<!--投注记录查看超级玩家-->
<div class="WindowCenter AlertWindow PlanBuyWindow  none" id="fanganList_Alert" style="position:absolute; z-index:999999;">
<form action="#" method="post" id="CaseFanganSelectForm" onsubmit="return ajaxFromFanganListToUser('CaseFanganSelectForm','fangan_Html')" >
<input type="hidden" id="Fangan_lotno" name="lotno" value="${caseLot.lotno}" />
<input type="hidden" id="Fangan_userno" name="userno" value="" />
<input type="hidden" id="fangan_state" name="state" value=""/>
<input type="hidden" id="buyType" name="buyType" value="" />
	<div class="WindowTittle">
	  <h3 id="Fangan_title"></h3>
	  <span class="Alertclose" onclick="loginShow('fanganList_Alert',false);">&#160;</span></div>
		<div class="InsideBorder">
        <div class="navigation">
			<ul>
				<li ControlTarget=".JingCai" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("J00013");$("#CaseFanganSelectForm").submit();' id="JINGCAI">竞彩</li>
				<li ControlTarget=".FootballLottery" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01003");$("#CaseFanganSelectForm").submit();' id="Football">足彩</li>
				<li ControlTarget=".FuCai" class="light selected" onclick='BaseTab($(this));$("#Fangan_lotno").val("F47104");$("#CaseFanganSelectForm").submit();' id="FUCAI">福彩</li>
				<li ControlTarget=".TiCai" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01001");$("#CaseFanganSelectForm").submit();' id="TICAI">体彩</li>
			</ul>
		</div>
			<div class="ChangeOver">
			<!--竞彩-->
				<div class=" Change4 JingCai none" id="followJingCai">
						<dl class="ChangeInput">
							<dt ControlTarget=".Win_jc_spf" class="light selected" onclick='BaseTab($(this));$("#Fangan_lotno").val("J00001");$("#CaseFanganSelectForm").submit();' id="J00001"><span></span>胜平负</dt>
							<dt ControlTarget=".Win_jc_rq" class="light " onclick='BaseTab($(this));$("#Fangan_lotno").val("J00013");$("#CaseFanganSelectForm").submit();' id="J00013"><span></span>让球胜平负</dt>
							<dt ControlTarget=".Win_jc_zqj" class="light " onclick='BaseTab($(this));$("#Fangan_lotno").val("J00003");$("#CaseFanganSelectForm").submit();' id="J00003"><span></span>总进球</dt>
							<dt ControlTarget=".Win_jc_bf" class="light " onclick='BaseTab($(this));$("#Fangan_lotno").val("J00002");$("#CaseFanganSelectForm").submit();' id="J00002"><span></span>比分</dt>
							<dt ControlTarget=".Win_jc_bf" class="light " onclick='BaseTab($(this));$("#Fangan_lotno").val("J00002");$("#CaseFanganSelectForm").submit();' id="J00004"><span></span>半全场</dt>
							<dd id="BtnL"><input name="btn" type="radio"  onclick='$("#fangan_state").val("1,2");$("#CaseFanganSelectForm").submit();'>认购中</dd>
							<dd id="BtnR"><input  name="btn" type="radio" checked="checked"  onclick='$("#fangan_state").val("");$("#CaseFanganSelectForm").submit();'>全部</dd>
						</dl>
				</div>
			<!--竞彩-->
			<!--足彩-->
				<div class="Change3 FootballLottery none" id="followFootball">
						<dl class="ChangeInput">
							<dt ControlTarget=".Win_14" class="light selected" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01003");$("#CaseFanganSelectForm").submit();' id="T01003"><span></span>胜负14</dt>
							<dt ControlTarget=".Ren_9" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01004");$("#CaseFanganSelectForm").submit();' id="T01004"><span></span>任选9</dt>
							<dt ControlTarget=".Chang_4" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01005");$("#CaseFanganSelectForm").submit();' id="T01005"><span></span>4场进球</dt>
							<dt ControlTarget=".Chang_6" class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01006");$("#CaseFanganSelectForm").submit();' id="T01006"><span></span>6场半全</dt>
							<dd id="BtnL"><input name="btn" type="radio" onclick='$("#fangan_state").val("1,2");$("#CaseFanganSelectForm").submit();'>认购中</dd>
							<dd id="BtnR"><input  name="btn" type="radio" checked="checked" onclick='$("#fangan_state").val("");$("#CaseFanganSelectForm").submit();'>全部</dd>
						</dl>
				</div>
			<!--足彩-->
			<!--福彩-->
				<div class=" Change1 FuCai none selected" id="followFuCai">
						<dl class="ChangeInput">
							<dt class="light selected" onclick='BaseTab($(this));$("#Fangan_lotno").val("F47104");$("#CaseFanganSelectForm").submit();' id="F47104"><span></span>双色球</dt>
							<dt class="light"  onclick='BaseTab($(this));$("#Fangan_lotno").val("F47103");$("#CaseFanganSelectForm").submit();' id="F47103"><span></span>福彩3D</dt>
							<dt class="light"  onclick='BaseTab($(this));$("#Fangan_lotno").val("F47102");$("#CaseFanganSelectForm").submit();' id="F47102"><span></span>七乐彩</dt>
							<dd id="BtnL"><input name="btn" type="radio" onclick='$("#fangan_state").val("1,2");$("#CaseFanganSelectForm").submit();'>认购中</dd>
							<dd id="BtnR"><input  name="btn" type="radio"  checked="checked" onclick='$("#fangan_state").val("");$("#CaseFanganSelectForm").submit();'>全部</dd>
						</dl>
						
				</div>
			<!--福彩-->
			<!--体彩-->
				<div class=" Change2 TiCai none" id="followTiCai">
						<dl class="ChangeInput">
							<dt class="light selected" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01001");$("#CaseFanganSelectForm").submit();' id="T01001"><span></span>大乐透</dt>
							<dt class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01009");$("#CaseFanganSelectForm").submit();' id="T01009"><span></span>七星彩</dt>
							<dt class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01002");$("#CaseFanganSelectForm").submit();' id="T01002"><span></span>排列3</dt>
							<dt class="light" onclick='BaseTab($(this));$("#Fangan_lotno").val("T01011");$("#CaseFanganSelectForm").submit();' id="T01011"><span></span>排列5</dt>
							<dd id="BtnL"><input name="btn" type="radio"  onclick='$("#fangan_state").val("1,2");$("#CaseFanganSelectForm").submit();'>认购中</dd>
							<dd id="BtnR"><input  name="btn" type="radio"  checked="checked" onclick='$("#fangan_state").val("");$("#CaseFanganSelectForm").submit();'>全部</dd>
						</dl>
				</div>
			<!--体彩-->
			
			<!--二级导航结束-->
		   </div>
		   <div id="fangan_Html" class="ChangeTablecon">
				
			</div>
	</div>
</form>
</div>