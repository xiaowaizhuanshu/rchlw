  package com.tangs;  
    
  import java.io.IOException;
import java.io.Writer;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.struts2.components.Component;

import com.opensymphony.xwork2.util.ValueStack;
import com.ruyicai.web.service.NewsService;
    
  /** 
   * 分页逻辑Bean 
   * @author tangs 
   */  
  public class PageLogic extends Component {  
	  protected Integer cpageInt;
	  private String cpage;  
	  protected Integer totalInt;
	  private String total;  
      private String url;  
      protected Integer web_idInt;
      private String web_id;  //传入的站点id 
      protected Integer numInt;
      private String num;  //显示条数  
      private String categoryCn;  //查询分类的中文名  
      private String channelCn;  //询分类新闻的频道中文名
      private String categoryId;  //类别id
      private Integer categoryIdInt;  //类别id
      private Integer numint;  //分页开始数
      
      public void setCategoryIdInt(Integer categoryIdInt) {
		this.categoryIdInt = categoryIdInt;
	}

	public String getCpage() {  
          return cpage;  
      }  
    
      public void setCpage(String cpage) {  
          this.cpage = cpage;  
      }  
    
      public String getTotal() {  
          return total;  
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
    
      public String getUrl() {  
          return url;  
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
        
      public void setCpageInt(Integer cpageInt) {
		this.cpageInt = cpageInt;
	}

	public void setTotalInt(Integer totalInt) {
		this.totalInt = totalInt;
	}

	public void setWeb_idInt(Integer web_idInt) {
		this.web_idInt = web_idInt;
	}

	public void setNumInt(Integer numInt) {
		this.numInt = numInt;
	}

	public PageLogic(ValueStack arg0) {  
          super(arg0);  
      }  
    
      @Override  
      public boolean start(Writer writer) { 
    	  if(cpage != null)
              cpageInt = (Integer)findValue(cpage, java.lang.Integer.class);
          if(total != null)
        	  totalInt = (Integer)findValue(total, java.lang.Integer.class);
          if(url != null)
        	  url = (String )findValue(url,java.lang.String.class);
          if(categoryCn != null)
        	  categoryCn = (String )findValue(categoryCn,java.lang.String.class);
          if(categoryId != null)
        	  categoryIdInt = (Integer)findValue(categoryId, java.lang.Integer.class);
          if(web_id != null)
        	  web_id = (String)findValue(web_id, java.lang.Integer.class);
          if(num != null)
        	  numint = (Integer)findValue(num, java.lang.Integer.class);
          boolean result = super.start(writer);  
          try {  
              StringBuilder str = new StringBuilder();  
              boolean isValid = true;  
              if(web_id==null){
            	  web_id="2";
              }
              if(cpage==null){
            	  cpageInt=1;
              }
              if(num==null){
            	  numint=0;
              }
              NewsService newsService = (NewsService)ApplicationContextUtil.ctx.getBean("newsService");
              //Long categoryId,Long websiteId
              int count =  newsService.queryNewsCountById(null, new Long(categoryIdInt), new Long(web_id));
              totalInt = count/20 +(count%20 == 0?0:1);//默认20条
              if (isValid) {  
            	  if(categoryCn.equals("活动专题")){
            		  url ="/rchlw/news/category_activityList.jsp";
            		  str.append("<a href='");  
                      str.append(url+"?cpage="+1+"&begin="+(cpageInt-1)*5);
                      str.append("'><span class='fenye1'>首页</span></a> ");
                          str.append("<a href='");  
                          str.append(url+"?cpage="+(cpageInt-1==0?1:cpageInt-1)+"&begin="+(cpageInt-1==0?0:cpageInt-1)*5);  
                          str.append("'><span class='fenye5'>&nbsp;</span></a> ");
                          totalInt = count/5 +(count%5 == 0?0:1);
                          for(int i=1;i <= totalInt;i++){
                        	  str.append("<a href='");
                        	  str.append(url+"?cpage="+i+"&begin="+5*(i-1));  
                              str.append("'>");
                              if(cpageInt == i){
                            	  str.append("<span class='fenye2_hover'>");
                            	  str.append(i+""); 
                                  str.append("</span></a>");
                              }else if((i+5)==cpageInt||(i-5)==cpageInt){
                            	  	  str.append("<span class='fenye2'>");
                            		  str.append("......."+""); 
                                      str.append("</span></a>");
                              }else if(cpageInt!=null&&(cpageInt-5)<i&&(cpageInt+5)>i){
	                  				str.append("<span class='fenye2'>");
	                  				str.append(i+""); 
	                                str.append("</span></a>");
                  			}
                          }
                          str.append("<a href='");  
                          str.append(url+"?cpage="+(cpageInt+1>totalInt?totalInt:cpageInt+1)+"&begin="+(totalInt-1)*5);  
                          str.append("'>");
                          str.append("<span class='fenye4'>&nbsp;</span></a> ");
                          str.append("<a href='");  
                          str.append(url+"?cpage="+totalInt+"&begin="+(totalInt-1)*5);  
                          str.append("'><span class='fenye1'>尾页</span></a>");  
            	  }else{ 
                	  str.append("<a href='");  
                      str.append(url+"1.html");  
                      str.append("'><span class='fenye1'>首页</span></a> ");
                          str.append("<a href='");  
                          str.append(url+(cpageInt-1==0?1:cpageInt-1)+".html");  
                          str.append("'><span class='fenye5'>&nbsp;</span></a> ");
                          for(int i=1;i <= totalInt;i++){
                        	  str.append("<a href='");
                        	  str.append(url+i+".html");  
                              str.append("'>");
                              if(cpageInt == i){
                            	  str.append("<span class='fenye2_hover'>");
                            	  str.append(i+""); 
                                  str.append("</span></a>");
                              }else if((i+5)==cpageInt||(i-5)==cpageInt){
                            	  	  str.append("<span class='fenye2'>");
                            		  str.append("......."+""); 
                                      str.append("</span></a>");
                              }else if(cpageInt!=null&&(cpageInt-5)<i&&(cpageInt+5)>i){
	                  				str.append("<span class='fenye2'>");
	                  				str.append(i+""); 
	                                str.append("</span></a>");
                  			}
                              
                          }
                          str.append("<a href='");  
                          str.append(url+(cpageInt+1>totalInt?totalInt:cpageInt+1)+".html");  
                          str.append("'>");
                          str.append("<span class='fenye4'>&nbsp;</span></a> ");
                          
                          str.append("<a href='");  
                          str.append(url+totalInt+".html");  
                          str.append("'><span class='fenye1'>尾页</span></a>");  
//                      }  
                  }  
              }  
              writer.write(str.toString());  
                
          } catch (IOException ex) {  
              Logger.getLogger(PageLogic.class.getName()).log(Level.SEVERE, null, ex);  
          }  
          return result;  
      }  
  }  