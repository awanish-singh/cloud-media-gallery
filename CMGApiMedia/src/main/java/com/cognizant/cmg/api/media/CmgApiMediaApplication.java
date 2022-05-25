package com.cognizant.cmg.api.media;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CmgApiMediaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmgApiMediaApplication.class, args);
	}

}
