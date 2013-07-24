package com.ruyicai.web.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.SocketTimeoutException;
import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.BetcodeResolveUtil;
import com.jrt.betcodeResolve.util.CodeUtil;
import com.jrt.betcodeResolve.util.Constant;
import com.jrt.invokeLot.service.JSonResultService;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.bean.SelectAllBean;
import com.ruyicai.bean.TransactionBean;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.meetup.memcached.MemCacheInvoke;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.BettingUtil;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.ErrorCode;
import com.ruyicai.util.InvokeLotteryUtil;
import com.ruyicai.util.LogListener;
import com.ruyicai.util.NameUtil;
import com.ruyicai.util.PlayTypeCode;
import com.ruyicai.util.ResourceBundleUtil;
import com.ruyicai.util.SimpleDateUtil;
import com.ruyicai.util.StrUtil;
import com.ruyicai.util.TorderState;

/**
 * 
 * 用户的所有查询的action
 * @author 徐丽
 * 
 */
/**
 * @author Administrator 
 *
 */
@SuppressWarnings("serial")
public class SelectAllAction extends BaseAction {
	private static Logger logger = Logger.getLogger(SelectAllAction.class);
	JSONObject jsonResult = new JSONObject();

	public static Map<String, JSONObject> kaiJiangGongGao = new HashMap();

	public JSONObject getJsonResult() {
		return jsonResult;
	}

	public void setJsonResult(JSONObject jsonResult) {
		this.jsonResult = jsonResult;
	}

	public SelectAllAction() {
		super();
	}

	private SelectAllBean selectAllBean = new SelectAllBean();// 传递的参数
	private TransactionBean transactionBean = new TransactionBean();// 返回的参数
	private Tuserinfo tuserinfo = new Tuserinfo();//用户
	private int pageCount = 20;//默认分页每页条数 
	private Date now = new Date();
	private static DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
	private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

	public Tuserinfo getTuserinfo() {
		return tuserinfo;
	}

	public void setTuserinfo(Tuserinfo tuserinfo) {
		this.tuserinfo = tuserinfo;
	}

	public TransactionBean getTransactionBean() {
		return transactionBean;
	}

	public void setTransactionBean(TransactionBean transactionBean) {
		this.transactionBean = transactionBean;
	}

	public SelectAllBean getSelectAllBean() {
		return selectAllBean;
	}

	public void setSelectAllBean(SelectAllBean selectAllBean) {
		this.selectAllBean = selectAllBean;
	}

	/**
	 * 根据彩种和期数调用lottery接口执行开奖查询返回开奖内容并返回
	 * @param lotno 彩种
	 * @param inssuenum 期数
	 * @return 开奖内容
	 * @throws IOException 
	 */
	public static JSONArray getDrawalotteryArray(String lotno, String inssuenum) throws IOException {

		//根据彩种和期数调用lottery接口执行开奖查询返回开奖内容并返回
		JSONArray twininfoList = JSONObject.fromObject(
				JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTwininfoBylotno?", "lotno="
						+ lotno + "&issuenum=" + inssuenum, "POST")).getJSONArray("value");
		logger.info("开奖查询返回数据：lotno=" + lotno + "=====" + twininfoList);
		if (!twininfoList.isEmpty()) {
			//循环返回的jsonArray对注码、时间进行转换
			for (int i = 0; i < twininfoList.size(); i++) {
				twininfoList.set(i, getDrawLotteryContents(lotno, twininfoList.getJSONObject(i)));
			}
		}
		return twininfoList;
	}

	/**
	 * 调用lottery的后台数据
	 * @param lotno
	 * @param objWininfo
	 * @return
	 * @throws IOException
	 * 
	 * {"value":[{"id":{"batchcode":"2012164","lotno":"F47104",
	 * "agencyno":"R00001"},"state":0,"info":null,"opentime":1344513600000,
	 * "winbasecode":"010203040809","winspecialcode":"01","playname":" "
	 * ,"agencyopentime":1344493019371,"actsellamt":0,"validsellamt":0,
	 * "wingrade":0,"winmoney":0,"winnumber":0,"forwardamt":0}],"errorCode":"0","isDepreciated":false}
	 */
	public static JSONObject getDrawLotteryContents(String lotno, JSONObject objWininfo) throws IOException {
		String opentime = objWininfo.getString("opentime");
		if (opentime == null || opentime.equals("null") || opentime.equals("")) {
			objWininfo.put("opentime", "");
		} else {
			objWininfo.put("opentime", format.format(new Date(Long.parseLong(opentime))));
		}
		String winbasecode = objWininfo.getString("winbasecode");
		String info = objWininfo.getString("info");
		JSONObject jsonInfos = new JSONObject();
		if (!"null".equals(info)) {
			jsonInfos = getDrawLottery(lotno, info);
		}
		//将双色球和七乐彩的注码排序
		if (lotno.equals(Constant.SSQ) || lotno.equals(Constant.QLC)) {
			objWininfo.put("winbasecode", BetcodeResolveUtil.extractString(winbasecode));
		}
		//获取大乐透的注码
		if (lotno.equals(Constant.DLT)) {
			String newCodes[] = winbasecode.split("\\+");
			objWininfo.put("winbasecode", BetcodeResolveUtil.extractString(newCodes[0].replace(" ", "")) + "+"
					+ BetcodeResolveUtil.extractString(newCodes[1].replace(" ", "")));
		}
		objWininfo.put("infos", jsonInfos);
		objWininfo.put("batchcodeArray", getInnerBetChcode(lotno, 50));
		return objWininfo;
	}

	/**
	 * 根据彩种,时间和期数调用lottery接口执行开奖查询返回开奖内容并返回
	 * @param lotno 彩种
	 * @param inssuenum 期数
	 * @return 开奖内容
	 * @throws IOException 
	 */
	public static JSONArray getDrawalotteryInfoArray(String lotno, String time, String inssuenum) throws IOException {
		//根据彩种和期数调用lottery接口执行开奖查询返回开奖内容并返回
		JSONObject obj = JSONObject
				.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getWinfolist2?lotno="
						+ lotno + "&time=" + time + "&issuenum=" + Integer.valueOf(inssuenum)));
		String url = ResourceBundleUtil.LINKURL + "/select/getWinfolist2?lotno=" + lotno + "&time=" + time
				+ "&issuenum=" + Integer.valueOf(inssuenum);
		logger.info(url + "高频彩开奖信息：" + obj);
		if (obj == null) {
			return null;
		}
		JSONArray arrWininfo = JSONArray.fromObject(obj.getString("value"));

		//循环返回的jsonArray对注码、时间进行转换
		for (int i = 0; i < arrWininfo.size(); i++) {
			arrWininfo.set(i, getDrawLotteryContents(lotno, arrWininfo.getJSONObject(i)));
		}
		return arrWininfo;
	}

	/**
	 * 根据彩种和期数查询开奖内容详细页面(生成频道页面开奖公告使用)
	 * @return
	 * @throws IOException
	 */
	public String drawalotteryDetail() throws IOException {
		try {
			//1.获取彩种和期数
			String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
			String inssuenum = request.getParameter("inssuenum") == null ? "1" : request.getParameter("inssuenum");
			request.setAttribute("lotNo", lotno);
			request.setAttribute("inssuenum", inssuenum);
			//2.根据彩种和期数调用lottery接口执行开奖查询获取开奖信息
			JSONArray arrWininfo = getDrawalotteryArray(lotno, inssuenum);
			logger.info("转换完成之后的arrWininfo=" + arrWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			return "drawalotteryDetail";

		} catch (SocketTimeoutException e) {
			e.printStackTrace();
			logger.error("获取开奖信息出异常Exception(Abnormal for drawalotteryDetail information):" + e);
			return "error";
		}
	}

	/**
	 * 根据彩种获取奖池滚存
	 * @return
	 */
	public void getlotteryProgressive() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//1.获取彩种和期数
			String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
			String inssuenum = request.getParameter("inssuenum") == null ? "1" : request.getParameter("inssuenum");
			request.setAttribute("lotNo", lotno);
			request.setAttribute("inssuenum", inssuenum);
			JSONArray arrWininfo = null;
			//2.根据彩种和期数调用lottery接口执行开奖查询获取开奖信息
			if ((lotno.equals("F47104") || lotno.equals("T01001")) && inssuenum.equals("1")) {
				arrWininfo = (JSONArray) MemCacheInvoke.mcc.get("lotteryProgressive" + lotno);
			}
			if (arrWininfo == null) {
				arrWininfo = getDrawalotteryArray(lotno, inssuenum);
			}
			logger.debug("转换完成之后的arrWininfo=" + arrWininfo);
			response.getWriter().print(arrWininfo.getJSONObject(0).toString());
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取开奖信息出异常Exception(Abnormal for drawalotteryDetail information):" + e);
		}
	}

	/**
	 * 根据彩种和期数查询开奖内容详细页面（足彩的开奖内容）
	 * @return
	 * @throws IOException 
	 */
	public String drawalotteryDetail_zc() throws IOException {

		try {
			//1.获取彩种和期数
			String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
			String inssuenum = request.getParameter("inssuenum") == null ? "1" : request.getParameter("inssuenum");
			request.setAttribute("lotNo", lotno);
			request.setAttribute("inssuenum", inssuenum);

			//2.根据彩种和期数调用lottery接口执行开奖查询获取开奖信息
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/select/getWinfolist?lotno=" + lotno + "&issuenum=" + inssuenum));
			JSONArray arrWininfo = JSONArray.fromObject(obj.getString("value"));

			for (int i = 0; i < arrWininfo.size(); i++) {
				arrWininfo.getJSONObject(i).put(
						"info",
						getDrawLottery(lotno, (arrWininfo.getJSONObject(i).get("info") == null || arrWininfo
								.getJSONObject(i).getString("info").equals("null")) ? "0_0_0,1_0_0;2_0_0" : arrWininfo
								.getJSONObject(i).getString("info")));
			}
			logger.debug("转换完成之后的arrWininfo=" + arrWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			return "drawalotteryDetail";

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取开奖信息出异常Exception(Abnormal for drawalotteryDetail information):" + e);
			return "error";
		}
	}

	/**
	 * 
	 * 从地址栏中获取彩种若存在直接获取当前彩种的最近开奖信息
	 * 否则获取所有彩种最近开奖信息 
	 * @return
	 * @throws IOException 
	 */
	public String drawalotteryIndex() throws IOException {
		try {
			//从页面上获取彩种
			String lotno = request.getParameter("lotno");
			JSONArray arrWininfo = new JSONArray();
			String flag = request.getParameter("flag") == null ? "" : request.getParameter("flag");
			//判断彩种是否存在不存在获取从配置文件中获取所有彩种
			if (lotno == null || lotno.equals("")) {
				arrWininfo = (JSONArray) MemCacheInvoke.mcc.get("arrWininfoindex");
				if (arrWininfo == null || arrWininfo.isEmpty() || arrWininfo.size() < 0) {
					String lotnoList[] = ResourceBundleUtil.LOTNO.split("\\,");
					arrWininfo = new JSONArray();
					//调用公共方法查询最近一期开奖公告内容
					for (int i = 0; i < lotnoList.length; i++) {
						JSONObject arrObject = SelectAllAction.getDrawalotteryArray(lotnoList[i], "1").getJSONObject(0);
						arrWininfo.add(arrObject);
					}
					MemCacheInvoke.mcc.set("arrWininfoindex", arrWininfo);
				}

				//否则获取当前彩种的开奖信息
			} else {
				JSONObject arrObject = getDrawalotteryArray(lotno, "1").getJSONObject(0);
				arrWininfo.add(arrObject);
			}
			logger.debug("首页所有彩种开奖的信息为" + arrWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			if (flag.equals("sslottery")) {
				return "sslotteryIndex";
			}
			return "drawalotteryIndex";

		} catch (SocketTimeoutException e) {
			logger.error("首页开奖查询异常Exception(Lottery to query the drawalotteryIndex):" + e.toString());
			return "error";
		}
	}

	/**
	 * 
	 * 生成开奖公告首页
	 *  
	 * @return
	 * @throws IOException 
	 */
	public String drawalottery() throws IOException {
		try {
			JSONArray arrWininfoF = new JSONArray();
			JSONArray arrWininfoG = new JSONArray();
			JSONArray arrWininfoT = new JSONArray();
			JSONArray arrWininfoZc = new JSONArray();
			//从配置文件中获取所有彩种
			String lotnoList[] = ResourceBundleUtil.LOTNOS.split("\\,");
			//调用公共方法查询最近一期开奖公告内容
			for (int i = 0; i < lotnoList.length; i++) {
				logger.info("首页开奖号码查询开始/从配置文件中获取所有彩种：" + lotnoList[i]);
				JSONArray twininfoList = getDrawalotteryArray(lotnoList[i], "1");
				if (twininfoList.isEmpty()) {
					continue;
				}
				
				JSONObject arrObject = twininfoList.getJSONObject(0);
				if ("F47104".equals(lotnoList[i]) || "F47103".equals(lotnoList[i]) || "F47102".equals(lotnoList[i])) {
					arrWininfoF.add(arrObject);
				} else if ("T01001".equals(lotnoList[i]) || "T01002".equals(lotnoList[i])
						|| "T01011".equals(lotnoList[i]) || "T01009".equals(lotnoList[i])
						|| "T01013".equals(lotnoList[i])) {
					arrWininfoT.add(arrObject);
				} else if ("T01003".equals(lotnoList[i]) || "T01004".equals(lotnoList[i])
						|| "T01005".equals(lotnoList[i]) || "T01006".equals(lotnoList[i])) {
					arrWininfoZc.add(arrObject);
				} else {
					arrWininfoG.add(arrObject);
				}
			}
			JSONObject arrWininfo = new JSONObject();
			arrWininfo.put("arrWininfoT", arrWininfoT);
			arrWininfo.put("arrWininfoG", arrWininfoG);
			arrWininfo.put("arrWininfoF", arrWininfoF);
			arrWininfo.put("arrWininfoZc", arrWininfoZc);
			logger.debug("首页所有彩种开奖的信息为" + arrWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			return "drawalotteryIndex";
		} catch (SocketTimeoutException e) {
			logger.error("首页开奖查询异常Exception(Lottery to query the drawalotteryIndex):" + e.toString());
			return "error";
		}
	}

	/**
	 * 处理竞彩开奖的详细信息
	 * @param data 参数的值 为  20130502 格式
	 * @return data 返回页面的格式为 2013-05-01
	 */
	public String drawalotteryJc() {
		String lotno = request.getParameter("lotno");
		String type = request.getParameter("type");
		String date = request.getParameter("date") == null ? df.format(new Date()) : request.getParameter("date");
		JSONArray jsonArray = new JSONArray();
		try {
			logger.info("执行竞彩开奖详请查询，" + ResourceBundleUtil.LINKURL + "/select/getjingcairesult?date="
					+ date.replace("-", "") + "&type=" + type);
			JSONObject tJsonObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/select/getjingcairesult?", "date=" + date.replace("-", "") + "&type=" + type, "POST"));
			jsonArray = tJsonObject.getJSONArray("value");
			for (int i = 0; i < jsonArray.size(); i++) {
				JSONObject json = jsonArray.getJSONObject(i);
				JSONObject jsonresult = json.getJSONObject("result");
				String result = jsonresult.getString("result");
				String saiguo = "";
				int z = 0;
				int k = 0;
				if (result != null && !result.equals("") && !result.equals("null")) {
					String resultArry[] = result.split("\\:");//总比分主客场的比分集合
					z = Integer.valueOf(resultArry[0]);
					k = Integer.valueOf(resultArry[1]);
					if (z - k > 0) {
						saiguo = "胜";
					} else if (z - k < 0) {
						saiguo = "负";
					} else {
						saiguo = "平";
					}
				}
				jsonresult.put("saiguo", saiguo);
				jsonresult.put("zongjinqiu", String.valueOf(z + k));

				JSONObject jsonmatches = json.getJSONObject("matches");
				String time = format.format(new Date(Long.parseLong(jsonmatches.getString("time"))));
				time = time.substring(0, time.lastIndexOf(":"));
				String weekid = SimpleDateUtil.getWeekStr(jsonmatches.getString("weekid"));
				String team[] = jsonmatches.getString("team").split("\\:");
				jsonmatches.put("weekid", weekid);
				jsonmatches.put("time", time);
				jsonmatches.put("zteam", team[0]);
				jsonmatches.put("kteam", team[1]);
			}
		} catch (IOException e) {
			logger.info("竞彩开奖详请查询出现异常：" + e.getMessage());
		}
		request.setAttribute("startDate", date);
		request.setAttribute("jcdrawlist", jsonArray);
		return "jckaijianginfos";
	}

	/**
	 * 
	 * 生成单个彩种的开奖详情页面
	 * 
	 * @return
	 * @throws IOException 
	 */
	public String drawalotteryInfo() throws IOException {
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		try {
			//从页面上获取彩种
			String lotno = request.getParameter("lotno");
			String issu = request.getParameter("issu") == "" || request.getParameter("issu") == null ? "1" : request
					.getParameter("issu");
			String time = request.getParameter("time");
			JSONArray arrWininfo = new JSONArray();
			//判断彩种是否存在不存在获取从配置文件中获取所有彩种
			if (lotno == null || lotno.equals("")) {
				//从配置文件中获取所有彩种
				String lotnoList[] = ResourceBundleUtil.LOTNOS.split("\\,");
				//调用公共方法查询最近一期开奖公告内容
				for (int i = 0; i < lotnoList.length; i++) {
					JSONObject arrObject = getDrawalotteryArray(lotnoList[i], "1").getJSONObject(0);
					arrWininfo.add(arrObject);
				}
				//否则获取当前彩种的开奖信息
			} else {
				JSONArray arrObject = new JSONArray();
				if ("T01010".equals(lotno) || "T01012".equals(lotno) || "T01007".equals(lotno)
						|| "F47107".equals(lotno)) {
					issu = issu == "1" ? "5" : issu;
					if ("".equals(time) || time == null) {
						arrObject = getDrawalotteryArray(lotno, issu);
					} else {
						String time1 = time.replaceAll("-", "");
						arrObject = getDrawalotteryInfoArray(lotno, time1.substring(2, time1.length()), issu);
					}
					request.setAttribute("arrWin", arrObject);
					if (arrObject.size() > 0) {
						arrWininfo.add(arrObject.getJSONObject(0));
					}
				} else {
					JSONObject arrObjects = getDrawalotteryArray(lotno, issu).getJSONObject(0);
					arrWininfo.add(arrObjects);
				}
			}
			logger.debug("kaijiang xiang qing " + arrWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			request.setAttribute("startDate", time);
			request.setAttribute("issu", issu);
			request.setAttribute("lotno", lotno);
			//页面上的seo设置
			request.setAttribute("title", CommonUtil.getTitle_kaijiang(lotno));
			if ("T01010".equals(lotno) || "T01012".equals(lotno) || "T01007".equals(lotno) || "F47107".equals(lotno)) {
				return "gaopingcai";
			} else {
				return "fucaiTicai";
			}
		} catch (SocketTimeoutException e) {
			logger.error("首页开奖查询异常Exception(Lottery to query the drawalotteryIndex):" + e.toString());
			return "error";
		}
	}

	public static String getStr(String str) {
		String temp_p = str;
		byte[] temp_t;
		try {
			temp_t = temp_p.getBytes("ISO8859-1");
			String temp = new String(temp_t);
			return temp;
		} catch (UnsupportedEncodingException e) {
			return null;
		}
	}

	/**
	 * 获取实际销售额_有效销售额_滚入下期金额_投注总金额及奖金、奖项等级
	 * @param info
	 * "info":"512_512_0_0,1_8_0;2_10_0;3_0_3000;4_27_200;5_68_10;6_2_5;7_0_0;8_0_0;9_0_0;10_0_3000",
	 * @return obj 封装了奖金，奖项奖级内容
	 */
	public static JSONObject getDrawLottery(String lotno, String info) {
		JSONObject obj = new JSONObject();
		//拆分奖级及销售额
		String jianji[] = info.split("\\,");
		String totalMoney[] = jianji[0].split("\\_");
		logger.info("实际销售额_有效销售额_滚入下期金额_投注总金额及奖金、奖项等级：" + info);
		obj.put("betTotalMoney", StrUtil.everyThreeByComma(Long.parseLong(totalMoney[0]) / 100));
		if (lotno.equals("T01001")) {
			obj.put("12xuan2Money", StrUtil.everyThreeByComma(Long.parseLong(totalMoney[1]) / 100));
		}
		if (totalMoney.length > 2) {
			obj.put("progressive", StrUtil.everyThreeByComma(Long.parseLong(totalMoney[2]) / 100));
		}
		logger.info("经过每隔三位用逗号隔开处理的金额：" + obj);
		JSONArray arr = new JSONArray();
		JSONObject objInfo = new JSONObject();
		//获取奖项奖金及注数
		if (jianji.length > 1) {
			String wines[] = jianji[1].split("\\;");
			for (int i = 0; i < wines.length; i++) {
				String wingrades[] = wines[i].split("\\_");
				if (lotno.equals("T01001")) {
					if (wingrades[0].equals("11") || wingrades[0].equals("12") || wingrades[0].equals("13")
							|| wingrades[0].equals("14") || wingrades[0].equals("15") || wingrades[0].equals("16")
							|| wingrades[0].equals("17")) {
						objInfo.put("zhuijia", "追加投注");
					} else {
						objInfo.put("zhuijia", "基本投注");
					}
				}
				objInfo.put("wingrade", RewriteWingrade(lotno, wingrades[0]));
				objInfo.put("winnumber", wingrades[1] + "注");
				objInfo.put("winmoney", (Long.parseLong(wingrades[2]) / 100) + "元");
				arr.add(objInfo);
			}
		}
		if (lotno.equals("T01001")) {
			arr = RewriteWinInfosByDlt(arr);
		}
		obj.put("prizeInfos", arr);
		logger.info("实际销售额_有效销售额_滚入下期金额_投注总金额及奖金、奖项等级处理结果：" + obj);
		return obj;
	}

	/**
	 * \  处理大乐透基本投注信息和追加信息
	 * @param wininfo
	 * @return
	 */
	public static JSONArray RewriteWinInfosByDlt(JSONArray wininfo) {
		JSONArray jsarr = new JSONArray();
		JSONArray arrzhuijia = new JSONArray();
		for (int i = 0; i < wininfo.size(); i++) {
			String zhuijia = wininfo.getJSONObject(i).getString("zhuijia");
			if (zhuijia.equals("追加投注")) {
				arrzhuijia.add(wininfo.getJSONObject(i));
			} else {
				jsarr.add(wininfo.getJSONObject(i));
			}
		}
		JSONArray lastarr = new JSONArray();
		for (int i = 0; i < jsarr.size(); i++) {
			JSONObject jsson = jsarr.getJSONObject(i);
			String wingrade = jsson.getString("wingrade");
			lastarr.add(jsson);
			for (int j = 0; j < arrzhuijia.size(); j++) {
				JSONObject arr2 = arrzhuijia.getJSONObject(j);
				String wingrade1 = arr2.getString("wingrade");
				if (wingrade.equals(wingrade1)) {
					lastarr.add(arr2);
					break;
				}
			}
		}
		return lastarr;
	}

	/**
	 * 修改奖级为 一等奖 二等奖样式
	 * @param lotno
	 * @param winGrade
	 * @return
	 */
	public static String RewriteWingrade(String lotno, String winGrade) {
		if (lotno.equals("T01002") || lotno.equals("F47103")) {
			if (winGrade.equals("1")) {
				winGrade = "一等奖";
			} else if (winGrade.equals("2")) {
				winGrade = "组三";
			} else if (winGrade.equals("3")) {
				winGrade = "组六";
			}
			return winGrade;
		} else {
			if (!StringUtils.isBlank(winGrade)) {
				if (winGrade.equals("1") || winGrade.equals("11")) {
					winGrade = "一等奖";
				} else if (winGrade.equals("2") || winGrade.equals("12")) {
					winGrade = "二等奖";
				} else if (winGrade.equals("3") || winGrade.equals("13")) {
					winGrade = "三等奖";
				} else if (winGrade.equals("4") || winGrade.equals("14")) {
					winGrade = "四等奖";
				} else if (winGrade.equals("5") || winGrade.equals("15")) {
					winGrade = "五等奖";
				} else if (winGrade.equals("6") || winGrade.equals("16")) {
					winGrade = "六等奖";
				} else if (winGrade.equals("7") || winGrade.equals("17")) {
					winGrade = "七等奖";
				} else if (winGrade.equals("8")) {
					winGrade = "八等奖";
				} else if (winGrade.equals("18")) {
					winGrade = "12选2";
				}
				return winGrade;
			}
		}
		return "";
	}

	/**
	 * 
	 * 获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
	 * @return
	 */
	public void getOnelottery() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String lotno = request.getParameter("lotno");
			String batchcode = request.getParameter("batchcode");

			JSONObject objWininfo = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTwininfo?", "lotno="
							+ lotno + "&issue=" + batchcode, "POST")).getJSONObject("value");
			//调用公告方法设置各个彩种的信息及期号内容
			objWininfo = getDrawLotteryContents(lotno, objWininfo);
			logger.debug("根据彩种和期号查询到彩票的转换之后的信息：===>" + objWininfo);
			response.getWriter().print(objWininfo);

		} catch (IOException e) {
			logger.error("根据彩种和期号查询到彩票的开奖异常Exception(Lottery to query the getOnelottery):" + e);
			e.printStackTrace();
		}

	}

	/**
	 * 
	 * 获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
	 * @return
	 */
	public String getOnelotteryinfo() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String lotno = request.getParameter("lotno");
			String batchcode = request.getParameter("batchcode");
			JSONObject objWininfo = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTwininfo?", "lotno="
							+ lotno + "&issue=" + batchcode, "POST")).getJSONObject("value");

			JSONArray arrWininfo = new JSONArray();
			//调用公告方法设置各个彩种的信息及期号内容
			if (!objWininfo.isNullObject()) {
				objWininfo = getDrawLotteryContents(lotno, objWininfo);
				arrWininfo.add(objWininfo);
			}
			request.setAttribute("lotno", lotno);
			logger.debug("根据彩种和期号查询到彩票的转换之后的信息：===>" + objWininfo);
			request.setAttribute("arrWininfo", arrWininfo);
			if ("T01010".equals(lotno) || "T01012".equals(lotno) || "T01007".equals(lotno)) {
				return "gaopingcai";
			} else {

				return "fucaiTicai";
			}

		} catch (IOException e) {
			logger.error("根据彩种和期号查询到彩票的开奖异常Exception(Lottery to query the getOnelottery):" + e);
			e.printStackTrace();
			return "error";
		}

	}

	/**返回路径的方法
	 * 
	 * 获取指定play_name(彩种)和batchcode（期号）查询彩票的开奖信息
	 * @return
	 */
	public String getOnelotteryInfo() {

		try {
			String lotno = request.getParameter("lotno");
			String batchcode = request.getParameter("batchcode");

			JSONObject objWininfo = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTwininfo?", "lotno="
							+ lotno + "&issue=" + batchcode, "POST")).getJSONObject("value");
			//调用公告方法设置各个彩种的信息及期号内容
			objWininfo = getDrawLotteryContents(lotno, objWininfo);
			logger.debug("根据彩种和期号查询到彩票的转换之后的信息：===>" + objWininfo);
			JSONArray arrWininfo = new JSONArray();
			arrWininfo.add(objWininfo);
			request.setAttribute("arrWininfo", arrWininfo);

			return "drawalotteryIndex";
		} catch (IOException e) {
			logger.error("根据彩种和期号查询到彩票的开奖异常Exception(Lottery to query the getOnelottery):" + e);
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 
	 * 当前期号查询
	 * @return
	 * 
	 */
	public String batchCodeSelect() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String lotNo = request.getParameter("lotNo");
			/*********************
			 * 将老接口去掉，调用lottery新接口查询期号"batchCode" 和 截止时间"endTime"
			 * ********************/
			JSONObject js = InvokeLotteryUtil.getIssueObject(lotNo);
			logger.info("期号查询接口返回结果:" + js);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String sysTimenow = sdf.format(new Date());
			//获取系统当前时间 毫秒数
			String sysTime = String.valueOf((new Date()).getTime());
			js.put("sysTime", sysTime);
			js.put("sysTimenow", sysTimenow);
			LogListener.utilLog(
					"调用后台查询期号的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
					js.toString(), null, "info", "com.ruyicai.web.action.SelectAllAction.batchCodeSelect()");
			response.getWriter().print(js);
			return null;
		} catch (Exception e) {
			logger.error("当前期号查询出异常Exception(Check out the current exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 
	 * 查询当前期号和它之前的期(新增)
	 * @return
	 * 
	 */
	public String beforeBatchCodeSelect() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String lotNo = request.getParameter("lotNo");
			String num = request.getParameter("num");
			JSONArray jsonArray = InvokeLotteryUtil.getBeforeIssueArray(lotNo, num);
			logger.info("查询前几期信息接口返回结果:" + jsonArray);
			LogListener.utilLog(
					"调用后台查询前几期信息的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
					jsonArray.toString(), null, "info",
					"com.ruyicai.web.action.SelectAllAction.beforeBatchCodeSelect()");
			response.getWriter().print(jsonArray);
			return null;
		} catch (Exception e) {
			logger.error("当前期号查询出异常Exception(Check out the current exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 
	 * 当前期号查询 用于系统自动生成静态页 用的
	 * @return
	 * @throws IOException 
	 * 
	 */
	public String batchCodeSelectTime() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {

			String lotNo = request.getParameter("lotNo");
			String[] lotNoStr = lotNo.split("-");
			if (lotNoStr.length > 0) {
				for (int i = 0; i < lotNoStr.length; i++) {
					/*********************
					 * 将老接口去掉，调用lottery新接口查询期号"batchCode" 和 截止时间"endTime"
					 * ********************/
					JSONObject js = InvokeLotteryUtil.getIssueObject(lotNoStr[i]);
					String endtime = js.getString("end_time");

					logger.info("调用后台查询期号的方法得到返回的json=" + js);
					LogListener
							.utilLog(
									"调用后台查询期号的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
									js.toString(), null, "info",
									"com.ruyicai.web.action.SelectAllAction.batchCodeSelect()");
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					String nowdate = sdf.format(new Date());
					if (endtime.indexOf(nowdate) > -1) {
						request.setAttribute("endTime" + (i + 1) + "ck", 1);
					} else {
						request.setAttribute("endTime" + (i + 1) + "ck", 0);
					}
					if (endtime.indexOf(" ") > -1) {
						endtime = endtime.substring(endtime.indexOf(" "), endtime.length());
					}
					request.setAttribute("endTime" + (i + 1), endtime);
				}
			}
			return "selectTime";

		} catch (SocketTimeoutException e) {
			logger.error("当前期号查询出异常Exception(Check out the current exception of No):" + e.toString());
			return "error";
		}

	}

	/**购彩大厅中今日截止数据
	 * 
	 * 当前期号查询 
	 * @return
	 * @throws IOException 
	 * 
	 */
	public String nowbatchCodeSelect() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String lotNo = request.getParameter("lotNo");
			String type = request.getParameter("type") == null ? "" : request.getParameter("type");
			String[] lotNoStr = lotNo.split("-");
			if (lotNoStr.length > 0) {
				for (int i = 0; i < lotNoStr.length; i++) {
					JSONObject js = InvokeLotteryUtil.getIssueObject(lotNoStr[i]);
					String endtime = js.getString("end_time");
					request.setAttribute("retValue" + i, js);

					if (lotNoStr[i].equals("F47104") || lotNoStr[i].equals("T01001") || lotNoStr[i].equals("F47102")
							|| lotNoStr[i].equals("T01009")) {
						//获取奖池
						JSONArray twininfoList = JSONObject.fromObject(
								JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
										+ "/select/getTwininfoBylotno?", "lotno=" + js.getString("lotno")
										+ "&issuenum=1", "POST")).getJSONArray("value");
						if (twininfoList.size() > 0 && !twininfoList.getJSONObject(0).get("info").equals("null")) {
							logger.info("info::::" + twininfoList.toString());
							JSONObject info = getDrawLottery(js.getString("lotno"), twininfoList.getJSONObject(0)
									.getString("info"));
							request.setAttribute("progressive" + (i),
									info.get("progressive") != null ? info.getString("progressive") : "-");
						} else {
							request.setAttribute("progressive" + (i), "-");
						}
					}
					LogListener
							.utilLog(
									"调用后台查询期号的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
									js.toString(), null, "info",
									"com.ruyicai.web.action.SelectAllAction.batchCodeSelect()");
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

					String nowdate = sdf.format(new Date());
					if (endtime.indexOf(nowdate) > -1) {
						request.setAttribute("endTime" + (i + 1) + "ck", 1);
					} else {
						request.setAttribute("endTime" + (i + 1) + "ck", 0);
					}
					request.setAttribute("endTime" + (i + 1), endtime);
				}
			}
			if (type.equals("loginuser")) {
				return "user_jinribest";
			} else {
				return "ruyicai_jinrijiezhi";
			}
		} catch (SocketTimeoutException e) {
			logger.error("当前期号查询出异常Exception(Check out the current exception of No):" + e.toString());
			return "error";
		}

	}

	/**
	 * 用户单张订单中票超过五条的其他所有信息
	 * @return
	 */

	public String getMoreBetSelect() {
		try {
			//界面获取参数
			String orderid = request.getParameter("orderid") == null ? "" : request.getParameter("orderid");

			JSONObject torderObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTorder?" + "&orderid="
							+ orderid)).getJSONObject("value");

			int betnum = torderObj.getInt("betnum");
			String lotno = torderObj.getString("lotno");
			String startTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
					.format(new Date(torderObj.getLong("createtime"))).substring(0, 10).replace("-", "");
			String batchcode = torderObj.getString("batchcode");

			torderObj.put("createtime", format.format(new Date(torderObj.getLong("createtime"))));
			if (torderObj.getInt("orderstate") == TorderState.orderState_Null.value()) {
				torderObj.put("orderstate", TorderState.orderState_Null.memo());
			} else if (torderObj.getInt("orderstate") == TorderState.orderState_ok.value()) {
				torderObj.put("orderstate", TorderState.orderState_ok.memo());
			} else if (torderObj.getInt("orderstate") == TorderState.orderState_wait.value()) {
				torderObj.put("orderstate", TorderState.orderState_wait.memo());
			}
			request.setAttribute("torder", torderObj);

			//******新接口 开始*********//////////// 
			JSONObject tlotObj2 = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTorderDetail?", "orderid="
							+ orderid, "POST")).getJSONObject("value");

			JSONObject js = getWinInfo(lotno, batchcode);
			String code = "";
			if (CommonUtil.getBackValue("errorCode", js).equals(ErrorCode.OK.value)) {
				String winCode = formatString(js.getString("winbasecode"));//获取普通开奖号码
				String winspecialcode = formatString(js.getString("winspecialcode"));//开奖的特殊号码
				if (winspecialcode != null) {
					code = winCode + "＋" + winspecialcode;
				} else {
					code = winCode;
				}
				betcodeFormat(tlotObj2.getJSONObject("torder"), false, 0, request, code);
			} else {
				betcodeFormat(tlotObj2.getJSONObject("torder"), false, 0, request, null);
			}

			//******新接口 结束需要的内容
			//			JSONArray jsonArr = new CommonUtil().addRed(tlotObj2,lotno,batchcode);
			request.setAttribute("lot", tlotObj2.getJSONObject("torder").getJSONArray("tlots"));//票信息

			//调用 查询对阵信息的方法
			this.getAgainstInfo(lotno, batchcode,
					tlotObj2.getJSONObject("torder").getJSONArray("tlots").getJSONObject(0).getString("betcode"));

		} catch (Exception e) {
			e.printStackTrace();
		}
		return "getMoreBetInfo";
	}

	/**
	 * 将输入的注码转换成数组
	 * @param strArray 输入参数:注码数组,格式为字符串
	 * @return        输出参数:注码数组
	 */
	public static String formatString(String m) {
		int l = m.length();
		int h = l / 2;
		int n = 0;
		String d = "";
		for (int i = 0; i < h; i++) {
			String ss = m.substring(n, n + 2);
			n = n + 2;
			ss = ss + "，";
			d += ss;
		}
		d = d.substring(0, d.length() - 1);
		return d;
	}

	/**根据orderid 查询五条投注记录的信息,     投注记录详情查询
	 * @return
	 */
	public String getBetSelect() {
		String type = "";
		try {
			//获取用户信息
			String userno = "";
			JSONObject jsonObject = JSONReslutUtil.getUserInfo(request);
			JSONObject tusers = null;
			if (jsonObject != null) {
				tusers = jsonObject.getJSONObject("value");
				userno = tusers.getString("userno");
			}
			//界面获取参数
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String orderid = request.getParameter("flowno") == null ? "" : request.getParameter("flowno");
			type = request.getParameter("type") == null || "null".equals(request.getParameter("type")) ? "-1" : request
					.getParameter("type");
			//判断是否是当前登录用户
			String checkNo = "1";
			//根据orderid得到票的信息
			//参数userno=用户编号&beginTime=开始时间&endTime=结束时间&startLine=开始记录数（默认为0）&endLine=结束记录数（默认为10）
			JSONObject torderObj = null;
			if (!"".equals(orderid) && orderid != null) {
				torderObj = JSONObject.fromObject(
						JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTorder?" + "&orderid="
								+ orderid)).getJSONObject("value");
			}
			String bettype = torderObj.getString("bettype");
			if (bettype != null && !"".equals(bettype)) {
				if (Integer.parseInt(bettype) != 3) {//不是合买的情况下    需要判断是否是登录人的订单
					String userno1 = torderObj.getString("userno");
					if (!userno1.equals(userno)) {
						checkNo = "0";
					}
				}
			}
			String lotno = torderObj.getString("lotno");
			String startTime = format.format(new Date(torderObj.getLong("createtime"))).substring(0, 10)
					.replace("-", "");
			String batchcode = torderObj.getString("batchcode");
			String betcode = torderObj.getString("betcode");
			String betcodeCopy = "";
			if (betcode.indexOf("$") > -1) {
				String[] str = betcode.split("\\$");
				String[] s1 = str[0].split(",");
				String[] s2 = str[1].split(",");
				for (int i = 0; i < s1.length; i++) {
					if (s1[i].equals("#")) {
						betcodeCopy = betcodeCopy + s2[i] + ",";
					} else {
						betcodeCopy = betcodeCopy + s1[i] + ",";
					}
				}
			}
			torderObj.put("createtime", format.format(new Date(torderObj.getLong("createtime"))));
			if (torderObj.getInt("orderstate") == TorderState.orderState_Null.value()) {
				torderObj.put("orderstate", TorderState.orderState_Null.memo());
			} else if (torderObj.getInt("orderstate") == TorderState.orderState_ok.value()) {
				torderObj.put("orderstate", TorderState.orderState_ok.memo());
			} else if (torderObj.getInt("orderstate") == TorderState.orderState_wait.value()) {
				torderObj.put("orderstate", TorderState.orderState_wait.memo());
			} else if (torderObj.getInt("orderstate") == TorderState.orderState_Cancel.value()) {
				torderObj.put("orderstate", TorderState.orderState_Cancel.memo());
			}
			request.setAttribute("torder", torderObj);

			JSONObject tlotObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTorderDetail?", "orderid="
							+ orderid + "&flag=" + type, "POST")).getJSONObject("value");

			betcodeFormat(tlotObj.getJSONObject("torder"), true, 0, request, null);

			//获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
			JSONObject twinInfoJsonObj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
					ResourceBundleUtil.LINKURL + "/select/getTwininfo?", "lotno=" + lotno + "&issue=" + batchcode,
					"POST"));
			logger.info("根据彩种和期号查询到彩票的开奖信息是：twinInfoJsonObj===>" + twinInfoJsonObj);

			//如果这张彩票还未开奖，则隐藏开奖部分的信息
			if (CommonUtil.getBackValue("errorCode", twinInfoJsonObj).equals(ErrorCode.OK.value)) {
				twinInfoJsonObj = twinInfoJsonObj.getJSONObject("value");

				twinInfoJsonObj = getDrawLotteryContents(lotno, twinInfoJsonObj);
				String changeWinCode = twinInfoJsonObj.getString("winbasecode");
				if (Constant.SSQ.equals(lotno) || Constant.QLC.equals(lotno) || Constant.SD.equals(lotno)) {
					String newChangeWincode = "";
					for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").length() - 1; k += 2) {
						newChangeWincode += twinInfoJsonObj.getString("winbasecode").substring(k, k + 2) + ",";
					}
					changeWinCode = newChangeWincode.substring(0, newChangeWincode.length() - 1);
					betcodeFormat(tlotObj.getJSONObject("torder"), true, 0, request, changeWinCode + "＋"
							+ twinInfoJsonObj.getString("winspecialcode"));
				} else if (Constant.DLT.equals(lotno)) {
					String red = "";
					String blue = "";
					for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").substring(0, 10).length() - 1; k += 2) {
						red += twinInfoJsonObj.getString("winbasecode").substring(k, k + 2) + ",";
					}
					if (twinInfoJsonObj.getString("winbasecode").length() > 14) {
						for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").substring(11).length() - 1; k += 2) {
							blue += twinInfoJsonObj.getString("winbasecode").substring(11).substring(k, k + 2) + ",";
						}
					} else {
						for (int k = 0; k < twinInfoJsonObj.getString("winspecialcode").length() - 1; k += 2) {
							blue += twinInfoJsonObj.getString("winspecialcode").substring(k, k + 2) + ",";
						}
					}
					changeWinCode = red.substring(0, red.length() - 1) + "＋" + blue.substring(0, blue.length() - 1);
					betcodeFormat(tlotObj.getJSONObject("torder"), true, 0, request, changeWinCode);
				} else if (Constant.EEXW.equals(lotno)) {
					betcodeFormat(tlotObj.getJSONObject("torder"), true, 0, request, changeWinCode.replace(" ", ",")
							+ "＋" + twinInfoJsonObj.getString("winspecialcode"));
				} else {
					betcodeFormat(tlotObj.getJSONObject("torder"), true, 0, request, changeWinCode + "＋"
							+ twinInfoJsonObj.getString("winspecialcode"));
				}
				logger.info("本期彩票开奖后，所有的信息：twinInfoJsonObj===>" + twinInfoJsonObj);
				request.setAttribute("winInfo", twinInfoJsonObj);

			}
			//获取当前票对应的期信息
			JSONObject tlotctrlJsonObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTlotctrl?" + "lotno="
							+ lotno + "&batchcode=" + batchcode)).getJSONObject("value");

			logger.info("获取到的当前票的信息：tlotctrlJsonObj===>" + tlotctrlJsonObj);
			//存储页面所需要的内容
			request.setAttribute("lot", tlotObj.getJSONObject("torder").getJSONArray("tlots"));//票信息
			request.setAttribute("lotSize", tlotObj.getJSONObject("torder").getJSONArray("tlots").size());//票信息
			if ("2".equals(type) || "1".equals(type)) {
				String name = tlotObj.getJSONObject("tuserinfo").getString("nickname");
				String phone = (tlotObj.getJSONObject("tuserinfo").getString("mobileid") != null
						&& tlotObj.getJSONObject("tuserinfo").getString("mobileid").length() > 6 ? tlotObj
						.getJSONObject("tuserinfo").getString("mobileid").substring(0, 4)
						+ "***" : "-");
				request.setAttribute("zengcaiName", name.equals(" ") || name == "null" ? phone : name);//票信息
			}
			if (!(tlotctrlJsonObj == null || tlotctrlJsonObj.equals("null") || tlotctrlJsonObj.isNullObject())) {
				tlotctrlJsonObj.put("endtime", format.format(new Date(tlotctrlJsonObj.getLong("endbettime"))));
			}

			request.setAttribute("lotctrl", tlotctrlJsonObj);//票对应的期信息
			request.setAttribute("checkNo", checkNo);
			request.setAttribute("betcodeCopy", betcodeCopy);
			request.setAttribute("username", NameUtil.getNameUtilJson(tusers));
			//调用 查询对阵信息的方法(分竞彩、其它足彩)
			if (Constant.JCZQ_HH.equals(lotno) || Constant.JCLQ_HH.equals(lotno) || Constant.JCZQ_RSPF.equals(lotno)
					|| Constant.JCZQ_SPF.equals(lotno) || Constant.JCZQ_BF.equals(lotno)
					|| Constant.JCZQ_BSF.equals(lotno) || Constant.JCZQ_ZJQ.equals(lotno)
					|| Constant.JCLQ_SFC.equals(lotno) || Constant.JCLQ_SF.equals(lotno)
					|| Constant.JCLQ_RFSF.equals(lotno) || Constant.JCLQ_DXF.equals(lotno)) {
				if (tlotObj.has("torder")) {
					//获取时间、周次、场次、
					JSONArray lastArray = new JSONArray();
					JSONObject pastMethod = new JSONObject();
					String allmethod = "";
					JSONObject torder = tlotObj.getJSONObject("torder");
					String[] everylot = torder.getString("betcode").split("\\!");
					//过关方式 
					for (int s = 0; s < everylot.length; s++) {
						String[] torstring = everylot[s].split("\\^");
						for (int i = 0; i < torstring.length; i++) {
							String[] stringl = (torstring[i]).split("\\|");
							if (i == 0) {
								String[] gettime = (stringl[0]).split("@");
								String pmethod = gettime[0];
								String method = BettingUtil.getLotnoBetType(pmethod, lotno, "").getString("memo") + "、";
								allmethod = allmethod + method;
							}
						}
					}
					allmethod = BettingUtil.quchuSame(allmethod);
					//获取竞彩的出票赔率"00000137"
					JSONObject jcsp = this.getJingCaiSp(lotno, orderid, userno, "", "");
					JSONArray arraylist = jcsp.getJSONArray("list");
					logger.info("获取到的当前票的信息，赔率是否为null：peilu===>" + arraylist);
					JSONObject peilvObj = getJingCaiPeilv(arraylist);
					//对阵信息
					//String [] torstring = everylot[0].split("\\^");
					String[] torstring = BettingUtil.getNew(everylot);
					String time = "";
					for (int i = 0; i < torstring.length; i++) {
						String[] stringl = (torstring[i]).split("\\|");
						if (i == 0) {
							String[] gettime = (stringl[0]).split("@");
							time = gettime[1];
						} else {
							int specilChar = (stringl[0]).indexOf("$");
							if (specilChar > -1)
								time = stringl[0].substring(specilChar + 1);
							else
								time = stringl[0];
						}

						String weekid = stringl[1];
						String teamid = stringl[2];
						String tz = "";
						if (Constant.JCLQ_HH.equals(lotno) || Constant.JCZQ_HH.equals(lotno)) {//对 混合型投注的解析
							tz = CodeUtil.getLQTouzhu(stringl[4], stringl[3]);
						} else {
							tz = CodeUtil.getLQTouzhu(stringl[3], lotno);
						}
						//获取到选项数据
						JSONObject returnarray = this.getJingCaiAgainstInfo(lotno, time, weekid, teamid);
						String letpoint = returnarray.getJSONObject("matches").getString("letpoint");
						if (Constant.JCLQ_HH.equals(lotno) || Constant.JCLQ_SFC.equals(lotno)
								|| Constant.JCLQ_SF.equals(lotno) || Constant.JCLQ_RFSF.equals(lotno)
								|| Constant.JCLQ_DXF.equals(lotno)) {
							JSONObject result = returnarray.getJSONObject("result");
							if (result.getString("result") != "null") {
								String[] resultArr = (result.getString("result")).split("\\:");
								result.put("result", resultArr[1] + ":" + resultArr[0]);
								float z = 0;
								z = Float.valueOf(resultArr[0]);
								if (letpoint != null && !letpoint.equals("") && Constant.JCLQ_RFSF.equals(lotno)) {
									if (letpoint.indexOf("+") > -1)
										letpoint = letpoint.replace("+", "");
									z = z + Float.valueOf(letpoint);
								}
								if (z > Float.valueOf(resultArr[1])) {
									result.put("newResult", "主胜");
									result.put("newResult1", "小分");
								} else {
									result.put("newResult", "主负");
									result.put("newResult1", "大分");
								}
							} else {
								result.put("newResult", "");
							}
						}

						//获取竞彩足球彩果
						if (Constant.JCZQ_HH.equals(lotno) || Constant.JCZQ_RSPF.equals(lotno)
								|| Constant.JCZQ_SPF.equals(lotno) || Constant.JCZQ_ZJQ.equals(lotno)
								|| Constant.JCZQ_BF.equals(lotno) || Constant.JCZQ_BSF.equals(lotno)) {
							String caiguo = getJingCaiCaiGuo(lotno, time, weekid, teamid, letpoint);
							returnarray.put("caiguo", caiguo);
						}
						//赔率
						String peilv = "";
						String key = time + "*" + weekid + "*" + teamid;
						if (peilvObj != null && !peilvObj.equals("") && peilvObj.containsKey(key)) {
							peilv = peilvObj.getString(key);
						}
						returnarray.put("pv", peilv);
						returnarray.put("selectInfo", tz);
						lastArray.add(returnarray);
					}
					String lastmethod = allmethod.substring(0, allmethod.length() - 1);
					pastMethod.put("pastMethod", lastmethod);
					request.setAttribute("pastMethod", pastMethod);
					logger.info("获取到竞彩的对阵信息是：" + lastArray);
					request.setAttribute("lastArray", lastArray);
				}

			} else {
				if (!(tlotctrlJsonObj == null || tlotctrlJsonObj.equals("null") || tlotctrlJsonObj.isNullObject())) {
					this.getAgainstInfo(lotno, batchcode,
							JSONObject.fromObject(JSONArray.fromObject(tlotObj.getJSONArray("tlots")).get(0))
									.getString("betcode"));
				}
			}
		} catch (Exception e) {
			logger.error("获取投注记录出异常Exception(Access to betting records abnormal):" + e.toString());
			e.printStackTrace();
		}
		if ("2".equals(type) || "1".equals(type)) {
			request.setAttribute("type", type);
			return "giftBetInfo";
		}
		{
			return "getOneBetInfo";
		}
	}

	/**
	    * 查询足彩的对阵信息（老接口）
	 * @param lotno
	 * @param batchCode
	 * @return
	 * @throws Exception
	 */
	public void getAgainstInfo(String lotno, String batchCode, String currentbetcode) throws Exception {
		//调用老接口查询对阵信息、查询投注的选号情况>>>>>只针对足彩
		if (lotno.equals(Constant.SFC14) || lotno.equals(Constant.SFC14_DM) || lotno.equals(Constant.SFC9)
				|| lotno.equals(Constant.SFC9_DM) || lotno.equals(Constant.BQC) || lotno.equals(Constant.BQC_DM)
				|| lotno.equals(Constant.JQC) || lotno.equals(Constant.JQC_DM) || lotno.equals(Constant.JCZQ_RSPF)
				|| lotno.equals(Constant.JCZQ_SPF)) {
			JSONObject where = new JSONObject();
			where.put("lotno", lotno);
			where.put("batchCode", batchCode);
			JSONObject obj = JSonResultService.getAllJSonReuslt(where, null, null, 0, "zcAction.do", "getFlData");

			if (!obj.isNullObject() && obj.getString("error_code").equals(LotErrorCode.OK)) {
				JSONArray againstValue = JSONArray.fromObject(JSONObject.fromObject(obj.get("value")).get("value"));
				request.setAttribute("againstValue", againstValue);
			}
			int chooseNum = 3;
			if (lotno.equals(Constant.JQC_DM) || lotno.equals(Constant.JQC))
				chooseNum = 4;
			//调用公共方法，获得单选、双选、三选的信息
			JSONObject selectNum = CodeUtil.getSelectNum(currentbetcode, chooseNum);
			request.setAttribute("selectNum", selectNum);

		}
	}

	/** 查询竞彩的对阵数据信息
	 * 
	 * @param lotno     lotno
	 * @param teamid    场次
	 */
	public JSONObject getBeiDanAgainstInfo(String lotno, String batchcode, String teamid) throws Exception {
		String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/findbeidanmatchById",
				"lotno=" + lotno + "&no=" + teamid + "&batchcode=" + batchcode, "POST");
		JSONObject returnObject = JSONObject.fromObject(re);
		logger.info("获取到的北单对阵信息是：" + returnObject);
		if (!returnObject.isNullObject() && returnObject.getString("errorCode").equals("0")) {
			JSONObject againstValue = JSONObject.fromObject(JSONObject.fromObject(returnObject.get("value")));
			return againstValue;
		}
		return null;
	}

	/** 查询竞彩的对阵数据信息 包含赛果  开奖赔率
	 * 
	 * @param lotno     lotno
	 * @param teamid    场次
	 */
	public JSONObject getBeiDanAgainstInfoForResult(String lotno, String batchcode, String teamid) throws Exception {
		String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/findbeidanMatchAndResult",
				"lotno=" + lotno + "&no=" + teamid + "&batchcode=" + batchcode, "POST");
		JSONObject returnObject = JSONObject.fromObject(re);
		logger.info("获取到的北单对阵信息是：" + returnObject);
		if (!returnObject.isNullObject() && returnObject.getString("errorCode").equals("0")) {
			JSONObject againstValue = JSONObject.fromObject(JSONObject.fromObject(returnObject.get("value")));
			return againstValue;
		}
		return null;
	}

	/** 查询竞彩的对阵数据信息
	 * 
	 * @param lotno  竞彩lotno
	 * @param time   时间
	 * @param weekid   周数
	 * @param teamid    场次
	 */
	public JSONObject getJingCaiAgainstInfo(String lotno, String time, String weekid, String teamid) throws Exception {
		JSONObject returnObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
				+ "/select/getjingcaimatches?lotno=" + lotno + "&day=" + time + "&weekid=" + weekid + "&teamid="
				+ teamid));
		logger.info("获取到的竞彩对阵信息是：" + returnObject);
		if (!returnObject.isNullObject() && returnObject.getString("errorCode").equals("0")) {
			JSONObject againstValue = JSONObject.fromObject(JSONObject.fromObject(returnObject.get("value")));
			return againstValue;
		}
		return null;
	}

	/**
	 * 获取竞彩赔率
	 * @param arraylist 竞彩票信息
	 * @return
	 */
	public JSONObject getJingCaiPeilv(JSONArray arraylist) {
		JSONObject peilvobj = new JSONObject();
		String str2 = "";
		if (arraylist.size() > 0) {
			for (int s = 0; s < arraylist.size(); s++) {
				JSONObject obj = (JSONObject) arraylist.get(arraylist.size() - 1 - s);
				String pv = obj.getString("peilu");
				if (!("null".equals(pv)) && pv != null && !pv.equals("")) {
					String[] pvArry = pv.split("\\^");
					for (int i = 0; i < pvArry.length; i++) {
						String[] string2 = (pvArry[i]).split("\\|");

						//用于后面针对文件上传的赔率是否添加的判断
						boolean flag = false;
						if (pvArry[i].contains("(")) {
							if (!str2.contains(pvArry[i].substring(0, pvArry[i].indexOf("(")))) {
								str2 += pvArry[i].substring(0, pvArry[i].indexOf("(")) + "#";
								flag = true;
							}
						} else {
							if (!str2.contains(pvArry[i].substring(0, pvArry[i].indexOf(":")))) {
								str2 += pvArry[i].substring(0, pvArry[i].indexOf(":")) + "#";
								flag = true;
							}
						}

						String str = "";
						String key = string2[0].substring(0, string2[0].length() - 1);
						if (peilvobj == null || peilvobj.equals("") || !peilvobj.containsKey(key)) {
							for (int j = 1; j < string2.length; j++) {
								String[] strPl = (string2[j].split(":"));
								str = str + strPl[1] + ",";
							}
							peilvobj.put(key, str);
						} else if (peilvobj.containsKey(key)) {
							//这个判断是针对文件上传时赔率的显示问题，对别的无影响
							str = peilvobj.getString(key);
							for (int j = 1; j < string2.length; j++) {
								String[] strPl = (string2[j].split(":"));
								if (flag) {
									str = str + strPl[1] + ",";
								}
							}
							peilvobj.put(key, str);
						}
					}
				}
			}
		}

		return peilvobj;
	}

	/**
	 * 获取竞彩足球彩果
	 * @param lotno彩种编号
	 * @param day时间
	 * @param weekid周数
	 * @param teamid场次
	 * @return
	 */
	public String getJingCaiCaiGuo(String lotno, String day, String weekid, String teamid, String letpoint) {
		String caiguo = "";
		try {
			JSONObject resultObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getjingcaimatches?lotno="
							+ lotno + "&day=" + day + "&teamid=" + teamid + "&weekid=" + weekid))
					.getJSONObject("value");

			JSONObject jsonresult = resultObj.getJSONObject("result");
			if (jsonresult != null && !jsonresult.equals("") && !jsonresult.equals("null")) {
				String result = jsonresult.getString("result");
				int z = 0;
				int k = 0;
				if (result != null && !result.equals("") && !result.equals("null")) {
					String resultArry[] = result.split("\\:");//总比分主客场的比分集合
					if (Constant.JCZQ_RSPF.equals(lotno)) {
						if (letpoint != null && !letpoint.equals("")) {
							if (letpoint.indexOf("+") > -1)
								letpoint = letpoint.replace("+", "");
							z = Integer.valueOf(resultArry[0]) + Integer.valueOf(letpoint);
						} else
							z = Integer.valueOf(resultArry[0]);
						k = Integer.valueOf(resultArry[1]);
						if (z - k > 0) {
							caiguo = "胜";
						} else if (z - k < 0) {
							caiguo = "负";
						} else {
							caiguo = "平";
						}
					} else if (Constant.JCZQ_HH.equals(lotno) || Constant.JCZQ_SPF.equals(lotno)) {
						z = Integer.valueOf(resultArry[0]);
						k = Integer.valueOf(resultArry[1]);
						if (z - k > 0) {
							caiguo = "胜";
						} else if (z - k < 0) {
							caiguo = "负";
						} else {
							caiguo = "平";
						}
					} else if (Constant.JCZQ_ZJQ.equals(lotno)) {
						int zjq = Integer.valueOf(resultArry[0]) + Integer.valueOf(resultArry[1]);
						caiguo = zjq + "个";
						if (zjq >= 7)
							caiguo = "7个以上";
					} else if (Constant.JCZQ_BF.equals(lotno)) {
						caiguo = result;
					} else if (Constant.JCZQ_BSF.equals(lotno)) {
						z = Integer.valueOf(resultArry[0]);
						k = Integer.valueOf(resultArry[1]);
						if (z == 3)
							caiguo = "胜";
						else if (z == 1)
							caiguo = "平";
						else if (z == 0)
							caiguo = "负";
						if (k == 3)
							caiguo = caiguo + "-胜";
						else if (k == 1)
							caiguo = caiguo + "-平";
						else if (k == 0)
							caiguo = caiguo + "-负";
					}
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		return caiguo;

	}

	/**
	 * 获取竞彩足球发起人佣金
	 * @param caselotid 合买编号
	 * @param buyType  购买类型。1:发起者，0:参与者
	 * @return
	 */
	public String getJingCaiPrizeAmt(String caselotid, int buyType) {
		String commisionPrizeAmt = "";
		String prizeAmt = "";
		try {
			JSONObject resultObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
							+ "/select/selectCaseLotBuysSimplify?caselotid=" + caselotid + "&buyType=" + buyType))
					.getJSONObject("value");
			if (resultObj != null && !resultObj.equals("") && !resultObj.equals("null")) {
				JSONArray list = resultObj.getJSONArray("list");
				if (list != null && !list.equals("") && !list.equals("null")) {
					for (int i = 0; i < list.size(); i++) {
						JSONObject userinfo = (JSONObject) list.get(i);
						if (userinfo.getJSONObject("caseLotBuy") != null
								&& !userinfo.getJSONObject("caseLotBuy").equals("")) {
							String type = userinfo.getJSONObject("caseLotBuy").getString("buyType");
							if (type != null && type.equals("1")) {
								commisionPrizeAmt = CommonUtil.moneySave2(userinfo.getJSONObject("caseLotBuy")
										.getDouble("commisionPrizeAmt") / 100);
								prizeAmt = CommonUtil.moneySave2(userinfo.getJSONObject("caseLotBuy").getDouble(
										"prizeAmt") / 100);
								request.setAttribute("prizeAmt", prizeAmt);
							}

						}
					}
				}
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
		return commisionPrizeAmt;
	}

	/** 查询竞彩的出票赔率
	 * 
	 * @param lotno  竞彩lotno
	 * @param orderid   订单号
	 * @param userno   用户编号
	 * @RequestMapping(value = "/getTlot", method = RequestMethod.POST)
		public @ResponseBody
				ResponseData selectTlot(
			@RequestParam("userno") String userno,
			@RequestParam(value = "orderid", required = false, defaultValue = "") String orderid,
			@RequestParam(value = "lotno", required = false, defaultValue = "") String lotno,
			@RequestParam("beginTime") String beginTime,
			@RequestParam(value = "endTime", required = false) String endTime,
			@RequestParam(value = "startLine") int startLine,
			@RequestParam(value = "endLine", required = false, defaultValue = "10") int endLine,
			@RequestParam(value = "settleFlag", required = false, defaultValue = "-1") int settleFlag,
			@RequestParam(value = "states", required = false, defaultValue = "1") String states) {

	 */
	public JSONObject getJingCaiSp(String lotno, String orderid, String userno, String endtime, String statememo)
			throws Exception {
		JSONObject returnObject = new JSONObject();
		String aa = "";
		int checkstate = 0;
		if (endtime != null && !endtime.equals("")) {
			String now = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Date d1 = sdf.parse(endtime);
			Date d2 = sdf.parse(now);
			if (d1.compareTo(d2) >= 0 || !statememo.equals("成功") && !statememo.equals("已中奖")) {
				logger.info("方案编号orderid：" + orderid + "方案详情请求地址" + ResourceBundleUtil.LINKURL
						+ "/select/getTlotsByOrderidWrapper?orderid=" + orderid);
				aa = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTlotsByOrderidWrapper?",
						"orderid=" + orderid, "POST");
				checkstate = 1;
			}
		}
		if (checkstate == 0) {
			logger.info("方案编号orderid：" + orderid + "方案详情请求地址" + ResourceBundleUtil.LINKURL + "/select/getTlot?orderid="
					+ orderid + "&beginTime=20100101&startLine=0&endTime="
					+ new SimpleDateFormat("yyyyMMdd").format(new Date()));
			aa = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTlot?", "orderid=" + orderid
					+ "&beginTime=20100101&startLine=0&endTime=" + new SimpleDateFormat("yyyyMMdd").format(new Date()),
					"POST");
		}

		if (aa != null || !("".equals(aa))) {
			returnObject = JSONObject.fromObject(aa);
		}
		logger.info("方案详情获取到的orderid为" + orderid + "票的信息：" + returnObject);
		if (!returnObject.isNullObject() && returnObject.getString("errorCode").equals("0")) {
			JSONObject againstValue = JSONObject.fromObject(JSONObject.fromObject(returnObject.get("value")));
			return againstValue;
		} else {
			returnObject.put("list", "[]");
			return returnObject;
		}

	}

	/**
	 * 获取用户中心首页投注查询功能从1到N条
	 * @return
	 */
	public String betSelectCount() {
		try {
			JSONObject user = JSONReslutUtil.getUserNo(request);
			String userno = "";
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			//获取用户的session信息
			String lotno = request.getParameter("lotNo") == null ? "" : request.getParameter("lotNo");
			String endLine = request.getParameter("Lines") == null ? "7" : request.getParameter("Lines");
			String prizestate = request.getParameter("settleFlag") == null ? "-1" : request.getParameter("settleFlag");
			//参数userno=用户编号&beginTime=开始时间&endTime=结束时间&startLine=开始记录数（默认为0）&endLine=结束记录数
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getUseraction?", "userno="
							+ userno + "&beginTime=" + new SimpleDateFormat("20100101").format(new Date())
							+ "&endTime=" + new SimpleDateFormat("yyyyMMdd").format(new Date().getTime())
							+ "&startLine=0" + "&endLine=" + endLine + "&lotno=" + lotno + "&prizestate=" + prizestate,
							"POST")).getJSONObject("value");

			JSONArray arrList = obj.getJSONArray("list");
			for (int i = 0; i < arrList.size(); i++) {
				JSONObject rec = arrList.getJSONObject(i).getJSONObject("torder");
				String nicknames = "";
				JSONObject userinfo = JSONReslutUtil.getUserInfo(request);
				if (userinfo != null) {
					userinfo = userinfo.getJSONObject("value");
					nicknames = NameUtil.getNameUtilJson(userinfo);
				}
				String nickName = "--";
				if (!arrList.getJSONObject(i).getJSONObject("starter").isNullObject()) {
					nickName = NameUtil.getNameUtilJson(arrList.getJSONObject(i).getJSONObject("starter"));
				}

				long time = 0;
				if (nicknames.equals(nickName)) {
					time = df.parse(df.format(new Date(rec.getLong("createtime")))).getTime();
					rec.put("createtime",
							new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createtime"))));
				} else {
					time = df.parse(df.format(new Date(arrList.getJSONObject(i).getLong("modifytime")))).getTime();
					rec.put("createtime",
							new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createtime"))));
				}

				rec.put("orderamt", CommonUtil.moneySave2(arrList.getJSONObject(i).getDouble("orderamt") / 100));
				rec.put("orderprize", CommonUtil.moneySave2(arrList.getJSONObject(i).getDouble("prizeamt") / 100));
				rec.put("nickName", nickName);
				request.setAttribute("batchcode", rec.get("batchcode"));
			}
			request.setAttribute("list", obj.getJSONArray("list"));
			return "betSelectCount";

		} catch (Exception e) {
			logger.error("获取投注记录出异常Exception(Access to betting records abnormal):" + e.toString());
			return "error";
		}
	}

	/**
	 * 订单方式的投注的查询
	 * @return
	 */
	public String betSelectOrder() {
		try {
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));
			Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
					"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));
			//得到传入条件
			String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
			String beginTime = request.getParameter("beginTime");
			String endTime = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");
			;
			String prizestate = request.getParameter("settleFlag") == null ? "-1" : request.getParameter("settleFlag");
			request.setAttribute("lotno", lotno);
			request.setAttribute("pageCount", pageNum);
			request.setAttribute("settleFlag", prizestate);
			if (!(endTime == null || endTime.equals("") || endTime.equals("undefined"))) {
				request.setAttribute("endTime", endTime);
				endTime = endTime.replace("-", "");
			}
			if (!(beginTime == null || beginTime.equals("") || beginTime.equals("undefined"))) {
				request.setAttribute("beginTime", beginTime);
				beginTime = beginTime.replace("-", "");

			} else {
				beginTime = "2010-01-01".replace("-", "");
			}
			String userno = "";
			String nicknames = "";
			logger.info("users信息开始时间：" + format.format(new Date().getTime()));
			JSONObject userInfo = JSONReslutUtil.getUserInfo(request);
			if (userInfo != null) {
				userInfo = userInfo.getJSONObject("value");
				nicknames = NameUtil.getNameUtilJson(userInfo);
				userno = userInfo.getString("userno");
			}
			logger.info("users信息结束时间：" + format.format(new Date().getTime()));
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getUseraction?",
					"userno=" + userno + "&beginTime=" + beginTime + "&endTime=" + endTime + "&startLine="
							+ (pageIndex - 1) * pageNum + "&endLine=" + pageNum + "&lotno=" + lotno + "&prizestate="
							+ prizestate, "POST");
			JSONObject obj = JSONObject.fromObject(re).getJSONObject("value");
			JSONArray arrList = obj.getJSONArray("list");
			JSONArray TodyList = new JSONArray();//今天的记录
			JSONArray YestdayList = new JSONArray();//昨天的记录
			JSONArray MoreOldList = new JSONArray();//更早的记录
			//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
			logger.info("数据处理开始时间：" + format.format(new Date().getTime()));
			for (int i = 0; i < arrList.size(); i++) {
				JSONObject rec = arrList.getJSONObject(i).getJSONObject("torder");
				long tody = df.parse(df.format(new Date())).getTime();
				String nickName = "--";
				if (!arrList.getJSONObject(i).getJSONObject("starter").isNullObject()) {
					nickName = NameUtil.getNameUtilJson(arrList.getJSONObject(i).getJSONObject("starter"));
				}
				long time = 0;
				if (nicknames.equals(nickName)) {
					time = df.parse(df.format(new Date(rec.getLong("createtime")))).getTime();
					rec.put("createtime",
							new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createtime"))));
				} else {
					time = df.parse(df.format(new Date(arrList.getJSONObject(i).getLong("modifytime")))).getTime();
					rec.put("createtime",
							new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createtime"))));
				}

				rec.put("orderamt", CommonUtil.moneySave2(arrList.getJSONObject(i).getDouble("orderamt") / 100));
				rec.put("orderprize", CommonUtil.moneySave2(arrList.getJSONObject(i).getDouble("prizeamt") / 100));
				rec.put("nickName", nickName);
				request.setAttribute("batchcode", rec.get("batchcode"));
				if (tody - time == 0) {
					TodyList.add(rec);
				} else if (tody - time == 24 * 3600 * 1000) {
					YestdayList.add(rec);
				} else {
					MoreOldList.add(rec);
				}
			}
			logger.info("数据处理结束时间：" + format.format(new Date().getTime()));
			//将分组的记录保存到一个json中
			JSONObject newList = new JSONObject();
			newList.put("today", TodyList);
			newList.put("yestday", YestdayList);
			newList.put("oldday", MoreOldList);

			JSONObject DealMoney = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTransWithTongji?"
							+ "userno=" + userno + "&beginTime=" + beginTime + "&endTime=" + endTime
							+ "&types=1&types=6")).getJSONObject("value");
			logger.info("arrList=" + newList + ";DealMoney:" + DealMoney + ";");
			request.setAttribute("inDealMoney", DealMoney);
			request.setAttribute("jaToPage", newList);
			String pageHtml = CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 4);
			request.setAttribute("pageHtml", pageHtml);
			return "betSelect";
		} catch (Exception e) {
			logger.error("订单方式投注查询出异常Exception(Check out the unusual betSelectOrder):" + e.toString());
			return "error";
		}
	}

	/**
	 * @Description 转换注码 
	 * @param jsObject
	 * @return
	 */
	public JSONArray formatJSONObject(JSONArray jsonArray) {
		JSONArray rtnJsonArray = new JSONArray();
		//遍历JSONARRAY
		for (int i = 0; i < jsonArray.size(); i++) {
			//获取遍历的对象
			JSONObject jsonObject = (JSONObject) jsonArray.get(i);
			//获取注码
			String play_name = CommonUtil.getBackValue("play_name", jsonObject).toString();
			String betcode = jsonObject.get("betcode").toString();
			if (betcode == "") {
				jsonObject.put("zCode", "");
			} else {
				//得到注码内容
				jsonObject.put("zCode",
						CodeUtil.getCodeString(play_name, betcode, CommonUtil.getBackValue("lotmulti", jsonObject)));
			}
			rtnJsonArray.add(jsonObject);
		}
		return rtnJsonArray;
	}

	/**
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @return
	 */
	private String getPageToHtml(Integer page, Integer maxLine, Integer limitCount, Integer omission) {
		String html = "";
		Integer maxPage = (maxLine + limitCount - 1) / limitCount;

		if (page != null && page > 1) {
			html += "<a href='javascript:;' onclick='toPageList(1)'>第一页</a>　";
			html += "<a href='javascript:;' onclick='toPageList(" + (page - 1) + ")'>上一页</a>　";
		}
		for (int i = 0; i < maxPage; i++) {
			if ((i + 1) == page) {
				html += "<b>" + (i + 1) + "</b>　";
			} else if ((i + omission + 1) == page || (i - omission + 1) == page) {
				html += "<a href='javascript:;' onclick='toPageList(" + (i + 1) + ")'>...</a>　";
			} else if (page != null && (page - omission - 1) < i && (page + omission - 1) > i) {
				html += "<a href='javascript:;' onclick='toPageList(" + (i + 1) + ")'>" + (i + 1) + "</a>　";
			}
		}
		if (page == null || page < maxPage) {
			html += "<a href='javascript:;' onclick='toPageList(" + (page + 1) + ")'>下一页</a>　";
			html += "<a href='javascript:;' onclick='toPageList(" + maxPage + ")'>尾页</a>　";
		}

		html += "　共" + maxPage + "页　" + maxLine + "条";
		return html;
	}

	/**========================最新购彩彩种==============================*/

	public String recentLottery() {
		try {
			//获取用户的session信息
			String beginTime = new SimpleDateFormat("yyyyMMdd").format(new Long(new Date().getTime() / 1000
					- (60 * 60 * 24 * 28)) * 1000);//上个月的时间
			String endTime = new SimpleDateFormat("yyyyMMdd").format(now);
			JSONObject user = JSONReslutUtil.getUserNo(request);
			String userno = "";
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			if (!userno.equals("")) {
				if ((now.getTime() - new SimpleDateFormat("yyyyMMdd").parse(beginTime).getTime()) / 1000 <= (60 * 60 * 24 * 31)) { //当前时间-上月时间   <= 一个月的时间
					JSONObject obj = JSONObject.fromObject(
							JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTlot?", "userno="
									+ userno + "&beginTime=" + beginTime + "&endTime=" + endTime
									+ "&startLine=0&endLine=" + 30 + "&lotno="
									+ "&states=-1,0,1,2&settleFlag=-1&orderid=", "POST")).getJSONObject("value");
					if (!obj.getJSONArray("list").isEmpty()) {
						List recentLottery = new ArrayList();
						for (int i = 0; i < obj.getJSONArray("list").size(); i++) {
							JSONObject rec = obj.getJSONArray("list").getJSONObject(i);
							String re = rec.getString("lotno");
							if (re.indexOf("F47104") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_ssq.jsp\" title=\"双色球\">双色球</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_ssq.jsp\" title=\"双色球\">双色球</a>");
								}
							}
							if (re.indexOf("F47103") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_3D.jsp\" title=\"福彩3D\">福彩3D</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_3D.jsp\" title=\"福彩3D\">福彩3D</a>");
								}
							}
							if (re.indexOf("F47102") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_qlc.jsp\" title=\"七乐彩\">七乐彩</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_qlc.jsp\" title=\"七乐彩\">七乐彩</a>");
								}
							}
							if (re.indexOf("T01002") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_pls.jsp\" title=\"排列三\">排列三</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_pls.jsp\" title=\"排列三\">排列三</a>");
								}
							}
							if (re.indexOf("T01001") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_dlt.jsp\" title=\"大乐透\">大乐透</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_dlt.jsp\" title=\"大乐透\">大乐透</a>");
								}
							}
							if (re.indexOf("T01011") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_plw.jsp\" title=\"排列五\">排列五</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_plw.jsp\" title=\"排列五\">排列五</a>");
								}
							}
							if (re.indexOf("T01009") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_qxc.jsp\" title=\"七星彩\">七星彩</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_qxc.jsp\" title=\"七星彩\">七星彩</a>");
								}
							}
							if (re.indexOf("T01007") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_ssc.jsp\" title=\"时时彩\">时时彩</a>")) {
									recentLottery.add("<a href=\"/shishicai.html\" title=\"时时彩\">时时彩</a>");
								}
							}
							if (re.indexOf("T01010") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_11xuan5.jsp\" title=\"江西11选5\">江西11选5</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_11xuan5.jsp\" title=\"江西11选5\">江西11选5</a>");
								}
							}
							if (re.indexOf("T01012") > -1) {
								if (!recentLottery
										.contains("<a href=\"/rchlw/lottery/ruyicai_channel_syydj.jsp\" title=\"十一运夺金\">十一运夺金</a>")) {
									recentLottery
											.add("<a href=\"/rchlw/lottery/ruyicai_channel_syydj.jsp\" title=\"十一运夺金\">十一运夺金</a>");
								}
							}
						}
						request.setAttribute("recentLotteryList", recentLottery);
					} else {
						request.setAttribute("message", "您最近一个月未购买彩种！");
					}
				} else {
					request.setAttribute("message", "您最近一个月未购买彩种！");
				}
			}
			return "recentlottery";

		} catch (Exception e) {
			logger.error("最新购彩彩种查询出异常Exception(Check out the unusual betting):" + e.toString());
			return "error";

		}

	}

	//================================================================================
	//============================lottery接口========================================
	//================================================================================

	/**
	 * 
	 * 查询账号余额 原fiandBalance方法
	 * @return  显示余额的页面 query/balance.jsp  
	 * 
	 */
	public void findAccount() {
		try {
			JSONObject user = JSONReslutUtil.getUserNo(request);
			String userno = "";
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			JSONObject obj = CommonUtil.getBalance(userno);

			double deposit_amount = obj.getDouble("balance") - obj.getDouble("freezebalance");
			double valid_amount = obj.getDouble("balance") - obj.getDouble("freezebalance") >= obj
					.getDouble("drawbalance") ? obj.getDouble("drawbalance") : obj.getDouble("balance")
					- obj.getDouble("freezebalance");

			request.setAttribute("deposit_amount", deposit_amount / 100);
			request.setAttribute("valid_amount", valid_amount / 100);
			request.setAttribute("freeze_amout", obj.getDouble("freezebalance") / 100);
		} catch (Exception e) {
			logger.error("查询用户余额出异常Exception(Check user balances abnormal):" + e);
		}
	}

	/**
	 * 
	 * 查询账号余额 原findBalance方法 
	 * 
	 */
	public String ajaxFindAccount() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		try {
			JSONObject user = JSONReslutUtil.getUserInfo(request);
			if (user != null) {
				user = user.getJSONObject("value");
				JSONObject obj = CommonUtil.getBalance(user.getString("userno"));
				if (!obj.isEmpty() && !obj.isNullObject()) {
					double deposit_amount = obj.getDouble("balance") - obj.getDouble("freezebalance");
					double valid_amount = obj.getDouble("balance") - obj.getDouble("freezebalance") >= obj
							.getDouble("drawbalance") ? obj.getDouble("drawbalance") : obj.getDouble("balance")
							- obj.getDouble("freezebalance");
					JSONObject reobj = new JSONObject();
					reobj.put("deposit_amount", CommonUtil.moneySave2(deposit_amount / 100));
					reobj.put("valid_amount", CommonUtil.moneySave2(valid_amount / 100));
					reobj.put("freeze_amout", CommonUtil.moneySave2(obj.getDouble("freezebalance") / 100));
					reobj.put("userName", user.getString("userName"));
					reobj.put("nickName", NameUtil.getNameUtilJson(user));
					response.getWriter().print(reobj.toString());
					logger.info("金额：" + reobj);
					return null;
				} else {
					logger.error("------------Connecttion fail!!----------------");
					JSONObject reobj = new JSONObject();
					reobj.put("deposit_amount", "0");
					reobj.put("valid_amount", " 0");
					reobj.put("freeze_amout", "0");
					reobj.put("userName", user.getString("userName"));
					reobj.put("nickName", NameUtil.getNameUtilJson(user));
					response.getWriter().print(reobj.toString());
					return null;
				}
			} else {
				logger.error("------------Not fond user's  infromation!----------------");
				return "error";
			}

		} catch (Exception e) {
			logger.error("查询用户余额出异常Exception(Check user balances abnormal):" + e);
			return "error";
		}

	}

	/**
	 * @param lotno
	 * @param issuenum 获取最近多少期的内容
	 * @return
	 * @throws IOException 
	 */
	public static JSONArray getInnerBetChcode(String lotno, int issuenum) throws IOException {
		JSONArray arrayBetcode = JSONObject.fromObject(
				JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getWinfolist?lotno=" + lotno
						+ "&issuenum=" + issuenum)).getJSONArray("value");
		logger.debug("查询出来的期号信息是》》》》" + arrayBetcode);
		JSONObject allBet = new JSONObject();
		JSONArray arrayBet = new JSONArray();
		for (int i = 0; i < arrayBetcode.size(); i++) {
			allBet.put("onebet", arrayBetcode.getJSONObject(i).getJSONObject("id").getString("batchcode"));
			arrayBet.add(allBet);
		}
		return arrayBet;
	}

	/**
	 * 根据彩种编号，查询对应彩种的最新中奖和中奖排行
	 */
	public void getStatisticWin() {
		response.setCharacterEncoding("utf-8");
		String batchcode = request.getParameter("batchcode");
		//拼接查询统计数据的key值 因为后台将统计的数据存到了一个map中 通过对应的key值获取对应的统计数据
		if (batchcode != null) {
			String d = df.format(new Date()).replace("-", "");
			String keys = "";
			keys += "LatestWin_" + batchcode + ","; //最新中奖的KEY
			keys += "DayRanking_" + batchcode + "_" + d + ","; //日中奖排行的KEY
			keys += "MonthRanking_" + batchcode + "_" + d.substring(0, 6) + ","; //月中奖排行的KEY
			keys += "TotalRanking_" + batchcode; //中奖总排行的KEY
			logger.debug("排行统计数据查询标识为 keys：" + keys);
			try {
				JSONArray obj = JSONObject.fromObject(
						JSONReslutUtil.getResultMessage(ResourceBundleUtil.ANALYZEURL + "/select/statiswinning?",
								"lotno=" + batchcode, "POST")).getJSONArray("value");
				logger.debug("排行统计数据查询结果为：" + obj.toString());

				for (int i = 0; i < obj.size(); i++) {
					for (int j = 0; j < obj.getJSONArray(i).size(); j++) {
						JSONObject jon = obj.getJSONArray(i).getJSONObject(j);
						if (i == 0) {
							String type = jon.getString("playtype");
							String lotno = jon.getString("lotno");
							jon.put("wanfa", PlayTypeCode.getMemo(lotno + "_" + type));
						}
						if (jon.get("nickName") == null || "null".equals(jon.getString("nickName"))) {
							if (jon.get("email") != null && !"null".equals(jon.getString("email"))) {
								if (jon.getString("email").indexOf("@") > 5) {
									jon.put("nickName", jon.getString("email").substring(0, 5) + "***");
								} else {
									jon.put("nickName",
											jon.getString("email").substring(0, jon.getString("email").indexOf("@"))
													+ "****");
								}
							} else if (jon.get("mobildid") != null && !"null".equals(jon.getString("mobildid"))) {
								jon.put("nickName", jon.getString("mobildid").substring(0, 4) + "***");
							}
						}
						logger.info(i + "::" + j + ":" + obj.getJSONArray(i).getJSONObject(j).toString());
					}
				}
				logger.info("排行统计数据查询结果为：" + ":" + obj);
				PrintWriter out = response.getWriter();
				out.print(obj);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 获取 当前期号往后的n期  的期号
	 * @param lotno 彩种
	 * @param issueCount 期号数量
	 * @return 期数的 jsonArray
	 * @throws IOException
	 */
	public String getAfterIssueByN() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String lotno = request.getParameter("lotno");
		int issueCount = Integer.parseInt(request.getParameter("num") == null ? "0" : request.getParameter("num"));
		String Dissue = request.getParameter("issue");
		String param = "lotno=" + lotno + "&num=" + issueCount;
		if (Dissue != null) {
			param = param + "&batchcode=" + Dissue;
		} else {
			param = param + "&batchcode=" + InvokeLotteryUtil.getIssue(lotno);
		}
		try {
			JSONArray jsonObect = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getAfterIssue?" + param))
					.getJSONArray("value");
			JSONObject allBet = new JSONObject();
			JSONArray arrayBet = new JSONArray();
			for (int i = 0; i < jsonObect.size(); i++) {
				allBet.put("batchcode", jsonObect.getJSONObject(i).getJSONObject("id").getString("batchcode"));
				String endTime = jsonObect.getJSONObject(i).getString("endtime");
				String betEndtime = "0";
				if (endTime != null && !endTime.equals("null") && !endTime.equals("")) {
					betEndtime = endTime;
				}
				allBet.put("endTime", betEndtime);
				arrayBet.add(allBet);
			}
			LogListener.utilLog(
					"调用后台查询期号的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
					jsonObect.toString(), null, "info", "com.ruyicai.web.action.SelectAllAction.getAfterIssue()");
			response.getWriter().print(arrayBet);
		} catch (IOException e) {
			logger.error("当前期往后" + issueCount + "期查询出异常Exception(Check out the current exception of No):"
					+ e.toString());
			e.printStackTrace();
			return "error";
		}

		return null;
	}

	//================================合买开始======================================
	/**
	 * 合买方案条件查询查询
	 * @return
	 * @throws IOException 
	 */
	public String getCaselotsByWhere() throws IOException {
		//获取请求类型d
		String isAjax = request.getParameter("isAjax");
		String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");//彩种编号
		String batchCode = request.getParameter("batchCode") == null ? "" : request.getParameter("batchCode");
		String lotsType = request.getParameter("lotsType") == null ? "-1" : request.getParameter("lotsType");
		Integer sortStateFlag = Integer.parseInt(request.getParameter("sortStateFlag") == null ? "0" : request
				.getParameter("sortStateFlag"));//0为置顶+普通合买用于合买大厅 1为置顶用于合买中心
		String search = request.getParameter("search") == null ? "" : request.getParameter("search");
		String starteUserno = request.getParameter("starteUserno") == null ? "" : request.getParameter("starteUserno");
		Integer totalAmt = Integer.parseInt(request.getParameter("totalAmt") == null
				|| request.getParameter("totalAmt").equals("") ? "-1" : request.getParameter("totalAmt"));
		Integer pageIndex = (request.getParameter("pageIndex") == null || request.getParameter("pageIndex").equals("")) ? 1
				: Integer.valueOf(request.getParameter("pageIndex"));
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));
		//查询条件  合买状态 默认为"认购中" subscribing(1,"认购中"), full(2,"满员"),success(3,"成功"),canceledByUser(4,"撤单"),canceledBySystem(5,"流单"),win(6,"已中奖");
		String displayState = request.getParameter("displayState") == null ? "1" : request.getParameter("displayState");
		String orderBy = request.getParameter("orderBy") == null ? "" : request.getParameter("orderBy");
		;//需要排序的字段
		String orderDir = request.getParameter("orderDir") == null ? "" : request.getParameter("orderDir");
		; //排列的顺序
		request.setAttribute("indexNum", (pageIndex - 1) * pageNum);
		if (orderBy.indexOf("PUTIN") > -1) {
			orderBy = orderBy.replaceAll("PUTIN", "%2B");// url中加好（+）的编码
		}
		if (orderBy.equals("")) {//如果没有指定排序字段，则不能进行排序
			orderDir = "";
		}

		//构造查询条件的MAP对象
		Map<String, String> conditionMap = new HashMap();
		if (!lotno.equals("")) {
			conditionMap.put("EQS_lotno", lotno);
		}
		if (!displayState.equals("0")) {//当displayState为0的时候，表示获取全部合买列表，则displayState不参与筛选条件
			conditionMap.put("EQG_displayState", displayState);
		}
		if (!lotsType.equals("-1")) {
			conditionMap.put("EQG_lotsType", lotsType);
		}
		if (!starteUserno.equals("")) {
			conditionMap.put("EQS_starter", starteUserno);
		}
		if (totalAmt != -1) {//根据方案金额筛选
			if (totalAmt == 1000000) {//万元以上方案
				conditionMap.put("GEG_totalAmt", totalAmt.toString());
			}
			if (totalAmt == 100000) {//千元以上方案
				conditionMap.put("GEG_totalAmt", totalAmt.toString());
			}
			if (totalAmt == 10000) {//百元以上方案
				conditionMap.put("GEG_totalAmt", totalAmt.toString());
			}
			if (totalAmt == 1) {//百元以下方案
				conditionMap.put("LTG_totalAmt", "10000");
			}
		}
		try {
			if (sortStateFlag == 0) {//如果是合买中心的数据，将不属于任何期
				//获取期号当前期
				if (batchCode.equals("") && !lotno.equals("")) {
					//若是足彩
					if (lotno.equals("T01003") || lotno.equals("T01004") || lotno.equals("T01005")
							|| lotno.equals("T01006")) {
						JSONObject jsonObject = JSONObject.fromObject(JSONReslutUtil
								.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getZCIssue?lotno=" + lotno));
						JSONArray zcIssue = new JSONArray();
						String revalue = jsonObject.getString("value");
						if (!revalue.equals("null")) {
							zcIssue = jsonObject.getJSONArray("value");
						}
						if (!zcIssue.isEmpty()) {
							for (int i = 0; i < zcIssue.size() && i < 1; i++) {
								batchCode = zcIssue.getJSONObject(i).getJSONObject("id").getString("batchcode");
							}
						} else {
							batchCode = "";
						}
					} else {
						if (!lotno.equals("J00001") && !lotno.equals("J00002") && !lotno.equals("J00003")
								&& !lotno.equals("J00013")) {
							batchCode = InvokeLotteryUtil.getIssueObject(lotno).getString("batchCode");
						}
					}
				}
				if (!batchCode.equals("") && !lotno.equals("")) {//当去的条件期号 若期号不存在 则使用当前期 作为查询条件
					conditionMap.put("EQS_batchcode", batchCode);
				}
			}
			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/selectCaseLots?", "search="
							+ search + "&sortStateFlag=" + sortStateFlag + "&orderBy=" + orderBy + "&orderDir="
							+ orderDir + "&condition=" + condition.toString() + "&startLine="
							+ (pageNum * (pageIndex - 1)) + "&endLine=" + pageNum, "GET")).getJSONObject("value");
			if (obj != null && !obj.isNullObject() && obj.get("list") != null && !obj.get("list").equals("null")) {
				JSONArray caseArray = obj.getJSONArray("list");
				JSONArray name_array = new JSONArray();
				for (int i = 0; i < caseArray.size(); i++) {
					JSONObject caseObj = caseArray.getJSONObject(i);
					JSONObject starter_name = caseObj.getJSONObject("starter");
					if (!starter_name.isEmpty()) {
						Tuserinfo tusers = Tuserinfo.setJson(starter_name);
						String tuser_names = NameUtil.getNameUtil(tusers);
						JSONObject name_json = new JSONObject();
						name_json.put("new_nickname", tuser_names);
						name_array.add(name_json);
					} else {
						name_array.add("");
					}
					//格式化注码
					betcodeFormat(caseObj.getJSONObject("torder"), true, 5, request, null);
				}
				obj.put("nickname_array", name_array);
			}

			request.setAttribute("hemaiList", obj);

			String pageHtml = CommonUtil.getPageToJsp(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 4, "CaseSelectForm");
			request.setAttribute("pageHtml", pageHtml);
			request.setAttribute("lotno", lotno);
			if ("ajax".equals(isAjax)) {
				return "ajaxCaseCenter";
			} else if ("shouye".equals(isAjax)) {
				return "shouyeCase";
			} else {
				request.setAttribute("title", CommonUtil.getTitle(lotno));
				return "caseCenterAll";
			}

		} catch (SocketTimeoutException e) {
			logger.error("合买查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 首页合买推荐
	 * @return
	 */
	public JSONObject getCaselotsByWhereIndex() {
		//查询条件  合买状态 默认为"认购中" subscribing(1,"认购中"), full(2,"满员"),success(3,"成功"),canceledByUser(4,"撤单"),canceledBySystem(5,"流单"),win(6,"已中奖");
		//构造查询条件的MAP对象
		Map<String, String> conditionMap = new HashMap();
		conditionMap.put("EQG_displayState", "1");
		try {
			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/selectCaseLots?",
							"&sortStateFlag=0" + "&condition=" + condition.toString() + "&startLine=0" + "&endLine=10",
							"GET")).getJSONObject("value");
			if (obj != null && !obj.isNullObject() && obj.get("list") != null && !obj.get("list").equals("null")) {
				JSONArray caseArray = obj.getJSONArray("list");
				JSONArray name_array = new JSONArray();
				for (int i = 0; i < caseArray.size(); i++) {
					JSONObject caseObj = caseArray.getJSONObject(i);
					JSONObject starter_name = caseObj.getJSONObject("starter");
					if (!starter_name.isEmpty()) {
						Tuserinfo tusers = Tuserinfo.setJson(starter_name);
						String tuser_names = NameUtil.getNameUtil(tusers);
						JSONObject name_json = new JSONObject();
						name_json.put("new_nickname", tuser_names);
						name_array.add(name_json);
					} else {
						name_array.add("");
					}
					//格式化注码
					betcodeFormat(caseObj.getJSONObject("torder"), true, 5, request, null);
				}
				obj.put("nickname_array", name_array);
			}
			MemCacheInvoke.mcc.set("CaselotsByWhereIndex", obj);
			logger.info("首页合买推荐内容，缓存成功");
			return obj;
		} catch (Exception e) {
			logger.error("合买查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * 首页合买推荐查询 ，采用了缓存
	 * @return
	 */
	public String getCaselotsByMemIndex() {
		logger.info("首页合买推荐开始查询   从缓存中获取CaselotsByWhereIndex");
		JSONObject obj = (JSONObject) MemCacheInvoke.mcc.get("CaselotsByWhereIndex");
		if (obj == null || obj.isNullObject()) {
			logger.info("首页合买推荐开始查询  从缓存中获取CaselotsByWhereIndex失败");
			obj = getCaselotsByWhereIndex();
		}
		request.setAttribute("hemaiList", obj);
		return "shouyeCase";
	}

	/**
	 * 合买方案条件查询查询
	 * @return
	 */
	public String getCaselotsByWhereToSuccess() {
		Integer sortStateFlag = 0;
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));

		//查询条件  合买状态 默认为"认购中" subscribing(1,"认购中"), full(2,"满员"),success(3,"成功"),canceledByUser(4,"撤单"),canceledBySystem(5,"流单"),win(6,"已中奖");
		//构造查询条件的MAP对象
		Map<String, String> conditionMap = new HashMap();
		//TODO 需要将注释去掉
		conditionMap.put("EQG_displayState", "1");
		JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
		try {
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(
							ResourceBundleUtil.LINKURL + "/select/selectCaseLots?",
							"&sortStateFlag=" + sortStateFlag + "&orderBy=" + "&orderDir=" + "&condition="
									+ condition.toString() + "&endLine=" + pageNum, "POST")).getJSONObject("value");
			JSONArray arry = obj.getJSONArray("list");
			for (int i = 0; i < arry.size(); i++) {
				JSONObject caseObj = arry.getJSONObject(i);
				JSONObject starter_name = caseObj.getJSONObject("starter");
				if (!starter_name.isEmpty()) {
					Tuserinfo tusers = Tuserinfo.setJson(starter_name);
					String tuser_names = NameUtil.getNameUtil(tusers);
					starter_name.put("nickname", tuser_names);
				}
			}
			request.setAttribute("hemaiList", obj);
			return "success_hemai_list";

		} catch (IOException e) {
			logger.error("合买查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 查询合买记录的详细信息
	 * @param caselotId
	 * @return
	 * @throws IOException
	 */
	public static JSONObject getCaseLotDetail(String caselotId, Tuserinfo tuserinfo) throws IOException {
		String property = tuserinfo == null ? "" : "&userno=" + tuserinfo.getUSERNO();
		JSONObject obj = JSONObject.fromObject(
				JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/selectCaseLotDetail?",
						"caselotid=" + caselotId + property, "POST")).getJSONObject("value");

		return obj;
	}

	/**
	 * 查看合买方案详情
	 * 基本用于 合买大厅 合买中心  合买推荐 方案中“ 查看”字样
	 *@param 参数为合买的方案唯一订单编号
	 * @return
	 */
	public String getCaseDetail() {
		String caselotId = request.getParameter("caselotId") == null ? "" : request.getParameter("caselotId");
		JSONObject tuserinfobg = JSONReslutUtil.getUserInfo(request);
		Tuserinfo tuserinfo = null;
		if (tuserinfobg != null && !tuserinfobg.getJSONObject("value").equals("null")
				&& !(tuserinfobg.getJSONObject("value").isEmpty())) {
			tuserinfo = Tuserinfo.setJson(tuserinfobg.getJSONObject("value"));
			request.setAttribute("tuserInfo", tuserinfobg.getJSONObject("value"));
		}
		try {
			if (!caselotId.equals("")) {
				JSONObject caseObj = getCaseLotDetail(caselotId, tuserinfo);
				if (caseObj == null) {
					request.setAttribute("CaseDetail", caseObj);
					return "caseInfo";
				}
				//将一些数据转换成输出格式
				caseObj.getJSONObject("caseLot").put("lotno_cn",
						CommonUtil.getLotnoCn(caseObj.getJSONObject("caseLot").getString("lotno")));
				caseObj.getJSONObject("caseLot").put("startTime_format",
						format.format(new Date(caseObj.getJSONObject("caseLot").getLong("startTime"))));
				NumberFormat numberFormat = NumberFormat.getNumberInstance();
				caseObj.getJSONObject("caseLot").put("winBigAmt_format",
						numberFormat.format((caseObj.getJSONObject("caseLot").getLong("winBigAmt") / 100)));
				//改变昵称
				JSONObject starter_name = caseObj.getJSONObject("starter");
				if (!starter_name.isEmpty()) {
					Tuserinfo tusers = Tuserinfo.setJson(starter_name);
					String tuser_names = NameUtil.getNameUtil(tusers);
					caseObj.put("nickname_array", tuser_names);
				} else {
					caseObj.put("nickname_array", "");
				}
				//格式化注码
				betcodeFormat(caseObj.getJSONObject("torder"), true, 0, request, null);
				String[] caseLotList = caseObj.getJSONObject("torder").getString("orderinfo").split("!");
				request.setAttribute("betcode_num", caseLotList.length);//保存当前注码记录数 高于5个则在页面上显示查看详情

				//获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
				JSONObject twinInfoJsonObj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
						ResourceBundleUtil.LINKURL + "/select/getTwininfo?", "lotno="
								+ caseObj.getJSONObject("caseLot").getString("lotno") + "&issue="
								+ caseObj.getJSONObject("caseLot").getString("batchcode"), "POST"));

				logger.info("根据彩种和期号查询到彩票的开奖信息是：twinInfoJsonObj===>" + twinInfoJsonObj);
				if (twinInfoJsonObj.getString("errorCode").equals("0")) {
					//在已开奖的情况下，要查询这个方案的发起人的佣金信息
					JSONObject buyUser = JSONObject.fromObject(
							JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
									+ "/select/selectCaseLotUserBuy?", "caselotid="
									+ caseObj.getJSONObject("caseLot").getString("id") + "&userno="
									+ caseObj.getJSONObject("starter").getString("userno"), "POST")).getJSONObject(
							"value");
					buyUser.put("commisionPrizeAmt",
							CommonUtil.moneySave2(buyUser.getDouble("commisionPrizeAmt") / 100));
					request.setAttribute("buyUser", buyUser);

					//在开奖的情况下对中奖详情进行解析 得出当前订单的各奖级中奖情况
					//request.setAttribute("winInfoLevel",getOrderPrizeInfo(caseObj.getJSONObject("torder"),twinInfoJsonObj.getJSONObject("value")));
					twinInfoJsonObj = getDrawLotteryContents(caseObj.getJSONObject("caseLot").getString("lotno"),
							twinInfoJsonObj.getJSONObject("value"));
					String changeWinCode = twinInfoJsonObj.getString("winbasecode");
					if (caseObj.getJSONObject("caseLot").getString("lotno").equals(Constant.SSQ)
							|| caseObj.getJSONObject("caseLot").getString("lotno").equals(Constant.QLC)
							|| caseObj.getJSONObject("caseLot").getString("lotno").equals(Constant.SD)) {
						String newChangeWincode = "";
						for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").length() - 1; k += 2) {
							newChangeWincode += twinInfoJsonObj.getString("winbasecode").substring(k, k + 2) + ",";
						}
						changeWinCode = newChangeWincode.substring(0, newChangeWincode.length() - 1);
						betcodeFormat(caseObj.getJSONObject("torder"), true, 0, request, changeWinCode + "＋"
								+ twinInfoJsonObj.getString("winspecialcode"));
					} else if (caseObj.getJSONObject("caseLot").getString("lotno").equals(Constant.DLT)) {
						String red = "";
						String blue = "";
						for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").substring(0, 10).length() - 1; k += 2) {
							red += twinInfoJsonObj.getString("winbasecode").substring(k, k + 2) + ",";
						}
						for (int k = 0; k < twinInfoJsonObj.getString("winbasecode").substring(11).length() - 1; k += 2) {
							blue += twinInfoJsonObj.getString("winbasecode").substring(11).substring(k, k + 2) + ",";
						}
						changeWinCode = red.substring(0, red.length() - 1) + "＋" + blue.substring(0, blue.length() - 1);
						betcodeFormat(caseObj.getJSONObject("torder"), true, 0, request, changeWinCode);
					} else {
						betcodeFormat(caseObj.getJSONObject("torder"), true, 0, request, changeWinCode + "＋"
								+ twinInfoJsonObj.getString("winspecialcode"));
					}
					request.setAttribute("info", twinInfoJsonObj);
				}
				//查询当前用户的投注信息和奖金信息
				if (tuserinfobg != null && tuserinfo != null) {
					JSONObject iUser = JSONObject.fromObject(
							JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
									+ "/select/selectCaseLotUserBuy?",
									"caselotid=" + caseObj.getJSONObject("caseLot").getString("id") + "&userno="
											+ tuserinfo.getUSERNO(), "POST")).getJSONObject("value");
					iUser.put("prizeAmt", CommonUtil.moneySave2(iUser.getDouble("prizeAmt") / 100));
					request.setAttribute("iUser", iUser);
				}
				request.setAttribute("achievement", caseObj.getJSONObject("achievement").getJSONObject("displayIcon"));

				//获取当前票对应的期信息
				JSONObject tlotctrlJsonObj = JSONObject.fromObject(
						JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTlotctrl?" + "lotno="
								+ caseObj.getJSONObject("caseLot").getString("lotno") + "&batchcode="
								+ caseObj.getJSONObject("caseLot").getString("batchcode"))).getJSONObject("value");
				logger.info("获取到的当前票的信息：tlotctrlJsonObj===>" + tlotctrlJsonObj);
				if (tlotctrlJsonObj != null && !tlotctrlJsonObj.isNullObject()
						&& !tlotctrlJsonObj.get("hemaiendtime").equals("null")) {
					caseObj.getJSONObject("caseLot").put("endTime_format",
							format.format(new Date(tlotctrlJsonObj.getLong("hemaiendtime"))));
				}
				String betcode = caseObj.getJSONObject("torder").getString("betcode");
				String description = caseObj.getJSONObject("caseLot").getString("description");
				caseObj.getJSONObject("caseLot").put("description", description);
				String betcodeCopy = "";
				if (betcode.indexOf("$") > -1) {
					String[] str = betcode.split("\\$");
					String[] s1 = str[0].split(",");
					String[] s2 = str[1].split(",");
					for (int i = 0; i < s1.length; i++) {
						if (s1[i].equals("#")) {
							betcodeCopy = betcodeCopy + s2[i] + ",";
						} else {
							betcodeCopy = betcodeCopy + s1[i] + ",";
						}
					}
				}

				request.setAttribute("betcodeCopy", betcodeCopy);
				request.setAttribute("CaseDetail", caseObj);
				request.setAttribute("lotmulti", caseObj.getJSONObject("torder").getString("lotmulti"));
				request.setAttribute("title", CommonUtil.getTitle(caseObj.getJSONObject("caseLot").getString("lotno")));
				try {
					String lotno = caseObj.getJSONObject("caseLot").getString("lotno");
					if (Constant.BD_BQC.equals(lotno) || Constant.BD_DCBF.equals(lotno)
							|| Constant.BD_SPF.equals(lotno) || Constant.BD_SXPDS.equals(lotno)
							|| Constant.BD_ZJQ.equals(lotno)) {
						JSONObject obj = this.getCaseDetailForBD(caseObj, caselotId);
						logger.info("获取到北单的对阵信息是：" + obj);
						request.setAttribute("pastMethod", obj.getJSONObject("pastMethod"));
						request.setAttribute("lastArray", obj.getJSONArray("lastArray"));
					}
					//调用 查询对阵信息的方法(分竞彩、其它足彩)
					if (Constant.JCZQ_HH.equals(lotno) || Constant.JCLQ_HH.equals(lotno)
							|| Constant.JCZQ_RSPF.equals(lotno) || Constant.JCZQ_SPF.equals(lotno)
							|| Constant.JCZQ_BF.equals(lotno) || Constant.JCZQ_BSF.equals(lotno)
							|| Constant.JCZQ_ZJQ.equals(lotno) || Constant.JCLQ_SFC.equals(lotno)
							|| Constant.JCLQ_SF.equals(lotno) || Constant.JCLQ_RFSF.equals(lotno)
							|| Constant.JCLQ_DXF.equals(lotno)) {
						//发起人佣金  ,奖金
						String prizestate = caseObj.getJSONObject("torder").getString("prizestate");
						if (prizestate != null && !prizestate.equals("") && !prizestate.equals("0")
								&& !prizestate.equals("1") && !prizestate.equals("2")) {
							String commisionPrizeAmt = getJingCaiPrizeAmt(
									caseObj.getJSONObject("caseLot").getString("id"), 1);
							request.setAttribute("commisionPrizeAmt", commisionPrizeAmt);
						}
						//		    		
						if (caseObj.has("torder")) {
							//获取时间、周次、场次、
							JSONArray lastArray = new JSONArray();
							JSONObject pastMethod = new JSONObject();
							String allmethod = "";
							JSONObject torder = caseObj.getJSONObject("torder");
							String[] everylot = torder.getString("betcode").split("\\!");
							//过关方式 
							for (int s = 0; s < everylot.length; s++) {
								String[] torstring = everylot[s].split("\\^");
								for (int i = 0; i < torstring.length; i++) {
									String[] stringl = (torstring[i]).split("\\|");
									if (i == 0) {
										String[] gettime = (stringl[0]).split("@");
										String pmethod = gettime[0];
										String method = BettingUtil.getLotnoBetType(pmethod, lotno, "").getString(
												"memo")
												+ "、";
										allmethod = allmethod + method;
									}
								}
							}
							//获取竞彩的出票赔率
							String userno = "";
							String endtime = format
									.format(new Date(caseObj.getJSONObject("caseLot").getLong("endTime")));
							if (tuserinfo != null && !tuserinfo.equals("") && !tuserinfo.equals("null"))
								userno = tuserinfo.getUSERNO();
							String orderid = caseObj.getJSONObject("torder").getString("id");
							String statememo = caseObj.getJSONObject("caseLot").getString("displayStateMemo");
							JSONObject jcsp = this.getJingCaiSp(caseObj.getJSONObject("caseLot").getString("lotno"),
									orderid, userno, endtime, statememo);
							JSONArray arraylist = jcsp.getJSONArray("list");
							JSONObject peilvObj = getJingCaiPeilv(arraylist);
							//对阵信息
							String[] torstring = everylot[0].split("\\^");
							String time = "";
							for (int i = 0; i < torstring.length; i++) {
								String[] stringl = (torstring[i]).split("\\|");
								if (i == 0) {
									String[] gettime = (stringl[0]).split("@");
									time = gettime[1];
								} else {
									int specilChar = (stringl[0]).indexOf("$");
									if (specilChar > -1)
										time = stringl[0].substring(specilChar + 1);
									else
										time = stringl[0];
								}
								String weekid = stringl[1];
								String teamid = stringl[2];
								if (Constant.JCLQ_HH.equals(lotno) || Constant.JCZQ_HH.equals(lotno)) {//对 混合型投注的解析
									stringl[3] = CodeUtil.getLQTouzhu(stringl[4], stringl[3]);
								} else {
									stringl[3] = CodeUtil.getLQTouzhu(stringl[3], lotno);
								}
								//获取到选项数据
								JSONObject returnarray = this.getJingCaiAgainstInfo(lotno, time, weekid, teamid);

								if (Constant.JCLQ_HH.equals(lotno) || Constant.JCLQ_SFC.equals(lotno)
										|| Constant.JCLQ_SF.equals(lotno) || Constant.JCLQ_RFSF.equals(lotno)
										|| Constant.JCLQ_DXF.equals(lotno)) {
									JSONObject result = returnarray.getJSONObject("result");
									if (result.getString("result") != "null") {
										String[] resultArr = (result.getString("result")).split("\\:");
										result.put("result", resultArr[1] + ":" + resultArr[0]);
										if (Integer.valueOf(resultArr[0]) > Integer.valueOf(resultArr[1])) {
											result.put("newResult", "主胜");
											result.put("newResult1", "小分");
										} else {
											result.put("newResult", "主负");
											result.put("newResult1", "大分");
										}
									} else {
										result.put("newResult", "");
									}
								}
								String letpoint = returnarray.getJSONObject("matches").getString("letpoint");
								//获取竞彩足球彩果
								if (Constant.JCZQ_HH.equals(lotno) || Constant.JCZQ_RSPF.equals(lotno)
										|| Constant.JCZQ_SPF.equals(lotno) || Constant.JCZQ_BF.equals(lotno)
										|| Constant.JCZQ_ZJQ.equals(lotno) || Constant.JCZQ_BSF.equals(lotno)) {
									String caiguo = getJingCaiCaiGuo(lotno, time, weekid, teamid, letpoint);
									returnarray.put("caiguo", caiguo);
								}
								//获取赔率
								String peilv = "";
								String key = time + "*" + weekid + "*" + teamid;
								if (peilvObj != null && !peilvObj.equals("") && peilvObj.containsKey(key)) {
									peilv = peilvObj.getString(key);
								}
								returnarray.put("pv", peilv);
								returnarray.put("selectInfo", stringl[3] + " ");
								lastArray.add(returnarray);
							}

							String lastmethod = allmethod.substring(0, allmethod.length() - 1);
							pastMethod.put("pastMethod", lastmethod);
							request.setAttribute("pastMethod", pastMethod);
							logger.info("获取到竞彩的对阵信息是：" + lastArray);
							request.setAttribute("lastArray", lastArray);
						}
					} else {
						if (!(tlotctrlJsonObj == null || tlotctrlJsonObj.equals("null") || tlotctrlJsonObj
								.isNullObject())) {
							this.getAgainstInfo(caseObj.getJSONObject("caseLot").getString("lotno"), caseObj
									.getJSONObject("caseLot").getString("batchcode"), caseObj.getJSONObject("torder")
									.getJSONArray("tlots").getJSONObject(0).getString("betcode"));
						}
					}
				} catch (Exception e) {
				}
			}
			return "caseInfo";
		} catch (IOException e) {
			logger.error("合买方案详情查询报错 Exception(Check out the HeMai detail exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 北单合买详情注码解析
	 * @param caseObj   
	 * @param caselotId  
	 */
	public JSONObject getCaseDetailForBD(JSONObject caseObj, String caselotId) {
		JSONObject jo = new JSONObject();
		try {
			if (caseObj.has("torder")) {
				String lotno = caseObj.getJSONObject("caseLot").getString("lotno");
				String batchcode = caseObj.getJSONObject("caseLot").getString("batchcode");
				JSONArray lastArray = new JSONArray();
				JSONObject pastMethod = new JSONObject();
				String allmethod = "";
				JSONObject torder = caseObj.getJSONObject("torder");
				String[] everylot = torder.getString("betcode").split("\\!");
				for (int s = 0; s < everylot.length; s++) {
					String[] torstring = everylot[s].split("\\^");
					String teamid = "";//场次
					for (int i = 0; i < torstring.length; i++) {
						String[] stringl = (torstring[i]).split("\\|");
						//529@013|310^014|3^015|3^016|310^017|013^
						if (i == 0) {
							String[] gettime = (stringl[0]).split("@");
							teamid = gettime[1];//场次
							String pmethod = gettime[0];
							String method = BettingUtil.getLotnoBetType(pmethod, lotno, "").getString("memo") + "、";
							allmethod = allmethod + method; // 代表购买的玩法
						} else {
							teamid = stringl[0];
						}
						stringl[1] = CodeUtil.getBDTouzhu(stringl[1], lotno);
						//获取到选项数据
						JSONObject returnarray = this.getBeiDanAgainstInfoForResult(lotno, batchcode, teamid);
						JSONObject result = returnarray.getJSONObject("result");
						if (!result.isNullObject()) {
							String resultString = result.getString("result");
							result.put("newResult", CodeUtil.getBDTouzhu(resultString, lotno));
						}
						returnarray.put("selectInfo", stringl[1] + " ");
						lastArray.add(returnarray);
					}
				}
				String lastmethod = allmethod.substring(0, allmethod.length() - 1);
				pastMethod.put("pastMethod", lastmethod);

				jo.put("pastMethod", pastMethod);
				jo.put("lastArray", lastArray);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return jo;

	}

	/**
	 * 格式化注码 目前针对合买
	 * @param tOrder 方案订单详情
	 * @param toRequest 是否将玩法和倍数存入request中
	 * @param num 迭代的次数 不限制设为0
	 */
	public static void betcodeFormat(JSONObject tOrder, boolean toRequest, int num, HttpServletRequest request,
			String wincode) {

		tOrder.put("tlots", new JSONArray());
		if (StringUtils.isBlank(tOrder.getString("orderinfo")) || tOrder.getString("orderinfo").equals("null")) {
			return;
		}
		String[] caseLotList = tOrder.getString("orderinfo").split("!");
		String allWF = "", singleWF = "";
		for (int i = 0; i < caseLotList.length && (i < num || num == 0); i++) {
			String[] betInfo = caseLotList[i].split("_");//0注吗_1倍数_2oneamt_3amt
			JSONObject rec = JSONObject.fromObject("{lotno:\"" + tOrder.getString("lotno") + "\",betcode:\""
					+ betInfo[0] + "\"}");
			rec.put("zhuma", CodeUtil.getCodeString(tOrder.getString("lotno"), rec.getString("betcode"), betInfo[1]));
			if (rec.getString("zhuma").indexOf("wanfa") > -1) {
				singleWF = rec.getJSONObject("zhuma").getString("wanfa");
				allWF = allWF + singleWF + "#";
			}
			//重新格式化合买的注码格式
			String lastBetcode = "";
			String redBall = "";
			String blueBall = "";
			if (rec.getJSONObject("zhuma").get("betcode") != null) {//单式 复式
				if (rec.getString("lotno").equals("F47104") || rec.getString("lotno").equals("T01001")
						|| rec.getString("lotno").equals(Constant.NMKS)) {
					if (wincode != null) {//已开奖（注码标红）
						if (rec.getString("lotno").equals("F47104")) {//双色球（已开奖）
							String[] allArr = rec.getJSONObject("zhuma").getString("betcode").replace("<br/>", "")
									.split("\\|");
							String[] redArr = allArr[0].split(",");
							String[] blueArr = allArr[1].split(",");
							String redball_win = wincode.split("＋")[0];
							for (int m = 0; m < redArr.length; m++) {
								if (redball_win.indexOf(redArr[m].trim()) != -1) {
									redArr[m] = "<i>" + redArr[m].trim() + "</i>";
								}
								redBall += redArr[m] + ",";
							}
							for (int m = 0; m < blueArr.length; m++) {
								if (wincode.split("＋")[1].indexOf(blueArr[m].trim()) != -1) {
									blueArr[m] = "<i>" + blueArr[m].trim() + "</i>";
								}
								blueBall += blueArr[m] + ",";
							}
							lastBetcode = redBall.substring(0, redBall.length() - 1) + "|"
									+ blueBall.substring(0, blueBall.length() - 1);
							rec.getJSONObject("zhuma").put("betcode", lastBetcode);
						} else if (rec.getString("lotno").equals("T01001")) {//大乐透（已开奖）
							if (rec.getString("lotno").equals("T01001")
									&& "3".equals(rec.getJSONObject("zhuma").getString("wanfa"))) {
								rec.getJSONObject("zhuma").put("betcode",
										rec.getJSONObject("zhuma").getString("betcode"));
							} else {
								String[] allArr = rec.getJSONObject("zhuma").getString("betcode").replace("<br/>", "")
										.split("\\|");
								String[] redArr = allArr[0].split(",");
								String[] blueArr = allArr[1].split(",");
								for (int m = 0; m < redArr.length; m++) {
									if (wincode.split("＋")[0].indexOf(redArr[m].trim()) != -1) {
										redArr[m] = "<i>" + redArr[m].trim() + "</i>";
									}
									redBall += redArr[m].trim() + ",";
								}
								for (int m = 0; m < blueArr.length; m++) {
									if (wincode.split("＋")[1].indexOf(blueArr[m].trim()) != -1) {
										blueArr[m] = "<i>" + blueArr[m].trim() + "</i>";
									}
									blueBall += blueArr[m].trim() + ",";
								}
								lastBetcode = redBall.substring(0, redBall.length() - 1) + "|"
										+ blueBall.substring(0, blueBall.length() - 1);
								rec.getJSONObject("zhuma").put("betcode", lastBetcode);
							}
						} else if (rec.getString("lotno").equals(Constant.NMKS)) {//内蒙快三（已开奖）
							String ballcodes = "";
							String[] allArr = rec.getJSONObject("zhuma").getString("betcode").replace("<br/>", "|")
									.split("\\|");
							for (int j = 0; j < allArr.length; j++) {
								String[] Arr = allArr[j].split(",");
								String ballcode = "";
								for (int m = 0; m < Arr.length; m++) {
									String mcode = Arr[m].trim();
									if (wincode.split("＋")[0].indexOf(Arr[m].trim()) != -1) {
										mcode = "<i>" + Arr[m].trim() + "</i>";
									}
									ballcode += mcode + ",";
								}
								ballcodes += ballcode.substring(0, ballcode.length() - 1) + "|";
							}
							lastBetcode = ballcodes.replace("|", "<br/>");
							rec.getJSONObject("zhuma").put("betcode", lastBetcode);
						}
					} else {//未开奖状态下注码格式化
						rec.getJSONObject("zhuma").put("betcode",
								rec.getJSONObject("zhuma").getString("betcode").replace("，", ","));
					}
				} else {
					if (wincode != null) {
						//中奖顺序不限
						if (rec.getString("lotno").equals("F47102")
								|| rec.getString("lotno").equals("T01013")
								|| (rec.getString("lotno").equals("F47103") && ("01".equals(rec.getJSONObject("zhuma")
										.getString("wanfa"))
										|| "02".equals(rec.getJSONObject("zhuma").getString("wanfa"))
										|| "0".equals(rec.getJSONObject("zhuma").getString("wanfa"))
										|| "1".equals(rec.getJSONObject("zhuma").getString("wanfa"))
										|| "31".equals(rec.getJSONObject("zhuma").getString("wanfa")) || "32"
											.equals(rec.getJSONObject("zhuma").getString("wanfa"))))) {

							String[] redArr = rec.getJSONObject("zhuma").getString("betcode").replace("<br/>", "")
									.split("，");
							for (int m = 0; m < redArr.length; m++) {
								if (wincode.split("＋")[0].indexOf(redArr[m]) != -1) {
									redArr[m] = "<i>" + redArr[m] + "</i>";
								}
								redBall += redArr[m] + ",";
							}
						} else if (rec.getString("lotno").equals("T01002")
								&& ("3".equals(rec.getJSONObject("zhuma").getString("wanfa"))
										|| "F3".equals(rec.getJSONObject("zhuma").getString("wanfa"))
										|| "6".equals(rec.getJSONObject("zhuma").getString("wanfa")) || "F6".equals(rec
										.getJSONObject("zhuma").getString("wanfa")))) {
							//顺序不限     排三格式用逗号分隔的
							String[] redArr = rec.getJSONObject("zhuma").getString("betcode").split(",");
							for (int m = 0; m < redArr.length; m++) {
								if (wincode.split("＋")[0].indexOf(redArr[m]) != -1) {
									redArr[m] = "<i>" + redArr[m] + "</i>";
								}
								redBall += redArr[m] + ",";
							}
						} else if ((rec.getString("lotno").equals("F47103") && ("00".equals(rec.getJSONObject("zhuma")
								.getString("wanfa")) || "20".equals(rec.getJSONObject("zhuma").getString("wanfa"))))) {
							//顺序限制
							String[] redArr = rec.getJSONObject("zhuma").getString("betcode").replace("|", " ＋ ")
									.split("＋");
							if ("00".equals(rec.getJSONObject("zhuma").getString("wanfa"))) {
								redArr = rec.getJSONObject("zhuma").getString("betcode").replace("；", "").split("，");
							}
							for (int m = 0; m < redArr.length; m++) {
								String[] wincode1 = wincode.split("＋")[0].split(",");
								if (redArr[m].indexOf("，") > -1) {
									String red1 = "";
									for (int j = 0; j < redArr[m].split("，").length; j++) {
										String red2 = redArr[m].split("，")[j];
										if (wincode1[m].substring(1, 2).trim().indexOf(red2.trim()) > -1) {
											red2 = "<i>" + red2 + "</i>";
										}
										if (j > 0) {
											red1 += "," + red2;
										} else {
											red1 += red2;
										}

									}

									redArr[m] = red1;
								} else {
									if (wincode1[m].substring(1, 2).trim().indexOf(redArr[m].trim()) > -1) {
										redArr[m] = "<i>" + redArr[m] + "</i>";
									}
								}
								redBall += redArr[m].trim() + "|";
							}
						} else if (rec.getString("lotno").equals("T01009") || rec.getString("lotno").equals("T01011")) {
							//顺序限制 排列五，七星彩以逗号分隔
							String[] redArr = rec.getJSONObject("zhuma").getString("betcode").replace("<br/>", "")
									.split(";")[0].split(",");
							for (int m = 0; m < redArr.length; m++) {
								if (redArr[m].indexOf(wincode.split("＋")[0].substring(m, m + 1)) != -1) {
									redArr[m] = redArr[m].substring(0,
											redArr[m].indexOf(wincode.split("＋")[0].substring(m, m + 1)))
											+ "<i>"
											+ wincode.split("＋")[0].substring(m, m + 1)
											+ "</i>"
											+ redArr[m].substring(redArr[m].indexOf(wincode.split("＋")[0].substring(m,
													m + 1)) + 1);
								}
								redBall += redArr[m] + "|";
							}
						} else if (rec.getString("lotno").equals("T01010") || rec.getString("lotno").equals("T01014")) {
							//11选5
							String betcode_11xuan5 = rec.getJSONObject("zhuma").getString("betcode");
							String[] redArr = null;
							if (!betcode_11xuan5.contains(",")) {
								betcode_11xuan5 = betcode_11xuan5.replace("<br/>", "").replace(" ", ",");
								redArr = betcode_11xuan5.replace("<br/>", "").replace(" ", ",").split(",");
								for (int m = 0; m < redArr.length; m++) {
									redBall += redArr[m] + ",";
								}
							} else if (betcode_11xuan5.contains("$")) {
								redArr = betcode_11xuan5.replace("<br/>", "").split("\\$");
								for (int m = 0; m < redArr.length; m++) {
									redBall += redArr[m] + "|";
								}
							} else {
								redArr = betcode_11xuan5.replace("<br/>", "").split("\\,");
								for (int m = 0; m < redArr.length; m++) {
									redBall += redArr[m] + "|";
								}
							}

						} else if (rec.getString("lotno").equals("T01002")
								&& ("1".equals(rec.getJSONObject("zhuma").getString("wanfa")) || "F1".equals(rec
										.getJSONObject("zhuma").getString("wanfa")))) {
							//顺序限制     排三格式用逗号分隔的
							String[] redArr = rec.getJSONObject("zhuma").getString("betcode").split("\\|");
							String[] wincode1 = wincode.split("＋")[0].trim().split("");
							for (int m = 0; m < redArr.length; m++) {
								if (redArr[m].trim().length() > 1) {
									String red1 = "";
									for (int j = 1; j < redArr[m].split("").length; j++) {
										String red2 = redArr[m].split("")[j];
										if (wincode1[m + 1].trim().indexOf(red2.trim()) > -1) {
											red2 = "<i>" + red2 + "</i>";
										}
										if (j > 0) {
											red1 += "，" + red2;
										} else {
											red1 += red2;
										}
									}
									redArr[m] = red1;
								} else {
									if (wincode1[m + 1].trim().indexOf(redArr[m].trim()) > -1) {
										redArr[m] = "<i>" + redArr[m] + "</i>";
									}
								}
								redBall += redArr[m].trim() + "|";
							}

						} else {
							redBall = rec.getJSONObject("zhuma").getString("betcode");
						}
						if ("T01007".equals(rec.getString("lotno"))) {
							lastBetcode = redBall;
						} else {
							lastBetcode = redBall.substring(0, redBall.length() - 1);
						}
						rec.getJSONObject("zhuma").put("betcode", lastBetcode.replace("，", ","));
					} else {
						rec.getJSONObject("zhuma").put("betcode",
								rec.getJSONObject("zhuma").getString("betcode").replace("，", ","));
					}
				}
			} else if (rec.getJSONObject("zhuma").get("redDanma") != null) {//红蓝胆拖
				if (wincode != null) {
					String[] redDanmaArr = rec.getJSONObject("zhuma").getString("redDanma").split("，");
					String[] redTuomaArr = rec.getJSONObject("zhuma").getString("redTuoma").split("，");
					String[] blueBallArr = rec.getJSONObject("zhuma").getString("blueBall").split("，");
					String redDanma = "";
					String redTuoma = "";

					for (int m = 0; m < redDanmaArr.length; m++) {
						if (wincode.split("＋")[0].indexOf(redDanmaArr[m]) != -1) {
							redDanmaArr[m] = "<i>" + redDanmaArr[m] + "</i>";
						}
						redDanma += redDanmaArr[m] + ",";
					}
					for (int m = 0; m < redTuomaArr.length; m++) {
						if (wincode.split("＋")[0].indexOf(redTuomaArr[m]) != -1) {
							redTuomaArr[m] = "<i>" + redTuomaArr[m] + "</i>";
						}
						redTuoma += redTuomaArr[m] + ",";
					}

					for (int m = 0; m < blueBallArr.length; m++) {
						if (wincode.split("＋")[1].indexOf(blueBallArr[m]) != -1) {
							blueBallArr[m] = "<i>" + blueBallArr[m] + "</i>";
						}
						blueBall += blueBallArr[m] + ",";
					}
					lastBetcode = "[胆]" + redDanma.substring(0, redDanma.length() - 1) + "[拖]"
							+ redTuoma.substring(0, redTuoma.length() - 1) + "[蓝]"
							+ blueBall.substring(0, blueBall.length() - 1);
					rec.getJSONObject("zhuma").put("redDanma", redDanma.substring(0, redDanma.length() - 1));
					rec.getJSONObject("zhuma").put("redTuoma", redTuoma.substring(0, redTuoma.length() - 1));
					rec.getJSONObject("zhuma").put("blueBall", blueBall.substring(0, blueBall.length() - 1));
					rec.getJSONObject("zhuma").put("betcode", lastBetcode);

				} else {
					rec.getJSONObject("zhuma").put("redDanma", rec.getJSONObject("zhuma").getString("redDanma"));
					rec.getJSONObject("zhuma").put("redTuoma", rec.getJSONObject("zhuma").getString("redTuoma"));
					rec.getJSONObject("zhuma").put("blueBall", rec.getJSONObject("zhuma").getString("blueBall"));
					rec.getJSONObject("zhuma").put(
							"betcode",
							"[胆] " + rec.getJSONObject("zhuma").getString("redDanma") + "[拖]"
									+ rec.getJSONObject("zhuma").getString("redTuoma") + "[蓝]"
									+ rec.getJSONObject("zhuma").getString("blueBall"));
				}

			} else if (rec.getJSONObject("zhuma").get("danma") != null) {//胆码拖吗
				if (wincode != null) {
					String[] DanmaArr = rec.getJSONObject("zhuma").getString("danma").split("，");
					String[] TuomaArr = rec.getJSONObject("zhuma").getString("tuoma").split("，");
					String Danma = "";
					String Tuoma = "";

					for (int m = 0; m < DanmaArr.length; m++) {
						if (wincode.split("＋")[0].indexOf(DanmaArr[m]) != -1) {
							DanmaArr[m] = "<i>" + DanmaArr[m] + "</i>";
						}
						Danma += DanmaArr[m] + ",";
					}
					for (int m = 0; m < TuomaArr.length; m++) {
						if (wincode.split("＋")[1].indexOf(TuomaArr[m]) != -1) {
							TuomaArr[m] = "<i>" + TuomaArr[m] + "</i>";
						}
						Tuoma += TuomaArr[m] + ",";
					}

					lastBetcode = "[胆]" + Danma.substring(0, Danma.length() - 1) + "[拖]"
							+ Tuoma.substring(0, Tuoma.length() - 1);

					rec.getJSONObject("zhuma").put("danma",
							Danma.substring(0, Danma.length() - 1).replace("，", ", ").replace("|", " ＋ "));
					rec.getJSONObject("zhuma").put("tuoma",
							Tuoma.substring(0, Tuoma.length() - 1).replace("，", ", ").replace("|", " ＋ "));
					rec.getJSONObject("zhuma").put("betcode", lastBetcode);

				} else {
					rec.getJSONObject("zhuma").put("danma",
							rec.getJSONObject("zhuma").getString("danma").replace("，", ", ").replace(" ", ""));
					rec.getJSONObject("zhuma").put("tuoma",
							rec.getJSONObject("zhuma").getString("tuoma").replace("，", " ,").replace(" ", ""));
					rec.getJSONObject("zhuma").put(
							"betcode",
							"[胆]" + rec.getJSONObject("zhuma").getString("danma") + "[拖]"
									+ rec.getJSONObject("zhuma").getString("tuoma"));
				}
			} else if (rec.getJSONObject("zhuma").get("qianDanma") != null) {//胆码拖吗
				if (wincode != null) {
					String[] qianDanmaArr = rec.getJSONObject("zhuma").getString("qianDanma").split(",");
					String[] qianTuomaArr = rec.getJSONObject("zhuma").getString("qianTuoma").split(",");
					String[] houDanmaArr = rec.getJSONObject("zhuma").getString("houDanma").split(",");
					String qianDanma = "";
					String qianTuoma = "";
					String houDanma = "";

					for (int m = 0; m < qianDanmaArr.length; m++) {
						if (wincode.split("＋")[0].indexOf(qianDanmaArr[m]) != -1) {
							qianDanmaArr[m] = "<i>" + qianDanmaArr[m] + "</i>";
						}
						qianDanma += qianDanmaArr[m] + ",";
					}
					for (int m = 0; m < qianTuomaArr.length; m++) {
						if (wincode.split("＋")[0].indexOf(qianTuomaArr[m]) != -1) {
							qianTuomaArr[m] = "<i>" + qianTuomaArr[m] + "</i>";
						}
						qianTuoma += qianTuomaArr[m] + ",";
					}
					for (int m = 0; m < houDanmaArr.length; m++) {
						if (wincode.split("＋")[1].indexOf(houDanmaArr[m]) != -1) {
							houDanmaArr[m] = "<i>" + houDanmaArr[m] + "</i>";
						}
						houDanma += houDanmaArr[m] + ",";
					}
					if (rec.getJSONObject("zhuma").get("houTuoma") != null) {

						String[] houTuomaArr = rec.getJSONObject("zhuma").getString("houTuoma").split(",");

						String houTuoma = "";

						for (int m = 0; m < houTuomaArr.length; m++) {
							if (wincode.split("＋")[1].indexOf(houTuomaArr[m]) != -1) {
								houTuomaArr[m] = "<i>" + houTuomaArr[m] + "</i>";
							}
							houTuoma += houTuomaArr[m] + ",";
						}
						lastBetcode = "[前区|胆]" + qianDanma.substring(0, qianDanma.length() - 1) + "[前区|拖]"
								+ qianTuoma.substring(0, qianTuoma.length() - 1) + "[后区|胆]"
								+ houDanma.substring(0, houDanma.length() - 1) + "[后区|拖]"
								+ houTuoma.substring(0, houTuoma.length() - 1);
						rec.getJSONObject("zhuma").put("houTuoma", houTuoma.substring(0, houTuoma.length() - 1));
					} else {
						lastBetcode = "[前区|胆]" + qianDanma.substring(0, qianDanma.length() - 1) + "[前区|拖]"
								+ qianTuoma.substring(0, qianTuoma.length() - 1) + "[后区|胆]"
								+ houDanma.substring(0, houDanma.length() - 1);
						rec.getJSONObject("zhuma").put("houTuoma", "");
					}
					rec.getJSONObject("zhuma").put("qianDanma", qianDanma.substring(0, qianDanma.length() - 1));
					rec.getJSONObject("zhuma").put("qianTuoma", qianTuoma.substring(0, qianTuoma.length() - 1));
					rec.getJSONObject("zhuma").put("houDanma", houDanma.substring(0, houDanma.length() - 1));
					rec.getJSONObject("zhuma").put("betcode", lastBetcode);
				} else {
					rec.getJSONObject("zhuma").put("qianDanma", rec.getJSONObject("zhuma").getString("qianDanma"));
					rec.getJSONObject("zhuma").put("qianTuoma", rec.getJSONObject("zhuma").getString("qianTuoma"));
					rec.getJSONObject("zhuma").put("houTuoma", rec.getJSONObject("zhuma").getString("houTuoma"));
					if (rec.getJSONObject("zhuma").get("houDanma") != null) {
						rec.getJSONObject("zhuma").put("houDanma", rec.getJSONObject("zhuma").getString("houDanma"));
					} else {
						rec.getJSONObject("zhuma").put("houDanma", "");
					}
					rec.getJSONObject("zhuma").put(
							"betcode",
							"[前区|胆]" + rec.getJSONObject("zhuma").getString("qianDanma") + "[前区|拖]"
									+ rec.getJSONObject("zhuma").getString("qianTuoma") + "[后区|胆]"
									+ rec.getJSONObject("zhuma").getString("houDanma") + "[后区|拖]"
									+ rec.getJSONObject("zhuma").getString("houTuoma"));
				}
			}

			//将注码格式组合成合买方案展现时的输出格式
			JSONObject zhuma = rec.getJSONObject("zhuma");
			if ("J00012".equals(rec.getString("lotno")) || "J00011".equals(rec.getString("lotno"))
					|| "J00001".equals(rec.getString("lotno")) || "J00013".equals(rec.getString("lotno"))
					|| "J00002".equals(rec.getString("lotno")) || "J00003".equals(rec.getString("lotno"))
					|| "J00004".equals(rec.getString("lotno")) || "J00005".equals(rec.getString("lotno"))
					|| "J00006".equals(rec.getString("lotno")) || "J00007".equals(rec.getString("lotno"))
					|| "J00008".equals(rec.getString("lotno"))) {
				zhuma.put("multiple", betInfo[1]);
			}
			;
			if ("B00001".equals(rec.getString("lotno")) || "B00002".equals(rec.getString("lotno"))
					|| "B00003".equals(rec.getString("lotno")) || "B00004".equals(rec.getString("lotno"))
					|| "B00005".equals(rec.getString("lotno"))) {
				zhuma.put("multiple", betInfo[1]);
			}
			;
			StringBuffer value = new StringBuffer();

			if ("F47104".equals(rec.getString("lotno")) || "B001".equals(rec.getString("lotno"))) {//双色球
				if ("00".equals(zhuma.getString("wanfa"))) {
					value.append("<th>单式投注</th><th>").append(zhuma.getString("betcode").trim()).append("</th>");
				} else if ("10".equals(zhuma.getString("wanfa")) || "20".equals(zhuma.getString("wanfa"))
						|| "30".equals(zhuma.getString("wanfa"))) {
					value.append("<th>复式投注</th><th>").append(zhuma.getString("betcode").trim()).append("</th>");
				} else if ("40".equals(zhuma.getString("wanfa")) || "50".equals(zhuma.getString("wanfa"))) {
					value.append("<th>胆拖投注</th><th>").append(zhuma.getString("betcode").trim()).append("</th>");
				}

			} else if ("F47103".equals(rec.getString("lotno")) || "D3".equals(rec.getString("lotno"))) {//3D
				if ("00".equals(zhuma.getString("wanfa"))) {
					value.append("<th>直选单式投注</th><th>");
				} else if ("01".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三单式投注</th><th>");
				} else if ("02".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六单式投注</th><th>");
				} else if ("20".equals(zhuma.getString("wanfa"))) {
					value.append("<th>直选复式投注</th><th>");
				} else if ("31".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三复式投注</th><th>");
				} else if ("32".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六复式投注</th><th>");
				} else if ("10".equals(zhuma.getString("wanfa"))) {
					value.append("<th>直选和值投注</th><th>");
				} else if ("11".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三和值投注</th><th>");
				} else if ("12".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六和值投注</th><th>");
				} else {
					value.append("<th>复式投注</th><th>");
				}
				value.append(zhuma.getString("betcode").replace("；", "")).append("</th>");
			} else if ("F47107".equals(rec.getString("lotno"))) {//内蒙快三
				String wanfa = CodeUtil.getWanfaByPlayType(zhuma.getString("wanfa"), Constant.NMKS);
				value.append("<th>" + wanfa + "</th><th>");
				if ("64".equals(zhuma.getString("wanfa")) || "22".equals(zhuma.getString("wanfa"))) {
					value.append("[胆码]:" + zhuma.getString("danma") + "[拖码]:" + zhuma.getString("tuoma")).append(
							"</th>");
				} else if ("40".equals(zhuma.getString("wanfa")) || "50".equals(zhuma.getString("wanfa"))) {
					value.append("").append("</th>");
				} else if ("71".equals(zhuma.getString("wanfa"))) {
					value.append("[同号]:" + zhuma.getString("danma") + "[不同号]:" + zhuma.getString("tuoma")).append(
							"</th>");
				} else {
					value.append(zhuma.getString("betcode").replace("；", "")).append("</th>");
				}

			} else if ("F47102".equals(rec.getString("lotno")) || "QL730".equals(rec.getString("lotno"))) {//七乐彩
				if ("00".equals(zhuma.getString("wanfa"))) {
					value.append("<th>单式</th><th>").append(zhuma.getString("betcode")).append("</th>");
				} else if ("10".equals(zhuma.getString("wanfa"))) {
					value.append("<th>复式</th><th>").append(zhuma.getString("betcode")).append("</th>");
				} else if ("20".equals(zhuma.getString("wanfa"))) {
					value.append("<th>胆拖</th><th>").append(zhuma.getString("betcode")).append("</th>");
				}
			} else if ("T01002".equals(rec.getString("lotno")) || "PL3_33".equals(rec.getString("lotno"))) {//排列三
				if ("1".equals(zhuma.getString("wanfa")) && zhuma.getString("betcode").replace("|", "").length() == 3) {
					value.append("<th>直选单式</th><th>");
				} else if ("1".equals(zhuma.getString("wanfa"))
						&& zhuma.getString("betcode").replace("|", "").length() > 3) {
					value.append("<th>直选复式</th><th>");
				} else if ("S1".equals(zhuma.getString("wanfa"))) {
					value.append("<th>直选和值</th><th>");
				} else if ("3".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三单式</th><th>");
				} else if ("F3".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三复式</th><th>");
				} else if ("S3".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组三和值</th><th>");
				} else if ("6".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六单式</th><th>");
				} else if ("F6".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六复式</th><th>");
				} else if ("S6".equals(zhuma.getString("wanfa"))) {
					value.append("<th>组六和值</th><th>");
				} else {
					value.append("<th>复式</th><th>");
				}
				value.append(zhuma.getString("betcode")).append("</th>");

			} else if ("T01011".equals(rec.getString("lotno")) || "PLW_35".equals(rec.getString("lotno"))) {//排列五
				value.append("<th>复式</th><th>").append(zhuma.getString("betcode").replaceAll(";", "")).append("</th>");

			} else if ("T01009".equals(rec.getString("lotno")) || "QXC_10022".equals(rec.getString("lotno"))) {//七星彩
				value.append("<th>复式</th><th>").append(zhuma.getString("betcode").replaceAll(";", "")).append("</th>");

			} else if ("T01001".equals(rec.getString("lotno")) || "DLT_23529".equals(rec.getString("lotno"))) {//大乐透
				if ("0".equals(zhuma.getString("wanfa"))) {
					value.append("<th>单式</th><th>").append(zhuma.getString("betcode").trim().replaceAll(";", ""))
							.append("</th>");
				} else if ("1".equals(zhuma.getString("wanfa")) || "20".equals(zhuma.getString("wanfa"))
						|| "30".equals(zhuma.getString("wanfa"))) {
					value.append("<th>复式</th><th>").append(zhuma.getString("betcode").trim()).append("</th>");
				} else if ("2".equals(zhuma.getString("wanfa")) || "50".equals(zhuma.getString("wanfa"))) {
					value.append("<th>胆拖</th><th>").append(zhuma.getString("betcode")).append("</th>");
				} else if ("3".equals(zhuma.getString("wanfa"))) {
					value.append("<th>生肖乐</th><th>").append(zhuma.getString("betcode")).append("</th>");
				}
			} else if ("T01014".equals(rec.getString("lotno")) || "T01012".equals(rec.getString("lotno"))
					|| "T01010".equals(rec.getString("lotno")) || "T01007".equals(rec.getString("lotno"))) {//十一运夺金
				value.append("<th>" + rec.getJSONObject("zhuma").getString("wanfa") + ":")
						.append(zhuma.getString("betcode")).append("</th>");
			} else if ("T01013".equals(rec.getString("lotno"))) {//七乐彩
				if ("0".equals(zhuma.getString("wanfa"))) {
					value.append("<th>单式</th><th>").append(zhuma.getString("betcode")).append("</th>");
				} else if ("1".equals(zhuma.getString("wanfa"))) {
					value.append("<th>复式</th><th>").append(zhuma.getString("betcode")).append("</th>");
				} else if ("2".equals(zhuma.getString("wanfa"))) {
					value.append("<th>胆拖</th><th>").append(zhuma.getString("betcode")).append("</th>");
				}
			} else {//足彩
				rec.getJSONObject("zhuma").put("betcode", rec.getString("betcode"));
				rec.put("amt", (Long.parseLong(betInfo[3]) / 100));
				rec.put("multiple", betInfo[1]);
				rec.getJSONObject("zhuma").put("multiple", betInfo[1]);
			}
			zhuma.put("value",
					value + "<td>" + zhuma.getString("multiple") + "倍</td><td>"
							+ (Long.parseLong(betInfo[3]) / 100 * Long.parseLong(zhuma.getString("multiple")))
							+ "元</td></tr>");
			zhuma.put("IntMultiple", Integer.valueOf(zhuma.getString("multiple")));
			tOrder.getJSONArray("tlots").add(rec);
		}
		if (toRequest) {
			request.setAttribute("allWF", allWF);
			request.setAttribute("lotmulti", tOrder.getString("lotmulti"));
		}
	}

	/**
	 * 解析开奖后的order中的prizeInfo，并将当前开奖信息的奖金匹配给prizeInfo，转成List的对象
	 * @param torder 其中格式"prizeinfo":"3_24,2_2,1_1,6_15,5_260,4_138"
	 * @param twininfo 其中格式"info":"51200_51200_0,1_8_0;2_10_0;3_0_300000;4_27_20000;5_68_1000;6_2_500;7_0_0;8_0_0;9_0_0;10_0_300000"
	 * @return {jd:奖等,zs:中奖总数,jj:奖金,num:订单中奖数量}
	 */
	public static JSONArray getOrderPrizeInfo(JSONObject torder, JSONObject twininfo) {
		JSONArray list = new JSONArray();//存储开奖详情的列表对象
		String prizeinfo = "";
		String info = "";

		//取prizeinfo的值
		if (torder != null && !torder.isNullObject() && torder.get("prizeinfo") != null
				&& !torder.get("prizeinfo").equals("null")) {
			prizeinfo = torder.getString("prizeinfo");
		}
		//取开奖详情中的info的值
		if (twininfo != null && !twininfo.isNullObject() && twininfo.get("info") != null
				&& !twininfo.get("info").equals("null")) {
			info = twininfo.getString("info").substring(twininfo.getString("info").indexOf(",") + 1);
		}
		String[] infos = info.split(";");

		//转换prizeinfo的格式
		String[] prizeinfos = prizeinfo.split(",");
		String[] prizeinfoStrs = {};
		Map<String, String> prizeInfoMap = new HashMap();
		for (String prizeinfoStr : prizeinfos) {
			prizeinfoStrs = prizeinfoStr.split("_");
			prizeInfoMap.put(prizeinfoStrs[0], prizeinfoStrs[1]);
		}

		//构建JsonArray 按照twininfo中的奖等信息进行循环 ，依次匹配order中的prizeinfo中的奖等，存在的就保存到List里面
		String[] infoStrs = {};
		for (String infoStr : infos) {
			infoStrs = infoStr.split("_");
			if (prizeInfoMap.get(infoStrs[0]) != null) {
				list.add("{jd:" + infoStrs[0] + ",zs:" + infoStrs[1] + ",jj:" + (Integer.parseInt(infoStrs[2]) / 100)
						+ ",num:" + prizeInfoMap.get(infoStrs[0]) + "}");
			}
		}

		return list;
	}

	/**
	 * 指定用户的方案列表查询
	 * 查询用户参与的合买
	 * 
	 * @param state
	 *            合买状态数组。1：新发起，2：已投注，3：完成，4：取消
	 * @param loginuserno
	 *            当前登录人编号，未登录可以不穿或传空值
	 * @param userno
	 *            （必须有的），查询的用户编号
	 * @param buyType
	 *            参与类型。null:全部，0:参与合买，1，发起合买
	 * @param condition
	 *                  lotno  筛选条件 ， 彩种编号
	 *                  winBigAmt（税后奖金） 条件之一，查询条件winBigAmt>0 的时候筛选出来都是中奖的方案
	 *            查询条件json字符串
	 * @param startLine
	 *            开始记录
	 * @param endLine
	 *            获取记录数
	 * @param orderBy
	 *            排序字段
	 * @param orderDir
	 *            排序方式
	 * @return page
	 */
	public String getFangAnListToUser() {
		String userno = request.getParameter("userno") == null ? "" : request.getParameter("userno");//获取的是发起合买人的userno
		String loginuserno = session.getAttribute("userno") == null ? "" : String.valueOf(session
				.getAttribute("userno"));
		String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");//彩种编号
		String buyType = request.getParameter("buyType");//
		String state = request.getParameter("state") == null ? "" : request.getParameter("state");
		Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
				.getParameter("pageIndex"));
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? 10 : Integer.valueOf(request.getParameter("pageCount"));
		String winBigAmt = request.getParameter("winBigAmt") == null ? "" : request.getParameter("winBigAmt");
		String stateArry = "";
		state = state.replace("%2C", ",");
		if (state.indexOf(',') > 0) {
			String arr[] = state.split(",");
			for (int i = 0; i < arr.length; i++) {
				stateArry += "&state=" + arr[i];
			}
		} else {
			stateArry = "&state=" + state;
		}
		//构造查询条件的MAP对象
		Map<String, String> conditionMap = new HashMap<String, String>();
		//这里可以添加查询的详细条件，为NULL时此参数不传
		if (!lotno.equals("")) {
			conditionMap.put("EQS_lotno", lotno);
		}
		if (!winBigAmt.equals("")) {
			conditionMap.put("GTL_winBigAmt", "0");
		}
		JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
		String params = "userno=" + userno + "&startLine=" + (pageNum * (pageIndex - 1)) + "&endLine=" + pageNum;
		// 在为空的时候，可以不传 的参数
		if (!"".equals(loginuserno)) {
			params += "&loginuserno=" + loginuserno;
		}
		if (!"".equals(state)) {
			params += stateArry;
		}
		if (!buyType.equals("")) {
			params += "&buyType=" + buyType;
		}
		if (!condition.isEmpty()) {
			params += "&condition=" + condition;
		}
		try {
			logger.info("合买方案查询请求连接：" + ResourceBundleUtil.LINKURL + "/select/selectCaseLotsByUserno?" + params);
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/selectCaseLotsByUserno?",
							params, "POST")).getJSONObject("value");
			logger.info("合买方案查询结果：[" + userno + "]" + obj);
			request.setAttribute("fanganList", obj);
			String pageHtml = CommonUtil.getPageToJsp(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 3, "CaseFanganSelectForm");
			request.setAttribute("pageHtml", pageHtml);
			return "fangan_list";

		} catch (IOException e) {
			e.getStackTrace();
			logger.error("合买用户方案查询报错 Exception(Check out the HeMai exception of No): [" + userno + "]" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 指定用户的历史战绩列表查询
	  * 
	 * @param userno
	 *            查询用户编号
	 * @param lotno
	 *            彩种编号
	 * @param loginuserno
	 *            当前登录用户编号
	 * @param startLine
	 *            开始记录
	 * @param endLine
	 *            获取记录数
	 * @param orderBy
	 *            排序字段
	 * @param orderDir
	 *            排序方式
	 * @return page
	 */
	public String getYingLiListToUser() {
		String userno = request.getParameter("userno") == null ? "" : request.getParameter("userno");
		String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");//彩种编号
		Integer pageIndex = request.getParameter("page_Index") == null || request.getParameter("page_Index").equals("") ? 1
				: Integer.valueOf(request.getParameter("page_Index"));
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? 10 : Integer.valueOf(request.getParameter("pageCount"));
		try {
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
							+ "/select/selectTuserachievementDetails?", "userno=" + userno + "&lotno=" + lotno
							+ "&startLine=" + (pageNum * (pageIndex - 1)) + "&endLine=" + pageNum, "POST"))
					.getJSONObject("value");
			JSONArray array = obj.getJSONArray("list");
			JSONArray doJsonArray = new JSONArray();
			for (int i = 0; i < array.size(); i++) {
				JSONObject torderJson = array.getJSONObject(i).getJSONObject("torder");
				JSONObject caseLotJson = array.getJSONObject(i).getJSONObject("caseLot");
				String wanfa = PlayTypeCode.getMemo(torderJson.getString("lotno") + "_"
						+ torderJson.getString("playtype"));
				caseLotJson.put("wanfa", wanfa);
				doJsonArray.add(caseLotJson);
			}
			request.setAttribute("yingliZhanJiList", doJsonArray);
			String pageHtml = CommonUtil.getzhanjiToJsp(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 3, "CaseYingliSelectForm");
			request.setAttribute("pageHtml", pageHtml);
			return "yingli_list";
		} catch (IOException e) {
			logger.error("合买战绩查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 查看指定合买的参与人列表
	 * update: 2011-11-4 updateAuthor : chuxiaona  将页面上的时间处理以及百分比的处理放到action中  
	 * @return page
	 * 
	 */
	public String getCanYuUserList() {
		String caselotid = request.getParameter("caselotid") == null ? "" : request.getParameter("caselotid");
		try {
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
							+ "/select/selectCaseLotBuysWithOutPage?" + "caselotid=" + caselotid)).getJSONObject(
					"value");
			JSONArray BuyandUser = obj.getJSONArray("caseLotBuyAndUser");
			JSONObject caseLot = obj.getJSONObject("caseLot");
			//总奖金
			double alllamt = 0;
			for (int i = 0; i < BuyandUser.size(); i++) {
				JSONObject caseLotBuy = BuyandUser.getJSONObject(i).getJSONObject("caseLotBuy");
				//认购人的认购百分比（保留两位小数）
				caseLotBuy.put("proportion",
						CommonUtil.moneySave2(caseLotBuy.getDouble("num") * 100 / caseLot.getDouble("totalAmt")));
				//认购人的认购金额（保留两位小数）
				caseLotBuy.put("num", CommonUtil.moneySave2(caseLotBuy.getDouble("num") / 100));

				//认购人保底金额（保留两位小数）
				caseLotBuy.put("freezeSafeAmt", CommonUtil.moneySave2(caseLotBuy.getDouble("freezeSafeAmt") / 100));
				//认购人的奖金（保留两位小数）
				caseLotBuy.put("prizeAmt", CommonUtil.moneySave2(caseLotBuy.getDouble("prizeAmt") / 100));
				alllamt += caseLotBuy.getDouble("prizeAmt");
				if (!(BuyandUser.getJSONObject(i).getJSONObject("userinfo").isNullObject())) {
					BuyandUser.getJSONObject(i).put("canyuName",
							NameUtil.getNameUtilJson(BuyandUser.getJSONObject(i).getJSONObject("userinfo")));
				} else {
					BuyandUser.getJSONObject(i).put("canyuName", "--");
				}
				caseLotBuy.put(
						"buyTime",
						new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(BuyandUser.getJSONObject(i)
								.getJSONObject("caseLotBuy").getLong("buyTime"))));
			}
			double buyAllMoeny = caseLot.getDouble("buyAmtByStarter") + caseLot.getDouble("buyAmtByFollower");

			//购买总金额（保留两位小数）
			caseLot.put("buyAllMoeny", CommonUtil.moneySave2(buyAllMoeny / 100));
			//总百分比（保留两位小数）
			caseLot.put("buyAllProportion", CommonUtil.moneySave2(buyAllMoeny * 100 / caseLot.getDouble("totalAmt")));

			//总保底金额（保留两位小数）
			caseLot.put("safeAmt", CommonUtil.moneySave2(caseLot.getDouble("safeAmt") / 100));
			//总奖金（保留两位小数）
			obj.put("allamt", CommonUtil.moneySave2(alllamt));
			//调用users用户信息并储存
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			request.setAttribute("userno", userno);
			request.setAttribute("canyuList", obj);
			return "canyu_list";
		} catch (Exception e) {
			logger.error("合买方案参与者查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 查看指定合买的参与人列表
	 * update: 2011-11-4 updateAuthor : chuxiaona  将页面上的时间处理以及百分比的处理放到action中  
	 * @return page
	 * 
	 */
	public String getCanYuUserListPage() {
		String caselotid = request.getParameter("caselotid") == null ? "" : request.getParameter("caselotid");
		Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
				.getParameter("pageIndex"));
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));
		try {
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select//selectCaseLotBuys?",
							"caselotid=" + caselotid + "&startLine=" + (pageNum * (pageIndex - 1)) + "&endLine="
									+ pageNum, "POST")).getJSONObject("value");
			JSONArray canyuList = obj.getJSONArray("list");
			JSONObject caseLot = canyuList.getJSONObject(0).getJSONObject("caseLot");
			//总奖金
			double alllamt = 0;
			for (int i = 0; i < canyuList.size(); i++) {
				JSONObject caseLotBuy = canyuList.getJSONObject(i).getJSONObject("caseLotBuy");
				//认购人的认购百分比（保留两位小数）
				caseLotBuy.put("proportion",
						CommonUtil.moneySave2(caseLotBuy.getDouble("num") * 100 / caseLot.getDouble("totalAmt")));
				//认购人的认购金额（保留两位小数）
				caseLotBuy.put("num", CommonUtil.moneySave2(caseLotBuy.getDouble("num") / 100));

				//认购人保底金额（保留两位小数）
				caseLotBuy.put("freezeSafeAmt", CommonUtil.moneySave2(caseLotBuy.getDouble("freezeSafeAmt") / 100));
				//认购人的奖金（保留两位小数）
				caseLotBuy.put("prizeAmt", CommonUtil.moneySave2(caseLotBuy.getDouble("prizeAmt") / 100));
				alllamt += caseLotBuy.getDouble("prizeAmt");
				caseLotBuy.put("buyTime",
						new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(caseLotBuy.getLong("buyTime"))));
			}
			double buyAllMoeny = caseLot.getDouble("buyAmtByStarter") + caseLot.getDouble("buyAmtByFollower");

			//购买总金额（保留两位小数）
			caseLot.put("buyAllMoeny", CommonUtil.moneySave2(buyAllMoeny / 100));
			//总百分比（保留两位小数）
			caseLot.put("buyAllProportion", CommonUtil.moneySave2(buyAllMoeny * 100 / caseLot.getDouble("totalAmt")));

			//总保底金额（保留两位小数）
			caseLot.put("safeAmt", CommonUtil.moneySave2(caseLot.getDouble("safeAmt") / 100));
			//总奖金（保留两位小数）
			obj.put("allamt", CommonUtil.moneySave2(alllamt));
			obj.put("caseLot", caseLot);
			//调用users用户信息并储存
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			request.setAttribute("userno", userno);
			request.setAttribute("canyuList", obj);
			String pageHtml = CommonUtil.getPageToJspForCanyu(pageIndex,
					Integer.parseInt(obj.getString("totalResult")), pageNum, 3, "userListPage");
			request.setAttribute("pageHtml", pageHtml);
			return "canyu_list";
		} catch (IOException e) {
			logger.error("合买方案参与者查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 合买中心导航 , 合买数据接口
	 *@author zhaokailong
	 * date : 2011-12-19
	 */
	public String getCaseHemaiCenter() {
		//获取请求类型
		String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");//彩种编号
		String batchCode = request.getParameter("batchCode") == null ? "" : request.getParameter("batchCode");
		String lotsType = request.getParameter("lotsType") == null ? "-1" : request.getParameter("lotsType");
		Integer sortStateFlag = Integer.parseInt(request.getParameter("sortStateFlag") == null ? "0" : request
				.getParameter("sortStateFlag"));//0为置顶+普通合买用于合买大厅 1为置顶用于合买中心
		String search = request.getParameter("search") == null ? "" : request.getParameter("search");
		Integer totalAmt = Integer.parseInt(request.getParameter("totalAmt") == null
				|| request.getParameter("totalAmt").equals("") ? "-1" : request.getParameter("totalAmt"));
		Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
				.getParameter("pageIndex"));
		Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
				"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));
		//查询条件  合买状态 默认为"认购中" subscribing(1,"认购中"), full(2,"满员"),success(3,"成功"),canceledByUser(4,"撤单"),canceledBySystem(5,"流单"),win(6,"已中奖");
		String displayState = request.getParameter("displayState") == null ? "1" : request.getParameter("displayState");
		String orderBy = request.getParameter("orderBy") == null ? "jindu" : request.getParameter("orderBy");
		;//需要排序的字段
		String orderDir = request.getParameter("orderDir") == null ? "" : request.getParameter("orderDir");
		; //排列的顺序
		if (orderBy.indexOf("PUTIN") > -1) {
			orderBy = orderBy.replaceAll("PUTIN", "%2B");// url中加好（+）的编码
		}
		if (orderBy.equals("")) {//如果没有指定排序字段，则不能进行排序
			orderDir = "";
		}
		//构造查询条件的MAP对象
		Map<String, String> conditionMap = new HashMap();
		if (!lotno.equals("")) {
			conditionMap.put("EQS_lotno", lotno);
		}
		if (!displayState.equals("0")) {//当displayState为0的时候，表示获取全部合买列表，则displayState不参与筛选条件
			conditionMap.put("EQG_displayState", displayState);
		}
		if (!lotsType.equals("-1")) {
			conditionMap.put("EQG_lotsType", lotsType);
		}
		if (totalAmt != -1) {//根据方案金额筛选
			if (totalAmt == 100000) {//千元以上方案
				conditionMap.put("GEG_totalAmt", totalAmt.toString());
			}
			if (totalAmt == 10000) {//百元以上方案
				conditionMap.put("GEG_totalAmt", totalAmt.toString());
				conditionMap.put("LTG_totalAmt", "100000");
			}
			if (totalAmt == 1) {//百元以下方案
				conditionMap.put("LTG_totalAmt", "10000");
			}
		}

		try {
			if (sortStateFlag == 0) {//如果是合买中心的数据，将不属于任何期
				//获取期号当前期
				if (batchCode.equals("") && !lotno.equals("")) {
					//若是足彩
					if (lotno.equals("T01003") || lotno.equals("T01004") || lotno.equals("T01005")
							|| lotno.equals("T01006")) {
						try {
							JSONArray zcIssue = JSONObject.fromObject(
									JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
											+ "/select/getZCIssue?lotno=" + lotno)).getJSONArray("value");
							for (int i = 0; i < zcIssue.size() && i < 1; i++) {
								batchCode = zcIssue.getJSONObject(i).getJSONObject("id").getString("batchcode");
							}
						} catch (Exception e) {
							logger.error("合买查询 足彩期号获取报错 Exception(Check out the HeMai to ZC get batchcode exception of No):"
									+ e.toString());
							e.printStackTrace();
						}
					} else {
						batchCode = InvokeLotteryUtil.getIssueObject(lotno).getString("batchCode");
					}

				}
				if (!batchCode.equals("") && !lotno.equals("")) {//当去的条件期号 若期号不存在 则使用当前期 作为查询条件
					conditionMap.put("EQS_batchcode", batchCode);
				}
			}

			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/selectCaseLots?", "search="
							+ search + "&sortStateFlag=" + sortStateFlag + "&orderBy=" + orderBy + "&orderDir="
							+ orderDir + "&condition=" + condition.toString() + "&startLine="
							+ (pageNum * (pageIndex - 1)) + "&endLine=" + pageNum, "POST")).getJSONObject("value");
			if (obj != null && !obj.isNullObject() && obj.get("list") != null && !obj.get("list").equals("null")) {
				JSONArray caseArray = obj.getJSONArray("list");
				JSONArray name_array = new JSONArray();
				for (int i = 0; i < caseArray.size(); i++) {
					JSONObject caseObj = caseArray.getJSONObject(i);
					JSONObject starter_name = caseObj.getJSONObject("starter");
					if (!starter_name.isEmpty()) {
						Tuserinfo tusers = Tuserinfo.setJson(starter_name);
						String tuser_names = NameUtil.getNameUtil(tusers);
						JSONObject name_json = new JSONObject();
						name_json.put("new_nickname", tuser_names);
						name_array.add(name_json);
					} else {
						name_array.add("");
					}
					//格式化注码
					betcodeFormat(caseObj.getJSONObject("torder"), true, 5, request, null);
				}
				obj.put("nickname_array", name_array);
			}

			request.setAttribute("hemaiList", obj);
			String pageHtml = CommonUtil.getPageToJsp(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 4, "CaseSelectForm");
			request.setAttribute("pageHtml", pageHtml);
			request.setAttribute("title", CommonUtil.getTitle(lotno));
			//返回合买名人的信息
			if (lotno == null || "".equals(lotno)) {
				lotno = "center";
			}
			JSONArray objmr = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/caselot/selectCaseLotCelebrity?"
							+ "lotno=" + lotno)).optJSONArray("value");

			request.setAttribute("celebrityList", objmr);
			return "caseCenterAll";

		} catch (IOException e) {
			logger.error("合买查询报错 Exception(Check out the HeMai exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 合买名人列表查询
	 * @return
	 */
	public String getCaseCelebrity() {
		String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
		try {
			JSONArray obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/caselot/selectCaseLotCelebrity?"
							+ "lotno=" + lotno)).optJSONArray("value");
			request.setAttribute("celebrityList", obj);
			return "celebrity_list";
		} catch (Exception e) {
			logger.error("合买名人查询报错 Exception(Check out the HeMai Celebrity exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	//================================合买结束======================================
	/**
	 * 获取遗漏数据(新接口) 此乃选号下方的遗漏
	 * @return
	 * update zkl . time :2011-11-17
	 */
	public String getPageOmission() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String lotno = request.getParameter("lotno");//T01012
		String batchcode = request.getParameter("batchcode");
		String wanfa = lotno + request.getParameter("wanfa");
		if (batchcode == null || "".equals(batchcode))
			return null; //期号为空时 直接返回null
		try {
			//下面一段代码的作用是解决预投期时没有遗漏信息：页面显示为2011112808期 没有遗漏, 2011112807期等待开奖没有遗漏, 导致页面3分钟左右没有遗漏值的情况 
			JSONObject jsonObject = null;
			for (int i = 0; i < 5; i++) {
				String batchcode1 = String.valueOf(Long.parseLong(batchcode) - i);
				String backJson = JSONReslutUtil.getResultMessage(ResourceBundleUtil.OMITURL
						+ "/select/missvalue2ndList?lotno=" + lotno + "&batchcode=" + batchcode1);
				jsonObject = JSONObject.fromObject(JSONObject.fromObject(backJson).getString("value"));
				if (!jsonObject.isEmpty()) {
					break;
				}
			}
			LogListener.utilLog(
					"调用后台新接口查询遗漏的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
					jsonObject.toString(), null, "info", "com.ruyicai.web.action.SelectAllAction.getPageOmission()");
			response.getWriter().print(jsonObject.getJSONObject(wanfa));
		} catch (IOException e) {
			logger.error("查询出异常Exception(Check out the current exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	/**
	 * 获取遗漏数据(新接口) 此乃选号下方的遗漏  （一次性获取遗漏数据）
	 * @return
	 * update zhaoyanhong . time :2012-3-6
	 */

	public String get11X5mission() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String lotno = request.getParameter("lotno");//T01012
		String batchcode = request.getParameter("batchcode");
		if (batchcode == null || "".equals(batchcode))
			return null; //期号为空时 直接返回null
		try {
			//下面一段代码的作用是解决预投期时没有遗漏信息：页面显示为2011112808期 没有遗漏, 2011112807期等待开奖没有遗漏, 导致页面3分钟左右没有遗漏值的情况 
			JSONObject jsonObject = null;
			for (int i = 0; i < 5; i++) {
				String batchcode1 = String.valueOf(Long.parseLong(batchcode) - i);
				String backJson = JSONReslutUtil.getResultMessage(ResourceBundleUtil.OMITURL
						+ "/select/missvalue2ndList?lotno=" + lotno + "&batchcode=" + batchcode1);
				jsonObject = JSONObject.fromObject(JSONObject.fromObject(backJson).getString("value"));
				if (!jsonObject.isEmpty()) {
					break;
				}
			}
			LogListener.utilLog(
					"调用后台新接口查询遗漏的方法得到返回的json(Background check on the number of calls obtained by the returned json):",
					jsonObject.toString(), null, "info", "com.ruyicai.web.action.SelectAllAction.getPageOmission()");
			response.getWriter().print(jsonObject);
		} catch (IOException e) {
			logger.error("查询出异常Exception(Check out the current exception of No):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	/**
	 * 高频彩页面右侧获取遗漏数据
	 * @return
	 * @throws IOException 
	 * 
	 * @RequestMapping(value = "/missvalue2nd", method = RequestMethod.GET)
		public @ResponseBody
		ResponseData selectMissValue2nd(
		@RequestParam("lotno") String lotno,
				@RequestParam("key") String key,
				@RequestParam("batchcode") String batchcode){

	 */
	public String getGaoPinRightOmission() throws IOException {
		//T01007MV_5X
		try {
			//1.获取彩种和玩法
			String lotno = request.getParameter("lotno") == null ? "" : request.getParameter("lotno");
			request.setAttribute("lotno", lotno);
			String wanfa = request.getParameter("wanfa");
			String batchCode = getInnerBetChcode(lotno, 1).getJSONObject(0).getString("onebet");
			if (wanfa == null) {
				if (lotno.equals("T01007")) {
					wanfa = "MV_2D";
				} else if (lotno.equals("T01012")) {
					wanfa = "MV_Q3ZH";
				}
				//2.根据彩种和玩法调用lottery接口查询高频彩页面右侧遗漏信息
				JSONObject arrOmit1 = JSONObject.fromObject(JSONObject.fromObject(
						JSONObject.fromObject(JSONObject.fromObject(
								JSONReslutUtil.getResultMessage(ResourceBundleUtil.OMITURL
										+ "/select/missvalue2nd?key=" + lotno + wanfa + "&lotno=" + lotno
										+ "&batchcode=" + batchCode)).getString("value"))).getString("result"));

				//按value值降序,通过ArrayList构造函数把map.entrySet()转换成list 
				List<Map.Entry<String, Integer>> mappingList = new ArrayList<Map.Entry<String, Integer>>(
						arrOmit1.entrySet());

				//通过比较器实现比较排序 
				Collections.sort(mappingList, new Comparator<Map.Entry<String, Integer>>() {
					public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
						return (o2.getValue() - o1.getValue());
					}
				});

				JSONArray arrOmit2 = JSONArray.fromObject(mappingList);
				JSONObject omit = new JSONObject();
				for (int i = 0; i < arrOmit1.size(); i++) {
					arrOmit2.set(i, getOmitContent(lotno, JSONArray.fromObject(mappingList), i, omit));
				}

				request.setAttribute("arrOmit1", arrOmit2);
			} else if (wanfa.indexOf("!") != -1) {
				String wanfaarr[] = wanfa.split("!");
				for (int i = 0; i < wanfaarr.length; i++) {
					wanfa = wanfaarr[i];

					//2.根据彩种和玩法调用lottery接口查询高频彩页面右侧遗漏信息
					String d = JSONReslutUtil.getResultMessage(ResourceBundleUtil.OMITURL + "/select/missvalue2nd?key="
							+ lotno + wanfa + "&lotno=" + lotno + "&batchcode=" + batchCode);
					String s = JSONObject.fromObject(d).getString("value");
					String f = JSONObject.fromObject(s).getString("result");
					JSONObject arrOmit1 = JSONObject.fromObject(f);

					//按value值降序,通过ArrayList构造函数把map.entrySet()转换成list 
					List<Map.Entry<String, Integer>> mappingList = new ArrayList<Map.Entry<String, Integer>>(
							arrOmit1.entrySet());

					//通过比较器实现比较排序 
					Collections.sort(mappingList, new Comparator<Map.Entry<String, Integer>>() {
						public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
							return (o2.getValue() - o1.getValue());
						}
					});

					JSONArray arrOmit2 = JSONArray.fromObject(mappingList);
					JSONObject omit = new JSONObject();
					for (int j = 0; j < arrOmit1.size(); j++) {
						arrOmit2.set(j, getOmitContent(lotno, JSONArray.fromObject(mappingList), j, omit));
					}
					request.setAttribute("arrOmit" + (i + 1), arrOmit2);
				}
			} else {
				//2.根据彩种和玩法调用lottery接口查询高频彩页面右侧遗漏信息
				JSONObject arrOmit1 = JSONObject.fromObject(JSONObject.fromObject(
						JSONObject.fromObject(JSONObject.fromObject(
								JSONReslutUtil.getResultMessage(ResourceBundleUtil.OMITURL
										+ "/select/missvalue2nd?key=" + lotno + wanfa + "&lotno=" + lotno
										+ "&batchcode=" + batchCode)).getString("value"))).getString("result"));

				//按value值降序,通过ArrayList构造函数把map.entrySet()转换成list 
				List<Map.Entry<String, Integer>> mappingList = new ArrayList<Map.Entry<String, Integer>>(
						arrOmit1.entrySet());

				//通过比较器实现比较排序 
				Collections.sort(mappingList, new Comparator<Map.Entry<String, Integer>>() {
					public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
						return (o2.getValue() - o1.getValue());
					}
				});

				JSONArray arrOmit2 = JSONArray.fromObject(mappingList);
				JSONObject omit = new JSONObject();
				for (int i = 0; i < arrOmit1.size(); i++) {
					arrOmit2.set(i, getOmitContent(lotno, JSONArray.fromObject(mappingList), i, omit));
				}
				request.setAttribute("arrOmit1", arrOmit2);
			}
			return "gaopinomit";
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取高频彩页面右侧遗漏信息出异常Exception(Abnormal for getGaoPinRightOmission information):" + e);
			return "error";
		}
	}

	/**
	 * 转换从lottery查询返回的接口内容
	 * @param content 接口返回的串
	 * @param n 坐标
	 * @param objOmitinfo 后台获取的json
	 * @throws IOException
	 */
	public static JSONObject getOmitContent(String lotno, JSONArray content, int n, JSONObject objOmitinfo)
			throws IOException {
		String code = content.getJSONObject(n).getString("key");
		if (lotno.equals("T01012")) {
			//格式化遗漏值的号码，用逗号分隔
			String key = "";
			for (int i = 0; i < code.length() - 1;) {
				key += code.substring(i, i + 2) + ",";
				i += 2;
			}
			key = key.substring(0, key.length() - 1);
			objOmitinfo.put("code", key);
		} else {
			objOmitinfo.put("code", code);
		}

		String batchCount = content.getJSONObject(n).getString("value");
		objOmitinfo.put("batchCount", batchCount);
		return objOmitinfo;
	}

	/**
	 * 开奖信息查询 zkl
	 */
	public JSONObject getWinInfo(String lotno, String batchcode) throws IOException {

		//获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
		JSONObject twinInfoJsonObj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
				+ "/select/getTwininfo?", "lotno=" + lotno + "&issue=" + batchcode, "POST"));
		logger.info("根据彩种和期号查询到彩票的开奖信息是：twinInfoJsonObj===>" + twinInfoJsonObj);

		//如果这张彩票还未开奖，则隐藏开奖部分的信息
		if (CommonUtil.getBackValue("errorCode", twinInfoJsonObj).equals(ErrorCode.OK.value)) {
			twinInfoJsonObj = twinInfoJsonObj.getJSONObject("value");
			//为需要排序的注码进行排序
			if (Constant.SSQ.equals(lotno) || Constant.QLC.equals(lotno)) {
				twinInfoJsonObj.put("winbasecode",
						BetcodeResolveUtil.extractString(twinInfoJsonObj.getString("winbasecode")));
				twinInfoJsonObj.put("winspecialcode",
						BetcodeResolveUtil.extractString(twinInfoJsonObj.getString("winspecialcode")));

			} else if (Constant.DLT.equals(lotno)) {
				String winbasecode = twinInfoJsonObj.getString("winbasecode").substring(0, 14).replace(" ", "");
				String winspecialcode = "";
				if (twinInfoJsonObj.getString("winbasecode").indexOf(" ") > -1) {
					winspecialcode = twinInfoJsonObj.getString("winbasecode")
							.substring(15, twinInfoJsonObj.getString("winbasecode").length()).replace(" ", "");
				} else {
					winspecialcode = twinInfoJsonObj.getString("winbasecode").substring(10,
							twinInfoJsonObj.getString("winbasecode").length());
				}

				twinInfoJsonObj.put("winbasecode", BetcodeResolveUtil.extractString(winbasecode));
				twinInfoJsonObj.put("winspecialcode", BetcodeResolveUtil.extractString(winspecialcode));
			}
			logger.info("本期彩票开奖后，所有的信息：twinInfoJsonObj===>" + twinInfoJsonObj);
		}
		return twinInfoJsonObj;
	}

	public String getNMKSWinInfo() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String lotno = request.getParameter("lotno");
		String batchcode = request.getParameter("batchcode");

		//获取指定play_name(彩种)和batchcode（期号）查询当前这张彩票的开奖信息
		JSONObject twinInfoJsonObj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
				+ "/select/getTwininfo?", "lotno=" + lotno + "&issue=" + batchcode, "POST"));
		logger.info("根据彩种和期号查询到彩票的开奖信息是：twinInfoJsonObj===>" + twinInfoJsonObj);

		//如果这张彩票还未开奖，则隐藏开奖部分的信息
		if (CommonUtil.getBackValue("errorCode", twinInfoJsonObj).equals(ErrorCode.OK.value)) {
			twinInfoJsonObj = twinInfoJsonObj.getJSONObject("value");
			//为需要排序的注码进行排序
			if (Constant.SSQ.equals(lotno) || Constant.QLC.equals(lotno)) {
				twinInfoJsonObj.put("winbasecode",
						BetcodeResolveUtil.extractString(twinInfoJsonObj.getString("winbasecode")));
				twinInfoJsonObj.put("winspecialcode",
						BetcodeResolveUtil.extractString(twinInfoJsonObj.getString("winspecialcode")));

			} else if (Constant.DLT.equals(lotno)) {
				String winbasecode = twinInfoJsonObj.getString("winbasecode").substring(0, 14).replace(" ", "");
				String winspecialcode = "";
				if (twinInfoJsonObj.getString("winbasecode").indexOf(" ") > -1) {
					winspecialcode = twinInfoJsonObj.getString("winbasecode")
							.substring(15, twinInfoJsonObj.getString("winbasecode").length()).replace(" ", "");
				} else {
					winspecialcode = twinInfoJsonObj.getString("winbasecode").substring(10,
							twinInfoJsonObj.getString("winbasecode").length());
				}

				twinInfoJsonObj.put("winbasecode", BetcodeResolveUtil.extractString(winbasecode));
				twinInfoJsonObj.put("winspecialcode", BetcodeResolveUtil.extractString(winspecialcode));
			}
			logger.info("本期彩票开奖后，所有的信息：twinInfoJsonObj===>" + twinInfoJsonObj);
		}
		response.getWriter().print(twinInfoJsonObj);
		return null;
	}

	//------------------------------------赠送和受赠记录查询-----------------------------
	/**
	 * 受赠记录查询
	 * @return
	 */
	public String giftedSelect() {
		try {
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));
			Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
					"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));
			//得到传入条件
			String lotno = request.getParameter("lotno");
			String beginTime = request.getParameter("beginTime");
			String endTime = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");//结束时间
			String prizestate = request.getParameter("settleFlag");
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			request.setAttribute("lotno", lotno);
			request.setAttribute("pageCount", pageNum);
			request.setAttribute("settleFlag", prizestate);
			if (!(endTime == null || endTime.equals("") || endTime.equals("undefined"))) {
				request.setAttribute("endTime", endTime);
				endTime += " 23:59:59";
			}
			if (!(beginTime == null || beginTime.equals("") || beginTime.equals("undefined"))) {
				request.setAttribute("beginTime", beginTime);
			} else {
				beginTime = "2010-01-01";
			}
			Map<String, Object> conditionMap = new HashMap<String, Object>();
			conditionMap.put("GED_createTime", beginTime);
			conditionMap.put("LED_createTime", endTime);
			if (prizestate != null && (!("-1".equals(prizestate)))) {
				conditionMap.put("EQG_prizestate", prizestate);
			}
			if (lotno != null) {
				conditionMap.put("EQS_lotno", lotno);
			}
			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			String url = ResourceBundleUtil.LINKURL + "/present/selectReciverPresentDetails?userno=" + userno
					+ "&startLine=" + (pageIndex - 1) * pageNum + "&endLine=" + pageNum + "&condition="
					+ condition.toString();
			logger.info("用户被赠送结果查询 :userno=" + userno + "请求地址及参数：" + url);
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
							+ "/present/selectReciverPresentDetails?", "userno=" + userno + "&startLine="
							+ (pageIndex - 1) * pageNum + "&endLine=" + pageNum + "&condition=" + condition.toString(),
							"POST")).getJSONObject("value");
			logger.info("用户被赠送结果查询 :userno=" + userno + "返回结果" + obj);
			JSONArray arrList = obj.getJSONArray("list");
			JSONArray TodyList = new JSONArray();//今天的记录
			JSONArray YestdayList = new JSONArray();//昨天的记录
			JSONArray MoreOldList = new JSONArray();//更早的记录
			//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
			for (int i = 0; i < arrList.size(); i++) {
				JSONObject json = arrList.getJSONObject(i);
				JSONObject rec = json.getJSONObject("presentDetails");
				JSONObject torderJson = json.getJSONObject("torder");
				long tody = df.parse(df.format(new Date())).getTime();
				if ("null".equals(arrList.getJSONObject(i).getJSONObject("tuserinfo"))
						|| arrList.getJSONObject(i).getJSONObject("tuserinfo") == null
						|| arrList.getJSONObject(i).getJSONObject("tuserinfo").isEmpty()) {
					continue;
				}
				String phone = (arrList.getJSONObject(i).getJSONObject("tuserinfo").getString("mobileid") != null
						&& arrList.getJSONObject(i).getJSONObject("tuserinfo").getString("mobileid").length() > 6 ? arrList
						.getJSONObject(i).getJSONObject("tuserinfo").getString("mobileid").substring(0, 4)
						+ "***"
						: "-");
				String nickName = arrList.getJSONObject(i).getJSONObject("tuserinfo").getString("nickname") == " "
						|| arrList.getJSONObject(i).getJSONObject("tuserinfo").getString("nickname") == "null" ? phone
						: arrList.getJSONObject(i).getJSONObject("tuserinfo").getString("nickname");
				long time = 0;
				time = df.parse(df.format(new Date(rec.getLong("createTime")))).getTime();
				rec.put("createtime",
						new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createTime"))));
				rec.put("amt", CommonUtil.moneySave2(torderJson.getDouble("amt") / 100));
				rec.put("nickName", nickName);
				request.setAttribute("batchcode", rec.get("batchcode"));
				if (tody - time == 0) {
					TodyList.add(json);
				} else if (tody - time == 24 * 3600 * 1000) {
					YestdayList.add(json);
				} else {
					MoreOldList.add(json);
				}
			}
			//将分组的记录保存到一个json中
			JSONObject newList = new JSONObject();
			newList.put("today", TodyList);
			newList.put("yestday", YestdayList);
			newList.put("oldday", MoreOldList);
			request.setAttribute("jaToPage", newList);
			String pageHtml = CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 4);
			request.setAttribute("pageHtml", pageHtml);
			return "giftedSelect";
		} catch (Exception e) {
			logger.error("受赠记录查询出异常Exception(Check out the unusual betSelectOrder):" + e.toString());
			return "error";

		}
	}

	/**
	 * 赠送记录查询
	 * @return
	 */
	public String giftSelect() {
		try {
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));//第一页
			Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
					"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));//页数
			//得到传入条件
			String lotno = request.getParameter("lotno");//彩种
			String beginTime = request.getParameter("beginTime");//开始时间
			String endTime = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");//结束时间
			String prizestate = request.getParameter("settleFlag");
			request.setAttribute("lotno", lotno);
			request.setAttribute("pageCount", pageNum);
			request.setAttribute("settleFlag", prizestate);
			if (!(endTime == null || endTime.equals("") || endTime.equals("undefined"))) {
				request.setAttribute("endTime", endTime);
				endTime += " 23:59:59";
			}
			if (!(beginTime == null || beginTime.equals("") || beginTime.equals("undefined"))) {
				request.setAttribute("beginTime", beginTime);
			} else {
				beginTime = "2010-01-01";
			}
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			Map<String, String> conditionMap = new HashMap<String, String>();
			conditionMap.put("GED_createTime", beginTime);
			conditionMap.put("LED_createTime", endTime);
			if (prizestate != null && !("-1".equals(prizestate))) {
				conditionMap.put("EQG_prizestate", prizestate);
			}
			if (lotno != null) {
				conditionMap.put("EQS_lotno", lotno);
			}
			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(
							ResourceBundleUtil.LINKURL + "/present/selectSenderPresentDetails?", "userno=" + userno
									+ "&startLine=" + (pageIndex - 1) * pageNum + "&endLine=" + pageNum + "&condition="
									+ condition.toString(), "POST")).getJSONObject("value");
			logger.info("get presented lottery list:" + obj);
			JSONArray arrList = obj.getJSONArray("list");
			JSONArray TodyList = new JSONArray();//今天的记录
			JSONArray YestdayList = new JSONArray();//昨天的记录
			JSONArray MoreOldList = new JSONArray();//更早的记录
			//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
			for (int i = 0; i < arrList.size(); i++) {
				JSONObject rec = arrList.getJSONObject(i);
				JSONObject presentDetailsJson = rec.getJSONObject("presentDetails");
				JSONObject torderJson = rec.getJSONObject("torder");
				long tody = df.parse(df.format(new Date())).getTime();
				String phone = (presentDetailsJson.getString("reciverMobile") != null
						&& presentDetailsJson.getString("reciverMobile").length() > 6 ? presentDetailsJson.getString(
						"reciverMobile").substring(0, 4)
						+ "***" : "-");
				long time = 0;
				time = df.parse(df.format(new Date(presentDetailsJson.getLong("createTime")))).getTime();
				presentDetailsJson.put("createtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(
						presentDetailsJson.getLong("createTime"))));
				torderJson.put("amt", CommonUtil.moneySave2(torderJson.getDouble("amt") / 100));
				presentDetailsJson.put("nickName", phone);
				request.setAttribute("batchcode", torderJson.get("batchcode"));
				if (tody - time == 0) {
					TodyList.add(rec);
				} else if (tody - time == 24 * 3600 * 1000) {
					YestdayList.add(rec);
				} else {
					MoreOldList.add(rec);
				}
			}
			//将分组的记录保存到一个json中
			JSONObject newList = new JSONObject();
			newList.put("today", TodyList);
			newList.put("yestday", YestdayList);
			newList.put("oldday", MoreOldList);
			request.setAttribute("jaToPage", newList);
			String pageHtml = CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageNum, 4);
			request.setAttribute("pageHtml", pageHtml);
			return "giftSelect";
		} catch (Exception e) {
			logger.error("赠彩记录查询出异常Exception(Check out the unusual betSelectOrder):" + e.toString());
			return "error";

		}
	}

	/**
	 * 领取彩票发送验证码
	 * @return 
	 * @throws IOException 
	 */

	public void sendRandomSMS() throws IOException {
		response.setCharacterEncoding("utf-8");
		String goValue = "SUCC_";
		try {
			logger.info("====领取彩票发送验证码====");
			// 1.得到用户信息
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			logger.info("发送给用户的相关信息是：用户编号" + userno);
			//2.获取领取的方案编号
			String presentid = request.getParameter("presentid");
			goValue = goValue + presentid;
			if (userno == null) {//未登录提示
				PrintWriter out = response.getWriter();
				goValue = "UNLOGIN_" + presentid;
				return;
			} else if ("".equals(presentid) || presentid == null) {//为获取方案编号
				goValue = "NONID_" + presentid;
				return;
			} else {
				/**/String url = ResourceBundleUtil.LINKZCURL + "/sendRandomSMS?userno=" + userno + "&presentid="
						+ presentid;

				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKZCURL
						+ "/sendRandomSMS?", "userno=" + userno + "&presentid=" + presentid, "POST"));
				logger.info("sendRandomSMS 返回结果" + obj);
				if (!LotErrorCode.NEW_OK.trim().equals(obj.getString("errorCode").trim())) {
					goValue = "FAIL_" + presentid;
					return;
				}

			}

		} catch (Exception e) {
			logger.error("领取彩票发送验证码出异常exception(E-mail to send verification code to bind abnormal):" + e.toString());
		} finally {
			PrintWriter out = response.getWriter();
			out.print(goValue);
		}
	}

	/**
	 * 验证领取彩票验证码
	 * @return 
	 * @throws IOException 
	 */

	public void recivePresent() throws IOException {
		response.setCharacterEncoding("utf-8");
		String goValue = "SUCC";
		try {
			logger.info("====领取彩票发送验证码====");
			// 1.得到用户信息
			String userno = "";
			JSONObject user = JSONReslutUtil.getUserNo(request);
			if (user != null && "0".equals(user.getString("errorCode"))) {
				userno = user.getString("value");
			}
			logger.info("发送给用户的相关信息是：用户编号" + userno);
			//2.获取领取的方案编号
			String presentid = request.getParameter("presentid");
			String randomCode = request.getParameter("randomCode");
			if (userno == null) {//未登录提示
				PrintWriter out = response.getWriter();
				goValue = "UNLOGIN";
				return;
			} else if ("".equals(presentid) || presentid == null) {//为获取方案编号
				goValue = "NONID";
				return;
			} else {
				String url = ResourceBundleUtil.LINKZCURL + "/sendRandomSMS?userno=" + userno + "&presentid="
						+ presentid;

				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKZCURL
						+ "/recivePresent?", "randomCode=" + randomCode + "&presentid=" + presentid, "POST"));
				//TimeOut("800002","验证码已过期"),RandomError("800003","验证码错误"),RequestError("800004","内部请求错误"),
				logger.info("recivePresent 返回结果" + obj);
				if (!LotErrorCode.NEW_OK.trim().equals(obj.getString("errorCode").trim())) {
					goValue = "FAIL";
					return;
				}
			}

		} catch (Exception e) {
			logger.error("领取彩票验证出异常exception(E-mail to send verification code to bind abnormal):" + e.toString());
		} finally {
			PrintWriter out = response.getWriter();
			out.print(goValue);
		}
	}

	//------------------------------------赠送和受赠记录查询--------------结束---------------

	//------------------------------------中奖排行记录查询--------------开始---------------
	/**
	 * 查询中奖排行接口
	 * @return
	 * @throws IOException 
	 */
	public String getRank() throws IOException {
		SimpleDateFormat yeartime = new SimpleDateFormat("yyyy");
		SimpleDateFormat monthtime = new SimpleDateFormat("yyyy-MM");
		SimpleDateFormat alltime = new SimpleDateFormat("yyyy-MM-dd");
		JSONArray yearList = (JSONArray) MemCacheInvoke.mcc.get("rankyearList");
		JSONArray monthList = (JSONArray) MemCacheInvoke.mcc.get("rankmonthList");
		JSONArray allList = (JSONArray) MemCacheInvoke.mcc.get("rankallList");
		try {
			//查询年排行
			if (yearList == null) {
				JSONObject year = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK
						+ "/selectUserRankingHistory?", "time=" + yeartime.format(new Date()) + "&type=4", "POST"));
				if (LotErrorCode.NEW_OK.trim().equals(year.getString("errorCode").trim())) {
					yearList = JSONArray.fromObject(year.getString("value"));
					for (int i = 0; i < yearList.size(); i++) {
						JSONObject rec = yearList.getJSONObject(i);
						String nickName = getUserNameByRank(rec);
						rec.put("name", nickName);
						rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt") / 100));
					}
				}
				MemCacheInvoke.mcc.set("rankyearList", yearList);
			}
			if (monthList == null) {
				//查询月排行
				JSONObject month = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK
						+ "/selectUserRankingHistory?", "time=" + monthtime.format(new Date()) + "&type=3", "POST"));
				if (LotErrorCode.NEW_OK.trim().equals(month.getString("errorCode").trim())) {
					monthList = JSONArray.fromObject(month.getString("value"));
					for (int i = 0; i < monthList.size(); i++) {
						JSONObject rec = monthList.getJSONObject(i);
						String nickName = getUserNameByRank(rec);
						rec.put("name", nickName);
						rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt") / 100));
					}
				}
				MemCacheInvoke.mcc.set("rankmonthList", monthList);
			}

			if (allList == null) {
				//查询总排行
				JSONObject all = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKRANK
						+ "/selectUserRankingHistory?", "time=" + alltime.format(new Date()) + "&type=5", "POST"));
				if (LotErrorCode.NEW_OK.trim().equals(all.getString("errorCode").trim())) {
					allList = JSONArray.fromObject(all.getString("value"));
					for (int i = 0; i < allList.size(); i++) {
						JSONObject rec = allList.getJSONObject(i);
						String nickName = getUserNameByRank(rec);
						rec.put("name", nickName);
						rec.put("prizeAmt", CommonUtil.moneySave2(rec.getDouble("prizeAmt") / 100));
					}
				}
				MemCacheInvoke.mcc.set("rankallList", allList);
			}
			request.setAttribute("yearList", yearList);
			request.setAttribute("monthList", monthList);
			request.setAttribute("allList", allList);
		} catch (SocketTimeoutException e) {
			e.printStackTrace();
			logger.error("生成首页中奖排行出现异常Exception:" + e);
		}
		return "rankList";
	}

	public static String getUserNameByRank(JSONObject rec) {
		// 1 先分析用户名 2 昵称 3手机号
		String name = "";
		String username = rec.getString("username");
		String nickname = rec.getString("nickname") == " " || "null".equals(rec.getString("nickname"))
				|| rec.getString("nickname") == null ? username : rec.getString("nickname");
		if (nickname == " " || "null".equals(nickname) || nickname == null || "".equals(nickname)) {
			name = rec.getString("mobileId");
		}
		if (CommonUtil.verifyMobileId(nickname) == true) {
			name = nickname.substring(0, 3) + "***" + nickname.substring(7, nickname.length());
		} else if (CommonUtil.isEmailCode(nickname) == true) {
			if (nickname == " " || "null".equals(nickname) || nickname == null || "".equals(nickname)) {
				name = "-";
			} else {
				name = nickname.split("\\@")[0] + "@" + nickname.split("\\@")[1].substring(0, 2);
			}
		} else {
			name = nickname;
		}

		return name;
	}

	//------------------------------------中奖排行记录查询--------------结束---------------

	/**
	 * 查询足彩开奖赛果的详情
	 * @param lotNo    彩种编号
	 * @param batchCode  期号
	 * @param teamId    场次   场次的数值可以是开奖号码处理成数组 数组下标加1 就是当前这个赛果的场次
	 * @return
	 * 请求实例http://192.168.0.42:80/datacenter/selectZc/getMatchInfo?lotno=T01003&batchcode=2013055&teamid=5
	 * 返回参数{"value":{"homeTeam":"沙尔克","guestTeam":"汉堡","matchTime":"2013-04-28 23:30",
	 * "teamId":"5","leagueName":"德甲","homeWinAverageOuPei":"1.56",caiguo="败"
	 * "standoffAverageOuPei":"4.00","guestWinAverageOuPei":"5.49"},"errorCode":"0","depreciated":false}
	 * @throws IOException
	 */
	public JSONObject getZuCaiMatches(String lotNo, String batchCode, String teamId) throws IOException {
		StringBuffer paramStr = new StringBuffer();
		paramStr.append("lotno=" + lotNo);
		paramStr.append("&batchcode=" + batchCode);
		paramStr.append("&teamid=" + teamId);
		JSONObject all = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.datacenter
				+ "/selectZc/getMatchInfo?", paramStr.toString(), "POST"));
		logger.info("获取足彩某场比赛的信息的返回:" + all);
		return all;
	}

	/**
	 * 足彩开奖的详细信息     
	 * @param lotNo    彩种编号
	 * update: 2013-05-08
	 * @return  "zckaijianginfos"
	 */
	public String drawalotteryZc() {
		String lotno = request.getParameter("lotno");
		String batchcode = request.getParameter("batchcode");
		String issuenum = "1";
		try {
			JSONArray arrObject = getDrawalotteryArray(lotno, issuenum);
			//[{"id":{"batchcode":"2013056","lotno":"T01003","agencyno":"R00001"},"state":0,"info":null,"winbasecode":"00000000000001","opentime":"2013-05-04 10:42:28","winspecialcode":null,"agencyopentime":1367635348775,"playname":" ","actsellamt":0,"validsellamt":0,"wingrade":0,"winmoney":0,"winnumber":0,"forwardamt":0,"infos":{},"batchcodeArray":[{"onebet":"2013056"},{"onebet":"2013007"},{"onebet":"2013006"},{"onebet":"2012108"},{"onebet":"2012100"},{"onebet":"2012077"},{"onebet":"2012057"},{"onebet":"2012029"},{"onebet":"2012013"}]}]
			JSONObject json = new JSONObject();
			JSONArray zcInfoArr = new JSONArray();
			JSONObject ZCObjInfo = null;
			String winbasecode = "";
			for (int j = 0; j < arrObject.size(); j++) {
				json = arrObject.getJSONObject(j);
				logger.info("获取足彩开奖信息的返回:" + arrObject);
				if (batchcode == null || batchcode.equals("") || batchcode.equals("null")) {
					batchcode = ((JSONObject) json.get("id")).getString("batchcode"); //期号
					winbasecode = json.getString("winbasecode"); //开奖号码
				} else {
					//{"value":{"id":{"batchcode":"2012029","lotno":"T01003","agencyno":"R00001"},"state":0,"info":null,"winbasecode":"10111311313113","opentime":1334655936294,"winspecialcode":null,"agencyopentime":1334655936294,"playname":" ","actsellamt":0,"validsellamt":0,"wingrade":0,"winmoney":0,"winnumber":0,"forwardamt":0},"errorCode":"0","isDepreciated":false}
					JSONObject jsarr = JSONObject.fromObject(
							JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTwininfo?",
									"lotno=" + lotno + "&issue=" + batchcode, "POST")).getJSONObject("value");
					logger.info("获取足彩某期比赛的信息的返回:" + jsarr);
					winbasecode = jsarr.getString("winbasecode"); //开奖号码
				}
				int length = winbasecode.length();
				if (lotno.equals("T01006") || lotno.equals("T01005"))
					length = length / 2;
				for (int i = 0; i < length; i++) {
					ZCObjInfo = new JSONObject();
					String teamid = String.valueOf(i + 1);
					JSONObject zcobject = getZuCaiMatches(lotno, batchcode, teamid);
					//	{"value":{"homeTeam":"富勒姆","guestTeam":"雷丁","matchTime":"2013-05-04 22:00","teamId":"1","leagueName":"英超","homeWinAverageOuPei":"1.69","standoffAverageOuPei":"3.59","guestWinAverageOuPei":"4.90"},"errorCode":"0","depreciated":false}
					JSONObject jsonzc = zcobject.getJSONObject("value");
					//获取开奖信息中的彩果信息
					ZCObjInfo = this.getZcDrawaInfoForResult(lotno, winbasecode, i);
					ZCObjInfo.put("teamId", teamid);
					ZCObjInfo.put("matchTime", jsonzc.getString("matchTime"));
					ZCObjInfo.put("leagueName", jsonzc.getString("leagueName"));
					ZCObjInfo.put("guestTeam", jsonzc.getString("guestTeam"));
					ZCObjInfo.put("homeTeam", jsonzc.getString("homeTeam"));
					ZCObjInfo.put("homewin", jsonzc.getString("homeWinAverageOuPei"));
					ZCObjInfo.put("standoff", jsonzc.getString("standoffAverageOuPei"));
					ZCObjInfo.put("guestwin", jsonzc.getString("guestWinAverageOuPei"));
					zcInfoArr.add(ZCObjInfo);
				}
			}
			request.setAttribute("batchcodeArray", getInnerBetChcode(lotno, 50)); //期号array
			request.setAttribute("batchcode", batchcode);
			request.setAttribute("lotno", lotno);
			request.setAttribute("zcdrawlist", zcInfoArr);
		} catch (IOException e) {
			logger.error("足彩开奖详请查询出现异常：" + e.getMessage());
		}
		return "zckaijianginfos";
	}

	/**
	 * 获取开奖信息中的彩果信息
	 * @param lotno  彩种编号
	 * @param winbasecode  开奖号码
	 * @param i  开奖号码遍历的索引值
	 * @return  JSONObject  
	 */
	public JSONObject getZcDrawaInfoForResult(String lotno, String winbasecode, int i) {

		JSONObject ZCObj = new JSONObject();
		if (lotno.equals("T01006") || lotno.equals("T01005")) {
			String banzhuma = winbasecode.substring(2 * i, 2 * i + 1);
			String quanzhuma = winbasecode.substring(2 * i + 1, 2 * i + 2);
			String bancaiguo = "";
			String quancaiguo = "";
			if (banzhuma.equals("0"))
				bancaiguo = "负";
			else if (banzhuma.equals("1"))
				bancaiguo = "平";
			else
				bancaiguo = "胜";
			ZCObj.put("bancaiguo", bancaiguo);
			if (quanzhuma.equals("0"))
				quancaiguo = "负";
			else if (quanzhuma.equals("1"))
				quancaiguo = "平";
			else
				quancaiguo = "胜";
			ZCObj.put("quancaiguo", quancaiguo);
		} else {
			String zhuma = winbasecode.substring(i, i + 1);
			String caiguo = "";
			if (zhuma.equals("0"))
				caiguo = "负";
			else if (zhuma.equals("1"))
				caiguo = "平";
			else
				caiguo = "胜";
			ZCObj.put("caiguo", caiguo);
		}
		return ZCObj;
	}

}