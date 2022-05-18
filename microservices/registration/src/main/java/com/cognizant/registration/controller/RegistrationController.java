package com.cognizant.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.registration.model.User;
import com.cognizant.registration.model.UserRepo;

@RestController
public class RegistrationController {

	@Autowired
	UserRepo userRepo;

	@SuppressWarnings("unused")
	@PostMapping(value = "/register")
	
	public ResponseEntity<User> registerUser(@RequestParam String name, @RequestParam String userName,
			@RequestParam String password) {

		User user = new User();
		user.setName(name);
		user.setUserName(userName);
		user.setPassword(password);

		System.out.println(name + userName + password);

		user = userRepo.save(user);

		System.out.println(user.getId());

		if (user == null) {
			return new ResponseEntity<User>(user, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
