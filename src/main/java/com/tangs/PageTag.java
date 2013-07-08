  package com.tangs;  

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.components.Component;
import org.apache.struts2.views.jsp.ComponentTagSupport;

import com.opensymphony.xwork2.util.ValueStack;
  /** 
   * 分页标签 
   * @author tangs 
   */  
  public class PageTag extends ComponentTagSupport {  
      private String cpage;  //当前页  
      private String total;  //总页数  
      private String url;  //请求地址  
      private String web_id;  //传入的站点id 
      private String num;  //显示条数  
      private String categoryCn;  //查询分类的中文名  
      private String channelCn;  //询分类新闻的频道中文名
      private String categoryId;  //询分类新闻的频道id
    
      public void setCpage(String cpage) {  
          this.cpage = cpage;  
      }  
    
      public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public void setTotal(String total) {  
          this.total = total;  
      }  
    
      public void setUrl(String url) {  
          this.url = url;  
      }  
    
      public void setWeb_id(String web_id) {
		this.web_id = web_id;
	}

	public void setNum(String num) {
		this.num = num;
	}

	public void setCategoryCn(String categoryCn) {
		this.categoryCn = categoryCn;
	}

	public void setChannelCn(String channelCn) {
		this.channelCn = channelCn;
	}

	@Override  
      public Component getBean(ValueStack arg0, HttpServletRequest arg1, HttpServletResponse arg2) {  
          return new PageLogic(arg0); //返回Pages Component，分页的逻辑处理都在这个Component中  
      }  
    
      //获得参数  
      protected void populateParams() {  
          super.populateParams();  
            
          PageLogic pages = (PageLogic)component;  
          pages.setCpage(cpage);  
          pages.setTotal(total);  
          pages.setUrl(url); 
          pages.setCategoryCn(categoryCn);
          pages.setWeb_id(web_id);
          pages.setChannelCn(channelCn);
          pages.setNum(num);
          pages.setCategoryId(categoryId);
      }  
  }  