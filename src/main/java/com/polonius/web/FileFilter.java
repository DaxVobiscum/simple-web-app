package com.polonius.web;

import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

/**
 * Servlet Filter implementation class FileFilter
 */
@WebFilter("/*")
public class FileFilter implements Filter {

	private static final String FILE_FILTER_RX = "^.*\\.\\w*?$";
	
    /**
     * Default constructor. 
     */
    public FileFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		System.out.println("FileFilter - doFilter");
		
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		
		Pattern fileFilter = Pattern.compile(FILE_FILTER_RX);

		String contextPath = httpRequest.getContextPath();
		String requestPath = httpRequest.getRequestURI();
		
		String resourcePath = requestPath.substring(contextPath.length());
		
		if (fileFilter.matcher(resourcePath).matches()) {
			
			// pass the request along the filter chain
			chain.doFilter(request, response);
		}
		else {
			
			// forward to AppServlet and index.jsp
			request.getRequestDispatcher("/index").forward(request, response);
		}
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
