package com.ruyicai.util.MD5;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import sun.misc.BASE64Encoder;
//本方法md5后base64编码
public class PaySign {
	public static String EncoderByMd5(String str) throws NoSuchAlgorithmException, UnsupportedEncodingException{
        //确定计算方法
        MessageDigest md5=MessageDigest.getInstance("MD5");
        BASE64Encoder base64en = new BASE64Encoder();
        //加密后的字符串
        String newstr=base64en.encode(md5.digest(str.getBytes("utf-8")));
        return newstr;
    }
	//本方法md5后作为16进制输出
	public static String Md5(String str) throws NoSuchAlgorithmException, UnsupportedEncodingException{
        //确定计算方法
        MessageDigest md5=MessageDigest.getInstance("MD5");
        //加密后的字符串
        String newstr=byteToHex(md5.digest(str.getBytes("utf-8")));
        return newstr;
    } 
	public  String sign(String dataString,String key) throws EncException{
		String src;
		try {
			src = EncoderByMd5(dataString);
		} catch (NoSuchAlgorithmException e) {
			throw new EncException(1,"PaySign","sign","无这样的签名算法",null);
		} catch (UnsupportedEncodingException e) {
			throw new EncException(1,"PaySign","sign","不支持的编码方式",null);
		}
		PayEncrypt pe=new PayEncrypt();
		return pe.encryptMode(key,src);
	}
	public boolean verify(String dataString, String signString,String key) throws EncException{
		String destsrc=sign(dataString,key);
		if(destsrc.equals(signString)) return true;
		else return false;
	}
	//转换成16进制字符串
    public static String byteToHex(byte[] b) {
    	String hs="";
        String stmp="";

        for (int n=0;n<b.length;n++) {
            stmp=(java.lang.Integer.toHexString(b[n] & 0XFF));
            if (stmp.length()==1) hs=hs+"0"+stmp;
            else hs=hs+stmp;
            //if (n<b.length-1)  hs=hs+":";
        }
        return hs.toUpperCase();
    }
}
