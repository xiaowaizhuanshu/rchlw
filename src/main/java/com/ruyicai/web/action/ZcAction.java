package com.ruyicai.web.action;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.ResourceBundle;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.IHttp;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.ResourceBundleUtil;

public class ZcAction extends BaseAction {
	private static final Logger logger = Logger.getLogger(ZcAction.class);
	private static ResourceBundle rb = ResourceBundle.getBundle("ruyicai");
	private static String baseUrl = rb.getString("baseUrl");
	private static String lottery = rb.getString("linkURL");
	/**
	 * 发送http请求的方法
	 * 
	 * @param action
	 *            请求的action名字
	 * @param method
	 *            请求的方法名
	 * @param reqJson
	 *            请求参数
	 * @param jsessionid
	 *            sessionId
	 * @return 请求得到的结果
	 */
	private static JSONObject sendToJrtLot(String action,
			String method, JSONObject reqJson, String jsessionid) {
		try {
			String re = new IHttp().getViaHttpConnection(baseUrl + action + ";jsessionid="
					+ jsessionid + "?method=" + method + "&jsonString=" + URLEncoder.encode(reqJson.toString(),"UTF-8"));
			logger.info(baseUrl + action + ";jsessionid="
					+ jsessionid + "?method=" + method + "&jsonString=" + URLEncoder.encode(reqJson.toString(),"UTF-8")+"足彩请求对阵re:~~" + re + "^^");
			if (re == null) {
				return null;
			}
			return JSONObject.fromObject(re);
		} catch (Exception e) {
			logger.debug(e.getStackTrace());
			JSONObject errObj = new JSONObject();
			errObj.put("error_code", "00500");
			return errObj;
		}
	}
	
	/**
	 * 调用Lottery
	 * @param url
	 * @param params
	 * @return
	 * @throws IOException
	 */
	private static JSONObject sendToLottery(String url,String param) throws IOException {
		try {
			String  re = "";
			URL paostUrl = new URL(url);
			// 打开连接
			HttpURLConnection connection = (HttpURLConnection) paostUrl
			.openConnection();
			connection.setRequestProperty("Content-Type",
			"application/x-www-form-urlencoded");
			connection.setDoOutput(true);
			connection.setDoInput(true);
			connection.setRequestMethod("GET");
			connection.setUseCaches(false);
			connection.setInstanceFollowRedirects(true);
			connection.connect();
			BufferedReader in = new BufferedReader(new InputStreamReader(
			connection.getInputStream(), "UTF-8"), 1024 * 1024);
			String line;
			while ((line = in.readLine()) != null) {
				re += line;
			}
			return JSONObject.fromObject(re);
		}catch (Exception e) {
			JSONObject errObj = new JSONObject();
			errObj.put("error_code", "00500");
			return errObj;
		}
		
		
	}
	
	/**
	 * 查询当前期集合
	 * @param lotno
	 * @return
	 */
	private  List<JSONObject> getActiveIssue(String lotno) {
		List<JSONObject> ls=new ArrayList<JSONObject>();
		JSONObject reJson=new JSONObject();
		try {
		reJson= sendToLottery(lottery+"/select/getZCIssue?lotno="+lotno,null);
		
		String value= reJson.getString("value");
		if(!value.equals("null")&&!"".equals(value)){
			JSONArray list = JSONArray.fromObject(value);
			for(int i=0;i<list.size();i++){
				JSONObject jj=new JSONObject();
				SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				JSONObject jo = JSONObject.fromObject(list.getJSONObject(i).getString("id"));
				jj.put("batchcode", jo.getString("batchcode"));
				jj.put("agencyno", jo.getString("agencyno"));
				String endtime = list.getJSONObject(i).getString("endtime");
				jj.put("endtime", sdf.format(new Date(Long.parseLong(endtime))));
				String sysTimenow =sdf.format(new Date());
				
				//获取系统当前时间 毫秒数
				String sysTime = String.valueOf((new Date()).getTime());
				jj.put("sysTime", sysTime);
				jj.put("sysTimenow", sysTimenow);
				ls.add(jj);
			}
		}
		   return ls;
		} catch (IOException e) {
			e.printStackTrace();
			 return null;
		}
		
	}
	
	
	/**
	 * 查询当前选中期字符串
	 * @param lotno
	 * @return
	 * @throws IOException 
	 */
	public String getCheckIssue() throws IOException {
		response.setCharacterEncoding("UTF-8");
		String lotno=request.getParameter("lotNo");
		String index=request.getParameter("index");
		JSONObject reJson=new JSONObject();
		try {
			 reJson= sendToLottery(lottery+"/select/getZCIssue?lotno="+lotno,null);
		} catch (IOException e) {
			e.printStackTrace();
		}
		String value= reJson.getString("value");
		JSONArray list = JSONArray.fromObject(value);
		//{"value":[{"id":{"batchcode":"2012088","lotno":"T01004","agencyno":"R00001"},"state":0,"endtime":1342872000000,"createtime":1342255156017,"opentime":null,"endbettime":1342872000000,"starttime":1342573200000,"encashstate":0,"hemaiendtime":1342869600000}],"errorCode":"0","isDepreciated":true}

		JSONObject jj=new JSONObject();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		JSONObject jo = JSONObject.fromObject(list.getJSONObject(Integer.parseInt(index)).getString("id"));
		jj.put("batchcode", jo.getString("batchcode"));
		jj.put("agencyno", jo.getString("agencyno"));
		String endtime = list.getJSONObject(Integer.parseInt(index)).getString("endtime");
		jj.put("endtime", sdf.format(new Date(Long.parseLong(endtime))));
		String sysTimenow =sdf.format(new Date());
		
		//获取系统当前时间 毫秒数
		String sysTime = String.valueOf((new Date()).getTime());
		jj.put("sysTime", sysTime);
		jj.put("sysTimenow", sysTimenow);
	
		response.getWriter().print(jj);
		return null;
	}
	
	
	/**
	 * 首页足彩对阵获取期号
	 * @return
	 * @throws IOException
	 */
	public String getCurrForJsp() throws IOException{
		response.setCharacterEncoding("UTF-8");
		String lotNo=request.getParameter("lotNo");
		List<JSONObject> reJson=getActiveIssue(lotNo);
		JSONArray js = new JSONArray();
		if(!reJson.isEmpty()&&reJson != null){
			js= JSONArray.fromObject(reJson);
		}
		response.getWriter().print(js);
		return null;
	}
	/**
	 * 根据期号返回投注页面
	 * @param lotno
	 * @return
	 */
	private String retBetString(String lotno) {
		if("T01003".equals(lotno)) {
			return "shengfucai";
		}else if("T01004".equals(lotno)) {
			return "renjiuchang";
		}else if("T01005".equals(lotno)) {
			return "jinqiucai";
		}else {
			return "liuchangban";
		}
	}
	
	
	/**
	 * 根据期号返回查看往期界面
	 * @param lotno
	 * @return
	 */
	private String retViewString(String lotno) {
		if("T01003".equals(lotno)) {
			return "v_shengfucai";
		}else if("T01004".equals(lotno)) {
			return "v_renjiuchang";
		}else if("T01005".equals(lotno)) {
			return "v_jinqiucai";
		}else {
			return "v_liuchangban";
		}
	}
	
	
	private String retFailSafePage(String lotno) {
		if("T01003".equals(lotno)) {
			return "f_shengfucai";
		}else if("T01004".equals(lotno)) {
			return "f_renjiuchang";
		}else if("T01005".equals(lotno)) {
			return "f_jinqiucai";
		}else {
			return "f_liuchangban";
		}
	}
	
	
	
	
	/**
	 * 查询当前期对阵接口
	 * @return
	 */
	public String getFlData() {
		//从request中取得lotno和batchCode，判断是否为null或者“”
		String lotno = request.getParameter("lotno");
		String batchCode=request.getParameter("batchData");
		String shouye = request.getParameter("shouye");
		try {
			//准备请求参数
			JSONObject reqJson = new JSONObject();
			reqJson.put("lotno", lotno);
			if(batchCode == null || batchCode.length()==0||batchCode.equals("undefined")) {
				List<JSONObject> ls= getActiveIssue(lotno);
				batchCode=ls.get(0).getString("batchcode");
			}
			reqJson.put("batchCode", batchCode);
			//发送请求获取比例的数据
			JSONObject score1Json = sendToLottery(ResourceBundleUtil.ANALYZEURL+"/select/betpartition?lotno="+lotno+"&batchcode="+batchCode, null);
			JSONObject	scoreJson = JSONObject.fromObject(score1Json.getString("value"));
			//发送请求，获取对阵数据
			JSONObject respJson = sendToJrtLot("zcAction.do", "getFlData", reqJson, "");
			if(LotErrorCode.NEW_OK.equals(score1Json.getString("errorCode")) && respJson != null && LotErrorCode.OK.equals(respJson.getString("error_code"))) {
				JSONArray list = (JSONArray) respJson.get("value");
				JSONArray scorelist = (JSONArray) scoreJson.getJSONArray("list");
				//拆分对阵、比例数据
				List<JSONObject> listFlDate = splitFlData(list,scorelist, null, lotno);
				request.setAttribute("list", listFlDate);
				if("1".equals(shouye)){
					return "shouye_shengfu";
				}else{
					return retBetString(lotno);
				}
			}else {
				request.setAttribute("message", "error");
				if("1".equals(shouye)){
					return "shouye_shengfu_error";
				}else{
				    return returnFailSafePage(lotno);
				}
			}
		} catch (Exception e) {
			request.setAttribute("message", "error");
			if("1".equals(shouye)){
				return "shouye_shengfu_error";
			}else{
			return returnFailSafePage(lotno);
			}
		}
	}
	
	
	/**
	 * 查询往期对阵接口
	 * @return
	 */
	public String getFlDataByBatchCode() {
		//从request中取得lotno和batchCode，判断是否为null或者“”
		String lotno = request.getParameter("lotno");
		String batchDate = request.getParameter("batchData");
		String batchCode = batchDate.split("\\$")[0];
		char[] wincode = batchDate.split("\\$")[1].toCharArray();

		try {
			//准备请求参数
			JSONObject reqJson = new JSONObject();
			reqJson.put("lotno", lotno);
			reqJson.put("batchCode", batchCode);
			 
			//发送请求获取比例的数据
			JSONObject score1Json = sendToLottery(ResourceBundleUtil.ANALYZEURL+"/select/betpartition?lotno="+lotno+"&batchcode="+batchCode, null);
			//发送请求，得到返回结果
			JSONObject respJson = sendToJrtLot("zcAction.do", "getFlData", reqJson, "");
			
			if(LotErrorCode.NEW_OK.equals(score1Json.getString("errorCode")) && respJson != null && LotErrorCode.OK.equals(respJson.getString("error_code"))) {
				JSONObject scoreJson = JSONObject.fromObject(score1Json.getString("value"));
				JSONArray list = (JSONArray) respJson.get("value");
				JSONArray scorelist = scoreJson.getJSONArray("list");
				//拆分对阵、比例数据
				List<JSONObject> listFlDate = splitFlData(list,scorelist, wincode, lotno);
				request.setAttribute("list", listFlDate);
				request.setAttribute("message", 0);
				return retViewString(lotno);
			}else {
				request.setAttribute("message", 500);
				return retViewString(lotno);
			}
		} catch (Exception e) {
			request.setAttribute("message", 500);
			return retViewString(lotno);
		}
	}
	
	/**
	 * 根据彩种查询最近5期期号
	 * @return
	 */
	public String getRecentIssue() {
		try {
			String lotno = request.getParameter("lotno");
			JSONObject reqJson = new JSONObject();
			reqJson.put("lotno", lotno);
			String issue = "";
			try {
					List<JSONObject> ls= getActiveIssue(lotno);
					if(ls.size()!=0&&ls!=null){
						for(int i=0;i<ls.size();i++){
							String batchCode = ls.get(i).getString("batchcode");
							issue = issue+"^"+batchCode + ",";
						}
					}
			}catch(Exception e) {
				e.printStackTrace();
			}
			JSONObject reJson = sendToLottery(lottery+"/select/getWinfolist?lotno="+lotno,null);
			if(reJson.getString("errorCode").equals("0")) {
				JSONArray jsa = (JSONArray)reJson.get("value");
				JSONObject json = null;
				for(int i = 0;i < jsa.size();i++) {
					json = (JSONObject)jsa.get(i);
					issue = issue + ((JSONObject)json.getJSONObject("id")).getString("batchcode");
					issue = issue + "$" + json.getString("winbasecode");
					issue = issue + "," ;
				}
			}
			response.setContentType("text/html;charset=UTF-8"); 
			response.getWriter().print(issue.substring(0,issue.length()-1));
			return null;
		}catch (Exception e) {
			return null;
		}
		
	}
	
	/**
	 * 加载错误页面
	 * @param lotno
	 * @return
	 */
	public String returnFailSafePage(String lotno) {
		try {
			JSONObject reJson = sendToLottery(lottery+"/select/getWinfolist?lotno="+lotno+"&issuenum=1",null);
			String batchCode="",wincode="";
			if(!reJson.getString("errorCode").equals("0")) {
				return retFailSafePage(lotno);
			}
			JSONArray jsa = (JSONArray) reJson.get("value");
			JSONObject json = null;
			for (int i = 0; i < jsa.size(); i++) {
				json = (JSONObject) jsa.get(i);
				batchCode = ((JSONObject) json.getJSONObject("id"))
						.getString("batchcode");
				wincode = json.getString("winbasecode");
			}
			JSONObject reqJson = new JSONObject();
			reqJson.put("lotno", lotno);
			reqJson.put("batchCode", batchCode);
			JSONObject respJson = sendToJrtLot("zcAction.do", "getFlData", reqJson, "");
			//发送请求获取比例的数据
			JSONObject score1Json = sendToLottery(ResourceBundleUtil.ANALYZEURL+"/select/betpartition?lotno="+lotno+"&batchcode="+batchCode, null);
			JSONObject scoreJson = JSONObject.fromObject(score1Json.getString("value"));
			if(LotErrorCode.NEW_OK.equals(score1Json.getString("errorCode")) && respJson != null && LotErrorCode.OK.equals(respJson.getString("error_code"))) {
				JSONArray list = (JSONArray) respJson.get("value");
				JSONArray scorelist = (JSONArray) scoreJson.getJSONArray("list");
				//拆分对阵数据
				List<JSONObject> listFlDate = splitFlData(list,scorelist, wincode.toCharArray(), lotno);
				request.setAttribute("list", listFlDate);
				request.setAttribute("message", 0);
				return retFailSafePage(lotno);
			}else {
				request.setAttribute("message", 500);
				return retFailSafePage(lotno);
			}
		}catch(Exception e) {
			return retFailSafePage(lotno);
		}
	}
	/**
	 * 
	 * @param list(对阵)、scorelist(比分)
	 * @param wincode
	 * @param lotno
	 * @return
	 */
	private List<JSONObject> splitFlData(JSONArray list,JSONArray scorelist,char[] wincode,String lotno) {
		//对阵的参数
		List<JSONObject> listFlDate = new ArrayList();
		String leagueRank = null;
		String league[] = null;
		String avgOdds = null;
		String avgOdd[] = null;
		String date = null;
		
		//比例的参数
		int firstScore = 0;
		int secondScore = 0;
		int threeScore = 0;
		
		int banfirstScore = 0;
		int bansecondScore = 0;
		int banthreeScore = 0;
		
		int quanfirstScore = 0;
		int quansecondScore = 0;
		int quanthreeScore = 0;
		
		int shangthreeScore = 0;
		int shangtwoScore = 0;
		int shangfirstScore = 0;
		int shangzeroScore = 0;
		           
		int xiathreeScore = 0;
		int xiatwoScore = 0;
		int xiafirstScore = 0;
		int xiazeroScore = 0;
		
			//对阵
			for(int i = 0;i < list.size();i++) {
				JSONObject js = (JSONObject) list.get(i);
				//截取时间
				if(js.getString("date")!=null&&!"".equals(js.getString("date"))) {
					date = js.getString("date").substring(5);
					js.remove("date");
					js.put("date", date);
				}
				//添加开奖号码
				if(wincode!=null) {
					if("T01005".equals(lotno)) {
						js.put("Hresult", wincode[(i+1)*2-2]);
						js.put("Vresult", wincode[(i+1)*2-1]);
					}else if("T01006".equals(lotno)) {
						js.put("Bresult", wincode[(i+1)*2-2]);
						js.put("Qresult", wincode[(i+1)*2-1]);
					}else {
						js.put("result",wincode[i]);
					}
				}
				//添加排名和胜平负
				if(!"T01005".equals(lotno)) {
					leagueRank = js.getString("leagueRank");
					if(leagueRank != null && !"".equals(leagueRank.trim())) {
						league = leagueRank.split("\\|");
						league[0] = league[0] + " ";
						league[1] = league[1] + " ";
						js.put("HRank", league[0].substring(2, league[0].length()).trim());
						js.put("TRank", league[1].substring(2, league[1].length()).trim());
					}else{
						js.put("HRank", "");
						js.put("TRank", "");
					}
					
					avgOdds = js.getString("avgOdds");
					if(!avgOdds.equals("||") && avgOdds != null && !"".equals(avgOdds.trim())) {
						avgOdd = avgOdds.split("\\|");
						js.put("S", avgOdd[0].substring(1));
						js.put("P", avgOdd[1].substring(1));
						js.put("F", avgOdd[2].substring(1));
					}else {
						js.put("S", "");
						js.put("P", "");
						js.put("F", "");
					}
				}	
				listFlDate.add(js);
			}
			for(int i = 0;i < scorelist.size();i++){
					//比例
					try {
						JSONObject js = (JSONObject) listFlDate.get(i);
								JSONArray score1= JSONArray.fromObject(scorelist.get(i));
								
								if("T01006".equals(lotno)){
										//半场
										int[] banscore = new int[]{score1.getInt(0),score1.getInt(1),score1.getInt(2)};
										//全场
										int[] quanscore = new int[]{score1.getInt(3),score1.getInt(4),score1.getInt(5)};
											if((banscore[0]+banscore[1]+banscore[2])!=0){
												banfirstScore = (banscore[2]*100)/(banscore[0]+banscore[1]+banscore[2]);
												bansecondScore = (banscore[1]*100)/(banscore[0]+banscore[1]+banscore[2]);
												banthreeScore = (banscore[0]*100)/(banscore[0]+banscore[1]+banscore[2]);
											}
											
											if((quanscore[0]+quanscore[1]+quanscore[2])!=0){
												quanfirstScore = (quanscore[2]*100)/(quanscore[0]+quanscore[1]+quanscore[2]);
												quansecondScore = (quanscore[1]*100)/(quanscore[0]+quanscore[1]+quanscore[2]);
												quanthreeScore = (quanscore[0]*100)/(quanscore[0]+quanscore[1]+quanscore[2]);
											}
										js.put("banfirstScore", banfirstScore);
										js.put("bansecondScore", bansecondScore);
										js.put("banthreeScore", banthreeScore);
										
										js.put("quanfirstScore", quanfirstScore);
										js.put("quansecondScore", quansecondScore);
										js.put("quanthreeScore", quanthreeScore);
								}else if("T01005".equals(lotno)){
										//上面的队
										int[] shangscore = new int[]{score1.getInt(0),score1.getInt(1),score1.getInt(2),score1.getInt(3)};
										//下面的队
										int[] xiascore = new int[]{score1.getInt(4),score1.getInt(5),score1.getInt(6),score1.getInt(7)};
										
											if((shangscore[0]+shangscore[1]+shangscore[2]+shangscore[3])!=0){
												shangthreeScore = (shangscore[0]*100)/(shangscore[0]+shangscore[1]+shangscore[2]+shangscore[3]);
												shangtwoScore = (shangscore[1]*100)/(shangscore[0]+shangscore[1]+shangscore[2]+shangscore[3]);
												shangfirstScore = (shangscore[2]*100)/(shangscore[0]+shangscore[1]+shangscore[2]+shangscore[3]);
												shangzeroScore = (shangscore[3]*100)/(shangscore[0]+shangscore[1]+shangscore[2]+shangscore[3]);
											}
											
											if((xiascore[0]+xiascore[1]+xiascore[2]+xiascore[3])!=0){
												xiathreeScore = (xiascore[0]*100)/(xiascore[0]+xiascore[1]+xiascore[2]+xiascore[3]);
												xiatwoScore = (xiascore[1]*100)/(xiascore[0]+xiascore[1]+xiascore[2]+xiascore[3]);
												xiafirstScore = (xiascore[2]*100)/(xiascore[0]+xiascore[1]+xiascore[2]+xiascore[3]);
												xiazeroScore = (xiascore[3]*100)/(xiascore[0]+xiascore[1]+xiascore[2]+xiascore[3]);
											}
										js.put("shangthreeScore", shangthreeScore);
										js.put("shangtwoScore", shangtwoScore);
										js.put("shangfirstScore", shangfirstScore);
										js.put("shangzeroScore", shangzeroScore);
										
										js.put("xiathreeScore", xiathreeScore);
										js.put("xiatwoScore", xiatwoScore);
										js.put("xiafirstScore", xiafirstScore);
										js.put("xiazeroScore", xiazeroScore);
										
								}else{
									int[] score=new int[score1.size()];
									for (int k = 0; k < score1.size(); k++) {
										score[k]=score1.getInt(k);
									}
									if((score[0]+score[1]+score[2])!=0){
										firstScore = (score[2]*100)/(score[0]+score[1]+score[2]);
										secondScore = (score[1]*100)/(score[0]+score[1]+score[2]);
										threeScore = (score[0]*100)/(score[0]+score[1]+score[2]);
									}
									js.put("firstScore", firstScore);
									js.put("secondScore", secondScore);
									js.put("threeScore", threeScore);
								}
					} catch (Exception e) {
						e.printStackTrace();
					}
		}
		return listFlDate;
	}

}
