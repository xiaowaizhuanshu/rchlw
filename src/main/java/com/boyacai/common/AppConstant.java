package com.boyacai.common;

import java.util.HashMap;
import java.util.Map;

public class AppConstant {

	//新闻类别
	private static final String[] CATEGORY_NEWSTITLE = { "topNews", "title", "activityTitle", "helpCenterTitle" };

	private static Map<String, String> LOTNO = new HashMap<String, String>();
	static {
		LOTNO.put("F47104", "双色球");
		LOTNO.put("T01001", "大乐透");
		LOTNO.put("F47103", "福彩3D");
		LOTNO.put("T01002", "排列3");
		LOTNO.put("T01011", "排列5");
		LOTNO.put("T01009", "七星彩");
		LOTNO.put("F47102", "七乐彩");
		
		LOTNO.put("ZC", "足彩");
		LOTNO.put("JDSS", "焦点赛事");
		LOTNO.put("BZZX", "帮助中心");
		LOTNO.put("WZGG", "网站公告");
		LOTNO.put("ZJZJ", "专家战绩");
		LOTNO.put("RDXW", "热点新闻");
	}

	public static String getNewsType(String key) {
		try {
			int i = Integer.parseInt(key);
			return CATEGORY_NEWSTITLE[i];
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		return "";
	}

	public static String getLotName(String lotno) {
		return LOTNO.get(lotno);
	}
}
