package com.boyacai.activity.service;

import net.sf.json.JSONObject;

import com.boyacai.activity.vo.Activity;
import com.boyacai.activity.vo.ActivityPage;
import com.boyacai.common.util.JsonBinder;
import com.ruyicai.util.HttpUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class ActivityService {

	//Jackson工具类
	private static JsonBinder binder = JsonBinder.buildNormalBinder();

	/**
	 * 获取活动内容
	 * @param id ID
	 */
	public static Activity getActivity(String id) {
		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", "activityContent");
		param.put("platform", "android");
		param.put("activityId", id);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		return binder.fromJson(re, Activity.class);
	}

	/**
	 * 获取活动列表
	 * @param pageindex 第几页
	 * @param maxresult 每页记录数
	 */
	public static ActivityPage getActivityPage(ActivityPage page) {
		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", "activityTitle");
		param.put("platform", "android");
		param.put("pageindex", page.getPageNo());
		param.put("maxresult", page.getPageSize());

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		ActivityPage result = binder.fromJson(re, ActivityPage.class);
		return result.pageNo(Integer.valueOf(page.getPageNo()));
	}

}
