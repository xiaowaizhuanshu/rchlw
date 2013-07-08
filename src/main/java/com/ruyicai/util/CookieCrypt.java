package com.ruyicai.util;

/*
 * @(#)CookieCrypt.java
 * 
 * Create Version:	1.0.0
 * Author:			Cobra Pang
 * Create Date:		2007-12-17
 * 
 * Copyright (c) 2006 UTStarcom(China) Corporation. All Right Reserved.
 */
 
import java.io.IOException;
import java.security.SecureRandom;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;
 
 
/**
 * CookieCrypt
 * @author Cobra Pang
 * @version	1.0.0	2007-12-17
 */
public class CookieCrypt {
	// Crypt Key
	private static byte[] desKey="cbh5hg67hgf".getBytes();
	 static{

	        System.setProperty("jmagick.systemclassloader","no");
	    }  

	public byte[] getDesKey() {
		return desKey;
	}

	public void setDesKey(byte[] desKey) {
		this.desKey = desKey;
	}

	/**
	 * DES Encoder
	 * @param plainText
	 * @return 
	 * @throws Exception
	 */
	public byte[] desEncrypt(byte[] plainText) throws Exception {   
		SecureRandom sr = new SecureRandom();   
		byte rawKeyData[] = desKey;
		
		DESKeySpec dks = new DESKeySpec(rawKeyData);   
		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");   
		SecretKey key = keyFactory.generateSecret(dks);   
		Cipher cipher = Cipher.getInstance("DES");   
		cipher.init(Cipher.ENCRYPT_MODE,   key,   sr);   
		
		byte data[] = plainText;   
		byte encryptedData[] = cipher.doFinal(data);   
		return encryptedData;   
	}
	
	/**
	 * DES Decoder
	 * @param encryptText
	 * @return
	 * @throws Exception
	 */
	public static byte[] desDecrypt(byte[] encryptText) throws Exception {
	       
        SecureRandom sr = new SecureRandom();
        byte rawKeyData[] = desKey;
        DESKeySpec dks = new DESKeySpec(rawKeyData);
        
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        SecretKey key = keyFactory.generateSecret(dks);
        
        Cipher cipher = Cipher.getInstance("DES");
        
        cipher.init(Cipher.DECRYPT_MODE, key, sr);
        
        byte encryptedData[] = encryptText;
        byte decryptedData[] = cipher.doFinal(encryptedData);
        return decryptedData;
    }
	
	/**
	 * Cookie Encoder
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public String encrypt(String input) throws Exception {
		return base64Encode(desEncrypt(input.getBytes()));
	}
	
	/**
	 * Cookie Decoder
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public static String decrypt(String input) throws Exception {
		byte[] result = base64Decode(input);
		return new String(desDecrypt(result) , "utf-8");
	}
	/**
	 * Base64 Encode
	 * @param s
	 * @return
	 */
	public static String base64Encode(byte[] s) {
		if (s == null) return null;
		BASE64Encoder b = new sun.misc.BASE64Encoder();
		return b.encode(s);
	}
	
	/**
	 * Base64 Decode
	 * @param s
	 * @return
	 * @throws IOException
	 */
	public static byte[] base64Decode(String s) throws IOException {
		if (s == null) return null;
		BASE64Decoder  decoder = new BASE64Decoder();
		byte[] b = decoder.decodeBuffer(s);
		return b;		
	}
} 