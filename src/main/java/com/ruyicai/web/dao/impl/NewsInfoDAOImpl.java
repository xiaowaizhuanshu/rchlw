package com.ruyicai.web.dao.impl;

import java.util.List;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.util.Pager;
import com.ruyicai.web.dao.NewsInfoDAO;
import com.ruyicai.web.model.NewsInfoMD;
import com.ruyicai.web.pojo.NewsInfo;

/**
 * 
 * @classname: NewsInfoDAOImpl
 * @description: 实现新闻操作的业务方法
 * @author 蓝生
 * @date： 2011-1-12 下午01:04:45
 * 
 */
public class NewsInfoDAOImpl implements NewsInfoDAO {

	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	/**
	 * @description 添加新闻分类接口
	 * @param record
	 *            新闻分类对象
	 */
	public Long insert(NewsInfo record) {
		return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert(
				"NewsInfo.ibatorgenerated_insertNewsInfo", record)));
	}

	public NewsInfo selectNewsInfoById(long id) {
		return (NewsInfo) this.sqlMapClientTemplate.queryForObject(
				"NewsInfo.ibatorgenerated_selectByPrimaryKey", id);
	}

	public int updateNewsInfo(NewsInfo newsInfo) {

		return this.sqlMapClientTemplate.update("NewsInfo.updateNewsInfo",
				newsInfo);
	}

	@SuppressWarnings("unchecked")
	public List<NewsInfoMD> selectNewsInfo(NewsInfoMD newsInfoMD) {
		return this.sqlMapClientTemplate.queryForList(
				"NewsInfo.ibatorgenerated_selectByExample", newsInfoMD);
	}

	public List selectAllNewsInfo(NewsInfo newsInfo, Pager pager) {
		return this.sqlMapClientTemplate
				.queryForList("NewsInfo.ibatorgenerated_selectByPrimaryKey");
	}

	public int selectAllNewsInfoCount(NewsInfoMD newsInfoMD) {
		return (Integer) this.sqlMapClientTemplate.queryForList(
				"NewsInfo.ibatorgenerated_selectAllNewsInfoCount").get(0);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<NewsInfoMD> selectAllNewsOnpage(NewsInfoMD newsInfoMD) {
//		Map map = new HashMap();
//		map.put("startRow", i);
//		map.put("size", size);
		return this.sqlMapClientTemplate
				.queryForList("NewsInfo.selectNewsInfoOnPage",newsInfoMD);
	}

	@Override
	public NewsInfo selectObject(Long id) {
		
		return (NewsInfo) this.sqlMapClientTemplate.queryForObject("NewsInfo.ibatorgenerated_selectByPrimaryKey", id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<NewsInfo> seclectList() {
		
		return this.sqlMapClientTemplate.queryForList("NewsInfo.selectNewsInfoList");
	}
}