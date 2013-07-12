package com.boyacai.news.service;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.boyacai.common.AppConstant;
import com.boyacai.news.vo.News;
import com.boyacai.news.vo.NewsPage;
import com.boyacai.util.JsonBinder;
import com.ruyicai.util.HttpUtil;
import com.ruyicai.util.ResourceBundleUtil;

public class NewsService {
	private static Logger logger = Logger.getLogger(NewsService.class);

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
	 * @param lotno 彩种
	 * @param pageindex 第几页
	 * @param maxresult 每页记录数
	 */
	public static NewsPage getNewsPage(String newsType, String lotno, String pageNo, String pageSize) {
		String pageindex = StringUtils.isBlank(pageNo) ? "1" : pageNo;
		String maxresult = StringUtils.isBlank(pageSize) ? "20" : pageSize;

		JSONObject param = new JSONObject();
		param.put("command", "information");
		param.put("newsType", AppConstant.getNewsType(newsType));
		param.put("type", "1");
		param.put("lotno", lotno);
		param.put("pageindex", pageindex);
		param.put("maxresult", maxresult);

		String re = HttpUtil.sendRequestByPost(ResourceBundleUtil.LOTSERVERURL + "/RuyicaiServlet?isEncrypt=0",
				param.toString(), true);
		NewsPage page = binder.fromJson(re, NewsPage.class);
		return page.pageNo(Integer.valueOf(pageindex));
	}

}
