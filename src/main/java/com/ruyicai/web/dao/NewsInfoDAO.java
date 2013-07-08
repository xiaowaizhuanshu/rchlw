package com.ruyicai.web.dao;

import java.util.List;

import com.ruyicai.util.Pager;
import com.ruyicai.web.model.NewsInfoMD;
import com.ruyicai.web.pojo.NewsInfo;

/** 
 * @classname:
 * NewsInfoDAO
 * @description
 * 新闻DAO
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午04:59:11 
 */
public interface NewsInfoDAO {

	/**
	 * @description 添加新闻
	 * @param record 新闻对象
	 */
	Long insert(NewsInfo record);
	
	/**
	 * 通过id修改新闻
	 * @param 传id
	 * @return 数据库受影响行数大于0 则成功
	 */
	public NewsInfo selectNewsInfoById(long id);
	
	/**
	 * 更新新闻
	 * @param params 传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public int updateNewsInfo(NewsInfo newsInfo);
	/**
	 * @description 查询新闻
	 * @param newsInfoMD 新闻分页模板
	 * @return 返回所有分类
	 */
	List<NewsInfoMD> selectNewsInfo(NewsInfoMD newsInfoMD);
	
	/**
	 * 查找所有新闻
	 * @param pager
	 * @return 对List返回的数据进行分页 
	 */
	public List selectAllNewsInfo(NewsInfo newsInfo,Pager pager);
	
	/**
	 * 查找出所有新闻条数
	 * @param newsInfoMD 
	 * @return
	 */
	public int selectAllNewsInfoCount(NewsInfoMD newsInfoMD);

	/**
	 * @param i
	 * @param size
	 * @return 
	 */
	/**
	 * @description 分页查询新闻
	 * @param i	
	 * @param size 每页的条数
	 * @return 查询的当前新闻信息
	 */
	public List<NewsInfoMD> selectAllNewsOnpage(NewsInfoMD newsInfoMD);

	/**	
	 * @description	根据id查询新闻对象
	 * @param id
	 * @return 新闻对象
	 */
	public NewsInfo selectObject(Long id);

	/**
	 * @description	查询所有新闻对象
	 * @param wed_site
	 * @return 所有新闻对象集合
	 */
	public List<NewsInfo> seclectList();
}