<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib uri="/struts-tags" prefix="s" %>
<style>
div.My_account{ 
	width:778px; padding:0px;
} 

div.My_account h2{ 
	margin:0 14px;
}

.tk-jdt .tishi-box {
    height: 35px;
}

.tk-jdt .tishi-box .span-2 {
    background: url("/rchlw/function/images/progress/tishi-boxbg2.jpg") no-repeat scroll 0 0 transparent;
    color: #A0A0A2;
    height: 30px;
    left: 30px;
    line-height: 22px;
    text-align: center;
    top: 3px;
    width: 88px;
}

.tk-jdt .tishi-box span{
    display: inline-block;
}

.tk-jdt table tr td {
    border: 1px solid #E7E7E7;
    border-collapse: collapse;
    height: 35px;
    text-align: center;
}
.jdt-img img {
    border: medium none;
}

.tk-jdt p {
    padding-left: 14px;
}

.tk-jdt p span {
   width:184px;
   display:block;
   float:left;
   text-align: center;
}

.tk-jdt p .span-shenhe {
   width:100px;
}

.tk-jdt p .span-huikuan1 {
   width:150px;
   margin-left:90px;
}

.tk-jdt p .span-huikuan2 {
   width:150px;
}

.tk-jdt h3 {
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    margin-top: 38px;
}

.tk-jdt table {
    border-collapse: collapse;
    color:red;
}

.tk-jdt input{	
	background:url(/rchlw/function/images/Button_L1_R.gif) no-repeat center center; 
	border:none; 
	width:100px;
	height:30px; 
	line-height:30px; 
	color:#FFF; 
	font-size:14px; 
	font-weight:bold;
	cursor:pointer;	
}

.tk-jdt .fanhui{
	margin-top:40px;
	margin-bottom:40px;
	margin-right:350px;
}

.tk-jdt .quxiao{
	margin-left:260px;
	font-size:40px;
	margin-top:70px;
	color:red;
}
</style>

	<h2>账户提款</h2>
	<div class="account_recharge">
		<ul class="account_rechargeTab  BaseTab" >
			<li ControlTarget=".drawing_Wizard" class="light " onclick="return reHtml(18,'')">提款向导</li>
			<li ControlTarget=".user_Drawing" class="light" onclick="return reHtml(11,'')">用户提款</li>
			<li ControlTarget=".cash_Records" class="light selected" onclick="return reHtml(12,'')">提款记录</li>
		</ul>
	</div> 
	<div class="account_rechargeContent">
	
		<s:if test="#request.list.size()==0">
			<h1>未查询到记录</h1>
		</s:if>
		<s:else>
		<s:iterator value="#request.list">
		
			 <div class="tk-jdt">
			 		<s:if test="state=='106'">
			 		</s:if>
			 		<s:elseif test="state=='104'">
			 		</s:elseif>
			  		<s:elseif test="checktime=='null' || checktime==null || checktime==''">
			  			<div class="tishi-box">
	                		<span class="span-2" style="margin-left:0px">等待审核</span>
	                    </div>
	                    <div class="jdt-img">
	                        <img width="694" height="42" style="display:block" alt="提款进度条" src="/rchlw/function/images/progress/tk-jd1.jpg">
	                    </div>
			  		</s:elseif>
			  		<s:elseif test="remittime==null || remittime=='null' ||  remittime==''">
			  			<div class="tishi-box">
	                		<span class="span-2" style="margin-left:200px">等待汇款</span>
	                    </div>
	                    <div class="jdt-img">
	                        <img width="694" height="42" style="display:block" alt="提款进度条" src="/rchlw/function/images/progress/tk-jd2.jpg">
	                    </div>
			  		</s:elseif>		  		
			  		<s:elseif test="finishtime==null || finishtime=='null' || finishtime==''">
			  			<div class="tishi-box">
	                		<span class="span-2" style="margin-left:420px">正在汇款</span>
	                    </div>
	                    <div class="jdt-img">
	                        <img width="694" height="42" style="display:block" alt="提款进度条" src="/rchlw/function/images/progress/tk-jd3.jpg">
	                    </div>
			  		</s:elseif> 
			  		<s:else>
			  			<div class="tishi-box">
	                		<span class="span-2" style="margin-left:630px">提现成功</span>
	                    </div>
	                    <div class="jdt-img">
	                        <img width="694" height="42" style="display:block" alt="提款进度条" src="/rchlw/function/images/progress/tk-jd4.jpg">
	                    </div>
			  		</s:else> 
			  		
                    <s:if test="state=='104' || state=='106'"></s:if>
                    <s:else>
                    	<p>
	                    	<span>提交<em>(<s:property value="plattime"/>)</em></span>
	                    	
	                    	<s:if test="checktime=='null' || checktime==null || checktime==''">
	                    		<span class="span-shenhe">审核<em></em></span>
	                    		<span class="span-huikuan1">汇款<em></em></span>
	                    	</s:if>	            
	                    	<s:else>
	                    		<span>审核<em>(<s:property value="checktime"/>)</em></span>
	                    	
	                    		<s:if test="remittime==null || remittime=='null' ||  remittime==''"><span class="span-huikuan2">汇款<em></em></span></s:if>
	                        	<s:else><span>汇款<em>(<s:property value="remittime"/>)</em></span></s:else>
	                        	
	                        </s:else>
	                        
	                        <s:if test="finishtime==null || finishtime=='null' || finishtime==''"><span style="padding-right:0;">到账<em style=" color:#A0A0A2">(预计<s:property value="estimatefinishtime"/>)</em></span></s:if>
	                        <s:else><span style="padding-right:0;">到账<em style=" color:#A0A0A2">(<s:property value="finishtime"/>)</em></span></s:else>                  
	                    </p>
                     </s:else>
                                      
                    <h3>订单信息</h3>
                    <table width="715" cellspacing="0" cellpadding="0" border="1">
                              <tbody><tr>
                                <td width="127">订单类型</td>
                                <td>提款</td>
                              </tr>
                              <tr>
                                <td>金额</td>
                                <td><s:property value="amt"/></td>
                              </tr>
                              <tr>
                                <td>提款方式</td>
                                <td><s:property value="bankname"/></td>
                              </tr>
                              <tr>
                                <td>订单状态</td>
                                <td>
                               		<s:if test="state=='104'">驳回</s:if>
                                	<s:elseif test="state=='106'">取消</s:elseif>
                                	<s:elseif test="checktime=='null' || checktime==null || checktime==''">等待审核</s:elseif>                     
                                	<s:elseif test="remittime==null || remittime=='null' ||  remittime==''">等待汇款</s:elseif>
                                	<s:elseif test="finishtime==null || finishtime=='null' || finishtime==''">进行汇款</s:elseif>                               	                               	
                                	<s:else>成功</s:else>
                                </td>
                              </tr> 
                              <tr>
                                <td>备注</td>
                                <td>
                                	<s:if test="state=='104'"><s:property value="rejectReason"/></s:if>
                                	<s:elseif test="state=='106'">您的订单已被取消</s:elseif>
                                	<s:elseif test="checktime=='null' || checktime==null   || checktime==''">您的订单已经提交，正在等待审核</s:elseif>                     
                                	<s:elseif test="remittime==null  || remittime=='null'  ||  remittime==''">您的订单已经审核完毕，正在等待汇款</s:elseif>
                                	<s:elseif test="finishtime==null || finishtime=='null' || finishtime==''">您的订单已经审核完毕，正在进行汇款</s:elseif>                               	                          
                                	<s:else>您的订单已处理完毕，提现成功</s:else>
                                </td>
                              </tr>
                       </tbody></table>
                                          
              <div class="fanhui"> 
         	<input type="button" onclick="return reHtml(12,'')" value="返回列表">
		           </div>    
         </div> 
			
			
		</s:iterator>
		</s:else>
	
        
	</div>
	<script>
		$(function(){
			$(".a_ATM").addClass("selected");
		});
	</script>
