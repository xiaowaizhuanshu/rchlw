package com.ruyicai.util;

/**
 * 
 * @classname: MessageUtil
 * @description: 信息常量类
 * @author: 徐丽
 * @date: 2010-11-11 上午10:08:05
 * 
 */
public class MessageUtil {

	public static final String TIAW_register_mobileId = "注册失败!电话号码格式必须是合法的11位数字";
	public static final String TIAW_register_PasswordLengthError = "注册失败!密码为6-15位";
	public static final String TIAW_register_RealPass = "注册失败!密码与确认密码不相同";
	public static final String TIAW_register_OldSuccessNewError = "注册成功，但在过程中发生异常，若无法登录，请联系客服人员";
	public static final String TIAW_register_Error = "注册失败！网络异常！请稍后再试！";
	public static final String TIAW_register_OrderError = "注册失败！您的信息必须完全有效，请确定您的信息有效性！";
	public static final String TIAW_emailregister_OrderError = "注册失败！您的信息必须完全有效！";
	public static final String TIAW_register_UserExists = "用户名或手机号已注册！";
	public static final String TIAW_register_TimeOut = "操作失败了，原因是您可能没有在同一个浏览器中操作，或者30分钟内没有完成最后的邮箱验证操作！";
	
	public static final String TIAW_login_MobileNotEmpty = "手机号码必须填写!";
	public static final String TIAW_login_PasswordNotEmpty = "密码必须填写!";
	public static final String TIAW_login_MobileLengthError = "手机号码必须是11位数字!";
	public static final String TIAW_login_MobilePatternError = "手机号格式错误";
	public static final String TIAW_login_Fail = "用户名或密码错误!";
	public static final String TIAW_login_Success = "登录成功,请您设置昵称！";
	public static final String TIAW_login_ExceptionMsg = "登录失败";
	public static final String TIAW_login_RandCodeError = "验证码错误";
	public static final String TIAW_login_ClosedUser = "您的账户已关闭，请重新注册！";
	public static final String TIAW_login_WaitActivationUser="您的账户处于待激活状态，请联系客服400-665-1000重新激活";

	public static final String TIAW_changeUserinfo_LoginMsg = "请您登录";
	public static final String TIAW_changeUserinfo_NameNotEmpty = "用户名不能为空!";
	public static final String TIAW_changeUserinfo_RealNameNotEmpty = "真实姓名不能为空!";
	public static final String TIAW_changeUserinfo_CertidNotEmpty = "身份证号不能为空!";
	public static final String TIAW_changeUserinfo_NULL = "您填写的信息不能为空！";
	public static final String TIAW_changeUserinfo_NICKNAME = "昵称不能带有特殊字符!";
	public static final String TIAW_changeUserinfo_NICKNAME_Error = "昵称设置失败！网络异常！请稍后再试！!";
	public static final String TIAW_changeUserinfo_NAME = "真实姓名不能带有特殊字符!";
	public static final String TIAW_changeUserinfo_STRINGFILTER = "不能输入特殊字符!";
	public static final String TIAW_changeUserinfo_CertIdError = "身份证号不合法";
	public static final String TIAW_changeUserinfo_PhoneError = "联系电话格式错误!";
	public static final String TIAW_changeUserinfo_EmailError = "email格式错误!";
	public static final String TIAW_changeUserinfo_QQError = "qq格式错误!";
	public static final String TIAW_changeUserinfo_MsnError = "msn格式错误!";
	public static final String TIAW_changeUserinfo_Success = "个人信息修改成功";
	public static final String TIAW_phoneBand_Success = "手机号码绑定成功";
	public static final String TIAW_changeUserinfo_Fail = "个人信息修改失败!";

	public static final String TIAW_changePassword_Success = "修改密码成功";
	public static final String TIAW_changePassword_PasswordError = "密码错误";
	public static final String TIAW_changePassword_NewOldPasswordError = "确认密码与密码不相同";
	public static final String TIAW_changePassword_Fail = "您的原密码输入错误!";
	
	
	public static final String TIAW_changeEmail_Success = "修改邮箱成功";	
	public static final String TIAW_changeEmail_EmailError = "邮箱格式错误";
	public static final String TIAW_changeEmail_Fail = "您的原邮箱输入错误!";
	
	
	public static final String TIAW_cash_MoneyNotEmpty = "请您输入提现金额!";
	public static final String TIAW_cash_MoneyPatternError = "银行账号必须是大于等于16位的数字串";
	public static final String TIAW_cash_BankNumberPatternError = "银行账号格式必须是16-21位的数字字符串";
	public static final String TIAW_cash_ProvnameNotEmpty = "请输入开卡所在省!";
	public static final String TIAW_cash_AreaNotEmpty = "请输入开卡所在市";
	public static final String TIAW_cash_RealNameNotEmpty = "请输入持卡人姓名";
	public static final String TIAW_cash_BankIdNotEmpty = "请选择开卡银行!";
	public static final String TIAW_cash_MoneyNotEnough = "余额不足!";
	public static final String TIAW_cash_CashFail = "提现失败";
	public static final String TIAW_cash_CashSuccess = "提现成功";

	public static final String SELECT_BET_MESSAGE = "无查询记录";
	public static final String SELECT_HEMAI_MESSAGE = "无该合买记录";
	public static final String SELECT_HEMAI_SLBZ = "购买数量超过剩余份数";
	public static final String SELECT_HEMAI_FAMY = "方案已满员";
	public static final String SELECT_HEMAI_SUCCESS = "参与合买成功";

	/**
	 * 充值
	 */
	public static final String YL_Charge_type = "yinLianBanks"; //银联支付
	public static final String SH_Charge_type = "shangHaiBanks"; //上海银联支付充值
	public static final String MS_Charge_Type = "minShengBanks";// 民生银行充值
	public static final String ZFB_Charge_Type = "zfbzx";// 代表支付宝充值
	public static final String ZFB_Charge_Sound = "zfbyy";// 代表支付宝语音充值
	public static final String UMPAY_Charge_type = "umpay";// 代表联动优势充值
	public static final String YEEPAY_Charge = "yeepay";// 代表易宝充值
	public static final String CAW_ZFBCharge_MoneyNotEmpty = "请您输入充值金额或充值卡面值";
	public static final String CAW_ZFBCharge_ZHNotEmpty = "请您输入支付宝账户";
	public static final String CAW_ZFBCharge_MoneyIsNum = "必须是大于等于1的整数!";
	public static final String CAW_ZFBCharge_Fail = "充值失败,请稍候再试!";
	public static final String CAW_ZFBCharge_Success = "请耐心等待短信或电话";

	public static String CAW_DNACharge_PhoneNotEmpty = "请输入正确的电话号码";
	public static String CAW_DNACharge_PhonePatternError = "您的电话格式不正确";
	public static String CAW_DNACharge_CardNotEmpty = "请输入正确的银行卡号";
	public static String CAW_DNACharge_CardPatternError = "您的卡号格式不正确";
	public static String CAW_DNACharge_MoneyNotEmpty = "请您输入充值金额";
	public static String CAW_DNACharge_MoneyPatternError = "银行卡电话充值最少20元";

	public static final String CAW_DNACharge_UserNameNotEmpty = "请输入用户名";
	public static final String CAW_DNACharge_DocumentNumberNotEmpty = "请输入开卡人身份证号";
	public static final String CAW_DNACharge_AddressCardNotEmpty = "请输入身份证户籍所在地";
	public static final String CAW_DNACharge_Fail = "充值失败,请稍候再试";
	public static final String CAW_DNACharge_Success = "订单提交成功!请耐心等待来电!";
	public static final String CAW_DNACharge_MoreMsg = "您首次使用银联手机支付，请补全信息";
	public static final String CAW_DNACharge_Fail1 = "充值失败";

	public static final String CAWE_yeePayCardCharge_NotEmpty = "请输入您的卡号!";
	public static final String CAWE_yeePayCardCharge_PasswordNotEmpty = "充值卡密码不能为空!";
	public static final String CAWE_yeePayCardCharge_AllmoneyNotEmpty = "请您输入充值卡面值!";
	public static final String CAWE_yeePayCardCharge_AllmoneyPatternError = "充值卡面值必须是大于1的整数!";

	public static final String CAWE_rycCardCharge_fail = "请正确输入如意彩点卡卡号和密码!";

	/**
	 * 提现
	 */
	public static final String FUNCTION_Cash_Success = "提现请求已通过审核，将于五个工作日到账，请耐心等候！";
	public static final String FUNCTION_Cash_NotPass = "提现请求未通过，请重新填写提现申请！";
	public static final String FUNCTION_Cash_Audit = "请耐心等待，您提现申请正在审核中！";
	public static final String FUNCTION_Cash_Service = "提现请求成功提交，请等待客服电话确认！";

	/**
	 * 普通投注返回信息
	 */
	public static final String BET_CODE_NotEmpty = "您的注码不能为空";
	public static final String HEMAI_Success_message = "参与合买成功";


	/**
	 * 异常提示
	 */
	public static final String ERROR_Message = "系统正在维护，请您联系客服400-665-1000或者稍后登录！";
	/**
	 * 如意彩发送邮件的信息
	 */
	public static String RCY_EMAILSESSAGE=
		"亲爱的"
		+"{nickname}"
		+ ":您好!"
		+ "<br/>"
		+ "请您点击下面链接找回如意彩登录密码，如果不做任何操作，您将无法正常使用如意彩相关服务。"
		+ "<br/>"
		+ "<a target='_blank' href="
		+ "{url}"
		+ ">"
		+ "找回登录密码"
		+ "</a>"
		+ "(本链接点击一次后失效)"
		+ "<br/>"
		+ "如果上述文字点击无效，请把下面网页地址复制到浏览器地址栏中打开："
		+ "<br/>"
		+ "{url}"
		+ "<br/>"
		+ "此为系统邮件，请勿回复!"
		+ "请保管好您的邮箱，避免如意彩账户被他人盗用。"
		+ "如有任何疑问，可查看如意彩相关规则，如意彩网站访问http://www.ruyicai.com";
	/*
	 * 邮箱绑定向邮箱发送的内容
	 */
	public static final String EmailBand_Message = "<html><body>亲爱的{nickname}用户"+":"+"<br/>"+"　　您好！请点击下面的链接，完成如意彩邮箱绑定。"
	+"<br/>"+"绑定方式："+"　　立即点击此处"
	+"<a target='_blank' href='{url}'>绑定您的邮箱</a>"+"<br/>"+"如果上述文字点击无效，请把下面网页地址复制到浏览器地址栏中。"+"<br/>"+"（{url}）"+"<br/>"
	+"　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　"
	+"如意彩"+"<br/>"+"客服电话:400-665-1000（工作时间8:00-23:00）"+"<br/>"+"(这是一封自动产生的email，请勿回复。)</body></html>";
	
	
	/*
	 * 邮箱注册向邮箱发送的内容
	 */
	public static final String EmailRegister_Message = "<html><body>亲爱的{nickname}用户"+":"+"<br/>"+"　　您好！请点击下面的链接，完成如意彩注册。"
	+"<br/>"+"（{url}）"+"<br/><br/>"+"如果上述链接无法点击，请把上面的地址复制到您的浏览器地址栏进入如意彩。"+"<br/>"
	+"　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　如意彩"
	+"<br/>"+"客服电话:400-665-1000（工作时间8:00-23:00）"+"<br/>"+"(这是一封自动产生的email，请勿回复。)</body></html>";
}
