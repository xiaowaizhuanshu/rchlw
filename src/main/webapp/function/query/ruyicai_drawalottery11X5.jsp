<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib prefix="s" uri="/struts-tags"%>
 <div class="ChannelBuyWinNum_11xuan5">
	<style>
		.ChannelBuyWinNum_11xuan5 table{ border:solid 1px #DBDBDB; border-collapse:collapse; width:700px;}
		.ChannelBuyWinNum_11xuan5 thead th{ font-size:12px; font-weight:normal; color:#000000; text-align:center; border:solid 1px #DBDBDB; line-height:30px; background:url(/rchlw/function/images/ChannelBuyPannelHeader.png) repeat-x bottom left;}
		.ChannelBuyWinNum_11xuan5 thead td{ font-size:14px; font-weight:bold; color:#C50505; text-align:left; padding:0px 0px 0px 15px; border:solid 1px #DBDBDB; line-height:25px;}
		.ChannelBuyWinNum_11xuan5 tbody th{ font-size:12px; font-weight:normal; color:#000000; text-align:center; border:solid 1px #DBDBDB; line-height:30px; color:#323232;}
		.ChannelBuyWinNum_11xuan5 tbody td{ font-size:12px; font-weight:normal; color:#FF0000; text-align:center; border:solid 1px #DBDBDB; background:#f1faff; line-height:30px;}
	</style>
      <table>
        <thead>
          <tr>
          <s:if test="#request.lotNo=='T01010'">
           <td colspan="6">江西11选5今日开奖号码</td>
          </s:if>
          <s:elseif test="#request.lotNo=='T01007'">
          <td colspan="6">时时彩今日开奖号码</td>
          </s:elseif>
          <s:elseif test="#request.lotNo=='T01012'">
          <td colspan="6">十一运夺金今日开奖号码</td>
          </s:elseif>
          </tr>
          <tr>
            <th>期次</th>
            <th>开奖号</th>
            <th>期次</th>
            <th>开奖号</th>
            <th>期次</th>
            <th>开奖号</th>
          </tr>
        </thead>
        <tbody>
         <s:iterator value="#request.arrWininfo" id="arrWininfo" status="s1">
         <s:if test="#s1.first">
          <tr>
           </s:if>
	            <th>&nbsp;<s:property value="id.batchcode"/>&nbsp;</th>
	            <td>&nbsp;<s:property value="winbasecode"/>&nbsp;</td>
           <s:if test="(#s1.getIndex()+1)%3==0 && !(#s1.first) && !(#s1.last)">
            </tr>
            <tr>
          </s:if>
           <s:if test="#s1.last">
            </tr>
          </s:if>
         </s:iterator>
        </tbody>
      </table>
    </div>