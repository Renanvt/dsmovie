package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

//Objeto responsável por acessar filmes no banco de dados, deleta, salva, atualiza, etc
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
