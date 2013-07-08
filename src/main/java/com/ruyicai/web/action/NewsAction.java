package com.ruyicai.web.action;

import java.util.List;

import org.apache.log4j.Logger;

import com.ruyicai.util.BaseAction;
import com.ruyicai.util.CommonUtil;
import com.ruyicai.util.FinalVar;
import com.ruyicai.web.model.NewsChannelMD;
import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.service.NewsChannelService;
import com.ruyicai.web.service.NewsService;

public class NewsAction extends BaseAction {
	private static Logger logger = Logger.getLogger(NewsAction.class);
	private String web_channel_id = "2";
	public NewsChannelService newsChannelService;
	public NewsService newsService;
	public NewsService getNewsService() {
		return newsService;
	}

	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}


   public NewsChannelService getNewsChannelService() {
		return newsChannelService;
	}

	public void setNewsChannelService(NewsChannelService newsChannelService) {
		this.newsChannelService = newsChannelService;
	}

/**
 * 查询新闻信息
 * @return
 */
	public String queryNewsInfoList (){
		long categoryCode =Long.valueOf(request.getParameter("categoryCode"));
		String channel_name = request.getParameter("channel_name_cn")==null?"":request.getParameter("channel_name_cn");
		try {
			String channel_name_cn = getChannel_name_Zh(channel_name);
		//获取频道id
		NewsChannelMD channelMD =newsChannelService.queryObjectForChannelCn(channel_name_cn, Long.valueOf(web_channel_id));
		long channelid=0;
		if(channelMD != null){
			channelid=channelMD.getId();
			request.setAttribute("title_head", channelMD.getName_cn());
		}else{
			if(channel_name_cn.equals("焦点赛事")||channel_name_cn.equals("足彩")||channel_name_cn.equals("网站公告")){
				request.setAttribute("title_head", channel_name_cn);
				request.setAttribute("categoryNameCn", channel_name_cn);
			}
		}
		// 计算当前分页条件
		Integer page = 0;
		Object object = request.getParameter("page");
		if (object == null || object.equals("")) {
			page = 1;
		} else {
			page = Integer.valueOf(request.getParameter("page"));
		}
		NewsMD nmd = new NewsMD();
		nmd.setWebsiteId(Long.valueOf(web_channel_id));
		Integer limitCount = Integer.parseInt(FinalVar.limitCount);
		nmd.setNowPage((page - 1) * limitCount);
		nmd.setLimitCount(limitCount);
		nmd.setCategoryCode(categoryCode);
		nmd.setChannelId(channelid);
		// 获取符合条件的新闻记录
		List<NewsMD> nmdList = newsService.query(nmd);
		// 如果新闻记录不为空并且记录数量大于一页的记录数量，则进行分页获取
		if (nmdList != null && nmdList.size() > 0) {
			Integer maxLine = newsService.queryForIntThisPage(nmd);
			if (maxLine != null && maxLine > limitCount) {
				request.setAttribute("pageHtml",
						CommonUtil.getPageToHtml(page, maxLine, limitCount, 3));
			}
			request.setAttribute("nList", nmdList);
		}
		} catch (Exception e) {
			e.printStackTrace();
		}
		request.setAttribute("categoryCode", categoryCode);
		request.setAttribute("channel_name", channel_name);
		if(channel_name.equals("zjzj")){
			return "newsList_zjzj";
		}
		if(channel_name.equals("rdxw")){
			return "newsList_rdxw";
		}
		return "newsList";
	}
	
	public static String getChannel_name_Zh(String channel_name_cn){
		String channel_name_zh = "";
		if(channel_name_cn.equals("ssq")){channel_name_zh="双色球";}
		if(channel_name_cn.equals("3D")){channel_name_zh="福彩3D";}
		if(channel_name_cn.equals("daletou")){channel_name_zh="大乐透";}
		if(channel_name_cn.equals("pailie3")){channel_name_zh="排列3";}
		if(channel_name_cn.equals("pailie5")){channel_name_zh="排列5";}
		if(channel_name_cn.equals("qixingcai")){channel_name_zh="七星彩";}
		if(channel_name_cn.equals("qilecai")){channel_name_zh="七乐彩";}
		if(channel_name_cn.equals("zucai")){channel_name_zh="足彩";}
		if(channel_name_cn.equals("jiaodiansaishi")){channel_name_zh="焦点赛事";}
		if(channel_name_cn.equals("bangzhuzhongxin")){channel_name_zh="帮助中心";}
		if(channel_name_cn.equals("ssq")){channel_name_zh="双色球";}
		if(channel_name_cn.equals("rycgonggao")){channel_name_zh="网站公告";}
		if(channel_name_cn.equals("zjzj")){channel_name_zh="专家战绩";}
		if(channel_name_cn.equals("rdxw")){channel_name_zh="热点新闻";}
		return channel_name_zh;
	}
}
