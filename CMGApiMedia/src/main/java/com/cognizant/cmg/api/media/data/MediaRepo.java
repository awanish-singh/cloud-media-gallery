package com.cognizant.cmg.api.media.data;

import org.springframework.data.repository.CrudRepository;

public interface MediaRepo extends CrudRepository<MediaEntity, Long>{
	
	MediaEntity findByUserId(String userId);

}
