package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

//implementa um endpoint
@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;
	@PutMapping //configura que a peração vai salvar de forma indepontente (put), salvar mais de uma vez tem o mesmo efeito que salvar de uma vez só
	public MovieDTO saveScore(@RequestBody ScoreDTO dto){ //Terá o corpo de uma requisição como parâmetro
		//RequestBody garante que o corpo vai ser pego do JSON e convertido para o ScoreDTO
		MovieDTO movieDTO = service.saveScore(dto);
		return movieDTO;
	}
}
