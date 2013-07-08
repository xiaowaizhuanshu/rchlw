package com.ruyicai.web.dao.impl;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.SqlMapClientTemplate;

import com.ruyicai.web.dao.PhraseLibraryDAO;
import com.ruyicai.web.pojo.PhraseLibrary;

public class PhraseLibraryDAOImpl implements PhraseLibraryDAO  {
	private SqlMapClientTemplate sqlMapClientTemplate;

	public void setSqlMapClientTemplate(
			SqlMapClientTemplate sqlMapClientTemplate) {
		this.sqlMapClientTemplate = sqlMapClientTemplate;
	}

	@Override
	public void insert(PhraseLibrary pl) {
		this.sqlMapClientTemplate.insert("PhraseLibrary.add",pl);
		
	}

	@Override
	public int updatePhraseLibrary(PhraseLibrary pl) {
		return this.sqlMapClientTemplate.update("PhraseLibrary.update",pl);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<PhraseLibrary> selectAll() {
		// TODO Auto-generated method stub
		return this.sqlMapClientTemplate.queryForList("PhraseLibrary.selectAll");
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<PhraseLibrary> selectAllFY(Map map) {
		// TODO Auto-generated method stub
		return this.sqlMapClientTemplate.queryForList("PhraseLibrary.select",map);
	}

}
