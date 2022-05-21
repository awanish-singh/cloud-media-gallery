package com.cognizant.cmg.api.upload;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CmgApiUploadMediaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmgApiUploadMediaApplication.class, args);
	}

}
