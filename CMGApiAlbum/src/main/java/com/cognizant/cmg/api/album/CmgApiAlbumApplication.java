package com.cognizant.cmg.api.album;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CmgApiAlbumApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmgApiAlbumApplication.class, args);
	}

}
