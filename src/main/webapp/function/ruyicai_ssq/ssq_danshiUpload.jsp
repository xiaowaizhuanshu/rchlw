<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<div class="upload">
<ul>
	<li>选择文件：</li>
	<li style="position:relative;">
		<div class="InputFile">
			<input type="hidden" value="ssq" id="type"/>
			<input type="file" id="upload" name="upload" class="UploadFileBG UploadFileBGpub" />
			<input type="text" name="test" value="" class="UploadFileInput UploadFileInputpub"/>
			<input type="button" name="btn" value="" class="UploadFileButton light" />
		</div>
	</li>
	<li>
		<div class="upload_text" onmouseover="showDiv()" onmouseout="closeDiv()">
			<font>查看标准样式文本</font>
			<div class="yangben_content" id="yb" style="display: none">
				<div class="sanjiao">
					<img class="smalljt1" src="<%=request.getContextPath() %>/function/images/xsjicon1.gif"/>
				</div>
				<div class="yangben" >
				<table>
				<tr><td>标准样式一：</td><td>01 04 13 14 25 29 + 08</td></tr>
				<tr><td>&nbsp;</td><td>07 14 19 23 24 32 + 14</td></tr>
				<tr><td>标准样式二：</td><td>01,04,13,14,25,29|08</td></tr>
				<tr><td>&nbsp;</td><td>07,14,19,23,24,32|14</td></tr>
				</table>
				</div>
			</div>
		</div>
	</li>
</ul>
<dl>
	<dt>上传说明：</dt>
	<dd>1、 选择倍投式只需上传单倍方案。</dd>
	<dd>2、 请严格参照<font class="upload_blue">
	<a target="_blank" href='<tangs:ryc_newslist value="3" categoryCn="普通单式上传标准" channelCn="双色球" web_id="%{#parameters.website_Properties_id[0]}" num="1">${url }</tangs:ryc_newslist>' title="标准格式样本">“标准格式样本”</a>
	</font>格式上传方案，否则不能完成投注。</dd>
	<dd>3、 文件格式必须是文本文件。</dd>
	<dd>4、 由于上传的文件较大，会导致上传时间及在本页停留时间较长，请耐心等待。</dd>
</dl>
</div>
            <div class="add_basket1"><span class="add_btton1"><img onclick="return ajaxFileUpload('upload',getType());" id="btn_2_Add" src="<%=request.getContextPath() %>/function/images/addbtn.gif" /></span></div>
         