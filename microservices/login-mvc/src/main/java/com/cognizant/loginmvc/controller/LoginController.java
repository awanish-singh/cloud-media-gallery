package com.cognizant.loginmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.loginmvc.model.User;
import com.cognizant.loginmvc.model.UserRepo;

@RestController
public class LoginController {
	
	@Autowired
	private UserRepo userRepo;

	@RequestMapping("/login")
	public ResponseEntity<User> login(@RequestParam("userName") String userName, @RequestParam("password") String password) {
		
		User user = null;
		try {
			user = userRepo.findByUserName(userName);
		}catch(Exception e) {
			System.out.println("User not found!!!");
		}
		
		if(user == null) {
			return new ResponseEntity<User> (user, HttpStatus.NOT_FOUND);
		}
				
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}
