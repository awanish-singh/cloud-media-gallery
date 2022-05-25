package com.cognizant.cmg.api.users.model;

import java.util.List;

public class UserResponseModel {

	private String userId;
	private String firstName;
	private String lastName;
	private String username;
	private String email;
	private List<MediaResponseModel> media;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<MediaResponseModel> getMedia() {
		return media;
	}

	public void setMedia(List<MediaResponseModel> media) {
		this.media = media;
	}
	

}
