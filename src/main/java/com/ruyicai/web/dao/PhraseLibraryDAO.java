package com.ruyicai.web.dao;

import java.util.List;
import java.util.Map;

import com.ruyicai.web.pojo.PhraseLibrary;

public interface PhraseLibraryDAO {
	/**
	 * 添加词组
	 * @param pl
	 */
	void  insert (PhraseLibrary pl);
	/**
	 * 修改词组信息
	 * @param pl
	 * @return
	 */
	int updatePhraseLibrary(PhraseLibrary pl) ;
	/**
	 * 查询所有的词组
	 * @return
	 */
	List<PhraseLibrary> selectAll();
	/**
	 * f分页查询所有的词组
	 * @return
	 */
	List<PhraseLibrary> selectAllFY(Map map);
	
}
