package com.ruyicai.web.action.cooperation;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.invokeLot.util.JSONReslutUtil;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.LotErrorCode;
import com.ruyicai.util.MessageUtil;
import com.ruyicai.util.ResourceBundleUtil;
import com.ruyicai.util.URLEncoder;
import com.ruyicai.web.action.TuserinfoAction;
import com.ruyicai.web.pojo.Custom;
import com.ruyicai.web.pojo.PhoneInfo;
import com.ruyicai.web.service.CustomService;
import com.ruyicai.web.service.PhoneInfoService;

/**
 * 客户留言的功能
 * @author 李媛媛
 *
 */

@SuppressWarnings("serial")
public class CustomMessageAction extends BaseAction {
	private Logger log = Logger.getLogger(CustomMessageAction.class);
	private CustomService customService;
	
	public CustomService getCustomService() {
		return customService;
	}
	public void setCustomService(CustomService customService) {
		this.customService = customService;
	}
	private PhoneInfoService phoneInfoService;
	public PhoneInfoService getPhoneInfoService() {
		return phoneInfoService;
	}

	public void setPhoneInfoService(PhoneInfoService phoneInfoService) {
		this.phoneInfoService = phoneInfoService;
	}
	
	public String Custom(){
		try {
			JSONObject js = JSONReslutUtil.getUserNo(request);
			if(js==null||!"0".equals(js.getString("errorCode"))){
				request.setAttribute("message",MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			}
			JSONObject	userInfo = JSONReslutUtil.getUserInfo(request);//.getJSONObject("value");
			JSONObject user = null ;
			if(!userInfo.isEmpty() || userInfo != null){
				user = userInfo.getJSONObject("value");
			}
			//得到页面内容,用户数据中文进行转解码
			String ipStr = request.getHeader("x-forwarded-for");
			if(ipStr == null || ipStr.length() == 0 || "unknown".equalsIgnoreCase(ipStr) ){
				ipStr = request.getHeader("Proxy-Client-IP");
			}
			if(ipStr == null || ipStr.length() == 0 || "unknown".equalsIgnoreCase(ipStr)){
				ipStr = request.getHeader("WL-Proxy-Client-IP");
			}
			if(ipStr == null || ipStr.length() == 0 || "unknown".equalsIgnoreCase(ipStr)){
				ipStr = request.getRemoteAddr();
			}
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String usertime = sdf.format(new Date());
			
			String questiontype = null;
			String contents = null;
			String useremail = null;
			String userphone = null;
			if(!request.getParameter("china").equals("中文")){
				questiontype = URLEncoder.decode(request.getParameter("select"));
				contents = URLEncoder.decode(request.getParameter("contents"));
				useremail = URLEncoder.decode(request.getParameter("useremail").equals("null")||request.getParameter("useremail").length()==0
						?user.getString("email")==null?"":user.getString("email"):request.getParameter("useremail"));
				userphone = URLEncoder.decode(request.getParameter("userphone").equals("null")||request.getParameter("userphone").length()==0
						?user.getString("mobileid")==null?"":user.getString("mobileid"):request.getParameter("userphone"));
			}else{
				questiontype = request.getParameter("select");
				contents = request.getParameter("contents");
				useremail = request.getParameter("useremail").equals("null")||request.getParameter("useremail").length()==0
						?user.getString("email")==null?"":user.getString("email"):request.getParameter("useremail");
				userphone = request.getParameter("userphone").equals("null")||request.getParameter("userphone").length()==0
						?user.getString("email")==null?"":user.getString("email"):request.getParameter("userphone");
			}
			JSONObject obj = JSONObject.fromObject(CustomMessage.getCustom(null,0,usertime,1,questiontype, contents, useremail, userphone,ipStr));
		    Custom c = (Custom) JSONObject.toBean(JSONObject.fromObject(obj),Custom.class);
			String re = customService.addCustom(c);
			if(re.equals("100000")){
				request.setAttribute("message", "{success}");
				return "customMessageSuccess";
			}else{
				request.setAttribute("message", "留言过程出现异常，请与客服联系！");
				return "formError";
			}
		} catch (Exception e) {
			log.error("客户留言出异常Exception(Abnormal custom information):"+e.toString());
			request.setAttribute("message", "留言过程出现异常，请与客服联系！");
			return "formError";
		}
	}
	public void newCustomMessage() throws IOException{
		response.setCharacterEncoding("utf-8");
		String goValue="SUCC";
		try{
			//获取用户留言的信息
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			
			String mobile = request.getParameter("userphone");
			String qq = request.getParameter("qq");
			String content = request.getParameter("content");
			String  detail="";
			if(!("".equals(qq)&&"".equals(mobile))){
			 detail="mobile:"+mobile+"qq:"+qq;
			}
			JSONObject param=new JSONObject();
			String userno ="";
			if(userinfojson != null && "0".equals(userinfojson.getString("errorCode"))){
				String username = userinfojson.getJSONObject("value").getString("userName");
				 userno =  userinfojson.getJSONObject("value").getString("userno");
				param.put("userno", userno);
				detail+="username:"+username;
			}else{
				detail+="username:匿名用户";
			}
			param.put("content", content);
			param.put("imsi", "");
			param.put("detail", detail);
			JSONObject obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKMESSAGE + 
					"/saveMsg?" ,  "body="+param.toString(),"POST"));
			log.info("saveMsg 返回结果"+obj);
			if(!LotErrorCode.NEW_OK.trim().equals(obj.getString("errorCode").trim())){
				goValue="FAIL";
				return;
			}else{
				int count=0;
					PhoneInfo phoneInfo = new PhoneInfo();
					phoneInfo.setEmail("Msg"+userno);
					phoneInfo.setRules(1);
					count =phoneInfoService.queryPhoneInfoCountByEmail(phoneInfo);
				if(count<3){
					TuserinfoAction.addUserScore(userno,null,7,null,null,null);
					phoneInfo.setEmail("Msg"+userno);
					phoneInfo.setRules(1);
					count =Integer.valueOf(phoneInfoService.add(phoneInfo));
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			log.error("留言出现异常 (leave message return Exception)"+e.toString());
			
		}finally{
			PrintWriter out = response.getWriter();
			out.print(goValue);
		}
	}
	
	
	/**
	 * 留言列表
	 * @return
	 */
		public String getMsgList(){
			try {		
				//获取分页，默认为第一页
					Integer pageIndex = request.getParameter("pageIndex")==null?1:Integer.valueOf(request.getParameter("pageIndex"));//第一页
					Integer pageNum = (request.getParameter("pageCount")==null ||request.getParameter("pageCount").equals("undefined"))?5:Integer.valueOf(request.getParameter("pageCount"));//页数
					//得到传入条件
					request.setAttribute("pageCount", pageNum);
					JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
					String userno ="";
					if(userinfojson!=null&&"0".equals(userinfojson.getString("errorCode"))){
						 userno =  userinfojson.getJSONObject("value").getString("userno");
					}
					JSONObject conditionMap = new JSONObject();
					if(!LotErrorCode.YHBCZ.trim().equals(userinfojson.getString("errorCode").trim())){
						conditionMap.put("EQS_userno", userno);
					}else{
						conditionMap.put("EQS_flag", "1");
					}
					String url =ResourceBundleUtil.LINKMESSAGE + "/selectMsgs?startLine="+ (pageIndex-1)*pageNum +"&endLine=" + pageNum+"&condition=" + conditionMap.toString();
					JSONObject obj=JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKMESSAGE + 
							"/selectMsgs" , "startLine="+ (pageIndex-1)*pageNum +"&endLine=" + pageNum+"&condition=" + conditionMap.toString(),
							"POST")).getJSONObject("value");
					log.info("get presented lottery list:"+obj);
					JSONArray arrListNew= new JSONArray();
					if(!obj.isNullObject()){
					JSONArray arrList = obj.getJSONArray("list");
					for (int i = 0; i < arrList.size(); i++) {  
						JSONObject rec = arrList.getJSONObject(i);
						userno = rec.getString("userno");
						if(!"".equals(userno)&&!"null".equals(userno)&&userno!=null){
							userno="***"+userno.substring(5,userno.length());
						}else{
							userno="匿名用户";
						}
						rec.put("username", userno);
						rec.put("createtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createtime"))));
						rec.put("content", rec.getString("content").replace("null", ""));
						arrListNew.add(rec);
					}
					String pageHtml=CommonUtil.getMesgToJsp(pageIndex, Integer.parseInt(obj.getString("totalResult")), pageNum, 4,"list");
					request.setAttribute("pageHtml", pageHtml);
					}
					//将分组的记录保存到一个json中
					request.setAttribute("jaToPage", arrListNew);
					return "msgList";
			} catch (Exception e) {			
				log.error("赠彩记录查询出异常Exception(Check out the unusual betSelectOrder):" + e.toString());
				return "error";
				
			}
		}
}
