package com.ruyicai.web.pojo;

import com.ruyicai.util.URLEncoder;


/** 
 * @classname:
 * NewsCategory
 * @description
 * 新闻分类实体
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-12 下午01:12:52 
 */
public class NewsCategory {

	/**
	 * 闻新类型编号
	 */
	private Long code;
	/**
	 * 闻新类型父编号
	 */
	private Long pcode;
	/**
	 * 闻新类型英文名
	 */
	private String name_zh;
	/**
	 * 闻新类型中文名
	 */
	private String name_cn;
	private String name_cnEncode;
	/**
	 * 排序
	 */
	private Integer sequence;
	/**
	 * 是否显示
	 */
	private Integer showflag;
	/**
	 * 是否子级
	 */
	private Integer leaf;
	/**
	 * 频道对应的站点ID
	 */
	protected Long website_id;
	/**
	 * 分类的访问路径
	 */
	protected String url;
	/**
	 * 删除状态
	 */
	private Integer state;
	/**
	 * 分类描述
	 */
	private String description;
	/*
	 * ruyicai_channel_xwzx用
	 */
	private String nameca;
	
	private String namezg;
	
	
	 
	public String getNamezg() {
		String namezg_copy=name_cn;
		return namezg_copy;
	}
	public void setNamezg(String namezg) {
		this.namezg = namezg;
	}
	public String getNameca() {
		String nameca_copy=name_zh;
		return nameca_copy;
	}
	public void setNameca(String nameca) {
		this.nameca = nameca;
	}
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getCode() {
		return code;
	}
	public void setCode(Long code) {
		this.code = code;
	}
	public Long getPcode() {
		return pcode;
	}
	public void setPcode(Long pcode) {
		this.pcode = pcode;
	}
	public void setPcode(String pcode) {
		this.pcode = Long.parseLong(pcode);
	}
	public String getName_zh() {
		return name_zh;
	}
	public void setName_zh(String name_zh) {
		this.name_zh = name_zh;
	}
	public String getName_cn() {
		return name_cn;
	}
	public void setName_cn(String name_cn) {
		this.name_cn = name_cn;
	}
	
	public String getName_cnEncode() {
		String name_cnEncodeol ="";
		if(name_cn!=null){
			name_cnEncodeol = URLEncoder.encode(name_cn);
		}
		return name_cnEncodeol;
	}
	public void setName_cnEncode(String name_cnEncode) {
		this.name_cnEncode = name_cnEncode;
	}
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}
	public Integer getShowflag() {
		return showflag;
	}
	public void setShowflag(Integer showflag) {
		this.showflag = showflag;
	}
	public Integer getLeaf() {
		return leaf;
	}
	public void setLeaf(Integer leaf) {
		this.leaf = leaf;
	}
	public Long getWebsite_id() {
		return website_id;
	}
	public void setWebsite_id(Long website_id) {
		this.website_id = website_id;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	
	
}