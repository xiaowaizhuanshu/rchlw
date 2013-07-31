package com.ruyicai.web.action;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.CodeUtil;
import com.jrt.betcodeResolve.util.Constant;
import com.jrt.betcodeResolve.util.SSCConstant;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.jrt.invokeLot.util.LotErrorCode;
import com.ruyicai.bean.CashBean;
import com.ruyicai.bean.ChargeBean;
import com.ruyicai.bean.ComplementBan;
import com.ruyicai.bean.Tuserinfo;
import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.ErrorCode;
import com.ruyicai.util.FinalVar;
import com.ruyicai.util.InvokeLotteryUtil;
import com.ruyicai.util.LogListener;
import com.ruyicai.util.MessageUtil;
import com.ruyicai.util.NameUtil;
import com.ruyicai.util.ResourceBundleUtil;
import com.ruyicai.util.TorderState;
import com.ruyicai.util.URLEncoder;
import com.ruyicai.util.UtilEmail;
import com.ruyicai.util.UtilGetEmailUrl;
import com.ruyicai.util.MD5.PaySign;
import com.ruyicai.web.pojo.PhoneInfo;
import com.ruyicai.web.service.PhoneInfoService;

/**
 * 
 * 用户信息的action
 *
 */
@SuppressWarnings("serial")
public class TuserinfoAction extends BaseAction {
	private static Logger logger = Logger.getLogger(TuserinfoAction.class);

	public TuserinfoAction() {
		super();
	}

	private PhoneInfoService phoneInfoService;

	public PhoneInfoService getPhoneInfoService() {
		return phoneInfoService;
	}

	public void setPhoneInfoService(PhoneInfoService phoneInfoService) {
		this.phoneInfoService = phoneInfoService;
	}

	private Tuserinfo tuserinfo = new Tuserinfo();//用户
	private ComplementBan complementBan = new ComplementBan();//修改密码
	private CashBean cashBean = new CashBean();//提现信息
	private JSONObject jsonResult = new JSONObject();
	private Date now = new Date();
	private String inputName;

	private int pageCount = 20;//默认分页每页条数 
	private DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

	private ChargeBean chargeBean = new ChargeBean();

	public ChargeBean getChargeBean() {
		return chargeBean;
	}

	public void setChargeBean(ChargeBean chargeBean) {
		this.chargeBean = chargeBean;
	}

	private JSONObject jsonRoot = new JSONObject();

	public String getInputName() {
		return inputName;
	}

	public void setInputName(String inputName) {
		this.inputName = inputName;
	}

	public JSONObject getJsonResult() {
		return jsonResult;
	}

	public void setJsonResult(JSONObject jsonResult) {
		this.jsonResult = jsonResult;
	}

	public CashBean getCashBean() {
		return cashBean;
	}

	public void setCashBean(CashBean cashBean) {
		this.cashBean = cashBean;
	}

	public ComplementBan getComplementBan() {
		return complementBan;
	}

	public void setComplementBan(ComplementBan complementBan) {
		this.complementBan = complementBan;
	}

	public Tuserinfo getTuserinfo() {
		return tuserinfo;
	}

	public void setTuserinfo(Tuserinfo tuserinfo) {
		this.tuserinfo = tuserinfo;
	}

	public static final String INTERFACE_KEY = "ruyicai";
	// ==================================================公用文件上传方法
	private File upload;
	private String fileName;
	private String uploadContentType;

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadFileName() {
		return fileName;
	}

	public void setUploadFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	// 获取图片生成路径的主路径 
	private static String uploadLocation = ResourceBundleUtil.file_upload;

	//接口交互密钥

	//=====================================================================================================
	//========================================新接口===========================================↑↑↑↑↑↑↑↑↑↑
	//=====================================================================================================
	/**
	 * 保存金额显示隐藏的状态
	 */
	public void setMoneryDivShowType() {
		String divShowType = request.getParameter("divShowType");
		session.setAttribute("moneyShowType", divShowType);
	}

	/**|
	 * 查询手机号码是否被占用
	 */
	public void queryMobile() {
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			//调用接口查询昵称是否被占用,占用则返回1,未被使用则返回0
			String mobile = request.getParameter("mobile") == "" ? request.getParameter("mobile") : request
					.getParameter("mobile");
			JSONObject jsonObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes?json&find=ByMobileid&mobileid=" + mobile));
			String errorcode = jsonObject.getString("errorCode");
			String outStr = "1";

			if (errorcode.equals(LotErrorCode.NEW_OK)) {
				if (JSONObject.fromObject(CommonUtil.getBackValue("value", jsonObject)).getString("state").equals("1")) {
					request.setAttribute("message", "该手机号码已被注册，请换用其他手机号码注册或用该手机号码登录。");
					logger.debug("用户手机号码已经存在，状态为1！");
					outStr = "1";
				}
				if (JSONObject.fromObject(CommonUtil.getBackValue("value", jsonObject)).getString("state").equals("2")) {
					request.setAttribute("message", "该账户处于待激活状态，请联系客服400-856-1000重新激活");
					logger.debug("用户手机号码已经存在，处于待激活状态！");
					outStr = "1";
				}
				if (JSONObject.fromObject(CommonUtil.getBackValue("value", jsonObject)).getString("state").equals("0")) {
					logger.debug("用户手机号码已经存在，但处于关闭状态！可以注册");
					outStr = "0";
				}
			} else {
				outStr = "0";
			}
			out.print(outStr);
			logger.info("根据手机号码查询到的用户信息是：" + jsonObject);

		} catch (Exception e) {
			request.setAttribute("message", "服务器内部发生故障!");
			logger.error("查询手机号码发生错误！" + e.toString());
		}
	}

	/**
	 * 
	 * 博雅彩点卡充值
	 * @return  json
	 * 
	 */
	public String rycCardCharge(Tuserinfo user) {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			logger.info("=====博雅彩点卡充值开始=====");

			//从页面得到用户输入的卡号和密码
			String cardid = (String) session.getAttribute("cardno");
			String cardpwd = (String) session.getAttribute("cardpwd");

			// 3.调用jrtLot接口执行查询
			JSONObject paras = new JSONObject();

			//博雅彩点卡充值需要的参数是：userno chargetype cardno cardpwd channel subchannel bankid paytype accesstype agencyno
			paras.put("userno", user.getUSERNO());
			paras.put("cardno", cardid);
			paras.put("chargetype", "2");
			paras.put("cardpwd", cardpwd);
			paras.put("channel", (String) request.getSession().getAttribute("CHANNEL"));
			paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			paras.put("bankid", "ryc001");
			paras.put("paytype", "0300");
			paras.put("accesstype", Constant.WEB_AGENCYNO);
			paras.put("agencyno", "");

			//调用新接口博雅彩点卡充值接口

			logger.info("博雅彩点卡充值接口地址>>>" + ResourceBundleUtil.MSBANKURL
					+ "/ruyicaicardcharge!ruyicaiCardCharge?jsonString=" + paras.toString());

			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/ruyicaicardcharge!ruyicaiCardCharge?", "jsonString=" + URLEncoder.encode(paras.toString()),
					"POST"));

			logger.info("博雅彩点卡充值接口返回值>>>" + obj);

			if (obj != null) {
				logger.info("博雅彩点卡充值jrtLot返回(博雅彩点卡 recharge jrtLot Back):" + obj.toString());
				jsonRoot.put("flag", true);
				jsonRoot.put("jsonValue", obj);
				response.getWriter().print(jsonRoot.toString());
			}

		} catch (Exception e) {
			logger.error("博雅彩点卡账户充值异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	/**
	 * 注册时验证用户输入的点卡的渠道是否是博雅彩点卡（channel为2）
	 * @throws IOException 
	 */
	public void getChannel() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		try {
			//从页面得到用户输入的卡号和密码
			String cardid = request.getParameter("cardid");
			String cardpwd = request.getParameter("cardpwd");
			String message = "";

			//调用方法查询渠道号是否是2（2代表是如意卡用户）
			JSONObject paras = new JSONObject();
			paras.put("cardno", cardid);
			paras.put("cardpwd", cardpwd);

			String backchannel = JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/ruyicaicardcharge!getChannel?jsonString=" + URLEncoder.encode(paras.toString()));

			if (JSONObject.fromObject(backchannel).getString("error_code").equals(LotErrorCode.NEW_OK)) {
				String cardchannel = JSONObject.fromObject(backchannel).getString("value").split("\\|")[0];
				String cardtype = JSONObject.fromObject(backchannel).getString("value").split("\\|")[1];
				if (cardtype.equals("2")) {
					session.setAttribute("cardno", cardid);
					session.setAttribute("cardpwd", cardpwd);
					session.setAttribute("cardchannel", cardchannel);
					message = "2";
				} else {
					message = "您输入的如意卡账号或密码错误，请重新输入！";
				}
			} else {
				message = "您输入的如意卡账号或密码错误，请重新输入！";
			}
			logger.info("校验点卡信息查询到的用户信息是：" + backchannel);

			out.print(message);

		} catch (Exception e) {
			logger.info("校验点卡信息发生异常！");
			out.print("校验点卡信息发生异常，请联系客服人员！");
		}
	}

	/**
	 * 查询用户输入的当前密码和数据库中记录是否相同
	 * @throws IOException 
	 */
	public void changeoldpassword() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=UTF-8");
		// 1.判断用户是否登录
		try {
			PrintWriter out = response.getWriter();
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String old_pass = PaySign.EncoderByMd5(complementBan.getOld_pass());
			if (!user.equals(null) || user.equals("")) {

				//将输入密码进行md5转换，并与用户密码进行比较
				String oldpass = user.getPASSWORD();
				String msg = "";
				if (old_pass.equals(oldpass)) {
					msg = "true";
				} else {
					msg = "false";
				}
				out.print(msg);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 查询用户名是否存在
	 */

	public String changeUserName() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String username = "";
			String isIe = request.getParameter("isIe");
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					username = URLEncoder.decode(request.getParameter("username").trim() == "undefined" ? "" : request
							.getParameter("username"));
				} else {
					username = request.getParameter("username");
				}
			} else {
				if ("中文".equals(isIe)) {
					username = request.getParameter("username");
				} else {
					username = URLEncoder.decode(request.getParameter("username").trim() == "undefined" ? "" : request
							.getParameter("username"));
				}
			}
			if (username != username.trim()) {
				response.getWriter().print("用户名不可以输入空格，请重新输入！");
				return null;
			}
			String user = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes?",
					"json&find=ByUserName&userName=" + username + "&state=1", "POST");
			JSONObject userinfo = JSONObject.fromObject(user).getJSONObject("value");
			logger.info("根据用户名查到的用户信息是：" + userinfo);
			if (userinfo.isEmpty() || userinfo.getInt("state") != 1) {
				//用户名不存在
				session.setAttribute("register_username", username);
				response.getWriter().print("0");
				return null;
			} else {
				//用户名存在
				response.getWriter().print("1");
				return null;
			}

		} catch (Exception e) {
			logger.info("查询用户名是否存在出现异常：" + e.toString());
			return "error";
		}
	}

	/**
	 * 注册修改用户信息
	 */
	public String modifyUserInfo() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			logger.info("获取到的用户信息是：" + user);
			String cardid = (request.getParameter("cardid") == null || request.getParameter("cardid") == "") ? " "
					: request.getParameter("cardid");
			String email = (request.getParameter("email") == null || request.getParameter("email") == "") ? " "
					: request.getParameter("email");
			String nickname = "";
			String name = "";
			String isIe = request.getParameter("isIe");
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					nickname = URLEncoder.decode((request.getParameter("nickname").trim() == "undefined" || request
							.getParameter("nickname").trim() == "") ? " " : request.getParameter("nickname"));
					name = URLEncoder.decode((request.getParameter("name").trim() == "undefined" || request
							.getParameter("name").trim() == "") ? " " : request.getParameter("name"));

				} else {
					nickname = (request.getParameter("nickname").trim() == "undefined" || request.getParameter(
							"nickname").trim() == "") ? " " : request.getParameter("nickname");
					name = (request.getParameter("name").trim() == "undefined" || request.getParameter("name").trim() == "") ? " "
							: request.getParameter("name");
				}
			} else {
				if ("中文".equals(isIe)) {
					nickname = (request.getParameter("nickname").trim() == "undefined" || request.getParameter(
							"nickname").trim() == "") ? " " : request.getParameter("nickname");
					name = (request.getParameter("name").trim() == "undefined" || request.getParameter("name").trim() == "") ? " "
							: request.getParameter("name");
				} else {
					nickname = URLEncoder.decode(request.getParameter("nickname").trim() == "undefined" ? "" : request
							.getParameter("nickname"));
					name = URLEncoder.decode((request.getParameter("name").trim() == "undefined" || request
							.getParameter("name").trim() == "") ? " " : request.getParameter("name"));
				}
			}

			if ("userinfo".equals(request.getParameter("flag"))) {
				if (name.indexOf("*") > -1) {
					name = user.getNAME();
				}
				if (cardid.indexOf("*") > -1) {
					cardid = user.getCERTID();
				}
				if (email.indexOf("*") > -1) {
					email = user.getEMAIL();
				}
			}

			JSONObject re = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes/modify?", "name=" + name + "&nickname=" + nickname + "&certid=" + cardid
					+ "&email=" + email + "&userno=" + user.getUSERNO(), "POST"));

			logger.info("注册修改用户信息时返回数据是:" + re);
			if (CommonUtil.getBackValue("errorCode", re).equals(LotErrorCode.NEW_OK)) {
				JSONObject userinfo = re.getJSONObject("value");
				request.setAttribute("userinfo", userinfo);
				String reerrcode = JSONReslutUtil.changeUserInfo(request);
				if ("0".equals(reerrcode)) {
					logger.info("修改缓存中的用户成功");
					/*-------------增加积分功能（需用户首次完善信息）-------------------*/
					PhoneInfo phoneInfo = new PhoneInfo();
					phoneInfo.setEmail("info" + user.getUSERNO());
					phoneInfo.setRules(1);
					int count = phoneInfoService.queryInfoCountByEmail(phoneInfo);
					if (!(" ".equals(user.getEMAIL()) && user.getMOBILEID() == null
							&& "111111111111111111".equals(user.getCERTID()) && " ".equals(user.getNAME()) && " "
								.equals(user.getNICKNAME())) && count < 1) {
						addUserScore(user.getUSERNO(), null, 1, null, null, null);
						PhoneInfo phoneInfo1 = new PhoneInfo();
						phoneInfo.setEmail("info" + user.getUSERNO());
						phoneInfo.setRules(1);
						phoneInfoService.add(phoneInfo1);
					}
					/*-------------增加积分功能（需用户首次完善信息）-------------------*/
				} else {
					logger.info("修改缓存中用户信息失败");
				}
				response.getWriter().print("success");
				return null;
			} else if (CommonUtil.getBackValue("errorCode", re).equals(LotErrorCode.SJYBD)) {
				response.getWriter().print("您填写的手机号已绑定，请更换别的手机号绑定！");
				return null;
			} else if (CommonUtil.getBackValue("errorCode", re).equals(LotErrorCode.YXYBD)) {
				response.getWriter().print("邮箱已经绑定！");
				return null;
			} else {
				response.getWriter().print("failed");
				return null;
			}

		} catch (Exception e) {
			logger.info("注册修改用户信息出现异常" + e.toString());
			return "error";
		}
	}

	/**
	 * 根据用户名查询密码
	 */
	public void getPasswordByUserName() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		try {
			String username = URLEncoder.decode((request.getParameter("username") == "" || request
					.getParameter("username") == "undefined") ? "" : request.getParameter("username"));
			String old_password = request.getParameter("reg_password") == "" ? "" : request
					.getParameter("reg_password").trim();

			if (username != "") {
				Tuserinfo tuser = (Tuserinfo) session.getAttribute("tuserinfo");

				//将输入密码进行md5转换，并与用户密码进行比较
				String old_pass = PaySign.EncoderByMd5(old_password);
				String oldpass = tuser.getPASSWORD();
				logger.info("输入的密码：" + old_pass + "^^^^^^^" + "查到用户的密码：" + oldpass);
				if (old_pass.equals(oldpass)) {
					response.getWriter().print("true");
				} else {
					response.getWriter().print("false");
				}
			}
			;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * 
	 * @Title:  changePassword
	 * @Description: 修改用户密码
	 * @return:   修改页面
	 * 
	 */
	public String changePassword() {
		logger.info("=====修改用户密码开始====");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			// 1.判断用户是否登录
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			//2.得到用户输入的密码
			request.setAttribute("complementBan", complementBan);
			logger.debug("得到用户输入的信息旧密码:" + complementBan.getOld_pass() + ";新密码:" + complementBan.getNew_pass()
					+ ";确认密码:" + complementBan.getReal_pass());

			//3.判断用户输入的密码是否正确
			if (complementBan.getNew_pass() == null || complementBan.getOld_pass() == null
					|| complementBan.getReal_pass() == null) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_NULL);
				response.getWriter().print("您填写的信息不能为空！");
				return null;
			}
			if (!complementBan.getReal_pass().equals(complementBan.getNew_pass())) {
				request.setAttribute("message", MessageUtil.TIAW_changePassword_NewOldPasswordError);
				response.getWriter().print("确认密码与密码不相同");
				return null;
			}

			if (PaySign.EncoderByMd5(complementBan.getOld_pass()).equals(user.getPASSWORD())) {

				//调用新接口更改用户名密码
				String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?",
						"password=" + complementBan.getNew_pass() + "&userno=" + user.getUSERNO(), "POST");
				JSONObject update = JSONObject.fromObject(re);
				JSONObject updateVal = JSONObject.fromObject(CommonUtil.getBackValue("value", update));
				LogListener.utilLog("修改密码返回的json为是(To change your password is returned json):", re, null, "info",
						"com.ruyicai.web.action.TuserinfoAction.changePassword()");
				logger.debug("得到密码修改新接口的返回码" + CommonUtil.getBackValue("errorCode", update));
				if (updateVal != null && CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.NEW_OK)) {
					user.setPASSWORD(PaySign.EncoderByMd5(complementBan.getNew_pass()));
					// 修改成功， 调用users 方法， 改变缓存中的数据
					JSONObject js = JSONReslutUtil.getUserInfo(request).getJSONObject("value");
					js.remove("password");
					js.put("password", PaySign.EncoderByMd5(complementBan.getNew_pass()));
					request.setAttribute("userinfo", js);
					JSONReslutUtil.changeUserInfo(request);
					request.setAttribute("message", MessageUtil.TIAW_changePassword_Success);
					request.setAttribute("check", 1);//返回成功标识
					response.getWriter().print("changePasswordSuccess");
					return null;
				}
			} else {
				request.setAttribute("message", MessageUtil.TIAW_changePassword_Fail);
				logger.debug("用户输入的原密码错误！");
				response.getWriter().print("您的原密码输入错误!");
				return null;
			}
			return null;
		} catch (Exception e) {
			logger.error("修改用户密码出异常Exception(Modify user password abnormal):" + e.toString());
			return null;
		}

	}

	/**
	 * 
	 * @Title:  changeTuserinfo
	 * @Description: 修改用户信息
	 * @return:   
	 * @exception:
	 */
	public String changeTuserinfo() {
		try {
			logger.info("====修改用户信息开始====");
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			if (user == null) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			}

			//用户数据中文进行转解码
			if (!request.getParameter("china").equals("中文")) {
				tuserinfo.setADDRESS(URLEncoder.decode(tuserinfo.getADDRESS()));
			}

			// 家庭住址
			if (CommonUtil.isStringFilter(tuserinfo.getADDRESS().trim())) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_STRINGFILTER);
				logger.debug(tuserinfo.getADDRESS() + "家庭住址中不能带有特殊字符");
				return "changeTuserinfo";
			}
			// 验证QQ号码格式
			if (!CommonUtil.isQQCode(tuserinfo.getQQ().trim())) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_QQError);
				logger.debug(tuserinfo.getQQ() + "qq格式错误");
				return "changeTuserinfo";
			}

			logger.debug("修改用户信息-根据用户名得到用户的信息：" + user.toString());

			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?", "address="
					+ tuserinfo.getADDRESS() + "&qq=" + tuserinfo.getQQ() + "&userno=" + user.getUSERNO(), "POST");

			JSONObject update = JSONObject.fromObject(re);

			logger.debug("得到用户信息修改新接口的返回码" + CommonUtil.getBackValue("errorCode", update));
			if (CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.SJYBD)) {
				request.setAttribute("message", "个人信息修改失败，用户手机号码已绑定，请重新填写！");
				logger.debug("个人信息修改失败，用户手机号码已绑定，请重新填写！");
				return "changeTuserinfo";
			}
			if (CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.YXYBD)) {
				request.setAttribute("message", "个人信息修改失败，用户邮箱已绑定，请重新填写！");
				logger.debug("个人信息修改失败，用户邮箱已绑定，请重新填写！");
				return "changeTuserinfo";
			}
			if (!update.isNullObject() && CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.NEW_OK)) {
				//修改成功后修改缓存中的用户信息
				JSONObject userinfo = update.getJSONObject("value");
				request.setAttribute("userinfo", userinfo);
				JSONReslutUtil.changeUserInfo(request);

				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_Success);
				return "changeTuserinfo";
			} else {
				request.setAttribute("message", "修改个人信息失败，过程出现异常，请与客服联系！");
				logger.info("修改个人信息失败，过程出现异常，请与客服联系！");
				return "changeTuserinfo";
			}
		} catch (Exception e) {
			logger.error("修改用户信息出异常Exception(Abnormal modify user information):" + e.toString());
			return "error";
		}
	}

	/**
	 * 
	 * @Title:  certidBand
	 * @Description: 身份证绑定
	 * @return:   
	 * @exception:
	 */
	public String certidBand() {
		try {
			logger.info("====身份证绑定开始====");
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			if (user == null) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			}

			//2.得到用户输入的信息
			request.setAttribute("tuserinfo", tuserinfo);
			logger.debug("得到用户输入的信息:" + tuserinfo.getNAME() + ";" + tuserinfo.getCERTID());
			//3.验证用户输入的信息	
			if (tuserinfo.getNAME() == null || tuserinfo.getNAME().equals("") || tuserinfo.getNAME().equals(" ")
					|| tuserinfo.getCERTID() == null || tuserinfo.getCERTID().equals("")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_NULL);
				return "certidBand";
			}

			//用户数据中文进行转解码
			if (!request.getParameter("china").equals("中文")) {
				tuserinfo.setNAME(URLEncoder.decode(tuserinfo.getNAME()));
			}

			// 验证用户名
			if (CommonUtil.isEmptyString(tuserinfo.getNAME()) && !CommonUtil.isEmptyString(tuserinfo.getCERTID())) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_RealNameNotEmpty);
				logger.debug(tuserinfo.getNAME() + "真实姓名为空");
				return "certidBand";
			}

			// 验证身份证号
			if (!CommonUtil.isEmptyString(tuserinfo.getNAME()) && CommonUtil.isEmptyString(tuserinfo.getCERTID())) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_CertidNotEmpty);
				logger.debug(tuserinfo.getCERTID() + "身份证号为空");
				return "certidBand";
			}

			// 验证用户名是否带有特殊字符
			if (CommonUtil.checkName(tuserinfo.getNAME()) != null) {
				request.setAttribute("message", CommonUtil.checkName(tuserinfo.getNAME()));
				logger.debug(tuserinfo.getNAME() + "真实姓名只允许为中文");
				return "certidBand";
			}

			//验证身份证
			if (CommonUtil.checkCardID(tuserinfo.getCERTID()) != null) {
				request.setAttribute("message", CommonUtil.checkCardID(tuserinfo.getCERTID()));
				logger.debug(tuserinfo.getCERTID() + "身份证号格式不正确！");
				return "certidBand";
			}
			if (tuserinfo.getCERTID().equals("111111111111111111") || tuserinfo.getCERTID().equals("111111111111111")) {
				request.setAttribute("message", "身份证号错误，请重新输入！");
				logger.debug(tuserinfo.getCERTID() + "身份证号不正确！");
				return "certidBand";
			}

			//调用新接口修改用户信息
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?", "certid="
					+ tuserinfo.getCERTID() + "&name=" + tuserinfo.getNAME() + "&userno=" + user.getUSERNO(), "POST");

			JSONObject update = JSONObject.fromObject(re);

			logger.info("身份证绑定-得到用户信息修改新接口的返回码" + CommonUtil.getBackValue("errorCode", update));
			if (CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.SJYBD)) {
				request.setAttribute("message", "身份证绑定失败，用户手机号码已绑定，请重新填写！");
				logger.debug("身份证绑定失败，用户手机号码已绑定，请重新填写！");
				return "certidBand";
			}
			if (!update.isNullObject() && CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.NEW_OK)) {

				user.setNAME(tuserinfo.getNAME());
				user.setCERTID(tuserinfo.getCERTID());
				request.setAttribute("message", "身份证绑定成功！");
				return "certidBandSuccess";
			} else {
				request.setAttribute("message", "身份证绑定失败，过程出现异常，请与客服联系！");
				logger.info("身份证绑定失败，过程出现异常，请与客服联系！");
				return "certidBand";
			}

		} catch (Exception e) {
			logger.error("身份证绑定出异常Exception(ID abnormal binding):" + e.toString());
			return "error";
		}
	}

	/**
		 * 
		 * @Title:  loginOut
		 * @Description: 用户登录退出
		 * @return:   首页
		 * @exception:
		 */
	public String loginOut() {
		try {
			String url = request.getParameter("url");
			logger.debug("得到请求的地址url=" + url);
			//得到用户
			JSONReslutUtil.logoutUser(request);
			session.invalidate();
			if (url != null) {
				response.sendRedirect(url);//退出成功后重定向到当前页面
			}
			return null;
		} catch (Exception e) {
			logger.error("用户登录退出异常Exception(Login abnormal exit):" + e);
			return "error";
		}
	}

	/**
	 * 方法用于用户中心提现记录查看详情
	 * 查询某一条订单的详细信息
	 * @return  
	 *     响应查询信息  
	 * 
	 */
	public String getOrderInfo() {
		String id = request.getParameter("id");
		JSONArray list = new JSONArray();
		try {
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/select/getCash?", "id=" + id, "GET"));
			logger.info("根据新接口getCash和订单号id:" + id + "查询提现的详细信息是：》》》" + obj);
			JSONObject oneobj = null;
			if (obj != null && CommonUtil.getBackValue("errorCode", obj).equals(ErrorCode.OK.value)) {
				oneobj = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				logger.info("根据新接口getCash和订单号id:" + id + "查询提现的详细信息的value值是：》》》" + oneobj);

				if ("null".equals(obj.getString("value")) || obj.getString("value") == null
						|| "".equals(obj.getString("value"))) {
					logger.info("根据新接口getCash和订单号id:" + id + "未查询到提现详细信息");
					request.setAttribute("list", list);
				} else {
					//开始处理时间格式
					if (oneobj.get("plattime") != null && !oneobj.get("plattime").toString().equals("null")
							&& !oneobj.get("plattime").toString().equals("")) {
						oneobj.put("plattime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(oneobj
								.getLong("plattime"))));
					}
					if (oneobj.get("checktime") != null && !oneobj.get("checktime").toString().equals("null")
							&& !oneobj.get("checktime").toString().equals("")) {
						oneobj.put("checktime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(oneobj
								.getLong("checktime"))));
					}
					if (oneobj.get("remittime") != null && !oneobj.get("remittime").toString().equals("null")
							&& !oneobj.get("remittime").toString().equals("")) {
						oneobj.put("remittime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(oneobj
								.getLong("remittime"))));
					}
					if (oneobj.get("finishtime") != null && !oneobj.get("finishtime").toString().equals("null")
							&& !oneobj.get("finishtime").toString().equals("")) {
						oneobj.put("finishtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(oneobj
								.getLong("finishtime"))));
					}
					if (oneobj.get("estimatefinishtime") != null
							&& !oneobj.get("estimatefinishtime").toString().equals("null")
							&& !oneobj.get("estimatefinishtime").toString().equals("")) {
						oneobj.put("estimatefinishtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(
								oneobj.getLong("estimatefinishtime"))));
					}
					oneobj.put("amt", CommonUtil.moneySave2(oneobj.getDouble("amt") / 100));

					list.add(oneobj);
					logger.info("根据新接口getCash和订单号id:" + id + "查询提现的详细信息中的时间和数字进行格式处理后value值是：》》》" + oneobj);
					request.setAttribute("list", list);
				}

			}

			return "dingdanxinxi";

		} catch (Exception e) {
			logger.error("调用新接口getCash查询订单号" + id + "的详细提现信息出现异常:" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 
	 * 新接口查询提现的记录
	 * @return  
	 *     响应提现内容  
	 * 
	 */
	public String selectCashState() {
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.parseInt(request
					.getParameter("pageIndex"));
			String beginTime = request.getParameter("beginTime");
			String endTime = request.getParameter("endTime") == null ? new SimpleDateFormat("yyyy-MM-dd").format(now)
					: request.getParameter("endTime");
			int lineNum = request.getParameter("lineNum") == null ? pageCount : Integer.parseInt(request
					.getParameter("lineNum"));
			if (!(endTime == null || endTime.equals("") || endTime.equals("undefined"))) {
				request.setAttribute("stopDate", endTime);
				endTime = endTime.replace("-", "");
			}

			if (!(beginTime == null || beginTime.equals("") || beginTime.equals("undefined"))) {
				request.setAttribute("startDate", beginTime);
				beginTime = beginTime.replace("-", "");
			} else {
				beginTime = "2013-01-01".replace("-", "");
			}
			request.setAttribute("lineNum", lineNum);

			//查询账户余额
			JSONObject objBalance = CommonUtil.getBalance(user.getUSERNO());
			logger.debug("objBalance:" + objBalance);
			request.setAttribute("objBalance", objBalance);

			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/select/getCashs?", "userno=" + user.getUSERNO() + "&beginTime=" + beginTime + "&endTime="
					+ endTime + "&startLine=" + 0 + "&endLine=" + lineNum, "GET"));

			logger.info("调用新接口查询到的提现信息是：》》》" + obj);
			if (obj != null && CommonUtil.getBackValue("errorCode", obj).equals(ErrorCode.OK.value)) {

				LogListener.utilLog("查询提现状态返回的json为(Query is raised for the state to return json):", obj.toString(),
						null, "info", "com.ruyicai.web.action.TuserinfoAction.selectCashState()");
				JSONObject value = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				JSONArray objValue = value.getJSONArray("list");

				JSONArray TodyList = new JSONArray();//今天的记录
				JSONArray YestdayList = new JSONArray();//昨天的记录
				JSONArray MoreOldList = new JSONArray();//更早的记录
				logger.info("查到的value值是：" + objValue);

				//调用查询总记录数和总支出金额数的接口

				JSONObject retObject = InvokeLotteryUtil.getTongjiInfo(beginTime, endTime, user.getUSERNO(),
						new Integer("5"));
				logger.info("查到的总记录数和总支出金额是：》》》" + retObject);
				if (!retObject.isNullObject()
						&& CommonUtil.getBackValue("errorCode", retObject).equals(ErrorCode.OK.value)) {
					JSONObject page = JSONObject.fromObject(retObject.get("value"));
					String totalnumber = page.getString("outnum");
					long totalamt = Long.valueOf(page.getString("outamt")) / 100;
					request.setAttribute("totalnumber", totalnumber);
					request.setAttribute("totalamt", totalamt);
				}

				if (!objValue.isEmpty()) {

					//为每条提现记录算得金额为元
					JSONObject newObjValue = new JSONObject();

					for (int i = 0; i < objValue.size(); i++) {
						JSONObject oneobj = JSONObject.fromObject(objValue.get(i));
						//根据交易时间把记录分组
						Long tody = df.parse(df.format(new Date())).getTime();
						long time = df.parse(df.format(new Date(oneobj.getLong("plattime")))).getTime();

						oneobj.put("cashtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(oneobj
								.getLong("plattime"))));
						oneobj.put("AMT", CommonUtil.moneySave2(oneobj.getDouble("amt") / 100));

						if ("104".equals(oneobj.getString("state"))) {
							if (oneobj.getString("rejectreason") == "null" || oneobj.getString("rejectreason") == ""
									|| oneobj.getString("rejectreason") == null) {
								oneobj.put("new_rejectReason", "提现被驳回");
							} else {
								oneobj.put("new_rejectReason", oneobj.getString("rejectreason"));
							}
							;
						}

						//根据交易时间把记录分组
						if (tody - time == 0) {
							TodyList.add(oneobj);
						} else if (tody - time == 24 * 3600 * 1000) {
							YestdayList.add(oneobj);
						} else {
							MoreOldList.add(oneobj);

						}
					}
					newObjValue.put("today", TodyList);
					newObjValue.put("yestday", YestdayList);
					newObjValue.put("oldday", MoreOldList);
					String pageHtml = CommonUtil.getTZPageToHtml(pageIndex,
							Integer.parseInt(value.getString("totalResult")), lineNum, 4);

					request.setAttribute("pageHtml", pageHtml);
					request.setAttribute("objValue", newObjValue);
					return "withdrawals";
				}
			}
			request.setAttribute("message", "无查询记录");
			return "withdrawals";
		} catch (Exception e) {
			logger.error("调用jrtLot接口查询提现的状态出Exception(Call jrtLot interface query the status of the exception is raised):"
					+ e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * DNA提现新接口
	 * 从后台得到信息跳到提现页面
	 * @return:   
	 * 
	 */
	public String toCash() {
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			logger.info("查到的用户信息是：" + user);
			//查询账户余额(用总金额-冻结金额=可提现金额)
			JSONObject objBalance = CommonUtil.getBalance(user.getUSERNO());
			double valid_amount = objBalance.getDouble("balance") - objBalance.getDouble("freezebalance") >= objBalance
					.getDouble("drawbalance") ? objBalance.getDouble("drawbalance") : objBalance.getDouble("balance")
					- objBalance.getDouble("freezebalance");
			objBalance.put("cash_amount", valid_amount);
			logger.info("objBalance:" + objBalance);
			request.setAttribute("objBalance", objBalance);

			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/taccounts/getDNABinding?", "userno=" + user.getUSERNO(), "POST"));

			logger.info("调用新接口查询到的dna信息是：》》》" + obj);

			if (!obj.isNullObject()) {
				if (CommonUtil.getBackValue("errorCode", obj).equals(ErrorCode.OK.value)) {
					JSONObject jsonValue = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));

					LogListener.utilLog("提现页面返回信息为(Withdraw page returns information):", obj.toString(), null, "info",
							"com.ruyicai.web.action.TuserinfoAction.toCash()");
					String realname = user.getNAME().trim();
					if (!"".equals(realname) && realname.length() > 0) {
						request.setAttribute("realName", realname);
					}
					request.setAttribute("jsonValue_DNA", jsonValue);
					return "cash";
				}
			}
			return null;

		} catch (Exception e) {
			logger.error("提现信息出Exception(Information provided is abnormal):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 新接口的提现/taccounts/drawCash?"
	 * 
	 * 执行提现
	 * @return:   
	 * 
	 */
	public String cash() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		Tuserinfo user = new Tuserinfo();
		JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
		if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
			user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
		}
		try {
			logger.info("开始提现操作：获取提现的基本信息！" + session.getAttribute("cash_bank_name"));
			cashBean.setBank_name(String.valueOf(session.getAttribute("cash_bank_name")));
			logger.info("开始提现操作：获取提现的基本信息！" + session.getAttribute("cash_real_name"));
			cashBean.setReal_name(String.valueOf(session.getAttribute("cash_real_name")));
			cashBean.setWithdrawel_money(String.valueOf(session.getAttribute("cash_withdrawel_money")));
			cashBean.setID_number(String.valueOf(session.getAttribute("cash_cardnumber")));
			logger.info("要提现信息为:金额:" + cashBean.getWithdrawel_money() + ";银行账号:" + cashBean.getID_number() + ";银行名称:"
					+ cashBean.getBank_name() + ";姓名:" + cashBean.getReal_name());
			session.removeAttribute("cash_bank_name");
			session.removeAttribute("retbalance");
			session.removeAttribute("cash_valid_amount");
			session.removeAttribute("cash_real_name");
			session.removeAttribute("cash_withdrawel_money");
			session.removeAttribute("cash_cardnumber");
			//得到用户输入的信息进行验证
			//验证金额
			boolean result = CommonUtil.isCashMoney(cashBean.getWithdrawel_money(), request);
			if (!result) {
				response.getWriter().print("请您输入提现金额!");
				return null;
			}
			String bankname = cashBean.getBank_name();
			if (bankname.equals("undefined") || bankname.equals("") || bankname == null) {
				response.getWriter().print("请选择开卡银行!");
				return null;
			}
			//验证银行账号
			logger.info("检查银行帐号是否真确！");
			boolean isNumberID = CommonUtil.isIDNumber(cashBean.getID_number(), request);
			if (!isNumberID) {
				logger.info("银行账号必须是大于等于16位的数字串！");
				response.getWriter().print("银行账号必须是大于等于16位的数字串");
			}

			String s = cashBean.getWithdrawel_money();
			BigDecimal amt = new BigDecimal(s);
			amt = amt.multiply(new BigDecimal(100));
			long withdrawel = amt.longValue();

			logger.info("执行提现：" + ResourceBundleUtil.LINKURL + "/taccounts/drawCash?" + "userno=" + user.getUSERNO()
					+ "&balance=" + withdrawel + "&bankAccount=" + cashBean.getID_number() + "&name="
					+ URLEncoder.encode(cashBean.getReal_name()) + "&bankId=" + "0000001" + "&BANKNAME="
					+ URLEncoder.encode(cashBean.getBank_name()));
			//调用 新接口执行提现内容
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/taccounts/drawCash?", "userno=" + user.getUSERNO() + "&balance=" + withdrawel + "&bankAccount="
					+ cashBean.getID_number() + "&name=" + URLEncoder.encode(cashBean.getReal_name()) + "&bankId="
					+ "0000001" + "&BANKNAME=" + URLEncoder.encode(cashBean.getBank_name()), "POST"));

			logger.info("根据新接口获得的提现信息:" + obj);
			if (!obj.isNullObject() && CommonUtil.getBackValue("errorCode", obj).equals(ErrorCode.OK.value)) {
				JSONObject jsonValue = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				if (!jsonValue.isNullObject()) {
					session.setAttribute("cashJson", jsonValue);
					logger.info("执行提现返回的json=" + jsonValue);
					LogListener.utilLog("执行提现返回的json(Json implementation of the return to cash):", obj.toString(),
							null, "info", "com.ruyicai.web.action.TuserinfoAction.cash()");
					response.getWriter().print("cashsuccess");
					return null;
				}
			} else {
				String errorcode = ErrorCode.getMemo(CommonUtil.getBackValue("errorCode", obj));
				logger.info("提现失败返回的json(Json implementation of the return to cash):" + errorcode + obj.toString());
				response.getWriter().print("casherror");
			}
			return null;
		} catch (Exception e) {
			logger.error("提现出异常Exception(Emerged exception mentioned):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/***
	 * 撤销提现
	 * @throws IOException 
	 */
	public void cancelCash() throws IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//获取撤销的提现记录单号
			String orderid = request.getParameter("orderid");
			//调用 新接口执行提现内容
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/taccounts/cancelTcashDetail?", "cashdetailId=" + orderid, "POST"));
			if (!obj.isNullObject() && CommonUtil.getBackValue("errorCode", obj).equals(ErrorCode.OK.value)) {
				response.getWriter().print("succes");
			} else {
				response.getWriter().print("error");
			}
		} catch (Exception e) {
			logger.error("撤销提现出现异常Exception(cancelTcashDetail throw ):" + e.toString());
			e.printStackTrace();
			response.getWriter().print("error");
		}
	}

	/**
	 * 发送短信的ajax接口
	 */
	public void phoneBandSendMessage() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String usermobile = request.getParameter("usermobile").equals("undefined") ? (String) session
					.getAttribute("new_phone") : request.getParameter("usermobile");
			String jsessionid = JSONReslutUtil.getJsessionIdToCookies(request);
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setPhoneCode(Long.parseLong(usermobile));
			phoneInfo.setRules(0);
			int count = phoneInfoService.queryPhoneInfoCount(phoneInfo);
			if (count >= 3) {
				logger.debug("抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信！");
				response.getWriter().print("error");
			} else {
				JSONObject jsonSMS = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
						ResourceBundleUtil.USERSCENTERURL + "user/phonebind!sendMsgForPhoneBind;jsessionid="
								+ jsessionid + "?", "new_phone=" + usermobile, "POST"));
				String errorCode = jsonSMS.getString("errorCode");
				if (!errorCode.equals("0") || errorCode != "0") {
					logger.debug("短信发送失败");
				}
			}
		} catch (Exception e) {
			logger.error("发送短信出现异常Exception(cancelTcashDetail throw ):" + e.toString());
			e.printStackTrace();
		}
	}

	/**
	 * 手机绑定验证功能
	 * @return 手机绑定成功页面
	 */

	public String phoneBandCheck() {
		try {
			logger.info("====博雅彩手机绑定验证开始====");
			// 1.得到用户信息
			String userno = JSONReslutUtil.getUserNo(request).getString("value");
			String usermobile = request.getParameter("usermobile").equals("undefined") ? "" : request
					.getParameter("usermobile");
			logger.info("发送给用户的相关信息是userno:" + userno + ";手机号码：" + usermobile);
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setPhoneCode(Long.parseLong(usermobile));
			phoneInfo.setRules(0);
			int count = phoneInfoService.queryPhoneInfoCount(phoneInfo);
			if (userno == null || userno.equals("") || userno.equals("null")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			} else if (usermobile.equals("")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_NULL);
				return "phoneBand";
			} else if (CommonUtil.verifyMobileId(usermobile) != true) {
				request.setAttribute("message", MessageUtil.TIAW_login_MobilePatternError);
				return "phoneBand";
			} else {
				session.setAttribute("new_phone", usermobile);//将新的手机号码存在作用域中，当重发或是修改时用
				String jsessionid = JSONReslutUtil.getJsessionIdToCookies(request);
				if (count >= 3) {
					request.setAttribute("message", "抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信！");
					logger.debug("抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信！");
					return "phoneBand";
				} else {
					JSONObject jsonSMS = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
							ResourceBundleUtil.USERSCENTERURL + "user/phonebind!sendMsgForPhoneBind;jsessionid="
									+ jsessionid + "?", "new_phone=" + usermobile, "POST"));
					logger.info("请求users中的sendMsgForPhoneBind返回的jsonSMS是：" + jsonSMS);
					return "phoneBandRand";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("手机绑定验证出异常exception(E-mail to send verification code to bind abnormal):" + e.toString());
			return "error";
		}
	}

	/**
	 * 手机绑定验证功能
	 * @return 手机绑定成功页面
	 */

	public String phoneBand() {
		try {
			logger.info("====博雅彩手机绑定验证开始====");
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String sessionid = (String) session.getId();
			String phone = session.getAttribute("new_phone").toString();
			String rand = request.getParameter("passRegister");
			logger.info("发送给用户的相关信息是jsessionid:" + sessionid + ";手机号码：" + phone + ";");

			if (sessionid == null || user == null || sessionid.equals("")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			} else {
				String jsessionid = JSONReslutUtil.getJsessionIdToCookies(request);
				String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.USERSCENTERURL
						+ "user/phonebind!userBindPhone;jsessionid=" + jsessionid + "?", "mobileid=" + phone
						+ "&userno=" + user.getUSERNO() + "&username=" + user.getUSERNAME() + "&rand=" + rand, "POST");
				JSONObject value = JSONObject.fromObject(re).getJSONObject("value");
				if (!JSONObject.fromObject(re).isNullObject()
						&& JSONObject.fromObject(re).getString("errorCode").equals(LotErrorCode.NEW_OK)) {
					request.setAttribute("message", value);
					//修改成功后,更新缓存中的用户信息
					JSONObject userinfo = value;
					request.setAttribute("userinfo", userinfo);
					JSONReslutUtil.changeUserInfo(request);
					request.setAttribute("message", JSONObject.fromObject(re).getString("message"));
					return "phoneBandSuccess";
				} else {
					request.setAttribute("message", JSONObject.fromObject(re).getString("message"));
					return "phoneBandRand";
				}
			}

		} catch (Exception e) {
			logger.error("手机号码绑定发送验证码出异常exception(phone to send verification code to bind abnormal):" + e.toString());
			return "error";
		}
	}

	/**手机解绑
	 * @return
	 */
	public String phoneUnBundling() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			PrintWriter out = response.getWriter();
			JSONObject re = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes/modify?", "mobileid=" + " " + "&userno=" + user.getUSERNO(), "POST"));
			logger.info("修改手机号为空返回数据：" + re);
			if (!re.isNullObject() && "0".equals(re.getString("errorCode"))) {
				JSONObject tusers = re.getJSONObject("value");
				request.setAttribute("userinfo", tusers);
				JSONReslutUtil.changeUserInfo(request);
				out.print("success");
			} else {
				out.print("failed");
			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			try {
				response.getWriter().print("error");
			} catch (IOException e1) {
			}
			return null;
		}

	}

	/**
	 * 
	 * @Title:  emailBand
	 * @Description: 邮箱绑定
	 * @return:   
	 * @exception:
	 */
	public String emailBand() {
		try {
			logger.info("====ruyicai邮箱绑定开始====");
			// 1.得到用户信息
			String sessionid = session.getId();
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			if (sessionid == null || user == null || sessionid.equals("")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			}
			tuserinfo.setEMAIL(URLEncoder.decode(tuserinfo.getEMAIL()));
			String typePage = request.getParameter("typePage");
			if (typePage.equals("updateEmailBand")) {
				String old_email = "";
				if (request.getParameter("old_email").indexOf("@") == -1) {
					old_email = URLEncoder.decode(request.getParameter("old_email"));
				} else {
					old_email = request.getParameter("old_email");
				}

				if (tuserinfo.getEMAIL().equals("") || tuserinfo.getEMAIL().equals(" ") || old_email.equals("")
						|| tuserinfo.getEMAIL() == null || old_email == null) {
					request.setAttribute("message", "邮箱地址不可为空！");
					logger.debug("用户没有输入新邮箱！");
					return "updateEmailBand";
				} else if (!old_email.equals(user.getEMAIL())) {
					request.setAttribute("message", "您填写的旧邮箱错误,请重新填写");
					logger.info("您填写的旧邮箱错误,请重新填写");
					return "updateEmailBand";
				}
			} else {
				if (tuserinfo.getEMAIL().equals("") || tuserinfo.getEMAIL() == null || tuserinfo.getEMAIL().equals(" ")) {
					request.setAttribute("message", "邮箱地址不可为空！");
					logger.debug("用户没有输入邮箱！");
					return "emailBand";
				}

			}
			//根据用户输入的邮箱查询该邮箱是否已被绑定
			JSONObject users = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes?json&find=ByEmail&email=" + tuserinfo.getEMAIL().trim()));
			logger.debug("根据邮箱查询得到用户的信息是：" + users);

			//2.得到用户输入的信息
			request.setAttribute("tuserinfo", tuserinfo);

			//验证邮箱
			if (CommonUtil.isEmailCode(tuserinfo.getEMAIL()) != true) {
				request.setAttribute("message", "邮箱格式不正确！");
				logger.debug(tuserinfo.getEMAIL() + "邮箱格式不正确！");
				if (typePage.equals("emailBand")) {
					return "emailBand";
				}
				if (typePage.equals("updateEmailBand")) {
					return "updateEmailBand";
				}

			} else if (users.getString("errorCode").equals(LotErrorCode.NEW_OK)) {
				request.setAttribute("message", "邮箱绑定失败,您填写的邮箱已绑定,请重新填写");
				logger.info("邮箱绑定失败,用户填写的邮箱已绑定,请重新填写");
				if (typePage.equals("emailBand")) {
					return "emailBand";
				}
				if (typePage.equals("updateEmailBand")) {
					return "updateEmailBand";
				}

			} else {
				response.setCharacterEncoding("utf-8");

				logger.debug("得到用户的信息:" + user.toString());
				//获取向此邮箱发送连接次数
				PhoneInfo phoneInfo = new PhoneInfo();
				phoneInfo.setEmail(tuserinfo.getEMAIL());
				phoneInfo.setRules(0);
				int count = phoneInfoService.queryPhoneInfoCountByEmail(phoneInfo);
				if (count < 3) {
					String code = phoneInfoService.add(phoneInfo);
					if (FinalVar.INSERT_SUCCESS.equals(code)) {
						request.setAttribute("msg", "邮箱信息添加成功");
						logger.info("邮箱计数添加成功");
					} else {
						logger.info("邮箱计数添加失败");
					}
				} else {
					logger.info("邮箱信息每天超过3次则发送失败");
				}

				if (count < 3) {
					//得到手机发送信息接口的信息
					logger.debug("博雅彩彩票网已经向您的邮箱发送免费的验证短信，请及时查看邮箱！");
					request.setAttribute("message", "博雅彩彩票网已经向您的邮箱发送免费的验证短信，请及时查看邮箱！");
					//验证邮箱
					session.setAttribute("emailUrl", UtilGetEmailUrl.getEmailUrl(tuserinfo.getEMAIL().split("@")[1]));
					String mac = PaySign.EncoderByMd5(user.getMOBILEID() + "ruyicai");
					String url = ResourceBundleUtil.RYCEMAILURL.replace("{sessionid}", sessionid)
							.replace("{userid}", user.getMOBILEID() == null ? "" : user.getMOBILEID())
							.replace("{mac}", mac).replace("{email}", tuserinfo.getEMAIL());
					//邮箱发送内容
					String emailMeg = MessageUtil.EmailBand_Message.replace("{nickname}", user.getNICKNAME()).replace(
							"{url}", url);
					String[] emailArr = { tuserinfo.getEMAIL() };
					//调用邮件发送接口发送邮件
					UtilEmail.utilSend(emailArr, "博雅彩彩票网邮箱绑定", emailMeg);
					//绑定邮箱 修改缓存中的email
					return "emailBandCheck";
				} else {
					logger.info("抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次短信");
					request.setAttribute("message", "抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次短信");
					if (typePage.equals("emailBand")) {
						return "emailBand";
					}
					if (typePage.equals("updateEmailBand")) {
						return "updateEmailBand";
					}
				}
			}
		} catch (Exception e) {
			logger.error("邮箱绑定出异常Exception(Email abnormal binding):" + e.toString());
			return "error";
		}
		return "emailBandCheck";
	}

	/**
	 * 邮箱绑定验证功能
	 * @return 邮箱绑定成功页面
	 */

	public String emailBandCheck() {
		try {
			logger.info("====博雅彩邮箱绑定验证开始====");
			// 1.得到用户信息
			JSONObject user = JSONReslutUtil.getUserInfo(request).getJSONObject("value");
			String userid = request.getParameter("userid");
			String email = request.getParameter("email");
			logger.info("发送给用户的相关信息是用户名：" + userid + ";邮箱：" + email);

			if (userid == null) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			} else {

				//调用新接口修改用户信息
				String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?",
						"email=" + email + "&userno=" + user.getString("userno"), "POST");
				LogListener.utilLog("邮箱绑定-得到用户信息为(Mailbox binding - the user information):", re, null, "info",
						"com.ruyicai.web.action.ThreeGCaiPiao.emailBandCheck()");

				JSONObject update = JSONObject.fromObject(re);
				//logger.info("邮箱绑定-得到用户信息修改新接口的返回码"+CommonUtil.getBackValue("errorCode", update));

				//验证邮箱
				if (CommonUtil.isEmailCode(tuserinfo.getEMAIL()) != true) {
					request.setAttribute("message", "邮箱格式不正确！");
					logger.debug(tuserinfo.getEMAIL() + "邮箱格式不正确！");
					return "emailBand";
				}
				if (CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.YXYBD)) {
					request.setAttribute("message", "邮箱绑定失败，用户邮箱已绑定，请重新填写！");
					logger.debug("邮箱绑定失败，用户邮箱已绑定，请重新填写！");
					return "emailBand";
				}
				if (!update.isNullObject() && CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.NEW_OK)) {
					//修改成功后将绑定的邮箱存入session中
					user.put("email", email);
					//修改成功后加入缓存
					request.setAttribute("userinfo", user);
					JSONReslutUtil.changeUserInfo(request);
					request.setAttribute("email", email);
					request.setAttribute("username", user.getString("userName"));
					request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_Success);
					return "emailBandSuccess";
				} else {
					request.setAttribute("message", "邮箱绑定失败，过程出现异常，请与客服联系！");
					logger.info("邮箱绑定失败，过程出现异常，请与客服联系！");
					return "formError";
				}
			}

		} catch (Exception e) {
			logger.error("邮箱绑定发送验证码出异常exception(E-mail to send verification code to bind abnormal):" + e.toString());
			return "error";
		}
	}

	/**
	 * 判断参数中的JSON是否为JSONArray 如果是 则返回true
	 * @param re STRING Json结构
	 * @return
	 */
	private boolean isJSONArray(String re) {
		if (re.substring(0, 1).equals("{")) {
			JSONObject objValue = JSONObject.fromObject(re);
			if ("0047".equals(objValue.getString("error_code"))) {
				request.setAttribute("message", MessageUtil.SELECT_BET_MESSAGE);
			} else if ("0018".equals(objValue.getString("error_code"))) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
			}
			return false;
		} else {
			return true;
		}
	}

	/**
	 * 
	 * @Title:  accountDetail
	 * @Description: 账户明细查询
	 * @return:   
	 */
	public String accountDetail() {
		try {
			JSONObject sendJO = new JSONObject();
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));
			//获取userno
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			//获取前台传入的日期参数,当时间为空时赋予其默认值
			String startdate = request.getParameter("beginTime");
			String enddate = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");
			;
			if (!(enddate == null || enddate.equals("") || enddate.equals("undefined"))) {
				request.setAttribute("stopDate", enddate);
				enddate = enddate.replace("-", "");
			}
			if (!(startdate == null || startdate.equals("") || startdate.equals("undefined"))) {
				request.setAttribute("startDate", startdate);
				startdate = startdate.replace("-", "");
			} else {
				startdate = "2010-01-01".replace("-", "");
			}

			//调用的接口查询明细记录
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/taccountdetails?get=Taccountdetail&json&userno=" + user.getUSERNO() + "&beginTime=" + startdate
					+ "&endTime=" + enddate + "&pageIndex=" + (pageIndex - 1) + "&maxResult=" + pageCount + "&state=1");
			LogListener.utilLog("获得后台返回的集合re：", re, null, "info",
					"com.ruyicai.web.action.SelectAllAction.accountDetail_3g()");

			//将返回结果转换成json对象
			JSONObject obj = JSONObject.fromObject(re);
			if (!obj.isNullObject()) {
				//获得的返回内容进行处理，目前以第一个开始字符进行判断后台返回的值是否是一个Array
				JSONObject objs = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				if (!objs.isEmpty()) {
					String lists = objs.getString("list");
					if (isJSONArray(lists)) {
						JSONArray valueList = JSONArray.fromObject(lists);
						JSONArray TodyList = new JSONArray();//今天的记录
						JSONArray YestdayList = new JSONArray();//昨天的记录
						JSONArray MoreOldList = new JSONArray();//更早的记录
						//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
						//获取交易类型，转换时间
						for (int i = 0; i < valueList.size(); i++) {
							JSONObject rec = valueList.getJSONObject(i);

							//根据交易时间把记录分组
							Long tody = df.parse(df.format(new Date())).getTime();
							long time = df.parse(df.format(new Date(rec.getLong("plattime")))).getTime();

							String ttranstype = (rec.getString("ttransactiontype") == null || "null".equals(rec
									.getString("ttransactiontype"))) ? "0" : rec.getString("ttransactiontype");
							Integer ttransactiontype = Integer.parseInt(ttranstype);
							rec.put("taccountTypeMsg", CommonUtil.getTransactionyTypeMsg(ttransactiontype));
							rec.put("taccountType", CommonUtil.getTypeByMsg(ttransactiontype, rec.getString("memo")));
							rec.put("plattime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec
									.getLong("plattime"))));
							// 当blsign为2 或者-2的时候 变动的金额使用
							if (rec.getInt("blsign") == 2 || rec.getInt("blsign") == -2) {
								rec.put("amt", rec.getLong("freezeamt"));
							}
							rec.put("amt", CommonUtil.moneySave2(rec.getDouble("amt") / 100));
							rec.put("balance_fee", CommonUtil.moneySave2((rec.getDouble("balance") - rec
									.getDouble("freezebalance")) / 100));
							//根据交易时间把记录分组
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
						request.setAttribute("list", newList);
						//最大页数
						String pageHtml = CommonUtil.getTZPageToHtml(pageIndex,
								Integer.parseInt(CommonUtil.getBackValue("totalResult", objs)), pageCount, 4);
						request.setAttribute("pageHtml", pageHtml);
					}
				} else {
					request.setAttribute("formPro", sendJO);
					request.setAttribute("list", null);
					request.setAttribute("msg", "没有查询到您需要的信息！");
					return "accountDetail";
				}
			}
			//上次提交的参数
			request.setAttribute("formPro", sendJO);
			return "accountDetail";

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("博雅彩彩票网账户明细Exception=" + e.toString());
			return "error";
		}

	}

	/**
	 * 话费充值
	 * @return
	 */
	public String mobileHuafeiCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//获取type类型，是3元/次OR30元/次
			String type = request.getParameter("money") == null ? "30" : request.getParameter("money");
			int money = 0;
			String goodsid = "";
			if (type.equals("30")) {
				money = 3000;
				goodsid = "300";
			} else if (type.equals("3")) {
				money = 300;
				goodsid = "030";
			}
			//获取“是否参加充值赠送彩金活动” 参数值
			String ladderpresentflag = request.getParameter("ladderflag");

			if ("true".equals(ladderpresentflag)) {
				ladderpresentflag = "1";
			} else {
				ladderpresentflag = "0";
			}

			// 得到用户
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String sessionid = request.getSession().getId();
			logger.info("充值时比较用户userno和userinfoId:" + user.getUSERNO() + "======" + sessionid);

			//设置传过去的参数
			JSONObject paras = new JSONObject();
			paras.put("userno", user.getUSERNO());
			paras.put("bankid", Constant.UMPAY_BANKID_MOBILE);
			paras.put("paytype", ""); // 未给参数值 
			paras.put("bankaccount", "0");
			paras.put("accesstype", Constant.WEB_AGENCYNO);
			paras.put("amt", money);
			paras.put("channel", "2");
			paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			paras.put("ladderpresentflag", ladderpresentflag);
			paras.put("continuebettype", "");
			paras.put("orderid", "");
			paras.put("mobileid", "");
			paras.put("plat", "web");
			paras.put("method", "post");
			paras.put("goodsid", goodsid);
			paras.put("returl", "http://www.ruyicai.com");

			//调用后台ChargeCenter项目执行的充值umpayCharge!chargeSplit?jsonString={
			logger.info("联动优势url:" + ResourceBundleUtil.MSBANKURL + "/umpayCharge!chargeUnify2?jsonString=" + paras);
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/umpayCharge!chargeUnify2?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
			logger.info("调用联动优势话费充值返回数据:(umpay returned values:)" + obj);
			if (obj != null && ErrorCode.OK.value.equals(obj.getString("error_code"))) {

				jsonRoot.put("flag", true);
				jsonRoot.put("bankOrSound", MessageUtil.UMPAY_Charge_type);
				jsonRoot.put("objUmpay", obj);
				response.getWriter().print(jsonRoot.toString());
			} else {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", "充值失败！");
				response.getWriter().print(jsonRoot.toString());
			}
			return null;
		} catch (Exception e) {
			logger.error("账户充值异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 
	 * 充值功能
	 * @return   充值跳转页面
	 * 
	 */
	public String minshengCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			//获取type类型具体是民生银行、支付宝还是别的充值
			String type = request.getParameter("radiobutton") == null ? "minShengBanks" : request.getParameter(
					"radiobutton").equals("") ? "minShengBanks" : request.getParameter("radiobutton");

			//获取“是否参加充值赠送彩金活动” 参数值
			String ladderpresentflag = request.getParameter("ladderflag");

			if ("true".equals(ladderpresentflag)) {
				ladderpresentflag = "1";
			} else {
				ladderpresentflag = "0";
			}

			// 得到用户
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String token = (String) session.getAttribute("token");//从session中获取支付宝联合登录的token
			String sessionid = request.getSession().getId();
			logger.info("充值时比较用户userno和userinfoId:" + user.getUSERNO() + "======" + sessionid);

			/*******民生银行充值*****/
			if (type.equals(MessageUtil.MS_Charge_Type)) {
				// 验证用户输入的参数
				request.setAttribute("chargeBean", chargeBean);
				String str = CommonUtil.isChargeMoney(chargeBean.getTransaction_money());
				if (str != null) {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", str);
					response.getWriter().print(jsonRoot.toString());
					return null;
				}
				//设置传过去的参数
				JSONObject paras = new JSONObject();
				paras.put("userno", user.getUSERNO());
				paras.put("bankid", Constant.MSY_BANKID);
				paras.put("paytype", Constant.BANK_CARDTYPE);
				paras.put("accesstype", Constant.WEB_AGENCYNO);
				paras.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
				paras.put("channel", (String) session.getAttribute("CHANNEL"));
				paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
				paras.put("ladderpresentflag", ladderpresentflag);

				//调用后台ChargeCenter项目执行的充值
				logger.info("民生银行url:" + ResourceBundleUtil.MSBANKURL + "/charge!msBankChargeWeb?jsonString=" + paras);
				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
						+ "/charge!msBankChargeWeb?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
				logger.info("调用民生充值返回数据:(msbanked returned values:)" + obj);
				if (obj != null && ErrorCode.OK.value.equals(obj.getString("error_code"))) {

					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.MS_Charge_Type);
					jsonRoot.put("objMinsheng", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}

				/*********** 银联支付*************/
			} else if (type.equals(Constant.YLZF_CARDTYPE)) {
				JSONObject params = new JSONObject();
				params.put("userno", user.getUSERNO());
				params.put("accesstype", Constant.WEB_AGENCYNO);
				params.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
				params.put("bankaccount", "0");
				params.put("channel", (String) session.getAttribute("CHANNEL"));
				params.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
				params.put("paytype", Constant.YLZF_CARDTYPE);
				params.put("bankid", Constant.YLZF_BANKID);
				params.put("gateid", Constant.YL_GATEID);
				params.put("ladderpresentflag", ladderpresentflag);

				//调用后台chinapaycharge!charge 执行充值
				logger.info("用户userno:" + user.getUSERNO() + "======url :" + ResourceBundleUtil.MSBANKURL
						+ "/chinapaycharge!charge2?jsonString=" + params.toString());
				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
						+ "/chinapaycharge!charge2?", "jsonString=" + params.toString(), "POST"));

				logger.info("银联支付充值返回值:(shanghai bank returned values:)" + obj);
				if (obj != null && ErrorCode.OK.value.equals(obj.getString("error_code"))) {

					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.YL_Charge_type);
					jsonRoot.put("objYinLian", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}

				/***********上海银联支付充值 *************/
			} else if (type.equals(Constant.SHYLZF_CARDTYPE)) {

				JSONObject params = new JSONObject();
				params.put("userno", user.getUSERNO());
				params.put("accesstype", Constant.WEB_AGENCYNO);
				params.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
				params.put("bankaccount", "0");
				params.put("channel", (String) session.getAttribute("CHANNEL"));
				params.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
				params.put("paytype", Constant.SHYLZF_CARDTYPE);
				params.put("bankid", Constant.SHYLZF_BANKID);
				params.put("ladderpresentflag", ladderpresentflag);

				//调用后台chinapaycharge!charge 执行充值
				logger.info("url :" + ResourceBundleUtil.MSBANKURL + "/chinapaycharge!charge?jsonString="
						+ params.toString());
				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
						+ "/chinapaycharge!charge?", "jsonString=" + params.toString(), "POST"));

				logger.info("上海银联支付充值返回值:(shanghai bank returned values:)" + obj);
				if (obj != null && ErrorCode.OK.value.equals(obj.getString("error_code"))) {

					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.SH_Charge_type);
					jsonRoot.put("objShangHai", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}

				/******* 支付宝在线充值**********/
			} else if (type.equals(Constant.ZFB_CARDTYPE)) {

				//调用设置参数并请求后台的公共方法充值
				JSONObject obj = getRetApliy(request, type, user, sessionid, chargeBean.getTransaction_money(), token,
						Constant.ZFB_CARDTYPE, Constant.ZFB_DIRECTPAY, null, null, ladderpresentflag);
				logger.info("支付宝在线充值chargeCenter返回(Back Alipay recharge chargeCenter):" + obj.toString());
				if (obj != null && ErrorCode.OK.value.equals(CommonUtil.getBackValue("error_code", obj))) {

					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.ZFB_Charge_Type);
					jsonRoot.put("jsonAlipay", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}

				/*******银行直连*********/
			} else if (type.equals(Constant.ZFB_CARDTYPE_GS) || type.equals(Constant.ZFB_CARDTYPE_MS)
					|| type.equals(Constant.ZFB_CARDTYPE_ZS) || type.equals(Constant.ZFB_CARDTYPE_GF)
					|| type.equals(Constant.ZFB_CARDTYPE_JS) || type.equals(Constant.ZFB_CARDTYPE_JT)
					|| type.equals(Constant.ZFB_CARDTYPE_NY) || type.equals(Constant.ZFB_CARDTYPE_PF)
					|| type.equals(Constant.ZFB_CARDTYPE_PA) || type.equals(Constant.ZFB_CARDTYPE_XY)
					|| type.equals(Constant.ZFB_CARDTYPE_YZ) || type.equals(Constant.ZFB_CARDTYPE_ZX)
					|| type.equals(Constant.ZFB_CARDTYPE_SH) || type.equals(Constant.ZFB_CARDTYPE_NB)
					|| type.equals(Constant.ZFB_CARDTYPE_HZ) || type.equals(Constant.ZFB_CARDTYPE_GD)
					|| type.equals(Constant.ZFB_CARDTYPE_ZG)) {

				//调用设置参数并请求后台的公共方法充值
				JSONObject obj = getRetApliy(request, Constant.BANK_CARDTYPE, user, sessionid,
						chargeBean.getTransaction_money(), token, type, Constant.ZFB_BANKPAY, null, null,
						ladderpresentflag);

				logger.info("支付宝银行充值chargeCenter返回(Back Alipay recharge chargeCenter):" + obj.toString());
				if (obj != null && ErrorCode.OK.value.equals(CommonUtil.getBackValue("error_code", obj))) {
					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.ZFB_Charge_Type);
					jsonRoot.put("jsonAlipay", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}
			}
			/*******联动优势充值*************/
			else if (type.equals("00")) {
				//设置传过去的参数
				JSONObject paras = new JSONObject();
				paras.put("userno", user.getUSERNO());
				paras.put("bankid", Constant.UMPAY_BANKID);
				paras.put("paytype", ""); // 未给参数值 
				paras.put("bankaccount", "0");
				paras.put("accesstype", Constant.WEB_AGENCYNO);
				paras.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
				paras.put("channel", (String) session.getAttribute("CHANNEL"));
				paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
				paras.put("ladderpresentflag", ladderpresentflag);
				paras.put("mediatype", "MOBILE");
				paras.put("method", "get");

				//调用后台ChargeCenter项目执行的充值umpayCharge!chargeSplit?jsonString={
				logger.info("联动优势url:" + ResourceBundleUtil.MSBANKURL + "/umpayCharge!chargeSplit?jsonString=" + paras);
				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
						+ "/umpayCharge!chargeSplit?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
				logger.info("调用联动优势充值返回数据:(umpay returned values:)" + obj);
				if (obj != null && ErrorCode.OK.value.equals(obj.getString("error_code"))) {

					jsonRoot.put("flag", true);
					jsonRoot.put("bankOrSound", MessageUtil.UMPAY_Charge_type);
					jsonRoot.put("objUmpay", obj);
					response.getWriter().print(jsonRoot.toString());
				} else {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", "充值失败！");
					response.getWriter().print(jsonRoot.toString());
				}

				/*******易宝充值**********/
			} else if (type.equals(MessageUtil.YEEPAY_Charge)) {
				jsonRoot.put("bankOrSound", MessageUtil.YEEPAY_Charge);
				yeepayCharge();
				response.getWriter().print(jsonRoot.toString());
			}
			return null;

		} catch (Exception e) {
			logger.error("账户充值异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}

	}

	/**
	 * 
	 * 支付宝充值构造参数的公共方法
	 * @param request 请求
	 * @param type 默认充值银行
	 * @param user 用户
	 * @param sessionid 自己的sessionid
	 * @param money 充值金额
	 * @param token 支付宝联合登录时所需
	 * @param defaultBank 代表什么充值例如 支付宝在线充值、支付宝语音充值、支付宝银行充值
	 * @param payMethod 代表 bankPay(网银);cartoon(卡通); directPay(余额)。 
	 * @param method 为调用接口方法  如果为支付宝语音 则传入"zfbYuyinCharge"  其他传入null
	 * @return
	 * @throws Exception
	 */
	public static JSONObject getRetApliy(HttpServletRequest request, String type, Tuserinfo user, String sessionid,
			String money, String token, String defaultBank, String payMethod, String method, String mobileid,
			String ladderpresentflag) throws Exception {
		String channel = request.getSession().getAttribute("CHANNEL") == null
				|| request.getSession().getAttribute("CHANNEL") == "null" ? "2" : (String) request.getSession()
				.getAttribute("CHANNEL");
		//设置参数新充值接口的参数
		JSONObject paras = new JSONObject();
		paras.put("bankid", Constant.ZFB_BANKID);
		paras.put("accesstype", Constant.WEB_AGENCYNO);
		paras.put("paytype", type);
		paras.put("amt", Integer.parseInt(money) * 100);
		paras.put("userno", user.getUSERNO());
		paras.put("sessionId", sessionid);
		paras.put("defaultbank", defaultBank);
		paras.put("paymethod", payMethod);//支付宝网银
		paras.put("channel", channel);
		paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
		paras.put("ladderpresentflag", ladderpresentflag);
		if (mobileid != null) {
			paras.put("mobileid", mobileid);//接听使用的电话号码
		}
		if (token != null && !token.equals("")) {
			paras.put("token", token);//支付宝联合登录时用，如果有的话半小时无需再支付宝登录
		}

		//得到当前域名
		String str = request.getServerName();
		//调用读取配置文件地址读取内容
		Map<String, String> map = ResourceBundleUtil.mapRetUrlCharge;

		Set<Map.Entry<String, String>> entryseSet = map.entrySet();
		for (Map.Entry<String, String> entry : entryseSet) {
			if (str.indexOf(entry.getKey()) > -1) {
				paras.put("retUrl", entry.getValue());
			}
		}
		logger.info(ResourceBundleUtil.MSBANKURL + "/charge!" + method == null ? "zfbWebCharge" : method
				+ "?jsonString=" + paras.toString());
		JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
				+ "/charge!" + (method == null ? "zfbWebCharge" : method) + "?",
				"jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
		return obj;
	}

	/**
	 * 
	 * 易宝充值
	 * 
	 */
	public String yeepayCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			logger.info("=====易宝充值开始=====");
			// 1.判断用户是否登录
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			//2.判断用户输入的参数
			request.setAttribute("chargeBean", chargeBean);
			request.setAttribute("tuserinfo", tuserinfo);
			logger.info("用户输入充值金额:" + chargeBean.getTransaction_money());

			String str = CommonUtil.isChargeMoney(chargeBean.getTransaction_money());
			if (str != null) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", str);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}

			JSONObject paras = new JSONObject();
			paras.put("userno", user.getUSERNO());
			paras.put("bankid", Constant.YB_BANKID);
			paras.put("paytype", Constant.BANK_CARDTYPE);
			paras.put("accesstype", Constant.WEB_AGENCYNO);
			paras.put("totalAmount", chargeBean.getTransaction_money());
			paras.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
			paras.put("card_no", chargeBean.getCard_no());
			paras.put("card_pwd", chargeBean.getCard_pwd());
			paras.put("channel", request.getSession().getAttribute("CHANNEL"));
			paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);

			//使用公共方法调用jrtLot做易宝账户充值
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/charge!yeePayWebCardCharge?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
			logger.info("yeepay充值jrtLot返回(yeepay recharge jrtLot Back):" + obj.toString());
			if (!obj.isNullObject() && LotErrorCode.OK.equals(CommonUtil.getBackValue("error_code", obj))) {
				jsonRoot.put("flag", true);
				jsonRoot.put("jsonYeepay", obj);
			} else {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", "充值失败！");
				response.getWriter().print(jsonRoot.toString());
			}

		} catch (Exception e) {
			logger.error("账户充值异常Exception(Account recharge exception):" + e.toString());
			return "error";
		}
		return null;
	}

	/**
	 * 
	 * 调用接口查询用户是否绑定了DNA
	 * @return  充值页面  
	 * 
	 */
	public String toCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			// 得到用户
			String sessionid = (String) (session.getAttribute("sessionid") == null ? "" : session
					.getAttribute("sessionid"));
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			//调用jrtLot的方法查询
			JSONObject paras = new JSONObject();
			paras.put("Mobile", user.getMOBILEID());
			paras.put("mobile_code", user.getMOBILEID());
			paras.put("sessionid", sessionid);

			// 根据返回的值得到
			//JSONObject obj = JSonResultService.getAllJSonReuslt(paras, null, sessionid, 0, "dnabind.do", "bindInfoFind");
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/taccounts/getDNABinding?", "userno=" + user.getUSERNO(), "POST"));
			if (obj != null && "0".equals(CommonUtil.getBackValue("errorCode", obj))) {
				JSONObject objValue = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				logger.info("得到用户余额的json为(Json as the user balance):" + obj.toString());
				//state为0没绑定           为1，已绑定
				if (!objValue.isNullObject() && "1".equals(objValue.getString("state"))) {
					session.setAttribute("dna_username", objValue.get("name") == null ? "" : objValue.get("name"));
					session.setAttribute("dna_personNumber",
							objValue.get("certid") == null ? "" : objValue.get("certid"));
					session.setAttribute("dna_addressCard",
							objValue.get("certidaddress") == null ? "" : objValue.get("certidaddress"));
					session.setAttribute("dna_bankName",
							objValue.get("bankname") == null ? "" : objValue.get("bankname"));
					String bankcardno = objValue.get("bankcardno").toString();
					session.setAttribute("dna_bankCard", bankcardno);
					session.setAttribute("short_bankCard", bankcardno.substring(0, bankcardno.length() - 6));
					session.setAttribute("dna_province",
							objValue.get("bankaddress") == null ? "" : objValue.get("bankaddress"));
					session.setAttribute("dna_tel", objValue.get("mobileid") == null ? "" : objValue.get("mobileid"));
					session.setAttribute("dna_city", "");

					session.setAttribute("dna_hiddenName", "grayList");//表示是灰名单
				} else {
					session.setAttribute("dna_hiddenName", "");//表示是白名单
				}
				;
				jsonRoot.put("objDNABind", objValue);
				response.getWriter().print(jsonRoot.toString());

			}
			return null;
		} catch (Exception e) {
			logger.error("查询是否是DNA充值异常Exception=" + e.toString());
			return "error";
		}

	}

	/**
	 * 判断用户输入的用户名与绑定的用户名是否一致
	 * @return
	 */
	public String testUserName() {

		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String isIe = request.getParameter("isIe");
			String username = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					username = URLEncoder.decode(request.getParameter("username") == "undefined" ? "" : request
							.getParameter("username").trim());
				} else {
					username = request.getParameter("username") == "undefined" ? "" : request.getParameter("username")
							.trim();
				}
			} else {
				if ("中文".equals(isIe)) {
					username = request.getParameter("username") == "undefined" ? "" : request.getParameter("username")
							.trim();
				} else {
					username = URLEncoder.decode(request.getParameter("username") == "undefined" ? "" : request
							.getParameter("username").trim());
				}
			}
			if ((user.getNAME().trim()).equals(username)) {
				response.getWriter().print("true");
			} else {
				response.getWriter().print("false");
			}
		} catch (Exception e) {
			logger.error("用户信息对比出现异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	public String testPassword() {

		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String password = request.getParameter("password");
			String MDpassword = PaySign.EncoderByMd5(password);
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			if (user.getPASSWORD().equals(MDpassword)) {
				response.getWriter().print("true");
			} else {

				response.getWriter().print("false");
			}

		} catch (Exception e) {
			logger.error("用户信息对比出现异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}

		return null;
	}

	/**
	 * 判断用户的身份证号是否与绑定的一致
	 * @return
	 */
	public String testPersonId() {

		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String isIe = request.getParameter("isIe");
			String cardid = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					cardid = URLEncoder.decode(request.getParameter("cardid") == "undefined" ? "" : request
							.getParameter("cardid").trim());
				} else {
					cardid = request.getParameter("cardid") == "undefined" ? "" : request.getParameter("cardid").trim();
				}
			} else {
				if ("中文".equals(isIe)) {
					cardid = request.getParameter("cardid") == "undefined" ? "" : request.getParameter("cardid").trim();
				} else {
					cardid = URLEncoder.decode(request.getParameter("cardid") == "undefined" ? "" : request
							.getParameter("cardid").trim());
				}
			}
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			if (user.getCERTID().equals(cardid)) {
				response.getWriter().print("true");
			} else {
				response.getWriter().print("false");
			}
		} catch (Exception e) {
			logger.error("用户信息对比出现异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	/**
	 * 
	 * dna充值
	 * @return  json
	 * 
	 */
	public String dnaCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			logger.info("=====dna充值开始=====");
			// 1.判断用户是否登录
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			if (request.getSession().getId() == null || user == null || request.getSession().getId().equals("")) {
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return "login_error";
			}
			//1、从作用域中取出所有的信息
			chargeBean.setUserName(session.getAttribute("dna_username").toString());
			chargeBean.setDocumentNumber(session.getAttribute("dna_personNumber").toString());
			chargeBean.setAddressCard(session.getAttribute("dna_addressCard").toString());
			chargeBean.setBankName(session.getAttribute("dna_bankName").toString());
			chargeBean.setCardNumber(session.getAttribute("dna_bankCard").toString());
			chargeBean.setCity(session.getAttribute("dna_city") == "" ? "" : session.getAttribute("dna_city")
					.toString());
			chargeBean.setProvince(session.getAttribute("dna_province").toString());
			chargeBean.setTransaction_money(session.getAttribute("dna_money").toString());
			chargeBean.setTel(session.getAttribute("dna_tel").toString());

			//2.判断用户输入的参数
			request.setAttribute("chargeBean", chargeBean);
			logger.info("用户输入充值金额:" + chargeBean.getTransaction_money() + ";银行卡号:" + chargeBean.getCardNumber()
					+ ";接听电话:" + chargeBean.getTel() + ";银行:" + chargeBean.getbankName());

			//2.1验证充值金额
			String str = CommonUtil.isDNAChargeMoney(chargeBean.getTransaction_money());
			if (str != null) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", str);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}
			//2.2验证银行卡号
			String cardStr = CommonUtil.verifyCardNo(chargeBean.getCardNumber());
			if (cardStr != null) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", cardStr);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}

			//2.3验证用户输入的电话号码
			if (!CommonUtil.verifyMobileId(chargeBean.getTel()) || !CommonUtil.isPhoneCode(chargeBean.getTel())) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", MessageUtil.CAW_DNACharge_PhonePatternError);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}

			// 3.调用jrtLot接口执行查询
			JSONObject paras = new JSONObject();
			String hiddenName = session.getAttribute("dna_hiddenName").toString();
			/****dna灰名单充值(未绑定dna充值的)****/
			paras.put("ladderpresentflag", session.getAttribute("ladderflag"));
			if (!"grayList".equals(hiddenName)) {

				logger.info("姓名:" + chargeBean.getUserName() + ";身份证:" + chargeBean.getDocumentNumber() + ";户籍所在地址:"
						+ chargeBean.getAddressCard());

				//验证充值用户姓名、身份证、户籍所在地
				String danStr = CommonUtil.isDNACharge(chargeBean);
				if (danStr != null) {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", danStr);
					response.getWriter().print(jsonRoot.toString());
					return null;
				}

				//"开卡人姓名：" + 开卡人开卡证件号："开户行所在地："；开卡证件所在地："接听DNA语音电话的电话号码：" + accessMobile
				paras.put(
						"expand",
						chargeBean.getUserName() + "," + chargeBean.getDocumentNumber() + ","
								+ chargeBean.getProvince() + chargeBean.getCity() + "," + chargeBean.getAddressCard()
								+ "," + chargeBean.getTel() + ",false" + "," + chargeBean.getbankName());
			} else {
				//白名单(已经dna绑定的)
				paras.put("expand", " , , , ," + chargeBean.getTel() + ",true," + "");
			}

			//dna充值需要的参数是：userno  amt cardno accesstype cardtype bankid channel subchannel
			paras.put("userno", user.getUSERNO());
			paras.put("accesstype", Constant.WEB_AGENCYNO);
			paras.put("bankid", Constant.DNA_BANKID);
			paras.put("cardtype", Constant.BANK_CARDTYPE);
			paras.put("cardno", chargeBean.getCardNumber());
			paras.put("amt", Integer.parseInt(chargeBean.getTransaction_money()) * 100);
			paras.put("channel", (String) request.getSession().getAttribute("CHANNEL"));
			paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);
			//使用公共方法调用jrtLot做dna账户充值

			//调用新接口dna充值接口

			logger.info("dna充值接口地址>>>" + ResourceBundleUtil.MSBANKURL + "/dnacharge!dnaBankCharge?jsonString="
					+ paras.toString());

			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/dnacharge!dnaBankCharge?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));

			logger.info("dna充值接口返回值>>>" + obj);

			if (obj != null) {
				logger.info("DNA充值jrtLot返回(DNA recharge jrtLot Back):" + obj.toString());
				jsonRoot.put("flag", true);
				jsonRoot.put("jsonValue", obj);
				response.getWriter().print(jsonRoot.toString());
			}

		} catch (Exception e) {
			logger.error("账户充值异常Exception(Account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}
		return null;
	}

	/**
	 * 
	 * 点卡充值
	 * @return
	 * 
	 */
	public String pointCharge() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			logger.info("=====点卡充值开始=====");
			// 得到用户
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			//判断用户输入的参数
			String money = null;
			//获取“是否参加充值赠送彩金活动” 参数值1：参加充值赠送彩金活动 0：不参加充值赠送彩金活动
			String ladderpresentflag = request.getParameter("ladderflag");

			if ("on".equals(ladderpresentflag)) {
				ladderpresentflag = "1";
			} else {
				ladderpresentflag = "0";
			}

			String radioName = request.getParameter("radioName");

			if (radioName.equals(Constant.POINT_NAME_UNICOM)) {
				money = request.getParameter("mzmoney1");
			} else if (radioName.equals(Constant.POINT_NAME_DXJFK)) {
				money = request.getParameter("mzmoney2");
			} else {
				money = request.getParameter("mzmoney");
			}
			request.setAttribute("money", money);
			request.setAttribute("chargeBean", chargeBean);

			logger.info("页面传入的参数为:点卡金额=" + money + ";当为征途卡时金额=" + money + ";点卡类型=" + radioName + ";点卡的卡号="
					+ chargeBean.getCard_no() + ";点卡的密码=" + chargeBean.getCard_pwd());

			//验证点卡金额
			if (radioName.equals(Constant.POINT_NAME_JUNNET) || radioName.equals(Constant.POINT_NAME_SNDACARD)
					|| radioName.equals(Constant.POINT_NAME_ZHENGTU)) {
				String str1 = CommonUtil.isChargeMoney(money);
				if (str1 != null) {
					jsonRoot.put("flag", false);
					jsonRoot.put("message", str1);
					response.getWriter().print(jsonRoot.toString());
					return null;
				}
			}

			//验证点卡卡号
			if (!CommonUtil.isNotEmpty(chargeBean.getCard_no())) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", MessageUtil.CAWE_yeePayCardCharge_NotEmpty);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}
			//验证点卡密码
			if (!CommonUtil.isNotEmpty(chargeBean.getCard_pwd())) {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", MessageUtil.CAWE_yeePayCardCharge_PasswordNotEmpty);
				response.getWriter().print(jsonRoot.toString());
				return null;
			}

			/**
			 * 19pay充值移动和联通充值卡
			 */

			JSONObject paras = new JSONObject();
			paras.put("userno", user.getUSERNO());
			paras.put("bankid", Constant.PAY19_BANKID);
			paras.put("accesstype", Constant.WEB_AGENCYNO);
			if (radioName.equals(Constant.POINT_NAME_JUNNET)) {
				paras.put("paytype", Constant.POINT_JUNNET);
			}
			if (radioName.equals(Constant.POINT_NAME_SNDACARD)) {
				paras.put("paytype", Constant.POINT_SNDACARD);
			}
			if (radioName.equals(Constant.POINT_NAME_ZHENGTU)) {
				paras.put("paytype", Constant.POINT_ZHENGTU);
			}
			paras.put("totalAmount", money);
			paras.put("amt", Integer.parseInt(money) * 100);
			paras.put("card_no", chargeBean.getCard_no());
			paras.put("card_pwd", chargeBean.getCard_pwd());
			paras.put("channel", (String) request.getSession().getAttribute("CHANNEL"));
			paras.put("subchannel", ResourceBundleUtil.DEFALUT_SUBCHANNEL);

			/***
			 * 19pay充值移动和联通充值卡
			 */
			if (radioName.equals(Constant.POINT_NAME_SZX)) {
				paras.put("paytype", Constant.POINT_SZX);
				paras.put("totalAmount", Integer.parseInt(money) * 100);
				paras.put("amt", Integer.parseInt(money) * 100);
			}
			if (radioName.equals(Constant.POINT_NAME_UNICOM)) {
				paras.put("paytype", Constant.POINT_UNICOM);
				paras.put("totalAmount", Integer.parseInt(money) * 100);
				paras.put("amt", Integer.parseInt(money) * 100);
			}
			//当是电信充值卡的时候执行
			if (radioName.equals(Constant.POINT_NAME_DXJFK)) {
				paras.put("paytype", Constant.POINT_DXJFK);
				paras.put("bankid", Constant.PAY19_BANKID);
				paras.put("totalAmount", Integer.parseInt(money) * 100);
				paras.put("amt", Integer.parseInt(money) * 100);
			}

			//使用公共方法调用jrtLot做点卡账户充值
			logger.info(ResourceBundleUtil.MSBANKURL + "/charge!nineteenpayCharge?jsonString=" + paras);
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.MSBANKURL
					+ "/charge!nineteenpayCharge?", "jsonString=" + URLEncoder.encode(paras.toString()), "POST"));
			logger.info("点卡充值jrtLot返回(Point card recharge jrtLot Back):" + obj.toString());
			if (!obj.isNullObject() && ErrorCode.OK.value.equals(obj.getString("error_code"))) {
				jsonRoot.put("flag", true);
				jsonRoot.put("jsonValue", obj);
				response.getWriter().print(jsonRoot.toString());
			} else {
				jsonRoot.put("flag", false);
				jsonRoot.put("message", "点卡充值失败！");
				response.getWriter().print(jsonRoot.toString());
			}
			return null;

		} catch (Exception e) {
			logger.error("点卡账户充值异常Exception(Point card account recharge exception):" + e.toString());
			e.printStackTrace();
			return "error";
		}
	}

	// 判断绑定用户真实姓名与输入姓名是否相同
	public void changeRealName() {
		response.setCharacterEncoding("utf-8");
		// 1.判断用户是否登录
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			String isIe = request.getParameter("isIe");
			String real_name = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中".equals(isIe)) {
					real_name = URLEncoder.decode(request.getParameter("real_name"));
				} else {
					real_name = request.getParameter("real_name");
				}
			} else {
				if ("中".equals(isIe)) {
					real_name = request.getParameter("real_name");
				} else {
					real_name = URLEncoder.decode(request.getParameter("real_name"));
				}
			}
			logger.info("用户信息user >>>>" + user);
			logger.info("用户输入的用户姓名是：》》》" + real_name);
			String name = user.getNAME().trim();
			if (!user.equals(null) || user.equals("")) {
				if (name != null && !"".equals(name)) {
					if (name.equals(real_name)) {
						response.getWriter().print("true");
					} else {
						response.getWriter().print("false");
					}
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * 提现时绑定身份证和真实姓名
	 * @return
	 */
	public String cashCert() {

		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			logger.info("====提现中身份证绑定开始====");
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			if (user == null) {
				out.print(MessageUtil.TIAW_changeUserinfo_LoginMsg);
				return null;
			}

			//2.得到用户输入的信息
			request.setAttribute("tuserinfo", tuserinfo);
			logger.debug("得到用户输入的信息:" + tuserinfo.getNAME() + ";" + tuserinfo.getCERTID());

			//3.验证用户输入的信息	
			if (tuserinfo.getNAME() == null || tuserinfo.getNAME().equals("") || tuserinfo.getNAME().equals(" ")
					|| tuserinfo.getCERTID() == null || tuserinfo.getCERTID().equals("")) {
				out.print(MessageUtil.TIAW_changeUserinfo_NULL);
				return null;
			}
			//用户数据中文进行转解码
			if (!request.getParameter("china").equals("中文")) {
				tuserinfo.setNAME(URLEncoder.decode(tuserinfo.getNAME()));
			}
			// 验证用户名是否带有特殊字符
			if (CommonUtil.checkName(tuserinfo.getNAME()) != null) {
				logger.debug(tuserinfo.getNAME() + "真实姓名只允许为中文");
				out.print(CommonUtil.checkName(tuserinfo.getNAME()));
				return null;
			}
			//验证身份证
			if (CommonUtil.checkCardID(tuserinfo.getCERTID()) != null) {
				out.print(CommonUtil.checkCardID(tuserinfo.getCERTID()));
				return null;
			}
			if (tuserinfo.getCERTID().equals("111111111111111111") || tuserinfo.getCERTID().equals("111111111111111")) {
				out.print("身份证号错误，请重新输入");
				return null;
			}

			//调用新接口修改用户信息
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?", "certid="
					+ tuserinfo.getCERTID() + "&name=" + tuserinfo.getNAME() + "&userno=" + user.getUSERNO(), "POST");

			JSONObject update = JSONObject.fromObject(re);

			logger.info("身份证绑定-得到用户信息修改新接口的返回码" + CommonUtil.getBackValue("errorCode", update));
			if (CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.SJYBD)) {
				logger.debug("身份证绑定失败，请重新填写！");
				out.print("身份证绑定失败，请重新填写！");
				return null;
			}
			if (!update.isNullObject() && CommonUtil.getBackValue("errorCode", update).equals(LotErrorCode.NEW_OK)) {
				//修改成功后根据用户名查询用户信息
				JSONObject tusers;
				if (user.getUSERNAME() != null) {
					tusers = CommonUtil.findUserMessage(user.getUSERNAME());
					logger.debug("查询到的新的用户信息是：》》》" + tuserinfo);

				} else {
					tusers = JSONObject.fromObject(CommonUtil.getBackValue(
							"value",
							JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
									+ "/tuserinfoes?json&find=ByMobileid&mobileid=" + user.getMOBILEID()))));
					logger.debug("查询到的新的用户信息是：》》》" + tuserinfo);
				}
				request.setAttribute("userinfo", tusers);
				JSONReslutUtil.changeUserInfo(request);
				logger.debug("身份证绑定-修改用户信息-根据用户名得到用户的信息：" + tuserinfo);
				request.setAttribute("message", "身份证绑定成功！");

				//查询账户余额
				JSONObject objBalance = CommonUtil.getBalance(user.getUSERNO());
				logger.debug("objBalance:" + objBalance);
				request.setAttribute("objBalance", objBalance);

				if (this.toCash().equals("cash")) {
					out.print("cash");

				} else {
					out.print("cash");
				}
				return null;
			} else {
				request.setAttribute("message", "身份证绑定失败，过程出现异常，请与客服联系！");
				logger.info("身份证绑定失败，过程出现异常，请与客服联系！");
				out.print("cash");
			}
			return null;
		} catch (Exception e) {
			logger.error("身份证绑定出异常Exception(ID abnormal binding):" + e.toString());
			return "error";
		}

	}

	/**
	 * 获取提现页面信息	
	 */
	public void getParam() {
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			String isIe = request.getParameter("isIe");
			logger.info("参数的字符编码是中文：" + isIe);
			String username = "";
			String real_name = "";
			String bank_name = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					username = URLEncoder.decode(request.getParameter("username") == "undefined" ? "" : request
							.getParameter("username").trim());
					real_name = URLEncoder.decode(request.getParameter("real_name"));
					bank_name = URLEncoder.decode(request.getParameter("bank_name"));
				} else {
					username = request.getParameter("username") == "undefined" ? "" : request.getParameter("username")
							.trim();
					real_name = request.getParameter("real_name");
					bank_name = request.getParameter("bank_name");
				}
			} else {
				if ("中文".equals(isIe)) {
					username = request.getParameter("username") == "undefined" ? "" : request.getParameter("username")
							.trim();
					real_name = request.getParameter("real_name");
					bank_name = request.getParameter("bank_name");
				} else {
					username = URLEncoder.decode(request.getParameter("username") == "undefined" ? "" : request
							.getParameter("username").trim());
					real_name = URLEncoder.decode(request.getParameter("real_name"));
					bank_name = URLEncoder.decode(request.getParameter("bank_name"));
				}
			}
			String valid_amount = request.getParameter("valid_amount").trim();
			String withdrawel_money = request.getParameter("withdrawel_money").trim();
			String cardnumber = request.getParameter("cardnumber").trim();
			logger.info("提现参数1username=" + username + "real_name=" + real_name + "bank_name=" + bank_name);
			logger.info("提现参数2username=" + username + "real_name=" + request.getParameter("real_name") + "bank_name="
					+ request.getParameter("bank_name"));
			Double balance = Double.valueOf(valid_amount) - Double.valueOf(withdrawel_money);
			String retbalance = CommonUtil.moneySave2(balance).toString();
			session.setAttribute("cash_username", username);
			session.setAttribute("retbalance", retbalance);
			session.setAttribute("cash_valid_amount", valid_amount);
			session.setAttribute("cash_real_name", real_name);
			session.setAttribute("cash_bank_name", bank_name);
			session.setAttribute("cash_withdrawel_money", withdrawel_money);
			session.setAttribute("cash_cardnumber", cardnumber);
			out.print("cash_next");
		} catch (Exception e) {
			logger.error("提现跳转页面出现异常！" + e.toString());
		}
	}

	/**
	 * dna充值获取用户信息（第一个页面）	
	 */

	public void getDnaParams_first() {
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			String isIe = request.getParameter("isIe");
			String ladderpresentflag = request.getParameter("ladderflag");
			String personNumber = chargeBean.getDocumentNumber().trim();
			String bankCard = chargeBean.getCardNumber().trim();
			String username = "";
			String addressCard = "";
			String bankName = "";
			String province = "";
			String city = "";
			if ("on".equals(ladderpresentflag)) {
				ladderpresentflag = "1";
			} else {
				ladderpresentflag = "0";
			}
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					username = URLEncoder.decode(chargeBean.getUserName() == "undefined" ? "" : chargeBean
							.getUserName().trim());
					bankName = URLEncoder.decode(chargeBean.getbankName());
					addressCard = URLEncoder.decode(chargeBean.getAddressCard().trim());
					province = URLEncoder.decode(chargeBean.getProvince());
					city = URLEncoder.decode(chargeBean.getCity());
				} else {
					username = URLEncoder.decode(chargeBean.getUserName() == "undefined" ? "" : chargeBean
							.getUserName().trim());
					bankName = URLEncoder.decode(chargeBean.getbankName());
					addressCard = URLEncoder.decode(chargeBean.getAddressCard().trim());
					province = URLEncoder.decode(chargeBean.getProvince());
					city = URLEncoder.decode(chargeBean.getCity());
				}
			} else {
				if ("中文".equals(isIe)) {
					username = chargeBean.getUserName() == "undefined" ? "" : chargeBean.getUserName().trim();
					bankName = chargeBean.getbankName();
					addressCard = chargeBean.getAddressCard().trim();
					province = chargeBean.getProvince();
					city = chargeBean.getCity();
				} else {
					username = URLEncoder.decode(chargeBean.getUserName() == "undefined" ? "" : chargeBean
							.getUserName().trim());
					bankName = URLEncoder.decode(chargeBean.getbankName());
					addressCard = URLEncoder.decode(chargeBean.getAddressCard().trim());
					province = URLEncoder.decode(chargeBean.getProvince());
					city = URLEncoder.decode(chargeBean.getCity());
				}
			}
			logger.info("获取到的用户信息是:" + username + "~" + bankCard + "~" + bankName + "~" + province + "~" + city + "~"
					+ personNumber + "~" + addressCard);
			if ("".equals(username) || "".equals(bankCard) || "".equals(bankName) || "".equals(province)
					|| "".equals(city) || "".endsWith(personNumber) || "".equals(addressCard)) {
				out.print("您填写的信息不完整，请继续填写！");
			} else {

				session.setAttribute("dna_username", username);
				session.setAttribute("dna_personNumber", personNumber);
				session.setAttribute("dna_addressCard", addressCard);
				session.setAttribute("dna_bankName", bankName);
				session.setAttribute("dna_bankCard", bankCard);
				session.setAttribute("short_bankCard", bankCard.substring(0, bankCard.length() - 6));
				session.setAttribute("dna_province", province);
				session.setAttribute("dna_city", city);
				session.setAttribute("ladderflag", ladderpresentflag);
				out.print("success");
			}

		} catch (Exception e) {
			logger.error("dna充值获取用户信息出现异常！" + e.toString());
		}
	}

	public void getDnaParams_sescond() {
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			//判断是否是dna绑定用户，如果是获取参加活动信息，不是不获取
			if ("grayList".equals(session.getAttribute("dna_hiddenName"))) {
				String ladderflag = request.getParameter("ladderflag");
				if ("on".equals(ladderflag)) {
					ladderflag = "1";
				} else {
					ladderflag = "0";
				}
				session.setAttribute("ladderflag", ladderflag);
			}
			String money = chargeBean.getTransaction_money().trim();
			String tel = chargeBean.getTel().trim();
			if ("".equals(money) || "".equals(tel)) {
				out.print("您填写的信息不完整，请继续填写！");
			} else {
				session.setAttribute("dna_money", money);
				session.setAttribute("dna_tel", tel);
				out.print("success");
			}

		} catch (Exception e) {
			logger.error("dna充值获取用户信息出现异常！" + e.toString());
		}

	}

	//查询昵称是否被占用
	public void queryNickName() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {

			PrintWriter out = response.getWriter();
			//调用接口查询昵称是否被占用,占用则返回1,未被使用则返回0
			String isIe = request.getParameter("isIe");
			String nickname = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					nickname = URLEncoder.decode((request.getParameter("nickname") == "" || request
							.getParameter("nickname") == "undefined") ? tuserinfo.getNICKNAME() : request
							.getParameter("nickname"));
				} else {
					nickname = request.getParameter("nickname") == ""
							|| request.getParameter("nickname") == "undefined" ? tuserinfo.getNICKNAME() : request
							.getParameter("nickname");
				}
			} else {
				if ("中文".equals(isIe)) {
					nickname = request.getParameter("nickname") == ""
							|| request.getParameter("nickname") == "undefined" ? tuserinfo.getNICKNAME() : request
							.getParameter("nickname");
				} else {
					nickname = URLEncoder.decode((request.getParameter("nickname") == "" || request
							.getParameter("nickname") == "undefined") ? tuserinfo.getNICKNAME() : request
							.getParameter("nickname"));
				}
			}
			logger.info("昵称是：：：：" + nickname);

			JSONObject jsonObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes?json&find=ByNickname&", "nickname=" + nickname, "POST"));
			logger.info("根据昵称查询到的用户信息是：" + jsonObject);
			String errorcode = jsonObject.getString("errorCode");
			if (errorcode.equals(LotErrorCode.NEW_OK)) {
				Tuserinfo tuser = Tuserinfo.setJson(jsonObject.getJSONArray("value").getJSONObject(0));
				session.setAttribute("tuserinfo", tuser);
				out.print("1");
			} else {
				out.print("0");
			}

		} catch (Exception e) {
			//			e.printStackTrace();
			request.setAttribute("message", "服务器内部发生故障!");
			logger.error("查询昵称发生错误！" + e.toString());
		}
	}

	//根据用户名查用户信息
	public void queryUserName() {
		try {
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			//调用接口查询用户是否存在着，存在返回1不存在着返回0
			String isIe = request.getParameter("isIe");
			String username = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中文".equals(isIe)) {
					username = URLEncoder.decode((request.getParameter("username") == "" || request
							.getParameter("username") == "undefined") ? tuserinfo.getNICKNAME() : request
							.getParameter("username"));
				} else {
					username = request.getParameter("username") == ""
							|| request.getParameter("username") == "undefined" ? tuserinfo.getUSERNAME() : request
							.getParameter("username");
				}
			} else {
				if ("中文".equals(isIe)) {
					username = request.getParameter("username") == ""
							|| request.getParameter("username") == "undefined" ? tuserinfo.getUSERNAME() : request
							.getParameter("username");
				} else {
					username = URLEncoder.decode((request.getParameter("username") == "" || request
							.getParameter("username") == "undefined") ? tuserinfo.getNICKNAME() : request
							.getParameter("username"));
				}
			}
			JSONObject jsonObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes?", "json&find=ByUserName&userName=" + username, "POST"));
			logger.info("根据用户名查询到的用户信息是：" + jsonObject);
			String errorcode = jsonObject.getString("errorCode");
			if (errorcode.equals(LotErrorCode.NEW_OK)) {
				Tuserinfo tuser = Tuserinfo.setJson(jsonObject.getJSONObject("value"));
				session.setAttribute("tuserinfo", tuser);
				out.print("1");
			} else {
				out.print("0");
			}

		} catch (Exception e) {
			//			e.printStackTrace();
			request.setAttribute("message", "服务器内部发生故障!");
			logger.error("查询昵称发生错误！" + e.toString());
		}
	}

	/**找回密码
	 * 根据存在作用域里查到的用户信息，比对输入的用户信息
	 */
	public String checkUserInfo() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Tuserinfo tuserinfo = (Tuserinfo) session.getAttribute("tuserinfo");
			String param = request.getParameter("param");
			//比对传进来的参数是邮箱还是手机号
			if (param.indexOf("@") > -1) {
				if (tuserinfo.getEMAIL() == "" || tuserinfo.getEMAIL() == "null") {
					response.getWriter().print("用户未绑定邮箱！");
					return null;
				}
				if (param.equals(tuserinfo.getEMAIL())) {
					session.setAttribute("findPwd_param", param);
					response.getWriter().print("1");
					return null;
				} else {
					response.getWriter().print("0");
					return null;
				}
			} else {
				if (tuserinfo.getMOBILEID() == "" || tuserinfo.getMOBILEID() == "null"
						|| tuserinfo.getMOBILEID() == null) {
					response.getWriter().print("用户未绑定手机号！");
					return null;
				}
				if (param.equals(tuserinfo.getMOBILEID())) {
					session.setAttribute("findPwd_param", param);
					response.getWriter().print("1");
					return null;
				} else {
					response.getWriter().print("0");
					return null;
				}
			}
		} catch (Exception e) {
			request.setAttribute("messge", "比对用户信息出现问题");
			logger.error("比对用户信息失败" + e.toString());
			return null;
		}

	}

	/**
	 * 找回密码发信验证信息
	 * 通过验证作用域里的findPwd_param值，确定是发邮箱还是短信
	 * @return
	 */
	public String sendYZmessage() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String param = session.getAttribute("findPwd_param").toString();
			String session_yzm = session.getAttribute("rand").toString();
			String input_yzm = request.getParameter("yzm");
			if (!session_yzm.equals(input_yzm)) {
				response.getWriter().print("验证码不对，请输入正确的验证码");
				return null;
			}
			if (param != "") {
				//发送验证码
				FindPwdAction fpwdaction = new FindPwdAction();
				if (param.indexOf("@") > -1) {
					ryc_sendMessageByEmail_new();
					return null;
				} else {
					ryc_sengmsgByphone_new();
					return null;
				}
			} else {
				response.getWriter().print("未获取用户输入的信息");
				return null;
			}
		} catch (Exception e) {
			logger.error("调用发送验证信息失败" + e.toString());
			return null;
		}

	}

	public static final String INTERFACE_OK = "0";

	/**新找回密码发送手机验证码功能
	 * 
	 * @throws IOException
	 */
	public void ryc_sengmsgByphone_new() throws IOException {
		response.setCharacterEncoding("utf-8");
		String gotoValue = "";
		String phone = session.getAttribute("findPwd_param").toString();
		String email = String.valueOf(session.getAttribute("email"));
		if (email == null) {
			email = "";
		}
		try {
			//获取短信验证码
			Random random = new Random();

			// 取随机产生的认证码(4位数字)
			String sRand = "";
			String rands = (String) (request.getSession().getAttribute("rand_ruyicai") == null ? "" : request
					.getSession().getAttribute("rand_ruyicai"));
			if (rands.equals("")) {
				// 取随机产生的认证码(4位数字)
				for (int i = 0; i < 4; i++) {
					String rand = String.valueOf(random.nextInt(10));
					sRand += rand;
				}
				// 将认证码存入SESSION
				session.setAttribute("rand_ruyicai", sRand);
				logger.info("验证码为:" + sRand);
			} else {
				sRand = rands;
				logger.info("验证码为:" + rands);
			}
			// 得到发送到用户的手机短信内容
			String retMes = ResourceBundleUtil.FIND_MES;
			retMes = new String(retMes.getBytes("ISO-8859-1"), "utf-8");
			String newMes = retMes.replace("{mes}", sRand);
			logger.debug("得到发送给用户的信息内容是：" + newMes);
			String count = null;
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setPhoneCode(Long.valueOf(phone));
			phoneInfo.setRules(1);
			int flag = phoneInfoService.queryPhoneInfoCount(phoneInfo);
			if (flag < 3) {
				count = phoneInfoService.add(phoneInfo);
				if (FinalVar.INSERT_SUCCESS.equals(count)) {
					request.setAttribute("msg", "手机信息添加成功");
					logger.info("手机计数添加成功");
				} else {
					logger.info("手机计数添加失败");
				}
			} else {
				logger.info("手机信息每天超过3次则发送失败");
			}
			if (flag < 3) {
				// 得到手机发送信息接口的信息
				String md5code = phone + INTERFACE_KEY;
				String md5 = PaySign.EncoderByMd5(md5code);
				if (md5.indexOf("+") > -1) {
					md5 = md5.replaceAll("\\+", "_");
				}
				md5 = URLEncoder.encode(md5);
				JSONObject phoneMessage = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
						ResourceBundleUtil.LINKSMGURL + "sms/send?",
						"mobileIds=" + phone + "&text=" + URLEncoder.encode(newMes) + "&channelName=", "POST"));
				logger.debug("得到手机接口的信息是：" + phoneMessage);
				if (phoneMessage.getString("errorCode").equals(INTERFACE_OK)) {
					session.setAttribute("phoneMesg", "系统已经向您的手机" + phone + "发送免费的验证短信，请查看短信！");
					//	session.setAttribute("sendMsgByP", username);
					session.removeAttribute("userName");
					logger.info("系统已经向您的手机发送免费的验证短信，请查看短信！");
					gotoValue = "1phone";
				} else {
					session.setAttribute("phoneMesg", "用户的手机验证码发送失败！");
					logger.info("用户的手机验证码发送失败！");
					//	session.setAttribute("sendMsgByP", username);
					session.removeAttribute("userName");
					gotoValue = "用户的手机验证码发送失败！";
				}
			} else {
				session.setAttribute("phoneMesg", "<font color='red'>抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信</font>");
				//response.getWriter().print("<font color=\"red\">抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信</font>");
				logger.info("抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信");
				//session.setAttribute("sendMsgByP", username);
				session.removeAttribute("userName");
				gotoValue = "抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信";
			}

		} catch (Exception e) {
			logger.info("找回密码发生异常！");
			session.setAttribute("phoneMesg", "找回密码发生异常，请联系客服人员！");
			gotoValue = "找回密码发生异常，请联系客服人员！";
			e.printStackTrace();
		} finally {
			PrintWriter out = response.getWriter();
			out.print(gotoValue);
		}
	}

	/**
	 * 新找回密码发送邮件功能
	 * @throws IOException
	 */
	public void ryc_sendMessageByEmail_new() throws IOException {
		response.setCharacterEncoding("utf-8");
		String gotoValue = ""; // 用户登录后要跳转的地址，如果中间出现错误，则跳转到错误的地址。
		// 得到用户信息
		try {
			logger.info("====博雅彩邮箱找回密码开始====");
			//获取用户的手机和邮箱
			String phone = session.getAttribute("phone") == null ? "" : session.getAttribute("phone").toString();
			String email = session.getAttribute("findPwd_param").toString();

			//添加链接的唯一标识
			String check = String.valueOf(new Date().getTime());
			String code = phone + check + "3gcaipiao";
			String mac = PaySign.EncoderByMd5(code);
			mac = URLEncoder.encode(mac);
			//获取用户的昵称
			Tuserinfo tuserinfo = (Tuserinfo) session.getAttribute("tuserinfo");
			String nickname = NameUtil.getNameUtil(tuserinfo);
			//查看用户发送邮件的次数
			int count = 3;
			PhoneInfo phoneInfo = new PhoneInfo();
			phoneInfo.setEmail(email);
			phoneInfo.setRules(1);
			count = phoneInfoService.queryPhoneInfoCountByEmail(phoneInfo);
			if (count < 3) {
				String code1 = phoneInfoService.add(phoneInfo);
				if (FinalVar.INSERT_SUCCESS.equals(code1)) {
					request.setAttribute("msg", "邮箱信息添加成功");
					logger.info("邮箱计数添加成功");
				} else {
					logger.info("邮箱计数添加失败");
				}
			} else {
				logger.info("邮箱信息每天超过3次则发送失败");
			}
			if (count < 3) {
				// 得到邮箱发送信息接口的信息
				session.setAttribute("emailMsg", "系统已经向您的邮箱发送免费的邮件，请及时查看邮箱");
				logger.info("系统已经向您的邮箱发送免费的邮件，请及时查看邮箱！");
				// 验证邮箱
				String emailUrl = UtilGetEmailUrl.getEmailUrl(email.split("@")[1]);
				session.setAttribute("emailUrl", emailUrl);

				//获取链接地址
				String url = ResourceBundleUtil.FINFPEDBYEMAIL.replace("{mac}", mac).replace("{phone}", phone)
						.replace("{email}", email).replace("{check}", check);
				String emailmessage = MessageUtil.RCY_EMAILSESSAGE.replace("{nickname}", nickname)
						.replace("{url}", url);

				String[] emails = { email };
				UtilEmail.utilSend(emails, "博雅彩找回密码", emailmessage);
				session.setAttribute("email", email);
				gotoValue = "1email";
			} else {
				logger.info("抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次邮件");
				session.setAttribute("emailMsg", "抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次邮件");
				session.setAttribute("email", email);
				gotoValue = "抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次邮件";
			}
		} catch (Exception e) {
			logger.error("找回密码发邮件产生异常 (Forgot your password sent an exception message):" + e.toString());
			session.setAttribute("sengMsgByE", "发送邮件！");
			session.removeAttribute("userName");
			gotoValue = "找回密码发邮件产生异常,请联系客服人员！";

		} finally {

			PrintWriter out = response.getWriter();
			out.print(gotoValue);
		}

	}

	public int createEmail(String macFrom, String emailCode, String rule) {
		Integer rules = Integer.valueOf(rule == "" ? "0" : rule);
		int flag = 3;
		try {
			if (macFrom != null && !"".equals(macFrom) && emailCode != null && !"".equals(emailCode)) {
				String codes = emailCode + "3gcaipiao";
				String macChack;
				macChack = PaySign.EncoderByMd5(codes);
				if (macChack.equals(macFrom)) {
					logger.info("mac一致开始传送");

				} else {
					logger.info("mac不一致传送失败");
				}
			} else {
				logger.info("mac地址非法");
			}
		} catch (Exception e) {
			logger.info("添加邮箱计数异常");
			e.printStackTrace();
		}
		return flag;
	}

	//支付宝用户设置昵称
	public String appsetNickName() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String isIe = request.getParameter("isIe");
			String nickname = "";
			if (request.getParameter("msie") != null) {
				if (request.getParameter("msie").equals("1") && !"中".equals(isIe)) {
					nickname = URLEncoder.decode(request.getParameter("nickname"));
				} else {
					nickname = request.getParameter("nickname");
				}
			} else {
				if ("中".equals(isIe)) {
					nickname = request.getParameter("nickname");
				} else {
					nickname = URLEncoder.decode(request.getParameter("nickname"));
				}
			}
			logger.info("昵称是：：：：" + nickname);
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			//调用新接口修改昵称
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/tuserinfoes/modify?",
					"nickname=" + nickname + "&userno=" + user.getUSERNO(), "POST");
			user = Tuserinfo
					.setJson(JSONObject.fromObject(CommonUtil.getBackValue("value", JSONObject.fromObject(re))));
			logger.info("修改昵称后的用户信息是：：：" + user);
			//修改成功后，修改缓存中的用户信息
			request.setAttribute("userinfo",
					JSONObject.fromObject(CommonUtil.getBackValue("value", JSONObject.fromObject(re))));
			JSONReslutUtil.changeUserInfo(request);
			response.getWriter().print("success");
		} catch (Exception e) {
			request.setAttribute("messge", "昵称设置失败，请稍候再试！");
			logger.error("设置昵称失败" + e.toString());

		}
		return null;
	}

	//博雅彩修改昵称
	//------------------切换追号的新接口---------------------

	/**
	 * 追号查询
	 * @return
	 */
	public String trackingNumberSelectAll() {
		try {
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));
			String lotNo = request.getParameter("lotNo") == null ? "" : request.getParameter("lotNo");
			String state = request.getParameter("state") == null ? "" : request.getParameter("state");
			logger.info("state is >>>" + state);
			String startDate = request.getParameter("beginTime");
			String stopDate = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");
			;
			pageCount = (request.getParameter("pageCount2") == "" || request.getParameter("pageCount2") == null || request
					.getParameter("pageCount2").equals("undefined")) ? 20 : Integer.valueOf(request
					.getParameter("pageCount2"));
			request.setAttribute("lotno", lotNo);
			request.setAttribute("state", state);
			request.setAttribute("pageCount", pageCount);
			if (!(stopDate == null || stopDate.equals("") || stopDate.equals("undefined"))) {
				request.setAttribute("stopDates", stopDate);
				stopDate = stopDate.replace("-", "");
			}
			if (!(startDate == null || startDate.equals("") || startDate.equals("undefined"))) {
				request.setAttribute("startDates", startDate);
				startDate = startDate.replace("-", "");

			} else {
				startDate = "2010-01-01".replace("-", "");
			}

			//调用接口执行查询
			String userno = "";
			JSONObject js = JSONReslutUtil.getUserNo(request);
			if (js != null && "0".equals(js.getString("errorCode"))) {
				userno = js.getString("value");
			}
			JSONObject obj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTsubscribe?",
							"userno=" + userno + "&beginTime=" + startDate + "&endTime=" + stopDate + "&lotno=" + lotNo
									+ "&state=" + state + "&startLine=" + (pageIndex - 1) * pageCount + "&endLine="
									+ pageCount, "POST")).getJSONObject("value");

			logger.debug("新接口查询追号记录的返回结果：" + obj);
			JSONArray arrList = obj.getJSONArray("list");
			JSONArray TodyList = new JSONArray();//今天的记录
			JSONArray YestdayList = new JSONArray();//昨天的记录
			JSONArray MoreOldList = new JSONArray();//更早的记录
			String count = (String) session.getAttribute("count");
			//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
			for (int i = 0; i < arrList.size(); i++) {
				JSONObject rec = arrList.getJSONObject(i);
				Long tody = df.parse(df.format(new Date())).getTime();
				long time = df.parse(df.format(new Date(rec.getLong("changetime")))).getTime();
				rec.put("time", rec.getLong("changetime"));
				rec.put("ordertime",
						new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("changetime"))));
				rec.put("amt", CommonUtil.moneySave2((rec.getDouble("amount") * rec.getDouble("batchnum")) / 100));
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

			JSONObject amount = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTransWithTongji?"
							+ "userno=" + userno + "&beginTime=" + startDate + "&endTime=" + stopDate
							+ "&types=8&type=6")).getJSONObject("value");

			logger.debug("arrList=" + arrList + ";DealMoney:" + amount + ";");
			if (!amount.isNullObject()) {
				request.setAttribute("inDealMoney", amount);
			}

			request.setAttribute("jaToPage", newList);
			String pageHtml = CommonUtil.getPageToHtml(pageIndex, Integer.parseInt(obj.getString("totalResult")),
					pageCount, 4);
			//最大页数
			request.setAttribute("pageHtml", pageHtml);
			return "trackingNumberSelectAll";
		} catch (Exception e) {
			logger.error("追号查询出异常Exception(No check out the unusual catch):" + e.toString());
			return "error";
		}

	}

	/***
	 * 追号详情查询
	 * @throws IOException 
	 */
	public String trackingNumberInfo() {
		String lotno = "";
		int isShouyilu = 0; //判断是不是 收益率追号
		try {
			JSONObject tusers = JSONReslutUtil.getUserInfo(request);
			if (tusers != null && "0".equals(tusers.getString("errorCode"))) {
				tusers = tusers.getJSONObject("value");
			}
			DateFormat df = new SimpleDateFormat("yyyyMMdd");
			String startDate = "20110101";
			String stopDate = df.format(new Date());
			lotno = request.getParameter("lotNo") == null ? "" : request.getParameter("lotNo");
			String subscribeFlowno = request.getParameter("subscribeFlowno") == null ? "" : request
					.getParameter("subscribeFlowno");
			String orderId = request.getParameter("orderId") == null ? "" : request.getParameter("orderId");
			logger.info("追号详情查询传入参数(Select subscribe info in parameter is)：subscribeFlowno=" + subscribeFlowno
					+ ":::orderId:" + orderId);

			//获取追号信息
			if ("".equals(subscribeFlowno)) {
				request.setAttribute("message", "您的操作不正确，请刷页面后重试！");
				return "error";
			}
			JSONObject subscribeObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
							+ "/select/getTsubscribeByFlowno?flowno=" + subscribeFlowno)).getJSONObject("value");
			logger.info("getTsubscribeByFlowno:" + subscribeObj);
			if (subscribeObj.isNullObject()) {
				request.setAttribute("message", "您查询的信息不存在！");
				return "formError";
			} else {
				String state = subscribeObj.getString("state");
				if (state.equals("2")) {
					subscribeObj.put("cancel", subscribeObj.getString("lastnum"));
				} else {
					subscribeObj.put("cancel", 0);
				}
				subscribeObj
						.put("ordertime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(subscribeObj
								.getLong("ordertime"))));
				subscribeObj.put("amt", subscribeObj.getInt("amount") * subscribeObj.getInt("batchnum") / 100);

			}

			//通过追号flowno获取order列表

			JSONObject ordersObj = JSONObject.fromObject(
					JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL + "/select/getTorderByScribeno?",
							"flowno=" + subscribeFlowno + "&startLine=0&endLine=153", "POST")).getJSONObject("value");
			logger.info("getTorderByScribeno:" + ordersObj);
			if (ordersObj.isNullObject()) {
				request.setAttribute("message", "您查看的追号记录数据异常，请及时联系客服人员！");
				return "formError";
			}
			JSONArray ordersArray = ordersObj.getJSONArray("list");
			if (ordersArray.isEmpty()) {
				request.setAttribute("message", "您查看的追号记录数据异常，请及时联系客服人员！");
				return "formError";
			}
			JSONArray ordersArrayNew = new JSONArray();
			String zhuihaoTouru = "0";//当前已追金额
			String dipinBatnum = "0";//低频彩 追号 每期倍数
			for (int i = 0; i < ordersArray.size(); i++) {
				JSONObject rec = ordersArray.getJSONObject(i).getJSONObject("torder");
				String endTime = rec.getString("endtime");
				if (endTime != null && !"null".equals(endTime) && !"".equals(endTime)) {
					Date dateNow = new Date(new Long(endTime));
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					String endTimeStr = sdf.format(dateNow);
					rec.put("endTimeStr", endTimeStr);
				} else {
					rec.put("endTimeStr", "--");
				}

				String desc = rec.getString("desc");
				if (desc.indexOf("_") != -1) {
					String str[] = desc.split("_");
					if (str.length == 3) {
						rec.put("touru", str[0]);
						if (subscribeObj.getInt("batchnum") - subscribeObj.getInt("lastnum") == (i + 1)) {
							zhuihaoTouru = str[0];
						}
						dipinBatnum = str[1];
						rec.put("shouyi", str[1]);
						rec.put("rate", str[2]);
						if (str[2].indexOf("%") > -1 && isShouyilu == 0) {
							isShouyilu = 1;
						}
					} else {
						rec.put("touru", "--");
						rec.put("shouyi", "--");
						rec.put("rate", "--");
					}
				} else {
					rec.put("touru", "--");
					rec.put("shouyi", "--");
					rec.put("rate", "--");
				}
				rec.put("dipinbatNum", dipinBatnum);
				if (rec.getInt("orderstate") == TorderState.orderState_Null.value()) {
					rec.put("orderstate", TorderState.orderState_Null.memo());
				} else if (rec.getInt("orderstate") == TorderState.orderState_ok.value()) {
					rec.put("orderstate", TorderState.orderState_ok.memo());
				} else if (rec.getInt("orderstate") == TorderState.orderState_wait.value()) {
					rec.put("orderstate", TorderState.orderState_wait.memo());
				} else if (rec.getInt("orderstate") == TorderState.orderState_Cancel.value()) {
					rec.put("orderstate", TorderState.orderState_Cancel.memo());
				}
				rec.put("winbasecode",
						CodeUtil.FormatWinCode(rec.getString("lotno"),
								ordersArray.getJSONObject(i).getJSONObject("tuseraction").getString("wincode"), "")
								.getString("code"));
				ordersArrayNew.add(rec);
			}
			//判断是否传入了orderid 如果传入了，则使用传入的 如果没传入，则使用查询出的第一个order记录的ID
			if ("".equals(orderId)) {
				orderId = ordersArray.getJSONObject(0).getJSONObject("torder").getString("id");
			}
			//获取追号的投注号码
			JSONArray lotArray = new JSONArray();
			String[] codeList = ordersArrayNew.getJSONObject(0).getString("orderinfo").split("!");
			for (int i = 0; i < codeList.length; i++) {
				String[] betInfo = codeList[i].split("_");//0注吗_1倍数_2oneamt_3amt
				JSONObject rec = JSONObject.fromObject("{lotno:\"" + ordersArrayNew.getJSONObject(0).getString("lotno")
						+ "\",betcode:\"" + betInfo[0] + "\"}");
				rec.put("zhuma",
						CodeUtil.getCodeString(ordersArrayNew.getJSONObject(0).getString("lotno"),
								rec.getString("betcode"), betInfo[1]));
				lotArray.add(rec);
			}
			String moreMessage = "";
			if (lotArray.size() > 5) {
				moreMessage = "<a href='/chwl/function/rules/moreBetInfo.jsp?orderid=" + orderId
						+ "' title='显示全部内容'>显示全部内容</a>";
			} else {
				moreMessage = "";
			}
			request.setAttribute("moreMessage", moreMessage);
			request.setAttribute("subscribeObj", subscribeObj);
			request.setAttribute("ordersArray", ordersArrayNew);
			request.setAttribute("lotArray", lotArray);
			request.setAttribute("zhuihaoTouru", zhuihaoTouru);
			request.setAttribute("username", NameUtil.getNameUtilJson(tusers));
		} catch (Exception e) {
			e.printStackTrace();
			e.getStackTrace();
		}
		if (lotno.equals(Constant.NMKS) || lotno.equals(SSCConstant.SSC) || lotno.equals(Constant.SYXW)
				|| lotno.equals(Constant.SYYDJ)) {
			if (isShouyilu == 1) {
				return "cancelTrackingNumberInfo";
			} else {
				return "trackingNumberInfoByDipin";
			}
		} else {
			return "trackingNumberInfoByDipin";
		}
	}

	/**
	 * 终止追号
	 * @param tsubscribeNo
	 * @throws IOException 
	 */
	public void cancelTrack() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String tsubscribeNo = request.getParameter("betCode");
		try {
			JSONObject json = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/bet/giveupSubscribe", "tsubscribeNo=" + tsubscribeNo, "POST"));
			response.getWriter().print(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 设置开奖短信
	 * @param userno
	 *            用户编号
	 * @param smstype
	 *            短信类型：    OPEN(1, "open"), // 开奖短信
	 *           			 HITSMALL(2, "hitsmall"), // 中小奖短信
	 *           			 HITBIG(3, "hitbig"), // 中大奖短信
	 * @param state
	 *            是否有效 0:不发送,1:发送
	 */
	public String setSMS() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String userno = "";
			JSONObject js = JSONReslutUtil.getUserNo(request);
			if (js != null && "0".equals(js.getString("errorCode"))) {
				userno = js.getString("value");
			}
			String smstype = request.getParameter("smstype");
			String state = request.getParameter("state");

			JSONObject returnObject = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
					ResourceBundleUtil.LINKSMGURL + "usersetting/saveorupdate?", "userno=" + userno + "&smstype="
							+ smstype + "&state=" + state, "POST"));

			logger.info("设置开奖短信返回数据:(seted sms returned )" + returnObject);
			if (returnObject.getString("errorCode").equals(LotErrorCode.NEW_OK)) {
				response.getWriter().print("success");
			} else {
				return "error";
			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}

	/**
	 * 查询用户短信设置
	 * 
	 * @param userno
	 *            用户编号
	 * @param smstype
	 *            短信类型
	 * @return
	 */
	public String findSMS() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			String userno = "";
			JSONObject js = JSONReslutUtil.getUserNo(request);
			if (js != null && "0".equals(js.getString("errorCode"))) {
				userno = js.getString("value");
			}
			String smstype = request.getParameter("smstype");
			String url = ResourceBundleUtil.LINKSMGURL + "usersetting/findbyuserno?userno=" + userno + "&smstype="
					+ smstype;
			JSONObject returnObje = JSONObject.fromObject(Http.get(url, null));

			logger.info("查询开奖短信返回数据:(seted sms returned )" + returnObje);
			if (returnObje.getString("errorCode").equals(LotErrorCode.NEW_OK)) {
				JSONObject jsonValue = returnObje.getJSONObject("value");
				if (jsonValue.isEmpty() || jsonValue == null) {
					response.getWriter().print("1");
					return null;
				}
				String needToSend = jsonValue.getString("needToSend");
				response.getWriter().print(needToSend);
				return null;
			} else {
				return "error";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}

	/*-----------------------------------积分查询- start-----------------------------------*/
	/**
	 * 用户积分查询
	 * @return
	 */
	public String getUserScoreList() {
		try {
			//获取分页，默认为第一页
			Integer pageIndex = request.getParameter("pageIndex") == null ? 1 : Integer.valueOf(request
					.getParameter("pageIndex"));//第一页
			Integer pageNum = (request.getParameter("pageCount") == null || request.getParameter("pageCount").equals(
					"undefined")) ? pageCount : Integer.valueOf(request.getParameter("pageCount"));//页数
			//得到传入条件
			String beginTime = request.getParameter("beginTime");//开始时间
			String endTime = request.getParameter("endTime") == null ? df.format(new Date()) : request
					.getParameter("endTime");//结束时间
			request.setAttribute("pageCount", pageNum);
			if (!(endTime == null || endTime.equals("") || endTime.equals("undefined"))) {
				request.setAttribute("stopDate", endTime);
				endTime += " 23:59:59";
			}
			if (!(beginTime == null || beginTime.equals("") || beginTime.equals("undefined"))) {
				request.setAttribute("startDate", beginTime);
			} else {
				beginTime = "2010-01-01";
			}
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}

			Map<String, String> conditionMap = new HashMap<String, String>();
			conditionMap.put("GED_createTime", beginTime);
			conditionMap.put("LED_createTime", endTime);
			JSONObject condition = JSONObject.fromObject(conditionMap);//条件JSONObj（对应后台数据库字段）
			//					String url =ResourceBundleUtil.LINKSCOREURL + "/findScoreDetailByUserno?userno=" + userno +"&startLine="+ (pageIndex-1)*pageNum +"&endLine=" + pageNum+"&condition=" + condition.toString();
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKSCOREURL
					+ "/findScoreDetailByUserno?", "userno=" + user.getUSERNO() + "&startLine=" + (pageIndex - 1)
					* pageNum + "&endLine=" + pageNum + "&condition=" + condition.toString(), "POST"));
			JSONArray TodyList = new JSONArray();//今天的记录
			JSONArray YestdayList = new JSONArray();//昨天的记录
			JSONArray MoreOldList = new JSONArray();//更早的记录
			if (LotErrorCode.NEW_OK.trim().equals(obj.getString("errorCode").trim())) {
				logger.info("get presented lottery list:" + obj);
				obj = obj.getJSONObject("value");
				JSONArray arrList = obj.getJSONArray("list");

				//很据认购时间统计出今天，昨天以及更早的记录分别保存起来
				for (int i = 0; i < arrList.size(); i++) {
					JSONObject rec = arrList.getJSONObject(i);
					long tody = df.parse(df.format(new Date())).getTime();
					long time = 0;
					time = df.parse(df.format(new Date(rec.getLong("createTime")))).getTime();
					rec.put("createTime",
							new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(rec.getLong("createTime"))));
					rec.put("scoreType", CommonUtil.scoreType(rec.getString("scoreType")));
					rec.put("score", rec.getInt("score"));
					if ("null".equals(rec.getString("currentScore"))) {
						JSONObject objs = JSONObject.fromObject(JSONReslutUtil.getResultMessage(
								ResourceBundleUtil.LINKSCOREURL + "/findScoreByUserno?", "userno=" + user.getUSERNO(),
								"POST"));
						rec.put("currentScore", objs.getJSONObject("value").getInt("score"));
					}
					if (tody - time == 0) {
						TodyList.add(rec);
					} else if (tody - time == 24 * 3600 * 1000) {
						YestdayList.add(rec);
					} else {
						MoreOldList.add(rec);
					}
				}
				String pageHtml = CommonUtil.getTZPageToHtml(pageIndex, Integer.parseInt(obj.getString("totalResult")),
						pageNum, 4);
				request.setAttribute("pageHtml", pageHtml);
			}
			//将分组的记录保存到一个json中
			JSONObject newList = new JSONObject();
			newList.put("today", TodyList);
			newList.put("yestday", YestdayList);
			newList.put("oldday", MoreOldList);
			request.setAttribute("list", newList);
			return "userScoreList";
		} catch (Exception e) {
			logger.error("用户积分变动记录查询出异常Exception(Check out the unusual findScoreDetailByUserno):" + e.toString());
			return "error";

		}
	}

	/**
	 * 查询用户积分
	 * @return 
	 * @throws IOException 
	 */

	public void getUserScore() throws IOException {
		response.setCharacterEncoding("utf-8");
		JSONObject obj = new JSONObject();
		try {
			logger.info("====领取彩票发送验证码====");
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			logger.info("发送给用户的相关信息是：用户编号" + user.getUSERNO());
			String url = ResourceBundleUtil.LINKSCOREURL + "/findScoreByUserno?userno=" + user.getUSERNO();
			obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKSCOREURL
					+ "/findScoreByUserno?", "userno=" + user.getUSERNO(), "POST"));
			logger.info("recivePresent 返回结果" + obj);

		} catch (Exception e) {
			logger.error("获取用户积分出先异常exception(get user score return excpetion):" + e.toString());
		}
		PrintWriter out = response.getWriter();
		out.print(obj.getJSONObject("value"));

	}

	/**
	 * 用户积分兑换
	 * @return 
	 * @throws IOException 
	 */

	public void transScore2Money() throws IOException {
		response.setCharacterEncoding("utf-8");
		String goValue = "SUCC";
		try {
			// 1.得到用户信息
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			logger.info("发送给用户的相关信息是：用户编号" + user.getUSERNO());
			String scroe = request.getParameter("scoreNum") == null ? "" : request.getParameter("scoreNum");
			if (user.getUSERNO() == null) {//未登录提示
				PrintWriter out = response.getWriter();
				goValue = "UNLOGIN";
				return;
			} else {
				String url = ResourceBundleUtil.LINKSCOREURL + "/transScore2Money?userno=" + user.getUSERNO()
						+ "&score=" + scroe;
				logger.info("积分兑换调用接口：" + url);
				JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKSCOREURL
						+ "/transScore2Money?", "userno=" + user.getUSERNO() + "&score=" + scroe, "POST"));
				logger.info("recivePresent 返回结果" + obj);
				if (!LotErrorCode.NEW_OK.trim().equals(obj.getString("errorCode").trim())) {
					goValue = obj.getString("value");
					return;
				} else {
					goValue = "您成功兑换了" + Integer.parseInt(obj.getJSONObject("value").getString("money")) / 100 + "元彩金！";
					return;
				}
			}

		} catch (Exception e) {
			logger.error("获取用户积分出先异常exception(get user score return excpetion):" + e.toString());
		} finally {
			PrintWriter out = response.getWriter();
			out.print(goValue);
		}
	}

	/**
	 * 用户积分兑换
	 * @return 
	 * @throws IOException 
	 */

	public static void addUserScore(String userno, String bussinessId, Integer scoreType, String buyAmt,
			String totalAmt, String giveScore) {
		try {
			logger.info("====调用后台节后增加积分====");
			String url = "userno=" + userno + "&scoreType=" + scoreType;
			if (bussinessId != null) {
				url += "&bussinessId" + bussinessId;
			} else if (buyAmt != null) {
				url += "&buyAmt" + buyAmt;
			} else if (totalAmt != null) {
				url += "&totalAmt" + totalAmt;
			} else if (giveScore != null) {
				url += "&giveScore" + giveScore;
			}
			String aa = ResourceBundleUtil.LINKSCOREURL + "/addTuserinfoScore?" + url;
			JSONObject obj = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKSCOREURL
					+ "/addTuserinfoScore?", url, "POST"));
			logger.info("recivePresent 返回结果" + obj);
		} catch (Exception e) {
			logger.error("获取用户积分出先异常exception(get user score return excpetion):" + e.toString());
		}
	}

	/*-----------------------------------积分查询- end-----------------------------------*/
	/*------------------头像上传------start-----------------------------*/
	/**
	 * @return 
	 * @throws IOException 
	 */

	public void uploadimg() throws IOException {
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		String goValue = "SUCC";
		try {
			logger.info("====上传获取图片名称====");
			// 1.得到用户信息
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			JSONObject userobj = null;
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				userobj = JSONObject.fromObject(userinfojson.getString("value"));
				logger.info("上传图片调用Tuserinfo方法" + userobj);
			}
			if (userobj == null) {//未登录提示
				goValue = "UNLOGIN";
				return;
			} else {
				logger.info("发送给用户的相关信息是：用户编号" + userobj.getString("userno"));
				String headImg = this.uploadPic(userobj.getString("userno"));
				goValue = headImg;
			}
		} catch (Exception e) {
			logger.error("获取上传图片的地址exception(get picture's path return excpetion):" + e.toString());
		} finally {
			response.setStatus(200);
			String retxt = "{src:'" + goValue + "',status:'success'}";
			response.getWriter().print(retxt);
		}
	}

	@SuppressWarnings({ "unused", "finally" })
	private String uploadPic(String userno) {
		if (fileName == null) {
			return "";
		}
		logger.info("文件上传中fileName" + fileName);
		String Filepic = null;
		String picName = System.currentTimeMillis() + "."
				+ fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
		try {
			Date date = new Date();
			SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
			String time = sf.format(date);
			// ruyicai/upload/usernoY.jpg
			String path = uploadLocation + "upload" + File.separator + userno + "Y.jpg";
			logger.info("文件上传 ,上传地址path" + path);
			String Filepath = uploadLocation + "upload" + File.separator;
			logger.info("文件上传 ,上传文件地址Filepath" + Filepath);
			File file = new File(Filepath);
			if (!file.exists()) {
				file.mkdir();
			}
			logger.info("文件上传upload" + upload);
			FileUtils.copyFile(upload, new File(path));
			Filepic = File.separator + "upload" + File.separator + userno + "Y.jpg";
			logger.info("文件上传 ,储存到数据库中的文件地址Filepath" + Filepic);
		} catch (Exception e) {
			e.printStackTrace();
			picName = null;
		} finally {
			return Filepic.replaceAll("\\\\", "/");
		}
	}

	/**
	 * 上传用户头像，修改用户信息
	 */
	public String modifyHeadPath() {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		try {
			Tuserinfo user = new Tuserinfo();
			JSONObject userinfojson = JSONReslutUtil.getUserInfo(request);
			if (!userinfojson.isNullObject() && "0".equals(userinfojson.getString("errorCode"))) {
				user = Tuserinfo.setJson(JSONObject.fromObject(userinfojson.getString("value")));
			}
			logger.info("获取到的用户信息是：" + user);
			String headPath = request.getParameter("headPath");
			JSONObject re = JSONObject.fromObject(JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
					+ "/tuserinfoes/modify?", "headpath=" + headPath + "&userno=" + user.getUSERNO(), "POST"));

			logger.info("修改用户信息时返回数据是:" + re);
			if (CommonUtil.getBackValue("errorCode", re).equals(LotErrorCode.NEW_OK)) {
				JSONObject userinfo = re.getJSONObject("value");
				request.setAttribute("userinfo", userinfo);
				String reerrcode = JSONReslutUtil.changeUserInfo(request);
				if ("0".equals(reerrcode)) {
					logger.info("修改缓存中的用户成功");
				} else {
					logger.info("修改缓存中用户信息失败");
				}
				response.getWriter().print("success");
				return null;
			}
		} catch (Exception e) {
			logger.info("注册修改用户信息出现异常" + e.toString());
			return "error";
		}
		return null;
	}
	/*------------------头像上传------end-----------------------------*/

}
