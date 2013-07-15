package com.boyacai.helper.service;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.boyacai.helper.vo.Helper;
import com.boyacai.helper.vo.HelperPage;
import com.boyacai.util.JsonBinder;
import com.ruyicai.util.HttpUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class HelperService {
	private static Logger logger = Logger.getLogger(HelperService.class);

	//Jackson工具类
	private static JsonBinder binder = JsonBinder.buildNormalBinder();

	/**
	 * 获取帮助信息
	 * @param id ID
	 */
	public static Helper getHelper(String id) {
		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", "helpCenterContent");
		param.put("platform", "android");
		param.put("id", id);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		return binder.fromJson(re, Helper.class);
	}

	/**
	 * 获取帮助列表
	 * @param channel 频道[细类：可选值"1:功能指引｜2：特色功能｜3：彩票玩法｜4：常见问题｜5：彩票术语"]
	 * @param pageindex 第几页
	 * @param maxresult 每页记录数
	 */
	public static HelperPage getHelperPage(String channel, String pageNo, String pageSize) {
		String pageindex = StringUtils.isBlank(pageNo) ? "1" : pageNo;
		String maxresult = StringUtils.isBlank(pageSize) ? "10" : pageSize;

		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", "helpCenterTitle");
		param.put("platform", "android");
		param.put("type", StringUtils.isBlank(channel) ? "" : channel);
		param.put("pageindex", pageindex);
		param.put("maxresult", maxresult);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		HelperPage page = binder.fromJson(re, HelperPage.class);
		return page.pageNo(Integer.valueOf(pageindex));
	}

}
