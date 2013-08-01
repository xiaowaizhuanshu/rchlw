package com.jrt.invokeLot.util;
/**
 * 
 * @author 
 * (C)版权由北京神谷数码科贸有限公司所有
* 创建者：
* 创建日期：
* 修改记录：
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;


public class IHttp {
	private StringBuffer buffer = new StringBuffer();
	public static int CMUNKNOWN = 0;
	public static int CMWAP = 1;
	public static int CMNET = 2;
	public static int conMethord = 0;
	String proxy = "10.0.0.172";

	boolean CMNET_USE_HTTPS = false;
	boolean CMWAP_USE_HTTPS = false;

	/**
	 * Process the type.
	 * 
	 * @param type
	 *            that type
	 */
	private void processType(String type) {
	}

	/**
	 * Process the data one character at a time.
	 * 
	 * @param b
	 *            one byte of data
	 */
	private void process(byte b) {
		buffer.append((char) b);
	}

	/**
	 * Process the data from the array.
	 * 
	 * @param b
	 *            an array of bytes.
	 */
	private void process(byte[] b) {
		for (int i = 0; i < b.length; i++) {
			process(b[i]);
		}
	}

	/**
	 * Add request properties for the configuration, profiles, and locale of
	 * this system.
	 * 
	 * @param con
	 *            current HttpConnection to apply request headers
	 */
	private void setRequestHeaders(HttpURLConnection con) {
		/*
		try {
			
			String conf = System.getProperty("microedition.configuration");
			String prof = System.getProperty("microedition.profiles");
			int space = prof.indexOf(' ');

			if (space != -1) {
				prof = prof.substring(0, space - 1);
			}

			String locale = System.getProperty("microedition.locale");

			String ua = "Profile/" + prof + " Configuration/" + conf;
			con.setRequestProperty("User-Agent", ua);

			if (locale != null) {
				con.setRequestProperty("Content-Language", locale);
				
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		*/
	}

	/**
	 * Post a request with some headers and content to the server and process
	 * the headers and content.
	 * <p>
	 * Connector.open is used to open url and a HttpConnection is returned. The
	 * request method is set to POST and request headers set. A simple command
	 * is written and flushed. The HTTP headers are read and processed. If the
	 * length is available, it is used to read the data in bulk. From the
	 * StreamConnection the InputStream is opened. It is used to read every
	 * character until end of file (-1). If an exception is thrown the
	 * connection and stream is closed.
	 * 
	 * @param url
	 *            the URL to process.
	 */
	// public String postViaHttpConnection(String url,String parameter){
	// int status = 0;
	// HttpConnection con = null;
	// InputStream is = null;
	// OutputStream os = null;
	//
	// try {
	// con = (HttpConnection)Connector.open(url);
	//
	// // Set the request method and headers
	// con.setRequestMethod(HttpConnection.POST);
	// con.setRequestProperty("If-Modified-Since", "29 Oct 1999 19:43:31 GMT");
	// con.setRequestProperty("User-Agent",
	// "Profile/MIDP-1.0 Configuration/CLDC-1.0");
	// con.setRequestProperty("Content-Language", "en-US");
	//
	// // Getting the output stream may flush the headers
	// os = con.openOutputStream();
	// //os.write("LIST games\n".getBytes());
	// if(parameter!=null)
	// os.write(parameter.getBytes());
	// os.flush(); // Optional, openInputStream will flush
	//
	// // Get the status code, causing the connection to be made
	// status = con.getResponseCode();
	//
	// // Any 500 status number (500, 501) means there was a server error
	// if ((status == HttpConnection.HTTP_NOT_IMPLEMENTED) ||
	// (status == HttpConnection.HTTP_VERSION) ||
	// (status == HttpConnection.HTTP_INTERNAL_ERROR) ||
	// (status == HttpConnection.HTTP_GATEWAY_TIMEOUT) ||
	// (status == HttpConnection.HTTP_BAD_GATEWAY)) {
	// System.err.print("WARNING: Server error status [" + status + "] ");
	// System.err.println("returned for url [" + url + "]");
	//
	// if (is != null) {
	// is.close();
	// }
	//
	// if (os != null) {
	// os.close();
	// }
	//
	// if (con != null) {
	// con.close();
	// }
	//
	// return "";
	// }
	//
	// // Only HTTP_OK (200) means the content is returned.
	// if (status != HttpConnection.HTTP_OK) {
	// throw new IOException("Response status not OK [" + status + "]");
	// }
	//
	// // Open the InputStream and get the ContentType
	// is = con.openInputStream();
	//
	// String type = con.getType();
	// processType(type);
	//
	// // Get the length and process the data
	// int len = (int)con.getLength();
	//
	// if (len > 0) {
	// byte[] data = new byte[len];
	// int actual = is.read(data);
	// process(data);
	// } else {
	// int ch;
	//
	// while ((ch = is.read()) != -1) {
	// process((byte)ch);
	// }
	// }
	// }catch (Exception e){
	// e.printStackTrace();
	// } finally {
	// if (is != null) {
	// try {
	// is.close();
	// } catch (IOException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// }
	//
	// if (os != null) {
	// try {
	// os.close();
	// } catch (IOException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// }
	//
	// if (con != null) {
	// try {
	// con.close();
	// } catch (IOException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// }
	// }
	//       
	// return buffer.toString();
	// }

	public synchronized void setConnectionMethord(int newConMethord) {
		if (IHttp.conMethord == IHttp.CMUNKNOWN)
			IHttp.conMethord = newConMethord;
	}

	public synchronized void setRetValue(String newRetValue) {
		if (newRetValue != null && newRetValue.length() > 0)
			IHttp.retValue = newRetValue;
	}

	public static String retValue = "";

	public String getViaHttpConnection(String url) {

		String reValue = "";
		try {
			if (conMethord == CMNET) {
				reValue = getViaHttpConnection_CMNET(url);
			}
			else {
				iHttpAuto_CMNET autoCheckNET = new iHttpAuto_CMNET();
				autoCheckNET.setUrl(url);
				// Thread tNet = new Thread(autoCheckNET);
				// tNet.start();
				autoCheckNET.run();

				// --------------------------------------------------------
				// iHttpAuto_CMWAP autoCheckWAP = new iHttpAuto_CMWAP();
				// autoCheckWAP.setUrl(url);
				// //Thread tWap = new Thread(autoCheckWAP);
				// //tWap.start();
				// autoCheckWAP.run();
				//			   
				// ---------------------------------------------------------

				if (IHttp.conMethord == IHttp.CMUNKNOWN) {
					
				}
				// while(conMethord==CMUNKNOWN){
				// Thread.sleep(300);
				// }
				reValue = retValue;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return reValue;
	}

	/**
	 * Read the HTTP headers and the data using HttpConnection. Check the
	 * response code to insure successful retrieval.
	 * <p>
	 * Connector.open is used to open url and a HttpConnection is returned. The
	 * HTTP headers are read and processed. If the length is available, it is
	 * used to read the data in bulk. From the HttpConnection the InputStream is
	 * opened. It is used to read every character until end of file (-1). If an
	 * exception is thrown the connection and stream is closed.
	 * 
	 * @param url
	 *            the URL to process.
	 */
	public String getViaHttpConnection_CMNET(String strUrl) {
		HttpURLConnection con = null;
		URL url=null;
		try {
			url = new URL(strUrl);
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		InputStream is = null;
		OutputStream os = null;
		String reValue = "";
		buffer = new StringBuffer();
		try {
			if (this.CMNET_USE_HTTPS) {
				reValue = getViaHttpsConnection_CMNET(strUrl);
			} else {
				if (strUrl.startsWith("https://")) {
					strUrl = "http://" + strUrl.substring(8);
				}

				try {
					int status = -1;

					// Open the connection and check for re-directs
					while (true) {
						con = (HttpURLConnection) url.openConnection();
						// Debug = "cmnet";
						// con = (HttpsConnection)Connector.open(url);
						setRequestHeaders(con);

						// SecurityInfo si=con.getSecurityInfo();
						// Certificate c=si.getServerCertificate();
						// String subject =c.getSubject();
						// Get the status code, causing the connection to be
						// made
						status = con.getResponseCode(); 
						/*
						if ((status == HttpConnection.HTTP_TEMP_REDIRECT)
								|| (status == HttpConnection.HTTP_MOVED_TEMP)
								|| (status == HttpConnection.HTTP_MOVED_PERM)) {
						 */
						if ( (status == HttpURLConnection.HTTP_MOVED_TEMP)
								|| (status == HttpURLConnection.HTTP_MOVED_PERM)) {
							// Get the new location and close the connection
							strUrl = con.getHeaderField("location");
							con.disconnect();

						} else {
							break;
						}
					}

					// Any 500 status number (500, 501) means there was a server
					// error
					/*
					if ((status == HttpConnection.HTTP_NOT_IMPLEMENTED)
							|| (status == HttpConnection.HTTP_VERSION)
							|| (status == HttpConnection.HTTP_INTERNAL_ERROR)
							|| (status == HttpConnection.HTTP_GATEWAY_TIMEOUT)
							|| (status == HttpConnection.HTTP_BAD_GATEWAY)) {
					 */
					if ((status == HttpURLConnection.HTTP_NOT_IMPLEMENTED)
							|| (status == HttpURLConnection.HTTP_VERSION)
							|| (status == HttpURLConnection.HTTP_INTERNAL_ERROR)
							|| (status == HttpURLConnection.HTTP_GATEWAY_TIMEOUT)
							|| (status == HttpURLConnection.HTTP_BAD_GATEWAY)) {
						System.err.print("WARNING: Server error status ["
								+ status + "] ");
						System.err.println("returned for url [" + url + "]");

						if (is != null) {
							is.close();
						}

						if (os != null) {
							os.close();
						}

						if (con != null) {
							con.disconnect();
						}

					} else {

						// Only HTTP_OK (200) means the content is returned.
						if (status != HttpURLConnection.HTTP_OK) {
							throw new IOException("Response status not OK ["
									+ status + "]");
						}

						// Get the ContentType
						try {
							String type = con.getContentType();
							
//							logger.debug("content type:"+type);
//							logger.debug("content encoding:"+con.getContentEncoding());
//							logger.debug("response message:"+con.getResponseMessage());
							
							processType(type);
						} catch (Exception e) {
						}

						// open the InputStream
						is = con.getInputStream();
						BufferedReader br = new BufferedReader(new InputStreamReader(is, "utf-8"));
						reValue = br.readLine();
						/*
						buffer.setLength(0);
						// Get the length and process the data
						int len = (int) con.getContentLength();

						if (len > 0) {
							byte[] data = new byte[len];
							int actual = is.read(data);
							process(data);
							logger.debug("......1:"+new String(data));
						} else {
							int ch;
								
							while ((ch = is.read()) != -1) {
								process((byte) ch);
							}
							logger.debug("......2:"+buffer);
						}
						*/
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (is != null) {
						try {
							is.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}

					if (con != null) {
						try {
							con.disconnect();
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
				if (buffer != null && buffer.length()>0)
					reValue = buffer.toString();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return reValue;
	}


	public String getViaHttpsConnection_CMNET(String strUrl) {
		HttpsURLConnection con = null;
		URL url=null;
		try {
			url = new URL(strUrl);
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		InputStream is = null;
		OutputStream os = null;
		String reValue = "";
		buffer = new StringBuffer();

		try {
			if (!this.CMNET_USE_HTTPS) {
				reValue = getViaHttpConnection_CMNET(strUrl);
			} else {
				if (strUrl.startsWith("http://")) {
					strUrl = "https://" + strUrl.substring(7);
				}

				try {
					int status = -1;
					// Open the connection and check for re-directs
					while (true) {
						con = (HttpsURLConnection)url.openConnection();
						// Debug = "cmnet";
						// con = (HttpsConnection)Connector.open(url);
						setRequestHeaders(con);

						// SecurityInfo si=con.getSecurityInfo();
						// Certificate c=si.getServerCertificate();
						// String subject =c.getSubject();
						// Get the status code, causing the connection to be
						// made
						/*
						if ((status == HttpsURLConnection.HTTP_TEMP_REDIRECT)
								|| (status == HttpsURLConnection.HTTP_MOVED_TEMP)
								|| (status == HttpsURLConnection.HTTP_MOVED_PERM)) {
						 */
						status = con.getResponseCode();
						if ((status == HttpsURLConnection.HTTP_MOVED_TEMP)
								|| (status == HttpsURLConnection.HTTP_MOVED_PERM)) {
							// Get the new location and close the connection
							strUrl = con.getHeaderField("location");
							con.disconnect();
						} else {
							break;
						}
					}

					// Any 500 status number (500, 501) means there was a server
					// error
					if ((status == HttpsURLConnection.HTTP_NOT_IMPLEMENTED)
							|| (status == HttpsURLConnection.HTTP_VERSION)
							|| (status == HttpsURLConnection.HTTP_INTERNAL_ERROR)
							|| (status == HttpsURLConnection.HTTP_GATEWAY_TIMEOUT)
							|| (status == HttpsURLConnection.HTTP_BAD_GATEWAY)) {
						System.err.print("WARNING: Server error status ["
								+ status + "] ");
						System.err.println("returned for url [" + url + "]");

						if (is != null) {
							is.close();
						}

						if (os != null) {
							os.close();
						}

						if (con != null) {
							con.disconnect();
						}

					} else {

						// Only HTTP_OK (200) means the content is returned.
						if (status != HttpsURLConnection.HTTP_OK) {
							throw new IOException("Response status not OK ["
									+ status + "]");
						}

						// Get the ContentType
						try {
							String type = con.getContentType();
							processType(type);
						} catch (Exception e) {
						}

						// open the InputStream
						is = con.getInputStream();
						buffer.setLength(0);

						// Get the length and process the data
						int len = (int) con.getContentLength();

						if (len > 0) {
							byte[] data = new byte[len];
							int actual = is.read(data);
							process(data);
						} else {
							int ch;

							while ((ch = is.read()) != -1) {
								process((byte) ch);
							}
						}
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (is != null) {
						try {
							is.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}

					if (con != null) {
						try {
							con.disconnect();
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
				if (buffer != null)
					reValue = buffer.toString();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}

		return reValue;
	}

}
