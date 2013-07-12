package com.boyacai.common;

import java.util.HashMap;
import java.util.Map;

public class AppConstant {

	//新闻类别
	private static final String[] newTypes = { "topNews", "helpCenterTitle", "helpCenterContent", "content", "title",
			"activityContent", "activityTitle", };

	private static Map<String, String> newsChannel = new HashMap<String, String>();
	static {
		newsChannel.put("ssq", "双色球");
		newsChannel.put("3D", "福彩3D");
		newsChannel.put("daletou", "大乐透");
		newsChannel.put("pailie3", "排列3");
		newsChannel.put("pailie5", "排列5");
		newsChannel.put("qixingcai", "七星彩");
		newsChannel.put("qilecai", "七乐彩");
		newsChannel.put("zucai", "足彩");
		newsChannel.put("jiaodiansaishi", "焦点赛事");
		newsChannel.put("bangzhuzhongxin", "帮助中心");
		newsChannel.put("ssq", "双色球");
		newsChannel.put("rycgonggao", "网站公告");
		newsChannel.put("zjzj", "专家战绩");
		newsChannel.put("rdxw", "热点新闻");
	}

	public static String getNewsType(String key) {
		try {
			int i = Integer.parseInt(key);
			return newTypes[i];
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		return "";
	}

	public static String getNewsChannel(String key) {
		return newsChannel.get(key);
	}
}
