package com.ruyicai.util;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

/**
 * 
 * 读取如意彩配置文件
 * 
*/
public class ResourceBundleUtil {
	private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai");

	//身份证号码
	public static final String CARDID = rbint.getString("cardId");

	//注册送彩金的开关
	public static final String SEND_REGISTER = rbint.getString("sendRegister");
	//注册送彩金的金额
	public static final String PRESENTATION_MONEY = rbint.getString("presentationMoney");

	//登录地址
	public static final String LOGIN = rbint.getString("login");

	//获取彩种
	public static final String LOTNO = rbint.getString("lotno");
	//获取彩种
	public static final String LOTNOS = rbint.getString("lotnos");

	//获取文件上传路径
	public static final String file_upload = rbint.getString("file_upload");

	//民生银行接口地址
	public static final String MSBANKURL = rbint.getString("msbankUrl");

	/**
	 * 合买
	 */
	//合买最后拼接的内容
	public final static String HEMAI_END = rbint.getString("hemai_end");

	//合买方案文件名称
	public final static String HEIMAI_NAME = rbint.getString("heimai_name");

	//如意彩注册手机发送短信内容
	public static final String RYCSENDMES = rbint.getString("ryc_sendMsg");

	//如意彩注册手机发送短信内容
	public static final String RYC_PHONEBANDSENDMSG = rbint.getString("ryc_phonebandsendMsg");

	//新的链接地址
	public static final String LINKURL = rbint.getString("linkURL");
	//新遗漏值的链接地址
	public static final String OMITURL = rbint.getString("OmitURL");

	//新投注比例的链接地址
	public static final String ANALYZEURL = rbint.getString("analyzeURL");

	//双色球全年追号套餐的链接地址
	public static final String ACTIONCENTERURL = rbint.getString("actioncenterURL");

	//短信计数的链接地址
	//	public static final String LINKSMSCOUNTURL = rbint.getString("linksmsCount");

	//发送手机短信的链接地址
	//	public static final String SENDURL = rbint.getString("sendUrl");

	//找回密码发送邮件地址
	public static final String FINFPEDBYEMAIL = rbint.getString("ryc_findpwd");

	//如意彩发送到邮箱的地址连接
	public static final String RYCEMAILURL = rbint.getString("rycemailUrl");

	//如意彩邮箱注册发送到邮箱的地址连接
	public static final String RYCEMAILREGISTERURL = rbint.getString("rycemailRegisterUrl");

	//设置开关短信地址
	public static String LINKSMGURL = rbint.getString("linkSMGUrl");

	//如意彩用户登录获取地址
	public static String USERSCENTERURL = rbint.getString("usersCenterUrl");
	//赠彩相关查询地址
	public static String LINKZCURL = rbint.getString("linkPRESENTUrl");
	//积分相关查询地址
	public static String LINKSCOREURL = rbint.getString("linkSCOREUrl");
	public static String datacenter = rbint.getString("datacenterURL");
	//积分相关查询地址
	public static String LINKMESSAGE = rbint.getString("linkMessage");
	//积分相关查询地址
	public static String LINKRANK = rbint.getString("linkRank");

	public static String LOTSERVERURL = rbint.getString("lotServer");

	/**
	 * 返回对应网站所需内容在配置文件获取的方法
	 * 包括渠道号、Channel、充值返回地址
	 * @return
	 */
	public static Map<String, String> getPropertiesList(String prorertiesName) {
		//读取配置文件中的内容
		String[] prorertiesNames = rbint.getString(prorertiesName).split(",");
		Map<String, String> map = new HashMap<String, String>();
		try {
			//循环存入map中
			for (String prorName : prorertiesNames) {
				String[] retUrl;
				retUrl = new String(prorName.getBytes("ISO-8859-1"), "utf-8").split("-");
				map.put(retUrl[0], retUrl[1]);
			}
			return map;
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return map;
		}
	}

	//调用从配置文件中获取所有充值返回的地址
	public static Map<String, String> mapRetUrlCharge = ResourceBundleUtil.getPropertiesList("retUrlCharge");
	//渠道号
	public static Map<String, String> mapAngecyNo = ResourceBundleUtil.getPropertiesList("agencyno");
	//channelID
	public static Map<String, String> mapChannelId = ResourceBundleUtil.getPropertiesList("channel");
	//从配置文件中获取返回地址传给后台
	public static Map<String, String> mapAlipayLoginUrl = ResourceBundleUtil.getPropertiesList("alipayLoginUrl");

	//找回密码手机发送短信内容
	//	public static Map<String, String> FINDMES = ResourceBundleUtil.getPropertiesList("findMsg");
	public static String FIND_MES = rbint.getString("findMsg");
	/**
	 * 支付宝快捷登录所需参数
	 */
	public static String ALIPAY_ID = rbint.getString("alipay_id");//partner
	public static String ALIPAY_KEY = rbint.getString("alipay_key");//key
	public static String ALIPAY_URL = rbint.getString("alipay_url");//请求支付宝的地址
	public static String ALIPAY_CHANNEL = rbint.getString("alipay_channel");//支付宝的subchannel
	public static String ALIPAY_TYPE = rbint.getString("alipay_type");//支付宝的type

	/**
	 * QQ登录所需要的参数
	 */

	public static String QQ_CHANNEL = rbint.getString("qq_channel");
	public static String QQ_TYPE = rbint.getString("qq_type");
	public static String QQ_AUTHORIZATION_CODE_URL = rbint.getString("qq_Authorization_Code_url");
	public static String QQ_ACCESS_TOKEN_URL = rbint.getString("qq_Access_Token_url");
	public static String QQ_GETUSERID_URL = rbint.getString("qq_getUserId_url");
	public static String QQ_GETUSERINFO_URL = rbint.getString("qq_getUserInfo_url");
	public static Map<String, String> MAPQQLOGINURL = ResourceBundleUtil.getPropertiesList("qqLoginUrl");
	public static Map<String, String> QQ_APP_ID = ResourceBundleUtil.getPropertiesList("qq_app_id");
	public static Map<String, String> QQ_APP_KEY = ResourceBundleUtil.getPropertiesList("qq_app_key");

	//前台单式上传的多个文件之间的分隔符
	public static String UPLOAD_SIGN = rbint.getString("uploadSign");
	public static String UPLOADCODES = rbint.getString("uploadCodes");

	//获取默认的渠道号
	public static String DEFALUT_SUBCHANNEL = rbint.getString("defalut_subchannel");
}
