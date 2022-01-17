package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

	/*Chave primária composta, precisa criar uma classe auxiliar*/
	//private Movie movie;
	//private User user;
	
	@EmbeddedId//mapeamento para ID composto
	private ScorePK id = new ScorePK(); //Chave composta
	private Double value;
	
	public Score() {
		
	}
	//Esse método vai servir pra eu informar um filme e associar o filme com o scorePK
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
}
