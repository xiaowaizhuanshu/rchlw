<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@taglib prefix="s" uri="/struts-tags" %>
<!--开奖中心右边-->	
	<div class="lotteryAnnouncement">
	<input type="hidden" id="lotno" value="F47103"/>
		<div class="announcement_border">
			<h2>竞彩足球开奖信息</h2>
	
			<div class="Saishi-chaxun">查询彩果：
			<input id ="beginTime" name="beginTime" type="text" class="Wdate" value="${startDate}"
			 onfocus="WdatePicker({alwaysUseStartDate:true})" onchange="getdrawalotteryJCInfo('beginTime')"/>
			</div>
           <!--  </form> --> 
           <div class="new-pro-table">
           		<table width="100%" cellspacing="0" cellpadding="0">
                          <tr height="24" bgcolor="#EBF3FE" style="line-height:24px; height:24px">
                            <td>场次</td>
                            <td width="120">比赛时间</td>
                            <td>赛事</td>
                            <td class="bas-pep">主队</td>
                            <td>让球</td>
                            <td class="bas-pep">客队</td>
                            <td>数据</td>
                            <td>半场</td>
                            <td>全场</td>
                            <td>彩果</td>
                            <td>进球数</td>
                          </tr>
                          <s:if test="#request.jcdrawlist.size()==0">
                        	  <tr>
                        	  <td colspan="11">
                       	          <font style=" font-size:14px; font-weight:bold; height:30px; line-height:30px;">所选日期没有开奖信息</font>
                        	  </td>
                        	  </tr>
                          </s:if>
                          
                  <s:iterator value="#request.jcdrawlist"  var="jclist" status="s">
						<s:if test="#s.Even">
							<tr class="pro-gray-tr">
						</s:if>
						<s:else>
							<tr class="pro-white-tr">
						</s:else>
                            <td><s:property value="#jclist.matches.weekid"/><s:property value="#jclist.matches.teamid"/></td>
                            <td><s:property value="#jclist.matches.time"/></td>
                            <td><s:property value="#jclist.matches.league"/></td>
                            <td><s:property value="#jclist.matches.zteam"/></td>
                            <td>[<s:property value="#jclist.result.letpoint"/>]</td>
                            <td><s:property value="#jclist.matches.kteam"/></td>
                            <td class="shuju"><a href="#">析</a></td>
                            <td class="new-red-one"><s:property value="#jclist.result.firsthalfresult"/></td>
                            <td class="new-red-one"><s:property value="#jclist.result.result"/></td>
                            <td class="new-red-two"><s:property value="#jclist.result.saiguo"/></td>
                            <td class="new-red-three"><s:property value="#jclist.result.zongjinqiu"/></td>
                          </tr>
                         </s:iterator>
                  </table>
        <script>
			$(function() {
				$(".a_jingcaizuqiu").addClass("selected");
			});
		</script>
           </div>
		</div>
		
	</div>
</div>