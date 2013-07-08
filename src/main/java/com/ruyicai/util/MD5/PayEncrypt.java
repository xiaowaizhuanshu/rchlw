package com.ruyicai.util.MD5;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import sun.misc.BASE64Decoder;


public class PayEncrypt {
private  final String Algorithm = "DESede"; //定义 加密算法,可用 DES,DESede,Blowfish
	private void PayEncrypt(){
		//添加新安全算法,如果用JCE就要把它添加进去
        Security.addProvider(new com.sun.crypto.provider.SunJCE());
	}

    public  String encryptMode(String key,String src)throws EncException{
    	try {
			byte[] destbyte=encryptMode(key.getBytes("utf-8"), src.getBytes("utf-8"));
			BASE64Encoder base64en = new BASE64Encoder();
			return base64en.encode(destbyte);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new EncException(1,"PayEncrypt","encryptMode","加密错误",null);
		}
		
    }    
    public  String encryptMode1(String key,String src)throws EncException{
    	try {
			byte[] destbyte=encryptMode(key.getBytes("utf-8"), src.getBytes("utf-8"));
			return byte2O(destbyte);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new EncException(1,"PayEncrypt","encryptMode","加密错误",null);
		}
    }
    public  String decryptMode(String key,String src)throws EncException{
    	BASE64Decoder decoder = new BASE64Decoder(); 
    	try {
			byte[] srcbyte=decoder.decodeBuffer(src);
			byte[] destbyte=decryptMode(key.getBytes("utf-8"), srcbyte);
			return new String(destbyte);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			throw new EncException(1,"PayEncrypt","encryptMode","解密错误",null);
		}
    }
    //keybyte为加密密钥，长度为24字节
    //src为被加密的数据缓冲区（源）
    public  byte[] encryptMode(byte[] keybyte, byte[] src) {
       try {
            //生成密钥
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);

            //加密
            Cipher c1 = Cipher.getInstance(Algorithm);
            c1.init(Cipher.ENCRYPT_MODE, deskey);
            return c1.doFinal(src);
        } catch (java.security.NoSuchAlgorithmException e1) {
            //e1.printStackTrace();
        } catch (javax.crypto.NoSuchPaddingException e2) {
           // e2.printStackTrace();
        } catch (java.lang.Exception e3) {
           // e3.printStackTrace();
        }
        return null;
    }

    //keybyte为加密密钥，长度为24字节
    //src为加密后的缓冲区
    public  byte[] decryptMode(byte[] keybyte, byte[] src) {      
	try {
            //生成密钥
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);

            //解密
            Cipher c1 = Cipher.getInstance(Algorithm);
            c1.init(Cipher.DECRYPT_MODE, deskey);
            return c1.doFinal(src);
        } catch (java.security.NoSuchAlgorithmException e1) {
          //  e1.printStackTrace();
        } catch (javax.crypto.NoSuchPaddingException e2) {
          //  e2.printStackTrace();
        } catch (java.lang.Exception e3) {
          //  e3.printStackTrace();
        }
        return null;
    }

    //转换成十六进制字符串
    public  String byte2hex(byte[] b) {
        String hs="";
        String stmp="";

        for (int n=0;n<b.length;n++) {
            stmp=(java.lang.Integer.toHexString(b[n] & 0XFF));
            if (stmp.length()==1) hs=hs+"0"+stmp;
            else hs=hs+stmp;
            if (n<b.length-1)  hs=hs+":";
        }
        return hs.toUpperCase();
    }
  //转换成数字字符串
    public  String byte2O(byte[] b) {
        String hs="";
        String stmp="";

        for (int n=0;n<6;n++) {
           stmp=String.valueOf((256+b[n])%10);	
           hs=hs+stmp;
        }
        return hs.toUpperCase();
    }
}
