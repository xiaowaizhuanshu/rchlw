package com.ruyicai.web.dao;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.pojo.News;

public interface NewsDAO {
	
	News selectNewsByIdForObject(Long id);
	NewsMD selectNewsMDByIdForObject(Long id);
	List<News> selectNewsByIdForPicName(Map map);
	List<News> selectNewsByIdForPicNameList(Map map);
	List<News> selectNewsInIdForList(Map where);
	List<News> selectNewsInNameZhForList(Map where);
	List<News> selectNewsByCnForList(Map where);
	List<NewsMD> selectNewsInCategoryNameZhsByChannelIdForList(Map where);
	Integer selectNewsCount(Map where);
	Integer selectNewsCountById(Map where);
	List<News> selectNewsListByCn(Map where);
	List<News> selectNewsListByCnAndId(Map where);
	List<News> selectNewsListById(Map where);
	List<News> selectNewsListByCodeAll(Map where);
	List<News> selectNewsListByNotNowId(Map where);
	List<NewsMD> selectNewsListByCns(Map where);
	Integer updateClickCount(Long id);
	Long  selsctClickCount(Long id);
	List<News> selectNewsByCategoryIdandNotnowId(Map where);
	
/////////////////////////////////////后台DAO方法///////////////////////////////////////////////
	
	/**
	 * 按站点 查询所有上线新闻
	 * @param websiteId 站点id
	 * @return 所有上线新闻的list
	 */
	List<News> selectNewsListByOnline(Long websiteId);
	/**
	 * 获取符合查询条件的新闻记录列表
	 * @param nmd 条件对象 model
	 * @return
	 */
	List<NewsMD> select(NewsMD nmd);
	/**
	 * 获取符合查询条件的新闻记录的总数，用于分页
	 * @param nmd 条件对象 model
	 * @return
	 */
	Integer selectForIntThisPage(NewsMD nmd);
	/**
	 * 假删除指定新闻ID数组的新闻
	 * @param ids 是新闻ID的数组 逗号分割
	 * @return
	 */
	Integer delete(String ids);
	/**
	 * 创建一条新闻记录
	 * @param n
	 */
	void insert(News n);
	/**
	 * 修改新闻状态，识别当前新闻是未审批 已审批 或者需要修改
	 * @param auditMap
	 * @return
	 */
	Integer updateAuditType(Map auditMap);
	/**
	 * 更新新闻
	 * @param n 新闻对象
	 * @return 返回影响行数
	 */
	Integer update(News n);
	
	/**
	 * 根据站点、频道ID、分类ID、查询新闻条数 查询对应的新闻信息；
	 * @param websiteId
	 * @param channelId
	 * @param categoryId
	 * @param limitCount
	 * @return
	 */
	List<News> selectNewsListByChannelAndCategory(Long websiteId,
			Long channelId, String namezh, Integer limitCount);
	

}
