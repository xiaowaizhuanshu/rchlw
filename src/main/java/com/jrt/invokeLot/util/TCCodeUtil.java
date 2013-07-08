package com.jrt.invokeLot.util;

import org.apache.log4j.Logger;

public class TCCodeUtil {
	private static final Logger logger=Logger.getLogger(TCCodeUtil.class);
	
	
	/**
	 * 得到排列三注码返回玩法
	 * @param betcode
	 * @return
	 */
	public static String getPLSMethod(String betcode){ 
		String gameMethod = "";
		String [] array =betcode.split("\\|");
		if(array[0].equals("1")){
			gameMethod="直选";			
		}else if(array[0].equals("6")){
			gameMethod= "组选";			
		}else if(array[0].equals("06")){
			gameMethod= "组三单式";			
		}else if(array[0].equals("S1")){
			gameMethod = "直选和值";			
		}else if(array[0].equals("S9")){
			gameMethod="组选和值";			
		}else if(array[0].equals("S3")){
			gameMethod= "组三和值";			
		}else if(array[0].equals("S6")){
			gameMethod="组六和值";			
		}else if(array[0].equals("F3")){
			gameMethod= "组三包号";			
		}else if(array[0].equals("F6")){
			gameMethod="组六包号";			
		}
		return gameMethod;
	  }
	
	/**
	 * 得到大乐透的注码--返回玩法
	 * @param betCode
	 * @return
	 */
	public static String getDLTGameMethod(String betCode){
		String gameMethod = "";
		if(betCode.indexOf("-")>-1){
			Object [] arraryObj =betCode.split("\\-");
			if(arraryObj[0].toString().indexOf("$")>-1){
				gameMethod="胆拖投注";
			}else{
				String array = ((String) arraryObj[0]).replaceAll(" ", ""); 
				String array1 = ((String) arraryObj[1]).replaceAll(" ", "").replace(";", ""); 
				if(array.length()==10 && array1.length()==4){
					gameMethod="单式投注";
				}else {
					gameMethod="复式投注";
				}
			}
		}else{
			gameMethod="十二选二";
		}
		return gameMethod;
	}
	
	/**
	 * 体彩注码解析返回注码
	 * @param betcode
	 * @return
	 */
   public static String getBetcode(String lotNo,String betcode){
	   StringBuffer sbf =  new StringBuffer();
	   if(betcode.indexOf(";")>-1){
		   String [] array = betcode.split("\\;");
		   if(lotNo.equals("T01002")){
			   for(int i=0;i<array.length;i++){
				   String arr[]=array[i].split("\\|");
				   sbf.append("注码：");
				   sbf.append(arr[1]+"<br/>");
			   }
			   
			}else if(lotNo.trim().equals("T01001")){
				if(betcode.indexOf("$")>-1){
					//胆拖解析注码
				   String dt[] = betcode.split("\\-");
				   String dt1[] = dt[0].split("\\$");
				   sbf.append("前区胆码:" + dt1[0].replace(" ", "")+"<br/>前区拖码:"+dt1[1].replace(" ", "")+" ");
				   String dt2[] = dt[1].split("\\$");
				   sbf.append("<br/>后区胆码:" + dt2[0].replace(" ", "")+"<br/>后区拖码:"+dt2[1].replace(" ", "")+" ");
				}else{
					for(int i=0;i<array.length;i++){
						sbf.append("注码：");
						sbf.append(array[i]+"<br/>");
					}
				}
			}
			 
	    }else{
	    	
	          if(lotNo.equals("T01002")){
	        	  sbf.append("注码：");
	        	  sbf.append(getPLSBetcode(betcode));
   		      }else if(lotNo.equals("T01001")){	
   		    	if(betcode.indexOf("$")>-1){
					//胆拖解析注码
				   String dt[] = betcode.split("\\-");
				   String dt1[] = dt[0].split("\\$");
				   sbf.append("前区胆码:" + dt1[0].replace(" ", "")+"<br/>前区拖码:"+dt1[1].replace(" ", "")+" ");
				   String dt2[] = dt[1].split("\\$");
				   sbf.append("<br/>后区胆码:" + dt2[0].replace(" ", "")+"<br/>后区拖码:"+dt2[1].replace(" ", "")+" ");
				}else{
   		    	  sbf.append("注码：");
				  sbf.append(betcode);
				}
			  }
	    }
	  
	  return sbf.toString();
   }
   
   /**
    * 账户明细时显示明细内容
    * @param betCode
    * @return
    */
   public static String getDetailBetcode(String lotNo,String betcode){
	   if(betcode.indexOf("_")>-1){
		   String arr[] = betcode.split("\\_");
		   return getBetcode(lotNo,arr[1]);
	   }
	   
	   return getBetcode(lotNo,betcode);
   }
   
 /**
  * 解析排列三的注码
  * @param betcode
  * @return
  */
  public static String getPLSBetcode(String betcode){
	  if(betcode==null||betcode.equals("")){
		  return "";
	  }else{
		  String array[]=betcode.split("\\|");
		  return array[1];
	  }
	}
  

	/**
	 * 排三、超级大乐透所有注码解析
	 * @param betCode
	 * @param lotno
	 * @return
	 */
    public String getCodeString(String betcode ,String lotno){
		StringBuffer sbf = new StringBuffer();	
		if(betcode.indexOf("_")>-1){
		   String code[] = betcode.split("\\_");
		   if(lotno.equals("T01002")){//排列三的注码解析
			   
			   //当为单式多注时注码分析1|1,5,8;1|1,3,6
			   if(betcode.indexOf(";")>-1){
				  String arr[] = code[1].split("\\;"); 
				  sbf.append("直选:");				  
				  for(int i=0;i<arr.length;i++){
					  String [] array =arr[i].split("\\|");
					  sbf.append(array[1].replace(",", "") +" ");
				  }
			   }else{
				   sbf.append(getPL3(code[1],lotno));
			   }
			   
		   }else if(lotno.equals("T01001")){//大乐透的注码解析
			   if(betcode.indexOf("_")>-1){
				  String dlt[] = betcode.split("\\_");
				   if(dlt[1].indexOf("-")>-1){
					   if(dlt[1].indexOf("$")>-1){
						   //胆拖解析注码
						   sbf.append("胆拖投注:");
						   String dt[] = dlt[1].split("\\-");
						   String dt1[] = dt[0].split("\\$");
						   sbf.append("前区胆码:" + dt1[0].replace(" ", "")+" 前区拖码:"+dt1[1].replace(" ", "")+" ");
						   String dt2[] = dt[1].split("\\$");
						   sbf.append("后区胆码:" + dt2[0].replace(" ", "")+" 后区拖码:"+dt2[1].replace(" ", "")+" ");
						   logger.info("胆拖解析注码:" + sbf);
						   
					   }else{
						  
						  if(dlt[1].indexOf(";")>-1){
							  String d[] = dlt[1].replace(" ", "").split("\\;");
							  sbf.append("单式:");
							  for(int i=0;i<d.length;i++){
								  sbf.append(d[i] + " "); 
							  }
						  }else{
							  String c[] = dlt[1].replace(" ", "").split("\\-");
							  if(c[0].length()==10 && c[1].length()==4){
								  sbf.append("单式:"+dlt[1].replace(" ", ""));
							  }else{
								  sbf.append("复式:"+dlt[1].replace(" ", ""));
							  }
						  }
					   }
					   
				   }else{
					   sbf.append("十二选二:"+dlt[1].replace(" ", ""));
				   }
					
		     }
		   }
		}
		return sbf.toString();
	} 
    
    /**
     * 3d注码解析
     * @param betcode
     * @param lotno
     * @return
     */
    public String getPL3(String betcode,String lotno){
       StringBuffer sbf = new StringBuffer();
	   String [] array =betcode.split("\\|");
	   if(array[0].equals("1")){
		    sbf.append("直选:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("6")){
			sbf.append("组选:" + array[1].replace(",", "")+" ");
		}else if(array[0].equals("S1")){
			sbf.append("直选和值:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("S9")){
			sbf.append("组选和值:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("S3")){
			sbf.append("组三和值:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("S6")){
			sbf.append("组六和值:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("F3")){
			sbf.append("组三包号:" + array[1].replace(",", "") +" ");
		}else if(array[0].equals("F6")){
			sbf.append("组六包号:" + array[1].replace(",", "") +" ");
		}
	   return sbf.toString();
    }
}
