package com.ruyicai.web.dao;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.model.NewsCategoryMD;
import com.ruyicai.web.pojo.NewsCategory;


/** 
 * @classname:
 * NewsCategoryDAO
 * @description
 * 新闻分类DAO
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午04:59:11 
 */
public interface NewsCategoryDAO {

	/**
	 * 按分类英文名查询所有子分类
	 * @param map
	 * @return
	 */
	List selectByNameCnForList(Map map);
	/**
	 * 按分类中文名查询所有子分类
	 * @param map
	 * @return
	 */
	List selectByCnForList(Map map);
	/**
	 * @description 按分类中文名查询该编号的分类对象
	 * @param code 分类编号
	 * @return 该编号的分类对象
	 */
	NewsCategory selectObjByCn(String categoryCn,Long  website_id);
	
	/////////////////////////后台dao////////////////////////
	/**
	 * @description 添加新闻分类接口
	 * @param newsCategoryMD 新闻分类对象
	 */
	Long insert(NewsCategoryMD ncmd);
	/**
	 * @description 添加拷贝新闻分类接口
	 * @param newsCategory 新闻分类对象
	 */
	Long insertByCopy(NewsCategory nc);
	/**
	 * @description 按新闻编号查询该编号的分类对象
	 * @param code 分类编号
	 * @return 该编号的分类对象
	 */
	NewsCategory selectByPrimaryKey(Long code);
	/**
	 * @description 查询所有分类
	 * @param website_id 站点id
	 * @return 返回所有分类
	 */
	List selectAll(Long website_id);
	/**
	 * @description 按分类id删除指定的分类
	 * @param code
	 * @return 返回成功删除的条数
	 */
	public void deleteById(Long code);
	/**
	 * 更新分类
	 * @param params 传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public int update(NewsCategoryMD ncmd);
	/**
	 * 更新拷贝分类
	 * @param params 传参
	 * @return 数据库受影响行数大于0 则成功
	 */
	public int updateByCopy(NewsCategory nc);
	/**
	 * 
	 * @Title:  selectByPcode
	 * @description 按新闻父编号查询该编号下的子分类集合
	 * @param newsCategory 主要使用参数为pcode（父分类ID）、website_id（站点ID）、 state（分类状态0为正常,1为已删除）
	 * @return 该编号下的子分类集合
	 */
	List<NewsCategoryMD> selectByPcode(NewsCategory newsCategory);
	/**
	 * 查看对应英文名字的分类是否存在
	 * @param ncmd 
	 * @return 数量
	 */
	Integer selectName_zhKey(NewsCategoryMD ncmd);
	/**
	 * @description 根据中文名查询
	 * @param name_cn
	 * @return int
	 */
	Integer selectName_cnKey(NewsCategoryMD cmd);
	/**
	 * 获取所有分类存放到list
	 * @return
	 */
	public List<NewsCategory> selectList();
	
	/**
	 * @description 按类型查询相应的模板
	 * @param type
	 * @return 模板的集合
	 */
	List selectNewsTemplateNamesByType(int type);
	
	/**
	 * @description 查询本主键外的其他名字
	 * @param ncmd
	 * @return
	 */
	Integer selectCNName(NewsCategoryMD ncmd);
	
	/**
	 * @description 根据站点id 和拼音名字查询分类对象
	 * @param website_id
	 * @param name
	 * @return	分类对象
	 */
	public NewsCategory  selectObjectByNameZh(Long  website_id, String  name);
	
}