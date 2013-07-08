<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>      
	<s:if test="#request.duizhenInfos!=null">
	<input type="hidden" id="saishinumber" value="0"/>
	<input type="hidden" id="guoguanNum" value="0"/>
	<s:iterator value="#request.duizhenInfos" id="duizhen">
       	<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
			<s:if test="peilv.letVs.letPoint!=''&&peilv.letVs.v3!=''&&peilv.letVs.v1!=''&&peilv.letVs.v0!=''">
				<s:if test="#stat.count == 1">
					<div class="title">
								<s:property value="newday"/>  <s:property value="newweek"/>(12:00--次日12:00)
								<input type="hidden" name="day" value="<s:property value="day"/>" />
					</div>
				</s:if>
			</s:if>
		</s:iterator>	
		<s:if test="#duizhen.size()>0">
		<div class="titonebot">
		<ul>
			<s:iterator value="#duizhen" status="stat" id="duizhenChidren">
				<s:if test="peilv.letVs.letPoint!=''&&peilv.letVs.v3!=''&&peilv.letVs.v1!=''&&peilv.letVs.v0!=''">
				<li id="tr_<s:property value="day"/>_<s:property value="#stat.count"/>">
				<s:if test="#stat.last"><input class="count" type="hidden" id="count" name="count" value="<s:property value="#stat.count"/>"/></s:if>			
					<input type="hidden" id="day_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="day"/>" />
					<input type="hidden" id="weekid_<s:property value="day"/>_<s:property value="#stat.count"/>" value="<s:property value="weekid"/>" />
					<input type="checkbox" value="" name="" id="ball_<s:property value="day"/>_<s:property value="#stat.count"/>" onclick="checksaishi($(this));">
					<em style="color:#000" id="no_<s:property value="day"/>_<s:property value="#stat.count"/>"><s:property value="teamid"/></em>&nbsp;           
                    &nbsp;<s:property value="hteam"/><strong><s:property value="starttime"/><em>（<s:property value="peilv.letVs.letPoint"/>）</em></strong><s:property value="kteam"/>
				</li>
				</s:if>
			</s:iterator>
			</ul>
			</div>
			<div class="clear"></div>
		</s:if>
	</s:iterator>
</s:if>