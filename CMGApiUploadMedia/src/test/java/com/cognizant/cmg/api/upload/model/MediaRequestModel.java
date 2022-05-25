package com.cognizant.cmg.api.upload.model;

import javax.validation.constraints.NotNull;

public class MediaRequestModel {

	@NotNull(message = "url cannot be null")
	private String url;
	
	@NotNull(message = "alt cannot be null")
	private String alt;
	
	private String type;
	
	@NotNull(message= "userId cannot be null")
	private String userId;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getAlt() {
		return alt;
	}

	public void setAlt(String alt) {
		this.alt = alt;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
