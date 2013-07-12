package com.boyacai.news.tag;

/** 
 * @classname:
 *
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-5-31 下午02:14:18 
 */

import java.io.IOException;
import java.util.Iterator;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import com.boyacai.common.AppConstant;
import com.boyacai.news.service.NewsService;
import com.boyacai.news.vo.NewsPage;

public class NewsListTag extends SimpleTagSupport {

	private String var;

	private String newsType;
	private String lotNo;
	private String pageNo;
	private String pageSize;

	public NewsListTag() {
		super();
	}

	public String getNewsType() {
		return newsType;
	}

	public void setNewsType(String newsType) {
		this.newsType = newsType;
	}

	public String getLotNo() {
		return lotNo;
	}

	public void setLotNo(String lotNo) {
		this.lotNo = lotNo;
	}

	public String getPageNo() {
		return pageNo;
	}

	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}

	public String getPageSize() {
		return pageSize;
	}

	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}

	public String getVar() {
		return var;
	}

	public void setVar(String var) {
		this.var = var;
	}

	@Override
	public void doTag() throws JspException, IOException {
		//		Iterator ite = null;
		//		Object tempItem = NewsService.getNewsPage();
		//		// 如果是集合
		//		if (tempItem instanceof Collection) {
		//			ite = ((Collection) tempItem).iterator();
		//		} else if (tempItem instanceof Object[]) {// 如果是数组
		//			ite = Arrays.asList((Object[]) tempItem).iterator();
		//		} else {
		//			throw new RuntimeException("不能转换");
		//		}

		NewsPage pager = NewsService.getNewsPage(newsType, lotNo, pageNo, pageSize);
		Iterator ite = pager.getNews().iterator();

		// 进行迭代
		while (ite.hasNext()) {
			Object obj = ite.next();
			getJspContext().setAttribute(var, obj);
			//输出标签体
			getJspBody().invoke(null);
		}
	}

}
