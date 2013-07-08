
package com.ruyicai.web.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.ruyicai.util.FinalVar;
import com.ruyicai.web.dao.NewsChannelDAO;
import com.ruyicai.web.model.NewsChannelMD;
import com.ruyicai.web.pojo.Channel_Template;
import com.ruyicai.web.pojo.NewsChannel;
import com.ruyicai.web.service.Channel_TemplateService;
import com.ruyicai.web.service.NewsChannelService;

/** 
 * @classname:
 * NewsChannelServiceImpl
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-17 上午11:21:52 
 */

public class NewsChannelServiceImpl implements NewsChannelService {

	private Logger log = Logger.getLogger(NewsChannelServiceImpl.class);
	private NewsChannelDAO newsChannelDAO = null;
	private Channel_TemplateService channel_TemplateService = null;
	
	public NewsChannelDAO getNewsChannelDAO() {
		return newsChannelDAO;
	}

	public void setNewsChannelDAO(NewsChannelDAO newsChannelDAO) {
		this.newsChannelDAO = newsChannelDAO;
	}

	public Channel_TemplateService getChannel_TemplateService() {
		return channel_TemplateService;
	}
	public void setChannel_TemplateService(
			Channel_TemplateService channel_TemplateService) {
		this.channel_TemplateService = channel_TemplateService;
	}
   
	public Map<String,NewsChannelMD> queryChannelListForMap(Long websiteId){
		Map<String, NewsChannelMD> reMap = new HashMap();
		List <NewsChannelMD> nList = this.newsChannelDAO.selectNewsChannelNameZhForList(websiteId);
		if(nList != null && nList.size()>0){
			for(NewsChannelMD ncd:nList){
				reMap.put(ncd.getName_zh(), ncd);
			}
		}
		return reMap;
	}
	
	public String add(NewsChannelMD ncmd){
    	try {
    		Integer countName_zh = this.newsChannelDAO.selectName_zhKey(ncmd);
    		Integer countName_cn = this.newsChannelDAO.selectName_cnKey(ncmd);
    		if((countName_zh==null || countName_zh==0)&&(countName_cn==null || countName_cn==0)){
				Long channelId = this.newsChannelDAO.insert(ncmd);
				log.info("新闻频道创建成功");
				if(channelId != null && channelId >0 && ncmd.getTemplate_id()>0){//插入数据库成功，并返回了ID，则在中间表中插入分类和模板关联关系
					
					//保存关系
					Channel_Template channel_Template = new Channel_Template();
					channel_Template.setChannel_id(channelId);
					channel_Template.setTemplate_id(ncmd.getTemplate_id());
					String insertcode2 = channel_TemplateService.addChannel_TemplateService(channel_Template);	
				}
				return FinalVar.INSERT_SUCCESS;
    			
    		}else{
    			log.info("要创建的新闻频道的英文名字‘"+ncmd.getName_zh()+"’或中文的名字‘"+ncmd.getName_cn()+"’已存在");
    			return FinalVar.INSERT_THERE;
    		}
		} catch (Exception e) {
			log.error("添加频道失败");
			return FinalVar.INSERT_FAIL;
		}
    }
	public Long addByCopy(NewsChannel nc){
				Long channelId = this.newsChannelDAO.insertByCopy(nc);
			return channelId;
	}
    public List<NewsChannelMD> query(Long webSiteID) {
		return this.newsChannelDAO.selectAll(webSiteID);
	}
	public String remove(Long id) {
		int num = this.newsChannelDAO.delete(id);
		if(num>0){
			return FinalVar.UPDATE_SUCCESS;
		}
		return FinalVar.UPDATE_FAIL;
	}
	public String eidt(NewsChannelMD ncmd) {
		try {
			//验证该频道是否已经存在，如果不存在，则不进行任何修改操作
    		Integer countName_cn = this.newsChannelDAO.selectName_cnKey(ncmd);
    		if(countName_cn!=null ){
    			int num = this.newsChannelDAO.update(ncmd);
				log.info("新闻频道修改成功");
				
				//修改数据库成功，并返回了修改的个数，如果修改个数大于0个，则在中间表中插入分类和模板关联关系
				//首先删除旧得关系记录
				Channel_Template channel_Template = new Channel_Template();
				channel_Template.setChannel_id(ncmd.getId());
				channel_Template.setTemplate_id(ncmd.getTemplate_id());
				channel_TemplateService.remmoveChannel_TemplateService(channel_Template);
				
				if(num >0 && ncmd.getTemplate_id()!=null && ncmd.getTemplate_id()>0){
					//创建新的关系
					channel_TemplateService.addChannel_TemplateService(channel_Template);	
				}
				return FinalVar.UPDATE_SUCCESS;
    		
    		}else{
    			log.info("数据库中找不到英文名字‘"+ncmd.getName_zh()+"‘或中文名字为‘"+ncmd.getName_zh()+"‘的频道分类");
    			return FinalVar.UPDATE_THERE;
    		}
		} catch (Exception e) {
			e.printStackTrace();
			log.error("修改频道失败");
			return FinalVar.UPDATE_FAIL;
		}
	}
	public NewsChannelMD queryObject(Long id){
		return this.newsChannelDAO.selectByPrimaryKey(id);
	}
    
	public List<NewsChannel> queryList() {

		return newsChannelDAO.selectList();
	}

	@Override
	public NewsChannelMD queryObjectForChannelCn(String name,Long web_id) {
		// TODO Auto-generated method stub
		return this.newsChannelDAO.selectBychannelCn(name,web_id);
	}
	@Override
	public NewsChannelMD queryObjectForChannelId(Long channelId,Long web_id) {
		// TODO Auto-generated method stub
		return this.newsChannelDAO.selectBychannelId(channelId,web_id);
	}

	@Override
	public NewsChannelMD queryObjectForChannelnamezh(String name, Long web_id) {
		return this.newsChannelDAO.selectBychannelzh(name,web_id);
	}
	
	
}
