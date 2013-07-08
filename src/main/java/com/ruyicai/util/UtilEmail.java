
package com.ruyicai.util;
/*   
 * Created on Feb 21, 2005   
 *   
 */   
   
import java.io.UnsupportedEncodingException;
import java.security.Security;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
   
public class UtilEmail {    
   
	private static final String SMTP_HOST_NAME = "smtp.exmail.qq.com";    
    private static final String SMTP_PORT = "25";    
    private static final String emailFromAddress1 = "service1@ruyicai.com";    
    private static final String emailFromPassword1 = "ruyicai1234";    
    private static final String emailFromAddress2 = "service2@ruyicai.com";    
    private static final String emailFromPassword2 = "ruyicai1234";    
    private static final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";    
   
    public static void main(String args[]) throws Exception {    
    	String[] sendTo = {"zhaokailong@ruyicai.com"}; 
        utilSend(sendTo, "如意彩彩票提示您", "<html><body><a target='_blank' href='http://www.baidu.com'>go 百度</a></body></html>");    
    }    
   
    /**
     * 发送邮件接口 testEmail.utilSend(recipients,subject,message)
     * （发送对象）recipients：在调用前先定义一个string数组，再把数组名传进方法里.如：String[] recipients = { "363268116@qq.com" };   
     * （标题）subject："找回密码提示"
     * （内容）message："<html><body><a target='_blank' href='http://www.baidu.com'>go 百度</a></body></html>"
     * @param recipients  发送对象
     * @param subject 标题
     * @param message 内容
     * @throws MessagingException 发送失败抛出异常
     */
    public static void utilSend(String recipients[], String subject, String message) throws MessagingException{
	   Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
       new UtilEmail().sendSSLMessage(recipients, subject, message);    
	   
   }
    public void sendSSLMessage(String recipients[], String subject, String message)    
            throws MessagingException {    
        boolean debug = true;    
   
        Properties props = new Properties();    
        props.put("mail.smtp.host", SMTP_HOST_NAME);    
        props.put("mail.smtp.auth", "true");    
       // props.put("mail.debug", "false");    
        props.put("mail.smtp.port", SMTP_PORT);    
        props.put("mail.smtp.socketFactory.port", SMTP_PORT);    
       // props.put("mail.smtp.socketFactory.class", SSL_FACTORY);    
       // props.put("mail.smtp.socketFactory.fallback", "false");    
        Security.addProvider( new com.sun.net.ssl.internal.ssl.Provider());
        Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {    
            protected PasswordAuthentication getPasswordAuthentication() {
            	   long miao = new Date().getTime();
	         	   int fen = Integer.valueOf(String.valueOf(miao/60000));
	         	   String from = emailFromAddress1;
	         	   String password = emailFromPassword1;
	         	   if(fen%2 == 0){
	         		   from = emailFromAddress2;
	         		   password =emailFromPassword2;
	         	   }
                return new PasswordAuthentication(from, password);    
            }    
        });    
   
      session.setDebug(debug);    
   
        Message msg = new MimeMessage(session); 
       long miao = new Date().getTime();
  	   int fen = Integer.valueOf(String.valueOf(miao/60000));
  	   String from = emailFromAddress1;
  	   if(fen%2 == 0){
  		   from = emailFromAddress2;
  	   }
        InternetAddress addressFrom = new InternetAddress(from);    
        try {
			addressFrom.setPersonal("如意彩");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
        msg.setFrom(addressFrom);    
   
        InternetAddress[] addressTo = new InternetAddress[recipients.length];    
        for (int i = 0; i < recipients.length; i++) {    
            addressTo[i] = new InternetAddress(recipients[i]);    
        }    
        msg.setRecipients(Message.RecipientType.TO, addressTo);    
   
        // Setting the Subject and Content Type    
        msg.setSubject(subject);  
        msg.setContent(message, "text/html;charset=utf-8");    
        Transport.send(msg);    
    }
}
