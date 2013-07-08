
package com.ruyicai.web.dao.impl;

import java.util.List;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.Channel_TemplateDAO;
import com.ruyicai.web.pojo.Channel_Template;

/** 
 * @classname:
 * Channel_TemplateDAOImpl
 * @description
 * 新闻频道和分类与模板关联 实现
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-24 下午05:18:18 
 */

public class Channel_TemplateDAOImpl implements Channel_TemplateDAO {

	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}
	/**
	 * @description 添加新闻频道和分类与模板关联
	 * @param record 添加新闻频道和分类对象
	 */
	public void insert(Channel_Template channel_Template){
		sqlMapClientTemplate.insert("Channel_Template.insertChannel_Template", channel_Template);
	}
	public void delete(Channel_Template channel_Template) {
		sqlMapClientTemplate.delete("Channel_Template.deleteChannel_Template", channel_Template);
		
	}
	public List<Channel_Template> selectChannel_Template(Channel_Template channel_Template){
		
		return sqlMapClientTemplate.queryForList("Channel_Template.ibatorgenerated_selectByExample", channel_Template);
	}
}
