package com.ruyicai.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.ResourceBundle;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.util.CodeUtil;
import com.jrt.invokeLot.service.JSonResultService;
import com.jrt.invokeLot.util.JSONReslutUtil;
import com.jrt.invokeLot.util.LotErrorCode;
import com.jrt.invokeLot.util.TCCodeUtil;
import com.ruyicai.bean.ChargeBean;
import com.ruyicai.bean.TransactionBean;
import com.ruyicai.bean.Tuserinfo;

/**
 * 
 * @classname: CommonUtil
 * @description: 公共类
 * @author: 徐丽
 * @date: 2010-11-11 上午10:07:03
 * 
 */
public class CommonUtil {
	private static Logger logger = Logger.getLogger(CommonUtil.class);
	private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai") ;
	private static String linkURL = rbint.getString("linkURL");
	private static String wan1 = "1512-F47104-00-01-";
	private static String wan2 = "1512-F47103-00-01-";
	private static String wan3 = "1512-F47102-00-01-";
	private static String wan4 = "1512-F47101-00-01-";
	
	public static DateFormat dayf = new SimpleDateFormat("yyyy-MM-dd");
	public static String addDay(String time) throws ParseException{
		Calendar cal = Calendar.getInstance();//使用默认时区和语言环境获得一个日历。    
		Date date = dayf.parse(time);
		cal.setTime(date);
		cal.add(Calendar.DAY_OF_MONTH, +1);//取当前日期的后一天.  
		return dayf.format(cal.getTime());
	}
	
	/**
	 * 验证用户名不能为空，不能带有特殊符号，并且开头字符要以字母开头
	 * @param userName
	 * @return
	 */
	public static String checkUserName(String userName){
		String rex="^[a-z]{1}[a-z0-9_]{3,15}$";
		Pattern pattern=Pattern.compile(rex);
		Matcher matcher=pattern.matcher(userName);
		if(userName==null){
			return "用户名不能为空";
		}
		if(!matcher.matches()){
			return "用户名不能带有特殊符号，并且开头字符要以字母开头";
		}
		return "用户名验证成功";
	}
	
	
	/**
	 * 验证昵称不能为空，不能带有特殊符号，并且开头字符要以字母开头
	 * @param userName
	 * @return
	 */
	public static String checkNickName(String nickName){
		String rex="^[^0-9][A-Za-z0-9\u4e00-\u9fa5]{1,15}$";
		Pattern pattern=Pattern.compile(rex);
		Matcher matcher=pattern.matcher(nickName);
		if(nickName==null){
			return "昵称不能为空";
		}
		if(!matcher.matches()){
			return "昵称不能带有特殊符号，并且开头字符要以字母开头";
		}
		return null;
	}
	
	/**
	 * users项目中调用loginforuserno的公共方法
	 */
	/**
	 *  用户通注册时，使用userno 进行USERCENTER的登记注册
	 *  POST 方式提交请求 http://user.boyacai.com/user/center!loginForUserno   参数为userno
	 *  @return JsonObj
	 */
	public static JSONObject loginForUserno(String userno , HttpServletRequest request,HttpServletResponse response){
		JSONObject reJsonObj = new JSONObject();
		try {
				if(userno.isEmpty()){//如果userno为空，则返回501
					reJsonObj.put("errorCode", "501");
					return reJsonObj;
				}
				//获取用户在库中的数据 并保存到session memCache 和cookie
				String userInfoStr = JSONObject.fromObject(
						JSONReslutUtil.getResultMessage(linkURL + 
								"/tuserinfoes?","json&find=ByUserno&userno="+userno,"POST"))
								.getJSONObject("value").toString();
				request.getSession().setAttribute("userno", userno);
				reJsonObj.put("errorCode", "0");
				reJsonObj.put("jsessionid", request.getSession(true).getId());
				return reJsonObj;
		} catch (IOException e) {
			e.printStackTrace();
			reJsonObj.put("errorCode", "500");
			return reJsonObj;
		}
	}
	/**
	 * 验证真实姓名不能为空，不能带有特殊符号，并且只能为中文
	 * @param userName
	 * @return
	 */
	public static String checkName(String Name){
		String rex="^([\u4e00-\u9fa5]+)[·]?[\u4e00-\u9fa5]+$";
		Pattern pattern=Pattern.compile(rex);
		Matcher matcher=pattern.matcher(Name);
		if(Name==null){
			return "真实姓名不能为空";
		}
		if(!matcher.matches()){
			return "真实姓名不能带有特殊符号，并且只允许为中文";
		}
		return null;
	}

	/**
	 * 验证手机号码的合法性
	 * 
	 * @param mobileId
	 * @return
	 */
	public static boolean verifyMobileId(String mobileId) {
		String re = "^(13[0-9]|15[0-9]|18[0-9])\\d{8}$";
		Pattern pattern = Pattern.compile(re);
		Matcher matcher = pattern.matcher(mobileId);
		if(mobileId == null){
			return false;
		}
		if (!matcher.matches()) {
			return false;
		}
		return true;
	}
	
	/**
	 * 
	 * 过滤移动手机号码
	 * @param mobileId 手机号码
	 * @return
	 */
	public static boolean verifyMovePhone(String mobileId) {
		String re = "^(13[4-9]|147|15[0,1,2,7,8,9]|18[7,8])\\d{8}$";
		Pattern pattern = Pattern.compile(re);
		Matcher matcher = pattern.matcher(mobileId);
		if(mobileId == null){
			return false;
		}
		if (!matcher.matches()) {
			return false;
		}
		return true;
	}
	
	/**
	 * 
	 * @Title: 登录验证
	 * @Description: checkLoginInfo
	 * @param: username 用户名
	 * @param: password 密码
	 * @param: realPass 确认密码
	 * @return: 验证的信息
	 * 
	 */
	public static String checkLoginInfo(String username, String password) {
		if(username.indexOf("@") != -1){
			isEmailCode(username);
		}else{
			verifyMobileId(username);
		}
		verifyPassword(password);
		return null;
	}

	/**
	 * 
	 * @Title: 3g彩票网登录验证
	 * @Description: check3gLoginInfo
	 * @param: username 用户名
	 * @param: password 密码
	 * @param: realPass 确认密码
	 * @return: 验证的信息
	 * 
	 */
	public static String check3gLoginInfo(String mobileid, String password) {
		verifyMobileId(mobileid);
		verifyPassword(password);
		return null;
	}
	
	
	/**
	 * 
	 * @Title: 注册验证
	 * @Description: checkRegisterInfo
	 * @param: username 用户名
	 * @param: mobileId 手机号码
	 * @param: password 密码
	 * @param: realPass 确认密码
	 * @param: email 邮箱
	 * @return: 验证的信息
	 * 
	 */
	public static String checkRegisterInfo(String username,String nickname, String password,
			String realPass) {
		
		if(username.indexOf("@") != -1){
			isEmailCode(username);
		}else{
			verifyMobileId(username);
		}
		checkNickName(nickname);
		verifyPassword(password);
		if (!password.equals(realPass)) {
			return MessageUtil.TIAW_register_RealPass;
		}
		return null;
	}
	
	
	/**
	 * 
	 * @Title: 3g注册验证
	 * @Description: check3gRegisterInfo
	 * @param: nickname 昵称
	 * @param: mobileId 手机号码
	 * @param: password 密码
	 * @param: realPass 确认密码
	 * @param: email 邮箱
	 * @return: 验证的信息
	 * 
	 */
	public static String check3gRegisterInfo(String nickname,String mobileId, String password,
			String realPass, String email) {
		checkNickName(nickname);
		if (mobileId == null || !CommonUtil.verifyMobileId(mobileId.trim())) {
			return MessageUtil.TIAW_register_mobileId;
		}
		verifyPassword(password);
		if (!password.equals(realPass)) {
			return MessageUtil.TIAW_register_RealPass;
		}
		if(!isEmailCode(email)){
			return MessageUtil.TIAW_changeUserinfo_EmailError;
		};
		return null;
	}
	
	
	/**
	 * 
	 * @Title: 实名认证
	 * @Description: checkCertification
	 * @param: username 真实姓名
	 * @param: certid 身份证号
	 * @param: email 邮箱
	 * @return: 验证的信息
	 * 
	 */
	public static String checkCertification(String username,String certid, String email) {
		checkUserName(username);
		checkCardID(certid);
		isEmailCode(email);
		return null;
	}

	/**
	 * 
	 * @Title: checkUserID
	 * @Description: 注册信息验证:验证身份证号码
	 * @param: cardID 身份证号码
	 * @return:
	 */
	public static String checkCardID(String cardID) {
		if (cardID == null || (cardID.trim()).length() != 15
				&& (cardID.trim()).length() != 18) {
			return "身份证号码必须是15位或18位";
		}
		//Pattern pattern1 = Pattern.compile("^[0-9]{15}");
		//Pattern pattern2 = Pattern.compile("^[0-9]{17}[0-9a-zA-Z]{1}");
		Pattern pattern1 = Pattern.compile("[0-9]{14}([0-9]|[x,X])");
		Pattern pattern2 = Pattern.compile("[0-9]{17}([0-9]|[x,X])");
		Matcher matcher1 = pattern1.matcher(cardID);
		Matcher matcher2 = pattern2.matcher(cardID);
		boolean isMatcher1 = matcher1.matches();
		boolean isMatcher2 = matcher2.matches();
		if (!isMatcher1 && !isMatcher2) {
			return "身份证号码格式错误";
		}
		if (cardID.length() == 15) {
			String userAge = cardID.substring(6, 12);
			userAge = "19" + userAge;
			SimpleDateFormat simple = new SimpleDateFormat("yyyyMMdd");
			String sysTime = simple.format(new Date());
			try {
				Date userDate = simple.parse(userAge);
				Date sysDate = simple.parse(sysTime);
				Long day = (sysDate.getTime() - userDate.getTime())
						/ (24 * 60 * 60 * 1000);
				long years = Math.round(day / 365);
				if (years < 18) {
					return "你还不满18周岁!";
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} else {
			String userAge = cardID.substring(6, 14);
			SimpleDateFormat simple = new SimpleDateFormat("yyyyMMdd");
			String sysTime = simple.format(new Date());

			try {
				Date userDate = simple.parse(userAge);
				Date sysDate = simple.parse(sysTime);
				Long day = (sysDate.getTime() - userDate.getTime())
						/ (24 * 60 * 60 * 1000);
				long years = Math.round(day / 365);
				if (years < 18) {
					return "你还不满18周岁!";
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 
	 * @Title: verifyPassword
	 * @Description: 验证密码
	 * @param: 用户输入的密码
	 * @return:
	 */
	public static boolean verifyPassword(String str) {
		String rex="^[a-z0-9_]+$";
		Pattern pattern=Pattern.compile(rex);
		Matcher matcher=pattern.matcher(str);
		if (str == null || str.trim().length() < 6 || str.trim().length() > 16) {
			return false;
		}
		if(!matcher.matches()){
			return false;
		}
		return true;
	}

	// 过滤特殊字符
	public static boolean isStringFilter(String str)
			throws PatternSyntaxException {
		// 只允许字母和数字
		// String regEx = "[^a-zA-Z0-9]";
		// 清除掉所有特殊字符
		String regEx = "[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]";

		Pattern p = Pattern.compile(regEx);
		Matcher m = p.matcher(str);
		return m.find();
	}
	
//	//清除特殊字符
//	public static String clearString(String str){
//	
//		String regEx = "[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]";
//		return str.replace(oldChar, newChar)
//	}

	/**
	 * 验证字符串是否为空
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isEmptyString(String str) {
		if (str == null || str.trim().length() == 0) {
			return true;
		}
		return false;
	}

	/**
	 * 验证联系电话
	 * 
	 * @param phoneCode
	 * @return
	 */
	public static boolean isPhoneCode(String phoneCode) {
		boolean b = true;
		if (!CommonUtil.isEmptyString(phoneCode)) {
			Pattern p = Pattern
					.compile("\\d{10,12}||\\d{10,12}(_\\d{10,12}){1}");
			Matcher m = p.matcher(phoneCode);
			b = m.matches();
		}
		return b;
	}

	/**
	 * 电子邮件验证
	 * 
	 * @param emial
	 * 
	 *  ("(\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*;)*")
	 *  ^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$
	 * @return
	 */
	public static boolean isEmailCode(String emial) {
		boolean b = true;
		if (!CommonUtil.isEmptyString(emial)) {
			// Pattern p = Pattern.compile("\\w+@(\\w+\\.)+[a-z]{2,3}");
			Pattern p = Pattern
					.compile("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$");
			Matcher m = p.matcher(emial);
			b = m.matches();
		}
		return b;
	}

	/**
	 * 匹配腾讯QQ号
	 * 
	 * @param qq
	 * @return
	 */
	public static boolean isQQCode(String qq) {
		boolean b = true;
		if (!CommonUtil.isEmptyString(qq)) {
			Pattern p = Pattern.compile("^[1-9]*[1-9][0-9]*$");
			Matcher m = p.matcher(qq);
			b = m.matches();
		}
		return b;
	}
	
	/**
	 * 
	 * @Title:  isChargeMoney
	 * @Description: 验证充值金额
	 * @param: moeny 充值的金额
	 * @return:   
	 * @exception:
	 */
	public static String isChargeMoney(String money){
		if(money==null||money.trim().equals("")){
			return MessageUtil.CAW_ZFBCharge_MoneyNotEmpty;
		}
		if(Double.parseDouble(money) < 1
					|| Double.parseDouble(money) > 9223372036854775807L){
			return MessageUtil.CAW_ZFBCharge_MoneyIsNum;
		}
		Pattern pattern = Pattern.compile("^[1-9]{1}[0-9]*") ;
		Matcher matcher = pattern.matcher(money);
		if(! matcher.matches()){
			return MessageUtil.CAW_ZFBCharge_MoneyIsNum;
		}
		return null;
	}

	/**
	 * 
	 * @Title:  isDNAChargeMoney
	 * @Description: 验证充值金额(dna的是20元)
	 * @param: moeny 充值的金额
	 * @return:   
	 * @exception:
	 */
	public static String isDNAChargeMoney(String money){
		if(money.trim().equals("")||money==null){
			return MessageUtil.CAW_ZFBCharge_MoneyNotEmpty;
		}
		if(Double.parseDouble(money) < 20
					|| Double.parseDouble(money) > 9223372036854775807L){
			return MessageUtil.CAW_DNACharge_MoneyPatternError;
		}
		Pattern pattern = Pattern.compile("^[1-9]{1}[0-9]*") ;
		Matcher matcher = pattern.matcher(money);
		if(! matcher.matches()){
			return MessageUtil.CAW_ZFBCharge_MoneyIsNum;
		}
		return null;
	}
	
	/**
	 * 
	 * @Title:  isDNACharge
	 * @Description: 验证DNA充值的参数
	 * @param: chargeBean -- 包括（持卡人姓名、持卡人身份证号码、身份证户籍所在地）
	 * @return:   
	 * @exception:
	 */
	public static String isDNACharge(ChargeBean chargeBean){
		if(chargeBean.getUserName().equals("")||chargeBean.getUserName()==null){
			return MessageUtil.CAW_DNACharge_UserNameNotEmpty;
		}
		if(chargeBean.getDocumentNumber().equals("")||chargeBean.getDocumentNumber()==null){
			return MessageUtil.CAW_DNACharge_DocumentNumberNotEmpty;
		}
		if(chargeBean.getAddressCard().equals("")||chargeBean.getAddressCard()==null){
			return MessageUtil.CAW_DNACharge_AddressCardNotEmpty;
		}
		return null;
	}
	/**
	 *
	 * @Title:  verifyCardNo
	 * @Description:  验证银行卡号
	 * @param: 
	 * @return:   
	 * @exception:
	 */
	public static String verifyCardNo(String str) {
		
		if(str==null||str.trim().replace("'", "").equals("")) {
			return MessageUtil.CAW_DNACharge_CardNotEmpty;
		}
		
		Pattern pattern = Pattern.compile("^([1-9]{1}[0-9]*)");
		Matcher matcher = pattern.matcher(str);
		boolean isMatch = matcher.matches();
		if (!isMatch||str.trim().replace("'", "").length()<10) {
			return MessageUtil.CAW_DNACharge_CardPatternError;
		}
		return null;
	}
	
	/**
	 * 
	 * @Title: isCashMoney
	 * @Description: 验证提现账户金额
	 * @param: drawMoney 金额
	 * @return:
	 * @exception:
	 */
	public static boolean isCashMoney(String drawMoney,
			HttpServletRequest request) {
		// 验证提现金额是否是大于零的数字
		if (drawMoney == null
				|| drawMoney.trim().replace("'", "").length() == 0) {
			request
					.setAttribute("message",
							MessageUtil.TIAW_cash_MoneyNotEmpty);
			return false;
		}
		Pattern pattern = Pattern.compile("^([1-9]{1}[0-9]*|0)(\\.[ \\d]+)?");
		Matcher matcher = pattern.matcher(drawMoney);
		boolean isMatch = matcher.matches();
		if (!isMatch) {
			request.setAttribute("message",
					MessageUtil.TIAW_cash_MoneyPatternError);
			return false;
		}
		return true;
	}

	/**
	 * 
	 * @Title: isIDNumber
	 * @Description: 验证银行账户名称
	 * @param: IDNumber 银行账户
	 * @param: reqeust 存入的信息
	 * @return:
	 * @exception:
	 */
	public static boolean isIDNumber(String IDNumber, HttpServletRequest request) {
		if (IDNumber == null || IDNumber.trim().replace("'", "").length() < 16) {
			request.setAttribute("message",
					MessageUtil.TIAW_cash_MoneyPatternError);
			return false;
		}

		Pattern bnpattern = Pattern.compile("^([0-9]{16,21})");
		Matcher bnmatcher = bnpattern.matcher(IDNumber);
		boolean bnisMatch = bnmatcher.matches();
		if (!bnisMatch) {
			request.setAttribute("message",
					MessageUtil.TIAW_cash_BankNumberPatternError);
			return false; // 返回消息提示页面
		}
		return true;
	}

	/**
	 * 
	 * @Title:isNotEmpty
	 * @Description: 验证是否是空字符  
	 * @param: str-要验证的字符
	 * @exception:
	 */
	public static boolean isNotEmpty(String str){
		if(str == null|| str.trim().replace("'", "").trim().length() == 0){
			return false;
		}
		return true;
	}
	
	/**
	 * 
	 * 验证博雅彩点卡卡号和密码
	 * @param card_no 点卡卡号
	 * @param card_pwd 点卡密码
	 * @return:   
	 */
	public static boolean isRycPointCardNo(String card_no,String card_pwd){
		if(isNotEmpty(card_no)||isNotEmpty(card_pwd)){
			return false;
		}
		Pattern cardNoPattern = Pattern.compile("^[0-9]{16}");
		Matcher cardNomacther = cardNoPattern.matcher(card_no);
		if (!cardNomacther.matches()) {
			return false;
		}
		Pattern cardPassPattern = Pattern.compile("^[0-9]{6}");
		Matcher cardPassMatcher = cardPassPattern.matcher(card_pwd);
		if(!cardPassMatcher.matches()){
			return false;
		}
		return true;
	}
	
	/**
	 * 
	 * @Title: processChannelId
	 * @Description: 重组渠道号
	 * @param: type_code 页面存入的渠道号
	 * @return: 真实渠道号码
	 * @exception:
	 */
	public static String processChannelId(String type_code) {
		return type_code.length() > 5 ? "B"
				+ type_code.substring(type_code.length() - 5, type_code
						.length()) : "B" + type_code;
	}

	/**
	 * 
	 * @Title: getGameMethod
	 * @Description: 得到玩法
	 * @param: betCode 注码
	 * @return:
	 * @exception:
	 */
	public static String getGameMethod(String betCode, String lotNo) {
		String gameMethod = "";
		String bet[] = betCode.split("\\^");
		String wbet = "";
		for (int i = 0; i < bet.length; i++) {
			if ("B001".equals(lotNo) || "F47104".equals(lotNo)) {
				wbet = wan1 + bet[i] + "^";
				int[] nums = CodeUtil.getPoolInfo(wbet);
				switch (nums[0]) {// 玩法
				case 0:
					gameMethod = "单式";
					break;
				case 10:
					gameMethod = "红复蓝单";
					break;
				case 20:
					gameMethod = "红单蓝复";
					break;
				case 30:
					gameMethod = "红复蓝复";
					break;
				case 40:
					gameMethod = "红胆拖蓝单";
					break;
				case 50:
					gameMethod = "红胆拖蓝复式";
					break;
				}
			} else if ("D3".equals(lotNo) || "F47103".equals(lotNo)) {
				if (betCode.substring(0, 2).equals("00")) {
					gameMethod = "直选单式";
				} else if (betCode.substring(0, 2).equals("01")) {
					gameMethod = "组3单式";
				} else if (betCode.substring(0, 2).equals("02")) {
					gameMethod = "组6单式";
				} else if (betCode.substring(0, 2).equals("10")) {
					gameMethod = "直选和值";
				} else if (betCode.substring(0, 2).equals("11")) {
					gameMethod = "组3和值";
				} else if (betCode.substring(0, 2).equals("12")) {
					gameMethod = "组6和值";
				} else if (betCode.substring(0, 2).equals("20")) {
					gameMethod = "直选复式";
				} else if (betCode.substring(0, 2).equals("31")) {
					gameMethod = "组3复式";
				} else if (betCode.substring(0, 2).equals("32")) {
					gameMethod = "组6复式";
				} else if (betCode.substring(0, 2).equals("54")) {
					gameMethod = "胆拖复式";
				}
			} else if ("QL730".equals(lotNo) || "F47102".equals(lotNo)) {
				wbet = wan3 + bet[i] + "^";
				int[] nums = CodeUtil.getPoolInfo(wbet);
				switch (nums[0]) {// 玩法
				case 0:
					gameMethod = "单式";
					break;
				case 10:
					gameMethod = "复式";
					break;
				case 20:
					gameMethod = "胆拖";
					break;
				}
			} else if ("T01001".equals(lotNo)) {
				gameMethod = TCCodeUtil.getDLTGameMethod(betCode);
			} else if ("T01002".equals(lotNo)) {// 体彩排列三
				gameMethod = TCCodeUtil.getPLSMethod(betCode);
			}
		}
		return gameMethod;
	}

	/**
	 * 
	 * @Title: getMultiple
	 * @Description: 得到倍数
	 * @param: betCode 注码
	 * @param: lotNo 彩种
	 * @return:
	 * @exception:
	 */
	public static String getMultiple(String betCode, String lotNo) {
		String multiple = "";
		String bet[] = betCode.split("\\^");
		if(betCode==null||betCode.equals("")){
			return multiple;
		}else{
			for (int i = 0; i < bet.length; i++) {
				if ("B001".equals(lotNo) || "F47104".equals(lotNo)
						|| "D3".equals(lotNo) || "F47103".equals(lotNo)
						|| "QL730".equals(lotNo) || "F47102".equals(lotNo)) {
					multiple = betCode.substring(2, 4);// 倍数
					if (Integer.parseInt(multiple) < 10) {
						multiple = multiple.substring(1, 2);
					}
				}
			}
		}
		return multiple;
	}
	
    /**
     * @Title:  getTransaction
     * @Description: 封装投注、中奖、赠彩、被赠彩查询
     * @param: objValue json串
     * @param: transactionBean 封装类
     * @param: flag 标记0-代表投注，1-代表中奖，2-代表赠彩，3-代表被赠彩，4-代表开奖
     * @return:   
     * @exception:
     */
	public static TransactionBean getTransaction(JSONObject objValue,int flag) throws JSONException{
		TransactionBean transactionBean = new TransactionBean();
		//将投注查询的返回结果设置到投注查询的bean中
	    String lotNo1 = null;
	    String batchcode = null;
	    String betcode=null;
	    String amt=null;
	    if(flag==0){
	    	betcode= getBackValue("betcode", objValue);
	    	amt  = getBackValue("amt", objValue);
	    	amt = String.valueOf(Double.parseDouble(amt)/100);
	    	lotNo1 = getBackValue("play_name", objValue);
	    	batchcode = getBackValue("batchcode", objValue);
	    }else if(flag==1){
	        betcode = getBackValue("code", objValue);
	        amt  = getBackValue("prizeamt", objValue);
	        amt = String.valueOf(Double.parseDouble(amt)/100);
	        lotNo1 = getBackValue("play_name", objValue);
	        batchcode = getBackValue("batchcode", objValue);
	        
	    }else if (flag ==2||flag==3){
	    	betcode = getBackValue("bet_code", objValue);
	        amt  = getBackValue("amount", objValue);
	        amt = String.valueOf(Double.parseDouble(amt)/100);
	        lotNo1 = getBackValue("lotno", objValue);
	        batchcode = getBackValue("sell_term_code", objValue);
	    }else if (flag==4){
	    	betcode="";
	    	lotNo1 =getBackValue("play_name", objValue);
	    	batchcode = getBackValue("term_code", objValue);
	    	amt="0";
	    	
	    }
	    
	    String sell_datetime = getBackValue("sell_datetime", objValue);
	    String lotMulti = getBackValue("lotMulti", objValue);
	    String cash_date_time= getBackValue("cash_date_time", objValue);
	    String maxLine = getBackValue("maxLine", objValue);
	    
	    String prizelttle = getBackValue("prizelttle", objValue);
	    String encash_flag = getBackValue("encash_flag", objValue);
	    String prizeinfo = getBackValue("prizeinfo", objValue);
	    String prizetime = getBackValue("prizetime", objValue);
	    String abandon_date_time = getBackValue("term_code", objValue);
	    
	    String term_begin_datetime = getBackValue("term_begin_datetime", objValue);
	    String run_code = getBackValue("run_code", objValue);
	    String check_code = getBackValue("check_code", objValue);
	    String to_mobile_code = getBackValue("to_mobile_code", objValue);
	    String valid_term_code = getBackValue("valid_term_code", objValue);
	    
	    String error_code = getBackValue("error_code", objValue);
	    
	    String win_base_code = getBackValue("win_base_code", objValue);
	    String win_special_code = getBackValue("win_special_code", objValue);
	    String act_sell_amount = getBackValue("act_sell_amount", objValue);
	    String valid_sell_amount = getBackValue("valid_sell_amount", objValue);
	    
	     //奖项等级
	    String wingrade = (getBackValue("wingrade1", objValue).equals("")?getBackValue("wingrade2", objValue):
	    	getBackValue("wingrade2", objValue).equals("")?getBackValue("wingrade3", objValue):
	    	getBackValue("wingrade3", objValue).equals("")?getBackValue("wingrade4", objValue):
	    	getBackValue("wingrade4", objValue).equals("")?getBackValue("wingrade5", objValue):
	    	getBackValue("wingrade5", objValue).equals("")?getBackValue("wingrade6", objValue):
			getBackValue("wingrade6", objValue).equals("")?getBackValue("wingrade7", objValue):
	    	getBackValue("wingrade7", objValue).equals("")?getBackValue("wingrade8", objValue):
	    	getBackValue("wingrade8", objValue).equals("")?getBackValue("wingrade9", objValue):
	    	getBackValue("wingrade9", objValue).equals("")).toString();
	    
	    //中奖金额
	    String win_money1=getBackValue("win_money1", objValue);
	    String win_money2=getBackValue("win_money2", objValue);
	    String win_money3=getBackValue("win_money3", objValue);
	    String win_money4=getBackValue("win_money4", objValue);
	    String win_money5=getBackValue("win_money5", objValue);
	    String win_money6=getBackValue("win_money6", objValue);
	    String win_money7=getBackValue("win_money7", objValue);
	    String win_money8=getBackValue("win_money8", objValue);
	    String win_money9=getBackValue("win_money9", objValue);
	    
		String win_money = (win_money1.equals("")?win_money2:win_money2.equals("")?win_money3:
		    	win_money3.equals("")?win_money4:win_money4.equals("")?win_money5:
		    	win_money5.equals("")?win_money6:win_money6.equals("")?win_money7:
		    	win_money7.equals("")?win_money8:win_money8.equals("")?win_money9:
		    	win_money9.equals("")).toString();
			
		//中奖注数
		String win_num1=getBackValue("win_num1", objValue);
	    String win_num2=getBackValue("win_num2", objValue);
	    String win_num3=getBackValue("win_num3", objValue);
	    String win_num4=getBackValue("win_num4", objValue);
	    String win_num5=getBackValue("win_num5", objValue);
	    String win_num6=getBackValue("win_num6", objValue);
	    String win_num7=getBackValue("win_num7", objValue);
	    String win_num8=getBackValue("win_num8", objValue);
	    String win_num9=getBackValue("win_num9", objValue);
	    String win_num = (win_num1.equals("")?win_num2:win_num2.equals("")?win_num3:
	    	win_num3.equals("")?win_num4:win_num4.equals("")?win_num5:
	    	win_num5.equals("")?win_num6:win_num6.equals("")?win_num7:
	    	win_num7.equals("")?win_num8:win_num8.equals("")?win_num9:
	    	win_num9.equals("")).toString();
		
		transactionBean.setPlay_name(lotNo1);//彩种
		transactionBean.setBatchcode(batchcode);//期号
		transactionBean.setSell_datetime(sell_datetime);//投注时间
		transactionBean.setAmt(amt);//投注金额
		if(betcode==null||betcode.equals("")){  //java.lang.NullPointerException
			transactionBean.setGameMethod("");
		}else{
		   transactionBean.setGameMethod(CommonUtil.getGameMethod(betcode, lotNo1));//玩法
		}
		
		//福彩
		if(lotNo1.equals("F47104")||lotNo1.equals("F47103")||lotNo1.equals("F47102")||lotNo1.equals("F47101")){
		    String stb = CodeUtil.getCodeString(lotNo1,betcode);
		    transactionBean.setLotMulti(CommonUtil.getMultiple(betcode, lotNo1));//倍数
		    transactionBean.setBetcode(stb);//福彩注码
		 
		//体彩
		}else if(lotNo1.equals("T01002")||lotNo1.equals("T01001")){
			 transactionBean.setLotMulti(lotMulti);//体彩倍数
			 transactionBean.setBetcode(TCCodeUtil.getBetcode(lotNo1, betcode)); 
		}

		transactionBean.setEndTime(CommonUtil.getBackValue("End_time", objValue));
		transactionBean.setMaxLine(maxLine);
		transactionBean.setCash_date_time(cash_date_time);
		
		transactionBean.setPrizelttle(prizelttle);// 中奖小奖总金额(客户端可不显示)
		transactionBean.setEncash_flag(encash_flag);// 兑奖标记(0未兑奖,1已兑奖)
		transactionBean.setPrizeinfo(prizeinfo);// 奖项等级(中奖详细信息)
		transactionBean.setPrizetime(prizetime);// 兑奖日期(YYYYMMDDHHMMSS)
		transactionBean.setAbandon_date_time(abandon_date_time);// 弃奖日期(YYYYMMDDHHMMSS)
		
		transactionBean.setTerm_begin_datetime(term_begin_datetime);// 封机时间
		transactionBean.setRun_code(run_code);// 彩票流水号，这是福彩、体彩中心系统下传的流水号，不是本系统产生的
		transactionBean.setCheck_code(check_code);// 彩票校验码
		transactionBean.setTo_mobile_code(to_mobile_code);// 被赠送人的手机号码
		transactionBean.setValid_term_code(valid_term_code);// 彩票有效期号
		
		transactionBean.setError_code(error_code);//返回的码
		
		transactionBean.setWin_base_code(win_base_code);
		transactionBean.setWin_special_code(win_special_code);
		transactionBean.setAct_sell_amount(act_sell_amount);
		transactionBean.setValid_sell_amount(valid_sell_amount);
		transactionBean.setWingrade(wingrade);
		transactionBean.setWin_money(win_money);
		transactionBean.setWin_money1(win_money1);
		transactionBean.setWin_money2(win_money2);
		transactionBean.setWin_money3(win_money3);
		transactionBean.setWin_money4(win_money4);
		transactionBean.setWin_money5(win_money5);
		transactionBean.setWin_money6(win_money6);
		transactionBean.setWin_money7(win_money7);
		transactionBean.setWin_money8(win_money8);
		transactionBean.setWin_money9(win_money9);
		
		transactionBean.setWin_num(win_num);
		transactionBean.setWin_num1(win_num1);
		transactionBean.setWin_num2(win_num2);
		transactionBean.setWin_num3(win_num3);
		transactionBean.setWin_num4(win_num4);
		transactionBean.setWin_num5(win_num5);
		transactionBean.setWin_num6(win_num6);
		transactionBean.setWin_num7(win_num7);
		transactionBean.setWin_num8(win_num8);
		transactionBean.setWin_num9(win_num9);
		
		return transactionBean;
	}

	
	/**
	 * 
	 * @Title:  getBackValue
	 * @Description: 验证返回的json
	 * @param: str 键
	 * @return:   
	 * @throws JSONException 
	 * @exception:
	 */
	public static String getBackValue(String str,JSONObject objValue) throws JSONException{
		String result =  objValue.get(str)==null?"":objValue.getString(str).equals("")?"":objValue.getString(str) ;
		return result.trim();
	}
	
	/**
	 * 
	 * 提现优化返回码
	 * @param: 返回码
	 * @return
	 * @exception:
	 */
	public static String getCashErrorCode(String error_code) {
		String ttss="";
		if(error_code.equals("090000")){
			ttss="提现失败";
		}if(error_code.equals("090001")){
			ttss="您没有提现记录，请您提现";
		}if(error_code.equals("090002")){
			ttss="提现需求已进入审核状态，不允许修改";
		}if(error_code.equals("090003")){
			ttss="提现已进入执行阶段不允许修改";
		}if(error_code.equals("090004")){
			ttss="修改提现表失败";
		}if(error_code.equals("090005")){
			ttss="更新提现详细表失败";
		}if(error_code.equals("090006")||error_code.equals("090007")){
			ttss="修改交易表失败";
		}if(error_code.equals("090008")){
			ttss="向用户提现表中插入数据失败";
		}if(error_code.equals("090009")){
			ttss="更新用户提现表失败";
		}if(error_code.equals("090010")){
			ttss="更新失败";
		}if(error_code.equals("090011")){
			ttss="用户取消提现记录已存在或用户提现记录不存在";
		}if(error_code.equals("090012")){
			ttss="更新提现账户失败";
		}if(error_code.equals("090013")){
			ttss="更新用户账户金额失败";
		}if(error_code.equals("090014")){
			ttss="更新交易表用户交易状态失败";
		}if(error_code.equals("090015")){
			ttss="更新提现详细表提现状态失败";
		}if(error_code.equals("090016")){
			ttss="用户取消提现失败";
		}if(error_code.equals("090017")){
			ttss="手机号码不允许为空";
		}if(error_code.equals("100000")||error_code.equals("090019")||error_code.equals("090020")){
			ttss="提现修改失败";
		}if(error_code.equals("090021")){
			ttss="用户账户可提现余额小于提现金额";
		}if(error_code.equals(LotErrorCode.CHYEBZ) ){
			ttss="您的提现金额和手续费已超出可提现金额，请您重新输入提现金额";
		}if(error_code.equals("090022")){
			ttss="用户账户可提现金额大于余额";
		}if(error_code.equals("090023")||error_code.equals("090024")){
			ttss="用户可提现余额减去冻结金额小于提现金额";
		}if(error_code.equals("090025")||error_code.equals("090026")||error_code.equals("090027")||error_code.equals("090028")){
			ttss="用户提现修改失败";
		}
		return ttss;
	}
	
	/**
	 * 取得投注返回码
	 * 
	 * @Title:
	 * @Description: TODO
	 * @param:
	 * @return:
	 * @exception:
	 */
	public static String getErrorStringFromCode(String error_code) {
		String ttss = "";

		if (error_code.equals("400010")) {
			ttss = "赠送彩金仅限自购，不能参与合买";
		}
		if (error_code.equals("400000")) {
			ttss = "查询数据异常";
		}
		if (error_code.equals("030000")) {
			ttss = "方案文件格式不正确";
		}
		if (error_code.equals("020000")) {
			ttss = "方案客户端输入总金额与实际总金";
		}
		if (error_code.equals("400009")) {
			ttss = "合买截止不能发起合买";
		}

		if (error_code.equals("400001")) {
			ttss = "查询结果为空";
		}
		if (error_code.equals("400002")) {
			ttss = "方案已满员";
		}
		if (error_code.equals("400003")) {
			ttss = "新期参数不存在";
		}
		if (error_code.equals("400004")) {
			ttss = "方案为撤销状态";
		}
		if (error_code.equals("400005")) {
			ttss = "金额冻结失败";
		}
		if (error_code.equals("400006")) {
			ttss = "进度已达到50%或者大于50%，超出";
		}
		if (error_code.equals("400007")) {
			ttss = "金额解冻失败";
		}
		if (error_code.equals("400008")) {
			ttss = "状态更新失败";
		}

		if (error_code.equals("000000")) {
			ttss = "操作成功";
		}
		if (error_code.equals("0000")) {
			ttss = "操作成功";
		}
		if (error_code.equals("1000")) {
			ttss = "玩法英文名称不合法";
		}
		if (error_code.equals("1001")) {
			ttss = "逻辑机号不合法";
		}
		if (error_code.equals("1002")) {
			ttss = "期号不合法";
		}
		if (error_code.equals("1003")) {
			ttss = "注码不合法";
		}
		if (error_code.equals("1004")) {
			ttss = "注数不正确";
		}
		if (error_code.equals("1005")) {
			ttss = "重新计算校验码核对失败";
		}
		if (error_code.equals("1006")) {
			ttss = "数据传输失败,请重新发送该票";
		}
		if (error_code.equals("1007")) {
			ttss = "对不起，本期销售已截止，请选择下一期";
		}
		if (error_code.equals("1008")) {
			ttss = "注销票不存在";
		}
		if (error_code.equals("1009")) {
			ttss = "该票已注销";
		}
		if (error_code.equals("1010")) {
			ttss = "销售票已存在";
		}
		if (error_code.equals("1090")) {
			ttss = "解析字符串失败";
		}
		if (error_code.equals("1011")) {
			ttss = "对不起，本期限售，请选择下一期";
		}
		if (error_code.equals("1012")) {
			ttss = "未到开期时间";
		}
		if (error_code.equals("1013")) {
			ttss = "流水号非法";
		}
		if (error_code.equals("1014")) {
			ttss = "账户金额不足";
		}
		if (error_code.equals("1015")) {
			ttss = "该票存在但不能注销";
		}
		if (error_code.equals("1016")) {
			ttss = "彩票数据无效";
		}
		if (error_code.equals("1017")) {
			ttss = "身份证号码错误";
		}
		if (error_code.equals("1018")) {
			ttss = "系统忙";
		}
		if (error_code.equals("1019")) {
			ttss = "玩法没有开通";
		}
		if (error_code.equals("1020")) {
			ttss = "玩法英文名称不合法";
		}
		if (error_code.equals("1021")) {
			ttss = "逻辑机号不合法";
		}
		if (error_code.equals("1022")) {
			ttss = "已经兑奖";
		}
		if (error_code.equals("1023")) {
			ttss = "该票已经弃奖";
		}
		if (error_code.equals("1024")) {
			ttss = "兑奖期号不合法";
		}
		if (error_code.equals("1025")) {
			ttss = "兑奖金额不正确";
		}
		if (error_code.equals("1026")) {
			ttss = "数据传输失败,请重试";
		}
		if (error_code.equals("1027")) {
			ttss = "已中大奖";
		}
		if (error_code.equals("1028")) {
			ttss = "未中奖";
		}
		if (error_code.equals("1090")) {
			ttss = "解析字符串失败";
		}
		if (error_code.equals("1029")) {
			ttss = "中心已期结";
		}
		if (error_code.equals("1030")) {
			ttss = "逻辑机号正在使用";
		}
		if (error_code.equals("1031")) {
			ttss = "玩法名称与票号不相符";
		}
		if (error_code.equals("0001")) {
			ttss = "没有该用户";
		}
		if (error_code.equals("0002")) {
			ttss = "投注码错误";
		}
		if (error_code.equals("0003")) {
			ttss = "购彩金额与购买注数不匹配";
		}
		if (error_code.equals("0004")) {
			ttss = "彩票交易失败";
		}
		if (error_code.equals("040001")) {
			ttss = "投注失败,用户不存在";
		}
		if (error_code.equals("040002")) {
			ttss = "投注失败,用户未开通";
		}
		if (error_code.equals("040003")) {
			ttss = "投注失败,已过期";
		}
		if (error_code.equals("040004")) {
			ttss = "投注失败,未登录";
		}
		if (error_code.equals("040005")) {
			ttss = "投注失败,用户账户不存在";
		}
		if (error_code.equals("040006")) {
			ttss = "投注失败,用户余额不足";
		}
		if (error_code.equals("040007")) {
			ttss = "投注失败,没有空闲逻辑机";
		}
		if (error_code.equals("040008")) {
			ttss = "投注失败,渠道标识不存在";
		}
		if (error_code.equals("040009")) {
			ttss = "投注失败,注码不能为空";
		}
		if (error_code.equals("040010")) {
			ttss = "投注失败,注码格式不正确";
		}
		if (error_code.equals("040011")) {
			ttss = "投注失败,彩种错误";
		}
		if (error_code.equals("040012")) {
			ttss = "投注失败,生成被赠送用户失败";
		}
		if (error_code.equals("040013")) {
			ttss = "投注失败,投注金额错误";
		}
		if (error_code.equals("040014")) {
			ttss = "投注失败,彩票信息错误";
		}
		if (error_code.equals("040015")) {
			ttss = "投注失败,参数不全";
		}
		if (error_code.equals("040016")) {
			ttss = "扣款失败";
		}
		if (error_code.equals("000056")) {
			ttss = "操作失败,网络异常";
		}
		if (error_code.equals("040017")) {
			ttss = "投注失败,网络传输有误";
		}
		if (error_code.equals("040018")) {
			ttss = "没有该彩种";
		}
		if (error_code.equals("0005")) {
			ttss = "彩票赠送失败";
		}
		if (error_code.equals("0006")) {
			ttss = "彩票期号不存在";
		}
		if (error_code.equals("0007")) {
			ttss = "重新登录";
		}
		if (error_code.equals("070001")) {
			ttss = "登录失败,参数不全";
		}
		if (error_code.equals("070002")) {
			ttss = "登录失败,手机号或密码错误";
		}
		if (error_code.equals("0008")) {
			ttss = "密码修改失败";
		}
		if (error_code.equals("0010")) {
			ttss = "注册失败";
		}
		if (error_code.equals("0011")) {
			ttss = "退出失败";
		}
		if (error_code.equals("0012")) {
			ttss = "充值失败,卡号或密码有误";
		}
		if (error_code.equals("0013")) {
			ttss = "用户已注册";
		}
		if (error_code.equals("0014")) {
			ttss = "用户状态为关闭";
		}
		if (error_code.equals("0015")) {
			ttss = "原密码错误";
		}
		if (error_code.equals("0016")) {
			ttss = "sessionID错误";
		}
		if (error_code.equals("000012")) {
			ttss = "该号码已被暂停使用，请联系客服 400-856-1000重新激活";
		}
		if (error_code.equals("070003")) {
			ttss = "用户状态为待激活";
		}
		if (error_code.equals("0047")) {
			ttss = "记录为空";
		}
		if (error_code.equals("0056")) {
			ttss = "网络异常";
		}
		if (error_code.equals("0099")) {
			ttss = "操作失败";
		}
		if (error_code.equals("350001")) {
			ttss = "套餐已受理";
		}
		if (error_code.equals("350002")) {
			ttss = "套餐受理失败";
		}
		if (error_code.equals("350003")) {
			ttss = "新增套餐信息失败";
		}
		if (error_code.equals("350006")) {
			ttss = "套餐已定制,修改失败";
		}
		if (error_code.equals("350004")) {
			ttss = "参数不全";
		}
		if (error_code.equals("350101")) {
			ttss = "您已定制,请选择其它彩种套餐";
		}
		if (error_code.equals("006005")) {
			ttss = "套餐已退订";
		}
		if (error_code.equals("360001")) {
			ttss = "追号已受理";
		}
		if (error_code.equals("360002")) {
			ttss = "追号受理失败";
		}
		if (error_code.equals("360003")) {
			ttss = "新增追号信息失败";
		}
		if (error_code.equals("360004")) {
			ttss = "追号期数错误";
		}
		if (error_code.equals("360005")) {
			ttss = "总金额错误";
		}
		if (error_code.equals("360006")) {
			ttss = "参数不全";
		}
		if (error_code.equals("370001")) {
			ttss = "参数不全";
		}
		if (error_code.equals("380001")) {
			ttss = "参数不全";
		}
		if (error_code.equals("380002")) {
			ttss = "时间格式错误";
		}
		if (error_code.equals("390001")) {
			ttss = "参数不全";
		}
		if (error_code.equals("420001")) {
			ttss = "参数不全";
		}
		if (error_code.equals("430001")) {
			ttss = "参数不全";
		}
		if (error_code.equals("0017")) {
			ttss = "用户余额不足";
		}
		if (error_code.equals("0018")) {
			ttss = "传输协议有误";
		}
		if (error_code.equals("201015")) {
			ttss = "可用余额不足,请充值";
		}
		if (error_code.equals("0019")) {
			ttss = "填写信息不合法";
		}
		if (error_code.equals("06001")) {
			ttss = "日期信息有误";
		}
		if (error_code.equals("06002")) {
			ttss = "该好友已被推荐";
		}
		if (error_code.equals("06003")) {
			ttss = "该好友已是注册用户";
		}
		if (error_code.equals("06004")) {
			ttss = "没有套餐记录";
		}
		if (error_code.equals("06005")) {
			ttss = "套餐已经冻结";
		}
		if (error_code.equals("06007")) {
			ttss = "文件不存在";
		}
		if (error_code.equals("06008")) {
			ttss = "读取文件内容错误";
		}
		if (error_code.equals("4444")) {
			ttss = "系统结算,请稍侯";
		}
		if (error_code.equals("070102")) {
			ttss = "SessionId获取失败";
		}
		if (error_code.equals("042018")) {
			ttss = "无法获取用户信息";
		}
		if (error_code.equals("060004")) {
			ttss = "套餐记录不存在";
		}
		if (error_code.equals("080102")) {
			ttss = "套餐查询响应异常";
		}
		if (error_code.equals("20100706")) {
			ttss = "该期已经过期";
		}
		return ttss;
	}
	
//	/**
//	 * 获取所有交易类型id
//	 */
//	@SuppressWarnings("unchecked")
//	public static Map getTtransactiontypeMap(){
//		TtransactiontypeService service=new TtransactiontypeService();
//		return service.getTtransactiontypeMap();
//	}
//	/**
//	 * 获取所有交易类型
//	 */
//	@SuppressWarnings("unchecked")
//	public static void getAllTransactiontype(HttpServletRequest request){
//		Map linkMap=new LinkedHashMap();
//		linkMap.put("", "全部");
//		linkMap.putAll(getTtransactiontypeMap());
//		request.setAttribute("transactiontypes", linkMap);
//	}
	
	@SuppressWarnings("unchecked")
	public static Map<String, String> getBankMap()
	{
		Map<String, String> banks=new HashMap<String, String>();
		//充值翻译
		banks.put("y00003", "易宝充值");
		banks.put("y00001", "易宝充值");
		banks.put("yeepay", "易宝充值");
		banks.put("zfb001", "支付宝充值");
		banks.put("dna001", "DNA充值");
		banks.put("ryf001", "如意付充值");
		banks.put("ryc001", "博雅彩充值");
		banks.put("msy001", "民生银行充值");
		//banks.put("000100", "博雅彩充值");
		//用户提现的时候显示用
//	    banks.put("0101", "招商银行卡");
//		banks.put("0102", "建设银行卡");
//		banks.put("0103", "工商银行卡");
		
		return banks;
	}
	/**
	 * 
	 * @Title:  getPayTypeMap
	 * @Description: 添加卡的类型
	 * @param: 
	 * @return:   
	 * @exception:
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, String> getPayTypeMap()
	{
		Map<String, String> paytypes=new HashMap<String, String>();
		paytypes.put("01", "银行卡");
		paytypes.put("04", "自有账户自有卡(语音)");
		paytypes.put("0101", "招商银行卡");
		paytypes.put("0102", "建设银行卡");
		paytypes.put("0103", "工商银行卡");
		
		paytypes.put("02", "非银行卡");
		paytypes.put("0201", "骏网一卡通");
		paytypes.put("0202", "盛大卡");
		paytypes.put("0203", "神州行");
		paytypes.put("0221", "电信充值卡");
		
		paytypes.put("0204", "征途卡");
		paytypes.put("0205", "Q币卡");
		paytypes.put("0206", "联通卡");
		paytypes.put("0207", "久游卡");
		paytypes.put("0208", "易宝一卡通");
		paytypes.put("0209", "网易卡");
		paytypes.put("0210", "完美卡");
		paytypes.put("0211", "搜狐卡");
		
		paytypes.put("03", "自有账户自有卡");
		paytypes.put("0300", "自有账户自有卡");
		
		
		return paytypes;
	}
		
	
	/**
	 * 查询用户余额
	 * @param request
	 * @return
	 */
	public static  JSONObject fiandBalance(HttpServletRequest request) throws Exception{
				
		// 得到用户
		Tuserinfo user = Tuserinfo.setJson(JSONReslutUtil.getUserInfo(request).getJSONObject("value"));
		JSONObject obj = getBalance(user.getUSERNO());
		
		// 得到后台的返回内容返回给页面
		if(!obj.isNullObject()){
			double balance = obj.getDouble("balance")/100;//账户余额
			double freezebalance = obj.getDouble("freezebalance")/100;//冻结金额
		    double drawbalance = obj.getDouble("drawbalance")/100;//用户账户的可提现金额
		    
			double deposit_amount = balance - freezebalance; //可投注金额
			double valid_amount = (balance-freezebalance) >= drawbalance ? drawbalance :(balance-freezebalance);//实际可提现金额
			//算完之后重新赋值
			obj.put("balance", deposit_amount);//可投注金额
			obj.put("freezebalance", freezebalance);//冻结金额
			obj.put("drawbalance", valid_amount);//实际可提现金额
			
		}
		return obj;

	}
	
	/**
	 * 判断参数中的JSON是否为JSONArray 如果是 则返回true
	 * @param re STRING Json结构
	 * @param request 存入信息
	 * @return
	 */
	public static boolean isJSONArray(String re,HttpServletRequest request){
		if(re.substring(0,1).equals("{")){
			JSONObject objValue=JSONObject.fromObject(re);
			String error_code = objValue.getString("error_code");
			if(LotErrorCode.WCHXX.equals(error_code)
					|| LotErrorCode.WJL.equals(error_code)){
				request.setAttribute("message", MessageUtil.SELECT_BET_MESSAGE);
			}else if(LotErrorCode.WDL.equals(error_code)){
				request.setAttribute("message", MessageUtil.TIAW_changeUserinfo_LoginMsg);
			}
			return false;
		}else{
			return true;
		}
	}
	
	/**
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的记录的总条件
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @return
	 */
	public static String getPageToHtml(Integer page ,Integer maxLine , Integer limitCount,Integer omission){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		
		if(page!=null && page > 1){
			html += "<a href='javaScript:;' onclick='toPageList(1)'>第一页</a>　";
			html += "<a href='javaScript:;' onclick='toPageList("+(page-1)+")'>上一页</a>　";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<b>"+(i+1)+"</b>　";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<a href='javaScript:;' onclick='toPageList("+(i+1)+")'>...</a>　";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<a href='javaScript:;' onclick='toPageList("+(i+1)+")'>"+(i+1)+"</a>　";
			}
		}
		if(page==null || page < maxPage){
			html += "<a href='javaScript:;' onclick='toPageList("+(page+1)+")'>下一页</a>　";
			html += "<a href='javaScript:;' onclick='toPageList("+maxPage+")'>尾页</a>　";
		}
		
		html +="　共"+maxPage+"页　"+maxLine+"条";
		return html;
	}
	
	/**投注查询的分页
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的记录的总条件
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @return
	 */
	public static String getTZPageToHtml(Integer page ,Integer maxLine , Integer limitCount,Integer omission){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		
		if(page!=null && page > 1){
			html += "<a href='javaScript:;' onclick='toTZPageList(1)'>第一页</a>　";
			html += "<a href='javaScript:;' onclick='toTZPageList("+(page-1)+")'>上一页</a>　";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<b>"+(i+1)+"</b>　";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<a href='javaScript:;' onclick='toTZPageList("+(i+1)+")'>...</a>　";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<a href='javaScript:;' onclick='toTZPageList("+(i+1)+")'>"+(i+1)+"</a>　";
			}
		}
		if(page==null || page < maxPage){
			html += "<a href='javaScript:;' onclick='toTZPageList("+(page+1)+")'>下一页</a>　";
			html += "<a href='javaScript:;' onclick='toTZPageList("+maxPage+")'>尾页</a>　";
		}
		if( maxPage > 1){
		html += "<input type=\"text\" class=\"fenye_input\" id=\"pageid\"  onblur='toTZPageList($(\"#pageid\").val())' />&nbsp;页";
		}
		html +="　共"+maxPage+"页　"+maxLine+"条";
		return html;
	}
	public static String getYjPageToHtml(Integer page ,Integer maxLine , Integer limitCount,Integer omission){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		
		if(page!=null && page > 1){
			html += "<a href='javaScript:;' onclick='toYjPageList(1)'>第一页</a>　";
			html += "<a href='javaScript:;' onclick='toYjPageList("+(page-1)+")'>上一页</a>　";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<b>"+(i+1)+"</b>　";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<a href='javaScript:;' onclick='toYjPageList("+(i+1)+")'>...</a>　";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<a href='javaScript:;' onclick='toYjPageList("+(i+1)+")'>"+(i+1)+"</a>　";
			}
		}
		if(page==null || page < maxPage){
			html += "<a href='javaScript:;' onclick='toYjPageList("+(page+1)+")'>下一页</a>　";
			html += "<a href='javaScript:;' onclick='toYjPageList("+maxPage+")'>尾页</a>　";
		}
		if( maxPage > 1){
		html += "<input type=\"text\" class=\"fenye_input\" id=\"pageid\"  onblur='toYjPageList($(\"#pageid\").val())' />&nbsp;页";
		}
		html +="　共"+maxPage+"页　"+maxLine+"条";
		return html;
	}
	
	/**JSP页面使用的分页
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的记录的总条件
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @param formId 要提交的表单的ID
	 * @return
	 */
	public static String getPageToJsp(Integer page ,Integer maxLine , Integer limitCount,Integer omission,String formId){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		String fromIdSubmit ="$(\"#"+formId+"\").submit();";
		
		if(page!=null && page > 1){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\"1\");"+fromIdSubmit+"' class=\"fenye1\">首页</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page-1)+"\");"+fromIdSubmit+"' class=\"fenye5\">&nbsp;</span>";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<span class=\"fenye2_hover\">"+(i+1)+"</span>";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">...</span>";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">"+(i+1)+"</span>";
			}
		}
		if(page==null || page < maxPage){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page+1)+"\");"+fromIdSubmit+"' class=\"fenye4\">&nbsp;</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+maxPage+"\");"+fromIdSubmit+"' class=\"fenye1\">尾页</span>";
		}
		if(maxPage > 1){
			html += "<input type=\"text\" class=\"fenye_input\" id=\"pageid\"  onblur='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val($(\"#pageid\").val());' />&nbsp;页<span  onclick='"+fromIdSubmit+"'  class=\"fenye1\">GO</span>";
		}
		html +="　共"+maxPage+"页　"+maxLine+"条";
		html +="<input type=\"hidden\" id=\"pageInput\" name=\"pageIndex\" value=\"1\" />";
		return html;
	}
	/**
	 * 战绩详细分页
	 * @param page
	 * @param maxLine
	 * @param limitCount
	 * @param omission
	 * @param formId
	 * @return
	 */
	public static String getzhanjiToJsp(Integer page ,Integer maxLine , Integer limitCount,Integer omission,String formId){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		String fromIdSubmit ="$(\"#"+formId+"\").submit();";
		
		if(page!=null && page > 1){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\"1\");"+fromIdSubmit+"' class=\"fenye1\">首页</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\""+(page-1)+"\");"+fromIdSubmit+"' class=\"fenye5\">&nbsp;</span>";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<span class=\"fenye2_hover\">"+(i+1)+"</span>";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">...</span>";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">"+(i+1)+"</span>";
			}
		}
		if(page==null || page < maxPage){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\""+(page+1)+"\");"+fromIdSubmit+"' class=\"fenye4\">&nbsp;</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val(\""+maxPage+"\");"+fromIdSubmit+"' class=\"fenye1\">尾页</span>";
		}
		if(maxPage > 1){
			html += "<input type=\"text\" class=\"fenye_input\" id=\"page_id\"  onblur='$(\"#"+formId+"\").find(\"input[name=page_Index]\").val($(\"#page_id\").val());' />&nbsp;页<span  onclick='"+fromIdSubmit+"'  class=\"fenye1\">GO</span>";
		}
		html +="　共"+maxPage+"页　"+maxLine+"条";
		html +="<input type=\"hidden\" id=\"page_Input\" name=\"page_Index\" value=\"1\" />";
		return html;
	}
	/**JSP页面使用的分页
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的记录的总条件
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @param formId 要提交的表单的ID
	 * @return
	 */
	public static String getMesgToJsp(Integer page ,Integer maxLine , Integer limitCount,Integer omission,String formId){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		String fromIdSubmit ="getList(\"list\",\"listCont\");";
		
		if(page!=null && page > 1){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\"1\");"+fromIdSubmit+"' class=\"fenye1\">首页</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page-1)+"\");"+fromIdSubmit+"' class=\"fenye5\">&nbsp;</span>";
		}
		for(int i = 0 ; i < maxPage ; i ++ ){
			if((i+1)==page){
				html +="<span class=\"fenye2_hover\">"+(i+1)+"</span>";
			}else if((i+omission+1)==page||(i-omission+1)==page){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">...</span>";
			}else if(page!=null&&(page-omission-1)<i&&(page+omission-1)>i){
				html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(i+1)+"\");"+fromIdSubmit+"' class=\"fenye2\">"+(i+1)+"</span>";
			}
		}
		if(page==null || page < maxPage){
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page+1)+"\");"+fromIdSubmit+"' class=\"fenye4\">&nbsp;</span>";
			html += "<span onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+maxPage+"\");"+fromIdSubmit+"' class=\"fenye1\">尾页</span>";
		}
		if(maxPage > 1){
			html += "<input type=\"text\" class=\"fenye_input\" id=\"pageid\"  onblur='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val($(\"#pageid\").val());' />&nbsp;页<span onclick='"+fromIdSubmit+"'  class=\"fenye1\">GO</span>";
		}
		html +="　共"+maxPage+"页　"+maxLine+"条";
		html +="<input type=\"hidden\" id=\"pageInput\" name=\"pageIndex\" value=\"1\" />";
		return html;
	}
	/**JSP页面使用的分页
	 * 返回对应的页数
	 * @param page 当前选择页数
	 * @param maxLine 当前条件下的记录的总条件
	 * @param limitCount 每页显示记录数
	 * @param omission 设置前后间隔几页进行省略
	 * @param formId 要提交的表单的ID
	 * @return
	 */
	public static String getPageToJspForCanyu(Integer page ,Integer maxLine , Integer limitCount,Integer omission,String formId){
		String html = "";
		Integer maxPage = (maxLine+limitCount-1)/limitCount;
		String fromIdSubmit ="$(\"#"+formId+"\").submit();";
		html +="　共"+maxPage+"页　共"+maxLine+"条";
		html +="<input type=\"hidden\" id=\"pageInput\" name=\"pageIndex\" value=\"1\" />";
		
	//	for(int i = 0 ; i < maxPage ; i ++ ){
				html +="　第"+page+"页";
		//}
		if(page!=null && page > 1){
			html += "<a onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\"1\");"+fromIdSubmit+"'  href=\"javaScript:;\">首页</a>";
			html += "<a onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page-1)+"\" href=\"javaScript:;\");"+fromIdSubmit+"' >上一页</a>";
		} 
		if(page==null || page < maxPage){
			html += "<a onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+(page+1)+"\" );"+fromIdSubmit+"'href=\"javaScript:;\" >下一页</a>";
			html += "<a onclick='$(\"#"+formId+"\").find(\"input[name=pageIndex]\").val(\""+maxPage+"\" );"+fromIdSubmit+"'href=\"javaScript:;\">尾页</a>";
		}
		return html;
	}
	/**
	 * 根据用户名查询用户信息
	 * @return 显示用户信息的页面
	 * @throws IOException 
	 *  
	 */
	public static JSONObject findUserMessage(String useName) throws IOException {
	
			JSONObject jsonValue = null;
			
			//得到新接口按手机号码查询用户信息的地址
			String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL+"/tuserinfoes","json&find=ByUserName&userName="+useName,"POST");
			JSONObject obj=JSONObject.fromObject(re);
			logger.info("新接口的返回码："+CommonUtil.getBackValue("errorCode", obj));
			if(obj!=null){
				
				jsonValue  =  JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
				logger.info("得到用户信息是:"+jsonValue);
			}
		   return jsonValue;
		
	}
	

	public static String getTransactionyTypeMsg (Integer transactionyType){
		String str = "";
		switch (transactionyType) {
		case 1:
			str = "投注";break;
		case 2:
			str = "银行卡充值";break;
		case 3:
			str = "平台卡充值";break;
		case 4:
			str = "结算";break;
		case 5:
			str = "提现";break;
		case 6:
			str = "兑奖结算";break;
		case 7:
			str = "退款";break;
		case 8:
			str = "追号套餐";break;
		case 9:
			str = "大客户充值";break;
		case 10:
			str = "点卡充值";break;
		case 11:
			str = "调账";break;
		case 12:
			str = "第一次充值赠送彩金 ";break;
		case 13:
			str = "活动充值赠送彩金";break;
		case 14:
			str = "用户注册赠送彩金";break;
		case 15:
			str = "合买金额冻结";break;
		case 16:
			str = "合买金额解冻";break;
		case 17:
			str = "合买返奖";break;
		case 18:
			str = "合买佣金";break;
		case 19:
			str = "合买扣款";break;
		case 20 :
			str = "追号定制金额冻结";break;
		case 23:
			str = "赠送彩金";break;
		case 24:
			str = "翼支付撤销扣款";break;
		case 25:
			str = "话费定制";break;
		case 26:
			str = "奖金转账";break;
		case 27:
			str = "中金提现扣款";break;
		case 28:
			str = "转账加款";break;
		case 29:
			str = "转账减款";break;
		case 30:
			str = "合买撤单";break;
		case 31:
			str = "合买撤资";break;
		case 32:
			str = "奖金撤消";break;
		case 33:
			str = "官方加奖";break;
		default:
			str = "其他";break;
		}
		return str;
	}
	/**
	 * 根据交易类型显示+或-
	 */
	public static String getTypeByMsg (Integer  transactionyType,String memo){
		String str = "";
		switch (transactionyType) {
		case 1:
			str = "-";break;
		case 2:
			str = "+";break;
		case 3:
			str = "+";break;
		case 4:
			str = "+";break;
		case 5:
			str = "-";break;
		case 6:
			str = "+";break;
		case 7:
			str = "+";break;
		case 8:
			if(memo.indexOf("取消追号")>-1){
				str = "+";break;
			}else{
			str = "-";break;
			}
		case 9:
			str = "+";break;
		case 10:
			str = "+";break;
		case 11:
			str = "";break;
		case 12:
			str = "+ ";break;
		case 13:
			str = "+";break;
		case 14:
			str = "+";break;
		case 15:
			if(memo.indexOf("撤单")>-1||memo.indexOf("撤资")>-1||memo.indexOf("返奖")>-1||memo.indexOf("佣金")>-1||memo.indexOf("解冻")>-1){
				str = "+";break;
			}else{
			str = "-";break;
			}
		case 16:
			str = "+";break;
		case 17:
			str = "+";break;
		case 18:
			str = "+";break;
		case 19:
			str = "-";break;
		case 20 :
			str = "-";break;
		case 23:
			str = "+";break;
		case 24:
			str = "-";break;
		case 25 :
			str = "-";break;
		case 26:
			str = "-";break;
		case 27:
			str = "-";break;
		case 28:
			str = "+";break;
		case 29:
			str = "-";break;
		case 30:
			str = "+";break;
		case 31:
			str = "+";break;
		case 32:
			str = "+";break;
		case 33:
			str = "+";break;
		default:
			str = "";break;
		}
		if(memo.indexOf("退款")>-1||memo.indexOf("活动赠送")>-1||memo.indexOf("合买发单返奖")>-1||memo.indexOf("撤单")>-1||memo.indexOf("撤资")>-1||memo.indexOf("返奖")>-1||memo.indexOf("佣金")>-1||memo.indexOf("解冻")>-1){
			str = "+";
		}
		if(memo.indexOf("手续费")>-1){
			str = "-";
		}
		return str;
	}
	

	/**
	 * 
	 * 根据用户编号查询是否订阅6元套餐
	 * @param userno 用户编号
	 * @return 订阅了返回true,没有订阅返回false;
	 * @throws Exception
	 */
	public static JSONObject getSoufuTransaction(String userno) throws Exception{
		
		//调用接口查询是否有订阅6元套餐信息
		String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL
				+"/tsoufu?find=sofuTransactions&json&userno="+userno);
		logger.info("根据userno调用查询订阅6元套餐接口返回re="+re);
		
		JSONObject objValue = null;
		
		//得到transaction
		JSONObject obj = JSONObject.fromObject(re);
		String error_code = CommonUtil.getBackValue("errorCode", obj);
		if(error_code.equals(LotErrorCode.NEW_OK)){
			//判断是否有transaction返回
			JSONArray array = JSONArray.fromObject(CommonUtil.getBackValue("value", obj));
			if(array.size() > 0){
				objValue = array.getJSONObject(0);
			}
		}
		return objValue;
	}
	
	/**
	 * 
	 * 创建新的transaction订单号
	 * 嗖付支付6元套餐服务
	 * @return 
	 * @throws Exception 
	 */
	public static String getCustomSetMeal(String userno,String transAmt) throws Exception{

		//调用接口查询返回订单号
	 	String re = JSONReslutUtil.getResultMessage(ResourceBundleUtil.LINKURL+"/tsoufu/chargeSoufu?", 
	 			"userno="+userno+"&transAmt="+transAmt, "POST");
	 	String id = "";

	 	JSONObject obj = JSONObject.fromObject(re);
	 	//判断返回码得到transactionid
	 	if(CommonUtil.getBackValue("errorCode", obj).equals(LotErrorCode.NEW_OK)){
	 		JSONObject jsonValue = JSONObject.fromObject(CommonUtil.getBackValue("value", obj));
	 		id=CommonUtil.getBackValue("id", jsonValue);
	 	}
	 	return id;
	}
	
	/**
	 * 编码转换
	 * @param args
	 * @throws Exception
	 */
	public  static String switchCode(String argument ){
		String arg = "";
		try {
			arg= URLDecoder.decode(argument.trim(), "utf-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return arg;
	}
	
	
	/**
	 * 查询账户余额
	 * @param userno 用户编号
	 * @return
	 * @throws Exception
	 */
	public static  JSONObject getBalance(String userno)throws Exception {
		return JSONObject.fromObject(
				JSONReslutUtil.getResultMessage(
					ResourceBundleUtil.LINKURL + "/select/getAccount?","userno="+userno,"POST"))
					.getJSONObject("value");
	}
	
	
	/**
	 * 赠送彩金
	 * @param user
	 * @throws Exception
	 */
	@Deprecated
	public static void sendRegisterMoney(Tuserinfo user) throws Exception{
		//赠送开关，如果为1，则执行怎送彩金的方法
		if(ResourceBundleUtil.SEND_REGISTER.equals("1")){
			JSONObject registerPara = new JSONObject();
			registerPara.put("mobileId", user.getMOBILEID());
			registerPara.put("presentationMoney", ResourceBundleUtil.PRESENTATION_MONEY);
			JSONObject json = JSonResultService.getAllJSonReuslt(registerPara, null, "", 0, "registerPreMoney.do", "registerPreMoney");
			if(json!=null && LotErrorCode.OK.equals(json.getString("error_code"))){
				JSONObject sendJSON = JSONObject.fromObject(json.getString("value"));
				logger.debug(json.getString("error_code"));

				if(sendJSON!=null && sendJSON.getString("error_code").equals(LotErrorCode.DLOK)){
					logger.debug("赠送彩金成功,赠送金额为:"+ResourceBundleUtil.PRESENTATION_MONEY+"元");
				}else{
					logger.debug("赠送彩金失败,手机号:"+user.getMOBILEID());
				}
			}
		}else{//赠送彩金END
			logger.debug("用户注册时没有赠送彩金,用户手机号："+user.getMOBILEID());
		}
	}
	
	/**
	 * 
	 * 提取查询的开始时间
	 * @param startDate 开始时间默认为7天；超过三个月为三个月的时间；否则将"-"替换""
	 * @return 并返回开始时间 startDate
	 * @throws ParseException
	 */
	public static String getStartDate(String startDate) throws ParseException{
		DateFormat df = new SimpleDateFormat("yyyyMMdd"); 
		DateFormat dfs = new SimpleDateFormat("yyyy-MM-dd");
		if(startDate==null || startDate.equals("") || startDate == "undefined"){//默认查询7天的账户明细
			startDate = dfs.format(new Long(new Date().getTime()/1000-(60*60*24*7))*1000);
			
		}else{
			if((df.parse(startDate.replace("-","")).getTime())/1000 <= (new Date().getTime()/1000 - 60*60*24*90)){
				startDate = dfs.format(new Long(new Date().getTime()/1000-(60*60*24*89))*1000);
			}
			
		}
		return startDate;
		
	}
	
	
	public static String getLotnoCn(String lotno){
		String lotno_cn = "";
		if("F47104".equals(lotno)){
			lotno_cn = "双色球";
		}else if("F47103".equals(lotno)){
			lotno_cn = "福彩3D";
		}else if("F47102".equals(lotno)){
			lotno_cn = "七乐彩";
		}else if("T01001".equals(lotno)){
			lotno_cn = "大乐透";
		}else if("T01002".equals(lotno)){
			lotno_cn = "排列三";
		}else if("T01011".equals(lotno)){
			lotno_cn = "排列五";
		}else if("T01009".equals(lotno)){
			lotno_cn = "七星彩";
		}else if("J00011".equals(lotno)){
			lotno_cn = "竞彩足球";
		}else if("J00012".equals(lotno)){
			lotno_cn = "竞彩篮球";
		}
		return lotno_cn; 
	}
	/***
	 * 金额保留两位小数
	 * @return
	 */
	public static String moneySave2(double str){
		DecimalFormat dfs=new DecimalFormat( "#####0.00 "); 
		return  dfs.format(str);
		
	}
	public static String getTitle(String lotno){
		String lotno_cn = "";
		if("F47104".equals(lotno)){
			lotno_cn = "-双色球合买";
		}else if("F47103".equals(lotno)){
			lotno_cn = "-福彩3D合买";
		}else if("F47102".equals(lotno)){
			lotno_cn = "-七乐彩合买";
		}else if("T01001".equals(lotno)){
			lotno_cn = "-大乐透合买";
		}else if("T01002".equals(lotno)){
			lotno_cn = "-排列三合买";
		}else if("T01011".equals(lotno)){
			lotno_cn = "-排列五合买";
		}else if("T01009".equals(lotno)){
			lotno_cn = "-七星彩合买";
		}else if("T01005".equals(lotno)){
			lotno_cn = "-四场进球合买";
		}else if("T01003".equals(lotno)){
			lotno_cn = "-胜负彩合买";
		}else if("T01004".equals(lotno)){
			lotno_cn = "-任九场合买";
		}else if("T01006".equals(lotno)){
			lotno_cn = "-六场半合买";
		}else if("J00011".equals(lotno)){
			lotno_cn = "-竞彩足球合买";
		}else if("J00012".equals(lotno)){
			lotno_cn = "-竞彩篮球合买";
		}
		return lotno_cn; 
	}
	//开奖详情页面的seo使用
	public static String getTitle_kaijiang(String lotno){
		//格式：标题&关键字&描述
		String messg = "";
		if("F47104".equals(lotno)){
			messg = "双色球";
		}else if("F47103".equals(lotno)){
			messg = "福彩3D";
		}else if("F47102".equals(lotno)){
			messg = "七乐彩";
		}else if("T01001".equals(lotno)){
			messg = "大乐透";
		}else if("T01002".equals(lotno)){
			messg = "排列三";
		}else if("T01011".equals(lotno)){
			messg = "排列五";
		}else if("T01009".equals(lotno)){
			messg = "七星彩";
		}else if("T01010".equals(lotno)){//十一选五
			messg = "11选5";
		}else if("T01012".equals(lotno)){//十一运夺金
			messg = "十一运夺金";
		}else if("T01007".equals(lotno)){//时时彩
			messg = "时时彩";
		}else if("J00011".equals(lotno)){
			messg = "竞彩足球";
		}else if("J00012".equals(lotno)){
			messg = "竞彩篮球";
		}
	return messg; 
	}
	public static String scoreType(String type){
		String type_cn = "";
		if("-1".equals(type)){
			type_cn = "兑换积分";
		}else if("1".equals(type)){
			type_cn = "注册并完善信息";
		}else if("2".equals(type)){
			type_cn = "普通投注";
		}else if("3".equals(type)){
			type_cn = "追号";
		}else if("4".equals(type)){
			type_cn = "发起合买";
		}else if("5".equals(type)){
			type_cn = "参与合买";
		}else if("6".equals(type)){
			type_cn = "充值";
		}else if("7".equals(type)){
			type_cn = "留言建议";
		}else if("8".equals(type)){
			type_cn = "用户登录";
		}else if("99".equals(type)){
			type_cn = "赠送积分";
		}
		return type_cn; 
	}
	
	/**
	 * 通过http请求可以获得当前用户的登录信息 只能获得user详情
	 * 参数jsessionid=｛cookie中存储的值｝、a=随机数
	 * @param 返回值为JSONObject对象{errorCode:"0",value:{用户对象}} 如果失败则返回100002 或者500
	 */
	public  JSONObject getUserInfo(HttpSession session){
		JSONObject reJsonObj = new JSONObject();
		try {
			if(session.getAttribute("userno")!=null){//判断session中是否存在当前用户的对象
				reJsonObj.put("errorCode", "0");
				Object userInfoObj =null;
				String userInfoStr = "";
				if(userInfoObj!=null){
					userInfoStr = userInfoObj.toString();//从系统缓存中获取用户信息 
				}else{
					userInfoStr = JSONObject.fromObject(
								JSONReslutUtil.getResultMessage(linkURL + 
										"/tuserinfoes?json&find=ByUserno&userno="+session.getAttribute("userno").toString()))
										.getJSONObject("value").toString();
				}
				reJsonObj.put("value", JSONObject.fromObject(userInfoStr));
				return reJsonObj;
			}else{//如果不存在则返回100002告知用户不存在并需要登录
				reJsonObj.put("errorCode", ErrorCode.UserMod_UserNotExists.value);
				reJsonObj.put("value", "{}");
				return reJsonObj;
			}
		} catch (IOException e) {//异常则返回500
			reJsonObj.put("errorCode", ErrorCode.ERROR.value);
			reJsonObj.put("value", "{}");
			return reJsonObj;
		}
	}
//	public static String scoreTypeMsg(String type){
//		String type_cn = "";
//		if("兑换积分".equals(type)){
//			type_cn = "-";
//		}else {
//			type_cn = "+";
//		}
//		return type_cn; 
//	}
//	getUserInfo(HttpSession session){
//		JSONObject reJsonObj = new JSONObject();
//		try {
//			if(session.getAttribute("userno")!=null){//判断session中是否存在当前用户的对象
//				reJsonObj.put("errorCode", "0");
//				Object userInfoObj = null;
//				String userInfoStr = "";
//				if(userInfoObj!=null){
//					userInfoStr = userInfoObj.toString();//从系统缓存中获取用户信息 
//				}else{
//					userInfoStr = JSONObject.fromObject(
//								JSONReslutUtil.getResultMessage(linkURL + 
//										"/tuserinfoes?json&find=ByUserno&userno="+session.getAttribute("userno").toString()))
//										.getJSONObject("value").toString();
//				}
//				reJsonObj.put("value", JSONObject.fromObject(userInfoStr));
//				return reJsonObj;
//			}else{//如果不存在则返回100002告知用户不存在并需要登录
//				reJsonObj.put("errorCode", ErrorCode.UserMod_UserNotExists.value);
//				reJsonObj.put("value", "{}");
//				return reJsonObj;
//			}
//		} catch (IOException e) {//异常则返回500
//			reJsonObj.put("errorCode", ErrorCode.ERROR.value);
//			reJsonObj.put("value", "{}");
//			return reJsonObj;
//		}
//	}
	
	
	/**
	 * 通过http请求可以修改当前用户的信息
	 * 例子：http://user.boyacai.com/user/center!editUserInfo;jsessionid=｛cookie中存储的值｝?a=随机数
	 * http://user.boyacai.com/user/center!getUserCookie;jsessionid=D051904206F696879C5C507444217FFD?a=3493537239827349
	 * @param 返回值为JSONObject对象{errorCode:"0",value:{用户对象}} 如果失败则返回100002 或者500
	 */
	public static JSONObject editUserInfo(HttpServletRequest request,JSONObject user){
		String JsonUserInfo = request.getParameter("userinfo")==null?"":request.getParameter("userinfo");
		JSONObject reJsonObj = null;
		if(!JsonUserInfo.isEmpty()){
			try {
				reJsonObj = JSONObject.fromObject(JsonUserInfo);
				//将查到呃用户信息存入缓存
				reJsonObj.put("errorCode", "0");
				reJsonObj.put("value", "{}");
				return reJsonObj;
			} catch (Exception e) {//异常则返回500
				reJsonObj.put("errorCode", ErrorCode.ERROR.value);
				reJsonObj.put("value", "{}");
				return reJsonObj;
			}
		}
		reJsonObj.put("errorCode", ErrorCode.ERROR.value);
		reJsonObj.put("value", "{}");
		return reJsonObj;
	}
	
	/**
	 * 发送手机号码的验证码
	 * @param request 生成验证码存入session中
	 * @return
	 */
	public static String getRandYZM(){
		//生成随机类
		Random random = new Random();
		// 取随机产生的认证码(4位数字)
		String sRand = "";
		for (int i = 0; i < 4; i++) {
			String rand = String.valueOf(random.nextInt(10));
			sRand += rand;
		}
		return sRand;
	}
	
	
	
     public static String getNewsPageToHtml(Integer page, Integer maxLine,
			Integer limitCount, Integer omission) {
		String html = "";
		Integer maxPage = (maxLine + limitCount - 1) / limitCount;

		if (page != null && page > 1) {
			html += "<a href='/web/newsSearch!getSearchList?page=1'>第一页</a>";
			html += "<a href='/web/newsSearch!getSearchList?page=" + (page - 1)
					+ "'>上一页</a>";
		}
		for (int i = 0; i < maxPage; i++) {
			if ((i + 1) == page) {
				html += "[-" + (i + 1) + "-]";
			} else if ((i + omission + 1) == page || (i - omission + 1) == page) {
				html += "<a href='/web/newsSearch!getSearchList?page="
						+ (i + 1) + "'>[...]</a>";
			} else if (page != null && (page - omission - 1) < i
					&& (page + omission - 1) > i) {
				html += "<a href='/web/newsSearch!getSearchList?page="
						+ (i + 1) + "'>[-" + (i + 1) + "-]</a>";
			}
		}
		if (page == null || page < maxPage) {
			html += "<a href='/web/newsSearch!getSearchList?page=" + (page + 1)
					+ "'>下一页</a>";
			html += "<a href='/web/newsSearch!getSearchList?page=" + maxPage
					+ "'>尾页</a>";
		}

		html += "共" + maxPage + "页　" + maxLine + "行";
		return html;
	}
     
     /**
      * 获取源文件的编码
      * @param filePath 源文件所在的绝对路径
      * @return
      */
     public static  String getFileEnCode(String filePath) {
 		InputStream inputStream = null;
 		String code = ""; 
 		try {
 			inputStream = new FileInputStream(filePath);  
 	        byte[] head = new byte[3];  
 	        inputStream.read(head);   
 	        code = "gb2312";  
 	        if (head[0] == -1 && head[1] == -2 ){
 	        	code = "UTF-16";
 	        }	              
 	        if (head[0] == -2 && head[1] == -1 ){
 	        	code = "Unicode";
 	        }  	              
 	        if(head[0]==-17 && head[1]==-69 && head[2] ==-65){
 	        	code = "UTF-8";
 	        }
 		}catch(Exception e) {
 			e.printStackTrace();
 		} finally {
 			try {
 				inputStream.close();
 			} catch (IOException e) {
 				e.printStackTrace();
 			}
 		}
 		return code;
 	} 
}
