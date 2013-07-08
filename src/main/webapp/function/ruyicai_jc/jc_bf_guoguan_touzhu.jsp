<%@ page contentType="text/html; charset=utf-8"%>
<div class="guoguanContent none selected" id="sub_nav_2">
<div class="jzdqcurmidbot">
	<div class="jzdqcurmidbotL">
		<div class="race_con">
			<div class="race_select">
				<a class="liansai" href="javascript:void(0)"><img
					src="/rchlw/function/images/race_select.png" /></a>
				<div class="race_select_cont">
					<ul id="leagueChoose">
						<script>
							$(document).ready(function(){
								reHtml(84,"type=1",true,"leagueChoose",true);
							});
						</script>
					</ul>
					<div style="height: 0; overflow: hidden; clear: both"></div>

					<div class="for_select">
						<a class="for_select_all" href="javascript:void(0)"></a> 
						<a class="for_select_no" onclick="fanxuan()" href="javascript:void(0)"></a>
					</div>
				</div>
			</div>
			<input name="" type="checkbox" value="" class="head-input" onclick="choosTimeup();" /> <span>已截止（0场）</span>已隐藏<em id="hideNum">0</em>场赛事&nbsp;&nbsp;<a href="javascript:void(0)" class="huifusuoyou" onclick="chooseFuifu()">恢复</a>
		</div>
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr class="jcggbt" bgcolor="#F9F9F9">
				<td class="zucai_biao3" width="20"></td>
				<td class="zucai_biao3" width="35">编号</td>
				<td class="zucai_biao3" width="80">赛事类型</td>
				<td class="zucai_biao3" width="72">
	                <table width="100%" border="0" cellspacing="0" cellpadding="0">
	                	<tr><td style="font-weight:bold">比赛</td></tr>
	                	<tr><td style="font-weight:bold">时间</td></tr>
	                </table>
				</td>
				<td class="zucai_biao3" width="150">主队</td>
				<td class="zucai_biao3" width="150">客队</td>
				<td class="zucai_biao3" width="80">数据</td>
				<td class="zucai_biao3">选择投注</td>
			</tr>
		</table>
		<div class="BuyChoice none selected" id="guoguan_area">
			<script>
				$(document).ready(function(){
					var lotNo=$("#lotNo").val();
					var valueType=$("#valueType").val();
					if(lotNo=="undefined" || lotNo=="" || lotNo==null){
						reHtml(79, 'type=1&lotNo=J00002&valueType='+valueType, false, 'guoguan_area','true');	
					}else{
						reHtml(79, 'type=1&valueType='+valueType+'&lotNo='+lotNo, false, 'guoguan_area','true');
					}
					
				});
			</script>
		</div>
	</div>
	<div class="clear"></div>
	</div>
<div class="jzdqfoot">
	<jsp:include page="/function/ruyicai_jc/jc_touzhu_bottom.jsp"></jsp:include>
</div>
<script type="text/javascript">
$(document).ready(function(){
	//联赛选择下拉框
	$(".race_select").click(function(){
			$(".race_select_cont").css("display","block");
		});
	$(".race_select").hover(function(){
		
	},function(){
		$(".race_select_cont").css("display","none");
	});
	//联赛选择--全选
	$(".for_select_all").click(function() {
		chooseFuifu();
	});
});
</script>
</div>
