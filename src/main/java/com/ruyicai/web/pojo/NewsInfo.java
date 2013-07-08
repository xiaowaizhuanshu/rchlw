
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

public class NewsInfo {
	/**
	 * 新闻列表id(主键)
	 */
	private Long id;
	/**
	 * 网站id
	 */
	private Long website_id;
	
	/**
	 * 新闻分类编号
	 */
	private Long category_code;
	/**
	 * 新闻频道id
	 */
	private Long channel_id;
	/**
	 * 文章类型，0为普通文章，1为引用文章。引用文章的内容只有标题和外链地址和图片。
	 */
	private Integer type;
	/**
	 * 支持wap的状态，如果为0，则不支持wap，如果为1则不支持web，如果为2，则两个都支持。
	 */
	private Integer wap_state;
	/**
	 * 新闻标题
	 */
	private String title;
	/**
	 * wap新闻标题
	 */
	private String wap_title;
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
	private Integer top_news;
	/**
	 * 文章图片地址
	 */
	private String pic_name;
	/**
	 * 文章的外链地址，当文章是引用类型的记录时，将以这个地址为列表中标题的链接地址。
	 */
	private String url;
	/**
	 * 新闻的访问路径
	 */
	private String call_url;
	/**
	 * 针对wap的外链，与url字段属性一样
	 */
	private String wap_url;
	/**
	 * 审批状态，0为未审批，1为已审批，2为修改再审。在审批的同时需要触发静态页生成机制。
	 */
	private Integer audit_type;
	/**
	 * 审批者ID
	 */
	private Integer admin_id;
	/**
	 * 编辑者ID
	 */
	private Integer compile_id;
	/**
	 * 使用的模板id
	 */
	private Integer template_id;
	/**
	 * 开奖期号
	 */
	private Long numero;
	/**
	 * 创建时间自动生成
	 */
	public NewsInfo(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		createtime=sdf.format(new Date());
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getCategory_code() {
		return category_code;
	}
	public void setCategory_code(Long category_code) {
		this.category_code = category_code;
	}
	
	public Long getChannel_id() {
		return channel_id;
	}
	public void setChannel_id(Long channel_id) {
		this.channel_id = channel_id;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getWap_state() {
		return wap_state;
	}
	public void setWap_state(Integer wap_state) {
		this.wap_state = wap_state;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWap_title() {
		return wap_title;
	}
	public void setWap_title(String wap_title) {
		this.wap_title = wap_title;
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
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getUpdatetime() {
		return updatetime;
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
	public Integer getTop_news() {
		return top_news;
	}
	public void setTop_news(Integer top_news) {
		this.top_news = top_news;
	}
	public String getPic_name() {
		return pic_name;
	}
	public void setPic_name(String pic_name) {
		this.pic_name = pic_name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getCall_url() {
		String createtime1 = "";
		if(createtime != null && !"".equals(createtime)){
			createtime1 = createtime.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "").replaceAll("\\.", "");
		}
		String call_url2 = "/news/news_"+createtime1+"_"+id+".html";
		if(type==0){
			return call_url2;
		}else{
			return call_url;
		}
	}
	public void setCall_url(String call_url) {
		this.call_url = call_url;
	}
	public String getWap_url() {
		return wap_url;
	}
	public void setWap_url(String wap_url) {
		this.wap_url = wap_url;
	}
	public Integer getAudit_type() {
		return audit_type;
	}
	public void setAudit_type(Integer audit_type) {
		this.audit_type = audit_type;
	}
	public Integer getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(Integer admin_id) {
		this.admin_id = admin_id;
	}
	public Integer getCompile_id() {
		return compile_id;
	}
	public void setCompile_id(Integer compile_id) {
		this.compile_id = compile_id;
	}
	public Integer getTemplate_id() {
		return template_id;
	}
	public void setTemplate_id(Integer template_id) {
		this.template_id = template_id;
	}
	public Long getWebsite_id() {
		return website_id;
	}
	public void setWebsite_id(Long website_id) {
		this.website_id = website_id;
	}
	public Long getNumero() {
		return numero;
	}
	public void setNumero(Long numero) {
		this.numero = numero;
	}
	
	
}
