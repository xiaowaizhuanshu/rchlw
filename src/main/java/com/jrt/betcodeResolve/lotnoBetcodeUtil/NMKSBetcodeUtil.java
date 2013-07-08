package com.jrt.betcodeResolve.lotnoBetcodeUtil;

import com.jrt.betcodeResolve.util.BetcodeResolveUtil;

public class NMKSBetcodeUtil {
	public static int getNMKSZhushu(String betcode, String sign) {
		int zhushu = 0;
		String wanfa = betcode.substring(0, 2);// 获取玩法
		//三不同单式,二同号单式,三同号单式,三同号通选,三连号通选
		if(wanfa.equals("00")||wanfa.equals("01")||wanfa.equals("02")||"40".equals(wanfa)||"50".equals(wanfa)){
			return 1;
		}else if("22".equals(wanfa)){//二不同号胆拖
			String tuo[] = betcode.split("\\*")[1].replace("^", "").split(
					"\\" + sign);
			return tuo.length;
		}else if("64".equals(wanfa)){//三不同胆拖
			String dan[] = betcode.split("\\*")[0].split("\\" + sign);
			String tuo[] = betcode.split("\\*")[1].split("\\" + sign);
			int danlength = dan.length;
			int tuolength = tuo.length;
			return (int) BetcodeResolveUtil.zuhe(3-danlength,tuolength);
		}else if("71".equals(wanfa)){//二同号单选组合
			String same[] = betcode.split("\\*")[0].split("\\" + sign);
			String notsame[] = betcode.split("\\*")[1].split("\\" + sign);
			int samelength = same.length;
			int notsamelength = notsame.length;
			return samelength*notsamelength;
		}
		// 根据注码之间的分隔符sign分隔分隔注码
		String codes[] = betcode.substring(2, betcode.length()).split(
				"\\" + sign);
		
		if (wanfa.equals("00")||wanfa.equals("01")||wanfa.equals("02")){
			zhushu = 1;
		//和值,二不同复选,二同号复选
		} else if(wanfa.equals("10")||wanfa.equals("20")||wanfa.equals("30")){
			zhushu = codes.length;
		} else if(wanfa.equals("21")){//二不同号组合
			zhushu = (int) BetcodeResolveUtil.zuhe(2,
						codes.length);
		} else if(wanfa.equals("63")){//三不同组合
			zhushu = (int) BetcodeResolveUtil.zuhe(3,
						codes.length);
		} else if(wanfa.equals("81")){//三同号复式
			zhushu = codes.length;
		}

		return zhushu;
	}
}
