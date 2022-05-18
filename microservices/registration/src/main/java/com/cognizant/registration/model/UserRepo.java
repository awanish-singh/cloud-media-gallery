package com.cognizant.registration.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findByUserName(String userName);

}
