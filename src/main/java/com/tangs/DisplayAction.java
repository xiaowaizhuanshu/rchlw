   /* 
    * To change this template, choose Tools | Templates 
    * and open the template in the editor. 
    */  
     
   package com.tangs;  
     
   import com.opensymphony.xwork2.ActionSupport;
     
   /** 
    * 
    * @author tangs 
    */  
   public class DisplayAction extends ActionSupport {  
       private String cpage;  
       private String total;  
       private String url;  
     
       public String list() {  
             
           //Get data from server  
           //...  
           //这里没有做任何逻辑，直接跳转到了页面  
    	   
           return SUCCESS;  
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
     
       public void setTotal(String total) {  
           this.total = total;  
       }  
     
       public String getUrl() {  
           return url;  
       }  
     
       public void setUrl(String url) {  
           this.url = url;  
       }  
         
         
   }  
