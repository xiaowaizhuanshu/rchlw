package com.ruyicai.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.bean.BetcodeBean;
import com.jrt.betcodeResolve.service.DLTResolveService;
import com.jrt.betcodeResolve.service.EEXWResolveService;
import com.jrt.betcodeResolve.service.JCResolveService;
import com.jrt.betcodeResolve.service.NMKSResolveService;
import com.jrt.betcodeResolve.service.PLSResolveService;
import com.jrt.betcodeResolve.service.PLWResolveService;
import com.jrt.betcodeResolve.service.QLCResolveService;
import com.jrt.betcodeResolve.service.QXCResolveService;
import com.jrt.betcodeResolve.service.SDResolveService;
import com.jrt.betcodeResolve.service.SSCResolveService;
import com.jrt.betcodeResolve.service.SSQResolveService;
import com.jrt.betcodeResolve.service.SYXWResolveService;
import com.jrt.betcodeResolve.service.SYYDJResolveService;
import com.jrt.betcodeResolve.service.ZCResolveService;
import com.jrt.betcodeResolve.util.Constant;
import com.jrt.betcodeResolve.util.SSCConstant;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.ruyicai.bean.BetRequest;
import com.ruyicai.bean.CaseLotRequest;
import com.ruyicai.bean.OrderRequest;
import com.ruyicai.bean.SubscribeRequest;
import com.ruyicai.bean.Tuserinfo;

public class BettingUtil {

	private static Logger logger = Logger.getLogger(BettingUtil.class);
	
	/**
	 * 代购订单投注功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param multiple 倍数
	 * @param oneMoney  大乐透投注算金额的方法
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 页面传入的玩法
	 * @param request 
	 * @return JSONObject 后台返回的内容（包括errorCode及根据errorCode获取的信息）
	 * @throws Exception
	 */
	public static JSONObject getOrderBet(String lotno, String betcode, int multiple,
			String oneMoney, Tuserinfo user,String batchCode,String wanfa,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合604@$20130528|2|001|13^$20130528|2|002|1^20130528|2|003|0^20130528|2|004|0^20130528|2|005|1^$20130528|2|006|1^
		List<BetcodeBean> list=null;
		if("400".equals(wanfa)){
			list=new ArrayList<BetcodeBean>();
			String[] betcodes=betcode.split("\\*");
			for(int i=0;i<betcodes.length;i++){
				List<BetcodeBean> onelist=getBetcodeBeanList(lotno, betcodes[i], multiple,getSuperaddition(oneMoney));
				for(BetcodeBean sta:onelist){
					list.add(sta);
				}
			}
		}else{
			 list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		}	
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");//可投注金额
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值		
		BigDecimal oneamount = new BigDecimal(0);
		
		//3.循环累加用户投注的金额获取投注的总金额及设置BetRequest类投注所需内容
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取订单总投注金额
			totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			//BigDecimal类型的倍数
			BigDecimal bd_multiple = new BigDecimal(multiple);
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple,2, BigDecimal.ROUND_DOWN).doubleValue()));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			betRequest.setBetcode(betcodeBean.getBetcode());
			betRequests.add(betRequest);
		}
		logger.info("用户要投注金额:"+totalMoney+"元;实际账户可投注余额:"+depositMoney
				+"元;投注的集合betRequests共"+betRequests.size()+"个");
		
		//4.判断用户账户中可投注的金额是否大于当前追号的金额
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCode);
			orderRequest.setAmt(new BigDecimal(String.valueOf(((long)totalMoney*100))));
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(1));
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setLotsType(new BigDecimal(getMemo2(wanfa, lotno,betcode)));//	投注类型 ，合买使用
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(null);
			orderRequest.setOneamount(oneamount);
			orderRequest.setBettype("2");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			//调用订单投注的方法
			String re=JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/bet/tobetOrder?","body="+JSONObject.fromObject(orderRequest),"POST");
			logger.info("投注请求接口以及参数"+ResourceBundleUtil.LINKURL +"/bet/tobetOrder?"+"body="+JSONObject.fromObject(orderRequest)+"请求lottery返回投注结果："+re);
			obj = JSONObject.fromObject(re);
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
		return obj;
	}
	/**
	 * 合买订单投注功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param multiple 倍数
	 * @param oneMoney  大乐透投注算金额的方法
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 页面传入的玩法
	 * @param request 
	 * @return JSONObject 后台返回的内容（包括errorCode及根据errorCode获取的信息）
	 * @throws Exception
	 */
	public static JSONObject getOrderBetHemai(String lotno, String betcode, int multiple,
			String oneMoney, Tuserinfo user,String batchCode,String wanfa,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");//可投注金额
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		BigDecimal oneamount = new BigDecimal(0);
		
		//3.循环累加用户投注的金额获取投注的总金额及设置BetRequest类投注所需内容
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取订单总投注金额
			totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			//BigDecimal类型的倍数
			BigDecimal bd_multiple = new BigDecimal(multiple);
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			betRequest.setBetcode(betcodeBean.getBetcode());
			betRequests.add(betRequest);
		}
		logger.info("用户要投注金额:"+totalMoney+"元;实际账户可投注余额:"+depositMoney
				+"元;投注的集合betRequests共"+betRequests.size()+"个");
		
		JSONObject clrJson = request.getParameter("jsonStringCLR")==null||"".equals(request.getParameter("jsonStringCLR"))?null:JSONObject.fromObject(request.getParameter("jsonStringCLR"));
		//4.判断用户账户中可投注的金额是否大于当前追号的金额
		if("hemai".equals(request.getParameter("daiGou"))&&clrJson.getLong("buyAmt")+clrJson.getLong("safeAmt")<=depositMoney){
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCode);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(1));
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setLotsType(new BigDecimal(getMemo2(wanfa, lotno,betcode)));//	投注类型 ，合买使用
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(null);
			orderRequest.setOneamount(oneamount);
			if("hemai".equals(request.getParameter("daiGou"))){
				orderRequest.setBettype("3");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
				CaseLotRequest clr = new CaseLotRequest();
				clr.toBean(clrJson);
				clr.setTotalAmt(orderRequest.getAmt().longValue());//合买总金额取投注总金额
				clr.setStarter(user.getUSERNO());
				clr.setBuyAmt(clr.getBuyAmt()*100);
				clr.setSafeAmt(clr.getSafeAmt()*100);
				clr.setMinAmt(clr.getMinAmt()*100);
				String desc = clr.getDesc();
				if(!"中".equals(clrJson.getString("isIe"))){
					desc = com.ruyicai.util.URLEncoder.decode(desc);
				}
				clr.setDesc(desc);
				orderRequest.setCaseLotRequest(clr);
			}
			//调用订单投注的方法
			
			String re=JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/caselot/caselotOrder?","body="+JSONObject.fromObject(orderRequest),"POST");
			obj = JSONObject.fromObject(re);
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
		}else{
			obj = new JSONObject();
			obj.put("errorCode", "20100710");
			obj.put("message", "您的可投注余额不足，请先充值！");
		}
		
		return obj;
	}
	
	/**
	 * 订单赠彩投注功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param multiple 倍数
	 * @param oneMoney  大乐透投注算金额的方法
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 页面传入的玩法
	 * @param request 
	 * @return JSONObject 后台返回的内容（包括errorCode及根据errorCode获取的信息）
	 * @throws Exception
	 */
	public static JSONObject getZengCaiOrderBet(String lotno, String betcode, int multiple,
			String oneMoney, Tuserinfo user,String batchCode,String wanfa,String userno,String blessing,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");//可投注金额
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		
		BigDecimal oneamount = new BigDecimal(0);
		
		//3.循环累加用户投注的金额获取投注的总金额及设置BetRequest类投注所需内容
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取订单总投注金额
			totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			//BigDecimal类型的倍数
			BigDecimal bd_multiple = new BigDecimal(multiple);
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			betRequest.setBetcode(betcodeBean.getBetcode());
			betRequests.add(betRequest);
		}
		logger.info("用户要投注金额:"+totalMoney+"元;实际账户可投注余额:"+depositMoney
				+"元;投注的集合betRequests共"+betRequests.size()+"个");
		
		//4.判断用户账户中可投注的金额是否大于当前追号的金额
//		if(totalMoney <= depositMoney){
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCode);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));
			orderRequest.setUserno(userno);
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(1));
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setLotsType(new BigDecimal(getMemo2(wanfa, lotno,betcode)));//	投注类型 ，合买使用
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(null);
			orderRequest.setOneamount(oneamount);
			orderRequest.setReciverMobile(user.getMOBILEID());
			
			if("zengcai".equals(request.getParameter("daiGou"))){
				if(userno.equals(user.getUSERNO())){
					//用户自购不发短信
					orderRequest.setBettype("2");
					orderRequest.setBlessing(blessing);
				}else{
					orderRequest.setBettype("4");
					orderRequest.setBlessing(blessing);
				}
			}else{
				orderRequest.setBettype("2");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			}
			//调用订单投注的方法
			String re=JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/present/savepresent?","body="+JSONObject.fromObject(orderRequest),"POST");
			obj = JSONObject.fromObject(re);
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
		return obj;
	}
	
	/**
	 * 订单追号的功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param batchnum 注数
	 * @param multiple 倍数
	 * @param oneMoney 大乐透追加的标识
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 玩法
	 * @param request 请求
	 * @return JSONObject 后台返回的内容
	 * @throws Exception
	 */
	public static JSONObject getSubscribeOrder(String lotno, String betcode,String batchnum, 
			int multiple,String oneMoney, Tuserinfo user,String batchCode,String wanfa,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		//List<BetRequest> listSaleid = getSaleid(wanfa, lotno);
		
		BigDecimal oneamount = new BigDecimal(0);
		
		//BigDecimal类型的倍数
		BigDecimal bd_multiple = new BigDecimal(multiple);
		
		//3.循环累加用户投注的金额获取投注的总金额
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取总投注金额和总注数
			totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			
	
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			
			if(lotno.startsWith("F")){
				betRequest.setBetcode(betcodeBean.getBetcode().substring(0,2)+"01"+betcodeBean.getBetcode().substring(4));
			}else{
				betRequest.setBetcode(betcodeBean.getBetcode());
			}
			betRequests.add(betRequest);
		}
			
	    //4.循环期数算得需要追号的期号并设置期号、倍数及金额传给lottery后台2011
		JSONArray tlotctrl = JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/select/getAfterIssue?lotno="+lotno+"&num="+batchnum)).getJSONArray("value");
		List<SubscribeRequest> subscribeRequests=new ArrayList<SubscribeRequest>();
		SubscribeRequest subscribeRequest = null;
		for(int i=0;i<Integer.parseInt(batchnum);i++){
			//循环获取该订单追号的每注金额及每注注码及追号的期数
			subscribeRequest = new SubscribeRequest();
			subscribeRequest.setBatchcode(tlotctrl.getJSONObject(i).getJSONObject("id").getString("batchcode"));
			subscribeRequest.setAmt(new BigDecimal(totalMoney*100));
			subscribeRequest.setLotmulti(new BigDecimal(multiple));
			subscribeRequest.setEndtime(1313477552255l);//官方截至时间，随便传个参数，到时有必要再做处理
			subscribeRequests.add(subscribeRequest);
		}
		
		
		//5.判断用户账户中可投注的金额是否大于当前追号的金额
		if(totalMoney <= depositMoney){
			
			//根据追号的总金额=投注的总金额*期数
			totalMoney = totalMoney*Integer.parseInt(batchnum);
			logger.info("用户要投注金额:"+totalMoney+";追号期数:"+batchnum+";总注数:"+totalBetnum+";实际账户可投注余额:"+depositMoney
					+";追号的集合subscribeRequests:"+subscribeRequests.size());
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCode);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));//追号的总金额以分为单位
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(1));//1是一次性付款 0是未付款（现在追号都是一次性付款）
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(subscribeRequests);
			orderRequest.setBettype("0");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			orderRequest.setOneamount(oneamount);
			//调用订单追号的方法
			obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/bet/subscribeOrder?","body="+JSONObject.fromObject(orderRequest),"POST"));
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
			
		}else{
			obj = new JSONObject();
			obj.put("errorCode", "20100710");
			obj.put("message", "您的可投注余额不足，请先充值！");
		}
		return obj;
	}
	/**
	 * 订单追号的功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param batchnum 注数
	 * @param multiple 倍数
	 * @param oneMoney 大乐透追加的标识
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 玩法
	 * @param allMoney 追号总金额
	 * @param payType 扣款方式
	 * @param payStopInt 中奖后停止追号方式
	 * @param request 请求
	 * @return JSONObject 后台返回的内容
	 * @throws Exception
	 */
	public static JSONObject getSubscribeOrderByGaopin(String lotno, String betcode,String batchnum, 
			int multiple,String oneMoney, Tuserinfo user,String batchCode,String wanfa,String allMoney,
			int payType,int smsType,int payStopInt,String desc,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		//List<BetRequest> listSaleid = getSaleid(wanfa, lotno);
		
		BigDecimal oneamount = new BigDecimal(0);
		
		//BigDecimal类型的倍数
		BigDecimal bd_multiple = new BigDecimal(multiple);
		
		//3.循环累加用户投注的金额获取投注的总金额
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取总投注金额和总注数
			totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			
			if(lotno.startsWith("F")){
				betRequest.setBetcode(betcodeBean.getBetcode().substring(0,2)+"01"+betcodeBean.getBetcode().substring(4));
			}else{
				betRequest.setBetcode(betcodeBean.getBetcode());
			}
			betRequests.add(betRequest);
		}
		
		//4.循环期数算得需要追号的期号并设置期号、倍数及金额传给lottery后台2011
		JSONArray tlotctrl = JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/select/getAfterIssue?lotno="+lotno+"&num="+batchnum)).getJSONArray("value");

		List<SubscribeRequest> subscribeRequests=new ArrayList<SubscribeRequest>();
		SubscribeRequest subscribeRequest = null;
		String batchCodeStr = "";
		String[] qihaoStrarry = null;
    	if(batchCode.indexOf("#")>-1){
    		qihaoStrarry = batchCode.split("#");
    		batchCodeStr = qihaoStrarry[0].split(",")[0];
    	}
    	
		if(qihaoStrarry != null && qihaoStrarry.length > 0 ){
			int qishibaishu= Integer.parseInt(qihaoStrarry[0].indexOf(",")<0?"1":qihaoStrarry[0].split(",")[1]);
			for(int i=0;i<qihaoStrarry.length;i++){
				//循环获取该订单追号的每注金额及每注注码及追号的期数
				subscribeRequest = new SubscribeRequest();
				subscribeRequest.setBatchcode(qihaoStrarry[i].indexOf(",")<0?"0":qihaoStrarry[i].split(",")[0]);
				int baishu= Integer.parseInt(qihaoStrarry[i].indexOf(",")<0?"0":qihaoStrarry[i].split(",")[1]);
				subscribeRequest.setAmt(new BigDecimal(totalMoney/qishibaishu*100*baishu));
				subscribeRequest.setLotmulti(new BigDecimal(qihaoStrarry[i].indexOf(",")<0?"":qihaoStrarry[i].split(",")[1]));
				subscribeRequest.setDesc(qihaoStrarry[i].split(",")[2]);
				subscribeRequest.setEndtime(new Long(qihaoStrarry[i].split(",")[3]==null||qihaoStrarry[i].split(",")[3].equals("null")?"0":qihaoStrarry[i].split(",")[3]));
				subscribeRequests.add(subscribeRequest);
			}
		}
		else{
			for(int i=0;i<Integer.parseInt(batchnum);i++){
				//循环获取该订单追号的每注金额及每注注码及追号的期数
				subscribeRequest = new SubscribeRequest();
				subscribeRequest.setBatchcode(tlotctrl.getJSONObject(i).getJSONObject("id").getString("batchcode"));
				subscribeRequest.setAmt(new BigDecimal(totalMoney*100));
				subscribeRequest.setLotmulti(new BigDecimal(multiple));
				subscribeRequests.add(subscribeRequest);
			}
		}
		
		//5.判断用户账户中可投注的金额是否大于当前追号的金额
		if(totalMoney <= depositMoney){
			
			//根据追号的总金额=投注的总金额*期数
			totalMoney = Integer.parseInt(allMoney);
			logger.info("用户要投注金额:"+totalMoney+";追号期数:"+batchnum+";总注数:"+totalBetnum+";实际账户可投注余额:"+depositMoney
					+";追号的集合subscribeRequests:"+subscribeRequests.size());
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCodeStr);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));//追号的总金额以分为单位
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(payType));//1是一次性付款 0是未付款（现在追号都是一次性付款）
			orderRequest.setPrizeend(new BigDecimal(payStopInt));//中奖后停止 追号 0.不停止，1.停止
			orderRequest.setAccountnomoneysms(new BigDecimal(smsType));//余额不足 短信提醒 0.不提醒，1.提醒
			orderRequest.setDesc(desc);//用户设置的收益率
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(subscribeRequests);
			orderRequest.setBettype("0");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			orderRequest.setOneamount(oneamount);
			//调用订单追号的方法
			obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/bet/subscribeOrder?","body="+URLEncoder.encode(JSONObject.fromObject(orderRequest).toString(),"UTF-8"),"POST"));
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
			
		}else{
			obj = new JSONObject();
			obj.put("errorCode", "20100710");
			obj.put("message", "您的可投注余额不足，请先充值！");
		}
		return obj;
	}
	/**
	 * 订单追号的功能
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param batchnum 注数
	 * @param multiple 倍数
	 * @param oneMoney 大乐透追加的标识
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 玩法
	 * @param allMoney 追号总金额
	 * @param payType 扣款方式
	 * @param payStopInt 中奖后停止追号方式
	 * @param request 请求
	 * @return JSONObject 后台返回的内容
	 * @throws Exception
	 */
	public static JSONObject getSubscribeOrderByDipin(String lotno, String betcode,String batchnum, 
			int multiple,String oneMoney, Tuserinfo user,String[] batchCode,String wanfa,String allMoney,
			int payType,int smsType,int payStopInt,String desc,int danqiJIangjinInt,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		BigDecimal oneamount = new BigDecimal(0);
		
		//BigDecimal类型的倍数
		BigDecimal bd_multiple = new BigDecimal(multiple);
		
		//3.循环累加用户投注的金额获取投注的总金额
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取总投注金额和总注数
			//totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			
			if(lotno.startsWith("F")){
				betRequest.setBetcode(betcodeBean.getBetcode().substring(0,2)+"01"+betcodeBean.getBetcode().substring(4));
			}else{
				betRequest.setBetcode(betcodeBean.getBetcode());
			}
			betRequests.add(betRequest);
		}
		
		List<SubscribeRequest> subscribeRequests=new ArrayList<SubscribeRequest>();
		SubscribeRequest subscribeRequest = null;
		String batchCodeStr = "";

		if(batchCode != null && batchCode.length > 0 ){
			totalMoney = 0;
			for(int i=0;i<batchCode.length;i++){
				String batchcodeArrey = batchCode[i];
				if(i==0){
					batchCodeStr = batchcodeArrey.split("_")[0];
				}
				int totalMoneyItem =  Integer.parseInt(batchcodeArrey.split("_")[2]);
				totalMoney += totalMoneyItem;
				//循环获取该订单追号的每注金额及每注注码及追号的期数
				subscribeRequest = new SubscribeRequest();
				subscribeRequest.setBatchcode(batchcodeArrey.split("_")[0]);
				subscribeRequest.setAmt(new BigDecimal(Integer.parseInt(batchcodeArrey.split("_")[2]) * 100));
				subscribeRequest.setLotmulti(new BigDecimal(batchcodeArrey.split("_")[1]));
				subscribeRequest.setDesc(totalMoney+"_"+batchcodeArrey.split("_")[1]+"_0");//做解析已追金额使用,每期倍数
				subscribeRequest.setEndtime(1313477552255l);//暂时写死 
				subscribeRequests.add(subscribeRequest);
				
			}
		}
		//5.判断用户账户中可投注的金额是否大于当前追号的金额
		if(Integer.parseInt(allMoney) <= depositMoney){
			
			//根据追号的总金额=投注的总金额*期数
			logger.info("用户要投注金额:"+totalMoney+";追号期数:"+batchnum+";总注数:"+totalBetnum+";实际账户可投注余额:"+depositMoney
					+";追号的集合subscribeRequests:"+subscribeRequests.size());
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCodeStr);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));//追号的总金额以分为单位
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(payType));//1是一次性付款 0是未付款（现在追号都是一次性付款）
			orderRequest.setPrizeend(new BigDecimal(payStopInt));//中奖后停止 追号 0.不停止，1.停止
			orderRequest.setAccountnomoneysms(new BigDecimal(smsType));//余额不足 短信提醒 0.不提醒，1.提醒
			orderRequest.setDesc(desc);//用户设置的收益率
			orderRequest.setPrizeendamt(new BigDecimal(danqiJIangjinInt*100));//单期奖金 中奖停止条件
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(subscribeRequests);
			orderRequest.setBettype("0");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			orderRequest.setOneamount(oneamount);
			if(Integer.parseInt(batchnum)>=10){
				orderRequest.setEndsms(new BigDecimal("1"));
			}else{
				orderRequest.setEndsms(new BigDecimal("0"));
			}
			String url= ResourceBundleUtil.LINKURL +"/bet/subscribeOrder?body="+JSONObject.fromObject(orderRequest).toString();
			//调用订单追号的方法
			obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/bet/subscribeOrder?","body="+URLEncoder.encode(JSONObject.fromObject(orderRequest).toString(),"UTF-8"),"POST"));
			if(!obj.isNullObject()){
				obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
			
		}else{
			obj = new JSONObject();
			obj.put("errorCode", "20100710");
			obj.put("message", "您的可投注余额不足，请先充值！");
		}
		return obj;
	}
	
	
	
	/**
	 * 订单追号的功能（追号包年套餐活动）
	 * @param lotno 彩种
	 * @param betcode 注码
	 * @param batchnum 注数
	 * @param multiple 倍数
	 * @param oneMoney 大乐透追加的标识
	 * @param user 用户
	 * @param batchCode 期号
	 * @param wanfa 玩法
	 * @param allMoney 追号总金额
	 * @param payType 扣款方式
	 * @param payStopInt 中奖后停止追号方式
	 * @param request 请求
	 * @return JSONObject 后台返回的内容
	 * @throws Exception
	 */
	public static JSONObject getSubscribeOrderByDipinToAllYears(String lotno, String betcode,String batchnum, 
			int multiple,String oneMoney, Tuserinfo user,String[] batchCode,String wanfa,String allMoney,
			int payType,int smsType,int payStopInt,String desc,int danqiJIangjinInt,
			HttpServletRequest request) throws Exception{
		JSONObject obj  = null;
		
		//1.根据彩种、注码、倍数调用算注数和金额的方法获取共有几张票得集合
		
		List<BetcodeBean> list = getBetcodeBeanList(lotno, betcode, multiple,getSuperaddition(oneMoney));
		logger.info("要投注的注码一共有" + list.size() + "张彩票");
		
		//2.调用查询账户余额获取用户账号的可投注金额
		JSONObject objBalance = CommonUtil.fiandBalance(request);
		double depositMoney = objBalance.getDouble("balance");
		
		int totalMoney = 0;int totalBetnum =0;
		List<BetRequest> betRequests=new ArrayList<BetRequest>();
		BetRequest betRequest = null;
		//获取传入的彩种和玩法算得销售代码值
		//List<BetRequest> listSaleid = getSaleid(wanfa, lotno);
		
		BigDecimal oneamount = new BigDecimal(0);
		
		//BigDecimal类型的倍数
		BigDecimal bd_multiple = new BigDecimal(multiple);
		
		//3.循环累加用户投注的金额获取投注的总金额
		for(int i=0;i<list.size();i++){
			BetcodeBean betcodeBean = (BetcodeBean)list.get(i);
			//获取总投注金额和总注数
			//totalMoney += Integer.parseInt(betcodeBean.getTotalMoney());
			totalBetnum += Integer.parseInt(betcodeBean.getZhushu());
			
			
			//获取订单的每注金额及每注注码及追号的期数
			betRequest = new BetRequest();
			betRequest.setAmt(new BigDecimal(betcodeBean.getTotalMoneyFen()).divide(bd_multiple));
			if(i==0){
				oneamount = new BigDecimal(Long.valueOf(betcodeBean.getTotalMoneyFen())/Long.valueOf(betcodeBean.getZhushu())/Long.valueOf(betcodeBean.getMultiple()));
			}
			
			if(lotno.startsWith("F")){
				betRequest.setBetcode(betcodeBean.getBetcode().substring(0,2)+"01"+betcodeBean.getBetcode().substring(4));
			}else{
				betRequest.setBetcode(betcodeBean.getBetcode());
			}
			betRequests.add(betRequest);
		}
		
		List<SubscribeRequest> subscribeRequests=new ArrayList<SubscribeRequest>();
		SubscribeRequest subscribeRequest = null;
		String batchCodeStr = "";

		if(batchCode != null && batchCode.length > 0 ){
			totalMoney = 0;
			for(int i=0;i<batchCode.length;i++){
				String batchcodeArrey = batchCode[i];
				if(i==0){
					batchCodeStr = batchcodeArrey.split("_")[0];
				}
				int totalMoneyItem =  Integer.parseInt("2");
				totalMoney += totalMoneyItem;
				//循环获取该订单追号的每注金额及每注注码及追号的期数
				subscribeRequest = new SubscribeRequest();
				subscribeRequest.setBatchcode(batchcodeArrey.split("_")[0]);
				subscribeRequest.setAmt(new BigDecimal(Integer.parseInt("2") * 100));
				subscribeRequest.setLotmulti(new BigDecimal(batchcodeArrey.split("_")[1]));
				subscribeRequest.setDesc(totalMoney+"_"+batchcodeArrey.split("_")[1]+"_0");//做解析已追金额使用,每期倍数
				subscribeRequest.setEndtime(1313477552255l);//暂时写死 
				subscribeRequests.add(subscribeRequest);
				
			}
		}
	
		
		//5.判断用户账户中可投注的金额是否大于当前追号的金额
		if(Integer.parseInt(allMoney) <= depositMoney){
			
			//根据追号的总金额=投注的总金额*期数
			//totalMoney = Integer.parseInt(allMoney);
			logger.info("用户要投注金额:"+totalMoney+";追号期数:"+batchnum+";总注数:"+totalBetnum+";实际账户可投注余额:"+depositMoney
					+";追号的集合subscribeRequests:"+subscribeRequests.size());
			//设置订单类传给lottery后台
			OrderRequest orderRequest = new OrderRequest();
			orderRequest.setLotno(lotno);
			orderRequest.setBatchcode(batchCodeStr);
			orderRequest.setAmt(new BigDecimal(totalMoney*100));//追号的总金额以分为单位
			orderRequest.setUserno(user.getUSERNO());
			orderRequest.setLotmulti(new BigDecimal(multiple));
			orderRequest.setBuyuserno(user.getUSERNO());
			orderRequest.setChannel((String)request.getSession().getAttribute("CHANNEL"));
			orderRequest.setSubchannel(ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			orderRequest.setPaytype(new BigDecimal(payType));//1是一次性付款 0是未付款（现在追号都是一次性付款）
			orderRequest.setPrizeend(new BigDecimal(payStopInt));//中奖后停止 追号 0.不停止，1.停止
			orderRequest.setAccountnomoneysms(new BigDecimal(smsType));//余额不足 短信提醒 0.不提醒，1.提醒
			orderRequest.setDesc(desc);//用户设置的收益率
			orderRequest.setPrizeendamt(new BigDecimal(danqiJIangjinInt*100));//单期奖金 中奖停止条件
			orderRequest.setMemo(getMemo(wanfa, lotno,betcode));
			orderRequest.setBetRequests(betRequests);
			orderRequest.setSubscribeRequests(subscribeRequests);
			orderRequest.setBettype("0");//zhuihao(0), taocan(1), touzhu(2),hemai(3),zengsong(4),zengsong_nosms(5);
			orderRequest.setOneamount(oneamount);
			orderRequest.setCancancel(new BigDecimal("1"));
			if(Integer.parseInt(batchnum)>=10){
				orderRequest.setEndsms(new BigDecimal("1"));
			}else{
				orderRequest.setEndsms(new BigDecimal("0"));
			}
			
			//调用订单追号的方法
			/*2012.1.18双色球全年追号套餐活动截止，切换接口
			obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.ACTIONCENTERURL +"/action/addNumOneYear?","body="+URLEncoder.encode(JSONObject.fromObject(orderRequest).toString(),"UTF-8"),"POST"));
			*/
			obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage( ResourceBundleUtil.LINKURL +"/bet/subscribeOrder?","body="+URLEncoder.encode(JSONObject.fromObject(orderRequest).toString(),"UTF-8"),"POST"));
			if(!obj.isNullObject()){
				if(obj.getString("value").isEmpty()){
					obj.put("message", ErrorCode.getMemo(obj.getString("errorCode")));
				}else{
					obj.put("message", obj.getString("value"));
				}
			}else{
				obj.put("message", MessageUtil.ERROR_Message);
			}
			
		}else{
			obj = new JSONObject();
			obj.put("errorCode", "20100710");
			obj.put("message", "您的可投注余额不足，请先充值！");
		}
		return obj;
	}
		
	
	
	/**
	 * 
	 * 根据onMoney获取大乐透是否追加
	 * @param oneMoney 追加标识
	 * @return  追加为true 否则为false
	 */
	public static boolean getSuperaddition(String oneMoney){
		boolean superaddition = false;
		if(oneMoney.trim().equals("3")){ 
			superaddition=true;
		}
		return  superaddition;
	}
	
	/**
	 * 
	 * 拆分玩法匹配传入的玩法，匹配不同的设置为多方案
	 * @param wanfa 玩法
	 * @param lotno 彩种
	 * @param betcode 
	 * @return 返回方案
	 */
	public static String getMemo(String wanfa,String lotno, String betcode){
		String memo = "";
		String wanfas[];
		if(lotno.equals(Constant.JCZQ_RSPF)||lotno.equals(Constant.JCZQ_SPF) || lotno.equals(Constant.JCZQ_ZJQ) || lotno.equals(Constant.JCZQ_BF) || lotno.equals(Constant.JCZQ_BSF)){
			wanfas = wanfa.split("-");
		}else{
			wanfas= wanfa.split("\\+");
		}
		//拆分玩法匹配传入的玩法，匹配不同的设置为多方案
		for(int i=0;i<wanfas.length;i++){
			String rex = "^"+wanfas[i]+"*$";
			Pattern pattern=Pattern.compile(rex);
			Matcher matcher=pattern.matcher(wanfas[0]);
			if(matcher.matches()){
				JSONObject  obj = getLotnoBetType(wanfas[0], lotno,betcode);//获取memo值
				memo = obj.getString("memo");
			}else{
				memo="多方案";break;
			}
		}
		return memo;
	}
	/**
	 * 
	 * 拆分玩法匹配传入的玩法，匹配不同的设置为多方案
	 * @param wanfa 玩法
	 * @param lotno 彩种
	 * @param betcode 
	 * @return 返回方案
	 */
	public static int getMemo2(String wanfa,String lotno, String betcode){
		int memo = 0;
		String wanfas[];
		if(lotno.equals(Constant.JCZQ_RSPF)||lotno.equals(Constant.JCZQ_SPF)||lotno.equals(Constant.JCZQ_ZJQ)||lotno.equals(Constant.JCZQ_BF)||lotno.equals(Constant.JCZQ_BSF)){
			wanfas = wanfa.split("-");
		}else{
			wanfas = wanfa.split("\\+");
		}
		//拆分玩法匹配传入的玩法，匹配不同的设置为多方案
		for(int i=0;i<wanfas.length;i++){
			String rex = "^"+wanfas[i]+"*$";
			Pattern pattern=Pattern.compile(rex);
			Matcher matcher=pattern.matcher(wanfas[0]);
			if(matcher.matches()){
				JSONObject  obj = getLotnoBetType2(wanfas[0], lotno,betcode);//获取memo值
				memo = obj.getInt("memo");
			}else{
				memo=3;break;
			}
		}
		return memo;
	}
	/**
	 * 根据彩种判断玩法
	 * @param wanfa 玩法
	 * @param lotno 彩种
	 * @return 返回玩法
	 */
	public static JSONObject getLotnoBetType(String wanfa,String lotno,String betcode){
		JSONObject obj = new JSONObject();
		String memo ="";
		String saleid="";
		if(Constant.SSQ.equals(lotno)){//双色球
			if(Constant.SSQ_RSBS.equals(wanfa)){
				saleid = "1"; memo = "单式";
			}else if(Constant.SSQ_RMBS.equals(wanfa)){//红复蓝单
				saleid = "2"; memo = "复式";
			}else if(Constant.SSQ_RSBM.equals(wanfa)){//红单蓝复
				saleid = "3"; memo = "复式";
			}else if(Constant.SSQ_RMBM.equals(wanfa)){//红复蓝复
				saleid = "4"; memo = "复式";
			}else if(Constant.SSQ_RTBS.equals(wanfa)){//红胆拖蓝单
				saleid = "5"; memo = "胆拖";
			}else if(Constant.SSQ_RTBM.equals(wanfa)){//红胆拖蓝复
				saleid = "6"; memo = "胆拖";
			}else{
				saleid = "1"; memo="单式上传";
			}
		}else if(Constant.SD.equals(lotno)){//福彩3D
			if(Constant.SD_ZXDS.equals(wanfa)){
				saleid = "1"; memo = "直选单式";
			}else if(Constant.SD_Z3DS.equals(wanfa)){
				saleid = "1"; memo = "组3单式";
			}else if(Constant.SD_Z6DS.equals(wanfa)){
				saleid = "1"; memo = "组6单式";
			}else if(Constant.SD_ZXHZ.equals(wanfa)){
				saleid = "3"; memo = "直选和值";
			}else if(Constant.SD_ZSHZ.equals(wanfa)){
				saleid = "4"; memo = "组3和值";
			}else if(Constant.SD_ZLHZ.equals(wanfa)){
				saleid = "5"; memo = "组6和值";
			}else if(Constant.SD_WXTZ.equals(wanfa)){
				saleid = "9"; memo = "直选复式";
			}else if(Constant.SD_Z3FS.equals(wanfa)){
				saleid = "11"; memo = "组3复式";
			}else if(Constant.SD_Z6FS.equals(wanfa)){
				saleid = "12"; memo = "组6复式";
			}else if(Constant.SD_DXDFS.equals(wanfa)){
				saleid = "14"; memo = "直选包号";
			}else if(Constant.SD_DTFS.equals(wanfa)){
				saleid = "22"; memo = "胆拖复式";//单选单胆拖
			}else{
				saleid = "1"; memo="单式上传";
			}
		}else if(Constant.QLC.equals(lotno)){//七乐彩
			if(Constant.QLC_ZXDS.equals(wanfa)){
				saleid = "1"; memo = "单式";
			}else if(Constant.QLC_ZXFS.equals(wanfa)){
				saleid = "2"; memo = "复式";
			}else if(Constant.QLC_ZXDT.equals(wanfa)){
				saleid = "3"; memo = "胆拖";
			}else{
				saleid = "1"; memo="单式上传";
			}
		}else if(Constant.PLS.equals(lotno)){//排列三
			if((Constant.PLS_ZHX+"0").equals(wanfa)){
				saleid = "0"; memo = "直选单式";
			}else if((Constant.PLS_ZHX+"1").equals(wanfa)){
				saleid = "1"; memo = "直选复式";
			}else if(Constant.PLS_ZHXHZ.equals(wanfa)){
				saleid = "2"; memo = "直选和值";
			}else if((Constant.PLS_ZX+"30").equals(wanfa)){
				saleid = "3"; memo = "组三单式";
			}else if((Constant.PLS_ZX).equals(wanfa)){
				saleid = "3"; memo = "组三单式";
			}else if((Constant.PLS_ZX+"31").equals(wanfa)){
				saleid = "5"; memo = "组三复式";
			}else if((Constant.PLS_ZX+"60").equals(wanfa)){
				saleid = "3"; memo = "组六单式";
			}else if((Constant.PLS_ZX+"61").equals(wanfa)){
				saleid = "4"; memo = "组六复式";
			}else if(Constant.PLS_ZXHZ.equals(wanfa)){
				saleid = "6"; memo = "组选和值";
			}else if(Constant.PLS_ZSHZ.equals(wanfa)){
				saleid = "6"; memo = "组三和值";
			}else if(Constant.PLS_ZLHZ.equals(wanfa)){
				saleid = "6"; memo = "组六和值";
			}else if(Constant.PLS_ZSBH.equals(wanfa)){
				saleid = "6"; memo = "组三包号";
			}else if(Constant.PLS_ZLBH.equals(wanfa)){
				saleid = "6"; memo = "组六包号";
			}else if("dssc_zx".equals(wanfa) ){
				saleid = "0"; memo="单式上传";
			}else if("dssc_zs".equals(wanfa) || "dssc_zl".equals(wanfa)){
				saleid = "3"; memo="单式上传";
			}
		}else if(Constant.DLT.equals(lotno) || Constant.PLW.equals(lotno) 
				|| Constant.QXC.equals(lotno)//大乐透、排列五、七星彩、
				|| Constant.SFC14.equals(lotno)|| Constant.SFC9.equals(lotno)
				|| Constant.JQC.equals(lotno) || Constant.BQC.equals(lotno)){//胜负彩、任九场、进球彩、半全场
			if(Constant.DLT_DS.equals(wanfa)){
				saleid = "0"; memo = "单式";
			}else if(Constant.DLT_FS.equals(wanfa)){
				saleid = "1"; memo = "复式";
			}else if(Constant.DLT_DT.equals(wanfa)){
				saleid = "2"; memo = "胆拖";
			}else if((Constant.DLT_SXL+"0").equals(wanfa)){
				saleid = "3"; memo = "单式";
			}else if((Constant.DLT_SXL+"1").equals(wanfa)){
				saleid = "4"; memo = "复式";
			}else{
				saleid = "0"; memo="单式上传";
			}
		}else if(SSCConstant.SSC.equals(lotno)){//时时彩
			if((SSCConstant.SSC_WX+"0").equals(wanfa)){
				saleid = "5D"; memo = "五星直选";
			}else if((SSCConstant.SSC_WX+"1").equals(wanfa)){
				saleid = "5D"; memo = "五星直选";
			}else if((SSCConstant.SSC_SX+"0").equals(wanfa)){
				saleid = "3D"; memo = "三星直选";
			}else if((SSCConstant.SSC_SX+"1").equals(wanfa)){
				saleid = "3D"; memo = "三星直选";
			}else if((SSCConstant.SSC_RX+"0").equals(wanfa)){
				saleid = "2D"; memo = "二星直选";
			}else if((SSCConstant.SSC_RX+"1").equals(wanfa)){
				saleid = "2D"; memo = "二星直选";
			}else if((SSCConstant.SSC_YX+"0").equals(wanfa)){
				saleid = "1D"; memo = "一星";
			}else if((SSCConstant.SSC_YX+"1").equals(wanfa)){
				saleid = "1D"; memo = "一星";
			}else if((SSCConstant.SSC_WXTX+"0").equals(wanfa)){
				saleid = "5T"; memo = "五星通选";
			}else if((SSCConstant.SSC_WXTX+"1").equals(wanfa)){
				saleid = "5T"; memo = "五星通选";
			}else if(SSCConstant.SSC_EXFXHZ.equals(wanfa)){
				saleid = "H2"; memo = "二星直选和值";
			}else if(SSCConstant.SSC_EXZXHZ.equals(wanfa)){
				saleid = "S2"; memo = "二星组选和值";
			}else if(SSCConstant.SSC_DXDS.equals(wanfa)){
				saleid = "DD"; memo = "大小单双";
			}else if((SSCConstant.SSC_EXZXFS+"0").equals(wanfa)||SSCConstant.SSC_EXZXFS.equals(wanfa)){
				saleid = "F2"; memo = "二星组选";
			}
		}else if(Constant.SYXW.equals(lotno)){//江西11选5
			if((Constant.SYXW_RX+"1").equals(wanfa)){
				saleid = "R1"; memo = "任选一";
			}else if((Constant.SYXW_RX+"2").equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					saleid = "R2"; memo = "任选二胆拖";;
				}else{
					saleid = "R2"; memo = "任选二复式";}
				
			}else if((Constant.SYXW_RX+"3").equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					saleid = "R3"; memo = "任选三胆拖";;
				}else{
					saleid = "R3"; memo = "任选三复式";}
			}else if((Constant.SYXW_RX+"4").equals(wanfa)){
				saleid = "R4"; memo = "任选四";
			}else if((Constant.SYXW_RX+"5").equals(wanfa)){
				saleid = "R5"; memo = "任选五";
			}else if((Constant.SYXW_RX+"6").equals(wanfa)){
				saleid = "R6"; memo = "任选六";
			}else if((Constant.SYXW_RX+"7").equals(wanfa)){
				saleid = "R7"; memo = "任选七";
			}else if((Constant.SYXW_RX+"8").equals(wanfa)){
				saleid = "R8"; memo = "任选八";
			}else if(Constant.SYXW_QX2.equals(wanfa)){
				saleid = "Q2"; memo = "选前二直选";
			}else if(Constant.SYXW_QX3.equals(wanfa)){
				saleid = "Q3"; memo = "选前三直选";
			}else if(Constant.SYXW_ZX2.equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					saleid = "Z2"; memo = "选前二组选胆拖";
				}else{
				saleid = "Z2"; memo = "选前二组选复式";}
			}else if(Constant.SYXW_ZX3.equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					saleid = "Z3"; memo = "选前三组选胆拖";
				}else{
					saleid = "Z3"; memo = "选前三组选复式";}
			}
			}else if(Constant.SYYDJ.equals(lotno)){//十一运夺金
				if("101".equals(wanfa)){
					saleid = "101"; memo = "任选一";
				}else if("121".equals(wanfa)){
					saleid = "121"; memo = "任选二胆拖";;
				}else if("102".equals(wanfa)){
					saleid = "102"; memo = "任选二复式";
				}else if("111".equals(wanfa)){
					saleid = "111"; memo = "任选二单式";
				}else if("122".equals(wanfa)){
					saleid = "122"; memo = "任选三胆拖";;
				}else if("103".equals(wanfa)){
					saleid = "103"; memo = "任选三复式";
				}else if("112".equals(wanfa)){
					saleid = "112"; memo = "任选三单式";
				}else if("104".equals(wanfa)){
					saleid = "104"; memo = "任选四复式";
				}else if("113".equals(wanfa)){
					saleid = "113"; memo = "任选四单式";
				}else if("123".equals(wanfa)){
					saleid = "123"; memo = "任选四胆拖";
				}else if("105".equals(wanfa)){
					saleid = "105"; memo = "任选五复式";
				}else if("114".equals(wanfa)){
					saleid = "114"; memo = "任选五单式";
				}else if("124".equals(wanfa)){
					saleid = "124"; memo = "任选五胆拖";
				}else if("106".equals(wanfa)){
					saleid = "106"; memo = "任选六复式";
				}else if("115".equals(wanfa)){
					saleid = "115"; memo = "任选六单式";
				}else if("125".equals(wanfa)){
					saleid = "125"; memo = "任选六胆拖";
				}else if("116".equals(wanfa)){
					saleid = "116"; memo = "任选七单式";
				}else if("107".equals(wanfa)){
					saleid = "107"; memo = "任选七复式";
				}else if("126".equals(wanfa)){
					saleid = "126"; memo = "任选七胆拖";
				}else if("117".equals(wanfa)){
					saleid = "R8"; memo = "任选八";
				}else if("141".equals(wanfa)){
					saleid = "141"; memo = "选前二直选单式";
				}else if("142".equals(wanfa)){
					saleid = "142"; memo = "选前二直选定位复式";
				}else if("161".equals(wanfa)){
					saleid = "161"; memo = "选前三直选单式";
				}else if("162".equals(wanfa)){
					saleid = "162"; memo = "选前三直选定位复式";
				}else if("131".equals(wanfa)){
					saleid = "131"; memo = "选前二组选单式";
				}else if("133".equals(wanfa)){
					saleid = "133"; memo = "选前二组选胆拖";
				}else if("108".equals(wanfa)){
					saleid = "108"; memo = "选前二组选复式";
				}else if("151".equals(wanfa)){
					saleid = "151"; memo = "选前三组选单式";
				}else if("153".equals(wanfa)){
					saleid = "153"; memo = "选前三组选胆拖";
				}else if("109".equals(wanfa)){
					saleid = "109"; memo = "选前三组选复式";
				}
			}else if(Constant.JCLQ_HH.equals(lotno)||Constant.JCZQ_HH.equals(lotno)||Constant.JCZQ_SPF.equals(lotno)||Constant.JCZQ_RSPF.equals(lotno)||Constant.JCZQ_ZJQ.equals(lotno)||Constant.JCZQ_BF.equals(lotno)||Constant.JCZQ_BSF.equals(lotno)||Constant.JCLQ_SF.equals(lotno)||Constant.JCLQ_RFSF.equals(lotno)||Constant.JCLQ_DXF.equals(lotno)){//竞彩足球胜平负
				if("500".equals(wanfa)){
					saleid = "500"; memo = "单关";
				}else if("502".equals(wanfa)){
					saleid = "502"; memo = "2串1";;
				}else if("503".equals(wanfa)){
					saleid = "503"; memo = "3串1";
				}else if("504".equals(wanfa)){
					saleid = "504"; memo = "4串1";
				}else if("505".equals(wanfa)){
					saleid = "505"; memo = "5串1";;
				}else if("506".equals(wanfa)){
					saleid = "506"; memo = "6串1";
				}else if("507".equals(wanfa)){
					saleid = "507"; memo = "7串1";
				}else if("508".equals(wanfa)){
					saleid = "508"; memo = "8串1";
				}else if("509".equals(wanfa)){
					saleid = "509"; memo = "2串3";
				}else if("510".equals(wanfa)){
					saleid = "510"; memo = "3串6";
				}else if("511".equals(wanfa)){
					saleid = "511"; memo = "3串7";
				}else if("512".equals(wanfa)){
					saleid = "512"; memo = "4串10";
				}else if("513".equals(wanfa)){
					saleid = "513"; memo = "4串14";
				}else if("514".equals(wanfa)){
					saleid = "514"; memo = "4串15";
				}else if("515".equals(wanfa)){
					saleid = "515"; memo = "5串15";
				}else if("516".equals(wanfa)){
					saleid = "516"; memo = "5串25";
				}else if("517".equals(wanfa)){
					saleid = "517"; memo = "5串30";
				}else if("518".equals(wanfa)){
					saleid = "518"; memo = "5串31";
				}else if("519".equals(wanfa)){
					saleid = "519"; memo = "6串21";
				}else if("520".equals(wanfa)){
					saleid = "520"; memo = "6串41";
				}else if("521".equals(wanfa)){
					saleid = "521"; memo = "6串56";
				}else if("522".equals(wanfa)){
					saleid = "522"; memo = "6串62";
				}else if("523".equals(wanfa)){
					saleid = "523"; memo = "6串63";
				}else if("524".equals(wanfa)){
					saleid = "524"; memo = "7串127";
				}else if("525".equals(wanfa)){
					saleid = "525"; memo = "8串255";
				}else if("526".equals(wanfa)){
					saleid = "526"; memo = "3串3";
				}else if("527".equals(wanfa)){
					saleid = "527"; memo = "3串4";
				}else if("528".equals(wanfa)){
					saleid = "528"; memo = "4串6";
				}else if("529".equals(wanfa)){
					saleid = "529"; memo = "4串11";
				}else if("530".equals(wanfa)){
					saleid = "530"; memo = "5串10";
				}else if("531".equals(wanfa)){
					saleid = "531"; memo = "5串20";
				}else if("532".equals(wanfa)){
					saleid = "532"; memo = "5串26";
				}else if("533".equals(wanfa)){
					saleid = "533"; memo = "6串15";
				}else if("534".equals(wanfa)){
					saleid = "534"; memo = "6串35";
				}else if("535".equals(wanfa)){
					saleid = "535"; memo = "6串50";
				}else if("536".equals(wanfa)){
					saleid = "536"; memo = "6串57";
				}else if("537".equals(wanfa)){
					saleid = "537"; memo = "7串120";
				}else if("538".equals(wanfa)){
					saleid = "538"; memo = "8串247";
				}else if("539".equals(wanfa)){
					saleid = "539"; memo = "4串4";
				}else if("540".equals(wanfa)){
					saleid = "540"; memo = "4串5";
				}else if("541".equals(wanfa)){
					saleid = "541"; memo = "5串16";
				}else if("542".equals(wanfa)){
					saleid = "542"; memo = "6串20";
				}else if("543".equals(wanfa)){
					saleid = "543"; memo = "6串42";
				}else if("544".equals(wanfa)){
					saleid = "544"; memo = "5串5";
				}else if("545".equals(wanfa)){
					saleid = "545"; memo = "5串6";
				}else if("546".equals(wanfa)){
					saleid = "546"; memo = "6串22";
				}else if("547".equals(wanfa)){
					saleid = "547"; memo = "7串35";
				}else if("548".equals(wanfa)){
					saleid = "548"; memo = "8串70";
				}else if("549".equals(wanfa)){
					saleid = "549"; memo = "6串6";
				}else if("550".equals(wanfa)){
					saleid = "550"; memo = "6串7";
				}else if("551".equals(wanfa)){
					saleid = "551"; memo = "7串21";
				}else if("552".equals(wanfa)){
					saleid = "552"; memo = "8串56";
				}else if("553".equals(wanfa)){
					saleid = "553"; memo = "7串7";
				}else if("554".equals(wanfa)){
					saleid = "554"; memo = "7串8";
				}else if("555".equals(wanfa)){
					saleid = "555"; memo = "8串28";
				}else if("556".equals(wanfa)){
					saleid = "556"; memo = "8串8";
				}else if("557".equals(wanfa)){
					saleid = "557"; memo = "8串9";
					
					// 定胆玩法
				}else if("602".equals(wanfa)){
					saleid = "602"; memo = "2串1";;
				}else if("603".equals(wanfa)){
					saleid = "603"; memo = "3串1";
				}else if("604".equals(wanfa)){
					saleid = "604"; memo = "4串1";
				}else if("605".equals(wanfa)){
					saleid = "605"; memo = "5串1";;
				}else if("606".equals(wanfa)){
					saleid = "606"; memo = "6串1";
				}else if("607".equals(wanfa)){
					saleid = "607"; memo = "7串1";
				}else if("608".equals(wanfa)){
					saleid = "608"; memo = "8串1";
				}else if("609".equals(wanfa)){
					saleid = "609"; memo = "2串3";
				}else if("610".equals(wanfa)){
					saleid = "610"; memo = "3串6";
				}else if("611".equals(wanfa)){
					saleid = "611"; memo = "3串7";
				}else if("612".equals(wanfa)){
					saleid = "612"; memo = "4串10";
				}else if("613".equals(wanfa)){
					saleid = "613"; memo = "4串14";
				}else if("614".equals(wanfa)){
					saleid = "614"; memo = "4串15";
				}else if("615".equals(wanfa)){
					saleid = "615"; memo = "5串15";
				}else if("616".equals(wanfa)){
					saleid = "616"; memo = "5串25";
				}else if("617".equals(wanfa)){
					saleid = "617"; memo = "5串30";
				}else if("618".equals(wanfa)){
					saleid = "618"; memo = "5串31";
				}else if("619".equals(wanfa)){
					saleid = "619"; memo = "6串21";
				}else if("620".equals(wanfa)){
					saleid = "620"; memo = "6串41";
				}else if("621".equals(wanfa)){
					saleid = "621"; memo = "6串56";
				}else if("622".equals(wanfa)){
					saleid = "622"; memo = "6串62";
				}else if("623".equals(wanfa)){
					saleid = "623"; memo = "6串63";
				}else if("624".equals(wanfa)){
					saleid = "624"; memo = "7串127";
				}else if("625".equals(wanfa)){
					saleid = "625"; memo = "8串255";
				}else if("626".equals(wanfa)){
					saleid = "626"; memo = "3串3";
				}else if("627".equals(wanfa)){
					saleid = "627"; memo = "3串4";
				}else if("628".equals(wanfa)){
					saleid = "628"; memo = "4串6";
				}else if("629".equals(wanfa)){
					saleid = "629"; memo = "4串11";
				}else if("630".equals(wanfa)){
					saleid = "630"; memo = "5串10";
				}else if("631".equals(wanfa)){
					saleid = "631"; memo = "5串20";
				}else if("632".equals(wanfa)){
					saleid = "632"; memo = "5串26";
				}else if("633".equals(wanfa)){
					saleid = "633"; memo = "6串15";
				}else if("634".equals(wanfa)){
					saleid = "634"; memo = "6串35";
				}else if("635".equals(wanfa)){
					saleid = "635"; memo = "6串50";
				}else if("636".equals(wanfa)){
					saleid = "636"; memo = "6串57";
				}else if("637".equals(wanfa)){
					saleid = "637"; memo = "7串120";
				}else if("638".equals(wanfa)){
					saleid = "638"; memo = "8串247";
				}else if("639".equals(wanfa)){
					saleid = "639"; memo = "4串4";
				}else if("640".equals(wanfa)){
					saleid = "640"; memo = "4串5";
				}else if("641".equals(wanfa)){
					saleid = "641"; memo = "5串16";
				}else if("642".equals(wanfa)){
					saleid = "642"; memo = "6串20";
				}else if("643".equals(wanfa)){
					saleid = "643"; memo = "6串42";
				}else if("644".equals(wanfa)){
					saleid = "644"; memo = "5串5";
				}else if("645".equals(wanfa)){
					saleid = "645"; memo = "5串6";
				}else if("646".equals(wanfa)){
					saleid = "646"; memo = "6串22";
				}else if("647".equals(wanfa)){
					saleid = "647"; memo = "7串35";
				}else if("648".equals(wanfa)){
					saleid = "648"; memo = "8串70";
				}else if("649".equals(wanfa)){
					saleid = "649"; memo = "6串6";
				}else if("650".equals(wanfa)){
					saleid = "650"; memo = "6串7";
				}else if("651".equals(wanfa)){
					saleid = "651"; memo = "7串21";
				}else if("652".equals(wanfa)){
					saleid = "652"; memo = "8串56";
				}else if("653".equals(wanfa)){
					saleid = "653"; memo = "7串7";
				}else if("654".equals(wanfa)){
					saleid = "654"; memo = "7串8";
				}else if("655".equals(wanfa)){
					saleid = "655"; memo = "8串28";
				}else if("656".equals(wanfa)){
					saleid = "656"; memo = "8串8";
				}else if("657".equals(wanfa)){
					saleid = "657"; memo = "8串9";
				}else if("400".equals(wanfa)){
					saleid="0"; memo="文件上传";
				}
			}else if(Constant.BD_BQC.equals(lotno)||Constant.BD_DCBF.equals(lotno)||
					Constant.BD_SPF.equals(lotno)||Constant.BD_SXPDS.equals(lotno)||Constant.BD_ZJQ.equals(lotno)){//北京单场
				 if("500".equals(wanfa)){
					 saleid = "500"; memo = "单关";
				 }else if("502".equals(wanfa)){
						saleid = "502"; memo = "2串1";
				 }else if("509".equals(wanfa)){
					 saleid = "509"; memo = "2串3";
				 }else if("503".equals(wanfa)){
					 saleid = "503"; memo = "3串1";
				 }else if("527".equals(wanfa)){
					 saleid = "527"; memo = "3串4";
				 }else if("511".equals(wanfa)){
					 saleid = "511"; memo = "3串7";
				 }else if("504".equals(wanfa)){
					 saleid = "504"; memo = "4串1";
				 }else if("540".equals(wanfa)){
					 saleid = "540"; memo = "4串5";
				 }else if("529".equals(wanfa)){
					 saleid = "529"; memo = "4串11";
				 }else if("514".equals(wanfa)){
					 saleid = "514"; memo = "4串15";
				 }else if("505".equals(wanfa)){
					 saleid = "505"; memo = "5串1";
				 }else if("545".equals(wanfa)){
					 saleid = "545"; memo = "5串6";
				 }else if("541".equals(wanfa)){
					 saleid = "541"; memo = "5串16";
				 }else if("532".equals(wanfa)){
					 saleid = "532"; memo = "5串26";
				 }else if("518".equals(wanfa)){
					 saleid = "518"; memo = "5串31";
				 }else if("506".equals(wanfa)){
					 saleid = "506"; memo = "6串1";
				 }else if("550".equals(wanfa)){
					 saleid = "550"; memo = "6串7";
				 }else if("546".equals(wanfa)){
					 saleid = "546"; memo = "6串22";
				 }else if("543".equals(wanfa)){
					 saleid = "543"; memo = "6串42";
				 }else if("536".equals(wanfa)){
					 saleid = "536"; memo = "6串57";
				 }else if("523".equals(wanfa)){
					 saleid = "523"; memo = "6串63";
				 }else if("507".equals(wanfa)){
					 saleid = "507"; memo = "7串1";
				 }else if("508".equals(wanfa)){
					 saleid = "508"; memo = "8串1";
				 }else if("109".equals(wanfa)){
					 saleid = "109"; memo = "9串1";
				 }else if("110".equals(wanfa)){
					 saleid = "110"; memo = "10串1";
				 }else if("111".equals(wanfa)){
					 saleid = "111"; memo = "11串1";
				 }else if("112".equals(wanfa)){
					 saleid = "112"; memo = "12串1";
				 }else if("113".equals(wanfa)){
					 saleid = "113"; memo = "13串1";
				 }else if("114".equals(wanfa)){
					 saleid = "114"; memo = "14串1";
				 }else if("115".equals(wanfa)){
					 saleid = "115"; memo = "15串1";
				 }
			}else if(Constant.EEXW.equals(lotno)){//七乐彩
				if(Constant.EEXW_DS.equals(wanfa)){
					saleid = "0"; memo = "单式";
				}else if(Constant.EEXW_FS.equals(wanfa)){
					saleid = "1"; memo = "复式";
				}else if(Constant.EEXW_DT.equals(wanfa)){
					saleid = "2"; memo = "胆拖";
				}else{
					saleid = "1"; memo="单式上传";
				}
			}else if(Constant.NMKS.equals(lotno)){
				if("00".equals(wanfa)){
					saleid = "00"; memo="三不同单式";
				}else if("01".equals(wanfa)){
					saleid = "01"; memo="二同号单式";
				}else if("02".equals(wanfa)){
					saleid = "02"; memo="三同号单式";
				}else if("10".equals(wanfa)){
					saleid = "10"; memo="和值";
				}else if("20".equals(wanfa)){
					saleid = "20"; memo="二不同复选";
				}else if("21".equals(wanfa)){
					saleid = "21"; memo="二不同号组合";
				}else if("22".equals(wanfa)){
					saleid = "22"; memo="二不同号胆拖";
				}else if("30".equals(wanfa)){
					saleid = "30"; memo="二同号复选";
				}else if("40".equals(wanfa)){
					saleid = "40"; memo="三同号通选";
				}else if("50".equals(wanfa)){
					saleid = "50"; memo="三连号通选";
				}else if("63".equals(wanfa)){
					saleid = "63"; memo="三不同组合";
				}else if("64".equals(wanfa)){
					saleid = "64"; memo="三不同胆拖";
				}else if("71".equals(wanfa)){
					saleid = "71"; memo="二同号单选组合";
				}else if("81".equals(wanfa)){
					saleid = "81"; memo="三同号复式";
				}
			}else{
				memo = "其他";
			}		
		obj.put("saleid", saleid);
		obj.put("memo", memo);
		logger.info("BettingUtil:getMemo---"+obj);
		return obj;
	}
	/**
	 * 根据彩种判断玩法  粗略玩法  单式0、  复式1、  胆拖 2、 多方案3
	 * @param wanfa 玩法
	 * @param lotno 彩种
	 * @return 返回玩法 
	 */
	public static JSONObject getLotnoBetType2(String wanfa,String lotno,String betcode){
		JSONObject obj = new JSONObject();
		String memo = "0";
		if(Constant.SSQ.equals(lotno)){//双色球
			if(Constant.SSQ_RSBS.equals(wanfa)){
				 memo = "0";
			}else if( Constant.SSQ_RMBS.equals(wanfa)|| Constant.SSQ_RSBM.equals(wanfa) || Constant.SSQ_RMBM.equals(wanfa)){
				memo = "1";
			}else if(Constant.SSQ_RTBS.equals(wanfa) || Constant.SSQ_RTBM.equals(wanfa)){
				memo = "2";
			}else{
				memo="3";
			}
		}else if(Constant.SD.equals(lotno)){//福彩3D
			if(Constant.SD_ZXDS.equals(wanfa) || Constant.SD_Z3DS.equals(wanfa) || Constant.SD_Z6DS.equals(wanfa)){
				memo = "0";
			}else if(Constant.SD_ZXHZ.equals(wanfa) || Constant.SD_ZSHZ.equals(wanfa) 
					|| Constant.SD_ZLHZ.equals(wanfa) ||Constant.SD_WXTZ.equals(wanfa) 
					||Constant.SD_Z3FS.equals(wanfa) || Constant.SD_Z6FS.equals(wanfa)
					||Constant.SD_DXDFS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.SD_DTFS.equals(wanfa)){
				memo = "2";//单选单2
			}else{
				memo="3";
			}
		}else if(Constant.QLC.equals(lotno)){//七乐彩
			if(Constant.QLC_ZXDS.equals(wanfa)){
				memo = "0";
			}else if(Constant.QLC_ZXFS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.QLC_ZXDT.equals(wanfa)){
				memo = "2";
			}else{
				memo="3";
			}
		}else if(Constant.PLS.equals(lotno)){//排列三
			if((Constant.PLS_ZHX+"0").equals(wanfa)|| (Constant.PLS_ZX+"30").equals(wanfa) 
					|| (Constant.PLS_ZX).equals(wanfa)
					|| (Constant.PLS_ZX+"60").equals(wanfa) || "dssc_zx".equals(wanfa) 
					|| "dssc_zs".equals(wanfa) || "dssc_zl".equals(wanfa)){
				 memo = "0";
			}else if((Constant.PLS_ZHX+"1").equals(wanfa) || Constant.PLS_ZHXHZ.equals(wanfa)
					||(Constant.PLS_ZX+"31").equals(wanfa) || (Constant.PLS_ZX+"61").equals(wanfa) 
					|| Constant.PLS_ZXHZ.equals(wanfa) || Constant.PLS_ZSHZ.equals(wanfa)
					|| Constant.PLS_ZLHZ.equals(wanfa) || Constant.PLS_ZSBH.equals(wanfa)
					|| Constant.PLS_ZLBH.equals(wanfa)){
				 memo = "1";
			}
		}else if(Constant.DLT.equals(lotno) || Constant.PLW.equals(lotno) 
				|| Constant.QXC.equals(lotno)//大乐透、排列五、七星彩、
				|| Constant.SFC14.equals(lotno)|| Constant.SFC9.equals(lotno)
				|| Constant.JQC.equals(lotno) || Constant.BQC.equals(lotno)){//胜负彩、任九场、进球彩、半全场
			if(Constant.DLT_DS.equals(wanfa) || (Constant.DLT_SXL+"0").equals(wanfa)){
				memo = "0";
			}else if(Constant.DLT_FS.equals(wanfa) || (Constant.DLT_SXL+"1").equals(wanfa)){
				memo = "1";
			}else if(Constant.DLT_DT.equals(wanfa)){
				memo = "2";
			}else{
			 memo="3";
			}
		}else if(SSCConstant.SSC.equals(lotno)){//时时彩
			if((SSCConstant.SSC_WX+"0").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_WX+"1").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_SX+"0").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_SX+"1").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_RX+"0").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_RX+"1").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_YX+"0").equals(wanfa)){
				memo = "0";
			}else if((SSCConstant.SSC_YX+"1").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_WXTX+"0").equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_WXTX+"1").equals(wanfa)){
				 memo = "0";
			}else if(SSCConstant.SSC_EXFXHZ.equals(wanfa)){
				memo = "1";
			}else if(SSCConstant.SSC_EXZXHZ.equals(wanfa)){
				 memo = "1";
			}else if(SSCConstant.SSC_DXDS.equals(wanfa)){
				 memo = "0";
			}else if((SSCConstant.SSC_EXZXFS+"0").equals(wanfa)||SSCConstant.SSC_EXZXFS.equals(wanfa)){
				 memo = "1";
			}
		}else if(Constant.SYXW.equals(lotno)){//江西11选5
			if((Constant.SYXW_RX+"1").equals(wanfa)){
				 memo = "0";
			}else if((Constant.SYXW_RX+"2").equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";;
				}else{
					 memo = "1";}
				
			}else if((Constant.SYXW_RX+"3").equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";;
				}else{
					 memo = "1";}
			}else if((Constant.SYXW_RX+"4").equals(wanfa)){
				 memo = "0";
			}else if((Constant.SYXW_RX+"5").equals(wanfa)){
				 memo = "0";
			}else if((Constant.SYXW_RX+"6").equals(wanfa)){
				 memo = "0";
			}else if((Constant.SYXW_RX+"7").equals(wanfa)){
				 memo = "0";
			}else if((Constant.SYXW_RX+"8").equals(wanfa)){
				 memo = "0";
			}else if(Constant.SYXW_QX2.equals(wanfa)){
				 memo = "0";
			}else if(Constant.SYXW_QX3.equals(wanfa)){
				 memo = "0";
			}else if(Constant.SYXW_ZX2.equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					memo = "2";
				}else{
					memo = "1";}
			}else if(Constant.SYXW_ZX3.equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";
				}else{
					memo = "1";}
			}
		}else if(Constant.BQC.equals(lotno)){// 足彩六场半全场
			if(Constant.ZC_DS.equals(wanfa)){
				 memo = "0";
			}else if(Constant.ZC_FS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.ZC_DT.equals(wanfa)){
				 memo = "2";
			}
		}else if(Constant.JQC.equals(lotno)){// 足彩进球彩
			if(Constant.ZC_DS.equals(wanfa)){
				 memo = "0";
			}else if(Constant.ZC_FS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.ZC_DT.equals(wanfa)){
				 memo = "2";
			}
		}else if(Constant.SFC9.equals(lotno)){// 足彩胜负彩任九场
			if(Constant.ZC_DS.equals(wanfa)){
				 memo = "0";
			}else if(Constant.ZC_FS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.ZC_DT.equals(wanfa)){
				 memo = "2";
			}
		}else if(Constant.SFC14.equals(lotno)){// 足彩胜负彩14场
			if(Constant.ZC_DS.equals(wanfa)){
				 memo = "0";
			}else if(Constant.ZC_FS.equals(wanfa)){
				 memo = "1";
			}else if(Constant.ZC_DT.equals(wanfa)){
				 memo = "2";
			}
		}else if(Constant.SYYDJ.equals(lotno)){//十一运夺金
			if("101".equals(wanfa)){
				 memo = "0";
			}else if("102".equals(wanfa)||"111".equals(wanfa)||"121".equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";;
				}else{
					 memo = "1";}
				
			}else if("112".equals(wanfa)||"103".equals(wanfa)||"122".equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";;
				}else{
					 memo = "1";}
			}else if("113".equals(wanfa)||"104".equals(wanfa)||"123".equals(wanfa)){
				 memo = "0";
			}else if("114".equals(wanfa)||"105".equals(wanfa)||"124".equals(wanfa)){
				 memo = "0";
			}else if("115".equals(wanfa)||"106".equals(wanfa)||"125".equals(wanfa)){
				 memo = "0";
			}else if("116".equals(wanfa)||"107".equals(wanfa)||"126".equals(wanfa)){
				 memo = "0";
			}else if("117".equals(wanfa)){
				 memo = "0";
			}else if("141".equals(wanfa)||"142".equals(wanfa)){
				 memo = "0";
			}else if("161".equals(wanfa)||"162".equals(wanfa)){
				 memo = "0";
			}else if("108".equals(wanfa)||"131".equals(wanfa)||"133".equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					memo = "2";
				}else{
					memo = "1";}
			}else if("151".equals(wanfa)||"109".equals(wanfa)||"153".equals(wanfa)){
				if(betcode.indexOf("$")>-1){
					 memo = "2";
				}else{
					memo = "1";}
			}
		}else if(Constant.JCZQ_RSPF.equals(lotno)||Constant.JCZQ_SPF.equals(lotno)||Constant.JCZQ_ZJQ.equals(lotno)||Constant.JCZQ_BF.equals(lotno)||Constant.JCZQ_BSF.equals(lotno)){// 竞彩让球胜平负  竞彩胜平负
			if("500".equals(wanfa)){
				 memo = "0";
			}else{
				 memo = "1";
			}
		}else if(Constant.NMKS.equals(lotno)){
			if("00".equals(wanfa)||"01".equals(wanfa)||"02".equals(wanfa)){
				memo = "0";
			}else if("10".equals(wanfa)){
				memo = "0";
			}else if("20".equals(wanfa)){
				memo = "0";
			}else if("21".equals(wanfa)){
				memo = "1";
			}else if("22".equals(wanfa)){
				memo = "2";
			}else if("30".equals(wanfa)){
				memo = "0";
			}else if("40".equals(wanfa)){
				memo = "1";
			}else if("50".equals(wanfa)){
				memo = "1";
			}else if("63".equals(wanfa)){
				memo = "1";
			}else if("64".equals(wanfa)){
				memo = "2";
			}else if("71".equals(wanfa)){
				memo = "1";
			}else if("81".equals(wanfa)){
				memo = "1";
			}else{
				memo = "4";
			}
		}
		obj.put("memo", memo);
		return obj;
	}

	/**
	 * 
	 * 单式上传获取多个文件和错误注码
	 * 将错误注码剔除并将正确注码拼接在一起
	 * @param paths 传入的路径
	 * @param errorCodes 错误注码
	 * @param lotno 彩种
	 * @return
	 * @throws IOException
	 */
	public static String getUploadBetcodes(String paths,String errorCodes,String lotno) throws IOException{
		String uploadCodes = "";
		logger.info("获取单式上传页面上传入的值path="+paths+";错误注码为errorCodes="+errorCodes);
		//当传的路径不为空时，将路径分隔并将错误注码分隔
		if(paths!=null && !paths.equals("")){
			if(paths.indexOf(ResourceBundleUtil.UPLOAD_SIGN) > -1){
				String path[] = paths.split("\\"+ResourceBundleUtil.UPLOAD_SIGN);
				String errorCode[] = errorCodes.split("\\"+ResourceBundleUtil.UPLOAD_SIGN);
				for(int i=0;i<path.length;i++){
					//若其中无错误注码将其替换为“”
					if(errorCode[i].equals(ResourceBundleUtil.UPLOADCODES)){
						errorCode[i]=errorCode[i].replace(ResourceBundleUtil.UPLOADCODES, "");
					}
					//调用转换注码的方法，将注码分隔拼接并返回
					uploadCodes += getUploadBetcode(path[i], errorCode[i],lotno);
				}
			}else{
				uploadCodes = getUploadBetcode(paths, errorCodes,lotno);
			}
		}
		return uploadCodes.trim();
	}
	
	/**
	 * 单式上传的路径和错误注码
	 * @param path--路径 
	 * 例D:\web\ruyicai\+传进来的类型+当前毫秒+用户的txt名字
	 *   D:\web\ruyicai\plw\1309142186718plw.txt  
	 * @param errorCode--错误注码
	 * @param lotno 彩种
	 * @return
	 * @throws IOException 
	 */
	public static String getUploadBetcode(String path,String errorCode,String lotno) throws IOException{
		    StringBuffer sbf = new StringBuffer();
			if (!path.equals("")) {
			// 1.根据传入的地址获取文件中的内容

			File file = new File(path);
			// 判断该文件是否存在
			if (file.exists()) {
				BufferedReader bufRead = new BufferedReader(
						new InputStreamReader(new FileInputStream(file)));
				String str;
				List<String> list = new ArrayList<String>();
				while ((str = bufRead.readLine()) != null) {
					if (str.equals("") || str.replace(" ", "").equals("")) {
					} else {
						list.add(str.trim());
					}
				}
				bufRead.close();// 关闭流
				String errorCodes[] = errorCode.split("\\"+Constant.TABNUMBER);
				int[] errs=new int[errorCodes.length];
				if(errorCodes[0].equals("")){
				}else{
					for (int i = 0; i < errorCodes.length; i++) {
						try {
							errs[i]=Integer.parseInt(errorCodes[i]);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					for (int j =errs.length-1 ; j >=0; j--) {
						list.remove(errs[j]);
					}	
				}
				for (int i = 0; i < list.size(); i++) {
					if(list.get(i)==null||"".equals(list.get(i))){}else{
						String corr = getCodesByLotno(list.get(i), path, lotno);
						sbf.append(corr);
						if (lotno.equals(Constant.SSQ)
								|| lotno.equals(Constant.QLC)
								|| lotno.equals(Constant.SD)) {
							sbf.append(Constant.TABNUMBER);
						} 
						
						
						else {
							sbf.append(Constant.TC_TABNUMBER);
						}
					}
				}
			}
		}

		return sbf.toString();
	}
	
	/**
	 * 将含有0的注码去除0并累加排序返回
	 * @param strCodes 传入的注码数组
	 * @return
	 */
	private static String getCodes(String strCodes[]){
		 String str = "";
		 //当注码之间有小于0的注码将注码去“0”
		 for(int c=0;c<strCodes.length;c++){
			 if(strCodes[c].substring(0,1).equals("0")){
				 str += strCodes[c].substring(1,2)+Constant.SIGN;
			 }else{
				 str+=strCodes[c]+Constant.SIGN;
			 }
		 }
		 return str.substring(0,str.length()-1);
	}
	
	/**
	 * 根据不同彩种和玩法拼接所需注码返回
	 * @param str 从文件中读取的注码
	 * @param path 路径
	 * @param lotno 彩种
	 * @return
	 */
	private static String getCodesByLotno(String str,String path,String lotno){
		 //根据不同彩种拼接注码
		 if(lotno.equals(Constant.SSQ)){//双色球
   		 //重新拼接蓝球和红球，算得投注时所用到的注码
			 str = str.trim().replace(" + ", "+").replace(" ", ",").replace("|", "+");
			 String strs[] = str.split("\\+");
			 str = getCodes(strs[0].split("\\,"))+Constant.TAB +getCodes(strs[1].split("\\,"));
		 }else if(lotno.equals(Constant.QLC)){//七乐彩
			 str = str.trim().replace(" ", ",");
			 str = getCodes(str.split("\\,"));
		 }else if(lotno.equals(Constant.EEXW)){//七乐彩
			 str = str.trim().replace(" ", ",");
			 str = getCodes(str.split("\\,"));
		 }else if(lotno.equals(Constant.DLT)){//大乐透06 11 21 25 28+01 02
			 str = str.trim().replace(" + ", "+").replace(" ", ",").replace("|", "+");
			 String strs[] = str.split("\\+");
			 str = getCodes(strs[0].split("\\,"))+Constant.QH_TAB+getCodes(strs[1].split("\\,"));
		 }else if(lotno.equals(Constant.SD)){//福彩3D
			 String wanfa = "";
			 if(path.indexOf("zx")>-1){
				 wanfa=Constant.SD_ZXDS;
			 }else if(path.indexOf("zs")>-1){
				 wanfa=Constant.SD_Z3DS;
			 }else if(path.indexOf("zl")>-1){
				 wanfa=Constant.SD_Z6DS;
			 }
			 str = str.trim().replace(",", "");
			 String strNew ="";
			 for(int d=0;d<str.length();d++){
				 strNew+=str.substring(d,d+1)+",";
			 }
			 str=wanfa+strNew.substring(0,strNew.length()-1);
		 }else if(lotno.equals(Constant.PLS)){//排列三
			 String wanfa = "";
			 if(path.indexOf("zx")>-1){
				 wanfa=Constant.PLS_ZHX;
			 }else if(path.indexOf("zs")>-1){
				 wanfa=Constant.PLS_ZX;
			 }else if(path.indexOf("zl")>-1){
				 wanfa=Constant.PLS_ZX;
			 }
			 str = str.trim().replace(",", "");
			 String strNew ="";
			 for(int d=0;d<str.length();d++){
				 strNew+=str.substring(d,d+1)+",";
			 }
			 str=wanfa+strNew.substring(0,strNew.length()-1);
		 }else if(lotno.equals(Constant.SFC9)||lotno.equals(Constant.SFC14)||lotno.equals(Constant.JQC)||lotno.equals(Constant.BQC)) {
			 str = str.replace("*", "#");
			 str = addCommas(str);
			 if(Constant.SFC14.equals(lotno)) {//胜负彩
				if(str.length()>27) {
					str = Constant.ZC_SFC + Constant.ZC_FS + str;
				}else {
					str = Constant.ZC_SFC + Constant.ZC_DS + str;
				}
			 }else if(Constant.SFC9.equals(lotno)) {//任九场
				if(str.contains("$")) {
					str = Constant.ZC_RJC + Constant.ZC_DT + str;
				}else if(str.length()>27) {
					str = Constant.ZC_RJC + Constant.ZC_FS + str;
				}else {
					str = Constant.ZC_RJC + Constant.ZC_DS + str;
				}	
			}else if(Constant.JQC.equals(lotno)) {//进球彩
				if(str.length()>15) {
					str = Constant.ZC_JQC + Constant.ZC_FS + str;
				}else {
					str = Constant.ZC_JQC + Constant.ZC_DS + str;
				}	
			}else if(Constant.BQC.equals(lotno)) {//半全场
				if(str.length()>23) {
					str = Constant.ZC_BQC + Constant.ZC_FS + str;
				}else {
					str = Constant.ZC_BQC + Constant.ZC_DS + str;
				}	
			}
    	 }else if(lotno.equals(Constant.JCZQ_RSPF) || lotno.equals(Constant.JCZQ_SPF) || lotno.equals(Constant.JCZQ_ZJQ) ||lotno.equals(Constant.JCZQ_BF)) {
    		 if(str.indexOf(":")==-1){
    			 str = addCommas(str);
    			 str = str.replace(",", "|");
    		 }else{
    			 str=str.replace("/", "|");   			 
    		 }		 
    	 }else{//其他彩种
			 str = str.trim().replace(",", "");
			 String strNew ="";
			 for(int d=0;d<str.length();d++){
				 strNew+=str.substring(d,d+1)+",";
			 }
			 str=strNew.substring(0,strNew.length()-1);
		 }
		 return str;
	}
	
	/**
	 * 
	 * 获取所有彩种的集合
	 * 
	 * @param lotno
	 *            彩种
	 * @param betcode
	 *            注码
	 * @param multiple
	 *            倍数
	 * @param superaddition
	 * 			大乐透彩种是否追加
	 * @return 
	 * 		 所有注码、金额、玩法、注数、倍数的集合
	 */
	public static List<BetcodeBean> getBetcodeBeanList(String lotno,
			String betcode, int multiple,boolean superaddition) {
		List<BetcodeBean> list = new ArrayList<BetcodeBean>();
		// 双色球
		if (Constant.SSQ.equals(lotno)) {
			list = SSQResolveService.getSSQBetcodeList(betcode, multiple,
					Constant.TABNUMBER, Constant.TAB, Constant.SIGN,
					Constant.REDTAB);
			// 福彩3D
		} else if (Constant.SD.equals(lotno)) {
			list = SDResolveService.getSDBetcodeList(betcode, multiple,
					Constant.TABNUMBER, Constant.TAB, Constant.SIGN,
					Constant.REDTAB);

			// 福彩七乐彩
		} else if (Constant.QLC.equals(lotno)) {
			list = QLCResolveService.getQLCBetcodeList(betcode, multiple,
					Constant.TABNUMBER, Constant.SIGN, Constant.REDTAB);

			// 体彩排列三
		} else if (Constant.PLS.equals(lotno)) {
			list = PLSResolveService.getPLSBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.QH_TAB);
			// 大乐透
		} else if (Constant.DLT.equals(lotno)) {
			list = DLTResolveService.getDLTBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.QH_TAB, Constant.SIGN,
					Constant.DT_TAB, superaddition);
			//体彩排列五
		}else if(Constant.PLW.equals(lotno)){
			list = PLWResolveService.getPLWBetcodeList(betcode, multiple, 
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.QH_TAB);
			//体彩七星彩
		}else if(Constant.QXC.equals(lotno)){
			list = QXCResolveService.getQXCBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.QH_TAB);
			//大赢家（重庆）时时彩
		}else if(SSCConstant.SSC.equals(lotno)){
			list = SSCResolveService.getSSCBetcodeList(betcode, multiple, 
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.QH_TAB);

		}else if(Constant.SFC14.equals(lotno)) {//胜负彩
			list = ZCResolveService.getZCBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.DT_TAB,
					Constant.ZC_STREAK);
		}else if(Constant.SFC9.equals(lotno)) {//任九场
			list = ZCResolveService.getZCBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.DT_TAB,
					Constant.ZC_STREAK);
		}else if(Constant.JQC.equals(lotno)) {//进球彩
			list = ZCResolveService.getZCBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.DT_TAB,
					Constant.ZC_STREAK);
		}else if(Constant.BQC.equals(lotno)) {//半全场
			list = ZCResolveService.getZCBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.DT_TAB,
					Constant.ZC_STREAK);

			//大赢家江西11选5
		}else if(Constant.SYXW.equals(lotno)){
			list = SYXWResolveService.getSYXWBetcodeList(betcode, multiple, 
					Constant.TC_TABNUMBER, Constant.QH_TAB, Constant.SIGN, 
					Constant.DT_TAB);

		}else if(Constant.SYYDJ.equals(lotno)){
			list = SYYDJResolveService.getSYYDJBetcodeList(betcode, multiple, 
					Constant.TC_TABNUMBER, Constant.QH_TAB, Constant.SIGN, 
					Constant.DT_TAB);
		}else if(Constant.JCZQ_RSPF.equals(lotno)||Constant.JCZQ_SPF.equals(lotno)||Constant.JCZQ_ZJQ.equals(lotno) || Constant.JCZQ_BF.equals(lotno) || Constant.JCZQ_BSF.equals(lotno)) {//竞彩足球胜平负
			list = JCResolveService.getJCBetcodeList(lotno,betcode, multiple,
				Constant.TABNUMBER, Constant.JC_TAB);
		}else if (Constant.EEXW.equals(lotno)) {
			list = EEXWResolveService.getEEXWBetcodeList(betcode, multiple,
					Constant.TC_TABNUMBER, Constant.SIGN, Constant.REDTAB);
		}else if(Constant.NMKS.equals(lotno)){//内蒙快三
			list = NMKSResolveService.getNMKSBetcodeList(betcode, multiple, Constant.TABNUMBER, Constant.SIGN,
					Constant.REDTAB);
		}
		return list;
	}
	
	
	private static String addCommas(String betcode) {
		String commaBetcode = "";
		if(!betcode.contains(",")) {
			char[] betcodeChar = betcode.toCharArray();
			for(char c:betcodeChar) {
				commaBetcode = commaBetcode + c + ",";
			}
			commaBetcode = commaBetcode.substring(0, commaBetcode.length()-1);
			return commaBetcode;
		}
		return betcode;
	}
	public static String quchuSame(String allmethod) {
		String newThod="";
		String[] str=allmethod.split("、");
		for(int i=0;i<str.length;i++){
			if(i==0){
				newThod=newThod+str[i]+"、";
			}else{
				String[] str2=newThod.split("、");
				boolean flag=true;
				for(int j=0;j<str2.length;j++){
					if(str[i].equals(str2[j])){
						flag=false;
						break;
					}
				}
				if(flag){
					newThod=newThod+str[i]+"、";
				}
			}
		}
		return newThod;
	}
	public static String[] getNew(String[] everylot) {
		String newcode="";
		String wanfa=everylot[0].substring(0,everylot[0].indexOf("@"));
		for(int i=0;i<everylot.length;i++){
			if(i==0){
				newcode+=everylot[i].substring(everylot[i].indexOf("@")+1);
			}else{
				String str2=everylot[i].substring(everylot[i].indexOf("@")+1);//去掉玩法
				String[] str3=str2.split("\\^");
				for(int j=0;j<str3.length;j++){
					boolean flag=true;
					String newstr3=str3[j].substring(0,str3[j].lastIndexOf("|"));
					String[] str4=newcode.split("\\^");
					String newcode2="";
					for(int k=0;k<str4.length;k++){
						String newstr4=str4[k].substring(0,str4[k].lastIndexOf("|"));
						if(newstr3!=null && newstr3.equals(newstr4)){
							flag=false;
							if(!str4[k].substring(str4[k].lastIndexOf("|")+1).contains(str3[j].substring(str3[j].lastIndexOf("|")+1))){
								str4[k]+=str3[j].substring(str3[j].lastIndexOf("|")+1);
								//newcode2+=str4[k]+"^";
								//break;
							}							
						}
						newcode2+=str4[k]+"^";
					}
					newcode=newcode2;
					if(flag){
						newcode=newcode+str3[j]+"^";
					}
				}
			}
		}
		
		newcode=wanfa+"@"+newcode;
		
		return newcode.split("\\^");
	}
	/**
	 *获取竞彩足球--文件上传--上传包含场次文件的新注码
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static String getNewbetcode(String betcode, String codes) {
		String newbetcode="";
		String wanfa=betcode.substring(0,betcode.indexOf("+"));
		betcode=betcode.substring(betcode.indexOf("+")+1);
		
		String[] str=codes.split(";");
		for(int i=0;i<str.length;i++){
			String stri=str[i];
			if(stri.indexOf(":")==-1){
				String bet="";
				String[] str1=betcode.split("\\^");
				String[] str2=stri.split("\\|");
				//根据此行的数据，组装正确的一注注码bet
				for(int j=0;j<str2.length;j++){
					String str3=str2[j].substring(0,str2[j].indexOf("→"));
					//根据星期和场次号的匹配，找到对应的日期
					for(int k=0;k<str1.length;k++){
						String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
						if(str3.equals(str4)){
							bet=bet+str1[k]+"|"+str2[j].substring(str2[j].indexOf("→")+1)+"^";
							break;
						}
					}
				}
				newbetcode=newbetcode+wanfa+"+"+getNewbet(bet)+"*";
			}else{
				String bet="";
				String[] str1=betcode.split("\\^");
				String[] str2=stri.split("\\|");
				for(int j=0;j<str2.length;j++){
					String str3=str2[j].substring(0,str2[j].indexOf(":"));
					for(int k=0;k<str1.length;k++){
						String str4=str1[k].substring(str1[k].indexOf("|")+1,str1[k].lastIndexOf("|"))+str1[k].substring(str1[k].lastIndexOf("|")+1);
						if(str3.equals(str4)){
							bet=bet+str1[k]+"|"+str2[j].substring(str2[j].indexOf("[")+1,str2[j].indexOf("]"))+"^";
							break;
						}
					}
				}
				bet=getNewbet(bet);
				newbetcode=newbetcode+wanfa+"+"+getNewbet(bet)+"*";
			}
		}
		
		return newbetcode;
	}
	
	private static String getNewbet(String bet) {
			
			String newbet="";
			String[] bets=bet.split("\\^");
			for(int i=0;i<bets.length;i++){
				String str=bets[i].substring(0,bets[i].lastIndexOf("|")).replace("|", "");
				if(i==0){
					newbet+=bets[i]+"^";
				}else{
					String[] newbets=newbet.split("\\^");
					String newbet2="";
					boolean flag=true;
					for(int j=0;j<newbets.length;j++){
						String str2=newbets[j].substring(0,newbets[j].lastIndexOf("|")).replace("|", "");
						if(flag){
							if(Long.parseLong(str)<Long.parseLong(str2)){
								newbet2+=bets[i]+"^"+newbets[j]+"^";
								flag=false;
							}else{
								newbet2+=newbets[j]+"^";
							}
						}else{
							newbet2+=newbets[j]+"^";
						}					
					}
					if(flag){
						newbet2+=bets[i]+"^";
					}
					newbet=newbet2;
				}
			}
			
			return newbet;
		}
}
