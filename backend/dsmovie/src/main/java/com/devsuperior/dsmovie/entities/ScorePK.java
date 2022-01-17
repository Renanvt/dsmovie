package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable //Indica que é uma chave composta
public class ScorePK implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne //Configuração pra chave estrangeira
	@JoinColumn(name = "movie_id")
	private Movie movie; //chave estrangeira
	
	@ManyToOne //Configuração pra chave estrangeira
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePK() {
		
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
