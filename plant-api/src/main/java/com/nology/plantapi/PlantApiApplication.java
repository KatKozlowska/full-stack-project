package com.nology.plantapi;

import com.nology.plantapi.entities.PlantEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@SpringBootApplication
@EntityScan("com.nology.plantapi")
@EnableJpaRepositories("com.nology.plantapi")
public class PlantApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlantApiApplication.class, args);
	}



}
