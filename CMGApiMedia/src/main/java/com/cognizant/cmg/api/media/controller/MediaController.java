package com.cognizant.cmg.api.media.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.cmg.api.media.data.MediaEntity;
import com.cognizant.cmg.api.media.data.MediaRepo;
import com.cognizant.cmg.api.media.model.MediaResponseModel;

@RestController
@RequestMapping("/media")
public class MediaController {
	
	MediaRepo mediaRepo;
	
	@Autowired
	public MediaController(MediaRepo mediaRepo) {
		// TODO Auto-generated constructor stub
		this.mediaRepo = mediaRepo;
	}
	
	@GetMapping("status/check")
	public String check() {
		return "Media Check Working...";
	}
	
	@GetMapping("{userId}/files")
	public ResponseEntity<MediaResponseModel> getMedia(@PathVariable String userId) {
		
		MediaEntity mediaEntity = mediaRepo.findByUserId(userId);
		MediaResponseModel mediaResponseModel = new ModelMapper().map(mediaEntity, MediaResponseModel.class);
		
		return ResponseEntity.status(HttpStatus.OK).body(mediaResponseModel);
	}

}
