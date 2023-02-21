package com.company.smoothie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableJpaRepositories
@EnableWebMvc
public class SmoothieApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmoothieApplication.class, args);
	}

}
