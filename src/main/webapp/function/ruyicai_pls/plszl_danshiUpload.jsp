<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<div class="upload">
<script type="text/javascript">
	function ajaxFileUploadzl()
    {
		var fileName=$("#uploadzl").val();
	    if(fileName == ""){
	    	 openAlert(decodeURI(EncodeUtf8("您选择的球不能构成一注彩票！请检查您选择的号码。")));
			return false;
		}
	    var file=fileName.substring(fileName.indexOf(".")+1,fileName.length);
		if(!(file=="txt")){
			$("#uploadzl").val("");
    		$(".UploadFileInput").val("");
			 openAlert(decodeURI(EncodeUtf8("您上传的必须是txt文本文件。")));
			return false;
		}
		$.ajaxFileUpload
        (
          {
               url:'/rchlw/function/upload!doUploadFile?type='+$("#type_zl").val(), //你处理上传文件的服务端
               secureuri:false,
               fileElementId:'uploadzl',
               dataType: 'json',
               success: function (data)
               {
            		if(data.bool){
            			var multiple = Number($("#tb_Multiple").val());
            			$("#codes").append("<li class='numberlan' onmouseover='add_css($(this));' >单式上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
            					$("#list_LotteryNumber").append("<option id='单式上传' value='' wangfang='dssc_zl'>单式上传</option>");
            					$("#lab_Num").text(Number($("#lab_Num").text())+data.okNum);
								$("#investField").text(Number($("#investField").text())+data.rmb*multiple);
								$("#current_money").text(Number($("#current_money").text())+data.rmb);
								$("#uploadzl").val("");
								$(".UploadFileInput").val("");
								jisuanZhuihao();
                    		}else{
                        		if(data.rmb==0){
                        				openAlert(decodeURI(EncodeUtf8("抱歉，您上传的格式全不正确，请参照标准格式。")));
	                            			$("#uploadzl").val("");
	    									$(".UploadFileInput").val("");
											$.ajax({
                                				type: "POST",
                            				    url: "/rchlw/function/upload!deleteFile?path="+data.realpath
                            				   });
                            		}else{
                            			if(confirm(decodeURI(EncodeUtf8("您选择的有"+data.errorNum+"行错误，确认提交有效注数吗？")))){
                            				var multiple = Number($("#tb_Multiple").val());
                            				$("#codes").append("<li class='numberlan' onmouseover='add_css($(this));' >单式上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
	                    					$("#list_LotteryNumber").append("<option id='单式上传' value='' wangfang='dssc_zl'>单式上传</option>");
	                    					$("#lab_Num").text(Number($("#lab_Num").text())+data.okNum);
	    									$("#investField").text(Number($("#investField").text())+data.rmb*multiple);
	    									$("#current_money").text(Number($("#current_money").text())+data.rmb);
	                            			$("#uploadzl").val("");
	    									$(".UploadFileInput").val("");
	    									jisuanZhuihao();
	                    				}else{
	                            			$("#uploadzl").val("");
	    									$(".UploadFileInput").val("");
	                            				$.ajax({
	                                				type: "POST",
	                            				    url: "/rchlw/function/upload!deleteFile?path="+data.realpath
	                            				   });
	                            		}
                        		}
                    	}   
                }    
       		 })
            return false;
      }
	function showzlDiv(){
		$("#ybzl").css("display","block");
	}
	function closezlDiv(){
		$("#ybzl").css("display","none");	
	}
	$(function() {
		$(".UploadFileBGzl[type='file']").change(function(){
			$(".UploadFileInputzl").attr("value", $(".UploadFileBGzl").attr("value")   );
		});
	});

</script>


<ul>
	<li>选择文件：</li>
	<li style="position:relative;">
		<div class="InputFile">
			 <input type="hidden" value="plszl" id="type_zl"/>
			<input type="file" id="uploadzl" name="upload" class="UploadFileBG UploadFileBGzl" />
			<input type="text" name="test" value="" readonly="readonly" class="UploadFileInput UploadFileInputzl" />
			<input type="button" name="test" value="" class="UploadFileButton light" />
		</div>
	</li>
	<li>
		<div class="upload_text" onmouseover="showzlDiv()" onmouseout="closezlDiv()">
			<font>查看标准样式文本</font>
			<div class="yangben_content" id="ybzl" style="display: none; width:160px;">
				<div class="sanjiao">
					<img class="smalljt1" src="<%=request.getContextPath() %>/function/images/xsjicon1.gif"/>
				</div>
				<div class="yangben" >
				<table>
				<tr><td>标准样式一：</td><td>186</td></tr>
				<tr><td>&nbsp;</td><td>809</td></tr>
				<tr><td>标准样式二：</td><td>1,8,6</td></tr>
				<tr><td>&nbsp;</td><td>8,0,9</td></tr>
				</table>
				</div>
			</div>
		</div>
	</li>
</ul>
<dl>
	<dt>上传说明：</dt>
	<dd>1、 选择倍投式只需上传单倍方案。</dd>
	<dd>2、 请严格参照<font class="upload_blue">“标准格式样本”</font>格式上传方案，否则不能完成投注。</dd>
	<dd>3、 文件格式必须是文本文件。</dd>
	<dd>4、 由于上传的文件较大，会导致上传时间及在本页停留时间较长，请耐心等待。</dd>
</dl></div>
 <div class="add_basket1"><span class="add_btton1"><img onclick="return ajaxFileUploadzl();" id="btn_2_Add" src="<%=request.getContextPath() %>/function/images/addbtn.gif" /></span></div>
         