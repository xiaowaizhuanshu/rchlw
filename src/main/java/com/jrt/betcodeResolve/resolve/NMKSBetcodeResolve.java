package com.jrt.betcodeResolve.resolve;

import com.jrt.betcodeResolve.util.BetcodeResolveUtil;
import com.jrt.betcodeResolve.util.Constant;

/**
 * @author Administrator
 *	内蒙快三的注码解析的类
 */
public class NMKSBetcodeResolve {
	public static String getNMKSBetcode(String betcode,String tabNumber,String sign,String dtTab){
		String wanfa = betcode.substring(0, 2);
		betcode = betcode.replace("^", "");
		//二不同号胆拖,三不同胆拖,二同号单选组合
		if("22".equals(wanfa)||"64".equals(wanfa)||"71".equals(wanfa)){
			return getNMKSDTBetcode(betcode, tabNumber, sign, dtTab);
		}else if("40".equals(wanfa)||"50".equals(wanfa)){
			return getNMKSTXBetcode(betcode, tabNumber, sign);
		}else if("00".equals(wanfa)||"01".equals(wanfa)||"02".equals(wanfa)){
			return getNMKSDSBetcode(betcode, tabNumber, sign);
		}else if("81".equals(wanfa)){
			String betcode_new = "";
			betcode_new += wanfa+"0001";// 拼接玩法
			String arr[] = betcode.substring(2).split("\\"+sign);
			betcode_new +=(((arr.length < 10) ? "0" : "") + arr.length);
			betcode_new += BetcodeResolveUtil
							.complement(betcode.substring(2), sign, "").replace(sign, "")
					+ Constant.TABNUMBER;
			return betcode_new;

		}else if("20".equals(wanfa)){
			String betcode_new = "";
			betcode_new += wanfa+"0001";// 拼接玩法
			String arr[] = betcode.substring(2).split("\\"+sign);
			betcode_new +=(((arr.length < 10) ? "0" : "") + arr.length);
			for(int i=0;i<arr.length;i++){
				betcode_new += BetcodeResolveUtil.toSortString(arr[i]);
			}
			betcode_new += Constant.TABNUMBER;
			return betcode_new;

		}else{
			String betcode_new = "";
			betcode_new += wanfa+"0001";// 拼接玩法
			String arr[] = betcode.substring(2).split("\\"+sign);
			betcode_new +=(((arr.length < 10) ? "0" : "") + arr.length);
			betcode_new += BetcodeResolveUtil.extractString(BetcodeResolveUtil
							.complement(betcode.substring(2), sign, "").replace(sign, "")) 
					+ Constant.TABNUMBER;
			return betcode_new;

		}
	}
	public static String getNMKSDTBetcode(String betcode,String tabNumber,String sign,String dtTab){
		String wanfa = betcode.substring(0, 2);
		String betcode_new = "";
		betcode_new += wanfa+"0001";// 拼接玩法
		//根据胆码和拖码之间的分隔符dtTab分隔各位
		String betcodes[] = betcode.substring(2, betcode.length()).split("\\"+dtTab);
		for(int j=0;j<betcodes.length;j++){	
			String codes[] = betcodes[j].split("\\" + sign);
			for (int i = 0; i < codes.length; i++) {
				if (Integer.parseInt(codes[i]) < 10) {
					codes[i] = "0" + codes[i];
				}
				betcode_new += codes[i];
			}
			//拼接胆码和拖码
			betcode_new=betcode_new.substring(0, betcode_new.length())+Constant.REDTAB;
		}
		//除去末尾的*
		betcode_new = betcode_new.substring(0, betcode_new.length()-1);
		betcode_new += Constant.TABNUMBER;
		return betcode_new;
	}
	public static String getNMKSTXBetcode(String betcode,String tabNumber,String sign){
		String wanfa = betcode.substring(0, 2);
		String betcode_new = wanfa+"0001"+Constant.TABNUMBER;;// 
		return betcode_new;
	}
	public static String getNMKSDSBetcode(String betcode,String tabNumber,String sign){
		String wanfa = betcode.substring(0, 2);
		String betcode_new = "";
		betcode_new += wanfa+"0001";// 拼接玩法
		betcode_new += BetcodeResolveUtil.extractString(BetcodeResolveUtil
						.complement(betcode.substring(2), sign, "").replace(sign, "")) 
				+ Constant.TABNUMBER;
		return betcode_new;
	}
}
