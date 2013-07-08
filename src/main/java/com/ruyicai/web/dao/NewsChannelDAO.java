package com.ruyicai.web.dao;

import java.util.List;

import com.ruyicai.web.model.NewsChannelMD;
import com.ruyicai.web.pojo.NewsChannel;

/** 
 * @classname:
 * NewsChannelDAO
 * @description
 * 新闻频道DAO
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-18 下午04:59:11 
 */
public interface NewsChannelDAO {
	/**
	 * 按条件查询出频道列表
	 * @param where
	 * @return
	 */
	List<NewsChannelMD> selectNewsChannelNameZhForList(Long webSiteID);
	/**
	 * @description 按新闻频道中文名查询频道对象
	 * @param String 频道中文名
	 * @return 频道对象
	 */
	NewsChannelMD selectBychannelCn(String name,Long web_id);
	/**
	 * @description 按新闻频道英文名查询频道对象
	 * @param String 频道英文名
	 * @return 频道对象
	 */
	NewsChannelMD selectBychannelzh(String name,Long web_id);
	/**
	 * @description 按新闻频道中文名查询频道对象
	 * @param Long  频道ID
	 * @return 频道对象
	 */
	NewsChannelMD selectBychannelId(Long channleId,Long web_id);
	
	
/////////////////////////////////////后台DAO方法///////////////////////////////////////////////

	/**
	 * @description 添加新闻频道
	 * @param record 新闻频道对象
	 */
	Long insert(NewsChannelMD ncmd);
	/**
	 * @description 添加拷贝新闻频道
	 * @param record 新闻频道对象
	 */
	Long insertByCopy(NewsChannel nc);
	/**
	 * @description 按新闻频道频道对象
	 * @param id 频道id
	 * @return 频道对象
	 */
	NewsChannelMD selectByPrimaryKey(Long id);
	
	
	/**
	 * @description 查询所有频道
	 * @return 返回所有频道
	 */
	List<NewsChannelMD> selectAll(Long webSiteID);
	/**
	 * @description 查询当前要创建的频道的英文名字是否已存在
	 * @param name_zh 要创建的频道的英文名字
	 * @return 返回查询到的个数
	 */
	Integer selectName_cnKey(NewsChannelMD name_cn);
	/**
	 * @description 查询当前要创建的频道的英文名字是否已存在
	 * @param name_zh 要创建的频道的英文名字
	 * @return 返回查询到的个数
	 */
	Integer selectName_zhKey(NewsChannelMD name_zh);
	/**
	 * @description 修改频道的状态，将其标识为删除
	 * @param id 
	 * @return 修改个数
	 */
	int delete(Long id);
	/**
	 * @description 修改频道的内容
	 * @param id 
	 * @return 修改个数
	 */
	 int update(NewsChannelMD ncmd);
		/**
		 * 获取所有分类存放到list
		 * @return
		 */
	public List<NewsChannel> selectList();
	
	
}