package com.jrt.invokeLot.util;

import java.util.ResourceBundle;

import net.sf.json.JSONObject;

import com.ruyicai.util.URLEncoder;

/**
 * 
 * @classname: ChargeUtil
 * @description: 调用jrtLot的充值
 * @author: 徐丽
 * @date: 2010-11-9 上午09:30:06
 * 
 */
public class ChargeUtil {
	private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai");
	private static String baseUrl = rbint.getString("baseUrl");

	/**
	 * 
	 * @Title:  getCharge
	 * @Description: 调用jrtLot充值的方法
	 * @param: map 要传递的参数
	 * mobile_code -- 手机号码
	 * bankId -- 充值方式-民生(msy001)、支付宝(zfb001)、DNA(dna001)、易宝(y00003)、19pay(gyj001)、博雅彩点卡(ryc001)
	 * accesstype -- 渠道 -web(B)、wap(W)、客户端(C)
	 * cardType -- 民生、易宝、支付宝银行卡(01)、支付宝(03)支付宝语音(04)、
	 *             点卡充值(JUNNET-0201,SNDACARD-0202,ZHENGTU-0204,SZX-0203,UNICOM-0206,DXJFK-0221)、
	 *             博雅彩点卡(0300)
	 * transaction_money -- 交易金额
	 * card_no -- dna银行卡号或点卡卡号
	 * card_pwd -- 点卡密码
	 * expand -- 包括 银行卡卡号,用户名,开户行所在地,开卡证件号码,开卡证件所在地,重新输入的电话号码,true-白名单，false-灰名单
	 * totalAmount -- 点卡充值金额注意(web-易宝点卡充值单位为元、19pay单位为分)
	 * @param: action jrtLot中Action类
	 * @param: method jrtLot中Action的方法
	 * @return:   JSONObject -- 返回的json对象
	 * @exception:
	 */
	public static JSONObject getCharge(JSONObject map,String action,String method) throws Exception {
		JSONObject jsonObject = null;
		IHttp http = new IHttp();
		jsonObject = new JSONObject();
		
		jsonObject.put("mobile_code", map.get("mobile_code"));
		jsonObject.put("bankId", map.get("bankId"));
		jsonObject.put("accesstype", map.get("accesstype"));
		jsonObject.put("cardType", map.get("cardType"));
		jsonObject.put("transaction_money", map.get("transaction_money"));
		jsonObject.put("card_no", map.get("card_no")); 
		jsonObject.put("card_pwd", map.get("card_pwd"));
		jsonObject.put("expand", map.get("expand"));
		jsonObject.put("totalAmount", map.get("totalAmount"));

		String para = URLEncoder.encode(jsonObject.toString());
		String re = http.getViaHttpConnection(baseUrl
				+ action+";jsessionid=" + map.get("sessionid")
				+ "?method="+method+"&jsonString=" + para);	
		
		return JSONObject.fromObject(re);
	}
}
