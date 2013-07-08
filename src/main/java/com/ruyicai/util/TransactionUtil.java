package com.ruyicai.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.BetcodeResolveUtil;
import com.jrt.invokeLot.service.JSonResultService;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.bean.TransactionBean;

/**
 * 
 * @classname: TransactionUtil
 * @description: 交易公共类
 * @author: Administrator
 * @date: 2010-11-23 上午11:30:39
 * 
 */
public class TransactionUtil {
	private static Logger logger = Logger.getLogger(TransactionUtil.class);

	/**
	 * 
	 * @param lotoNo
	 *            彩种
	 * @param batchCode
	 *            期号
	 * @param startDate
	 *            开始时间
	 * @param stopDate
	 *            结束时间
	 * @param startLine
	 *            起始行
	 * @param stopLine
	 *            结束行
	 * @return TransactionBean 开奖查询内容
	 * @throws Exception
	 */
	public static TransactionBean getWininfo(String lotNo, String batchCode,
			String startDate, String stopDate, String startLine,
			String stopLine, HttpServletRequest request) throws Exception {
		String tranLog = new String();
		TransactionBean transactionBean = null;
		//查询条件
		JSONObject paras = new JSONObject();
		paras.put("play_name", lotNo);
		//paras.put("term_code", batchCode);

		JSONObject where = new JSONObject();
		where.put("batchCode", batchCode);
		where.put("lotNo", lotNo);
		where.put("startDate", startDate);
		where.put("stopDate", stopDate);
		where.put("startLine", startLine);
		where.put("stopLine", stopLine);

		//调用公共方法访问jrtLot得到结果
		JSONObject obj = JSonResultService.getAllJSonReuslt(paras, where, "",
				0, "allSelect.do", "lotterySelect");
		String re = CommonUtil.getBackValue("value", obj);

		//存入jsonArray中并返回
//		if (CommonUtil.isJSONArray(re,request)) {
//			array = JSONArray.fromObject(re);
//		}
		//判断是jsonArray还是jsonObject
		if (re.substring(0, 1).equals("{")) {
			JSONObject objValue = JSONObject.fromObject(re);
			if (LotErrorCode.WCHXX.equals(objValue.getString("error_code"))) {
				transactionBean = new TransactionBean();
				transactionBean.setError_code(MessageUtil.SELECT_BET_MESSAGE);
				tranLog = "no";
				request.setAttribute("tranLog", tranLog);
			}
		} else {
			JSONArray array = JSONArray.fromObject(re);
			if (array != null) {
				JSONObject objValue = array.getJSONObject(0);
				transactionBean = CommonUtil.getTransaction(objValue, 4);
				tranLog = "has";
				request.setAttribute("tranLog", tranLog);
			}
			logger.debug("开奖公告的内容为:"+array);
		}
		return transactionBean;
	}
	
	/**
	 * 
	 * 根据彩种调用最近一期开奖信息 
	 * @param lotno 彩种
	 * @param request 请求
	 * @return 集合
	 * @throws Exception
	 */
	public static List<TransactionBean> getJSONLotNo(HttpServletRequest request) throws Exception{
		
		List<TransactionBean> list = new ArrayList<TransactionBean>();
		//调用jrtLot查询最近一期开奖信息
		String[] type=ResourceBundleUtil.LOTNO.split(",");
		for(int i=0;i<type.length;i++){
			TransactionBean transactionBean = TransactionUtil.getWininfo(type[i], 
					"", "", "", "1", "1", request);
			list.add(transactionBean);
		}
		return list;
	}
	
	/**
	 * 
	 * @Title: getSD
	 * @Description: 福彩3d注码
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static void getSD(TransactionBean tran,HttpServletRequest request) {
		String info = tran.getWin_base_code();
		String SD1 = info.substring(1, 2);
		String SD2 = info.substring(3, 4);
		String SD3 = info.substring(5, 6);
		request.setAttribute("SD1", SD1);
		request.setAttribute("SD2", SD2);
		request.setAttribute("SD3", SD3);

	}

	/**
	 * 
	 * @Title: getPLS
	 * @Description: 排列三的注码解析
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static void getPLS(TransactionBean tran,HttpServletRequest request) {
		String info = tran.getWin_base_code();
		String PLS1 = info.substring(0, 1);
		String PLS2 = info.substring(1, 2);
		String PLS3 = info.substring(2, 3);
		request.setAttribute("PLS1", PLS1);
		request.setAttribute("PLS2", PLS2);
		request.setAttribute("PLS3", PLS3);
	}
	
	/**
	 * 
	 * @Title: getPLS
	 * @Description: 排列五、七星彩的注码解析
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static void getPLWandQXC(TransactionBean tran,HttpServletRequest request) {
		String info = tran.getWin_base_code();
		String number1 = info.substring(0, 1);
		String number2 = info.substring(1, 2);
		String number3 = info.substring(2, 3);
		String number4 = info.substring(3, 4);
		String number5 = info.substring(4, 5);
		request.setAttribute("number1", number1);
		request.setAttribute("number2", number2);
		request.setAttribute("number3", number3);
		request.setAttribute("number4", number4);
		request.setAttribute("number5", number5);
		if(info.length()>5){
			String number6 = info.substring(5,6);
			String number7 = info.substring(6,7);
			request.setAttribute("number6", number6);
			request.setAttribute("number7", number7);
		}
	}
	

	/**
	 * 
	 * 双色球和七乐彩开奖注码解析
	 * @param tran 
	 * @param request
	 */
	public static void getSSQandQLCCode(TransactionBean tran,HttpServletRequest request) {
		String winBaseCode = BetcodeResolveUtil.extractString(tran.getWin_base_code());//TransactionUtil.extractString(tran.getWin_base_code());
		String number1 = winBaseCode.substring(0, 2);
		String number2 = winBaseCode.substring(2, 4);
		String number3 = winBaseCode.substring(4, 6);
		String number4 = winBaseCode.substring(6, 8);
		String number5 = winBaseCode.substring(8, 10);
		String number6 = winBaseCode.substring(10, 12);
		request.setAttribute("number1", number1);
		request.setAttribute("number2", number2);
		request.setAttribute("number3", number3);
		request.setAttribute("number4", number4);
		request.setAttribute("number5", number5);
		request.setAttribute("number6", number6);

		if (winBaseCode.length() > 12) {
			String number7 = winBaseCode.substring(12, 14);
			request.setAttribute("number7", number7);
			request.setAttribute("number8", tran.getWin_special_code());
		} else {
			request.setAttribute("number7", tran.getWin_special_code());
		}
	}

	/**
	 * 
	 * @Title: getDLT
	 * @Description: 大乐透注码排序
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static void getDLTCode(TransactionBean tran,HttpServletRequest request) {
		String infoDLT = tran.getWin_base_code();
		String newinfo = infoDLT.replace(" ", "").replace("+","");
		String newRed = newinfo.substring(0,10);
		String nerBlue = newinfo.substring(10,14);
		String newRedInfo = BetcodeResolveUtil.extractString(newRed);
		String newBlueInfo = BetcodeResolveUtil.extractString(nerBlue);
		String newInfoDLT = newRedInfo+newBlueInfo;
		
		String DLT1 = newInfoDLT.substring(0, 2);
		String DLT2 = newInfoDLT.substring(2, 4);
		String DLT3 = newInfoDLT.substring(4, 6);
		String DLT4 = newInfoDLT.substring(6, 8);
		String DLT5 = newInfoDLT.substring(8, 10);
		String DLT6 = newInfoDLT.substring(10, 12);
		String DLT7 = newInfoDLT.substring(12, 14);

		request.setAttribute("DLT1", DLT1);
		request.setAttribute("DLT2", DLT2);
		request.setAttribute("DLT3", DLT3);
		request.setAttribute("DLT4", DLT4);
		request.setAttribute("DLT5", DLT5);
		request.setAttribute("DLT6", DLT6);
		request.setAttribute("DLT7", DLT7);
	}

	/**
	 * 
	 * @Title: getDLT
	 * @Description: 大乐透注码
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static void getDLT(TransactionBean tran,HttpServletRequest request) {
		String infoDLT = tran.getWin_base_code();
		String DLT1 = infoDLT.substring(0, 2);
		String DLT2 = infoDLT.substring(3, 5);
		String DLT3 = infoDLT.substring(6, 8);
		String DLT4 = infoDLT.substring(9, 11);
		String DLT5 = infoDLT.substring(12, 14);
		String DLT6 = infoDLT.substring(15, 17);
		String DLT7 = infoDLT.substring(18, 20);
		request.setAttribute("DLT1", DLT1);
		request.setAttribute("DLT2", DLT2);
		request.setAttribute("DLT3", DLT3);
		request.setAttribute("DLT4", DLT4);
		request.setAttribute("DLT5", DLT5);
		request.setAttribute("DLT6", DLT6);
		request.setAttribute("DLT7", DLT7);
	}
	
	
	
	/**
	 * 
	 根据彩种和期号查询开奖信息
	 * 
	 * @param: lotNo - 彩种
	 * @return:
	 * @exception:
	 * 
	 */
	public static TransactionBean drawalotterySelect(String play_name,
			String batchCode) {
		TransactionBean transactionBean = null;
		try {
			// 调用jrtLot接口执行查询
			JSONObject paras = new JSONObject();
			paras.put("play_name", play_name);
			paras.put("term_code", batchCode);

			JSONObject where = new JSONObject();
			where.put("lotNo", play_name);
			where.put("batchCode", batchCode);
			where.put("startDate", "");
			where.put("stopDate", "");
			where.put("startLine", "1");
			where.put("stopLine", "1");
			logger.debug("传给jrtLot的参数为paras:" + paras + ";where:" + where);

			JSONObject obj = JSonResultService.getAllJSonReuslt(paras, where,
					"", 0, "allSelect.do", "lotterySelect");
			if (obj != null
					&& LotErrorCode.OK.equals(obj.getString("error_code"))) {

				String re = obj.getString("value");
				logger.debug("得到jrtLot返回的值为:" + re);

				if (re.substring(0, 1).equals("{")) {
					JSONObject objValue = JSONObject.fromObject(re);
					if (LotErrorCode.WCHXX.equals(objValue
							.getString("error_code"))) {
						transactionBean = new TransactionBean();
						transactionBean
								.setError_code(MessageUtil.SELECT_BET_MESSAGE);
					}
				} else {
					JSONArray array = JSONArray.fromObject(re);
					if (array != null) {
						JSONObject objValue = array.getJSONObject(0);
						transactionBean = CommonUtil
								.getTransaction(objValue, 4);
					}
				}
			}
		} catch (Exception e) {
			logger.error("执行开奖查询出异常Exception:" + e.toString());
//			e.printStackTrace();
		}
		return transactionBean;
	}

	/**
	 * @ 返回jsonObject的开奖查询方法
	 * 
	 * @param play_name
	 * @param batchCode
	 * @return
	 */
	public static JSONObject drawalotterySelectAll(String play_name) {
		JSONObject rtnValue = new JSONObject();

		try {
			// 调用jrtLot接口执行查询
			JSONObject paras = new JSONObject();
			paras.put("play_name", play_name);

			JSONObject where = new JSONObject();
			where.put("lotNo", play_name);
			where.put("batchCode", "");
			where.put("startDate", "");
			where.put("stopDate", "");
			where.put("startLine", "1");
			where.put("stopLine", "1");
			logger.debug("传给jrtLot的参数为paras:" + paras + ";where:" + where);

			JSONObject obj = JSonResultService.getAllJSonReuslt(paras, where,
					"", 0, "allSelect.do", "lotterySelect");
			if (obj != null
					&& LotErrorCode.OK.equals(obj.getString("error_code"))) {

				String re = obj.getString("value");
				logger.debug("得到jrtLot返回的值为:" + re);
				if (re.substring(0, 1).equals("[")) {

					rtnValue.put("rtnRe", re);
				} else {
					JSONObject objValue = JSONObject.fromObject(re);
					if (LotErrorCode.WCHXX.equals(objValue
							.getString("error_code"))) {

						TransactionBean transactionBean = new TransactionBean();
						transactionBean
								.setError_code(MessageUtil.SELECT_BET_MESSAGE);
						JSONObject.fromObject(transactionBean);
						rtnValue.put("returnTransactionError", transactionBean);
					} else {

						rtnValue.put("rtnRe", objValue);
					}
				}
			}
		} catch (Exception e) {
			logger.error("执行开奖查询出异常Exception:" + e.toString());
//			e.printStackTrace();
		}
		return rtnValue;
	}

	/**
	 * 
	 * @Title: sortString
	 * @Description: 排序的算法
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static String sortString(String string) {
		StringBuffer buf = new StringBuffer();
		String[] str = new String[string.length() / 2];
		for (int i = 0; i < str.length; i++) {
			str[i] = string.substring(i * 2, (i + 1) * 2);
		}
		int min;
		String temp;
		for (int i = 0; i < str.length; i++) {
			min = i;
			for (int j = i + 1; j < str.length; j++) {
				if (str[min].compareTo(str[j]) > 0) {
					min = j;
				}
			}
			if (min != i) {
				temp = str[i];
				str[i] = str[min];
				str[min] = temp;
			}
			buf.append(str[i]);
		}
		str = null;
		return buf.toString();
	}

	/**
	 * 
	 * @Title: extractString
	 * @Description: 根据得到的双色球的注码排序
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static String extractString(String str) {
		String ssqWinbasecode = TransactionUtil.sortString(str);// 调用排序的方法
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < ssqWinbasecode.length(); i++) {
			list.add(ssqWinbasecode);
			Object[] o = list.toArray();
			Arrays.sort(o);
		}
		return ssqWinbasecode;
	}

}