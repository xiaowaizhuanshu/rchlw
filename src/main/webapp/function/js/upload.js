function jc_ajaxFileUpload(upload,type)
    {
		var flag=checkGameNum();
		if(!flag){
			return false;
		}
	    var fileName=$("#upload").val();
	    if(fileName == ""){
	    	openAlert(decodeURI(EncodeUtf8("请先上传文本文件。")));   	
			return false;
		}
	    var file=fileName.substring(fileName.indexOf(".")+1,fileName.length);
    	if(!(file=="txt") && !(file=="TXT")){
    		$("#upload").val("");
    		$(".UploadFileInput").val("");
    		openAlert(decodeURI(EncodeUtf8("您上传的必须是txt文本文件。")));
    		return false;
		}
		$.ajaxFileUpload({
                 url:'/rchlw/function/upload!doUploadFile?type='+type+"&saishiNum="+$("#saishinumber").val()+"&guoguanNum="+$("#guoguanNum").val()+"&saishi="+$("#list_LotteryNumber option").text(), //你处理上传文件的服务端
                 secureuri:false,
                 fileElementId:upload,
                 dataType: 'json',
                 success: function (data)
                   {
                		if(data.bool){
            					var multiple = Number($("#tb_Multiple2").val());               					
                				$("#codes li").remove();
            					$("#codes").append("<li style='width:340px;' class='numberlan' onmouseover='add_css($(this));' >文件上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
            					$("#lab_Num").text(data.okNum);     					
            					$("#investField").text(data.rmb*multiple);
								$("#current_money").text(Number($("#current_money").text())+data.rmb);
								$("#upload").val("");
								$(".showaddress").text("");
								$(".UploadFileInput").val("");									
                    		}else{
                    			var wronginfo=data.wronginfo;
                    			wronginfo=wronginfo.substring(0,wronginfo.indexOf("#"));
                        		if(data.rmb==0){                        			
                        			if(wronginfo==""){
                        				openAlert(decodeURI(EncodeUtf8("抱歉，您上传的格式全不正确，请参照标准格式。")));
                        			}else{
                        				openAlert(wronginfo);
                        			}
                					
                        			$("#upload").val("");
                        			$(".showaddress").text("");
									$(".UploadFileInput").val("");
									$.ajax({
                        				type: "POST",
                    				    url: "/rchlw/function/upload!deleteFile?path="+data.realpath
                    				});
                        		}else{
                        			//获取错误行的行数
                        			var errorCode=data.errorCode;
                        			var errors=errorCode.split("^");
                        			var error="";
                        			for(var i=0;i<errors.length;i++){
                        				if(i==(errors.length-1)){
                        					error+=(Number(errors[i])+1);
                        				}else{
                        					error+=(Number(errors[i])+1)+",";
                        				}
                        				
                        			}
                        			var tishi="";
                        			if(wronginfo==""){
                        				tishi="文本中第"+error+"行格式错误，确认提交有效注数吗？";
                        			}else{
                        				tishi="文本中第"+error+"行错误，其中"+wronginfo+"，确认提交有效注数吗？";
                        			}
	                    			if(confirm(tishi)){
	                    				var multiple = Number($("#tb_Multiple").val());		                    							                    				
	                    				$("#codes li").remove();
	                    				$("#codes").append("<li class='numberlan' onmouseover='add_css($(this));' >文件上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
	                    				$("#lab_Num").text(data.okNum); 
	                    				$("#investField").text(data.rmb*multiple);
    									$("#current_money").text(Number($("#current_money").text())+data.rmb);
                            			$("#upload").val("");
                            			$(".showaddress").text("");
    									$(".UploadFileInput").val("");	    									
                    				}else{
                            			$("#upload").val("");
                            			$(".showaddress").text("");
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
function ajaxFileUpload(upload,type)
    {
	    var fileName=$("#upload").val();
	    if(fileName == ""){
	    	openAlert(decodeURI(EncodeUtf8("您选择的球不能构成一注彩票！请检查您选择的号码。")));   	
			return false;
		}
	    var file=fileName.substring(fileName.indexOf(".")+1,fileName.length);
    	if(!(file=="txt")){
    		$("#upload").val("");
    		$(".UploadFileInput").val("");
    		openAlert(decodeURI(EncodeUtf8("您上传的必须是txt文本文件。")));
    		return false;
		}
		$.ajaxFileUpload({
                 url:'/rchlw/function/upload!doUploadFile?type='+type, //你处理上传文件的服务端
                 secureuri:false,
                 fileElementId:upload,
                 dataType: 'json',
                 success: function (data)
                   {
                		if(data.bool){
                					var multiple = Number($("#tb_Multiple").val());               					               					
                					$("#codes").append("<li class='numberlan' onmouseover='add_css($(this));' >单式上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
                					$("#list_LotteryNumber").append("<option id='单式上传' value='' wangfang='dssc'>单式上传</option>");
                    				$("#lab_Num").text(Number($("#lab_Num").text())+data.okNum);    					
                					if($("#oneMoney").attr("checked")=='checked' && $("#zhuijia").is(":visible")){ 
                						$("#investField").text(Number($("#investField").text())+data.rmb*multiple*3/2);
                					}else{
                        				$("#investField").text(Number($("#investField").text())+data.rmb*multiple);               					
                					}
									$("#current_money").text(Number($("#current_money").text())+data.rmb);
									$("#upload").val("");
									$(".UploadFileInput").val("");
									//追号设置 用的
									if($("#daiGouHemai") != null && $("#qishuList") != null  && ($("#daiGouHemai").val()=="zhuihao" || $("#daiGouHemai").val()=="ziyouZhuihao")){
										setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());
									}
									if($("#lotNo").val()=="F47104"||$("#lotNo").val()=="T01001"){
										chooseBallToMoney();
									}
                        		}else{
                            		if(data.rmb==0){
                            					openAlert(decodeURI(EncodeUtf8("抱歉，您上传的格式全不正确，请参照标准格式。")));
		                            			$("#upload").val("");
		    									$(".UploadFileInput").val("");
												$.ajax({
	                                				type: "POST",
	                            				    url: "/rchlw/function/upload!deleteFile?path="+data.realpath
	                            				   });
                                		}else{
		                    			if(confirm(decodeURI(EncodeUtf8("您选择的有"+data.errorNum+"行错误，确认提交有效注数吗？")))){
		                    				var multiple = Number($("#tb_Multiple").val());		                    							                    							                					
		                    				$("#codes").append("<li class='numberlan' onmouseover='add_css($(this));' >单式上传   <input type='hidden' name='hidpath' value='#"+data.errorCode+"@#"+data.realpath+"' /><font class='blue'><a target='_blank' href='"+data.uploadFileName+"'>查看详情</a></font> 投注金额"+data.rmb+"元 <a href=\"javascript:btn_ClearSelectdanshio("+data.okNum+","+data.rmb+",'"+data.real+"')\" id='btn_ClearSelect' title='"+decodeURI(EncodeUtf8('删除'))+"'><span class='numberdel'>"+decodeURI(EncodeUtf8('删除'))+"</span></a></li>");
		                    				$("#list_LotteryNumber").append("<option id='单式上传' value='' wangfang='dssc'>单式上传</option>");
		                    				$("#lab_Num").text(Number($("#lab_Num").text())+data.okNum); 
	                    					if($("#oneMoney").attr("checked")=='checked' && $("#zhuijia").is(":visible")){ 
	                    						$("#investField").text(Number($("#investField").text())+data.rmb*multiple*3/2);
	                    					}else{
	                            				$("#investField").text(Number($("#investField").text())+data.rmb*multiple);
	                    					}
	    									$("#current_money").text(Number($("#current_money").text())+data.rmb);
	                            			$("#upload").val("");
	    									$(".UploadFileInput").val("");
	    									//追号设置 用的
	    									if($("#daiGouHemai") != null && $("#qishuList") != null  && ($("#daiGouHemai").val()=="zhuihao" || $("#daiGouHemai").val()=="ziyouZhuihao")){
	    										setQishuList(55,$('#betchZhuihaoNum').val(),false,'qishuList',$('#lotNo').val());
	    									}
	    									if($("#lotNo").val()=="F47104"||$("#lotNo").val()=="T01001"){
	    										chooseBallToMoney();
	    									}
	                    				}else{
	                            			$("#upload").val("");
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

	function showDiv(){
			$("#yb").css("display","block");
		}
	function closeDiv(){
		$("#yb").css("display","none");	
	}

	$(function() {
		$(".UploadFileBGpub[type='file']").change(function(){
			$(".UploadFileInputpub").attr("value", $(".UploadFileBGpub").attr("value"));
		});
	});
	
	function getType(){
		if($("#lotNo").val()=="J00003"){
			return "jc_zjq";
		}
		return $("#type").val();
	}