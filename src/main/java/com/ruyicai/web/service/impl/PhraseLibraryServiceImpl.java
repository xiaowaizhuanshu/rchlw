package com.ruyicai.web.service.impl;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.ruyicai.web.dao.PhraseLibraryDAO;
import com.ruyicai.web.model.PhraseLibraryMD;
import com.ruyicai.web.pojo.PhraseLibrary;
import com.ruyicai.web.service.PhraseLibraryService;
public class PhraseLibraryServiceImpl implements PhraseLibraryService{
	private Logger log = Logger.getLogger(PhraseLibraryServiceImpl.class);
	@SuppressWarnings("unchecked")
	public  static Map<String, String> phraseLibrasy = new HashMap();
	private PhraseLibraryDAO phrase = null;
	public PhraseLibraryDAO getPhrase() {
		return phrase;
	}
	public void setPhrase(PhraseLibraryDAO phrase) {
		this.phrase = phrase;
	}

	@Override
	public String add(PhraseLibrary pl) {
		try{
		this.phrase.insert(pl);
		log.info("添加词组成功！");
		return "success";
		}catch(Exception e){
			e.getStackTrace();
			log.info("添加词组失败！");
			return "fail";
		}
		 
	}

	@Override
	public String updatePhraseLibrary(PhraseLibrary pl) {
		Integer cont = this.phrase.updatePhraseLibrary(pl);
		if(cont>0){
			log.info("修改成功！");
			return "success";
		}else{
			log.info("修改失败！");
			return "fail";
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<PhraseLibrary> selectAll() {
	List list = this.phrase.selectAll();
	if(list.size()>0){
		 for(int i = 0;i<list.size();i++){
			 PhraseLibrary pls = (PhraseLibrary) list.get(i);
			 phraseLibrasy.put(pls.getPhrase(),pls.getPhraseUrl());
		 }
	}
		return list;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<PhraseLibrary> selectAllFY(PhraseLibraryMD plMd) {
		Map map = new HashMap();
		map.put("nowPage", plMd.getNowPage());
		map.put("limitCount", plMd.getLimitCount());
		map.put("state", plMd.getState());
		List list = this.phrase.selectAllFY(map);
		List lists = this.phrase.selectAll();
		if(lists.size()>0){
			 for(int i = 0;i<lists.size();i++){
				 PhraseLibrary pls = (PhraseLibrary) lists.get(i);
				 phraseLibrasy.put(pls.getPhrase(),pls.getPhraseUrl());
			 }
		}
		return list;
	}

}
