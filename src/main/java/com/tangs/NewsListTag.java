
package com.tangs;
/** 
 * @classname:
 *
 * @description
 *
 * @author 
 * 蓝生 
 * @date：
 * 2011-5-31 下午02:14:18 
 */

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.JspException;

import org.apache.struts2.components.Component;
import org.apache.struts2.views.jsp.ContextBeanTag;

import com.opensymphony.xwork2.util.ValueStack;

// Referenced classes of package org.apache.struts2.views.jsp:
//            ContextBeanTag

public class NewsListTag extends ContextBeanTag
{

    public NewsListTag()
    {
    }

    public Component getBean(ValueStack stack, HttpServletRequest req, HttpServletResponse res)
    {
        return new NewsListLogic(stack);
    }

    protected void populateParams()
    {
        super.populateParams();
        NewsListLogic tag = (NewsListLogic)getComponent();
        tag.setStatus(statusAttr);
        tag.setValue(value);
        tag.setBegin(begin);
        tag.setEnd(end);
        tag.setStep(step);
        tag.setWeb_id(web_id);
        tag.setNum(num);
        tag.setNewsId(newsId);
        tag.setCategoryCn(categoryCn);
        tag.setChannelCn(channelCn);
        tag.setCategoryExpress(categoryExpress);
        tag.setIstopNews(istopNews);
        tag.setChannelId(channelId);
        tag.setCategoryId(categoryId);
        tag.setChannelExpress(channelExpress);
        tag.setPcodeId(pcodeId);
    }

    public void setStatus(String status)
    {
        statusAttr = status;
    }
    public void setCategoryCn(String categoryCn)
    {
        this.categoryCn = categoryCn;
    }

    public void setValue(String value)
    {
        this.value = value;
    }

    public void setBegin(String begin)
    {
        this.begin = begin;
    }

    public void setEnd(String end)
    {
        this.end = end;
    }

    public void setStep(String step)
    {
        this.step = step;
    }
    public void setWeb_id(String web_id)
    {
    	this.web_id = web_id;
    }
    public void setNum(String  num){
    	
    	this.num = num;
    }

    public void setIstopNews(String istopNews) {
		this.istopNews = istopNews;
	}

    public void setNewsId(String  newsId){
    	
    	this.newsId = newsId;
    }


	public void setCategoryExpress(String categoryExpress) {
		this.categoryExpress = categoryExpress;
	}
	public void setChannelExpress(String channelExpress) {
		this.channelExpress = channelExpress;
	}

	public void setChannelCn(String channelCn) {
		this.channelCn = channelCn;
	}
	public void setPcodeId(String pcodeId) {
		this.pcodeId = pcodeId;
	}

	public void setChannelId(String channelId) {
		this.channelId = channelId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public int doEndTag()
        throws JspException
    {
        component = null;
        return 6;
    }

    public int doAfterBody()
        throws JspException
    {
        boolean again = component.end(pageContext.getOut(), getBody());
        if(again)
            return 2;
        if(bodyContent != null)
            try
            {
                bodyContent.writeOut(bodyContent.getEnclosingWriter());
            }
            catch(Exception e)
            {
                throw new JspException(e.getMessage());
            }
        return 0;
    }

    private static final long serialVersionUID = -1827978135193581901L;
    protected String statusAttr;
    protected String value;
    protected String begin;
    protected String end;
    protected String step;
    protected String web_id;
    protected String  num;
    protected String  newsId;
    protected String categoryCn;
    protected String channelCn;
    protected String categoryExpress;
    protected String channelExpress;
    protected String istopNews;
    protected String channelId;
    protected String categoryId;
    protected String pcodeId;
	
	
}
