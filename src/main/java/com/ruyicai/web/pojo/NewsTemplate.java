
package com.ruyicai.web.pojo;

import java.text.SimpleDateFormat;
import java.util.Date;

/** 
 * @classname:
 * NewsTemplate
 * @description
 * 新闻模板实体
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-14 上午10:49:25 
 */

public class NewsTemplate {
	/**
	 * 模版id
	 */
	private Long id;
	/**
	 * 模板文件的真实路径
	 */
	private String code;
	/**
	 * 模版名称
	 */
	private String name;
	/**
	 * 板模地址
	 */
	private String adderss;
	/**
	 * 否是显示
	 */
	private Integer showflag;
	/**
	 * 板模上传时间
	 */
	private String uploadtime;
	/**
	 * 是否使用
	 */
	private Integer status;
	/**
	 * 站点id
	 */
	private Long websiteurl_id;
	/**
	 * 模板类型  -1默认模版 0首页模板 1 频道模板 2 分类模板 3新闻模板 4 定时器模板 5通用模板 6引用模版
	 */
	private Integer type;
	/**
	 * 上传模板时自动保存当前时间
	 */
	public NewsTemplate(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		uploadtime=sdf.format(new Date());
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAdderss() {
		return adderss;
	}
	public void setAdderss(String adderss) {
		this.adderss = adderss;
	}
	public Integer getShowflag() {
		return showflag;
	}
	public void setShowflag(Integer showflag) {
		this.showflag = showflag;
	}
	public String getUploadtime() {
		return uploadtime;
	}
	public void setUploadtime(String uploadtime) {
		this.uploadtime = uploadtime;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	
	public Long getWebsiteurl_id() {
		return websiteurl_id;
	}
	public void setWebsiteurl_id(Long websiteurl_id) {
		this.websiteurl_id = websiteurl_id;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	
}
