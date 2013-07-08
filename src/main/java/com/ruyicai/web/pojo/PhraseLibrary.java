package com.ruyicai.web.pojo;
/**
 * 词组库
 * 主要用于新闻页面
 * @author xiaona
 *
 */
public class PhraseLibrary {
	private Long id ;
	/**
	 * 需要加链接的词组
	 */
	private String phrase;
	/**
	 * 加上链接后的词组
	 */
	private String phraseUrl;
	/**
	 * 词组的状态 1：使用 2：停用
	 */
	private Integer state = 1; 
	
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPhrase() {
		return phrase;
	}
	public void setPhrase(String phrase) {
		this.phrase = phrase;
	}
	public String getPhraseUrl() {
		return phraseUrl;
	}
	public void setPhraseUrl(String phraseUrl) {
		this.phraseUrl = phraseUrl;
	}

}
