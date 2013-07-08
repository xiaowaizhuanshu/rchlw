package com.jrt.betcodeResolve.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

import org.apache.log4j.Logger;

import com.jrt.betcodeResolve.bean.BetcodeBean;
import com.jrt.betcodeResolve.lotnoBetcodeUtil.NMKSBetcodeUtil;
import com.jrt.betcodeResolve.resolve.NMKSBetcodeResolve;
import com.jrt.betcodeResolve.util.BetcodeProxyResolve;
import com.jrt.betcodeResolve.util.Constant;

/**
 * @author Administrator
 * 内蒙快三将所有注码 玩法、倍数、金额、注码存入注码实体bean中 并且存入list中返回的类
 *
 */
public class NMKSResolveService {
	private static final Logger logger = Logger.getLogger(NMKSResolveService.class);
	/**
	 * @param betcode注码
	 * 					前2位表示玩法
	 * 				例：001,3,5^ 三不同单式
	 * 				    011,1,5^ 二同号单式
	 * 					026,6,6^ 三同号单式
	 *     				104,9,17^和值
	 *     				2012,23,34,14^二不同复选
	 *     				211,2,3^二不同号组合
	 *     				221*2,3,4^二不同号胆拖
	 *     				301,2,3,4,5^二同号复选
	 *     				40^三同号通选
	 *     				50^三连号通选
	 *     				631,2,3,4,5,6^三不同组合
	 *     				641,2*3,4,5,6^三不同胆拖
	 *     				712,3*4,5^二同号单选组合
	 *     				811,2,3,4,5,6^三同号复式
	 * @param multiple
	 * 				倍数 示例中为1倍
	 * @param tabNumber
	 * 				各注之间的分隔符 示例中为"^"
	 * @param sign
	 * 				号码之间的分隔符 示例中为","
	 * @param dtTab
	 * 				胆码和拖码之间的分隔符 示例中为"*"
	 * 				二同号单选组合特殊根据玩法区分
	 * @return
	 * 				实体集合返回
	 * 				前两位：玩法；0001表示倍数现在统一写为0001
	 * 				玩法名称带*的0001后面2位表示后面注码的个数
	 * 				注码： 000001010305^三不同单式
	 * 					  010001010105^二同号单式
	 * 					  020001060606^三同号单式
	 * 					  10000103040917^和值*
	 * 					  2000010412233414^二不同复选*
	 * 				　　      21000103010203^二不同号组合*
	 * 					  22000101*020304^二不同号胆拖
	 * 					  300001050102030405^二同号复选*
	 * 					　400001^三同号通选
	 * 					  500001^三连号通选
	 * 					  63000106010203040506^三不同组合*
	 * 					　6400010102*03040506^三不同胆拖
	 * 					  7100010203*0405^二同号单选组合
	 * 					  81000106010203040506^三同号复式*
	 * 				彩种编号：F47107
	 * 				玩法：00
	 * 				倍数：1
	 * 				注数：1
	 * 				金额：2
	 */
	public static List<BetcodeBean> getNMKSBetcodeList(String betcode,
			int multiple, String tabNumber, String sign,String dtTab){
		List<BetcodeBean> list = new ArrayList<BetcodeBean>();
		BetcodeBean betcodeBean = null;
		Vector<String> vector = null;
		try{
			// 得到所有内蒙快三注码的数组对象vector
			vector = BetcodeProxyResolve.getVector(betcode, tabNumber);
			String zhuma = ""; // 单个注码
			int zhushu = 0; // 注数
			int totalMoney = 0; // 总金额
			for (int i = 0; i < vector.size(); i++) {
				betcodeBean = new BetcodeBean();
				betcodeBean.setLotno(Constant.NMKS);
				betcodeBean.setMultiple(String.valueOf(multiple));
				// 得到所有的注码
				String lotteryCodes = (String) vector.get(i);
				String wanfa = lotteryCodes.substring(0, 2);// 获取玩法
				betcodeBean.setGameMethod(wanfa);
				zhuma = NMKSBetcodeResolve.getNMKSBetcode(lotteryCodes,
						tabNumber, sign, dtTab);
				zhushu = NMKSBetcodeUtil.getNMKSZhushu(lotteryCodes,
						sign);
				totalMoney = multiple*zhushu*Constant.LOTTERY_PRICE;
				betcodeBean.setBetcode(zhuma);
				betcodeBean.setZhushu(String.valueOf(zhushu));
				betcodeBean.setTotalMoney(String.valueOf(totalMoney));
				list.add(betcodeBean);
			}

		}catch (Exception e) {
			logger.info("传入的注码betcode:" + betcode);
			logger.error("vector=" + vector + "内蒙快三解析客户端传入的注码的注数、金额异常Exception"
					+ e.toString());
			e.printStackTrace();
		}
		return list;
	}
	public static void main(String[] args) {
		getNMKSBetcodeList("001,3,5^001,3,5^", 2, "^", ",", "*");
		System.out.println(getNMKSBetcodeList("001,3,5^001,3,5^", 2, "^", ",", "*").size());
		String zhuma = NMKSBetcodeResolve.getNMKSBetcode("001,3,5^",
				"^", ",", "*");
		System.out.println("zhuma:"+zhuma);
	}
}
