package com.cognizant.cmg.api.album.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.cmg.api.album.model.AlbumResponseModel;

@RestController
@RequestMapping(path="/album")
public class AlbumController {
	
	@GetMapping("status/check")
	public String check() {
		return "Album Working...";
	}
	
	@GetMapping("/{userId}/add/{albumId}")
	public ResponseEntity<String> addToAlbum(@PathVariable String userId, @PathVariable String albumId){
		
//		albumsRepo.update(model);
		
		return ResponseEntity.status(HttpStatus.OK).body("Added to album ");
	}
	
	@GetMapping("/{userId}/{albumId}")
	public ResponseEntity<AlbumResponseModel> getAlbum(@PathVariable String userId, @PathVariable String albumId){
		
		AlbumResponseModel responseModel = new AlbumResponseModel();
		
		return ResponseEntity.status(HttpStatus.FOUND).body(responseModel);
	}
}
