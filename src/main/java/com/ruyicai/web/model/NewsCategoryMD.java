package com.ruyicai.web.model;

import com.ruyicai.web.pojo.NewsCategory;


/** 
 * @classname:
 * NewsCategoryMD
 * @description
 * 新闻分类关联模板的model
 * @author 
 * 蓝生 
 * @date：
 * 2011-2-14 下午04:54:06 
 */

public class NewsCategoryMD extends NewsCategory {
	
	/**
	 * 分类指定的模版ID
	 */
	protected Long template_id ;

	public NewsCategoryMD(){
		super();
	}
	public Long getTemplate_id() {
		return template_id;
	}

	public void setTemplate_id(Long template_id) {
		this.template_id = template_id;
	}
	public String toString() {
		return "NewsCategoryMD [template_id=" + template_id + ", getCode()="
				+ getCode() + ", getPcode()=" + getPcode() + ", getName_zh()="
				+ getName_zh() + ", getName_cn()=" + getName_cn()
				+ ", getSequence()=" + getSequence() 
				+", getDescription()=" + getDescription()
				+ ", getShowflag()="
				+ getShowflag() + ", getLeaf()=" + getLeaf()
				+ ", getWebsite_id()=" + getWebsite_id() + ", getState()="
				+ getState() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + "]";
	}
	
}
