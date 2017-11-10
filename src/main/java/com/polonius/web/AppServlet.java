package com.polonius.web;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class HelloWorld
 */
public class AppServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String name = "";
		
		ServletContext appContext = this.getServletContext();
		HttpSession requestSession = request.getSession();
		
		try {
			
			name = appContext.getAttribute(requestSession.getId() + ":userName").toString();
		}
		catch (NullPointerException e) {
			
			System.out.println("No username for current session.");
		}
		
		request.setAttribute("name", name);
		
		String appPath = this.getServletContext().getRealPath(File.separator);
		request.setAttribute("appPath", appPath);
		
		String requestPath = request.getPathInfo();
		
		if ("".equals(requestPath)) {
			
			request.getRequestDispatcher("/index.jsp").forward(request, response);
		}
		else if (null != requestPath) {
			
			request.getRequestDispatcher(requestPath).forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}