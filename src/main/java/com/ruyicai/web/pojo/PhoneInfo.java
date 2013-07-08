package com.ruyicai.web.pojo;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @className 
 * PhoneInfo
 * @description
 * 手机信息实体
 * @author 
 * 章俊虎
 * @date：
 * 2011-4-7 下午01:19:23
 */
public class PhoneInfo {

	/**
	 * 手机列表id(主键)
	 */
	private Long id;
	/**
	 * 手机号
	 */
	private Long phoneCode;
	/**
	 *邮箱号
	 */
	private String email;
	/**
	 * 业务字段
	 */
	private Integer rules;
	/**
	 * 接收时间
	 */
	private String acceptTime;
	/**
	 * 手机列表描述
	 */
	private String remark;
	
	/**
	 * 时间毫秒数
	 */
	private String checked;
	
	public PhoneInfo(){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		acceptTime=sdf.format(new Date());
	}
	
	public String getChecked() {
		return checked;
	}

	public void setChecked(String checked) {
		this.checked = checked;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getPhoneCode() {
		return phoneCode;
	}
	public void setPhoneCode(Long phoneCode) {
		this.phoneCode = phoneCode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getRules() {
		return rules;
	}
	public void setRules(Integer rules) {
		this.rules = rules;
	}
	public String getAcceptTime() {
		return acceptTime;
	}
	public void setAcceptTime(String acceptTime) {
		this.acceptTime = acceptTime;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
}
