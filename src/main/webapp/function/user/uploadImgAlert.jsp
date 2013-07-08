<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">balanceAdtil("deposit_amount_user","freeze_amout_user","username");</script>
<div class="AlertWindow scwindowbox WindowCenter" id="UploadImgAlert" style="display:none">
    <div class="windowti">
      上传头像<span class="closebtn"><img src="/rchlw/function/images/closebtn.gif" width="15" height="15" border="0" onclick='loginShow("UploadImgAlert")'/></span>
    </div>
    <div class="windowsc" >
    从电脑中选择一张图片<br/>
    <form action ="/rchlw/user/tuserinfoAction!uploadimg" enctype="multipart/form-data" method="post" id="uploadImg">
    <div class="liulan"> 
      <input  type="file" class="sctc" name="upload" id="upload" />
      <span class="liulanbtn"><img src="/rchlw/function/images/liulanbtn.gif" height="22"  width="70" border="0" 
       onclick='Upload();'/></span></div>
    <div class="mswz" id="first">支持JPG、JPEG、GIF、PNG等格式，图片大小不超过2MB</div>
    </form>
    <div id="Headimg" style="display:none">
    <div class="zhqltxbg2" ><img src="/rchlw/function/images/defaulttx.gif" width="100" height="100"  id="showImg"/></div>
    <div class="scqdbtn"><img src="/rchlw/function/images/scqdbtn.gif" width="80" height="32" border="0"onclick='ModifyUser();' /></div>
    <input type="hidden" value="0" id="hiddenImg">
      <p>&nbsp;&nbsp;提示：上传头像成功后若头像没有变化请手动刷新页面或清除浏览器缓存!</p>
    </div>
    </div>

  </div>
  <script>
  function Upload(){
	  $.ajaxFileUpload
      ({      
              url:'/rchlw/user/tuserinfoAction!uploadimg', 
              secureuri:false,
              fileElementId:'upload',
              dataType: 'json',
              success: function (data)
              { 
            	  $("#showImg").removeAttr("src");
            	  $("#showImg").attr("src",data+"?rang="+ Math.random());
  				  $("#Headimg").show();
  				  $("#hiddenImg").val(data);
              },
              error: function (data)
              {
            	  openAlert("文件上传出错，请重新选择!");
              }
          });
  }
  function ModifyUser(){
	  var path=$("#hiddenImg").val();
	  $.ajax({
			type: "POST",
			url: "/rchlw/function/tuserinfoAction!modifyHeadPath",
			data: "headPath="+path ,
			dataType: 'text',
			//接受数据格式
			success: function(msg) {
				if(msg=="success"){
				loginShow("UploadImgAlert");
				 $("#headpath").removeAttr("src");
				$("#headpath").attr("src",path+"?rang="+ Math.random());
				$("#Headimg").hide();
				openAlert("上传头像成功！");
				}else{
					openAlert("上传失败请重新操作！");
				}
			}
		});
	  
  }
  </script>