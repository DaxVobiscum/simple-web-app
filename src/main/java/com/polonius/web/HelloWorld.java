package com.polonius.web;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class HelloWorld
 */
@WebServlet("/Hello")
public class HelloWorld extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloWorld() {
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
		
		request.getRequestDispatcher("/hello.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
