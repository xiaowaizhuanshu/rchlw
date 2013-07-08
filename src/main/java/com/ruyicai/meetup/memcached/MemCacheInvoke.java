package com.ruyicai.meetup.memcached;

import java.util.ResourceBundle;

/**
* Created by IntelliJ IDEA.
* User: liuzhy
* Date: 2010-12-3
* Time: 16:43:36
*/
public class MemCacheInvoke {
    public static MemcachedClient mcc = new MemcachedClient();
    private static ResourceBundle rbint = ResourceBundle.getBundle("ruyicai") ;
    private static final String serversUrl = rbint.getString("memCacheServerUrl");
    static{

       // 设置缓存服务器列表，当使用分布式缓存的时，可以指定多个缓存服务器。这里应该设置为多个不同的服务，我这里将两个服务设置为一样的，大家不要向我学习，呵呵。
        String[] servers =serversUrl.split(",");

        // 设置服务器权重
        Integer[] weights = {3, 2};

        // 创建一个Socked连接池实例
        SockIOPool pool = SockIOPool.getInstance();
		 
	    // 设置服务器信息
		pool.setServers( servers );
		pool.setWeights( weights );
		
		// 设置初始连接数、最小和最大连接数以及最大处理时间
		pool.setInitConn( 5 );
		pool.setMinConn( 5 );
		pool.setMaxConn( 250 );
		pool.setMaxIdle( 1000 * 60 * 60 * 6 );
		
		// 设置主线程的睡眠时间
		pool.setMaintSleep( 30 );
		
		// 设置TCP的参数，连接超时等
		pool.setNagle( false );
		pool.setSocketTO( 3000 );//设置读取超时为3秒
		pool.setSocketConnectTO( 0 );//0表示不设置连接超时
		
		// 初始化连接池
		pool.initialize();
    }

}
