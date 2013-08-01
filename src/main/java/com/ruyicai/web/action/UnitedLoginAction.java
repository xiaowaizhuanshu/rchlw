package com.ruyicai.web.action;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.Constant;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.MessageUtil;
import com.ruyicai.util.NameUtil;
import com.ruyicai.util.ResourceBundleUtil;
import com.ruyicai.util.URLEncoder;
import com.ruyicai.util.MD5.MD5Util;

/**
 * 
 * 联合登录的Action
 * @author 徐丽
 *
 */
@SuppressWarnings("serial")
public class UnitedLoginAction extends BaseAction {
	
	private static Logger logger = Logger.getLogger(UnitedLoginAction.class);
	
	/**
	 * 给用户创建一个cookie 如果cookie存在，则修改当前cookie
	 * cookie中存储当前用户的jsessionid 
	 * @param sessionId
	 */
	private void pageCookie(String sessionId){
		String cookieName = "userInfoId";
		Cookie userCookie = new Cookie(cookieName, sessionId);
		userCookie.setPath("/");
		userCookie.setDomain(".boyacai.com");
		userCookie.setMaxAge(365*24*60*60);
		response.addCookie(userCookie);
	}
	/**
	 * 调用工具方法来获取cookie里的用户信息
	 * @return
	 */
	public Tuserinfo getUserInfo(){
		JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
		if(!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))){
			Tuserinfo userInfo = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			logger.info("获取到的用户信息是 is:"+userInfo);
			return userInfo;
		}else{
			logger.info("未获取到用户信息");
			return null;
		}
	}
	
	/**
	 * 支付宝快捷登录(与支付宝官网联调接口)
	 * @return
	 */
	public String alipayHandyLogin(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//1.从配置文件中获取返回地址内容
			Map<String, String> mapRetUrlLogin = ResourceBundleUtil.mapAlipayLoginUrl;//从配置文件中获取返回地址传给后台
			logger.info("从配置文件中获取的支付宝返回请求地址:"+mapRetUrlLogin);
			Set<Map.Entry<String, String>> setRetUrlLogin = mapRetUrlLogin.entrySet(); 
			Set<String> keySet = mapRetUrlLogin.keySet();//获取所有网站充值返回地址
			//得到当前域名
			String str = request.getServerName();
			String retUrl3Gcaipiao = "";
			//获取配置文件中3g彩票网登录支付宝快捷登录后的返回地址传给后台
			for (String key : keySet) {
				if (mapRetUrlLogin.containsKey(key)) {//判断这个键是否存在
					for (Map.Entry<String, String> entry : setRetUrlLogin) {
						if(str.indexOf(entry.getKey())>-1){	
							retUrl3Gcaipiao = entry.getValue();	
						}
					}
				}
			}
			logger.info("获取的登录地址(get login address:>>>>)retUrl3Gcaipiao:"+retUrl3Gcaipiao);
			String return_url = retUrl3Gcaipiao+";jsessionid="+request.getSession().getId();
			session.setAttribute("return_url", return_url);
			//2.生成支付宝快捷登录的待签名字符串
			String[] params = new String[] {
				"partner=" + ResourceBundleUtil.ALIPAY_ID,
				"target_service=user.auth.quick.login",
				"service=alipay.auth.authorize",
				"_input_charset=utf-8",
				"return_url="+return_url
			};			
			Arrays.sort(params);//从a-z排序
			StringBuilder builder = new StringBuilder();
			//切割用&符号链接
			for(String s : params) {
				builder.append(s).append("&");
			}
			builder.deleteCharAt(builder.length() - 1);
			//MD5加密
			String sign = MD5Util.MD5Encode(builder.toString() + ResourceBundleUtil.ALIPAY_KEY, "UTF-8");
			logger.info("builder:"+builder.toString()+";生成支付宝的签名为(made alipay_sign):"+sign);
			//获取请求地址跳转到支付宝快捷登录页面
			String url =  ResourceBundleUtil.ALIPAY_URL + "sign_type=MD5" + "&sign=" + sign + "&" + builder.toString();
			//response.getWriter().print(url);
			response.sendRedirect(url);
			return null;
		} catch (IOException e) {
			logger.error("支付宝快捷登录(与支付宝官网联调接口)出异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 调用支付宝物流接口查询用户信息
	 * @return
	 */
	
	public String alipayProLogin(String token){

		String retUrl3Gcaipiao = session.getAttribute("return_url").toString();
		logger.info("获取的登录地址retUrl3Gcaipiao:"+retUrl3Gcaipiao);
		
		String return_url = retUrl3Gcaipiao+";jsessionid="+request.getSession().getId();
		
		//2.生成支付宝快捷登录的待签名字符串
		String[] params = new String[] {
			"partner=" + ResourceBundleUtil.ALIPAY_ID,
			"service=user.logistics.address.query",
			"_input_charset=utf-8",
			"token="+token,
			"return_url="+return_url
		};			
		Arrays.sort(params);//从a-z排序
		StringBuilder builder = new StringBuilder();
		//切割用&符号链接
		for(String s : params) {
			builder.append(s).append("&");
		}
		builder.deleteCharAt(builder.length() - 1);
		//MD5加密
		String sign = MD5Util.MD5Encode(builder.toString() + ResourceBundleUtil.ALIPAY_KEY, "UTF-8");
		logger.info("builder:"+builder.toString()+";生成支付宝的签名为(made alipay_sign):"+sign);
		//获取请求地址跳转到支付宝用户信息页面
		String url =  ResourceBundleUtil.ALIPAY_URL + "sign_type=MD5" + "&sign=" + sign + "&" + builder.toString();
		
		return url;

	}
	
	
	
	
	
	/**
	 * 支付宝联合登录
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String alipayUnitedLogin(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
	
		try {
			
			//1.获取支付宝返回参数并转化为所需编码格式
			Map<String,String> params = new HashMap<String,String>();
			Map requestParams = request.getParameterMap();
			for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
				String name = (String) iter.next();
				String[] values = (String[]) requestParams.get(name);
				String valueStr = "";
				for (int i = 0; i < values.length; i++) {
					valueStr = (i == values.length - 1) ? valueStr + values[i]: valueStr + values[i] + ",";
				}
				//乱码解决，这段代码在出现乱码时使用。如果mysign和sign不相等也可以使用这段代码转化
				valueStr = new String(valueStr.getBytes("ISO-8859-1"), "UTF-8");
				params.put(name, valueStr);//将内容封装的map中
			}
			
			//2.获取支付宝返回的键排序并获取相应的值
			List<String> keys = new ArrayList<String>(params.keySet());
			Collections.sort(keys);
			String prestr = "";
			for (int i = 0; i < keys.size(); i++) {
			    String key = keys.get(i);
			    String value = params.get(key);
			    if(!"sign".equals(key) && !"sign_type".equals(key)){
			        if (i == keys.size() - 1) {//拼接时，不包括最后一个&字符
			            prestr = prestr + key + "=" + value;
			        } else {
			            prestr = prestr + key + "=" + value + "&";
			        }
			    }
			}
			logger.info("支付宝快捷登录回调收到参数：(alipay.auth.authorize params:)"+prestr.toString());
			String sign = MD5Util.MD5Encode(prestr.toString() + ResourceBundleUtil.ALIPAY_KEY, "UTF-8");
			logger.info("支付宝快捷登录回调校验签名：(sign:)"+sign.equals(params.get("sign")));
			
			//3.获取支付宝返回的user_id、token、real_name、email、cert_id、mobile
			String alipayChannel = ResourceBundleUtil.ALIPAY_CHANNEL;
			String alipayType = ResourceBundleUtil.ALIPAY_TYPE;
			
			session.setAttribute("channel",alipayChannel);
			session.setAttribute("type",alipayType);
		
			if("".equals(session.getAttribute("flag")) || session.getAttribute("flag")==null){
				String user_id = params.get("user_id");
				String token = params.get("token");
				String real_name = params.get("real_name");	
				String email = params.get("email");  

				request.getSession().setAttribute("user_id",user_id);
				request.getSession().setAttribute("token", token);
				request.getSession().setAttribute("email", email);
				request.getSession().setAttribute("name",real_name);
				String flag="1";
				session.setAttribute("flag",flag);
				//查询用户是否是大客户，是跳过物流查询接口，不是进行物流接口查询
				String  re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL 
						+ "/tbiguserinfoes?json&find=BigUser&outuserno=" + session.getAttribute("user_id")+"&type="+alipayType);
				logger.info("查询大客户信息内容返回:(biguserinfo:)"+re);
				JSONObject obj = JSONObject.fromObject(re);
				if(!CommonUtil.getBackValue("errorCode", obj).equals(LotErrorCode.NEW_OK)){
					//调用物流接口查询用户信息
					String url=this.alipayProLogin(token);
					response.getWriter().print("<script language='javascript'>window.location.href='"+url+"'</script>");
					return null;
				}
			}
			
			String cert_no = params.get("cert_no");
			String mobile = params.get("mobile");
			String newemail = params.get("email");
			if(newemail==null){
				request.getSession().setAttribute("email", newemail);
			}
			
			request.getSession().setAttribute("cert_no",cert_no);
			request.getSession().setAttribute("mobile",mobile);
			
			logger.info("得到支付宝返回的user_id="+session.getAttribute("user_id")+";token="+session.getAttribute("token")+";real_name="+session.getAttribute("name")+";email="+session.getAttribute("email")+";cert_no="+cert_no+";mobile="+mobile);
			
			//4.根据outuserno和type查询是否绑定了支付宝用户
			
			String re = getBigUser((String)session.getAttribute("user_id"), alipayType);
			
			JSONObject obj = JSONObject.fromObject(re);
			if(CommonUtil.getBackValue("errorCode", obj).equals(LotErrorCode.NEW_OK)){
				
				//根据查询出来的大用户信息，判断页面跳转地址
				byBindUserInfo(obj);
				
			}else{
				response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
			}
			return null;
		
		} catch (Exception e) {
			logger.error("支付宝快捷登录回调出异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
		}
	}
	
	
	/**
	 * 大客户登录调用接口
	 * @param userno 用户的编号
	 * @param password 密码
	 * @return 登录成功返回true 否则为 false
	 * @throws Exception
	 */
	public boolean  getBigLogin(String userno,HttpServletRequest request) throws Exception{
		String loginfo = JSONReslutUtil.getResultMessage(ResourceBundleUtil.USERSCENTERURL +"user/center!loginForUserno?",
				"userno="+userno,"POST");
		if("0".equals(JSONObject.fromObject(loginfo).getString("errorCode"))){
			String jessionid = JSONObject.fromObject(loginfo).getString("jsessionid");
			pageCookie(jessionid);
			return true;
		}else{
			return false;
		}
		
		
		
	}
	
	
	//将用户填写的已有用户信息绑定  ajax
	public String userInfoBind(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try{
			
			Tuserinfo tuser = (Tuserinfo) session.getAttribute("tuserinfo");
			session.setAttribute("moneyShowType", "hide");
			session.setAttribute("CHANNEL", tuser.getCHANNEL());
			//用户执行大客户绑定 
			String bindRe =getUserBindInfo(tuser.getUSERNO(),(String)session.getAttribute("type"),(String)session.getAttribute("user_id")); 
			
			JSONObject bindObj = JSONObject.fromObject(bindRe);
			if(!bindObj.isNullObject()){
				if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.NEW_OK)){
					logger.info("支付宝用户信息绑定成功=====alipay bind sucess");
					//request.getSession().setAttribute("user", tuser);
					
					String tuser_name = NameUtil.getNameUtil(tuser);
					session.setAttribute("tuser_name", tuser_name);
					//调用登录的方法执行大客户登录
					
					if(getBigLogin(tuser.getUSERNO(),request)){
					
						response.getWriter().print("/rchlw/index.jsp");
						return null;
					}else{
						session.setAttribute("message", MessageUtil.TIAW_login_ExceptionMsg);
						response.getWriter().print("/rchlw/function/user/setNickName_logistics.jsp");
						return null;
						
					}
				
				}else if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.SJHM_BIND)){
					session.setAttribute("message", "该手机号码已经绑定");
					response.getWriter().print("/rchlw/function/user/setNickName_logistics.jsp");
					return null;
				}else if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.WB_BIND)){
					session.setAttribute("message", "该账户已经被绑定,请填写用户名和密码！");
					response.getWriter().print("/rchlw/function/user/setNickName_logistics.jsp");
					return null;
				}
			}else{
				session.setAttribute("message", "绑定出现异常");
				response.getWriter().print("/rchlw/function/user/setNickName_logistics.jsp");
				return null;
			}
			return null;
		}catch(Exception e){
			logger.error("支付宝快捷登录绑定出异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
			
		}
	}
	
	
	/**
	 *  大客户登录
	 * @return
	 */
	
	public String userLoginInfo(){
		try{
			
			//Tuserinfo tuser = (Tuserinfo) session.getAttribute("user");
			Tuserinfo tuser = (Tuserinfo)session.getAttribute("lhdl_userinfo");
			session.setAttribute("moneyShowType", "hide");
			session.setAttribute("CHANNEL", tuser.getCHANNEL());	
			//调用登录的方法执行大客户登录
			if(getBigLogin(tuser.getUSERNO(),request)){
				if("null".equals(tuser.getUSERNAME()) || "".equals(tuser.getUSERNAME().trim())){
					session.setAttribute("message", "登录成功，请选择账户类型。");
					response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
				}else{
					JSONObject tuserobj = JSONObject.fromObject(tuser);
					request.setAttribute("userinfo",tuserobj);
					JSONReslutUtil.changeUserInfo(request);
					response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/index.jsp'</script>");
				}
				return null;
			}else{
				session.setAttribute("message", MessageUtil.TIAW_login_ExceptionMsg);
				response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
				return null;
			}
				
		}catch(Exception e){
			logger.error("登录出异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
			
		}
		
		
	}
	
	/**
	 * 针对只设置昵称不绑定本站帐户的用户，进行绑定信息
	 * 绑定成功之后，再进行昵称设置
	 * @return
	 */
	public String userBindInfo(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try{
			
			//Tuserinfo tuser = (Tuserinfo) session.getAttribute("user");
			Tuserinfo tuser = getUserInfo();
			if(tuser != null){
				//用户执行大客户绑定 
				String bindRe =getUserBindInfo(tuser.getUSERNO(),(String)session.getAttribute("type"),(String)session.getAttribute("user_id")); 
				JSONObject bindObj = JSONObject.fromObject(bindRe);
				
				if(!bindObj.isNullObject()){
					
					if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.NEW_OK)){
						logger.info("用户信息绑定成功===aplipay bind sucess");
						response.getWriter().print("success");
						return null;
						
					}else if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.SJHM_BIND)){
						session.setAttribute("message", "该手机号码已经绑定");
						response.getWriter().print(" /rchlw/function/user/setNickName_logistics.jsp");
						return null;
						
					}else if(CommonUtil.getBackValue("errorCode", bindObj).equals(LotErrorCode.WB_BIND)){
						session.setAttribute("message", "该账户已经被绑定，请设置用户名和密码！");
						response.getWriter().print("success");
						//response.getWriter().print("/rchlw/function/user/setNickName_logistics.jsp");
						return null;
						
					}
				}
				session.setAttribute("message", "绑定用户信息出错，请联系客服！");
				response.getWriter().print(" /rchlw/function/user/setNickName_logistics.jsp");
				return null;
			}else{
				session.setAttribute("message", "用户信息不完整，请确认您的信息是否已成功注册！");
				response.getWriter().print(" /rchlw/function/user/setNickName_logistics.jsp");
				return null;
			}
		}catch(Exception e){
			logger.error("绑定用户出异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
			
		}
		
	}
	
	
	
/***
 * QQ 联合登录
 * 	
 */
	
	public String qqUnitedHandlyLogin(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//1.从配置文件中获取请求地址内容
			Map<String, String> qqLoginUrl = ResourceBundleUtil.MAPQQLOGINURL;
			logger.info("从配置文件中获取的QQ返回请求地址:"+qqLoginUrl);
			Set<Map.Entry<String, String>> setRetUrlLogin = qqLoginUrl.entrySet(); 
			Set<String> keySet = qqLoginUrl.keySet();
			//得到当前域名
			String str = request.getServerName();
			String retloginUrl = "";
			//获取配置文件中QQ登录后的返回地址做为返回参数
			for (String key : keySet) {
				if (qqLoginUrl.containsKey(key)) {//判断这个键是否存在
					for (Map.Entry<String, String> entry : setRetUrlLogin) {
						if(str.indexOf(entry.getKey())>-1){	
							retloginUrl = entry.getValue();	
						}
					}
				}
			}
			logger.info("获取的登录地址(get login address:>>>>)retloginUrl:"+retloginUrl);
			String return_url = retloginUrl;
			session.setAttribute("return_url", return_url);
			//2.QQ登录页面的参数
			String qq_app_id = this.getOnlyId();
			String[] params = new String[] {
				"response_type=code",
				"client_id="+qq_app_id,
				"redirect_uri="+return_url
			};			
		
			StringBuilder builder = new StringBuilder();
			//切割用&符号链接
			for(String s : params) {
				builder.append(s).append("&");
			}
			logger.info("参数为:(params is :)"+builder);
			builder.deleteCharAt(builder.length() - 1);
			//获取请求地址跳转到QQ登录页面
			String url =  ResourceBundleUtil.QQ_AUTHORIZATION_CODE_URL + "?" + builder.toString();
			logger.info("QQ登录地址是:(QQ login address :)"+url);
			response.sendRedirect(url);
			return null;
		} catch (Exception e) {
			logger.error("调用QQ登录出地址出现异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
		}
		
	}
	
	
	
	
	
	public String qqUnitedLogin(){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
				//1.获取QQ返回参数code
				Map<String,String> params = new HashMap<String,String>();
				Map requestParams = request.getParameterMap();
				for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
					String name = (String) iter.next();
					String[] values = (String[]) requestParams.get(name);
					String valueStr = "";
					for (int i = 0; i < values.length; i++) {
						valueStr = (i == values.length - 1) ? valueStr + values[i]: valueStr + values[i] + ",";
					}
					params.put(name, valueStr);//将内容封装的map中
				}
				//获取QQ返回的键并获取相应的值
				List<String> keys = new ArrayList<String>(params.keySet());	
				String key = keys.get(0);
			    String value = params.get(key);
			    
				logger.info("QQ登录回调收到参数：(QQ login return params:)"+value.toString());
				session.setAttribute("code", value);
				
				// 2. 根据取到的code 调用 token地址获取 token
				String tokenUrl = ResourceBundleUtil.QQ_ACCESS_TOKEN_URL;
				
				//state参数用于防止CSRF攻击，成功授权后回调时会原样带回
				String rand =Double.toString(Math.random()) ;
				String state = MD5Util.MD5Encode(rand,"UTF-8");
				
				//获取qq_app_id
				String qq_app_id = this.getOnlyId();
				//获取qq_app_key
				String qq_app_key = this.getOnlyKey();
				
				String[] tokenparams = new String[] {
						"grant_type=authorization_code",
						"client_id="+qq_app_id,
						"client_secret="+qq_app_key,
						"code="+value,
						"state="+state,
						"redirect_uri="+session.getAttribute("return_url")
					};
				
				StringBuilder builder = new StringBuilder();
				//切割用&符号链接
				for(String s : tokenparams) {
					builder.append(s).append("&");
				}
				builder.deleteCharAt(builder.length() - 1);
				
				String url = tokenUrl+"?"+builder.toString();
				logger.info("QQ登录获取token参数的地址是:(QQ login address :)"+url);

				String getValue = JSONReslutUtil.getResultMessage(url);
				logger.info("获取到的返回数据是:(geted returned values is:)"+getValue);
				
				String access_token = getValue.split("&")[0].split("=")[1];
				logger.info("access_token is:"+access_token);
				session.setAttribute("access_token", access_token);
				
				//3.根据access_token获得对应用户身份的openid    ?access_token=YOUR_ACCESS_TOKEN
				String getUserIdUrl = ResourceBundleUtil.QQ_GETUSERID_URL+"?access_token="+access_token;
				String getUserIdValue = JSONReslutUtil.getResultMessage(getUserIdUrl);
				logger.info("通过access_token 得到的数据是:(passed access_token geted values:)"+getUserIdValue);
				
				JSONObject jsonValues = JSONObject.fromObject(getUserIdValue.substring(10,getUserIdValue.length()-3));
				String openId = jsonValues.getString("openid");
				//从配置文件中获取请求地址内容
				Map<String, String> qqappId_all = ResourceBundleUtil.QQ_APP_ID;
				logger.info("从配置文件中获取的appid:"+qqappId_all);
				Set<Map.Entry<String, String>> setRetUrlLogin = qqappId_all.entrySet(); 
				Set<String> keySet = qqappId_all.keySet();
				//得到当前域名
				String str = request.getServerName();
				String oauth_key = "";
				//获取配置文件中QQ登录后的返回地址做为返回参数
				for (String appkey : keySet) {
					if (qqappId_all.containsKey(appkey)) {//判断这个键是否存在
						for (Map.Entry<String, String> entry : setRetUrlLogin) {
							if(str.indexOf(entry.getKey())>-1){	
								oauth_key = entry.getValue();	
							}
						}
					}
				}
				 
				logger.info("获取到的openid是:(geted openid is:)"+openId);
				session.setAttribute("user_id", openId);
				
				//4.根据token、openid 调用user_info 接口获取用户信息?access_token=YOUR_ACCESS_TOKEN&oauth_consumer_key=YOUR_APP_ID&openid=YOUR_OPENID
				String userinfoparams="access_token="+access_token+
				"&oauth_consumer_key="+oauth_key+//+qq_app_key+
				"&openid="+openId;
				logger.info("获取用户信息所有的参数为:(getuserinfoes all params is :)"+userinfoparams);
				//访问openAPI
				String getUserInfoes = Http.get(ResourceBundleUtil.QQ_GETUSERINFO_URL,userinfoparams);
				logger.info("获取到用户的所有的信息是:(get userinfoes values is: )"+getUserInfoes);
				
				String qqchannel = ResourceBundleUtil.QQ_CHANNEL;
				String qqtype = ResourceBundleUtil.QQ_TYPE;
				
				session.setAttribute("channel", qqchannel);
				session.setAttribute("type",qqtype);
				
				//根据user_id type 查询用户是否是大用户
				String getbiguserinfo = getBigUser(openId,qqtype);
				JSONObject obj = JSONObject.fromObject(getbiguserinfo);
				if(CommonUtil.getBackValue("errorCode", obj).equals(LotErrorCode.NEW_OK)){
					//根据查询出来的大用户信息，判断页面跳转地址
					byBindUserInfo(obj);
				}else{
					response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
				}
			return null;
			
		} catch (Exception e) {
			logger.error("获取QQ登录返回code出现异常Exception="+e.toString());
			e.printStackTrace();
			return "error";
		}

		
	} 
	
	
	//提出绑定接口
	public String getUserBindInfo(String userno,String type,String outuserno) throws Exception{
	
		String  re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/tbiguserinfoes/bind?",
			"userno="+userno
			+"&type="+type
			+"&outuserno="+outuserno, "POST");
		logger.info("用户绑定返回信息:(binded returned info:)"+re);
		return re;
	}
	
	/**根据outuserno和type查询绑定信息（查大用户）
	 * 
	 * @param outuserno   外来用户id 
	 * @param type        
	 * @return 
	 * @throws Exception
	 */
	
	public String getBigUser(String outuserno,String type) throws Exception{
	
		String  re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL 
				+ "/tbiguserinfoes?json&find=BigUser&outuserno=" + outuserno+"&type="+type);
		logger.info("查询大客户信息内容返回:(biguserinfo:)"+re);
		return re;
	}
	
	
	/***根据查询出来的用户绑定信息，判断
	 * 
	 * @param obj   查询出来的大用户信息, 是大用户/不是大用户的跳转页面
	 * @return
	 * @throws Exception
	 */
	
	public String byBindUserInfo(JSONObject obj)throws Exception{
		
		//根据userno 查用户信息
		JSONObject userinfo = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
		String userno = CommonUtil.getBackValue("userno",userinfo);
		logger.info("查询大客户信息返回的userno是:>>>>(biguserinfo:)"+userno);
		
		JSONObject userinfoes = JSONObject.fromObject(
				JSONReslutUtil.getResultMessage(
						ResourceBundleUtil.LINKURL + "/tuserinfoes?json&find=ByUserno&userno=" + userno));
		
		logger.info("根据userno--"+userno+"***查到的用户信息是:>>>>(biguserinfo:)"+userinfoes);
		if(!userinfoes.isNullObject()){
			
			Tuserinfo user = Tuserinfo.setJson(userinfo);
			//将注册完的用户存入session中
			String username=user.getUSERNAME();
			session.setAttribute("moneyShowType", "hide");
			session.setAttribute("CHANNEL", user.getCHANNEL());
			
			//已经绑定调用大客户的登录方法执行登录
			boolean loginFlag = getBigLogin(CommonUtil.getBackValue("userno", userinfo),request);
			if(loginFlag){
				if("null".equals(username)||"".equals(username)||username==null || username==" "){
					//登录成功后若用户没有昵称跳转到输入昵称的页面，输入用户昵称
					session.setAttribute("message", "登录成功，请选择账户类型。");
					response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
					return null;
				}else{
					request.setAttribute("userinfo",userinfo);
					JSONReslutUtil.changeUserInfo(request);
					response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/index.jsp'</script>");
					return null;
				}
			}else{
				session.setAttribute("message", MessageUtil.TIAW_login_ExceptionMsg);
				response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
				return null;
			}
		}else{
			response.getWriter().print("<script language='javascript'>window.location.href='/rchlw/function/user/setNickName_logistics.jsp'</script>");
		}
		return null;
		
	}
	
	/**
	 * 获取唯一的的：qq_app_id
	 * @return
	 */
	public String getOnlyId(){
		//1.从配置文件中获取参数信息
		Map<String, String> qq_app_idAll = ResourceBundleUtil.QQ_APP_ID;
		Set<Map.Entry<String, String>> setRetUrlLogin = qq_app_idAll.entrySet(); 
		Set<String> keySet = qq_app_idAll.keySet();
		//得到当前域名
		String str = request.getServerName();
		String qq_app_id = "";
		//获取配置文件中与当前域名相对应的值
		for (String key : keySet) {
			if (qq_app_idAll.containsKey(key)) {//判断这个键是否存在
				for (Map.Entry<String, String> entry : setRetUrlLogin) {
					if(str.indexOf(entry.getKey())>-1){	
						qq_app_id = entry.getValue();	
					}
				}
			}
		}
		logger.info("获取的qq_app_Id(get qq_app_Id:>>>>)qq_app_id:"+qq_app_id);
		return qq_app_id;
	}
	
	
	/**获取qq_app_key
	 *  
	 * @return
	 */
	
	public String getOnlyKey(){
		//1.从配置文件中获取参数信息
		Map<String, String> qq_app_keyAll = ResourceBundleUtil.QQ_APP_KEY;
		Set<Map.Entry<String, String>> setRetUrlLogin = qq_app_keyAll.entrySet(); 
		Set<String> keySet = qq_app_keyAll.keySet();
		//得到当前域名
		String str = request.getServerName();
		String qq_app_key = "";
		//获取配置文件中与当前域名相对应的值
		for (String key : keySet) {
			if (qq_app_keyAll.containsKey(key)) {//判断这个键是否存在
				for (Map.Entry<String, String> entry : setRetUrlLogin) {
					if(str.indexOf(entry.getKey())>-1){	
						qq_app_key = entry.getValue();	
					}
				}
			}
		}
		logger.info("获取的qq_app_key(get qq_app_key:>>>>)qq_app_key:"+qq_app_key);
		return qq_app_key;
	}
	
	
	public String registerUser (){
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String yzm = session.getAttribute("rand").toString();
			String inputyzm = request.getParameter("inputyzm")==null || request.getParameter("inputyzm")=="undefind"?"":request.getParameter("inputyzm").toString();

			if(!yzm.equals(inputyzm)){
				session.setAttribute("message","请输入正确的验证码！");
				response.getWriter().print("yzmwrong");
				return null;
			}
			
			
			String username="";
			String isIe=request.getParameter("isIe");
			if(request.getParameter("msie")!=null){
				if(request.getParameter("msie").equals("1") && !"中文".equals(isIe)){
					username = request.getParameter("username").trim()=="undefined"?"":request.getParameter("username");
				}else{
					username = URLEncoder.decode(request.getParameter("username"));
				}
			}else{
				if("中文".equals(isIe)){
					username = URLEncoder.decode(request.getParameter("username"));
				}else{
					username = request.getParameter("username").trim()=="undefined"?"":request.getParameter("username");
				}
			}
			String password = request.getParameter("password").toString();
			String agencyNo = (String)session.getAttribute("agencyNo");
			String type = session.getAttribute("type").toString();
			String channel = session.getAttribute("channel").toString();
			String email = (String) request.getSession().getAttribute("email");
			String real_name = (String) (request.getSession().getAttribute("name")==null?" ":request.getSession().getAttribute("name"));
			String card_id = (String) (request.getSession().getAttribute("cert_no")==null ||request.getSession().getAttribute("cert_no")==""?"111111111111111111":request.getSession().getAttribute("cert_no"));
			String mobile = (String) request.getSession().getAttribute("mobile");
			
			
			//调用新接口执行注册
			String params = "accesstype="+Constant.WEB_AGENCYNO 
				+"&agencyno="+CommonUtil.processChannelId(agencyNo==null?"000000":agencyNo)
				+"&channel="+channel+"&info=ruyicai&leave=1&state=&userName="+username
				+"&password="+password+"&name="+real_name
				+"&certid="+card_id;
			if(email!=null && email.indexOf("@")>0){
				params = params +"&email="+email;
			}
			if(mobile!=null){ params =params +"&mobileid="+mobile;}
			params = params+"&type="+type;
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL +"/tuserinfoes/register?",
						params,"POST");
			
			JSONObject jsonre = JSONObject.fromObject(re);
			logger.info("注册返回值："+re);
			if("0".equals(jsonre.getString("errorCode"))){
				JSONObject jsonvalue = jsonre.getJSONObject("value");
				Tuserinfo user = Tuserinfo.setJson(jsonvalue);
				String loginfo = JSONReslutUtil.getResultMessage(ResourceBundleUtil.USERSCENTERURL +"user/center!loginForUserno?",
						"userno="+user.getUSERNO(),"POST");
				
				if("0".equals(JSONObject.fromObject(loginfo).getString("errorCode"))){
					//让投注金额显示或者隐藏 show为显示
					session.setAttribute("moneyShowType", "hide");
					String jessionid = JSONObject.fromObject(loginfo).getString("jsessionid");
					pageCookie(jessionid);
					response.getWriter().print("success");
					return null;
				}else{
					response.getWriter().print("loginfailed");
				}

			}if("0013".equals(jsonre.getString("errorCode"))){
				response.getWriter().print("inforegistered");
			}else{
				response.getWriter().print("registerfailed");
			}
			return null;
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
	
}
