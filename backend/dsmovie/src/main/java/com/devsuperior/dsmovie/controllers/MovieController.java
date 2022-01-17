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
