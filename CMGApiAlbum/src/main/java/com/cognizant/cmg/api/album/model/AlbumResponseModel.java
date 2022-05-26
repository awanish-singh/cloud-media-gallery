package com.cognizant.cmg.api.album.model;

import java.util.List;

public class AlbumResponseModel {
	
	private String title;
	private String description;
	private String createdOn;
	private String userId;
	private List<String> mediaId;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public List<String> getMediaId() {
		return mediaId;
	}
	public void setMediaId(List<String> mediaId) {
		this.mediaId = mediaId;
	}

	
}
