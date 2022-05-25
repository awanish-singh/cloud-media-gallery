package com.cognizant.cmg.api.upload.controller;

import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.cmg.api.upload.data.MediaRepo;
import com.cognizant.cmg.api.upload.data.UploadMediaEntity;
import com.cognizant.cmg.api.upload.model.MediaRequestModel;
import com.cognizant.cmg.api.upload.shared.MediaDto;

@RestController
@RequestMapping("/media")
public class MediaController {
	
	MediaRepo mediaRepo;
	
	@Autowired
	public MediaController(MediaRepo mediaRepo) {
		this.mediaRepo = mediaRepo;
	}
	
	@GetMapping("/status/check")
	public String check() {
		return "Upload Media Working...";
	}
	
	@PostMapping("/upload/{userId}")
	public ResponseEntity<String> uploadMedia(@PathVariable String userId, @RequestBody MediaRequestModel mediaRequestModel){
		
		MediaDto mediaDto = new ModelMapper().map(mediaRequestModel, MediaDto.class);
		mediaDto.setMediaId(UUID.randomUUID().toString());
		
		UploadMediaEntity uploadMediaEntity = new ModelMapper().map(mediaDto, UploadMediaEntity.class);
		mediaRepo.save(uploadMediaEntity);
		
		return ResponseEntity.ok("Uploaded Successfully");
	}

}
