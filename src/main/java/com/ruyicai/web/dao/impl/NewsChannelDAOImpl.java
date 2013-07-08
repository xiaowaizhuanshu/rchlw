package com.ruyicai.web.dao.impl;

import java.util.List;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.NewsChannelDAO;
import com.ruyicai.web.model.NewsChannelMD;
import com.ruyicai.web.pojo.NewsChannel;
/**
 * 
 * @classname: NewsChannelDAOImpl
 * @description: 实现新闻频道的业务方法
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-12 下午01:04:45 
 * 
 */
public class NewsChannelDAOImpl  implements NewsChannelDAO {

	
	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}
    public Long insert(NewsChannelMD ncmd) {
    	return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert("NewsChannel.insert", ncmd)));
    }
    public Long insertByCopy(NewsChannel nc) {
    	return Long.parseLong(String.valueOf(sqlMapClientTemplate.insert("NewsChannel.insertByCopy", nc)));
    }
    public NewsChannelMD selectByPrimaryKey(Long id) {
    	NewsChannel key = new NewsChannel();
        key.setId(id);
        NewsChannelMD  record =  (NewsChannelMD)sqlMapClientTemplate.queryForObject("NewsChannel.selectByPrimaryKey", key);
        return record;
    }
    
    
    public List<NewsChannelMD> selectAll(Long webSiteID) {
		return sqlMapClientTemplate.queryForList("NewsChannel.selectAll", webSiteID);
	}
    
	public Integer selectName_zhKey(NewsChannelMD ncmd) {
		return Integer.valueOf(String.valueOf(sqlMapClientTemplate.queryForObject("NewsChannel.selectName_zhCount",ncmd)));
	}
	public int delete(Long id) {
		return this.sqlMapClientTemplate.update("NewsChannel.deleteInId",id);
	}
	public int update(NewsChannelMD ncmd) {
		return this.sqlMapClientTemplate.update("NewsChannel.updateInId",ncmd);
	}
	@SuppressWarnings("unchecked")
	public List<NewsChannelMD> selectNewsChannelNameZhForList(Long webSiteID){
		return (List<NewsChannelMD>)sqlMapClientTemplate.queryForList("NewsChannel.selectNewsChannelForList",webSiteID);
		
	}
	@Override
	public Integer selectName_cnKey(NewsChannelMD name_cn) {
		// TODO Auto-generated method stub
		return Integer.valueOf(String.valueOf(sqlMapClientTemplate.queryForObject("NewsChannel.selectName_cnCount",name_cn)));
	}
	
	public List<NewsChannel> selectList() {
		@SuppressWarnings("unchecked")
		List<NewsChannel> newsNewsChannelList = this.sqlMapClientTemplate
				.queryForList("NewsChannel.selectAllInit");
		return newsNewsChannelList;
	}
	@Override
	public NewsChannelMD selectBychannelCn(String name,Long web_id) {
		NewsChannel key = new NewsChannel();
		key.setName_cn(name);
		key.setWebsite_id(web_id);
		NewsChannelMD retMD = (NewsChannelMD) sqlMapClientTemplate.queryForObject("NewsChannel.selectBychannelCn",key);
		return retMD;
	}
	@Override
	public NewsChannelMD selectBychannelId(Long channelId,Long web_id) {
		NewsChannel key = new NewsChannel();
		key.setId(channelId);
		key.setWebsite_id(web_id);
		NewsChannelMD retMD = (NewsChannelMD) sqlMapClientTemplate.queryForObject("NewsChannel.selectBychannelId",key);
		return retMD;
		
	}
	@Override
	public NewsChannelMD selectBychannelzh(String name, Long web_id) {
		NewsChannel key = new NewsChannel();
		key.setName_zh(name);
		key.setWebsite_id(web_id);
		NewsChannelMD retMD = (NewsChannelMD) sqlMapClientTemplate.queryForObject("NewsChannel.selectBychannelZh",key);
	    return retMD;
	}
    
    
}