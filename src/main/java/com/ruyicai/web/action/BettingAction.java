package com.ruyicai.web.action;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.Constant;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.BettingUtil;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.ErrorCode;
import com.ruyicai.util.InvokeLotteryUtil;
import com.ruyicai.util.ResourceBundleUtil;

/**
 * 投注的Action
 */
@SuppressWarnings("serial")
public class BettingAction extends BaseAction {
	private static Logger logger = Logger.getLogger(BettingAction.class);

	/**
	 * 调用jrtLot执行 适应高频彩 追号倍投投注
	 * @return 对应的跳转地址
	 */
	public String bettingByGaopin() {
		try {
			Tuserinfo user = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
			//1.获取页面参数
			String jsonString = request.getParameter("jsonString");
			//倍数
			String multiple = request.getParameter("tb_Multiple")==null?"1"
					:request.getParameter("tb_Multiple").equals("")?"1"
							:request.getParameter("tb_Multiple");
			//要追的期数
			String batchNum = request.getParameter("batchNum")==null?"1"
					:request.getParameter("batchNum").equals("")?"1"
							:request.getParameter("batchNum");
			//期号和倍数的拼接串
			String zhuihaoStr = request.getParameter("zhuihaoJson");
            
			//期号和倍数的拼接串
			
			String[] qihaocheckbox = request.getParameterValues("baishucheckbox");
			//总金额
			String allqiMoney = "".equals(request.getParameter("allqiMoney"))?"0":request.getParameter("allqiMoney");
			//扣款方式 0.分期扣款 1.提前扣款
			String payType = "".equals(request.getParameter("payType"))?"0":request.getParameter("payType");
			int payTypeInt = Integer.parseInt(payType);
			//中奖后是否停止追号 1.是中奖停止，0.是不停止
			String payStop = "".equals(request.getParameter("payStop"))?"0":request.getParameter("payStop");
			int payStopInt = Integer.parseInt(payStop);
			//没钱了是否下发短信 1.是下发短信，0.是不下发
			String smsType = "".equals(request.getParameter("smsType"))?"0":request.getParameter("smsType");
			int smsTypeInt = Integer.parseInt(smsType);
			//收益率的描述
			String shouyiDesc = request.getParameter("shouyiDesc")==null?"":request.getParameter("shouyiDesc");
			String[] shouyiDescrry = null;
			if(shouyiDesc.indexOf("#")>-1){
				shouyiDescrry =  shouyiDesc.split("#");
				if(shouyiDescrry.length > 2){
					shouyiDesc = "前"+shouyiDescrry[0]+"期收益率"+shouyiDescrry[1]+"%，之后收益率"+shouyiDescrry[2]+"%";
				}
			 }else{
				 shouyiDesc = "全程收益率"+shouyiDesc+"%"; 
			 }

			logger.info("页面传入的参数为:期号和倍数的拼接串="+ zhuihaoStr + ";彩种和注码jsonString:"
					+ jsonString +"付款类型："+payType+";中奖是否停止："+payStop+";是否下发短信："+smsType);
			//合买
			String hemai = request.getParameter("daiGou")==null?"daigou"
					:request.getParameter("daiGou").equals("")?"daigou"
							:request.getParameter("daiGou");
			//体彩追加功能
			String oneMoney = request.getParameter("oneMoney")==null?"2"
					:request.getParameter("oneMoney").equals("")?"2"
							:request.getParameter("oneMoney");
			logger.info("页面传入的参数为:是否追号="+ hemai + ";彩种和注码jsonString:" + jsonString + ";倍数:" 
					+ multiple+";要追的期数:"+batchNum + ";大乐透追加金额:" + oneMoney);
			int beishu = Integer.parseInt(multiple);
			
			// 判断注码、执行追号、投注
			JSONObject json = JSONObject.fromObject(jsonString);
			String lotno = CommonUtil.getBackValue("lotno", json);
			String betcode = CommonUtil.getBackValue("betcode", json);
			String wanfa = CommonUtil.getBackValue("wanfa", json);
			
			//获取单式上传的路径和错误注码
			String path=request.getParameter("path");
			String errorCode=request.getParameter("errorCode");
			if(errorCode!=null){
				errorCode=new String(errorCode.getBytes("ISO-8859-1"),"UTF-8");
				String codes = BettingUtil.getUploadBetcodes(path, errorCode,lotno);
				logger.info("获取单式上传的注码为Codes="+codes);
				//拼接单式上传的注码
				betcode += codes;
			}
			JSONObject jsonObject = null;
			String batchCode = InvokeLotteryUtil.getIssue(lotno);//获取当前期号
			//获取用户选择的是代购还是追号
			if(hemai.trim().equals("daigou")){
				jsonObject = BettingUtil.getOrderBet(lotno, betcode, beishu, oneMoney, user, 
						batchCode, wanfa, request);
				logger.info("投注返回的jsonObject="+jsonObject);	
			}else if(hemai.trim().equals("hemai")){// 合买
				jsonObject = BettingUtil.getOrderBetHemai(lotno, betcode, beishu, oneMoney, user, 
						batchCode, wanfa, request);
				logger.info("投注(合买投注)返回的jsonObject="+jsonObject);	
			}else if(hemai.trim().equals("zhuihao")){	//追号时执行调用追号功能
				if(zhuihaoStr.indexOf("#")>-1){
					multiple = zhuihaoStr.split("#")[0].split(",")[1];
		    	}
				beishu = Integer.parseInt(multiple);
				jsonObject = BettingUtil.getSubscribeOrderByGaopin(lotno, betcode, batchNum, beishu,
						oneMoney, user, zhuihaoStr, wanfa,allqiMoney,payTypeInt,smsTypeInt,payStopInt,shouyiDesc,request);
			}else if(hemai.trim().equals("ziyouZhuihao")){
				// 自由追号
				int danqiJIangjinInt = 0;//Integer.parseInt(danqiJIangjin);
				String danqiJIangjin1 = request.getParameter("danqiJiangjin1")==null?"0":request.getParameter("danqiJiangjin1");
				String danqiJIangjin2 = request.getParameter("danqiJiangjin2")==null?"0":request.getParameter("danqiJiangjin2");
				
				shouyiDesc = "";
				if(payTypeInt == 0){
					allqiMoney = "".equals(request.getParameter("diyiqiMoney"))?"0":request.getParameter("diyiqiMoney");
					danqiJIangjinInt = Integer.parseInt(danqiJIangjin1);
					
				}else{
					danqiJIangjinInt = Integer.parseInt(danqiJIangjin2);
				}
				if(danqiJIangjinInt == 0){
					shouyiDesc = "否";
				}else{
					shouyiDesc = "单期奖金≥"+danqiJIangjinInt+"元终止追号";
				}
				
				beishu = Integer.parseInt(multiple);
				jsonObject = BettingUtil.getSubscribeOrderByDipin(lotno, betcode, batchNum, beishu,
						oneMoney, user, qihaocheckbox, wanfa,allqiMoney,payTypeInt,smsTypeInt,payStopInt,shouyiDesc, danqiJIangjinInt,request);
			}
			
			String url = request.getHeader("Referer");//获取请求地址并重定向到当前地址
			String urlAdd=request.getParameter("urlAdd");
			String goId = "0";
			if(hemai.trim().equals("zhuihao") || hemai.trim().equals("ziyouZhuihao")){
				goId="1";
			}
			String gourl = "/rchlw/function/rules/user.jsp?key="+goId+"_view=ChildMenu2_style=menu2";
			request.setAttribute("gourl", gourl);
			request.setAttribute("cai", lotno);
			request.setAttribute("urlAdd", urlAdd);
			request.setAttribute("jsonObject", jsonObject);	
			request.setAttribute("url", url);
			
			return "betBack";
			
		} catch (Exception e) {
			logger.error("执行投注出Exception:(Implementation of abnormal betting)" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}
	/**
	 * 
	 * 调用jrtLot执行 适应常规彩票的 追号投注
	 * 
	 * @return 对应的跳转地址
	 * 
	 */
	public String bettingByDipin() {
		
		try {
			Tuserinfo user = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
			//1.获取页面参数
			String jsonString = request.getParameter("jsonString");
			JSONObject json = JSONObject.fromObject(jsonString);
			//合买、代购、追号、赠彩 
			String hemai = request.getParameter("daiGou")==null?"daigou"
					:request.getParameter("daiGou").equals("")?"daigou"
							:request.getParameter("daiGou");
			//倍数
			String multiple = "";
			if(!hemai.equals("zengcai")){
				multiple = request.getParameter("tb_Multiple")==null?"1"
						:request.getParameter("tb_Multiple").equals("")?"1"
								:request.getParameter("tb_Multiple");
			}
			//要追的期数
			String batchNum = request.getParameter("batchNum")==null?"1"
					:request.getParameter("batchNum").equals("")?"1"
							:request.getParameter("batchNum");
			//期号和倍数的拼接串
			
			String[] qihaocheckbox = request.getParameterValues("baishucheckbox");
			//总金额
			String allqiMoney = request.getParameter("allqiMoney")==null ||"".equals(request.getParameter("allqiMoney"))?"0":request.getParameter("allqiMoney");
			//扣款方式 0.分期扣款 1.提前扣款
			String payType =request.getParameter("payType")==null || "".equals(request.getParameter("payType"))?"0":request.getParameter("payType");
			int payTypeInt = Integer.parseInt(payType);
			//单期奖金 达到多少 停止追号
			int danqiJIangjinInt = 0;//Integer.parseInt(danqiJIangjin);
			String danqiJIangjin1 = request.getParameter("danqiJiangjin1")==null?"0":request.getParameter("danqiJiangjin1");
			String danqiJIangjin2 = request.getParameter("danqiJiangjin2")==null?"0":request.getParameter("danqiJiangjin2");
			//收益率的描述
			String shouyiDesc = "";
			if(payTypeInt == 0){
				allqiMoney =request.getParameter("diyiqiMoney")==null || "".equals(request.getParameter("diyiqiMoney"))?"0":request.getParameter("diyiqiMoney");
				danqiJIangjinInt = Integer.parseInt(danqiJIangjin1);
				
			}else{
				danqiJIangjinInt = Integer.parseInt(danqiJIangjin2);
			}
			if(danqiJIangjinInt == 0){
				shouyiDesc = "否";
			}else{
				shouyiDesc = "单期奖金≥"+danqiJIangjinInt+"元终止追号";
			}
			//中奖后是否停止追号 1.是中奖停止，0.是不停止
			String payStop =request.getParameter("payStop")==null|| "".equals(request.getParameter("payStop"))?"0":request.getParameter("payStop");
			int payStopInt = Integer.parseInt(payStop);
			//没钱了是否下发短信 1.是下发短信，0.是不下发
			String smsType =request.getParameter("smsType") ==null|| "".equals(request.getParameter("smsType"))?"0":request.getParameter("smsType");
			int smsTypeInt = Integer.parseInt(smsType);
			logger.info("页面传入的参数为:期号和倍数的拼接串="+ qihaocheckbox + ";彩种和注码jsonString:"
					+ jsonString +"付款类型："+payType+";中奖是否停止："+payStop+";是否下发短信："+smsType);
			//体彩追加功能
			String oneMoney = request.getParameter("oneMoney")==null?"2"
					:request.getParameter("oneMoney").equals("")?"2"
							:request.getParameter("oneMoney");
			logger.info("页面传入的参数为:是否追号="+ hemai + ";彩种和注码jsonString:" + jsonString + ";倍数:" 
					+ multiple+";要追的期数:"+batchNum + ";大乐透追加金额:" + oneMoney);
			int beishu = 0; 
			if(!hemai.equals("zengcai")){
				beishu = Integer.parseInt(multiple);
			}
			// 判断注码、执行追号、投注
			String lotno = CommonUtil.getBackValue("lotno", json);
			String betcode = CommonUtil.getBackValue("betcode", json);
			String wanfa = CommonUtil.getBackValue("wanfa", json);
			String ifchangci=request.getParameter("ifchangci");
			
			//获取单式上传的路径和错误注码
			String path=request.getParameter("path");
			String errorCode=request.getParameter("errorCode");
			if(errorCode!=null){
				errorCode=new String(errorCode.getBytes("ISO-8859-1"),"UTF-8");
				String codes = BettingUtil.getUploadBetcodes(path, errorCode,lotno);
				logger.info("获取单式上传的注码为Codes="+codes);
				//拼接单式上传的注码
				if(lotno.equals("J00001") || lotno.equals("J00013") || lotno.equals("J00003") || lotno.equals("J00002")){
					if(!"".equals(codes)){
						wanfa="400";
						String newbetcode="";
						if(lotno.equals("J00002")){
							if("youchangci".equals(ifchangci)){
								newbetcode=BettingUtil.getNewbetcode(betcode,codes);
							}else{
								String[] str=codes.split(";");
								for(int i=0;i<str.length;i++){
									String[] str2=str[i].split("\\|");
									String[] str3=betcode.split("\\^");
									if(str2[0].length()==1){
										for(int j=0;j<str2.length;j++){
											if(j%2==0){
												String bifen=str2[j]+str2[j+1];
												if(!"**".equals(bifen)){
													if("3A".equals(bifen)){
														newbetcode+=str3[j/2]+"|90^";
													}else if("1A".equals(bifen)){
														newbetcode+=str3[j/2]+"|99^";
													}else if("0A".equals(bifen)){
														newbetcode+=str3[j/2]+"|09^";
													}else{
														newbetcode+=str3[j/2]+"|"+bifen+"^";
													}											
												}																																		
											}
										}
									}else{
										for(int j=0;j<str2.length;j++){
											String bifen=str2[j];
											if(!"**".equals(bifen)){
												if("3A".equals(bifen)){
													newbetcode+=str3[j]+"|90^";
												}else if("1A".equals(bifen)){
													newbetcode+=str3[j]+"|99^";
												}else if("0A".equals(bifen)){
													newbetcode+=str3[j]+"|09^";
												}else{
													newbetcode+=str3[j]+"|"+bifen+"^";
												}
											}												
										}
									}							
									newbetcode+="*";
								}
							}
						}else{
							if("youchangci".equals(ifchangci)){
								newbetcode=BettingUtil.getNewbetcode(betcode,codes);
							}else{
								String[] str=codes.split(";");
								for(int i=0;i<str.length;i++){
									String[] str2=str[i].split("\\|");
									String[] str3=betcode.split("\\^");
									for(int j=0;j<str2.length;j++){
										if(!"*".equals(str2[j]) && !"".equals(str2[j])){
											newbetcode+=str3[j]+"|"+str2[j]+"^";
										}												
									}
									newbetcode+="*";
								}
							}
						}											
						betcode=newbetcode;
					}					
				}else{
					betcode += codes;
				}
			}
			JSONObject jsonObject = null;
			String batchCode = InvokeLotteryUtil.getIssue(lotno);//获取当前期号
			if( (lotno.equals("J00001")||lotno.equals(Constant.JCZQ_RSPF)|| lotno.equals("J00003")||lotno.equals("J00002")||lotno.equals("J00004"))&&hemai.trim().equals("hemai")){
				batchCode ="";
			}
			if("T01003".equals(lotno)||"T01004".equals(lotno)||"T01005".equals(lotno)||"T01006".equals(lotno)) {
				batchCode = CommonUtil.getBackValue("qihao", json);
				if("".equals(batchCode)) {
					throw new RuntimeException();
				}
			}
			String isAllYears = request.getParameter("isAllYears")==null?"0":request.getParameter("isAllYears");
			String isZengCai = "";
			//获取用户选择的是代购还是追号
			if(hemai.trim().equals("daigou")){
				jsonObject = BettingUtil.getOrderBet(lotno, betcode, beishu, oneMoney, user, 
						batchCode, wanfa, request);
				logger.info("投注返回的jsonObject="+jsonObject);	
			}else if(hemai.trim().equals("hemai")){// 合买
				jsonObject = BettingUtil.getOrderBetHemai(lotno, betcode, beishu, oneMoney, user, 
						batchCode, wanfa, request);
				logger.info("投注(合买投注)返回的jsonObject="+jsonObject);
				//追号时执行调用追号功能
			}else if(hemai.trim().equals("zhuihao")){
				beishu = Integer.parseInt(multiple);
				if(isAllYears.equals("1")||isAllYears=="1"){
					jsonObject = BettingUtil.getSubscribeOrderByDipinToAllYears(lotno, betcode, "153", beishu,
							oneMoney, user, qihaocheckbox, wanfa,"306",1,smsTypeInt,0,shouyiDesc, danqiJIangjinInt,request);
				}else{
					jsonObject = BettingUtil.getSubscribeOrderByDipin(lotno, betcode, batchNum, beishu,
							oneMoney, user, qihaocheckbox, wanfa,allqiMoney,payTypeInt,smsTypeInt,payStopInt,shouyiDesc, danqiJIangjinInt,request);
				}
				
			}else if(hemai.trim().equals("zengcai")){
				for(int k=0;k<CommonUtil.getBackValue("beishuArr", json).split(",").length;k++){
					multiple = CommonUtil.getBackValue("beishuArr", json).split(",")[k];
					beishu = Integer.parseInt(multiple); 
					String userno = "";
					String blessing = "";
					
					if(!multiple.equals("0")){
						if((CommonUtil.getBackValue("beishuArr", json).split(",").length>CommonUtil.getBackValue("userRightList", json).split(",").length&&k==CommonUtil.getBackValue("beishuArr", json).split(",").length-1)||CommonUtil.getBackValue("userRightList", json).length()==0||CommonUtil.getBackValue("userRightList", json)==""){
							userno = user.getUSERNO();
							blessing = "";
							beishu = Integer.parseInt(multiple);
							jsonObject = BettingUtil.getOrderBet(lotno, betcode, beishu, oneMoney, user, 
									batchCode, wanfa, request);
							logger.info("赠彩投注返回的jsonObject="+jsonObject);
						}else{
							isZengCai="1";
							user.setMOBILEID(CommonUtil.getBackValue("userRightList", json).split(",")[k]);
							blessing = java.net.URLDecoder.decode(CommonUtil.getBackValue("blessing", json).split("@")[k],"UTF-8");
							beishu = Integer.parseInt(multiple);
							jsonObject = BettingUtil.getZengCaiOrderBet(lotno, betcode, beishu, oneMoney, user, 
									batchCode, wanfa, userno,blessing,request);
							logger.info("赠彩投注返回的jsonObject="+jsonObject);

						}
					}
					
				}
			}
			
			String url = request.getHeader("Referer");//获取请求地址并重定向到当前地址
			String urlAdd=request.getParameter("urlAdd");
			String goId = "0";
			String allYears = "";
			if(hemai.trim().equals("zhuihao")){
				if(isAllYears.equals("1")||isAllYears=="1"){
					allYears="1";
				}else{
					goId="1";
				}
				
			}if(hemai.trim().equals("zengcai")){
				if(isZengCai.equals("1")||isZengCai=="1"){
					goId="2";
				}else{
					goId="1";
				}
			}else if(hemai.trim().equals("hemai")&&"0".equals(jsonObject.getString("errorCode"))){
				new SelectAllAction().getCaselotsByWhereIndex();//合买成功重新生成首页页面缓存
				response.sendRedirect("/rchlw/function/query/case/success_hemai.jsp?caseId="+jsonObject.getJSONObject("value").getString("tlotcaseid"));
				return null;
			}
			String gourl = "/rchlw/function/rules/user.jsp?key="+goId+"_view=ChildMenu2_style=menu2";
			request.setAttribute("isZengCai", isZengCai);
			request.setAttribute("allYears", allYears);
			request.setAttribute("gourl", gourl);
			request.setAttribute("cai", lotno);
			request.setAttribute("urlAdd", urlAdd);
			request.setAttribute("jsonObject", jsonObject);	
			request.setAttribute("url", url);
			return "betBack";
			
		} catch (Exception e) {
			logger.error("执行投注出Exception:(Implementation of abnormal betting)" + e);
			e.printStackTrace();
			return "error";
		}
	}
	
	/**
	 *查看所有注码
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public String bettingAll() throws UnsupportedEncodingException {
		String codeAll = request.getParameter("codeAll")==null?"":request.getParameter("codeAll");
		request.setAttribute("codeAll", codeAll);
		return "codeAll";
	}
	
	/**
	 * 参与合买
	 * @return 返回到合买
	 */
	public void toHemai(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		Tuserinfo tuserinfo = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
		Long amt = Long.parseLong(request.getParameter("amt")==null||request.getParameter("amt").equals("")?"0":request.getParameter("amt"))*100;
		String caseId = request.getParameter("caseId")==null?"":request.getParameter("caseId");
		Long safeAmt = Long.parseLong(request.getParameter("safeAmt")==null||request.getParameter("safeAmt").equals("")?"0":request.getParameter("safeAmt"))*100;
		String channel = request.getSession().getAttribute("CHANNEL") == null?"2":(String)request.getSession().getAttribute("CHANNEL") ;
		JSONObject obj_err = new JSONObject();
		try {
			//查询余额
			JSONObject balanceObj = CommonUtil.getBalance(tuserinfo.getUSERNO());
			double deposit_amount = 0;
			// 得到后台的返回内容返回给页面
			if(!balanceObj.isNullObject()){
				deposit_amount = balanceObj.getDouble("balance")-balanceObj.getDouble("freezebalance"); //可投注金额
			}
			
			//余额判断是否足够
			if(Double.valueOf(amt+safeAmt)>deposit_amount){
				obj_err.put("errorCode", "501");
				obj_err.put("message", "您的可投注余额不足，请先充值！");
				obj_err.put("amt", (amt+safeAmt));
				obj_err.put("deposit_amount", deposit_amount);
				response.getWriter().print(obj_err);
				return ;
			}
			
			//TODO 这里需要改变调用的接口，使获取数据效率更高
			//查询可交易剩余金额
			JSONObject caseLotDetail = SelectAllAction.getCaseLotDetail(caseId,tuserinfo).getJSONObject("caseLot");
			
			//判断此方案是否在认购中状态
			if(1!=caseLotDetail.getInt("displayState")){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "您好！此方案已"+caseLotDetail.getString("displayStateMemo")+"，请选择其他方案！");
				response.getWriter().print(obj_err);
				return ;
			}
			//购买金额与可交易金额进行比对 不正确刷新页面
			if((amt+safeAmt)>(caseLotDetail.getLong("totalAmt")-caseLotDetail.getLong("buyAmtByStarter")-caseLotDetail.getLong("buyAmtByFollower"))){
				obj_err.put("errorCode", "502");
				obj_err.put("message", "您好！认购金额不正确，请重试！");
				response.getWriter().print(obj_err);
				return ;
			}
			if(amt>0&&amt<caseLotDetail.getLong("minAmt")&&caseLotDetail.getLong("minAmt")<(caseLotDetail.getLong("totalAmt")-caseLotDetail.getLong("buyAmtByStarter")-caseLotDetail.getLong("buyAmtByFollower"))){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "您好！此方案的最低购买金额为"+(caseLotDetail.getLong("minAmt")/100)+"元！");
				response.getWriter().print(obj_err);
				return ;
			}else if(amt<1){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "您好！此方案的最低购买金额为1元！");
				response.getWriter().print(obj_err);
				return ;
			}
			
			if(safeAmt>0&&caseLotDetail.getLong("totalAmt")<=(caseLotDetail.getLong("buyAmtByStarter")+caseLotDetail.getLong("buyAmtByFollower")+caseLotDetail.getLong("safeAmt"))){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "您好！此方案可保底的金额为0元！");
				response.getWriter().print(obj_err);
				return ;
			}
			
			if(safeAmt>0&&safeAmt>(caseLotDetail.getLong("totalAmt")-caseLotDetail.getLong("buyAmtByStarter")-caseLotDetail.getLong("buyAmtByFollower")-caseLotDetail.getLong("safeAmt"))){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "您好！此方案可保底的金额为"+((caseLotDetail.getLong("totalAmt")-caseLotDetail.getLong("buyAmtByStarter")-caseLotDetail.getLong("buyAmtByFollower")-caseLotDetail.getLong("safeAmt"))/100)+"元！");
				response.getWriter().print(obj_err);
				return ;
			}
			logger.info("参与合买认购： 订单号："+caseId+"userno="+tuserinfo.getUSERNO()+",认购金额："+amt+",保底金额："+safeAmt);
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/caselot/betCaselot?",
					"userno="+tuserinfo.getUSERNO()
					+"&amt="+amt
					+"&caseId="+caseId
					+"&safeAmt="+safeAmt
					+"&channel="+channel,"POST"));
			logger.info("参与合买认购： 订单号："+caseId+"userno="+tuserinfo.getUSERNO()+",认购金额："+amt+",保底金额："+safeAmt+"请求lottery返回结果："+obj);
			if(obj.getString("errorCode").equals("0")){
				obj_err.put("errorCode", "0");
				obj_err.put("message", "您参与的合买认购成功！");
				obj_err.put("amt", amt/100);
				obj_err.put("deposit_amount", deposit_amount/100);
				obj_err.put("url", "/rchlw/function/query/case/success_hemai.jsp?caseId="+caseId);
				response.getWriter().print(obj_err);
				logger.error("参与合买提交订单成功:"+obj_err);
				return ;
			}else{
				logger.info(obj.toString());
				obj_err.put("errorCode", "500");
				obj_err.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
				response.getWriter().print(obj_err);
				logger.error("参与合买提交订单失败:userno"+tuserinfo.getUSERNO()+obj_err);
			}
		} catch (Exception e) {
			logger.error("合买查询报错 Exception(Check out the HeMai exception of No):"+e.toString());
			e.printStackTrace();
			obj_err.put("errorCode", "500");
			obj_err.put("message", "网络异常，请稍后再试，或联系客服人员！");
			try {
				response.getWriter().print(obj_err);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			return ;
		}
	}
	
	/**
	 * 撤单
	 */
	public void cancelCaselot(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		Tuserinfo tuserinfo = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
		String caseId = request.getParameter("caseId")==null?"":request.getParameter("caseId");
		JSONObject obj_err = new JSONObject();
		try {
			if(caseId.trim().equals("")){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "参数错误！");
				response.getWriter().print(obj_err);
				return ;
			}
		
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/caselot/cancelCaselot?",
					"userno="+tuserinfo.getUSERNO()	+"&caseId="+caseId,"POST"));
			
			if(obj.getString("errorCode").equals("0")){
				obj_err.put("errorCode", "0");
				obj_err.put("message", "撤单成功！");
				response.getWriter().print(obj_err);
				return ;
			}else{
				logger.info(obj.toString());
				obj_err.put("errorCode", "500");
				obj_err.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
				response.getWriter().print(obj_err);
			}
		} catch (Exception e) {
			logger.error("合买撤单报错 Exception(Check out the HeMai divestment exception of No):"+e.toString());
			e.printStackTrace();
			obj_err.put("errorCode", "500");
			obj_err.put("message", "网络异常，请稍后再试，或联系客服人员！");
			try {
				response.getWriter().print(obj_err);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			return ;
		}
	}
	
	/**
	 * 撤资
	 */
	public void cancelCaselotbuy(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		Tuserinfo tuserinfo = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
		String caseId = request.getParameter("caseId")==null?"":request.getParameter("caseId");
		JSONObject obj_err = new JSONObject();
		try {
			if(caseId.trim().equals("")){
				obj_err.put("errorCode", "500");
				obj_err.put("message", "参数错误！");
				response.getWriter().print(obj_err);
				return ;
			}
		
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/caselot/cancelCaselotbuy?",
					"userno="+tuserinfo.getUSERNO()	+"&caseId="+caseId,"POST"));
			
			if(obj.getString("errorCode").equals("0")){
				obj_err.put("errorCode", "0");
				obj_err.put("message", "撤资成功！");
				response.getWriter().print(obj_err);
				return ;
			}else{
				logger.info(obj.toString());
				obj_err.put("errorCode", "500");
				obj_err.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
				response.getWriter().print(obj_err);
			}
		} catch (Exception e) {
			logger.error("合买撤资报错 Exception(Check out the HeMai divestment exception of No):"+e.toString());
			e.printStackTrace();
			obj_err.put("errorCode", "500");
			obj_err.put("message", "网络异常，请稍后再试，或联系客服人员！");
			try {
				response.getWriter().print(obj_err);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			return ;
		}
	}
}
