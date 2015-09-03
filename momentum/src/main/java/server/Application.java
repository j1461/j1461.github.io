package server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import client.common.SiteAggregator;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		
		new SiteAggregator().foo();
		
		SpringApplication.run(Application.class, args);

	}
}