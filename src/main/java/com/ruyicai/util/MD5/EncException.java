package com.ruyicai.util.MD5;

public class EncException extends Exception {
	private int id; // a unique id
	  private String classname; // the name of the class
	  private String method; // the name of the method
	  private String message; // a detailed message 
	  private EncException previous=null; // the exception which was caught
	  private String separator = "\n"; // line separator
	  
	  public String getMessage() {
		return message;
	}

	public EncException(int id, String classname, String method, 
	    String message, EncException previous) {
	    this.id        = id;
	    this.classname = classname;
	    this.method    = method;
	    this.message   = message;
	    this.previous  = previous;
	  }  
	    
	  public String traceBack() {
	    return traceBack("\n");
	  }  

	  public String traceBack(String sep) {
	    this.separator = sep;
	    int level = 0;
	    EncException e = this;
	    String text = line("Calling sequence (top to bottom)");
	    while (e != null) {
	      level++;
	      text += line("--level " + level + "--------------------------------------");
	      text += line("Class/Method: " + e.classname + "/" + e.method);
	      text += line("Id          : " + e.id);
	      text += line("Message     : " + e.message);
	      e = e.previous;
	    }  
	    return text;
	  }  

	  private String line(String s) {
	    return s + separator;
	  }  

}
