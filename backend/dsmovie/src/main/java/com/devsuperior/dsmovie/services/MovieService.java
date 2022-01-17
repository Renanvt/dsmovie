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
	
	//Método responsável por mostrar os filmes por paginação
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
