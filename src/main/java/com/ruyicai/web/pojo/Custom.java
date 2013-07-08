package com.ruyicai.web.pojo;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @classname: Custom
 * @description 客户实体
 * @author 李媛媛
 */
public class Custom {
	/**
	 * 客户id自增长数字主键
	 */
	private Long customId;
	
	/**
	 * 做维护用为0,1
	 */
	private int type;
	
	/**
	 * 客户问题类型
	 */
	private String questionType;
	/**
	 * 反馈内容
	 */
	private String content;
	/**
	 * 客户邮箱
	 */
	private String email;
	/**
	 * 客户手机号码
	 */
	private String mobile;
	/**
	 * 审核类型 如：用数字1、2代表是否通过审核
	 */
	private int auditing;

	/**
	 * 发表留言的时间（登录时自动保存当前时间）
	 */
	private String time;
	
	/**
	 * 客户的ip地址
	 */
	private String ip;

	public Custom() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		time = sdf.format(new Date());
	}

	public Long getCustomId() {
		return customId;
	}

	public void setCustomId(Long customId) {
		this.customId = customId;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}
	
	public String getQuestionType() {
		return questionType;
	}

	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public int getAuditing() {
		return auditing;
	}

	public void setAuditing(int auditing) {
		this.auditing = auditing;
	}

	public String getTime() {
		String createtimeFom = "";
		if(time != null){
			createtimeFom = time.substring(0, 19);
		}
		return createtimeFom;
	}

	public void setTime(String time) {
		this.time = time;
	}
	

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}
	public String toString() {
		return "{id=" + customId + ",auditing=" + auditing + ",time=" + time 
		+ ",type=" + type + ",questionType=" + questionType + ", content=" + content +
		", email="+ email + ", mobile=" + mobile + ", ip=" + ip +"}";
	}
	
}
