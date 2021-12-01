package br.com.impacta.apiquiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.impacta.apiquiz.model.Pergunta;

@SpringBootApplication
public class ApiQuizApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiQuizApplication.class, args);
	}
	
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Pergunta.class);
    }

}
