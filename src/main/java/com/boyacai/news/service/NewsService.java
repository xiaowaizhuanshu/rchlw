package com.boyacai.news.service;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;

import com.boyacai.common.util.JsonBinder;
import com.boyacai.news.vo.News;
import com.boyacai.news.vo.NewsPage;
import com.ruyicai.util.HttpUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class NewsService {

	//新闻类别
	private static final String[] CATEGORY_NEWSTITLE = { "topNews", "title", "activityTitle", "helpCenterTitle" };

	//Jackson工具类
	private static JsonBinder binder = JsonBinder.buildNormalBinder();

	/**
	 * 获取新闻
	 * @param newsId 新闻ID
	 */
	public static News getNews(String newsId) {
		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", "content");
		param.put("newsId", newsId);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		return binder.fromJson(re, News.class);
	}

	/**
	 * 获取新闻列表
	 * @param newsType 新闻类别
	 * @param channel 新闻频道
	 * @param lotno 彩种
	 * @param pageNo 第几页
	 * @param pageSize 每页记录数
	 */
	public static NewsPage getNewsPage(String newsType, String channel, String lotno, String pageNo, String pageSize) {

		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", getNewsType(newsType));
		param.put("type", StringUtils.isBlank(channel) ? "" : channel);
		param.put("lotno", StringUtils.isBlank(lotno) ? "" : lotno);
		param.put("pageindex", pageNo);
		param.put("maxresult", pageSize);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		NewsPage page = binder.fromJson(re, NewsPage.class);
		return page.pageNo(Integer.valueOf(pageNo));
	}

	/**
	 * 获取新闻列表
	 * @param newsType 新闻类别
	 * @param channel 新闻频道
	 * @param lotno 彩种
	 * @param page 新闻分页对象
	 */
	public static NewsPage getNewsPage(String newsType, String channel, String lotno, NewsPage page) {
		return getNewsPage(newsType, channel, lotno, page.getPageNoStr(), page.getPageSizeStr());
	}

	private static String getNewsType(String key) {
		try {
			int i = Integer.parseInt(key);
			return CATEGORY_NEWSTITLE[i];
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
		return "";
	}
}
