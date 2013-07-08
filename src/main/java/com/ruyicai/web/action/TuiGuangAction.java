package com.ruyicai.web.action;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ResourceBundle;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.JSONReslutUtil;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.DES;
import com.ruyicai.util.ResourceBundleUtil;


public class TuiGuangAction extends BaseAction {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Logger logger = Logger.getLogger(TuiGuangAction.class);
	private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai");
	private static String agencyUrl = rbint.getString("agencyUrl");
	private Tuserinfo tuserinfo = new Tuserinfo();// 用户
	private int pageCount = 10;//默认分页每页条数 
	public Tuserinfo getTuserinfo() {
		return tuserinfo;
	}
	public void setTuserinfo(Tuserinfo tuserinfo) {
		this.tuserinfo = tuserinfo;
	}
    
	public  DateFormat dayf = new SimpleDateFormat("yyyy-MM-dd");
	/**
	 * 生成代理链接
	 * 
	 * http://www.ruyicai.com
	 * @return
	 * @throws Exception 
	 */
	private Tuserinfo user = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
	public String ProducedLink() throws Exception{
		String shouyepath = "http://www.ruyicai.com/index.jsp";//首页地址
		String registerpath = "http://users.ruyicai.com/register/register_new.jsp";//注册地址
		String userno = user.getUSERNO();
		logger.info(agencyUrl+"/getWinfolist?userno="+userno);
		//userno存在  ， 判断是否是推广专员
		String re= JSONReslutUtil.getResultMessage(agencyUrl +"/findUserAgency?","userno="+userno,"POST");
		JSONObject obj = JSONObject.fromObject(re);
		String value = obj.getString("value");
		if(!value.equals("null")){
		    //此用户是推广用户 生成链接
			shouyepath =buildurl(shouyepath, userno);
			registerpath =buildurl(registerpath, userno);
			if("".equals(shouyepath)||"".equals(registerpath)){
				logger.info("推广链接生成失败！");
				request.setAttribute("message", "链接生成失败，请与客服联系。");
			}else{
				request.setAttribute("shouyepath", shouyepath);
				request.setAttribute("registerpath", registerpath);
			}
			}else{
				//查询到这个用户不是推广用户，不生成推官链接并提示用户申请。
				request.setAttribute("message", "您暂不具备推广员资格，请致电:400-665-1000申请");
			}
		return "toagencylink";
	} 
	/**
	 * 我的业绩
	 * @RequestParam(value = "startLine", required = false, defaultValue = "0") int startLine,
			@RequestParam(value = "endLine", required = false, defaultValue = "20") int endLine,
			@RequestParam(value = "orderBy", required = false) String orderBy,
			@RequestParam(value = "orderDir", required = false) String orderDir) {
	 * @return
	 * http://192.168.0.118:8000/agencycenter/findAllUserAgency?
	 * contidion={"EQS_parentUserno":"00000059"}
	 * 
	 * "GED_createTime":"2012-08-13 10:34:15","LED_createTime":"2012-08-13 10:34:15",
	 * @throws ParseException 
	 */
	public String agencyPerformance() throws ParseException{
		try {
			String paramer = "";
			//默认分页
			Integer pageIndex = request.getParameter("pageIndex")==null?1:Integer.valueOf(request.getParameter("pageIndex"));
			Integer pageNum = (request.getParameter("pageCount")==null ||request.getParameter("pageCount").equals("undefined"))?pageCount:Integer.valueOf(request.getParameter("pageCount"));
			//获取当前页
			String userno = user.getUSERNO();
			//获取查询的username
			String username = request.getParameter("username")==null?"":request.getParameter("username");
			String agencyuserno =  "";
			if(!username.equals("")){
				//根据username查询用户信息，获得userno.
				String reUser = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes?","json&find=ByUserName&userName="+username,"POST");
				JSONObject js = JSONObject.fromObject(reUser);
				if(!js.getString("errorCode").equals("0")){
					String reUser1 = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes?","json&find=ByMobileid&mobileid="+username,"POST");
					js =JSONObject.fromObject(reUser1);
					if(!js.getString("errorCode").equals("0")){
						logger.info("根据代理用户的username查询用户的用户编号返回结果"+js.getString("errorCode"));
					}
				}
				agencyuserno=js.getJSONObject("value").getString("userno");
			}
			//获取时间段
			String startdate = request.getParameter("beginTime");
			String enddate = request.getParameter("endTime")==null?dayf.format(new Date()):request.getParameter("endTime");
			if(!(enddate==null||enddate.equals("")||enddate.equals("undefined"))){
				request.setAttribute("endTime", enddate);
			}
			if(!(startdate==null||startdate.equals("")||startdate.equals("undefined"))){
				request.setAttribute("beginTime", startdate);
			}else{
				startdate="2010-01-01";
			}
			JSONObject json = new JSONObject();
			json.put("GED_createTime", startdate);
			json.put("LED_createTime", CommonUtil.addDay(enddate));
			json.put("EQS_parentUserno", userno);
			paramer = "startLine="+(pageIndex-1)*pageNum+"&endLine="+pageNum;
			if(!agencyuserno.equals("")||"null".equals(agencyuserno)){
				json.put("EQS_userno", agencyuserno);
			}
			String re = JSONReslutUtil.getResultMessage(agencyUrl +"/findAllUserAgency?","condition="+json+"&"+paramer,"POST");
			JSONObject obj = JSONObject.fromObject(re);
			JSONArray jsoarr = obj.getJSONObject("value").getJSONArray("list");
			JSONArray rearr = initDataForfindAllUserAgency(jsoarr);
			request.setAttribute("agencyalluserslist", rearr);
			String pageHtml=CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getJSONObject("value").getString("totalResult")), pageNum, 4);
			request.setAttribute("pageHtml", pageHtml);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "toagencyPerformance";
	}
	

	/**
	 * 处理 查询所有用户代理接口返回的数据
	 * @throws IOException 
	 */
	public DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	public JSONArray initDataForfindAllUserAgency(JSONArray arr) throws IOException{
		JSONArray arrlist = new JSONArray();
		if(!arr.isEmpty()||arr!=null){
			for (int i = 0; i < arr.size(); i++) {
				JSONObject json = arr.getJSONObject(i);
				String createTime = json.getJSONObject("userAgency").getString("createTime");
				String nickname = json.getJSONObject("tuserinfo").getString("nickname").equals("null")?
						json.getJSONObject("tuserinfo").getString("userName"):json.getJSONObject("tuserinfo").getString("nickname");
				String regtime = json.getJSONObject("tuserinfo").getString("regtime");	
				
				//获取这个代理用户的userno
				String agencyUserno = json.getJSONObject("tuserinfo").getString("userno");
				JSONObject rejson = JSONObject.fromObject(JSONReslutUtil.getResultMessage(agencyUrl +"/findUnderlingCount?","userno="+agencyUserno,"POST")) ;
				String nextUsersCounts = rejson.getString("value");
				JSONObject jsond = new JSONObject();
				jsond.put("createTime", createTime);
				jsond.put("nickname", nickname);
				jsond.put("nextUsersCounts", nextUsersCounts);
				jsond.put("agencyUserno", agencyUserno);
				jsond.put("regtime", df.format(Long.valueOf(regtime)));
				arrlist.add(jsond);
			}
		}
		return arrlist;
	}
	/**
	 * 查询佣金比例
	 * @return
	 */
	public String queryAgencyPrizeBili(){
		//此用户的用户编号
		String agencyuserno = request.getParameter("userno")==null?"":request.getParameter("userno");
		String userno = user.getUSERNO();
		try {
			JSONObject rejson = null;
			JSONObject rejson1 = null;
			if(!agencyuserno.equals("")){
				//查询代理用户的佣金比例
				 rejson = JSONObject.fromObject(JSONReslutUtil.getResultMessage(agencyUrl +"/findAgencyPrecent?","userno="+agencyuserno,"POST")) ;
			     JSONArray reArr = rejson.getJSONArray("value");
			     rejson1 = JSONObject.fromObject(JSONReslutUtil.getResultMessage(agencyUrl +"/findAgencyPrecent?","userno="+userno,"POST")) ;
			     JSONArray rearr1 = rejson1.getJSONArray("value");
			     request.setAttribute("PrizeBiliList", initAgencyPrizeData(reArr, rearr1));
			     return "toagencyPrizeBili";
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.error("获取佣金比例信息出异常Exception(Abnormal for queryAgencyPrizeBili):"+e);
		}
		 return "toagencyPrizeBili";
	}
	
	public String queryZjprize() throws IOException{
		 String userno = user.getUSERNO();
	     JSONObject  rejson1 = JSONObject.fromObject(JSONReslutUtil.getResultMessage(agencyUrl +"/findAgencyPrecent?","userno="+userno,"POST")) ;
	     JSONArray rearr1 = rejson1.getJSONArray("value");
	     JSONArray arr =  initAgencyPrizeData(rearr1, null);
	     request.setAttribute("agencyprize", arr);
		 return "agencyprizebili";
	}
	
	/**
	 * 初始化 代理用户佣金比例数据
	 * @param jsonArr
	 * @param jsonArr2
	 * @return
	 */
	public JSONArray initAgencyPrizeData(JSONArray jsonArr ,JSONArray jsonArr2){
		JSONArray jArr = new JSONArray();
		for (int i = 0; i < jsonArr.size(); i++) {
		  JSONObject js = jsonArr.getJSONObject(i);
		  String percent =  js.getString("percent");
		  String userno =  js.getJSONObject("id").getString("userno");
		  String modifytime =  df.format(Long.valueOf(js.getString("lastmodifyTime")));
		  String lotno =  js.getJSONObject("id").getString("lotno");
		  String lotName=getLotName(lotno);
		  JSONObject jobj = new JSONObject();
		  jobj.put("userno", userno);
		  jobj.put("lotno", lotno);
		  jobj.put("lotName", lotName);
		  jobj.put("modifytime", modifytime);
		  jobj.put("percent", percent);
		  if(jsonArr2 !=null){
			  for (int j = 0; j < jsonArr2.size(); j++) {
				  JSONObject js1 = jsonArr2.getJSONObject(i);
				  String lotno1 =  js1.getJSONObject("id").getString("lotno");
				  String percent1 =  js1.getString("percent").equals("")?"0.0":js1.getString("percent");
				  if(lotno.equals(lotno1)){
					  jobj.put("mpercent", percent1);
				  }
		  }
		  }
		  jArr.add(jobj);
		}		
		return jArr;
	}
	
	public String getLotName(String lotno){
		if("F47104".equals(lotno)){
			return "双色球";
		}else if("F47103".equals(lotno)){
			return "福彩3D";
		}else if("F47102".equals(lotno)){
			return "七乐彩";
		}else if("T01001".equals(lotno)){
			return "超级大乐透";
		}else if("T01002".equals(lotno)){
			return "排列三";
		}else if("T01003".equals(lotno)){
			return "胜负彩";
		}else if("T01004".equals(lotno)){
			return "任九场";
		}else if("T01005".equals(lotno)){
			return "四场进球彩";
		}else if("T01006".equals(lotno)){
			return "六场半全场";
		}else if("T01007".equals(lotno)){
			return "时时彩";
		}else if("T01008".equals(lotno)){
			return "单场";
		}else if("T01009".equals(lotno)){
			return "七星彩";
		}else if("T01010".equals(lotno)){
			return "江西11选5";
		}else if("T01011".equals(lotno)){
			return "排列五";
		}else if("T01012".equals(lotno)){
			return "十一运夺金";
		}else if("T01013".equals(lotno)){
				return "22选5";
		}else if("J00001".equals(lotno)){
			return "竞彩足球";
		}
		if ("J00005".equals(lotno)) {
			return "竞篮胜负";
		}
		if ("J00006".equals(lotno)) {
			return "竞篮让分";
		}
		if ("J00007".equals(lotno)) {
			return "竞篮胜分差";
		}
		if ("J00008".equals(lotno)) {
			return "竞篮大小分";
		}
		if ("J00002".equals(lotno)) {
			return "竞足比分";
		}
		if ("J00003".equals(lotno)) {
			return"竞足总进球";
		}
		if ("J00004".equals(lotno)) {
			return "竞足半场";
		}
		if ("T01014".equals(lotno)) {
			return "广东十一选五";
		}
		if ("T01015".equals(lotno)) {
			return "广东快乐十分";
		}
		if ("J00009".equals(lotno)) {
			return "竞彩冠军";
		}
		if ("J000010".equals(lotno)) {
			return "竞彩冠亚军";
		}
	
		return lotno;
	}
	
	/**
	 * 设置佣金比例
	 * @throws IOException 
	 * @RequestParam(value = "userno") String userno,
			@RequestParam(value = "parentUserno") String parentUserno, 
		    @RequestParam(value = "lotno") String lotno,
			@RequestParam(value = "percent") BigDecimal percent) {
	 */
	public void setagencyPrizeBili() throws IOException{
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String parentUserno  = user.getUSERNO();// 为当前登录用户的编号
		String lotno  = request.getParameter("lotno")==null?"":request.getParameter("lotno");
		String percent  = request.getParameter("percent")==null?"":request.getParameter("percent");
		String userno  = request.getParameter("userno")==null?"":request.getParameter("userno");
		String p = "";
		if(!lotno.equals("")&& !percent.equals("")&&!userno.equals("")){
			p= "lotno="+lotno+"&percent="+percent+"&userno="+userno+"&parentUserno="+parentUserno;
			JSONObject	rejson = JSONObject.fromObject(JSONReslutUtil.getResultMessage(agencyUrl +"/modifyAgencyPrecent?",p,"POST")) ;
			String errorCode = rejson.getString("errorCode");
			JSONObject jsp = new JSONObject();
			jsp.put("errorCode", errorCode);
			jsp.put("percent", rejson.getJSONObject("value").getString("percent"));
			jsp.put("lastmodifyTime", df.format(Long.valueOf(rejson.getJSONObject("value").getString("lastmodifyTime"))));
			response.getWriter().print(jsp);
		}else{
			response.getWriter().print("500");
		}
	}
	/**
	 *  用户佣金明细
	 * @return
	 * @throws IOException 
	 * @throws ParseException 
	 */
     public String 	findAllAgencyPrizeDetail() throws IOException, ParseException{
    	    String flag = request.getParameter("flag");
    	 	//查询条件。
    	 	String parentUserno = user.getUSERNO();// 上级代理用户的编号。 为当前登录用户
    	 	//获取当前页
    	 	Integer pageIndex = request.getParameter("pageIndex")==null?1:Integer.valueOf(request.getParameter("pageIndex"));
    	 	Integer pageNum = (request.getParameter("pageCount")==null ||request.getParameter("pageCount").equals("undefined"))?pageCount:Integer.valueOf(request.getParameter("pageCount"));
		    //获取查询的username
		    String username = request.getParameter("username")==null?"":request.getParameter("username");
		    String agencyuserno =request.getParameter("userno")==null?"":request.getParameter("userno");
			if(!username.equals("")){
				//根据username查询用户信息，获得userno.
				String reUser = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes?","json&find=ByUserName&userName="+username,"POST");
				JSONObject js = JSONObject.fromObject(reUser);
				if(!js.getString("errorCode").equals("0")){
					String reUser1 = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes?","json&find=ByMobileid&mobileid="+username,"POST");
					js =JSONObject.fromObject(reUser1);
					if(!js.getString("errorCode").equals("0")){
						logger.info("根据代理用户的username查询用户的用户编号返回结果"+js.getString("errorCode"));
					}
				}
				if(js.getString("errorCode").equals("0")){
					agencyuserno=js.getJSONObject("value").getString("userno");
				}
			}
			//获取时间段
			String startdate = request.getParameter("beginTime");
			String enddate = request.getParameter("endTime")==null?dayf.format(new Date()):request.getParameter("endTime");
			if(!(enddate==null||enddate.equals("")||enddate.equals("undefined"))){
				request.setAttribute("endTime", enddate);
			}
			if(!(startdate==null||startdate.equals("")||startdate.equals("undefined"))){
				request.setAttribute("beginTime", startdate);
			}else{
				startdate="2010-01-01";
			}
			JSONObject json = new JSONObject();
//			GED_createTime":"2012-08-13 10:34:15","LED_createTime":"2012-08-13 10:34:15
			json.put("GED_createTime", startdate);
			json.put("LED_createTime", CommonUtil.addDay(enddate));
			if(!agencyuserno.equals("")&&!"null".equals(agencyuserno)){
				json.put("EQS_userno", agencyuserno);
			}else{
			    json.put("EQS_userno", parentUserno);
			}
			String paramer = "startLine="+(pageIndex-1)*pageNum+"&endLine="+pageNum;
			String re = JSONReslutUtil.getResultMessage(agencyUrl +"/findAllAgencyPrizeDetail?","condition="+json+"&"+paramer,"POST");
			JSONObject obj = JSONObject.fromObject(re);
			JSONArray jsoarr = obj.getJSONObject("value").getJSONArray("list");
    	    JSONArray array = new JSONArray();
			if(!jsoarr.isEmpty()){
				array =	initAgencyJiaoyiData(jsoarr);
			}
			String allPrize = obj.getJSONObject("value").getString("value");
			String toalAmt = "0.00";
			if(!allPrize.equals("null")&&allPrize != null){
				 toalAmt =String.valueOf(Float.valueOf(allPrize)/100);
			}
			request.setAttribute("agencyJiaoyiDatas", array);
			request.setAttribute("toalAmt", toalAmt);
			String pageHtml=CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getJSONObject("value").getString("totalResult")), pageNum, 4);
			if(flag !=null &&flag.equals("yj")){
				 pageHtml=CommonUtil.getYjPageToHtml(pageIndex, Integer.parseInt(obj.getJSONObject("value").getString("totalResult")), pageNum, 4);
				 request.setAttribute("pageHtml", pageHtml);
				 return "toagencyJiaoyidetail";
			}
			 request.setAttribute("pageHtml", pageHtml);
    	    return "toagencyJiaoyi";
     }
     
     /**
      * 初始化 用戶交易明細數據
      * @param jarr
      * @return
      */
		public JSONArray initAgencyJiaoyiData(JSONArray jarr){
		    //用户名  ， 身份 	直接下级数 	销量 	佣金收入	
			JSONArray array = new JSONArray();
		    for (int i = 0; i < jarr.size(); i++) {
		    	JSONObject rejson = new JSONObject();
		    	JSONObject tuserinfo = jarr.getJSONObject(i).getJSONObject("tuserinfo");
		    	JSONObject agencyPrizeDetail = jarr.getJSONObject(i).getJSONObject("agencyPrizeDetail");
				JSONObject childTuserinfo = jarr.getJSONObject(i).getJSONObject("childTuserinfo");
				String nickname = tuserinfo.getString("nickname").equals("null")?
						tuserinfo.getString("userName"):tuserinfo.getString("nickname");
				if(!childTuserinfo.isNullObject()){
					String agencynickname = childTuserinfo.getString("nickname").equals("null")?
							childTuserinfo.getString("userName"):childTuserinfo.getString("nickname");
							rejson.put("agencynickname", agencynickname);
				}		
				String userno = agencyPrizeDetail.getString("userno");
				String createTime = agencyPrizeDetail.getString("createTime");
				String businessId = agencyPrizeDetail.getString("businessId");
				String businessType = agencyPrizeDetail.getString("businessType");
				String lotno = agencyPrizeDetail.getString("lotno");
				String prizeAmt = agencyPrizeDetail.getString("prizeAmt");
				String totalAmt = agencyPrizeDetail.getString("totalAmt");
				//算出总的投注金额
				rejson.put("nickname", nickname);
				rejson.put("userno", userno);
				rejson.put("createTime", df.format(Long.valueOf(createTime)));
				rejson.put("businessId", businessId);
				rejson.put("businessType", businessType(businessType));
				rejson.put("bettype", businessType);
				rejson.put("lotno",lotno);
				rejson.put("lotname",getLotName(lotno) );
				rejson.put("prizeAmt", Float.valueOf(prizeAmt)/100);
				rejson.put("totalAmt", Float.valueOf(totalAmt)/100);
				array.add(rejson);
			}
			return array;
		}
		public String businessType(String businessType){
			String type = "";
			if(businessType.equals("1")){
				type = "投注";
			}else if(businessType.equals("2")){
				type="追号";
			}else if(businessType.equals("3")){
				type="合买";
			}
		    return type;
		}
		
	/**
	 * 生成推广链接，并对参数加密
	 * @param userno
	 * @return
	 */
	public String buildurl(String path ,String userno){
		try {
			DES des = new DES("0123456789ABCDEFG");//自定义密钥
			String userid = des.encrypt(userno);
			path = path+"?userid="+userid;
		} catch (Exception e) {
			logger.error("加密参数异常,{}"+e.getMessage());
			return "";
		}
		return path;
	}
	
}
 
