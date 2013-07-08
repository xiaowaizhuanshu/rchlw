package com.ruyicai.web.service;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.model.NewsCategoryMD;
import com.ruyicai.web.pojo.NewsCategory;

/**
 * 
 * @classname: NewsCategoryService
 * @description: 新闻分类的service
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-12 下午01:04:45 
 * 
 */
public interface NewsCategoryService {
	/**
	 * 按分类英文名查出所有子分类
	 * @param website_id 站点id
	 * @param name_zh 分类英文名
	 * @return
	 */
	public List queryCategoryByNameCn(Long website_id ,String name_zh);
	
	
	/**
	 * 按分类中文名查出所有子分类
	 * @param website_id 站点id
	 * @param name_zh 分类中文名
	 * @return
	 */
	public List queryCategoryByCN(Long website_id ,String name_zh);
	/**
	 * 按分类中文名分类（没有子类）
	 * @param website_id 站点id
	 * @param name_zh 分类中文名名
	 * @return
	 */
	public NewsCategory queryCategoryByNCn(Long website_id ,String name_zh);
	
	
	
	/**
	 * @param websiteId 站点id
	 * @param channelId 频道ID null为不指定频道
	 * @param maxNum 获取新闻的条数 null的情况下默认为10，如果要获取的新闻中输出最多的条数为10条，则此值为10
	 * @return Map<key(分类英文名字String)，value(对应分类英文名字分类的新闻列表List<NewsMD>)>
	 */
	Map<String,List> queryNewsInfByCategoryNameZhsForMap(Long website_id ,String name_zh,Long channelId,Integer maxNum);
	
	
	/////////////后台dao////////////////////////
	/**
	 * 
	 * @Title:  queryCategoryByCode
	 * @Description: 按编号查询分类对象
	 * @param: code 分类编号
	 * @return: 该编号的分类对象
	 */
	public NewsCategory queryCategoryByCode(Long code);
	/**
	 * @Title:  add
	 * @Description: 添加新闻分类
	 * @param newsCategory 分类对象
	 * @return
	 */
	public String add(NewsCategoryMD ncmd);
	/**
	 * @Title:  addByCopy
	 * @Description: 添加拷贝新闻分类
	 * @param nc 分类对象
	 * @return 返回插入时生成的code
	 */
	public Long addByCopy(NewsCategory nc);
	/**
	 * @description 查询所有分类
	 * @param website_id 站点id
	 * @return 返回所有分类
	 */
	public List queryAll(Long website_id);
	/**
	 * @description 按分类id删除指定的分类
	 * @param code
	 * @return 返回成功删除的条数
	 */
	public void remove(Long code);
	/**
	 * 更新分类
	 * @param params 传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public String edit(NewsCategoryMD ncmd);
	/**
	 * 更新拷贝的分类
	 * @param params 传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public int editByCopy(NewsCategory nc);
	/**
	 * 
	 * @Title:  queryCategoryByPcode
	 * @description 按新闻父编号查询该编号下的子分类集合
	 * @param newsCategory 主要使用参数为pcode（父分类ID）、website_id（站点ID）、 state（分类状态0为正常,1为已删除）
	 * @return 该编号下的子分类集合
	 */
	public List<NewsCategoryMD> queryCategoryByPcode(NewsCategory newsCategory);
	/**
	 * 获取所有分类存放到list
	 * @return
	 */
	public List<NewsCategory> queryList();
	
	/**
	 * @description 根据站点id 和分类拼音名字查询分类对象
	 * @param website_id
	 * @param name
	 * @return 分类对象
	 */
	public NewsCategory  queryObjectByNameZh(Long  website_id, String  name);
	
}
