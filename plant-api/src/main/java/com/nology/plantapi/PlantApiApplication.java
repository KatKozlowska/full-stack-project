package com.nology.plantapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.nology.plantapi")
public class PlantApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlantApiApplication.class, args);
	}

}
