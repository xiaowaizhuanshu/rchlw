package com.boyacai.news.action;

import java.util.HashMap;
import java.util.Map;

import com.boyacai.news.service.NewsService;
import com.boyacai.news.vo.NewsPage;
import com.ruyicai.util.BaseAction;

public class NewsAction extends BaseAction {
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -8975710584503173868L;

	// current position map
	private static Map<String, String> MAP_CP = new HashMap<String, String>();
	static {
		MAP_CP.put("F47104", "双色球");
		MAP_CP.put("T01001", "大乐透");
		MAP_CP.put("F47103", "福彩3D");
		MAP_CP.put("T01002", "排列3");
		MAP_CP.put("T01011", "排列5");
		MAP_CP.put("T01009", "七星彩");
		MAP_CP.put("F47102", "七乐彩");

		MAP_CP.put("ZC", "足彩");
		MAP_CP.put("JDSS", "焦点赛事");
		MAP_CP.put("BZZX", "帮助中心");
		MAP_CP.put("WZGG", "网站公告");
		MAP_CP.put("ZJZJ", "专家战绩");
		MAP_CP.put("RDXW", "热点新闻");
	}

	private NewsPage page;

	/**
	 * 查询条件
	 */
	private String nt;//新闻分类(news category)
	private String ncc;//新闻频道代号(news channel cn)
	private String ln;//彩种
	private String cp; //您所在的位置（current position）

	/**
	 * 分页查询新闻信息
	 */
	public String list() {
		if (page == null) {
			page = new NewsPage(20);
		}
		page = NewsService.getNewsPage(nt, ncc, ln, page);
		return "list";
	}

	/**
	 * 获取当前用户位置
	 */
	public String getCurrentPosition() {
		return MAP_CP.get(cp);
	}

	public NewsPage getPage() {
		return page;
	}

	public void setPage(NewsPage page) {
		this.page = page;
	}

	public String getNcc() {
		return ncc;
	}

	public void setNcc(String ncc) {
		this.ncc = ncc;
	}

	public String getNt() {
		return nt;
	}

	public void setNt(String nt) {
		this.nt = nt;
	}

	public String getLn() {
		return ln;
	}

	public void setLn(String ln) {
		this.ln = ln;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

}
