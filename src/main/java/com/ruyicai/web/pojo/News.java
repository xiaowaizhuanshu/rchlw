
package com.ruyicai.web.pojo;

import java.text.SimpleDateFormat;
import java.util.Date;

/** 
 * @classname:
 * NewsInfo
 * @description
 * 新闻实体
 * @author 
 * 蓝生 
 * @date：
 * 2011-1-13 下午04:22:01 
 */

public class News {
	/**
	 * 新闻列表id(主键)
	 */
	private Long id;
	/**
	 * 新闻分类编号
	 */
	private Long categoryCode;
	/**
	 * 新闻频道id
	 */
	private Long channelId;
	/**
	 * 文章类型，1为普通文章，0为引用文章。引用文章的内容只有标题和外链地址和图片。
	 */
	private Integer type;
	/**
	 * 支持wap的状态，如果为0，则不支持wap，如果为1则不支持web，如果为2，则两个都支持。
	 */
	private Integer wapState;
	/**
	 * 新闻标题
	 */
	private String title;
	/**
	 * wap新闻标题
	 */
	private String wapTitle;
	/**
	 * 新闻内容
	 */
	private String content;
	/**
	 * 排序
	 */
	private Integer sequence;
	/**
	 * 新闻创建时间
	 */
	private String createtime;
	//页面使用
	private String createtimeFm;
	private String updatetimeFM;
	private String updatetimeFML;
	/**
	 * 新闻更新时间
	 */
	private String updatetime;
	/**
	 * 作者
	 */
	private String compile;
	/**
	 * 新闻状态，0删除 1正常
	 */
	private Integer status;
	/**
	 * 新闻作者，默认与编辑同名，但有时转载文章需注明作者。
	 */
	private String author;
	/**
	 * 新闻关键字，用于做相关新闻的查询条件
	 */
	private String keyword;
	/**
	 * 是否为头条，默认为0,是头条为1
	 */
	private Integer topNews;
	/**
	 * 文章图片地址
	 */
	private String picName;
	/**
	 * 文章的外链地址，当文章是引用类型的记录时，将以这个地址为列表中标题的链接地址。
	 */
	private String url;
	/**
	 * 新闻的访问路径
	 */
	private String callUrl;
	/**
	 * 针对wap的外链，与url字段属性一样
	 */
	private String wapUrl;
	/**
	 * 审批状态，0为未审批，1为已审批，2为修改再审。在审批的同时需要触发静态页生成机制。
	 */
	private Integer auditType;
	/**
	 * 审批者ID
	 */
	private Long adminId;
	/**
	 * 编辑者ID
	 */
	private Integer compileId;
	/**
	 * 使用的模板id
	 */
	private Integer templateId;
	/**
	 * 站点ID
	 */
	private Long websiteId;
	
	/**
	 * 开奖期号
	 */
	private Long numero;
	/**
	 * 新闻的点击数
	 */
	private Long clickCount;
	/**
	 * 新闻的别名
	 */
	private String title_as;

	/**
	 * 标题颜色  0-黑色（默认） 1-红色      2-蓝色
 	 */
	private String  title_color;
	
	/**
	 * 创建时间自动生成
	 */
	public News(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		createtime=sdf.format(new Date());
	}
	public String  getTitle_color() {
		return title_color;
	}
	public void setTitle_color(String title_color) {
		this.title_color = title_color;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getCategoryCode() {
		return categoryCode;
	}
	public void setCategoryCode(Long categoryCode) {
		this.categoryCode = categoryCode;
	}
	public Long getChannelId() {
		return channelId;
	}
	public void setChannelId(Long channelId) {
		this.channelId = channelId;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getWapState() {
		return wapState;
	}
	public void setWapState(Integer wapState) {
		this.wapState = wapState;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWapTitle() {
		return wapTitle;
	}
	public void setWapTitle(String wapTitle) {
		this.wapTitle = wapTitle;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}
	public String getCreatetime() {
		
		String createtimeFom = "";
		if(createtime != null && createtime.length() >19){
			createtimeFom = createtime.substring(0, 19);
		}
		return createtimeFom;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	
	public String getCreatetimeFm() {
		String createtimeFom = "";
		if(createtime != null && createtime.length() >10){
			createtimeFom = createtime.substring(0, 10);
		}
		return createtimeFom;
	}
	public String getUpdatetimeFM() {
		String createtimeFom = "";
		if(updatetime != null && updatetime.length() >10 && !(updatetime.indexOf("0000-00-00")>-1)){
			createtimeFom = updatetime.substring(0, 10);
		}else if(createtime != null && createtime.length() >10){
			createtimeFom = createtime.substring(0, 10);
		}
		
		return createtimeFom;
	}
	public void setUpdatetimeFM(String updatetimeFM) {
		this.updatetimeFM = updatetimeFM;
	}
	public String getUpdatetimeFML() {
		String createtimeFom = "";
		if(updatetime != null && updatetime.length() >10 && !(updatetime.indexOf("0000-00-00")>-1)){
			createtimeFom = updatetime.substring(5, 10);
		}else if(createtime != null && createtime.length() >10){
			createtimeFom = createtime.substring(5, 10);
		}
		
		return createtimeFom;
	}
	public void setUpdatetimeFML(String updatetimeFML) {
		this.updatetimeFML = updatetimeFML;
	}
	public void setCreatetimeFm(String createtimeFm) {
		this.createtimeFm = createtimeFm;
	}
	public String getUpdatetime() {
		String updatetimeFom = updatetime;
		if(updatetime != null && updatetime.length() >19 && !(updatetime.indexOf("0000-00-00")>-1)){
			updatetimeFom = updatetime.substring(0, 19);
		}else if(updatetime != null && updatetime.length() == 19){
			updatetimeFom = updatetime;
		}else {
			updatetimeFom = createtime;
		}
		return updatetimeFom;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public String getCompile() {
		return compile;
	}
	public void setCompile(String compile) {
		this.compile = compile;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public Integer getTopNews() {
		return topNews;
	}
	public void setTopNews(Integer topNews) {
		this.topNews = topNews;
	}
	public String getPicName() {
		return picName;
	}
	public void setPicName(String picName) {
		this.picName = picName;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCallUrl() {
		return callUrl;
	}
	public void setCallUrl(String callUrl) {
		this.callUrl = callUrl;
	}
	public String getWapUrl() {
		return wapUrl;
	}
	public void setWapUrl(String wapUrl) {
		this.wapUrl = wapUrl;
	}
	public Integer getAuditType() {
		return auditType;
	}
	public void setAuditType(Integer auditType) {
		this.auditType = auditType;
	}
	public Long getAdminId() {
		return adminId;
	}
	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}
	public Integer getCompileId() {
		return compileId;
	}
	public void setCompileId(Integer compileId) {
		this.compileId = compileId;
	}
	public Integer getTemplateId() {
		return templateId;
	}
	public void setTemplateId(Integer templateId) {
		this.templateId = templateId;
	}
	public Long getWebsiteId() {
		return websiteId;
	}
	public void setWebsiteId(Long websiteId) {
		this.websiteId = websiteId;
	}
	public Long getNumero() {
		return numero;
	}
	public void setNumero(Long numero) {
		this.numero = numero;
	}
	public String getTitle_as() {
		return title_as;
	}
	public void setTitle_as(String title_as) {
		this.title_as = title_as;
	}
	public Long getClickCount() {
		return clickCount;
	}
	public void setClickCount(Long clickCount) {
		this.clickCount = clickCount;
	}
	
}
