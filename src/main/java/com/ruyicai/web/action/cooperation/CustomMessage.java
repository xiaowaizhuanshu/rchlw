package com.ruyicai.web.action.cooperation;

/**
 * 客户留言的实体类
 * @author 李媛媛
 *
 */

public class CustomMessage {
	private Long customId;
	private int auditing;//审核
	private String time;//时间
	private int type;//做维护用
	private String questionType;// 客户问题类型
	private String content;//反馈内容
	private String email;//客户邮箱
	private String mobile;//客户手机号码
	private String ip;//客户ip
	
	public CustomMessage (){
		super();
	}
	
	public Long getCustomId() {
		return customId;
	}
	public void setCustomId(Long customId) {
		this.customId = customId;
	}
	public int getAuditing() {
		return auditing;
	}
	public void setAuditing(int auditing) {
		this.auditing = auditing;
	}
	
	public String getTime() {
		
		return time;
	}
	public void setTime(String time) {
		this.time = time;
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
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	
	public static CustomMessage getCustom(Long id, Integer auditing, String time, Integer type, String questionType,String content,String email,String mobile,String ip){
		CustomMessage custom = new CustomMessage();
		custom.setCustomId(id);
		custom.setAuditing(auditing);
		custom.setTime(time);
		custom.setType(type);
		custom.setQuestionType(questionType);
		custom.setContent(content);
		custom.setEmail(email.equals("null")||email.length()==0?"":email);
		custom.setMobile(mobile.equals("null")||mobile.length()==0?"":mobile);
		custom.setIp(ip);
		return custom;
	}
	
	
	public String toString() {
		return "CustomMessage [id=" + customId + ",auditing=" + auditing + ",time=" + time 
		+ ",type=" + type + ",questionType=" + questionType + ", content=" + content + ", email="
				+ email + ", mobile=" + mobile + ", ip=" + ip +"]";
	}
	
}
