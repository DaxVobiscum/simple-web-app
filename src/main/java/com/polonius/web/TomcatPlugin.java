package com.polonius.web;

import javax.management.MBeanServer;
import javax.management.MBeanServerFactory;
import javax.management.ObjectName;

import org.apache.catalina.Engine;
import org.apache.catalina.Host;
import org.apache.catalina.Service;
import org.apache.catalina.core.StandardServer;

public class TomcatPlugin {

	public static String getAppBase() {
		
		String appBase = null;
		
		try {
			
			MBeanServer mBeanServer = MBeanServerFactory.findMBeanServer(null).get(0);
			ObjectName name = new ObjectName("Catalina", "type", "Server");
			StandardServer server = (StandardServer) mBeanServer.getAttribute(name, "managedResource");
			Service service = server.findService("Catalina");
			Engine engine = (Engine) service.getContainer();
			Host host = (Host) engine.findChild(engine.getDefaultHost());
			
			appBase = host.getAppBase();
		}
		catch (Exception e) {
			
			System.out.println(e.toString());
		}
		
		return appBase;
	}
}
