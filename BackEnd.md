# Tópicos

[Security Config](#security-config)

[Entidades e seed do banco](#entidades-e-seed-do-banco)

[Busca de Filmes](#busca-de-filmes)

[Salvar Avaliação](#salvar-avaliação)

[Validação no Postgress local](#validação-no-postgres-local)

[Implantação Heroku](#implantacao-heroku)

[Terminal Heroku](#terminal-heroku)

# Security Config

Essa configuração permite que o meu back-end que ta hospedado em um servidor possa ser acessado por um frontend que está hospedado em outro servidor

```java
package com.devsuperior.dsmovie.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private Environment env;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}
		
		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeRequests().anyRequest().permitAll();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}

```

1 - CTRL + SHIFT + O para importar tudo
2. Escolhe o que não tem a palavra reactive
3. Escolhe o springframework
4. Escolhe o que não tem a palavra reactive

# Entidades e Seed do Banco

No java quando usa o JPA, a chave primária tem que ser apenas 1 atributo
**COMMIT**: *Domain model,database seed*

Configurar banco h2

1. Coloca na pasta resources/aplication.properties
```java
spring.profiles.active=test

spring.jpa.open-in-view=false #Biblioteca de mapeamento de objeto relacional só vai funcionar na camada de serviço pra baixo
```

1. cria um arquivo na pasta resources/application-test.properties
```config
# Dados de conexão com o banco H2
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

# Configuração do cliente web do banco H2
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Configuração para mostrar o SQL no console
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

3. Faz o mapemanto objeto relacionando com o Java Persistence


4. Faz o mapeamento para a chave estrangeira
![ChaveEstrangeira](img/chave_estrangeira.png)

5. Implementa o serializable que converte a classe em bytes para poder ser trafegado na rede

6. Acessa localhost:8080/h2-console
  Muda a configuração JDBC URL para jdbc:h2:mem:testdb


7. Criar o seed do banco, cria o arquivo import.sql em resources

```sql
INSERT INTO tb_user(email) VALUES ('maria@gmail.com');
INSERT INTO tb_user(email) VALUES ('joao@gmail.com');
INSERT INTO tb_user(email) VALUES ('ana@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucia@gmail.com');
INSERT INTO tb_user(email) VALUES ('joaquim@gmail.com');

INSERT INTO tb_movie(score, count, title, image) VALUES (4.5, 2, 'The Witcher', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (3.3, 3, 'Venom: Tempo de Carnificina', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'O Espetacular Homem-Aranha 2: A Ameaça de Electro', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Matrix Resurrections', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Shang-Chi e a Lenda dos Dez Anéis', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Django Livre', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Titanic', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'O Lobo de Wall Street', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Rogue One: Uma História Star Wars', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Star Wars: A Guerra dos Clones', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uK15I3sGd8AudO9z6J6vi0HH1UU.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Star Wars: Episódio I - A Ameaça Fantasma', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/36LnijfQCOC89rCMOhn2OINXROI.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Vingadores: Ultimato', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Thor', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Cisne Negro', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hqh5O4KssfJWI62HGAgrjHXbxhD.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'O Silêncio dos Inocentes', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Clube da Luta', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZkgoQYus5vegHoetLkCJzb17zJ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Guerra Mundial Z', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/31VpBgUX5O4Z3dn5ZbX8HLqoXH3.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Harry Potter e as Relíquias da Morte - Parte 1', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vcrgU0KaNj5mKUCIQSUdiQwTE9y.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Harry Potter e a Pedra Filosofal', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Alice no País das Maravilhas', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qNdlZgz9yoSJ8f0YxQWfKGPoVV.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Animais Fantásticos e Onde Habitam', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'A Teoria de Tudo', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/kq2MHrRfH6RTfkvyDEmYLmGHE6U.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'O Livro de Boba Fett', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'O Último Duelo', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4LrL40XecjGLRpX5I2gzMTUt04l.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Interestelar', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Contato', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yFkUPqBuUnbhYbQL8VFpTrAT9za.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Duna', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg');
INSERT INTO tb_movie(score, count, title, image) VALUES (0, 0, 'Aquaman', 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2cUsDz4TzFYHrKktT1bKHHQ7Cgm.jpg');

INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(movie_id, user_id, value) VALUES (2, 3, 4.0);

```

# Busca de Filmes

Padrão camadas adotado
![PadrãoCamadas](img/padrao_camadas.png)

O controlador rest vai ser um objeto especial responsável por receber requisição e encaminhar pro sistema mais embaixo
A camada de serviço é responsável por camadas de negócio, transação
A camada de acesso a dados é responsável por realizar operações únicas com o banco de dados. Tendo um método no serviço para orquestrar as operações de negócio


**COMMIT**: *Find movies*

1. Criar repository
 Objeto da camada de acesso a dados
 ![Repository](img/repository.png)
 Terá operações pra salvar, buscar, deletar, etc
 ```java
 //Objeto responsável por acessar filmes no banco de dados, deleta, salva, atualiza, etc
  public interface MovieRepository extends JpaRepository<Movie, Long> {

  }
  ```
2. Criar DTO
 A classe DTO é simples e não é monitorado pela JPA
 ```java
 package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

public class MovieDTO {

	private Long id;
	private String title;
	private Double score;
	private Integer count;
	private String image;
	
	public MovieDTO() {
		
	}

	public MovieDTO(Long id, String title, Double score, Integer count, String image) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
	}
	
	//Copia os dados da entidade para o DTO
	public MovieDTO(Movie movie) {
		id = movie.getId();
		title = movie.getTitle();
		score = movie.getScore();
		count = movie.getCount();
		image = movie.getImage();
	}

	....Geters and Seters
```

3. Criar service
  Responsável por realizar a transação de buscar os filmes
```java
package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service //Notation que registra o movieService como componente do sistema
public class MovieService {
	

	//Composição de componentes
	//	private MovieRepository repository = new MovieRepository();
	@Autowired //Instancia a dependencia com o gerenciador de dependencia do framework
	private MovieRepository repository;
	
	@Transactional(readOnly = true) //Garante que o método vai resolver tudo que for da JPA de transação nessa camada de serviço
	public Page<MovieDTO> findAll(Pageable pageable) {
		//O retorno da consulta ao banco de dados vai ser uma lista de movie da entidade
		Page<Movie> result = repository.findAll(pageable); 
		//Converte uma página de movie para DTO
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}

	//Método pra buscar um único filme
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		//findById retorna um objeto optional, para poder acessar o objeto movie dentro do optional coloque .get
		Movie result = repository.findById(id).get(); 
	    MovieDTO dto = new MovieDTO(result); //converte oque era entidade movie para DTOMovie
		return dto;
	}
}

```

4. Criar controller

```java
package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;

//implementa um endpoint
@RestController
@RequestMapping(value = "/movies")
public class MovieController {

	@Autowired
	private MovieService service;
	
	//Pageable configura que vai ser uma resposta paginada
	@GetMapping //Configura que o método vai responder pelo método Get do http
	public Page<MovieDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	//Endpoint para retornar filmes por ID
	@GetMapping(value = "/{id}") //Configura que o método vai responder pelo método Get do http
	public MovieDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}

```

# Salvar Avaliação

**COMMIT**:*save score*

## Lógica:
1. Informar email, id do filme e valor da avaliação (1 a 5).

2. Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.

3. Salvar a avaliação do usuário para o dado filme.

4. Recalcular a avaliação média do filme e salvar no banco de dados.

![SalvarAvaliação](img/salvar_avaliacao.png)

```java
 Corpo da requisição
{
    "movieId": 1,
    "email": "rodrigo@gmail.com",
    "score":5
}
```
# Validação no Postgres Local

**COMMIT**: *First homolog*

1. Criar três perfis de projeto: test, dev, prod
2. Criar o system.properties para configuração do java
3. Gerar script SQL no perfil dev
  Cria o banco de dados dsmovie
4. Testar projeto no banco Postgres local

O perfil dev é um perfil para homologação, testar o projeto no banco de dados postgres local
o perfil prod vai ser utilizado quando for rodar o projeto na nuvem (heroku)

# Implantacao Heroku

1- Criar app no Heroku
  https://www.heroku.com/
  create new app
2- Provisionar banco Postgres
    resources - heroku postgres - plano gratuito
3- Definir variável APP_PROFILE=prod
  setings -> reveaw config vars -> add -> APP_PROFILE   prod
4- Conectar ao banco via pgAdmin
5- Criar seed do banco
 pegar o arquivo createsql e colocar nas tabelas do serve criado


Estrutura da url do banco de dados do postgres do heroku

postgres://exwwkqhbwhgpeo:73c69d030806e4a42c7cd868d4c0954c06f191a5141290e37b8e007adf6c3bf8@ec2-3-227-15-75.compute-1.amazonaws.com:5432/d80om7rs4qcd7g


postgres://
exwwkqhbwhgpeo = nome do usuário
:
73c69d030806e4a42c7cd868d4c0954c06f191a5141290e37b8e007adf6c3bf8  = senha do usuário
@
ec2-3-227-15-75.compute-1.amazonaws.com  = host onde ta hospedado o banco de dados
:
5432  = porta
/
d80om7rs4qcd7g  = nome da base de dados


# confgurando no pgadmin
1. Servers -> create Servers
2. Conecction - altera as configurações
3. Advanced -> db restriction = {nome da base de dados}

# Terminal Heroku

heroku -v
heroku login
heroku git:remote -a <nome-do-app>
git remote -v
git subtree push --prefix backend heroku main

verificar se está associado
git remote -v