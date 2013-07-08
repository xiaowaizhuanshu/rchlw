package com.ruyicai.web.service;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.model.NewsMD;
import com.ruyicai.web.pojo.News;

public interface NewsService {
	
	
	/**
	 * 根据新闻ID获取新闻指定的一条新闻记录 
	 * @param id 新闻ID
	 * @return
	 */
	News queryNewsByIdForObject(Long id);

	/**
	 * 根据新闻ID获取新闻指定的一条新闻记录 
	 * @param id 新闻ID
	 * @return
	 */
	NewsMD queryNewsMDByIdForObject(Long id);
	/**
	 * 根据新闻ID获取新闻指定的一条新闻图片 获取头条新闻的 topNews = 1;
	 * @param id 新闻ID
	 * @return
	 */
	List queryNewsByIdForPicName(Long websiteId);
	/**
	 * 根据站点ID和分类英文名获取新闻指定的一条新闻图片 获取头条新闻的 topNews = 1;
	 * 并且所取的图片的上线新闻的图片
	 * @param websiteId 站点ID
	 * @param categoryNameZh 分类英文名
	 * @return
	 */
	List queryNewsByIdForPicNameList(Long websiteId,String categoryNameZh);
	/**
	 * 按站点 查询所有上线新闻
	 * @param websiteId 站点id
	 * @return 所有上线新闻的list
	 */
	List queryNewsListByOnline(Long websiteId);
	/**
	 * 根据频道ID和分类ID查询对应的新闻列表，topNews用来指定获取头条的条件。
	 * 新闻的排列顺序是先按照头条倒序，再着顺序倒序，再按照时间倒序
	 * @param channelId 频道ID null为不指定频道
	 * @param categoryId 分类ID 必填
	 * @param topNews 0为获取普通新闻 1为获取头条新闻  null为获取所有新闻
	 * @param maxNum 获取新闻的条数 null的情况下默认为10
	 * @param websiteId 站点id
	 * @return 新闻列表
	 */
	List<News> queryNewsInIdForList(Long channelId,Long categoryId,Integer topNews,Integer maxNum,Long websiteId);
	/**
	 * 根据频道ID和分类ID查询对应的新闻列表，topNews用来指定获取头条的条件。
	 * 新闻的排列顺序是先按照头条倒序，再着顺序倒序，再按照时间倒序
	 * @param channelId 频道ID null为不指定频道
	 * @param categoryId 分类ID 必填
	 * @param topNews 0为获取普通新闻 1为获取头条新闻  null为获取所有新闻
	 * @param podeId  当前分类的父分类id
	 * @param maxNum 获取新闻的条数 null的情况下默认为10
	 * @param websiteId 站点id
	 * @return 新闻列表
	 */
	List<News> queryNewsByNotNowId(Long channelId,Long categoryId,Integer topNews,Integer maxNum,Long websiteId,Long pcodeId);
	/**
	 * 根据频道的英文名字获取新闻列表，topNews用来指定获取头条的条件。
	 * @param channelNameCn 频道中文名 null为不指定频道
	 * @param categoryNameCn 分类中文名 名字 必填
	 * @param topNews 0为获取普通新闻 1为获取头条新闻  null为获取所有新闻
	 * @param maxNum 获取新闻的条数 null的情况下默认为10
	 * @param websiteId 站点id
	 * @return 新闻列表
	 */
	List<News> queryNewsForList (String channelNameCn,String categoryNameCn,Integer topNews,Integer maxNum,Long websiteId);
	
	
	/**
	 * 根据频道的英文名字获取新闻列表，topNews用来指定获取头条的条件。
	 * @param channelNameZh 频道英文 null为不指定频道
	 * @param categoryNameZh 分类英文名字 必填
	 * @param topNews 0为获取普通新闻 1为获取头条新闻  null为获取所有新闻
	 * @param maxNum 获取新闻的条数 null的情况下默认为10
	 * @param websiteId 站点id
	 * @return 新闻列表
	 */
	List<News>queryNewsInNameZhForList(String channelNameZh,String categoryNameZh,Integer topNews,Integer maxNum,Long websiteId);
	
	
	
	/**
	 * 根据指定的频道ID 和传入的分类数组，获取整个频道所使用的新闻列表。利于节省资源
	 * @param channelId 频道ID null为不指定频道
	 * @param categoryNameZhs 分类英文名字 多个以逗号隔开 格式为 'categoryNameZh1','categoryNameZh2','categoryNameZh3' 必填
	 * @param maxNum 获取新闻的条数 null的情况下默认为10，如果要获取的新闻中输出最多的条数为10条，则此值为10
	 * @param websiteId 站点id
	 * @return Map<key(分类英文名字String)，value(对应分类英文名字分类的新闻列表List<NewsMD>)>
	 */
	Map<String,List> queryNewsInCategoryNameZhsByChannelIdForMap(Long websiteId, String categoryNameZhs,Long channelId,Integer maxNum);
	
	/**
	 * 根据指定的频道ID 和传入的分类数组，获取整个频道所使用的新闻列表。利于节省资源
	 * @param channelId 频道ID null为不指定频道
	 * @param categoryNameZhs 分类英文名字 多个以逗号隔开 格式为 'categoryNameZh1','categoryNameZh2','categoryNameZh3' 必填
	 * @param maxNum 获取新闻的条数 null的情况下默认为10，如果要获取的新闻中输出最多的条数为10条，则此值为10
	 * @param websiteId 站点id
	 * @return 新闻List<NewsMD>
	 */
	List<NewsMD> queryNewsInCategoryNameZhsByChannelIdForList(Long websiteId, String categoryNameZhs,Long channelId,Integer maxNum);
	/**
	 * 根据分类中文名，频道中文名，开始查询条数，要查询的总条数 查询新闻列表
	 * @param channelNameCn 频道的中文名  null为不指定
	 * @param categoryNameCn 分类的中文名 null为不指定
	 * @param begin  开始条数
	 * @param maxnum 查询的总条数
	 * @return
	 */
	
	List<News> queryNewsListByCn(String channelNameCn,String categoryNameCn,Long nowPage,Long limitCount,Long websiteId);
	/**
	 * 根据分类id，频道中文名，查询父分类下的所有新闻
	 * @param channelNameCn 频道的中文名  null为不指定
	 * @param categoryNameCn 分类的中文名 null为不指定
	 * @param limitCount 查询的总条数
	 * @return
	 */
	
	List<News> queryNewsListByCodeAll(String channelNameCn,String categoryNameCn,Integer limitCount,Long websiteId);
	/**
	 * 根据分类中文名，频道id，开始查询条数，要查询的总条数 查询新闻列表
	 * @param channelNameCn 频道的中文名  null为不指定
	 * @param categoryNameCn 分类的中文名 null为不指定
	 * @param nowPage  开始条数
	 * @param limitCount 查询的总条数
	 * @return
	 */
	
	List<News> queryNewsListByCnAndId(Long channelId,String categoryNameCn,Integer  nowPage,Integer limitCount,Long websiteId);
	/**
	 * 根据分类中文名，频道中文名，开始查询条数，要查询的总条数 查询新闻列表
	 * @param channelNameCn 频道的中文名  null为不指定
	 * @param categoryNameCn 分类的中文名 null为不指定
	 * @param begin  开始条数
	 * @param maxnum 查询的总条数
	 * @return
	 */
	
	List<News> queryNewsListById(Long channelId,Long categoryId,Long nowPage,Long limitCount,Long websiteId);
	/**
	 * 根据分类ID，频道中文名，开始查询条数，要查询的总条数 查询新闻列表
	 * @param channelNameCn 频道的中文名  null为不指定
	 * @param categoryNameCn 分类的中文名 null为不指定
	 * @param begin  开始条数
	 * @param maxnum 查询的总条数
	 * @return
	 */
	
	List<News> queryNewsListByIdCn(String channelNameCn,Long categoryId,Integer nowPage, Integer maxNum,Long websiteId);
	/**
	 * 根据分类中文名，频道中文名差查询新闻的总条数
	 * @param channelNameCn   频道的中文名  null为不指定
	 * @param categoryNameCn   分类的中文名 null为不指定
	 * @return
	 */
	
	Integer queryNewsCount(String channelNameCn,String categoryNameCn,Long websiteId);
	/**
	 * 根据分类中文名，频道中文名差查询新闻的总条数
	 * @param channelNameCn   频道的中文名  null为不指定
	 * @param categoryNameCn   分类的中文名 null为不指定
	 * @return
	 */
	
	Integer queryNewsCountById(Long channelId,Long categoryId,Long websiteId);
	/***
	 * 根据新闻id更新新闻的点击数
	 * @param Id
	 * @return 
	 */
	
	Integer editClickCount(Long id);
	/***
	 * 根据新闻id查询新闻的点击数
	 * @param Id
	 * @return 
	 */
	
	Long  queryClickCount(Long id);
	/**
	 * 根据频道的中文名字获取新闻列表，topNews用来指定获取头条的条件,转换成根据分类和频道的id查父分类下的所有新闻。
	 * @param channelNameCn 频道中文名 null为不指定频道
	 * @param categoryNameCn 分类中文名 名字 必填
	 * @param topNews 0为获取普通新闻 1为获取头条新闻  null为获取所有新闻
	 * @param maxNum 获取新闻的条数 null的情况下默认为10
	 * @param websiteId 站点id
	 * @return 新闻列表
	 */
	List<News> queryNewsForListByCn (String channelNameCn,String categoryNameCn,Integer topNews,Integer maxNum,Long websiteId);
	/**
	 *根据分类的中文名得数组查询新闻列表
	 * @param websiteId
	 * @param categoryNameZhs
	 * @param channelId
	 * @param maxNum
	 * @return
	 */
	public List queryNewsInCategoryNameCnsByChannelIdForMap(Long websiteId, String categoryNameZhs,Long channelId,Integer maxNum);
	/**
	 * 根据当前新闻所属的分类Id与当前新闻的Id查询该分类下的非当前新闻
	 * @param websiteId
	 * @param categoryId
	 * @param newsId
	 * @param maxNum
	 * @return
	 */
	public List queryNewsByCategoryIdandNotnowId(Long websiteId, Long  categoryId,Long newsId,Integer maxNum);
	
/////////////////////////////////////后台ACTION 方法///////////////////////////////////////////////	
	/**
	 * 获取符合查询条件的新闻记录列表
	 * @param nmd 条件对象 model
	 * @return
	 */
	List<NewsMD> query(NewsMD nmd);
	/**
	 * 获取符合查询条件的新闻记录的总数，用于分页
	 * @param nmd 条件对象 model
	 * @return
	 */
	Integer queryForIntThisPage(NewsMD nmd);
	/**
	 * 假删除指定新闻ID数组的新闻
	 * @param ids 是新闻ID的数组 逗号分割
	 * @return
	 */
	String remove(String ids);
	/**
	 * 创建一条新闻记录
	 * @param n
	 */
	String add(News n);
	/**
	 * 修改新闻状态，识别当前新闻是未审批 已审批 或者需要修改
	 * @param auditMap
	 * @return
	 */
	String editAuditType(Map auditMap);
	/**
	 * 修改新闻
	 * @param n
	 * @return
	 */
	String edit(News n);
	/**
	 * 根据期号和分类及频道获取相应的新闻信息的集合
	 * @param websiteId
	 * @param channelId
	 * @param categoryId
	 * @param limitCount
	 * @return
	 */
	public List<News> queryNewsListByChannelAndCategory(Long websiteId,Long channelId,String namezh,Integer limitCount);

}
