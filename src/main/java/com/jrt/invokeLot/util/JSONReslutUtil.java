package com.jrt.invokeLot.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ResourceBundle;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.ruyicai.util.URLEncoder;

public class JSONReslutUtil {
	private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai");
	private static String baseUrl = rbint.getString("baseUrl");
	private static String usersCenterUrl = rbint.getString("usersCenterUrl");
	private static Logger logger = Logger.getLogger(JSONReslutUtil.class);

	/**
	 * 
	 * 调用jrtLot的接口
	 * 
	 * @param paras
	 *            值
	 * @param where
	 *            按条件查询
	 * @param sessionid
	 *            用户登录的session
	 * @param action
	 *            调用jrtLot的Action类名
	 * @param method
	 *            方法名
	 * @return String 传递给jrtLot的值
	 */
	public static String getSelectJSONArray(JSONObject para, JSONObject where,
			String sessionid, String action, String method) throws Exception {
		IHttp http = new IHttp();
		String paras = "{}", wheres = "{}";

		if (action.equals("WithdrawTeviewAction.do")) {
			// 提交内容
			if (para != null) {
				paras = URLEncoder.encode(URLEncoder.encode(para.toString()));
			}
			// 查询的条件
			if (where != null) {
				wheres = URLEncoder.encode(URLEncoder.encode(where.toString()));
			}

		} else {
			// 提交内容
			if (para != null) {
				paras = URLEncoder.encode(para.toString());
			}
			// 查询的条件
			if (where != null) {
				wheres = URLEncoder.encode(where.toString());
			}
		}
		logger.info(baseUrl + action + ";jsessionid=" + sessionid + "?method="
				+ method + "&jsonString=" + paras + "&jsonWhere=" + wheres);
		// 调用接口发送到后台
		String re = http.getViaHttpConnection(baseUrl + action + ";jsessionid="
				+ sessionid + "?method=" + method + "&jsonString=" + paras
				+ "&jsonWhere=" + wheres);
		if (re == null || re.equals(""))
			return "{error_code:000047}";

		return re;
	}

	/**
	 * 
	 * 请求jrtLot的合买返回串
	 * 
	 * @param: parasName jrtLot要传的名称
	 * @param: paras请求的参数
	 * @param: sessionid 用户登录的id
	 * @param: action jrtLot的action的名称
	 * @param: method jrtLot的方法名称
	 * @return 返回jrtLot返回的内容
	 * 
	 */
	public static String getHemaiJSONArray(JSONObject paras, String parasName,
			String sessionid, String action, String method) {
		IHttp http = new IHttp();

		String para = URLEncoder.encode(paras.toString());

		logger.debug("合买 !!!!!!!!!!!!!!!!!para=" + paras);

		logger.info(baseUrl + action + ";jsessionid=" + sessionid + "?method="
				+ method + "&" + parasName + "=" + para);

		// 调用接口发送到后台
		String re = http.getViaHttpConnection(baseUrl + action + ";jsessionid="
				+ sessionid + "?method=" + method + "&" + parasName + "="
				+ para);

		if (re == null || re.equals(""))
			return "{error_code:000047}";

		return re;
	}

	/**
	 * @param url
	 *            请求的新接口路径
	 * @return
	 * @throws IOException
	 */
	public static String getResultMessage(String url) throws IOException {
		try {
			IHttp http = new IHttp();
			logger.info("get方式:url=" + url);
			String re = http.getViaHttpConnection(url);
			return re;
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		return "";
	}

	public static String getuserResultMessage(String url, String parameter,
			String method) {
		String retStr = "";
		try {
			URL reqUrl = new URL(url);
			logger.debug("访问地址:" + url + "?" + parameter);
			HttpURLConnection reqConn = (HttpURLConnection) reqUrl
					.openConnection();
			reqConn.setDoOutput(true);
			reqConn.setDoInput(true);
			reqConn.setConnectTimeout(300 * 1000);
			reqConn.setReadTimeout(300 * 1000);
			reqConn.setRequestMethod(method);
			PrintWriter out = new PrintWriter(reqConn.getOutputStream());
			out.print(parameter);
			out.flush();
			out.close();
			BufferedReader in = new BufferedReader(new InputStreamReader(
					reqConn.getInputStream(), "UTF-8"));
			retStr = in.readLine();
			return retStr;
		} catch (IOException e) {
			logger.info("URL转换POST方式异常" + url + "?" + parameter);
			e.printStackTrace();
			throw new RuntimeException("后台错误,返回" + retStr);
		}
	}

	/**
	 * @param url
	 *            请求的新接口路径
	 * @param method
	 *            请求方式（post）
	 * @return
	 * @throws IOException
	 */
	public static String getResultMessage(String url, String params,
			String method) throws IOException {
		String re = "";
		URL sendurl = new URL(url);
		HttpURLConnection httpUrl = (HttpURLConnection) sendurl
				.openConnection();
		httpUrl.setDoInput(true);
		httpUrl.setDoOutput(true);
		httpUrl.setUseCaches(false);
		httpUrl.setConnectTimeout(300 * 1000);
		httpUrl.setReadTimeout(300 * 1000);
		httpUrl.setInstanceFollowRedirects(true);
		httpUrl.setRequestMethod(method);// POST||GET
		logger.info("put-url:" + url + "\n" + httpUrl.getURL() + params + "\n");
		httpUrl.connect();
		httpUrl.getOutputStream().write(params.getBytes("UTF-8"));
		PrintWriter out = new PrintWriter(httpUrl.getOutputStream());
		out.flush();
		out.close();
		BufferedReader in = new BufferedReader(new InputStreamReader(
				httpUrl.getInputStream(), "UTF-8"));
		while (in.ready()) {
			re = re + in.readLine();
			httpUrl.disconnect();
			logger.debug("POST SUBMIT TO SERVICE reString: " + re);
		}
		return re;
	}

	/**
	 * 通过url 发送请求连接地址 此方法适用于 GET方式提交的，并且要求无时间间隔的异步执行 当前用于，首页合买推荐 ， 合买中心 合买大厅，
	 * 参与合买之后生成静态页面。
	 * 
	 * @author zhaokailong
	 */
	public static void sendUrl(String param) {
		try {
			URL url = new URL(param);
			HttpURLConnection httpUrlConnection = (HttpURLConnection) url
					.openConnection();
			// 设置是否从httpUrlConnection读入，默认情况下是true;
			httpUrlConnection.setDoInput(true);
			httpUrlConnection.setRequestProperty("Content-type",
					"application/x-java-serialized-object");
			// 设定请求的方法为"POST"，默认是GET
			httpUrlConnection.setRequestMethod("GET");
			// 设置为3 毫秒超时失效
			httpUrlConnection.setConnectTimeout(3000);
			httpUrlConnection.setReadTimeout(1);
			httpUrlConnection.connect();// 发送请求
		} catch (Exception e) {
			logger.info("合买发送静态页面生成命令失败！");
		}

	}

	/**
	 * 获取用户的userNo
	 * 
	 * @param request
	 * @return 发生异常将返回 null 正确取值 将返回一个json对象 用户已经登录 在errorCode 会返回0
	 */
	public static JSONObject getUserNo(HttpServletRequest request) {
		String jsessionid = getJsessionIdToCookies(request);
		logger.info("获取用户信息getUserNo,jsessionid=" + jsessionid);
		if (jsessionid != null) {
			try {
				String obj = getResultMessage(usersCenterUrl
						+ "user/center!getUserNo;jsessionid=" + jsessionid
						+ "?", "a=" + Math.random(), "POST");
				logger.info("获取用户信息返回结果getUserNo:" + obj);
				if (StringUtils.isBlank(obj)) {
					return null;
				} else {
					return JSONObject.fromObject(obj);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 获取用户的userInfo
	 * 
	 * @param request
	 * @return 发生异常将返回 null 正确取值 将返回一个json对象 用户已经登录 在errorCode 会返回0
	 */
	public static JSONObject getUserInfo(HttpServletRequest request) {
		String jsessionid = getJsessionIdToCookies(request);
		logger.info("获取用户信息getUserInfo,jsessionid=" + jsessionid);
		if (jsessionid != null) {
			try {
				String obj = getResultMessage(usersCenterUrl
						+ "user/center!getUserInfo;jsessionid=" + jsessionid
						+ "?", "a=" + Math.random(), "POST");
				logger.info("获取用户信息返回结果getUserInfo:" + obj);
				if (StringUtils.isBlank(obj)) {
					return null;
				} else {
					return JSONObject.fromObject(obj);
				}
			} catch (Exception e) {
				logger.info("登录信息查询出现异常getUserInfo[URL：" + usersCenterUrl
						+ "user/center!getUserInfo;jsessionid=" + jsessionid
						+ "?a=" + Math.random() + "]");
			}
		}
		return null;
	}

	/**
	 * 获取用户的userInfo 退出
	 * 
	 * @param request
	 * @return 发生异常将返回 null 正确取值 将返回一个json对象 用户已经登录 在errorCode 会返回0
	 */
	public static void logoutUser(HttpServletRequest request) {
		String jsessionid = getJsessionIdToCookies(request);
		if (jsessionid != null) {
			try {
				getResultMessage(usersCenterUrl
						+ "user/center!logout;jsessionid=" + jsessionid + "?",
						"a=" + Math.random(), "POST");
			} catch (IOException e) {
				logger.info("用户退出出现异常，无大碍");
			}
		}
	}

	/**
	 * 此方法 用来调用users项目中方法 实现修改缓存中的属性值
	 * 
	 * JSONObject.fromObject(getResultMessage(
	 * usersCenterUrl+"user/center!getUserInfo;jsessionid="
	 * +jsessionid+"?","a="+Math.random(),"POST"));
	 */
	public static String changeUserInfo(HttpServletRequest request) {
		try {
			String jsessionid = getJsessionIdToCookies(request);
			if (jsessionid != null) {
				JSONObject userinfo = (JSONObject) request
						.getAttribute("userinfo");
				JSONObject js = JSONObject.fromObject(getResultMessage(
						usersCenterUrl + "user/center!editUserInfo;jsessionid="
								+ jsessionid + "?", "a=" + Math.random()
								+ "&userinfo=" + userinfo.toString(), "POST"));
				if (js.getString("errorCode").equals("0")) {
					logger.info("修改用的缓存信息成功");
					return js.getString("errorCode");
				}
			}
		} catch (Exception e) {
			logger.info("修改用的缓存信息失败");
		}
		return null;
	}

	public static String getJsessionIdToCookies(HttpServletRequest request) {
		String cookieName = "userInfoId";
		// 判断cookie是否已经存在
		Cookie[] userCookies = request.getCookies();
		if (userCookies == null || userCookies.equals("null")) {
			return null;
		} else {
			if (userCookies.length > 1) {
				for (int i = 0; i < userCookies.length; i++) {
					if (userCookies[i].getName().equals(cookieName)) {
						return userCookies[i].getValue();
					}
				}
			}
			return null;
		}
	}

}
